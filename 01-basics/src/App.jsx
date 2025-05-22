import HelloReact from './components/01-hello/HelloReact.jsx';
import HelloWorld from './components/01-hello/HelloWord.jsx';
import { Jsx01 } from './components/02-jsx/jsx01.jsx';
import { Jsx02 } from './components/02-jsx/Jsx02.jsx';
import { Jsx03 } from './components/02-jsx/Jsx03.jsx';
import { Jsx05 } from './components/02-jsx/Jsx05.jsx';
import { Jsx06 } from './components/02-jsx/Jsx06.jsx';
import { Jsx07 } from './components/02-jsx/Jsx07.jsx';
import { Styling01 } from './components/03-styling/styling01.jsx';
import { Styling02 } from './components/03-styling/Styling02.jsx';
import { Styling03 } from './components/03-styling/Styling03.jsx';
import { Styling04 } from './components/03-styling/Styling04.jsx';
import { Styling05 } from './components/03-styling/Styling05.jsx';
import { Clock1 } from './components/04-clock1/Clock1.jsx';
import { Greetings } from './components/05-props/Greetings.jsx';
import { ProductCard } from './components/05-props/ProductCard.jsx';
import { Products } from './components/05-props/Products.jsx';
import { Clock2 } from './components/06-clock2/Clock2.jsx';
const App = () => {
  return (
    <div>
      {/* Hello App!
      <HelloWorld></HelloWorld>
      <HelloReact></HelloReact>
      <Jsx01></Jsx01>
      <Jsx02></Jsx02>
      <Jsx03></Jsx03>
      <Jsx04></Jsx04>
      <Jsx05></Jsx05>
      <Jsx06></Jsx06>
      <Jsx07></Jsx07>

      <Styling01></Styling01>
      <Styling02></Styling02>
      <Styling03></Styling03> 
      <Styling04></Styling04>
      <Styling05></Styling05> 
      <Clock1></Clock1>

      <Greetings></Greetings>
      <Products></Products>
      <ProductCard></ProductCard>*/}

      <Clock1 />
      <Clock2 textColor="lime" backgroundColor="black"  />
      <Clock2 textColor="red" backgroundColor="black" />
      <Clock2 textColor="steelblue" backgroundColor="aliceblue" />
    </div>
  );
}
export default App;