import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S11.1 Introducción a las Redes neuronales recurrentes.htm?raw";


export default function S11_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s11.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}