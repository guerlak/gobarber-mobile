import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Container, Tinput} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

//ref react function
function Input({style, icon, ...rest}, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={23} color="rgba(255,255,255,0.2)" />}
      <Tinput {...rest} ref={ref} />
    </Container>
  );
}

//Need to be wrapped to access the react function ref [on focus and other funcs]
export default forwardRef(Input);

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
Input.defaultProps = {
  style: {},
};
