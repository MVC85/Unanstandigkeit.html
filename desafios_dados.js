// ════════════════════════════════════════════
// UNANSTÄNDIGKEIT — Banco de Dados do "Jogo dos Dados"
// ════════════════════════════════════════════
// Cada item é uma FRASE COMPLETA já dividida em duas partes:
//
//   parte1 : o que aparece no Dado 1 (a ação)
//   parte2 : o que aparece no Dado 2 (o complemento/lugar)
//
// Ao rolar, o jogo sorteia uma frase inteira da lista certa
// (DADOS_HOMEM ou DADOS_MULHER) e mostra parte1 no dado 1 e
// parte2 no dado 2 — sempre formando uma combinação que faz
// sentido, em vez de combinar ação e lugar aleatoriamente.
//
// DADOS_HOMEM : o HOMEM executa a ação (na mulher)
// DADOS_MULHER: a MULHER executa a ação (no homem)
//
// Para ADICIONAR: acrescente um objeto {parte1, parte2} na lista certa.
// Para REMOVER: apague o objeto correspondente.
// ════════════════════════════════════════════

window.DADOS_MULHER=[
  {parte1:'Lamber',parte2:'a bunda'},
  {parte1:'Lamber',parte2:'os seios'},
  {parte1:'Lamber',parte2:'o pescoço'},
  {parte1:'Lamber',parte2:'os mamilos'},
  {parte1:'Lamber',parte2:'a orelha'},
  {parte1:'Lamber',parte2:'as costas'},
  {parte1:'Lamber',parte2:'o ânus'},
  {parte1:'Lamber',parte2:'as coxas'},
  {parte1:'Lamber',parte2:'o clitóris'},
  {parte1:'Lamber',parte2:'os pés'},
  {parte1:'Lamber',parte2:'o umbigo'},
  {parte1:'Lamber',parte2:'a nuca'},
  {parte1:'Lamber',parte2:'os lábios'},

  {parte1:'Beijar',parte2:'a bunda'},
  {parte1:'Beijar',parte2:'os seios'},
  {parte1:'Beijar',parte2:'o pescoço'},
  {parte1:'Beijar',parte2:'os mamilos'},
  {parte1:'Beijar',parte2:'a orelha'},
  {parte1:'Beijar',parte2:'as costas'},
  {parte1:'Beijar',parte2:'as coxas'},
  {parte1:'Beijar',parte2:'os pés'},
  {parte1:'Beijar',parte2:'o umbigo'},
  {parte1:'Beijar',parte2:'a nuca'},
  {parte1:'Beijar',parte2:'os lábios'},
  {parte1:'Beijar',parte2:'a barriga'},

  {parte1:'Morder',parte2:'a bunda'},
  {parte1:'Morder',parte2:'os mamilos'},
  {parte1:'Morder',parte2:'a orelha'},
  {parte1:'Morder',parte2:'as coxas'},
  {parte1:'Morder',parte2:'os lábios'},
  {parte1:'Morder',parte2:'o pescoço'},
  {parte1:'Morder',parte2:'os pés'},

  {parte1:'Acariciar',parte2:'a bunda'},
  {parte1:'Acariciar',parte2:'os seios'},
  {parte1:'Acariciar',parte2:'a virilha'},
  {parte1:'Acariciar',parte2:'os mamilos'},
  {parte1:'Acariciar',parte2:'a barriga'},
  {parte1:'Acariciar',parte2:'as costas'},
  {parte1:'Acariciar',parte2:'as coxas'},
  {parte1:'Acariciar',parte2:'o clitóris'},
  {parte1:'Acariciar',parte2:'os pés'},
  {parte1:'Acariciar',parte2:'a nuca'},
  {parte1:'Acariciar',parte2:'o rosto'},

  {parte1:'Apertar',parte2:'a bunda'},
  {parte1:'Apertar',parte2:'os seios'},
  {parte1:'Apertar',parte2:'as coxas'},
  {parte1:'Apertar',parte2:'os mamilos'},
  {parte1:'Apertar',parte2:'a virilha'},

  {parte1:'Chupar',parte2:'os seios'},
  {parte1:'Chupar',parte2:'os mamilos'},
  {parte1:'Chupar',parte2:'o clitóris'},
  {parte1:'Chupar',parte2:'os lábios'},
  {parte1:'Chupar',parte2:'os dedos dos pés'},

  {parte1:'Esfregar o pênis em',parte2:'a bunda'},
  {parte1:'Esfregar o pênis em',parte2:'a barriga'},
  {parte1:'Esfregar o pênis em',parte2:'as coxas'},
  {parte1:'Esfregar o pênis em',parte2:'os seios'},
  {parte1:'Esfregar o pênis em',parte2:'os lábios'},

  {parte1:'Dar palmadas em',parte2:'a bunda'},
  {parte1:'Dar palmadas em',parte2:'as coxas'},

  {parte1:'Cobrir de beijos',parte2:'o pescoço'},
  {parte1:'Cobrir de beijos',parte2:'a barriga'},
  {parte1:'Cobrir de beijos',parte2:'as costas'},
  {parte1:'Cobrir de beijos',parte2:'o rosto'},

  {parte1:'Passar a língua em',parte2:'o pescoço'},
  {parte1:'Passar a língua em',parte2:'os mamilos'},
  {parte1:'Passar a língua em',parte2:'o ânus'},
  {parte1:'Passar a língua em',parte2:'o clitóris'},
  {parte1:'Passar a língua em',parte2:'a orelha'},
  {parte1:'Passar a língua em',parte2:'o umbigo'},

  {parte1:'Penetrar com o dedo',parte2:'a vagina'},
  {parte1:'Penetrar com o dedo',parte2:'o ânus'},

  {parte1:'Massagear',parte2:'os seios'},
  {parte1:'Massagear',parte2:'a bunda'},
  {parte1:'Massagear',parte2:'as costas'},
  {parte1:'Massagear',parte2:'os pés'},
  {parte1:'Massagear',parte2:'a nuca'},
  {parte1:'Massagear',parte2:'a virilha'},

  {parte1:'Beliscar',parte2:'os mamilos'},
  {parte1:'Beliscar',parte2:'a bunda'},

  {parte1:'Soprar',parte2:'a orelha'},
  {parte1:'Soprar',parte2:'o pescoço'},
  {parte1:'Soprar',parte2:'os mamilos'},
  {parte1:'Soprar',parte2:'o clitóris'},
  {parte1:'Soprar',parte2:'a nuca'},
];

window.DADOS_HOMEM=[
  {parte1:'Lamber',parte2:'o pênis'},
  {parte1:'Lamber',parte2:'as bolas'},
  {parte1:'Lamber',parte2:'a virilha'},
  {parte1:'Lamber',parte2:'os lábios'},

  {parte1:'Beijar',parte2:'o pênis'},
  {parte1:'Beijar',parte2:'as coxas'},
  {parte1:'Beijar',parte2:'os lábios'},

  {parte1:'Morder',parte2:'a orelha'},
  {parte1:'Morder',parte2:'as coxas'},
  {parte1:'Morder',parte2:'os lábios'},
  {parte1:'Morder',parte2:'o pescoço'},
  {parte1:'Morder',parte2:'a bunda'},

  {parte1:'Acariciar',parte2:'o pênis'},
  {parte1:'Acariciar',parte2:'as bolas'},
  {parte1:'Acariciar',parte2:'a virilha'},
  {parte1:'Acariciar',parte2:'as coxas'},

  {parte1:'Chupar',parte2:'o pênis'},
  {parte1:'Chupar',parte2:'as bolas'},
  {parte1:'Chupar',parte2:'os lábios'},

  {parte1:'Esfregar os seios em',parte2:'o pênis'},
  {parte1:'Esfregar os seios em',parte2:'o rosto'},

  {parte1:'Passar a língua em',parte2:'o pênis'},
  {parte1:'Passar a língua em',parte2:'as bolas'},
  {parte1:'Passar a língua em',parte2:'o pescoço'},

  {parte1:'Cobrir de beijos',parte2:'o pescoço'},
  {parte1:'Cobrir de beijos',parte2:'o pênis'},

  {parte1:'Deslizar os dedos em',parte2:'o pênis'},
  {parte1:'Deslizar os dedos em',parte2:'as bolas'},

  {parte1:'Passar os pés em',parte2:'o pênis'},
  {parte1:'Passar os pés em',parte2:'a virilha'},
];
