import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S5.1 Clasificación Multiclase y el Dataset.htm?raw";


export default function S5_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s5.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}