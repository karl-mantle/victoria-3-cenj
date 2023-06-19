var wealth = [];

for (var i = 1; i <= 99; i++) {
  wealth[i] = {
    // Base function for political strength, gets modified further later on
    political_strength: Math.round((1.4**i * 3.0))/100,
    // This is the total cost pops will pay for everything combined at base level.
    total_expenses: Math.round((1.1**i) * 140.0)/1,
    goods: {
      // add any new pop needs within this block. 
      // Use (i - x) when need should only appear at level x + 1 
      popneed_simple_clothing: i * 0.2 + 20,
      popneed_basic_food: i * -0.2 + 128 ,
      popneed_heating: i * -0.1 + 11,
      popneed_intoxicants: i * 0.1 + 20,
      popneed_crude_items: 1.5 * (i - 4),
      popneed_household_items: 2 * (i - 9),
      popneed_standard_clothing: 3 * (i - 9),
      popneed_services: 5 * (i - 9),
      popneed_luxury_drinks: 5 * (i - 14),
      popneed_luxury_items: 15 * (i - 14),
      popneed_free_movement: 5 * (i - 14),
      popneed_luxury_food: 5 * (i - 19),
      popneed_communication: 5 * (i - 19),
      popneed_art: 20 * (i - 29),
      popneed_entertainment: 2 * (i - 9),
      popneed_finance: 0.75 * (i - 9),
      popneed_medicine: i * 0.1 + 15,
    }
  }
}

for (var i = 1; i <= 99; i++) {
  console.log(`wealth_${i} = `, wealth[i]);
}

// Specify rules to replace lower level needs here. 
// The higher level needs still need to be defined above
function upgradeNeeds(wealth) {
    wealth.goods.popneed_basic_food -= Math.max(0,wealth.goods.popneed_luxury_food)
    wealth.goods.popneed_crude_items -= Math.max(0,wealth.goods.popneed_household_items * 2)
    wealth.goods.popneed_simple_clothing -= Math.max(0,wealth.goods.popneed_standard_clothing)
    wealth.goods.popneed_standard_clothing -= Math.max(0,wealth.goods.popneed_luxury_items/2 + wealth.goods.popneed_art)
    wealth.goods.popneed_household_items -= Math.max(0,wealth.goods.popneed_luxury_items/2 + wealth.goods.popneed_art)
  
    return wealth;
  }

function calculateNeeds(wealth) {
    var sum = 0;
    // Here we are trying to get close to the political power curve of vanilla
    if (wealth.political_strength > 1){
        wealth.political_strength = Math.pow(wealth.political_strength,0.9)
        wealth.political_strength = Math.round(wealth.political_strength * 10)/10
    }
    if (wealth.political_strength > 20){
        wealth.political_strength = Math.pow(wealth.political_strength/20,0.5)*20
        wealth.political_strength = Math.round(wealth.political_strength )
    }
    if (wealth.political_strength > 30){
        wealth.political_strength = Math.pow(wealth.political_strength/30,0.7)*30
        wealth.political_strength = Math.round(wealth.political_strength )
    }
    if (wealth.political_strength > 100){
        wealth.political_strength = Math.pow(wealth.political_strength/100,0.7)*100
        wealth.political_strength = Math.round(wealth.political_strength )
    }
    if (wealth.political_strength > 200){
        wealth.political_strength = Math.round(wealth.political_strength /5)*5
    }
    if (wealth.political_strength > 400) {
        wealth.political_strength = Math.pow(wealth.political_strength/400,0.5)*400
        wealth.political_strength = Math.round(wealth.political_strength /5)*5
    }
    if (wealth.political_strength > 1000) {
        wealth.political_strength = Math.pow(wealth.political_strength/1000,0.6)*1000
        wealth.political_strength = Math.round(wealth.political_strength /25)*25
    }
    for (var key in wealth.goods) {
      // This prevents tiny needs.
      if (wealth.goods[key] > 1){
        wealth.goods[key] += 15
      }
      // This avoids negative values (will cause issues with sum)
      wealth.goods[key] = Math.max(0,wealth.goods[key]);
    }
    for (var key in wealth.goods) {
      sum += wealth.goods[key];
    }
    // And here we are balancing all needs to the expense cost of the respective wealth levels
    for (var key in wealth.goods) {
      wealth.goods[key] = Math.round(wealth.goods[key] / sum * wealth.total_expenses);
    }
  
  
    return wealth;
  }
  
  for (var i = 1; i <= 99; i++) {
    wealth[i] = upgradeNeeds(wealth[i]);
    wealth[i] = calculateNeeds(wealth[i]);
    console.log(`wealth_${i} = `, wealth[i]);
  }
  var fs = require('fs');

  function writeToFile(wealth) {
    var content = '';
    for (var i = 1; i <= 99; i++) {
      content += `wealth_${i} = {\n`;
      content += `\tpolitical_strength = ${wealth[i].political_strength}\n`;
      content += `\tgoods = {\n`;
      for (var key in wealth[i].goods) {
        if (wealth[i].goods[key] > 0)
            content += `\t\t${key} = ${wealth[i].goods[key]}\n`;
      }
      content += `\t}\n`;
      content += `}\n`;
    }
  
    // Target file, save folder depends on where you run this script.
    fs.writeFile("01_buy_packages.txt", content, function(err) {
      if (err) {
        console.log(err);
      }
      console.log("The file was saved!");
    });
  }
  
  writeToFile(wealth);