import { useParams } from "react-router-dom"
import { queryClient } from "../../services/queryClient"

export function Recommendations() {
  const {id} = useParams()
  const recommendations = queryClient.getQueryData(`movie-recommendations-${id}`)
  console.log(recommendations)
  return (
    <h1>ola</h1>
  )
}