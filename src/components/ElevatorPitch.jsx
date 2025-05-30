import React from "react";

const ElevatorPitch = () => {
  return (
    <div className="  w-full max-w-[45rem] mx-auto px-4 py-8">
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.youtube.com/embed/FnzfXWaSyzo"
          frameBorder="0"
          className=" w-full h-full rounded-xl shadow-lg"
          title="youtube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ElevatorPitch;
