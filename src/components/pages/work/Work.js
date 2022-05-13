import React from "react";

// IMPORT DATA
import { projects } from "@assets/data";

//IMPORT STYLES
import { NameProject } from "./Work.styles";

const Work = ({ match }) => {
  const project = projects?.find((p) => p.href === match.params.name) ?? {};
  console.log(project);
  // MAIN RENDER
  return <NameProject>{project?.title}</NameProject>;
};

export default Work;
