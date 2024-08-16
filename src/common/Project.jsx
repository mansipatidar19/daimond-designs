import React from "react";

function Project({ src, title }) {
  return (
    <div className="text-center">
      <img
        src={src}
        alt={title}
        className="h-96 shadow-md rounded-lg w-52 mx-auto mb-2 lg:mb-3"
      />
      <span className="text-warmCoral">{title}</span>
    </div>
  );
}

export default Project;
