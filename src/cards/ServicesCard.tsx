import './ServicesCard.scss';

export function ServicesCard() {

    return (
        <div id="services" className='pb-5 stripe'>
            <div className="info">
                <h2 className='centered'>Nasze usługi</h2>
                <div className="lead-text centered mb-3">Twoje marzenia, nasza realizacja</div>
                <div className="sections row">
                    <div className='col-md-4 col-12'>
                        <div className="icon icon-2"></div>
                        <h3>Strony Internetowe</h3>
                        <div className="desc">Twoja witryna to wizytówka Twojej firmy w świecie online. Nasze strony internetowe nie tylko zachwycą estetyką, ale są także zoptymalizowane pod kątem wydajności i pozycjonowania.</div>
                    </div>
                    <div className='col-md-4 col-12'>
                        <div className="icon icon-3"></div>
                        <h3>Aplikacje Webowe</h3>
                        <div className="desc">Tworzymy dynamiczne aplikacje internetowe, które nie tylko zachwycą użytkowników swoim wyglądem, ale także łączą go z zaawansowaną funkcjonalnością.</div>
                    </div>
                    <div className='col-md-4 col-12'>
                        <div className="icon icon-4"></div>
                        <h3>Sztuczna Inteligencja (AI)</h3>
                        <div className="desc">Wprowadź swoją firmę w erę nowoczesności dzięki naszym zaawansowanym rozwiązaniom opartym na Sztucznej Inteligencji. Optymalizuj procesy, analizuj dane oraz prognozuj trendy z niespotykaną wcześniej precyzją.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}