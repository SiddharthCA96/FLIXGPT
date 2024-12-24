import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body'
import appStore from './utils/appStore';
function App() {
  // console.log("INSIDE app");   
  return ( 
    //wrapping the body inside provider
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
};
export default App;
