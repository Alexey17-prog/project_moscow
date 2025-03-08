export function ContactInfo() {
    return (
        <div className="flex items-center text-sm">
            <div className="flex items-start mr-6">
                <div className="text-red-600 mr-1">
                    {/* Иконка адреса */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                </div>
                <div>
                    <p>Москва, ул. Петровка,</p>
                    <p>д. 15, стр. 1</p>
                </div>
            </div>

            <div className="flex items-start mr-6">
                <div className="text-red-600 mr-1">
                    {/* Иконка телефона */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                    </svg>
                </div>
                <div>
                    <p className="font-bold">+7 495 276 12 19</p>
                    <p>Пн. - Пт.: с 9:00 до 18:00</p>
                </div>
            </div>

            <div>
                <button className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 transition-colors">
                    Задать вопрос
                </button>
            </div>
        </div>
    );
}