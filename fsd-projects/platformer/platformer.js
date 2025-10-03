$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid()                                                                                                                                                   


    // TODO 2 - Create Platforms
    createPlatform(200, 550, 250, 50);
    createPlatform(750, 650, 260, 50);
    createPlatform(0, 300, 750, 50);
    createPlatform(500, 160, 1050, 50);
    createPlatform(500, 500, 1000, 50);



    // TODO 3 - Create Collectables
    createCollectable("database", 1350, 120);
    createCollectable("steve", 900, 350, 0.5, 0.7);
    createCollectable("database", 990, 600, 0);



    
    // TODO 4 - Create Cannons
    createCannon("top", 700, 1550);
    createCannon("right", 250, 2500);
    createCannon("left", 400, 3000);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
