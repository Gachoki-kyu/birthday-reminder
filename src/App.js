import React, {useState} from 'react'

const Name = () => {
  const [obj, setObj] = useState([
    {id: 1,img:"https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600", name: 'Benson Maina',age: "34 years"},
    {id: 2,img:"https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=600f", name: 'brenda wanjiku', age:'52 years'},
    {id:3,img:'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600', name: 'benjamin nduta', age:'3 years'},
    {id: 4,img:'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=600', name: "velonica wamaitha", age:'29 years'},
    {id:5,img:'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'James Babla', age:"38 years"}])
  const delet = () => {
    setObj([])
  }
  const CallBackA = ({img,name,age}) => {
    return (
    <div className='profile-card'>
      <img className='profile-image' src={img} alt={name} />
      <div className='profile-info'>
      <h2>{name}</h2>
      <h4>{age}</h4>
      </div>
    </div>
 
    )}
  
  return (
    <div className = "container">
      <h2 className='count-text'>{obj.length} Birthdays Today</h2>
      {obj.map((person) => <CallBackA {...person} key={person.id}/>)}
      <div className="button-container">
      <button className ='btn' onClick={ delet}>clear all</button>
      </div>
      </div>
  )
}

export default Name