import { render } from '@testing-library/react-native';

import Button from '../';

describe('testing Button', () => {
  test('Button has not changed', () => {
    const view = render(
      <Button onPress={jest.fn()} mode="contained">
        Prueba
      </Button>,
    );
    expect(view).toMatchSnapshot();
  });
});
