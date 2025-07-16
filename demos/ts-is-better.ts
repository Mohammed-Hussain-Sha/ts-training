let x: number = 10;

let y = 20; 

function calcArea(length: number, breadth: number): number {
  let area: number = length * breadth;
  return area;
}

let rectArea: number = calcArea(4, 5);
console.log(rectArea);

rectArea = calcArea(30, 80);

rectArea = calcArea(30, 80);