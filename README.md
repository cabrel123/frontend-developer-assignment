# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Installation

Run npm i

CI/CD project installation
Run npm ci.

# Development server

Run npm run dev to start dev server. The app will reflect immediately if there are any changes of the source files.

# Coding convention

Run npm run lint to check lint and format.

Run npm run lint--fix to fix all "auto-fixable" issues.

# Build

Run npm run build[:mode] to build the project.

# Build :mode is optional.

By default, this command will apply environment variables from .env and exec. build for production.
The build artifacts will be stored in the dist/ directory.
Run npm run preview to preview lastest build on local.

# Note

package-lock.json is ignored due to current CI/CD configuration. In case your team need to/is required to archive one of those various purposes of package-lock.json, there are several suggested ways to achieve it:

Share this file to others members manually.
Update .gitignore to allow this file to be committed into source repositories, then update CI/CD configuration to adapt with it.
