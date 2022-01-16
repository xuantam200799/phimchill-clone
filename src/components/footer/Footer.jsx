import React from 'react'

import { Link } from 'react-router-dom'

import './footer.scss'
import logo from '../../assets/logo.png'

const newMovieLinks = [
    {
        display: 'Phim chiếu rạp',
        path: '/'
    },
    {
        display: 'Phim lẻ',
        path: '/'
    },
    {
        display: 'Phim bộ',
        path: '/'
    },
    {
        display: 'Phim hành động',
        path: '/'
    },
    {
        display: 'Phim viễn tưởng',
        path: '/'
    },
    {
        display: 'Phim tâm lý',
        path: '/'
    },
    {
        display: 'Phim hài hước',
        path: '/'
    },
];
const favoriteMovieLinks = [
    {
        display: 'Phim mỹ',
        path: '/'
    },
    {
        display: 'Phim Hàn Quốc',
        path: '/'
    },
    {
        display: 'Phim Trung Quốc',
        path: '/'
    },
    {
        display: 'Phim Thái Lan',
        path: '/'
    },
    {
        display: 'Phim Việt Nam',
        path: '/'
    },
    {
        display: 'Phim ma kinh dị',
        path: '/'
    },
    {
        display: 'Phim hoạt hình',
        path: '/'
    },
];
const hotMovieLinks = [
    {
        display: 'Phim mới',
        path: '/'
    },
    {
        display: 'Sitemap',
        path: '/'
    },
];
const helperLinks = [
    {
        display: 'Hỏi đáp',
        path: '/'
    },
    {
        display: 'Liên hệ',
        path: '/'
    },
    {
        display: 'Tin tức',
        path: '/'
    },
];
const policyLinks = [
    {
        display: 'Điều khoản sử dụng',
        path: '/'
    },
    {
        display: 'Chính sách riêng tư',
        path: '/'
    },
    {
        display: 'Khiếu nại bản quyền',
        path: '/'
    },
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="grid-footer">
                    <div className="grid-footer__col">
                        <img src={logo} alt="" />
                    </div>
                    <div className="grid-footer__col">
                        <p className="grid-footer__col__title">
                            Phim Mới
                        </p>
                        <div className="grid-footer__col__links">
                            {
                                newMovieLinks.map((e, i) => (
                                    <Link to={e.path} key={i} className="grid-footer__col__links__item">{e.display}</Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="grid-footer__col">
                        <p className="grid-footer__col__title">
                            Phim Hay
                        </p>
                        <div className="grid-footer__col__links">
                            {
                                favoriteMovieLinks.map((e, i) => (
                                    <Link to={e.path} key={i} className="grid-footer__col__links__item">{e.display}</Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="grid-footer__col">
                        <p className="grid-footer__col__title">
                            Phim Hot
                        </p>
                        <div className="grid-footer__col__links">
                            {
                                hotMovieLinks.map((e, i) => (
                                    <Link to={e.path} key={i} className="grid-footer__col__links__item">{e.display}</Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="grid-footer__col">
                        <p className="grid-footer__col__title">
                            Trợ giúp
                        </p>
                        <div className="grid-footer__col__links">
                            {
                                helperLinks.map((e, i) => (
                                    <Link to={e.path} key={i} className="grid-footer__col__links__item">{e.display}</Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="grid-footer__col">
                        <p className="grid-footer__col__title">
                            Thông tin
                        </p>
                        <div className="grid-footer__col__links">
                            {
                                policyLinks.map((e, i) => (
                                    <Link to={e.path} key={i}className="grid-footer__col__links__item">{e.display}</Link>
                                ))
                            }
                            <p>© 2021 PhimChill.Net</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
