#!/usr/bin/env node

/**
 * Validation script for Zero-AI-Trace Framework
 * Tests the framework with various inputs and validates responses
 */

const chalk = require('chalk');
const {
  CORE_PROMPT,
  TEST_PROMPTS,
  FRAMEWORK_VERSION,
} = require('../src/framework.js');

class FrameworkValidator {
  constructor() {
    this.testResults = [];
    this.spinner = null;
  }

  log(message, type = 'info') {
    const colors = {
      info: chalk.blue,
      success: chalk.green,
      warning: chalk.yellow,
      error: chalk.red,
    };
    console.log(colors[type](`[${type.toUpperCase()}] ${message}`));
  }

  async validateFramework() {
    console.log(
      chalk.bold.blue(
        `\n🎯 Zero-AI-Trace Framework Validator v${FRAMEWORK_VERSION}\n`
      )
    );

    this.log('Starting framework validation...', 'info');
    this.displayPrompt();
    this.runStaticTests();
    this.displayUsageInstructions();
    this.displayResults();
  }

  displayPrompt() {
    console.log(chalk.bold('\n📋 Current Framework Prompt:'));
    console.log(chalk.gray('─'.repeat(80)));
    console.log(chalk.white(CORE_PROMPT));
    console.log(chalk.gray('─'.repeat(80)));
  }

  runStaticTests() {
    console.log(chalk.bold('\n🧪 Running Static Tests:\n'));

    // Test prompt length
    const promptLength = CORE_PROMPT.length;
    if (promptLength < 2000) {
      this.log(
        `✅ Prompt length (${promptLength} chars) - Optimal for most LLMs`,
        'success'
      );
    } else {
      this.log(
        `⚠️  Prompt length (${promptLength} chars) - May be too long for some LLMs`,
        'warning'
      );
    }

    // Test required keywords
    const requiredKeywords = [
      'honest',
      'speculation',
      'unverifiable',
      'Inference',
      'Speculation',
      'Unverified',
      'correction',
      'natural flow',
      'contractions',
    ];

    let keywordScore = 0;
    requiredKeywords.forEach((keyword) => {
      if (CORE_PROMPT.includes(keyword)) {
        keywordScore++;
        this.log(`✅ Contains keyword: "${keyword}"`, 'success');
      } else {
        this.log(`❌ Missing keyword: "${keyword}"`, 'error');
      }
    });

    const keywordPercentage = (keywordScore / requiredKeywords.length) * 100;
    this.log(
      `\n📊 Keyword Coverage: ${keywordPercentage.toFixed(1)}%`,
      keywordPercentage >= 90 ? 'success' : 'warning'
    );

    // Test structure
    const hasVerification = CORE_PROMPT.includes('cannot verify');
    const hasLabeling = CORE_PROMPT.includes('[Inference]');
    const hasStyle = CORE_PROMPT.includes('natural flow');

    console.log('\n🏗️  Structure Analysis:');
    this.log(
      `Verification protocols: ${hasVerification ? '✅' : '❌'}`,
      hasVerification ? 'success' : 'error'
    );
    this.log(
      `Labeling system: ${hasLabeling ? '✅' : '❌'}`,
      hasLabeling ? 'success' : 'error'
    );
    this.log(
      `Style guidelines: ${hasStyle ? '✅' : '❌'}`,
      hasStyle ? 'success' : 'error'
    );
  }

  displayUsageInstructions() {
    console.log(chalk.bold('\n🔧 Manual Testing Instructions:\n'));

    TEST_PROMPTS.forEach((test, index) => {
      console.log(
        chalk.yellow(`${index + 1}. ${test.category.toUpperCase()} TEST:`)
      );
      console.log(`   Input: "${test.input}"`);

      if (test.should_contain) {
        console.log(`   Should contain: ${test.should_contain.join(' OR ')}`);
      }
      if (test.should_avoid) {
        console.log(`   Should avoid: ${test.should_avoid.join(', ')}`);
      }
      if (test.should_trigger) {
        console.log(`   Should trigger: ${test.should_trigger}`);
      }
      console.log('');
    });

    console.log(chalk.blue('💡 To test manually:'));
    console.log('1. Copy the framework prompt above');
    console.log('2. Inject it into your LLM (ChatGPT, Claude, etc.)');
    console.log('3. Test with the inputs above');
    console.log('4. Verify the responses match the expected behaviors');
  }

  displayResults() {
    console.log(chalk.bold('\n📈 Validation Summary:\n'));

    console.log(chalk.green('✅ Static validation completed'));
    console.log(chalk.blue('ℹ️  Manual testing required for full validation'));
    console.log(
      chalk.yellow('⚠️  Test with multiple LLMs for comprehensive validation')
    );

    console.log(chalk.bold('\n🎯 Next Steps:'));
    console.log('1. Test the framework with real LLM interactions');
    console.log('2. Verify labeling behavior with uncertain content');
    console.log('3. Check style improvements in generated text');
    console.log('4. Report any issues to the GitHub repository\n');
  }
}

// Run validation if called directly
if (require.main === module) {
  const validator = new FrameworkValidator();
  validator.validateFramework().catch(console.error);
}

module.exports = FrameworkValidator;
