import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a9a1a34 = () => interopDefault(import('../pages/activity/index.vue' /* webpackChunkName: "pages/activity/index" */))
const _7caa178a = () => interopDefault(import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */))
const _e110824c = () => interopDefault(import('../pages/financial/index.vue' /* webpackChunkName: "pages/financial/index" */))
const _6a445634 = () => interopDefault(import('../pages/help/index.vue' /* webpackChunkName: "pages/help/index" */))
const _66e9d04a = () => interopDefault(import('../pages/legal-orders.vue' /* webpackChunkName: "pages/legal-orders" */))
const _323d924e = () => interopDefault(import('../pages/lico/index.vue' /* webpackChunkName: "pages/lico/index" */))
const _5dab9377 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _7ffb9c86 = () => interopDefault(import('../pages/master-deposit-fail.vue' /* webpackChunkName: "pages/master-deposit-fail" */))
const _5e45554b = () => interopDefault(import('../pages/master-deposit-success.vue' /* webpackChunkName: "pages/master-deposit-success" */))
const _48b24687 = () => interopDefault(import('../pages/mobile/index.vue' /* webpackChunkName: "pages/mobile/index" */))
const _6879d854 = () => interopDefault(import('../pages/partner.vue' /* webpackChunkName: "pages/partner" */))
const _29f4e792 = () => interopDefault(import('../pages/person.vue' /* webpackChunkName: "pages/person" */))
const _2cefcd7a = () => interopDefault(import('../pages/person/index.vue' /* webpackChunkName: "pages/person/index" */))
const _e83885c2 = () => interopDefault(import('../pages/person/address/index.vue' /* webpackChunkName: "pages/person/address/index" */))
const _41aaa876 = () => interopDefault(import('../pages/person/api/index.vue' /* webpackChunkName: "pages/person/api/index" */))
const _01dd6000 = () => interopDefault(import('../pages/person/authentication.vue' /* webpackChunkName: "pages/person/authentication" */))
const _4d76109d = () => interopDefault(import('../pages/person/contract/index.vue' /* webpackChunkName: "pages/person/contract/index" */))
const _6bad4bf4 = () => interopDefault(import('../pages/person/deal.vue' /* webpackChunkName: "pages/person/deal" */))
const _16bb10b8 = () => interopDefault(import('../pages/person/financial-deal.vue' /* webpackChunkName: "pages/person/financial-deal" */))
const _d56716be = () => interopDefault(import('../pages/person/invitation.vue' /* webpackChunkName: "pages/person/invitation" */))
const _c5c8a0a6 = () => interopDefault(import('../pages/person/legal-currency.vue' /* webpackChunkName: "pages/person/legal-currency" */))
const _66c2e414 = () => interopDefault(import('../pages/person/legal-set.vue' /* webpackChunkName: "pages/person/legal-set" */))
const _04b50cc0 = () => interopDefault(import('../pages/person/level1-authentication.vue' /* webpackChunkName: "pages/person/level1-authentication" */))
const _275239c2 = () => interopDefault(import('../pages/person/level2-authentication.vue' /* webpackChunkName: "pages/person/level2-authentication" */))
const _bbb01850 = () => interopDefault(import('../pages/person/login-history.vue' /* webpackChunkName: "pages/person/login-history" */))
const _15932729 = () => interopDefault(import('../pages/person/manage-financial.vue' /* webpackChunkName: "pages/person/manage-financial" */))
const _4dce6e39 = () => interopDefault(import('../pages/person/margin/index.vue' /* webpackChunkName: "pages/person/margin/index" */))
const _5e417e44 = () => interopDefault(import('../pages/person/mycard.vue' /* webpackChunkName: "pages/person/mycard" */))
const _053964b1 = () => interopDefault(import('../pages/person/payment/index.vue' /* webpackChunkName: "pages/person/payment/index" */))
const _1037d56a = () => interopDefault(import('../pages/person/security/index.vue' /* webpackChunkName: "pages/person/security/index" */))
const _3517831f = () => interopDefault(import('../pages/person/underway.vue' /* webpackChunkName: "pages/person/underway" */))
const _31613cba = () => interopDefault(import('../pages/person/undone.vue' /* webpackChunkName: "pages/person/undone" */))
const _4b91cdfe = () => interopDefault(import('../pages/person/wallet.vue' /* webpackChunkName: "pages/person/wallet" */))
const _3d902c48 = () => interopDefault(import('../pages/person/wallet-history.vue' /* webpackChunkName: "pages/person/wallet-history" */))
const _0c7ee28d = () => interopDefault(import('../pages/person/address/mention-site.vue' /* webpackChunkName: "pages/person/address/mention-site" */))
const _fc60a03c = () => interopDefault(import('../pages/person/api/api-set.vue' /* webpackChunkName: "pages/person/api/api-set" */))
const _07f62a92 = () => interopDefault(import('../pages/person/contract/contract-deal.vue' /* webpackChunkName: "pages/person/contract/contract-deal" */))
const _5e67e25c = () => interopDefault(import('../pages/person/margin/margin-deal.vue' /* webpackChunkName: "pages/person/margin/margin-deal" */))
const _3e09d069 = () => interopDefault(import('../pages/person/margin/wallet-margin.vue' /* webpackChunkName: "pages/person/margin/wallet-margin" */))
const _0129ee7b = () => interopDefault(import('../pages/person/payment/alipay.vue' /* webpackChunkName: "pages/person/payment/alipay" */))
const _698e13ad = () => interopDefault(import('../pages/person/payment/bank.vue' /* webpackChunkName: "pages/person/payment/bank" */))
const _019930ce = () => interopDefault(import('../pages/person/payment/imove.vue' /* webpackChunkName: "pages/person/payment/imove" */))
const _d344f416 = () => interopDefault(import('../pages/person/payment/money-gram.vue' /* webpackChunkName: "pages/person/payment/money-gram" */))
const _6fe266a4 = () => interopDefault(import('../pages/person/payment/paypal.vue' /* webpackChunkName: "pages/person/payment/paypal" */))
const _4a497d52 = () => interopDefault(import('../pages/person/payment/wechat.vue' /* webpackChunkName: "pages/person/payment/wechat" */))
const _4e97ce73 = () => interopDefault(import('../pages/person/payment/western-union.vue' /* webpackChunkName: "pages/person/payment/western-union" */))
const _0cb9b469 = () => interopDefault(import('../pages/person/security/binding-email-google.vue' /* webpackChunkName: "pages/person/security/binding-email-google" */))
const _16fa767e = () => interopDefault(import('../pages/person/security/binding-mobile.vue' /* webpackChunkName: "pages/person/security/binding-mobile" */))
const _7f35b590 = () => interopDefault(import('../pages/person/security/google.vue' /* webpackChunkName: "pages/person/security/google" */))
const _218e103d = () => interopDefault(import('../pages/person/security/google-change.vue' /* webpackChunkName: "pages/person/security/google-change" */))
const _8b373b66 = () => interopDefault(import('../pages/person/security/password-capital.vue' /* webpackChunkName: "pages/person/security/password-capital" */))
const _322e8e5b = () => interopDefault(import('../pages/person/security/password-change.vue' /* webpackChunkName: "pages/person/security/password-change" */))
const _24f275c0 = () => interopDefault(import('../pages/person/security/setting-suggest.vue' /* webpackChunkName: "pages/person/security/setting-suggest" */))
const _b54244f6 = () => interopDefault(import('../pages/rebate.vue' /* webpackChunkName: "pages/rebate" */))
const _3fcebe05 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _9beee38a = () => interopDefault(import('../pages/reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _94fa94e0 = () => interopDefault(import('../pages/tokenlisting/index.vue' /* webpackChunkName: "pages/tokenlisting/index" */))
const _e9b92e16 = () => interopDefault(import('../pages/trade/index.vue' /* webpackChunkName: "pages/trade/index" */))
const _057d5bf1 = () => interopDefault(import('../pages/activity/activity-all.vue' /* webpackChunkName: "pages/activity/activity-all" */))
const _013aaf99 = () => interopDefault(import('../pages/affiliate/affiliate.vue' /* webpackChunkName: "pages/affiliate/affiliate" */))
const _43107218 = () => interopDefault(import('../pages/affiliate/affiliate_done.vue' /* webpackChunkName: "pages/affiliate/affiliate_done" */))
const _1a16ea5a = () => interopDefault(import('../pages/affiliate/affiliate_form.vue' /* webpackChunkName: "pages/affiliate/affiliate_form" */))
const _291760bd = () => interopDefault(import('../pages/card/card.vue' /* webpackChunkName: "pages/card/card" */))
const _894d4f5e = () => interopDefault(import('../pages/deposit/fail.vue' /* webpackChunkName: "pages/deposit/fail" */))
const _0be66ed5 = () => interopDefault(import('../pages/deposit/master.vue' /* webpackChunkName: "pages/deposit/master" */))
const _41b3fcc0 = () => interopDefault(import('../pages/deposit/success.vue' /* webpackChunkName: "pages/deposit/success" */))
const _7e4b628a = () => interopDefault(import('../pages/ewallet/ewallet.vue' /* webpackChunkName: "pages/ewallet/ewallet" */))
const _09080c74 = () => interopDefault(import('../pages/financial/list.vue' /* webpackChunkName: "pages/financial/list" */))
const _a67cf062 = () => interopDefault(import('../pages/help/bulletin-center.vue' /* webpackChunkName: "pages/help/bulletin-center" */))
const _2fcf6bf5 = () => interopDefault(import('../pages/help/help-center.vue' /* webpackChunkName: "pages/help/help-center" */))
const _4a6a1231 = () => interopDefault(import('../pages/help/help-coin.vue' /* webpackChunkName: "pages/help/help-coin" */))
const _a66f4c1e = () => interopDefault(import('../pages/help/help-detail.vue' /* webpackChunkName: "pages/help/help-detail" */))
const _9d7e2df4 = () => interopDefault(import('../pages/help/help-question.vue' /* webpackChunkName: "pages/help/help-question" */))
const _54e34361 = () => interopDefault(import('../pages/help/latest-announcement.vue' /* webpackChunkName: "pages/help/latest-announcement" */))
const _2b7b16a7 = () => interopDefault(import('../pages/help/maintain.vue' /* webpackChunkName: "pages/help/maintain" */))
const _4723c98c = () => interopDefault(import('../pages/help/new-currency.vue' /* webpackChunkName: "pages/help/new-currency" */))
const _1b4cba74 = () => interopDefault(import('../pages/help/notice.vue' /* webpackChunkName: "pages/help/notice" */))
const _7554216e = () => interopDefault(import('../pages/help/novice-tutorial.vue' /* webpackChunkName: "pages/help/novice-tutorial" */))
const _07195fec = () => interopDefault(import('../pages/mobile/clause.vue' /* webpackChunkName: "pages/mobile/clause" */))
const _1920fc3a = () => interopDefault(import('../pages/mobile/download.vue' /* webpackChunkName: "pages/mobile/download" */))
const _4b8a627e = () => interopDefault(import('../pages/mobile/register.vue' /* webpackChunkName: "pages/mobile/register" */))
const _3460b4b4 = () => interopDefault(import('../pages/mobile/register-success.vue' /* webpackChunkName: "pages/mobile/register-success" */))
const _8481a7a4 = () => interopDefault(import('../pages/returnurl/imove-success.vue' /* webpackChunkName: "pages/returnurl/imove-success" */))
const _31b2562a = () => interopDefault(import('../pages/standard/corporate_kyc.vue' /* webpackChunkName: "pages/standard/corporate_kyc" */))
const _f93eb22a = () => interopDefault(import('../pages/standard/person_kyc.vue' /* webpackChunkName: "pages/standard/person_kyc" */))
const _3818d33f = () => interopDefault(import('../pages/support/contact_us.vue' /* webpackChunkName: "pages/support/contact_us" */))
const _00fe0069 = () => interopDefault(import('../pages/trade/create.vue' /* webpackChunkName: "pages/trade/create" */))
const _b8fea4aa = () => interopDefault(import('../pages/contract/center/_id.vue' /* webpackChunkName: "pages/contract/center/_id" */))
const _001e08bd = () => interopDefault(import('../pages/contract/pro/_id.vue' /* webpackChunkName: "pages/contract/pro/_id" */))
const _1f6994b7 = () => interopDefault(import('../pages/contract2/pro/_id.vue' /* webpackChunkName: "pages/contract2/pro/_id" */))
const _27cd7217 = () => interopDefault(import('../pages/deal/pro/_id.vue' /* webpackChunkName: "pages/deal/pro/_id" */))
const _c53559e2 = () => interopDefault(import('../pages/margin/center/_id.vue' /* webpackChunkName: "pages/margin/center/_id" */))
const _3045fdd9 = () => interopDefault(import('../pages/margin/pro/_id.vue' /* webpackChunkName: "pages/margin/pro/_id" */))
const _d76cf6c2 = () => interopDefault(import('../pages/contract/_id.vue' /* webpackChunkName: "pages/contract/_id" */))
const _22f0aa0e = () => interopDefault(import('../pages/deal/_id.vue' /* webpackChunkName: "pages/deal/_id" */))
const _5fbbafc2 = () => interopDefault(import('../pages/financial/_id.vue' /* webpackChunkName: "pages/financial/_id" */))
const _171067bb = () => interopDefault(import('../pages/margin/_id.vue' /* webpackChunkName: "pages/margin/_id" */))
const _52f1249d = () => interopDefault(import('../pages/trade/_id.vue' /* webpackChunkName: "pages/trade/_id" */))
const _d7f81f40 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/activity",
    component: _5a9a1a34,
    name: "activity"
  }, {
    path: "/auth",
    component: _7caa178a,
    name: "auth"
  }, {
    path: "/financial",
    component: _e110824c,
    name: "financial"
  }, {
    path: "/help",
    component: _6a445634,
    name: "help"
  }, {
    path: "/legal-orders",
    component: _66e9d04a,
    name: "legal-orders"
  }, {
    path: "/lico",
    component: _323d924e,
    name: "lico"
  }, {
    path: "/login",
    component: _5dab9377,
    name: "login"
  }, {
    path: "/master-deposit-fail",
    component: _7ffb9c86,
    name: "master-deposit-fail"
  }, {
    path: "/master-deposit-success",
    component: _5e45554b,
    name: "master-deposit-success"
  }, {
    path: "/mobile",
    component: _48b24687,
    name: "mobile"
  }, {
    path: "/partner",
    component: _6879d854,
    name: "partner"
  }, {
    path: "/person",
    component: _29f4e792,
    children: [{
      path: "",
      component: _2cefcd7a,
      name: "person"
    }, {
      path: "address",
      component: _e83885c2,
      name: "person-address"
    }, {
      path: "api",
      component: _41aaa876,
      name: "person-api"
    }, {
      path: "authentication",
      component: _01dd6000,
      name: "person-authentication"
    }, {
      path: "contract",
      component: _4d76109d,
      name: "person-contract"
    }, {
      path: "deal",
      component: _6bad4bf4,
      name: "person-deal"
    }, {
      path: "financial-deal",
      component: _16bb10b8,
      name: "person-financial-deal"
    }, {
      path: "invitation",
      component: _d56716be,
      name: "person-invitation"
    }, {
      path: "legal-currency",
      component: _c5c8a0a6,
      name: "person-legal-currency"
    }, {
      path: "legal-set",
      component: _66c2e414,
      name: "person-legal-set"
    }, {
      path: "level1-authentication",
      component: _04b50cc0,
      name: "person-level1-authentication"
    }, {
      path: "level2-authentication",
      component: _275239c2,
      name: "person-level2-authentication"
    }, {
      path: "login-history",
      component: _bbb01850,
      name: "person-login-history"
    }, {
      path: "manage-financial",
      component: _15932729,
      name: "person-manage-financial"
    }, {
      path: "margin",
      component: _4dce6e39,
      name: "person-margin"
    }, {
      path: "mycard",
      component: _5e417e44,
      name: "person-mycard"
    }, {
      path: "payment",
      component: _053964b1,
      name: "person-payment"
    }, {
      path: "security",
      component: _1037d56a,
      name: "person-security"
    }, {
      path: "underway",
      component: _3517831f,
      name: "person-underway"
    }, {
      path: "undone",
      component: _31613cba,
      name: "person-undone"
    }, {
      path: "wallet",
      component: _4b91cdfe,
      name: "person-wallet"
    }, {
      path: "wallet-history",
      component: _3d902c48,
      name: "person-wallet-history"
    }, {
      path: "address/mention-site",
      component: _0c7ee28d,
      name: "person-address-mention-site"
    }, {
      path: "api/api-set",
      component: _fc60a03c,
      name: "person-api-api-set"
    }, {
      path: "contract/contract-deal",
      component: _07f62a92,
      name: "person-contract-contract-deal"
    }, {
      path: "margin/margin-deal",
      component: _5e67e25c,
      name: "person-margin-margin-deal"
    }, {
      path: "margin/wallet-margin",
      component: _3e09d069,
      name: "person-margin-wallet-margin"
    }, {
      path: "payment/alipay",
      component: _0129ee7b,
      name: "person-payment-alipay"
    }, {
      path: "payment/bank",
      component: _698e13ad,
      name: "person-payment-bank"
    }, {
      path: "payment/imove",
      component: _019930ce,
      name: "person-payment-imove"
    }, {
      path: "payment/money-gram",
      component: _d344f416,
      name: "person-payment-money-gram"
    }, {
      path: "payment/paypal",
      component: _6fe266a4,
      name: "person-payment-paypal"
    }, {
      path: "payment/wechat",
      component: _4a497d52,
      name: "person-payment-wechat"
    }, {
      path: "payment/western-union",
      component: _4e97ce73,
      name: "person-payment-western-union"
    }, {
      path: "security/binding-email-google",
      component: _0cb9b469,
      name: "person-security-binding-email-google"
    }, {
      path: "security/binding-mobile",
      component: _16fa767e,
      name: "person-security-binding-mobile"
    }, {
      path: "security/google",
      component: _7f35b590,
      name: "person-security-google"
    }, {
      path: "security/google-change",
      component: _218e103d,
      name: "person-security-google-change"
    }, {
      path: "security/password-capital",
      component: _8b373b66,
      name: "person-security-password-capital"
    }, {
      path: "security/password-change",
      component: _322e8e5b,
      name: "person-security-password-change"
    }, {
      path: "security/setting-suggest",
      component: _24f275c0,
      name: "person-security-setting-suggest"
    }]
  }, {
    path: "/rebate",
    component: _b54244f6,
    name: "rebate"
  }, {
    path: "/register",
    component: _3fcebe05,
    name: "register"
  }, {
    path: "/reset-password",
    component: _9beee38a,
    name: "reset-password"
  }, {
    path: "/tokenlisting",
    component: _94fa94e0,
    name: "tokenlisting"
  }, {
    path: "/trade",
    component: _e9b92e16,
    name: "trade"
  }, {
    path: "/activity/activity-all",
    component: _057d5bf1,
    name: "activity-activity-all"
  }, {
    path: "/affiliate/affiliate",
    component: _013aaf99,
    name: "affiliate-affiliate"
  }, {
    path: "/affiliate/affiliate_done",
    component: _43107218,
    name: "affiliate-affiliate_done"
  }, {
    path: "/affiliate/affiliate_form",
    component: _1a16ea5a,
    name: "affiliate-affiliate_form"
  }, {
    path: "/card/card",
    component: _291760bd,
    name: "card-card"
  }, {
    path: "/deposit/fail",
    component: _894d4f5e,
    name: "deposit-fail"
  }, {
    path: "/deposit/master",
    component: _0be66ed5,
    name: "deposit-master"
  }, {
    path: "/deposit/success",
    component: _41b3fcc0,
    name: "deposit-success"
  }, {
    path: "/ewallet/ewallet",
    component: _7e4b628a,
    name: "ewallet-ewallet"
  }, {
    path: "/financial/list",
    component: _09080c74,
    name: "financial-list"
  }, {
    path: "/help/bulletin-center",
    component: _a67cf062,
    name: "help-bulletin-center"
  }, {
    path: "/help/help-center",
    component: _2fcf6bf5,
    name: "help-help-center"
  }, {
    path: "/help/help-coin",
    component: _4a6a1231,
    name: "help-help-coin"
  }, {
    path: "/help/help-detail",
    component: _a66f4c1e,
    name: "help-help-detail"
  }, {
    path: "/help/help-question",
    component: _9d7e2df4,
    name: "help-help-question"
  }, {
    path: "/help/latest-announcement",
    component: _54e34361,
    name: "help-latest-announcement"
  }, {
    path: "/help/maintain",
    component: _2b7b16a7,
    name: "help-maintain"
  }, {
    path: "/help/new-currency",
    component: _4723c98c,
    name: "help-new-currency"
  }, {
    path: "/help/notice",
    component: _1b4cba74,
    name: "help-notice"
  }, {
    path: "/help/novice-tutorial",
    component: _7554216e,
    name: "help-novice-tutorial"
  }, {
    path: "/mobile/clause",
    component: _07195fec,
    name: "mobile-clause"
  }, {
    path: "/mobile/download",
    component: _1920fc3a,
    name: "mobile-download"
  }, {
    path: "/mobile/register",
    component: _4b8a627e,
    name: "mobile-register"
  }, {
    path: "/mobile/register-success",
    component: _3460b4b4,
    name: "mobile-register-success"
  }, {
    path: "/returnurl/imove-success",
    component: _8481a7a4,
    name: "returnurl-imove-success"
  }, {
    path: "/standard/corporate_kyc",
    component: _31b2562a,
    name: "standard-corporate_kyc"
  }, {
    path: "/standard/person_kyc",
    component: _f93eb22a,
    name: "standard-person_kyc"
  }, {
    path: "/support/contact_us",
    component: _3818d33f,
    name: "support-contact_us"
  }, {
    path: "/trade/create",
    component: _00fe0069,
    name: "trade-create"
  }, {
    path: "/contract/center/:id?",
    component: _b8fea4aa,
    name: "contract-center-id"
  }, {
    path: "/contract/pro/:id?",
    component: _001e08bd,
    name: "contract-pro-id"
  }, {
    path: "/contract2/pro/:id?",
    component: _1f6994b7,
    name: "contract2-pro-id"
  }, {
    path: "/deal/pro/:id?",
    component: _27cd7217,
    name: "deal-pro-id"
  }, {
    path: "/margin/center/:id?",
    component: _c53559e2,
    name: "margin-center-id"
  }, {
    path: "/margin/pro/:id?",
    component: _3045fdd9,
    name: "margin-pro-id"
  }, {
    path: "/contract/:id?",
    component: _d76cf6c2,
    name: "contract-id"
  }, {
    path: "/deal/:id?",
    component: _22f0aa0e,
    name: "deal-id"
  }, {
    path: "/financial/:id",
    component: _5fbbafc2,
    name: "financial-id"
  }, {
    path: "/margin/:id?",
    component: _171067bb,
    name: "margin-id"
  }, {
    path: "/trade/:id",
    component: _52f1249d,
    name: "trade-id"
  }, {
    path: "/",
    component: _d7f81f40,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
