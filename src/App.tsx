import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import Footer from "./Components/Footer";

const Wrapper = styled.section``;

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
}

export default App;
