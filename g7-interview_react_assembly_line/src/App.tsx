import AssemblyLine from './component/AssemblyLine'

function App() {
  const stages = [
    'Idea', 
    'Development', 
    'Testing', 
    'Deployment'
  ]

  return (
    <>
      <h1>Assembly Line Component</h1>
      <AssemblyLine 
        stages={stages}
      />
      {/* <img src='https://i.imgur.com/gUHZxzD.gif'/> */}
    </>
  )
}

export default App
