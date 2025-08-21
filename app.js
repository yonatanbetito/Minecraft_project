const contiener = document.getElementById("contiener");
for (let index = 0; index < 100 * 30; index++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.id = index + 1
  if (index >= 100 * 10 && index < 100 * 11) {
    div.classList.add("grass");
  } else if (index >= 100 * 11 && index < 100 * 16) {
    div.classList.add("dirt");
  } else if (index >= 100 * 16 && index < 100 * 28) {
    div.classList.add("stone");
  } else if (index >= 100 * 28) {
    div.classList.add("bedrock");
  }
  contiener.appendChild(div)

}

const listId = []
const leastIndex = []
const numbers = [];
function addId(startBotonPart, endBotonPart, startTopPart, endTopPart) {
  for (let i = startBotonPart; i <= endBotonPart; i++) {
    listId.push(i)
  }
  for (let j = startTopPart; j <= endTopPart; j++) {
    listId.push(j)
  }
}

for (let i = 0; i < 4; i++) {
  const num = Math.floor(Math.random() * (1094 - 1006 + 1)) + 1006;
  numbers.push(num);
  let idTrunk = 0
  const higtThree = 3 + Math.floor(Math.random() * 2);
  const rout = [numbers[i]]
  for (idTrunk = 0; idTrunk < higtThree; idTrunk++) {
    const IndexTrunk = rout[idTrunk] - 100;
    rout.push(IndexTrunk)
    const pars = String(IndexTrunk)
    let trunk = document.getElementById(pars)
    trunk.classList.add("trunk");
  }
  leastIndex.push(rout[idTrunk])

  for (let idxSell = 0; idxSell < leastIndex.length; idxSell++) {
    let start = leastIndex[idxSell] - 103
    let end = leastIndex[idxSell] - 97

    for (let level = 0; level < 3; level++) {
      const nextStart = start - 100
      const nextEnd = end - 100
      addId(start, end, nextStart, nextEnd)
      start = nextStart - 99
      end = nextEnd - 101
    }
  }
}
for (let idSell = 0; idSell <= listId.length; idSell++) {
  const parsLeaves = String(listId[idSell])
  let leaves = document.getElementById(parsLeaves)
  leaves.classList.add("leaves")
}





  // for (let idxSell = 0; idxSell < leastIndex.length; idxSell++) {
  // const starOnePart = leastIndex[idxSell] - 103
  // const endOnePart = leastIndex[idxSell] - 97
  // const startSemePart = starOnePart - 100
  // const endsemePart = endOnePart - 100
  // addId(starOnePart, endOnePart, startSemePart, endsemePart)

  // const startSecendPart = startSemePart - 99
  // const endSecendPart = endsemePart - 101
  // const startSemePart2 = startSecendPart - 100
  // const endSemePart2 = endSecendPart - 100
  // addId(startSecendPart, endSecendPart, startSemePart2, endSemePart2)

  // const startThreePart = startSemePart2 - 99
  // const andThreePart = endSemePart2 - 101
  // const startSemePart3 = startThreePart - 100
  // const endSemePart3 = andThreePart - 100
  // addId(startThreePart, andThreePart, startSemePart3, endSemePart3)
// }