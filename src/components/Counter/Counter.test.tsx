import {
    fireEvent,
    render,
    RenderResult,
    waitFor,
} from '@testing-library/react';
import AppComponent from '../../App';

describe('should render counter correctly', () => {
    let App: RenderResult;

    beforeEach(() => {
        App = render(<AppComponent />);
    });

    it('increment', async () => {
        const { getByText, getByTestId } = App;

        const counterDiv = getByTestId('counter');
        const incrementButton = getByText('increment');

        expect(counterDiv).toBeDefined();
        expect(incrementButton).toBeDefined();

        fireEvent.click(incrementButton);

        await waitFor(() => {
            expect(counterDiv.textContent).toEqual('1');
        });
    });

    it('decrement', async () => {
        const { getByText, getByTestId } = App;

        const counterDiv = getByTestId('counter');
        const decrementButton = getByText('decrement');

        expect(counterDiv).toBeDefined();
        expect(decrementButton).toBeDefined();

        fireEvent.click(decrementButton);
        fireEvent.click(decrementButton);

        await waitFor(() => {
            expect(counterDiv.textContent).toEqual('-1');
        });
    });
});

export {};
