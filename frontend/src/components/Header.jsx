import { Navbar, Nav, Container,NavDropdown,Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt, FaShoppingCart, FaHeart,FaHome, FaBox} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';


const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

const dispatch = useDispatch();
const navigate = useNavigate();

const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };logoutHandler

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
                 <LinkContainer to="/">
                        <Nav.Link as="div" className="d-inline-block ms-3 me-3">
                          <button
                            className="btn p-0 text-white fs-3"
                            style={{ background: 'transparent', border: 'none' }}
                          >
                            <FaHome />
                          </button>
                        </Nav.Link>
                  </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {userInfo ? (
                <>
                <LinkContainer to="/ProductDetails">
                        <Nav.Link as="div" className="d-inline-block me-">
                                  <button
                                    className="btn p-0 text-white fs-3 ms-3 me-3"
                                    style={{ background: 'transparent', border: 'none' }}
                                  >
                                    <FaBox />
                                  </button>
                        </Nav.Link>
                  </LinkContainer>
                  
                  <LinkContainer to="/cart">
                        <Nav.Link as="div" className="d-inline-block me-">
                                  <button
                                    className="btn p-0 text-white fs-3 ms-3 me-3"
                                    style={{ background: 'transparent', border: 'none' }}
                                  >
                                    <FaShoppingCart />
                                  </button>
                        </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/wishlist">
                       <Nav.Link as="div" className="d-inline-block">
                                <button
                                  className="btn p-0 text-white fs-3 ms-3 me-3"
                                  style={{ background: 'transparent', border: 'none' }}
                                >
                                  <FaHeart />
                                </button>
                        </Nav.Link>
                  </LinkContainer>

                 <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/ProductDetails'>
                      <NavDropdown.Item>Product</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Update Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={ logoutHandler }>Logout</NavDropdown.Item>
                 </NavDropdown>
                </>
              ) : (
                 <>
                        <LinkContainer to='/login'>
                            <Nav.Link>
                              <FaSignInAlt />Sign In
                            </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/register'>
                            <Nav.Link>
                              <FaSignOutAlt />Sign Up
                            </Nav.Link>
                        </LinkContainer>
                 </>
              ) }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;