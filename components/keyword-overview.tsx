"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react"

export function KeywordOverview() {
  const keywords = [
    {
      keyword: "seo tools",
      position: 3,
      change: 2,
      volume: 8400,
    },
    {
      keyword: "keyword research",
      position: 5,
      change: -1,
      volume: 6200,
    },
    {
      keyword: "backlink checker",
      position: 8,
      change: 0,
      volume: 4100,
    },
    {
      keyword: "site audit tool",
      position: 12,
      change: 3,
      volume: 2800,
    },
  ]

  const getChangeIcon = (change: number) => {
    if (change > 0) return <ArrowUp className="h-3 w-3 text-green-500" />
    if (change < 0) return <ArrowDown className="h-3 w-3 text-red-500" />
    return <ArrowRight className="h-3 w-3 text-yellow-500" />
  }

  const getPositionColor = (position: number) => {
    if (position <= 3) return "text-green-500"
    if (position <= 10) return "text-yellow-500"
    return "text-muted-foreground"
  }

  return (
    <div className="space-y-3">
      {keywords.map((keyword) => (
        <div key={keyword.keyword} className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium">{keyword.keyword}</span>
            <span className="text-xs text-muted-foreground">{keyword.volume.toLocaleString()} searches/mo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${getPositionColor(keyword.position)}`}>#{keyword.position}</span>
            <Badge variant="outline" className="flex items-center gap-1 h-5">
              {getChangeIcon(keyword.change)}
              <span>{Math.abs(keyword.change)}</span>
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
