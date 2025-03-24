import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S10.1 Redes Siamesas.htm?raw";


export default function S10_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s10.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}