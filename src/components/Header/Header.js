import React from "react";
import { ModeToggle } from "../Button";

function Header() {
  return (
    <div className="">
      <div className="flex w-[80%] item-center justify-between m-[auto] py-[10px]">
        <div className="Left">
          <h2>Logo</h2>
        </div>
        <div className="Right">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
