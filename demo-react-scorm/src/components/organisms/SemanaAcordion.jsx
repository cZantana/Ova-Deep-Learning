// src/components/SemanaAcordion.jsx
import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TemaItem from '../molecules/TemaItem';

const SemanaAcordion = ({ activityKey, activityDefinition, evaluation }) => {
  // activityKey es por ejemplo "S2.5.1"
  // activityDefinition tiene { Actividad, criterios: [...] }
  // evaluation tiene { criterios: [...], comentarios: [...], final: "nota final" }
  
  // Si no hay evaluación, se puede mostrar "Pendiente"
  const finalGrade = evaluation && evaluation.final ? evaluation.final : "Pendiente";
  
  // Para combinar criterios, se puede recorrer el array de activityDefinition.criterios y emparejarlo
  // con los datos en evaluation.criterios y evaluation.comentarios (por posición)
  const criterios = activityDefinition?.criterios || [];
  const evalCriterios = evaluation?.criterios || [];
  const evalComentarios = evaluation?.comentarios || [];
  
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="subtitle1">
            {activityKey} - {activityDefinition?.Actividad}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Nota Final: {finalGrade}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {/* Sección: Calificaciones por criterio */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">Calificaciones por criterio</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {criterios.map((crit, index) => (
              <TemaItem
                key={index}
                label={crit}
                value={evalCriterios[index] || "N/A"}
              />
            ))}
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ my: 1 }} />
        {/* Sección: Retroalimentación */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2">Retroalimentación</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {criterios.map((crit, index) => (
              <Box key={index} sx={{ my: 0.5 }}>
                <Typography variant="body2" fontWeight="bold">{crit}</Typography>
                <Typography variant="body2">
                  {evalComentarios[index] || "Sin retroalimentación"}
                </Typography>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      </AccordionDetails>
    </Accordion>
  );
};

export default SemanaAcordion;
