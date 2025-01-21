// name of this file and folder is a wildcard to make all routes under admin direct to page.tsx
"use client";
import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
  return <NextStudio config={config} />;
}
