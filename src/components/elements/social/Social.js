import React from "react";

//IMPORT STYLES
import { SocialContainer } from "./Social.styles";

//IMPORT COMPONENTS

import LinkedinLogo from "@assets/icons/in-logo";
import GitLogo from "@assets/icons/git-logo";
// import InstagramLogo from "@assets/icons/ig-logo";

const Social = () => {
  return (
    <SocialContainer>
      <LinkedinLogo color="black" width="11px" target="_blank" href="https://www.linkedin.com/in/isela-v-alarcon/" />
      <GitLogo color="black" width="13px" target="_blank" href="https://github.com/Isynopoulos1" />
      {/* <InstagramLogo color="black" width="16px" target="_blank" href="https://www.instagram.com/isynnopoulos/" /> */}
    </SocialContainer>
  );
};

export default Social;
