import React from "react";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandDiscordFilled,
  TbTelescope,
  TbFileTypePdf,
  TbBrandX,
  TbBrightnessUp,
  TbMoonFilled,
  TbSunFilled,
} from "react-icons/tb";
import {
  SiAzuredevops,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGradle,
  SiJavascript,
  SiKotlin,
  SiLaravel,
  SiNestjs,
  SiGraphql,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiNodedotjs,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiAstro,
  SiJest,
  SiPlaywright,
  SiMongodb,
  SiGooglecloud,
} from "react-icons/si";

interface SearchIconsProps {
    name:string;
    color?:string;
    size?:number;
}
const SearchIcons:React.FC<SearchIconsProps> = ({name,color,size}) => {
  const icons = new Map<string, React.ReactNode>([
    ["github", <TbBrandGithub size={size} color={'#2100C4'} />],
    ["instagram", <TbBrandInstagram size={size} color={'#E6ABFF'} />],
    ["linkedin", <TbBrandLinkedin size={size} color={'#0288D1'} />],
    ["discord", <TbBrandDiscordFilled size={size} color={'#8C9EFF'} />],
    ["telescope", <TbTelescope size={size} color={color} />],
    ["pdf", <TbFileTypePdf size={size} color={'#FF5722'} />],
    ["x", <TbBrandX size={size} color={color} />],
    ["brightness-up", <TbBrightnessUp size={size} color={color} />],
    ["moon", <TbMoonFilled size={size} color={color} />],
    ["sun", <TbSunFilled size={size} color={color} />],
    ["azureDevops", <SiAzuredevops size={size} color={'#035BDA'} />],
    ["express", <SiExpress size={size} color={color} />],
    ["firebase", <SiFirebase size={size} color={'#FF6F00'} />],
    ["flutter", <SiFlutter size={size} color={'#40C4FF'} />],
    ["gradle", <SiGradle size={size} color={'#10E36C'} />],
    ["javascript", <SiJavascript size={size} color={'#FFD600'} />],
    ["kotlin", <SiKotlin size={size} color={'#F88909'} />],
    ["laravel", <SiLaravel size={size} color={'#F50057'} />],
    ["nestjs", <SiNestjs size={size} color={'#F50057'} />],
    ["graphql", <SiGraphql size={size} color={'#E8457C'} />],
    ["typescript", <SiTypescript size={size} color={'#1976D2'} />],
    ["react", <SiReact size={size} color={'#39C1D7'} />],
    ["react-Native", <SiReact size={size} color={'#2ae9fb'} />],
    ["react-router", <SiReactrouter size={size} color={'#E8457C'} />],
    ["redux", <SiRedux size={size} color={'#7E57C2'} />],
    ["nodejs", <SiNodedotjs size={size} color={'#21A366'} />],
    ["tailwind", <SiTailwindcss size={size} color={'#00ACC1'} />],
    ["css", <SiCss3 size={size} color={'#0277BD'} />],
    ["html", <SiHtml5 size={size} color={'#E65100'} />],
    ["astro", <SiAstro size={size} color={'#C822FF'} />],
    ["jest", <SiJest size={size} color={'#99415B'} />],
    ["playwright", <SiPlaywright size={size} color={'#32BEA6'} />],
    ["mongodb", <SiMongodb size={size} color={'#689F38'} />],
    ["gcp", <SiGooglecloud size={size} color={'#1976D2'} />],
  ]);
  return icons.get(name) || null;
};
export default SearchIcons;