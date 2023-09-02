import React from "react";
import styled from "styled-components";
import "../fonts/Font.css";
import { useNavigate } from "react-router-dom";

// 이미지
import homeIcon from "../components/images_comp/homeIcon.png";

const Header = (props) => {
    const { title } = props;

    const navigate = useNavigate();

    return (
        <>
            <HeaderWrapper>
                <div className="title">{title}</div>
            </HeaderWrapper>
        </>
    );
};

export default Header;

const HeaderWrapper = styled.div`

    width: 100vw;
    height: 11%;
    position: fixed;
    background-color: #1a2d4d;
    display: flex;
    justify-content: center;
    z-index: 10;
    .title {
        font-size: 23px;
        color: white;
        font-family: "Lemon";
    }
`;

