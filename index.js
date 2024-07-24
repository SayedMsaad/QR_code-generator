import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"type in your URL: ",
        name:"URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    const qrImg=qr.image(url);
    qrImg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("url.txt",url,(err)=>{
        if(err) throw err;

        console.log("File saved !")

    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });