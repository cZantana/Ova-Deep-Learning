import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S6.1 Preprocesamiento de Datos.htm?raw";


export default function S6_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s6.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}