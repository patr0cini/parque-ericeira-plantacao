# Parque Ecológico da Ericeira — Plano de plantação

Mapa interativo de trabalho da We Garden para a obra do Parque Ecológico da Ericeira (EMPA).

- Base: desenho 07 «Plano de Plantação Árvores, Arbustos e Herbáceas» (PAI.07_PLANT, 1/2000, 30/05/2025), Câmara Municipal de Mafra — DPOT. Geometria extraída do DWG `Empa_Plano_Plantação_PEEriceira_PE_202510`.
- O desenho original é propriedade dos seus autores. Este mapa é um documento de trabalho interno da obra.
- Fotografias: Flora-On (flora-on.pt), Sociedade Portuguesa de Botânica, licença CC BY-NC 4.0. O autor de cada foto está indicado na página.

## No terreno

- **Onde estou**: o botão com a mira mostra a posição do telemóvel no mapa (GPS, ± alguns metros), em que mancha ou módulo está e a árvore mais próxima. As coordenadas do desenho estão em ETRS89 / PT-TM06.
- **Rodar o mapa**: o botão com a bússola (desligado por defeito) roda o mapa conforme a direção para onde aponta o telemóvel; ao desligar, o mapa volta à orientação do desenho (norte à direita).
- **Guiar até aqui**: na ficha de uma árvore, arbusto, mancha, vértice de mancha ou módulo (nos vértices, com botões para passar ao anterior/seguinte); mostra a linha desde a posição GPS até lá, a distância e o lado para onde ir (com a bússola do telemóvel).
- **Modo sol**: botão no cabeçalho; tira o ortofotomapa e engrossa linhas, letras e botões para ler ao sol. A escolha fica guardada no aparelho.
- **Registo do que está plantado**: separador «Avanço» (entrar com nome e código da obra). Árvores e arbustos um a um, manchas e módulos inteiros; modo registo (tocar para marcar), botão nas fichas e «Marcar onde estou». Funciona sem rede e sincroniza depois. Exporta para Excel (CSV). Os dados ficam na base de dados da We Garden (Supabase, tabela `plantacao_registo`).
- **Sem rede**: na primeira visita com rede, a página, as fotos (cerca de 20 MB) e os tipos de letra ficam guardados no aparelho. Depois o mapa abre sem cobertura. No iPhone, convém adicionar ao ecrã principal (Partilhar → Adicionar ao ecrã principal).
