var foo = 1;
function bar() {
  if (foo === 0) {
    var foo = 10;
  }
  console.log(foo)
}
bar();