const input = await Deno.readTextFile('./input.txt');

const currentPosition = {
  santa: { x: 0, y: 0 },
  roboSanta: { x: 0, y: 0 },
};

const housesSantaDeliveredPresents = new Set<string>();

// Both Santa and Robo-Santa deliver present to the starting house
housesSantaDeliveredPresents.add('0,0');

const moveFunctions = {
  '^': () => currentPosition[santaWhoIsMoving].y--,
  v: () => currentPosition[santaWhoIsMoving].y++,
  '<': () => currentPosition[santaWhoIsMoving].x--,
  '>': () => currentPosition[santaWhoIsMoving].x++,
};

let santaWhoIsMoving: keyof typeof currentPosition = 'santa';
for (const direction of input) {
  const correspondingMoveFunction =
    moveFunctions[direction as keyof typeof moveFunctions];
  correspondingMoveFunction();

  housesSantaDeliveredPresents.add(
    `${currentPosition[santaWhoIsMoving].x},${currentPosition[santaWhoIsMoving].y}`
  );

  // Changing which Santa will move next
  santaWhoIsMoving = santaWhoIsMoving === 'santa' ? 'roboSanta' : 'santa';
}

console.log(housesSantaDeliveredPresents.size);
