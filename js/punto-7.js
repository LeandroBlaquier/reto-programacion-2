const preguntas = Number(prompt("cantidad total de preguntas"));
const respondio = Number(
  prompt("cantidad de preguntas que respondio correctamente")
);

const porcentaje = (respondio * 100) / preguntas;

if (porcentaje >= 90) {
  alert(`Maximo nivel`);
} else if (porcentaje >= 75 && 90) {
  alert(`nivel medio`);
} else if (porcentaje >= 50 && 75) {
  alert(`nivel regular`);
} else if (porcentaje < 50) {
  alert(`fuera de nivel`);
}
