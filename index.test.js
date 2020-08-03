// Setup Enzyme (once per test suite).
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Test code.
import React from 'react';
import { CircularProgress } from '@material-ui/core';
// import { CircularProgress } from 'material-ui-next/Progress';
import { mount } from 'enzyme';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const style = {
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
};

const Composer = ({
  classes,
}) => (
  <div>
    <CircularProgress size={24} className={classes.buttonProgress} />
  </div>);


Composer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Composition = withStyles(style)(Composer);

describe('<Composition />', () => {
  it('should render CircularProgress', () => {
    const wrapper = mount(<Composition />);
    const progress = wrapper.find(CircularProgress).first();
    expect(progress.props().size).toBe(24);
  });
});
