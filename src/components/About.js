import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile"; //nothing just renamed profile to profilefunctionalcomponent

// import Profile from "./Profile";
const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is chapter 7 finding the path</p>
      {/* <Outlet name={"Abhishek"} /> */}

      <Profile name={"AbhishekClass"} />
      <ProfileFunctionalComponent name={"Abhishek"} xyz={"XYZ"} />
    </div>
  );
};

export default About;
