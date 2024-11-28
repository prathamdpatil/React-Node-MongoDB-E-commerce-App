import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Prathamesh Application Authentication</h1>
          <p className='text-center mb-4'>
              A skilled frontend React developer with expertise
              in JavaScript and Redux, experienced in building
              modern web applications using Node.js,MySql,
              React.js and related libraries. Proficient in
              integrating REST APIs, implementing CI/CD
              pipelines, and following Agile methodologies, with
              strong problem- solving and debugging skills
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