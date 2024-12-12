import React, { Component } from "react";
import ProfileComponent from "./components/ProfileComponent";
import TimerComponent from "./components/TimerComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        Name: "James Arthur Gosling",
        bio: [
          "Canadian computer scientist, best known as the founder and lead designer behind the Java programming language.",
          "Gosling was elected a member of the National Academy of Engineering in 2004 for the conception and development of the architecture for the Java programming language.",
          "He also contributed to window systems.",
        ],
        imgSrc:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNlnHai_MrsEvVEoEnWxFxPUITz8wVMYQ9WRAgVY71ZuOPKDJsSIFJT2O9bjtmfFMPFSMmdX2XXvLK6lWZYoEUHg",
        profession: "Computer Scientist",
      },
      show: false,
      timeElapsed: 0,
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.show) { 
        this.setState((prevState) => ({
          timeElapsed: prevState.timeElapsed + 1,
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
      timeElapsed: prevState.show ? 0 : prevState.timeElapsed,  
    }));
  }

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {show && (
          <>
            <TimerComponent timeElapsed={timeElapsed} />
            <ProfileComponent person={person} />
          </>
        )}
      </div>
    );
  }
}

export default App;
