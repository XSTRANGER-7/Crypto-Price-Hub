import React from 'react';
import { Heading, VStack, Image, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom";

const CoinCard = ({id,img,name,symbol,price,currencysym="₹"}) => {
  return (
    <Link to={`/coin/${id}`}>
       <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} css={{"&:hover":{transform:"scale(1.1)"}}}>
        <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt={"coins"}/>
        <Heading size={"md"} noOfLines={1}>
         {symbol}
        </Heading>
        <Text noOfLines={1}>
            {name}
        </Text>
        <Text noOfLines={1}>
         {price? `${currencysym}${price}`:"NA"}
        </Text>
       </VStack>
    </Link>
  )
}

export default CoinCard
