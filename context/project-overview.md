# 🗃️ DevStash — Project Overview

> **Store Smarter. Build Faster.**
> A centralized, AI-enhanced knowledge hub for developers.

---

## 📌 The Problem

Developers scatter their essential knowledge across too many places:

| Where it lives | What's stored there |
|---|---|
| VS Code / Notion | Code snippets |
| Chat history | AI prompts |
| Project folders | Context files |
| Browser bookmarks | Useful links |
| Random folders | Docs & references |
| `.txt` files | Terminal commands |
| GitHub Gists | Project templates |
| Bash history | One-liner scripts |

The result: **context switching, lost knowledge, and inconsistent workflows.**

➡️ DevStash provides **one searchable, AI-enhanced hub** for all dev knowledge and resources.

---

## 🧑‍💻 Target Users

| Persona | Core Need |
|---|---|
| 🧑‍💻 Everyday Developer | Quick access to snippets, commands, links |
| 🤖 AI-First Developer | Store prompts, workflows, context files |
| 🎓 Content Creator / Educator | Save course notes, reusable code |
| 🏗️ Full-Stack Builder | Patterns, boilerplates, API references |

---

## ✨ Core Features

### A) Items & System Types

Items are the core unit of content. Built-in system types:

- `Snippet` — Code fragments
- `Prompt` — AI prompt templates
- `Note` — Markdown notes
- `Command` — CLI / terminal commands
- `File` — Uploaded files (templates, configs)
- `Image` — Screenshots, diagrams
- `URL` — Bookmarked links

> 💎 **Pro users** can create custom item types.

---

### B) Collections

Group items of any mixed type into named collections.

**Examples:**
- `React Patterns`
- `Context Files`
- `Python Snippets`
- `My Prompts`

---

### C) Search

Full-text search across:
- Item content
- Tags
- Titles
- Item types

---

### D) Authentication

- Email + Password
- GitHub OAuth (via [NextAuth v5](https://authjs.dev/))

---

### E) Additional Features

| Feature | Notes |
|---|---|
| ⭐ Favorites & pinned items | Quick access to frequent items |
| 🕐 Recently used | Activity-aware suggestions |
| 📥 Import from files | Bulk onboarding |
| ✏️ Markdown editor | For notes and text items |
| 📎 File uploads | Images, docs, templates |
| 📤 Export | JSON or ZIP |
| 🌑 Dark mode | Default |

---

### F) AI Superpowers

Powered by **OpenAI `gpt-4o-mini`**:

| Feature | Description |
|---|---|
| 🏷️ Auto-tagging | Automatically suggest relevant tags |
| 📝 AI summaries | One-line summary of any item |
| 🔍 Explain Code | Plain-English code explanations |
| ✨ Prompt optimization | Improve & rewrite prompts |

---

## 🗄️ Data Model

> Schema is a starting point and will evolve.

```prisma
model User {
  id                   String       @id @default(cuid())
  email                String       @unique
  password             String?
  isPro                Boolean      @default(false)
  stripeCustomerId     String?
  stripeSubscriptionId String?
  items                Item[]
  itemTypes            ItemType[]
  collections          Collection[]
  tags                 Tag[]
  createdAt            DateTime     @default(now())
  updatedAt            DateTime     @updatedAt
}

model Item {
  id          String      @id @default(cuid())
  title       String
  contentType String      // "text" | "file"
  content     String?     // used for text-based types
  fileUrl     String?
  fileName    String?
  fileSize    Int?
  url         String?
  description String?
  isFavorite  Boolean     @default(false)
  isPinned    Boolean     @default(false)
  language    String?     // e.g. "typescript", "python"

  userId       String
  user         User       @relation(fields: [userId], references: [id])

  typeId       String
  type         ItemType   @relation(fields: [typeId], references: [id])

  collectionId String?
  collection   Collection? @relation(fields: [collectionId], references: [id])

  tags         ItemTag[]

  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
}

model ItemType {
  id       String  @id @default(cuid())
  name     String
  icon     String?
  color    String?
  isSystem Boolean @default(false) // true = built-in type

  userId   String?
  user     User?   @relation(fields: [userId], references: [id])

  items    Item[]
}

model Collection {
  id          String   @id @default(cuid())
  name        String
  description String?
  isFavorite  Boolean  @default(false)

  userId      String
  user        User     @relation(fields: [userId], references: [id])

  items       Item[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Tag {
  id     String    @id @default(cuid())
  name   String
  userId String
  user   User      @relation(fields: [userId], references: [id])
  items  ItemTag[]
}

model ItemTag {
  itemId String
  tagId  String

  item   Item @relation(fields: [itemId], references: [id])
  tag    Tag  @relation(fields: [tagId], references: [id])

  @@id([itemId, tagId])
}
```

---

## 🧱 Tech Stack

| Category | Choice |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (React 19, App Router) |
| Language | TypeScript |
| Database | [Neon](https://neon.tech/) PostgreSQL + [Prisma ORM](https://www.prisma.io/) |
| Caching | Redis *(optional)* |
| File Storage | [Cloudflare R2](https://developers.cloudflare.com/r2/) |
| CSS / UI | [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Auth | [NextAuth v5](https://authjs.dev/) (email + GitHub) |
| AI | [OpenAI](https://platform.openai.com/) `gpt-4o-mini` |
| Payments | [Stripe](https://stripe.com/) + webhooks |
| Deployment | [Vercel](https://vercel.com/) |
| Monitoring | [Sentry](https://sentry.io/) *(later)* |

---

## 🔌 API Architecture

```
Client  ←→  Next.js API Routes
                │
    ┌───────────┼────────────┐
    ▼           ▼            ▼
Neon DB     Cloudflare R2  OpenAI
(Prisma)    (File Storage) (AI)
    
    Optional: Redis (Cache)
```

---

## 🔐 Auth Flow

```
User → Login Page → NextAuth
                        │
              ┌─────────┴──────────┐
              ▼                    ▼
         Email/Password       GitHub OAuth
              └─────────┬──────────┘
                        ▼
                    Session
                        ▼
                   App Access
```

---

## 🧠 AI Feature Flow

```
Item Content
     │
     ▼
Next.js API Route
     │
     ▼
OpenAI (gpt-4o-mini)
     │
     ▼
Suggestions: Tags / Summary / Code Explanation / Prompt Improvement
     │
     ▼
UI Update
```

---

## 🎨 UI / UX

- **Dark mode first** (developer-native aesthetic)
- Minimal, keyboard-friendly interface
- Syntax highlighting for all code snippets
- Inspired by [Notion](https://notion.so), [Linear](https://linear.app), and [Raycast](https://raycast.com)

### Layout

| Component | Description |
|---|---|
| Sidebar | Collapsible — filters, collections, types |
| Workspace | Main grid / list of items |
| Editor | Full-screen item editor with Markdown support |

### Responsive

- Mobile: drawer-style sidebar
- Touch-optimized icons and action buttons

---

## 💰 Monetization

| Plan | Price | Item Limit | Collections | AI | File Uploads | Custom Types | Export |
|---|---|---|---|---|---|---|---|
| Free | $0/mo | 50 items | 3 | ❌ | Images only | ❌ | ❌ |
| Pro | $8/mo or $72/yr | Unlimited | Unlimited | ✅ | All types | ✅ | ✅ JSON/ZIP |

> Billing via [Stripe](https://stripe.com/). Subscription status synced via webhooks → `User.isPro`.

---

## 🗺️ Roadmap

### MVP
- [ ] Items CRUD (all system types)
- [ ] Collections
- [ ] Full-text search
- [ ] Basic tagging
- [ ] Free tier enforcement

### Pro Phase
- [ ] AI features (tagging, summary, explain, optimize)
- [ ] Custom item types
- [ ] File uploads (R2)
- [ ] JSON / ZIP export
- [ ] Billing + upgrade flow (Stripe)

### Future
- [ ] Shared collections
- [ ] Team / Org plans
- [ ] VS Code extension
- [ ] Browser extension
- [ ] Public API + CLI tool

---

## 🗂️ Development Workflow

- **One branch per lesson** — students can follow and compare
- Use **Cursor / Claude Code / ChatGPT** for AI assistance
- [Sentry](https://sentry.io/) for runtime monitoring and error tracking
- GitHub Actions for CI *(optional)*

**Branch naming convention:**

```bash
git switch -c lesson-01-setup
git switch -c lesson-02-auth
git switch -c lesson-03-items-crud
```

---

## 📌 Status

> 🟡 **In Planning** — environment setup & UI scaffolding ready to begin.

---

*DevStash — Store Smarter. Build Faster.*
