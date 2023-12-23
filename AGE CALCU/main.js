const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge () {
    const BirthdayValue = birthdayEl.value;
    if (BirthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(BirthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge (BirthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(BirthdayValue);
  let Getage = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    currentDate.getMonth() < birthdayDate.getMonth() ||
    (currentDate.getMonth() === birthdayDate.getMonth() &&
      currentDate.getDate() < birthdayDate.getDate())
    
  ) {
    Getage--;
  }
  return Getage;
}

btnEl.addEventListener("click", calculateAge);