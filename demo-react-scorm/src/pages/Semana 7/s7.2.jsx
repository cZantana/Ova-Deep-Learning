import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S7.2 Convolución.htm?raw";


export default function S7_2() {
  const processedContent = processHtmlContent(htmlContentRaw, "s7.2",["image031"]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}