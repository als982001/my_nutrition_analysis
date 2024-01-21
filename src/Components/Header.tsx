import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BasicButton } from "../Utils/Styles";

const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: #aad9bb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const Logo = styled.h3`
  font-weight: bold;
  font-size: 26px;
`;

const Button = styled.button`
  ${BasicButton}
`;

export default function Header() {
  return (
    <Container>
      <Logo>팩트한접시</Logo>
      <Button onClick={() => window.location.assign("https://google.com")}>
        EDAMAN으로 이동
      </Button>
    </Container>
  );
}
