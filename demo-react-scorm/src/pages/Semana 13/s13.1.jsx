import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S13.1 Algoritmos de Autoencoders.htm?raw";


export default function S13_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s13.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}