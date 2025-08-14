import {useState, useEffect} from 'react';

export const useCurrentUser = () => 
{ 
  const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState(null);

	useEffect(() => 
  {
		const loadedUser = 
      {
        name: 'John Doe',
        age: 54,
        hairColor: 'brown',
        hobbies: ['swimming', 'bicycling', 'video games'],
		  };

		setUser(loadedUser);
		setIsLoading(false);
	}, []);

	return { isLoading, user };
};
