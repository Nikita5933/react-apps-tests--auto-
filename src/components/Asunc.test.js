import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'first post'}],
        });
        render(<Async />);

        const listItemEl = await screen.findAllByRole('listitem');
        expect(listItemEl).not.toHaveLength(0);
    })
})