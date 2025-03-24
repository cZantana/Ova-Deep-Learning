import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S12.1 Algoritmo _Attention is All You Need_.htm?raw";


export default function S12_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s12.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}