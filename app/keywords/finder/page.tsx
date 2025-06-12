import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Filter, Search } from "lucide-react"

export default function KeywordFinderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b border-border/50">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-xl font-semibold">Keyword Finder</h1>
        </div>
      </div>

      <div className="flex-1 space-y-6 p-6 md:p-8">
        <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-800/30">
          <CardHeader>
            <CardTitle>Discover High-Value Keywords</CardTitle>
            <CardDescription>Find keywords with high search volume and low competition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Enter a seed keyword or topic..." className="pl-8" />
                </div>
                <Button className="gap-2">
                  <Search className="h-4 w-4" />
                  Find Keywords
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  SEO
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  Digital Marketing
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  Content Strategy
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  Link Building
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                  + Add Suggestion
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="suggestions" className="space-y-4">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="suggestions">Keyword Suggestions</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="related">Related</TabsTrigger>
              <TabsTrigger value="longtail">Long-tail</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <TabsContent value="suggestions" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Keyword Suggestions</CardTitle>
                <CardDescription>Based on search volume and competition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium">
                      <div className="col-span-5">Keyword</div>
                      <div className="col-span-2 text-center">Volume</div>
                      <div className="col-span-2 text-center">Difficulty</div>
                      <div className="col-span-2 text-center">CPC</div>
                      <div className="col-span-1 text-right">Actions</div>
                    </div>

                    {[
                      { keyword: "seo tools", volume: 8400, difficulty: 67, cpc: 4.25 },
                      { keyword: "best seo tools", volume: 5900, difficulty: 58, cpc: 3.8 },
                      { keyword: "free seo tools", volume: 12500, difficulty: 62, cpc: 2.95 },
                      { keyword: "seo tools for small business", volume: 3200, difficulty: 45, cpc: 3.5 },
                      { keyword: "seo keyword research tools", volume: 4100, difficulty: 53, cpc: 4.1 },
                      { keyword: "seo analysis tools", volume: 2800, difficulty: 49, cpc: 3.75 },
                      { keyword: "seo audit tools", volume: 3600, difficulty: 51, cpc: 3.9 },
                      { keyword: "seo ranking tools", volume: 4800, difficulty: 59, cpc: 4.3 },
                    ].map((item, i) => (
                      <div key={i} className="grid grid-cols-12 gap-4 p-4 text-sm items-center border-t">
                        <div className="col-span-5 font-medium">{item.keyword}</div>
                        <div className="col-span-2 text-center">{item.volume.toLocaleString()}</div>
                        <div className="col-span-2 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-12 h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className={`h-full ${
                                  item.difficulty > 70
                                    ? "bg-red-500"
                                    : item.difficulty > 50
                                      ? "bg-yellow-500"
                                      : "bg-green-500"
                                }`}
                                style={{ width: `${item.difficulty}%` }}
                              />
                            </div>
                            <span>{item.difficulty}</span>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">${item.cpc.toFixed(2)}</div>
                        <div className="col-span-1 text-right">
                          <Button variant="ghost" size="icon">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="questions">
            <Card>
              <CardHeader>
                <CardTitle>Question Keywords</CardTitle>
                <CardDescription>Questions people are asking related to your topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                  Enter a seed keyword to see question-based keywords
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="related">
            <Card>
              <CardHeader>
                <CardTitle>Related Keywords</CardTitle>
                <CardDescription>Semantically related keywords to your topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                  Enter a seed keyword to see related keywords
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="longtail">
            <Card>
              <CardHeader>
                <CardTitle>Long-tail Keywords</CardTitle>
                <CardDescription>Specific, longer keyword phrases with lower competition</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                  Enter a seed keyword to see long-tail keywords
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
