import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { StarIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Post } from "../../types/post";
import Head from "next/head";
import { useRouter } from "next/router";

function blog() {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.700" };
  const textColor = { light: "gray.500", dark: "gray.100" };
  const badgeColor = { light: "whatsapp", dark: "teal" };
  const router = useRouter();

  function generatePost(data: Post) {
    return (
      // create post
      <Box
        width="300px"
        height="380px"
        maxHeight="400px"
        rounded="20px"
        overflow="hidden"
        boxShadow="sm"
        bg={bgColor[colorMode]}
      >
        <Image w="7xl" src={data.thumbnail} alt="Image is not avaliable" />
        <Box p={5}>
          <Stack isInline align="baseline">
            {data.category.map((val) => (
              <Badge rounded="full" colorScheme="whatsapp">
                {val.toUpperCase()}
              </Badge>
            ))}
            <Text textTransform="uppercase" fontSize="sm" color="gray.500">
              {data.create_at.getMonth() + 1}/{data.create_at.getDate()}/
              {data.create_at.getFullYear()}
            </Text>
          </Stack>
          <Text as="h2" fontWeight="semibold" fontSize="xl" my={2}>
            {data.title}
          </Text>
          <Text isTruncated fontWeight="light" fontSize="md" color="gray.500">
            {data.content}
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
              See more
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
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.3 }}>
          <Button m={5} colorScheme="teal" variant="outline">
            Write Post
          </Button>
        </motion.div>

        <Spacer />
        <Navbar />
      </Flex>

      <SimpleGrid minChildWidth="120px" spacing="40px">
        {/* get posts from firebase and call function */}
        {/* TODO: get data from firebase and display data */}
        {generatePost({
          author: "keki",
          title: "This is kinda weird",
          thumbnail:
            "https://cdn.discordapp.com/attachments/505047047255359498/834697410445443072/elonmusk.gif",
          category: ["Development", "news"],
          updated_at: new Date(),
          create_at: new Date(),
          content:
            "adfasidufaejfdsfaisfbaefasdfasdfasddsafasdfasdfasdfasdfdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf",
          id: "yU7TsNCB9SN5V1Eulogj",
        })}
      </SimpleGrid>
    </>
  );
}

export default blog;
