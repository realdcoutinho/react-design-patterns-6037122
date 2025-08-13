import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserInfo } from './UserInfo';


export const CurrentUserInfo = () => 
{
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => 
    {
      try 
      {
        const response = await axios.get('/api/current-user');
        setUser(response.data);
      } 
      catch (error) 
      {
        console.error("API call failed:", error);
      }
    })();
  }, []);

  if (!user) return <div>Loading user info...</div>;


  return <UserInfo user={user} />;
};
