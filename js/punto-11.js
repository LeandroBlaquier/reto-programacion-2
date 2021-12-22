const num1 = Number(prompt("ingrese un numero"));
const num2 = Number(prompt("ingrese el segundo numero"));
const num3 = Number(prompt("ingrese el tercer numero"));

if (num1 < 10 || num2 < 10 || num3 < 10) {
  alert(`Algunos de los numeros es menor a 10`);
} else {
  alert(`no se cumplen las expectativas`);
}
