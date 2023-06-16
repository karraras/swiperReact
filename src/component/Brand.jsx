import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Brand(props) {
  let heights = React.useRef();
  const [open, setOpen] = React.useState(true);
  function handleClic() {
    setOpen(!open);
    open
      ? (heights.current.style.height = "270px")
      : (heights.current.style.height = "125px");
  }
  return (
    <div
      ref={heights}
      onClick={handleClic}
      className={`flex h-[125px]  justify-start  relative items-center   cursor-pointer 
      flex-col py-[20px] rounded px-[10px] bg-gradient-to-b from-[red] to-slate-500 duration-300`}
    >
      <p
        className={`    
       ${open ? "scale-0" : "scale-100 duration-300"}  
      
      absolute flex text-white bottom-[12%] -right-[10%]
      bg-[red] items-center justify-center rounded-full border-[2px] border-white border-solid h-[60px] w-[60px] `}
      >
        30%
      </p>
      <div className={`flex justify-center flex-col`}>
        <span
          className={`rounded-full h-[70px] w-[70px] flex items-center  text-white justify-center
         bg-[blue]`}
        >
          <FontAwesomeIcon icon={props.icon} size="2x" />
        </span>
        <h1 className="my-1 text-white text-center select-none font-bold">
          {props.name}
        </h1>
      </div>
      <p className="text-xs text-center text-white select-none mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        eget lacinia sem. Sed blandit dolor vel velit euismod
      </p>
    </div>
  );
}

export default Brand;
