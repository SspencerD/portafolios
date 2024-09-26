import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";

const HeaderComponent = (): React.ReactElement => {
  const sections = ["Home", "Experience", "Projects", "About me", "Contact"];
  const [selected, setSelected] = useState<string>("Home");
  const handleScroll = (section: string) => {
    const id = section.toLowerCase().replace(" ", "-");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex items-center justify-start w-full row-auto md:pl-4 md:pr-4 cols-span-1 md:flex-row md:mt-2">
      <div
        className="flex  justify-start flex-1 w-[40rem]"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img
          src="../../public/img/Logotipo.avif"
          alt="Recneps"
          className="md:object-contain object-cover w-[320px]"
        />
      </div>
      <div className="justify-end hidden md:flex  md:flex-[0.5]">
        <ButtonComponent
          onClick={() => {}}
          title="Language"
          size="small"
          shape="rounded"
          variant="primary"
        />
      </div>
      <nav className="flex items-end justify-end flex-1 p-4 space-x-6 md:p-8 md:space-x-4 ">
        {sections.map((section) => {
          return (
            <button
              key={section}
              className={`text-gray-700 hover:text-primary transactions-colors duration-300 font-poppins-bold ${
                selected === section ? "text-primary" : ""
              }`}
              onClick={() => {
                if (location.pathname === "/main") {
                  handleScroll(section);
                } else {
                  const element = document.getElementById(section);
                  element?.scrollIntoView({ behavior: "smooth" });
                  window.location.href = "/main";
                  
                }
              }}
            >
              {section}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

export default HeaderComponent;
