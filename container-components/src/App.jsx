import { CurrentUserLoader } from "./CurrentUserLoader.jsx";
import { CurrentUserInfo } from "./CurrentUserInfo.jsx";
import { UserLoader } from "./UserLoader.jsx";
import { UserInfo } from "./UserInfo";
import { ResourceLoader } from "./ResourceLoader.jsx";
import { DataLoader } from "./DataLoader.jsx";
import axios from 'axios';


const getServerData = url => async () => 
  {
      const response = await axios.get(url);
      return response.data;
  }


const getTestData = () =>
{
  return {
    id: '456',
    name: 'Diogo',
	  age: 42,
	  hairColor: 'blue',
	  hobbies: ['swimming', 'running', 'coding'],
  }
}


function App() {
  return (
    <>

      <DataLoader 
        getDataFn={getTestData}
        resourceName="user">
        <UserInfo/>
      </DataLoader>

      <DataLoader 
        getDataFn={getServerData("/api/users/123")}
        resourceName="user">
        <UserInfo/>
      </DataLoader>

    <UserLoader userId="345">
      <UserInfo/>       
    </UserLoader>

      <ResourceLoader resourceUrl="/api/users/345" resourceName="user">
        <UserInfo/>
      </ResourceLoader>



    </>

  );
}

// function App() {
//   return (
//     <CurrentUserInfo/>
//   );
// }

export default App;

