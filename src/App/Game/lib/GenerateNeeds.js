import {shuffle} from '../../helpers.js'

export default function NeedsGenerator(family) {
  let needs = [];
  family.food <= 25 && needs.push("food");
  family.housing <= 25 && needs.push("housing");
  family.health <= 25 && needs.push("health");
  family.income <= 25 && needs.push("income");
  family.wellbeing <= 25 && needs.push("wellbeing");

  let i = needs.length > 2 ? 2 : needs.length; //max needs
  let familyNeeds = [];

  while (i > 0) {
    familyNeeds.push(shuffle(needs).pop());
    i -= 1
  }
  return familyNeeds
}