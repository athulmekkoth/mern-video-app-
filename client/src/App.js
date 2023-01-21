import styled, { ThemeProvider } from 'styled-components'
import Menu from './Menu'
import Navbar from './Navbar'
import { darkTheme, lightTheme } from "./utils/Theme";
import React from 'react';
import Video from './pages/Video';
import Home from './pages/Home'
import {BrowserRouter,Route,Routes}from "react-router-dom"
import SignIn from './pages/SignIn'
import Search from './pages/Search';

const Container=styled.div`
display:flex
`;
const Main=styled.div`
flex:7;
background-color:${({theme})=>theme.bg};
`;
const Wrapper=styled.div``;

export default function App() {

  const[color,setcolor]=React.useState(true)

  return (
    <ThemeProvider theme={color ?darkTheme:lightTheme}>
    <Container>
    <BrowserRouter>
    <Menu color={color} setcolor={setcolor}/>
      <Main>
   <Navbar/>
    <Wrapper>
     <Routes>
    
     
      <Route  path='/' element={<Home type="random"/>} />
      <Route  path='trends' element={<Home type="trends"/>} />
      <Route  path='subscribtion' element={<Home type="sub"/>} />
      <Route  path='/' element={<Home/>} />
      <Route path='search' element={<Search />} />
       <Route  path='signin' element={<SignIn/>} />
      <Route path="video">
        <Route path=":id" element={<Video />} />
        </Route>
     </Routes>
      

    </Wrapper>
    
      </Main> 
      </BrowserRouter>
        </Container>
        </ThemeProvider>

      );
    }
    
    
