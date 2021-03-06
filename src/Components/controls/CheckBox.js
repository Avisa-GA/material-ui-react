import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckBox,
} from "@material-ui/core";

export default function CheckBox(props) {
  const { name, value, label, onChange } = props;
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckBox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}
