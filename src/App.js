import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat/Chat';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import { useStateValue } from './Components/ReactContextApi/StateProvider';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {

  // const [user, setUser] = useState(null)
  const [{user},dispatch] = useStateValue()

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login/>
        ): (
        <>
        <Header/>
        <div className="app__body">
          <Sidebar/>
          <Switch>
            <Route path="/room/:roomId">
              <Chat/>
            </Route>
            <Route path="/" exact>
              <h1>Welcom</h1>
            </Route>
          </Switch>
        </div>
        </>
        )}
        </BrowserRouter>
    </div>
  );
}

export default App;
