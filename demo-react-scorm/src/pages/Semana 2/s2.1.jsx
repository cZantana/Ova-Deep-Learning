import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S2.1 Funciones de activación.htm?raw";


export default function S2_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s2.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}
