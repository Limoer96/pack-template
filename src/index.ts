import { mul } from '@fruits-chain/utils'

function add(one: number, other: number) {
  return one + other
}

function sub(one: number, other: number) {
  return one - other
}

export function mul2(one: number, another: number) {
  return mul(one, another)
}

export { add, sub }

export * from './string'
