import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";

import Main from "./Pages/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Wrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
