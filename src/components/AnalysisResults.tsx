import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Music, TrendingUp, Shield, CheckCircle2, AlertTriangle, Eye, Users, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const AnalysisResults = () => {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Genre Classification</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Pop/Electronic</div>
            <p className="text-xs text-muted-foreground">
              88% confidence match
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reach Potential</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">High</div>
            <p className="text-xs text-muted-foreground">
              Estimated 2.4M+ views
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Score</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">92</div>
            <p className="text-xs text-muted-foreground">
              Above average performance
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Content Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5" />
              <span>Content Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Visual Appeal</span>
                <span className="text-sm text-muted-foreground">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Audio Quality</span>
                <span className="text-sm text-muted-foreground">89%</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Trend Alignment</span>
                <span className="text-sm text-muted-foreground">76%</span>
              </div>
              <Progress value={76} className="h-2" />
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Key Features Detected</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Dance/Movement</Badge>
                <Badge variant="secondary">Colorful Visuals</Badge>
                <Badge variant="secondary">Fast Paced</Badge>
                <Badge variant="secondary">Young Demographics</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Music Compliance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Music Compliance</span>
            </CardTitle>
            <CardDescription>Copyright and licensing information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">Track Identified</span>
            </div>
            
            <div className="bg-muted p-4 rounded-lg space-y-3">
              <div className="flex items-center space-x-2">
                <Music className="h-4 w-4 text-brand-teal" />
                <span className="font-medium">Identified Track</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <p><strong>Artist:</strong> Daft Punk</p>
                <p><strong>Title:</strong> Get Lucky (feat. Pharrell Williams)</p>
                <p><strong>Album:</strong> Random Access Memories</p>
                <p><strong>Label:</strong> Columbia Records</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <span className="text-sm font-medium text-warning">License Required</span>
              </div>
              
              <div className="text-sm text-muted-foreground">
                This track requires proper licensing for commercial use. Contact the rights holder or use a licensed music service.
              </div>
            </div>
            
            {/* Spotify Embed */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Listen on Spotify</h4>
              <iframe 
                src="https://open.spotify.com/embed/track/3vkCueOmm7xQDoJ17W1Pm3?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalysisResults;