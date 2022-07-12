import { useState } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const operators = ["+", "-", "*", "/"];
  const [fullText, setFullText] = useState("")
  const [currentText, setCurrentText] = useState("0");

  function format(val){
    return val
            // Retira zero inicial
            .replace(/^0\d/, d => d[1])
            .replace(/.+=/g, "")
            // Retira sinal operacional posterior a ponto decimal
            .replace(/(?<=\.)[\+\-\*\/]/g, "")
            // Retira ponto não precedido por número
            .replace(/(?<=[\D])\.|^[\+\*\/\.](?=.)/g, "")
            // Retira zero inicial no meio das operações
            .replace(/(?<=[\+\-\*\/])0\d/, d => d[1])
            // Retira sinais seguidos de subtração
            .replace(/-{2,}/g, '-')
  }

  function clearCurrentText(){
    setCurrentText("");
  }

  function clearText(){
    setFullText("");
    setCurrentText("0");
  }

  function operate(){
    if(!fullText.includes("=")){
      const result = eval(fullText);
      const rounded = Math.floor(result * 1e4) / 1e4;
      const resultStr = rounded.toString();
      setFullText(prevFullText => (
        prevFullText + "=" + resultStr
      ));
      setCurrentText(format(resultStr));
    }
  }

  
  function removeOperator(){
    const lastChar = currentText[0];
    if(operators.includes(lastChar)){
      clearCurrentText();
    }
  }

  function controlDecimal(val){
    return val.replace(/(?<=\..*)\./g, '');
  }

  function changeFullText(value){
    return () => {
      removeOperator();
      setFullText(prevFullText => (
        format(prevFullText + value)
      ))
      setCurrentText(prevCurrentText => (
        format(controlDecimal(prevCurrentText + value))
      ))
    }
  }

  function willChangeLastOp(){
    return /[\+\-\*]-$/.test(fullText);
  }

  function addOperation(value){
    return () => {
      const lastChar = currentText.slice(-1);
      if(operators.includes(lastChar) && value !== '-'){
        /* 
          Remove os dois últimos sinais operacionais se
          a operação for alterada
        */
        if(willChangeLastOp()){
          setFullText(prevFullText =>{
            const left = prevFullText.slice(0, -2)
            return format(left + value);
          })
        }else{
          setFullText(prevFullText =>(
            format(prevFullText.slice(0, -1) + value)
          ))
        }
      }else{
        setFullText(prevFullText =>(
          format(prevFullText + value)
        ))
      }
      setCurrentText(format(value))
    }
  }

  return (
    <>
      <div className="calc__container">
        <Display 
          fullText={fullText}
          currentText={currentText}
        />
        <Buttons
          changeText={changeFullText}
          clearText={clearText}
          addOperation={addOperation}
          operate={operate}
        />
      </div>
      <footer>
        Designed and coded by <br/>
        <a 
          target="_blank"
          href="https://github.com/Arquimidio"
          rel="noreferrer"
        >
          Gabriel Stoppa
        </a>
      </footer>
    </>
  );
}

export default App;
