let promise = fetch('http:90.110.218.245:5003/api/avis')
  .then(response => response.json())
  .then(data => {
    let avis = data.data

    const { Securite, Balisage, Interets, Services } = avis[i].attributes
  })

const arr = [4.5, 5, 2, 4]

function numAverage(a) {
  let b = a.length,
    c = 0,
    i = 0
  for (i = 0; i < b; i++) {
    c += Number(a[i])
  }
  return c / b
}
console.log(numAverage(arr))
