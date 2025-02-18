import { SchemaTypeDefinition } from "sanity";
import homePage from "./homePage";
import commentsPage from "./commentsPage";
import documents from "./documents";
import projectInfo from "./projectInfo";
import faq from "./faq";

import { commentSchema } from "./comments";

const schemas: SchemaTypeDefinition[] = [
  homePage,
  commentsPage,
  documents,
  projectInfo,
  faq,
  commentSchema,
];

export default schemas;
