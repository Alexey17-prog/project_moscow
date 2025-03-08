import './Header.css';

export const ContactInfo = () => {
    return (
        <div className="contact-info">
            <div className="address">
                <div className="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5303 21.4851 12 21.4851C11.4697 21.4851 10.961 21.2746 10.586 20.9L6.343 16.657C4.22422 14.5381 3.0021 11.6345 3 8.6C3 4.4 6.4 1 10.6 1C14.8 1 18.2 4.4 18.2 8.6C18.1979 11.6345 16.9758 14.5381 14.857 16.657H17.657Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div>
                    <p>Москва, ул. Петровка,</p>
                    <p>д. 15, стр. 1</p>
                </div>
            </div>

            <div className="phone">
                <div className="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 5C3 3.89543 3.89543 3 5 3H8.28C8.74354 3 9.15733 3.28191 9.3 3.72L10.8 8.2C10.9255 8.59336 10.8458 9.0248 10.6 9.33L8.3 12.32C9.5 14.5 11.5 16.5 13.68 17.7L16.67 15.4C16.9752 15.1542 17.4066 15.0745 17.8 15.2L22.28 16.7C22.7181 16.8427 23 17.2565 23 17.72V21C23 22.1046 22.1046 23 21 23H20C10.6112 23 3 15.3888 3 6V5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div>
                    <p className="phone-number">+7 495 276 12 19</p>
                    <p className="working-hours">Пн. - Пт.: с 9:00 до 18:00</p>
                </div>
            </div>

            <div className="action-container">
                <button className="ask-button">Задать вопрос</button>

                <div className="language-selector">
                    <a href="#">rus</a>
                    <a href="#">eng</a>
                </div>
            </div>
        </div>
    );
};