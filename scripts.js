// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    console.log("Window Load Complete")
    let flightStatusParagraph = document.getElementById("flightStatus");
    let shuttleBackgroundColor = document.getElementById("shuttleBackground");
    let spaceShuttleHeightParagraph = document.getElementById("spaceShuttleHeight");
    let rocketImg = document.querySelector("img")


    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function(event) {
        let confirm = window.confirm( "Confirm that the shuttle is ready for takeoff.");
        if (confirm) {
            flightStatusParagraph.innerHTML = "Shuttle in flight.";
            shuttleBackgroundColor.style.backgroundColor = "blue";
            spaceShuttleHeightParagraph.innerHTML = 10000;    
        }
    });

    let landingButton = document.getElementById("landing");
    landingButton.addEventListener("click", function(event) {
        let alert = window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatusParagraph.innerHTML = "The shuttle has landed.";
        shuttleBackgroundColor.style.backgroundColor = "green";
        spaceShuttleHeightParagraph.innerHTML = 0;
        rocketImg.style.bottom = 0;
        rocketImg.style.right = 0;
    });

    let abortMissionButton = document.getElementById("missionAbort");
    abortMissionButton.addEventListener("click", function(event) {
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if (confirm) {
            flightStatusParagraph.innerHTML = "Mission aborted."; 
            shuttleBackgroundColor.style.backgroundColor = "green";
            spaceShuttleHeightParagraph.innerHTML = 0;
            rocketImg.style.bottom = 0;
            rocketImg.style.right = 0;
        }
    });


    let height = shuttleBackgroundColor.clientHeight;
    let width = shuttleBackgroundColor.clientWidth
    console.log(height)
    console.log(width)

    let up = document.getElementById("up");
    up.addEventListener("click", function(event){
        if (Number(rocketImg.style.bottom.replace("px", "")) <= height-75) {
            move = Number(rocketImg.style.bottom.replace("px", "")) + 10;
            rocketImg.style.bottom = move + "px";
            miles = Number(spaceShuttleHeightParagraph.innerHTML); 
            spaceShuttleHeightParagraph.innerHTML = miles + 10000;
        } else {
            let alert = window.alert("You cannot move off the background.")
        }
    })

    let down = document.getElementById("down");
    down.addEventListener("click", function(event){
        if (Number(rocketImg.style.bottom.replace("px", "")) >= 0) {
            move = Number(rocketImg.style.bottom.replace("px", "")) - 10;
            rocketImg.style.bottom = move + "px"; 
            miles = Number(spaceShuttleHeightParagraph.innerHTML); 
            spaceShuttleHeightParagraph.innerHTML = miles - 10000;
        } else {
            let alert = window.alert("You cannot move off the background.")
        }
    })

    let right = document.getElementById("right");
    right.addEventListener("click", function(event){
        if (Number(rocketImg.style.right.replace("px", "")) >= 0) {
            move = Number(rocketImg.style.right.replace("px", "")) - 10;
            rocketImg.style.right = move + "px";
        } else {
            let alert = window.alert("You cannot move off the background.")
        }
    })

    let left = document.getElementById("left");
    left.addEventListener("click", function(event){
        if (Number(rocketImg.style.right.replace("px", "")) <= width-75) {
            move = Number(rocketImg.style.right.replace("px", "")) + 10;
            rocketImg.style.right = move + "px";
        } else {
            let alert = window.alert("You cannot move off the background.")
        }
    })


});

// let imgObj = document.getElementById('rocket');
//     imgObj.style.position= 'absolute'; 
//     imgObj.style.left = '0px'; 
//     imgObj.style.bottom = '0px';

// let rocketShip = document.getElementById("rocketShip")
//     rocketShip.style.position= "relative";
//     rocketShip.style.left= '0px';
//     rocketShip.style.bottom= '-250px';
