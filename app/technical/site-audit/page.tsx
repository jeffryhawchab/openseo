import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle, Globe, Play, RefreshCw } from "lucide-react"

export default function SiteAuditPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b border-border/50">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-xl font-semibold">Site Audit</h1>
        </div>
      </div>

      <div className="flex-1 space-y-6 p-6 md:p-8">
        <Card className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 border-indigo-800/30">
          <CardHeader>
            <CardTitle>Technical SEO Audit</CardTitle>
            <CardDescription>Analyze your website for technical SEO issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Globe className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="url"
                  placeholder="Enter your website URL..."
                  className="pl-8"
                  defaultValue="https://mywebsite.com"
                />
              </div>
              <Button className="gap-2">
                <Play className="h-4 w-4" />
                Start Audit
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Audit Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative h-32 w-32">
                    <svg className="h-full w-full" viewBox="0 0 100 100">
                      <circle className="stroke-muted" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent" />
                      <circle
                        className="stroke-blue-500"
                        strokeWidth="10"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray="251.2"
                        strokeDashoffset="50.24"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold">80</span>
                    </div>
                  </div>
                  <span className="mt-2 text-sm text-muted-foreground">Overall Score</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Errors</span>
                    <span className="text-sm font-medium text-red-500">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Warnings</span>
                    <span className="text-sm font-medium text-yellow-500">24</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Passed</span>
                    <span className="text-sm font-medium text-green-500">86</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Re-run Audit
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Core Web Vitals</CardTitle>
              <CardDescription>Performance metrics that affect user experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">LCP (Largest Contentful Paint)</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-sm font-medium">2.1s</span>
                  </div>
                  <Progress value={70} className="h-2" />
                  <p className="text-xs text-muted-foreground">Good: Under 2.5s</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">FID (First Input Delay)</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-sm font-medium">18ms</span>
                  </div>
                  <Progress value={90} className="h-2" />
                  <p className="text-xs text-muted-foreground">Good: Under 100ms</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">CLS (Cumulative Layout Shift)</span>
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                    </div>
                    <span className="text-sm font-medium">0.18</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-muted-foreground">Needs Improvement: Between 0.1 and 0.25</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="errors" className="space-y-4">
          <TabsList>
            <TabsTrigger value="errors">Errors (12)</TabsTrigger>
            <TabsTrigger value="warnings">Warnings (24)</TabsTrigger>
            <TabsTrigger value="passed">Passed (86)</TabsTrigger>
            <TabsTrigger value="info">Info (8)</TabsTrigger>
          </TabsList>

          <TabsContent value="errors" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Critical Issues</CardTitle>
                <CardDescription>Issues that need immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Missing Meta Descriptions",
                      description: "8 pages are missing meta descriptions",
                      impact: "High",
                      pages: ["Homepage", "About", "Services", "Blog", "+4 more"],
                    },
                    {
                      title: "Broken Links",
                      description: "3 broken internal links detected",
                      impact: "High",
                      pages: ["Blog post #12", "Resources page", "Products page"],
                    },
                    {
                      title: "Slow Page Load Time",
                      description: "4 pages take more than 4 seconds to load",
                      impact: "High",
                      pages: ["Contact page", "Gallery", "Products", "Resources"],
                    },
                    {
                      title: "Missing Alt Text",
                      description: "12 images missing alt text",
                      impact: "Medium",
                      pages: ["Blog posts", "Product pages", "Gallery", "+2 more"],
                    },
                  ].map((issue, i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{issue.title}</h3>
                          <p className="text-sm text-muted-foreground">{issue.description}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {issue.pages.map((page, j) => (
                              <span key={j} className="rounded-full bg-muted px-2 py-1 text-xs">
                                {page}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span
                            className={`rounded-full px-2 py-1 text-xs ${
                              issue.impact === "High"
                                ? "bg-red-500/20 text-red-500"
                                : issue.impact === "Medium"
                                  ? "bg-yellow-500/20 text-yellow-500"
                                  : "bg-blue-500/20 text-blue-500"
                            }`}
                          >
                            {issue.impact} Impact
                          </span>
                          <Button variant="link" size="sm" className="mt-2">
                            Fix Issue
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="warnings">
            <Card>
              <CardHeader>
                <CardTitle>Warnings</CardTitle>
                <CardDescription>Issues that should be addressed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                  24 warnings found - click to view details
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="passed">
            <Card>
              <CardHeader>
                <CardTitle>Passed Checks</CardTitle>
                <CardDescription>Tests that your site passed successfully</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                  86 checks passed - click to view details
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>Information</CardTitle>
                <CardDescription>Additional information about your site</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                  8 informational items - click to view details
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
