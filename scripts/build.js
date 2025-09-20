#!/usr/bin/env node

/**
 * Build script for Zero-AI-Trace Framework
 * Generates different versions and formats of the framework
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const {
  CORE_PROMPT,
  CONFIGURATIONS,
  FRAMEWORK_VERSION,
} = require('../src/framework.js');

class FrameworkBuilder {
  constructor() {
    this.outputDir = path.join(__dirname, '..', 'dist');
    this.templateDir = path.join(__dirname, '..', 'templates');
  }

  async build() {
    console.log(
      chalk.bold.blue(
        `\n🚀 Building Zero-AI-Trace Framework v${FRAMEWORK_VERSION}\n`
      )
    );

    await this.setupDirectories();
    await this.generatePromptVariants();
    await this.generateTemplates();
    await this.generateConfigFiles();

    console.log(chalk.bold.green('\n✅ Build completed successfully!\n'));
  }

  async setupDirectories() {
    console.log('📁 Setting up directories...');
    await fs.ensureDir(this.outputDir);
    await fs.ensureDir(this.templateDir);
    await fs.ensureDir(path.join(this.templateDir, 'integrations'));
    await fs.ensureDir(path.join(this.outputDir, 'prompts'));
  }

  async generatePromptVariants() {
    console.log('📝 Generating prompt variants...');

    // Core prompt
    await fs.writeFile(
      path.join(this.outputDir, 'prompts', 'core.txt'),
      CORE_PROMPT
    );

    // Shortened version (for character limits)
    const shortPrompt = this.createShortPrompt();
    await fs.writeFile(
      path.join(this.outputDir, 'prompts', 'short.txt'),
      shortPrompt
    );

    // Configuration-specific prompts
    for (const [key, config] of Object.entries(CONFIGURATIONS)) {
      const customPrompt = this.createCustomPrompt(config);
      await fs.writeFile(
        path.join(this.outputDir, 'prompts', `${key}.txt`),
        customPrompt
      );
    }

    console.log(
      `   ✅ Generated ${Object.keys(CONFIGURATIONS).length + 2} prompt variants`
    );
  }

  createShortPrompt() {
    return `Be honest, not agreeable. Mark uncertain content with [Unverified]. Don't paraphrase unless asked. Strong claims need labels. Style: avoid AI polish, use natural flow, contractions, varied rhythm. If missed labeling or AI-style appears, correct it.`;
  }

  createCustomPrompt(config) {
    let prompt = CORE_PROMPT;

    switch (config.emphasis) {
      case 'verification':
        prompt += ` Extra emphasis: Always verify claims and cite when sources are needed.`;
        break;
      case 'precision':
        prompt += ` Focus on technical precision and concrete implementation details.`;
        break;
      case 'humanization':
        prompt += ` Maximize natural style variation while maintaining full transparency.`;
        break;
      case 'natural':
        prompt += ` Emphasize conversational flow and authentic human communication patterns.`;
        break;
    }

    return prompt;
  }

  async generateTemplates() {
    console.log('🎨 Generating integration templates...');

    // ChatGPT Custom Instructions template
    const chatgptTemplate = `# Zero-AI-Trace Framework - ChatGPT Integration

## How would you like ChatGPT to respond?

${CORE_PROMPT}

## Additional Notes:
- This framework improves response transparency and natural style
- Responses will be labeled when uncertain information is present
- Writing style will be more human-like and less detectable as AI-generated

Copy the prompt above into your ChatGPT Custom Instructions.`;

    await fs.writeFile(
      path.join(
        this.templateDir,
        'integrations',
        'chatgpt-custom-instructions.md'
      ),
      chatgptTemplate
    );

    // API integration template
    const apiTemplate = `# API Integration Template

## For OpenAI API:

\`\`\`javascript
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    {
      "role": "system",
      "content": "${CORE_PROMPT.replace(/"/g, '\\"')}"
    },
    {
      "role": "user",
      "content": "Your user message here"
    }
  ]
});
\`\`\`

## For Anthropic Claude API:

\`\`\`javascript
const response = await anthropic.messages.create({
  model: "claude-3-sonnet-20240229",
  max_tokens: 1000,
  system: "${CORE_PROMPT.replace(/"/g, '\\"')}",
  messages: [
    {
      "role": "user",
      "content": "Your user message here"
    }
  ]
});
\`\`\``;

    await fs.writeFile(
      path.join(this.templateDir, 'integrations', 'api-integration.md'),
      apiTemplate
    );

    console.log('   ✅ Generated integration templates');
  }

  async generateConfigFiles() {
    console.log('⚙️ Generating configuration files...');

    // ESLint config
    const eslintConfig = {
      env: {
        node: true,
        es2021: true,
      },
      extends: ['eslint:recommended'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        'no-console': 'off',
        'no-unused-vars': 'warn',
      },
    };

    await fs.writeJSON(
      path.join(__dirname, '..', '.eslintrc.json'),
      eslintConfig,
      { spaces: 2 }
    );

    // Prettier config
    const prettierConfig = {
      semi: true,
      trailingComma: 'es5',
      singleQuote: true,
      printWidth: 80,
      tabWidth: 2,
    };

    await fs.writeJSON(
      path.join(__dirname, '..', '.prettierrc'),
      prettierConfig,
      { spaces: 2 }
    );

    // VS Code settings
    const vscodeSettings = {
      'editor.formatOnSave': true,
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'files.associations': {
        '*.md': 'markdown',
      },
      'markdown.preview.theme': 'github',
    };

    await fs.ensureDir(path.join(__dirname, '..', '.vscode'));
    await fs.writeJSON(
      path.join(__dirname, '..', '.vscode', 'settings.json'),
      vscodeSettings,
      { spaces: 2 }
    );

    console.log('   ✅ Generated configuration files');
  }
}

// Run build if called directly
if (require.main === module) {
  const builder = new FrameworkBuilder();
  builder.build().catch(console.error);
}

module.exports = FrameworkBuilder;
