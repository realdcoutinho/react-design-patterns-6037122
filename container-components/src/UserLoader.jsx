import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const UserLoader = ({ children, userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/users/${userId}`);
      setUser(response.data);
    })();
  }, []);

  return user && React.Children.map(children, child => 
  {
    if (React.isValidElement(child)) 
    {
      return React.cloneElement(child, { user });
    }
    return child;
  });
};
