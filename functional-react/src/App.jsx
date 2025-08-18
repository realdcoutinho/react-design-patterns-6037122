import { RecursiveComponent } from "./RecursiveComponent"
import { Card } from "./Composition"
import { CardBody } from "./Composition"
import { CardFooter } from "./Composition"
import { CardHeader } from "./Composition"


const nestedObject = 
{
  a: 1,
  b: {
    b1: 2,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi',
      },
      b32: {
        message: 'Hi',
      }
    }
  },
  c: {
    c1: 2,
    c2: 3,
  }
}

function App() {

  // return (
  //   <RecursiveComponent data={nestedObject} />
  // )

  return ( 
    <>
        <Card>
        <CardHeader title="My Card Title" />
        <CardBody>
          <p>This is the body of the card.</p>
        </CardBody>
        <CardFooter>
          <p>This is the footer of the card.</p>
          <button>Click Me</button>
        </CardFooter>
      </Card>
        <Card>
        <CardBody>
          <p>This is the body of the card.</p>
        </CardBody>
      </Card>
    </>
  
  )
}

export default App
