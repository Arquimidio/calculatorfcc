export default function Display({ currentText, fullText }){
  return(
    <div className="display__container">
      <div className="display__all">
        {fullText}
      </div>
      <div id="display" className="display__current">
        {currentText}
      </div>
    </div>
  )
}