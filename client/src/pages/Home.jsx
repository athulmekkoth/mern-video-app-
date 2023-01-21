import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Card from "../Card.js"
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export default function Home({type})
{
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      console.log(res.data)
      setVideos(res.data);
  
    };
    fetchVideos();
  },[type]);
 // console.log(videos)
  return (
    <Container>
      {videos.map((video) => (
      
      <Card type="sm" key={video._id} video={video} />
       
      ))}
    </Container>
  );
};

