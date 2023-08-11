const incremente = document.getElementById("incremente");
const decremente = document.getElementById("decremente");
const result = document.getElementById("result");

function createIncrementer(initialValue) {
  let value = initialValue;
  function increment() {
    value++;
    return value;
  }
  return increment;
}

function createDecrementer(initialValue) {
  let value = initialValue;
  function decrement() {
    value--;
    return value;
  }
  return decrement;
}

incremente.addEventListener("click", () => {
    const incrementAction = createIncrementer(parseInt(result.textContent));
  result.textContent = incrementAction();
});

decremente.addEventListener("click", () => {
    const decrementAction = createDecrementer(parseInt(result.textContent));
  result.textContent = decrementAction();
});
