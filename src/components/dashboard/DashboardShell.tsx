'use client'

import { useState } from 'react'
import { Search, Plus, PanelLeft, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { SidebarContent } from './Sidebar'

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true)
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false)

  return (
    <div className="flex h-full flex-col bg-background text-foreground">
      {/* Top Bar */}
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border px-4">
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileSheetOpen(true)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Desktop sidebar toggle */}
        <button
          onClick={() => setDesktopSidebarOpen((v) => !v)}
          className="hidden md:flex text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle sidebar"
        >
          <PanelLeft className="h-5 w-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
            S
          </div>
          <span className="hidden sm:block">DevStash</span>
        </div>

        {/* Search */}
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

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Plus className="mr-1.5 h-4 w-4" />
            New Collection
          </Button>
          <Button size="sm">
            <Plus className="mr-1.5 h-4 w-4" />
            <span className="hidden sm:inline">New Item</span>
          </Button>
        </div>
      </header>

      {/* Body: Sidebar + Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar — hidden on mobile */}
        <aside
          className={cn(
            'hidden md:flex flex-col bg-sidebar border-r border-border shrink-0 overflow-hidden transition-[width] duration-200',
            desktopSidebarOpen ? 'w-60' : 'w-0'
          )}
        >
          <SidebarContent />
        </aside>

        {/* Mobile Sheet drawer */}
        <Sheet open={mobileSheetOpen} onOpenChange={setMobileSheetOpen}>
          <SheetContent side="left" className="w-60 p-0 bg-sidebar">
            <SidebarContent onNavigate={() => setMobileSheetOpen(false)} />
          </SheetContent>
        </Sheet>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
