import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S3.2 Funcion de perdida.htm?raw";


export default function S3_2() {
  const processedContent = processHtmlContent(htmlContentRaw, "s3.2",["image014"]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}