'use client'
import React from "react";
import { useLayoutContext } from "../context/LayoutContex";



const VersionSwitcher = () => {
    const { version, setVersion } = useLayoutContext();


    
  return (
    <select
      value={version}
          onChange={(e) =>setVersion(e.target.value as "v1" | "v2")}
          className="p-1 text-purple-500 border-purple-600 border rounded-lg w-[4rem] bg-black cursor-pointer "
    >
          <option value="v1" className="hover:bg-purple-500 cursor-pointer">V1</option>
          <option value="v2" className="hover:bg-purple-500 cursor-pointer">V2</option>
    </select>
  );
};

export default VersionSwitcher;
