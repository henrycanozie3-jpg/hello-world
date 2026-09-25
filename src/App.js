import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
   <Greet name="Bruce" heroname="Batman">This is children props</Greet>
    <Greet name="Tony Stark" heroname="Iron Man"/>
     <Greet name="Peter Parker" heroname="Spider-Man"/>
    <Welcome  name="Bruce" heroname="Batman" />
    <Welcome  name="Tony Stark" heroname="Iron Man" />
    <Welcome  name="Peter Parker" heroname="Spider-Man" />
    {/*<Hello />*/}
    </div>
  );
}

export default App;
