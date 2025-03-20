import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S2.2 Programación de red neuronal de una sola capa.htm?raw";


export default function S2_2() {
  const processedContent = processHtmlContent(htmlContentRaw, "s2.2",["image052"]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}
