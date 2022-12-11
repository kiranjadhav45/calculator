function valueButton(e) {
  calculatorForm.screen.value += e.value;
}
function Clear() {
  calculatorForm.screen.value = "";
}
function calculate() {
  calculatorForm.screen.value = eval(calculatorForm.screen.value);
}
