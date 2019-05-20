'use strict';


const store = {
  currentPrice: 0,
  currentTipPerc: 0,
  currentTaxPerc: 0,
  tipTotal: 0,
  mealCount: 0,
};

function updateCurrentMeal(price, tip, tax) {
  store.currentPrice = parseFloat(price);
  store.currentTipPerc = parseFloat(tip);
  store.currentTaxPerc = parseFloat(tax);
}

function renderPage() {

}

function handleFormSubmit() {
  $('#js-meal-price-form').submit(function(e){
    e.preventDefault();
    console.log('formsubmitted');
    const tip = $('#tip-input').val();
    const tax = $('#tax-input').val();
    const price = $('#price-input').val();
    $('#price-input').val('');
    $('#tax-input').val('');
    $('#tip-input').val('');
    updateCurrentMeal(price, tip, tax);
    updateTotals(tip);
  });
  
}

function updateTotals(tip){
  store.tipTotal += parseFloat(tip);
  store.mealCount++;
}

function handleFormCancel() {
  $('#js-meal-price-form').on('click', '.cancel-button', function(e){
    e.preventDefault();
    console.log('form cancelled');
  
    $('#price-input').val('');
    $('#tax-input').val('');
    $('#tip-input').val('');
    
  });
}





function main() {
  handleFormSubmit();
  handleFormCancel();
}

$(main());
