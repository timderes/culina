import type { AppProps } from "next/app";
import {
  createTheme,
  type MantineColorsTuple,
  MantineProvider,
} from "@mantine/core";
import { appWithTranslation } from "next-i18next";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

// All packages except `@mantine/hooks` require styles imports!
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/charts/styles.css";

// Put overrides with custom stylesheets here
import "../styles/globals.css";
import "../styles/scrollbar.css";

import { Gabriela, Noto_Sans } from "next/font/google";

/*
 * The palette was generated using the Mantine color generator tool.
 *
 * @see https://mantine.dev/colors-generator/?color=6B31B2
 */
const culinaColors: MantineColorsTuple = [
  "#f6eeff",
  "#e7d9f7",
  "#cab1ea",
  "#ad86dd",
  "#9462d2",
  "#854bcb",
  "#7d3fc9",
  "#6b31b2",
  "#5f2ba0",
  "#52238d",
];

const headingFont = Gabriela({
  weight: "400",
  subsets: ["latin"],
});

const textFont = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  primaryColor: "culinaColors",
  colors: {
    culinaColors,
  },
  headings: {
    fontFamily: headingFont.style.fontFamily,
    fontWeight: "bold",
  },
  fontFamily: textFont.style.fontFamily,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <Notifications position="top-right" limit={5} />
      <ModalsProvider>
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  );
};

export default appWithTranslation(App);
