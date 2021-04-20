import { useState, useEffect } from 'react'
import Header from './components/Header'
import Items from './components/Items'
import AddItem from './components/AddItem'
import Clock from './components/Clock'

//time
function App() {
  const [showAddItem, setShowAddItem] = useState(false)
  const [items, setItems] = useState([])

  useEffect(()=>{
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setItems(itemsFromServer)
    }
    getItems()
  },[])

//fetch items
const fetchItems = async () => {
  const res = await fetch('http://localhost:5000/items')
  const data = await res.json()
  return data
}
//fetch item
const fetchItem = async (id) => {
  const res = await fetch(`http://localhost:5000/items/${id}`)
  const data = await res.json()
  return data
}
//Add item
const addItem = async(item)=> {
  const res = await fetch('http://localhost:5000/items',{
    method: 'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify(item)
  })

  const data = await res.json()

  setItems([...items, data])
  // const id = Math.floor(Math.random() * 10000)+1
  // const newItem = {id, ...item}
  // setItems([...items, newItem])
  // console.log(item)
}

//delete item

const deleteItem = async(id) => {
  await fetch(`http://localhost:5000/items/${id}`,{
    method:'DELETE'
  })
  setItems(items.filter((item) => item.id !== id))
}

//toggle reminder
const toggleReminder = async(id)=> {
  const itemToToggle = await fetchItem(id)
  const updItem = {...itemToToggle, reminder: !itemToToggle.reminder}
  const res = await fetch(`http://localhost:5000/items/${id}`, {
    method:'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updItem)
  })

  const data = await res.json()
  setItems(
    items.map((item) => 
    item.id === id
    ?{...item, reminder: data.reminder}: item
    )
  )
}
  return (
    <div className="container">
      <Clock/>
      <Header onAdd={()=> setShowAddItem
        (!showAddItem)} showAdd={showAddItem}/>
      {showAddItem && <AddItem  onAdd={addItem}/>}
      {items.length > 0 ?<Items items={items} onDelete={deleteItem} onToggle={toggleReminder}/>:'No Pills to take'}
    </div>
  );
}

export default App;
