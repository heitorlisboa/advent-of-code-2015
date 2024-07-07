const input = await Deno.readTextFile('./input.txt');

const presents = input.split('\n');

let totalAmountOfWrappingPaper = 0;

presents.forEach((present) => {
  const [length, width, height] = present
    .split('x')
    .map((dimensionAsString) => parseInt(dimensionAsString));

  const differentSideAreas = [length * width, width * height, height * length];

  let smallestSideArea = Infinity;

  differentSideAreas.forEach((differentSideArea) => {
    if (differentSideArea < smallestSideArea) {
      smallestSideArea = differentSideArea;
    }
  });

  let surfaceArea = 0;

  differentSideAreas.forEach((differentSideArea) => {
    surfaceArea += 2 * differentSideArea;
  });

  totalAmountOfWrappingPaper += surfaceArea + smallestSideArea;
});

console.log(totalAmountOfWrappingPaper);
