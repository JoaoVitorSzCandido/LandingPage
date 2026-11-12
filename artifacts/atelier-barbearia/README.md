# Barbearia — Landing Page

Landing page de demonstração para portfólio. Os textos, dados comerciais, fotos da equipe, avaliações e contatos que dependem da barbearia estão identificados com placeholders; não são dados de um negócio real.

## Referências de design pesquisadas

- [Franklin Barbershop — apresentação no Webflow](https://webflow.com/made-in-webflow/website/franklin-barbershop) e [site publicado](https://franklin-barbershop.webflow.io/): abertura fotográfica imersiva, navegação curta e ação de agendamento em destaque.
- [Hagi’s Barber Shop — seleção do SiteInspire](https://www.siteinspire.com/website/10475-hagi-s-barber-shop) e [site oficial](https://hagisbarbershop.de/): amplo espaço negativo, tipografia editorial e fotografia pontual para comunicar identidade.
- [Aesop — site oficial](https://www.aesop.com/) e [relato do estúdio Work & Co](https://work.co/news/how-aesop): navegação orientada à descoberta e conteúdo organizado em componentes; o artigo registra o reconhecimento do redesign no HOW International Design Awards.

As referências foram analisadas como princípios, sem copiar identidade, textos ou composição integral. A página combina impacto fotográfico e agendamento direto com hierarquia editorial, áreas de respiro e um sistema repetível de seções. A paleta verde-floresta, papel e terracota evita o clichê preto e dourado.

## Conteúdo a substituir

- Preencha os placeholders no arquivo `src/App.tsx` com o material aprovado pela barbearia.
- Configure `VITE_WHATSAPP_NUMBER` com o número internacional em dígitos. Sem essa variável, os botões de agendamento levam à seção de contato, sem inventar um destinatário.
- Atualize título, descrição, imagem social e nome do negócio no `index.html`. Depois da publicação, defina também a URL canônica e os endereços absolutos usados por redes sociais e mecanismos de busca.

## Executar

No Replit, abra a prévia da landing page; o fluxo configurado injeta as variáveis necessárias.

Para executar o Vite manualmente na raiz do workspace:

```sh
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/atelier-barbearia run dev
```

Para verificar os tipos:

```sh
pnpm --filter @workspace/atelier-barbearia run typecheck
```

## Imagens de demonstração

As imagens locais em `public/images/` foram obtidas da CDN pública do Unsplash:

- [Foto da bancada e ferramentas](https://images.unsplash.com/photo-1621605815971-fbc98d665033)
- [Versão reduzida da foto para telas menores](https://images.unsplash.com/photo-1621605815971-fbc98d665033)
- [Atendimento de barba](https://images.unsplash.com/photo-1503951914875-452162b0f3f1)
- [Interior da barbearia](https://images.unsplash.com/photo-1585747860715-2ba37e788b70)
- [Detalhe do corte](https://images.unsplash.com/photo-1599351431202-1e0f0137899a)
