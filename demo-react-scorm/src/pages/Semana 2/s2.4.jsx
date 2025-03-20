import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S2.4 Conjuntos de datos.htm?raw";


export default function S2_4() {
  const processedContent = processHtmlContent(htmlContentRaw, "s2.4");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}
