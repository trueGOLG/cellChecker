console.log('start')

interface DataPoint {
    name: string
    x: number
    y: number
}

const cw = 6
const ch = 4
const max_X = 6
const max_Y = 4
const sw = 0.5 * (0.5 * max_X)
const sh = 0.5 * (0.5 * max_Y)

const intDiv = (num, div) => Math.floor(num / div)
const getCell = (dp: DataPoint) => {
    const xn = intDiv(dp.x + sw, 2)
    const yn = intDiv(dp.y + sh, 2)
    const cellN = sw * (sh - yn) - sw + xn + 1

    console.log(`${dp.name} - x': ${xn} ; y: ${yn}  --- ${cellN}`)
}

const dataPoints: DataPoint[] = [
    { name: 'a', x: -3, y: 3 },
    { name: 'b', x: -3, y: 2.5 },
    { name: 'c', x: -1, y: 1 },
    { name: 'd', x: 0.8, y: -1 },
    { name: 'e', x: 4.2, y: -3.5 },
    { name: 'f', x: 5, y: 3.2 },
    { name: 'g', x: 4.2, y: 3.5 },
    { name: 'h', x: -5, y: -2.5 },
    { name: 'i', x: -3.1, y: -2.5 },
    { name: 'x', x: 0, y: 0 },
    { name: 'y', x: 6, y: 0 },
    { name: 'z', x: 6, y: -4 },
]


dataPoints.forEach(getCell)




