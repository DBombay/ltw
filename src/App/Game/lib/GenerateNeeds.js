export default function NeedsGenerator(family) {
  let needs = [];
  family.foodStat <= 25 && needs.push("food");
  family.housingStat <= 25 && needs.push("housing");
  family.healthStat <= 25 && needs.push("health");
  family.incomeStat <= 25 && needs.push("income");
  family.wellbeingStat <= 25 && needs.push("wellbeing");

  let i = needs.length > 2 ? 2 : needs.length; //max needs
  let familyNeeds = [];

  while (i > 0) {
    familyNeeds.push(shuffle(needs).pop());
    i -= 1
  }
  return familyNeeds
}

function shuffle(array) {
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