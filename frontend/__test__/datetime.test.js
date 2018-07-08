import * as dt from '../src/utils/datetime'

describe('utils: datetime', () => {
  describe('getDatetime', () => {
  })
  describe('getWorkingTime', () => {
    it('Return difference in time', () => {
      const unixtime1 = 1520547406379
      const unixtime2 = 1520547406400
      const res = dt.getWorkingTime(unixtime1, unixtime2)
      expect(res).toBe(21)
    })
  })
})
