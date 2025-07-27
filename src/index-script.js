"use strict";

/*
1. Button click should get the data from the form.
2. Clear the form inputs when data is taken.
 */

const formEle = document.getElementById("form");
const startTimeEle = document.getElementById("start-time");
const endTimeEle = document.getElementById("end-time");
const dayEle = document.getElementById("day");
const monthEle = document.getElementById("month");
const yearEle = document.getElementById("year");
const activityEle = document.getElementById("activity-name");
const addActivityButton = document.getElementById("add-activity");

formEle.addEventListener("submit", (event) => {
  event.preventDefault(); // This is crucial! Stops page reload

  // form data can be retrived now.
  const startTime = startTimeEle.value;
  const endTime = endTimeEle.value;
  const day = dayEle.value;
  const month = monthEle.value;
  const year = yearEle.value;
  const activityName = activityEle.value;
  console.log(startTime, endTime, day, month, year, activityName);
  console.log("Hello World");
});
