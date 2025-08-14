import { useReducer } from "react";
import { useCurrentUser } from "./useCurrentUser";
import { useUser } from "./useUser";
import { useResource } from "./useResource";
import { useDataSource } from "./useDataSource";
import { useCallback } from "react";

const loadUser = async userId => 
{
	console.log(`Fetching user data...`);
	const loadedUser = 
	{
		id: userId,
		name: "John Doe",
		age: 30,
		hairColor: "Brown",
		hobbies: ["Reading", "Traveling", "Gaming"]
	}

	return loadedUser;
};

export const UserInfo = ({userId}) => 
{
	//const { isLoading, user } = useUser(userId);
	//const { isLoading, data: user } = useResource(`https://api.example.com/users/${userId}`, {});

	const loadUserWithId = useCallback(() => loadUser(userId), [userId]);
	const {isLoading, data: user} = useDataSource(loadUserWithId);

	if (isLoading) 
	{
		return <p>Loading...</p>;
	}

	const { name, age, hairColor, hobbies } = user;



	return (
		<>
		<h3>{name}</h3>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<h3>Hobbies:</h3>
		<ul>
			{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
		</ul>
		</>
	);
}