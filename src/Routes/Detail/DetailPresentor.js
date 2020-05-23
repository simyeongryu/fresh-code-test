import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Calendar from "../../Components/Calendar";

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  margin: auto;
  padding-top: 30px;
`;

const ImageContainer = styled.div`
  width: 40%;
  height: 400px;
`;

const Image = styled.div`
  width: 100%;
  height: 460px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
`;

const TextContainer = styled.div`
  width: 60%;
  margin-left: 50px;
`;

const Name = styled.h2`
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 20px;
`;

const DetailPresentor = ({ holidays, menu }) => {
  console.log(menu);
  return (
    <>
      {holidays && menu ? (
        <Container>
          <ImageContainer>
            <Image imgUrl={menu.imgUrl}></Image>
          </ImageContainer>
          <TextContainer>
            <Name>{menu.name}</Name>
            <Description>
              {menu.description.slice(0, 12)}
              <br />
              <br />
              {menu.description.slice(12)}
            </Description>
            <Calendar holidays={holidays} />
          </TextContainer>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DetailPresentor;
