function valueButton(z) {
  calculatorForm.screen.value += z.value;
}
function Clear() {
  calculatorForm.screen.value = "";
}
function calculate() {
  calculatorForm.screen.value = eval(calculatorForm.screen.value);
}
