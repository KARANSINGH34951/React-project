const UserCard = (props) => {
  return (
    <div className='text-center h-[200px] md:h-[400px] lg:h-[400px] xl:h-[450px] w-full max-w-[290px] mx-auto rounded-lg bg-black text-white my-5'>
      <img className='w-full h-[70%] object-cover' src={props.img} alt="img" />
      <h3 className='text-lg md:text-xl font-semibold'>{props.username}</h3>
      {/* <h5>{props.message}</h5 */} 
    </div>
  );
}

export default UserCard;
