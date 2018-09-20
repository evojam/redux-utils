import { createAction } from './actions'

describe('create action', () => {
  it('allows to create an action without the payload', () => {
    const type = 'type'

    expect(createAction(type)).toEqual({ type })
  })

  it('allows to create an action with the payload', () => {
    const type = 'type'
    const data = { key: 'value' }

    expect(createAction(type, data)).toEqual({ type, payload: data })
  })
})
