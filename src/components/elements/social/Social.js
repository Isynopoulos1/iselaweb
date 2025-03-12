import React from "react";

//IMPORT STYLES
import { SocialContainer } from "./Social.styles";

//IMPORT COMPONENTS

import LinkedinLogo from "@assets/icons/in-logo";
import GitLogo from "@assets/icons/git-logo";
import MediumLogo from "@assets/icons/medium-logo";

const Social = () => {
  return (
    <SocialContainer>
      <LinkedinLogo color="black" width="11px" target="_blank" href="https://www.linkedin.com/in/isela-v-alarcon/" />
      <GitLogo color="black" width="13px" target="_blank" href="https://github.com/Isynopoulos1" />
      <MediumLogo color="black" width="13px" target="_blank" href="https://medium.com/@isela.v.alarcon"/>
    </SocialContainer>
  );
};

export default Social;
