import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S2.3 Programación de red neuronal multicapa simple_.htm?raw";


export default function S2_3() {
  const processedContent = processHtmlContent(htmlContentRaw, "s2.3",["image007","image006","image008"]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}
