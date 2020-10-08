import { Typography } from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const TodoItem = ({ title, handleDelete, handleEdit }) => {
  return (
    <>
      <Typography variant="h6">
        {title}
        <DeleteIcon onClick={handleDelete} />
        <EditIcon onClick={handleEdit} />
      </Typography>
    </>
  );
};

export default TodoItem;
