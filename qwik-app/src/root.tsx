import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
  <meta charset="utf-8" />

  {/* FONT PRELOAD - BURASI */}
  <link
    rel="preload"
    href="/fonts/Montserrat-SemiBold.woff2"
    as="font"
    type="font/woff2"
    crossOrigin=""
  />

  <link
    rel="preload"
    href="/fonts/OpenSans-Regular.woff2"
    as="font"
    type="font/woff2"
    crossOrigin=""
  />

  {!isDev && (
    <link
      rel="manifest"
      href={`${import.meta.env.BASE_URL}manifest.json`}
    />
  )}

  <RouterHead />
</head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
