import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent';


const HeaderComponent = ():React.ReactElement => {

    const sections = ['Home','Experience','Projects','About me','Skills'];
    const [selected, setSelected] = useState<string>("Home");


    const handleScroll = (section: string) => {
        const id = section.toLowerCase().replace(" ", "-");  
     
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setSelected(section);
        }
      };
    return(
        <header className="sticky flex items-center justify-start w-full p-4">
        <div className="text-primary text-2xl font-bold mx-[6%]">
          /&gt; Recneps T.I.
        </div>
        <div className=" ml-[35%] mr-[5%]">
        <ButtonComponent onClick={() =>{}} title="Language" size="small" shape="rounded" variant="primary"/>
        </div>
        <nav className="flex  space-x-6 mr-[4%] justify-end ">
         {sections.map((section =>{
            return(
                <button
              key={section}
              className={`text-gray-700 hover:text-primary transactions-colors duration-300 font-poppins-bold ${selected === section ? 'text-primary' : ''}`}
              onClick={() => handleScroll(section)}
            >
              {section}
            </button>
            )
         }))}
        </nav>
     
      </header>
    );
};

export default HeaderComponent;