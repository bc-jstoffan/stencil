import PageManager from '../page-manager';

export default class Checkout extends PageManager {
    loaded(next) {
        angular.module('ng-common.bc-app', [])
            .constant('BC_APP_CONFIG', {"cdnPath":"https:\/\/cdn.bcapp.dev\/rHEAD","checkout":{"enableOrderComments":1,"enableTermsAndConditions":0,"guestCheckoutEnabled":1,"orderTermsAndConditions":"","orderTermsAndConditionsLink":"","orderTermsAndConditionsType":"","shippingQuoteFailedMessage":"Unfortunately one or more items in your cart can't be shipped to your location. Please choose a different delivery address.","realtimeShippingProviders":["Fedex","UPS","USPS"]},"currency":{"currencyCode":"USD","currencyLocation":"Left","currencySymbol":"$","decimalPlaces":2,"decimalSeparator":".","thousandsSeparator":","},"defaultNewsletterSignup":false,"passwordRequirements":{"alpha":"\/[A-Za-z]\/","numeric":"\/[0-9]\/","minlength":7,"error":"Passwords must be at least 7 characters and contain both alphabetic and numeric characters."},"orderEmail":"info@s123456.bcapp.dev","shopPath":"https:\/\/store-0occ59sn.bcapp.dev","showNewsletterSignup":true,"storeName":"s123456","storePhoneNumber":""})
            .constant('BC_SEED_DATA', {"shipping-countries":[{"code":"US","name":"United States"}],"shipping-states":{"US":["Alabama"]},"all-countries":[], "all-states": [] })

        angular.bootstrap($('#micro-app-ng-checkout')[0], ['ng-checkout']);
    }
}
