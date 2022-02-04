import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import "./index.css"
import App from './App'
import { Provider } from 'react-redux'
import store from './store/index'
import HashLoader from "react-spinners/HashLoader"

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json'
    },
  })

// function App() {
//   const { t } = useTranslation()

//   return (
//     <>
//       <button onClick={() => { i18next.changeLanguage("en") }}>English</button>
//       <button onClick={() => { i18next.changeLanguage("ar") }}>العربية</button>
//       <h2>{t('Welcome_to_React')}</h2>
//       <p>{t('dynamic_text', { dynamic_text: 12 })}</p>
//     </>
//   )
// }

const loadingMarkup = (
  <div className="centered-loader">
    <HashLoader color="#417EBF" loading={true} size={50} />
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
  ,
  document.getElementById('root')
)

