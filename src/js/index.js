import css from "../css/styles.css";
import "bootstrap";
import "../css/bootstrap.css";



const Aleatorio = document.getElementById("Random");
const almacenComida = document.getElementById("platillo");

Aleatorio.addEventListener("click", () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            nuevoPlatillo(res.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        });
});

const nuevoPlatillo = (platillo) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (platillo[`strIngredient${i}`]) {
            ingredients.push(`${platillo[`strIngredient${i}`]} - ${platillo[`strMeasure${i}`]}`);
        } else {
            break;
        }
    }

    const Comida = <h1 src='${platillo.strIngredient4}'></h1>;

    almacenComida.innerHTML = Comida;
}