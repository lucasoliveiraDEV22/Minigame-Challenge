import PropTypes from 'prop-types'
import * as C from './styles'

const Timer = ({ timeLeft }) => {
  return (
    <C.Timer>
      Tempo restante: <span>{timeLeft}</span>s
    </C.Timer>
  );
};


Timer.propTypes = {
    timeLeft : PropTypes.number.isRequired
}
export default Timer;