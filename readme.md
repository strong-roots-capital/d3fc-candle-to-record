# d3fc-candle-to-record [![Build status](https://travis-ci.org/strong-roots-capital/d3fc-candle-to-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/d3fc-candle-to-record) [![npm version](https://img.shields.io/npm/v/d3fc-candle-to-record.svg)](https://npmjs.org/package/d3fc-candle-to-record) [![codecov](https://codecov.io/gh/strong-roots-capital/d3fc-candle-to-record/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/d3fc-candle-to-record)

> Map a d3fc Candle to a talib Record

## Install

``` shell
npm install d3fc-candle-to-record
```

## Use

``` typescript
import candleToRecord from 'd3fc-candle-to-record'

import Candle from 'd3fc-candle'
import Record from 'timeseries-record'

const candle: Candle = getRandomCandle()
const record: Record = candleToRecord(candle)
```

## Related

- [timeseries-record](https://github.com/strong-roots-capital/timeseries-record)
- [d3fc-candle](https://github.com/strong-roots-capital/d3fc-candle)
- [d3fc](https://github.com/d3fc/d3fc)
