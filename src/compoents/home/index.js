import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Box} from '@mui/material';
import './style.css'
import CustomBox from "./customBox";
import onDragEnd from "./onDragEnd";
import columnsFromBackend from "./data";

export default function Home() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <Box margin='2rem'  marginTop='4%'>
        <p className="project-heading">Projects</p>
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
        <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
            {Object.entries(columns).map(([columnId, column], index) => {
                return (
                    <CustomBox column={column} columnId={columnId} index={index}/>
                );
            })}
        </DragDropContext>
        </div>
    </Box>
  );
};
 