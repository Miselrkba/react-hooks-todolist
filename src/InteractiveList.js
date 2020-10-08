import React from "react";
import TodoItem from "./TodoItem";

const InteractiveList = ({ items, handleDelete, handleEdit }) => {
  console.log(`items ${items}`);
  return (
    <div>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          >
            {" "}
            
          </TodoItem>
        );
      })}
    </div>
  );
};

export default InteractiveList;
