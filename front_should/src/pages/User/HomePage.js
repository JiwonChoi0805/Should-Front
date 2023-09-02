import React from "react";
import styled from "styled-components";
import "../../fonts/Font.css";
import { useNavigate } from "react-router-dom";

//컴포넌트
import HomeHeader from "../../components/HomeHeader";
import Tasks from "../../components/main/Tasks";
//이미지
import mainCalendar from "../images/mainCalendar.png";
import mainPlant from "../images/mainPlant.png";
import mainRecord from "../images/mainRecord.png";
import mainGochat from "../images/mainGochat.png";

const HomePage = () => {
    const navigate = useNavigate();
    const gotoCalendar = () => {
        navigate("/calendar");
    };
    const gotoChat = () => {
        navigate("/onchat");
    };
    const gotoTasks = () => {
        navigate("/taskpage");
    };
    const gotoAllrecord=()=>{
        navigate("/allmyrecordpage");
    };

    const gotoPlant=()=>{
        navigate("/plantpage");
    }; 
    
    return (
        <div className="home-page">
            <Wrapper>
                <HomeHeader title="2023.08.23 WED" />
                <CategoryWrapper>
                    <Titles>
                        <div className="titleCal">Calendar</div>
                        <div className="titlePlant">My plants</div>
                    </Titles>
                    <Categories>
                        <div className="calendar_main">
                            <img onClick={gotoCalendar} src={mainCalendar} />
                        </div>
                        <div className="myplants">
                            <img onClick={gotoPlant} src={mainPlant} />
                        </div>
                    </Categories>
                    <Titles>
                        <div className="titleChat">go chat</div>
                        <div className="titleRec">all my records</div>
                    </Titles>
                    <Categories>
                        <div className="gochat">
                            <img onClick={gotoChat} src={mainGochat} />
                        </div>
                        <div className="allmyrecords">
                            <img onClick={gotoAllrecord} src={mainRecord} />
                        </div>
                    </Categories>
                </CategoryWrapper>
                <TaskWrapper>
                    <div className="title_task">today my tasks</div>
                    <TaskList onClick={gotoTasks}>
                        <Tasks
                            taskNum="task1"
                            taskTitle="Go to groceries"
                            taskTime={
                                <span>
                                    08/23 <br />
                                    14:00-15:00
                                </span>
                            }
                            taskPlace="Home-plus"
                        />
                        <Tasks
                            taskNum="task2"
                            taskTitle="Returning books to the library"
                            taskTime={
                                <span>
                                    08/23 <br />
                                    14:00-15:00
                                </span>
                            }
                            taskPlace="Home-plus"
                        />
                        <Tasks
                            taskNum="task3"
                            taskTitle={
                                <span>
                                    Do the <br />
                                    assignments
                                    <br />
                                    _math
                                </span>
                            }
                            taskTime={
                                <span>
                                    08/23 <br />
                                    14:00-15:00
                                </span>
                            }
                            taskPlace="Home-plus"
                        />
                        <Tasks
                            taskNum="task4"
                            taskTitle={
                                <span>
                                    Do the <br />
                                    assignments
                                    <br />
                                    _English
                                </span>
                            }
                            taskTime={
                                <span>
                                    08/25 <br />
                                    14:00-15:00
                                </span>
                            }
                            taskPlace="Home"
                        />
                    </TaskList>
                </TaskWrapper>
            </Wrapper>
        </div>
    );
};

export default HomePage;

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
const CategoryWrapper = styled.div`
    width: 95%;
    height: 200px;
    position: absolute;
    top: 13%;
    display: flex;
    flex-direction: column;
`;
const Titles = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color: black;
    font-family: "InknutAntiqua-SemiBold";
    .titleCal {
        margin-left: 35px;
    }
    .titlePlant {
        margin-left: 115px;
    }
    .titleChat {
        margin-left: 50px;
    }
    .titleRec {
        margin-left: 85px;
    }
`;
const Categories = styled.div`
    width: 100%;
    height: 78%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
const TaskWrapper = styled.div`
    position: absolute;
    top: 60%;
    width: 90%;
    display: flex;
    flex-direction: column;
    .title_task {
        font-size: 25px;
        color: black;
        font-family: "InknutAntiqua-Bold";
    }
`;
const TaskList = styled.div`
    width: 100%;
    max-width: 350px;
    overflow-x: auto;
    &::-webkit-scrollbar {
        max-width: 200px;
        height: 8px;
        width: 15px;
        border-radius: 15px;
        background: #aeaeae;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: #666666;
    }
    height: 240px;
    border-radius: 30px;
    background-color: white;
    display: flex;
    flex-direction: row;
`;
