class Home {
  constructor(owned = false, affordable = false, utility_bills_current = false, heated = false, telecomms = false) {
    this.owned = owned; // Boolean. This represents if the family owns their home or rents the property
    this.affordable = affordable; // Boolean. Represents if their housing expenses are greater than 1/3 their net income
    this.utility_bills_current = utility_bills_current; // Boolean. Represents that gas, electric, water, etc bills are paid
    this.heated = heated; // Boolean. If the home is heated or not.
    this.telecomms = telecomms; // Boolean. Does the home have access to the internet or a land line?  
  }
}