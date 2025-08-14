import './App.css'
import { UserInfo } from './UserInfo'
import { useCurrentUserId } from "./useCurrentUserId";


function App() {

  const userId = useCurrentUserId();
  return (
    <>
      <UserInfo userId={userId}/>
      <UserInfo userId={234}/>
      <UserInfo userId={345}/>
    </>
  )
}

export default App
