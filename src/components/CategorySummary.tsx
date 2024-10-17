import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';

interface CategorySummaryItem {
  category: string;
  total: number;
}

const CategorySummary: React.FC = () => {
  const [summary, setSummary] = useState<CategorySummaryItem[]>([]);

  useEffect(() => {
    fetchCategorySummary();
  }, []);

  const fetchCategorySummary = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/transactions/category_summary/');
      setSummary(response.data);
    } catch (error) {
      console.error('Error fetching category summary:', error);
    }
  };

  return (
    <Box>
      <Heading size="md">Category Summary</Heading>
      <VStack align="stretch" mt={4}>
        {summary.map((item) => (
          <Text key={item.category}>
            {item.category}: ${item.total}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default CategorySummary;
