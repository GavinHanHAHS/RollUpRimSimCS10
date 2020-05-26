//Code portion of Tim Horton's Roll up rim sim.
//Gavin Han
//May 26th, 2020

document.getElementById("once").addEventListener("click", simulate);
document.getElementById("five").addEventListener("click", simulate5);
document.getElementById("grand").addEventListener("click", simulateGrand);
document.getElementById("500").addEventListener("click", simulateDonut);

//variables
let nothing = 0;
let donut = 0;
let coffee = 0;
let grand = 0;
let prizeImg = document.getElementById("prizeImg");

function simulate() {
  //check region user inputted
  let region = document.getElementById("region").value;

  if(region == "none") {
    //no region inputted
    console.log("idot"); //tell user to input a region
    document.getElementById("warning").innerHTML = "Please Input a Region"; //warn user to input a region
  } else {
    //delete warning if existent
    document.getElementById("warning").innerHTML = "";

    if(region == "bc") {
      //region == british columbia
      //generate random number
      let random = Math.random();
      
      //give out prize based on randon number
      if(random >= 0.9) {
        grand++;
        document.getElementById("grandPrize").innerHTML = grand; 
        prizeImg.src = "media/grandPrize.png";
      } else if(random >= 0.8) {
        coffee++;
        document.getElementById("coffee").innerHTML = coffee;
        prizeImg.src = "media/coffee.png";
      } else if(random >= 0.7) {
        donut++;
        document.getElementById("donut").innerHTML = donut;
        prizeImg.src = "media/donut.png";
      } else {
        nothing++;
        document.getElementById("nothing").innerHTML = nothing;
        prizeImg.src = "media/timHortons.jpg";
      }

    } else if(region == "ab") {
      //region = alberta

      //generate random number
      let random = Math.random();
      
      //give out prize based on randon number
      if(random >= 0.95) {
        grand++;
        document.getElementById("grandPrize").innerHTML = grand; 
        prizeImg.src = "media/grandPrize.png";
      } else if(random >= 0.55) {
        coffee++;
        document.getElementById("coffee").innerHTML = coffee;
        prizeImg.src = "media/coffee.png";
      } else if(random >= 0.15) {
        donut++;
        document.getElementById("donut").innerHTML = donut;
        prizeImg.src = "media/donut.png";
      } else {
        nothing++;
        document.getElementById("nothing").innerHTML = nothing;
        prizeImg.src = "media/timHortons.jpg";
      }

    } else {
      //region == saskatchewan

      //generate random number
      let random = Math.random();
      
      //give out prize based on randon number
      if(random >= 0.72) {
        grand++;
        document.getElementById("grandPrize").innerHTML = grand; 
        prizeImg.src = "media/grandPrize.png";
      } else if(random >= 0.71) {
        coffee++;
        document.getElementById("coffee").innerHTML = coffee;
        prizeImg.src = "media/coffee.png";
      } else if(random >= 0.7) {
        donut++;
        document.getElementById("donut").innerHTML = donut;
        prizeImg.src = "media/donut.png";
      } else {
        nothing++;
        document.getElementById("nothing").innerHTML = nothing;
        prizeImg.src = "media/timHortons.jpg";
      }
    }

  }
}

function simulate5() {
  for(i = 0; i < 5; i++) {
    simulate();
  }
}

function simulateGrand() {
  let target = grand + 1;
  while(grand != target) {
    simulate();
  }
}

function simulateDonut() {
  let target = donut + 500;
  while(donut != target) {
    simulate();
  }
}