import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faLanguage } from '@fortawesome/free-solid-svg-icons';

function Theme() {
    const [theme, setTheme] = useState(sessionStorage.getItem("theme") || "Light");
    const [lang, setLang] = useState(localStorage.getItem("lang") || "");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === "Light" ? "Dark" : "Light";
        setTheme(newTheme);
    };

    const handleLangChange = (e) => {
        setLang(e.target.value);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    useEffect(() => {
        sessionStorage.setItem("theme", theme);
        document.body.style.backgroundColor = theme === "Light" ? "white" : "black";
        document.body.style.color = theme === "Light" ? "black" : "white";
    }, [theme]);

    return (
        <div className='main'>
            <div className="theme-container">
                <div className="theme-toggle">
                    <button className="theme-button" onClick={toggleTheme}>
                        <FontAwesomeIcon icon={theme === "Light" ? faSun : faMoon} />
                    </button>
                </div>
                <div className="language-dropdown">
                    <button className="dropdown-button" onClick={toggleDropdown}>
                        <FontAwesomeIcon icon={faLanguage} /> Select Langauge
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-menu">
                            <label className="dropdown-item">
                                <input type="radio" name="language" value="English" checked={lang === 'English'} onChange={handleLangChange} /> English
                            </label>
                            <label className="dropdown-item">
                                <input type="radio" name="language" value="Hindi" checked={lang === 'Hindi'} onChange={handleLangChange} /> Hindi
                            </label>
                            <label className="dropdown-item">
                                <input type="radio" name="language" value="Gujarati" checked={lang === 'Gujarati'} onChange={handleLangChange} /> Gujarati
                            </label>
                        </div>
                    )}
                </div>
            </div>
            <div className="language-display">
                {lang === "English" ? <div className='content'><img src="https://ashisheditz.com/wp-content/uploads/2023/11/cat-wallpaper-aesthetic.jpg" alt="Cat" /><h3>The cat, commonly referred to as the domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC.
                    <br/>
                    <b>Lifespan: 12 – 18 years (Domesticated) </b>
                    <b>Scientific name: Felis catus </b>
                    <b>Domain: Eukaryota </b>
                    <b>Family: Felidae </b>
                </h3></div> : lang === "Hindi" ? <div className='content'>
                    <img src="https://ashisheditz.com/wp-content/uploads/2023/11/cat-wallpaper-aesthetic.jpg" alt="Cat" />
                    <h3>
                        बिल्ली, जिसे सामान्यतः घरेलू बिल्ली या घर की बिल्ली कहा जाता है, एक छोटा घरेलूकृत मांसाहारी स्तनपायी स्त्रीजाती है। यह फेलिडे परिवार की एकमात्र घरेलूकृत प्रजाति है। नवीनतम पुरातत्व और आनुवंशिकी में यह दिखाया गया है कि बिल्ली का पालतू बनाना लगभग 7500 ईसा पूर्व निकट पूर्व में हुआ था।
                        <br/>
                        <b>जीवनकाल: 12 – 18 वर्ष (घरेलूकृत) </b>
                        <b>वैज्ञानिक नाम: Felis catus </b>
                        <b>डोमेन: यूकेरियोटा </b>
                        <b>परिवार: फेलिडे </b>
                    </h3>
                </div> : lang === "Gujarati" ? <div className='content'>
                    <img src="https://ashisheditz.com/wp-content/uploads/2023/11/cat-wallpaper-aesthetic.jpg" alt="બિલાડી" />
                    <h3>બિલાડી, જેને સામાન્ય રીતે ઘરની બિલાડી કે મકાનની બિલાડી તરાંતર કહેવામાં આવે છે, એક છોટી ઘરનીય પાલતુ માંસાહારી સ્ત્રીય પ્રાણી છે. આ ખાનગી પરિવાર Felidae ના એકમાત્ર પાલતુ પ્રજાતિ છે. અર્કેઓલોજી અને જીનેટિક્સમાં તાજેતરના વિકાસો દર્શાવે છે કે બિલાડીનું પાલતું બનાવવા નજીકે ઈસ્ટ મધ્યે સંભવનામાં 7500 ઈ.પૂ. થયું હતું.
                    <br/>
                        <b>આયુ: 12 - 18 વર્ષ (પાલતુ) </b>
                        <b>વૈજ્ઞાનિક નામ: Felis catus </b>
                        <b>ડોમેન: યુકેરિયોટા </b>
                        <b>પરિવાર: Felidae </b>
                    </h3>
                </div> : null}
            </div>
        </div>
    );
}

export default Theme;
