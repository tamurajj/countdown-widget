function getTargetDateFromURL() {
  const params = new URLSearchParams(window.location.search);
  const dateStr = params.get("date");
  if (!dateStr) return null;

  const date = new Date(dateStr + "T00:00:00");
  return isNaN(date.getTime()) ? null : date;
}

function updateCountdown() {
  const targetDate = getTargetDateFromURL();
  const countdownEl = document.getElementById("countdown");

  if (!targetDate) {
    countdownEl.innerHTML = "INVALID DATE";
    return;
  }

  const now = new Date();
  const diffTime = targetDate.setHours(0,0,0,0) - now.setHours(0,0,0,0);
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (days <= 0) {
    countdownEl.innerHTML = "オギャー！";
  } else {
    document.getElementById("days").textContent = days;
  }
}

updateCountdown();
