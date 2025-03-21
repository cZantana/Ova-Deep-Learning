import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S8.1 Redes neuronales convolucionales.htm?raw";


export default function S8_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s8.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}