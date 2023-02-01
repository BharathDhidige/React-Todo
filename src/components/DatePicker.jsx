import { useState } from "react";

export default () => {
    const [taskDate, setTaskDate] = useState ('');
  return (
    <input
      className="form-control w-25"
      type="date"
      value={taskDate}
      onChange={(e)=>{
        setTaskDate(e.target.value);
      }}
      placeholder="Enter Your Task"
      
    />
  );
};
