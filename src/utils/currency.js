const currencies = {
  ADA: "Cardano",
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan afghani",
  ALL: "Albanian lek",
  AMD: "Armenian dram",
  ANG: "Netherlands Antillean Guilder",
  AOA: "Angolan kwanza",
  ARS: "Argentine peso",
  AUD: "Australian dollar",
  AWG: "Aruban florin",
  AZN: "Azerbaijani manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Bajan dollar",
  BCH: "Bitcoin Cash",
  BDT: "Bangladeshi taka",
  BGN: "Bulgarian lev",
  BHD: "Bahraini dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudan dollar",
  BNB: "Binance Coin",
  BND: "Brunei dollar",
  BOB: "Bolivian boliviano",
  BRL: "Brazilian real",
  BSD: "Bahamian dollar",
  BTC: "Bitcoin",
  BTN: "Bhutan currency",
  BWP: "Botswanan Pula",
  BYN: "New Belarusian Ruble",
  BYR: "Belarusian Ruble",
  BZD: "Belize dollar",
  CAD: "Canadian dollar",
  CDF: "Congolese franc",
  CHF: "Swiss franc",
  CLF: "Chilean Unit of Account (UF)",
  CLP: "Chilean peso",
  CNY: "Chinese Yuan",
  COP: "Colombian peso",
  CRC: "Costa Rican Colón",
  CUC: "Cuban peso",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean escudo",
  CZK: "Czech koruna",
  DJF: "Djiboutian franc",
  DKK: "Danish krone",
  DOGE: "Dogecoin",
  DOP: "Dominican peso",
  DZD: "Algerian dinar",
  EGP: "Egyptian pound",
  ERN: "Eritrean nakfa",
  ETB: "Ethiopian birr",
  ETC: "Ethereum Classic",
  ETH: "Ether",
  EUR: "Euro",
  FJD: "Fijian dollar",
  FKP: "Falkland Islands pound",
  GBP: "Pound sterling",
  GEL: "Georgian lari",
  GGP: "GGPro",
  GHS: "Ghanaian cedi",
  GIP: "Gibraltar pound",
  GMD: "Gambian dalasi",
  GNF: "Guinean franc",
  GTQ: "Guatemalan quetzal",
  GYD: "Guyanaese Dollar",
  HKD: "Hong Kong dollar",
  HNL: "Honduran lempira",
  HRK: "Croatian kuna",
  HTG: "Haitian gourde",
  HUF: "Hungarian forint",
  IDR: "Indonesian rupiah",
  ILS: "Israeli New Shekel",
  IMP: "CoinIMP",
  INR: "Indian rupee",
  IQD: "Iraqi dinar",
  IRR: "Iranian rial",
  ISK: "Icelandic króna",
  JEP: "Jersey Pound",
  JMD: "Jamaican dollar",
  JOD: "Jordanian dinar",
  JPY: "Japanese yen",
  KES: "Kenyan shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian riel",
  KMF: "Comorian franc",
  KPW: "North Korean won",
  KRW: "South Korean won",
  KWD: "Kuwaiti dinar",
  KYD: "Cayman Islands dollar",
  KZT: "Kazakhstani tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese pound",
  LINK: "ChainLink",
  LKR: "Sri Lankan rupee",
  LRD: "Liberian dollar",
  LSL: "Lesotho loti",
  LTC: "Litecoin",
  LTL: "Lithuanian litas",
  LVL: "Latvian lats",
  LYD: "Libyan dinar",
  MAD: "Moroccan dirham",
  MDL: "Moldovan leu",
  MGA: "Malagasy ariary",
  MKD: "Macedonian denar",
  MMK: "Myanmar Kyat",
  MNT: "Mongolian tugrik",
  MOP: "Macanese pataca",
  MRO: "Mauritanian ouguiya",
  MUR: "Mauritian rupee",
  MVR: "Maldivian rufiyaa",
  MWK: "Malawian kwacha",
  MXN: "Mexican peso",
  MYR: "Malaysian ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian dollar",
  NGN: "Nigerian naira",
  NIO: "Nicaraguan córdoba",
  NOK: "Norwegian krone",
  NPR: "Nepalese rupee",
  NZD: "New Zealand dollar",
  OMR: "Omani rial",
  PAB: "Panamanian balboa",
  PEN: "Sol",
  PGK: "Papua New Guinean kina",
  PHP: "Philippine peso",
  PKR: "Pakistani rupee",
  PLN: "Poland złoty",
  PYG: "Paraguayan guarani",
  QAR: "Qatari Rial",
  RON: "Romanian leu",
  RSD: "Serbian dinar",
  RUB: "Russian ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi riyal",
  SBD: "Solomon Islands dollar",
  SCR: "Seychellois rupee",
  SDG: "Sudanese pound",
  SEK: "Swedish krona",
  SGD: "Singapore dollar",
  SHP: "Saint Helena pound",
  SLL: "Sierra Leonean leone",
  SOS: "Somali shilling",
  SRD: "Surinamese dollar",
  STD: "São Tomé and Príncipe Dobra (pre-2018)",
  SVC: "Salvadoran Colón",
  SYP: "Syrian pound",
  SZL: "Swazi lilangeni",
  THB: "Thai baht",
  THETA: "Theta",
  TJS: "Tajikistani somoni",
  TMT: "Turkmenistani manat",
  TND: "Tunisian dinar",
  TOP: "Tongan Paʻanga",
  TRX: "TRON",
  TRY: "Turkish lira",
  TTD: "Trinidad & Tobago Dollar",
  TWD: "New Taiwan dollar",
  TZS: "Tanzanian shilling",
  UAH: "Ukrainian hryvnia",
  UGX: "Ugandan shilling",
  USD: "United States dollar",
  USDT: "Tether",
  UYU: "Uruguayan peso",
  UZS: "Uzbekistani som",
  VEF: "Sovereign Bolivar",
  VND: "Vietnamese dong",
  VUV: "Vanuatu vatu",
  WST: "Samoan tala",
  XAF: "Central African CFA franc",
  XAG: "Silver Ounce",
  XAU: "XauCoin",
  XCD: "East Caribbean dollar",
  XDR: "Special Drawing Rights",
  XLM: "Stellar",
  XOF: "West African CFA franc",
  XPF: "CFP franc",
  XRP: "XRP",
  YER: "Yemeni rial",
  ZAR: "South African rand",
  ZMK: "Zambian kwacha",
  ZMW: "Zambian Kwacha",
  ZWL: "Zimbabwean Dollar"
}


export defa