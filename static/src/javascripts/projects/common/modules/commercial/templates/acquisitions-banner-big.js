// @flow
export const acquisitionsBannerBigTemplate = (
    params: EngagementBannerTemplateParams
) =>
    `<div id="site-message__message" class="big-test-container">
        <div class="site-message__message site-message__message--membership big-test">
            <div class="membership__big-message-container">
                <span class = "membership__message-text big">${params.messageText}</span>
                <div class="membership__big--cta-with-paypal">             
                    <span class = "membership__message-text small">${params.ctaText}</span>
                    <span class="membership__paypal-container">
                        <img class="membership__paypal-logo" src="${params.paypalAndCreditCardImage}" alt="Paypal and credit card">
                        <span class="membership__support-button"><a class="message-button-rounded__cta ${params.colourClass}" href="${params.linkUrl}">${params.buttonCaption}${params.buttonSvg}</a></span>
                    </span>
                </div>
             </div>
        </div>
        <a class="u-faux-block-link__overlay js-engagement-message-link" target="_blank" href="${params.linkUrl}" data-link-name="Read more link"></a>
    </div>`;