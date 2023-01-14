# Create lib

- Project name and a brief description of what the project does.
- Installation instructions, including any dependencies that need to be installed.
- Usage instructions, including examples of how to use the project.
- A list of contributors and maintainers, including contact information.
- A guide to the project's code, including information on any relevant design patterns or algorithms used.
- A link to the project's license.
- A section for troubleshooting and frequently asked questions (FAQs).
- Links to any relevant documentation or resources.

# TODO

[x] - Watch mode/dev mode
[x] - Linting/formatting
[] - Licensing.
[] - pnpm workspaces maybe
[] - Docs/readme
[] - Precommit hooks
[] - ci
[] - generator, was thinking to just use a basic bash app to read a few stdin's and sed some placeholders
[] - Look into a more custom eslint config

# Bugs

linting isn't working correctly
Currently can't pnpm build in lint-staged because all files are passed into esbuild, but I currently have a single target
There is also with tsc setup and esbuild. I'm not sure the best way to have this setup to allow me to have declaration files generated but not generate js files
Also I should redo my commit hooks to only run the files that are passed into them.
