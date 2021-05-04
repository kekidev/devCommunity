import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Grid,
  Container,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import {FaGithub, FaStar} from "react-icons/fa";

function blog() {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "gray.500", dark: "gray.100" };
  const router = useRouter();
  function PostGen(data) {
    return (
      <Box
        width="300px"
        height="380px"
        rounded="20px"
        m={3}
        overflow="hidden"
        boxShadow="xl"
        bg={bgColor[colorMode]}
      >
        <Image
          h="44"
          w="3xl"
          src={data.thumbnail}
          alt="Image is not avaliable"
        />
        <Box p={5}>
          <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
            {data.title}
          </Text>
          <Text isTruncated fontWeight="light" fontSize="md" color="gray.500">
            {data.description}
          </Text>
          <Text
            fontWeight="semibold"
            fontSize="lg"
            color={textColor[colorMode]}
          >
            by {data.developer}
          </Text>
          <Box textAlign="center" mt={4}>
            <Button leftIcon={<FaGithub />} onClick={() => router.push(data.github)}>
              Github
            </Button>
            {!!data.web ? <Button leftIcon={<FaStar />} onClick={() => router.push(data.web)}>Visit</Button> : null}
          </Box>
        </Box>
      </Box>
    );
  }
  
  interface Post {
    title: string;
    thumbnail: string;
    github: string;
    web?: string;
    developer: string;
    description: string;
  }
  
  const QuizApp: Post = {
    title: "퀴즈 앱",
    thumbnail: "https://i.ibb.co/HCD5B5Y/Screen-Shot-2021-05-04-at-2-43-19-PM.png",
    github: "https://github.com/wevbute/Quiz-next-app",
    web: "https://quiz-next-app-wevbute.vercel.app/",
    developer: "keki",
    description: "호스팅하다가 고장나서 작동 안됩니다"
  }
  
  const Deeplearning: Post = {
    title: "내 딥러닝 공부 리포",
    thumbnail: "https://i.ibb.co/CwFbhYM/Screen-Shot-2021-05-04-at-3-12-12-PM.png",
    github: "https://github.com/wevbute/DeepLearning",
    developer: "keki",
    description: "으악"
  }
  
  const ReactVision: Post = {
    title: "웹 사물인식 AI",
    thumbnail: "https://i.ibb.co/MsGcJ7r/Screen-Shot-2021-05-04-at-3-23-44-PM.png",
    github: "https://github.com/wevbute/react-computerVision",
    web: "https://wevbute.github.io/react-computerVision/",
    developer: "keki",
    description: "웹 사물인식 AI"
  }
  
  const BOJ: Post = {
    title: "백준 온라인 저지",
    thumbnail: "https://i.ibb.co/MhchzjZ/Screen-Shot-2021-05-04-at-3-30-42-PM.png",
    github: "https://github.com/wevbute/BOJ",
    developer: "keki",
    description: "백준 온라인 저지 소스"
  }
  
  const MovieApp: Post = {
    title: "영화 앱",
    web: "https://wevbute.github.io/movie-app/",
    thumbnail: "https://i.ibb.co/kJ2SnfG/Screen-Shot-2021-05-04-at-3-34-50-PM.png",
    github: "https://github.com/wevbute/movie-app",
    description: "내가 만든건지 코드 가져온건지 기억이 안남",
    developer: "keki",
  }
  
  
  return (
    <>
      <Head>
        <title>Projects - Untitled</title>
      </Head>
      <Flex>
        <Spacer />
        <Navbar />
      </Flex>
      <Container maxW="6xl">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {PostGen(QuizApp)}
            {PostGen(Deeplearning)}
            {PostGen(ReactVision)}
            {PostGen(BOJ)}
            {PostGen(MovieApp)}
          </Grid>
      </Container>
    </>
  );
}


export default blog;
