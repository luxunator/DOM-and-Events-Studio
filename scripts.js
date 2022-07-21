// Write your JavaScript code here.
// Remember to pay attention to page loading!

function onLoad() {

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    const rocketStyle = getComputedStyle(rocket);
    console.log(rocketStyle)

    takeOff.addEventListener("click", event => {
        if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) + 10000);
        }
    });

    landing.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
        rocket.style.bottom = "0";
        rocket.style.left = "0";
    });

    missionAbort.addEventListener("click", event => {
        if(window.confirm("Confirm that you want to abort the mission.")){
            flightStatus.innerHTML = "Mission Aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
            rocket.style.bottom = "0";
            rocket.style.left = "0";
        }
    });

    up.addEventListener("click", event => {
        spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) + 10000);
        rocket.style.bottom = String(Number(rocket.style.bottom.split("px")[0]) + 10) + "px";
    });

    down.addEventListener("click", event => {
        spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) - 10000);
        rocket.style.bottom = String(Number(rocket.style.bottom.split("px")[0]) - 10) + "px";
    });

    left.addEventListener("click", event => {
        rocket.style.left = String(Number(rocket.style.left.split("px")[0]) - 10) + "px";
    });

    right.addEventListener("click", event => {
        rocket.style.left = String(Number(rocket.style.left.split("px")[0]) + 10) + "px";
    });

}


window.addEventListener("load", onLoad);