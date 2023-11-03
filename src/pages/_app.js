import Header from "@/components/header";
import "@/styles/globals.css";
import "@/styles/header.css";
import "@/styles/index.css";
import "@/styles/form.css";
import "@/styles/profile.css";
import "@/styles/popup.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
