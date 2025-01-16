import React, { useContext, useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import location from '../assets/location-icon.png';
import search from '../assets/search-icon.png';
import usflag from '../assets/usa-flag-removebg.png';
import cart from '../assets/cart-i.png';
import { ProductContext } from './context/ProductsContext';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Header = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const { cartItems } = useContext(ProductContext);
    const [user, setUser] = useState(null); 
    const navigate = useNavigate();
    const auth = getAuth();

    // Calculate total items in the cart
    const totalCartItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
    };

    // Handle user logout
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser(null); 
                navigate('/');
            })
            .catch((error) => {
                console.error('Logout failed: ', error);
            });
    };

    // Check user authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); 
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <div className='nav-bar text-white d-flex align-items-center px-3'>
            <div>
                <Link to='/'><img className='logo-img' src={logo} alt="logo" /></Link>
            </div>
            <div className='d-flex align-items-center location-container'>
                <div>
                    <img className='color-white location-img' src={location} alt="location" />
                </div>
                <div>
                    <p className='text-white-50 deliver'>Deliver to <br /><span className='text-white fw-bolder'>Ethiopia</span></p>
                </div>
            </div>

            <div className='mx-4 d-flex input-search-area align-items-center position-relative '>
                <div className='align-items-center'>
                    <select className='header-select'>
                        <option value="All">All</option>
                        <option value="All Departments">All Departments</option>
                        <option value="Arts&Crafts">Arts&Crafts</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Baby">Baby</option>
                        <option value="Beauty&PersonalCare">Beauty&PersonalCare</option>
                        <option value="Books">Books</option>
                        <option value="Boy's Fashion">Boy's Fashion</option>
                        <option value="Computer">Computer</option>
                        <option value="Deals">Deals</option>
                        <option value="Digital Music">Digital Music</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Girls Fashion">Girls Fashion</option>
                        <option value="Health&Household">Health&Household</option>
                        <option value="Home&Kitchen">Home&Kitchen</option>
                        <option value="Industrial&Scientific">Industrial&Scientific</option>
                        <option value="Kindle Store">Kindle Store</option>
                        <option value="Lugage">Lugage</option>
                        <option value="Men,sFashion">MensFashion</option>
                        <option value="Mobile&TV">Mobile&TV</option>
                        <option value="Music,CDs&Vinyl">Music,CDs&Vinyl</option>
                    </select>
                </div>
                <div className='align-items-center d-flex flex-grow-1'>
                    <input className='search-input' type="text" placeholder='Search Amazon' />
                </div>
                <div className='search-icon'>
                    <img className='search-img' src={search} alt="Search" />
                </div>
            </div>

            <div className='d-flex position-relative language'>
                <div>
                    <img className='us--flag' src={usflag} alt="Flag" />
                </div>
                <div className='en'>
                    <b>{selectedLanguage === 'EN' ? 'EN' : 'العربية - AR'}</b>
                    <small className='down--arrow'>▼</small>
                </div>
                <div className='language-options position-absolute bg-white text-dark'>
                    <p>Change language <span>learn more</span></p>
                    <div className='d-flex'>
                        <input
                            className='language-check-box'
                            type="checkbox"
                            checked={selectedLanguage === 'EN'}
                            onChange={() => handleLanguageChange('EN')}
                        />
                        <p>English - EN</p>
                    </div>
                    <hr />
                    <div className='d-flex'>
                        <input
                            className='language-check-box'
                            type="checkbox"
                            checked={selectedLanguage === 'AR'}
                            onChange={() => handleLanguageChange('AR')}
                        />
                        <p>العربية - AR</p>
                    </div>
                </div>
            </div>

            {/* User login/logout */}
            <div className='login position-relative'>
                <p>
                    {user ? (
                        <>
                            Hello, {user.displayName || user.email} <br />
                            <b>Accounts & Lists</b><span>▼</span>
                        </>
                    ) : (
                        <>
                            Hello, sign in <br />
                            <b>Accounts & Lists</b><span>▼</span>
                        </>
                    )}
                </p>
                <div className='sign--in text-center position-absolute bg-white text-dark'>
                    {user ? (
                        <button onClick={handleLogout} className='mt-3'>Logout</button>
                    ) : (
                        <button onClick={() => navigate('/login')} className='mt-3'>Sign in</button>
                    )}
                    {!user && (
                        <p className='mt-2'>
                            New customer? <span className='fs-6 text-primary'>Start here</span>
                        </p>
                    )}
                </div>
            </div>

            <div className='returns'>
                <p>Returns <br /><b>& Orders</b></p>
            </div>

            <div className='d-flex position-relative cart'>
                <Link to='/cart'><img className='shop-cart' src={cart} alt="Cart" /></Link>
                <b className='position-absolute cart-b'>{totalCartItems}</b>
            </div>
        </div>
    );
};

export default Header;
