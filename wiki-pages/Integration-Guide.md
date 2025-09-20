# 🔗 Integration Guide

This guide provides practical examples and patterns for integrating the Zero-AI-Trace Framework into various platforms, applications, and development workflows.

## Platform-Specific Integrations

### OpenAI API (ChatGPT)

#### Basic Integration

```javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ZERO_AI_TRACE_PROMPT = `Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: "I cannot verify this," "I do not have access to that information," or "My knowledge base does not contain that." Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include "based on observed patterns." If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style.`;

async function chatWithFramework(userMessage) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: ZERO_AI_TRACE_PROMPT,
      },
      {
        role: 'user',
        content: userMessage,
      },
    ],
    temperature: 0.7,
  });

  return completion.choices[0].message.content;
}

// Usage
const response = await chatWithFramework(
  'How do I optimize my website for speed?'
);
console.log(response);
```

#### Advanced OpenAI Integration with Validation

```javascript
class ZeroAITraceClient {
  constructor(apiKey) {
    this.openai = new OpenAI({ apiKey });
    this.systemPrompt = ZERO_AI_TRACE_PROMPT;
  }

  async chat(userMessage, options = {}) {
    const messages = [
      { role: 'system', content: this.systemPrompt },
      { role: 'user', content: userMessage },
    ];

    // Add domain-specific context if provided
    if (options.domain) {
      messages.splice(1, 0, {
        role: 'system',
        content: this.getDomainContext(options.domain),
      });
    }

    const completion = await this.openai.chat.completions.create({
      model: options.model || 'gpt-4',
      messages,
      temperature: options.temperature || 0.7,
      max_tokens: options.maxTokens,
    });

    const response = completion.choices[0].message.content;

    // Validate response if requested
    if (options.validate) {
      const validation = this.validateResponse(response);
      return { response, validation };
    }

    return response;
  }

  getDomainContext(domain) {
    const contexts = {
      technical:
        'Focus on specific implementations, mention version dependencies, and acknowledge platform limitations.',
      academic:
        'Distinguish between established research and preliminary findings. Always acknowledge knowledge cutoffs.',
      creative:
        'Maintain natural expression while being transparent about creative choices and limitations.',
    };
    return contexts[domain] || '';
  }

  validateResponse(response) {
    const issues = [];

    // Check for uncertainty labels when needed
    if (
      this.hasUncertainClaims(response) &&
      !this.hasUncertaintyLabels(response)
    ) {
      issues.push('Missing uncertainty labels on speculative content');
    }

    // Check for AI markers
    const aiMarkers = this.detectAIMarkers(response);
    if (aiMarkers.length > 0) {
      issues.push(`Detected AI markers: ${aiMarkers.join(', ')}`);
    }

    return {
      valid: issues.length === 0,
      issues,
      score: this.calculateNaturalnessScore(response),
    };
  }

  hasUncertainClaims(text) {
    const uncertaintyIndicators = [
      'will',
      'guarantee',
      'ensures',
      'prevents',
      'eliminates',
    ];
    return uncertaintyIndicators.some(
      (word) =>
        text.toLowerCase().includes(word) && !text.includes('[Unverified]')
    );
  }

  hasUncertaintyLabels(text) {
    return /\[(Inference|Speculation|Unverified)\]/.test(text);
  }

  detectAIMarkers(text) {
    const aiPhrases = [
      'Furthermore',
      'Moreover',
      'Additionally',
      'In conclusion',
      'It should be noted',
      'comprehensive',
      'robust',
      'leveraging',
    ];
    return aiPhrases.filter((phrase) => text.includes(phrase));
  }

  calculateNaturalnessScore(text) {
    let score = 100;

    // Deduct for AI markers
    score -= this.detectAIMarkers(text).length * 10;

    // Add for contractions
    const contractions = (text.match(/\w+'/g) || []).length;
    score += Math.min(contractions * 2, 10);

    // Add for sentence variation
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    const avgLength =
      sentences.reduce((sum, s) => sum + s.length, 0) / sentences.length;
    const variation =
      sentences.reduce((sum, s) => sum + Math.abs(s.length - avgLength), 0) /
      sentences.length;
    score += Math.min(variation / 5, 15);

    return Math.max(0, Math.min(100, score));
  }
}

// Usage
const client = new ZeroAITraceClient(process.env.OPENAI_API_KEY);

const result = await client.chat('Explain machine learning', {
  domain: 'technical',
  validate: true,
});

console.log('Response:', result.response);
console.log('Validation:', result.validation);
```

### Anthropic Claude API

```javascript
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function claudeWithFramework(userMessage) {
  const message = await anthropic.messages.create({
    model: 'claude-3-sonnet-20240229',
    max_tokens: 1000,
    system: ZERO_AI_TRACE_PROMPT,
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
    ],
  });

  return message.content[0].text;
}

// Usage
const response = await claudeWithFramework(
  'What are the best practices for API design?'
);
console.log(response);
```

### Google Gemini Integration

```python
import google.generativeai as genai
import os

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

ZERO_AI_TRACE_PROMPT = """Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: "I cannot verify this," "I do not have access to that information," or "My knowledge base does not contain that." Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include "based on observed patterns." If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style."""

def gemini_with_framework(user_message):
    model = genai.GenerativeModel('gemini-pro')
    full_prompt = f"{ZERO_AI_TRACE_PROMPT}\n\nUser question: {user_message}"
    response = model.generate_content(full_prompt)
    return response.text

# Usage
response = gemini_with_framework("How do I learn programming effectively?")
print(response)
```

## Application Examples

### Content Management System Integration

```javascript
// WordPress Plugin Example
class ZeroAITraceContentGenerator {
  constructor(apiKey, model = 'gpt-4') {
    this.client = new ZeroAITraceClient(apiKey);
    this.model = model;
  }

  async generateBlogPost(topic, requirements = {}) {
    const prompt = this.buildBlogPrompt(topic, requirements);

    const result = await this.client.chat(prompt, {
      domain: 'creative',
      model: this.model,
      validate: true,
    });

    // Post-process for WordPress
    return {
      title: this.extractTitle(result.response),
      content: this.formatForWordPress(result.response),
      quality_score: result.validation.score,
      needs_review: !result.validation.valid,
    };
  }

  buildBlogPrompt(topic, requirements) {
    let prompt = `Write a blog post about "${topic}".`;

    if (requirements.length) {
      prompt += ` Target length: ${requirements.length} words.`;
    }
    if (requirements.tone) {
      prompt += ` Tone: ${requirements.tone}.`;
    }
    if (requirements.audience) {
      prompt += ` Audience: ${requirements.audience}.`;
    }

    return prompt;
  }

  extractTitle(content) {
    const titleMatch = content.match(/^#\s+(.+)$/m);
    return titleMatch ? titleMatch[1] : 'Generated Content';
  }

  formatForWordPress(content) {
    // Convert markdown to WordPress blocks or HTML
    return content
      .replace(/^# /gm, '<h1>')
      .replace(/^## /gm, '<h2>')
      .replace(/^### /gm, '<h3>');
  }
}

// Usage in WordPress
const generator = new ZeroAITraceContentGenerator(process.env.OPENAI_API_KEY);

const post = await generator.generateBlogPost('The Future of Web Development', {
  length: 800,
  tone: 'informative but casual',
  audience: 'junior developers',
});

if (post.needs_review) {
  console.log('Content needs manual review:', post.quality_score);
}
```

### Customer Support Chatbot

```javascript
class SupportBot {
  constructor(apiKey) {
    this.client = new ZeroAITraceClient(apiKey);
    this.conversationHistory = new Map();
  }

  async handleCustomerQuery(customerId, query, context = {}) {
    // Get conversation history
    const history = this.conversationHistory.get(customerId) || [];

    // Build context-aware prompt
    let prompt = query;
    if (context.product) {
      prompt += `\n\nContext: Customer is asking about ${context.product}`;
    }
    if (history.length > 0) {
      prompt += `\n\nPrevious conversation: ${history.slice(-3).join('\n')}`;
    }

    const response = await this.client.chat(prompt, {
      domain: 'technical',
      validate: true,
    });

    // Store in history
    history.push(`Customer: ${query}`);
    history.push(`Support: ${response}`);
    this.conversationHistory.set(customerId, history);

    // Check if escalation is needed
    const needsEscalation = this.checkEscalation(response);

    return {
      response,
      escalate: needsEscalation,
      confidence: response.includes('[Unverified]') ? 'low' : 'high',
    };
  }

  checkEscalation(response) {
    const escalationTriggers = [
      'I cannot verify',
      'I do not have access',
      '[Unverified]',
      'technical support',
      'contact',
    ];

    return escalationTriggers.some((trigger) =>
      response.toLowerCase().includes(trigger.toLowerCase())
    );
  }
}

// Usage
const supportBot = new SupportBot(process.env.OPENAI_API_KEY);

const result = await supportBot.handleCustomerQuery(
  'customer123',
  'My payment failed but I was charged. What should I do?',
  { product: 'subscription service' }
);

if (result.escalate) {
  console.log('Escalating to human agent');
} else {
  console.log('Bot response:', result.response);
}
```

### Educational Content Generator

```javascript
class EducationalContentGenerator {
  constructor(apiKey) {
    this.client = new ZeroAITraceClient(apiKey);
  }

  async generateLesson(topic, level, learningObjectives = []) {
    const prompt = this.buildEducationalPrompt(
      topic,
      level,
      learningObjectives
    );

    const content = await this.client.chat(prompt, {
      domain: 'academic',
      validate: true,
    });

    return {
      lesson: content.response,
      review_needed: !content.validation.valid,
      quality_indicators: {
        has_uncertainty_labels: content.response.includes('['),
        naturalness_score: content.validation.score,
        ai_markers: content.validation.issues,
      },
    };
  }

  buildEducationalPrompt(topic, level, objectives) {
    let prompt = `Create a lesson about "${topic}" for ${level} level students.`;

    if (objectives.length > 0) {
      prompt += `\n\nLearning objectives:\n${objectives.map((obj) => `- ${obj}`).join('\n')}`;
    }

    prompt += `\n\nMake sure to:
- Use clear, age-appropriate language
- Include examples and analogies
- Acknowledge what might be simplified or uncertain
- End with practical next steps for learning`;

    return prompt;
  }

  async generateQuiz(topic, questionCount = 5) {
    const prompt = `Create ${questionCount} quiz questions about "${topic}". Include a mix of question types and provide answer explanations.`;

    const result = await this.client.chat(prompt, {
      domain: 'academic',
      validate: true,
    });

    return this.parseQuizQuestions(result.response);
  }

  parseQuizQuestions(content) {
    // Parse the generated content into structured quiz format
    const lines = content.split('\n');
    const questions = [];
    let currentQuestion = null;

    for (const line of lines) {
      if (line.match(/^\d+\./)) {
        if (currentQuestion) questions.push(currentQuestion);
        currentQuestion = {
          question: line,
          options: [],
          answer: '',
          explanation: '',
        };
      } else if (line.match(/^[A-D]\)/)) {
        if (currentQuestion) currentQuestion.options.push(line);
      } else if (line.startsWith('Answer:')) {
        if (currentQuestion)
          currentQuestion.answer = line.replace('Answer:', '').trim();
      } else if (line.startsWith('Explanation:')) {
        if (currentQuestion)
          currentQuestion.explanation = line.replace('Explanation:', '').trim();
      }
    }

    if (currentQuestion) questions.push(currentQuestion);
    return questions;
  }
}

// Usage
const educator = new EducationalContentGenerator(process.env.OPENAI_API_KEY);

const lesson = await educator.generateLesson(
  'Photosynthesis',
  'middle school',
  [
    'Understand the basic process of photosynthesis',
    'Identify the inputs and outputs',
    'Explain why photosynthesis is important for life',
  ]
);

console.log('Generated lesson:', lesson.lesson);
if (lesson.review_needed) {
  console.log('Quality issues detected:', lesson.quality_indicators.ai_markers);
}
```

## Web Framework Integrations

### Express.js API

```javascript
const express = require('express');
const { ZeroAITraceClient } = require('./zero-ai-trace-client');

const app = express();
app.use(express.json());

const aiClient = new ZeroAITraceClient(process.env.OPENAI_API_KEY);

app.post('/api/chat', async (req, res) => {
  try {
    const { message, domain, validate } = req.body;

    const result = await aiClient.chat(message, {
      domain,
      validate: validate !== false,
    });

    res.json({
      response: result.response || result,
      validation: result.validation,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Zero-AI-Trace API server running on port 3000');
});
```

### Next.js API Route

```javascript
// pages/api/ai-chat.js or app/api/ai-chat/route.js (App Router)
import { ZeroAITraceClient } from '../../lib/zero-ai-trace-client';

const client = new ZeroAITraceClient(process.env.OPENAI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, options = {} } = req.body;

  try {
    const result = await client.chat(message, {
      ...options,
      validate: true,
    });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

// For App Router (app/api/ai-chat/route.js)
export async function POST(request) {
  const { message, options = {} } = await request.json();

  try {
    const result = await client.chat(message, {
      ...options,
      validate: true,
    });

    return Response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
```

### React Hook for Frontend

```javascript
// hooks/useZeroAITrace.js
import { useState, useCallback } from 'react';

export function useZeroAITrace() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const chat = useCallback(async (message, options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, options }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      return data.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { chat, loading, error };
}

// Component usage
import { useZeroAITrace } from '../hooks/useZeroAITrace';

function ChatComponent() {
  const { chat, loading, error } = useZeroAITrace();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const result = await chat(input, { domain: 'general' });

      const aiMessage = {
        role: 'assistant',
        content: result.response || result,
        validation: result.validation,
      };

      setMessages((prev) => [...prev, aiMessage]);
      setInput('');
    } catch (err) {
      console.error('Chat error:', err);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <div className="content">{msg.content}</div>
            {msg.validation && !msg.validation.valid && (
              <div className="validation-warning">
                ⚠️ Quality check failed: {msg.validation.issues.join(', ')}
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          disabled={loading}
        />
        <button type="submit" disabled={loading || !input.trim()}>
          {loading ? 'Thinking...' : 'Send'}
        </button>
      </form>

      {error && <div className="error">Error: {error}</div>}
    </div>
  );
}
```

## Best Practices for Integration

### 1. Error Handling

Always implement robust error handling for API calls:

```javascript
try {
  const result = await client.chat(message, options);
  return result;
} catch (error) {
  console.error('AI client error:', error);
  return { error: 'Failed to process request', fallback: true };
}
```

### 2. Rate Limiting

Implement appropriate rate limiting for production use:

```javascript
const rateLimit = require('express-rate-limit');

const aiChatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many AI requests from this IP',
});

app.use('/api/ai-chat', aiChatLimiter);
```

### 3. Response Caching

Cache responses when appropriate to reduce API costs:

```javascript
const cache = new Map();

async function cachedChat(message, options = {}) {
  const cacheKey = JSON.stringify({ message, options });

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const result = await client.chat(message, options);
  cache.set(cacheKey, result);

  return result;
}
```

### 4. Monitoring and Analytics

Track usage and performance:

```javascript
const analytics = {
  logRequest: (message, options, result, duration) => {
    console.log({
      timestamp: new Date().toISOString(),
      messageLength: message.length,
      domain: options.domain,
      validationScore: result.validation?.score,
      duration,
    });
  },
};

// Use in your API endpoints
const startTime = Date.now();
const result = await client.chat(message, options);
const duration = Date.now() - startTime;

analytics.logRequest(message, options, result, duration);
```

These integration examples provide practical starting points for implementing the Zero-AI-Trace Framework in real applications. Remember to test thoroughly with your specific use cases and adjust validation rules as needed for your domain.
