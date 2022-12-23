import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rocket from '../rocket';
import store from '../../../redux/configureStore';

describe('Test Rocket Component', () => {
  it('check if component component match the snapshot', () => {
    const rocket = {
      id: 1,
      rocketName: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed',
      flickrImage: 'https://imgur.com/DaCfMsj.jpg',
      reserved: true,
    };

    const rocketRender = render(
      <Provider store={store}>
        <Rocket rocket={rocket} />
      </Provider>,
    );

    expect(rocketRender).toMatchSnapshot();
  });

  it('check if the barge is shown when a rocket is reserved and check if has button with text Cancel Reservation', () => {
    const rocket = {
      id: 1,
      rocketName: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed',
      flickrImage: 'https://imgur.com/DaCfMsj.jpg',
      reserved: true,
    };

    const { getByText } = render(
      <Provider store={store}>
        <Rocket rocket={rocket} />
      </Provider>,
    );
    const button = getByText(/Cancel Reservation/i, { selector: 'button' });

    expect(getByText(/Reserved/i)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('check if button is shown with Reserve Rocket text when reserved:false', () => {
    const rocket = {
      id: 1,
      rocketName: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed',
      flickrImage: 'https://imgur.com/DaCfMsj.jpg',
      reserved: false,
    };

    const { getByText } = render(
      <Provider store={store}>
        <Rocket rocket={rocket} />
      </Provider>,
    );

    const button = getByText(/Reserve Rocket/i, { selector: 'button' });
    expect(button).toBeInTheDocument();
  });
});
