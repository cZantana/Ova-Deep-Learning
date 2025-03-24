import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S9.2 Transfer Learning.htm?raw";


export default function S9_2() {
  const processedContent = processHtmlContent(htmlContentRaw, "s9.2");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}