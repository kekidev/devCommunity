import { Button, Center, Input, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Navbar from "../../../components/Navbar";
import { useAuth } from "../../../lib/auth";
import { addProject } from "../../../utils/db";
import { v4 as uuidv4 } from "uuid";

function write() {
  const { auth } = useAuth();
  const router = useRouter();
  const webRef = useRef(null);
  const thumbRef = useRef(null);
  const githubRef = useRef(null);
  const descRef = useRef(null);
  const titleRef = useRef(null);
  const devRef = useRef(null);

  const toast = useToast();

  const post = () => {
    const thumbnail = thumbRef.current.value;
    const description = descRef.current.value;
    const github = githubRef.current.value;
    const web = webRef.current.value;
    const title = titleRef.current.value;
    const developer = devRef.current.value;

    const data = {
      title: title,
      description: description,
      thumbnail: thumbnail,
      developer: developer,
      github: github,
      web: web,
    };

    const e = uuidv4();
    addProject(data, e);
    router.push(`/projects`);
    toast({
      title: "Success!",
      description: "Successfully posted project",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  if (auth?.email === "baejaehwan1125@gmail.com") {
  } else {
    return (
      <>
        <Navbar />
        <h1>You don't have an access to the page</h1>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Input ref={titleRef} placeholder="title" />
      <Input ref={descRef} placeholder="description" />
      <Input ref={devRef} placeholder="developer" />
      <Input ref={thumbRef} placeholder="thumbnail url" />
      <Input ref={githubRef} placeholder="github" />
      <Input ref={webRef} placeholder="web" />
      <Center h="100px">
        <Button colorScheme="teal" variant="outline" onClick={post}>
          Submit
        </Button>
      </Center>
    </>
  );
}

export default write;
