import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    try {
      const fromStorage = window.localStorage.getItem(key);
      return fromStorage ? JSON.parse(fromStorage) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setAllData = newData => {
    window.localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };
  return [data, setAllData];
}

export default useLocalStorage;
