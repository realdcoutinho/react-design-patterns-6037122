export const RegularList = ({
  items, 
  resourceName,
  itemComponent: ItemComponent,
}) => (
  <>
  {items.map((item, i) => (
    <ItemComponent key={i} {...{[resourceName]: item}} />
  ))}
  </>
)