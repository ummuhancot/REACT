import HelloReact from './components/01-hello/HelloReact.jsx';
import HelloWorld from './components/01-hello/HelloWord.jsx';
import { Jsx01 } from './components/02-jsx/jsx01.jsx';
import { Jsx02 } from './components/02-jsx/Jsx02.jsx';
import { Jsx03 } from './components/02-jsx/Jsx03.jsx';
const App = () => {
  return(
    <div>
      Hello App!
    <HelloWorld></HelloWorld>
    <HelloReact></HelloReact>
    <Jsx01></Jsx01>
    <Jsx02></Jsx02>
    <Jsx03></Jsx03>
    
    </div>

  );
}
export default App;