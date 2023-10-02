import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Konga from "./Konga";
import styled from "styled-components";
import konga from "../Pages/Cards.json";
import { Link } from "react-router-dom";

function Mutiple() {
  return (
    <>
      <div>
        {/* <CardDisplay/> */}
        {/* <Item /> */}
        <Container>
          <Div>
            <LTxt>Recommended for you</LTxt>
            <Stxt>See All Items</Stxt>
          </Div>
          {konga.map((el) => (
            <Wrap to={`/detail/${el.id}`} key={el.id}>
              <Konga
                img={el.img}
                newP={el.new}
                old={el.old}
                percent={el.percent}
                save={el.save}
                upTxt={el.UpTxt}
              />
            </Wrap>
          ))}
        </Container>
      </div>
    </>
  );
}

export default Mutiple;

const Wrap = styled(Link)`
  text-decoration: none;
`;
const Stxt = styled.div`
  font-size: 14px;
  color: #8b054d;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LTxt = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin: 0 25px;
`;

const Div = styled.div`
  width: 95%;
  height: 30px;
  border-bottom: 2px solid silver;
  display: flex;
  align-items: center;
  padding: 20px 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
