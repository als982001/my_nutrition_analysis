import styled from "styled-components";
import { useForm } from "react-hook-form";
import useSearch from "../Hooks/useSearch";
import { BasicButton } from "../Utils/Styles";

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #d5f0c1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.form`
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Textarea = styled.textarea`
  width: 80%;
  height: 100px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  margin: 30px 0;
  padding: 20px;
  font-size: 17px;
`;

const Button = styled.button`
  ${BasicButton}
`;

export default function Main() {
  const { handleSubmit, handleSearch, register } = useSearch();

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(handleSearch)}>
        <Title>알고 싶은 거 입력</Title>
        <Textarea
          {...register("sentence", { required: true, minLength: 1 })}
          placeholder="알고 싶은 것을 입력하세요."
        />
        <Button>입력</Button>
      </Container>
    </Wrapper>
  );
}
