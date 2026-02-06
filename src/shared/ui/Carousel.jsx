import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

const Carousel = React.forwardRef(
  ({ opts, orientation = "horizontal", className = "", children, autoplay = true, autoplayDelay = 3000, ...props }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    });
    
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = React.useCallback(() => {
      emblaApi?.scrollNext();
    }, [emblaApi]);

    // Built-in Autoplay functionality
    React.useEffect(() => {
      if (!emblaApi || !autoplay) return;

      const autoplayInterval = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0); // Loop back to start
        }
      }, autoplayDelay);

      return () => clearInterval(autoplayInterval);
    }, [emblaApi, autoplay, autoplayDelay]);

    React.useEffect(() => {
      if (!emblaApi) return;
      onSelect(emblaApi);
      emblaApi.on("reInit", onSelect);
      emblaApi.on("select", onSelect);
      return () => {
        emblaApi?.off("select", onSelect);
      };
    }, [emblaApi, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          emblaRef,
          emblaApi,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          orientation,
        }}
      >
        <div
          ref={ref}
          className={`relative ${className}`}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(({ className = "", ...props }, ref) => {
  const { emblaRef, orientation } = useCarousel();

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div
        ref={ref}
        className={`flex ${orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col"} ${className}`}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(({ className = "", ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={`min-w-0 shrink-0 grow-0 basis-full ${
        orientation === "horizontal" ? "pl-4" : "pt-4"
      } ${className}`}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef(({ className = "", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      className={`absolute h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-[#F4C430] dark:hover:bg-[#F4C430] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      style={{ top: "50%", transform: "translateY(-50%)", left: "-5rem" }}
      {...props}
    >
      <ArrowLeft className="h-5 w-5 text-gray-900 dark:text-white" />
      <span className="sr-only">Previous slide</span>
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef(({ className = "", ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      className={`absolute h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-[#F4C430] dark:hover:bg-[#F4C430] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      style={{ top: "50%", transform: "translateY(-50%)", right: "-5rem" }}
      {...props}
    >
      <ArrowRight className="h-5 w-5 text-gray-900 dark:text-white" />
      <span className="sr-only">Next slide</span>
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };