import { useRouter } from "next/router";
import React, { useRef } from "react";
import Navbar from "../../../components/Navbar";
import { useAuth } from "../../../lib/auth";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import { addPost } from "../../../utils/db";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";

function write() {
  const { auth } = useAuth();
  const router = useRouter();
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const thumbRef = useRef(null);
  const categoryRef = useRef(null);
  const descRef = useRef(null);

  const toast = useToast();

  const post = () => {
    if (editorRef.current) {
      const title = inputRef.current.value;
      const thumbnail = thumbRef.current.value;
      const category = categoryRef.current.value.split(" ");
      const description = descRef.current.value;

      const data = {
        author: auth?.name,
        author_email: auth?.email,
        category: category,
        content: editorRef.current.getContent(),
        thumbnail: thumbnail,
        title: title,
        description: description,
      };

      const e = uuidv4();
      addPost(data, e);
      router.push(`/blog/${e}`);
      toast({
        title: "Success!",
        description: "Successfully posted article",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
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
      <Input ref={inputRef} placeholder="title" />
      <Input ref={thumbRef} placeholder="thumbnail url" />
      <Input ref={categoryRef} placeholder="category" />
      <Input ref={descRef} placeholder="description" />
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        apiKey="n4tb6hnentwt4atzyj286iftoj5qr2d1op2jjx7drm1l7kn1"
        initialValue="Write content here"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Center h="100px">
        <Button colorScheme="teal" variant="outline" onClick={post}>
          Submit
        </Button>
      </Center>
    </>
  );
}

export default write;
