"use strict";

/*
1. Create a sample data in the storage format
2. Display the data
3. Add edit functionality
4. Add delete functionality
*/

/*
1. Create a sample data in the storage format:
    - Store in dictionary format
    - Create a dataset for 4 dates
    Eg: 
    { 
    "7-9-2025" : [
     {
        "startTime": "09:00",
        "endTime": "21:00",
        "activity": "Team Meating"
     },
     {
        "startTime": "08:00",
        "endTime": "9:00",
        "activity": "Breakfast"
     }
     ],
    "7-10-2025" : []
    }
*/

/*
2. Display the data
    - Create a new row and add the data
    - Data should be sorted with Date. Newer data should displayed first.
*/

const tableBodyEle = document.getElementById("table-body");

const data = {
  "7 / 27 / 2025": [
    {
      startTime: "07:30",
      endTime: "08:30",
      activity: "Breakfast",
    },
    {
      startTime: "10:00",
      endTime: "16:00",
      activity: "Studies",
    },
  ],
  "7 / 28 / 2025": [
    {
      startTime: "07:00",
      endTime: "09:00",
      activity: "Driving",
    },
  ],
};

const loadData = function () {
  for (let date in data) {
    for (let i = 0; i < data[date].length; i++) {
      console.log(date);
      console.log(data[date][i].startTime);
      console.log(data[date][i].endTime);
      console.log(data[date][i].activity);

        addRow(date, data[date][i].startTime, data[date][i].endTime, data[date][i].activity);
    }
  }
};

const addRow = function (date, startTime, endTime, activity) {
  const row = tableBodyEle.insertRow(0);
  row.insertCell(0).textContent = date;
  row.insertCell(1).textContent = startTime;
  row.insertCell(2).textContent = endTime;
  row.insertCell(3).textContent = activity;
  addActionButtons(row.insertCell(4));
};

const addActionButtons = (cell) => {
    cell.classList.add('action');
    cell.innerHTML = `<button type="button" class="edit">Edit</button>
<button type="button" class="delete">Delete</button>`;
};

loadData();
