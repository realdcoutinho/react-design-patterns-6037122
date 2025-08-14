import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const DataLoader = ({ getDataFn = () => {}, resourceName, children}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const newData = await getDataFn();
      setData(newData);
    })();
  }, []);

  return data && React.Children.map(children, child => 
  {
    if (React.isValidElement(child)) 
    {
      return React.cloneElement(child, { [resourceName]: data });
    }
    return child;
  });
};
