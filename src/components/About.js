import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did mount");
  }
  render() {
    console.log(" Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <br></br>
        <h2>This is Namaste React series</h2>
        <br></br>
        <UserClass
          name={"Kartik Kaushik (class)"}
          location={"Dehradun class"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About </h1>
//       <br></br>
//       <h2>This is Namaste React series</h2>
//       <br></br>
//       {/* <User name={"Kartik Kaushik (function)"} /> */}
//       <UserClass name={"kartik kaushik (class)"} location={"Dehradun class"} />
//     </div>
//   );
// };

export default About;
