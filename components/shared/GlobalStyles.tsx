import { createGlobalStyle } from 'styled-components';

import { slateDark, sand, tomato } from '@radix-ui/colors';

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  /* outline:1px dotted red; */
}

 :root { font-family: 'Chivo', 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
  sans-serif;}


body {
  line-height: 1.5;
  font-size: 1.3em;
}

@font-face {
  font-family: 'Newsreader';
  font-style: normal;
  font-weight: 400;
  src: url('/static/fonts/Newsreader.ttf') format('ttf');
  font-named-instance: 'Regular';
}

@font-face {
  font-family: "Whitney";
  src: url("/static/fonts/Whitney.ttf");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Whitney";
  src: url("/static/fonts/whitney-medium.otf");
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: "Chivo";
  src: url("/static/fonts/Chivo-Regular.ttf");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Epilogue";
  src: url("/static/fonts/epilogue-regular.woff2");
  font-style: normal;
  font-weight: 600;
}


@font-face {
  font-family: "Chivo";
  src: url("/static/fonts/Chivo-Bold.ttf");
  font-style: normal;
  font-weight: 600;
}


@font-face {
  font-family: "Fakt";
  src: url("/static/fonts/Fakt.ttf");
  font-style: normal;
  font-weight: 400;
}

::-webkit-scrollbar { width: 0; }


::selection {
  background-color:${tomato.tomato6};
  color: black 
}

em {
  font-family: "Newsreader", serif;
}

html {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}


body {
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-feature-settings: "calt", "kern", "liga";
  background-color:  ${slateDark.slate1};
  color: ${slateDark.slate12};
  line-height: 28px;

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
  font-size: 18px;
  letter-spacing: 0;
  color: ${sand.sand9};
  font-weight: 500;
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
