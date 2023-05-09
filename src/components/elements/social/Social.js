import React from "react";

//IMPORT STYLES
import { SocialContainer } from "./Social.styles";
import { colors } from "@styles";

//IMPORT COMPONENTS

import LinkedinLogo from "@assets/icons/in-logo";
import GitLogo from "@assets/icons/git-logo";
import InstagramLogo from "@assets/icons/ig-logo";

const Social = () => {
  return (
    <SocialContainer>
      <LinkedinLogo color="black" width="11px" href="https://www.linkedin.com/in/isela-v-alarc%C3%B3n/" target="_blank" />
      <GitLogo color="black" width="13px" href="https://github.com/Isynopoulos1" target="_blank" />
      <InstagramLogo color="black" width="16px" href="https://www.instagram.com/isynnopoulos/" target="_blank" />
    </SocialContainer>
  );
};

export default Social;
