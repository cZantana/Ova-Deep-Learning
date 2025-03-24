import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S14.1 Redes Generativas Adversarias (GANs_DCGAN).htm?raw";


export default function S14_1() {
  const processedContent = processHtmlContent(htmlContentRaw, "s14.1");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}