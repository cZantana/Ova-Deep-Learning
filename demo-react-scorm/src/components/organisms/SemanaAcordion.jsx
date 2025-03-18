import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TemaItem from "../molecules/TemaItem";

const SemanaAccordion = ({ weekNumber, items }) => {
  return (
    <Accordion
      // Personaliza estilos usando sx (puedes combinar con tus variables de Tailwind)
      sx={{
        backgroundColor: "var(--color-neutral-300)",
        borderBottom: "1px solid var(--color-neutral-400)",
        boxShadow: "none",
        marginBottom: "0rem",
        "&.Mui-expanded": {
          margin: "auto",
        },
        "&::before": {
          display: "none", // Elimina la línea que MUI pone antes del accordion
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls={`panel${weekNumber}-content`}
        id={`panel${weekNumber}-header`}
        sx={{    
          // Aumentar padding horizontal y vertical en el summary
          px: 3, // Equivale a 24px de padding horizontal
          // py: 2, // Equivale a 16px de padding vertical
      
          "& .MuiAccordionSummary-expandIconWrapper": {
            // Agregar margen a la derecha del ícono
            marginRight: "5px",
          },
        }}
      >
        <Typography
          variant="h6"
        >
          <div className="text-1xl font-sans font-semibold text-[var(--color-blue-600)] ml-3">
          Semana {weekNumber}
          </div>
        </Typography>
      </AccordionSummary>

      <AccordionDetails className="w-11/12 mx-auto divide-y divide-[var(--color-neutral-400)]">
        {items.map((item, index) => (
          <TemaItem key={index} {...item} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default SemanaAccordion;
