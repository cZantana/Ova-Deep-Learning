import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S6.2 Métricas de Evaluación.htm?raw";


export default function S6_2() {
  const processedContent = processHtmlContent(htmlContentRaw, "s6.2");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}