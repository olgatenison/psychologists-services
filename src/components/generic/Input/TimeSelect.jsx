import React, { useState, useRef, useEffect } from "react";
import {
  SelectField,
  Dropdown,
  DropdownButton,
  Options,
  OptionItem,
  Subtitle,
} from "./TimeSelect.styles.js";
import clock from "./../../../img/svg/clock.svg";

const TimeSelect = ({ name, value, onChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTime, setSelectedTime] = useState(value);
  const dropdownRef = useRef(null);

  const timeOptions = [];
  for (let hour = 9; hour < 19; hour++) {
    timeOptions.push(`${hour.toString().padStart(2, "0")}:00`);
    timeOptions.push(`${hour.toString().padStart(2, "0")}:30`);
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setShowDropdown(false);
    onChange({ target: { name, value: time } });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SelectField>
      <Dropdown ref={dropdownRef}>
        <DropdownButton onClick={() => setShowDropdown(!showDropdown)}>
          {selectedTime || (
            <>
              {" "}
              {" 00:00"}
              <img src={clock} alt="clock icon" />
            </>
          )}
        </DropdownButton>
        {showDropdown && (
          <Options>
            <Subtitle>Meeting time</Subtitle>
            {timeOptions.map((time, index) => (
              <OptionItem key={index} onClick={() => handleTimeSelect(time)}>
                {time}
              </OptionItem>
            ))}
          </Options>
        )}
      </Dropdown>
    </SelectField>
  );
};

export default TimeSelect;

// import React from "react";
// import { SelectField } from "./Input.styles.js";

// const TimeSelect = ({ name, value, onChange, onBlur }) => {
//   const timeOptions = ["09:00", "09:30", "10:00", "10:30"];

//   return (
//     <SelectField>
//       <select name={name} value={value} onChange={onChange} onBlur={onBlur}>
//         {timeOptions.map((time, index) => (
//           <option key={index} value={time}>
//             {time}
//           </option>
//         ))}
//       </select>
//     </SelectField>
//   );
// };

// export default TimeSelect;
