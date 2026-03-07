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
    slug: "ocalony-z-nilu-tajemnica-koszyka-w-trzcinach",
    title: "Ocalony z Nilu: Tajemnica koszyka w trzcinach",
    excerpt:
      "Poznaj historię dziecka, które miało zginąć w Nilu, a stało się największym prorokiem w historii.",
    lead:
      "Narodziny Mojżesza rozgrywają się w cieniu królewskiego dekretu, który skazywał hebrajskich chłopców na śmierć. To opowieść o odwadze, matczynej strategii i nieoczekiwanym ocaleniu.",
    date: "8 marca 2026",
    category: "Narodziny",
    thumbnailLabel: "Koszyk w trzcinach",
    sections: [
      {
        id: "koszyk-na-nilu",
        heading: "Plan, który uratował życie",
        paragraphs: [
          "Matka Mojżesza podejmuje desperacką decyzję i umieszcza syna w szczelnym koszyku ukrytym pośród nadnilowych trzcin. To jeden z najbardziej dramatycznych obrazów biblijnej historii dzieciństwa.",
          "Wydarzenie pokazuje, że los narodu bywa związany z pozornie małymi decyzjami pojedynczych osób. W ciszy brzegu Nilu zaczyna się historia przyszłego przywódcy Izraela.",
        ],
      },
      {
        id: "corka-faraona",
        heading: "Spotkanie z córką faraona",
        paragraphs: [
          "Koszyk zostaje odnaleziony przez córkę faraona, która postanawia ocalić niemowlę i wychować je na dworze. Ta decyzja zmienia nie tylko życie chłopca, ale i późniejszą historię Egiptu.",
          "Mojżesz dorasta między dwoma światami: hebrajskim pochodzeniem i egipską elitą. To napięcie stanie się kluczowe dla jego dalszej drogi.",
        ],
      },
    ],
  },
  {
    slug: "ksiaze-ktory-stal-sie-wygnancem",
    title: "Książę, który stał się wygnańcem",
    excerpt:
      "Dworskie wychowanie nie zatarło jego pochodzenia, a jeden gwałtowny czyn otworzył drogę na pustynne wygnanie.",
    lead:
      "Mojżesz, wychowany jak książę, staje wobec dramatycznego wyboru między bezpieczeństwem pałacu a solidarnością z własnym ludem. Cena tego wyboru okazuje się bardzo wysoka.",
    date: "12 marca 2026",
    category: "Tożsamość",
    thumbnailLabel: "Dwór i pustynia",
    sections: [
      {
        id: "rozlam-tozsamosci",
        heading: "Pęknięcie tożsamości",
        paragraphs: [
          "Mojżesz widzi cierpienie Hebrajczyków i nie pozostaje obojętny. Moment konfrontacji z egipskim nadzorcą odsłania, że jego lojalność nie należy już do dworu.",
          "Po ujawnieniu zajścia staje się człowiekiem ściganym. Z pozycji uprzywilejowanego księcia przechodzi do roli uchodźcy bez politycznej ochrony.",
        ],
      },
      {
        id: "lata-na-obczyznie",
        heading: "Nowe życie na obczyźnie",
        paragraphs: [
          "Na pustyni Madian Mojżesz zakłada rodzinę i uczy się życia z dala od pałacowego splendoru. To lata, które hartują jego charakter i uczą cierpliwości.",
          "Wygnanie nie jest końcem historii, lecz etapem przygotowania. Właśnie tam dojrzewa człowiek, który wkrótce wróci do Egiptu już jako przywódca.",
        ],
      },
    ],
  },
  {
    slug: "plonacy-krzew-glos-ktory-zmienil-wszystko",
    title: "Płonący Krzew: Głos, który zmienił wszystko",
    excerpt:
      "Na pustyni Mojżesz słyszy wezwanie, które zamienia pasterza w rzecznika wolności dla całego narodu.",
    lead:
      "Scena płonącego krzewu stanowi duchowy punkt zwrotny historii Mojżesza. To chwila, w której niepewność spotyka się z jasnym i wymagającym powołaniem.",
    date: "16 marca 2026",
    category: "Przełom",
    thumbnailLabel: "Ogień na pustyni",
    sections: [
      {
        id: "swiete-miejsce",
        heading: "Święte miejsce pośród pustki",
        paragraphs: [
          "Krzew, który płonie i nie spala się, staje się znakiem rzeczywistości przekraczającej zwykłe doświadczenie. Mojżesz zostaje zatrzymany przez tajemnicę, której nie może zignorować.",
          "Słowa wypowiedziane przy tym znaku nadają sens jego wcześniejszym trudnym doświadczeniom. To, co było wygnaniem, zaczyna być przygotowaniem do misji.",
        ],
      },
      {
        id: "powrot-do-egiptu",
        heading: "Decyzja o powrocie",
        paragraphs: [
          "Mojżesz otrzymuje konkretne polecenie: wrócić do Egiptu i wystąpić wobec faraona. Zadanie wydaje się niemożliwe, ale nadaje kierunek całemu jego życiu.",
          "Od tej chwili opowieść o Mojżeszu staje się historią odpowiedzialności za wspólnotę. Powołanie prowadzi go od lęku do działania.",
        ],
      },
    ],
  },
  {
    slug: "plagi-egipskie-starcie-dwoch-swiatow",
    title: "Plagi Egipskie: Starcie dwóch światów",
    excerpt:
      "Seria plag pokazuje nie tylko katastrofy naturalne, ale przede wszystkim konflikt między pychą imperium a wolnością uciśnionych.",
    lead:
      "Plagi egipskie są jednym z najbardziej intensywnych momentów narracji o wyjściu z niewoli. Każdy kolejny znak podważa pewność faraona i zmienia bieg historii.",
    date: "20 marca 2026",
    category: "Konflikt",
    thumbnailLabel: "Znaki nad Egiptem",
    sections: [
      {
        id: "eskalacja-konfliktu",
        heading: "Eskalacja konfliktu",
        paragraphs: [
          "Kolejne plagi stopniowo osłabiają autorytet władcy, który odmawia wypuszczenia Izraelitów. To proces, w którym polityczna siła zderza się z granicami własnej kontroli.",
          "Narracja podkreśla, że opór faraona ma konsekwencje dla całego kraju. Każdy etap konfliktu zaostrza napięcie i przyspiesza moment przełomu.",
        ],
      },
      {
        id: "znaczenie-symboliczne",
        heading: "Znaczenie symboliczne",
        paragraphs: [
          "Plagi odczytuje się jako znaki demaskujące kruchość systemu opartego na przemocy. W tej perspektywie są one czymś więcej niż wydarzeniami nadzwyczajnymi.",
          "Dla Izraelitów stają się zapowiedzią wyzwolenia i początkiem nowej pamięci zbiorowej. To pamięć, która później buduje ich tożsamość.",
        ],
      },
    ],
  },
  {
    slug: "przejscie-przez-morze-cud-wolnosci",
    title: "Przejście przez Morze: Cud wolności",
    excerpt:
      "W chwili bez wyjścia naród doświadcza przejścia, które na zawsze definiuje sens wolności i zaufania.",
    lead:
      "Scena przejścia przez morze należy do najważniejszych obrazów biblijnej pamięci historycznej. Pokazuje graniczny moment między niewolą a nowym początkiem.",
    date: "24 marca 2026",
    category: "Cud",
    thumbnailLabel: "Droga przez morze",
    sections: [
      {
        id: "moment-graniczny",
        heading: "Moment graniczny",
        paragraphs: [
          "Uciekający Izraelici stają między wodą a armią faraona, bez realnej możliwości ratunku. To chwila, w której lęk miesza się z nadzieją.",
          "Przejście przez morze zostaje zapamiętane jako doświadczenie radykalnej zmiany losu. Niewolnicy zaczynają postrzegać siebie jako wspólnotę wolnych ludzi.",
        ],
      },
      {
        id: "pamiec-wolnosci",
        heading: "Pamięć wolności",
        paragraphs: [
          "Wydarzenie to staje się centralnym punktem opowieści przekazywanej kolejnym pokoleniom. Wolność nie jest tu abstrakcją, lecz konkretnym doświadczeniem drogi.",
          "Historia morza pokazuje także, że wolność wymaga odwagi i odpowiedzialności. Od tej chwili naród ma budować nowy porządek poza Egiptem.",
        ],
      },
    ],
  },
  {
    slug: "dekalog-fundamenty-nowej-cywilizacji",
    title: "Dekalog: Fundamenty nowej cywilizacji",
    excerpt:
      "Na Synaju rodzi się porządek, który porządkuje relacje społeczne i wyznacza etyczny kierunek dla całej wspólnoty.",
    lead:
      "Dekalog to nie tylko zbiór przykazań, ale też projekt ładu społecznego po doświadczeniu exodusu. W tradycji biblijnej staje się fundamentem odpowiedzialności za Boga i drugiego człowieka.",
    date: "29 marca 2026",
    category: "Prawo",
    thumbnailLabel: "Synaj i tablice",
    sections: [
      {
        id: "przymierze-na-synaju",
        heading: "Przymierze na Synaju",
        paragraphs: [
          "Po wyjściu z Egiptu wspólnota potrzebuje zasad, które zorganizują życie poza systemem niewoli. Dekalog porządkuje relacje i wskazuje granice przemocy.",
          "Przykazania są odpowiedzią na pytanie, jak budować trwałą wspólnotę wolnych ludzi. To rdzeń nowej tożsamości Izraela.",
        ],
      },
      {
        id: "dziedzictwo-cywilizacyjne",
        heading: "Dziedzictwo cywilizacyjne",
        paragraphs: [
          "Wpływ Dekalogu wykracza daleko poza starożytne realia pustyni. Jego treść kształtowała debatę moralną i prawną przez kolejne stulecia.",
          "W tym sensie Synaj to nie tylko miejsce religijnego wydarzenia, ale także początek projektu cywilizacyjnego o długim historycznym trwaniu.",
        ],
      },
    ],
  },
];
