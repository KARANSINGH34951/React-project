
const UserCard = (props) => {
  return (
   
      
      <div className='text-center h-[450px] w-[290px] rounded-md bg-black text-white my-5'>
        <img className='w-full h-[80%]' src={props.img} alt="img" />
        <h3>{props.username}</h3>
        {/* <h5>{props.message}</h5> */} 
      </div>
 
  )
}

export default UserCard
