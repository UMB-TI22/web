import Head from 'next/head'
import { Box, Text, Center, Heading, Container, HStack, VStack, Image, Link} from "@chakra-ui/react"
import {Navbar} from '../../components/navbar'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faHouse} from '@fortawesome/free-solid-svg-icons'


export default function Struktural() {
  return (
    <div>
      <Container minW='container.md'>
      <Navbar/>
        <Heading size='lg' marginTop='50px' color='gray.700' marginBottom='10px'>
        Badan Pengurus Harian (BPH) 📌
        </Heading>
        <Text>
        Sekumpulan pengurus yang berada dalam ruang lingkup kecil untuk mengurusi permasalahan internal organisasi/kelompok lebih banyak, lebih sering, lebih aktif dibanding pengurus yang lain. 
        Terdiri dari Ketua, Wakil ketua, Sekretaris Umum, Wakil Sekretaris, Bendahara Umum, Wakil Bendahara. 
        </Text>

        {/* Ketua Angkatan */}
        <Heading size='lg' marginTop='50px' color='gray.700' marginBottom='10px'>
          Ketua Angkatan 👑
        </Heading>
        <Text>Pemimpin dalam suatu kelompok/organisasi. Lebih dominan ke External dalam suatu kelompok/organisasi.</Text>
        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/pajarajaf.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Fajar Eko P
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/pajarajaf/' color='blue.700'>@pajarajaf</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        {/* Wakil Ketua Angkatan */}
        <Heading size='lg' marginTop='50px' color='gray.700' marginBottom='10px'>
          Wakil Ketua Angkatan 🫅🏼
        </Heading>
        <Text>Membantu ketua dalam segala hal, terkhusus bagian internal dalam suatu kelompok/organisasi.</Text>
        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/aryahafsah.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Muhammad Arya Hafsah Nurfianta 
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/aryahafsah/' color='blue.700'>@aryahafsah</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        {/* Sekretaris */}
        <Heading size='lg' marginTop='50px' color='gray.700' marginBottom='10px'>
          Sekretaris 📝
        </Heading>
        <Text>Mencatat segala pembahasan dalam meet online/offline, rapat, forum, dan mengurus bagian sekretariat dalam suatu kelompok/organisasi.</Text>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/fryogaa.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Kristio Budi Prayoga 
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/fryogaa/' color='blue.700'>@fryogaa</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Stefany Artana 
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/stefanyartn/' color='blue.700'>@stefanyartn</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        {/* Sekretaris */}
        <Heading size='lg' marginTop='50px' color='gray.700' marginBottom='10px'>
          Bendahara 💸
        </Heading>
        <Text>Menghimpun segala pemasukan dan pengeluaran suatu kelompok/organisasi guna membuat suatu program kerja yang membutuhkan pasokan dana.</Text>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/fajriiia.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Fajri Assidiq
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/fajriiia/' color='blue.700'>@fajriiia</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Nadya Aurelia 
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/ndyaaurell/' color='blue.700'>@ndyaaurell</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        {/* Sekretaris */}
        <Heading size='lg' marginTop='50px' color='gray.700' marginBottom='10px'>
          Penggagas 🔊
        </Heading>
        <Text>Menjadi pelopor dalam menggagas suatu ide baru/masukan baru yang bisa mendukung penganalisa dalam menjalankan tugasnya.</Text>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/softlens._.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Amrullah Valentino
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/softlens._/' color='blue.700'>@softlens._</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Achmad Zaki H
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/achmd_zaki/' color='blue.700'>@achmd_zaki</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Rizal Nururrahman
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/zallalu_/' color='blue.700'>@zallalu_</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Huda
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/h_uda.344/' color='blue.700'>@h_uda.344</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Muhammad Hilmy
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/mhmdhilmy17_/' color='blue.700'>@mhmdhilmy17_</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>
        
        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Kaisyarani
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/that_kairaa/' color='blue.700'>@that_kairaa</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/indriyananova_.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Indri
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/indriyananova_/' color='blue.700'>@indriyananova_</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        {/* Sekretaris */}
        <Heading size='lg' marginTop='50px' color='gray.700' marginBottom='10px'>
          Pemikir 🧠
        </Heading>
        <Text>Menjadi pelopor dalam memikirkan suatu gagasan proker atau suatu problem di dalam suatu organisasi/kelompok.</Text>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Thanel R. Angwarmasse
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/ThaRiAn043/' color='blue.700'>@ThaRiAn043</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Mariano A. M. Juluk
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/marno.antonio/' color='blue.700'>@marno.antonio</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Putri Nabila
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/pn.dxd/' color='blue.700'>@pn.dxd</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
            Ardan
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/ardaan.d/' color='blue.700'>@ardaan.d</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Mutiara Adhistya Putri
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/mutiaraadhptr/' color='blue.700'>@mutiaraadhptr</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>
        
        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Asrul Fami
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/asrl.fhmi/' color='blue.700'>@asrl.fhmi</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        {/* Sekretaris */}
        <Heading size='lg' marginTop='50px' color='gray.700' marginBottom='10px'>
          Penganalisa 📈
        </Heading>
        <Text>Menjadi pelopor dalam menganalisa apa yang telah didiskusikan oleh pemikir.</Text>
        
        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/alfauzan.4.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Muhammad Alfa Fauzan
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/alfauzan.4/' color='blue.700'>@alfauzan.4</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Yudha Andika Istanto
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/yudhaa.andika/' color='blue.700'>@yudhaa.andika</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Ghiyas Fazri
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/iyashfazriee/' color='blue.700'>@iyashfazriee</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        
        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Fida Rizky Anindya
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/fidaara/' color='blue.700'>@fidaara</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/lianavrillia_.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Avriliana Rohim
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/lianavrillia_/' color='blue.700'>@lianavrillia_</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>


        {/* Sekretaris */}
        <Heading size='lg' marginTop='50px' color='gray.700' marginBottom='10px'>
          Penggerak 🏃‍♂️
        </Heading>
        <Text>Menjadi pelopor dalam menggerakkan massa khususnya keluarga TEKNIK INFORMATIKA</Text>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/moh.imaaan.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Muhammad Imanulloh
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/moh.imaaan/' color='blue.700'>@moh.imaaan</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Rifky Andrean
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/andreanrifky11/' color='blue.700'>@andreanrifky11</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Afafi Madyan
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/af.madyan/' color='blue.700'>@af.madyan</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/blank-profile.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Akasyah Savina Noorly
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/akasy.h/' color='blue.700'>@akasy.h</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

        <Box>
        <HStack direction='column' marginTop='30px' spacing='25px'>
          <Image src='/profile/feniprass.jpg' width='100px' height='100px' alt='profile' borderRadius='full' border='5'></Image>
        <VStack align='start' pos='relative' top='-20px'>
          <Heading size='md' color='gray.700'>
          Feni Prastyani
          </Heading>
          <HStack>
          <FontAwesomeIcon icon={faInstagram} size='lg' color='#805AD5'/>
          <Link href='https://www.instagram.com/feniprass/' color='blue.700'>@feniprass</Link>
          </HStack>
        </VStack>
        </HStack>
        </Box>

      </Container>
    </div>
  )
}
