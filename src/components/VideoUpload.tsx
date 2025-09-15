import { useState, useCallback } from "react";
import { Upload, Video, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface VideoUploadProps {
  onVideoUploaded: (file: File) => void;
  uploadedFile: File | null;
}

const VideoUpload = ({ onVideoUploaded, uploadedFile }: VideoUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('video/')) {
        onVideoUploaded(file);
      }
    }
  }, [onVideoUploaded]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('video/')) {
        onVideoUploaded(file);
      }
    }
  }, [onVideoUploaded]);

  return (
    <Card className="p-8">
      {uploadedFile ? (
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Video className="h-12 w-12 text-brand-teal" />
            <div>
              <h3 className="text-lg font-semibold">{uploadedFile.name}</h3>
              <p className="text-sm text-muted-foreground">
                {(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-200 ${
            isDragOver
              ? "border-brand-teal bg-upload-hover"
              : "border-upload-border bg-upload-bg hover:border-brand-teal hover:bg-upload-hover"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Drop your video here</h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop a video file to analyze its content and compliance
          </p>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileInput}
            className="hidden"
            id="video-upload"
          />
          <Button asChild className="bg-brand-teal hover:bg-brand-teal-dark">
            <label htmlFor="video-upload" className="cursor-pointer">
              Choose Video File
            </label>
          </Button>
        </div>
      )}
    </Card>
  );
};

export default VideoUpload;