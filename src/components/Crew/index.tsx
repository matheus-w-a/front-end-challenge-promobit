
import * as Collapsible from '@radix-ui/react-collapsible';
import { IconButton, Productors, Repository, Text, Flex, Directors, Container, Box } from './styles';
import {FiX, FiArrowDown} from 'react-icons/fi'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { queryClient } from '../../services/queryClient';
import { CastProps } from '../../../types';


export function Crew(){
  const [openProductors, setOpenProductors] = useState(false);
  const [openDirectors, setOpenDirectors] = useState(false);
  const {id} = useParams()
  const crew = queryClient.getQueryData(`movie-cast-${id}`) as CastProps
  const [productors, setProductors] = useState([])
  const [directors, setDirectors] = useState([])

   useEffect(() => {
    const productorsData = crew.crew.reduce((acc ,crew) => {
     if(crew.known_for_department === 'Production' && !acc.includes(crew.name) ) {
       acc.push(crew.name)
       return acc
     }
     return acc
    }, [] as any)
    console.log(productorsData)
    setProductors(productorsData)

    const directorsData = crew.crew.reduce((acc ,crew) => {
      if(crew.known_for_department === 'Directing' && !acc.includes(crew.name)) {
        acc.push(crew.name)
        return acc
      }
      return acc
     }, [] as any)
     console.log(directorsData)
     setDirectors(directorsData)
  }, [])

  return  (
    <Container>
      <Productors open={openProductors} onOpenChange={setOpenProductors}>
        <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Text css={{ color: 'white' }}>Produção</Text>
          <Collapsible.Trigger asChild>
            <IconButton>{openProductors ? <FiX/> : <FiArrowDown />}</IconButton>
          </Collapsible.Trigger>
        </Flex>
        <Collapsible.Content>
          {productors.map(productor => {
            return (
              <Repository>
                <Text>{productor}</Text>
              </Repository>
            )
          })}
        </Collapsible.Content>

      </Productors>
          <Directors open={openDirectors} onOpenChange={setOpenDirectors}>
          <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Text css={{ color: 'white' }}>Direção</Text>
          <Collapsible.Trigger asChild>
            <IconButton>{openDirectors ? <FiX/> : <FiArrowDown />}</IconButton>
          </Collapsible.Trigger>
        </Flex>
        <Collapsible.Content>
          <Box>
            {directors.map(director => {
                return (
                  <Repository>
                    <Text>{director}</Text>
                  </Repository>
                )
              })}
          </Box>

          </Collapsible.Content>
  
      </Directors>
     </Container>
    )
}