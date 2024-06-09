
import React from 'react';
import styled from 'styled-components';
import Logo from './headerComponent/Logo';
import SearchBar from './headerComponent/search/SearchBar';
import Headerbutton from './headerComponent/headerbtn/headerbutton';
import Category from './category/Category';
//import CustomAppBar from './custom_appbar/custom_appbar';
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";

import IconButton from '@mui/material/IconButton';

import './headerComponent/hearticon.css';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;

const HeaderMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// const SearchContainer = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;

  

// `;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;



const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 320px;
  padding: 10px;
  margin: 10px 0;
  background-color: #5f0080;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const OutlineButton = styled(Button)`
  background-color: #fff;
  color: #5f0080;
  border: 1px solid #5f0080;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid #ddd;
  margin-top: 50px;
`;

function App() {
  return (
    <Container>
      <HeaderTop>
        <Headerbutton />
      </HeaderTop>
      <HeaderMiddle>
        <LogoContainer>
          <Logo />
        </LogoContainer>
          <SearchBar />
        <IconContainer>
          <IconButton>
            <IoLocationOutline style={{ marginRight: '10px', fontSize: '30px', color: "black" }} />
          </IconButton>
          <IconButton>
            <IoIosHeartEmpty style={{ marginRight: '10px', fontSize: '30px', color: "black" }} />
          </IconButton>
          <IconButton>
            <PiShoppingCartLight style={{ fontSize: '30px', color: "black" }} />
          </IconButton>
        </IconContainer>
      </HeaderMiddle>
      
      <Category />
      <LoginContainer>
        <h2>로그인</h2>
        <Input type="text" placeholder="아이디를 입력해주세요" />
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
        <Button>로그인</Button>
        <OutlineButton>회원가입</OutlineButton>
      </LoginContainer>
      <Footer>
        <div>Site name</div>
        <div>
          <ul>
            <li>Topic</li>
            <li>Page</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Topic</li>
            <li>Page</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Topic</li>
            <li>Page</li>
          </ul>
        </div>
      </Footer>
    </Container>
  );
}

export default App;



