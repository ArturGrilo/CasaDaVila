import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section id="privacy-policy-id" className="cdv-section">
        <div className="privacy-policy">
            <TopBar scrollThreshold={-1} />
            <div className="cdv-main-container">
                <div className='cdv-title'>Política de Privacidade</div>
                <div className='cdv-sub-title'>Informações Coletadas</div>
                <p>Ao usar nosso site, podemos coletar as seguintes informações:</p>
                <ul>
                <li>Informações pessoais fornecidas voluntariamente, como nome, endereço de e-mail e número de telefone, ao preencher formulários ou interagir com o site.</li>
                <li>Dados de uso, incluindo endereço IP, tipo de navegador, páginas visitadas e tempo gasto no site, coletados automaticamente por meio de tecnologias de rastreamento, como cookies.</li>
                </ul>
                
                <div className='cdv-sub-title'>Uso de Informações</div>
                <p>Utilizamos as informações coletadas para os seguintes fins:</p>
                <ul>
                <li>Fornecer e manter nosso site, incluindo personalização de conteúdo e análise de desempenho.</li>
                <li>Responder a consultas e solicitações dos usuários e fornecer suporte ao cliente.</li>
                <li>Enviar comunicações de marketing, quando autorizado pelos usuários.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
                </ul>

                <div className='cdv-sub-title'>Compartilhamento de Informações</div>
                <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais, proteger nossos direitos ou em caso de fusão ou aquisição.</p>

                <div className='cdv-sub-title'>Cookies e Tecnologias Semelhantes</div>
                <p>Nosso site utiliza cookies e tecnologias similares para personalizar conteúdo, analisar o uso do site e fornecer publicidade direcionada. Ao continuar a navegar no site, você concorda com o uso de cookies.</p>

                <div className='cdv-sub-title'>Segurança de Dados</div>
                <p>Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>

                <div className='cdv-sub-title'>Seus Direitos</div>
                <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através dos canais fornecidos neste documento.</p>

                <div className='cdv-sub-title'>Alterações nesta Política</div>
                <p>Podemos atualizar esta política de privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações.</p>

                <div className='cdv-sub-title'>Contate-nos</div>
                <p>Se você tiver alguma dúvida ou preocupação sobre nossa política de privacidade, entre em contato conosco através deste endereço de email arturgriloo1994@hotmail.com ou através deste número de telemóvel (+351) 969 303 119.</p>
            </div>
            <Footer />
        </div>
    </section>
  );
};

export default PrivacyPolicy;
