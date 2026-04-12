/**
 * Kit (ConvertKit) — formulário 9314843 (uid 3944fe326d no embed).
 *
 * A newsletter (`BlogNewsletterSignup`) envia via `fetch` + `Accept: application/json`
 * para não seguir o `redirect_url` que a API devolve (evita a página de sucesso do Kit).
 * O ckjs em `nuxt.config` pode continuar a carregar para outros recursos da conta.
 */
export const kitSubscribeForm = {
  action: 'https://app.kit.com/forms/9314843/subscriptions',
  svForm: '9314843',
  uid: '3944fe326d',
} as const
