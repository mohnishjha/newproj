import "../src/styles/global.css";

import App, { AppContext, AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import AppLayout from "container/AppLayout";

interface MyAppProps extends AppProps {
  pageProps: Record<string, string>;
}
function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
