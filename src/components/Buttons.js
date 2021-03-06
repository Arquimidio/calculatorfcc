import SingleButton from "./SingleButton";

export default function Buttons({
  changeText,
  clearText,
  addOperation,
  operate
}){
  return(
    <div className="buttons__container">
      <SingleButton 
        value={"AC"} 
        id="clear"
        handler={clearText}
      />
      <SingleButton 
        value={"/"}
        className="operator" 
        id="divide"
        handler={addOperation}
      />
      <SingleButton 
        value={"*"} 
        className="operator" 
        id="multiply"
        handler={addOperation}
      />
      <SingleButton 
        value={"7"} 
        id="seven"
        handler={changeText}
      />
      <SingleButton 
        value={"8"} 
        id="eight"
        handler={changeText}
      />
      <SingleButton 
        value={"9"} 
        id="nine"
        handler={changeText}
      />
      <SingleButton 
        value={"-"} 
        id="subtract"
        className="operator" 
        handler={addOperation}
      />
      <SingleButton 
        value={"4"} 
        id="four"
        handler={changeText}
      />
      <SingleButton 
        value={"5"} 
        id="five"
        handler={changeText}
      />
      <SingleButton 
        value={"6"} 
        id="six"
        handler={changeText}
      />
      <SingleButton 
        value={"+"} 
        id="add"
        className="operator" 
        handler={addOperation}
      />
      <SingleButton 
        value={"1"} 
        id="one"
        handler={changeText}
      />
      <SingleButton 
        value={"2"} 
        id="two"
        handler={changeText}
      />
      <SingleButton 
        value={"3"} 
        id="three"
        handler={changeText}
      />
      <SingleButton 
        value={"="} 
        id="equals"
        handler={operate}
      />
      <SingleButton 
        value={"0"} 
        id="zero"
        handler={changeText}
      />
      <SingleButton 
        value={"."} 
        id="decimal"
        handler={changeText}
      />
    </div>
  )
}