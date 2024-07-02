function updateCurrentUTCTime() {
  const now = new Date();
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const seconds = now.getUTCSeconds().toString().padStart(2, "0");
  document.getElementById(
    "timeUTC"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

// window.onload = function () {
//   updateCurrentUTCTime();
//   setInterval(updateCurrentUTCTime, 1000); // Update every second
// };

function updateDayOfWeek() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayIndex = now.getDay();
  document.getElementById("dayOfWeek").textContent = days[dayIndex];
}

window.onload = function () {
  updateCurrentUTCTime();
  setInterval(updateCurrentUTCTime, 1000); // Update every second

  updateDayOfWeek();
  setInterval(updateDayOfWeek, 1000 * 60 * 60); // Update every hour
};
