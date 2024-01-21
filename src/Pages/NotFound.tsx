import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BasicButton } from "../Utils/Styles";

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #d5f0c1;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Button = styled.button`
  ${BasicButton}
`;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>페이지를 찾을 수 없습니다.</Title>
      <Button onClick={() => navigate("/")}>돌아가기</Button>
    </Wrapper>
  );
}
