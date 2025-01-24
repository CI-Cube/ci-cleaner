export function detectCI() {
    if (process.env.GITHUB_ACTIONS === 'true') {
        return {
            name: 'GitHub Actions',
            platform: 'github',
            workspace: process.env.GITHUB_WORKSPACE
        };
    }

    if (process.env.GITLAB_CI === 'true') {
        return {
            name: 'GitLab CI',
            platform: 'gitlab',
            workspace: process.env.CI_PROJECT_DIR
        };
    }

    if (process.env.CIRCLECI === 'true') {
        return {
            name: 'CircleCI',
            platform: 'circleci',
            workspace: process.env.CIRCLE_WORKING_DIRECTORY
        };
    }

    if (process.env.CI === 'true') {
        return {
            name: 'Generic CI',
            platform: 'generic',
            workspace: process.cwd()
        };
    }

    return {
        name: null,
        platform: 'local',
        workspace: process.cwd()
    };
} 