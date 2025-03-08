import './Header.css';

export const NavMenu = () => {
    return (
        <div className="nav-container">
            <div className="container">
                <nav className="nav-menu">
                    <div className="menu-items">
                        <div className="menu-item">
                            <button>
                                Палата
                                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 9L12 16L5 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="menu-item">
                            <a href="#">Новости</a>
                        </div>

                        <div className="menu-item">
                            <a href="#">Календарь мероприятий</a>
                        </div>

                        <div className="menu-item">
                            <button>
                                Гильдии и комитеты
                                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 9L12 16L5 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="menu-item">
                            <button>
                                Услуги и проекты
                                <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 9L12 16L5 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="menu-item">
                            <a href="#">Вступить в МТПП</a>
                        </div>
                    </div>

                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Введите текст для поиска..." />
                        <button className="search-button">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};