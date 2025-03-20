// SideAccordion.jsx
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SideItem from "../atoms/SideItem";

const SideAccordion = ({ title, items, expanded, onChange, onAccordionClick,  onItemClick }) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange} // Maneja la apertura/cierre controlada
      sx={{
        backgroundColor: "var(--color-neutral-300)",
        borderBottom: "1px solid var(--color-neutral-400)",
        boxShadow: "none",
        marginBottom: "0rem",
        "&.Mui-expanded": {
          margin: "auto",
        },
        "&::before": {
          display: "none",
        },  
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        onClick={onAccordionClick} // Al hacer clic en el header se desplaza el contenido
        sx={{
          px: 3,
          "& .MuiAccordionSummary-expandIconWrapper": {
            marginRight: "5px",
          },
        }}
      >
        <Typography >
          <div
            className={`text-[18px] font-sans font-semibold ml-3 ${
              expanded
                ? "text-[var(--color-pink-600)]"
                : "text-[var(--color-blue-600)]"
            }`}
          >
            {title}
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="w-11/12 mx-auto divide-y divide-[var(--color-neutral-400)]">
        {items.map((item, index) => (
          <SideItem key={index} {...item} onClick={
            item.position
              ? () => onItemClick(item.position)
              : undefined
          }/>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default SideAccordion;
