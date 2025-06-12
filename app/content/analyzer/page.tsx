import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle, FileText, Lightbulb, Wand2 } from "lucide-react"

export default function ContentAnalyzerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="border-b border-border/50">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-xl font-semibold">Content Analyzer</h1>
        </div>
      </div>

      <div className="flex-1 space-y-6 p-6 md:p-8">
        <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-green-800/30">
          <CardHeader>
            <CardTitle>Real-time Content Analysis</CardTitle>
            <CardDescription>Optimize your content for better search rankings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder="Paste your content here for analysis..."
                className="min-h-[200px]"
                defaultValue="Search engine optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. SEO focuses on unpaid traffic rather than direct traffic or paid traffic. This comprehensive guide will help you understand the fundamentals of SEO and how to implement effective strategies for your website."
              />
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Badge variant="outline">Word count: 58</Badge>
                  <Badge variant="outline">Reading time: 1 min</Badge>
                  <Badge variant="outline">Grade level: 12</Badge>
                </div>
                <Button className="gap-2">
                  <Wand2 className="h-4 w-4" />
                  Analyze Content
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">SEO Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-24 w-24">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle className="stroke-muted" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent" />
                    <circle
                      className="stroke-green-500"
                      strokeWidth="10"
                      strokeLinecap="round"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      strokeDasharray="251.2"
                      strokeDashoffset="62.8"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">75</span>
                  </div>
                </div>
                <span className="mt-2 text-sm text-muted-foreground">Good</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Readability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Flesch Score</span>
                  <span className="text-sm font-medium">68</span>
                </div>
                <Progress value={68} className="h-2" />
                <p className="text-xs text-muted-foreground">Standard - Easy to read</p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Avg. sentence length</span>
                    <span className="text-xs">14 words</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Complex words</span>
                    <span className="text-xs">12%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Keyword Density</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SEO</span>
                    <span className="text-sm font-medium">3.4%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">search engine</span>
                    <span className="text-sm font-medium">2.1%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">optimization</span>
                    <span className="text-sm font-medium">1.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">website</span>
                    <span className="text-sm font-medium">1.7%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="recommendations" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="meta">Meta Tags</TabsTrigger>
          </TabsList>

          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Content Optimization Recommendations</CardTitle>
                <CardDescription>Suggestions to improve your content's SEO performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      type: "success",
                      title: "Good keyword usage",
                      description: "Your primary keyword 'SEO' appears in the first paragraph",
                      icon: CheckCircle,
                      color: "text-green-500",
                    },
                    {
                      type: "warning",
                      title: "Add more subheadings",
                      description: "Break up your content with H2 and H3 tags for better structure",
                      icon: AlertCircle,
                      color: "text-yellow-500",
                    },
                    {
                      type: "info",
                      title: "Include internal links",
                      description: "Add 2-3 internal links to related pages on your website",
                      icon: Lightbulb,
                      color: "text-blue-500",
                    },
                    {
                      type: "warning",
                      title: "Content length",
                      description: "Consider expanding to 300+ words for better SEO performance",
                      icon: FileText,
                      color: "text-yellow-500",
                    },
                    {
                      type: "info",
                      title: "Add images",
                      description: "Include relevant images with descriptive alt text",
                      icon: Lightbulb,
                      color: "text-blue-500",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg border p-4">
                      <item.icon className={`h-5 w-5 mt-0.5 ${item.color}`} />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Fix
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="keywords">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Analysis</CardTitle>
                <CardDescription>Keyword usage and density in your content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                  Detailed keyword analysis will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="structure">
            <Card>
              <CardHeader>
                <CardTitle>Content Structure</CardTitle>
                <CardDescription>Analysis of your content's heading structure and organization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                  Content structure analysis will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meta">
            <Card>
              <CardHeader>
                <CardTitle>Meta Tag Suggestions</CardTitle>
                <CardDescription>Recommended meta tags for this content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                  Meta tag suggestions will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
