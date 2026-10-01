import { act, fireEvent, render, screen, within } from "@testing-library/react";
import Tablero, { barajarFisherYates } from "./Tablero";

//Reparto fijo: Charizard, Charizard, Lapras, Lapras, Rayquaza, Rayquaza | Mewtwo, Phanpy, Pikachu, Mewtwo, Phanpy, Pikachu.
//Con la versión anterior, resolver las tres primeras parejas mostraba "¡Has Ganado!" con 6 cartas aún en la mesa.
const ORDEN_FIJO = [0, 6, 1, 7, 2, 8, 3, 4, 5, 9, 10, 11];
const barajarFijo = (cartas) => ORDEN_FIJO.map((i) => cartas[i]);

const cartas = () => within(screen.getByRole("group", { name: "Cartas" })).getAllByRole("button");
const levantar = (...posiciones) => posiciones.forEach((posicion) => fireEvent.click(cartas()[posicion]));
const reiniciar = () => fireEvent.click(screen.getByRole("button", { name: "Volver a empezar" }));
const esperarFallo = () => act(() => {
  jest.advanceTimersByTime(1000);
});

afterEach(() => {
  jest.useRealTimers();
});

test("no declara la victoria hasta encontrar las 6 parejas", () => {
  render(<Tablero barajar={barajarFijo} />);

  levantar(0, 1, 2, 3, 4, 5);
  expect(screen.queryByText("¡Has Ganado!")).not.toBeInTheDocument();

  levantar(6, 9, 7, 10, 8, 11);
  expect(screen.getByText("¡Has Ganado!")).toBeInTheDocument();
});

test("no deja levantar más cartas mientras se ven dos que no coinciden y después las tapa", () => {
  jest.useFakeTimers();
  render(<Tablero barajar={barajarFijo} />);

  levantar(6, 7);
  expect(cartas()[6]).toHaveAccessibleName("Mewtwo");
  expect(cartas()[7]).toHaveAccessibleName("Phanpy");

  levantar(8);
  expect(cartas()[8]).toHaveAccessibleName("Carta boca abajo");

  esperarFallo();
  expect(cartas()[6]).toHaveAccessibleName("Carta boca abajo");
  expect(cartas()[7]).toHaveAccessibleName("Carta boca abajo");
});

test("reiniciar cancela la espera pendiente de la partida anterior", () => {
  jest.useFakeTimers();
  render(<Tablero barajar={barajarFijo} />);

  levantar(6, 7);
  reiniciar();
  levantar(6);
  esperarFallo();

  expect(cartas()[6]).toHaveAccessibleName("Mewtwo");
});

test("cuenta un movimiento por cada par de cartas levantadas y vuelve a 0 al reiniciar", () => {
  jest.useFakeTimers();
  render(<Tablero barajar={barajarFijo} />);
  expect(screen.getByText(/Movimientos: 0/)).toBeInTheDocument();

  levantar(0, 1);
  expect(screen.getByText(/Movimientos: 1/)).toBeInTheDocument();

  levantar(6, 7);
  expect(screen.getByText(/Movimientos: 2/)).toBeInTheDocument();

  reiniciar();
  expect(screen.getByText(/Movimientos: 0/)).toBeInTheDocument();
});

test("barajarFisherYates devuelve las mismas cartas sin modificar el array original", () => {
  const original = [1, 2, 3, 4, 5, 6, 7, 8];
  const copia = [...original];

  const barajadas = barajarFisherYates(original);

  expect(original).toEqual(copia);
  expect([...barajadas].sort((a, b) => a - b)).toEqual(copia);
});
