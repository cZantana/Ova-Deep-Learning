import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S15.2 Herramientas de Monitoreo y Logging.htm?raw";


export default function S15_2() {
  const processedContent = processHtmlContent(htmlContentRaw, "s15.2", ["image002"]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}