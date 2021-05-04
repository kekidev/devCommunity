import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Flex,
  Grid,
  Container,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { getAllPosts } from "../../utils/db";



function blog(props) {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "gray.500", dark: "gray.100" };
  const badgeColor = { light: "gray", dark: "teal" };
  const variant = { light: "outline", dark: null };
  const router = useRouter();
  const post = JSON.parse(props.post);
  const e = uuidv4();
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
        key={data.id}
      >
        <Image
          h="44"
          w="3xl"
          src={data.thumbnail}
          alt="Image is not avaliable"
        />
        <Box p={5}>
          <Stack direction="row" align="baseline">
            {data.category.map((val) => (
              <Badge
                key="1"
                rounded="full"
                variant={variant[colorMode]}
                colorScheme={badgeColor[colorMode]}
              >
                {val.toUpperCase()}
              </Badge>
            ))}
          </Stack>
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
            by {data.author}
          </Text>
          <Box textAlign="center" mt={4}>
            <Button onClick={() => router.push(`/blog/${data.id}`)}>
              자세히 보기
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>Blog - Untitled</title>
      </Head>
      <Flex>
        <Spacer />
        <Navbar />
      </Flex>
      <Container maxW="6xl">
        {post.length > 0 && (
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {post.map((singePost) => (
              <Box key={singePost.id} textAlign="start" m={2}>
                {PostGen(singePost)}
              </Box>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const post = await getAllPosts();
  const data = post.map((singlePost: any) => {
    return {
      ...singlePost,
    };
  });
  return {
    props: {
      post: JSON.stringify(data),
    },
  };
}

export default blog;
