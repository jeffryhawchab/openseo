"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Globe, Link2, Search, Users } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-800/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Organic Traffic</CardTitle>
          <Globe className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,543</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center">
              <ArrowUp className="mr-1 h-3 w-3" />
              +12.5%
            </span>
            <span className="text-[0.7rem]">from last month</span>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-800/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Keyword Rankings</CardTitle>
          <Search className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">324</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center">
              <ArrowUp className="mr-1 h-3 w-3" />
              +8.2%
            </span>
            <span className="text-[0.7rem]">from last month</span>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-indigo-800/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Backlinks</CardTitle>
          <Link2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,832</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 flex items-center">
              <ArrowUp className="mr-1 h-3 w-3" />
              +3.1%
            </span>
            <span className="text-[0.7rem]">from last month</span>
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-900/50 to-indigo-900/50 border-violet-800/50">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Conversions</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">432</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-red-500 flex items-center">
              <ArrowDown className="mr-1 h-3 w-3" />
              -2.5%
            </span>
            <span className="text-[0.7rem]">from last month</span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
