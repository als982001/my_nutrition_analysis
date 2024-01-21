import styled from "styled-components";
import { useForm } from "react-hook-form";

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
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
`;

interface IForm {
  sentences: string;
}

export default function Main() {
  // react-hook-form을 같은 파일에 적용할 경우

  const { handleSubmit, register } = useForm<IForm>();

  const startCheck = (values: IForm) => {
    const { sentences } = values;
    console.log(sentences);
  };

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(startCheck)}>
        <Title>알고 싶은 거 입력</Title>
        <Textarea
          {...register("sentences", { required: true, minLength: 1 })}
          placeholder="알고 싶은 것을 입력하세요."
        />
        <Button>입력</Button>
      </Container>
    </Wrapper>
  );
}
