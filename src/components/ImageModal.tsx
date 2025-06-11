import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from './ui/dialog';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 0.5));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/90 backdrop-blur-sm" />
      <DialogContent className="max-w-[95vw] w-full h-full max-h-[95vh] p-0 border-0 bg-transparent">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Controls */}
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ZoomOut size={20} />
            </button>
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            onClick={(e) => {
              // Close when clicking outside the image
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-300 ease-out"
              style={{ 
                transform: `scale(${scale})`,
                cursor: scale > 1 ? 'zoom-out' : 'zoom-in'
              }}
              onClick={() => {
                // Toggle zoom on image click
                setScale(scale > 1 ? 1 : 2);
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
