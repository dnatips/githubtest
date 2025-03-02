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
              <ColorButton buttonColor="red" onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="green" onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="blue" onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="olive" onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="grey" onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="yellow" textClass='text-black' onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="pink" textClass='text-black' onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="purple" onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="lavender" textClass='text-black' onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="black" onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="white" textClass='text-black' onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="cyan" textClass='text-black' onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="lime" textClass='text-black' onClickParentHandler={handleColorButtonClicked} />
              <ColorButton buttonColor="orange" textClass='text-black' onClickParentHandler={handleColorButtonClicked} />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
