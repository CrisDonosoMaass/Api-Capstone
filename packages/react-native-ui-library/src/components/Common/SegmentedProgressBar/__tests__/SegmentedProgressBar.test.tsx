import { render } from '@testing-library/react-native';

import SegmentedProgressBar from '../';

describe('testing SegmentedProgressBar', () => {
  test('SegmentedProgressBar has not changed', () => {
    const view = render(
      <SegmentedProgressBar
        activeBarNumber={1}
        barNumber={4}
        style={{ width: 399 }}
      />,
    );
    expect(view).toMatchSnapshot();
  });
});
