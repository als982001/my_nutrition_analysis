import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr 2fr;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

const Title = styled.h3`
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: 500;
`;

const Show = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

interface IProps {
  calories: number;
}

export default function Calories({ calories }: IProps) {
  return (
    <Container>
      <Title>Amout Per Serving</Title>
      <Show>
        <Text>Calories</Text>
        <Text>{calories}</Text>
      </Show>
    </Container>
  );
}
