import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S4.2 Técnicas de optimización.htm?raw";


export default function S4_2() {
  const processedContent = processHtmlContent(htmlContentRaw, "s4.2", [""]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}