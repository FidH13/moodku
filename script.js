/*setTimeout(() => {
  document.querySelector(".popup").classList.add("showPopUp")


  setTimeout(() => {
    document.querySelector(".popup").classList.remove("showPopUp")
  }, 5000)
  
}, 5000)
*/

let i = 1

setInterval(function() {


  if (i % 2 == 0) {
    document.querySelector(".popup").classList.add("showPopUp")
    
    setTimeout(() => {
      document.querySelector(".popup").classList.remove("showPopUp")
    }, 5000)
  }
  
  i++
  console.log(i);

}, 10000)
