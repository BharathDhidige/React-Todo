import { useState } from "react";

export default () => {
    const [taskMessage, setTaskMessage] = useState ('');
  return (
    <input
      className="form-control w-50"
      type="text"
      value={taskMessage}
      onChange={(e)=>{
        setTaskMessage(e.target.value);
      }}
      placeholder="Enter Your Task"
      
    />
  );
};
