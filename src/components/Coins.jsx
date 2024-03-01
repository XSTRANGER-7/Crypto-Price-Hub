import React , {useEffect} from 'react';
import axios from "axios";
import {server} from "../index";
import { useState } from 'react';
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loader from "./Loader";
import CoinCard from './CoinCard';
import ErrorComp from './ErrorComp';

const Coins = () => {

  const [coins,setCoins] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [page,setPage] = useState(1);
  const [currency,setCurrency] = useState("inr");

const currencysym = currency==="inr" ? "₹" : currency === "eur" ? "€" : "$";

 const changePage = (page) => {
  setPage(page);
  setLoading(true);
 };

 const btns = new Array(132).fill(1);

  useEffect(()=> {
      
    const fetchCoins = async () => {
      try {
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);

      setCoins(data);
      setLoading(false); 
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
     fetchCoins();
  },[currency,page]);

  if(error) return <ErrorComp message={"Error While fetching Coins"}/>

  return (<Container maxW={"Container.xl"}>
   {
    loading? <Loader/> : <>
    
    <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
      <HStack spacing="4">
        <Radio value={"inr"}>INR</Radio>
        <Radio value={"usd"}>USD</Radio>
        <Radio value={"eur"}>EUR</Radio>
      </HStack>
    </RadioGroup>
    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>

      {
        coins.map((i) => (
          <CoinCard id={i.id} key = {i.id} img={i.image} name={i.name} symbol = {i.symbol} price={i.current_price} currencysym={currencysym}/>
        ))
      }
    </HStack>

    <HStack w="full" overflow={"auto"} p={"8"}>
      {
        btns.map((item,index) => (
          <Button key={index} bgColor={"black"} color={"white"} onClick={()=> changePage(index+1)}>
           {index+1}
          </Button>
        ))
      }
    </HStack>
    </>
   }
  </Container>
  )
}


export default Coins;
