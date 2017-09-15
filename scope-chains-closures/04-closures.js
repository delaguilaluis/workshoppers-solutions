// /* eslint-disable no-unused-vars, no-undef */
// function foo () {
//   var bar = 1

//   function zip () {
//     var quux = 2
//     bar = true
//   }

//   quux = 3

//   return zip
// }

function foo () {
  var bar
  quux = 1

  function zip () {
    var quux = 3
    bar = true
  }

  return zip
}
