import React, { Component } from "react";
import ProfileComponent from "./components/ProfileComponent";
import TimerComponent from "./components/TimerComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // Initializing state with default person details, show toggle, and elapsed time
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
// Sets up a timer that updates the timeElapsed state every second if the profile is shown

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.show) { 
        this.setState((prevState) => ({
          timeElapsed: prevState.timeElapsed + 1,
        }));
      }
    }, 1000);
  }

    // Clears the timer

  componentWillUnmount() {

    clearInterval(this.timer);
  }
    // Toggles the show state and resets timeElapsed if hiding the profile

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

        {/* Button toggles the visibility of the profile */}

        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Conditionally render TimerComponent and ProfileComponent if show is true */}
        {show && (
          <>
            <TimerComponent timeElapsed={timeElapsed} /> {/* Displays elapsed time */}
            <ProfileComponent person={person} /> {/* Displays person details */}
          </>
        )}
      </div>
    );
  }
}

export default App;
