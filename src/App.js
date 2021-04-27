import React from 'react';
import './App.css';
import styled from 'styled-components'
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="app">
      <Router>
      <>       
      <Header/> 
        <Switch>          
          <Route path="/" exact> 
            <Appbody>
              <Sidebar/>
              <Switch>
                <Route path="/" exact>
                  {/* chat */}
                </Route>
              </Switch>
            </Appbody>
          </Route>
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;

const Appbody = styled.div`
  display: flex;
  height: 100vh;
`

