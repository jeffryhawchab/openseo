"use client"

export function BacklinkSummary() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">1,832</div>
          <div className="text-xs text-muted-foreground">Total Backlinks</div>
        </div>
        <div>
          <div className="text-2xl font-bold">42</div>
          <div className="text-xs text-muted-foreground">Referring Domains</div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span>Link Quality</span>
          <span className="font-medium">Good</span>
        </div>
        <div className="flex gap-1 h-2">
          <div className="bg-green-500 rounded-l-full w-[60%]" />
          <div className="bg-yellow-500 w-[30%]" />
          <div className="bg-red-500 rounded-r-full w-[10%]" />
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>60% High Quality</span>
          <span>30% Medium</span>
          <span>10% Low</span>
        </div>
      </div>
    </div>
  )
}
