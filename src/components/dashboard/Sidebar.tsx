'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronRight, Settings, Star } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  mockUser,
  mockItemTypes,
  mockCollections,
  mockTypeCounts,
} from '@/lib/mock-data'

type LucideIconComponent = React.ComponentType<{
  className?: string
  style?: React.CSSProperties
}>

function DynamicIcon({
  name,
  className,
  style,
}: {
  name: string
  className?: string
  style?: React.CSSProperties
}) {
  const iconName = name
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
  const LucideIcon = (LucideIcons as unknown as Record<string, LucideIconComponent>)[iconName]
  if (!LucideIcon) return null
  return <LucideIcon className={className} style={style} />
}

function typeHref(type: (typeof mockItemTypes)[number]): string {
  if (type.name === 'URL') return '/items/links'
  return `/items/${type.name.toLowerCase()}s`
}

interface SidebarContentProps {
  onNavigate?: () => void
}

export function SidebarContent({ onNavigate }: SidebarContentProps) {
  const [typesOpen, setTypesOpen] = useState(true)
  const [collectionsOpen, setCollectionsOpen] = useState(true)

  const favoriteCollections = mockCollections.filter((c) => c.isFavorite)
  const otherCollections = mockCollections.filter((c) => !c.isFavorite)

  const userInitials = mockUser.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="flex h-full flex-col">
      {/* Scrollable nav area */}
      <div className="flex-1 overflow-y-auto py-3">
        {/* Types section */}
        <div className="mb-1">
          <button
            onClick={() => setTypesOpen(!typesOpen)}
            className="flex w-full items-center justify-between px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Types</span>
            {typesOpen ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>

          {typesOpen && (
            <nav className="mt-0.5 space-y-0.5">
              {mockItemTypes.map((type) => (
                <Link
                  key={type.id}
                  href={typeHref(type)}
                  onClick={onNavigate}
                  className="group flex items-center justify-between rounded-md mx-1 px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <DynamicIcon
                      name={type.icon}
                      className="h-3.5 w-3.5 shrink-0"
                      style={{ color: type.color }}
                    />
                    {type.name}
                  </span>
                  <span className="text-xs tabular-nums opacity-50 group-hover:opacity-75">
                    {mockTypeCounts[type.id]}
                  </span>
                </Link>
              ))}
            </nav>
          )}
        </div>

        {/* Collections section */}
        <div className="mt-3">
          <button
            onClick={() => setCollectionsOpen(!collectionsOpen)}
            className="flex w-full items-center justify-between px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Collections</span>
            {collectionsOpen ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>

          {collectionsOpen && (
            <>
              {/* Favorites */}
              {favoriteCollections.length > 0 && (
                <div className="mt-1">
                  <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                    Favorites
                  </p>
                  <nav className="space-y-0.5">
                    {favoriteCollections.map((col) => (
                      <Link
                        key={col.id}
                        href={`/collections/${col.id}`}
                        onClick={onNavigate}
                        className="flex items-center gap-2 rounded-md mx-1 px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Star className="h-3 w-3 shrink-0 fill-yellow-400 text-yellow-400" />
                        <span className="truncate">{col.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              )}

              {/* Recent / All collections */}
              {otherCollections.length > 0 && (
                <div className="mt-3">
                  <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                    All Collections
                  </p>
                  <nav className="space-y-0.5">
                    {otherCollections.map((col) => (
                      <Link
                        key={col.id}
                        href={`/collections/${col.id}`}
                        onClick={onNavigate}
                        className="group flex items-center justify-between rounded-md mx-1 px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <span className="truncate">{col.name}</span>
                        <span className="text-xs tabular-nums opacity-50 shrink-0 ml-2 group-hover:opacity-75">
                          {col.itemCount}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* User area */}
      <div className="shrink-0 border-t border-border p-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            {userInitials}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-foreground">{mockUser.name}</p>
            <p className="truncate text-xs text-muted-foreground">{mockUser.email}</p>
          </div>
          <button className="shrink-0 text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
