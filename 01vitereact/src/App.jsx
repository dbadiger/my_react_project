function App() {
//Inject Variables in react
const username = "Darshan"


  return (
    <>
    <h1>Vite React App</h1>
    <h2>Welcome {username}</h2>
    {/* {username}  --> it is evaluated expression
    (final outcome of the javascript is added here) 
    return evaluation cannot be writtern*/}
    </>
  )
}
export default App
