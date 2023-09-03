import React from "react";

const CustomDate = () => {
    const now = new Date();
    const todayweek = now.getDay();
    const today = now.getDate();
    const lastday = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0
    ).getDate();

    const formattedDate = `${today.getFullYear()}년 ${
        today.getMonth() + 1
    }월 ${today.getDate()}일`;
    return <></>;
};

export default CustomDate;
