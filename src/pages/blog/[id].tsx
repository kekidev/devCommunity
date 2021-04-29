import { Flex, Spacer } from "@chakra-ui/layout";
import { NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";
import { getPost } from "../../utils/db";
import { FaInfo, FaPen, FaLayerGroup } from "react-icons/fa";
import { Button } from "@chakra-ui/button";
import { ArrowLeftIcon } from "@chakra-ui/icons";

function Post(props) {
  const post = JSON.parse(props.post);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{post.title} - Untitled</title>
      </Head>
      <Flex>
        <Button
          leftIcon={<ArrowLeftIcon />}
          m={6}
          onClick={() => router.push("/blog")}
        >
          Go back
        </Button>
        <Spacer />
        <Navbar />
      </Flex>
      <h1>title - {post.title}</h1>
      <h2>author - {post.author}</h2>
      <p>content - {post.content}</p>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const id = context.query.id;
  const postData = await getPost(id);
  return {
    props: {
      post: postData,
    },
  };
}

export default Post;
