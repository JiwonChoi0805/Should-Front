import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
// import "./PlantPage.css";
import styled from "styled-components";

import mainPlant from "../images/mainPlant.png";
import right_arrow from "../images/right_arrow.png";
import left_arrow from "../images/left_arrow.png";

const PlantPage = () => {
    const navigate = useNavigate();
    const handleAllmyplantClick = () => {
        navigate("/allmyplantpage");
    };
    return (
        <Wrapper>
            <Header title="My Plants" />
            <div className="allmyplantsbutton" onClick={handleAllmyplantClick}>
                all my plant
            </div>
            <div className="plantheader">Day.21</div>
            <div className="mainplant">
                <img className="left" src={left_arrow} />
                <img className="plant_img" src={mainPlant} />
                <img className="right" src={right_arrow} />
            </div>
            <Footer />
        </Wrapper>
    );
};

export default PlantPage;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .allmyplantsbutton {
        margin-left: 13rem;
        width: 9rem;
        height: 3rem;
        font-family: InknutAntiqua-Regular;
        font-size: 1rem;
        padding: 0rem;
        text-align: center;
        margin-top: 7rem;
        background-color: #d9d9d9;
        border-radius: 0.5rem; /* 더 큰 값으로 조절하여 더 둥글게 만들 수 있습니다 */
        text-align: center;
    }

    .plantheader {
        font-size: 50px;
        font-weight: bold;
        font-family: "InknutAntiqua-Bold_t";
    }

    .mainplant {
        display: flex;
        flex-direction: row;
        align-items: center;
        .plant_img {
            width: 240px;
        }
        .right {
            width: 40px;
            height: 80px;
        }
        .left {
            width: 40px;
            height: 80px;
        }
    }
`;
