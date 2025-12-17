## Copilot and Playwright MCP Usage Guidelines

### General Rules

1. **Test Coverage**: All code suggestions must include Playwright tests. See `tests/example.spec.ts` for style.
2. **TypeScript Best Practices**: Use TypeScript types where possible and avoid `any`.
3. **Playwright Usage**: Prefer Playwright APIs and accessible selectors (e.g., `getByRole`).
4. **Code Style**: Maintain consistent code style and naming conventions.
5. **Documentation**: Document complex logic with comments.
6. **No Sensitive Data**: Do not suggest or commit secrets or sensitive information.
7. **Pull Requests**: Copilot-generated code must be reviewed before merging.
8. **Error Handling**: Handle errors gracefully and provide clear messages.
9. **Dependencies**: Add only necessary, well-maintained dependencies and document them in `package.json`.
10. **Security**: Follow security best practices for automation and code execution.
11. **Run Tests Before Commit**: Run the test suite before committing; only commit when tests pass. Example:

    npx playwright test
12. **Waits**: Prefer auto-wait and `expect` assertions.
13. **Structure**: Use Arrange–Act–Assert structure.
14. **Page Objects**: Keep Page Objects minimal (YAGNI). No unused locators/methods.
15. **Functions**: Keep functions small and readable.
16. **Naming**: Use meaningful names; comments only for non-obvious logic.



### Conventional Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

- Start commit messages with a type, e.g., `feat:`, `fix:`, `docs:`, `test:`, `chore:`.
- Follow with a short description.
- Example: `feat: add Playwright test for login page`

---
