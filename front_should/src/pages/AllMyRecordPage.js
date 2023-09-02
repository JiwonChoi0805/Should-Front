import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';

const AllMyRecordPage = () => {
  return (
    <Wallpaper>
      <Header title="All my records" />
      <AllmyTitle>
        Comming Soon!
      </AllmyTitle>
      <Footer />
    </Wallpaper>
  );
}

export default AllMyRecordPage;

const Wallpaper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background-color: #e7e7e7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AllmyTitle = styled.div`
  margin-top: 10rem; /* 헤더 아래에 여백을 줌으로써 헤더와 겹치지 않게 함 */
  text-align: center; /* 텍스트 가운데 정렬 (선택 사항) */
  font-size: 3rem;
  font-family: "InknutAntiqua-SemiBold_t";
`;



