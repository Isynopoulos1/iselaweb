import React from "react";

//IMPORT STYLES
import { SocialContainer } from "./Social.styles";

//IMPORT COMPONENTS
import BehanceLogo from "@assets/icons/be-logo";
import LinkedinLogo from "@assets/icons/in-logo";
import GitLogo from "@assets/icons/git-logo";
import InstagramLogo from "@assets/icons/ig-logo";

const Social = () => {
  return (
    <SocialContainer>
      <BehanceLogo color="black" width="20px" />
      <LinkedinLogo color="black" width="14px" />
      <GitLogo color="black" width="15px" />
      <InstagramLogo color="black" width="13px" />
    </SocialContainer>
  );
};

export default Social;
