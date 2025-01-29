function updateUTCTime() {
    const utcTimeElement = document.getElementById('utcTime');
    const now = new Date();
    const utcTime = now.toUTCString();
    utcTimeElement.textContent = utcTime;
}

setInterval(updateUTCTime, 1000);

document.addEventListener('DOMContentLoaded', updateUTCTime);