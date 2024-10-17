import React, { useState } from 'react';
import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import CategorySummary from './components/CategorySummary';
import Balance from './components/Balance';

interface Transaction {
  id: number;
  date: string;
  amount: number;
  description: string;
  transaction_type: string;
  category: string;
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleTransactionAdded = (newTransaction: Omit<Transaction, 'id'>) => {
    const mockTransaction: Transaction = {
      id: transactions.length + 1,
      date: newTransaction.date || '2024-01-01',
      amount: newTransaction.amount || 100,
      description: newTransaction.description || 'Mock Transaction',
      transaction_type: newTransaction.transaction_type || 'EXPENSE',
      category: newTransaction.category || 'Miscellaneous',
    };

    setTransactions((prevTransactions) => [...prevTransactions, mockTransaction]);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading>Financial Tracker</Heading>
        <Balance />
        <Box>
          <Heading size="md" mb={4}>Add Transaction</Heading>
          <TransactionForm onTransactionAdded={handleTransactionAdded} />
        </Box>
        <Box>
          <Heading size="md" mb={4}>Transactions</Heading>
          <TransactionList transactions={transactions} />
        </Box>
        <CategorySummary />
      </VStack>
    </Container>
  );
}

export default App;
