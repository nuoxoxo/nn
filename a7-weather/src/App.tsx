import Researcher from './components/Researcher'

function App() {

  const handleOnSearchChange = (data: any) => {
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
