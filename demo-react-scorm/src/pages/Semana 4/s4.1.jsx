import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S4.1 Hiperparametros.htm?raw";


export default function S4_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s4.1", [""]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}