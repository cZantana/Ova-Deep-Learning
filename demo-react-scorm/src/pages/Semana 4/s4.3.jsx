import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S4.3 Comparación de optimizadores.htm?raw";


export default function S4_3() {
  const processedContent = processHtmlContent(htmlContentRaw, "s4.3", [""]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}