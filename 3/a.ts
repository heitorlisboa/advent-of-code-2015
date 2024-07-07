const input = await Deno.readTextFile('./input.txt');

const currentSantaPosition = { x: 0, y: 0 };

const housesSantaDeliveredPresents = new Set<string>();

// Santa delivers present to the starting house
housesSantaDeliveredPresents.add('0,0');

const moveFunctions = {
  '^': () => currentSantaPosition.y--,
  v: () => currentSantaPosition.y++,
  '<': () => currentSantaPosition.x--,
  '>': () => currentSantaPosition.x++,
};

for (const direction of input) {
  const correspondingMoveFunction =
    moveFunctions[direction as keyof typeof moveFunctions];
  correspondingMoveFunction();

  housesSantaDeliveredPresents.add(
    `${currentSantaPosition.x},${currentSantaPosition.y}`
  );
}

console.log(housesSantaDeliveredPresents.size);
