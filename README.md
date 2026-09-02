# Template premium para clínicas de estética

Landing page reutilizável em **Next.js 14 + TypeScript + CSS**, preparada para SEO local, acessibilidade e deploy estático/serverless. A configuração atual é uma demonstração não oficial para Brenda Estética Avançada.

## Executar e visualizar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. Para validar a versão de produção, use `npm run build` e `npm start`.

## Criar outra demonstração

1. Edite apenas `src/config/business.ts`: nome, profissional, endereço, links, serviços, textos, SEO e imagens estão centralizados ali.
2. Troque as URLs do objeto `images` por fotografias licenciadas ou arquivos autorizados. Para arquivos locais, coloque-os em `public/images/` e use caminhos como `/images/hero.webp`.
3. Atualize os links sociais e o mapa.
4. Revise o texto e a autorização de qualquer material antes de publicar.

## Configurar WhatsApp

Em `src/config/business.ts`, preencha `whatsappNumber` com DDI + DDD + número, somente dígitos (ex.: `5541999999999`). Enquanto o valor for `null`, nenhum link ou botão flutuante de WhatsApp é renderizado; os CTAs conduzem com segurança à localização. Todos usam a mesma configuração e a mensagem `whatsappMessage`.

## Conteúdo condicionado

`results` e `testimonials` começam vazios: nenhum resultado, antes/depois ou depoimento é fabricado. A área de resultados não aparece; na ausência de depoimentos, a página aponta diretamente ao perfil público no Google. `googleRating` e `googleReviewCount` também permanecem vazios até confirmação.

## Deploy

Importe o repositório na Vercel (configuração automática para Next.js) ou execute `npm run build` em qualquer provedor Node.js. Antes do domínio definitivo, atualize `seo.url` e a política de indexação em `src/app/layout.tsx`.
