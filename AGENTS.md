# AGENTS.md

## Barbearia Atelier (artifacts/atelier-barbearia)
- Workspace pnpm (root /workspace). Instale com `pnpm install` (npm não funciona: usa `catalog:`).
- Dev: `cd artifacts/atelier-barbearia && pnpm run dev` (Vite, host 127.0.0.1, porta 5173).
- `vite.config.ts` agora tem defaults para `PORT` (5173) e `BASE_PATH` (`/`); não precisa de env vars.
- Se o processo for morto por memória ("Killed"), rode com `NODE_OPTIONS=--max-old-space-size=1024`.
- Imagens dos barbeiros (team-1/2/3.jpg) vieram do Unsplash; trocar antes de publicar.
- Conteúdo (nomes, serviços, contatos) é fictício — placeholder para dados reais.

## Deploy (Vercel)
- Projeto Vercel: `barbershoptemplate` (conta sussy5), linkado via `.vercel/` no root.
- Produção: https://barbershoptemplate-red.vercel.app — deploy com `vercel deploy --prod --yes --token <TOKEN>` (token não é salvo em arquivo).
