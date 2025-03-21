import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S3.4 Bias y Variance.htm?raw";


export default function S3_4() {
  const processedContent = processHtmlContent(htmlContentRaw, "s3.4");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}