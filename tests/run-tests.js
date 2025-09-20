#!/usr/bin/env node

/**
 * Test runner for Zero-AI-Trace Framework
 * Runs automated tests for framework components
 */

const chalk = require('chalk');
const {
  CORE_PROMPT,
  TEST_PROMPTS,
  EXTENDED_PROMPT,
} = require('../src/framework.js');

class TestRunner {
  constructor() {
    this.tests = [];
    this.results = {
      passed: 0,
      failed: 0,
      total: 0,
    };
  }

  addTest(name, testFn) {
    this.tests.push({ name, testFn });
  }

  async runTests() {
    console.log(
      chalk.bold.blue('\n🧪 Running Zero-AI-Trace Framework Tests\n')
    );

    for (const test of this.tests) {
      try {
        await test.testFn();
        this.logResult(test.name, true);
        this.results.passed++;
      } catch (error) {
        this.logResult(test.name, false, error.message);
        this.results.failed++;
      }
      this.results.total++;
    }

    this.displaySummary();
  }

  logResult(testName, passed, error = null) {
    const icon = passed ? '✅' : '❌';
    const color = passed ? chalk.green : chalk.red;
    console.log(`${icon} ${color(testName)}`);
    if (error) {
      console.log(`   ${chalk.gray(error)}`);
    }
  }

  displaySummary() {
    console.log('\n' + '─'.repeat(50));
    console.log(
      chalk.bold(
        `📊 Test Results: ${this.results.passed}/${this.results.total} passed`
      )
    );

    if (this.results.failed === 0) {
      console.log(chalk.green('🎉 All tests passed!'));
    } else {
      console.log(chalk.red(`⚠️  ${this.results.failed} test(s) failed`));
    }
    console.log('');
  }

  assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }
}

// Initialize test runner
const runner = new TestRunner();

// Framework structure tests
runner.addTest('Core prompt exists and is not empty', () => {
  runner.assert(CORE_PROMPT && CORE_PROMPT.length > 0, 'Core prompt is empty');
});

runner.addTest('Core prompt contains verification instructions', () => {
  runner.assert(
    CORE_PROMPT.includes('cannot verify') ||
      CORE_PROMPT.includes('unverifiable'),
    'Missing verification instructions'
  );
});

runner.addTest('Core prompt contains labeling system', () => {
  runner.assert(
    CORE_PROMPT.includes('[Inference]') && CORE_PROMPT.includes('[Unverified]'),
    'Missing labeling system'
  );
});

runner.addTest('Core prompt contains style guidelines', () => {
  runner.assert(
    CORE_PROMPT.includes('natural flow') &&
      CORE_PROMPT.includes('contractions'),
    'Missing style guidelines'
  );
});

runner.addTest('Core prompt contains correction protocol', () => {
  runner.assert(
    CORE_PROMPT.includes('correction'),
    'Missing correction protocol'
  );
});

// Extended prompt tests
runner.addTest('Extended prompt structure is valid', () => {
  runner.assert(
    EXTENDED_PROMPT.verification &&
      EXTENDED_PROMPT.labeling &&
      EXTENDED_PROMPT.style &&
      EXTENDED_PROMPT.correction,
    'Extended prompt missing required sections'
  );
});

runner.addTest('Extended prompt has required prefixes', () => {
  const prefixes = EXTENDED_PROMPT.labeling.prefixes;
  runner.assert(
    prefixes.includes('[Inference]') &&
      prefixes.includes('[Speculation]') &&
      prefixes.includes('[Unverified]'),
    'Missing required label prefixes'
  );
});

// Test prompts validation
runner.addTest('Test prompts are properly structured', () => {
  runner.assert(TEST_PROMPTS.length > 0, 'No test prompts defined');

  TEST_PROMPTS.forEach((prompt, index) => {
    runner.assert(prompt.category, `Test prompt ${index} missing category`);
    runner.assert(prompt.input, `Test prompt ${index} missing input`);
    runner.assert(
      prompt.should_contain || prompt.should_avoid || prompt.should_trigger,
      `Test prompt ${index} missing validation criteria`
    );
  });
});

runner.addTest('Test prompts cover all categories', () => {
  const categories = [...new Set(TEST_PROMPTS.map((p) => p.category))];
  const requiredCategories = [
    'verification',
    'labeling',
    'style',
    'correction',
  ];

  requiredCategories.forEach((cat) => {
    runner.assert(categories.includes(cat), `Missing test category: ${cat}`);
  });
});

// Prompt length and format tests
runner.addTest('Core prompt length is reasonable', () => {
  runner.assert(
    CORE_PROMPT.length >= 100 && CORE_PROMPT.length <= 3000,
    `Prompt length ${CORE_PROMPT.length} is outside reasonable range (100-3000)`
  );
});

runner.addTest('Core prompt has no formatting issues', () => {
  runner.assert(
    !CORE_PROMPT.includes('\n\n') && !CORE_PROMPT.trim().startsWith(' '),
    'Prompt has formatting issues (double newlines or leading spaces)'
  );
});

// Keyword coverage tests
runner.addTest('Core prompt includes essential keywords', () => {
  const essentialKeywords = [
    'honest',
    'speculation',
    'verify',
    'label',
    'natural',
    'correction',
  ];

  essentialKeywords.forEach((keyword) => {
    runner.assert(
      CORE_PROMPT.toLowerCase().includes(keyword),
      `Missing essential keyword: ${keyword}`
    );
  });
});

// Anti-detection features tests
runner.addTest('Framework includes anti-detection measures', () => {
  const antiDetectionFeatures = [
    'contractions',
    'rhythm',
    'irregularities',
    'symmetry',
  ];

  const hasFeatures = antiDetectionFeatures.some((feature) =>
    CORE_PROMPT.toLowerCase().includes(feature)
  );

  runner.assert(hasFeatures, 'Missing anti-detection features');
});

// Run all tests
if (require.main === module) {
  runner.runTests().catch(console.error);
}

module.exports = TestRunner;
