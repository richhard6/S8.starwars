/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { act } from 'react-dom/test-utils'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { cleanup, fireEvent, render } from '@testing-library/react'

import Starship from '../Starship'

const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
})

afterAll(() => {
  global.fetch = unmockedFetch
})

it('renders the right starship name', () => {
  const starship = { name: 'death star', url: ['asds.com'] }

  const component = render(
    <MemoryRouter>
      <Starship starship={starship} />
    </MemoryRouter>
  )

  expect(component.container).toHaveTextContent('death star')
})
