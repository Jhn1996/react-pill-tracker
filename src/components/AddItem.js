import {useState, useRef} from 'react'

const AddItem = ({onAdd}) => {
    const [text,setText] = useState('')
    const [pillnumber,setPillnumber] = useState('')
    const [timenumber,setTimenumber] = useState('')
    const [dose,setDose] = useState('')
    const [instance,setInstance] = useState(pillnumber/dose)
    const [currenttime,setCurrenttime] = useState(new Date())
    const [remindertime, setRemindertime] = useState(currenttime.setHours(timenumber))
    const [reminder,setReminder] = useState(false)
    const inputElement = useRef('')

    const onSubmit = (e) => {e.preventDefault()
    if (!text){
        alert('Please add a pill')
        return
    }
    onAdd({text, pillnumber, timenumber, dose, instance,reminder,currenttime, remindertime})

    setText('')
    setTimenumber('')
    setPillnumber('')
    setDose('')
    setCurrenttime(new Date())
    setInstance(pillnumber/dose)
    setReminder(false)
    setRemindertime(currenttime.setHours(timenumber))
    // console.log(setInstance)
}
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Pill Name</label>
                <input type = 'text'
                placeholder= 'i.e. Tylenol'
                value={text}
                onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Total amount of pills</label>
                <input type = 'number'
                placeholder= 'i.e.30 pills'
                value={pillnumber}
                onChange={(e) => setPillnumber(e.target.value)}/><span>per prescription</span>
            </div>
            <div className='form-control'>
                <label>Time interval (in hrs)</label>
                <input type = 'number'
                placeholder= 'i.e. 6'
                value={parseInt(timenumber)}
                onChange={(e) => setTimenumber(e.target.value)}/><span>hours</span>
            </div>
            <div className='form-control'>
                <label>Dosage (in pills)</label>
                <input type = 'number'
                placeholder= 'i.e. 2'
                ref = {inputElement}
                value={dose}
                onChange={(e) => setDose(e.target.value)}/><span>pills</span>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type = 'checkbox'
                checked = {reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Pill' className='btn btn-block' 
            onClick={(e) => {
            setInstance(pillnumber/dose); 
            setCurrenttime(new Date())
            setRemindertime(currenttime.setHours(timenumber))
            }}/>
        </form>
    )
}

export default AddItem
