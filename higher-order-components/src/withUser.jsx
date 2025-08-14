 import React, {useState, useEffect} from 'react';

 export const withUser = (Component, userId) =>
 {
  return props => 
  {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //   const fetchUser = async () => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    //     const data = await response.json();
    //     setUser(data);
    //   };

    //   fetchUser();
    // }, [userId]);

    // if (!user) return <div>Loading...</div>;

    // return <Component {...props} user={user} />;

    useEffect(() => 
    {
      setUser({
        id: userId,
        name: 'John Doe',
        age: 12,
        haircolor: 'brown',
        hobbies: ['swimming', 'gaming']
      });
    }, []);

    if (!user) return <div>Loading...</div>;

    return <Component {...props} user={user} />;
  }
 }