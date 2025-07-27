"use strict";

/*
1. Button click should get the data from the form.
2. Clear the form inputs when data is taken.
 */

const formEle = document.getElementById("form");

formEle.addEventListener("submit", function(event) {
  event.preventDefault(); // This is crucial! Stops page reload

  const formElements = this.elements;
  // form data can be retrived now.
  const startTime = formElements.startTime.value;
  const endTime = formElements.endTime.value;
  const day = formElements.day.value;
  const month = formElements.month.value;
  const year = formElements.year.value;
  const activityName = formElements.activityName.value;

  formEle.reset();
  console.log(startTime, endTime, day, month, year, activityName);
});
