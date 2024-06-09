import React from "react";
import './headerbutton.css';
import Button from '@mui/material/Button';

export default function Headerbutton() {
    const handleSingUpClick = () => {
        console.log('회원가입 버튼 클릭');
    };
    const handleLoginClick = () => {
        console.log('로그인 버튼 클릭');
    };
    const handleSupportClick = () => {
        console.log('고객센터 버튼 클릭');
    };

    return (
        <div className=" header-buttons">
            <Button className="signup" variant="text" onClick={handleSingUpClick}>회원가입</Button>
            <Button variant="text" onClick={handleLoginClick}>로그인</Button>
            <Button variant="text" onClick={handleSupportClick}>고객센터</Button>
        </div>

    );
}