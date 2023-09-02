import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../fonts/Font.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import addimg from "../images/addimg.png";
import editimg from "../images/editimg.png";

const Complete = () => {
    const location = useLocation();
    const diaryData = location.state ? location.state.todayDiary : null;
    console.log({ diaryData });

    const navigate = useNavigate();
    const gotoCal = () => {
        navigate("/calendar");
    };
    return (
        <>
            <Wrapper>
                <Header title="2023.08.23.WED" />
                <KeywordContainer>
                    <div className="keyword_title">Today's Keyword</div>
                    <div className="keyword_img"></div>
                </KeywordContainer>
                <DiaryContainer>
                    <div className="diary_title">{diaryData.title}</div>
                    <div className="diary_date">{diaryData.date}</div>
                    <div className="diary_content">{diaryData.content}</div>
                </DiaryContainer>
                <ButtonContainer>
                    <AddBtn onClick={gotoCal}>
                        <img src={addimg} />
                        <div className="tocalendar">달력에 추가할래요</div>
                    </AddBtn>
                    <EditBtn>
                        <img src={editimg} />
                        <div className="tocalendar">일기를 수정할래요</div>
                    </EditBtn>
                </ButtonContainer>
                <Footer />
            </Wrapper>
        </>
    );
};

export default Complete;

const Wrapper = styled.div`
    width: 100vw;
    height: 1200px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #e7e7e7;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const KeywordContainer = styled.div`
    position: relative;
    top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .keyword_title {
        color: #000;
        text-align: center;
        font-family: "InknutAntiqua-Regular";
        font-size: 18px;
        font-weight: 400;
        z-index: 2;
    }
    .keyword_img {
        width: 150px;
        height: 150px;
        border-radius: 150px;
        background-color: #666;
        margin-top: 10px;
    }
`;

const DiaryContainer = styled.div`
    position: relative;
    top: 15%;
    display: flex;
    flex-direction: column;
    width: 90%;
    .diary_title {
        color: black;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: -0.18px;
        font-family: "Pretendard-SemiBold";
        margin-bottom: 20px;
    }
    .diary_date {
        color: #000;
        font-size: 15px;
        font-weight: 500;
        font-family: "Pretendard-Regular";
        margin-bottom: 30px;
    }
    .diary_content {
        color: #000;
        font-size: 15px;
        font-weight: 500;
        font-family: "Pretendard-Regular";
        letter-spacing: 1px;
        line-height: 24px;
    }
`;
const ButtonContainer = styled.div`
    position: relative;
    top: 23%;
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 100px;
`;
const AddBtn = styled.div`
    border-radius: 20px;
    background: rgba(123, 143, 215, 0.2);
    width: 150px;
    height: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .tocalendar {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -0.12px;
        margin-right: 10px;
    }
    img {
        width: 30px;
        margin-left: 5px;
    }
`;
const EditBtn = styled.div`
    border-radius: 20px;
    background: rgba(123, 143, 215, 0.2);
    width: 150px;
    height: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .tocalendar {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -0.12px;
        margin-right: 10px;
    }
    img {
        width: 30px;
        margin-left: 5px;
    }
`;
