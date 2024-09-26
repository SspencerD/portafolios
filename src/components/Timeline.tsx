import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typography from "./TypographyComponent";

interface TimelineProps {
  events: Array<{
    date: string;
    title: string;
    description: string;
    place: string;
    icon?: string;
    location?: string;
  }>;
}

const TimeLineComponent: React.FC<TimelineProps> = (props) => {
  const { events } = props;

  return (
    <div className="relative mx-[10%] 0 w-full">
      {/* Línea de tiempo con gradiente */}
      <div className="absolute top-0 h-full left-1/2 w-[2px] bg-gradient-to-b from-green-300 to-green-600  -z-5" />
      {events.map((event, index) => {
        const { ref, inView } = useInView({
          threshold: 0.1,
          triggerOnce: true,
        });

        return (
          <div
            key={index}
            ref={ref}
            className={`mb-8 w-full flex items-center ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } flex-col md:flex-row md:items-center`}
          >
            {/* Círculo con animación de rebote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 5 ,duration:3000  }}
              className={' md:z-[200] hidden  md:inline'}
            >
              <motion.div
                className={`${
                  index % 2 === 0
                    ? "md:translate-x-[34vw] lg:translate-x-[44.5rem] h-[50px] w-[50px] bg-lightColorIn rounded-full shadow-lg shadow-detail"
                    : "md:-translate-x-[6.5rem] h-[50px] w-[50px] bg-lightColorIn rounded-full shadow-lg shadow-detail"
                } md:static md:mx-0 mx-auto`}
              ></motion.div>
            </motion.div>

            {/* Contenido del evento */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ ease: "easeInOut", duration: 0.9 }}
              className={`w-full md:w-1/2 p-6  z-[100] ${
                index % 2 === 0 ? "md:ml-[-9rem]" : "md:mr-[-8rem]"
              } rounded-lg shadow-lg bg-gray-40`}
            >
              <Typography
                size="normal"
                type="p"
                color="tertiary"
                weight="bold"
                family="poppins"
                align="start"
              >
                {event.date}
              </Typography>
              <Typography
                size="large"
                type="h3"
                color="primary"
                weight="bold"
                family="poppins"
                align="start"
              >
                {event.title}
              </Typography>
              <Typography
                size="normal"
                type="p"
                color="black"
                weight="regular"
                family="poppins"
                align="left"
              >
                {event.description}
              </Typography>
              <Typography
                size="small"
                type="span"
                color="secondary"
                weight="bold"
                family="comic"
                align="left"
              >
                {event.place}
              </Typography>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default TimeLineComponent;
