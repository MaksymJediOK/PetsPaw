import GirlAndPet from '@/app/page'
import { render, screen } from '@testing-library/react'

it('should have welcome text', () => {
  render(<GirlAndPet />)

  const myElement = screen.getByText('Welcome')

  expect(myElement).toBeInTheDocument()
})
