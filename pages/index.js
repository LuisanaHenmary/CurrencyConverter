import styled from 'styled-components'
import Link from 'next/link'


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

const Home = () => {
  return (
    <Section >
      <Container>
        
      </Container>
      <Footer>
        <p>Developer: Luisana Henmary Perez Cardenas</p>
        <p>affiliations: Kunaisoft, 
          <Link href="https://fixer.io" > fixer</Link>,<br/>
          <Link href="https://www.currencyconverterapi.com" >currencyconverterapi</Link>
        </p>

      </Footer>
    </Section>
  )
}

export default Home

