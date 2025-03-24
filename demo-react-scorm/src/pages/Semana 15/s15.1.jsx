import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S15.1 ML Cycle y MLOps.htm?raw";


export default function S15_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s15.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}