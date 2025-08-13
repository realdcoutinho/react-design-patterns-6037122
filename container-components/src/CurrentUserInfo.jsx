import React, {userState, useEffect} from 'react';  
import axis from 'axios'; 
import {UserInfo} from './UserInfo';

export const CurrentUserInfo = () =>
{
  const [user, setUser] = useState(null);

  useEffect(() => 
  {
    (async () => 
    {
      const response = await axios.get('/api/current_user');
      setUser(response.data);
    })
  }, []);

  return (
     user && <UserInfo user={user} />
  );
}