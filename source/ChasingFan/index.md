---
title: ChasingFan
date: 2024-03-21 00:37:12
tags:
  - ChasingFan
categories:
  - 追番
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jc</title>
   <style>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #161623;
}
body::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:linear-gradient(#f00,#f0f);
    clip-path: circle(30% at right 70%);
}
body::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:linear-gradient(#2196f3,#e91e63);
    clip-path: circle(20% at 10% 10%);
}
.container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    flex-wrap: wrap;
    z-index: 1;
    /*background-color: #0fb6d6;*/
}
.container .card{
    position: relative;
    width:  150px;
    height: 150px;
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    border-radius: 15px;
    background-color: rgba(255,255,255,0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: rgba(255,255,255,0.5) 1px solid;
    border-left: rgba(255,255,255,0.5) 1px solid;
    backdrop-filter: blur(5px);
}

   </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="content">
            </div>
        </div>
        <div class="card">
            <div class="content">
            </div>
        </div>
        <div class="card">
            <div class="content">
            </div>
        </div>
    </div>
    <br>
    <div class="container">
        <div class="card">
            <div class="content">
            </div>
        </div>
        <div class="card">
            <div class="content">
            </div>
        </div>
        <div class="card">
            <div class="content">
            </div>
        </div>
    </div>
    <br>
    <div class="container">
        <div class="card">
            <div class="content">
            </div>
        </div>
        <div class="card">
            <div class="content">
            </div>
        </div>
        <div class="card">
            <div class="content">
            </div>
        </div>
    </div>
</body>
</html>