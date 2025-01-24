# Contributing to ci-cleaner

First off, thank you for considering contributing to ci-cleaner! It's people like you that make ci-cleaner such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to [info@cicube.io](mailto:info@cicube.io).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [issue list](https://github.com/CI-Cube/ci-cleaner/issues) as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include details about your configuration and environment

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* A clear and descriptive title
* A detailed description of the proposed functionality
* Explain why this enhancement would be useful to most ci-cleaner users
* List some other tools or applications where this enhancement exists, if applicable

### Pull Requests

* Fork the repo and create your branch from `main`
* If you've added code that should be tested, add tests
* Ensure the test suite passes
* Make sure your code lints
* Update the documentation

## Development Setup

1. Fork and clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a branch for your changes:
   ```bash
   git checkout -b my-feature
   ```
4. Make your changes and test them:
   ```bash
   npm test
   npm run lint
   ```

## Style Guide

* Use ES modules (import/export)
* Follow the existing code style
* Use meaningful variable names
* Add comments for complex logic
* Keep functions small and focused

## Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

## License

By contributing, you agree that your contributions will be licensed under its MIT License. 