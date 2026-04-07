# Claude Code Project — Devstash

> Setup: manual project configuration (not agentic)

## Initial project creation
```bash
npx create-next-app@latest --src-dir
```

## Cleanup steps after initial project creation

After the initial project creation, clean up the project.

### 1. Clean up the boilerplate page

Use Claude with this prompt:

> I have a fresh install of Next.js and I want you to clean up the boilerplate.
> The `src/app/page.tsx` should simply show an `<h1>` with the text **Devstash**.

### 2. Clean up global styles

Use Claude with this prompt:

> Remove all the default styles in `src/app/globals.css` but keep the Tailwind import.

### 3. Remove default SVGs

Delete all `.svg` files in the `public/` folder:
```bash
rm public/*.svg
```

## Project context and Claude.md

Initialize the Claude.md:

> /init

Update the Claude.md header with:
```md
# DevStash
A developer knowledge hub for snippets, commands, prompts, notes, files, images, links and custom types.
```

## Initial context files

Claude will load these files when we start a new session.

- `project-overview.md` — Core requirement of our project and everything in our spec
- `coding-standards.md` — coding styles and rules
- `ai-interaction.md` — how the AI interacts and communicates
- `current-feature.md` — the feature we are working on right now

### Creating `project-overview.md` file

Copy the content from course `project-overview.md` file and paste on Claude.ai to clean-up, type this prompt along with the original content of `project-overview.md` file from the course:

> I am building a SaaS called DevStash. Below are my planning notes. Review and clean up as you see fit. Format with things like Prisma models, diagrams, icons, links and any other info that you think is relevant. Put it in a file called `project-overview.md`.

After this setup, clear the Claude context and check the Claude understanding by running this prompt:

> /clear
> Can you tell what you know about the current project?


## Create `project-overview.md` file
Create a folder `context` at the root and update `Claude.md` file to provide `context files` reference.


## Create other .md files

For any real application, take content from http://cursor.directory/rules and copy the ready to use prompts.
For this application, we'll copy the `ai-interaction.md` and `coding-standard.md` directly from course folder.

## Important - Workflow to remember for development

We'll create `/feature` command with arguments for this workflow.

### AI Workflow

> **Start here every time** → `current-feature.md`

#### Steps

1. **Document** ← _Entry point_
   - Document feature/fix in `current-feature.md`
   - Add goals & notes (can come from spec file or direct input)
   - Status: **Pending**
  
2. **Branch**
   - Create a feature/fix branch

3. **Implement**
   - Implement the feature/fix in the new branch

4. **Test**
   - Manual or TDD

5. **Evaluate**
   - ✅ **Works** → proceed to Commit
   - ❌ **Doesn't Work** → go to Iterate

6. **Iterate** *(if needed)*
   - Prompt, manual code until complete
   - Loop back to Test

7. **Commit / Merge / Push**
   - Commit only if the build pass
   - PR if working with a team
   - Delete branch after merge

8. **Document** ← _Exit point_
   - Update `current-feature.md`
   - Status: **Complete**

9. **Test Production Code**

10. **Periodic Code Review & Optimizations**

---

*(Next feature → return to Step 1)*

## Create git repository

Created at
> https://github.com/GOVINDBHAVAN/devstash.git
>
> 