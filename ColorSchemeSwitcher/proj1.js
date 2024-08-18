const buttons=document.querySelectorAll('.button')
// console.log(buttons)
const body=document.querySelector("body")
buttons.forEach( (button)=>{
  console.log(button)
  //Events
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    switch(e.target.id){
      case "yellow":
      body.style.backgroundColor=e.target.id
      break
      case "grey":
      body.style.backgroundColor=e.target.id
      break
      case "white":
      body.style.backgroundColor=e.target.id
      break
      case "red":
      body.style.backgroundColor=e.target.id
      break
      case "green":
      body.style.backgroundColor=e.target.id
      break
      default:

    }
  })
});