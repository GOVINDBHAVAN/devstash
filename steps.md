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

Check git status using prompt
> What is the status of git
> yes this is my github repository path: https://github.com/GOVINDBHAVAN/devstash.git, setup this project but do not commit to github now, just prepare the github locally
> commit with the message "Initial commit with nextjs and tailwind setup"
> add the remote repo
> push to origin

## Update feature after initial setup and git hub commit

> add the initial setup of next.js to the history in the @context/current-feature.md  
> 




## Prepare UI design sample page using v0.app

For UI presentation (irrespective) of code, prepare UI design (like figma) use v0.app for UI and paste that screenshot in Claude prompt.

### Develop Dashboard

Always first start developing the main feature of the application like Dashboard.

#### Preparing UI mock design using v0.app

Take the content from file and paste in v0.app and add project overview content at the end:

```md
I want to prototype a dashboard UI for my SaaS. I am going to give you the entire project overview. From that, I want you to create ONLY a mockup of the dashboard. It should not function other than visual elements. This is only to create the basic UI.

I will paste the project overview below to use as a reference for the design. Again, you are NOT creating the project as a whole but only the dashboard UI. Things like the collapsable sidebar, the main grid of collections and items, the item drawer, etc. Add dummy data for collections and items. Also, make it responsive.

Project Overview

<!--PASTE PROJECT-OVERVIEW.md-->
```

##### Fine tunning v0.app mock design using prompts on v0.app
 
 Review the design and fine-tune like below prompt:
 
 > the color codes for the items are import. we need the item cards to have a border with item color. the collection cards should have file border color of whatever item type there is msost in that collection.

Take screenshot of the design and paste in claude code. We'll use the course given images available in: D:\Training\ChatGPT\Claude\Complete this Coding With AI - Planning To Production\5 - Start Building DevStash\lesson-resources\screenshots

Put those screenshots in the \context\screenshots\ folder

Important to update `project-overview.md` file to reference those screenshots:

- Add new section after the ### Design References or ## 🎨 UI / UX as ### Screenshots like:

```text
### Screenshots

Refer to the screenshots below as a base for the dashboard UI. It does not have to be exact. Use it as a reference:

- @context/screenshots/dashboard-ui-main.png
- @context/screenshots/dashboard-ui-drawer.
```

#### Prepare mock data for the dashboard

##### Mock Data Prompt

Paste this below prompt in the Claude:

```text
We need a single source of truth for mock data to use for the dashboard UI until we implement a database. Read @context/project-overview.md and look at @context/screenshots/dashboard-ui-main.png to see the data structure.

Create a new file at src/lib/mock-data.ts and create a simple data structure for the dashboard UI. It should include items, collections, item types and a user for the current logged in user. Do not make this too complex. It is only for displaying data in the dashboard like the screenshot. Do not create helper methods, just a simple data file to import.
```

Then push to git:
> Push to main


#### Now developing the actual dashboard

- Create a new 'features' folder inside 'context'.
- Copy all the dashboard spec files from course to `context\features` src folder: "D:\Training\ChatGPT\Claude\Complete this Coding With AI - Planning To Production\1 - Introduction & What Is AI\coding-with-ai-course-resources\context\features\"
- dashboard-phase-1-spec.md
- dashboard-phase-2-spec.md
- dashboard-phase-3-spec.md

##### Phase 1 development
```text
> Update the @context\current-feature.md to add the feature from @context\features\dashboard-phase-1-spec.md. Set the status to in progress.

> Open a new branch and implement the feature in @context\current-feature.md

After review the UI update status to completed

> Update the @context\current-feature.md to be completed.

> Also clear the info and add the feature to the history

> Commit and merge to main then delete the feature branch.

> Go ahead and push

> /clear

```

##### Phase 2 development

```text
> Update the @context\current-feature.md to add the feature from @context\features\dashboard-phase-2-spec.md. Set the status to in progress.

> Implement the feature.

Here it should have understanding to auto create the new feature branch.

> Update the @context\current-feature.md to be completed.

> Also clear the info and add the feature to the history


> Commit and merge to main then delete the feature branch.

> Go ahead and push


```