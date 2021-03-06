const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Arts Temple Boudh</title>
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="css/style.css">
      <style>
          body {
              font-family: 'Baloo Bhai 2', cursive;
              margin: 0px;
              padding: 0px;
              background: url('img/karate-3961086.jpg');
              height: 4000px;
          }
  
          .left {
              display: inline-block;
              /* border: 2px solid blue; */
              position: absolute;
              top: 20px;
              left: 30px;
              line-height: 15px;
              font-size: 10px;
          }
  
          .mid {
              /* border: 2px solid blue; */
              display: block;
              width: 40%;
              margin: 20px auto;
          }
  
          .right {
              display: inline-block;
              /* border: 2px solid blue; */
              position: absolute;
              top: 20px;
              right: 30px;
          }
  
          .navBar {
              display: inline-block;
              text-align: center;
          }
  
          .navBar li {
              display: inline-block;
          }
  
          .navBar li a {
              display: inline-block;
              text-decoration: none;
              padding: 5px 10px;
              text-align: center;
              font-weight: bolder;
              font-size: 23px;
              color: white;
          }
  
          .navBar li a:hover {
              text-decoration: underline;
              color: rgb(1, 1, 42);
              transform: scale(1.1);
          }
  
          .left img {
              width: 120px;
          }
  
          .logoName {
              text-align: center;
              font-weight: bolder;
              font-size: 20px;
          }
  
          .btn {
              font-family: 'Baloo Bhai 2', cursive;
              margin: 14px 10px;
              background-color: #ff6126;
              color: white;
              padding: 10px 20px;
              border: 2px solid black;
              border-radius: 20px;
              font-size: medium;
              font-weight: bolder;
              cursor: pointer;
          }
  
          .btn:hover {
              background-color: #ff4907;
              color: black;
              transform: scale(1.1);
          }
  
          .container {
              /* border: 2px solid black; */
              margin: 90px 70px;
              padding: 53px 50px;
              width: 35%;
              
          }
  
          .formGroup input {
              display: block;
              padding: 6px 78px;
              margin: 7px 3px;
              border: 2px solid black;
              border-radius: 10px;
              font-size: 17.5px;
              font-family: cursive;
              font-weight: bold;
          }
  
          .container h1,h3
          {
              text-align: left;
              font-size: 30px;
              font-family: cursive;
              font-weight: bolder;
          }
  
          .formGroup button
          {
              border-radius: 2px solid red;
              background-color: black;
              color: white;
              display: block;
              margin: 10px 5px;
              padding: 7px 2px;
              width: 68%;
              border-radius: 10px;
              font-family: cursive;
              font-weight: bolder;
          }
  
          .formGroup button:hover
          {
              background-color: rgb(139, 136, 136);
              transform: scale(1.03);
              color: black;
          }
  
          .container2
          {
              /* border: 2px solid red; */
              margin: 10px 75px;
              width: 30%;
              padding: 10px 3px;
              text-align: center;
              font-family: Georgia, 'Times New Roman', Times, serif;
              font-size: 33px;
          }
  
          .container2 a
          {
              color: white;
              font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
              font-size: 30px;
              font-weight: bold;
          }
  
          .container2 a:hover
          {
              color: #0645AD;
          } 
  
      </style>
  </head>
  
  <body>
      <header class="header">
          <div class="left">
              <img src="img/karateLogo.jpg" alt="Error in loading image">
              <div class="logoName">
                  ARTS TEMPLE <br>
                  BOUDH
              </div>
          </div>
          <div class="mid">
              <ul class="navBar">
                  <li><a href="">HOME</a></li>
                  <li><a href="">SERVICES</a></li>
                  <li><a href="">FITNESS CALCULATOR</a></li>
                  <li><a href="">ABOUT US</a></li>
              </ul>
          </div>
          <div class="right">
              <button class="btn">CALL US NOW</button>
              <button class="btn">REGISTER NOW</button>
          </div>
      </header>
      <div class="container">
          <h1>Join the evolution!</h1>
          <h3>Register now</h3>
          <form action="backendNoaction.php">
              <div class="formGroup">
                  <input type="text" name="" placeholder="Enter your Name">
              </div>
              <div class="formGroup">
                  <input type="text" name="" placeholder="Enter your Age">
              </div>
              <div class="formGroup">
                  <input type="text" name="" placeholder="Enter your Gender">
              </div>
              <div class="formGroup">
                  <input type="text" name="" placeholder="Enter your Locality">
              </div>
              <div class="formGroup">
                  <input type="text" name="" placeholder="Enter your Email ID">
              </div>
              <div class="formGroup">
                  <input type="text" name="" placeholder="Enter your Contact no.">
              </div>
              <div class="formGroup">
                  <button>Submit now</button>
              </div>
          </form>
      </div>
      <div class="container2">
          <h4>Visit our youtube channel by clicking below</h4>
         <a href="http://www.youtube.com/channel/UCqJVt5bIxBKFB-nCLXoKyWw" target="_blank">Arts Temple Boudh</a>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});