import { useState } from 'react'
import { GetRandomColor } from './Helpers'
import Badge from "react-bootstrap/Badge";

function App() {
  const [textColor, SetTextColor] = useState(GetRandomColor())

  let inputStyle = {

    width: "60vh",
    height: "50vh",
    backgroundColor: "#FEFBEA",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px",
    fontFamily: 'Georgia',
    fontSize: '21px',
  }

  var outputStyle = {

    width: "60vh",
    height: "50vh",
    backgroundColor: "#E6FFE6",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px",
    fontFamily: 'Georgia',
    fontSize: '21px',
  }

  return (
    <>

      <div className='container'>
        <span style={{ color: textColor }}>Hello</span>
        &nbsp;<span style={{ color: textColor }}>World</span>
      </div>

      <div className="container">

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                {/* <h4><Badge className="text-align-center" variant="secondary">Input</Badge></h4> */}
                <div className="mark-input" >
                  <textarea className="input" style={ inputStyle }></textarea>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
              {/* <h4><Badge className="text-align-center" variant="secondary">Preview</Badge></h4> */}
                <div className="mark-input" >
                  <textarea className="input" style={ outputStyle }></textarea>
                </div>
              </div>
            </div>
          </div>

          

      </div>
    </>
  )
}

export default App
