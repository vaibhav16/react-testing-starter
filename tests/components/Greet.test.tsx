// import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet'


describe('Green', () => {
    it('it should render hello with the name when name is provided', () => {
        render(<Greet name="Vaibhav"/>)

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/hello Vaibhav/i)
    })

        it('it should render login button when name is not provided', () => {
        render(<Greet name=""/>)

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i)
    })
})