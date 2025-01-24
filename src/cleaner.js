import { globby } from 'globby';
import { unlink, rmdir } from 'fs/promises';
import { stat } from 'fs/promises';
import chalk from 'chalk';
import path from 'path';

export class Cleaner {
    constructor({ patterns, exclude = [], dryRun = false }) {
        this.patterns = patterns;
        this.exclude = exclude;
        this.dryRun = dryRun;
    }

    async clean() {
        try {
            const files = await this.findFiles();

            if (files.length === 0) {
                console.log(chalk.yellow('No files found matching the patterns'));
                return;
            }

            console.log(chalk.blue(`Found ${files.length} files/directories to clean`));

            for (const file of files) {
                try {
                    const stats = await stat(file);
                    const isDirectory = stats.isDirectory();

                    if (this.dryRun) {
                        console.log(chalk.yellow(`Would delete ${isDirectory ? 'directory' : 'file'}: ${file}`));
                        continue;
                    }

                    if (isDirectory) {
                        await rmdir(file, { recursive: true });
                        console.log(chalk.green(`Deleted directory: ${file}`));
                    } else {
                        await unlink(file);
                        console.log(chalk.green(`Deleted file: ${file}`));
                    }
                } catch (error) {
                    console.error(chalk.red(`Failed to delete ${file}: ${error.message}`));
                }
            }
        } catch (error) {
            throw new Error(`Failed to clean files: ${error.message}`);
        }
    }

    async findFiles() {
        const options = {
            dot: true,
            ignore: this.exclude,
            absolute: false,
            onlyFiles: false,
            followSymbolicLinks: false
        };

        return await globby(this.patterns, options);
    }
} 