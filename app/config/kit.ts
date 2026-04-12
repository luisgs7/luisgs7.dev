/**
 * Kit (ConvertKit) — formulário 9314843 (uid 3944fe326d no embed).
 *
 * A newsletter (`BlogNewsletterSignup`) envia via `fetch` + `Accept: application/json`
 * para não seguir o `redirect_url` que a API devolve (evita a página de sucesso do Kit).
 * O script ck.js global foi removido — menos JS de terceiros no PageSpeed.
 */
export const kitSubscribeForm = {
  action: 'https://app.kit.com/forms/9314843/subscriptions',
  svForm: '9314843',
  uid: '3944fe326d',
} as const
