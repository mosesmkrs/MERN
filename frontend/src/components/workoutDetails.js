import Avatar from '@mui/material/Avatar';

const WorkoutDetails = ({workout}) => {
    // return(
    //     <div className="workout-details">
    //     <h4>{workout.title}</h4>
    //     {/* <p><strong>Load (kg)</strong>{workout.url}</p> */}
    //     <img src={workout.url}/>
    //     <p><strong>Reps (kg)</strong>{workout.Reps}</p>
    //     <p>{workout.createdAt}</p>
    // </div>
    // )
    return (
        <section className='post-container'>
        <div className='post'>
            <div className="post-header">
            <Avatar 
            className='post-avatar'
            src="/static/images/avatar/1.jpg" />
            <h3>{workout.username}</h3>
            {/* <p>{workout.createdAt}</p> */}
            </div>
            <div className='post__description'><p>{workout.description}</p></div>
            <img className='post-image' src={workout.url} alt="" />
            <p className='post-text'><span className='username'>{workout.username}</span>: {workout.caption}</p>

        </div>
        </section>
    )   
}

export default WorkoutDetails