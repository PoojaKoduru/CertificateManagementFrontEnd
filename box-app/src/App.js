import Backdrop from "./components/Backdrop";
import Box from "./components/Box";
import Modal from "./components/Modal";
function App() {
  return (
    <div>
      <h1>Box React Application</h1>
      <Box number ='1'/>
      <Box number ='2'/>
      <Box number ='3'/>
      <Box number ='4'/>
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
