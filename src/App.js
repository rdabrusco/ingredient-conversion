import './App.css';
import {useState} from 'react'
import {Input} from './components/Input'
import Select from './components/Select'

function App() {
  const [converted, setConverted] = useState('')
  const [amount, setAmount] = useState('')

  function parseValueAndUnit(str) {
    const parts = str.trim().split(' ');
    if (parts.length < 2) {
      alert('Iinput a value and a unit type')
      return null;
    }
    if(!/\d/.test(parts[0])){
      alert('Input a value and a unit type')
      return null;
    };
    const unit = parts.pop();
    console.log(parts)
    let value = 0;
    if (parts.length === 1) {
      console.log('length of 1 is running')
      if(parts[0].includes('/')){
        console.log('/ included is running')
      value = parseFloat(parts[0].split('/').reduce((a,c)=> a/c).toFixed(3))  
      }else{
        console.log('/ not included is running')

        value = parseFloat(parts[0])
      };
    } else if (parts.length === 2) {
        const [intPart, fracPart] = parts
        console.log(`int: ${intPart}, frac: ${fracPart}`)
        if (fracPart) {
            const [numerator, denominator] = fracPart.split('/');
            console.log(`numerator: ${numerator}, denom: ${denominator}`)
            value = parseFloat(intPart) + parseFloat(numerator) / parseFloat(denominator);
            console.log(value)
          	value = parseFloat(value.toFixed(3))
            console.log(value)
        } else {
            value = parseFloat(intPart);
        }
    } else {
      return alert('Input amount and unit type');
    }
    if (isNaN(value)) {
        throw new Error(`Invalid input string: "${str}"`);
    }
    return {
        value,
        unit
    };
}
  
  function handleClick(){
    const solution = document.querySelector('#solution')
    const amount = document.querySelector('#amount').value
    if(parseValueAndUnit(amount)){
      const {value, unit} = parseValueAndUnit(amount)
      console.log('you are here', value, unit)
      
      solution.innerText = `Solution: ${value} ${unit}`
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event)
    console.log('form submitted ✅')
  }


  return (
    <>
      <div className="h-full">
        <form onSubmit={handleSubmit} className="flex items-center justify-around content-center h-1/3">
          <div>
            <Input  name='amount'
              type='text'
              />
            {/* <Input name='unit'
              type='text'
              /> */}
          </div>
          <div className="w-1/3">
            <h2 className="text-xl">To:</h2>
            <Select className='text-xl' name='newUnit'
            options={[
              'g',
              'mg',
              'kg',
              'oz',
              'lb',
              ]}
            />
          </div>
          <input type='submit' onClick={handleClick} value="Submit" className="btn"></input>
        </form>
        
      </div>
      <h1 className='text-center text-3xl' id='solution'>Solution:</h1>
    </>
    
    
  );
}

export default App;
