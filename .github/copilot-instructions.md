# Copilot Instructions for FSD Web Project

## Project Overview
This codebase is a simple web application consisting of multiple HTML files. There is no backend, build system, or external dependencies detected. The project appears to be focused on static web development, likely for educational or demonstration purposes.

## Major Components
- `Adm.html`: Likely an admin or dashboard page.
- `form.html`: Contains a form, possibly for user input or registration.
- `login.html`, `login2.html`: Login pages, may differ in layout or logic.

## Patterns & Conventions
- All files are plain HTML. No CSS or JavaScript files detected in the root.
- Navigation and data flow are handled via HTML forms and links.
- No templating, frameworks, or advanced build tools are present.
- File naming is descriptive and matches the page purpose.

## Developer Workflow
- **Editing:** Directly edit HTML files. No compilation or build step required.
- **Preview:** Open HTML files in a browser to view changes.
- **Debugging:** Use browser developer tools for inspecting layout and form behavior.
- **Testing:** Manual testing by interacting with the pages in the browser.

## Integration Points
- No external APIs, libraries, or backend integration detected.
- If adding JavaScript or CSS, place them in the root directory or link via CDN.

## Examples
- To add a new page, create a new `.html` file and link it from existing pages.
- To update navigation, edit anchor tags (`<a href="..."></a>`) in each HTML file.
- For form handling, use HTML form elements and specify `action`/`method` attributes as needed.

## Recommendations for AI Agents
- Focus on HTML structure, form elements, and navigation links.
- When adding new features, follow the existing file naming and organization conventions.
- Avoid introducing frameworks or build tools unless explicitly requested.
- Keep code readable and simple for educational clarity.

## Key Files
- `Adm.html`, `form.html`, `login.html`, `login2.html`: Main entry points for the application.

---
If any conventions or workflows are unclear, please ask for clarification or provide examples from new files added to the project.
