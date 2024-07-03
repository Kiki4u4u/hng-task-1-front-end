"use strict";

document.addEventListener("DOMContentLoaded", (e) => {
  // Function to get current time in UTC
  function getCurrentTimeUTC() {
    const now = new Date();
    // console.log(now);
    return now.toUTCString().split(" ")[4];
  }

  // Function to get current day of the week
  function getCurrentDayOfWeek() {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[now.getUTCDay()];
  }

  // Function to update the time and day in the DOM
  function updateTimeAndDay() {
    // document.getElementById("current-time").textContent =
    //   "Current Time:&nbsp;&nbsp;" + getCurrentTimeUTC();
    document.getElementById("current-time").innerHTML =
      "Current Time:&nbsp;&nbsp;" + getCurrentTimeUTC();

    document.getElementById("current-day").innerHTML =
      "Current Day:&nbsp;&nbsp;" + getCurrentDayOfWeek();
  }

  // Update the time and day immediately when the page loads
  updateTimeAndDay();

  // Set an interval to update the time and day every second (1000 milliseconds)
  setInterval(updateTimeAndDay, 1000);
});

const goals = document.querySelector(".goals");
const goal_section = document.querySelector(".goals_section");

let flag = false;

goals.addEventListener("click", () => {
  if (flag) {
    goal_section.style.display = "none";
    flag = false;
    return;
  }

  if (!flag) {
    goal_section.style.display = "block";
    flag = true;
  }
});

window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

// Lazy loading images
// const circleTargets = document.querySelectorAll(".moveup");

// const moveup_function = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.style.transform = "translateY(0)";

//   // entry.target.addEventListener("load", function () {
//   //   entry.target.classList.remove("lazy-img");
//   // });

//   observer.unobserve(entry.target);
// };

// const circleObserver = new IntersectionObserver(moveup_function, {
//   root: null,
//   threshold: 0,
//   rootMargin: "100px",
// });

// circleTargets.forEach((circle) => circleObserver.observe(circle));

document.addEventListener("DOMContentLoaded", () => {
  const circleTargets = document.querySelectorAll(".moveup");

  const moveup_function = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const circleObserver = new IntersectionObserver(moveup_function, {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  });

  circleTargets.forEach((circle) => circleObserver.observe(circle));
});
