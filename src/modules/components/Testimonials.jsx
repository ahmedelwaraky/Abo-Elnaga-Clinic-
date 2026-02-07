import { Star, Quote } from "lucide-react";
import { useTheme } from "../../core/createContext";
import { Card } from "../../shared/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../shared/ui/Carousel";
import {testimonials}  from "../../data/testimonials";

const Testimonials = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="testimonials"
      className={`py-16 md:py-20 transition-colors duration-300 ${
        isDark ? "bg-[#1a2332]" : "bg-[#f5f5f5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added top spacing for navigation */}
        <div className="h-16 md:h-20"></div>

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <Quote
            className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          />
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ${
              isDark ? "text-white" : "text-gray-700"
            }`}
          >
            آراء عملائنا
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 mb-6 md:mb-8 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            اكتشف تجارب المرضى الذين اختاروا عيادتنا لرعاية أسنانهم
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 md:gap-4">
            {/* Left Line */}
            <div className={`h-[2px] w-24 md:w-32 rounded-full ${
              isDark 
                ? "bg-gradient-to-r from-transparent via-blue-500 to-blue-500" 
                : "bg-gradient-to-r from-transparent via-blue-600 to-blue-600"
            }`}></div>
            
            {/* Right Line */}
            <div className={`h-[2px] w-24 md:w-32 rounded-full ${
              isDark 
                ? "bg-gradient-to-l from-transparent via-blue-500 to-blue-500" 
                : "bg-gradient-to-l from-transparent via-blue-600 to-blue-600"
            }`}></div>
          </div>

          {/* Decorative dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4 md:mt-6">
            <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}></div>
            <div className={`w-2 h-2 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}></div>
            <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"}`}></div>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          autoplay={true}
          autoplayDelay={4000}
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Card
                    className={`p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-300 ${
                      isDark
                        ? "bg-[#0f1c2e] border border-gray-700/30"
                        : "bg-white border border-gray-200 shadow-md"
                    }`}
                  >
                    {/* Header: Image and Name */}
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-300">
                            <img
                              src={testimonial.image}
                              alt={testimonial.nameAr}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="text-right">
                          <h3
                            className={`font-bold text-sm md:text-base ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {testimonial.nameAr}
                          </h3>
                          <p
                            className={`text-[10px] md:text-xs ${
                              isDark ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {testimonial.treatmentAr}
                          </p>
                        </div>
                      </div>

                      {/* Quote Badge */}
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isDark ? "bg-blue-500/20" : "bg-blue-100"
                        }`}
                      >
                        <Quote
                          className={`w-4 h-4 md:w-5 md:h-5 ${
                            isDark ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Comment */}
                    <p
                      className={`text-xs sm:text-sm leading-relaxed text-right ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      "{testimonial.commentAr}"
                    </p>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            <CarouselNext className="static transform-none" />
            <CarouselPrevious className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;