import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import  Card  from "../Card.js"
import axios from "axios";

const Container=styled.div`
display:flex;
flex-wrap:wrap;
gap:10px;
    
`

export default function Search()
{
    const[videos,setvideo]=React.useState([])
    const query=useLocation().search
useEffect(()=>{
    const fetcvideo= async ()=>{
        const res =  await axios.get(`/videos/search${query}`) 
        setvideo(res.data) 


    }
    fetcvideo();

},[query])
    return(
        <Container>
      {videos.map((video) => (
      
      <Card type="lg" key={video._id} video={video} />
       
      ))}
    </Container>
    )

}