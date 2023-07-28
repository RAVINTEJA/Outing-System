import "@/styles/globals.css";

import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="bg-light p-8 min-h-screen">
      <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
