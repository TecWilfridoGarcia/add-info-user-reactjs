
import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [checked, setChecked] = useState({});
  const reset = () => {
    setValues(initialState);
  };
  const handleChecked = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: !event.target.checked
    });
    console.log("checkedItems: ", checked);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, handleChecked, reset];
};