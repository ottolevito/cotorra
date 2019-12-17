import React, { useState } from 'react';
import Person from './components/person'


const App = props => {
const [personsState, setPersonsState] = useState({
  persons: [
    {name:"David Palmolive", age:"18", deporte:"Baloncesto"},
    {name:"Manuel Colgate ", age:"20",  deporte:"Beisbol"},
    {name:"Braulio Listerine ", age:"19",  deporte:"Ajedrez"},
  ],
  otherState: 'some other value'
});

const switchNameHandler = () => {
setPersonsState({
    persons: [
      {name:"Me dicen Deivi", age:"18", deporte:"Baloncesto"},
    {name:"Me apodan Sonrisa ", age:"20",  deporte:"Beisbol"},
    {name:"Me conocen como Buen Aliento ", age:"19",  deporte:"Ajedrez"},
    ]
  })
}

  return (
    <div>
      <button onClick={switchNameHandler}>Check me out</button>
 <h1>Los Deportistas del barrio</h1>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} deporte={personsState.persons[0].deporte}></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}  deporte={personsState.persons[1].deporte}></Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}  deporte={personsState.persons[2].deporte}></Person>
    </div>
  );
}

export default App;
