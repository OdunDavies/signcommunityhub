
import React, { useState } from 'react';
import ImageModal from './ImageModal';

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ClickableImage: React.FC<ClickableImageProps> = ({ src, alt, className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
        onClick={() => setIsModalOpen(true)}
      />
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={src}
        imageAlt={alt}
      />
    </>
  );
};

export default ClickableImage;
