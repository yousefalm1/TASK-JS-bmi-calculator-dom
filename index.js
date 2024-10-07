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

  // if (BMI < 18.5) {
  //   alert("You are underweight");
  // } else if (BMI >= 18.5 && BMI <= 24.9) {
  //   alert("Your are healthy Weight");
  // } else if (BMI >= 25.0 && BMI <= 29.9) {
  //   alert("You are overweight");
  // } else if (BMI >= 30) {
  //   alert("Your are above obesity");
  // }

  // alert(`Your BMI is ${BMI}`);

  if (age >= 19 && age <= 24) {
    if (BMI >= 19 && BMI <= 24) {
      alert("Your are Healthy");
    } else {
      alert("You are not healthy");
    }
  } else if (age >= 25 && age <= 34) {
    if (BMI >= 20 && BMI <= 25) {
      alert("You are Healthy");
    } else {
      alert("you are not Healthy ");
    }
  } else if (age >= 35 && age <= 44) {
    if (BMI >= 21 && BMI <= 26) {
      alert("You are healthy");
    } else {
      alert("you are not healthy");
    }
  } else if (age >= 45 && age <= 54) {
    if (BMI >= 22 && BMI <= 27) {
      alert("You are healthy");
    } else {
      alert("you are not healthy");
    }
  } else if (age >= 55 && age <= 64) {
    if (BMI >= 23 && BMI <= 28) {
      alert("You are healthy");
    } else {
      alert("you are not healthy");
    }
  } else if (age >= 55) {
    if (BMI >= 23 && BMI <= 28) {
      alert("You are healthy");
    } else {
      alert("you are not healthy");
    }
  }
}
