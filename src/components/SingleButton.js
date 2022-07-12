export default function SingleButton({ 
  value, 
  className, 
  handler,
  id
}){
  const receivesArgs = !(value === "AC" || value === "=");
  return(
    <div 
      onClick={receivesArgs? handler(value) : handler}
      className={`button ${className}`}
      id={id}
    >{ value }</div>
  )
}