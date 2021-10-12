import React from 'react';
import { FormattedMessage } from 'react-intl';
import ContactPage from '../ContactPage/ContactPage'
import LongRangeBike from '../../images/models/model.svg'
import LongRangeBikeImage from '../../images/slider/first.svg'
import SimpleSlider from '../Slider/slider'
import './ModelsPage.scss'

const ModelsPage = () => {
    return (
        <section className="models-section">
            <div className="heading-container">
                <h1 className="heading-container__title">Model Performance</h1>
            </div>
            <div className="models__grid">
                <div className="model-section__bike-container">
                    <LongRangeBike className="bike-container__photo"/>
                    <h1 className="bike-container__name second-name">Performance</h1>
                    <p className="bike-container__description">Model Performance został stworzony dla osób poszukujących ekstremalnych i niezapomnianych wrażeń, dzięki zastosowaniu silnika QS205 o mocy 8400W w połączeniu z nowoczesnym kontrolerem, uzyskaliśmy wysoki moment obrotowy, który dostępny jest w pełnym zakresie prędkości. Nie straszne Ci będą strome podjazdy, wymagające trasy i trudnodostępne miejsca. Posiada 4 tryby jazdy, skaner linii papilarnych, oświetlenie LED, czujnik nacisku w suporcie, tempomat, dodatkową manetkę do hamowania regeneracyjnego oraz bieg wsteczny. Hydrauliczne 4 tłoczkowe hamulce Tektro w połączeniu z tarczami pływającymi zapewniają wysokie bezpieczeństwo i komfort użytkownika.</p>
                    <div className="bike-container__table">
                        <div className="bike-container__specification">
                            <table>
                                <tr>
                                    <th>Rama</th>
                                    <th>Rama jest elementem, który jako pierwszy przykuwa uwagę i zarazem wyróżnia nasz rower spośród innych pojazdów tego typu. Połączenie korpusu wykonanego ze stali konstrukcyjnej  z aluminiowym wahaczem oraz wytrzymałą obudową baterii z tworzywa pozwoliły nam stworzyć niespotykany dotąd na rynku design. Całość została przeliczona pod względem geometrii oraz  wytrzymałości w newralgicznych punktach, aby zapewnić bezpieczeństwo użytkowania na najwyższym poziomie.  Ponieważ rama  spawana jest w technologi TIG, jej produkcję postanowiliśmy zostawić certyfikowanym specjalistom w tej dziedzinie, choć oczywiście nadzorujemy proces powstawania każdej sztuki. </th>
                                </tr>
                                <tr>
                                    <td>Silnik</td>
                                    <td>O mocy 8400W. W modelu performance oferujemy bezszczotkowe silniki z serii QS205 50H 4T lub 5T. Charakteryzują się one wysoką kulturą pracy, mocą i bezawaryjnością. QS205 4T wyróżnia się wyższą prędkością maksymalną, natomiast wersja QS205 5T odczuwalnie większym przyspieszeniem.</td>
                                </tr>
                                <tr>
                                    <td>Bateria</td>
                                    <td>72V 2400Wh - Wykorzystujemy tylko nowe topowe ogniwa litowo-jonowe, każde ogniwo przed zgrzaniem jest dodatkowo testowane i kontrolowane, aby zapewnić najwyższą jakość. Stosujemy nowoczesne kontrolery baterii(BMS) dbające o bezpieczeństwo oraz żywotność akumulatora. Do każdego egzemplarza dodajemy dokument potwierdzający rzeczywistą pojemność baterii. Żywotność po 400 cyklach ładowania wynosi około 80% początkowej pojemności.</td>
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
                                    <td>Posiada wysokiej jasności 5 calową matrycę. Zaprojektowany od podstaw nowoczesny dotykowy, wodoodporny panel sterujący o stopniu ochrony IP65. Z poziomu wyświetlacza możemy zmieniać tryby jazdy City 250W, City+ 750W, Off Road 5000W, Off Road+ 8000W, uruchomić oświetlenie do jazdy dziennej,opcjonalnie sterować bramą wjazdową/garażową, dodawać użytkowników pojazdu. Wyświetlane parametry: prędkość, moc, graficzny wskaźnik mocy, aktualny tryb jazdy, napięcie , procentowy wskaźnik poziomu baterii, przebieg całkowity, przebieg kasowalny, przebieg tymczasowy, kasowalny czas jazdy, zegar, temperatura silnika, stan tempomatu, stan kierunkowskazów</td>
                                </tr>
                                <tr>
                                    <td>Sterownik</td>
                                    <td>Sterownik X3B, nowoczesty i bardzo wydajny aktywnie chłodzony kontroler, zaprojektowany i wykonany w EU.</td>
                                </tr>
                                <tr>
                                    <td>Hamulce</td>
                                    <td>Tektro HD-E730, jedne z najmocniejszych dostepnych na rynku humlców 4-tłoczkowych. Komfortowa klamka, czujniki odcięcia i tarcze Magura MDR-P 203 mm sprawiają że szybko i bezpiecznie zatrzymasz się z maksymalnych prędkości.</td>
                                </tr>
                                <tr>
                                    <td>System PAS i tryby jazdy</td>
                                    <td>Standardowo każdy rower wyposażony jest w czujnik nacisku na korbe umiejscowiony w suporcie działający wyłącznie w trybach City 250W i City+ 750W z ograniczeniem prędkości do 25km/h. Wspomaganie pedałowania działa jak w klasycznym rowerze elektrycznym, jest przewidywalne i komfortowe w użytkowaniu nawet dla niedoświadczonych użytkowników.  Tryby Off Road 5000W i Off Road+ 8000W nie aktywują systemu PAS, działają wyłącznie z manetką gazu i pozwalają w pełni wykorzystać potencjał roweru. 
Wszystkie tryby są płynnie przełączane z poziomu dotykowego wyświetlacza.</td>
                                </tr>
                                <tr>
                                    <td>Mechanizm korbowy</td>
                                    <td>Ramiona Shimano w połączeniu z wykonanym z aluminium adapterem i osłoną zębatki.</td>
                                </tr>
                                <tr>
                                    <td>Oświetlenie przód</td>
                                    <td>Lampa LED 18W zasilana z baterii pojazdu, z funkcją świateł krótkich uruchamianych z wyświetlacza.</td>
                                </tr>
                                <tr>
                                    <td>Oświetlenie tył/alarm</td>
                                    <td>Lampa LED zintegrowana z alarmem i własnym zasilaniem, sterowana z pilota.</td>
                                </tr>
                                <tr>
                                    <td>Max Prędkość</td>
                                    <td>Przy wyborze silnika QS205 4T wynosi około 90km/h oraz 75km/h dla modelu 5T. Prędkość maksymalna zależy od typu silnika(jego nawoju).</td>
                                </tr>
                                <tr>
                                    <td>Zasięg</td>
                                    <td>Zasięg to 120km. Wartość wyliczona dla użytkownika 80kg i stałej prędkości około 30km/h.</td>
                                </tr>
                                <tr>
                                    <td>Koła</td>
                                    <td>Motocyklowe-przód 19x2,75”, tył 18x3"</td>
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
                                    <td>Silnik QS205 50H, Bateria 20s11p, dotykowy wyświetlacz, oświetlenie przód tył, alarm, błotnik tył, hamulce Tektro HD-E730, tarcze hamulcowe Magura 203mm , damper DNM, amortyzator przód RST Killah/DNM USD, ładowarka 5A</td>
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
                    <SimpleSlider />
                </div>
            </div>
            <ContactPage />
        </section>
    )
};

export default ModelsPage;
