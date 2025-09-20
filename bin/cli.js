#!/usr/bin/env node

/**
 * CLI tool for Zero-AI-Trace Framework
 * Provides command-line interface for framework operations
 */

const { Command } = require('commander');
const chalk = require('chalk');
const ora = require('ora');
const fs = require('fs-extra');
const path = require('path');

const { FRAMEWORK_VERSION, CORE_PROMPT } = require('../src/framework.js');
const FrameworkValidator = require('../scripts/validate-framework.js');
const FrameworkBuilder = require('../scripts/build.js');

const program = new Command();

program
  .name('zero-ai-trace')
  .description('CLI for Zero-AI-Trace Framework')
  .version(FRAMEWORK_VERSION);

// Validate command
program
  .command('validate')
  .description('Validate the framework setup and configuration')
  .option('-v, --verbose', 'Show detailed validation output')
  .action(async () => {
    const spinner = ora('Running framework validation...').start();

    try {
      const validator = new FrameworkValidator();
      await validator.validateFramework();
      spinner.succeed('Validation completed');
    } catch (error) {
      spinner.fail('Validation failed');
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

// Build command
program
  .command('build')
  .description('Build framework variants and templates')
  .option('-o, --output <dir>', 'Output directory', 'dist')
  .action(async () => {
    const spinner = ora('Building framework...').start();

    try {
      const builder = new FrameworkBuilder();
      await builder.build();
      spinner.succeed('Build completed');
    } catch (error) {
      spinner.fail('Build failed');
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

// Show command - display framework prompt
program
  .command('show')
  .description('Display the current framework prompt')
  .option('-c, --compact', 'Show compact version only')
  .option('-f, --format <type>', 'Output format (text|json|markdown)', 'text')
  .action((options) => {
    console.log(chalk.bold.blue('Zero-AI-Trace Framework Prompt\n'));

    if (options.format === 'json') {
      console.log(
        JSON.stringify(
          {
            version: FRAMEWORK_VERSION,
            prompt: CORE_PROMPT,
          },
          null,
          2
        )
      );
    } else if (options.format === 'markdown') {
      console.log('```');
      console.log(CORE_PROMPT);
      console.log('```');
    } else {
      console.log(chalk.gray('─'.repeat(80)));
      console.log(CORE_PROMPT);
      console.log(chalk.gray('─'.repeat(80)));
      console.log(chalk.blue(`\nLength: ${CORE_PROMPT.length} characters`));
    }
  });

// Test command - run framework tests
program
  .command('test')
  .description('Run framework test suite')
  .option('-p, --pattern <pattern>', 'Test file pattern', '**/*.test.js')
  .action(async () => {
    const spinner = ora('Running tests...').start();

    try {
      const TestRunner = require('../tests/run-tests.js');
      const runner = new TestRunner();
      await runner.runTests();

      if (runner.results.failed === 0) {
        spinner.succeed('All tests passed');
      } else {
        spinner.fail(`${runner.results.failed} test(s) failed`);
        process.exit(1);
      }
    } catch (error) {
      spinner.fail('Test execution failed');
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

// Init command - initialize new project with framework
program
  .command('init')
  .description('Initialize a new project with Zero-AI-Trace Framework')
  .argument('[project-name]', 'Project name', 'my-zero-ai-trace-project')
  .option(
    '-t, --template <template>',
    'Project template (basic|api|web)',
    'basic'
  )
  .action(async (projectName, options) => {
    const spinner = ora(`Creating project: ${projectName}...`).start();

    try {
      const projectDir = path.resolve(projectName);

      // Create project directory
      await fs.ensureDir(projectDir);

      // Copy template files based on type
      await copyTemplate(options.template, projectDir);

      // Create package.json
      await createPackageJson(projectName, projectDir);

      // Create basic files
      await createBasicFiles(projectDir);

      spinner.succeed(`Project ${projectName} created successfully!`);

      console.log(chalk.green('\nNext steps:'));
      console.log(`  cd ${projectName}`);
      console.log('  npm install');
      console.log('  npm run validate');
    } catch (error) {
      spinner.fail('Project creation failed');
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

// Info command - show framework information
program
  .command('info')
  .description('Show framework information and statistics')
  .action(() => {
    console.log(chalk.bold.blue('Zero-AI-Trace Framework Information\n'));

    console.log(`${chalk.bold('Version:')} ${FRAMEWORK_VERSION}`);
    console.log(
      `${chalk.bold('Prompt Length:')} ${CORE_PROMPT.length} characters`
    );
    console.log(`${chalk.bold('Core Components:')}`);
    console.log('  ✓ Verification protocols');
    console.log('  ✓ Labeling system');
    console.log('  ✓ Style humanization');
    console.log('  ✓ Anti-detection measures');
    console.log('  ✓ Correction protocols');

    console.log(`\n${chalk.bold('Supported LLMs:')}`);
    console.log('  • ChatGPT (GPT-3.5, GPT-4)');
    console.log('  • Claude (Claude-1, Claude-2, Claude-3)');
    console.log('  • Other instruction-following LLMs');

    console.log(`\n${chalk.bold('Repository:')}`);
    console.log('  https://github.com/Darkfall48/Zero-AI-Trace-Framework');
  });

// Helper functions
async function copyTemplate(template, projectDir) {
  const templateDir = path.join(__dirname, '..', 'templates', template);

  if (await fs.pathExists(templateDir)) {
    await fs.copy(templateDir, projectDir);
  } else {
    // Create basic template if specific template doesn't exist
    await createBasicTemplate(projectDir);
  }
}

async function createBasicTemplate(projectDir) {
  const indexContent = `const { CORE_PROMPT } = require('zero-ai-trace-framework');

// Example usage
console.log('Framework loaded successfully!');
console.log('Prompt length:', CORE_PROMPT.length);

// Your implementation here
`;

  await fs.writeFile(path.join(projectDir, 'index.js'), indexContent);
}

async function createPackageJson(projectName, projectDir) {
  const packageJson = {
    name: projectName,
    version: '1.0.0',
    description: 'Project using Zero-AI-Trace Framework',
    main: 'index.js',
    scripts: {
      start: 'node index.js',
      test: 'echo "No tests specified" && exit 0',
      validate: 'zero-ai-trace validate',
    },
    dependencies: {
      'zero-ai-trace-framework': `^${FRAMEWORK_VERSION}`,
    },
    keywords: ['ai', 'llm', 'zero-ai-trace'],
    license: 'MIT',
  };

  await fs.writeJSON(path.join(projectDir, 'package.json'), packageJson, {
    spaces: 2,
  });
}

async function createBasicFiles(projectDir) {
  const readmeContent = `# ${path.basename(projectDir)}

This project uses the Zero-AI-Trace Framework for improved LLM interactions.

## Setup

\`\`\`bash
npm install
\`\`\`

## Usage

\`\`\`bash
npm start
\`\`\`

## Validation

\`\`\`bash
npm run validate
\`\`\`

## Framework Documentation

For more information about the Zero-AI-Trace Framework, visit:
https://github.com/Darkfall48/Zero-AI-Trace-Framework
`;

  await fs.writeFile(path.join(projectDir, 'README.md'), readmeContent);

  const envContent = `# Add your API keys here
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
`;

  await fs.writeFile(path.join(projectDir, '.env.example'), envContent);
}

// Parse command line arguments
program.parse();
