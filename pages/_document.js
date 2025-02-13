import MainLayout from "@/src/layout/MainLayout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <MainLayout>
        <Main />
        </MainLayout>
        <NextScript />
      </body>
    </Html>
  );
}
