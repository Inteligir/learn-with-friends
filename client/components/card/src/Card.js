import styled from 'styled-components';
import PropTypes from 'prop-types';
import { borderRadius, bg } from 'styled-system';
import theme from '@client/utils/theme';
import { Box } from '@client/components';

const boxShadow = (props) => {
  const boxShadows = {
    xs: {
      'box-shadow': props.theme.boxShadows[0],
    },
    sm: {
      'box-shadow': props.theme.boxShadows[1],
    },
    md: {
      'box-shadow': props.theme.boxShadows[2],
    },
    lg: {
      'box-shadow': props.theme.boxShadows[3],
    },
    xl: {
      'box-shadow': props.theme.boxShadows[4],
    },
  };
  return boxShadows[props.boxShadowSize];
};

const boxBorder = (props) => ({
  border:
    props.borderWidth === 0
      ? '0'
      : `${props.borderWidth}px solid ${props.theme.colors[props.borderColor]}`,
});

const Card = styled(Box)`
  ${boxShadow} ${boxBorder} ${borderRadius} ${bg};
`;

Card.propTypes = {
  ...borderRadius.propTypes,
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOf([0, 1, 2]),
};

Card.defaultProps = {
  borderColor: 'borderGray',
  borderRadius: 7,
  borderWidth: 0,
  boxShadowSize: 'sm',
  bg: 'lightBlack',
  theme,
};

Card.displayName = 'Card';

export default Card;
