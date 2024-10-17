import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

const Balance: React.FC = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/balances/current_balance/');
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  return (
    <Box>
      <Heading size="md">Current Balance</Heading>
      <Text fontSize="2xl" fontWeight="bold">
        ${balance}
      </Text>
    </Box>
  );
};

export default Balance;
