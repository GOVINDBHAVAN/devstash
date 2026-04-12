import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col bg-background text-foreground">
      {/* Top Bar */}
      <header className="flex h-14 items-center gap-4 border-b border-border px-4">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
            S
          </div>
          <span>DevStash</span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search items..."
              className="pl-9 pr-16 bg-muted border-transparent"
            />
            <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded border border-border bg-background px-1.5 text-[10px] text-muted-foreground">
              ⌘K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Plus className="mr-1.5 h-4 w-4" />
            New Collection
          </Button>
          <Button size="sm">
            <Plus className="mr-1.5 h-4 w-4" />
            New Item
          </Button>
        </div>
      </header>

      {/* Body: Sidebar + Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-60 shrink-0 border-r border-border p-4">
          <h2 className="text-sm font-semibold text-muted-foreground">Sidebar</h2>
        </aside>

        {/* Main Area */}
        <main className="flex-1 overflow-auto p-6">
          <h2 className="text-sm font-semibold text-muted-foreground">Main</h2>
          {children}
        </main>
      </div>
    </div>
  );
}
