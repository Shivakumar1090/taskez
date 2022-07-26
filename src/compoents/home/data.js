import { v4 as uuid } from 'uuid';

const itemsFromBackend = [
    { id: uuid(), task: "Design -app" ,content: "modifying the design app and make deisgn ui properly" },
    { id: uuid(), task: "Connect backend", content: "connect backend and make it work properly" },
    { id: uuid(), task: "Implement FileStructure",content: "Change file structure and implement it in order" },
    { id: uuid(), task: "complete routes",content: "create routes and try to work on it." },
    { id: uuid(), task: "complete project",content: "create a project and work on it." }
  ];
  
const columnsFromBackend = {
    [uuid()]: {
        name: "To do",
        items: itemsFromBackend
    },
    [uuid()]: {
        name: "In Progress",
        items: []
    },
    [uuid()]: {
        name: "Done",
        items: []
    }
};

export default columnsFromBackend;