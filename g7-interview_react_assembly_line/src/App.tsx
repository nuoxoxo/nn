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
    </>
  )
}

export default App