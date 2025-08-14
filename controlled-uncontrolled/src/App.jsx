import { UncontrolledForm } from './UncontrolledForm'
import { ControlledForm } from './ControlledForm';
//import { Modal } from './UncontrolledModal';
import { ControlledModal } from './ControlledModal';
import { useState } from 'react';

function App() 
{
  const [showModal, setShowModal] = useState(false);

  return (
    <>

    <ControlledModal shouldShow={showModal} onRequestClose={() => setShowModal(false)}>
      <p>This is the controlled modal content</p>
      <UncontrolledForm />
      <ControlledForm
        initialName="John Doe"
        initialNameAge={30}
        initialHairColor="Brown"
      />
    </ControlledModal>
    <button onClick={() => setShowModal(true)}>Open Controlled Modal</button>

    </>
  )
}

export default App
