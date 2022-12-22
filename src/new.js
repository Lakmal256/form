import React, { useState } from "react";
import "./style.css";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";

const App = () => {
  const [formValues, setFormValues] = useState([{ question: "" }]);

  const addFormFields = () => {
    setFormValues([...formValues, { question: "" }]);
  };

  const removeFormFields = (i) => {
    const newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  return (
    <div>
      {formValues.map((index) => (
        <div className="form-inline" key={index}>
          <label>Question</label>
          <input className="input" type="text" name="name" />
          {index ? (
            <ListItemIcon
              className="button_remove"
              onClick={() => removeFormFields(index)}
            >
              <LogoutIcon />
            </ListItemIcon>
          ) : null}
        </div>
      ))}
      <div className="button-section">
        <button
          className="button add"
          type="button"
          onClick={() => addFormFields()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
