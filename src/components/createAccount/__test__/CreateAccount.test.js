/**
 * @jest-environment jsdom
 */
import * as React from 'react'

import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'

import CreateAccount from '../CreateAccount'

it('it changes the input accordingly', () => {
  const component = render(
    <MemoryRouter>
      <CreateAccount />
    </MemoryRouter>
  )

  const input = component.getByPlaceholderText('username')

  fireEvent.change(input, { target: { value: 'dada' } })

  expect(input.value).toBe('dada')
})
