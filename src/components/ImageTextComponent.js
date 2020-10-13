import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row;
  transition: 0.2s;
  margin: 0 auto;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 40%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  background-color: #3f51b5;
  color: #fff;
  width: 50%;
  padding: 20px;
  font-size: 20px;
`;

const Link = styled.a`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  margin-top: 55px;
  color: #fff;

  &:hover {
    color: #b388ff;
  }
`;

export const ImageTextComp = (props) => {
  return (
    <Wrapper>
      <Image src={props.img} />
      <TextContainer>
        <h2>{props.heading}</h2>
        {props.text}
        <Link href={props.link} onClick={props.linkOnClick}>
          Check it out!
        </Link>
      </TextContainer>
    </Wrapper>
  );
};
