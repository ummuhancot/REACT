import { Component } from "react";
import { Button, Container } from "react-bootstrap";

class ClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "Hello from Class Component!",
    };
  }

  componentDidMount() {
    console.log("MOUNTING: Burasi sadece ilk render'da calisir.");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("UPDATING: Counter degisti, yeni deger:", this.state.counter);
    }
    console.log("UPDATING: Burasi sadece her re-render'da calisir.");
  }

  componentWillUnmount() {
    console.log("UNMOUNTING: Burasi component kaldirildiginda calisir.");
  }

  render() {
    return (
      <Container className="mt-4">
        <h1>Class Component</h1>
        <p>
          {this.state.message} Counter: {this.state.counter}
        </p>
        <Button
          variant="outline-dark"
          onClick={() =>
            this.setState((prev) => ({ counter: prev.counter + 1 }))
          }
        >
          Set Counter
        </Button>
        <Button
          variant="outline-dark"
          onClick={() =>
            this.setState((prev) => ({
              message: `New message: ${Math.random()}`,
            }))
          }
        >
          Set Message
        </Button>
      </Container>
    );
  }
}

export default ClassComp;
