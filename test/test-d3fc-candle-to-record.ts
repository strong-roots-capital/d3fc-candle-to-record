import test from 'ava'

import Candle from 'd3fc-candle'

/**
 * Library under test
 */

import candleToRecord from '../src/d3fc-candle-to-record'

function getCandle(): Candle {
    return {
        date: new Date(2018, 0, 1),
        open: 50,
        high: 85,
        low: 25,
        close: 75,
        volume: 974
    }
}

test('test ava configuration', t => {
    const candle: Candle = getCandle()
    t.deepEqual(candleToRecord(candle), {
        Time: candle.date.getTime(),
        Open: candle.open,
        High: candle.high,
        Low: candle.low,
        Close: candle.close,
        Volume: candle.volume
    })
})
