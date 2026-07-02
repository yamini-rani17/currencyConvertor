/*import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('USD')
      const [to, setTo] = useState('INR')
        const [convertedAmount, setConvertedAmount] = useState(0)
          const [CurrencyInfo, setCurrencyInfo] = useState(from)

         const options =  Object.keys(currencyInfo)

         const swap = () => {
          setFrom(to)
          setTo(from)
          setConvertedAmount(amount)
          setAmount(convertedAmount)
         }

      const convert = () =>{

      setConvertedAmount(amount * currencyInfo[to])
      }

  return (
    <>
    <div 
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{
      backgroundImage: `url('https://pixabay.com/images/download/begench_begenjov-progress-10076681_1920.jpg')`,
    }}
    >

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
              >
                <div className='w-full mb-1'
                  <InputBox
                  lable='from'
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                  />
                </div>
                <div className='relative w-full h-0.5'>
                  <button
                  type='button'
                  className='absolute left-1/2
                  -translate-x-1/2
                  -translate-y-1/2 border-2 bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                  >
                    Swap
                    </button>
                </div>
                <div className='w-full mt-1 mb-4'>
                  <InputBox
                  label='To'
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                  />
        </div>
        <button
        type='submit'
        className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
          convert {from} to {to}

        </button>
      </div>

    </div>
    </>
  )
}*/

import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className='w-full h-screen flex justify-center items-center bg-cover bg-no-repeat '
      style={{
  backgroundImage: `url('https://images.openai.com/static-rsc-4/duKYWfoUnp9TYZpeowmItTaEsebl0wR2LsddeN7AyfzV-NCI0F_kSeb0zo4nYOHBD3n3qvCgUfCAbSVqYhALu-fZLmxBfgSA7x5eWsWLxv8kgD7vZkx7dbpvric1XfqKVBgKw5kfLQnNr-wpMbA80nEfF0rSWoZubI_4wdhKV7i1a8RMNzvMmgxblkXgOJH6?purpose=fullsize')`,
}}
    >
      <div className='w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        
        <form onSubmit={(e) => {
          e.preventDefault();
          convert()
        }}>

          <div className='w-full mb-3'>
            <InputBox
              label='From'
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div className='relative w-full h-0.5 my-3'>
            <button
              type='button'
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border bg-blue-600 text-white px-3 py-1 rounded'
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className='w-full mb-3'>
            <InputBox
              label='To'
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
          >
            Convert {from} to {to}
          </button>

        </form>
      </div>
    </div>
  )
}

export default App


