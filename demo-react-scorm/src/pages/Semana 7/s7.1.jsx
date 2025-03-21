import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S7.1 Introduccion al procesamiento de imagenes.htm?raw";


export default function S7_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s7.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}