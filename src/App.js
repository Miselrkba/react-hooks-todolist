import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import BasicTextFields from "./BasicTextFields";
import IconLabelButtons from "./AddButton";
import InteractiveList from "./InteractiveList";
import ClearIcon from "@material-ui/icons/Clear";
import uuid from "react-uuid";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [id, setId] = useState(uuid());
  const [editItem, setEditItem] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: id,
      title: item,
    };
    const updatedItems = items.concat(newItem);
    setItems(updatedItems);
    setItem("");
    setId(uuid());
    setEditItem(false);
    console.log(`updatedItems ${updatedItems}`);
    console.log(`items ${items}`);
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const handleEdit = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    const selectedItem = items.find((item) => item.id === id);
    setItems(filteredItems);
    setItem(selectedItem.title);
    setId(id);
    setEditItem(true);
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <div className="App">
      <Typography variant="h2">To Do list</Typography>
      <div className="inputfield">
        <BasicTextFields
          item={item}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <IconLabelButtons handleSubmit={handleSubmit} />
        <ClearIcon onClick={clearList} />
      </div>
      <InteractiveList
        items={items}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      ></InteractiveList>
    </div>
  );
}

export default App;
