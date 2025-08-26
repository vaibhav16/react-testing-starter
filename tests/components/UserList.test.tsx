import { render, screen } from '@testing-library/react'
import { User } from "../../src/entities";
import UserList from '../../src/components/UserList';

describe('user list', () => {
    it('should render no users when array is empty', () => {
        render(<UserList users={[]}/>)

        expect(screen.queryByText(/no users/i)).toBeInTheDocument();
    })

    it('should render the users from array', () => {
        const users: User[] = [
            {id: 1, name: 'vs'},
            {id: 2, name: 'ms'}

        ]

        render(<UserList users={users}/>);

        users.forEach(user=>{
            const link = screen.getByRole('link', {name: user.name})
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href',`/users/${user.id}`)
        })
    })
})