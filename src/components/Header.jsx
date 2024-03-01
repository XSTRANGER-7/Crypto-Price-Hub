import { HStack,Button } from '@chakra-ui/react';
import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} position={"fixed"} w={"100%"}>
      <Button variant={"unstyled"} color={"white"} ml={"5"}>
        <Link to="/" >Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} ml={"7"}>
        <Link to="/exchange" >Exhanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} ml={"7"}>
        <Link to="/coins" >Coins</Link>
      </Button>
    </HStack>
  )
}

export default Header;
