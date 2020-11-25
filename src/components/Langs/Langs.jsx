import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { injectIntl } from 'react-intl';

import languages from '../../i18n/languages';
import PageContext from '../../layout/PageContext';

import './langs.scss'

const LangButton = ({ label, chosen, onClick }) => (
  <button
    onClick={onClick}
    className="lang-button"
    style={{color: chosen ? '#FFAF1E' : 'white'}}
  >
    {label}
  </button>
);

const Langs = ({ intl: { locale } }) => {
  const pageContext = useContext(PageContext);

  const handleSetLang = language => {
    const { originalPath } = pageContext.page;
    const newPathname = `/${language}${originalPath}`;

    localStorage.setItem('language', language);
    navigate(newPathname);
  };

  if (!pageContext.custom.localeKey) return null;
  return (
    <div>
      {languages.map(language => (
        <LangButton
          key={language.locale}
          label={language.label}
          chosen={language.locale === locale}
          onClick={() => handleSetLang(language.locale)}
        />
      ))}
    </div>
  );
};

export default injectIntl(Langs);
