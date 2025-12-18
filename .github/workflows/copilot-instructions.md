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
## Playwright MCP (CLI / Tools)

This project may use Playwright MCP tools for browser automation. Below is a concise reference of common tools and CLI flags. Prefer the official Playwright MCP documentation for full details.

Common MCP tools:

- `browser_snapshot` – capture an accessibility snapshot (better than a screenshot)
- `browser_click` – click an element on the page
- `browser_drag` – drag and drop between elements
- `browser_type` – type text into an input
- `browser_select_option` – select an option in a dropdown
- `browser_press_key` – press a keyboard key
- `browser_wait_for` – wait for text, element, or timeout
- `browser_file_upload` – upload file(s) to a form
- `browser_handle_dialog` – handle alert/confirm/prompt
- `browser_hover` – hover over an element
- `browser_navigate` – navigate to a URL
- `browser_take_screenshot` – take a screenshot of page/element
- `browser_pdf_save` – save page as PDF
- `browser_network_requests` – list network requests
- `browser_console_messages` – read console messages
- `browser_tab_list` / `browser_tab_new` / `browser_tab_select` / `browser_tab_close` – manage tabs
- `browser_generate_playwright_test` – generate a Playwright test from a scenario
- `browser_install` – install a browser from configuration
- `browser_close` – close the page/browser
- `browser_resize` – change the browser window size

Common CLI flags:

- `--headless` – run in headless mode
- `--browser <browser>` – choose `chromium`, `firefox`, or `webkit`
- `--device <device>` – emulate a device (e.g., `iPhone 15`)
- `--user-agent <ua string>` – set the user agent
- `--viewport-size <width,height>` – set viewport size
- `--output-dir <path>` – directory for outputs
- `--port <port>` – set MCP server port
- `--storage-state <path>` – load storage state

Always prefer English messages and documentation within this repository.

This helps keep commit history readable and organized.

_These rules help ensure code quality, maintainability, and security when using Copilot in this project._
## Copilot and Playwright MCP Usage Guidelines

### General Rules

1. **Test Coverage**: All code suggestions must be accompanied by Playwright tests. See `tests/example.spec.ts` for style.
2. **TypeScript Best Practices**: Use TypeScript types where possible; avoid `any`.
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

### Conventional Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

- Start with a type, e.g., `feat:`, `fix:`, `docs:`, `test:`, `chore:`.
- Follow with a short description.
- Example: `feat: add Playwright test for login page`

---

## Playwright MCP (CLI / Tools)

This project may use Playwright MCP tools for browser automation. Below is a concise reference of common tools and CLI flags. Prefer the official Playwright MCP documentation for full details.

Common MCP tools:

- `browser_snapshot` – capture an accessibility snapshot (better than a screenshot)
- `browser_click` – click an element on the page
- `browser_drag` – drag and drop between elements
- `browser_type` – type text into an input
- `browser_select_option` – select an option in a dropdown
- `browser_press_key` – press a keyboard key
- `browser_wait_for` – wait for text, element, or timeout
- `browser_file_upload` – upload file(s) to a form
- `browser_handle_dialog` – handle alert/confirm/prompt
- `browser_hover` – hover over an element
- `browser_navigate` – navigate to a URL
- `browser_take_screenshot` – take a screenshot of page/element
- `browser_pdf_save` – save page as PDF
- `browser_network_requests` – list network requests
- `browser_console_messages` – read console messages
- `browser_tab_list` / `browser_tab_new` / `browser_tab_select` / `browser_tab_close` – manage tabs
- `browser_generate_playwright_test` – generate a Playwright test from a scenario

Common CLI flags:

- `--headless` – run in headless mode
- `--browser <browser>` – choose `chromium`, `firefox`, or `webkit`
- `--device <device>` – emulate a device (e.g., `iPhone 15`)
- `--user-agent <ua string>` – set the user agent
- `--viewport-size <width,height>` – set viewport size
- `--output-dir <path>` – directory for outputs
- `--port <port>` – set MCP server port
- `--storage-state <path>` – load storage state

Always prefer English messages and documentation within this repository.

This helps keep commit history readable and organized.

_These rules help ensure code quality, maintainability, and security when using Copilot in this project._

### Playwright MCP tools (reference):

- `browser_snapshot` – capture an accessibility snapshot (better than a screenshot)
- `browser_click` – Kliknij w element na stronie
- `browser_drag` – drag and drop between elements
- `browser_type` – Wpisz tekst do edytowalnego elementu
- `browser_select_option` – select an option in a dropdown
- `browser_press_key` – press a keyboard key
- `browser_wait_for` – wait for text, element, or timeout
- `browser_file_upload` – upload file(s) to a form
- `browser_handle_dialog` – handle alert/confirm/prompt dialogs
- `browser_hover` – hover over an element
- `browser_navigate` – navigate to a URL
- `browser_navigate_back` – Cofnij do poprzedniej strony
- `browser_navigate_forward` – navigate forward in history
- `browser_take_screenshot` – take a screenshot of page/element
- `browser_pdf_save` – save page as PDF
- `browser_network_requests` – list network requests
- `browser_console_messages` – read console messages
- `browser_tab_list` – list open tabs
- `browser_tab_new` – open a new tab (optionally with URL)
- `browser_tab_select` – select a tab by index
- `browser_tab_close` – close a tab
- `browser_generate_playwright_test` – generate a Playwright test from a scenario
- `browser_install` – install a browser from configuration
- `browser_close` – close the page/browser
- `browser_resize` – change the browser window size

##### Vision mode (visual mode):
- `browser_screen_capture` – take a screenshot (visual mode)
- `browser_screen_move_mouse` – move the mouse to a position
- `browser_screen_click` – click the mouse
- `browser_screen_drag` – drag with the mouse
- `browser_screen_type` – type using visual mode

#### CLI flags / arguments for Playwright MCP:

- `--allowed-origins <origins>` – allowed origins (semicolon-separated)
- `--blocked-origins <origins>` – blocked origins (semicolon-separated)
- `--block-service-workers` – block service workers
- `--browser <browser>` – choose a browser (chromium, firefox, webkit)
- `--browser-agent <endpoint>` – use a browser agent (experimental)
- `--caps <caps>` – list of capabilities to enable (e.g., tabs, pdf, history)
- `--cdp-endpoint <endpoint>` – connect via a CDP endpoint
- `--config <path>` – use a config file
- `--device <device>` – emulate a device (e.g., "iPhone 15")
- `--executable-path <path>` – path to browser executable
- `--headless` – run in headless mode
- `--host <host>` – host to listen on (default localhost)
- `--ignore-https-errors` – ignore HTTPS errors
- `--isolated` – isolated browser profile
- `--image-responses <mode>` – handle images: allow, omit, auto
- `--no-sandbox` – disable sandbox
- `--output-dir <path>` – output directory
- `--port <port>` – MCP server port
- `--proxy-bypass <domains>` – proxy bypass domains
- `--proxy-server <address>` – proxy server
- `--save-trace` – save Playwright trace
- `--storage-state <path>` – storage state file
- `--user-agent <ua string>` – user agent
- `--user-data-dir <path>` – user data directory
- `--viewport-size <width,height>` – viewport size
- `--vision` – visual mode (screenshots)