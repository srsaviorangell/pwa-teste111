# Changelog - Correções PWA

## Problemas Identificados

1. **Ícone `logosobra11.png` retornando 404** — arquivo referenciado no deploy antigo não existia no caminho `/assets/images/logosobra11.png` (não faz parte do manifest, mas aparecia no Lighthouse por cache de deploy anterior).

2. **Faltavam screenshots** — o PWA não podia exibir a "Richer Install UI" (experiência melhorada de instalação) por não ter screenshots no manifest.

3. **Faltava ícone maskable** — sem ele, a experiência em dispositivos Android não era ideal.

4. **Faltava `description` e `id`** no manifest.json.

## Alterações Realizadas

### 1. `public/manifest.json`
- Adicionado campo `description`
- Adicionado campo `id` (igual ao `start_url`)
- Adicionado ícone com `purpose: "maskable"` (512x512)
- Adicionadas duas screenshots:
  - **Mobile** (`form_factor: "narrow"`): 1080×1920
  - **Desktop** (`form_factor: "wide"`): 1920×1080

### 2. Novos arquivos criados
| Arquivo | Descrição |
|---|---|
| `public/icons/icon512-maskable.png` | Ícone maskable 512×512 (com padding de 10%) |
| `public/screenshot-mobile.png` | Screenshot vertical 1080×1920 |
| `public/screenshot-wide.png` | Screenshot horizontal 1920×1080 |

### 3. `dist/` (deploy)
- `dist/manifest.json` — atualizado com as mesmas alterações
- `dist/icons/icon512-maskable.png`
- `dist/screenshot-mobile.png`
- `dist/screenshot-wide.png`

## Como verificar

Após redeploy no Vercel, os erros abaixo devem desaparecer:
- ~~Richer PWA Install UI won't be available on desktop/mobile~~
- ~~No supplied icon is at least 144 pixels square~~
- ~~Most operating systems require square icons~~
- ~~Icon logosobra11.png failed to load~~ *(deploy anterior com cache limpo)*
