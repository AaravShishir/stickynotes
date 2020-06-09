import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/master.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/shared/header";
import Body from "./component/shared/body";
import Footer from "./component/shared/footer";

function App() {
  return (
    <div className="bg-white container">
      <BrowserRouter basename="">
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
