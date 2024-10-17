// src/components/TransactionList.tsx
import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  transaction_type: string;
  category: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Description</Th>
            <Th>Amount</Th>
            <Th>Type</Th>
            <Th>Category</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map((transaction) => (
            <Tr key={transaction.id}>
              <Td>{transaction.date}</Td>
              <Td>{transaction.description}</Td>
              <Td>{transaction.amount}</Td>
              <Td>{transaction.transaction_type}</Td>
              <Td>{transaction.category}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TransactionList;
