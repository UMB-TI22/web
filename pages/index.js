import Head from 'next/head'
import { Box, Text, Center, Heading, Container, HStack, VStack, Image, Link, List, ListItem, Button} from "@chakra-ui/react"
import {Navbar} from '../components/navbar'
import { useEffect } from 'react';
import NextLink from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'


export default function Struktural() {
  return (
    <div>
        <Container>
            <Center h='100vh'>
            <VStack>
            <Heading>UMB TI 2022</Heading>
                <NextLink href="/struktural" passHref>
                    <Button w='100%'>
                        Struktural
                    </Button>
                </NextLink>
                <NextLink href="/kultur" passHref>
                    <Button w='100%'>
                        Kultur
                    </Button>
                </NextLink>
            </VStack>
            </Center>
        </Container>
    </div>
  )

}