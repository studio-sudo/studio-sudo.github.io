import { Openable } from '../components/Openable';
import './FaqCard.scss';

export function FaqCard() {
    return <div id="faq" className='stripe'>
        <div className='fancy-vector'></div>
        <h2 className='centered'>FAQ</h2>
        <div className='lead-text centered mb-5'>Pytania i odpowiedzi</div>
        <div className='row'>
            <div className='offset-lg-1 col-lg-5 col-md-6 col-12 px-md-5 mb-3'>
                <div className='d-flex flex-column'>
                    <Openable label="Co możecie wykonać?">
                    Nasza firma oferuje różnorodne usługi, które mogą wesprzeć Twój biznes i pomóc Ci zrealizować Twoje plany.<br/>
                    Nie ważne, czy potrzebujesz nowych aplikacji, stron internetowych czy pomocy Sztucznej Inteligencji &#8211;
                        nasza firma ma doświadczenie i wiedzę, by spełnić Twoje oczekiwania i pomóc Ci osiągnąć sukces w dzisiejszym dynamicznym środowisku biznesowym.
                    </Openable>
                    <Openable label="Ile kosztują usługi?">
                    Cena naszych usług zależy od skomplikowania projektu oraz indywidualnych potrzeb i wymagań Twojej firmy.<br/>
                    Ponieważ każda usługa może mieć różne zakresy i specyfikacje, dokładna cena zostanie ustalona po dokładnym zrozumieniu Twoich potrzeb i oczekiwań.<br/>
                    Zachęcamy Cię do skontaktowania się z nami, aby omówić szczegóły projektu i uzyskać spersonalizowaną ofertę cenową.<br/>
                    Jesteśmy gotowi dostosować się do Twojego budżetu i dostarczyć wartościowe rozwiązania, które przyniosą korzyści Twojej firmie.
                    </Openable>
                    <Openable label="Czy oferujecie wsparcie techniczne?">
                    Tak, oferujemy wsparcie techniczne dla wszystkich naszych usług.<br/>
                    Dołożymy wszelkich starań, aby zapewnić Ci pełne wsparcie w każdym etapie realizacji projektu oraz po jego zakończeniu.<br/>
                    Niezależnie od tego, czy potrzebujesz pomocy przy konfiguracji, utrzymaniu, aktualizacjach czy rozwiązywaniu ewentualnych problemów,
                     służymy profesjonalnym wsparciem, aby zapewnić Ci spokojny i efektywny proces korzystania z naszych usług.<br/>
                    Jesteśmy tutaj, by upewnić się, że Twoje rozwiązania działają płynnie i efektywnie, spełniając Twoje oczekiwania.
                    </Openable>
                </div>
            </div>
            <div className='col-lg-5 col-md-6 col-12 px-md-5'>
                <div className='d-flex flex-column'>
                    <Openable label="Ile trwa cała realizacja?">
                    Czas trwania całego procesu zależy od rodzaju usługi oraz indywidualnych wymagań Twojego projektu.<br/>
                    Każdy projekt jest unikalny i może różnić się zakresem pracy, skomplikowaniem oraz dostępnymi zasobami.<br/>
                    Po zrozumieniu Twoich potrzeb i oczekiwań, będziemy w stanie dostarczyć Ci oszacowanie czasu trwania projektu.<br/>
                    Naszym celem jest zapewnienie efektywnej i terminowej realizacji, aby Twoje plany stały się rzeczywistością w możliwie krótkim czasie.
                    </Openable>
                    <Openable label="Jakie są główne etapy realizacji?">
                    Oprogramowanie tworzymy w oparciu o metodologie zwinne:<br/>

                    <ol>
                    <li><strong>Planowanie</strong>: Na początku określamy cele, które projekt musi osiągnąć i tworzymy listę funkcjonalności.</li>

                    <li><strong>Wykonanie</strong>: Działamy w krótkich cyklach, które trwają zwykle od 1 do 4 tygodni.</li>

                    <li><strong>Przegląd i dostarczenie</strong>: Po zakończeniu każdego cyklu prezentujemy Ci to, co udało się stworzyć.</li>

                    <li><strong>Ocenianie i dostosowanie</strong>: Na podstawie Twojej opinii oraz postępu prac, zespół i Ty wspólnie decydujecie, co jest najważniejsze do zrobienia w następnym cyklu.</li>
                    </ol>
                    Ten proces powtarza się cyklicznie, a każdy cykl przynosi nowe ulepszenia i funkcjonalności.<br/>
                    Pozwala to na elastyczność, szybką reakcję na zmiany i utworzenie oprogramowania, które spełni wszystkie Twoje oczekiwania.
                    </Openable>
                    <Openable label="W jakich technologiach pracujecie?">
                    Nasza firma korzysta z wielu zaawansowanych technologii, aby dostarczyć Ci wysokiej jakości rozwiązania, między innymi:<br/>
                    React, Razor, Blazor, Angular, ASP.NET Core MVC, Rust oraz Node.JS<br/>
                    Działamy w szerokim spektrum technologii, aby dostosować się do specyficznych wymagań projektów i dostarczyć innowacyjne, dopasowane do potrzeb rozwiązania.
                    </Openable>
                </div>
            </div>
        </div>
    </div>;
}