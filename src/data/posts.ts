export type PostSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  lead: string;
  date: string;
  category: string;
  thumbnailLabel: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "dziecinstwo-mojzesza-koszyk-na-nilu",
    title: "Dzieciństwo Mojżesza: Od koszyka na Nilu do pałacu faraona",
    excerpt:
      "Pierwsze lata życia Mojżesza pokazują, jak ocalenie jednego dziecka zmieniło bieg historii całego narodu.",
    lead:
      "Historia dzieciństwa Mojżesza łączy dramat zagrożenia, opiekę rodziny i niespodziewane wejście w świat egipskiego dworu.",
    date: "8 marca 2026",
    category: "Biografia",
    thumbnailLabel: "Nil i pałac",
    sections: [
      {
        id: "koszyk-na-nilu",
        heading: "Koszyk na Nilu",
        paragraphs: [
          "Narodziny Mojżesza przypadają na moment politycznego napięcia, gdy faraon próbuje ograniczyć liczebność Izraelitów. Właśnie dlatego decyzja jego matki o ukryciu dziecka staje się aktem odwagi i wiary.",
          "Scena z koszykiem unoszącym się na wodzie podkreśla kruchość ludzkiego życia, ale też opatrzność, która prowadzi bohatera od pierwszych chwil istnienia.",
        ],
      },
      {
        id: "wychowanie-na-dworze",
        heading: "Wychowanie na dworze",
        paragraphs: [
          "Pobyt na dworze faraona daje Mojżeszowi dostęp do edukacji, języka władzy i realiów państwowych. To doświadczenie później okaże się kluczowe, gdy stanie wobec egipskiego systemu jako przywódca ludu.",
          "Jego dzieciństwo buduje więc podwójną tożsamość: bliskość hebrajskich korzeni i znajomość świata, z którego przyjdzie mu wyprowadzić Izraelitów.",
        ],
      },
    ],
  },
  {
    slug: "plonacy-krzew-spotkanie",
    title: "Płonący Krzew: Spotkanie, które zmieniło losy Izraela",
    excerpt:
      "Jedno spotkanie na pustyni staje się początkiem misji, która odmieni historię Izraela i samego Mojżesza.",
    lead:
      "Motyw płonącego krzewu jest jednym z najbardziej rozpoznawalnych obrazów biblijnych, ponieważ łączy objawienie, powołanie i odpowiedzialność.",
    date: "14 marca 2026",
    category: "Teologia",
    thumbnailLabel: "Pustynia i ogień",
    sections: [
      {
        id: "chwila-objawienia",
        heading: "Chwila objawienia",
        paragraphs: [
          "Mojżesz spotyka Boga nie w pałacu ani w tłumie, lecz w ciszy pustyni. To miejsce odosobnienia staje się przestrzenią, w której człowiek słyszy wezwanie wykraczające poza jego własne plany.",
          "Płonący krzew przyciąga uwagę swoim paradoksem: ogień jest realny, lecz nie niszczy. Ten obraz podkreśla świętość, która nie unicestwia, ale przemienia.",
        ],
      },
      {
        id: "powolanie-do-misji",
        heading: "Powołanie do misji",
        paragraphs: [
          "W tym momencie Mojżesz otrzymuje konkretne zadanie: wrócić do Egiptu i stanąć po stronie uciśnionych. Objawienie nie kończy się na doświadczeniu duchowym, lecz prowadzi do działania.",
          "Historia krzewu pokazuje, że powołanie bywa wymagające, ale jednocześnie daje nowe rozumienie własnej roli i odpowiedzialności.",
        ],
      },
    ],
  },
  {
    slug: "plagi-egipskie-symbolika",
    title: "Plagi Egipskie: Symbolika i znaczenie historyczne",
    excerpt:
      "Narracja o plagach ukazuje konflikt między władzą faraona a doświadczeniem wyzwolenia, które definiuje pamięć Izraela.",
    lead:
      "Plagi egipskie można czytać jednocześnie jako opowieść o sądzie, znakach czasu oraz przełomie w historii wspólnoty.",
    date: "21 marca 2026",
    category: "Analiza",
    thumbnailLabel: "Znaki i Egipt",
    sections: [
      {
        id: "konflikt-z-faraonem",
        heading: "Konflikt z faraonem",
        paragraphs: [
          "Każda plaga wzmacnia napięcie między twardą postawą władcy a rosnącą świadomością, że Egipt nie kontroluje już biegu wydarzeń. Opowieść podkreśla granice politycznej dominacji wobec rzeczywistości, której nie da się zatrzymać siłą.",
          "W tym sensie plagi nie są wyłącznie karami, lecz kolejnymi etapami odsłaniania prawdy o nieskuteczności przemocy i pychy.",
        ],
      },
      {
        id: "pamiec-historyczna",
        heading: "Pamięć historyczna",
        paragraphs: [
          "Dla Izraelitów wydarzenia te stają się fundamentem pamięci o wyjściu z niewoli. To właśnie dlatego plagi są w tradycji biblijnej nie tylko serią znaków, ale także punktem zwrotnym w budowaniu tożsamości wspólnoty.",
          "Ich znaczenie historyczne polega na tym, że przygotowują drogę do exodusu i kształtują rozumienie wolności jako daru oraz zadania.",
        ],
      },
    ],
  },
];
