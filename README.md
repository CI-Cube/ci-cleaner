# CI Cleaner 🧹

> A powerful CI/CD cleanup tool maintained by [CICube](https://cicube.io)

Keep your CI/CD pipelines clean and efficient! Automatically remove temporary files, logs, and artifacts with intelligent pattern matching.

[![Maintained by CICube](https://img.shields.io/badge/maintained%20by-CICube-blue.svg)](https://cicube.io)
[![NPM Version](https://img.shields.io/npm/v/ci-cleaner.svg)](https://www.npmjs.com/package/ci-cleaner)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About CICube

CICube's AI agents monitor your GitHub Actions workflows, detect anomalies, and provide actionable fixes - saving you hours of debugging time.

Visit [cicube.io](https://cicube.io) to learn more about our other developer tools and solutions.

## Features

- 🎯 **Smart Pattern Matching**: Advanced glob pattern support for precise file targeting
- 🚫 **Selective Exclusion**: Protect important files with exclude patterns
- 🔍 **Safe Dry-Run Mode**: Preview changes before execution
- 🤖 **CI Platform Detection**: Automatic detection and optimization for:
  - GitHub Actions
  - GitLab CI
  - CircleCI
  - Generic CI environments
- ⚙️ **Flexible Configuration**: Support for both JSON and YAML config files
- 🎨 **Beautiful Output**: Clear, colorized console output for better visibility

## Installation

```bash
# Global installation
npm install -g ci-cleaner

# Or use directly with npx
npx ci-cleaner
```

## Quick Start

```bash
# Basic cleanup with default patterns
ci-cleaner

# Specify custom patterns
ci-cleaner --patterns="dist/ *.log build/"

# Exclude specific patterns
ci-cleaner --exclude="important.log critical-data/"

# Preview changes with dry-run
ci-cleaner --dry-run
```

## Configuration

### Via Config File

Create a `.cicleanerrc.json` or `.cicleanerrc.yaml` in your project root:

```json
{
  "patterns": [
    "dist/",
    "*.log",
    ".cache",
    "node_modules/",
    "coverage/",
    "build/",
    "tmp/"
  ],
  "exclude": [
    "important.log",
    "critical-data/"
  ]
}
```

Or in YAML format:

```yaml
patterns:
  - dist/
  - "*.log"
  - .cache
  - node_modules/
  - coverage/
  - build/
  - tmp/
exclude:
  - important.log
  - critical-data/
```

### CI Integration Examples

#### GitHub Actions

```yaml
- name: Cleanup Build Artifacts
  run: npx ci-cleaner --patterns="dist/ coverage/"
```

#### GitLab CI

```yaml
cleanup:
  stage: cleanup
  script:
    - npx ci-cleaner --patterns="dist/ *.tmp"
```

#### CircleCI

```yaml
- run:
    name: Cleanup Workspace
    command: npx ci-cleaner
```

## Command Line Options

| Option             | Description              | Default                    |
| ------------------ | ------------------------ | -------------------------- |
| `--patterns`, `-p` | File patterns to clean   | `**/tmp, **/*.log, .cache` |
| `--exclude`, `-e`  | Patterns to exclude      | `[]`                       |
| `--dry-run`, `-d`  | Preview without deleting | `false`                    |
| `--config`, `-c`   | Path to config file      | -                          |
| `--help`, `-h`     | Show help                | -                          |
| `--version`        | Show version             | -                          |

## Best Practices

1. **Always use dry-run first**: Preview changes with `--dry-run` before actual cleanup
2. **Be specific with patterns**: Use precise patterns to avoid accidental deletions
3. **Exclude critical files**: Always exclude important files using the `--exclude` option
4. **Use config files**: Store your cleanup patterns in a config file for consistency

## Support

- 📚 Documentation: [cicube.io/docs/ci-cleaner](https://cicube.io/docs/ci-cleaner)
- 🐛 Issue Tracker: [GitHub Issues](https://github.com/CI-Cube/ci-cleaner/issues)
- 💬 Community: [CICube Discord](https://discord.gg/cicube)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [CICube](https://cicube.io)
