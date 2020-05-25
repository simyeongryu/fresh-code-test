import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Calendar from "../../Components/Calendar";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  margin: auto;
  padding-top: 30px;
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
`;

const Image = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
`;

const TextContainer = styled.div`
  width: 500px;
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
/**
 * 상세 페이지 화면 구현 컴포넌트
 * @param {array} holidays - api 에서 받아온 휴일 목록
 * @param {array} menu - 유저가 선택한 메뉴
 */
const DetailPresentor = ({ holidays, menu }) => {
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

DetailPresentor.propTypes = {
  holidays: PropTypes.array.isRequired,
  menu: PropTypes.object.isRequired
};

export default DetailPresentor;
