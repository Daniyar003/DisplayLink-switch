document.addEventListener("mousemove", function (event) {
  var centerX = window.innerWidth / 2;
  var centerY = window.innerHeight / 2;
  var mouseX = event.pageX;
  var mouseY = event.pageY;
  var deltaX = centerX - mouseX;
  var deltaY = centerY - mouseY;
  var angle = Math.atan2(deltaY, deltaX);
  var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  // Rotate the planetarium based on the mouse position
  var planetarium = document.querySelector(".planetarium");
  planetarium.style.transform = "rotate(" + angle + "rad)";

  // Adjust the distance of the planets based on the mouse position
  var planets = document.querySelectorAll(".planet");
  for (var i = 0; i < planets.length; i++) {
    var planet = planets[i];
    var orbit = planet.style.animationName;
    var radius = parseInt(orbit.match(/(\d+)px/)[1]);
    var newRadius = radius + (distance - 500) / 10;
    planet.style.animationName =
      orbit.replace(/(\d+)px/, newRadius + "px");
  }
});