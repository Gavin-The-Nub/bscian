import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define the props for the component
interface ImageComparisonSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  leftImage: string; // Used as Slide 1
  rightImage: string; // Used as Slide 2
  altLeft?: string;
  altRight?: string;
  initialPosition?: number; // Kept for compatibility, but unused
}

/**
 * ImageComparisonSlider - Simplified Carousel Version
 * Transitioned from a clipping-mask comparison slider to a simple cross-fade carousel per user request.
 */
export const ImageComparisonSlider = React.forwardRef<
  HTMLDivElement,
  ImageComparisonSliderProps
>(
  (
    {
      className,
      leftImage,
      rightImage,
      altLeft = "Product view",
      altRight = "Technical specifications",
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const images = [
      { src: leftImage, alt: altLeft },
      { src: rightImage, alt: altRight },
    ];

    const handleNext = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full h-full overflow-hidden select-none group bg-white",
          className
        )}
        {...props}
      >
        {/* Images with transition */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
          <button
            onClick={handlePrev}
            className="h-12 w-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md text-foreground shadow-xl pointer-events-auto transition-all duration-300 hover:bg-background/80 hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-0"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="h-12 w-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md text-foreground shadow-xl pointer-events-auto transition-all duration-300 hover:bg-background/80 hover:scale-110 active:scale-95 group-hover:opacity-100 opacity-0"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slide Indicator Labels/Buttons */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-auto">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
              className={cn(
                "px-4 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-500 font-body",
                i === currentIndex 
                  ? "bg-charcoal text-alabaster shadow-lg scale-105" 
                  : "bg-background/30 backdrop-blur-md text-charcoal/60 hover:bg-background/60"
              )}
            >
              {i === 0 ? "Product" : "Specifications"}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

ImageComparisonSlider.displayName = "ImageComparisonSlider";
