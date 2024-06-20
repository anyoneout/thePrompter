
function taxCalculatorCheck() {
    let firstItemCost;
    let secondItemCost;
    let taxPercentage = 0.08;
    firstItemCost = prompt("How much is your first item?");
    secondItemCost = prompt("How much is your second item?");
    let firstItemCostNumber = Number(firstItemCost);
    let secondItemCostNumber = Number(secondItemCost);

    taxCalculatorHeader.innerHTML = `The cost for both items is $${(firstItemCostNumber + secondItemCostNumber)}`;
    taxCalculatorParagraph.innerHTML = `The total tax for both items is $${(firstItemCostNumber + secondItemCostNumber)*taxPercentage}.`;
    
}
taxCalculatorButton.onclick = taxCalculatorCheck;