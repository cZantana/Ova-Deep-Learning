import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S15.3 Model Serving.htm?raw";


export default function S15_3() {
  const processedContent = processHtmlContent(htmlContentRaw, "s15.3");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}