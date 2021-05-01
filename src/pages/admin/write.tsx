import { useRouter } from "next/router";
import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../lib/auth";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import { addPost } from "../../utils/db";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@chakra-ui/input";

function write() {
  const { auth } = useAuth();
  const router = useRouter();
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      const data = {
        author: auth?.name,
        author_email: auth?.email,
        category: ["test"],
        content: editorRef.current.getContent(),
        thumbnail:
          "https://lh3.googleusercontent.com/-_xS0wFLr6Z0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckmu8e2IBu25nXp0n5gz4CdpuY5bg/s96-c/photo.jpg",
        title: "test",
      };
      // console.log(editorRef.current.getContent());
      console.log(data);
      const e = uuidv4();
      // addPost(data, e);
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
      <Input placeholder="title" />
      <Input placeholder="thumbnail url" />
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
        <Button colorScheme="teal" variant="outline" onClick={log}>
          Submit
        </Button>
      </Center>
    </>
  );
}

export default write;
