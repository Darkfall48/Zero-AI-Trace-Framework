# 🎯 Zero-AI-Trace Framework

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Version](https://img.shields.io/badge/Version-1.0.1-green.svg)](https://github.com/Darkfall48/Zero-AI-Trace-Framework)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/Darkfall48/Zero-AI-Trace-Framework/blob/main/CONTRIBUTING.md)

**A comprehensive framework for controlling LLMs to produce authentic, transparent, and undetectable content**

[📚 **Full Documentation (Wiki)**](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki) • [🚀 Quick Start](#-quick-start) • [💾 Installation](#-installation) • [🛠️ CLI Tools](#-cli-tools)

---

## 🎯 Overview

The **Zero-AI-Trace Framework** is a professional-grade system for controlling ChatGPT and other LLMs to produce:

- **🔍 Verified and transparent content** with uncertainty labeling
- **🚫 Natural, human-like writing** that avoids AI detection
- **💫 Authentic responses** with human imperfections and rhythm

Perfect for developers, content creators, researchers, and anyone who needs reliable, natural AI outputs.

## ✨ Key Features

- ✅ **Uncertainty Verification**: Automatic labeling of unverifiable claims
- 🎭 **Style Humanization**: Natural writing patterns and rhythm variation
- 🔒 **Anti-Detection**: Breaks common AI fingerprints and patterns
- 🛠️ **Self-Correction**: Built-in protocols for fixing mistakes
- 📦 **Professional CLI**: Complete command-line interface
- 🔗 **API Integration**: Ready-to-use templates for all major platforms
- 📚 **Comprehensive Docs**: Complete wiki with guides and examples
- 🧪 **Automated Testing**: Validation tools and quality checks

## 💾 Installation

### Option 1: NPM Package (Recommended)

```bash
# Install globally for CLI access
npm install -g zero-ai-trace-framework

# Verify installation
zero-ai-trace --version
```

### Option 2: Quick Copy-Paste

Copy this prompt into any LLM interface:

```text
Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: "I cannot verify this," "I do not have access to that information," or "My knowledge base does not contain that." Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include "based on observed patterns." If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style.
```

## 🚀 Quick Start

### 1. Basic Setup

```bash
# Install and validate
npm install -g zero-ai-trace-framework
zero-ai-trace validate

# Get the core prompt
zero-ai-trace show
```

### 2. Test with Any LLM

Ask: **"What will the stock market do tomorrow?"**

**✅ Expected Response:**

```text
[Unverified] I can't predict what the stock market will do tomorrow. Market movements depend on countless factors that aren't predictable. Check financial news for current analysis, but remember even expert predictions are often wrong.
```

**❌ Typical AI Response:**

```text
I cannot provide financial advice or predict market movements. However, I recommend consulting qualified financial advisors and conducting thorough research before making investment decisions.
```

### 3. Integration Examples

#### ChatGPT Custom Instructions

Paste the framework prompt in Settings → Custom Instructions

#### OpenAI API

```javascript
const response = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [
    { role: 'system', content: ZERO_AI_TRACE_PROMPT },
    { role: 'user', content: userMessage },
  ],
});
```

#### Anthropic Claude

```javascript
const response = await anthropic.messages.create({
  model: 'claude-3-sonnet-20240229',
  system: ZERO_AI_TRACE_PROMPT,
  messages: [{ role: 'user', content: userMessage }],
});
```

## 🛠️ CLI Tools

### Available Commands

```bash
zero-ai-trace validate    # Test framework setup
zero-ai-trace show        # Display current prompt
zero-ai-trace test        # Run automated tests
zero-ai-trace build       # Generate variants
zero-ai-trace init <name> # Create new project
zero-ai-trace info        # Framework information
```

### Validation Example

```bash
$ zero-ai-trace test
✅ Uncertainty handling: PASS
✅ Natural style: PASS
✅ Correction protocol: PASS
✅ Labeling accuracy: PASS

Framework validation: 13/13 tests passed
```

## 📚 Complete Documentation

### 📖 **[Wiki Home](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki)**

Complete documentation, guides, and examples

### Key Wiki Pages:

- 🚀 **[Getting Started](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki/Getting-Started)** - Complete tutorial with testing
- 🔧 **[Advanced Usage](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki/Advanced-Usage)** - Optimization and troubleshooting
- 🔗 **[Integration Guide](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki/Integration-Guide)** - API and platform examples
- 🛠️ **[Templates & Snippets](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki/Templates-and-Snippets)** - Ready-to-use code
- 🎯 **[Core Principles](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki/Core-Principles)** - Framework fundamentals
- 🖥️ **[CLI Commands](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki/CLI-Commands)** - Command reference
- ❓ **[FAQ](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki/FAQ)** - Common questions

## 🎯 Core Benefits

### Transparency & Accuracy

- **Never** presents speculation as fact
- **Labels** uncertain content with `[Unverified]`, `[Inference]`, `[Speculation]`
- **Admits** knowledge limitations clearly

### Natural Writing Style

- **Avoids** robotic AI patterns ("Furthermore", "Moreover", "In conclusion")
- **Uses** contractions and varied sentence rhythm
- **Includes** human imperfections and casual markers

### Professional Quality

- **Self-correcting** when mistakes are detected
- **Consistent** application across all interactions
- **Customizable** for different domains and use cases

## 🧪 Example Transformations

### Before (Typical AI)

```text
I'd be happy to help you optimize your website's performance! Here are several comprehensive strategies that will significantly improve your loading times:

1. Implement robust caching mechanisms to enhance user experience
2. Furthermore, compress your images to reduce bandwidth utilization
3. Additionally, minify CSS and JavaScript files for optimal performance
4. In conclusion, these methods will ensure exceptional results
```

### After (Zero-AI-Trace)

```text
Few things make a real difference for site speed: enable browser caching, compress images (biggest impact for most sites), and minify CSS/JS files. CDN helps if you've got global users.

[Inference] These approaches usually work well based on what I've seen, but your specific situation might need different priorities. What kind of site are you working with?
```

## 🔗 Quick Links

- 📚 **[Complete Wiki Documentation](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki)**
- 🚀 **[Quick Start Tutorial](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki/Getting-Started)**
- 🔧 **[API Integration Examples](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki/Integration-Guide)**
- 🛠️ **[Code Templates](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki/Templates-and-Snippets)**
- 🔒 **[Security Policy](SECURITY.md)**
- 🤝 **[Contributing Guidelines](CONTRIBUTING.md)**
- 📄 **[License](LICENSE)**

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

### Ways to Contribute:

- 🐛 **Bug Reports**: Issues with framework behavior
- 💡 **Feature Requests**: New capabilities or improvements
- 📚 **Documentation**: Examples, guides, translations
- 🧪 **Testing**: Validation with different LLMs
- 🔧 **Integration**: Templates for new platforms

## 📜 License

This project is licensed under the **GNU General Public License v3.0**.  
See [LICENSE](LICENSE) for complete details.

---

<div align="center">

**🎯 Zero-AI-Trace Framework v2.0.0**  
_Authenticity • Transparency • Undetectability_

[⭐ Star this project](https://github.com/Darkfall48/Zero-AI-Trace-Framework) • [📚 Read the Wiki](https://github.com/Darkfall48/Zero-AI-Trace-Framework/wiki) • [🐛 Report Issues](https://github.com/Darkfall48/Zero-AI-Trace-Framework/issues)

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🚀 Installation](#-installation)
- [⚡ Quick Start](#-quick-start)
- [📖 Documentation](#-documentation)
  - [🚨 Core Principles](#-core-principles)
  - [🧩 Style & Humanization](#-style--humanization)
  - [🔒 Anti-Detection](#-anti-detection)
  - [🛠 Correction Protocol](#-correction-protocol)
- [💡 Examples](#-examples)
- [❓ FAQ](#-faq)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🎯 Overview

The **Zero-AI-Trace Framework** is a set of strict guidelines designed to control ChatGPT (or any other LLM) to:

- **🔍 Enforce verification and labeling of uncertain content**
- **🚫 Eliminate AI-sounding phrasing**
- **💫 Inject human-like rhythm and imperfections** to reduce detectability

This framework merges accuracy protocols with **style discipline**, designed for users who want outputs that read natural, transparent, and trace-free.

## ✨ Features

- ✅ **Mandatory verification** of uncertain content
- 🏷️ **Labeling system** for transparency
- 🎭 **Automatic humanization** of writing style
- 🔒 **Anti-detection** through AI pattern breaking
- 🛠️ **Built-in correction protocols**
- 📦 **Compact format** for system injection
- 🔧 **Compatible** with all major LLMs
- 🧪 **Automated testing** and validation
- 🚀 **Professional CLI** with multiple commands
- 📚 **Comprehensive documentation** and guides
- 🎯 **Multiple prompt variants** for different use cases
- 🔗 **Integration templates** for popular platforms

## 🚀 Installation

### Method 1: NPM Package (Recommended for Developers)

```bash
# Install globally for CLI access
npm install -g zero-ai-trace-framework

# Or install locally for project integration
npm install zero-ai-trace-framework
```

### Method 2: Direct Clone

```bash
git clone https://github.com/Darkfall48/Zero-AI-Trace-Framework.git
cd Zero-AI-Trace-Framework
npm install
```

### Method 3: Direct Injection

Copy and paste the following compact prompt into your ChatGPT or LLM interface:

```markdown
Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: "I cannot verify this," "I do not have access to that information," or "My knowledge base does not contain that." Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include "based on observed patterns." If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style.
```

### Method 4: System Configuration

For permanent integration, add the framework to your system prompts or API configurations.

## ⚡ Quick Start

### Basic Usage

1. **Install the framework**: `npm install -g zero-ai-trace-framework`
2. **Validate setup**: `zero-ai-trace validate`
3. **Get the prompt**: `zero-ai-trace show`
4. **Inject into your LLM** or use API integration
5. **Test with uncertain question**: "What will the weather be tomorrow?"
6. **Check the response**: should contain `[Unverified]` or "I cannot verify"
7. **Observe the style**: more natural, less "AI-like"

### CLI Commands

```bash
zero-ai-trace validate    # Validate framework setup
zero-ai-trace show        # Display current prompt
zero-ai-trace test        # Run automated tests
zero-ai-trace build       # Generate variants and templates
zero-ai-trace init <name> # Create new project
zero-ai-trace info        # Show framework information
```

### Quick Validation

✅ **Good example**:

```text
[Unverified] Based on observed patterns, ChatGPT seems less detectable with this framework. I cannot guarantee this claim without formal studies.
```

❌ **Bad example**:

```text
This framework guarantees zero detectability and significantly improves the performance of all LLMs in all contexts.
```

## 📖 Documentation

### 🚨 Core Principles

#### 1. Verification First

- **Never present speculation as fact**
- If unverifiable → clearly state:
  - _"I cannot verify this."_
  - _"I do not have access to that information."_
  - _"My knowledge base does not contain that."_
- **Accuracy > fluency**

#### 2. Labeling System

- Prefix uncertain information with: `[Inference]`, `[Speculation]`, `[Unverified]`
- If any part is unverified → **label the entire response**

#### 3. User Input Integrity

- Do not paraphrase, reinterpret, or alter input unless explicitly requested

#### 4. Restricted Claims

- Words like _Prevents, Guarantees, Will never, Fixes, Eliminates, Ensures_ → require `[Inference]` or `[Unverified]`
- All LLM behavior claims must carry `[Inference]` or `[Unverified]` + _"based on observed patterns"_

#### 5. Correction Protocol

- If labeling is missed:
  - _"Correction: I previously made an unverified claim. That was incorrect and should have been labeled."_

#### 6. Transparency

- If context is missing, ask
- **Never fabricate or guess**

### 🧩 Style & Humanization

#### Style Principles

- **Avoid** padding, pre-made templates, promotional tone
- Use **concrete facts**, **specific details**, **natural flow**
- Vary sentence rhythm: mix short bursts with longer thoughts
- Allow **human imperfections**: contractions, mild subjectivity, rhetorical pauses
- Avoid mechanical connectors (_furthermore, moreover, additionally_) unless truly needed
- Prioritize **specifics over abstractions**

#### Humanization Techniques

- ✅ **Natural contractions**: "It's", "Don't", "I've"
- ✅ **Rhythmic variation**: Short sentences. Then longer explanations that develop the idea.
- ✅ **Slight hesitations**: "It seems", "Probably", "To my knowledge"
- ✅ **Concrete examples** rather than abstract concepts
- ❌ **Avoid**: "Furthermore", "It should be noted", "In conclusion"

### 🔒 Anti-Detection

#### Breaking AI Patterns

- **Break patterns**:
  - No perfect symmetry in structure
  - Allow uneven rhythm, casual markers, contractions
- Use direct phrasing mixed with occasional hedging
- Lean toward human imperfection rather than polished uniformity

#### Markers to Avoid

- ❌ Systematic 3-point structure
- ❌ Overly neat conclusions
- ❌ Perfect transitions between paragraphs
- ❌ Consistently enthusiastic tone
- ❌ Exhaustive lists without priority

### 🛠 Correction Protocol

#### Simple Correction (missed labeling)

```text
Correction: I previously made an unverified claim.
That was incorrect and should have been labeled [Unverified].
```

#### Dual Correction

If a response **both**:

1. Misses labeling, **and**
2. Uses AI-sounding filler

Then issue **two corrections**:

- Labeling correction (Rule #5)
- Style correction: _"That response used phrasing that resembled AI writing; here's a clearer version."_

## 💡 Examples

### Example 1: Weather Question

**❌ Typical AI response**:

```text
I cannot provide real-time weather information as I do not have access to current meteorological data. However, I strongly recommend consulting reliable weather services such as Weather.com or your local meteorological service to obtain accurate and up-to-date forecasts.
```

**✅ Zero-AI-Trace response**:

```text
[Unverified] I don't have access to current weather data, so can't tell you what tomorrow's weather will be. You should check Weather.com or your usual weather app.
```

### Example 2: Technical Advice

**❌ Typical AI response**:

```text
To optimize your database performance, I highly recommend implementing several proven strategies. First, proper indexing of frequently queried columns will significantly improve response times. Second, normalizing your database schema will eliminate data redundancy. Finally, implementing caching techniques will substantially reduce server load.
```

**✅ Zero-AI-Trace response**:

```text
To speed up your DB, few approaches: index columns you query often (makes a real difference), normalize your schema if it's messy, and put caching in front. [Inference] These tips generally work well in my experience, but totally depends on your specific context.
```

### Example 3: Complex Technical Explanation

**Question**: "How does OAuth 2.0 authentication work?"

**✅ Zero-AI-Trace response**:

```text
OAuth 2.0 is a multi-step authorization system. Basically:

You want to access an app (Say: Spotify via your Google account). The app redirects you to Google with its credentials. Google asks if you authorize. If yes, it sends a code back to the app. The app exchanges this code for an access token directly with Google.

[Inference] It's safer than sharing your password everywhere, based on what I observe about the protocol. But implementation details vary by provider.

The token usually expires. Refresh tokens let you renew without re-authenticating.
```

## ❓ FAQ

### Q: Does this framework work with all LLMs?

**A:** [Inference] Based on observed tests, it seems compatible with ChatGPT, Claude, and other major LLMs. Effectiveness may vary depending on the model and its training.

### Q: Will this completely eliminate AI detection?

**A:** [Unverified] No method can guarantee 100% undetectability. This framework reduces the most obvious AI markers, but detectors are constantly evolving.

### Q: Can I modify the compact prompt?

**A:** Yes, but test carefully. Modifications can affect the balance between accuracy and natural style.

### Q: How long does it take to see results?

**A:** Immediate for basic style changes. Complete model adaptation may take a few exchanges.

### Q: Does this affect the technical quality of responses?

**A:** [Inference] From observations, technical quality generally remains intact. The framework prioritizes transparency, which may even improve reliability.

## 🔑 Compact Prompt for Injection

Here's the condensed version to copy-paste directly:

```markdown
Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: "I cannot verify this," "I do not have access to that information," or "My knowledge base does not contain that." Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include "based on observed patterns." If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style.
```

## 🛠️ Developer Tools

### Available Scripts

```bash
npm test              # Run automated test suite
npm run validate      # Validate framework configuration
npm run build         # Generate prompt variants and templates
npm run lint          # Check code quality
npm run format        # Format code according to style guide
```

### Project Structure

```
Zero-AI-Trace-Framework/
├── 📁 bin/               # CLI executable
├── 📁 docs/              # Comprehensive documentation
│   ├── advanced-guide.md    # Advanced optimization techniques
│   ├── tutorial.md          # Step-by-step tutorial
│   └── integration-examples.md # Real-world integrations
├── 📁 dist/              # Generated builds and variants
├── 📁 scripts/           # Build and validation scripts
├── 📁 src/               # Core framework code
├── 📁 templates/         # Integration templates and snippets
├── 📁 tests/             # Automated test suite
└── 📁 .vscode/           # VS Code configuration
```

### Prompt Variants

The build system generates specialized variants:

- **core.txt**: Full framework (1040 characters)
- **short.txt**: Compressed version (189 characters)
- **academic.txt**: Research and citation focused
- **technical.txt**: Implementation and precision focused
- **creative.txt**: Creative writing optimized
- **casual.txt**: Conversational and natural

## 🤝 Contributing

We welcome contributions! Here's how to participate:

### Types of Contributions Wanted

- 🐛 **Bug reports**: Cases where the framework doesn't work as expected
- 💡 **Enhancements**: Suggestions to optimize the prompt or add features
- 📚 **Documentation**: Examples, tutorials, translations
- 🧪 **Testing**: Validation with different LLMs and use cases
- ⚡ **Optimizations**: Shorter or more effective versions of the prompt

### Contribution Process

1. **Fork** the repository
2. **Create** a branch for your feature (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines

- Test your modifications with at least 2 different LLMs
- Include before/after examples for style changes
- Document new concepts or rules
- Respect the framework's spirit: transparency + natural style

### Code of Conduct

- Respectful and constructive discussions
- Focus on improving the framework
- No promotion of misleading or malicious content

## 📜 License

This project is licensed under the **GNU General Public License v3.0**.  
See the [LICENSE](LICENSE) file for details.

---

<div align="center">

**🎯 Zero-AI-Trace Framework**  
_Authenticity • Transparency • Undetectability_

[⭐ Star this project](https://github.com/Darkfall48/Zero-AI-Trace-Framework) • [🐛 Report a bug](https://github.com/Darkfall48/Zero-AI-Trace-Framework/issues) • [💬 Discussions](https://github.com/Darkfall48/Zero-AI-Trace-Framework/discussions)

</div>
