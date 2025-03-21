import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S5.2 TensorFlow - Keras - PyTorch.htm?raw";


export default function S5_2() {
  const processedContent = processHtmlContent(htmlContentRaw, "s5.2", ["image006"]);

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}