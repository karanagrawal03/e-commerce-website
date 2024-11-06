import HeroSection from './components/HeroSection'
import { useProductContext } from './components/context/ProductContext'

const About = () => {
  const {myName}=useProductContext();
  const data={
    name:"Agarwal's E-commerce",
  }
  return (
    <>
    {myName}
    <HeroSection myData={data}/>
    </>
    )
}

export default About