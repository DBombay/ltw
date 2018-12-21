export function shuffle(array) {
  let ctr = array.length, temp, index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = array[ctr];
    array[ctr] = array[index];
    array[index] = temp;
  }
  return array;
}

export const times = x => f => {
  if (x > 0) {
    f();
    times (x - 1) (f)
  }
};