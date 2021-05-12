import './App.css';
import Headerr from './Header';
import Footer from './Footer';
import MainBody from './Mainbody';
import AddButton from './AddButton';
// import ClassComp from './classComp';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import FormBody from './FormBody';
import Hocchild from './hocchild'
import HookComponent from './Components/HookComponent'
import FunctionHooks from './Components/FunctionHooks'
import HooksArray from './Components/HooksArray'


function App() {

  let seedtodo = [
    {
      title: "Finance",
      msg: "Clear credit card balance"
    },
    {
      title: "Groceries",
      msg: "Order papaya for vitamin D."
    },
    {
      title: "Health",
      msg: "Order BP machine."
    }
  ]
  return (

    <div className="App">

      <HooksArray />

      {/* <FunctionHooks/> */}
      {/* <HookComponent/> */}

      {/* <Headerr />
      <AddButton />
      <FormBody />  
      <MainBody seedtodo={seedtodo} />
      <Footer /> */}
    </div>

  );
}

export default App;
