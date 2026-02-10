import type { ResumeStyles } from "~/types";

export const DEFAULT_NAME = "My Resume";

export const DEFAULT_STYLES = {
  marginV: 55,
  marginH: 45,
  lineHeight: 1.3,
  paragraphSpace: 5,
  themeColor: "#000000",
  fontCJK: {
    name: "",
    fontFamily: ""
  },
  fontEN: {
    name: "Verdana"
  },
  fontSize: 12,
  paper: "A4"
} as ResumeStyles;

export const DEFAULT_MD_CONTENT = `---
name: ${DEFAULT_NAME}
---

`;

export const PREVIEW_SELECTOR = "#vue-smart-pages-preview";

export const DEFAULT_CSS_CONTENT = `
${PREVIEW_SELECTOR} {
  background-color: white;
  color: black;
}
`;