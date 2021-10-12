import React from "react"
import { FormattedMessage } from 'react-intl';

import './FAQPage.scss';

const FAQPage = () => {    
    return (
        <section className="faq">
            <h1 className="faq_title">Odpowiedzi na najcześciej zadawane pytania:</h1>
            <div className="bike-container__specification">
                            <table>
                                <tr>
                                    <th>Jaka jest cena poszczególnych modeli?</th>
                                    <th>Cena ustalana jest indywidualnie dla każdego zamówienia i zależy od wybranej konfiguracji, wykorzystanych komponentów oraz możliwości personalizacji. Cena podstawowego modelu Long Range to 25 400zł Brutto zaś Performance 26 400zł Brutto.</th>
                                </tr>  
                                <tr>
                                    <th>Czy jest możliwośc leasingu?</th>
                                    <th>Tak, koszt leasingu i jego warunki są ustalane indywidualnie.</th>
                                </tr> 
                                <tr>
                                    <th>Jakie są koszty ekspoatacji takiego roweru?</th>
                                    <th>Koszt utrzymania tego typu pojazdu jest bardzo niski, oprócz energii elektrycznej potrzebnej do naładowania, należy regularnie kontrolować stan klocków hamulcowych. Pozostałe elementy typu łożyska i amortyzatory przy prawidłowej eksploatacji są bardzo trwałe.</th>
                                </tr>  
                                <tr>
                                    <th>Jaki jest koszt przejechania 100km?</th>    
                                    <th>W zależności od wysokości opłaty za energię eneltryczną średni koszt przejechania 100km to około 1,5zł.</th>    
                                </tr> 
                                <tr>
                                    <th>Czy mogę myć rower na myjni bezdotykowej lub przy użyciu myjek wysokociśnieniowych?</th>    
                                    <th>Nie, tego typu praktyki są niezalecane i mogą spowodować zalanie, uszkodzenie komponentów roweru lub ich szybsze zużycie. Należy używać bieżącej wody lub opcjonalnie chemii rowerowej.</th>    
                                </tr>
                                <tr>
                                    <th>Jaka jest żywotność baterii?</th>    
                                    <th>Stosowanie się do zaleceń producenta znacząco wpływa na żywotność akumulatora. Dzięki temu po pokonaniu około 40 000km wydajność baterii będzie wynosić około 80% pierwotnej pojemności.</th>    
                                </tr>
                                <tr>
                                    <th>Czy do jazdy wymagane jest prawo jazdy?</th>    
                                    <th>Nie jest wymagane.</th>    
                                </tr>
                                <tr>
                                    <th>Jaka jest róznica między modelem Performance a Long Range?</th>    
                                    <th>Głównymi różnicami jest bateria, silnik oraz koła przednie.</th>    
                                </tr>  
                                <tr>
                                    <th>Czy jest możliwa jazda próbna?</th>    
                                    <th>W celu skorzystania z jazdy testowej zapraszamy do siedziby naszej firmy. </th>    
                                </tr>  
                                <tr>
                                    <th>Jaki jest średni czas oczekiwania na zamówienie?</th>    
                                    <th>Średni czas oczekiwania wynosi około 6 tygodnie.</th>    
                                </tr>  
                            </table>
                        </div>
        </section>
    )
}


  
  export default FAQPage
