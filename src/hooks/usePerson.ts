import { PersonProps } from "../../types"
import { api } from "../services/api"
import { queryClient } from "../services/queryClient"

export async function handleFetchPerson(personId: number) {
  await queryClient.prefetchQuery<PersonProps[], Error>(`person-details-${personId}`, async () => {
    const response = await api.get(`https://api.themoviedb.org/3/person/${personId}`,{ 
      params: {
        api_key: '9baa61702a8d467f8d5fc73f4bd173ee',
        language: 'pt-BR'
      }
    })
    return response.data
  }, {
    staleTime: 1000 * 60 * 60 * 24 // 24h
  })
}
