import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { useEffect, useState } from 'react';
import { CastProps, PersonProps } from '../../../../types';
import { handleFetchPerson } from '../../../hooks/usePerson';
import { queryClient } from '../../../services/queryClient';
import { Flex, ImageTrigger, Poster, StyledArrow, StyledContent, Text, HoverCardTrigger } from './styles';

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardContent = StyledContent;
export const HoverCardArrow = StyledArrow;


interface HoverCastCardProps {
  castMovie: CastProps
}

export function HoverCastCard({castMovie} : HoverCastCardProps) {
  const [person, setPerson] = useState({} as PersonProps)
  const [personId, setPersonId] = useState(0)
  const personData = queryClient.getQueryData(`person-details-${personId}`) as PersonProps
  
  useEffect(() => {
    if(personData) {
      const personConstructor = {
        birthday: personData.birthday ? personData.birthday.split('-').reverse().join('/') : '',
        place_of_birth: personData.place_of_birth ? personData.place_of_birth : '',
        biography: personData.biography ? personData.biography : ''
      }
        setPerson(personConstructor)
    }
  }, [personData])

  return (
    <>
    {castMovie.cast.map(cast => {
      return (
        <HoverCard  key={cast.id}>
        <HoverCardTrigger 
          onMouseEnter={() => {
            setPersonId(cast.id)
            handleFetchPerson(cast.id)
          }} asChild>
          <ImageTrigger>
            <Poster src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}/>
            <h3>{cast.name}</h3>
            <h4>{cast.character}</h4>
          </ImageTrigger>
        </HoverCardTrigger>
        <HoverCardContent side={'right'} sideOffset={5}>
          <Flex css={{ flexDirection: 'column', gap: 7 }}>
            <Flex css={{ flexDirection: 'column', gap: 15 }}>
              <Text>
                <Text bold>{cast.name}</Text>
                <Text faded>Data de nacimento:</Text> 
                <Text bold>{person.birthday}</Text>                  
                <Text faded>Local de nacimento:</Text>
                <Text bold>{person.place_of_birth}</Text>
              </Text>
              <Text>
                {person.biography}
              </Text>              
            </Flex>
          </Flex>
          <HoverCardArrow />
        </HoverCardContent>
      </HoverCard>
      )
    }) } 
    </>
    
  )

}

