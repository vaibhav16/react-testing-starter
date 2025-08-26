import { render, screen } from '@testing-library/react'
import UserAccount from '../../src/components/UserAccount'
import { User } from "../../src/entities";

describe('user account', () => {
    it('it should show edit button when isAdmin is true', () => {
        const mockUser: User = {
            id: 1,
            name:'Vaibhav',
            isAdmin: true
        }
        render(<UserAccount user={mockUser}/>)
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("Edit")
        expect(screen.getByText(/Vaibhav/)).toBeInTheDocument()
    })

    it('it should not show edit button when isAdmin is fale', () => {
           const mockUser: User = {
            id: 2,
            name:'vs',
            isAdmin: false
        }
        render(<UserAccount user={mockUser}/>);
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
        expect(screen.getByText(/vs/)).toBeInTheDocument()
    })
})