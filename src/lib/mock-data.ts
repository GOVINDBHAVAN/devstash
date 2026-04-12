export const mockUser = {
  id: "user_1",
  name: "John Doe",
  email: "demo@devstash.io",
  isPro: false,
};

export const mockItemTypes = [
  { id: "type_snippet", name: "Snippet", icon: "code-xml", color: "#a78bfa", isSystem: true },
  { id: "type_prompt", name: "Prompt", icon: "sparkles", color: "#60a5fa", isSystem: true },
  { id: "type_command", name: "Command", icon: "terminal", color: "#34d399", isSystem: true },
  { id: "type_note", name: "Note", icon: "notebook-pen", color: "#fbbf24", isSystem: true },
  { id: "type_file", name: "File", icon: "file", color: "#94a3b8", isSystem: true },
  { id: "type_image", name: "Image", icon: "image", color: "#f472b6", isSystem: true },
  { id: "type_url", name: "URL", icon: "link", color: "#fb923c", isSystem: true },
];

export const mockCollections = [
  {
    id: "col_1",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    isFavorite: true,
    itemCount: 12,
  },
  {
    id: "col_2",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    isFavorite: false,
    itemCount: 8,
  },
  {
    id: "col_3",
    name: "Context Files",
    description: "AI context files for projects",
    isFavorite: true,
    itemCount: 5,
  },
  {
    id: "col_4",
    name: "Interview Prep",
    description: "Technical interview preparation",
    isFavorite: false,
    itemCount: 24,
  },
  {
    id: "col_5",
    name: "Git Commands",
    description: "Frequently used git commands",
    isFavorite: true,
    itemCount: 15,
  },
  {
    id: "col_6",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    isFavorite: false,
    itemCount: 18,
  },
];

export const mockItems = [
  {
    id: "item_1",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    contentType: "text",
    content: `import { useSession } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession();
  return {
    user: session?.user,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
  };
}`,
    typeId: "type_snippet",
    collectionId: "col_1",
    isFavorite: false,
    isPinned: true,
    language: "typescript",
    tags: ["react", "auth", "hooks"],
    createdAt: "2026-04-10",
  },
  {
    id: "item_2",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    contentType: "text",
    content: `async function fetchWithRetry(url: string, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      return await res.json();
    } catch (e) {
      if (i === retries - 1) throw e;
      await new Promise(r => setTimeout(r, 2 ** i * 1000));
    }
  }
}`,
    typeId: "type_snippet",
    collectionId: "col_1",
    isFavorite: true,
    isPinned: true,
    language: "typescript",
    tags: ["api", "error-handling", "fetch"],
    createdAt: "2026-04-10",
  },
  {
    id: "item_3",
    title: "Git: Undo Last Commit",
    description: "Keep changes staged after undoing commit",
    contentType: "text",
    content: "git reset --soft HEAD~1",
    typeId: "type_command",
    collectionId: "col_5",
    isFavorite: false,
    isPinned: false,
    language: "bash",
    tags: ["git", "undo"],
    createdAt: "2026-04-09",
  },
  {
    id: "item_4",
    title: "Code Review Prompt",
    description: "Prompt for thorough AI code reviews",
    contentType: "text",
    content: "Review the following code for bugs, security issues, and performance problems. Be concise and direct. Format as a bulleted list.",
    typeId: "type_prompt",
    collectionId: "col_6",
    isFavorite: true,
    isPinned: false,
    language: null,
    tags: ["code-review", "ai"],
    createdAt: "2026-04-08",
  },
  {
    id: "item_5",
    title: "Python List Comprehension",
    description: "Filter and transform lists in one line",
    contentType: "text",
    content: "squares = [x**2 for x in range(10) if x % 2 == 0]",
    typeId: "type_snippet",
    collectionId: "col_2",
    isFavorite: false,
    isPinned: false,
    language: "python",
    tags: ["python", "lists"],
    createdAt: "2026-04-07",
  },
  {
    id: "item_6",
    title: "Next.js Project Context",
    description: "Standard context file for Next.js App Router projects",
    contentType: "file",
    content: null,
    fileName: "nextjs-context.md",
    fileSize: 4200,
    typeId: "type_file",
    collectionId: "col_3",
    isFavorite: false,
    isPinned: false,
    language: null,
    tags: ["nextjs", "context"],
    createdAt: "2026-04-06",
  },
];

export const mockTypeCounts: Record<string, number> = {
  type_snippet: 24,
  type_prompt: 18,
  type_command: 15,
  type_note: 12,
  type_file: 5,
  type_image: 3,
  type_url: 8,
};
