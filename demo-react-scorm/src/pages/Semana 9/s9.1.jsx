import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S9.1 Data augmentation  en imágenes.htm?raw";


export default function S9_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s9.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}