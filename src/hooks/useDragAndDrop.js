import { useState } from "react";

export const useDragAndDrop = (items, setItems) => {
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (index) => {
    if (dragIndex !== null && dragIndex !== index) {
      const newItems = [...items];
      const [movedItem] = newItems.splice(dragIndex, 1);
      newItems.splice(index, 0, movedItem);
      setItems(newItems);
    }
    setDragIndex(null);
  };

  return {
    handleDragStart,
    handleDragOver,
    handleDrop,
  };
};
