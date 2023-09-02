import React from "react";
import styled from "styled-components";

const Userprofile = ({ message }) => {
    return (
        <>
            <Wrapper>
                <div className="userMessage">{message}</div>
            </Wrapper>
        </>
    );
};

export default Userprofile;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 15px;
    margin-bottom: 10px;
    .userMessage {
        border-radius: 10px;
        border: 0.3px solid #aeaeae;
        background-color: white;

        font-size: 14px;
        font-weight: 400;

        width: 278.66px;
        height: auto;
        padding: 5px;
    }
`;
