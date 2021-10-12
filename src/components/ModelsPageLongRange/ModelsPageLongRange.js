import React from 'react';
import { FormattedMessage } from 'react-intl';
import ContactPage from '../ContactPage/ContactPage'
import LongRangeBike from '../../images/models/model.svg'
import './ModelsPageLongRange.scss'

const ModelsPage = () => {
    return (
        <section className="models-section">
            <div className="heading-container">
                <h1 className="heading-container__title">Model LongRange</h1>
            </div>
            <div className="models__grid">
                <div className="model-section__bike-container">
                    <LongRangeBike className="bike-container__photo"/>
                    
                    <h1 className="bike-container__name second-name">Long Range</h1>
                    <p className="bike-container__description">Model Long Range został stworzony dla osób lubiących długie i komfortowe wycieczki nie tylko po utwardzonych ścieżkach.  Bateria o pojemności 2800Wh w połączeniu z przednim kołem rowerowym i lżejszym, bardziej ekonomicznym napędem elektrycznym pozwoli użytkownikowi cieszyć się podróżą nawet do 200km. Dwa ekonomiczne tryby jazdy dla fanów klasycznych wycieczek rowerowych i pozostałe dwa tryby dla miłośników mocniejszych wrażeń sprawiają, że każdy znajdzie odpowiednią konfigurację dla siebie. W wyposażeniu takze skaner lini papilarnych, oświetlenie LED, tempomat, manetka do hamowana regeneracyjnego a także bieg wsteczny. Dla jeszcze większego komfortu i bezpieczeństwa zastosowaliśmy hydrauliczne 4-tłoczkowe hamulce Tektro wraz z tarczami pływającymi.</p>
                    <div className="bike-container__table">
                        <div className="bike-container__specification">
                            <table>
                                <tr>
                                    <th>Rama</th>
                                    <th>Rama jest elementem, który jako pierwszy przykuwa uwagę i zarazem wyróżnia nasz rower spośród innych pojazdów tego typu. Połączenie korpusu wykonanego ze stali konstrukcyjnej  z aluminiowym wahaczem oraz wytrzymałą obudową baterii z tworzywa pozwoliły nam stworzyć niespotykany dotąd na rynku design. Całość została przeliczona pod względem geometrii oraz  wytrzymałości w newralgicznych punktach, aby zapewnić bezpieczeństwo użytkowania na najwyższym poziomie.  Ponieważ rama  spawana jest w technologi TIG, jej produkcję postanowiliśmy zostawić certyfikowanym specjalistom w tej dziedzinie, choć oczywiście nadzorujemy proces powstawania każdej sztuki. </th>
                                </tr>
                                <tr>
                                    <td>Silnik</td>
                                    <td>O mocy 4500W. W modelu Long Range oferujemy bezszczotkowe silniki z serii Mxus 3K Turbo. Charakteryzują się one wysoką kulturą pracy, mocą i bezawaryjnością. 

</td>
                                </tr>
                                <tr>
                                    <td>Bateria</td>
                                    <td>72V 2800Wh - Wykorzystujemy tylko nowe topowe ogniwa litowo-jonowe Samsung 35E, każde ogniwo przed zgrzaniem jest dodatkowo testowane i kontrolowane, aby zapewnić najwyższą jakość. Stosujemy nowoczesne kontrolery baterii(BMS) dbające o bezpieczeństwo oraz żywotność akumulatora. Do każdego egzemplarza dodajemy dokument potwierdzający rzeczywistą pojemność baterii. Żywotność po 400 cyklach ładowania wynosi około 80% początkowej pojemności.</td>
                                </tr>
                                <tr>
                                    <td>Amortyzacja przód</td>
                                    <td>Amortyzatory dwupółkowe o skoku 200mm DNM USD, RST Killah.</td>
                                </tr>
                                <tr>
                                    <td>Amortyzacja tył</td>
                                    <td>Damper DNM RCP 2s 241mm</td>
                                </tr>
                                <tr>
                                    <td>Wyświetlacz LCD</td>
                                    <td>Posiada wysokiej jasności 5 calową matrycę. Zaprojektowany od podstaw nowoczesny dotykowy, wodoodporny panel sterujący o stopniu ochrony IP65. Z poziomu wyświetlacza możemy zmieniać tryby jazdy City 250W, City+ 750W, Off Road 2500W, Off Road+ 4500W, uruchomić oświetlenie do jazdy dziennej,opcjonalnie sterować bramą wjazdową/garażową, dodawać użytkowników pojazdu. Wyświetlane parametry: prędkość, moc, graficzny wskaźnik mocy, aktualny tryb jazdy, napięcie , procentowy wskaźnik poziomu baterii, przebieg całkowity, przebieg kasowalny, przebieg tymczasowy, kasowalny czas jazdy, zegar, temperatura silnika, stan tempomatu, stan kierunkowskazów.</td>
                                </tr>
                                <tr>
                                    <td>Sterownik</td>
                                    <td>Sterownik X2B, nowoczesty i bardzo wydajny aktywnie chłodzony kontroler, zaprojektowany i wykonany w EU.</td>
                                </tr>
                                <tr>
                                    <td>Hamulce</td>
                                    <td>Tektro HD-E730, jedne z najmocniejszych dostepnych na rynku humlców 4-tłoczkowych. Komfortowa klamka, czujniki odcięcia i tarcze Magura MDR-P 203 mm sprawiają że szybko i bezpiecznie zatrzymasz się z maksymalnych prędkości.</td>
                                </tr>
                                <tr>
                                    <td>System PAS i tryby jazdy</td>
                                    <td>Standardowo każdy rower wyposażony jest w czujnik nacisku na korbe umiejscowiony w suporcie działający wyłącznie w trybach City 250W i City+ 750W z ograniczeniem prędkości do 25km/h. Wspomaganie pedałowania działa jak w klasycznym rowerze elektrycznym, jest przewidywalne i komfortowe w użytkowaniu nawet dla niedoświadczonych użytkowników.  Tryby Off Road 2500W i Off Road+ 4500W nie aktywują systemu PAS, działają wyłącznie z manetką gazu i pozwalają w pełni wykorzystać potencjał roweru. 
Wszystkie tryby są płynnie przełączane z poziomu dotykowego wyświetlacza.</td>
                                </tr>
                                <tr>
                                    <td>Mechanizm korbowy</td>
                                    <td>Ramiona Shimano w połączeniu z wykonanym z aluminium adapterem i osłoną zębatki</td>
                                </tr>
                                <tr>
                                    <td>Oświetlenie przód</td>
                                    <td>Lampa LED 18W zasilana z baterii pojazdu, z funkcją świateł krótkich uruchamianych z wyświetlacza</td>
                                </tr>
                                <tr>
                                    <td>Oświetlenie tył/alarm</td>
                                    <td>Lampa LED zintegrowana z alarmem i własnym zasilaniem, sterowana z pilota.</td>
                                </tr>
                                <tr>
                                    <td>Max Prędkość</td>
                                    <td>65-70km/h</td>
                                </tr>
                                <tr>
                                    <td>Zasięg</td>
                                    <td>Zasięg to 200km. Wartość wyliczona dla użytkownika 80kg i stałej prędkości około 30km/h.</td>
                                </tr>
                                <tr>
                                    <td>Koła</td>
                                    <td>Rowerowe-przód 24x2,6”, tył motocyklowe 18x3"</td>
                                </tr>
                                <tr>
                                    <td>Lakierowanie</td>
                                    <td>Ramy oraz obręcze kół lakierowane są proszkowo z zabezpieczającą warstwą lakieru bezbarwnego. Kolor korpusu, wahacza oraz obręczy do wyboru z palety RAL</td>
                                </tr>
                                <tr>
                                    <td>Ładowarka</td>
                                    <td>5A, opcjonalnie szybka 10A</td>
                                </tr>
                                <tr>
                                    <td>Wyposażenie standardowe</td>
                                    <td>Silnik Mxus 3K Turbo, Bateria 2800Wh Samsung 35E, dotykowy wyświetlacz, oświetlenie przód tył, alarm, błotnik tył, hamulce Tektro HD-E730, tarcze hamulcowe Magura 203mm , damper DNM, amortyzator przód RST Killah/DNM USD, ładowarka 5A</td>
                                </tr>
                                <tr>
                                    <td>Wyposażenie opcjonalne</td>
                                    <td>Lokalizator GPS, zdalne sterowanie bramą wjazdową/garażową, tarcza przód Magura 220mm, wyższej klasy zawieszenie przód/tył (FOX/RockShox/Marzocchi/SunTour/Manitou), obręcz tył Excel, szybka ładowarka 10A, naklejki, inne propozycje zamawiającego</td>
                                </tr>
                            </table>
                        </div>
                        <div className="faq__kicker">
                            <h1 className="faq__kicker-text">Zapraszamy do odwiedzenia zakładki FAQ, gdzie znajdują się odpowiedzi na najczęściej zadawane pytania lub do kontaktu przez formularz.</h1>
                        </div>
                </div>
            </div>
            </div>
            <ContactPage />
        </section>
    )
};

export default ModelsPage;
