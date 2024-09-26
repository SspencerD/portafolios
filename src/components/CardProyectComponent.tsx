import { motion } from "framer-motion";
import Typography from "./TypographyComponent";
import ButtonComponent from "./ButtonComponent";
import SearchIcons from "@/utils/searchIcon";
import searchNameTech from "@/utils/searchTech";

interface CardsProps {
  data:{
    name:string;
    slug?:string;
    description: string;
    image:string;
    logo?:string | null;
    longDescription?:string;
    stack:string[];
    url?:string;
    stackImages?:string[];
  }
}

const CardProyectComponent = (props:CardsProps) => {
  const {
    name,
    slug,
    description,
    image,
    logo,
    url,
    longDescription,
    stack,
    stackImages,
  } = props.data;
  return (
    <motion.div
  initial={{ opacity: 0, x: "-100vw" }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", stiffness: 100, delay: 0.2 ,damping:10 }}
  whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
  className="p-4 bg-gray-100 rounded-lg shadow-lg min-h-[30rem] flex flex-col justify-between"
>
      <div className="flex items-center justify-center">
        <a href={url} no-refferer="true" target="_blank">
        <img src={image} alt={name} 
        className="max-w-[20rem] max-h-[15rem] object-contain"/>
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
      <div className="flex flex-row items-center justify-between mt-4 ">
        <ButtonComponent
          title="Ver"
          size="small"
          shape="rounded"
          onClick={() => {
            window.location.href= `${slug}`;
          }}
        />
        <div>
          <Typography
            type="p"
            align="right"
            color="primary"
            size="small"
            weight="medium"
            family="poppins"
          >
            Tecnologías utilizadas
          </Typography>
          <div className="flex flex-wrap space-x-1 item-center">
            {stack.map((element) => (
            <motion.div
            key={Math.random() + '-' +name}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-2 rounded-md shadow-sm bg-slate-100"
            >
              <a
                href={'#'}
                no-refferer={"false"}
                target={"_blank"}
                className="relative flex items-center justify-center text-center group"
              >
                <SearchIcons name={element} size={15} />
                <span className="absolute w-auto p-1 text-xs text-center transition-all scale-0 bg-black rounded font-poppins-regular text-slate-300 top-8 group-hover:scale-100">
                {searchNameTech(element)}
                </span>
              </a>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProyectComponent;
