import React from "react";

//IMPORT COMPONENTS
import Header from "@layout/header/Header";
import Main from "@layout/main/Main";
import Footer from "@layout/footer/Footer";

//IMPORT STYLES
import "@styles/reset.css";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
