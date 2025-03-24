import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S13.2 Red Denoising.htm?raw";


export default function S13_2() {
  const processedContent = processHtmlContent(htmlContentRaw, "s13.2");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}