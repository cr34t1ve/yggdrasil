import { createGlobalStyle } from 'styled-components';

import { sandDark } from '@radix-ui/colors';

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  font-size: 2rem;
}


 :root { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    :root { font-family: 'Inter var', sans-serif; }
  }


@font-face {
  font-family: 'Inter';
  font-weight: 300;
  font-display: swap;
  src: url("/static/fonts/Inter-Light.woff2") format("woff2"),
       url("/static/fonts/Inter-Light.woff") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-weight: 400;
  font-display: swap;
  src: url("/static/fonts/Inter-Regular.woff2") format("woff2"),
       url("/static/fonts/Inter-Regular.woff") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-weight: 500;
  font-display: swap;
  src: url("/static/fonts/Inter-Medium.woff2") format("woff2"),
       url("/static/fonts/Inter-Medium.woff") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-weight: 600;
  font-display: swap;
  src: url("/static/fonts/Inter-SemiBold.woff2") format("woff2"),
       url("/static/fonts/Inter-SemiBold.woff") format("woff");
}

@font-face {
  font-family: 'Inter var';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('/static/fonts/Inter-roman.var.woff2') format('woff2');
  font-named-instance: 'Regular';
}


@font-face {
  font-family: 'Newsreader';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('/static/fonts/Newsreader-var.ttf') format('ttf');
  font-named-instance: 'Regular';
}


@font-face {
  font-family: 'Newsreader';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/static/fonts/Newsreader.ttf') format('ttf');
  font-named-instance: 'Regular';
}

::-webkit-scrollbar { width: 0; }


em {
  font-family: "Newsreader";
}

html {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 62.5%;
}
body {
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-feature-settings: "calt", "kern", "liga";
  font-size: 2rem;
  color: white;
  background-color: ${sandDark.sand2};
  min-height: 100vh;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

p {
  margin: 0;
}


a {
  color: white;
  text-decoration: inherit;
}

pre {
  border: 4px solid #48bb78;
  padding: 10px;
  border-radius: 4px;
  color: white;
  background: #1a202c;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: "Monaco", monospace, monospace; /* 1 */
  font-size: 0.8em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

.flex {
  display: flex;
}

.container {
  width: 100%;
  max-width: 740px;
  margin: auto;
  padding: 10vh 0;

  @media (max-width: 720px){
   padding: 10vh 20px !important;
  }
}
`;
