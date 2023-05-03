import "./App.css";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
// const Welcome = require("..")
import Welcome from "./components/Welcome/Welcome";
import WelcomeFunctional from "./components/WelcomeFunctional/WelcomeFunctional";

const name = "Joan";
const lastName = "Baldó";
const user = {
  name: "Joan",
  lastName: "Baldó",
};
const nameTitle = <h1>The Bridge</h1>;
const whoIAm = <h2>Hola, me llamo {name}</h2>;
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
const usersData = [
  {
    name: "Joan",
    lastName: "Baldó",
  },
  {
    name: "Kat",
    lastName: "Loquesea",
  },
  {
    name: "Vlad",
    lastName: "Loquesea",
  },
];
function App() {
  return (
    <div>
      <Header />
      {/* {whoIAm}
      {nameTitle} */}
      <Welcome userProp={user} />
      {/* <WelcomeFunctional nameProp={name} lastNameProp={lastName}/> */}
      <WelcomeFunctional userProp={user} />
      <ul>{listItems}</ul>
      <Users usersProps={usersData}/>
    </div>
  );
}

export default App;
