// All TAB BUTTONS
const tabOneButton = document.getElementById("tab-1");
const tabTwoButton = document.getElementById("tab-2");
const tabThreeButton = document.getElementById("tab-3");

// ALL TAB CONTENTS
const tabOneContent = document.getElementById("panel-1");
const tabTwoContent = document.getElementById("panel-2");
const tabThreeContent = document.getElementById("panel-3");

// Mobile Nav
const button = document.querySelector("#menu-btn");
const nav = document.querySelector("#mobilenav");
const logo = document.getElementById("logo");

// HANDLER FUNCTIONS ( 3 HANDLER FUNCTIONS )

// 1. Handler Function 1 to show and hide tab content

function handlerOneFxn() {
  // managing the tab content state
  const contents = [tabTwoContent, tabThreeContent];
  contents.forEach((item) => item.classList.add("hidden"));
  tabOneContent.classList.remove("hidden");
  // managing the button state
  const buttons = [tabTwoButton, tabThreeButton];
  buttons.forEach((item) => item.classList.remove("border-softRed"));
  tabOneButton.classList.add("border-softRed");
}

// 2. Handler Function 2 to show and hide tab content

function handlerTwoFxn() {
  // Managing the tab content state
  const contents = [tabOneContent, tabThreeContent];
  contents.forEach((item) => item.classList.add("hidden"));
  tabTwoContent.classList.remove("hidden");
  // managing the button state
  const buttons = [tabOneButton, tabThreeButton];
  buttons.forEach((item) => item.classList.remove("border-softRed"));
  tabTwoButton.classList.add("border-softRed");
}

// 3. Handler Function 3 to show and hide tab content

function handlerThreeFxn() {
  // Managing the tab content State
  const contents = [tabTwoContent, tabOneContent];
  contents.forEach((item) => item.classList.add("hidden"));
  tabThreeContent.classList.remove("hidden");
  // managing the button state
  const buttons = [tabTwoButton, tabOneButton];
  buttons.forEach((item) => item.classList.remove("border-softRed"));
  tabThreeButton.classList.add("border-softRed");
}
// 4. Handler function to toggle nav
function navToggle() {
  button.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
}

// EVENT LISTENERS
// Tab content togglers
tabOneButton.addEventListener("click", handlerOneFxn);
tabTwoButton.addEventListener("click", handlerTwoFxn);
tabThreeButton.addEventListener("click", handlerThreeFxn);
// Nav toggler
button.addEventListener("click", navToggle);

// Changing the logo of the mobile navigation
if (nav.classList.contains("flex")) {
  logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
} else {
  logo.setAttribute("src", "./images/logo-bookmark.svg");
}
