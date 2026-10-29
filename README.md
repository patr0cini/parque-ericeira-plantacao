# Parque Ecológico da Ericeira — Plano de plantação

Mapa interativo de trabalho da We Garden para a obra do Parque Ecológico da Ericeira (EMPA).

- Base: desenho 07 «Plano de Plantação Árvores, Arbustos e Herbáceas» (PAI.07_PLANT, 1/2000, 30/05/2025), Câmara Municipal de Mafra — DPOT. Geometria extraída do DWG `Empa_Plano_Plantação_PEEriceira_PE_202510`.
- O desenho original é propriedade dos seus autores. Este mapa é um documento de trabalho interno da obra.
- Fotografias: Flora-On (flora-on.pt), Sociedade Portuguesa de Botânica, licença CC BY-NC 4.0. O autor de cada foto está indicado na página.

## No terreno

- **Canteiros numerados (1 a 27)**: o parque está dividido em canteiros que se reconhecem no terreno (cada canteiro do jardim, as faixas da EN 247, os blocos de módulos, os grupos de árvores e arbustos), com o número num círculo e o contorno tracejado no mapa. Servem para dizer onde se está («estou no canteiro 12»). São números e não letras porque as letras A–E já são os módulos de plantação. Separador «Canteiros» com a lista; a ficha de cada canteiro tem o que leva (e o que falta plantar, com o registo), «Guiar até aqui», exportação (CSV) e «Partilhar», que dá uma ligação que abre o mapa no canteiro (…/#c12). O «Onde estou» e as fichas das plantas, manchas e módulos dizem o canteiro.
- **Onde estou**: o botão com a mira mostra a posição do telemóvel no mapa (GPS, ± alguns metros), em que mancha ou módulo está e a árvore mais próxima. As coordenadas do desenho estão em ETRS89 / PT-TM06.
- **Rodar o mapa**: o botão com a bússola (desligado por defeito) roda o mapa conforme a direção para onde aponta o telemóvel; ao desligar, o mapa volta à orientação do desenho (norte à direita).
- **Guiar até aqui**: na ficha de uma árvore, arbusto, mancha, vértice de mancha ou módulo (nos vértices, com botões para passar ao anterior/seguinte); mostra a linha desde a posição GPS até lá, a distância e o lado para onde ir (com a bússola do telemóvel).
- **Modo sol**: botão no cabeçalho; tira o ortofotomapa e engrossa linhas, letras e botões para ler ao sol. A escolha fica guardada no aparelho.
- **Registo do que está plantado**: separador «Avanço» (entrar com nome e código da obra). Árvores e arbustos um a um, manchas e módulos inteiros; modo registo (tocar para marcar), botão nas fichas e «Marcar onde estou». Funciona sem rede e sincroniza depois. Exporta para Excel (CSV). Os dados ficam na base de dados da We Garden (Supabase, tabela `plantacao_registo`).
- **Mostrar tudo, só o já plantado ou só o que falta plantar**: escolha «Mostrar» no separador Espécies ou no botão das camadas. Com «Já plantado» ou «Por plantar», o mapa, o resumo e a lista de espécies mostram só isso, com as quantidades feitas ou em falta; um aviso no mapa lembra a vista escolhida. No modo registo, o que se marca fica à vista (esbatido) para se poder desmarcar com outro toque. Precisa de ter entrado no registo (separador «Avanço»); a escolha fica guardada no aparelho.
- **Selecionar uma zona**: no botão da régua, opção «Zona»; tocar nos cantos e aparece a lista do que a zona leva (árvores e arbustos contados, m² e plantas estimadas das herbáceas, módulos e plantas dos módulos; com o registo, o que já está plantado e o que falta). Nas caixas escolhe-se o que vai para a exportação (CSV).
- **Relevo**: camada «Relevo do terreno» com sombreado, curvas de nível (0,5 m) e cotas do levantamento, tiradas da folha PAI.03_IMPLA do DWG; tocar num sítio vazio do mapa mostra a cota aproximada. Camada «Montes da modelação» com os montes propostos (curvas das ilhas PAI04) e a altura estimada de cada um (0,5 m por curva — a confirmar com o projetista). As fichas das plantas e manchas indicam a cota e se estão em cima de um monte.
- **Sem rede**: na primeira visita com rede, a página, as fotos (cerca de 20 MB) e os tipos de letra ficam guardados no aparelho. Depois o mapa abre sem cobertura. No iPhone, convém adicionar ao ecrã principal (Partilhar → Adicionar ao ecrã principal).
