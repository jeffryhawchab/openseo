"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Plus } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="border-b border-border/50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <Select defaultValue="mywebsite.com">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select website" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mywebsite.com">mywebsite.com</SelectItem>
              <SelectItem value="myblog.com">myblog.com</SelectItem>
              <SelectItem value="mystore.com">mystore.com</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Input placeholder="Search..." className="w-[200px] lg:w-[300px]" />
          </div>
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Website
          </Button>
        </div>
      </div>
    </div>
  )
}
