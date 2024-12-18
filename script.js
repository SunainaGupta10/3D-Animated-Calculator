  // Modern Calculator Functions
  function appendToModernDisplay(value) {
    const display = document.getElementById('modern-display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearModernDisplay() {
    document.getElementById('modern-display').innerText = '0';
}

function calculateModern() {
    const display = document.getElementById('modern-display');
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}