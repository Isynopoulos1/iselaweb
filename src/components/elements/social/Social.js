import React from "react";

//IMPORT STYLES
import { SocialContainer } from "./Social.styles";
import { colors } from "@styles";

//IMPORT COMPONENTS
import BehanceLogo from "@assets/icons/be-logo";
import LinkedinLogo from "@assets/icons/in-logo";
import GitLogo from "@assets/icons/git-logo";
import InstagramLogo from "@assets/icons/ig-logo";

const Social = () => {
  return (
    <SocialContainer>
      <BehanceLogo color="black" width="16px" height="16px" href="https://www.behance.net/iselalarcon" />
      <LinkedinLogo color="black" width="11px" href="https://www.linkedin.com/in/isela-v-alarc%C3%B3n/" />
      <GitLogo color="black" width="13px" href="https://github.com/Isynopoulos1" />
      <InstagramLogo color="black" width="16px" href="https://www.instagram.com/isynnopoulos/" />
    </SocialContainer>
  );
};

export default Social;
