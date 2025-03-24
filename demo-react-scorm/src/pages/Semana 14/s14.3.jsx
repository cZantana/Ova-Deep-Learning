import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S14.3 Latent Diffusion Models.htm?raw";


export default function S14_3() {
  const processedContent = processHtmlContent(htmlContentRaw, "s14.3");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );

}