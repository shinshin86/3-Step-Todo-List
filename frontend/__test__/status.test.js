import { status } from '../src/utils/status';

describe('utils: status', () => {
  it('status[0] is pending', () => {
    expect(status()[0]).toBe('pending');
  })
  it('status[1] is ongoing', () => {
    expect(status()[1]).toBe('ongoing');
  })
  it('status[2] is completed', () => {
    expect(status()[2]).toBe('completed');
  })
})
