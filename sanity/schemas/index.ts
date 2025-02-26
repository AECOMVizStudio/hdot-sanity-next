import { SchemaTypeDefinition } from "sanity";
import homePage from "./homePage";
import commentsPage from "./commentsPage";
import getInvolved from "./getInvolved";
import documents from "./documents";
import projectInfo from "./projectInfo";
import faq from "./faq";

const schemas: SchemaTypeDefinition[] = [
  homePage,
  projectInfo,
  getInvolved,
  faq,
  documents,
  commentsPage,
];

export default schemas;
