import React, { useState, useEffect } from "react";
import { Box, Button, Container, Heading, List, ListItem, Text, VStack, useToast } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

const Index = () => {
  const [mersennePrimes, setMersennePrimes] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const toast = useToast();

  // この関数はプレースホルダーで、実際にはメルセンヌ素数を計算するバックエンドと連携する必要があります。
  const calculateMersennePrime = () => {
    setIsCalculating(true);
    // 計算が完了するまでのダミーのタイマー
    setTimeout(() => {
      const newPrime = Math.floor(Math.random() * 1000); // ダミーの素数
      setMersennePrimes([...mersennePrimes, newPrime]);
      setIsCalculating(false);
      toast({
        title: `New Mersenne Prime Found!`,
        description: `A new Mersenne prime number has been found: ${newPrime}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }, 2000);
  };

  useEffect(() => {
    // このサイトにアクセスすると自動的に計算開始する
    calculateMersennePrime();
  }, []);

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Mersenne Prime Generator
        </Heading>
        <Text>Welcome to the communal Mersenne prime number generator. Just by being here, you're helping us calculate new Mersenne primes!</Text>
        <Button leftIcon={<FaCalculator />} colorScheme="teal" onClick={calculateMersennePrime} isLoading={isCalculating} loadingText="Calculating" disabled={isCalculating}>
          Generate a new Mersenne Prime
        </Button>
        <Box w="100%">
          <Heading as="h2" size="lg">
            Discovered Primes
          </Heading>
          <List spacing={2}>
            {mersennePrimes.map((prime, index) => (
              <ListItem key={index} p={2} shadow="md">
                {`2^${prime} - 1`}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
