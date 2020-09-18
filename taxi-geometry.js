const blocksAway = function(directions) {
  // Put your solution here
  
  let coordinates = [0,0];
  let face;
  let turn = directions[0];
  let value = directions[1];
  

  if (turn === 'left') {
    face = 'north';
    coordinates[1] = coordinates[1] + value;
  } else {
    face = 'east';
    coordinates[0] = coordinates[0] + value;
  }
  


  let i = 2;
  while (i < directions.length) {
    
    turn = directions[i];
    value = directions[i + 1];
    if (face === 'north') {
      if (turn === 'right') {
        coordinates[0] = coordinates[0] + value;
        face = 'east';
      } else {
        coordinates[0] = coordinates[0] - value;
        face = 'west';
      }

    } else if (face === 'east') {
      if (turn === 'right') {
        coordinates[1] = coordinates[1] - value;
        face = 'south';
      } else {
        coordinates[1] = coordinates[1] + value;
        face = 'north';
      }
      
    } else if (face === 'south') {
      if (turn === 'right') {
        coordinates[0] = coordinates[0] - value;
        face = 'east;';
      } else {
        coordinates[0] = coordinates[0] + value;
        face = 'west';
      }

    } else if (face === 'west') {
      if (turn === 'right') {
        coordinates[1] = coordinates[1] + value;
        face = 'north';
      } else {
        coordinates[1] = coordinates[1] - value;
        face = 'south';
      }

    }
    i = i + 2;
  }
  let finalObject = {east: coordinates[0], north: coordinates[1]};
  return finalObject;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));