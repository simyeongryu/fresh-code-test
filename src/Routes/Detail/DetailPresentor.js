import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Calendar from "../../Components/Calendar";

const Container = styled.div`
  width: 70%;
  margin: auto;
`;
const DetailPresentor = ({ holidays }) => {
  return (
    <>
      {holidays ? (
        <Container>
          <Calendar holidays={holidays} />
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DetailPresentor;
