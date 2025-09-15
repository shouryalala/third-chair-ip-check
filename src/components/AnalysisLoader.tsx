import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, Brain, Music, Eye, Shield } from "lucide-react";

interface AnalysisLoaderProps {
  isAnalyzing: boolean;
  onComplete: () => void;
}

const loadingSteps = [
  {
    icon: Eye,
    text: "Analyzing video content and visual elements...",
    duration: 1600,
  },
  {
    icon: Music,
    text: "Detecting audio tracks and music identification...",
    duration: 1800,
  },
  {
    icon: Brain,
    text: "Processing genre classification and reach analysis...",
    duration: 2000,
  },
  {
    icon: Shield,
    text: "Checking compliance and copyright requirements...",
    duration: 2600,
  },
];

const AnalysisLoader = ({ isAnalyzing, onComplete }: AnalysisLoaderProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isAnalyzing) {
      setCurrentStep(0);
      setProgress(0);
      return;
    }

    let stepIndex = 0;
    let progressValue = 0;
    
    const runStep = () => {
      if (stepIndex < loadingSteps.length) {
        setCurrentStep(stepIndex);
        
        const stepDuration = loadingSteps[stepIndex].duration;
        const progressIncrement = 100 / loadingSteps.length;
        const intervalTime = stepDuration / (progressIncrement * 10);
        
        const interval = setInterval(() => {
          progressValue += progressIncrement / 10;
          setProgress(Math.min(progressValue, (stepIndex + 1) * (100 / loadingSteps.length)));
          
          if (progressValue >= (stepIndex + 1) * (100 / loadingSteps.length)) {
            clearInterval(interval);
            stepIndex++;
            setTimeout(runStep, 200);
          }
        }, intervalTime);
      } else {
        setProgress(100);
        setTimeout(onComplete, 500);
      }
    };

    runStep();
  }, [isAnalyzing, onComplete]);

  if (!isAnalyzing) return null;

  const CurrentIcon = loadingSteps[currentStep]?.icon || Loader2;

  return (
    <Card className="p-8 animate-elegant-scale-in">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-3 animate-elegant-fade-in">
          <CurrentIcon className="h-8 w-8 text-brand-teal animate-pulse" />
          <h2 className="text-xl font-semibold">Analyzing Video</h2>
        </div>
        
        <div className="w-full max-w-md animate-stagger-fade-in" style={{ animationDelay: '0.2s' }}>
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2 text-center">
            {Math.round(progress)}% complete
          </p>
        </div>
        
        <p className="text-center text-muted-foreground max-w-lg animate-stagger-fade-in" style={{ animationDelay: '0.4s' }}>
          {loadingSteps[currentStep]?.text || "Processing..."}
        </p>
      </div>
    </Card>
  );
};

export default AnalysisLoader;