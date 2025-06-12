import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Download, FileText, Mail, Share } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b border-border/50">
        <div className="flex h-16 items-center justify-between px-6">
          <h1 className="text-xl font-semibold">Reports & Analytics</h1>
          <div className="flex items-center gap-2">
            <Select defaultValue="last-30-days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-7-days">Last 7 days</SelectItem>
                <SelectItem value="last-30-days">Last 30 days</SelectItem>
                <SelectItem value="last-90-days">Last 90 days</SelectItem>
                <SelectItem value="last-year">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Custom Range
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-6 p-6 md:p-8">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="backlinks">Backlinks</TabsTrigger>
            <TabsTrigger value="competitors">Competitors</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-800/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Keywords</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,247</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-800/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.4</div>
                  <p className="text-xs text-muted-foreground">-0.8 from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-indigo-800/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Organic Traffic</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24,567</div>
                  <p className="text-xs text-muted-foreground">+18% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-violet-900/30 to-indigo-900/30 border-violet-800/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Backlinks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,892</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Keyword Rankings Trend</CardTitle>
                  <CardDescription>Track your keyword positions over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Keyword rankings chart will appear here
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Organic Traffic Growth</CardTitle>
                  <CardDescription>Monthly organic traffic trends</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Traffic growth chart will appear here
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Export Reports</CardTitle>
                  <CardDescription>Download or schedule automated reports</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Schedule
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export PDF
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4" />
                      <span className="font-medium">SEO Summary Report</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Complete overview of your SEO performance</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Generate Report
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4" />
                      <span className="font-medium">Keyword Report</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Detailed keyword rankings and opportunities</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Generate Report
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4" />
                      <span className="font-medium">Technical Audit Report</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Technical SEO issues and recommendations</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Generate Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="keywords">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Performance Report</CardTitle>
                <CardDescription>Detailed analysis of your keyword rankings</CardDescription>
              </CardHeader>
              <CardContent className="h-[600px]">
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Keyword performance data will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle>Technical SEO Report</CardTitle>
                <CardDescription>Site health and technical performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="h-[600px]">
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Technical SEO data will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backlinks">
            <Card>
              <CardHeader>
                <CardTitle>Backlink Analysis Report</CardTitle>
                <CardDescription>Comprehensive backlink profile analysis</CardDescription>
              </CardHeader>
              <CardContent className="h-[600px]">
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Backlink analysis data will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="competitors">
            <Card>
              <CardHeader>
                <CardTitle>Competitor Analysis Report</CardTitle>
                <CardDescription>Compare your performance against competitors</CardDescription>
              </CardHeader>
              <CardContent className="h-[600px]">
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Competitor analysis data will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
