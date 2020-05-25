# 프레시 코드 프론트엔드 개발자 코드 테스트 - 류시명

## 사용한 라이브러리

1. axios - 데이터 fetching 
2. styled-components - 스타일링
3. react-router-dom - 페이지 라우팅
4. redux - state 관리
5. react-redux - redux와 react 연동
6. prop-types - prop 디버깅
7. react-slideshow-image - carousel 구현
8. react-datepicker - calendar 구현

## 폴더 및 파일 구조

- `public/`
  - `libraryCustom.css` : 사용한 라이브러리의 css를 커스텀하는 파일
  - `reset.css` : 기본 reset.css 적용
- `src/`
  - `api.js` : axios로 api에서 데이터를 fetching 하는 파일
  - `store.js` : redux를 이용한 state 관리 파일
  - `Components/` : 화면 구성에 필요한 모든 컴포넌트들이 담겨 있는 폴더
    - `App.js` : 최상위 컴포넌트. Router 포함.
    - `Calendar.js` : 달력 구현 컴포넌트
    - `Catalog.js` : 카탈로그 구현 컴포넌트
    - `Header.js` : 헤더 레이아웃 컴포넌트
    - `Loading.js` : 화면 구현에 문제가 있을 시 대체되는 화면을 구현한 컴포넌트
    - `SlideItem.js` : Carousel 내용물을 구현하는 컴포넌트
    - `Tags.js` : Catalog 내 아이템들의 태그를 구현하는 컴포넌트
  - `Routes/` : url에 따라 화면에 나타날 컴포넌트들이 담겨 있는 폴더
    - `...Container`: state를 관리하고 Presentor로 전달하는 파일
    - `...Presentor`: 스타일링을 포함한 화면 구현 파일
    - `index.js`: Container를 export 하는 파일


