export function rulesPopUp(message, rulesState) {
  if(rulesState) {
  return (
    <div className="rules-popup">
      {message}
    </div>
  )
  }
}