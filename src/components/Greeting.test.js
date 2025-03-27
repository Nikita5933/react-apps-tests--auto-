import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting", () => {
    test('renders Hello! as a text', () => {
        //arrange
        render(<Greeting />);
        //act

        //assert

        const helloElement = screen.getByText('Hello!');

        expect(helloElement).toBeInTheDocument();
    });


    test('renders What\'s up? if the button was not clicked', () => {
        render(<Greeting />);
        const paragraphEl = screen.getByText('What\'s up?', {exact: false});
        expect(paragraphEl).toBeInTheDocument();
    })
    test('render text changed! if the button was clicked', () => {
        render(<Greeting />);
        userEvent.click(screen.getByRole('button'));

        const changedEl = screen.getByText('Change text!');
        expect(changedEl).toBeInTheDocument();

    })
    test('does not render What\'s up? if the button was clicked', () => {
        render(<Greeting />);
        userEvent.click(screen.getByRole('button'));

        const changedEl = screen.queryByText('What\'s up?', {exact: false});
        expect(changedEl).toBeNull();
    })
})

