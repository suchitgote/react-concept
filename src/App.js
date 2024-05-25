
import { useState } from 'react';
import './App.css';
import UseRef from './Components/UseRef';
import UseMemoDemo from './Components/Usememodemo';
import UseCallBack from './Components/UseCallBack';
import HigherOrderCmp from './Components/HigherOrderCmp';
import UseContext from './Components/UseContext';
import UseReducerHook from './Components/UseReducer';
import Redux from './Components/Redux';
import ReduxToolkit from './Components/ReduxToolkit';
import ReduxThunk from './Components/ReduxThunk';
import CustomHook from './Components/CustomHook';
import Routing from './Components/Routing';

function App() {
  return (
    <div className="App">
      {/* <UseMemoDemo /> */}
      {/* <UseCallBack/> */}
      {/* <UseRef /> */}
      {/* <HigherOrderCmp /> */}
      {/* <UseContext /> */}
      {/* <UseReducerHook /> */}
      {/* <Redux /> */}
      {/* <ReduxToolkit /> */}
      {/* <ReduxThunk /> */}
      {/* <CustomHook /> */}
      <Routing />
    </div>
  );
}

export default App;
