import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const minPasswordLength = 8;
  const maxPasswordLength = 100;
  const [length, setLength] = useState(minPasswordLength);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberAllowed) charset += '0123456789';
    if (charAllowed) charset += '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length + 1));
    }
    setPassword(password);
  }
  , [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // window.navigator.clipboard.writeText(password);
    document.execCommand('copy');
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }
  , [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1>Password Generator</h1>
      <div>
        <div>
          <input
            type="text"
            value={password}
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div>
          <input
            type="range"
            min={minPasswordLength}
            max={maxPasswordLength}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            // defaultChecked={numberAllowed}
            id="numberInput"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            // defaultChecked={charAllowed}
            id="characterInput"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor='characterInput'>Special Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
