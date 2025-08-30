import React, { useState, useRef } from 'react';
import { Upload, Camera, Link2, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  onImageUpload: (image: File | string) => void;
  isLoading?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, isLoading = false }) => {
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [uploadMode, setUploadMode] = useState<'file' | 'url'>('file');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      setImagePreview(urlInput);
      onImageUpload(urlInput);
      setShowUrlInput(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const clearImage = () => {
    setImagePreview(null);
    setUrlInput('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Upload Mode Toggle */}
      <div className="flex justify-center">
        <div className="bg-card border rounded-lg p-1 shadow-soft">
          <Button
            variant={uploadMode === 'file' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setUploadMode('file')}
            className="rounded-md"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload File
          </Button>
          <Button
            variant={uploadMode === 'url' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setUploadMode('url')}
            className="rounded-md"
          >
            <Link2 className="w-4 h-4 mr-2" />
            Image URL
          </Button>
        </div>
      </div>

      {/* File Upload */}
      {uploadMode === 'file' && (
        <Card className={cn(
          "relative p-8 border-2 border-dashed transition-all duration-300 cursor-pointer shadow-medium hover:shadow-large group",
          dragActive ? "border-primary bg-primary/5 shadow-glow" : "border-border hover:border-primary/50",
          isLoading && "pointer-events-none opacity-60"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
            className="absolute intranet-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className={cn(
              "rounded-full p-4 transition-all duration-300 group-hover:scale-110",
              dragActive ? "bg-primary text-primary-foreground shadow-glow" : "bg-accent text-accent-foreground"
            )}>
              <Camera className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                {dragActive ? "Drop your image here" : "Upload an image"}
              </h3>
              <p className="text-muted-foreground text-sm">
                Drag and drop an image or click to browse
              </p>
              <p className="text-xs text-muted-foreground">
                Supports JPG, PNG, WEBP up to 10MB
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* URL Input */}
      {uploadMode === 'url' && (
        <Card className="p-6 space-y-4 shadow-medium">
          <div className="flex items-center space-x-2">
            <div className="bg-accent text-accent-foreground rounded-full p-2">
              <Link2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold">Enter Image URL</h3>
          </div>
          
          <div className="flex space-x-2">
            <Input
              type="url"
              placeholder="https://example.com/image.jpg"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => e.key === 'Enter' && handleUrlSubmit()}
            />
            <Button 
              onClick={handleUrlSubmit}
              disabled={!urlInput.trim() || isLoading}
              className="px-6"
              variant="default"
            >
              <Check className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}

      {/* Image Preview */}
      {imagePreview && (
        <Card className="relative overflow-hidden shadow-large">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
          
          <Button
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2 rounded-full w-8 h-8 p-0"
            onClick={clearImage}
          >
            <X className="w-4 h-4" />
          </Button>

          {isLoading && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-sm text-muted-foreground">Analyzing image...</p>
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};

export default ImageUpload;