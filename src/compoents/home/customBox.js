import { Box, Button } from "@mui/material";
import "./style.css";
import Card from "./card";

const CustomBox = ({ column, columnId, index }) => {
  return (
    <div className="box" key={columnId}>
      <Box display="flex" justifyContent="space-between">
        <p color="#212121" fontSize="14px" fontWeight="600">
          {column.name}
        </p>
        <p color="#329C89" fontSize="14px">
          2
        </p>
      </Box>
      <Button
        style={{
          color: "#329C89",
          backgroundColor: "#ECF3F3",
          borderRadius: "7px",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        add
      </Button>
      <div>
        <Card column={column} columnId={columnId}/>
      </div>
    </div>
  );
};

export default CustomBox;
