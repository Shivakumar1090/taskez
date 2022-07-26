import { Draggable, Droppable } from "react-beautiful-dnd";
import { Avatar } from "@mui/material";

const Card = ({column,columnId}) => {
    return ( 
        <div>
        <Droppable droppableId={columnId} key={columnId}>
            {(provided, snapshot) => {
                return (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                        background: snapshot.isDraggingOver ? "#ECF3F3" : "#F5F9F9",
                        padding: 10,
                        width: 300,
                        minHeight: 500,
                    }}
                >
                    {column.items.map((item, index) => {
                        return (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                    userSelect: "none",
                                                    padding: 16,
                                                    borderRadius: "7px",
                                                    border: "1px solid #ECF3F3",
                                                    margin: "0 0 10px 0",
                                                    baxShadow: "0px 0px 28px rgba(72, 174, 174, 0.07)",
                                                    minHeight: "50px",
                                                    backgroundColor: snapshot.isDragging
                                                        ? "#fff"
                                                        : "#fff",
                                                    ...provided.draggableProps.style,
                                                }}
                                            >
                                                <p className="cardtext1">{item.task}</p>
                                                <p className="cardtext2">{item.content}</p>

                                                <Avatar size='1px'>S</Avatar>
                                        </div>
                                    );
                                }}
                                </Draggable>
                            )})
                        }
                    {provided.placeholder}
                </div>
                );
            }}
            </Droppable>
        </div>
     );
}
 
export default Card;