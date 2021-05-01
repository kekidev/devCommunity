import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { AuthProvider } from "../lib/auth";
import "react-quill/dist/quill.snow.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
