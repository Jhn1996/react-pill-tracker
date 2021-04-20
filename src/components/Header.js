import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title,onAdd,showAdd }) => {
    return (
        <header className='header'>
          <h1>{title}</h1>
          <Button color={showAdd ? 'black': 'blue'} text={showAdd ? 'Close': 'Add Pill'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Pill Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// todo: add current date timer

export default Header
