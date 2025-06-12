"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "System",
        avatar: "S",
      },
      action: "Crawled 245 pages",
      target: "mywebsite.com",
      time: "2 hours ago",
      type: "crawl",
    },
    {
      id: 2,
      user: {
        name: "Alex",
        avatar: "A",
      },
      action: "Added new keyword",
      target: "digital marketing services",
      time: "5 hours ago",
      type: "keyword",
    },
    {
      id: 3,
      user: {
        name: "System",
        avatar: "S",
      },
      action: "Detected 3 new backlinks",
      target: "from example.com",
      time: "Yesterday",
      type: "backlink",
    },
    {
      id: 4,
      user: {
        name: "Sarah",
        avatar: "S",
      },
      action: "Fixed meta description",
      target: "on homepage",
      time: "2 days ago",
      type: "content",
    },
    {
      id: 5,
      user: {
        name: "System",
        avatar: "S",
      },
      action: "Core Web Vitals improved",
      target: "LCP reduced by 0.8s",
      time: "3 days ago",
      type: "technical",
    },
  ]

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "crawl":
        return "default"
      case "keyword":
        return "secondary"
      case "backlink":
        return "outline"
      case "content":
        return "destructive"
      case "technical":
        return "blue"
      default:
        return "default"
    }
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 rounded-lg border p-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{activity.user.avatar}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium leading-none">{activity.user.name}</p>
              <Badge variant={getBadgeVariant(activity.type) as any}>{activity.type}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {activity.action} <span className="font-medium">{activity.target}</span>
            </p>
          </div>
          <div className="text-xs text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}
