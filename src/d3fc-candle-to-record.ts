/**
 * d3fc-candle-to-record
 * Map a d3fc Candle to a talib Record
 */

import Candle from 'd3fc-candle'
import Record from 'timeseries-record'


/**
 * Transform a d3fc Candle into a talib Record.
 */
function d3fcCandleToRecord(candle: Candle): Record {
    return {
        Time: candle.date.getTime(),
        Open: candle.open,
        High: candle.high,
        Low: candle.low,
        Close: candle.close,
        Volume: candle.volume
    }
}

export default d3fcCandleToRecord
