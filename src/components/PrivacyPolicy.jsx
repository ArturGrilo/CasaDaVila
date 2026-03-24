import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <section id="privacy-policy-id" className="cdv-section">
      <div className="privacy-policy">
        <TopBar altScreen={true} />
        <div className="cdv-main-container">
          <div className='cdv-title'>{t('privacyPolicy.title')}</div>
          <div className='cdv-sub-title'>{t('privacyPolicy.informationCollected')}</div>
          <p>{t('privacyPolicy.informationCollectedDetails')}</p>
          <ul>
            <li>{t('privacyPolicy.personalInformation')}</li>
            <li>{t('privacyPolicy.usageData')}</li>
          </ul>

          <div className='cdv-sub-title'>{t('privacyPolicy.useOfInformation')}</div>
          <p>{t('privacyPolicy.useOfInformationDetails')}</p>
          <ul>
            <li>{t('privacyPolicy.provideAndMaintain')}</li>
            <li>{t('privacyPolicy.respondQueries')}</li>
            <li>{t('privacyPolicy.sendMarketing')}</li>
            <li>{t('privacyPolicy.complyWithLegal')}</li>
          </ul>

          <div className='cdv-sub-title'>{t('privacyPolicy.sharingOfInformation')}</div>
          <p>{t('privacyPolicy.sharingOfInformationDetails')}</p>

          <div className='cdv-sub-title'>{t('privacyPolicy.cookiesAndTechnologies')}</div>
          <p>{t('privacyPolicy.cookiesAndTechnologiesDetails')}</p>

          <div className='cdv-sub-title'>{t('privacyPolicy.dataSecurity')}</div>
          <p>{t('privacyPolicy.dataSecurityDetails')}</p>

          <div className='cdv-sub-title'>{t('privacyPolicy.yourRights')}</div>
          <p>{t('privacyPolicy.yourRightsDetails')}</p>

          <div className='cdv-sub-title'>{t('privacyPolicy.changesToPolicy')}</div>
          <p>{t('privacyPolicy.changesToPolicyDetails')}</p>

          <div className='cdv-sub-title'>{t('privacyPolicy.contactUs')}</div>
          <p>{t('privacyPolicy.contactUsDetails')}</p>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default PrivacyPolicy;