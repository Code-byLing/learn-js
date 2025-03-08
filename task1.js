// no.1
// calculate triangle

function calculateArea (length, width) {
      return length*width;
}

const result = calculateArea(5,3)

console.log(result);

//no.2
// declaration and calculate

let radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * Math.pow(radius, 2);

// print
console.log("Diameter: " + diameter);
console.log("Circumference: " + circumference.toFixed(4));
console.log("Area: " + Math.floor(area * 1000) / 1000);


// no.3

function findAngles (angle1, angle2) {
    let result = 180 - (angle1+angle2);
return result;
}

let angle3 = findAngles (80,65);
console.log(angle3);

// no.4
//tapi tanpa memperhitungkan perbedaan tahun, dan bulannya yg 28 hari

let month = [31, 28, 30, 31, 30, 31, 30, 31, 30, 31, 30, 30];

function calculateDays(date1, date2) {
    let result = 0;
    
    // Extract month and day values as integers
    const m1 = parseInt(date1.split("-")[1], 10);
    const m2 = parseInt(date2.split("-")[1], 10);
    const d1 = parseInt(date1.split("-")[2], 10);
    const d2 = parseInt(date2.split("-")[2], 10);
    
    // If the dates are in the same month, simply subtract the days
    if (m1 === m2) {
         result = d2 - d1;
    } else {
         // Add days remaining in the first month
         result = month[m1 - 1] - d1;
         
         // Add the days for any full months between m1 and m2
         for (let i = m1; i < m2 - 1; i++) {
              result += month[i];
         }
         
         // Add the days in the last month up to day2
         result += d2;
    }
    
    return result;
}

// Example usage:
console.log(calculateDays("2025-01-25", "2025-02-05"));  // Output will depend on your month array

// no.5

function initialName(name) {
    const splitName = name.split(" ");
    
    // Get initialName
    let initial = "";
    for (let i = 0; i < splitName.length; i++) {
      initial += splitName[i].charAt(0).toUpperCase();
    }
  
    return initial;
  }
  
  const hasil = initialName("John Doe");
  console.log(hasil); // Output: "JD"