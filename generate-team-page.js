const fs = require('fs');



  // function for creating the html site
const writeHtmlFile = content => {
  fs.writeFile('./dist/testpage.html', content, err => {
    if(err) {
      console.log('Opps something happened!')
      return
    } 
    console.log('Team website was generated in distribution')
  })
}


  // fucntion to copi file for the css template
const copyCssFile = () => {
  fs.copyFile('./src/style.css', './dist/teststyle.css', err => {
    if(err) {
      console.log('Opps something happened!')
      return
    } 
    console.log('CSS file has been copied onto distribution')
  })
}

  module.exports = {writeHtmlFile, copyCssFile}