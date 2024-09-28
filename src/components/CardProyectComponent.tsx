import { motion } from "framer-motion";
import Typography from "./TypographyComponent";
import ButtonComponent from "./ButtonComponent";
import StackComponent from "./StackComponent";

interface CardsProps {
  data: {
    name: string;
    slug?: string | null;
    description: string;
    image: string;
    logo?: string | null;
    longDescription?: string | null;
    stack: string[];
    url?: string | null;
    stackImages?: string[] | null;
  };
}

const CardProyectComponent = (props: CardsProps) => {
  const {
    name,
    slug,
    description,
    image,
    url,
    stack,
  } = props.data;
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2, damping: 10 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
      className="p-4 bg-gray-100 rounded-lg shadow-lg min-h-[30rem] flex flex-col justify-between"
    >
      <div className="flex items-center justify-center">
        <a href={url ? url : "#"} no-refferer="true" target="_blank">
          <img
            src={image}
            alt={name}
            className="max-w-[20rem] max-h-[15rem] object-contain"
          />
        </a>
      </div>
      <div>
        <Typography
          type="h3"
          align="left"
          color="primary"
          size="medium"
          weight="medium"
          family="poppins"
        >
          {name}
        </Typography>
        <Typography
          type="p"
          align="left"
          color="black"
          size="base"
          weight="medium"
          family="poppins"
        >
          {description}
        </Typography>
      </div>
      <div className={`flex flex-row items-center  ${slug === null ?'justify-start':'justify-between'} mt-4`}>
        {slug !== null &&(
        <ButtonComponent
          title="Ver"
          size="small"
          shape="rounded"
          onClick={() => {
            const location = window.location.pathname;
            if (location.includes("projects")) {
              window.location.href = `${slug}`;
            } else {
              window.location.href = `projects/${slug}`;
            }
          }}
        />
        )}
        <div>
          <Typography
            type="p"
            align={slug === null ?'left':'right'}
            color="primary"
            size="small"
            weight="medium"
            family="poppins"
          >
            Tecnologías utilizadas
          </Typography>
          <div className="flex flex-wrap space-x-1 item-center">
            {stack.map((element) => (
              <StackComponent name={element} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProyectComponent;
