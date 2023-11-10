//  Question 2....The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings
function budget(ati) {
    // Calculate amounts based on the 50-30-20 strategy
    const needs = 0.5 * ati;
    const wants = 0.3 * ati;
    const savings = 0.2 * ati;
  
    // Return an object with the calculated amounts
    return {
      needs: needs,
      wants: wants,
      savings: savings
    };
  }
  
  // Example usage
  const afterTaxIncome = 10000; // Replace with the actual after-tax income
  const budgetResult = budget(afterTaxIncome);
  
  console.log('Needs:', budgetResult.needs);
  console.log('Wants:', budgetResult.wants);
  console.log('Savings:', budgetResult.savings);
  