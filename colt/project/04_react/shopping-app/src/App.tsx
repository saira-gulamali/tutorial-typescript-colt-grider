import React, { useState } from "react";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingListForm from "./components/ShoppingListForm";
import Item from "./models/item";
import { v4 as getId } from "uuid";

const num: number = 123;
console.log("hello from typescript", num);

const func = <T,>(x: T): T => {
  return x;
};
console.log(func(3));

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    console.log("made it to app component");
    console.log(product);
    setItems([...items, { id: getId(), product, quantity }]);
  };
  return (
    <>
      <h1>Hello world!!!</h1>
      <Greeter person="Colt" />
      <Greeter person="Blue" />
      <Greeter person="Elton" />
      <hr></hr>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </>
  );
}

export default App;
