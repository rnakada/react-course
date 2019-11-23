import React, { useState } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [userState, setUserState] = useState({

    user: [
      { id: "abcd", name: "Ryuichi", age: "28" },
      { id: "efgh", name: "Jessica", age: "27" },
      { id: "ijkl", name: "Banjo", age: "20000" }
    ],
    showPerson: false
    // testState: "Hello I am a test!"
  });

  // const [testState, testFunctionState] = useState("I am a test!");

  // console.log(userState, testState);

  const nameChangeHandler = (event, id) => {
    const userIndex = userState.user.findIndex(user => {
      return user.id === id;
    });

    const userr = {
      ...userState.user[userIndex]
    };

    userr.name = event.target.value;

    const users = [...userState.user];
    users[userIndex] = userr;

    setUserState({
      user: users,
      showPerson: true
    });
  }

  // const switchNameHandler = () => {
  //   // console.log(userState.user)
  //   setUserState({
  //     user: [
  //       { name: "Ryu", age: "31" },
  //       { name: "Jessi", age: "39" },
  //       { name: "Kazoo", age: "200" }
  //     ]
  //   });
  // };

  const deletePersonHandler = (userIndex) => {
    // const user = userState.user; <== not proper way of changing state
    // const user = userState.user.slice(); <== 1 way of properly changing state
    const user = [...userState.user]
    console.log("delete");
    user.splice(userIndex, 1);
    setUserState({
      user: user,
      showPerson: true
    })
  }

  const onToggleHandler = () => {
    const doesShow = userState.showPerson;
    setUserState({
      user: [
        { id: "abcd", name: "Ryuichi", age: "28" },
        { id: "efgh", name: "Jessica", age: "27" },
        { id: "ijkl", name: "Banjo", age: "bull" }
      ],
      showPerson: !doesShow
    })
  }

  // const switchBackState = (name, age) => {
  //   setUserState({
  //     user: [
  //       { name: "Ryuichi", age: age },
  //       { name: "Jessica", age: "27" },
  //       { name: name, age: "2" }
  //     ]
  //   });
  // };

  // render() {
  //   const style = {
  //     backgroundColor: "white",
  //     font: "inherit",
  //     border: "1px solid blue",
  //     padding: "8px",
  //     cursor: "pointer"
  //   }
  // };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "white"
    }
  }

  let user = null;

  if (userState.showPerson) {
    user = (
      <div>

        {userState.user.map((user, index) => {
          return <Person
            // key={Math.floor(Math.random() * 100)}
            name={user.name}
            age={user.age}
            clicked={() => deletePersonHandler(index)}
            key={user.id}
            changed={(event) => nameChangeHandler(event, user.id)} />
        })
        }

        {/* <Person
          name={userState.user[0].name}
          age={userState.user[0].age} />
        <Person
          name={userState.user[1].name}
          age={userState.user[1].age}
          clicked={switchBackState.bind(this, "Wowwww", "29")}
        >My hobby: Watching TV</Person>

        <Person
          name={userState.user[2].name}
          age={userState.user[2].age}
          changed={nameChangeHandler} /> */}
      </div>

    )
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "orange",
      color: "white",
      fontWeight: "bold"
    }
    console.log(user)
  }

  const classes = [];

  if (userState.user.length <= 2) {
    classes.push("red"); // className="red"
    console.log("<= 2");
  }

  if (userState.user.length <= 1) {
    classes.push("bold"); // className="bold"
    console.log("<= 1");
  }

  if (userState.user.length < 1) {
    classes.push("large");
    console.log("< 0");
  }

  return (
    <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is realling working! DUH MAX its working :P</p>
        < button
          // onClick={switchNameHandler}
          onClick={onToggleHandler}
          style={style} > Switch Name</button>

        {user}
        {/* {userState.showPerson ?
        <div>
          <Person
            name={userState.user[0].name}
            age={userState.user[0].age} />
          <Person
            name={userState.user[1].name}
            age={userState.user[1].age}
            clicked={switchBackState.bind(this, "Wowwww", "29")}
          >My hobby: Watching TV</Person>

          <Person
            name={userState.user[2].name}
            age={userState.user[2].age}
            changed={nameChangeHandler} />
        </div> : null
      } */}
      </div>
    </StyleRoot>
  );
};

export default Radium(App);