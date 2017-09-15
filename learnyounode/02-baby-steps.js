const result = process.argv.map((arg) => Number(arg))
  .filter((arg) => !Number.isNaN(arg))
  .reduce((accumulator, arg) => {
    accumulator += arg
    return accumulator
  }, 0)

console.log(result)
