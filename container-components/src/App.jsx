import { CurrentUserLoader } from "./CurrentUserLoader.jsx";
import { CurrentUserInfo } from "./CurrentUserInfo.jsx";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    <CurrentUserLoader>
      <UserInfo/>
    </CurrentUserLoader>
  );
}

// function App() {
//   return (
//     <CurrentUserInfo/>
//   );
// }

export default App;

