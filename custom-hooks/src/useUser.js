import {useResource} from './useResource';

export const useUser = (userId) => 
{ 
  const { isLoading, data: user } = useResource(`https://api.example.com/users/${userId}`, {});

	return { isLoading, user };
};

export const useProduct = (productId) => 
{
  const { isLoading, data: product } = useResource(`https://api.example.com/products/${productId}`, {});

	return { isLoading, product };
};