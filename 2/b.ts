const input = await Deno.readTextFile('./input.txt');

const presents = input.split('\n');

const totalAmountOfRibbon = presents.reduce((ribbonAccumulator, present) => {
  const [length, width, height] = present
    .split('x')
    .map((dimensionAsString) => parseInt(dimensionAsString));

  const differentSidePerimeters = [
    length * 2 + width * 2,
    width * 2 + height * 2,
    height * 2 + length * 2,
  ];

  const smallestSidePerimeter = Math.min(...differentSidePerimeters);

  const volume = length * width * height;

  return ribbonAccumulator + volume + smallestSidePerimeter;
}, 0);

console.log(totalAmountOfRibbon);
