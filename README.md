<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <title>Frontend Mentor | Launch countdown timer</title>
    <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
    <style>
    .attribution {
        font-size: 11px;
        text-align: center;
    }
    /*variables*/
/*COLORS*/
/*primary*/
/*neutral*/
/*Typography*/
/*functions*/
/*The above is just visible in the scss file*/
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap");
body {
  font-size: 14px;
  font-family: "Red Hat Text", sans-serif;
  background-color: #191a24;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  min-width: 300px;
}

.title-container {
  color: white;
  text-align: center;
  width: 90%;
  margin: 0 auto;
  padding: 6em 0;
}
.title-container h1 {
  font-size: 1.2857143em;
  /* 18px / 14px*/
  font-weight: normal;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  width: 90%;
  margin: 0 auto;
}

.time-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3em, 1fr));
  width: 50%;
  margin: 0 auto;
}
.time-container .time {
  color: #8486a9;
  text-align: center;
  padding: 2em;
  font-size: 1.5vw;
}
.time-container .watch {
  color: #fb6087;
  text-align: center;
  font-size: 5vw;
  font-weight: bold;
}

.attribution {
  color: white;
}

.attribution a {
  color: #fb6087;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
footer figure {
  display: flex;
  justify-content: center;
}
footer figure img {
  padding: 1em;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .time-container {
    width: 90%;
  }
  .time-container .watch {
    font-size: 2.5rem;
  }
  .time-container .time {
    font-size: 0.6rem;
  }
}

/*# sourceMappingURL=styles.css.map */

    </style>
</head>

<body>
    <main>
        <div class="title-container">
            <!--<h1>We're launching soon</h1>-->
        </div>
        <div class="time-container">
            <div class="days-container">
                <div class="watch watch-days">T</div>
                <div class="days time">Days</div>
            </div>
            <div class="hour-container">
                <div class="watch watch-hours">I</div>
                <div class="hours time">Hours</div>
            </div>
            <div class="minutes-container">
                <div class="watch watch-minutes">M</div>
                <div class="minutes time">Minutes</div>
            </div>
            <div class="seconds-container">
                <div class="watch watch-seconds">E</div>
                <div class="seconds time">Seconds</div>
            </div>
        </div>

        <!--
          LA PRIMERA VEZ APRENDIENDO A USAR MIXIN CON FOR EN SASS
          <div class="text-container">
          <div class="text-1">hello</div>
        <div class="text-2">hello</div>
        <div class="text-3">hello</div>
        <div class="text-4">hello</div>
        </div>
        -->
    </main>
    <footer>
      <figure id="imgs-container">
        <!--<img src="images/icon-facebook.svg">
        <img src="images/icon-pinterest.svg">
        <img src="images/icon-instagram.svg">-->
      </figure>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/macluiggy" target="_blank">Luiggy Macias</a>.
    </div>
    </footer>
    
    <script type="module" src="js/app.js"></script>
</body>

</html>