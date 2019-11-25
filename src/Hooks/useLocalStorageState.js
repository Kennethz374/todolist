import {useState, useEffect} from "react";

export default function UseLocalStorageState (key, defaultValue) {
  // make piece of state, based off of value in localstorage (or default)
  const [state, setState] = useState(()=> {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
    }
    catch (err) {
      val = defaultValue;
    }
    return val;
  })
  // useEffect to update localstorage when state changes
  useEffect (()=> {
    window.localStorage.setItem(key, JSON.stringify(state));
  },[state]);

  return [state, setState]
}

