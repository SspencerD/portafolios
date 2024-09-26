import React from 'react'



interface TypographyComponent {
    type:'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | string&{};
    color?:'primary' | 'secondary' | 'tertiary' | 'black' |'white' | 'detail' |string&{};
    size?:'tiny'|'small' |'medium' |'base'|'large' |'extra-large' | string&{};
    weight?:'bold' | 'italic' | 'regular' | 'medium' |'thin';
    family?:'poppins'| 'openSans' |'comicNeue'| string&{};
    align?:'center'|'left'|'right'|'jusitfy'| string&{};
    children:React.ReactNode;
    className?:string;
}

const Typography = (props:TypographyComponent) :React.ReactElement => {
const {
    type,
    color='black',
    size='medium',
    weight='regular',
    family='poppins',
    children,
    align='left',
    className:clasName,
   ...rest
} = props;

const Component = type as keyof JSX.IntrinsicElements;

const className = `
${align === 'center' ? 'text-center': ''}
${align === 'left' ? 'text-left': ''}
${align === 'right' ? 'text-right': ''}
${align === 'justify' ? 'text-justify': ''}
${color === 'primary' ? 'text-primary' : ''}
${color === 'secondary' ? 'text-secondary' : ''}
${color === 'tertiary' ? 'text-tertiary' : ''}
${color === 'black' ? 'text-black' : ''}
${color === 'white' ? 'text-white' : ''}
${color === 'detail' ? 'text-detail' : ''}
${size === 'tiny' ? 'text-[10px]' : ''}
${size === 'small' ? 'text-[12px]' : ''}
${size === 'base' ? 'text-[16px]' : ''}
${size === 'medium' ? 'text-[24px]' : ''}
${size === 'large' ? 'text-[32px]' : ''}
${size === 'extra-large' ? 'text-[50px]' : ''}
${weight === 'bold' ? 'font-bold' : ''}
${weight === 'italic' ? 'italic' : ''}
${weight === 'regular' ? 'font-normal' : ''}
${weight === 'medium' ? 'font-medium' : ''}
${weight === 'thin' ? 'font-thin' : ''}
${family === 'poppins' ? 'font-poppins' : ''}
${family === 'openSans' ? 'font-openSans' : ''}
${family === 'comicNeue' ? 'font-comicNeue' : ''}
${clasName ? clasName : ''}
`;

    return(
        <Component className={className.trim()} {...rest}>
            {children}
        </Component>
    )
}

export default Typography;