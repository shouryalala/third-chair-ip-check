import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import VideoUpload from "@/components/VideoUpload";
import VideoPlayer from "@/components/VideoPlayer";
import AnalysisLoader from "@/components/AnalysisLoader";
import AnalysisResults from "@/components/AnalysisResults";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";

const Dashboard = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleVideoUploaded = (file: File) => {
    setUploadedFile(file);
    setShowResults(false);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
  };

  const handleAnalysisComplete = () => {
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const handleReset = () => {
    setUploadedFile(null);
    setIsAnalyzing(false);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Compliance Analysis</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Upload your video content to analyze genre classification, reach potential, 
              and music compliance requirements with advanced AI-powered insights.
            </p>
          </div>

          {/* Upload Section */}
          {!showResults && !isAnalyzing && (
            <VideoUpload onVideoUploaded={handleVideoUploaded} uploadedFile={uploadedFile} />
          )}

          {/* Action Button */}
          {uploadedFile && !isAnalyzing && !showResults && (
            <div className="flex justify-center">
              <Button
                onClick={handleAnalyze}
                size="lg"
                className="bg-brand-teal hover:bg-brand-teal-dark px-8"
              >
                <Play className="h-4 w-4 mr-2" />
                Analyze Video
              </Button>
            </div>
          )}

          {/* Analysis Loading */}
          {isAnalyzing && (
            <AnalysisLoader isAnalyzing={isAnalyzing} onComplete={handleAnalysisComplete} />
          )}

          {/* Results */}
          {showResults && (
            <div className="space-y-6 animate-elegant-slide-up">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Analysis Complete</h2>
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Analyze New Video</span>
                </Button>
              </div>
              
              {/* Analysis Results */}
              <div className="animate-stagger-fade-in" style={{ animationDelay: '0.1s' }}>
                <AnalysisResults />
              </div>

              {/* Video Player */}
              {uploadedFile && (
                <div className="animate-stagger-fade-in" style={{ animationDelay: '0.2s' }}>
                  <VideoPlayer file={uploadedFile} />
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;