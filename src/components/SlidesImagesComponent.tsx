import { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  intervalTime?: number;
  transitionTime?: number;
  className?: string;
};

const ImageSliderComponent = (props: ImageSliderProps) => {
  const { images, intervalTime = 3000, className } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambiar de imagen automáticamente cada 'intervalTime' segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length); // Cambia a la siguiente imagen
    }, intervalTime);

    return () => clearInterval(intervalId); // Limpia el intervalo cuando se desmonta el componente
  }, [images.length, intervalTime]);

  return (
    <div className={className ? className : "relative w-full min-h-screen overflow-hidden"}>
      {/* Contenedor de todas las imágenes */}
      <div className="flex w-full h-full transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <img
              src={img}
              alt={`slide-${index}`}
              className="object-contain w-full h-full" // Asegúrate de que la imagen ocupe todo el contenedor
            />
          </div>
        ))}
      </div>

      {/* Indicadores de navegación (opcional) */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSliderComponent;
