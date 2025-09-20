# 🖥️ CLI Commands - Command Documentation

The Zero-AI-Trace Framework provides a complete command-line interface with 6 main commands.

## 📋 Overview

```bash
# Global installation required
npm install -g zero-ai-trace-framework

# Check installation
zero-ai-trace --version

# General help
zero-ai-trace --help
```

## 🔍 Available Commands

### 1. `validate` - Interactive Validation

**Usage:**

```bash
zero-ai-trace validate
```

**Description:**
Launches interactive framework validation with real-time testing.

**Features:**

- ✅ Framework structure verification
- ✅ Labeling rules testing
- ✅ Writing style validation
- ✅ AI markers detection
- ✅ Detailed compliance report

**Usage Example:**

```bash
$ zero-ai-trace validate
🎯 Zero-AI-Trace Framework - Interactive Validation

✅ Framework structure: Valid
✅ Labeling rules: Compliant
✅ Humanization style: Configured
⚠️  Anti-detection: Partially configured

Overall score: 85/100
```

### 2. `show` - Prompt Display

**Usage:**

```bash
zero-ai-trace show [options]
```

**Options:**

- `--format <type>`: Output format (text, json, markdown)
- `--compact`: Optimized compact version
- `--variant <name>`: Specific variant

**Description:**
Displays the framework's main prompt in different formats.

**Examples:**

```bash
# Standard prompt
zero-ai-trace show

# Compact version for injection
zero-ai-trace show --compact

# JSON format for API
zero-ai-trace show --format json

# Development variant
zero-ai-trace show --variant dev
```

### 3. `test` - Automated Testing

**Usage:**

```bash
zero-ai-trace test [options]
```

**Options:**

- `--verbose`: Detailed output
- `--suite <name>`: Specific test suite

**Description:**
Runs the complete automated test suite (13 tests).

**Tests Included:**

- Framework structure and integrity
- Critical keywords coverage
- Labeling rules validation
- Style and humanization tests
- AI patterns detection
- Automatic correction tests

**Example:**

```bash
$ zero-ai-trace test --verbose
🧪 Running automated tests...

✅ Test 1/13: Framework structure
✅ Test 2/13: Critical keywords
✅ Test 3/13: Labeling rules
...
✅ Test 13/13: Automatic correction

🎉 All tests pass (13/13)
Execution time: 1.2s
```

### 4. `build` - Variant Generation

**Usage:**

```bash
zero-ai-trace build [options]
```

**Options:**

- `--output <dir>`: Output directory
- `--variants <list>`: Specific variants to generate

**Description:**
Automatically generates 6 prompt variants and integration templates.

**Generated Variants:**

1. **compact.txt** - Optimized version for injection
2. **extended.txt** - Complete version with explanations
3. **api.json** - Structured format for API
4. **chatgpt.md** - Optimized for ChatGPT web
5. **system.txt** - For system prompts
6. **dev.txt** - Development version with debug

**Created Templates:**

- ChatGPT Custom Instructions integration
- OpenAI API configuration
- Web frameworks template

**Example:**

```bash
$ zero-ai-trace build --output ./prompts
📦 Generating variants and templates...

✅ compact.txt (1,040 characters)
✅ extended.txt (2,840 characters)
✅ api.json (Complete structure)
✅ chatgpt.md (Formatted markdown)
✅ system.txt (System prompt)
✅ dev.txt (Debug version)

📄 Generated templates:
✅ ChatGPT Custom Instructions
✅ API Integration Template
✅ Web Framework Template

🎉 Build completed successfully!
```

### 5. `init` - Project Initialization

**Usage:**

```bash
zero-ai-trace init <project-name> [options]
```

**Options:**

- `--template <type>`: Project template (basic, api, web)
- `--language <lang>`: Language (js, python, etc.)

**Description:**
Creates a new project with framework integration.

**Generated Structures:**

```
my-project/
├── config/
│   ├── zero-ai-trace.json
│   └── prompts/
├── src/
│   ├── framework.js
│   └── examples/
├── tests/
│   └── framework.test.js
├── package.json
└── README.md
```

**Example:**

```bash
$ zero-ai-trace init my-chatbot --template api --language js
🚀 Initializing project 'my-chatbot'...

✅ Basic structure created
✅ Zero-AI-Trace configuration
✅ API integration templates
✅ Automated tests configured
✅ Documentation generated

📁 Project created in: ./my-chatbot
📚 See README.md to get started
```

### 6. `info` - Framework Information

**Usage:**

```bash
zero-ai-trace info [options]
```

**Options:**

- `--stats`: Detailed statistics
- `--rules`: List of active rules

**Description:**
Displays framework information and statistics.

**Displayed Information:**

- Framework version
- Number of active rules
- Test statistics
- Current configuration
- Useful links

**Example:**

```bash
$ zero-ai-trace info --stats
📊 Zero-AI-Trace Framework v1.0.1

🎯 Current configuration:
  ├─ Active rules: 15
  ├─ Available tests: 13
  ├─ Variants: 6
  └─ Templates: 3

📈 Statistics:
  ├─ Compact prompt: 1,040 characters
  ├─ Monitored keywords: 8
  ├─ Anti-detection patterns: 12
  └─ Last validation: ✅ Passed

🔗 Resources:
  ├─ Documentation: https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki
  ├─ Issues: https://github.com/Darkfall48/Zero-AI-Trace-Framework/issues
  └─ Discussions: https://github.com/Darkfall48/Zero-AI-Trace-Framework/discussions
```

## 🎯 Recommended Workflows

### Development Workflow

```bash
# 1. Create a new project
zero-ai-trace init my-project --template api

# 2. Validate configuration
zero-ai-trace validate

# 3. Generate variants
zero-ai-trace build --output ./dist

# 4. Test
zero-ai-trace test --verbose
```

### Production Workflow

```bash
# 1. Get compact prompt
zero-ai-trace show --compact > prompt.txt

# 2. Validate before deployment
zero-ai-trace test

# 3. Get integration templates
zero-ai-trace build --output ./production
```

### Debug Workflow

```bash
# 1. Detailed information
zero-ai-trace info --stats

# 2. Validation with debug
zero-ai-trace validate

# 3. Verbose tests
zero-ai-trace test --verbose

# 4. Development prompt
zero-ai-trace show --variant dev
```

## ⚙️ Advanced Configuration

### Environment Variables

```bash
# Custom configuration directory
export ZERO_AI_TRACE_CONFIG_DIR="/path/to/config"

# Verbosity level (0-3)
export ZERO_AI_TRACE_VERBOSE=2

# Default output format
export ZERO_AI_TRACE_DEFAULT_FORMAT="json"
```

### Configuration File

Create `~/.zero-ai-trace.json`:

```json
{
  "defaultFormat": "compact",
  "autoValidate": true,
  "customRules": [],
  "outputDirectory": "./zero-ai-trace-output",
  "verboseMode": false
}
```

## 🔧 CLI Troubleshooting

### Command Not Found

```bash
# Check global installation
npm list -g zero-ai-trace-framework

# Reinstall if necessary
npm install -g zero-ai-trace-framework
```

### Permission Errors

```bash
# On Unix/Mac
sudo npm install -g zero-ai-trace-framework

# Or configure npm without sudo
npm config set prefix ~/.npm-global
```

### Node.js Issues

```bash
# Check Node.js version (>=14 required)
node --version

# Update if necessary
```

## 📚 See Also

- [[Getting Started|Getting Started Guide]] - To get started
- [[Advanced Guide|Advanced Guide]] - Optimizations and techniques
- [[Examples|Examples]] - Practical use cases
- [[Troubleshooting|Troubleshooting]] - Solutions to common problems

---

_Documentation updated for version 1.0.1_
