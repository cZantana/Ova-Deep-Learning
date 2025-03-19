import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S1.1 Introduccion a las redes neuronales_ Perceptrón_ OLNN Y MLNN.htm?raw";


export default function S1_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s1.1",["image018"]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}
