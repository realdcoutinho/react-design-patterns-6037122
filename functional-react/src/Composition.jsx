const reverseString  = str => str.split('').reverse().join('');

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const repeatString = (str, times) => str * times;

const firstName = 'Diogo';

reverseString(capitalize(firstName)); // "Ogoid"



export const Card =({children}) =>
{
  return (
    <div style={{ border: '1px solid #000000ff'}}>
      {children}
    </div>
  )
}

export const CardHeader = ({title}) =>
{
  return (
    <div style={{ font: 'bold 20px Arial'}}>
      {title}
    </div>
  )
}

export const CardBody = ({children}) =>
{
  return (
    <div style={{ color: '#333'}}>
      {children}
    </div>
  )
}

export const CardFooter = ({children}) =>
{
  return (
    <div style={{ borderTop: '1px solid #ff0000ff'}}>
      {children}
    </div>
  )
}