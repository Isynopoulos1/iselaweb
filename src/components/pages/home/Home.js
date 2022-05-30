import React from "react";

//IMPORT STYLES
import { HomeContainer, MainVideo, Container } from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <Container>
        <MainVideo
          id="video"
          src="https://ik.imagekit.io/ppayaz/iselalarcon/home/main_video_iselaweb_b90NrX4S1.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1653900920001"
          autoPlay
          muted
          loop
        >
          Tu navegador no admite el elemento <code>video</code>.
        </MainVideo>
      </Container>
    </HomeContainer>
  );
};

export default Home;
