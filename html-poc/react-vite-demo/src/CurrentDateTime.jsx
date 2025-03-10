export default function CurrentDateTime() {
  return (
    <>
      <h1>Current DateTime</h1>
      <div>The time right now is {(new Date()).toLocaleString()}</div>
    </>
  )
}
