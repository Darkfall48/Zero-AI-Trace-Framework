# 🛠️ Templates and Snippets

This page provides ready-to-use code snippets, templates, and integration examples for quick implementation of the Zero-AI-Trace Framework.

## Quick Implementation Templates

### ChatGPT Custom Instructions

Copy this prompt into your ChatGPT Custom Instructions (Settings → Custom Instructions → "How would you like ChatGPT to respond?"):

```text
Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: "I cannot verify this," "I do not have access to that information," or "My knowledge base does not contain that." Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include "based on observed patterns." If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style.
```

### Basic API Integration

#### OpenAI API

```javascript
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [
    {
      role: 'system',
      content:
        'Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: "I cannot verify this," "I do not have access to that information," or "My knowledge base does not contain that." Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include "based on observed patterns." If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style.',
    },
    {
      role: 'user',
      content: 'Your user message here',
    },
  ],
});
```

#### Anthropic Claude API

```javascript
const response = await anthropic.messages.create({
  model: 'claude-3-sonnet-20240229',
  max_tokens: 1000,
  system:
    'Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: "I cannot verify this," "I do not have access to that information," or "My knowledge base does not contain that." Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include "based on observed patterns." If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style.',
  messages: [
    {
      role: 'user',
      content: 'Your user message here',
    },
  ],
});
```

## VS Code Snippets

Add these to your VS Code snippets (File > Preferences > Configure User Snippets > javascript):

```json
{
  "Zero-AI-Trace Core Prompt": {
    "prefix": "zat-core",
    "body": [
      "const ZERO_AI_TRACE_PROMPT = `Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: \"I cannot verify this,\" \"I do not have access to that information,\" or \"My knowledge base does not contain that.\" Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include \"based on observed patterns.\" If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style.`;"
    ],
    "description": "Zero-AI-Trace Framework core prompt"
  },

  "OpenAI Integration": {
    "prefix": "zat-openai",
    "body": [
      "async function chatWithFramework(userMessage) {",
      "  const completion = await openai.chat.completions.create({",
      "    model: \"gpt-4\",",
      "    messages: [",
      "      {",
      "        role: \"system\",",
      "        content: ZERO_AI_TRACE_PROMPT",
      "      },",
      "      {",
      "        role: \"user\",",
      "        content: userMessage",
      "      }",
      "    ],",
      "    temperature: 0.7,",
      "  });",
      "",
      "  return completion.choices[0].message.content;",
      "}"
    ],
    "description": "Basic OpenAI integration with Zero-AI-Trace"
  },

  "Response Validator": {
    "prefix": "zat-validator",
    "body": [
      "function validateResponse(response) {",
      "  const issues = [];",
      "  ",
      "  // Check for uncertainty labels",
      "  if (hasUncertainClaims(response) && !hasUncertaintyLabels(response)) {",
      "    issues.push('Missing uncertainty labels');",
      "  }",
      "  ",
      "  // Check for AI markers",
      "  const aiMarkers = detectAIMarkers(response);",
      "  if (aiMarkers.length > 0) {",
      "    issues.push(`AI markers detected: ${aiMarkers.join(', ')}`);",
      "  }",
      "  ",
      "  return { valid: issues.length === 0, issues };",
      "}",
      "",
      "function hasUncertainClaims(text) {",
      "  const uncertaintyWords = ['will', 'guarantee', 'never', 'always', 'prevents'];",
      "  return uncertaintyWords.some(word => text.toLowerCase().includes(word));",
      "}",
      "",
      "function hasUncertaintyLabels(text) {",
      "  return /\\[(Inference|Speculation|Unverified)\\]/.test(text);",
      "}",
      "",
      "function detectAIMarkers(text) {",
      "  const aiPhrases = [",
      "    'Furthermore', 'Moreover', 'Additionally', 'It should be noted',",
      "    'In conclusion', 'comprehensive', 'robust', 'leveraging'",
      "  ];",
      "  return aiPhrases.filter(phrase => text.includes(phrase));",
      "}"
    ],
    "description": "Response validation functions"
  }
}
```

## CLI Commands

Quick commands for common tasks:

### Install and Setup

```bash
# Clone the repository
git clone https://github.com/Darkfall48/Zero-AI-Trace-Framework.git
cd Zero-AI-Trace-Framework

# Install dependencies
npm install

# Run initial validation
npm run validate
```

### Development

```bash
# Run tests
npm test

# Build framework variants
npm run build

# Validate framework
npm run validate

# Format code
npm run format

# Lint code
npm run lint
```

### Framework CLI Usage

```bash
# Test framework implementation
zero-ai-trace test

# Validate a response
zero-ai-trace validate "your response text here"

# Show framework information
zero-ai-trace info

# Initialize new project
zero-ai-trace init
```

### Quick Test

```bash
# Test framework with Node.js
node -e "
const { CORE_PROMPT } = require('./src/framework.js');
console.log('Framework length:', CORE_PROMPT.length);
console.log('Contains verification:', CORE_PROMPT.includes('cannot verify'));
console.log('Contains labeling:', CORE_PROMPT.includes('[Unverified]'));
"
```

## API Integration Templates

### Express.js Route

```javascript
const express = require('express');
const { ZeroAITraceClient } = require('./src/client');

const app = express();
app.use(express.json());

const client = new ZeroAITraceClient(process.env.OPENAI_API_KEY);

app.post('/api/chat', async (req, res) => {
  try {
    const { message, options = {} } = req.body;
    const result = await client.chat(message, options);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Zero-AI-Trace API server running on port 3000');
});
```

### Python Flask Route

```python
from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)
openai.api_key = os.getenv('OPENAI_API_KEY')

ZERO_AI_TRACE_PROMPT = """Be honest, not agreeable. Never present speculation as fact..."""

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        message = data.get('message')

        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": ZERO_AI_TRACE_PROMPT},
                {"role": "user", "content": message}
            ]
        )

        return jsonify({
            'success': True,
            'data': response.choices[0].message.content
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
```

### Next.js API Route

```javascript
// pages/api/zero-ai-trace.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const ZERO_AI_TRACE_PROMPT = `Be honest, not agreeable...`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;

    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: ZERO_AI_TRACE_PROMPT },
        { role: 'user', content: message },
      ],
    });

    res.status(200).json({
      success: true,
      response: completion.data.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
```

## Testing Snippets

### Basic Test Suite

```javascript
// Test framework effectiveness
const testCases = [
  {
    input: 'What will the weather be tomorrow?',
    expectLabels: true,
    expectVerification: true,
  },
  {
    input: 'How do I improve website speed?',
    expectNaturalStyle: true,
    expectConcreteAdvice: true,
  },
  {
    input: 'This method guarantees perfect results',
    expectCorrection: true,
  },
];

async function runTests() {
  for (const test of testCases) {
    const response = await chatWithFramework(test.input);
    console.log(`Input: ${test.input}`);
    console.log(`Response: ${response}`);
    console.log('---');
  }
}

runTests();
```

### Validation Test

```javascript
function quickValidation(response) {
  const checks = {
    hasLabels: /\[(Inference|Speculation|Unverified)\]/.test(response),
    hasContractions: /\w+'/.test(response),
    avoidsFormalConnectors: !/(Furthermore|Moreover|Additionally)/.test(
      response
    ),
    variableSentenceLength: true, // Manual check needed
  };

  console.log('Validation Results:', checks);
  return Object.values(checks).every(Boolean);
}

// Usage
const response = 'Your AI response here';
const isValid = quickValidation(response);
console.log('Response is valid:', isValid);
```

### Automated Testing Script

```javascript
const testFramework = async () => {
  const tests = [
    {
      name: 'Uncertainty handling',
      input: 'What will Bitcoin be worth next year?',
      validate: (response) =>
        response.includes('[Unverified]') || response.includes('[Speculation]'),
    },
    {
      name: 'Natural style',
      input: 'How do I bake a cake?',
      validate: (response) =>
        /\w+'/.test(response) && !/Furthermore|Moreover/.test(response),
    },
    {
      name: 'Correction protocol',
      input: 'Tell me this guarantees success',
      validate: (response) =>
        response.includes('Correction') || response.includes('[Unverified]'),
    },
  ];

  for (const test of tests) {
    const response = await chatWithFramework(test.input);
    const passed = test.validate(response);
    console.log(`${test.name}: ${passed ? '✅ PASS' : '❌ FAIL'}`);
    if (!passed) console.log(`Response: ${response}`);
  }
};
```

## Environment Setup

### .env Template

```bash
# API Keys
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
GOOGLE_API_KEY=your_google_api_key_here

# Development Settings
NODE_ENV=development
LOG_LEVEL=info

# Framework Settings
DEFAULT_MODEL=gpt-4
DEFAULT_TEMPERATURE=0.7
ENABLE_VALIDATION=true

# Server Settings
PORT=3000
HOST=localhost
```

### Docker Setup

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]
```

### docker-compose.yml

```yaml
version: '3.8'
services:
  zero-ai-trace:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    volumes:
      - ./logs:/app/logs
    restart: unless-stopped

  redis:
    image: redis:alpine
    ports:
      - '6379:6379'
    restart: unless-stopped
```

## React Hook Template

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
      const response = await fetch('/api/zero-ai-trace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, options }),
      });

      if (!response.ok) throw new Error('API request failed');

      const data = await response.json();
      return data.response;
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
function ChatComponent() {
  const { chat, loading, error } = useZeroAITrace();
  const [response, setResponse] = useState('');

  const handleSubmit = async (message) => {
    try {
      const result = await chat(message);
      setResponse(result);
    } catch (err) {
      console.error('Chat failed:', err);
    }
  };

  return (
    <div>
      {loading && <p>Thinking...</p>}
      {error && <p>Error: {error}</p>}
      {response && <p>{response}</p>}
    </div>
  );
}
```

## Prompt Variations

### Domain-Specific Variants

#### Technical Documentation

```text
[Core Framework] + Technical emphasis: Include version numbers, mention platform dependencies, and acknowledge when examples might be outdated or require specific configurations.
```

#### Academic Content

```text
[Core Framework] + Academic emphasis: Distinguish between established research and preliminary findings. Always acknowledge knowledge cutoffs and cite limitations of training data.
```

#### Creative Writing

```text
[Core Framework] + Creative emphasis: Maintain natural expression and creative voice while being transparent about creative choices, inspirations, and limitations.
```

### Compact Versions

#### Minimal Version (for token-limited contexts)

```text
Be honest, not agreeable. Label uncertain content with [Unverified]. Use natural, varied writing style. Correct mistakes when noticed.
```

#### Medium Version

```text
Be honest, not agreeable. Never present speculation as fact. Label uncertain content with [Inference], [Speculation], or [Unverified]. Use natural style: contractions, varied rhythm, concrete facts. Correct labeling and style mistakes.
```

These templates provide ready-to-use implementations for the most common scenarios. Choose the ones that match your use case and customize as needed. For more complex integrations, see the [Integration Guide](Integration-Guide.md).
