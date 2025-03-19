import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S3.1 Gradiente descendiente y backpropagation.htm?raw";


export default function S3_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s3.1", ["image061","image060"]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}