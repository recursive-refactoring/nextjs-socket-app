## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Commit Format

````We use the Conventional Commits format for our commit messages. Each commit message should have a specific format:

Format: `<type>(<scope>): <subject> (<issue number>)`

`<scope>` is optional

feat(hat): Implemented responsive design for the homepage and resolved compatibility issues with older browsers. (#2223)
^--^^--^      ^------------^ ^----^
|   |         |               |
|   |         |               +-----> Issue number.
|   |         |
|   |         +-> Summary in present tense.
|   |
|   +-> Specific scope
|
|
+-------> Type: chore, docs, feat, fix, refactor, style, breaking or test.
More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)
- `breaking`: (introduces a breaking change which is affecting other things too)


Please follow this format when making commits to our project. It helps us maintain a clean and organized commit history.```
````
