export const inLayout = Component => props =>
{
  return (
    <div className="section">
      <div className="center-align">
        <div className="highlight"> 
          <Component {...props} />
        </div>
      </div>
    </div>
  )
}