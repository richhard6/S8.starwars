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
import Home from '../Home'
import App from '../../../App'

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

it('renders without crashing', () => {
  const component = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

  expect(component.container).toHaveTextContent('Welcome to Starwars Starships')
})

it('it routes correctly if user is not logged', () => {
  render(<App />)

  act(() => {
    const goHomeLink = document.querySelector('button')
    // Click it
    goHomeLink.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    console.log(document.location.href)
  })
  expect(document.location.href).toBe('http://localhost/create')
})
/* 
it('it routes correctly if user is  logged', () => {
  render(<App />)

  act(() => {
    const goHomeLink = document.querySelector('login')
    // Click it
    goHomeLink.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    console.log(document.location.href)
  })
  expect(document.location.href).toBe('http://localhost/login')
}) */
