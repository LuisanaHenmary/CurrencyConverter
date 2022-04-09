import styled from 'styled-components'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import FormConv from '../components/FormConv'


const Section = styled.div`
  margin-top: 15%;
`
const Container = styled.section`
  background-color: #e5e7e9  ;
  box-shadow: 10px 5px 5px rgba( 93, 109, 126 ,0.5);
  padding: 20px;
  max-width: 700px;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
`


const Footer = styled.footer`
  margin-top: 50px;
  color: rgba(0,0,0,0.4);
  display: flex;
  border-top: 1px solid rgba(0, 0, 0,0.3);
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  padding: 10px; 

  & p{
      margin: 5px;
  }
`

const Message = styled.p`
color: red;
`

const Home = ({ coins }) => {
  const [conversions, setConversions] = useState([])

  const submitFunction = conversion => {
    setConversions([
      ...conversions,
      conversion
    ])
  }

  return (
    <Section >
      <Container>
        {coins.lenth !== 0 ? <FormConv
          listCoins={coins}
          submit={submitFunction}
        /> : <Message>You have not loaded the symbols</Message>}
      </Container>
      
      <Footer>
        <p>Developer: Luisana Henmary Perez Cardenas</p>
        <p>affiliations: Kunaisoft,
          <Link href="https://fixer.io" > fixer</Link>,<br />
          <Link href="https://www.currencyconverterapi.com" >currencyconverterapi</Link>
        </p>

      </Footer>
    </Section>
  )
}

export const getStaticProps = async () => {
  const apiKeyFixer = process.env.NEXT_PUBLIC_API_KEY_FIXER

  try {
    const responce = await axios.get(`http://data.fixer.io/api/symbols?access_key=${apiKeyFixer}`)

    return {
      props: { coins: Object.keys(responce.data.symbols) }
    }

  } catch (e) {
    console.log(e)
  }

  return {
    props: { coins: [] }
  }
}

export default Home

