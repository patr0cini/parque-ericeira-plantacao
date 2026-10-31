# Parque Ecológico da Ericeira — Plano de plantação

Mapa interativo de trabalho da We Garden para a obra do Parque Ecológico da Ericeira (EMPA).

- Base: desenho 07 «Plano de Plantação Árvores, Arbustos e Herbáceas» (PAI.07_PLANT, 1/2000, 30/05/2025), Câmara Municipal de Mafra — DPOT. Geometria extraída do DWG `Empa_Plano_Plantação_PEEriceira_PE_202510`.
- O desenho original é propriedade dos seus autores. Este mapa é um documento de trabalho interno da obra.
- Fotografias: Flora-On (flora-on.pt), Sociedade Portuguesa de Botânica, licença CC BY-NC 4.0. O autor de cada foto está indicado na página.

## No telemóvel

- **Mapa a ocupar o ecrã**: o cabeçalho fica numa linha e o mapa vai até à barra dos separadores; a lista continua por baixo. Com o ecrã de pé, o mapa roda para o norte ficar para cima (o parque é comprido no sentido norte–sul e assim enche o ecrã). Com o telemóvel deitado e no computador fica como a folha 07, com o norte à direita. A seta do norte mostra sempre a orientação.
- **Botões numa barra em baixo**, ao alcance do polegar. O gesto de dois dedos aproxima e afasta; os botões «+» e «−» ficam só no computador.
- **Fichas por cima do mapa**: ao tocar numa planta, mancha, módulo ou canteiro, a ficha abre em baixo, com o essencial e os botões («Destacar», «Guiar até aqui»); o resto (árvores mais próximas, lados e vértices, coordenadas, cota, fotografias) está em «Mais detalhes». A página não se mexe e o que se tocou fica à vista.
- **Avisos numa linha** (registo, posição GPS, destaque, vista): tocar no texto mostra o pormenor.

## No computador

- **Cabeçalho numa linha**: a origem do desenho (folha 07, escala, data) está em Notas.
- **Ficha na coluna da direita**: ao tocar num elemento do mapa ou da lista, a ficha abre no lugar da lista, com tudo à vista, e o mapa fica livre. «← Voltar à lista» (ou outro separador) regressa à lista. No tablet deitado é igual.

## No terreno

- **Canteiros numerados (1 a 27)**: o parque está dividido em canteiros que se reconhecem no terreno (cada grupo de manchas rodeado por caminhos, as faixas da EN 247, os blocos de módulos, os grupos de árvores e arbustos), com o número numa etiqueta verde e o contorno tracejado no mapa. Servem para dizer onde se está («estou no canteiro 12»). São números e não letras porque as letras A–E já são os módulos de plantação. Separador «Canteiros» com a lista; a ficha de cada canteiro tem o que leva (e o que falta plantar, com o registo), «Guiar até aqui», exportação (CSV) e «Partilhar», que dá uma ligação que abre o mapa no canteiro (…/#c12). O «Onde estou» e as fichas das plantas, manchas e módulos dizem o canteiro.
- **Onde estou**: o botão com a mira mostra a posição do telemóvel no mapa (GPS, ± alguns metros), o canteiro e, no pormenor do aviso, a mancha ou módulo onde está e a árvore mais próxima. As coordenadas do desenho estão em ETRS89 / PT-TM06.
- **Rodar o mapa**: o botão com a bússola (desligado por defeito) roda o mapa conforme a direção para onde aponta o telemóvel; ao desligar, o mapa volta à orientação de antes.
- **Guiar até aqui**: na ficha de uma árvore, arbusto, mancha, vértice de mancha ou módulo (nos vértices, com botões para passar ao anterior/seguinte); mostra a linha desde a posição GPS até lá, a distância e o lado para onde ir (com a bússola do telemóvel).
- **Modo sol**: botão no cabeçalho; tira o ortofotomapa e engrossa linhas, letras e botões para ler ao sol. A escolha fica guardada no aparelho.
- **Registo do que está plantado**: separador «Avanço» (entrar com nome e código da obra). Árvores e arbustos um a um, manchas e módulos inteiros; modo registo (tocar para marcar), botão nas fichas e «Marcar onde estou». Funciona sem rede e sincroniza depois. Exporta para Excel (CSV). Os dados ficam na base de dados da We Garden (Supabase, tabela `plantacao_registo`).
- **Mostrar tudo, só o já plantado ou só o que falta plantar**: escolha «Mostrar» no separador Espécies (aparece depois de entrar no registo). Com «Já plantado» ou «Por plantar», o mapa, o resumo e a lista de espécies mostram só isso, com as quantidades feitas ou em falta; um aviso no mapa lembra a vista escolhida. No modo registo, o que se marca fica à vista (esbatido) para se poder desmarcar com outro toque. A escolha fica guardada no aparelho.
- **Lista de espécies**: tocar no nome destaca a espécie no mapa; tocar na cor esconde-a ou volta a mostrá-la; a mira leva o mapa até onde a espécie está. O compasso e os pontos a confirmar estão na ficha da espécie.
- **Selecionar uma zona**: no botão da régua, opção «Zona»; tocar nos cantos e «Ver lista» mostra o que a zona leva (árvores e arbustos contados, m² e plantas estimadas das herbáceas, módulos e plantas dos módulos; com o registo, o que já está plantado e o que falta). Nas caixas escolhe-se o que vai para a exportação (CSV).
- **Relevo**: camada «Relevo do terreno» com sombreado, curvas de nível (0,5 m) e cotas do levantamento, tiradas da folha PAI.03_IMPLA do DWG; os valores das curvas e as cotas aparecem quando se aproxima o mapa. Tocar num sítio vazio do mapa mostra a cota aproximada. Camada «Montes da modelação» com os montes propostos (curvas das ilhas PAI04) e a altura estimada de cada um (0,5 m por curva — a confirmar com o projetista), visível de perto. As fichas das plantas e manchas indicam a cota e se estão em cima de um monte.
- **Etiquetas sem sobreposição**: os códigos das manchas e das plantas, as letras dos módulos, as alturas dos montes e as cotas só aparecem onde não tocam noutras; os números dos canteiros têm prioridade. Ao aproximar o mapa aparecem mais.
- **Sem rede**: na primeira visita com rede, a página, as fotos (cerca de 20 MB) e os tipos de letra ficam guardados no aparelho. Depois o mapa abre sem cobertura. No iPhone, convém adicionar ao ecrã principal (Partilhar → Adicionar ao ecrã principal).
