import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChatHeader from "../../components/ChatHeader";

import AIprofile from "../../components/onChatComp/AIprofile";
import Userprofile from "../../components/onChatComp/Userprofile";
import mic_btn from "../images/mic_btn.png";
import send_btn from "../images/send_btn.png";
import finish_btn from "../images/finish_btn.png";

const OnChat = () => {
    const [dialogId, setDialogId] = useState(0);
    // const [render, setRender] = useState(0);
    const [userMessage, setUserMessage] = useState("");
    const [aiMessage, setAiMessage] = useState("");
    const [messageHistory, setMessageHistory] = useState([]);
    const [todayDiary, setTodayDiary] = useState([]);

    useEffect(() => {
        const initialMessage =
            "오늘 하루는 어땠니? 가장 인상 깊었던 일이 뭐야?";
        setAiMessage(initialMessage);
    }, []);

    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
    };
    const handleSubmit = async (e) => {
        await e.preventDefault();
        axios
            .post("/api/chat/", {
                userId: 1,
                dialogId: dialogId,
                body: userMessage,
            })
            .then((response) => {
                setAiMessage(response.data.body);
                setMessageHistory([
                    ...messageHistory,
                    { message: aiMessage, sender: "ai" },
                    { message: userMessage, sender: "user" },
                ]);

                setUserMessage("");
                setDialogId(response.data.dialogId);

                console.log("챗 포스트 성공");
                console.log(response.data);
            })
            .catch((error) => console.log("챗 포스트 실패", error));
    };

    const navigate = useNavigate();

    const handleFinish = async () => {
        await axios
            .get(`/api/chat/end/${dialogId}`)
            .then((response) => {
                setTodayDiary(response.data);
                console.log(response.data);
                navigate("/loading", { state: { todayDiary: response.data } });
            })
            .catch((error) => {
                console.error("일기 겟 실패", error);
            });
    };

    return (
        <Wrapper>
            <ChatHeader title="2023.09.03.SUN" />
            <ChatContainer>
                <div>
                    {messageHistory.map((message, index) => (
                        <div key={index}>
                            {message.sender === "ai" ? (
                                <AIprofile message={message.message} />
                            ) : (
                                <div className="user_comp">
                                    <Userprofile message={message.message} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="ai_comp">
                    <AIprofile message={aiMessage} />
                </div>
                {/* <div className="user_comp">
                    <Userprofile message={userMessage} />
                </div> */}
            </ChatContainer>
            <InputContainer>
                <textarea
                    className="input_chat"
                    value={userMessage}
                    onChange={handleInputChange}
                    rows="1"
                    style={{ resize: "none" }}
                ></textarea>
                <img className="mic" src={mic_btn} />
                <img
                    className="finish"
                    onClick={handleFinish}
                    src={finish_btn}
                />
                <img className="send" onClick={handleSubmit} src={send_btn} />
            </InputContainer>
        </Wrapper>
    );
};
export default OnChat;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #e7e7e7;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ChatContainer = styled.div`
    position: relative;
    top: 100px;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ai_comp {
        display: flex;
        justify-content: flex-start;
    }
    .user_comp {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
`;
const InputContainer = styled.div`
    position: fixed;
    margin-top: 770px;

    display: flex;
    flex-direction: row;
    align-items: center;

    width: 337px;
    height: 38px;
    border-radius: 30px;
    background: #fff;
    padding: 5px;

    .input_chat {
        border-style: none;
        font-size: 14px;
        font-weight: 400;
        color: black;
        width: 95%;
        padding-left: 5px;
    }
    .mic {
        width: 17px;
        margin-right: 7px;
        margin-left: 5px;
    }
    .finish {
        margin-right: 5px;
    }
    .send {
        width: 30px;
        margin-right: 5px;
    }
`;
