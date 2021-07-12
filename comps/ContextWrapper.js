import { useState } from "react";
import PfContext from "../context/pfContext";

function ContextWrapper({ children }) {
  const placeholderProject = {
    id: 1,
    name: "Headset promotion",
    link: "https://szathrobi.github.io/Headset-Promotion/",
    desc: "The purpose of this template is that I wanted to showcase a single product with and appealing design. Wireframing in Figma is fast and easy so I could design this in time. After that I used React for this SPA and hosted on github pages to make it visible for everyone.",
    images: [
      "/project_imgs/headset_1",
      "/project_imgs/headset_2",
      "/project_imgs/headset_3",
    ],
    stack: ["html", "css", "sass", "js", "react"],
  };

  const [actualProject, setActualProject] = useState(placeholderProject);

  return (
    <PfContext.Provider value={{ actualProject, setActualProject }}>
      {children}
    </PfContext.Provider>
  );
}

export default ContextWrapper;
