import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 30px;
`;

/**
 * data fetch가 끝나지 않았을 때의 화면을 대체할 컴포넌트
 */
const Loading = () => (
  <Container>
    <span role="img" aria-label="Loading">
      Loading...
    </span>
  </Container>
);

export default Loading;
