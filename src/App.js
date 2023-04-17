import './App.css';
import {Input} from './components/Input'
import Select from './components/Select'

function App() {
  function handleClick(){
    console.log(document.getElementById('amount').value)
  }
  return (
    <>
      <div className="App flex-auto">
        <div>
          <Input  name='amount'
            type='text'
            />
          <Input name='unit'
            type='text'
            />
        </div>
        <h2>To:</h2>
        <Select name='newUnit'
        options={[
          'g',
          'mg',
          'kg',
          'oz',
          'lb',
          ]}
        />
      </div>
      <button  onClick={handleClick} value="Submit" className="btn" />
    </>
      
    
  );
}

export default App;
