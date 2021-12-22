const num1 = Number(prompt("ingrese un numero"));
const num2 = Number(prompt("ingrese otro numero"));
const num3 = Number(prompt("ingrese otro numero mas"));

if (num1 && num2 === num3) {
  const resultado = (num1 + num2) * num3;
  alert(`el resultado es: ${resultado}`);
}
