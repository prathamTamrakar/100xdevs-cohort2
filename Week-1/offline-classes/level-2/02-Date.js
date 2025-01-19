function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());
  // epoch timestamp: 1970-01-01T00:00:00Z

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();


function calculateSum() {
  let a = 0;
  for (let i = 0; i < 10000000000; i++) {
    a += i;
  }
  return a;
}

const beforeDate = new Date();
const beforeTimeInMs  = beforeDate.getTime();

calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log("Time taken in milliseconds:", afterTimeInMs - beforeTimeInMs);
