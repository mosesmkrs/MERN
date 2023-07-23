import { useState } from "react"

const WorkoutForm = () => {
    const [username,setUsername] = useState('')
    const [description,setDescription] = useState('')
    const [url,setUrl] = useState('')
    const [caption,setCaption] = useState('')
    const [error,setError] = useState('null')


    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {username,description,url,caption}

        const response = await fetch('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'content-Type':'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setUsername('')
            setDescription('')
            setUrl('')
            setCaption('')
            setError(null)
            console.log('new post added',json)
        }
    }
    return(
         <form className="create" onSubmit={handleSubmit}>
            <h3>Add Post</h3>

            <label>username</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                />

            <label>description</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                />    

            <label>url</label>
            <input
                type="text"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
                />  

            <label>caption</label>
            <input
                type="text"
                onChange={(e) => setCaption(e.target.value)}
                value={caption}
                /> 

            <button>Add post</button>   
            {error && <div className="error">{error}</div>}  
         </form>
    )
}

export default WorkoutForm