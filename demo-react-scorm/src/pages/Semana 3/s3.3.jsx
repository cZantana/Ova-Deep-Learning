import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S3.3 Multicapa con backpropagation.htm?raw";


export default function S3_3() {
  const processedContent = processHtmlContent(htmlContentRaw, "s3.3",[""]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}