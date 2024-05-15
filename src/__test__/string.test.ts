import { expect, it, describe } from 'vitest'

import { randomStr } from '../string'

describe('String utils', () => {
  it('should get default random str correct', () => {
    expect(randomStr()).toHaveLength(16)
  })
  it('shold get custom length of random str correct', () => {
    expect(randomStr(10)).toHaveLength(10)
  })
})
