import { useState, useEffect } from "react"

const MovieDetails = ({ history, location, match }) => {

    const [details, setDetails] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                let resp = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&i=" + match.params.movieID)
                if (resp.ok) {
                    let data = await resp.json()
                    setDetails(data)
                } else {
                    console.log("Error")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchDetails()

        const fetchComments = async () => {
            try {
                let resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + match.params.movieID,
                    {
                        headers: {
                            Authorization:
                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjFmMTRiYjUzZDAwMTViMTllZDciLCJpYXQiOjE2NDE5OTczODUsImV4cCI6MTY0MzIwNjk4NX0.k15tv3GNBSpq8Do9t2-zK8Lebj9SQIoyuQBTrenrgmA",
                            "Content-Type": "application/json",
                        },
                    })
                if (resp.ok) {
                    let data = await resp.json()
                    setComments(data)
                } else {
                    console.log("Error")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchComments()
    }, [])

    return (
        <div className="text-white text-center mt-3">
            {
                details && (
                    <div>
                        <h2>{details.Title}</h2>
                        <img src={details.Poster} className="mt-3 mb-3"/>
                        {
                            comments.map(c => (
                                <li key={c._id}>
                                    {c.comment}
                                </li>
                            ))
                        }
                    </div>
                )
            }
        </div>

    )
}

export default MovieDetails