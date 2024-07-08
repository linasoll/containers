/* eslint-disable no-undef */
import { Team } from "../file";

class Character {
    constructor(name) {
        this.name = name;
    }
}

const team = new Team;

const playerOne = new Character("First");
const playerTwo = new Character("Second");
const playerThree = new Character("Third");

test("Добавление игрока", () => {
    team.add(playerOne);
    expect(team.members.has(playerOne)).toBe(true)
})

test("Дублирование персонажа", () => {
    expect(() => {
        team.add(playerOne);
        team.add(playerOne);
    }).toThrow("Этот персонаж уже добавлен в команду");
})

test("Добавление нескольких персонажей", () => {
    team.addAll(playerOne, playerTwo, playerThree);
    expect(team.members.has(playerOne)).toBe(true);
    expect(team.members.has(playerOne)).toBe(true);
    expect(team.members.has(playerOne)).toBe(true);
})

test("Преобразование в массив", () => {
    team.addAll(playerOne, playerTwo, playerThree)
    expect(team.toArray()).toEqual([playerOne, playerTwo, playerThree])
});