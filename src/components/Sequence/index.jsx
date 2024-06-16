/* eslint-disable react/no-unknown-property */
import PropTypes from 'prop-types';
import * as C from './styles';

const Sequence = ({ sequence, currentIndex, pressedKeys, keyColors }) => {
  return (
    <C.Sequence>
      {sequence.map((char, index) => (
        <span
          key={index}
          isActive={index === currentIndex}
          color={pressedKeys[index] ? keyColors[index] : 'default'}
          style={{
            color:
              pressedKeys[index] && keyColors[index] === 'green'
                ? '#fff'
                : index === currentIndex
                ? '#fff'
                : '#2F3349',
            backgroundColor: pressedKeys[index]
              ? keyColors[index]
              : index === currentIndex
              ? '#eeca2b'
              : '#F0F0F0'
          }}
        >
          {char}
        </span>
      ))}
    </C.Sequence>
  );
};

Sequence.propTypes = {
  sequence: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  pressedKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyColors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Sequence;
