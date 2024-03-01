import React from 'react';
import img from "../assets/img.jpg";
import {Image} from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Image src={img} alt='img' w={"100%"} h={"100vh"} />
    </div>
  )
}

export default Home;
