import { MovieDetails, MovieRecomendations, CastProps, TrailerProps } from "../../types"
import { api } from "../services/api"
import { queryClient } from "../services/queryClient"

export async function handlePrefetchMovie(movieId: number) {
  await queryClient.prefetchQuery<MovieDetails[], Error>(`movie-details-${movieId}`, async () => {
    const response = await api.get(`https://api.themoviedb.org/3/movie/${movieId}`,{ 
      params: {
        api_key: '9baa61702a8d467f8d5fc73f4bd173ee',
        language: 'pt-BR'
      }
    })
    console.log(response.data)
    return response.data
  }, {
    staleTime: 1000 * 60 * 60 * 24 // 24h
  })

  await queryClient.prefetchQuery<MovieRecomendations, Error>(`movie-recommendations-${movieId}`, async () => {
    const response = await api.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations`,{ 
      params: {
        api_key: '9baa61702a8d467f8d5fc73f4bd173ee',
        language: 'pt-BR'
      }
    })
    return response.data
  }, {
    staleTime: 1000 * 60 * 60 * 24 // 24h
  })

  await queryClient.prefetchQuery<CastProps, Error>(`movie-cast-${movieId}`, async () => {
    const response = await api.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`,{ 
      params: {
        api_key: '9baa61702a8d467f8d5fc73f4bd173ee',
        language: 'pt-BR'
      }
    })
    return response.data
  }, {
    staleTime: 1000 * 60 * 60 * 24 // 24h
  })

  await queryClient.prefetchQuery<TrailerProps, Error>(`movie-videos-${movieId}`, async () => {
    const response = await api.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,{ 
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