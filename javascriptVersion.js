
let image = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 2, 2, 2, 0, 0, 1, 1, 1, 0],
  [0, 2, 2, 2, 1, 1, 1, 1, 1, 0],
  [0, 2, 2, 2, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
const allNeighbors=( matrix, column, row, value )=>{
  let neighbors = [];
  if(matrix[row][column+1]==1 && matrix[row][column-1]){
    neighbors.push(true)
  };
  if(matrix[row+1][column]==value && matrix[row-1][column]){
    neighbors.push(true)
  };
  if(matrix[row+1][column+1]==value && matrix[row-1][column+1]){
    neighbors.push(true)
  };
  if(matrix[row-1][column-1]==value && matrix[row+1][column-1]){
    neighbors.push(true)
  };
  if(neighbors.length==4){
    return true
  };
  return false;
};

const centerFinder = (matrix) => {
  let centerCoords = [];
  for( rows=0; rows < 10 ; rows++){
    for(columns=0; columns < 10 ; columns++){
      if(matrix[rows][columns]==1){
        if(allNeighbors(matrix,columns,rows,1)){
          centerCoords.push([columns,rows]);
        };
      };
    };
  };
  console.log(centerCoords)
  return centerCoords
}
centerFinder(image)