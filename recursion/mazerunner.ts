const foo = function (n) {
  // base case
  if (n === 1) {
    return 1;
  }
  // recurse
  return n + foo(n - 1);
};

//

/*

STEP 1: Pre
	n + 
STEP 2: Recurse
	n - 1 (down until base case)
STEP 3: Post

*/

// PATH FINDER
const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const walk = function (
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // Base Case
  // 1. off grid
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // 2. on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // 3. at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // 4. we've seen it
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // recursive case
  // Pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // Recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true;
    }
  }
  // Post
  path.pop();

  return false;
};

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  /*
base case:
1. off grid/map
2. it's a wall
3. it's the end
4. we've seen this spot before

recursive step:
check all four directions

*/

  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
