import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Typography from './TypographyComponent';
import testimonials from '@/data/testimonials';



const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container p-8 mx-auto">
      <div className="relative w-full h-full">
        <motion.div
          className="absolute w-full text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
            <div>
          <Typography
            type="p"
            color="black"
            size="large"
            weight="regular"
            family="poppins"
            align="center"
          >
            "{testimonials[currentSlide].feedback}"
          </Typography>
            </div>
          <div className="flex items-center justify-end w-full">
          <Typography
            type="p"
            color="secondary"
            size="small"
            weight="medium"
            family="poppins"
            align="center"
            className="mt-4"
          >
            - {testimonials[currentSlide].name}
          </Typography>
          </div>
        </motion.div>
      </div>

      {/* Indicadores */}
      <div className="flex items-end justify-center mt-[12rem] space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSlider;