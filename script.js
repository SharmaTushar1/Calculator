



const numButtons = $(".num");
// const operators = $(".operator");
const delButton = $(".delete");
const resetButton = $(".k1");
const equalButton = $(".k2");

let screenVal = "";
let flag = 0;

//also add property for del long press clear all, key press calculations bugs

numButtons.on("click", function(event) {

    

    if (flag == 1) {
        
        screenVal = "";
        $("#screen").text("");
        screenVal += this.innerHTML;
        $("#screen").text(screenVal);
        flag = 0;
    } else {
    screenVal += this.innerHTML;
    $("#screen").text(screenVal);
    }

})


equalButton.on("click", function () {
    screenVal = screenVal.replace('x','*');
    screenVal = eval(screenVal.replace(/^0+/, "")).toFixed(1);
    $("#screen").text(screenVal);
    flag = 1;
  });

resetButton.on("click", function() {
    $("#screen").text("");
    screenVal = "";
})

delButton.on("click", function() {
    screenVal = screenVal.substring(0,screenVal.length-1);
    $("#screen").text(screenVal);
})
$(".two").on("click", () => setTheme("theme-light"));
$(".one").on("click", () => setTheme("theme-default"));
$(".three").on("click", () => setTheme("theme-dark"));
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
} else if(localStorage.getItem('theme') === 'theme-light') {
    setTheme('theme-light');
} else setTheme('theme-default');

