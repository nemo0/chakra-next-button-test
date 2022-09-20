import { Button, Container, Flex, useColorMode } from '@chakra-ui/react';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={'7xl'}>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
        flexDir={'column'}
      >
        <Button onClick={toggleColorMode} mb={5}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>

        <Button variant={'primary'} borderRadius={'none'}>
          Primary Variant
        </Button>

        <Button
          variant={'primary'}
          borderRadius={'none'}
          isDisabled
          marginY={'5'}
        >
          Primary Variant Test
        </Button>
      </Flex>
    </Container>
  );
}
