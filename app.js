// https://www.omnicalculator.com/finance/nsfr

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const NSFRRadio = document.getElementById('NSFRRadio');
const availablestablefundingRadio = document.getElementById('availablestablefundingRadio');
const requiredstablefundingRadio = document.getElementById('requiredstablefundingRadio');

let NSFR;
let availablestablefunding = v1;
let requiredstablefunding = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

NSFRRadio.addEventListener('click', function() {
  variable1.textContent = 'Available stable funding';
  variable2.textContent = 'Required stable funding';
  availablestablefunding = v1;
  requiredstablefunding = v2;
  result.textContent = '';
});

availablestablefundingRadio.addEventListener('click', function() {
  variable1.textContent = 'NSFR';
  variable2.textContent = 'Required stable funding';
  NSFR = v1;
  requiredstablefunding = v2;
  result.textContent = '';
});

requiredstablefundingRadio.addEventListener('click', function() {
  variable1.textContent = 'NSFR';
  variable2.textContent = 'Available stable funding';
  NSFR = v1;
  availablestablefunding = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(NSFRRadio.checked)
    result.textContent = `NSFR = ${computeNSFR().toFixed(2)}`;

  else if(availablestablefundingRadio.checked)
    result.textContent = `Available stable funding = ${computeavailablestablefunding().toFixed(2)}`;

  else if(requiredstablefundingRadio.checked)
    result.textContent = `Required stable funding = ${computerequiredstablefunding().toFixed(2)}`;
})

// calculation

function computeNSFR() {
  return (Number(availablestablefunding.value) / Number(requiredstablefunding.value)) * 100;
}

function computeavailablestablefunding() {
  return (Number(NSFR.value) / 100) * Number(requiredstablefunding.value);
}

function computerequiredstablefunding() {
  return Number(availablestablefunding.value) / (Number(NSFR.value) / 100);
}