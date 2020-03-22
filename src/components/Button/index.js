import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Text} from 'react-native';
import {Container} from './styles';

function Button({children, loading, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};
Button.defaultProps = {
  loading: false,
};
