function updateTime() {
    const now = new Date();
    document.getElementById("utc-time").innerText = `UTC Time: ${now.toUTCString()}`;
}
updateTime();
setInterval(updateTime, 1000);

// function updateTime() {
//     const utcTimeElement = document.getElementById("utc-time");
//     const now = new Date();
//     utcTimeElement.textContent = "UTC Time: " + now.toUTCString();
// }
// updateTime();