/* import { useState, useEffect } from "react";
export default function useOptionRender() {
 const [selectGuess, setSelectguess] = useState({});
 useEffect(() => {
  getOptionToShow();
 }, []);
 function getOptionToShow() {
  const randomGuess = options[Math.floor(Math.random() * options.length)];
  localStorage.removeItem('optionToShow');
  setSelectguess(randomGuess);
 }
 return [selectGuess, setSelectguess];
} */