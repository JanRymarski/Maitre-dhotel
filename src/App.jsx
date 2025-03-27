import Card from './components/Card.jsx'
import DragDrop from './components/DragDrop.jsx';

function App() {
  return(
    <>
      <Card number={1} />
      <Card number={2} />
      <Card number={3} />
      <Card number={4} />
      <DragDrop />
    </>
    
  );
}
export default App
