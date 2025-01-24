import { readFile } from 'fs/promises';
import { parse as parseYaml } from 'yaml';
import path from 'path';

const DEFAULT_CONFIG_FILES = [
    '.cicleanerrc',
    '.cicleanerrc.json',
    '.cicleanerrc.yaml',
    '.cicleanerrc.yml'
];

export async function loadConfig(configPath) {
    try {
        const filePath = configPath || await findConfigFile();
        if (!filePath) {
            return {};
        }

        const content = await readFile(filePath, 'utf8');
        const ext = path.extname(filePath).toLowerCase();

        if (ext === '.json' || filePath.endsWith('.cicleanerrc')) {
            return JSON.parse(content);
        } else if (ext === '.yaml' || ext === '.yml') {
            return parseYaml(content);
        }

        throw new Error(`Unsupported config file format: ${ext}`);
    } catch (error) {
        if (configPath) {
            // Only throw if a specific config file was requested
            throw new Error(`Failed to load config file: ${error.message}`);
        }
        return {};
    }
}

async function findConfigFile() {
    for (const fileName of DEFAULT_CONFIG_FILES) {
        try {
            await readFile(fileName);
            return fileName;
        } catch (error) {
            // File doesn't exist, try next one
            continue;
        }
    }
    return null;
} 