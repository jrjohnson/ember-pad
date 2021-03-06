import { helper } from 'ember-helper'
import { padStart as stringPad } from 'ember-pad/utils/pad'

export function padStart(params) {
  return stringPad(params[0], params[1], params[2])
}

export default helper(padStart)
