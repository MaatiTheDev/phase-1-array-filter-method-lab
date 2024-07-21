// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver =>
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
  const drivers = [
    { name: "John", hometown: "New York" },
    { name: "Jane", hometown: "Los Angeles" },
    { name: "Mike", hometown: "Chicago" },
    { name: "Jack", hometown: "Seattle" }
  ];
  
  console.log(findMatching(["John", "Jane", "Mike", "Jack"], "john")); // Output: ["John"]
  console.log(fuzzyMatch(["John", "Jane", "Mike", "Jack"], "ja")); // Output: ["Jane", "Jack"]
  console.log(matchName(drivers, "Jane")); // Output: [{ name: "Jane", hometown: "Los Angeles" }]
  