// src/components/TransactionForm.tsx
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';

interface TransactionFormProps {
  onTransactionAdded: (transaction: {
    date: string;
    amount: number;
    description: string;
    transaction_type: string;
    category: string;
  }) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onTransactionAdded }) => {
  const [transaction, setTransaction] = useState({
    date: '',
    amount: 0,
    description: '',
    transaction_type: 'EXPENSE',
    category: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTransactionAdded(transaction);
    setTransaction({
      date: '',
      amount: 0,
      description: '',
      transaction_type: 'EXPENSE',
      category: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) : value,
    }));
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input type="date" name="date" value={transaction.date} onChange={handleChange} required />
        </FormControl>
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input type="number" name="amount" value={transaction.amount} onChange={handleChange} required />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input type="text" name="description" value={transaction.description} onChange={handleChange} required />
        </FormControl>
        <FormControl>
          <FormLabel>Type</FormLabel>
          <Select name="transaction_type" value={transaction.transaction_type} onChange={handleChange}>
            <option value="EXPENSE">Expense</option>
            <option value="INCOME">Income</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Input type="text" name="category" value={transaction.category} onChange={handleChange} required />
        </FormControl>
        <Button type="submit" colorScheme="blue">Add Transaction</Button>
      </VStack>
    </Box>
  );
};

export default TransactionForm;
