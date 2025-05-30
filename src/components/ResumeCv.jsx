import React from "react";

const ResumeCv = () => {
  return (
    <div className=" mt-20 text-center">
      <p className=" text-lg font-semibold mb-2">Want to Know More ?</p>
      <div className=" flex justify-center gap-4">
        <a
          href="https://drive.google.com/file/d/1o0psAjVGC-CaMs2GyfhA3KQ5P1vwlDVD/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
        >
          View Resume
        </a>
        <a
          href="https://drive.google.com/file/d/1ObmBEhJ7izzaelZhd5vsm6mKaC-_gxDh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View CV
        </a>
      </div>
    </div>
  );
};

export default ResumeCv;
