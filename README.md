# The Beatles | Landing Page em React

Parte 2 (individual) do trabalho da disciplina Desenvolvimento Frontend II, UVA, turma 4169ADSN2A1, Prof. Caio Silva Azeredo.

Migração do site The Beatles (Parte 1, HTML e Bootstrap) para React com Vite, juntando o `index.html` e a `curiosidades.html` do grupo em uma Landing Page única.

## Autor

Enzo Gabriel Pereira Silva

## Origem

- Repositório do grupo (Parte 1): https://github.com/wnsogabriel/thebeatles-front2
- Página que fiz na Parte 1: `index.html`
- Segunda página usada na Landing: `curiosidades.html`
- Autor(a) do `index.html` original: Enzo Gabriel Pereira Silva
- Autor(a) da `curiosidades.html` original: [Gabriel Carrajola](https://github.com/carrajola03)

Os arquivos originais estão na pasta `referencia-html/` para comparação antes e depois.

## Site publicado

https://thelandingbeatles.netlify.app/

## Tecnologias

- React 19 com Vite
- Bootstrap 5.3 (somente o CSS, instalado via npm)
- Fontes Bebas Neue, Inter e Playfair Display (Google Fonts)
- Hospedagem no Netlify

## Como executar

```
npm install
npm run dev
```

Para gerar e testar a versão de produção:

```
npm run build
npm run preview
```

## Seções da Landing Page

| Seção | Componente | Origem |
|---|---|---|
| Menu | `Navbar` | `index.html` e `curiosidades.html` (os dois menus viraram um só, com âncoras) |
| Hero | `Hero` | `index.html` (no original era só uma imagem, virou título, texto e botão a partir do protótipo) |
| Faixa de músicas | `Ticker` | nova, criada a partir do protótipo |
| Você já ouviu essa? | `Musicas` | nova, com estrutura de vídeos baseada no final do `legado.html` |
| Resultados | `Resultados` | `index.html` (faixa preta com os números) |
| Abbey Road | `AbbeyRoad` | nova, criada a partir do protótipo |
| Curiosidades | `Curiosidades` | `curiosidades.html` (7 perguntas originais, mais 3 novas) |
| Chamada final | `ChamadaFinal` | nova, criada a partir do protótipo |
| Rodapé | `Footer` | `index.html` e `curiosidades.html` (os dois rodapés viraram um só) |

A ordem das seções está definida em `src/pages/LandingPage.jsx`.

## Decisões de fusão

| Bloco original | Ação | Resultado na Landing |
|---|---|---|
| Menu do index e da curiosidades | Fundir | Um só menu, com âncoras para as seções (`#inicio`, `#musicas`, `#resultados`, `#abbey-road`, `#curiosidades`) |
| Rodapé do index e da curiosidades | Fundir | Um só rodapé, no fim da página, com os links vindos do mesmo array do menu |
| Imagem do topo do index | Transformar | Hero com o único `h1` da página |
| Faixa preta com números | Manter | Os números ficam em um array percorrido com `map()`, e deixam de ser `h1` para respeitar o título único |
| Accordion da curiosidades | Manter e melhorar | Passa a ser controlado por `useState`, porque o JavaScript do Bootstrap não é carregado no React |
| Grid de fotos, prévia da timeline, cards de legado e citação do index | Remover | Fora da Landing para manter a página curta e com uma ação principal |

## Organização do código

```
src/
  components/   Navbar, Footer e as seções da Landing
  data/         arrays usados com map() (menu, ticker, músicas, resultados, curiosidades)
  pages/        LandingPage, que define a ordem das seções
  index.css     variáveis de cor e estilos herdados do site do grupo
referencia-html/  index.html e curiosidades.html originais
public/img/       imagens do site
```

Conteúdo repetido (links do menu, itens do ticker, vídeos, números e perguntas) vem de arrays em `src/data/`, percorridos com `map()`.
