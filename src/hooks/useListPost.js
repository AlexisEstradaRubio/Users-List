import { useEffect, useState } from "react"

const useListPost = () => {
    const [post, setPost] = useState({})

    const fetchPost = async () => {
        const response = await globalThis.fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json()
        setPost(json)
    }

    useEffect(() => {
        fetchPost()
    }, [])

    return {post}
}

export default useListPost; 
