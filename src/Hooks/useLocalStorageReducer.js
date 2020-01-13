import {useReducer, useEffect} from "react";

export default function UseLocalStorageReducer (key, defaultValue, reducer) {
  const [state, dispatch] = useReducer(reducer,defaultValue, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
    }
    catch (err) {
      val = defaultValue;
    }
    return val;
  })
  useEffect(()=>{
    window.localStorage.setItem(key, JSON.stringify(state));
  },[state]);

  return [state, dispatch]
}
