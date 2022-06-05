export class Background {

   
  addBackground() {
    document.querySelector('#page-home')
    .addEventListener('click', () => {
      document.querySelector("body").setAttribute("class", "image-home")
    })
    
    document.querySelector('#page-universe')
    .addEventListener('click', () => {
      document.querySelector("body").setAttribute("class", "image-universe")
    })
    
    document.querySelector('#page-explorer')
    .addEventListener('click', () => {
      document.querySelector("body").setAttribute("class", "image-explorer")
    })

  }



}