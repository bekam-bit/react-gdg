// solved problem using Props
import './style.css';
//Declaring name and age as props
function UserCard({ Name, Age, Email }) {
  return (
    <div className='usercard'>
      <p>My name is {Name}</p>
      <p>I am {Age} years old</p>
      <p>Email:{Email}</p>
    </div>
  )
}
export default UserCard;


