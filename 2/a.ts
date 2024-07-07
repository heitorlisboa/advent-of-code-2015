const input = await Deno.readTextFile('./input.txt');

const presents = input.split('\n');

const totalAmountOfWrappingPaper = presents.reduce(
  (wrappingPaperAccumulator, present) => {
    const [length, width, height] = present
      .split('x')
      .map((dimensionAsString) => parseInt(dimensionAsString));

    const differentSideAreas = [
      length * width,
      width * height,
      height * length,
    ];

    const smallestSideArea = Math.min(...differentSideAreas);

    /* Each different side of the box has an equal side on the opposite
    direction */
    const surfaceArea = differentSideAreas.reduce(
      (areaAccumulator, side) => areaAccumulator + 2 * side,
      0
    );

    return wrappingPaperAccumulator + surfaceArea + smallestSideArea;
  },
  0
);

console.log(totalAmountOfWrappingPaper);
