import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { RecentActivity } from "@/components/recent-activity"
import { KeywordOverview } from "@/components/keyword-overview"
import { SiteHealth } from "@/components/site-health"
import { BacklinkSummary } from "@/components/backlink-summary"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <DashboardStats />

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid grid-cols-4 md:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="backlinks">Backlinks</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Site Health</CardTitle>
                  <CardDescription>Technical SEO performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <SiteHealth />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Keyword Rankings</CardTitle>
                  <CardDescription>Top performing keywords</CardDescription>
                </CardHeader>
                <CardContent>
                  <KeywordOverview />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Keywords
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Backlink Profile</CardTitle>
                  <CardDescription>Link health and metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <BacklinkSummary />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View All Backlinks
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest changes and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="keywords" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Performance</CardTitle>
                <CardDescription>Track your keyword rankings over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Detailed keyword data will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Technical SEO Issues</CardTitle>
                <CardDescription>Site audit results and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Technical SEO audit data will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backlinks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Backlink Analysis</CardTitle>
                <CardDescription>Detailed backlink metrics and insights</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Backlink analysis data will appear here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
