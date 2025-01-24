#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';
import { Cleaner } from './cleaner.js';
import { loadConfig } from './config-loader.js';
import { detectCI } from './utils/detect-ci.js';

const DEFAULT_PATTERNS = ['**/tmp', '**/*.log', '.cache'];

async function main() {
    const argv = yargs(hideBin(process.argv))
        .usage('Usage: $0 [options]')
        .option('patterns', {
            alias: 'p',
            type: 'array',
            description: 'File patterns to clean',
            default: DEFAULT_PATTERNS
        })
        .option('exclude', {
            alias: 'e',
            type: 'array',
            description: 'Patterns to exclude from cleaning',
            default: []
        })
        .option('dry-run', {
            alias: 'd',
            type: 'boolean',
            description: 'List files without deleting',
            default: false
        })
        .option('config', {
            alias: 'c',
            type: 'string',
            description: 'Path to config file'
        })
        .help()
        .alias('help', 'h')
        .version()
        .argv;

    const ciInfo = detectCI();
    console.log(chalk.blue(`Running in ${ciInfo.name || 'local'} environment`));

    try {
        const config = argv.config ? await loadConfig(argv.config) : {};
        const patterns = config.patterns || argv.patterns;
        const exclude = config.exclude || argv.exclude;

        const cleaner = new Cleaner({
            patterns,
            exclude,
            dryRun: argv['dry-run']
        });

        await cleaner.clean();
    } catch (error) {
        console.error(chalk.red(`Error: ${error.message}`));
        process.exit(1);
    }
}

main().catch(error => {
    console.error(chalk.red(`Fatal error: ${error.message}`));
    process.exit(1);
}); 