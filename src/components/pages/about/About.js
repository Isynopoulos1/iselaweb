import React from "react";

//IMPORT STYLES
import { AboutContainer, Photo, Description, Greetings } from "./About.styles";

const About = () => {
  return (
    <AboutContainer>
      <Description>
        <Greetings>Hi, I'm Isela :) </Greetings>
        I'm a UX/UI Designer from Mexico currently based in Barcelona. I've a strong passion for design, art, cooking, digital tendencies, fashion,
        cinema, architecture & animals. With a background in the digital world as a Senior Art director, I've been in the advertising industry for
        over 10 years. Mostly, I've worked in top digital advertising agencies, designing for brands such as Paypal, Movistar, Amazon, Nike, Purina,
        Gerber. In 2020, I decided to move to Barcelona to attend a workshop on Design Thinking in Brother Bcn. I am very proficient in After Effects,
        Adobe suite (Photoshop, Illustrator, Premiere), and different design tools and frameworks such as Figma. I enjoy building sites implementing a
        design system. I also have a huge interest in Web development, It's reflected by my knowledge in HTML, CSS, SASS, Javascript with libraries
        such as React and Nodejs. During the last 2 years, I’ve complimented my career as a digital designer with certificates, workshops, and working
        on my own as a web developer. My profile matches such a hybrid between designer and web developer. In fact, I love working in both areas
        equally!
      </Description>
      <Photo
        src="https://ik.imagekit.io/ppayaz/iselalarcon/about/1645198493321_KhmFRf9M1.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1653900861003"
        alt="Photo"
      />
    </AboutContainer>
  );
};

export default About;
