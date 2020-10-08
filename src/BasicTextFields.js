import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields({ item, handleSubmit, handleChange }) {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="standard-basic"
        label="Add a task to do"
        onChange={handleChange}
        value={item}
      />
    </form>
  );
}
