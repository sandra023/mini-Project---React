import React from 'react';
import './App.css';
import EmployeeContainer from './EmployeeContainer'

// const My404 = () => {
//   return(
//     <div>
//       'Sorry the page you requested was not found'
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <EmployeeContainer />
      {/* <Header/>
        <Switch>
            <Route exact path='/' component={Register}/>
            <Route exact path='/employees' component={EmployeeContainer}/>
            <Route component = {My404}/>
        </Switch> */}
    </div>
  );
}

export default App;
