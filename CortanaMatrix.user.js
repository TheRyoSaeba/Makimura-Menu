// ==UserScript==
// @name         CortanaMatrix
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description Mafiamatrix Trainer
// @author       Cortana
// @match        https://mafiamatrix.com/*
// @grant       GM_xmlhttpRequest
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/tweakpane@3.0.7/dist/tweakpane.min.js
// ==/UserScript==
/*jslint evil: true */

(function () {

// create a container element for the Tweakpane menu
const container = document.createElement('div');
container.style.position = 'fixed';
container.style.top = '10px';
container.style.left = '10px';
document.body.appendChild(container);

// initialize Tweakpane
const pane = new Tweakpane.Pane({ title: 'CortanaMatrix - Press Insert', expanded: false });
pane.element.style.transform='scale(1.3)'
// append the Tweakpane menu to the container element
container.appendChild(pane.element);
     console.log('autoEarnChosenValue in localStorage:',
                   localStorage.getItem('autoEarnChosenValue'));
// set the z-index and position of the Tweakpane menu
pane.element.parentElement.style.zIndex = "100000";
pane.element.parentElement.style.position = "absolute";
pane.element.parentElement.style.left = "62%";
pane.element.parentElement.style.top = "40%";
pane.element.parentElement.style.transform = "translateY(-50%)";
// add a keyboard shortcut to show/hide the Tweakpane menu
document.addEventListener('keydown', function(event) {
  if (event.code === 'Insert') {
    pane.element.children[0].click();
  }
});
//style the menu
var style = document.createElement('style');
style.innerHTML = `
  .tweakpane {
    font-size: 1.5em;
     background-color: #000000;
  color: hsla(0, 0%, 80%, 1);
     font-family: Verdana, sans-serif;
  }

  .tweakpane-title-label {
    font-size: 12px;
    white-space: nowrap;
      font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

   :root {
     --tp-base-background-color: hsla(240, 69%, 40%, 0.80);
  --tp-base-shadow-color: hsla(0, 55%, 15%, 0.20);
  --tp-button-background-color: hsla(0, 0%, 80%, 1.00);
  --tp-button-background-color-active: hsla(0, 0%, 100%, 1.00);
  --tp-button-background-color-focus: hsla(0, 0%, 95%, 1.00);
  --tp-button-background-color-hover: hsla(0, 0%, 85%, 1.00);
  --tp-button-foreground-color: hsla(0, 0%, 0%, 0.80);
  --tp-container-background-color: hsla(0, 0%, 0%, 0.30);
  --tp-container-background-color-active: hsla(0, 0%, 0%, 0.60);
  --tp-container-background-color-focus: hsla(0, 0%, 0%, 0.50);
  --tp-container-background-color-hover: hsla(0, 0%, 0%, 0.40);
  --tp-container-foreground-color: hsla(0, 0%, 100%, 0.50);
  --tp-groove-foreground-color: hsla(0, 0%, 0%, 0.20);
  --tp-input-background-color: hsla(0, 0%, 0%, 0.30);
  --tp-input-background-color-active: hsla(0, 0%, 15%, 0.30);
  --tp-input-background-color-focus: hsla(0, 0%, 10%, 0.30);
  --tp-input-background-color-hover: hsla(0, 0%, 5%, 0.30);
  --tp-input-foreground-color: hsla(0, 0%, 100%, 0.50);
  --tp-label-foreground-color: hsla(0, 0%, 100%, 0.50);
  --tp-monitor-background-color: hsla(0, 0%, 0%, 0.30);
  --tp-monitor-foreground-color: hsla(0, 0%, 100%, 0.30);
  }

  .tweakpane-folder-header {
  color: hsla(210, 80%, 70%, 1);
}

.tweakpane-tab-label {
  color: hsla(210, 80%, 70%, 1);
}
`;
document.head.appendChild(style);
    //load folders
// Create the "Main Menu" tab
const tab = pane.addTab({
  pages: [
    {title: 'Main Menu'},
  ],
});

// Create the folders and add them to the "Main Menu" tab
const Earn_ = tab.pages[0].addFolder({
  title: 'Earns',
  expanded: false,
});


const Agg_ = tab.pages[0].addFolder({
  title: 'Aggravated Crime',
  expanded: false,
});

const CS_ = tab.pages[0].addFolder({
  title: 'Community Service',
  expanded: false,
});

const Drug_ = tab.pages[0].addFolder({
  title: 'Drug Works',
  expanded: false,
});



const config_ = tab.pages[0].addFolder({
  title: 'Config',
  expanded: false,
});



const tab1 = pane.addTab({
  pages: [
    {title: 'Restocks'},
  ],
    direction: 'horizontal',
});
// Add a page to the "Restocks" tab


// Add a folder for "Dog Pound" to the "Restocks" page
const dogFolder = tab1.pages[0].addFolder({
  title: 'Dog Pound',
  expanded: false,
});


// Add a folder for "Vehicle Restocks" to the "Restocks" page
const vehicleFolder = tab1.pages[0].addFolder({
  title: 'Vehicle Restocks',
  expanded: false,
});

const weaponFolder = tab1.pages[0].addFolder({
  title: 'Weapon Restocks',
  expanded: false,
});

 const casino_ = tab1.addPage({
  title: 'Casino',
});


    //load config checkbox
var recaptchaValue = localStorage.getItem('recaptcha') === 'true';
var recaptcha = config_.addInput({
  recaptcha: recaptchaValue
}, "recaptcha", {
  label: "Recaptcha",
});
function loadRecaptchaScript() {

}
function unloadRecaptchaScript() {
  // Implement unloading the recaptcha script
}

// Trigger event listener on page load
if (recaptchaValue) {
  loadRecaptchaScript();
}
recaptcha.on('change', function (value) {
  localStorage.setItem('recaptcha', value.value);
  if (value.value) {
    loadRecaptchaScript();
  } else {
    unloadRecaptchaScript();
  }
});
// Get Earns list
// Global variable to hold the filtered radio button values
let filteredRadioButtonValues = [];

// Function to get the filtered radio button values from local storage or fetch from server if not available or different
function getFilteredRadioButtonValues() {
  const storedValues = localStorage.getItem('filteredRadioButtonValues');
  if (storedValues) {
    const storedArray = JSON.parse(storedValues);
    fetch('https://mafiamatrix.com/income/earn.asp')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const radioButtons = htmlDoc.querySelectorAll('input[type="radio"]');
        const newValues = [];
        radioButtons.forEach(radioButton => {
          if (!radioButton.value.toLowerCase().includes('timeout')) {
            newValues.push(radioButton.value);
          }
        });
        if (JSON.stringify(newValues) !== JSON.stringify(storedArray)) {
          localStorage.setItem('filteredRadioButtonValues', JSON.stringify(newValues));
          filteredRadioButtonValues = newValues;
        } else {
          filteredRadioButtonValues = storedArray;
        }
        createDropdownAndCheckbox(filteredRadioButtonValues);
      })
      .catch(error => console.log('Error:', error));
  } else {
    fetch('https://mafiamatrix.com/income/earn.asp')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const radioButtons = htmlDoc.querySelectorAll('input[type="radio"]');
        const newValues = [];
        radioButtons.forEach(radioButton => {
          if (!radioButton.value.toLowerCase().includes('timeout')) {
            newValues.push(radioButton.value);
          }
        });
        localStorage.setItem('filteredRadioButtonValues', JSON.stringify(newValues));
        filteredRadioButtonValues = newValues;
        createDropdownAndCheckbox(filteredRadioButtonValues);
      })
      .catch(error => console.log('Error:', error));
  }
}

// Function to update the filtered radio button values every 30 minutes
function updateFilteredRadioButtonValues() {
  fetch('https://mafiamatrix.com/income/earn.asp')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, 'text/html');
      const radioButtons = htmlDoc.querySelectorAll('input[type="radio"]');
      const newValues = [];
      radioButtons.forEach(radioButton => {
        if (!radioButton.value.toLowerCase().includes('timeout')) {
          newValues.push(radioButton.value);
        }
      });
      // Update the local storage and the filteredRadioButtonValues variable only if the new values are different
      if (JSON.stringify(newValues) !== JSON.stringify(filteredRadioButtonValues)) {
        localStorage.setItem('filteredRadioButtonValues', JSON.stringify(newValues));
        filteredRadioButtonValues = newValues;
        console.log(filteredRadioButtonValues);
      }
    })
    .catch(error => console.log('Error:', error));
}

// Get the filtered radio button values when the page loads
getFilteredRadioButtonValues();

// Update the filtered radio button values every 30 minutes
setInterval(updateFilteredRadioButtonValues, 30 * 1000); // 30 seconds in milliseconds













  async function isEarnTimerReady() {
    const script = `
        (function() {
            const timer = document.querySelector('form[name="earn"] .donation_timer');
            return timer && timer.textContent.trim() === "Ready";
        })();
    `;
    const result = await eval(script);
    return !!result;
}




async function performAutomaticEarn() {
  // Check if the earn timer is ready
  const isReady = await isEarnTimerReady();
  if (isReady) {
    console.log("The Earn timer is ready!");

    // Get the selected earn from the dropdown (if available) or from local storage (if not)
    const chosenEarn = localStorage.getItem('autoEarnChosenValue') || earnController.chosenEarn;
    if (filteredRadioButtonValues.includes(chosenEarn)) {
      // Create an iframe to access the earn page
      const iframe = document.createElement('iframe');
      iframe.src = 'https://mafiamatrix.com/income/earn.asp';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Wait for the iframe to load
      iframe.onload = function() {
        // Access the iframe's document
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        // Click on the radio button for the chosen earn value
        const earnRadio = iframeDoc.querySelector(`input[type=radio][value="${chosenEarn}"]`);
        earnRadio.checked = true;
        console.log('Chosen earn radio:', earnRadio);

        // Submit the form
        const workSubmit = iframeDoc.querySelector('[name="B1"]');
        workSubmit.click();

        // Send a message to the main page that the form has been submitted
        window.top.postMessage('earnFormSubmitted', '*');
      };
    } else {
      console.log('Invalid autoEarnChosenValue:', chosenEarn);
    }
  } else {
    console.log("The Earn timer is not ready yet, waiting...");
  }
}

window.addEventListener('message', async (event) => {
  if (event.data === 'earnFormSubmitted') {
    // Load the same page in a hidden iframe to get the updated timer value
    const hiddenIframe = document.createElement('iframe');
    hiddenIframe.src = window.location.href;
    hiddenIframe.style.display = 'none';
    document.body.appendChild(hiddenIframe);

    // Wait for the hidden iframe to load
    hiddenIframe.onload = function() {
      // Access the hidden iframe's document
      const hiddenIframeDoc = hiddenIframe.contentDocument || hiddenIframe.contentWindow.document;

      // Get the updated timer value from the hidden iframe
      const updatedTimerValue = hiddenIframeDoc.querySelector('form[name="earn"] .donation_timer').textContent;

      // Update the timer element on the main page
      document.querySelector('form[name="earn"] .donation_timer').textContent = updatedTimerValue;

      // Remove the hidden iframe
      document.body.removeChild(hiddenIframe);
    };
  }
});
function createDropdownAndCheckbox() {
  const dropdownOptions = filteredRadioButtonValues.map(value => {
    return { text: value, value: value };
  });

  const lastChosenEarnValue = localStorage.getItem('autoEarnChosenValue');
  const earnController = {
    chosenEarn: lastChosenEarnValue && filteredRadioButtonValues.includes(lastChosenEarnValue)
      ? lastChosenEarnValue
      : filteredRadioButtonValues.length > 0 ? filteredRadioButtonValues[0] : null,
    autoEarn: localStorage.getItem('autoEarn') === 'true',
  };

  const earnInput = Earn_.addInput(earnController, 'chosenEarn', {
    options: dropdownOptions,
    label: 'Choose Earn',
  });
 // Add an event listener to handle selection changes
earnInput.on('change', (newValue) => {
  console.log('Selected option:', newValue.value);
  earnController.chosenEarn = newValue.value;
  // Update the saved value in local storage if the "Auto Earn" checkbox is checked
  if (earnController.autoEarn) {
    localStorage.setItem('autoEarnChosenValue', newValue.value);

  }
});


 // Get the value of the "Auto Earn" checkbox from local storage
const autoEarnChecked = localStorage.getItem('autoEarn') === 'true';


// Add the "Auto Earn" checkbox to the Earn folder
const autoEarnCheckbox = Earn_.addInput(earnController, 'autoEarn', {
  label: 'Auto Earn',
});

// Add an event listener to update the value of autoEarnChosenValue in localStorage when autoEarnCheckbox is checked
let intervalId;
intervalId = setInterval(function() {
  if (localStorage.getItem("autoEarn") == 'true') {
    performAutomaticEarn(); // Call performAutomaticEarn every 10 seconds if autoEarn is checked
  }
}, 10000);

autoEarnCheckbox.on('change', (value) => {
  console.log('Auto Earn checkbox changed:', value.value);
  localStorage.setItem('autoEarn', value.value);
  localStorage.setItem('autoEarnChosenValue', earnController.chosenEarn);
  if (value.value) {
    console.log('Saved autoEarnChosenValue to local storage:', earnController.chosenEarn);
    performAutomaticEarn(); // run immediately when autoEarn is checked
  }
});


// Set the value of the dropdown directly using the lastChosenEarnValue
if (lastChosenEarnValue) {
  earnInput.setValue(lastChosenEarnValue);
}





    }

}




)();
