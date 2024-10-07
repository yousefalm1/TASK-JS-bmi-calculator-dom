function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces

  let heightToMeters = height / 100;
  const BMI = weight / (heightToMeters * heightToMeters);

  // alert(`Your BMI is ${BMI}`);

  if (BMI < 18.5) {
    alert("You are underweight");
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    alert("Your are healthy Weight");
  } else if (BMI >= 25.0 && BMI <= 29.9) {
    alert("You are overweight");
  } else if (BMI >= 30) {
    alert("Your are above obesity");
  }
}
