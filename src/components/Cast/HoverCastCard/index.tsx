import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { useEffect, useState } from 'react';
import { CastProps, PersonProps } from '../../../../types';
import { handleFetchPerson } from '../../../hooks/usePerson';
import { queryClient } from '../../../services/queryClient';
import { Flex, ImageTrigger, Img, Poster, StyledArrow, StyledContent, Text } from './styles';

export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = StyledContent;
export const HoverCardArrow = StyledArrow;


interface HoverCastCardProps {
  castMovie: CastProps
}

export function HoverCastCard({castMovie} : HoverCastCardProps) {
  const [person, setPerson] = useState({} as PersonProps)
  const [personId, setPersonId] = useState(0)
  const personData = queryClient.getQueryData(`person-details-${personId}`) as PersonProps
  console.log(personData)
  
  useEffect(() => {
    if(personData) {
      const personConstructor = {
        birthday: personData.birthday ? personData.birthday.split('-').reverse().join('/') : ''

      }
      console.log(personConstructor)
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
          <ImageTrigger href="https://twitter.com/radix_ui" target="_blank" rel="noreferrer noopener">
            <Poster src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}/>
            <h3>{cast.name}</h3>
            <h4>{cast.character}</h4>
          </ImageTrigger>
        </HoverCardTrigger>
        <HoverCardContent sideOffset={5}>
          <Flex css={{ flexDirection: 'column', gap: 7 }}>
            <Flex css={{ flexDirection: 'column', gap: 15 }}>
              <Text>
                <Text bold>{cast.name}</Text>
                <Text faded>Data de nacimento: {person.birthday}</Text>
              </Text>
              <Text>
                Components, icons, colors, and templates for building high-quality, accessible UI. Free
                and open-source.
              </Text>
              <Flex css={{ gap: 15 }}>
                <Flex css={{ gap: 5 }}>
                  <Text bold>0</Text> <Text faded>Following</Text>
                </Flex>
                <Flex css={{ gap: 5 }}>
                  <Text bold>2,900</Text> <Text faded>Followers</Text>
                </Flex>
              </Flex>
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

