import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, SetCount] = useState(1);
  //   const [count2, SetCount2] = useState(2);
  useEffect(() => {
    //API Call
    console.log("useEffect");
    return () => {
      console.log("useEffect return");
    };
  }, []);
  console.log("renderrr");

  return (
    <div>
      <h1>Profile Component</h1>
      <h3>Name:{props.name}</h3>
      <h3>Name:{props.xyz}</h3>
      <h3>count:{count}</h3>
      {/* <h3>count2:{count2}</h3> */}
      <button
        onClick={() => {
          SetCount(2);
          //   SetCount2(3);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Profile;
