import React from "react";
import { useState, useEffect } from "react";
import Form from "./form";
import Modal from "./Modal";
import "./App.css";
import EventNoteIcon from "@material-ui/icons/EventNote";
const App = () => {
  const [names, setNames] = useState("");
  const [list, setList] = useState(getItemsLocalStorage());
  const [isEmpty, setIsEmpty] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isItemRemoved, setIsItemRemoved] = useState(false);
  const [isClearAllItems, setIsClearAllItems] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isEmpty) {
        setIsEmpty(false);
      }
    }, 500);
  }, [isEmpty]);

  useEffect(() => {
    setTimeout(() => {
      if (isItemAdded) {
        setIsItemAdded(false);
      }
    }, 500);
  }, [isItemAdded]);

  useEffect(() => {
    setTimeout(() => {
      if (isItemRemoved) {
        setIsItemRemoved(false);
      }
    }, 500);
  }, [isItemRemoved]);
  useEffect(() => {
    setTimeout(() => {
      if (isClearAllItems) {
        setIsClearAllItems(false);
      }
    }, 500);
  }, [isClearAllItems]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (names) {
      setList([{ name: names, id: new Date().getTime().toString() }, ...list]);
      setIsItemAdded(true);
    } else {
      setIsEmpty(true);
    }
    setNames("");
  };
  const addItems = (e) => {
    setNames(e.target.value);
  };
  const removeItems = (id) => {
    setList(list.filter((item) => item.id !== id));
    setIsItemRemoved(true);
  };
  function getItemsLocalStorage() {
    let list = localStorage.getItem("list");
    if (list) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  }
  const clearAllItems = () => {
    setIsClearAllItems(true);
    setList([]);
  };

  return (
    <>
      <div className="header">
        <EventNoteIcon className="noteIcon" />
        <h1 className="heading">To Do List</h1>
      </div>
      <Modal
        isEmpty={isEmpty}
        isItemAdded={isItemAdded}
        isItemRemoved={isItemRemoved}
        isClearAllItems={isClearAllItems}
      />
      <Form
        handleSubmit={handleSubmit}
        addItems={addItems}
        names={names}
        list={list}
        removeItems={removeItems}
        clearAllItems={clearAllItems}
      />
    </>
  );
};

export default App;
