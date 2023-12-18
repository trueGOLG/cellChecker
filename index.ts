console.log('start')

interface DataPoint {
    name: string
    x: number
    y: number
}

const out = (val: string | number) => console.log(val)
const intDiv = (num: number, div: number) => Math.floor(num / div)


const cellWidth = 6    
const cellHeight = 4

const fieldSize_X = 12
const fieldSize_Y = 8

const max_X = 0.5 * fieldSize_X
const max_Y = 0.5 * fieldSize_Y

const rx = max_X / (0.5 * cellWidth)
const ry = max_Y / (0.5 * cellHeight)

const getCell = (dp: DataPoint) => {
    const xn = intDiv(dp.x + max_X, rx)
    const yn = intDiv(dp.y + max_Y, ry)
    const cellN = cellWidth * (cellHeight - yn) - cellWidth + xn + 1

    // console.log(`${dp.name} - x': ${xn} ; y: ${yn}  --- ${cellN}`)
    console.log(`${dp.name} - x': ${xn} ; y: ${yn}  --- ${cellN}`)
    
}

const dataPoints: DataPoint[] = [
    // { name: 'a', x: -3, y: 3 },
    // { name: 'b', x: -3, y: 2.5 },
    // { name: 'c', x: -1, y: 1 },
    // { name: 'd', x: 0.8, y: -1 },
    // { name: 'e', x: 4.2, y: -3.5 },
    // { name: 'f', x: 5, y: 3.2 },
    // { name: 'g', x: 4.2, y: 3.5 },
    // { name: 'h', x: -5, y: -2.5 },
    // { name: 'i', x: -3.1, y: -2.5 },
    // { name: 'x', x: 0, y: 0 },
    // { name: 'y', x: 6, y: -4 },
    { name: 'x1', x: -6, y: -4 },
    { name: 'x2', x: -6, y: -4 },
    { name: 'x3', x: -6, y: 0 },
    { name: 'x4', x: -6, y: 4 },
    { name: 'x5', x: -2, y: 0 },
    { name: 'x6', x: -4, y: 2 },
]


dataPoints.forEach(getCell)




