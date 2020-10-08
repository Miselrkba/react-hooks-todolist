import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons({handleSubmit}) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="default"
      className={classes.button}
      onClick={handleSubmit}
      startIcon={<AddCircleOutlineIcon />}
    >
      Add
    </Button>
  );
}
