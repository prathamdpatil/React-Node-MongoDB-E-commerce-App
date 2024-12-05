import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Prathamesh Application Authentication</h1>
          <p className='text-center mb-4'>
          <h1>Welcome to SmartShop</h1>
        <p>Discover the ultimate online shopping destination for all your needs!</p>
        <p><strong>Men's Collection:</strong> Explore trendy apparel, accessories, and footwear designed for every occasion.</p>
        <p><strong>Women's Collection:</strong> From chic dresses to stylish handbags, find everything to define your fashion statement.</p>
        <p><strong>Kids' Wear:</strong> Adorable outfits and accessories to keep your little ones stylish and comfy.</p>
        <p><strong>Bags & Accessories:</strong> A curated selection of backpacks, purses, and travel essentials to complement your style.</p>
        <p><strong>Hassle-Free Payments:</strong> Shop with ease using secure online payment options, including credit/debit cards, UPI, and wallet services.</p>
        <p><strong>Fast Delivery:</strong> Enjoy swift and reliable delivery at your doorstep, with easy returns and exchanges.</p>
        <p>Step into a world of convenience and style—where shopping is seamless and satisfaction is guaranteed!</p>
          </p>
          <div className='d-flex'>
            <LinkContainer to='/login'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            </LinkContainer>
            <LinkContainer to='/register'>
            <Button variant='secondary'>
              Sign Up
            </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;