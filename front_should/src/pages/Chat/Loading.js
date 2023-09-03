import React, { useState } from "react";
import styled from "styled-components";
import loading_background from "../images/loading_background.png";
import loading_img from "../images/loading_img.png";
import { useNavigate, useLocation } from "react-router-dom";

const Loading = () => {
    const navigate = useNavigate();
    // const [diaryData, setDiaryData] = useState("");
    const location = useLocation();
    const todayDiary = location.state ? location.state.todayDiary : null;

    const gotoComplete = () => {
        console.log({ todayDiary });
        navigate("/complete", { state: { todayDiary } });
    };
    return (
        <>
            <Wrapper>
                <img src={loading_background} />
                <MentContainer>
                    <div className="ment1">
                        user님! <br /> 오늘 하루도 정말 알차게 보냈군요 아침
                        8시부터 나와서 저녁 10시까지 수고 많았어요 :) <br />{" "}
                        얼른 푹 쉬고 좋은 밤 되길 바라요🌃
                    </div>
                    <div className="ment2">펜촉이 가는 중입니다 💭✍️</div>
                    <img onClick={gotoComplete} src={loading_img} />
                </MentContainer>
            </Wrapper>
        </>
    );
};

export default Loading;

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    img {
        width: 100%;
        background-image: url("loading_background.png");
        background-size: cover;
    }
`;
const MentContainer = styled.div`
    width: 60%;
    position: absolute;
    top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .ment1 {
        color: white;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        text-align: center;
    }
    .ment2 {
        color: white;
        font-size: 16px;
        font-weight: 400;
        margin-top: 80px;
    }
    img {
        width: 150px;
        height: 144.63px;
        margin-top: 120px;
    }
`;
