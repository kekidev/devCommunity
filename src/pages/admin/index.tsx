import { Button } from "@chakra-ui/button";
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
      <Navbar />
      <Button>Write Post</Button>
    </>
  );
}

export default index;
