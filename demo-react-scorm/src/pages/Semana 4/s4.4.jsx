import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S4.4 Overfitting y Regularización.htm?raw";


export default function S4_4() {
  const processedContent = processHtmlContent(htmlContentRaw, "s4.4",["image005","image016"]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}