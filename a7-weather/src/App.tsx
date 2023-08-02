import Researcher from './components/Researcher.ts'

function App() {

  const handleOnSearchChange = (data) => {
    console.log(data)
  }

  return (
    <>
      <div>Hello, World!</div>
      <div className='container div-researcher'>
        <Researcher onSearchChange={ handleOnSearchChange }/>
      </div>
    </>
  )
}

export default App
