import { SchemaTypeDefinition } from "sanity";
import homePage from "./homePage";
import commentsPage from "./commentsPage";
import comment from "./comment";
import documents from "./documents";
import projectInfo from "./projectInfo";
import faq from "./faq";

const schemas: SchemaTypeDefinition[] = [
  homePage,
  commentsPage,
  comment,
  documents,
  projectInfo,
  faq,
];

export default schemas;
