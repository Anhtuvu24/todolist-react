import React from 'react';
import ReactDOM, { render } from 'react-dom';
import TodoList from './Component/TodoList'
ReactDOM.render (
        <div className="Container">
            <TodoList />
        </div>,
        document.getElementById('root')
    )
    
/*
//----Rendering----
const element = <h1>Hello!</h1>;
ReactDOM.render (
    element,
    document.getElementById('root')
)
*/
/*
///----Cập nhật lại giao diện
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
*/
/*
  //---Functione component

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
*/
/*
//---Class component
class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}
*/
/*
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Anh" />
        <Welcome name="Tu" />
        <Welcome name="Vu" />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  */
/*
  //----Props
  function Welcome(props) {
    return <h1>Welcome, {props.name}</h1>;
  }

  ReactDOM.render(
    <Welcome name="Anh Tu" />,
    document.getElementById('root'),
  )
*/
/*
class Car extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h2>I am a {this.props.model}!</h2>;
    }
  }
ReactDOM.render(
    <Car model = 'BMW' />,
    document.getElementById('root')
)
*/
/*
class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
}

ReactDOM.render(
    <Car />,
    document.getElementById('root')
)
*/
/*
///---Constructor
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
)*/

/*

//---- getDerivedStateFromProps() 
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(
    <Header favcol = 'yellow'/>,
    document.getElementById('root')
)

*/
/*
//---componentDidMount --------------------------------

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
*/
/*
//---1.	getDerivedStateFromProps()
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Header favcol="yellow" />,
    document.getElementById("root")
  );
*/

/*
//-----shouldComponentUpdate

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
      return true;
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Header favcol="yellow" />,
    document.getElementById("root")
  );
  */
/*
  //--getSnapshotBeforeUpdate
    class Header extends React.Component {
        constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
        }
        componentDidMount() {
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        }, 1000)
        }
        getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update " + prevState.favoritecolor;
        }
        componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
        }
        render() {
        return (
            <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
            </div>
        );
        }
    }
    
    ReactDOM.render(
        <Header favcol="yellow" />,
        document.getElementById("root")
    );*/
/*
  //--componentDidUpdate

  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Header favcol="yellow" />,
    document.getElementById("root")
);*/
/*
//---componentWillUnmount--------------------------------

class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      this.setState({show: false});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <Child />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }
  
  class Child extends React.Component {
    componentWillUnmount() {
      alert("Delete");
    }
    render() {
      return (
        <h1>Hello World!</h1>
      );
    }
  }
  
  ReactDOM.render(
    <Container />,
    document.getElementById("root")    
);
*/
 /*
//--render có điều kiện
class Chao extends React.Component {
    render() {
        if(this.props.check === true) {
            return (
                <h1>Hello</h1>
            )
        }
        else {
            return (
                <h1>Hi</h1>
            )
        }
    }
}

ReactDOM.render(
    <Chao check = {true}/>,
    document.getElementById("root")
)
*/

//--Lists and keys
/*
function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <Car brand={car} />)}
        </ul>
      </>
    );
  }
  
  ReactDOM.render(
    <Garage/>,
    document.getElementById("root")
)

  function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() {
    const cars = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
      </>
    );
  }
  
  ReactDOM.render(
    <Garage/>,
    document.getElementById("root")
)*/
/*
//---State up

class Check extends React.Component {
  render() {
    if(this.props.temperature >= 100) {
      return <h2>Would boil</h2>
    }
    else {
      return <h2>Would not boil</h2>
    }
  }
}

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
    }
  }

  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <input value={temperature} onChange={this.handleChange} />
        <Check temperature = {parseFloat(temperature)} />
      </div>
    )
  }
}

ReactDOM.render(
  <Temperature />,
  document.getElementById('root')
)*/

// function Child(props) {
//   return (
//     <div>
//       {props.children}
//     </div>
//   )
// }

// function Dialog(props) {
//   return (
//     <Child>
//       <h1>{props.title}</h1>
//       <p>{props.message}</p>
//     </Child>
//   )
// }

// function Box() {
//   return(
//     <Dialog
//       title = "Hi"
//       message = "Say Hi!"
//     />
//   );
// }

// ReactDOM.render (
//   <Box />,
//   document.getElementById("root")
// )


