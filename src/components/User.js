import { useState } from "react";
const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  useEffect = (() => {}, []);

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h2>Count={count}</h2>
      <h2>Count2={count2}</h2>
      <h2>Name: {props.name}</h2>
      <br />
      <h3>Location: Sonipat</h3>
      <br />
      <h4>kartikgeu@gmail.com</h4>
      <br />
    </div>
  );
};

export default User;
