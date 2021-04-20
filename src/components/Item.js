import {FaTimes} from 'react-icons/fa'
import Moment from 'react-moment'

const Item = ({item, onDelete, onToggle}) => {
    return (
        <div className={`item ${item.reminder ?'reminder': ''}`} onDoubleClick={()=>
        onToggle(item.id)}>
            <h3>{item.text} <FaTimes 
            style={{color:'red', cursor:'pointer'}} 
            onClick={() => onDelete(item.id)}/></h3>
            <p>Take {item.dose} pills every {item.timenumber} hrs for a totall {item.instance} times.</p>
            <p>Next pill at <Moment format='LLLL'>{item.remindertime}</Moment></p>
        </div>
    )
}

export default Item