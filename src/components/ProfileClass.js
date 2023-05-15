import React, { useEffect } from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy_name",
        followers: "dummy_location",
        avatar_url: "dummy_url",
      },
    };
    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };
    console.log("child: Constructor " + this.props.name);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
    console.log(" child : componentDddidMount " + this.props.name);
  }

  async componentDidMount() {
    // API Call
    const data = await fetch("https://api.github.com/users/abhishek2021005");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });

    console.log(" child : componentDidMount " + this.props.name);
  }

  componentDidUpdate(prevProps, prevState) {
    // if (
    //   this.state.count != prevState.count ||
    //   this.state.count2 != prevState.count2
    // ) {
    //   //api call
    // }
    //   similar to useEffect(()=>{

    //   },[count, count2])

    // if (this.state.count2 != prevState.count2) {
    //   //api call
    // }
    // if (this.state.count != prevState.count) {
    //   //api call
    // }

    console.log("component did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component got unmounted");
  }

  render() {
    console.log("child: render " + this.props.name);
    return (
      <div>
        <h1>Class Based Profile Component</h1>
        {/* <h2> Name: {this.props.name}</h2>
        <h2> count: {this.state.count}</h2>
        <h2> count2: {this.state.count2}</h2> */}
        <h2> followers: {this.state.userInfo.followers}</h2>
        <h2> name: {this.state.userInfo.name}</h2>
        <img src={this.state.userInfo.avatar_url} />
        {/* <button
          onClick={() => {
            this.setState({
              //   count: 1,
              count2: 3,
            });
          }}
        >
          SetCount
        </button> */}
      </div>
    );
  }
}

export default Profile;
