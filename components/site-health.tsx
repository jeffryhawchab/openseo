"use client"

import { Progress } from "@/components/ui/progress"

export function SiteHealth() {
  const healthMetrics = [
    {
      name: "Performance",
      score: 82,
      color: "bg-green-500",
    },
    {
      name: "SEO",
      score: 94,
      color: "bg-green-500",
    },
    {
      name: "Accessibility",
      score: 76,
      color: "bg-yellow-500",
    },
    {
      name: "Best Practices",
      score: 88,
      color: "bg-green-500",
    },
  ]

  return (
    <div className="space-y-3">
      {healthMetrics.map((metric) => (
        <div key={metric.name} className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm">{metric.name}</span>
            <span className="text-sm font-medium">{metric.score}/100</span>
          </div>
          <Progress value={metric.score} className="h-2" indicatorClassName={metric.color} />
        </div>
      ))}
    </div>
  )
}
