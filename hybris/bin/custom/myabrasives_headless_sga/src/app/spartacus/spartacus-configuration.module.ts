import { NgModule } from '@angular/core';
import { translationChunksConfig, translationsEn } from "@spartacus/assets";
import { CheckoutStepType } from "@spartacus/checkout/base/root";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultB2bOccConfig } from "@spartacus/setup";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://localhost:9002',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {},
  })

    , provideConfig({
      routing: {
        routes: {
          checkout: {
            paths: ['checkout'],
          }, checkoutPaymentType: {
            paths: ['checkout/payment-type']
          }, checkoutShippingAddress: {
            paths: ['checkout/delivery-address']
          }, checkoutDeliveryMode: {
            paths: ['checkout/delivery-mode']
          }, checkoutPaymentDetails: {
            paths: ['checkout/payment-details']
          }, checkoutReviewOrder: {
            paths: ['checkout/review-order']
          }
        },
      },
    }),


    provideConfig({
      checkout: {
        steps: [{
          id: 'shippingType',
          name: 'checkoutProgress.paymentType',
          routeName: 'checkoutPaymentType',
          type: [CheckoutStepType.PAYMENT_TYPE],
        }, {
          id: 'shippingAddress',
          name: 'checkoutProgress.checkoutDeliveryAddress',
          routeName: 'checkoutShippingAddress',
          type: [CheckoutStepType.DELIVERY_ADDRESS],
        },

          {

            id: 'deliveryMode',
            name: 'checkoutProgress.deliveryMode',
            routeName: 'checkoutDeliveryMode',
            type: [CheckoutStepType.DELIVERY_MODE],
          },

          {
            id: 'paymentDetails',
            name: 'checkoutProgress.paymentDetails',
            routeName: 'checkoutPaymentDetails',
            type: [CheckoutStepType.PAYMENT_DETAILS],
          }, {
            id: 'reviewOrder',
            name: 'checkoutProgress.reviewOrder',
            routeName: 'checkoutReviewOrder',
            type: [CheckoutStepType.REVIEW_ORDER],
          },],
      },
    })
    , provideConfig(<I18nConfig>{
    i18n: {
      resources: { en: translationsEn },
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '2211.42'
    }
  }), provideConfig(defaultB2bOccConfig)]
})
export class SpartacusConfigurationModule { }
