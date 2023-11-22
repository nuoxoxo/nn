import './App.scss'
import { SnackbarProvider, useSnackbar } from 'notistack'

const ThreeChocolate = () => {
  const { enqueueSnackbar } = useSnackbar()
  return <button onClick={() => enqueueSnackbar('🍫 x 3')}>🍫</button>
}

const SixChocolate = () => {
  const { enqueueSnackbar } = useSnackbar()
  return (
    <button onClick={() => enqueueSnackbar(
      '🍫 x 6', // 1st arg: Message
      { // 2nd arg: specification
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin:
        {
          vertical: "top",
          horizontal: "left"
        },
      },
    )}>🍬</button>
  )
}

const OneChocolate = () => {
  const { enqueueSnackbar } = useSnackbar()
  return (
    <button onClick={() => enqueueSnackbar(
      '🦷', // 1st arg: Message
      { // 2nd arg: specification
        variant: "error",
        autoHideDuration: 3000,
        anchorOrigin:
        {
          vertical: "bottom",
          horizontal: "right"
        },
      },
    )}>🍭</button>
  )
}

const NoChocolate = () => {
  const { enqueueSnackbar } = useSnackbar()
  return (
    <button onClick={() => enqueueSnackbar(
      '𓃓', // 1st arg: Message
      { // 2nd arg: specification
        variant: "info",
        autoHideDuration: 3000,
        anchorOrigin:
        {
          vertical: "top",
          horizontal: "right"
        },
      },
    )}>🐂</button>
  )
}

function App() {

  return (
    <>
      <div>
        <SnackbarProvider maxSnack={3}>
        <ThreeChocolate />
        </SnackbarProvider>

        {/* TRICK:  */}
        {/* Wrap each btn otherwise the last maxSnack will dictate */}

        <br />

        <SnackbarProvider maxSnack={6}>
        <SixChocolate />
        </SnackbarProvider>

        <br />

        <SnackbarProvider maxSnack={1}>
        <OneChocolate />
        </SnackbarProvider>

        <br />

        <SnackbarProvider maxSnack={9}>
        <NoChocolate />
        </SnackbarProvider>
        
      </div>
    </>
  )
}

export default App
