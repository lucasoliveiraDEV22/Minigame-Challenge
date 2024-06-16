import PropTypes from 'prop-types';
import * as C from './styles';

const Result = ({ result, onRestart }) => {
  return (
    <C.Result>
      <p>{result}</p>
      <button onClick={onRestart}>Reiniciar</button>
    </C.Result>
  );
};

Result.propTypes = {
  result: PropTypes.string.isRequired,
  onRestart: PropTypes.any
};
export default Result;
