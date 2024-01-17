// const a = [1,3];
// const [b,c,...d] = a;
// console.log(b,c);
const gameEvents = new Map([
    [17, 'Goal'],
    [36, 'Substitution'],
    [47, 'Goal'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'Goal'],
    [80, 'Goal'],
    [92, 'Yellow card'],
]);

console.log(gameEvents.keys());
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);