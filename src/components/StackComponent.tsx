import {motion} from 'framer-motion';
import SearchIcons from '@/utils/searchIcon';
import searchNameTech from '@/utils/searchTech';

interface StackProps {
    name:string;
    scale?:number;
    type?:'spring'|'tween';
    stiffness?:number;
    delay?:number;
    damping?:number;
    duration?:number;
    repeat?:number;
    direction?:'normal'|'reverse'|'alternate'|'alternate-reverse';
    ease?:'linear'|'ease'|'ease-in'|'ease-out'|'ease-in-out';
    iconSize?:number;
};

const StackComponent = (props:StackProps) => {
    const {
        name,
        scale = 1.2,
        type ="spring",
        stiffness = 300,
        delay,
        damping,
        duration,
        repeat,
        direction,
        ease,
        iconSize=15,
    }=props;
    return(
        <motion.div
        key={Math.random() + '-' +name}
          whileHover={{ scale: scale }}
          transition={{ type: type, stiffness: stiffness, delay: delay, damping: damping, duration: duration, repeat: repeat, direction: direction, ease: ease }}
          className="p-2 rounded-md shadow-sm bg-slate-100"
        >
          <a
            href={'#'}
            no-refferer={"false"}
            target={"_blank"}
            className="relative flex items-center justify-center text-center group"
          >
            <SearchIcons name={props.name} size={iconSize} />
            <span className="absolute w-auto p-1 text-xs text-center transition-all scale-0 bg-black rounded font-poppins-regular text-slate-300 top-8 group-hover:scale-100">
            {searchNameTech(props.name)}
            </span>
          </a>
        </motion.div>
    );
};
export default StackComponent;