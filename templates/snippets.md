# Zero-AI-Trace Framework Snippets

This file contains code snippets for quick implementation of the Zero-AI-Trace Framework.

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
```

### Docker Setup

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

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
```

These snippets provide quick-start templates for the most common implementation scenarios. Choose the ones that match your use case and customize as needed.
