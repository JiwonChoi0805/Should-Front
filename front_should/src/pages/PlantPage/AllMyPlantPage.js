import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styled from "styled-components";

const AllMyPlantPage = () => {
  return (
    <div>
      <Header title="All My Plants" />
      <PlantTitle>
        Comming Soon!
      </PlantTitle>
      <Footer />
    </div>
  );
}

export default AllMyPlantPage;

const PlantTitle = styled.div`
  margin-top: 7rem; /* 헤더 아래에 여백을 줌으로써 헤더와 겹치지 않게 함 */
  text-align: center; /* 텍스트 가운데 정렬 (선택 사항) */
  font-size: 3rem;
  font-family: "InknutAntiqua-SemiBold_t";

`;
