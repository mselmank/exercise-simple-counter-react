import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const App = (props) => {

  return (
    <div className="container">

      <div className='calendar'>

        <FontAwesomeIcon icon={faClock} />

      </div>

      <div className='four'>{props.digitFour%10}</div>
      <div className='three'>{props.digitThree%10}</div>
      <div className='two'>{props.digitTwo%10}</div>
      <div className='one'>{props.digitOne%10}</div>

    </div>
  );
}



export default App;
