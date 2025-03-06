import { useState } from 'react'
import ColorButton from './components/ColorButton';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("Olive");

  const handleColorButtonClicked = (color) => { setColor(color) }

  return (
    <>
      <div
        className="w-screen h-screen duration-200"
        style={{backgroundColor: color}}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-500 px-3 py-2 rounded-3xl'>
              <ColorButton buttonColor="red" onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="green" onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="blue" onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="olive" onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="grey" onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="yellow" textClass='text-black' onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="pink" textClass='text-black' onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="purple" onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="lavender" textClass='text-black' onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="black" onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="white" textClass='text-black' onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="cyan" textClass='text-black' onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="lime" textClass='text-black' onClickHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="orange" textClass='text-black' onClickHandler={handleColorButtonClicked} />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
