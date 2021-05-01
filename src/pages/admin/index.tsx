import { Button } from "@chakra-ui/button";
import { Center, Flex, Heading, SimpleGrid, Spacer } from "@chakra-ui/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../lib/auth";

function index() {
  const { auth } = useAuth();
  const router = useRouter();

  if (auth?.email === "baejaehwan1125@gmail.com") {
  } else {
    return (
      <>
        <Head>
          <title>ACCESS DENIED</title>
        </Head>
        <Navbar />
        <h1>you don't have an access to this page</h1>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Panel - Untitled</title>
      </Head>
      <Flex>
        <Heading m={4}>Admin Panel</Heading>
        <Spacer />
        <Navbar />
      </Flex>
      <SimpleGrid column={5} spacing={10}>
        <Button
          onClick={() => {
            router.push("/admin/write");
          }}
        >
          Write Post
        </Button>
      </SimpleGrid>
    </>
  );
}

export default index;
