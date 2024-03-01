import React , {useEffect} from 'react';
import axios from "axios";
import {server} from "../index";
import { useState } from 'react';
import { Container, HStack } from '@chakra-ui/react';
import Loader from "./Loader";
import ExchangeCard from './ExchangeCard';
import ErrorComp from './ErrorComp';

const Exchange = () => {

  const [exchanges,setExchanges] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  


  useEffect(()=> {
      
    const fetchExchanges = async () => {
      try {
        const {data} = await axios.get(`${server}/exchanges`);

      setExchanges(data);
      setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
     fetchExchanges();
  },[]);

  if(error) return <ErrorComp message={"Error While fetching Exchanges"}/>

  return (<Container maxW={"Container.xl"}>
   {
    loading? <Loader/> : <>
    
    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>

      {
        exchanges.map((i) => (
          <ExchangeCard key={i.id} img={i.image} name={i.name} rank = {i.trust_score_rank} url={i.url}/>
        ))
      }
    </HStack>
    </>
   }
  </Container>
  )
}

export default Exchange
