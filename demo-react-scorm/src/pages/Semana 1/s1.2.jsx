import React from "react";
import { processHtmlContent } from "../../utils/processHtmlContent";

import htmlContentRaw from "./S1.2 Notebooks & Google Collab & GitHub.htm?raw";


export default function S1_2() {
  const processedContent = processHtmlContent(htmlContentRaw, "s1.2");

  return (
    <div className="prose mx-auto p-4 break-words" {...processedContent} />
  );
}
