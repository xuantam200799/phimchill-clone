import React, { useRef, useEffect, useCallback, useState } from 'react';

import { Link, useLocation, useHistory } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/logo.png'
import headerNav, { headerGenreDropdown } from '../../assets/data/linkData'

const Header = () => {

    const { pathname } = useLocation();

    const searchToggleRef = useRef(null);
    const searchInputRef = useRef(null);
    
    const searchInputToggle = () => {
        searchToggleRef.current.classList.toggle("active");
        searchInputRef.current.classList.toggle("expand");
    }

    useEffect(() => {
        searchToggleRef.current.classList.remove("active");
        searchInputRef.current.classList.remove("expand");
    }, [pathname])

    return (
        <div className="header">
            <div className="header__wrap container">
                <div className="header__toggle">
                    <button><i className="bx bx-menu"></i></button>
                </div>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__nav">
                    <div className="header__nav__left">
                        {
                            headerNav.map((e, i) => (
                                <li key={i}>
                                    <Link to={e.path}>{e.display}</Link>
                                </li>
                            ))
                        }
                        <HeaderDropdown title="Thể loại" item={headerGenreDropdown} />
                        <HeaderDropdown title="Quốc gia" item={headerGenreDropdown} />
                        <HeaderDropdown title="Năm phát hành" item={headerGenreDropdown} />
                        <HeaderDropdown title="Top phim" item={headerGenreDropdown} />
                    </div>
                    <div className="header__nav__right">
                        <div className="header__search">
                            <button ref={searchToggleRef} className="header__search__toggle" onClick={() => searchInputToggle()}>
                                <i className='bx bx-search'></i>
                                <i className='bx bx-x'></i>
                            </button>
                            <div ref={searchInputRef} className="header__search__input-group">
                                <MovieSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MovieSearch = () => {

    const history = useHistory();

    const [keyword, setKeyword] = useState('');

    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history.push(`/movie/search/${keyword}`);
                setKeyword('');
            }
        },
        [keyword, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="header__search__input-group__container">
            <button onClick={goToSearch}><i className='bx bx-search'></i></button>
            <input type="text" placeholder="Search.." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </div>
    )
}

const HeaderDropdown = (props) => {
    return (
        <li className="dropdown">
            <span className="dropdown__btn">{props.title}</span>
            <div className="dropdown__content">
                {
                    props.item.map((e, i) => (
                        <span key={i}>
                            <Link to={e.path}>{e.display}</Link>
                        </span>
                    ))
                }
            </div>
        </li>
    )
}

export default Header
