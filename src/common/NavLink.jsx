import React from "react";

function NavLink({ href, name }) {
  return (
    <>
      <a
        href={href}
        className="text-black border-2 px-2 border-transparent hover:border-b-warmCoral transition duration-500"
      >
        {name}
      </a>
    </>
  );
}

export default NavLink;
