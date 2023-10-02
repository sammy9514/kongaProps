import styled from "styled-components";
import BaseInput from "../components/input";
import TextInput from "../components/input/TextInput";
import EmailInput from "../components/input/EmailInput";
import Password from "../components/input/Password";

export const Hero = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Card>
            <Title>Start getting paid with Flutterwave</Title>

            <TextInput placeholder="First name" />
            <TextInput placeholder="Last name" />
            <EmailInput placeholder="Email" />
            <Password placeholder="Password" label="password" />
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #00000020;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Card = styled.div`
  width: 400px;
  height: 600px;
  background-color: #ffffff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 17px;
  margin: 20px 0;
`;
