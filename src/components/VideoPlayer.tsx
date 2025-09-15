import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface VideoPlayerProps {
  file: File;
}

const VideoPlayer = ({ file }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && file) {
      const url = URL.createObjectURL(file);
      videoRef.current.src = url;

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [file]);

  return (
    <Card className="p-4 animate-elegant-fade-in">
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Uploaded Video</h3>
        <div className="rounded-lg overflow-hidden bg-black flex justify-center">
          <div className="w-64 h-[32rem]">
            <video
              ref={videoRef}
              controls
              className="w-full h-full object-cover"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">{file.name}</span>
          <span className="ml-2">({(file.size / (1024 * 1024)).toFixed(1)} MB)</span>
        </div>
      </div>
    </Card>
  );
};

export default VideoPlayer;