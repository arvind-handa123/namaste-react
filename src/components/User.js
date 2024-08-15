import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name : {props.name}</h2>
      <h3>Location : Surat</h3>
      <h3>Contact : 8758148763</h3>
    </div>
  );
};

export default User;
