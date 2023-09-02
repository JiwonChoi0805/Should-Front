import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//폰트
import "../fonts/Font.css";
//img
import foot_calendar from "../components/images_comp/foot_calendar.png";
import foot_home from "../components/images_comp/foot_home.png";
import foot_my from "../components/images_comp/foot_my.png";

const Footer = () => {
    const navigate = useNavigate();

    const gotoCalendar = () => {
        navigate("/calendar");
    };
    const gotoHome = () => {
        navigate("/homepage");
    };
    const gotoMy = () => {
        navigate("/mypage");
    };
    return (
        <>
            <FooterWrapper>
                <Container>
                    <img onClick={gotoCalendar} src={foot_calendar} />
                    <img onClick={gotoHome} src={foot_home} />
                    <img src={foot_my} />
                </Container>
            </FooterWrapper>
        </>
    );
};

export default Footer;

const FooterWrapper = styled.div`
    width: 100%;
    height: 8%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #1a2d4d;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 10;
`;
const Container = styled.div`
    width: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
        width: 32px;
        height: 32px;
    }
`;
