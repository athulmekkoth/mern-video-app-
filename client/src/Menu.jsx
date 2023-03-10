import React from "react";
import styled from "styled-components";
import img from './img/logo.png'
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import {logOut} from "./redux/userstore.js"
const Container = styled.div`
  flex: 1;
  background-color:${({theme})=>theme.bg};
  height: 100vh;
  font-size: 14px;
  position: sticky;
  top: 0;
  color:${({theme})=>theme.text};

  @media (max-width: 768px) {
    font-size: 12px;
    height: auto;
  }
`;
const Wrapper = styled.div`
  padding: 18px 26px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  margin-bottom: 25px;
  color:white;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const Img = styled.img`
  height: 25px;

  @media (max-width: 768px) {
    height: 20px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
    padding: 5px 0px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};

  @media (max-width: 768px) {
    margin: 10px 0px;
  }
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px 10px;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;


export default function Menu(props)
{
  const dispatch = useDispatch() 
  const log=async ()=>
  {
    console.log("logout")
    dispatch(logOut())
  
  }
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
       
            <Link to='/' style={{textDecoration:"none:",color:"inherit"}}> 
            <Logo>
            <Img src={img} />
            VideoTUbe
         

          </Logo>
          </Link>
          <Link to='/' style={{textDecoration:"none:",color:"inherit"}}> 
          <Item>
          <HomeIcon />
          Home
        </Item>
        </Link>
        <Link to ="trends" style={{textDecoration:"none:",color:"inherit"}}>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        </Link>
        <Link to ="subscribtion" style={{textDecoration:"none:",color:"inherit"}}>
        <Item>
          <ExploreOutlinedIcon />
          Subscribtion
        </Item>
        </Link>
     
        
        <Hr />
      {!currentUser &&
        <>
          <Login>
            Sign in to like videos, comment, and subscribe.
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          </Login>
          <Hr />
        </>
      }
      {
        currentUser &&
        <Button onClick={log}>Log Out<LogoutRoundedIcon /></Button>      }
  
   
       
          <Item onClick={() => props.setcolor(!props.color)}>
          <SettingsBrightnessOutlinedIcon />
          {props.color ? "Light" : "Dark"} Mode
        </Item>
 
      </Wrapper>
    </Container>
  );
};

