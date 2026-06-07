/**
 * data/thaiAlphabet.js
 * База данных тайского алфавита — встроена как JS-переменная,
 * чтобы работать без сервера (file:// протокол и Wallpaper Engine).
 *
 * Структура каждой записи:
 *   id, letter, thaiName, ruTranscription, phuketRuTranscription, meaning
 *   syllables[] — syllable / ruTr / phuketRuTr / enTr / example / examplePhuketRu
 *   words[]     — thai / ruTr / phuketRuTr / enTr / translation
 *   phrases[]   — thai / ruTr / phuketRuTr / enTr / translation
 *
 * Версия 4: 43 согласные, слоги + пхукетская транскрипция (кап, не кхрап).
 */
var THAI_ALPHABET = [
  {
    "id": 0,
    "letter": "ก",
    "thaiName": "กอ ไก่",
    "ruTranscription": "г/к",
    "phuketRuTranscription": "к",
    "enTranscription": "g/k",
    "meaning": "курица",
    "syllables": [
      {
        "syllable": "กะ",
        "ruTr": "а",
        "phuketRuTr": "ка",
        "enTr": "a",
        "example": "กะ — частица",
        "examplePhuketRu": "ка"
      },
      {
        "syllable": "กา",
        "ruTr": "а:",
        "phuketRuTr": "ка:",
        "enTr": "aa",
        "example": "กา — ворона",
        "examplePhuketRu": "ка:"
      },
      {
        "syllable": "กิ",
        "ruTr": "и",
        "phuketRuTr": "ки",
        "enTr": "i",
        "example": "กิน — есть",
        "examplePhuketRu": "кин"
      },
      {
        "syllable": "กี",
        "ruTr": "и:",
        "phuketRuTr": "ки:",
        "enTr": "ii",
        "example": "กี — (редко)",
        "examplePhuketRu": "ки:"
      },
      {
        "syllable": "กุ",
        "ruTr": "у",
        "phuketRuTr": "ку",
        "enTr": "u",
        "example": "กุญแจ — ключ",
        "examplePhuketRu": "ку"
      },
      {
        "syllable": "กู",
        "ruTr": "у:",
        "phuketRuTr": "ку:",
        "enTr": "uu",
        "example": "กู — ты (грубо)",
        "examplePhuketRu": "ку:"
      },
      {
        "syllable": "เกะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "e",
        "example": "เกะ — (редко)",
        "examplePhuketRu": "кэ"
      },
      {
        "syllable": "เก",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "ee",
        "example": "เก — (редко)",
        "examplePhuketRu": "кэ:"
      },
      {
        "syllable": "แกะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "ae",
        "example": "แกะ — овца",
        "examplePhuketRu": "кэ"
      },
      {
        "syllable": "แก",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "aae",
        "example": "แก — старый",
        "examplePhuketRu": "кэ:"
      },
      {
        "syllable": "โกะ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "o",
        "example": "โกะ — (редко)",
        "examplePhuketRu": "ко"
      },
      {
        "syllable": "โก",
        "ruTr": "о:",
        "phuketRuTr": "ко:",
        "enTr": "oo",
        "example": "โก — (редко)",
        "examplePhuketRu": "ко:"
      },
      {
        "syllable": "กอ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "aw",
        "example": "กอ — (редко)",
        "examplePhuketRu": "ко"
      },
      {
        "syllable": "กำ",
        "ruTr": "ам",
        "phuketRuTr": "кам",
        "enTr": "am",
        "example": "กำ — ворот",
        "examplePhuketRu": "кам"
      },
      {
        "syllable": "ใก",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ใกล้ — близко",
        "examplePhuketRu": "кай"
      },
      {
        "syllable": "ไก",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ไกล — далеко",
        "examplePhuketRu": "кай"
      }
    ],
    "words": [
      {
        "thai": "กา",
        "ruTr": "ка:",
        "phuketRuTr": "ка:",
        "enTr": "kaa",
        "translation": "ворона"
      },
      {
        "thai": "กิน",
        "ruTr": "гин",
        "phuketRuTr": "кин",
        "enTr": "gin",
        "translation": "есть / кушать"
      },
      {
        "thai": "แกง",
        "ruTr": "гаэнг",
        "phuketRuTr": "каэнк",
        "enTr": "gaeng",
        "translation": "карри"
      },
      {
        "thai": "กลับ",
        "ruTr": "глаб",
        "phuketRuTr": "клаб",
        "enTr": "glap",
        "translation": "возвращаться"
      }
    ],
    "phrases": [
      {
        "thai": "กินข้าว",
        "ruTr": "гин кха:o",
        "phuketRuTr": "кин као",
        "enTr": "gin khao",
        "translation": "кушать / есть рис"
      },
      {
        "thai": "กลับบ้าน",
        "ruTr": "глаб ба:н",
        "phuketRuTr": "клап бан",
        "enTr": "glap baan",
        "translation": "вернуться домой"
      }
    ]
  },
  {
    "id": 1,
    "letter": "ข",
    "thaiName": "ขอ ไข่",
    "ruTranscription": "кх",
    "phuketRuTranscription": "к",
    "enTranscription": "kh",
    "meaning": "яйцо",
    "syllables": [
      {
        "syllable": "ขะ",
        "ruTr": "а",
        "phuketRuTr": "ка",
        "enTr": "a",
        "example": "ขะ — (редко)",
        "examplePhuketRu": "ка"
      },
      {
        "syllable": "ขา",
        "ruTr": "а:",
        "phuketRuTr": "ка:",
        "enTr": "aa",
        "example": "ข้าว — рис",
        "examplePhuketRu": "као"
      },
      {
        "syllable": "ขิ",
        "ruTr": "и",
        "phuketRuTr": "ки",
        "enTr": "i",
        "example": "ขี่ — ехать",
        "examplePhuketRu": "ки"
      },
      {
        "syllable": "ขี",
        "ruTr": "и:",
        "phuketRuTr": "ки:",
        "enTr": "ii",
        "example": "ขี้ — испражнение",
        "examplePhuketRu": "ки:"
      },
      {
        "syllable": "ขุ",
        "ruTr": "у",
        "phuketRuTr": "ку",
        "enTr": "u",
        "example": "ขุด — копать",
        "examplePhuketRu": "ку"
      },
      {
        "syllable": "ขู",
        "ruTr": "у:",
        "phuketRuTr": "ку:",
        "enTr": "uu",
        "example": "ขู่ — угрожать",
        "examplePhuketRu": "ку:"
      },
      {
        "syllable": "เขะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "e",
        "example": "เข — (редко)",
        "examplePhuketRu": "кэ"
      },
      {
        "syllable": "เข",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "ee",
        "example": "เขา — он/гора",
        "examplePhuketRu": "кэ:"
      },
      {
        "syllable": "แขะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "ae",
        "example": "แข — (редко)",
        "examplePhuketRu": "кэ"
      },
      {
        "syllable": "แข",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "aae",
        "example": "แข็ง — твёрдый",
        "examplePhuketRu": "кэ:"
      },
      {
        "syllable": "โขะ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "o",
        "example": "โข — (редко)",
        "examplePhuketRu": "ко"
      },
      {
        "syllable": "โข",
        "ruTr": "о:",
        "phuketRuTr": "ко:",
        "enTr": "oo",
        "example": "โขน — (редко)",
        "examplePhuketRu": "ко:"
      },
      {
        "syllable": "ขอ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "aw",
        "example": "ขอ — просить",
        "examplePhuketRu": "ко"
      },
      {
        "syllable": "ขำ",
        "ruTr": "ам",
        "phuketRuTr": "кам",
        "enTr": "am",
        "example": "ขำ — смеяться",
        "examplePhuketRu": "кам"
      },
      {
        "syllable": "ใข",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ใข — слог",
        "examplePhuketRu": "кай"
      },
      {
        "syllable": "ไข",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ไข — слог",
        "examplePhuketRu": "кай"
      }
    ],
    "words": [
      {
        "thai": "ข้าว",
        "ruTr": "кха:o",
        "phuketRuTr": "као",
        "enTr": "khao",
        "translation": "рис"
      },
      {
        "thai": "ขาว",
        "ruTr": "кха:o",
        "phuketRuTr": "ка:o",
        "enTr": "khaao",
        "translation": "белый"
      },
      {
        "thai": "ขา",
        "ruTr": "кха:",
        "phuketRuTr": "ка:",
        "enTr": "khaa",
        "translation": "нога"
      },
      {
        "thai": "ขึ้น",
        "ruTr": "кхын",
        "phuketRuTr": "кын",
        "enTr": "khuen",
        "translation": "подниматься"
      }
    ],
    "phrases": [
      {
        "thai": "ขอโทษ",
        "ruTr": "кхо: то:т",
        "phuketRuTr": "ко тот",
        "enTr": "kho thot",
        "translation": "извините"
      },
      {
        "thai": "ขอบคุณ",
        "ruTr": "кхо:п кхун",
        "phuketRuTr": "коп кун",
        "enTr": "khob khun",
        "translation": "спасибо"
      }
    ]
  },
  {
    "id": 2,
    "letter": "ฃ",
    "thaiName": "ฃอ ขวด",
    "ruTranscription": "кх",
    "phuketRuTranscription": "к",
    "enTranscription": "kh",
    "meaning": "бутылка (устар.)",
    "syllables": [
      {
        "syllable": "ฃะ",
        "ruTr": "а",
        "phuketRuTr": "ка",
        "enTr": "a",
        "example": "ฃ — устар.",
        "examplePhuketRu": "ка"
      },
      {
        "syllable": "ฃา",
        "ruTr": "а:",
        "phuketRuTr": "ка:",
        "enTr": "aa",
        "example": "ฃา — (устар.)",
        "examplePhuketRu": "ка:"
      },
      {
        "syllable": "ฃิ",
        "ruTr": "и",
        "phuketRuTr": "ки",
        "enTr": "i",
        "example": "ฃิ — (устар.)",
        "examplePhuketRu": "ки"
      },
      {
        "syllable": "ฃี",
        "ruTr": "и:",
        "phuketRuTr": "ки:",
        "enTr": "ii",
        "example": "ฃี — (устар.)",
        "examplePhuketRu": "ки:"
      },
      {
        "syllable": "ฃุ",
        "ruTr": "у",
        "phuketRuTr": "ку",
        "enTr": "u",
        "example": "ฃุ — (устар.)",
        "examplePhuketRu": "ку"
      },
      {
        "syllable": "ฃู",
        "ruTr": "у:",
        "phuketRuTr": "ку:",
        "enTr": "uu",
        "example": "ฃู — (устар.)",
        "examplePhuketRu": "ку:"
      },
      {
        "syllable": "เฃะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "e",
        "example": "เฃะ — (устар.)",
        "examplePhuketRu": "кэ"
      },
      {
        "syllable": "เฃ",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "ee",
        "example": "เฃ — (устар.)",
        "examplePhuketRu": "кэ:"
      },
      {
        "syllable": "แฃะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "ae",
        "example": "แฃะ — (устар.)",
        "examplePhuketRu": "кэ"
      },
      {
        "syllable": "แฃ",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "aae",
        "example": "แฃ — (устар.)",
        "examplePhuketRu": "кэ:"
      },
      {
        "syllable": "โฃะ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "o",
        "example": "โฃะ — (устар.)",
        "examplePhuketRu": "ко"
      },
      {
        "syllable": "โฃ",
        "ruTr": "о:",
        "phuketRuTr": "ко:",
        "enTr": "oo",
        "example": "โฃ — (устар.)",
        "examplePhuketRu": "ко:"
      },
      {
        "syllable": "ฃอ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "aw",
        "example": "ฃอ — (устар.)",
        "examplePhuketRu": "ко"
      },
      {
        "syllable": "ฃำ",
        "ruTr": "ам",
        "phuketRuTr": "кам",
        "enTr": "am",
        "example": "ฃำ — (устар.)",
        "examplePhuketRu": "кам"
      },
      {
        "syllable": "ใฃ",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ใฃ — слог",
        "examplePhuketRu": "кай"
      },
      {
        "syllable": "ไฃ",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ไฃ — слог",
        "examplePhuketRu": "кай"
      }
    ],
    "words": [
      {
        "thai": "ฃวด",
        "ruTr": "кхуат",
        "phuketRuTr": "куат",
        "enTr": "khuat",
        "translation": "бутылка (устар.)"
      },
      {
        "thai": "ฃน",
        "ruTr": "кхон",
        "phuketRuTr": "кон",
        "enTr": "khon",
        "translation": "(устар.)"
      },
      {
        "thai": "ฃาย",
        "ruTr": "кха:й",
        "phuketRuTr": "ка:й",
        "enTr": "khaai",
        "translation": "(устар.)"
      },
      {
        "thai": "ฃึ้น",
        "ruTr": "кхын",
        "phuketRuTr": "кын",
        "enTr": "khuen",
        "translation": "(устар.)"
      }
    ],
    "phrases": [
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "буква устарела, заменена на ข"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "используется только в старых текстах"
      }
    ]
  },
  {
    "id": 3,
    "letter": "ค",
    "thaiName": "คอ ควาย",
    "ruTranscription": "кх",
    "phuketRuTranscription": "к",
    "enTranscription": "kh",
    "meaning": "буйвол",
    "syllables": [
      {
        "syllable": "คะ",
        "ruTr": "а",
        "phuketRuTr": "ка",
        "enTr": "a",
        "example": "คะ — частица",
        "examplePhuketRu": "ка"
      },
      {
        "syllable": "คา",
        "ruTr": "а:",
        "phuketRuTr": "ка:",
        "enTr": "aa",
        "example": "คา — зуд",
        "examplePhuketRu": "ка:"
      },
      {
        "syllable": "คิ",
        "ruTr": "и",
        "phuketRuTr": "ки",
        "enTr": "i",
        "example": "คิ้ว — бровь",
        "examplePhuketRu": "ки"
      },
      {
        "syllable": "คี",
        "ruTr": "и:",
        "phuketRuTr": "ки:",
        "enTr": "ii",
        "example": "คี — (редко)",
        "examplePhuketRu": "ки:"
      },
      {
        "syllable": "คุ",
        "ruTr": "у",
        "phuketRuTr": "ку",
        "enTr": "u",
        "example": "คุณ — вы",
        "examplePhuketRu": "кун"
      },
      {
        "syllable": "คู",
        "ruTr": "у:",
        "phuketRuTr": "ку:",
        "enTr": "uu",
        "example": "คู่ — пара",
        "examplePhuketRu": "ку:"
      },
      {
        "syllable": "เคะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "e",
        "example": "เข — (редко)",
        "examplePhuketRu": "кэ"
      },
      {
        "syllable": "เค",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "ee",
        "example": "เขา — он/гора",
        "examplePhuketRu": "кэ:"
      },
      {
        "syllable": "แคะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "ae",
        "example": "แค — (редко)",
        "examplePhuketRu": "кэ"
      },
      {
        "syllable": "แค",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "aae",
        "example": "แค่ — только",
        "examplePhuketRu": "кэ:"
      },
      {
        "syllable": "โคะ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "o",
        "example": "โค — (редко)",
        "examplePhuketRu": "ко"
      },
      {
        "syllable": "โค",
        "ruTr": "о:",
        "phuketRuTr": "ко:",
        "enTr": "oo",
        "example": "โคน — (редко)",
        "examplePhuketRu": "ко:"
      },
      {
        "syllable": "คอ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "aw",
        "example": "คอ — шея",
        "examplePhuketRu": "ко"
      },
      {
        "syllable": "คำ",
        "ruTr": "ам",
        "phuketRuTr": "кам",
        "enTr": "am",
        "example": "คำ — слово",
        "examplePhuketRu": "кам"
      },
      {
        "syllable": "ใค",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ใค — слог",
        "examplePhuketRu": "кай"
      },
      {
        "syllable": "ไค",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ไค — слог",
        "examplePhuketRu": "кай"
      }
    ],
    "words": [
      {
        "thai": "คน",
        "ruTr": "кхон",
        "phuketRuTr": "кон",
        "enTr": "khon",
        "translation": "человек"
      },
      {
        "thai": "คิด",
        "ruTr": "кхит",
        "phuketRuTr": "кит",
        "enTr": "khit",
        "translation": "думать"
      },
      {
        "thai": "คุณ",
        "ruTr": "кхун",
        "phuketRuTr": "кун",
        "enTr": "khun",
        "translation": "вы / господин"
      },
      {
        "thai": "ครับ",
        "ruTr": "кхраб",
        "phuketRuTr": "кап",
        "enTr": "khrap",
        "translation": "вежл. частица (м.р.)"
      }
    ],
    "phrases": [
      {
        "thai": "คุณชื่ออะไร",
        "ruTr": "кхун чхе: арай",
        "phuketRuTr": "кун че: алай",
        "enTr": "khun chue a-rai",
        "translation": "Как вас зовут?"
      },
      {
        "thai": "คุณเป็นใคร",
        "ruTr": "кхун пен кхрай",
        "phuketRuTr": "кун пен клай",
        "enTr": "khun pen khrai",
        "translation": "Кто вы?"
      }
    ]
  },
  {
    "id": 4,
    "letter": "ฆ",
    "thaiName": "ฆอ ระฆัง",
    "ruTranscription": "кх",
    "phuketRuTranscription": "к",
    "enTranscription": "kh",
    "meaning": "колокол",
    "syllables": [
      {
        "syllable": "ฆะ",
        "ruTr": "а",
        "phuketRuTr": "ка",
        "enTr": "a",
        "example": "ฆะ — (редко)",
        "examplePhuketRu": "ка"
      },
      {
        "syllable": "ฆา",
        "ruTr": "а:",
        "phuketRuTr": "ка:",
        "enTr": "aa",
        "example": "ฆ่า — убивать",
        "examplePhuketRu": "ка:"
      },
      {
        "syllable": "ฆิ",
        "ruTr": "и",
        "phuketRuTr": "ки",
        "enTr": "i",
        "example": "ฆิ — (редко)",
        "examplePhuketRu": "ки"
      },
      {
        "syllable": "ฆี",
        "ruTr": "и:",
        "phuketRuTr": "ки:",
        "enTr": "ii",
        "example": "ฆี — (редко)",
        "examplePhuketRu": "ки:"
      },
      {
        "syllable": "ฆุ",
        "ruTr": "у",
        "phuketRuTr": "ку",
        "enTr": "u",
        "example": "ฆุ — (редко)",
        "examplePhuketRu": "ку"
      },
      {
        "syllable": "ฆู",
        "ruTr": "у:",
        "phuketRuTr": "ку:",
        "enTr": "uu",
        "example": "ฆู — (редко)",
        "examplePhuketRu": "ку:"
      },
      {
        "syllable": "เฆะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "e",
        "example": "เฆะ — (редко)",
        "examplePhuketRu": "кэ"
      },
      {
        "syllable": "เฆ",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "ee",
        "example": "เฆ — (редко)",
        "examplePhuketRu": "кэ:"
      },
      {
        "syllable": "แฆะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "ae",
        "example": "แฆะ — (редко)",
        "examplePhuketRu": "кэ"
      },
      {
        "syllable": "แฆ",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "aae",
        "example": "แฆ — (редко)",
        "examplePhuketRu": "кэ:"
      },
      {
        "syllable": "โฆะ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "o",
        "example": "โฆะ — (редко)",
        "examplePhuketRu": "ко"
      },
      {
        "syllable": "โฆ",
        "ruTr": "о:",
        "phuketRuTr": "ко:",
        "enTr": "oo",
        "example": "โฆ — (редко)",
        "examplePhuketRu": "ко:"
      },
      {
        "syllable": "ฆอ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "aw",
        "example": "ฆอ — (редко)",
        "examplePhuketRu": "ко"
      },
      {
        "syllable": "ฆำ",
        "ruTr": "ам",
        "phuketRuTr": "кам",
        "enTr": "am",
        "example": "ฆำ — (редко)",
        "examplePhuketRu": "кам"
      },
      {
        "syllable": "ใฆ",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ใฆ — слог",
        "examplePhuketRu": "кай"
      },
      {
        "syllable": "ไฆ",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ไฆ — слог",
        "examplePhuketRu": "кай"
      }
    ],
    "words": [
      {
        "thai": "ระฆัง",
        "ruTr": "ракханг",
        "phuketRuTr": "лаканк",
        "enTr": "rakhang",
        "translation": "колокол"
      },
      {
        "thai": "ฆ่า",
        "ruTr": "кха:",
        "phuketRuTr": "ка:",
        "enTr": "khaa",
        "translation": "убивать"
      },
      {
        "thai": "ฆาต",
        "ruTr": "кха:т",
        "phuketRuTr": "ка:т",
        "enTr": "khaat",
        "translation": "убийство"
      },
      {
        "thai": "ฆ้อง",
        "ruTr": "кхо:нг",
        "phuketRuTr": "ко:нк",
        "enTr": "khong",
        "translation": "гонд / тарелка"
      }
    ],
    "phrases": [
      {
        "thai": "ระฆังวัด",
        "ruTr": "ракханг ват",
        "phuketRuTr": "лаканк ват",
        "enTr": "rakhang wat",
        "translation": "храмовый колокол"
      },
      {
        "thai": "ฆ่าเวลา",
        "ruTr": "кха: вела:",
        "phuketRuTr": "ка: вела:",
        "enTr": "khaa weelaa",
        "translation": "убивать время"
      }
    ]
  },
  {
    "id": 5,
    "letter": "ง",
    "thaiName": "งอ งู",
    "ruTranscription": "нг",
    "phuketRuTranscription": "нг",
    "enTranscription": "ng",
    "meaning": "змея",
    "syllables": [
      {
        "syllable": "งะ",
        "ruTr": "а",
        "phuketRuTr": "нга",
        "enTr": "a",
        "example": "งะ — (редко)",
        "examplePhuketRu": "нга"
      },
      {
        "syllable": "งา",
        "ruTr": "а:",
        "phuketRuTr": "нга:",
        "enTr": "aa",
        "example": "งา — слоновая кость",
        "examplePhuketRu": "нга:"
      },
      {
        "syllable": "งิ",
        "ruTr": "и",
        "phuketRuTr": "нги",
        "enTr": "i",
        "example": "งิ — (редко)",
        "examplePhuketRu": "нги"
      },
      {
        "syllable": "งี",
        "ruTr": "и:",
        "phuketRuTr": "нги:",
        "enTr": "ii",
        "example": "งี — (редко)",
        "examplePhuketRu": "нги:"
      },
      {
        "syllable": "งุ",
        "ruTr": "у",
        "phuketRuTr": "нгу",
        "enTr": "u",
        "example": "งุ — (редко)",
        "examplePhuketRu": "нгу"
      },
      {
        "syllable": "งู",
        "ruTr": "у:",
        "phuketRuTr": "нгу:",
        "enTr": "uu",
        "example": "งู — змея",
        "examplePhuketRu": "нгу:"
      },
      {
        "syllable": "เงะ",
        "ruTr": "э",
        "phuketRuTr": "нгэ",
        "enTr": "e",
        "example": "เง — (редко)",
        "examplePhuketRu": "нгэ"
      },
      {
        "syllable": "เง",
        "ruTr": "э:",
        "phuketRuTr": "нгэ:",
        "enTr": "ee",
        "example": "เงา — тень",
        "examplePhuketRu": "нгэ:"
      },
      {
        "syllable": "แงะ",
        "ruTr": "э",
        "phuketRuTr": "нгэ",
        "enTr": "ae",
        "example": "แงะ — (редко)",
        "examplePhuketRu": "нгэ"
      },
      {
        "syllable": "แง",
        "ruTr": "э:",
        "phuketRuTr": "нгэ:",
        "enTr": "aae",
        "example": "แง — (редко)",
        "examplePhuketRu": "нгэ:"
      },
      {
        "syllable": "โงะ",
        "ruTr": "о",
        "phuketRuTr": "нго",
        "enTr": "o",
        "example": "โงะ — (редко)",
        "examplePhuketRu": "нго"
      },
      {
        "syllable": "โง",
        "ruTr": "о:",
        "phuketRuTr": "нго:",
        "enTr": "oo",
        "example": "โง่ — глупый",
        "examplePhuketRu": "нго:"
      },
      {
        "syllable": "งอ",
        "ruTr": "о",
        "phuketRuTr": "нго",
        "enTr": "aw",
        "example": "งอ — согнуть",
        "examplePhuketRu": "нго"
      },
      {
        "syllable": "งำ",
        "ruTr": "ам",
        "phuketRuTr": "нгам",
        "enTr": "am",
        "example": "งำ — (редко)",
        "examplePhuketRu": "нгам"
      },
      {
        "syllable": "ใง",
        "ruTr": "ай",
        "phuketRuTr": "нгай",
        "enTr": "ai",
        "example": "ใง — слог",
        "examplePhuketRu": "нгай"
      },
      {
        "syllable": "ไง",
        "ruTr": "ай",
        "phuketRuTr": "нгай",
        "enTr": "ai",
        "example": "ไง — слог",
        "examplePhuketRu": "нгай"
      }
    ],
    "words": [
      {
        "thai": "งาน",
        "ruTr": "нга:н",
        "phuketRuTr": "нка:н",
        "enTr": "ngaan",
        "translation": "работа"
      },
      {
        "thai": "ง่าย",
        "ruTr": "нга:й",
        "phuketRuTr": "нка:й",
        "enTr": "ngai",
        "translation": "лёгкий"
      },
      {
        "thai": "เงิน",
        "ruTr": "нгоен",
        "phuketRuTr": "нкоен",
        "enTr": "ngoen",
        "translation": "деньги"
      },
      {
        "thai": "งอน",
        "ruTr": "нгон",
        "phuketRuTr": "нкон",
        "enTr": "ngon",
        "translation": "дуться"
      }
    ],
    "phrases": [
      {
        "thai": "งานดี",
        "ruTr": "нга:н ди:",
        "phuketRuTr": "нка:н ди:",
        "enTr": "ngaan dii",
        "translation": "хорошая работа"
      },
      {
        "thai": "ไม่เป็นไร",
        "ruTr": "май пен рай",
        "phuketRuTr": "май пен рай",
        "enTr": "mai pen rai",
        "translation": "ничего страшного"
      }
    ]
  },
  {
    "id": 6,
    "letter": "จ",
    "thaiName": "จอ จาน",
    "ruTranscription": "ч",
    "phuketRuTranscription": "ч",
    "enTranscription": "ch/j",
    "meaning": "тарелка",
    "syllables": [
      {
        "syllable": "จะ",
        "ruTr": "а",
        "phuketRuTr": "ча",
        "enTr": "a",
        "example": "จะ — будущ. время",
        "examplePhuketRu": "ча"
      },
      {
        "syllable": "จา",
        "ruTr": "а:",
        "phuketRuTr": "ча:",
        "enTr": "aa",
        "example": "จา — (редко)",
        "examplePhuketRu": "ча:"
      },
      {
        "syllable": "จิ",
        "ruTr": "и",
        "phuketRuTr": "чи",
        "enTr": "i",
        "example": "จิ — (редко)",
        "examplePhuketRu": "чи"
      },
      {
        "syllable": "จี",
        "ruTr": "и:",
        "phuketRuTr": "чи:",
        "enTr": "ii",
        "example": "จี — (редко)",
        "examplePhuketRu": "чи:"
      },
      {
        "syllable": "จุ",
        "ruTr": "у",
        "phuketRuTr": "чу",
        "enTr": "u",
        "example": "จุ — (редко)",
        "examplePhuketRu": "чу"
      },
      {
        "syllable": "จู",
        "ruTr": "у:",
        "phuketRuTr": "чу:",
        "enTr": "uu",
        "example": "จู — (редко)",
        "examplePhuketRu": "чу:"
      },
      {
        "syllable": "เจะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "e",
        "example": "เจะ — (редко)",
        "examplePhuketRu": "чэ"
      },
      {
        "syllable": "เจ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "ee",
        "example": "เจ — (редко)",
        "examplePhuketRu": "чэ:"
      },
      {
        "syllable": "แจะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "ae",
        "example": "แจะ — (редко)",
        "examplePhuketRu": "чэ"
      },
      {
        "syllable": "แจ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "aae",
        "example": "แจ — (редко)",
        "examplePhuketRu": "чэ:"
      },
      {
        "syllable": "โจะ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "o",
        "example": "โจะ — (редко)",
        "examplePhuketRu": "чо"
      },
      {
        "syllable": "โจ",
        "ruTr": "о:",
        "phuketRuTr": "чо:",
        "enTr": "oo",
        "example": "โจ — (редко)",
        "examplePhuketRu": "чо:"
      },
      {
        "syllable": "จอ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "aw",
        "example": "จอ — экран",
        "examplePhuketRu": "чо"
      },
      {
        "syllable": "จำ",
        "ruTr": "ам",
        "phuketRuTr": "чам",
        "enTr": "am",
        "example": "จำ — помнить",
        "examplePhuketRu": "чам"
      },
      {
        "syllable": "ใจ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ใจ — слог",
        "examplePhuketRu": "чай"
      },
      {
        "syllable": "ไจ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ไจ — слог",
        "examplePhuketRu": "чай"
      }
    ],
    "words": [
      {
        "thai": "จริง",
        "ruTr": "чринг",
        "phuketRuTr": "члинк",
        "enTr": "jing",
        "translation": "правда"
      },
      {
        "thai": "จำ",
        "ruTr": "чам",
        "phuketRuTr": "чам",
        "enTr": "jam",
        "translation": "помнить"
      },
      {
        "thai": "จบ",
        "ruTr": "чоб",
        "phuketRuTr": "чоб",
        "enTr": "job",
        "translation": "конец"
      },
      {
        "thai": "จาก",
        "ruTr": "ча:к",
        "phuketRuTr": "ча:к",
        "enTr": "jaak",
        "translation": "из / от"
      }
    ],
    "phrases": [
      {
        "thai": "จริงๆ",
        "ruTr": "чринг-чринг",
        "phuketRuTr": "члинк-члинк",
        "enTr": "jing-jing",
        "translation": "серьёзно!"
      },
      {
        "thai": "จบแล้ว",
        "ruTr": "чоб ла:еo",
        "phuketRuTr": "чоб ла:еo",
        "enTr": "job laew",
        "translation": "уже готово"
      }
    ]
  },
  {
    "id": 7,
    "letter": "ฉ",
    "thaiName": "ฉอ ฉิ่ง",
    "ruTranscription": "чх",
    "phuketRuTranscription": "ч",
    "enTranscription": "ch",
    "meaning": "тарелочка / цимбалы",
    "syllables": [
      {
        "syllable": "ฉะ",
        "ruTr": "а",
        "phuketRuTr": "ча",
        "enTr": "a",
        "example": "ฉะ — (редко)",
        "examplePhuketRu": "ча"
      },
      {
        "syllable": "ฉา",
        "ruTr": "а:",
        "phuketRuTr": "ча:",
        "enTr": "aa",
        "example": "ฉา — (редко)",
        "examplePhuketRu": "ча:"
      },
      {
        "syllable": "ฉิ",
        "ruTr": "и",
        "phuketRuTr": "чи",
        "enTr": "i",
        "example": "ฉิ — (редко)",
        "examplePhuketRu": "чи"
      },
      {
        "syllable": "ฉี",
        "ruTr": "и:",
        "phuketRuTr": "чи:",
        "enTr": "ii",
        "example": "ฉี — (редко)",
        "examplePhuketRu": "чи:"
      },
      {
        "syllable": "ฉุ",
        "ruTr": "у",
        "phuketRuTr": "чу",
        "enTr": "u",
        "example": "ฉุ — (редко)",
        "examplePhuketRu": "чу"
      },
      {
        "syllable": "ฉู",
        "ruTr": "у:",
        "phuketRuTr": "чу:",
        "enTr": "uu",
        "example": "ฉู — (редко)",
        "examplePhuketRu": "чу:"
      },
      {
        "syllable": "เฉะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "e",
        "example": "เฉะ — (редко)",
        "examplePhuketRu": "чэ"
      },
      {
        "syllable": "เฉ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "ee",
        "example": "เฉ — (редко)",
        "examplePhuketRu": "чэ:"
      },
      {
        "syllable": "แฉะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "ae",
        "example": "แฉะ — (редко)",
        "examplePhuketRu": "чэ"
      },
      {
        "syllable": "แฉ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "aae",
        "example": "แฉ — (редко)",
        "examplePhuketRu": "чэ:"
      },
      {
        "syllable": "โฉะ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "o",
        "example": "โฉะ — (редко)",
        "examplePhuketRu": "чо"
      },
      {
        "syllable": "โฉ",
        "ruTr": "о:",
        "phuketRuTr": "чо:",
        "enTr": "oo",
        "example": "โฉ — (редко)",
        "examplePhuketRu": "чо:"
      },
      {
        "syllable": "ฉอ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "aw",
        "example": "ฉอ — (редко)",
        "examplePhuketRu": "чо"
      },
      {
        "syllable": "ฉำ",
        "ruTr": "ам",
        "phuketRuTr": "чам",
        "enTr": "am",
        "example": "ฉำ — (редко)",
        "examplePhuketRu": "чам"
      },
      {
        "syllable": "ใฉ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ใฉ — слог",
        "examplePhuketRu": "чай"
      },
      {
        "syllable": "ไฉ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ไฉ — слог",
        "examplePhuketRu": "чай"
      }
    ],
    "words": [
      {
        "thai": "ฉัน",
        "ruTr": "чан",
        "phuketRuTr": "чан",
        "enTr": "chan",
        "translation": "я (разг.)"
      },
      {
        "thai": "ฉลาด",
        "ruTr": "чхала:т",
        "phuketRuTr": "чала:т",
        "enTr": "chalaat",
        "translation": "умный"
      },
      {
        "thai": "ฉีด",
        "ruTr": "чхи:т",
        "phuketRuTr": "чи:т",
        "enTr": "chiit",
        "translation": "колоть / брызгать"
      },
      {
        "thai": "ฉุก",
        "ruTr": "чхук",
        "phuketRuTr": "чук",
        "enTr": "chuk",
        "translation": "срочный"
      }
    ],
    "phrases": [
      {
        "thai": "ฉันชื่อ...",
        "ruTr": "чан чхе:...",
        "phuketRuTr": "чан че:...",
        "enTr": "chan chue...",
        "translation": "Меня зовут..."
      },
      {
        "thai": "ฉุกเฉิน",
        "ruTr": "чхук чхəн",
        "phuketRuTr": "чук чəн",
        "enTr": "chuk choen",
        "translation": "экстренный случай"
      }
    ]
  },
  {
    "id": 8,
    "letter": "ช",
    "thaiName": "ชอ ช้าง",
    "ruTranscription": "чх",
    "phuketRuTranscription": "ч",
    "enTranscription": "ch",
    "meaning": "слон",
    "syllables": [
      {
        "syllable": "ชะ",
        "ruTr": "а",
        "phuketRuTr": "ча",
        "enTr": "a",
        "example": "ชะ — (редко)",
        "examplePhuketRu": "ча"
      },
      {
        "syllable": "ชา",
        "ruTr": "а:",
        "phuketRuTr": "ча:",
        "enTr": "aa",
        "example": "ชา — чай",
        "examplePhuketRu": "ча:"
      },
      {
        "syllable": "ชิ",
        "ruTr": "и",
        "phuketRuTr": "чи",
        "enTr": "i",
        "example": "ชิ — (редко)",
        "examplePhuketRu": "чи"
      },
      {
        "syllable": "ชี",
        "ruTr": "и:",
        "phuketRuTr": "чи:",
        "enTr": "ii",
        "example": "ชี — (редко)",
        "examplePhuketRu": "чи:"
      },
      {
        "syllable": "ชุ",
        "ruTr": "у",
        "phuketRuTr": "чу",
        "enTr": "u",
        "example": "ชุ — (редко)",
        "examplePhuketRu": "чу"
      },
      {
        "syllable": "ชู",
        "ruTr": "у:",
        "phuketRuTr": "чу:",
        "enTr": "uu",
        "example": "ชู — (редко)",
        "examplePhuketRu": "чу:"
      },
      {
        "syllable": "เชะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "e",
        "example": "เช — (редко)",
        "examplePhuketRu": "чэ"
      },
      {
        "syllable": "เช",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "ee",
        "example": "เช่น — например",
        "examplePhuketRu": "чэ:"
      },
      {
        "syllable": "แชะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "ae",
        "example": "แชะ — (редко)",
        "examplePhuketRu": "чэ"
      },
      {
        "syllable": "แช",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "aae",
        "example": "แช — (редко)",
        "examplePhuketRu": "чэ:"
      },
      {
        "syllable": "โชะ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "o",
        "example": "โชะ — (редко)",
        "examplePhuketRu": "чо"
      },
      {
        "syllable": "โช",
        "ruTr": "о:",
        "phuketRuTr": "чо:",
        "enTr": "oo",
        "example": "โชค — удача",
        "examplePhuketRu": "чо:"
      },
      {
        "syllable": "ชอ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "aw",
        "example": "ชอ — (редко)",
        "examplePhuketRu": "чо"
      },
      {
        "syllable": "ชำ",
        "ruTr": "ам",
        "phuketRuTr": "чам",
        "enTr": "am",
        "example": "ชำ — оплачивать",
        "examplePhuketRu": "чам"
      },
      {
        "syllable": "ใช",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ใช — слог",
        "examplePhuketRu": "чай"
      },
      {
        "syllable": "ไช",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ไช — слог",
        "examplePhuketRu": "чай"
      }
    ],
    "words": [
      {
        "thai": "ชอบ",
        "ruTr": "чхо:б",
        "phuketRuTr": "чо:б",
        "enTr": "chob",
        "translation": "нравиться"
      },
      {
        "thai": "ชื่อ",
        "ruTr": "чхе:",
        "phuketRuTr": "че:",
        "enTr": "chue",
        "translation": "имя"
      },
      {
        "thai": "ช้า",
        "ruTr": "чха:",
        "phuketRuTr": "ча:",
        "enTr": "chaa",
        "translation": "медленный"
      },
      {
        "thai": "ช่วย",
        "ruTr": "чхуай",
        "phuketRuTr": "чуай",
        "enTr": "chuay",
        "translation": "помочь"
      }
    ],
    "phrases": [
      {
        "thai": "ช่วยด้วย",
        "ruTr": "чхуай дуай",
        "phuketRuTr": "чуай дуай",
        "enTr": "chuay duay",
        "translation": "помогите!"
      },
      {
        "thai": "ผมชอบเมืองไทย",
        "ruTr": "пхом чхо:б муанг тхай",
        "phuketRuTr": "пом чо:б муанк тай",
        "enTr": "phom chob mueang thai",
        "translation": "Мне нравится Таиланд"
      }
    ]
  },
  {
    "id": 9,
    "letter": "ซ",
    "thaiName": "ซอ โซ่",
    "ruTranscription": "с",
    "phuketRuTranscription": "с",
    "enTranscription": "s",
    "meaning": "цепь",
    "syllables": [
      {
        "syllable": "ซะ",
        "ruTr": "а",
        "phuketRuTr": "са",
        "enTr": "a",
        "example": "ซะ — (редко)",
        "examplePhuketRu": "са"
      },
      {
        "syllable": "ซา",
        "ruTr": "а:",
        "phuketRuTr": "са:",
        "enTr": "aa",
        "example": "ซา — (редко)",
        "examplePhuketRu": "са:"
      },
      {
        "syllable": "ซิ",
        "ruTr": "и",
        "phuketRuTr": "си",
        "enTr": "i",
        "example": "ซิ — (редко)",
        "examplePhuketRu": "си"
      },
      {
        "syllable": "ซี",
        "ruTr": "и:",
        "phuketRuTr": "си:",
        "enTr": "ii",
        "example": "ซี — (редко)",
        "examplePhuketRu": "си:"
      },
      {
        "syllable": "ซุ",
        "ruTr": "у",
        "phuketRuTr": "су",
        "enTr": "u",
        "example": "ซุ — (редко)",
        "examplePhuketRu": "су"
      },
      {
        "syllable": "ซู",
        "ruTr": "у:",
        "phuketRuTr": "су:",
        "enTr": "uu",
        "example": "ซู — (редко)",
        "examplePhuketRu": "су:"
      },
      {
        "syllable": "เซะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "e",
        "example": "เซะ — (редко)",
        "examplePhuketRu": "сэ"
      },
      {
        "syllable": "เซ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "ee",
        "example": "เซ — (редко)",
        "examplePhuketRu": "сэ:"
      },
      {
        "syllable": "แซะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "ae",
        "example": "แซะ — (редко)",
        "examplePhuketRu": "сэ"
      },
      {
        "syllable": "แซ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "aae",
        "example": "แซ — (редко)",
        "examplePhuketRu": "сэ:"
      },
      {
        "syllable": "โซะ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "o",
        "example": "โซะ — (редко)",
        "examplePhuketRu": "со"
      },
      {
        "syllable": "โซ",
        "ruTr": "о:",
        "phuketRuTr": "со:",
        "enTr": "oo",
        "example": "โซ — (редко)",
        "examplePhuketRu": "со:"
      },
      {
        "syllable": "ซอ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "aw",
        "example": "ซอ — (редко)",
        "examplePhuketRu": "со"
      },
      {
        "syllable": "ซำ",
        "ruTr": "ам",
        "phuketRuTr": "сам",
        "enTr": "am",
        "example": "ซำ — (редко)",
        "examplePhuketRu": "сам"
      },
      {
        "syllable": "ใซ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ใซ — слог",
        "examplePhuketRu": "сай"
      },
      {
        "syllable": "ไซ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ไซ — слог",
        "examplePhuketRu": "сай"
      }
    ],
    "words": [
      {
        "thai": "ซ้าย",
        "ruTr": "са:й",
        "phuketRuTr": "са:й",
        "enTr": "saai",
        "translation": "левый"
      },
      {
        "thai": "ซื้อ",
        "ruTr": "сы:",
        "phuketRuTr": "сы:",
        "enTr": "sue",
        "translation": "покупать"
      },
      {
        "thai": "ซ่อน",
        "ruTr": "со:н",
        "phuketRuTr": "со:н",
        "enTr": "son",
        "translation": "прятать"
      },
      {
        "thai": "ซี",
        "ruTr": "си:",
        "phuketRuTr": "си:",
        "enTr": "sii",
        "translation": "буква C / запад"
      }
    ],
    "phrases": [
      {
        "thai": "ซื้อของ",
        "ruTr": "сы: кхо:нг",
        "phuketRuTr": "сы: ко:нк",
        "enTr": "sue khong",
        "translation": "делать покупки"
      },
      {
        "thai": "ซ้ายมือ",
        "ruTr": "са:й му:",
        "phuketRuTr": "са:й му:",
        "enTr": "saai mue",
        "translation": "левая рука"
      }
    ]
  },
  {
    "id": 10,
    "letter": "ฌ",
    "thaiName": "ฌอ เฌอ",
    "ruTranscription": "чх",
    "phuketRuTranscription": "ч",
    "enTranscription": "ch",
    "meaning": "дерево",
    "syllables": [
      {
        "syllable": "ฌะ",
        "ruTr": "а",
        "phuketRuTr": "ча",
        "enTr": "a",
        "example": "ฌะ — (редко)",
        "examplePhuketRu": "ча"
      },
      {
        "syllable": "ฌา",
        "ruTr": "а:",
        "phuketRuTr": "ча:",
        "enTr": "aa",
        "example": "ฌา — (редко)",
        "examplePhuketRu": "ча:"
      },
      {
        "syllable": "ฌิ",
        "ruTr": "и",
        "phuketRuTr": "чи",
        "enTr": "i",
        "example": "ฌิ — (редко)",
        "examplePhuketRu": "чи"
      },
      {
        "syllable": "ฌี",
        "ruTr": "и:",
        "phuketRuTr": "чи:",
        "enTr": "ii",
        "example": "ฌี — (редко)",
        "examplePhuketRu": "чи:"
      },
      {
        "syllable": "ฌุ",
        "ruTr": "у",
        "phuketRuTr": "чу",
        "enTr": "u",
        "example": "ฌุ — (редко)",
        "examplePhuketRu": "чу"
      },
      {
        "syllable": "ฌู",
        "ruTr": "у:",
        "phuketRuTr": "чу:",
        "enTr": "uu",
        "example": "ฌู — (редко)",
        "examplePhuketRu": "чу:"
      },
      {
        "syllable": "เฌะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "e",
        "example": "เฌะ — (редко)",
        "examplePhuketRu": "чэ"
      },
      {
        "syllable": "เฌ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "ee",
        "example": "เฌ — (редко)",
        "examplePhuketRu": "чэ:"
      },
      {
        "syllable": "แฌะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "ae",
        "example": "แฌะ — (редко)",
        "examplePhuketRu": "чэ"
      },
      {
        "syllable": "แฌ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "aae",
        "example": "แฌ — (редко)",
        "examplePhuketRu": "чэ:"
      },
      {
        "syllable": "โฌะ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "o",
        "example": "โฌะ — (редко)",
        "examplePhuketRu": "чо"
      },
      {
        "syllable": "โฌ",
        "ruTr": "о:",
        "phuketRuTr": "чо:",
        "enTr": "oo",
        "example": "โฌ — (редко)",
        "examplePhuketRu": "чо:"
      },
      {
        "syllable": "ฌอ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "aw",
        "example": "ฌอ — (редко)",
        "examplePhuketRu": "чо"
      },
      {
        "syllable": "ฌำ",
        "ruTr": "ам",
        "phuketRuTr": "чам",
        "enTr": "am",
        "example": "ฌำ — (редко)",
        "examplePhuketRu": "чам"
      },
      {
        "syllable": "ใฌ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ใฌ — слог",
        "examplePhuketRu": "чай"
      },
      {
        "syllable": "ไฌ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ไฌ — слог",
        "examplePhuketRu": "чай"
      }
    ],
    "words": [
      {
        "thai": "เฌอ",
        "ruTr": "чхə",
        "phuketRuTr": "чə",
        "enTr": "choe",
        "translation": "дерево (книжн.)"
      },
      {
        "thai": "ฌาน",
        "ruTr": "ча:н",
        "phuketRuTr": "ча:н",
        "enTr": "chaan",
        "translation": "медитация (пали)"
      },
      {
        "thai": "ฌาปน",
        "ruTr": "ча:пон",
        "phuketRuTr": "ча:пон",
        "enTr": "chaapon",
        "translation": "кремация"
      },
      {
        "thai": "ฌาปนกิจ",
        "ruTr": "ча:пон кит",
        "phuketRuTr": "ча:пон кит",
        "enTr": "chaapon kit",
        "translation": "похоронные обряды"
      }
    ],
    "phrases": [
      {
        "thai": "ฌาปนกิจสงเคราะห์",
        "ruTr": "ча:пон кит сонгкхро:",
        "phuketRuTr": "ча:пон кит сонккло:",
        "enTr": "chaapon kit songkhro",
        "translation": "ритуал кремации"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква, в основном в санскрите"
      }
    ]
  },
  {
    "id": 11,
    "letter": "ญ",
    "thaiName": "ญอ หญิง",
    "ruTranscription": "й/н",
    "phuketRuTranscription": "й",
    "enTranscription": "y/n",
    "meaning": "женщина",
    "syllables": [
      {
        "syllable": "ญะ",
        "ruTr": "а",
        "phuketRuTr": "йа",
        "enTr": "a",
        "example": "ญะ — (редко)",
        "examplePhuketRu": "йа"
      },
      {
        "syllable": "ญา",
        "ruTr": "а:",
        "phuketRuTr": "йа:",
        "enTr": "aa",
        "example": "ญา — (редко)",
        "examplePhuketRu": "йа:"
      },
      {
        "syllable": "ญิ",
        "ruTr": "и",
        "phuketRuTr": "йи",
        "enTr": "i",
        "example": "ญิ — (редко)",
        "examplePhuketRu": "йи"
      },
      {
        "syllable": "ญี",
        "ruTr": "и:",
        "phuketRuTr": "йи:",
        "enTr": "ii",
        "example": "ญี — (редко)",
        "examplePhuketRu": "йи:"
      },
      {
        "syllable": "ญุ",
        "ruTr": "у",
        "phuketRuTr": "йу",
        "enTr": "u",
        "example": "ญุ — (редко)",
        "examplePhuketRu": "йу"
      },
      {
        "syllable": "ญู",
        "ruTr": "у:",
        "phuketRuTr": "йу:",
        "enTr": "uu",
        "example": "ญู — (редко)",
        "examplePhuketRu": "йу:"
      },
      {
        "syllable": "เญะ",
        "ruTr": "э",
        "phuketRuTr": "йэ",
        "enTr": "e",
        "example": "เญะ — (редко)",
        "examplePhuketRu": "йэ"
      },
      {
        "syllable": "เญ",
        "ruTr": "э:",
        "phuketRuTr": "йэ:",
        "enTr": "ee",
        "example": "เญ — (редко)",
        "examplePhuketRu": "йэ:"
      },
      {
        "syllable": "แญะ",
        "ruTr": "э",
        "phuketRuTr": "йэ",
        "enTr": "ae",
        "example": "แญะ — (редко)",
        "examplePhuketRu": "йэ"
      },
      {
        "syllable": "แญ",
        "ruTr": "э:",
        "phuketRuTr": "йэ:",
        "enTr": "aae",
        "example": "แญ — (редко)",
        "examplePhuketRu": "йэ:"
      },
      {
        "syllable": "โญะ",
        "ruTr": "о",
        "phuketRuTr": "йо",
        "enTr": "o",
        "example": "โญะ — (редко)",
        "examplePhuketRu": "йо"
      },
      {
        "syllable": "โญ",
        "ruTr": "о:",
        "phuketRuTr": "йо:",
        "enTr": "oo",
        "example": "โญ — (редко)",
        "examplePhuketRu": "йо:"
      },
      {
        "syllable": "ญอ",
        "ruTr": "о",
        "phuketRuTr": "йо",
        "enTr": "aw",
        "example": "ญอ — (редко)",
        "examplePhuketRu": "йо"
      },
      {
        "syllable": "ญำ",
        "ruTr": "ам",
        "phuketRuTr": "йам",
        "enTr": "am",
        "example": "ญำ — (редко)",
        "examplePhuketRu": "йам"
      },
      {
        "syllable": "ใญ",
        "ruTr": "ай",
        "phuketRuTr": "йай",
        "enTr": "ai",
        "example": "ใญ — слог",
        "examplePhuketRu": "йай"
      },
      {
        "syllable": "ไญ",
        "ruTr": "ай",
        "phuketRuTr": "йай",
        "enTr": "ai",
        "example": "ไญ — слог",
        "examplePhuketRu": "йай"
      }
    ],
    "words": [
      {
        "thai": "หญิง",
        "ruTr": "йинг",
        "phuketRuTr": "йинк",
        "enTr": "ying",
        "translation": "женщина"
      },
      {
        "thai": "ญาติ",
        "ruTr": "я:ти",
        "phuketRuTr": "я:ти",
        "enTr": "yaat",
        "translation": "родственник"
      },
      {
        "thai": "ญี่ปุ่น",
        "ruTr": "йипун",
        "phuketRuTr": "йипун",
        "enTr": "yiipun",
        "translation": "Япония"
      },
      {
        "thai": "ญวน",
        "ruTr": "йуан",
        "phuketRuTr": "йуан",
        "enTr": "yuan",
        "translation": "вьетнамец (устар.)"
      }
    ],
    "phrases": [
      {
        "thai": "ญาติพี่น้อง",
        "ruTr": "я:ти пхи: но:нг",
        "phuketRuTr": "я:ти пи: но:нк",
        "enTr": "yaat phii nong",
        "translation": "родня / родственники"
      },
      {
        "thai": "ผู้หญิง",
        "ruTr": "пху: йинг",
        "phuketRuTr": "пу: йинк",
        "enTr": "phuu ying",
        "translation": "женщина / дама"
      }
    ]
  },
  {
    "id": 12,
    "letter": "ฐ",
    "thaiName": "ฐอ ฐาน",
    "ruTranscription": "тх",
    "phuketRuTranscription": "т",
    "enTranscription": "th",
    "meaning": "основание / пьедестал",
    "syllables": [
      {
        "syllable": "ฐะ",
        "ruTr": "а",
        "phuketRuTr": "та",
        "enTr": "a",
        "example": "ฐะ — (редко)",
        "examplePhuketRu": "та"
      },
      {
        "syllable": "ฐา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ฐา — (редко)",
        "examplePhuketRu": "та:"
      },
      {
        "syllable": "ฐิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ฐิ — (редко)",
        "examplePhuketRu": "ти"
      },
      {
        "syllable": "ฐี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ฐี — (редко)",
        "examplePhuketRu": "ти:"
      },
      {
        "syllable": "ฐุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ฐุ — (редко)",
        "examplePhuketRu": "ту"
      },
      {
        "syllable": "ฐู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ฐู — (редко)",
        "examplePhuketRu": "ту:"
      },
      {
        "syllable": "เฐะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เฐะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "เฐ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เฐ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "แฐะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แฐะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "แฐ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แฐ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "โฐะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โฐะ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "โฐ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โฐ — (редко)",
        "examplePhuketRu": "то:"
      },
      {
        "syllable": "ฐอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ฐอ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "ฐำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ฐำ — (редко)",
        "examplePhuketRu": "там"
      },
      {
        "syllable": "ใฐ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใฐ — слог",
        "examplePhuketRu": "тай"
      },
      {
        "syllable": "ไฐ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไฐ — слог",
        "examplePhuketRu": "тай"
      }
    ],
    "words": [
      {
        "thai": "ฐาน",
        "ruTr": "та:н",
        "phuketRuTr": "та:н",
        "enTr": "thaan",
        "translation": "основание / база"
      },
      {
        "thai": "ฐานะ",
        "ruTr": "та:на:",
        "phuketRuTr": "та:на:",
        "enTr": "thaanaa",
        "translation": "положение / статус"
      },
      {
        "thai": "ฐานข้อมูล",
        "ruTr": "та:н кхо:му:л",
        "phuketRuTr": "та:н ко:му:л",
        "enTr": "thaan khomuun",
        "translation": "база данных"
      },
      {
        "thai": "ฐานทัพ",
        "ruTr": "та:н тхап",
        "phuketRuTr": "та:н тап",
        "enTr": "thaan thap",
        "translation": "военная база"
      }
    ],
    "phrases": [
      {
        "thai": "ฐานข้อมูลกลาง",
        "ruTr": "та:н кхо:му:л кла:нг",
        "phuketRuTr": "та:н ко:му:л кла:нк",
        "enTr": "thaan khomuun klaang",
        "translation": "центральная база данных"
      },
      {
        "thai": "ฐานะทางสังคม",
        "ruTr": "та:на: тха:нг сангкхом",
        "phuketRuTr": "та:на: та:нк санкком",
        "enTr": "thaanaa thaang sangkhom",
        "translation": "социальный статус"
      }
    ]
  },
  {
    "id": 13,
    "letter": "ฑ",
    "thaiName": "ฑอ มณโฑ",
    "ruTranscription": "тх",
    "phuketRuTranscription": "т",
    "enTranscription": "th",
    "meaning": "Мантхо (имя)",
    "syllables": [
      {
        "syllable": "ฑะ",
        "ruTr": "а",
        "phuketRuTr": "та",
        "enTr": "a",
        "example": "ฑะ — (редко)",
        "examplePhuketRu": "та"
      },
      {
        "syllable": "ฑา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ฑา — (редко)",
        "examplePhuketRu": "та:"
      },
      {
        "syllable": "ฑิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ฑิ — (редко)",
        "examplePhuketRu": "ти"
      },
      {
        "syllable": "ฑี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ฑี — (редко)",
        "examplePhuketRu": "ти:"
      },
      {
        "syllable": "ฑุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ฑุ — (редко)",
        "examplePhuketRu": "ту"
      },
      {
        "syllable": "ฑู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ฑู — (редко)",
        "examplePhuketRu": "ту:"
      },
      {
        "syllable": "เฑะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เฑะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "เฑ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เฑ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "แฑะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แฑะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "แฑ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แฑ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "โฑะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โฑะ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "โฑ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โฑ — (редко)",
        "examplePhuketRu": "то:"
      },
      {
        "syllable": "ฑอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ฑอ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "ฑำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ฑำ — (редко)",
        "examplePhuketRu": "там"
      },
      {
        "syllable": "ใฑ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใฑ — слог",
        "examplePhuketRu": "тай"
      },
      {
        "syllable": "ไฑ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไฑ — слог",
        "examplePhuketRu": "тай"
      }
    ],
    "words": [
      {
        "thai": "มณโฑ",
        "ruTr": "монтхо:",
        "phuketRuTr": "монто:",
        "enTr": "montho",
        "translation": "Мантхо (из Рамаяны)"
      },
      {
        "thai": "ฑิต",
        "ruTr": "тхит",
        "phuketRuTr": "тит",
        "enTr": "thit",
        "translation": "(пали) мудрец"
      },
      {
        "thai": "ฑูต",
        "ruTr": "тху:т",
        "phuketRuTr": "ту:т",
        "enTr": "thuut",
        "translation": "посланник (пали)"
      },
      {
        "thai": "ฑิตย์",
        "ruTr": "тхит",
        "phuketRuTr": "тит",
        "enTr": "thit",
        "translation": "мудрый (пали)"
      }
    ],
    "phrases": [
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква, в основном в пали/санскрите"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "встречается в именах и религиозных текстах"
      }
    ]
  },
  {
    "id": 14,
    "letter": "ฒ",
    "thaiName": "ฒอ ผู้เฒ่า",
    "ruTranscription": "тх",
    "phuketRuTranscription": "т",
    "enTranscription": "th",
    "meaning": "старец",
    "syllables": [
      {
        "syllable": "ฒะ",
        "ruTr": "а",
        "phuketRuTr": "та",
        "enTr": "a",
        "example": "ฒะ — (редко)",
        "examplePhuketRu": "та"
      },
      {
        "syllable": "ฒา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ฒา — (редко)",
        "examplePhuketRu": "та:"
      },
      {
        "syllable": "ฒิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ฒิ — (редко)",
        "examplePhuketRu": "ти"
      },
      {
        "syllable": "ฒี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ฒี — (редко)",
        "examplePhuketRu": "ти:"
      },
      {
        "syllable": "ฒุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ฒุ — (редко)",
        "examplePhuketRu": "ту"
      },
      {
        "syllable": "ฒู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ฒู — (редко)",
        "examplePhuketRu": "ту:"
      },
      {
        "syllable": "เฒะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เฒะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "เฒ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เฒ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "แฒะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แฒะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "แฒ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แฒ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "โฒะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โฒะ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "โฒ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โฒ — (редко)",
        "examplePhuketRu": "то:"
      },
      {
        "syllable": "ฒอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ฒอ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "ฒำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ฒำ — (редко)",
        "examplePhuketRu": "там"
      },
      {
        "syllable": "ใฒ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใฒ — слог",
        "examplePhuketRu": "тай"
      },
      {
        "syllable": "ไฒ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไฒ — слог",
        "examplePhuketRu": "тай"
      }
    ],
    "words": [
      {
        "thai": "ผู้เฒ่า",
        "ruTr": "пху: тха:o",
        "phuketRuTr": "пу: та:o",
        "enTr": "phuu thao",
        "translation": "старец / мудрец"
      },
      {
        "thai": "เฒ่า",
        "ruTr": "тха:o",
        "phuketRuTr": "та:o",
        "enTr": "thao",
        "translation": "старый / престарелый"
      },
      {
        "thai": "ฒ่า",
        "ruTr": "тха:",
        "phuketRuTr": "та:",
        "enTr": "thaa",
        "translation": "(пали) старость"
      },
      {
        "thai": "เฒ่าโวย",
        "ruTr": "тха:o вой",
        "phuketRuTr": "та:o вой",
        "enTr": "thao woi",
        "translation": "жаловаться (разг.)"
      }
    ],
    "phrases": [
      {
        "thai": "ผู้เฒ่าผู้แก่",
        "ruTr": "пху: тха:o пху: кэ:",
        "phuketRuTr": "пу: та:o пу: кэ:",
        "enTr": "phuu thao phuu kae",
        "translation": "пожилые люди"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква, в основном в пали"
      }
    ]
  },
  {
    "id": 15,
    "letter": "ณ",
    "thaiName": "ณอ เณร",
    "ruTranscription": "н",
    "phuketRuTranscription": "н",
    "enTranscription": "n",
    "meaning": "послушник",
    "syllables": [
      {
        "syllable": "ณะ",
        "ruTr": "а",
        "phuketRuTr": "на",
        "enTr": "a",
        "example": "ณะ — (редко)",
        "examplePhuketRu": "на"
      },
      {
        "syllable": "ณา",
        "ruTr": "а:",
        "phuketRuTr": "на:",
        "enTr": "aa",
        "example": "ณา — (редко)",
        "examplePhuketRu": "на:"
      },
      {
        "syllable": "ณิ",
        "ruTr": "и",
        "phuketRuTr": "ни",
        "enTr": "i",
        "example": "ณิ — (редко)",
        "examplePhuketRu": "ни"
      },
      {
        "syllable": "ณี",
        "ruTr": "и:",
        "phuketRuTr": "ни:",
        "enTr": "ii",
        "example": "ณี — (редко)",
        "examplePhuketRu": "ни:"
      },
      {
        "syllable": "ณุ",
        "ruTr": "у",
        "phuketRuTr": "ну",
        "enTr": "u",
        "example": "ณุ — (редко)",
        "examplePhuketRu": "ну"
      },
      {
        "syllable": "ณู",
        "ruTr": "у:",
        "phuketRuTr": "ну:",
        "enTr": "uu",
        "example": "ณู — (редко)",
        "examplePhuketRu": "ну:"
      },
      {
        "syllable": "เณะ",
        "ruTr": "э",
        "phuketRuTr": "нэ",
        "enTr": "e",
        "example": "เณะ — (редко)",
        "examplePhuketRu": "нэ"
      },
      {
        "syllable": "เณ",
        "ruTr": "э:",
        "phuketRuTr": "нэ:",
        "enTr": "ee",
        "example": "เณ — (редко)",
        "examplePhuketRu": "нэ:"
      },
      {
        "syllable": "แณะ",
        "ruTr": "э",
        "phuketRuTr": "нэ",
        "enTr": "ae",
        "example": "แณะ — (редко)",
        "examplePhuketRu": "нэ"
      },
      {
        "syllable": "แณ",
        "ruTr": "э:",
        "phuketRuTr": "нэ:",
        "enTr": "aae",
        "example": "แณ — (редко)",
        "examplePhuketRu": "нэ:"
      },
      {
        "syllable": "โณะ",
        "ruTr": "о",
        "phuketRuTr": "но",
        "enTr": "o",
        "example": "โณะ — (редко)",
        "examplePhuketRu": "но"
      },
      {
        "syllable": "โณ",
        "ruTr": "о:",
        "phuketRuTr": "но:",
        "enTr": "oo",
        "example": "โณ — (редко)",
        "examplePhuketRu": "но:"
      },
      {
        "syllable": "ณอ",
        "ruTr": "о",
        "phuketRuTr": "но",
        "enTr": "aw",
        "example": "ณอ — (редко)",
        "examplePhuketRu": "но"
      },
      {
        "syllable": "ณำ",
        "ruTr": "ам",
        "phuketRuTr": "нам",
        "enTr": "am",
        "example": "ณำ — (редко)",
        "examplePhuketRu": "нам"
      },
      {
        "syllable": "ใณ",
        "ruTr": "ай",
        "phuketRuTr": "най",
        "enTr": "ai",
        "example": "ใณ — слог",
        "examplePhuketRu": "най"
      },
      {
        "syllable": "ไณ",
        "ruTr": "ай",
        "phuketRuTr": "най",
        "enTr": "ai",
        "example": "ไณ — слог",
        "examplePhuketRu": "най"
      }
    ],
    "words": [
      {
        "thai": "เณร",
        "ruTr": "нэн",
        "phuketRuTr": "нэн",
        "enTr": "nen",
        "translation": "послушник / новиций"
      },
      {
        "thai": "ณรงค์",
        "ruTr": "наронг",
        "phuketRuTr": "налонк",
        "enTr": "narong",
        "translation": "усилие / настойчивость"
      },
      {
        "thai": "ณัฐ",
        "ruTr": "нат",
        "phuketRuTr": "нат",
        "enTr": "nat",
        "translation": "мудрость (в именах)"
      },
      {
        "thai": "ณรงค์",
        "ruTr": "наронг",
        "phuketRuTr": "налонк",
        "enTr": "narong",
        "translation": "кампания / усилие"
      }
    ],
    "phrases": [
      {
        "thai": "เณรหน้าไฟ",
        "ruTr": "нэн на: фай",
        "phuketRuTr": "нэн на: фай",
        "enTr": "nen naa fai",
        "translation": "послушник (разг.)"
      },
      {
        "thai": "ณรงค์ปฏิบัติ",
        "ruTr": "наронг патибат",
        "phuketRuTr": "налонк патибат",
        "enTr": "narong patibat",
        "translation": "настойчивая практика"
      }
    ]
  },
  {
    "id": 16,
    "letter": "ฎ",
    "thaiName": "ฎอ ชฎา",
    "ruTranscription": "д",
    "phuketRuTranscription": "д",
    "enTranscription": "d",
    "meaning": "корона",
    "syllables": [
      {
        "syllable": "ฎะ",
        "ruTr": "а",
        "phuketRuTr": "да",
        "enTr": "a",
        "example": "ฎะ — (редко)",
        "examplePhuketRu": "да"
      },
      {
        "syllable": "ฎา",
        "ruTr": "а:",
        "phuketRuTr": "да:",
        "enTr": "aa",
        "example": "ฎา — (редко)",
        "examplePhuketRu": "да:"
      },
      {
        "syllable": "ฎิ",
        "ruTr": "и",
        "phuketRuTr": "ди",
        "enTr": "i",
        "example": "ฎิ — (редко)",
        "examplePhuketRu": "ди"
      },
      {
        "syllable": "ฎี",
        "ruTr": "и:",
        "phuketRuTr": "ди:",
        "enTr": "ii",
        "example": "ฎี — (редко)",
        "examplePhuketRu": "ди:"
      },
      {
        "syllable": "ฎุ",
        "ruTr": "у",
        "phuketRuTr": "ду",
        "enTr": "u",
        "example": "ฎุ — (редко)",
        "examplePhuketRu": "ду"
      },
      {
        "syllable": "ฎู",
        "ruTr": "у:",
        "phuketRuTr": "ду:",
        "enTr": "uu",
        "example": "ฎู — (редко)",
        "examplePhuketRu": "ду:"
      },
      {
        "syllable": "เฎะ",
        "ruTr": "э",
        "phuketRuTr": "дэ",
        "enTr": "e",
        "example": "เฎะ — (редко)",
        "examplePhuketRu": "дэ"
      },
      {
        "syllable": "เฎ",
        "ruTr": "э:",
        "phuketRuTr": "дэ:",
        "enTr": "ee",
        "example": "เฎ — (редко)",
        "examplePhuketRu": "дэ:"
      },
      {
        "syllable": "แฎะ",
        "ruTr": "э",
        "phuketRuTr": "дэ",
        "enTr": "ae",
        "example": "แฎะ — (редко)",
        "examplePhuketRu": "дэ"
      },
      {
        "syllable": "แฎ",
        "ruTr": "э:",
        "phuketRuTr": "дэ:",
        "enTr": "aae",
        "example": "แฎ — (редко)",
        "examplePhuketRu": "дэ:"
      },
      {
        "syllable": "โฎะ",
        "ruTr": "о",
        "phuketRuTr": "до",
        "enTr": "o",
        "example": "โฎะ — (редко)",
        "examplePhuketRu": "до"
      },
      {
        "syllable": "โฎ",
        "ruTr": "о:",
        "phuketRuTr": "до:",
        "enTr": "oo",
        "example": "โฎ — (редко)",
        "examplePhuketRu": "до:"
      },
      {
        "syllable": "ฎอ",
        "ruTr": "о",
        "phuketRuTr": "до",
        "enTr": "aw",
        "example": "ฎอ — (редко)",
        "examplePhuketRu": "до"
      },
      {
        "syllable": "ฎำ",
        "ruTr": "ам",
        "phuketRuTr": "дам",
        "enTr": "am",
        "example": "ฎำ — (редко)",
        "examplePhuketRu": "дам"
      },
      {
        "syllable": "ใฎ",
        "ruTr": "ай",
        "phuketRuTr": "дай",
        "enTr": "ai",
        "example": "ใฎ — слог",
        "examplePhuketRu": "дай"
      },
      {
        "syllable": "ไฎ",
        "ruTr": "ай",
        "phuketRuTr": "дай",
        "enTr": "ai",
        "example": "ไฎ — слог",
        "examplePhuketRu": "дай"
      }
    ],
    "words": [
      {
        "thai": "ชฎา",
        "ruTr": "чхада:",
        "phuketRuTr": "чада:",
        "enTr": "chadaa",
        "translation": "корона / тиара"
      },
      {
        "thai": "ฎีกา",
        "ruTr": "дика:",
        "phuketRuTr": "дика:",
        "enTr": "diikaa",
        "translation": "петиция / жалоба"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "в основном в санскрите"
      }
    ],
    "phrases": [
      {
        "thai": "ยื่นฎีกา",
        "ruTr": "юн дика:",
        "phuketRuTr": "юн дика:",
        "enTr": "yuen diikaa",
        "translation": "подать петицию"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква"
      }
    ]
  },
  {
    "id": 17,
    "letter": "ฏ",
    "thaiName": "ฏอ ปฏัก",
    "ruTranscription": "т",
    "phuketRuTranscription": "т",
    "enTranscription": "t",
    "meaning": "острый кол",
    "syllables": [
      {
        "syllable": "ฏะ",
        "ruTr": "а",
        "phuketRuTr": "та",
        "enTr": "a",
        "example": "ฏะ — (редко)",
        "examplePhuketRu": "та"
      },
      {
        "syllable": "ฏา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ฏา — (редко)",
        "examplePhuketRu": "та:"
      },
      {
        "syllable": "ฏิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ฏิ — (редко)",
        "examplePhuketRu": "ти"
      },
      {
        "syllable": "ฏี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ฏี — (редко)",
        "examplePhuketRu": "ти:"
      },
      {
        "syllable": "ฏุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ฏุ — (редко)",
        "examplePhuketRu": "ту"
      },
      {
        "syllable": "ฏู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ฏู — (редко)",
        "examplePhuketRu": "ту:"
      },
      {
        "syllable": "เฏะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เฏะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "เฏ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เฏ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "แฏะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แฏะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "แฏ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แฏ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "โฏะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โฏะ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "โฏ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โฏ — (редко)",
        "examplePhuketRu": "то:"
      },
      {
        "syllable": "ฏอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ฏอ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "ฏำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ฏำ — (редко)",
        "examplePhuketRu": "там"
      },
      {
        "syllable": "ใฏ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใฏ — слог",
        "examplePhuketRu": "тай"
      },
      {
        "syllable": "ไฏ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไฏ — слог",
        "examplePhuketRu": "тай"
      }
    ],
    "words": [
      {
        "thai": "ปฏัก",
        "ruTr": "патак",
        "phuketRuTr": "патак",
        "enTr": "patak",
        "translation": "острый кол / шпора"
      },
      {
        "thai": "ฏฐาน",
        "ruTr": "татха:н",
        "phuketRuTr": "тата:н",
        "enTr": "tathaan",
        "translation": "(санскрит) основание"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "в основном в санскрите"
      }
    ],
    "phrases": [
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "в основном в пали/санскрите"
      }
    ]
  },
  {
    "id": 18,
    "letter": "ด",
    "thaiName": "ดอ เด็ก",
    "ruTranscription": "д",
    "phuketRuTranscription": "д",
    "enTranscription": "d",
    "meaning": "ребёнок",
    "syllables": [
      {
        "syllable": "ดะ",
        "ruTr": "а",
        "phuketRuTr": "да",
        "enTr": "a",
        "example": "ดะ — (редко)",
        "examplePhuketRu": "да"
      },
      {
        "syllable": "ดา",
        "ruTr": "а:",
        "phuketRuTr": "да:",
        "enTr": "aa",
        "example": "ดา — звезда",
        "examplePhuketRu": "да:"
      },
      {
        "syllable": "ดิ",
        "ruTr": "и",
        "phuketRuTr": "ди",
        "enTr": "i",
        "example": "ดิ — (редко)",
        "examplePhuketRu": "ди"
      },
      {
        "syllable": "ดี",
        "ruTr": "и:",
        "phuketRuTr": "ди:",
        "enTr": "ii",
        "example": "ดี — хорошо",
        "examplePhuketRu": "ди:"
      },
      {
        "syllable": "ดุ",
        "ruTr": "у",
        "phuketRuTr": "ду",
        "enTr": "u",
        "example": "ดุ — (редко)",
        "examplePhuketRu": "ду"
      },
      {
        "syllable": "ดู",
        "ruTr": "у:",
        "phuketRuTr": "ду:",
        "enTr": "uu",
        "example": "ดู — смотреть",
        "examplePhuketRu": "ду:"
      },
      {
        "syllable": "เดะ",
        "ruTr": "э",
        "phuketRuTr": "дэ",
        "enTr": "e",
        "example": "เดะ — (редко)",
        "examplePhuketRu": "дэ"
      },
      {
        "syllable": "เด",
        "ruTr": "э:",
        "phuketRuTr": "дэ:",
        "enTr": "ee",
        "example": "เด — (редко)",
        "examplePhuketRu": "дэ:"
      },
      {
        "syllable": "แดะ",
        "ruTr": "э",
        "phuketRuTr": "дэ",
        "enTr": "ae",
        "example": "แดะ — (редко)",
        "examplePhuketRu": "дэ"
      },
      {
        "syllable": "แด",
        "ruTr": "э:",
        "phuketRuTr": "дэ:",
        "enTr": "aae",
        "example": "แด — (редко)",
        "examplePhuketRu": "дэ:"
      },
      {
        "syllable": "โดะ",
        "ruTr": "о",
        "phuketRuTr": "до",
        "enTr": "o",
        "example": "โดะ — (редко)",
        "examplePhuketRu": "до"
      },
      {
        "syllable": "โด",
        "ruTr": "о:",
        "phuketRuTr": "до:",
        "enTr": "oo",
        "example": "โด — (редко)",
        "examplePhuketRu": "до:"
      },
      {
        "syllable": "ดอ",
        "ruTr": "о",
        "phuketRuTr": "до",
        "enTr": "aw",
        "example": "ดอ — (редко)",
        "examplePhuketRu": "до"
      },
      {
        "syllable": "ดำ",
        "ruTr": "ам",
        "phuketRuTr": "дам",
        "enTr": "am",
        "example": "ดำ — чёрный",
        "examplePhuketRu": "дам"
      },
      {
        "syllable": "ใด",
        "ruTr": "ай",
        "phuketRuTr": "дай",
        "enTr": "ai",
        "example": "ใด — слог",
        "examplePhuketRu": "дай"
      },
      {
        "syllable": "ได",
        "ruTr": "ай",
        "phuketRuTr": "дай",
        "enTr": "ai",
        "example": "ได — слог",
        "examplePhuketRu": "дай"
      }
    ],
    "words": [
      {
        "thai": "ดี",
        "ruTr": "ди:",
        "phuketRuTr": "ди:",
        "enTr": "dii",
        "translation": "хороший"
      },
      {
        "thai": "ดู",
        "ruTr": "ду:",
        "phuketRuTr": "ду:",
        "enTr": "duu",
        "translation": "смотреть"
      },
      {
        "thai": "ดื่ม",
        "ruTr": "дым",
        "phuketRuTr": "дым",
        "enTr": "duem",
        "translation": "пить"
      },
      {
        "thai": "ดอกไม้",
        "ruTr": "до:к май",
        "phuketRuTr": "до:к май",
        "enTr": "dok mai",
        "translation": "цветок"
      }
    ],
    "phrases": [
      {
        "thai": "ดีมาก",
        "ruTr": "ди: ма:к",
        "phuketRuTr": "ди: ма:к",
        "enTr": "dii maak",
        "translation": "очень хорошо"
      },
      {
        "thai": "ดูแล",
        "ruTr": "ду: ла:е",
        "phuketRuTr": "ду: ла:е",
        "enTr": "duu lae",
        "translation": "заботиться"
      }
    ]
  },
  {
    "id": 19,
    "letter": "ต",
    "thaiName": "ตอ เต่า",
    "ruTranscription": "т",
    "phuketRuTranscription": "т",
    "enTranscription": "t",
    "meaning": "черепаха",
    "syllables": [
      {
        "syllable": "ตะ",
        "ruTr": "а",
        "phuketRuTr": "та",
        "enTr": "a",
        "example": "ตะ — (редко)",
        "examplePhuketRu": "та"
      },
      {
        "syllable": "ตา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ตา — глаз",
        "examplePhuketRu": "та:"
      },
      {
        "syllable": "ติ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ติ — (редко)",
        "examplePhuketRu": "ти"
      },
      {
        "syllable": "ตี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ตี — бить",
        "examplePhuketRu": "ти:"
      },
      {
        "syllable": "ตุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ตุ — (редко)",
        "examplePhuketRu": "ту"
      },
      {
        "syllable": "ตู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ตู — (редко)",
        "examplePhuketRu": "ту:"
      },
      {
        "syllable": "เตะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เตะ — пинать",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "เต",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เต — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "แตะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แตะ — трогать",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "แต",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แต — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "โตะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โตะ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "โต",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โต — большой",
        "examplePhuketRu": "то:"
      },
      {
        "syllable": "ตอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ตอ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "ตำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ตำ — песто/толочь",
        "examplePhuketRu": "там"
      },
      {
        "syllable": "ใต",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใต — слог",
        "examplePhuketRu": "тай"
      },
      {
        "syllable": "ไต",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไต — слог",
        "examplePhuketRu": "тай"
      }
    ],
    "words": [
      {
        "thai": "ตอนนี้",
        "ruTr": "то:н ни:",
        "phuketRuTr": "то:н ни:",
        "enTr": "ton nii",
        "translation": "сейчас"
      },
      {
        "thai": "ตาม",
        "ruTr": "та:м",
        "phuketRuTr": "та:м",
        "enTr": "taam",
        "translation": "следовать"
      },
      {
        "thai": "ต้องการ",
        "ruTr": "то:нг ка:н",
        "phuketRuTr": "то:нк ка:н",
        "enTr": "tong gaan",
        "translation": "нуждаться"
      },
      {
        "thai": "ต่อไป",
        "ruTr": "то: пай",
        "phuketRuTr": "то: пай",
        "enTr": "to pai",
        "translation": "вперёд"
      }
    ],
    "phrases": [
      {
        "thai": "ตอนนี้อยู่ที่ไหน",
        "ruTr": "то:н ни: ю: тхи: най",
        "phuketRuTr": "то:н ни: ю: ти: най",
        "enTr": "ton nii yuu thii nai",
        "translation": "Где ты сейчас?"
      },
      {
        "thai": "ต้องการอะไร",
        "ruTr": "то:нг ка:н арай",
        "phuketRuTr": "то:нк ка:н алай",
        "enTr": "tong gaan a-rai",
        "translation": "Что вам нужно?"
      }
    ]
  },
  {
    "id": 20,
    "letter": "ถ",
    "thaiName": "ถอ ถุง",
    "ruTranscription": "тх",
    "phuketRuTranscription": "т",
    "enTranscription": "th",
    "meaning": "мешок",
    "syllables": [
      {
        "syllable": "ถะ",
        "ruTr": "а",
        "phuketRuTr": "та",
        "enTr": "a",
        "example": "ถะ — (редко)",
        "examplePhuketRu": "та"
      },
      {
        "syllable": "ถา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ถา — (редко)",
        "examplePhuketRu": "та:"
      },
      {
        "syllable": "ถิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ถิ — (редко)",
        "examplePhuketRu": "ти"
      },
      {
        "syllable": "ถี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ถี — (редко)",
        "examplePhuketRu": "ти:"
      },
      {
        "syllable": "ถุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ถุ — (редко)",
        "examplePhuketRu": "ту"
      },
      {
        "syllable": "ถู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ถู — мыть/дёшево",
        "examplePhuketRu": "ту:"
      },
      {
        "syllable": "เถะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เถะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "เถ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เถ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "แถะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แถะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "แถ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แถ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "โถะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โถะ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "โถ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โถ — кувшин",
        "examplePhuketRu": "то:"
      },
      {
        "syllable": "ถอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ถอ — вытаскивать",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "ถำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ถำ — (редко)",
        "examplePhuketRu": "там"
      },
      {
        "syllable": "ใถ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใถ — слог",
        "examplePhuketRu": "тай"
      },
      {
        "syllable": "ไถ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไถ — слог",
        "examplePhuketRu": "тай"
      }
    ],
    "words": [
      {
        "thai": "ถุง",
        "ruTr": "тхунг",
        "phuketRuTr": "тунк",
        "enTr": "thung",
        "translation": "мешок / пакет"
      },
      {
        "thai": "ถูก",
        "ruTr": "тхук",
        "phuketRuTr": "тук",
        "enTr": "thuuk",
        "translation": "дёшево / правильно"
      },
      {
        "thai": "ถาม",
        "ruTr": "та:м",
        "phuketRuTr": "та:м",
        "enTr": "thaam",
        "translation": "спрашивать"
      },
      {
        "thai": "ถนน",
        "ruTr": "тханон",
        "phuketRuTr": "танон",
        "enTr": "thanon",
        "translation": "улица / дорога"
      }
    ],
    "phrases": [
      {
        "thai": "ถามทาง",
        "ruTr": "та:м та:нг",
        "phuketRuTr": "та:м та:нк",
        "enTr": "thaam thaang",
        "translation": "спросить дорогу"
      },
      {
        "thai": "ถูกมาก",
        "ruTr": "тхук ма:к",
        "phuketRuTr": "тук ма:к",
        "enTr": "thuuk maak",
        "translation": "очень дёшево"
      }
    ]
  },
  {
    "id": 21,
    "letter": "ท",
    "thaiName": "ทอ ทหาร",
    "ruTranscription": "тх",
    "phuketRuTranscription": "т",
    "enTranscription": "th",
    "meaning": "солдат",
    "syllables": [
      {
        "syllable": "ทะ",
        "ruTr": "а",
        "phuketRuTr": "та",
        "enTr": "a",
        "example": "ทะ — (редко)",
        "examplePhuketRu": "та"
      },
      {
        "syllable": "ทา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ทา — мазать",
        "examplePhuketRu": "та:"
      },
      {
        "syllable": "ทิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ทิ — (редко)",
        "examplePhuketRu": "ти"
      },
      {
        "syllable": "ที",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ที — (редко)",
        "examplePhuketRu": "ти:"
      },
      {
        "syllable": "ทุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ทุ — (редко)",
        "examplePhuketRu": "ту"
      },
      {
        "syllable": "ทู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ทู — (редко)",
        "examplePhuketRu": "ту:"
      },
      {
        "syllable": "เทะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เท — наливать",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "เท",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เท — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "แทะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แทะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "แท",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แท — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "โทะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โทะ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "โท",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โท — (редко)",
        "examplePhuketRu": "то:"
      },
      {
        "syllable": "ทอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ทอ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "ทำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ทำ — делать",
        "examplePhuketRu": "там"
      },
      {
        "syllable": "ใท",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใท — слог",
        "examplePhuketRu": "тай"
      },
      {
        "syllable": "ไท",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไท — слог",
        "examplePhuketRu": "тай"
      }
    ],
    "words": [
      {
        "thai": "ทำ",
        "ruTr": "тхам",
        "phuketRuTr": "там",
        "enTr": "tham",
        "translation": "делать"
      },
      {
        "thai": "ที่",
        "ruTr": "тхи:",
        "phuketRuTr": "ти:",
        "enTr": "thii",
        "translation": "место / который"
      },
      {
        "thai": "ทุก",
        "ruTr": "тхук",
        "phuketRuTr": "тук",
        "enTr": "thuk",
        "translation": "каждый / все"
      },
      {
        "thai": "ทาง",
        "ruTr": "та:нг",
        "phuketRuTr": "та:нк",
        "enTr": "thaang",
        "translation": "путь / дорога"
      }
    ],
    "phrases": [
      {
        "thai": "ทำอะไร",
        "ruTr": "тхам арай",
        "phuketRuTr": "там алай",
        "enTr": "tham a-rai",
        "translation": "Что делаешь?"
      },
      {
        "thai": "ทุกวัน",
        "ruTr": "тхук ван",
        "phuketRuTr": "тук ван",
        "enTr": "thuk wan",
        "translation": "каждый день"
      }
    ]
  },
  {
    "id": 22,
    "letter": "ธ",
    "thaiName": "ธอ ธง",
    "ruTranscription": "тх",
    "phuketRuTranscription": "т",
    "enTranscription": "th",
    "meaning": "флаг",
    "syllables": [
      {
        "syllable": "ธะ",
        "ruTr": "а",
        "phuketRuTr": "та",
        "enTr": "a",
        "example": "ธะ — (редко)",
        "examplePhuketRu": "та"
      },
      {
        "syllable": "ธา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ธา — (редко)",
        "examplePhuketRu": "та:"
      },
      {
        "syllable": "ธิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ธิ — (редко)",
        "examplePhuketRu": "ти"
      },
      {
        "syllable": "ธี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ธี — (редко)",
        "examplePhuketRu": "ти:"
      },
      {
        "syllable": "ธุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ธุ — (редко)",
        "examplePhuketRu": "ту"
      },
      {
        "syllable": "ธู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ธู — (редко)",
        "examplePhuketRu": "ту:"
      },
      {
        "syllable": "เธะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เธะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "เธ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เธ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "แธะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แธะ — (редко)",
        "examplePhuketRu": "тэ"
      },
      {
        "syllable": "แธ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แธ — (редко)",
        "examplePhuketRu": "тэ:"
      },
      {
        "syllable": "โธะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โธะ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "โธ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โธ — (редко)",
        "examplePhuketRu": "то:"
      },
      {
        "syllable": "ธอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ธอ — (редко)",
        "examplePhuketRu": "то"
      },
      {
        "syllable": "ธำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ธำ — (редко)",
        "examplePhuketRu": "там"
      },
      {
        "syllable": "ใธ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใธ — слог",
        "examplePhuketRu": "тай"
      },
      {
        "syllable": "ไธ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไธ — слог",
        "examplePhuketRu": "тай"
      }
    ],
    "words": [
      {
        "thai": "ธง",
        "ruTr": "тхонг",
        "phuketRuTr": "тонк",
        "enTr": "thong",
        "translation": "флаг"
      },
      {
        "thai": "ธรรม",
        "ruTr": "тхам",
        "phuketRuTr": "там",
        "enTr": "tham",
        "translation": "дхарма / закон"
      },
      {
        "thai": "ธนาคาร",
        "ruTr": "тхана:ка:н",
        "phuketRuTr": "тана:ка:н",
        "enTr": "thanaakaan",
        "translation": "банк"
      },
      {
        "thai": "ธรรมชาติ",
        "ruTr": "тхаммачха:ти",
        "phuketRuTr": "таммача:ти",
        "enTr": "thammachaat",
        "translation": "природа"
      }
    ],
    "phrases": [
      {
        "thai": "ธงชาติ",
        "ruTr": "тхонг чха:ти",
        "phuketRuTr": "тонк ча:ти",
        "enTr": "thong chaat",
        "translation": "государственный флаг"
      },
      {
        "thai": "ธนาคารกรุงเทพ",
        "ruTr": "тхана:ка:н крунг тхэп",
        "phuketRuTr": "тана:ка:н клунк тэп",
        "enTr": "thanaakaan krueng thep",
        "translation": "банк Бангкока"
      }
    ]
  },
  {
    "id": 23,
    "letter": "น",
    "thaiName": "นอ หนู",
    "ruTranscription": "н",
    "phuketRuTranscription": "н",
    "enTranscription": "n",
    "meaning": "мышь",
    "syllables": [
      {
        "syllable": "นะ",
        "ruTr": "а",
        "phuketRuTr": "на",
        "enTr": "a",
        "example": "นะ — частица",
        "examplePhuketRu": "на"
      },
      {
        "syllable": "นา",
        "ruTr": "а:",
        "phuketRuTr": "на:",
        "enTr": "aa",
        "example": "นา — рисовое поле",
        "examplePhuketRu": "на:"
      },
      {
        "syllable": "นิ",
        "ruTr": "и",
        "phuketRuTr": "ни",
        "enTr": "i",
        "example": "นิ — (редко)",
        "examplePhuketRu": "ни"
      },
      {
        "syllable": "นี",
        "ruTr": "и:",
        "phuketRuTr": "ни:",
        "enTr": "ii",
        "example": "นี — (редко)",
        "examplePhuketRu": "ни:"
      },
      {
        "syllable": "นุ",
        "ruTr": "у",
        "phuketRuTr": "ну",
        "enTr": "u",
        "example": "นุ — (редко)",
        "examplePhuketRu": "ну"
      },
      {
        "syllable": "นู",
        "ruTr": "у:",
        "phuketRuTr": "ну:",
        "enTr": "uu",
        "example": "นู — (редко)",
        "examplePhuketRu": "ну:"
      },
      {
        "syllable": "เนะ",
        "ruTr": "э",
        "phuketRuTr": "нэ",
        "enTr": "e",
        "example": "เน — (редко)",
        "examplePhuketRu": "нэ"
      },
      {
        "syllable": "เน",
        "ruTr": "э:",
        "phuketRuTr": "нэ:",
        "enTr": "ee",
        "example": "เน — (редко)",
        "examplePhuketRu": "нэ:"
      },
      {
        "syllable": "แนะ",
        "ruTr": "э",
        "phuketRuTr": "нэ",
        "enTr": "ae",
        "example": "แนะ — (редко)",
        "examplePhuketRu": "нэ"
      },
      {
        "syllable": "แน",
        "ruTr": "э:",
        "phuketRuTr": "нэ:",
        "enTr": "aae",
        "example": "แน — (редко)",
        "examplePhuketRu": "нэ:"
      },
      {
        "syllable": "โนะ",
        "ruTr": "о",
        "phuketRuTr": "но",
        "enTr": "o",
        "example": "โนะ — (редко)",
        "examplePhuketRu": "но"
      },
      {
        "syllable": "โน",
        "ruTr": "о:",
        "phuketRuTr": "но:",
        "enTr": "oo",
        "example": "โน — (редко)",
        "examplePhuketRu": "но:"
      },
      {
        "syllable": "นอ",
        "ruTr": "о",
        "phuketRuTr": "но",
        "enTr": "aw",
        "example": "นอ — спать",
        "examplePhuketRu": "но"
      },
      {
        "syllable": "นำ",
        "ruTr": "ам",
        "phuketRuTr": "нам",
        "enTr": "am",
        "example": "นำ — вода",
        "examplePhuketRu": "нам"
      },
      {
        "syllable": "ใน",
        "ruTr": "ай",
        "phuketRuTr": "най",
        "enTr": "ai",
        "example": "ใน — слог",
        "examplePhuketRu": "най"
      },
      {
        "syllable": "ไน",
        "ruTr": "ай",
        "phuketRuTr": "най",
        "enTr": "ai",
        "example": "ไน — слог",
        "examplePhuketRu": "най"
      }
    ],
    "words": [
      {
        "thai": "น้ำ",
        "ruTr": "на:м",
        "phuketRuTr": "на:м",
        "enTr": "naam",
        "translation": "вода"
      },
      {
        "thai": "นอน",
        "ruTr": "но:н",
        "phuketRuTr": "но:н",
        "enTr": "noon",
        "translation": "спать"
      },
      {
        "thai": "นี่",
        "ruTr": "ни:",
        "phuketRuTr": "ни:",
        "enTr": "nii",
        "translation": "этот / здесь"
      },
      {
        "thai": "น่ารัก",
        "ruTr": "на: рак",
        "phuketRuTr": "на: лак",
        "enTr": "naa-rak",
        "translation": "милый"
      }
    ],
    "phrases": [
      {
        "thai": "น้ำหนึ่งขวด",
        "ruTr": "на:м нынг кхуат",
        "phuketRuTr": "на:м нынк куат",
        "enTr": "naam neung khuat",
        "translation": "бутылка воды"
      },
      {
        "thai": "นอนไม่หลับ",
        "ruTr": "но:н май лаб",
        "phuketRuTr": "но:н май лаб",
        "enTr": "noon mai lap",
        "translation": "не спится"
      }
    ]
  },
  {
    "id": 24,
    "letter": "บ",
    "thaiName": "บอ ใบไม้",
    "ruTranscription": "б",
    "phuketRuTranscription": "б",
    "enTranscription": "b",
    "meaning": "лист",
    "syllables": [
      {
        "syllable": "บะ",
        "ruTr": "а",
        "phuketRuTr": "ба",
        "enTr": "a",
        "example": "บะ — (редко)",
        "examplePhuketRu": "ба"
      },
      {
        "syllable": "บา",
        "ruTr": "а:",
        "phuketRuTr": "ба:",
        "enTr": "aa",
        "example": "บา — (редко)",
        "examplePhuketRu": "ба:"
      },
      {
        "syllable": "บิ",
        "ruTr": "и",
        "phuketRuTr": "би",
        "enTr": "i",
        "example": "บิ — (редко)",
        "examplePhuketRu": "би"
      },
      {
        "syllable": "บี",
        "ruTr": "и:",
        "phuketRuTr": "би:",
        "enTr": "ii",
        "example": "บี — (редко)",
        "examplePhuketRu": "би:"
      },
      {
        "syllable": "บุ",
        "ruTr": "у",
        "phuketRuTr": "бу",
        "enTr": "u",
        "example": "บุ — (редко)",
        "examplePhuketRu": "бу"
      },
      {
        "syllable": "บู",
        "ruTr": "у:",
        "phuketRuTr": "бу:",
        "enTr": "uu",
        "example": "บู — (редко)",
        "examplePhuketRu": "бу:"
      },
      {
        "syllable": "เบะ",
        "ruTr": "э",
        "phuketRuTr": "бэ",
        "enTr": "e",
        "example": "เบะ — (редко)",
        "examplePhuketRu": "бэ"
      },
      {
        "syllable": "เบ",
        "ruTr": "э:",
        "phuketRuTr": "бэ:",
        "enTr": "ee",
        "example": "เบ — (редко)",
        "examplePhuketRu": "бэ:"
      },
      {
        "syllable": "แบะ",
        "ruTr": "э",
        "phuketRuTr": "бэ",
        "enTr": "ae",
        "example": "แบะ — (редко)",
        "examplePhuketRu": "бэ"
      },
      {
        "syllable": "แบ",
        "ruTr": "э:",
        "phuketRuTr": "бэ:",
        "enTr": "aae",
        "example": "แบ — (редко)",
        "examplePhuketRu": "бэ:"
      },
      {
        "syllable": "โบะ",
        "ruTr": "о",
        "phuketRuTr": "бо",
        "enTr": "o",
        "example": "โบะ — (редко)",
        "examplePhuketRu": "бо"
      },
      {
        "syllable": "โบ",
        "ruTr": "о:",
        "phuketRuTr": "бо:",
        "enTr": "oo",
        "example": "โบ — (редко)",
        "examplePhuketRu": "бо:"
      },
      {
        "syllable": "บอ",
        "ruTr": "о",
        "phuketRuTr": "бо",
        "enTr": "aw",
        "example": "บอ — (редко)",
        "examplePhuketRu": "бо"
      },
      {
        "syllable": "บำ",
        "ruTr": "ам",
        "phuketRuTr": "бам",
        "enTr": "am",
        "example": "บำ — (редко)",
        "examplePhuketRu": "бам"
      },
      {
        "syllable": "ใบ",
        "ruTr": "ай",
        "phuketRuTr": "бай",
        "enTr": "ai",
        "example": "ใบ — слог",
        "examplePhuketRu": "бай"
      },
      {
        "syllable": "ไบ",
        "ruTr": "ай",
        "phuketRuTr": "бай",
        "enTr": "ai",
        "example": "ไบ — слог",
        "examplePhuketRu": "бай"
      }
    ],
    "words": [
      {
        "thai": "บ้าน",
        "ruTr": "ба:н",
        "phuketRuTr": "ба:н",
        "enTr": "baan",
        "translation": "дом"
      },
      {
        "thai": "บอก",
        "ruTr": "бо:к",
        "phuketRuTr": "бо:к",
        "enTr": "bok",
        "translation": "сказать"
      },
      {
        "thai": "เบียร์",
        "ruTr": "биа",
        "phuketRuTr": "биа",
        "enTr": "bia",
        "translation": "пиво"
      },
      {
        "thai": "บิน",
        "ruTr": "бин",
        "phuketRuTr": "бин",
        "enTr": "bin",
        "translation": "лететь"
      }
    ],
    "phrases": [
      {
        "thai": "ไปบ้าน",
        "ruTr": "пай ба:н",
        "phuketRuTr": "пай ба:н",
        "enTr": "pai baan",
        "translation": "идти домой"
      },
      {
        "thai": "เช็คบินด้วย",
        "ruTr": "чхек бин дуай",
        "phuketRuTr": "чек бин дуай",
        "enTr": "check bin duay",
        "translation": "счёт, пожалуйста"
      }
    ]
  },
  {
    "id": 25,
    "letter": "ป",
    "thaiName": "ปอ ปลา",
    "ruTranscription": "п",
    "phuketRuTranscription": "п",
    "enTranscription": "p",
    "meaning": "рыба",
    "syllables": [
      {
        "syllable": "ปะ",
        "ruTr": "а",
        "phuketRuTr": "па",
        "enTr": "a",
        "example": "ปะ — (редко)",
        "examplePhuketRu": "па"
      },
      {
        "syllable": "ปา",
        "ruTr": "а:",
        "phuketRuTr": "па:",
        "enTr": "aa",
        "example": "ปา — бросать",
        "examplePhuketRu": "па:"
      },
      {
        "syllable": "ปิ",
        "ruTr": "и",
        "phuketRuTr": "пи",
        "enTr": "i",
        "example": "ปิ — (редко)",
        "examplePhuketRu": "пи"
      },
      {
        "syllable": "ปี",
        "ruTr": "и:",
        "phuketRuTr": "пи:",
        "enTr": "ii",
        "example": "ปี — год",
        "examplePhuketRu": "пи:"
      },
      {
        "syllable": "ปุ",
        "ruTr": "у",
        "phuketRuTr": "пу",
        "enTr": "u",
        "example": "ปุ — (редко)",
        "examplePhuketRu": "пу"
      },
      {
        "syllable": "ปู",
        "ruTr": "у:",
        "phuketRuTr": "пу:",
        "enTr": "uu",
        "example": "ปู — краб",
        "examplePhuketRu": "пу:"
      },
      {
        "syllable": "เปะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "e",
        "example": "เปะ — (редко)",
        "examplePhuketRu": "пэ"
      },
      {
        "syllable": "เป",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "ee",
        "example": "เป — (редко)",
        "examplePhuketRu": "пэ:"
      },
      {
        "syllable": "แปะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "ae",
        "example": "แปะ — (редко)",
        "examplePhuketRu": "пэ"
      },
      {
        "syllable": "แป",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "aae",
        "example": "แป — (редко)",
        "examplePhuketRu": "пэ:"
      },
      {
        "syllable": "โปะ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "o",
        "example": "โปะ — (редко)",
        "examplePhuketRu": "по"
      },
      {
        "syllable": "โป",
        "ruTr": "о:",
        "phuketRuTr": "по:",
        "enTr": "oo",
        "example": "โป — (редко)",
        "examplePhuketRu": "по:"
      },
      {
        "syllable": "ปอ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "aw",
        "example": "ปอ — (редко)",
        "examplePhuketRu": "по"
      },
      {
        "syllable": "ปำ",
        "ruTr": "ам",
        "phuketRuTr": "пам",
        "enTr": "am",
        "example": "ปำ — (редко)",
        "examplePhuketRu": "пам"
      },
      {
        "syllable": "ใป",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ใป — слог",
        "examplePhuketRu": "пай"
      },
      {
        "syllable": "ไป",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ไป — слог",
        "examplePhuketRu": "пай"
      }
    ],
    "words": [
      {
        "thai": "ปาก",
        "ruTr": "па:к",
        "phuketRuTr": "па:к",
        "enTr": "paak",
        "translation": "рот"
      },
      {
        "thai": "ปี",
        "ruTr": "пи:",
        "phuketRuTr": "пи:",
        "enTr": "pii",
        "translation": "год"
      },
      {
        "thai": "เปิด",
        "ruTr": "пəт",
        "phuketRuTr": "пəт",
        "enTr": "poet",
        "translation": "открывать"
      },
      {
        "thai": "ไป",
        "ruTr": "пай",
        "phuketRuTr": "пай",
        "enTr": "pai",
        "translation": "идти"
      }
    ],
    "phrases": [
      {
        "thai": "ไปไหน",
        "ruTr": "пай най",
        "phuketRuTr": "пай най",
        "enTr": "pai nai",
        "translation": "Куда идёшь?"
      },
      {
        "thai": "ปีนี้",
        "ruTr": "пи: ни:",
        "phuketRuTr": "пи: ни:",
        "enTr": "pii nii",
        "translation": "в этом году"
      }
    ]
  },
  {
    "id": 26,
    "letter": "ผ",
    "thaiName": "ผอ ผึ้ง",
    "ruTranscription": "пх",
    "phuketRuTranscription": "п",
    "enTranscription": "ph",
    "meaning": "пчела",
    "syllables": [
      {
        "syllable": "ผะ",
        "ruTr": "а",
        "phuketRuTr": "па",
        "enTr": "a",
        "example": "ผะ — (редко)",
        "examplePhuketRu": "па"
      },
      {
        "syllable": "ผา",
        "ruTr": "а:",
        "phuketRuTr": "па:",
        "enTr": "aa",
        "example": "ผา — скала",
        "examplePhuketRu": "па:"
      },
      {
        "syllable": "ผิ",
        "ruTr": "и",
        "phuketRuTr": "пи",
        "enTr": "i",
        "example": "ผิ — (редко)",
        "examplePhuketRu": "пи"
      },
      {
        "syllable": "ผี",
        "ruTr": "и:",
        "phuketRuTr": "пи:",
        "enTr": "ii",
        "example": "ผี — призрак",
        "examplePhuketRu": "пи:"
      },
      {
        "syllable": "ผุ",
        "ruTr": "у",
        "phuketRuTr": "пу",
        "enTr": "u",
        "example": "ผุ — (редко)",
        "examplePhuketRu": "пу"
      },
      {
        "syllable": "ผู",
        "ruTr": "у:",
        "phuketRuTr": "пу:",
        "enTr": "uu",
        "example": "ผู — (редко)",
        "examplePhuketRu": "пу:"
      },
      {
        "syllable": "เผะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "e",
        "example": "เผะ — (редко)",
        "examplePhuketRu": "пэ"
      },
      {
        "syllable": "เผ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "ee",
        "example": "เผ — (редко)",
        "examplePhuketRu": "пэ:"
      },
      {
        "syllable": "แผะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "ae",
        "example": "แผะ — (редко)",
        "examplePhuketRu": "пэ"
      },
      {
        "syllable": "แผ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "aae",
        "example": "แผ — (редко)",
        "examplePhuketRu": "пэ:"
      },
      {
        "syllable": "โผะ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "o",
        "example": "โผะ — (редко)",
        "examplePhuketRu": "по"
      },
      {
        "syllable": "โผ",
        "ruTr": "о:",
        "phuketRuTr": "по:",
        "enTr": "oo",
        "example": "โผ — (редко)",
        "examplePhuketRu": "по:"
      },
      {
        "syllable": "ผอ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "aw",
        "example": "ผอ — (редко)",
        "examplePhuketRu": "по"
      },
      {
        "syllable": "ผำ",
        "ruTr": "ам",
        "phuketRuTr": "пам",
        "enTr": "am",
        "example": "ผำ — (редко)",
        "examplePhuketRu": "пам"
      },
      {
        "syllable": "ใผ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ใผ — слог",
        "examplePhuketRu": "пай"
      },
      {
        "syllable": "ไผ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ไผ — слог",
        "examplePhuketRu": "пай"
      }
    ],
    "words": [
      {
        "thai": "ผม",
        "ruTr": "пхом",
        "phuketRuTr": "пом",
        "enTr": "phom",
        "translation": "я (м.р.) / волосы"
      },
      {
        "thai": "ผล",
        "ruTr": "пон",
        "phuketRuTr": "пон",
        "enTr": "phon",
        "translation": "плод / результат"
      },
      {
        "thai": "ผิด",
        "ruTr": "пхит",
        "phuketRuTr": "пит",
        "enTr": "phit",
        "translation": "ошибка / неправильно"
      },
      {
        "thai": "ผู้",
        "ruTr": "пху:",
        "phuketRuTr": "пу:",
        "enTr": "phuu",
        "translation": "человек / лицо"
      }
    ],
    "phrases": [
      {
        "thai": "ผมชื่อ...",
        "ruTr": "пхом чхе:...",
        "phuketRuTr": "пом че:...",
        "enTr": "phom chue...",
        "translation": "Меня зовут..."
      },
      {
        "thai": "ผิดพลาด",
        "ruTr": "пхит пхла:т",
        "phuketRuTr": "пит пла:т",
        "enTr": "phit phlaat",
        "translation": "ошибка / промах"
      }
    ]
  },
  {
    "id": 27,
    "letter": "ฝ",
    "thaiName": "ฝอ ฝน",
    "ruTranscription": "ф",
    "phuketRuTranscription": "ф",
    "enTranscription": "f",
    "meaning": "дождь",
    "syllables": [
      {
        "syllable": "ฝะ",
        "ruTr": "а",
        "phuketRuTr": "фа",
        "enTr": "a",
        "example": "ฝะ — (редко)",
        "examplePhuketRu": "фа"
      },
      {
        "syllable": "ฝา",
        "ruTr": "а:",
        "phuketRuTr": "фа:",
        "enTr": "aa",
        "example": "ฝา — крышка",
        "examplePhuketRu": "фа:"
      },
      {
        "syllable": "ฝิ",
        "ruTr": "и",
        "phuketRuTr": "фи",
        "enTr": "i",
        "example": "ฝิ — (редко)",
        "examplePhuketRu": "фи"
      },
      {
        "syllable": "ฝี",
        "ruTr": "и:",
        "phuketRuTr": "фи:",
        "enTr": "ii",
        "example": "ฝี — (редко)",
        "examplePhuketRu": "фи:"
      },
      {
        "syllable": "ฝุ",
        "ruTr": "у",
        "phuketRuTr": "фу",
        "enTr": "u",
        "example": "ฝุ — (редко)",
        "examplePhuketRu": "фу"
      },
      {
        "syllable": "ฝู",
        "ruTr": "у:",
        "phuketRuTr": "фу:",
        "enTr": "uu",
        "example": "ฝู — (редко)",
        "examplePhuketRu": "фу:"
      },
      {
        "syllable": "เฝะ",
        "ruTr": "э",
        "phuketRuTr": "фэ",
        "enTr": "e",
        "example": "เฝะ — (редко)",
        "examplePhuketRu": "фэ"
      },
      {
        "syllable": "เฝ",
        "ruTr": "э:",
        "phuketRuTr": "фэ:",
        "enTr": "ee",
        "example": "เฝ — (редко)",
        "examplePhuketRu": "фэ:"
      },
      {
        "syllable": "แฝะ",
        "ruTr": "э",
        "phuketRuTr": "фэ",
        "enTr": "ae",
        "example": "แฝะ — (редко)",
        "examplePhuketRu": "фэ"
      },
      {
        "syllable": "แฝ",
        "ruTr": "э:",
        "phuketRuTr": "фэ:",
        "enTr": "aae",
        "example": "แฝ — (редко)",
        "examplePhuketRu": "фэ:"
      },
      {
        "syllable": "โฝะ",
        "ruTr": "о",
        "phuketRuTr": "фо",
        "enTr": "o",
        "example": "โฝะ — (редко)",
        "examplePhuketRu": "фо"
      },
      {
        "syllable": "โฝ",
        "ruTr": "о:",
        "phuketRuTr": "фо:",
        "enTr": "oo",
        "example": "โฝ — (редко)",
        "examplePhuketRu": "фо:"
      },
      {
        "syllable": "ฝอ",
        "ruTr": "о",
        "phuketRuTr": "фо",
        "enTr": "aw",
        "example": "ฝอ — (редко)",
        "examplePhuketRu": "фо"
      },
      {
        "syllable": "ฝำ",
        "ruTr": "ам",
        "phuketRuTr": "фам",
        "enTr": "am",
        "example": "ฝำ — (редко)",
        "examplePhuketRu": "фам"
      },
      {
        "syllable": "ใฝ",
        "ruTr": "ай",
        "phuketRuTr": "фай",
        "enTr": "ai",
        "example": "ใฝ — слог",
        "examplePhuketRu": "фай"
      },
      {
        "syllable": "ไฝ",
        "ruTr": "ай",
        "phuketRuTr": "фай",
        "enTr": "ai",
        "example": "ไฝ — слог",
        "examplePhuketRu": "фай"
      }
    ],
    "words": [
      {
        "thai": "ฝน",
        "ruTr": "фон",
        "phuketRuTr": "фон",
        "enTr": "fon",
        "translation": "дождь"
      },
      {
        "thai": "ฝัน",
        "ruTr": "фан",
        "phuketRuTr": "фан",
        "enTr": "fan",
        "translation": "мечтать / сон"
      },
      {
        "thai": "ฝา",
        "ruTr": "фа:",
        "phuketRuTr": "фа:",
        "enTr": "faa",
        "translation": "крышка"
      },
      {
        "thai": "ฝาก",
        "ruTr": "фа:к",
        "phuketRuTr": "фа:к",
        "enTr": "faak",
        "translation": "оставить / поручить"
      }
    ],
    "phrases": [
      {
        "thai": "ฝนตก",
        "ruTr": "фон ток",
        "phuketRuTr": "фон ток",
        "enTr": "fon tok",
        "translation": "идёт дождь"
      },
      {
        "thai": "ฝันดี",
        "ruTr": "фан ди:",
        "phuketRuTr": "фан ди:",
        "enTr": "fan dii",
        "translation": "спокойной ночи (снись хорошее)"
      }
    ]
  },
  {
    "id": 28,
    "letter": "พ",
    "thaiName": "พอ พาน",
    "ruTranscription": "пх",
    "phuketRuTranscription": "п",
    "enTranscription": "ph",
    "meaning": "поднос",
    "syllables": [
      {
        "syllable": "พะ",
        "ruTr": "а",
        "phuketRuTr": "па",
        "enTr": "a",
        "example": "พะ — (редко)",
        "examplePhuketRu": "па"
      },
      {
        "syllable": "พา",
        "ruTr": "а:",
        "phuketRuTr": "па:",
        "enTr": "aa",
        "example": "พา — вести",
        "examplePhuketRu": "па:"
      },
      {
        "syllable": "พิ",
        "ruTr": "и",
        "phuketRuTr": "пи",
        "enTr": "i",
        "example": "พิ — (редко)",
        "examplePhuketRu": "пи"
      },
      {
        "syllable": "พี",
        "ruTr": "и:",
        "phuketRuTr": "пи:",
        "enTr": "ii",
        "example": "พี — (редко)",
        "examplePhuketRu": "пи:"
      },
      {
        "syllable": "พุ",
        "ruTr": "у",
        "phuketRuTr": "пу",
        "enTr": "u",
        "example": "พุ — (редко)",
        "examplePhuketRu": "пу"
      },
      {
        "syllable": "พู",
        "ruTr": "у:",
        "phuketRuTr": "пу:",
        "enTr": "uu",
        "example": "พู — (редко)",
        "examplePhuketRu": "пу:"
      },
      {
        "syllable": "เพะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "e",
        "example": "เพะ — (редко)",
        "examplePhuketRu": "пэ"
      },
      {
        "syllable": "เพ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "ee",
        "example": "เพ — (редко)",
        "examplePhuketRu": "пэ:"
      },
      {
        "syllable": "แพะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "ae",
        "example": "แพะ — (редко)",
        "examplePhuketRu": "пэ"
      },
      {
        "syllable": "แพ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "aae",
        "example": "แพ — (редко)",
        "examplePhuketRu": "пэ:"
      },
      {
        "syllable": "โพะ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "o",
        "example": "โพะ — (редко)",
        "examplePhuketRu": "по"
      },
      {
        "syllable": "โพ",
        "ruTr": "о:",
        "phuketRuTr": "по:",
        "enTr": "oo",
        "example": "โพ — (редко)",
        "examplePhuketRu": "по:"
      },
      {
        "syllable": "พอ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "aw",
        "example": "พอ — достаточно",
        "examplePhuketRu": "по"
      },
      {
        "syllable": "พำ",
        "ruTr": "ам",
        "phuketRuTr": "пам",
        "enTr": "am",
        "example": "พำ — (редко)",
        "examplePhuketRu": "пам"
      },
      {
        "syllable": "ใพ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ใพ — слог",
        "examplePhuketRu": "пай"
      },
      {
        "syllable": "ไพ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ไพ — слог",
        "examplePhuketRu": "пай"
      }
    ],
    "words": [
      {
        "thai": "พ่อ",
        "ruTr": "пхо:",
        "phuketRuTr": "по:",
        "enTr": "pho",
        "translation": "отец"
      },
      {
        "thai": "พูด",
        "ruTr": "пху:т",
        "phuketRuTr": "пу:т",
        "enTr": "phuut",
        "translation": "говорить"
      },
      {
        "thai": "เพื่อน",
        "ruTr": "пхыан",
        "phuketRuTr": "пыан",
        "enTr": "phuean",
        "translation": "друг"
      },
      {
        "thai": "พร้อม",
        "ruTr": "пхро:м",
        "phuketRuTr": "пло:м",
        "enTr": "phrom",
        "translation": "готовый"
      }
    ],
    "phrases": [
      {
        "thai": "พ่อแม่",
        "ruTr": "пхо: мэ:",
        "phuketRuTr": "по: мэ:",
        "enTr": "pho mae",
        "translation": "родители"
      },
      {
        "thai": "พูดภาษาไทยได้ไหม",
        "ruTr": "пху:т пха:са: тхай дай май",
        "phuketRuTr": "пут паса тай дай май",
        "enTr": "phuut phasaa thai dai mai",
        "translation": "Вы говорите по-тайски?"
      }
    ]
  },
  {
    "id": 29,
    "letter": "ฟ",
    "thaiName": "ฟอ ฟัน",
    "ruTranscription": "ф",
    "phuketRuTranscription": "ф",
    "enTranscription": "f",
    "meaning": "зубы",
    "syllables": [
      {
        "syllable": "ฟะ",
        "ruTr": "а",
        "phuketRuTr": "фа",
        "enTr": "a",
        "example": "ฟะ — (редко)",
        "examplePhuketRu": "фа"
      },
      {
        "syllable": "ฟา",
        "ruTr": "а:",
        "phuketRuTr": "фа:",
        "enTr": "aa",
        "example": "ฟา — (редко)",
        "examplePhuketRu": "фа:"
      },
      {
        "syllable": "ฟิ",
        "ruTr": "и",
        "phuketRuTr": "фи",
        "enTr": "i",
        "example": "ฟิ — (редко)",
        "examplePhuketRu": "фи"
      },
      {
        "syllable": "ฟี",
        "ruTr": "и:",
        "phuketRuTr": "фи:",
        "enTr": "ii",
        "example": "ฟี — (редко)",
        "examplePhuketRu": "фи:"
      },
      {
        "syllable": "ฟุ",
        "ruTr": "у",
        "phuketRuTr": "фу",
        "enTr": "u",
        "example": "ฟุ — (редко)",
        "examplePhuketRu": "фу"
      },
      {
        "syllable": "ฟู",
        "ruTr": "у:",
        "phuketRuTr": "фу:",
        "enTr": "uu",
        "example": "ฟู — (редко)",
        "examplePhuketRu": "фу:"
      },
      {
        "syllable": "เฟะ",
        "ruTr": "э",
        "phuketRuTr": "фэ",
        "enTr": "e",
        "example": "เฟะ — (редко)",
        "examplePhuketRu": "фэ"
      },
      {
        "syllable": "เฟ",
        "ruTr": "э:",
        "phuketRuTr": "фэ:",
        "enTr": "ee",
        "example": "เฟ — (редко)",
        "examplePhuketRu": "фэ:"
      },
      {
        "syllable": "แฟะ",
        "ruTr": "э",
        "phuketRuTr": "фэ",
        "enTr": "ae",
        "example": "แฟะ — (редко)",
        "examplePhuketRu": "фэ"
      },
      {
        "syllable": "แฟ",
        "ruTr": "э:",
        "phuketRuTr": "фэ:",
        "enTr": "aae",
        "example": "แฟ — (редко)",
        "examplePhuketRu": "фэ:"
      },
      {
        "syllable": "โฟะ",
        "ruTr": "о",
        "phuketRuTr": "фо",
        "enTr": "o",
        "example": "โฟะ — (редко)",
        "examplePhuketRu": "фо"
      },
      {
        "syllable": "โฟ",
        "ruTr": "о:",
        "phuketRuTr": "фо:",
        "enTr": "oo",
        "example": "โฟ — (редко)",
        "examplePhuketRu": "фо:"
      },
      {
        "syllable": "ฟอ",
        "ruTr": "о",
        "phuketRuTr": "фо",
        "enTr": "aw",
        "example": "ฟอ — (редко)",
        "examplePhuketRu": "фо"
      },
      {
        "syllable": "ฟำ",
        "ruTr": "ам",
        "phuketRuTr": "фам",
        "enTr": "am",
        "example": "ฟำ — (редко)",
        "examplePhuketRu": "фам"
      },
      {
        "syllable": "ใฟ",
        "ruTr": "ай",
        "phuketRuTr": "фай",
        "enTr": "ai",
        "example": "ใฟ — слог",
        "examplePhuketRu": "фай"
      },
      {
        "syllable": "ไฟ",
        "ruTr": "ай",
        "phuketRuTr": "фай",
        "enTr": "ai",
        "example": "ไฟ — слог",
        "examplePhuketRu": "фай"
      }
    ],
    "words": [
      {
        "thai": "ฟัน",
        "ruTr": "фан",
        "phuketRuTr": "фан",
        "enTr": "fan",
        "translation": "зуб / резать"
      },
      {
        "thai": "ฟัง",
        "ruTr": "фанг",
        "phuketRuTr": "фанк",
        "enTr": "fang",
        "translation": "слушать"
      },
      {
        "thai": "ฟรี",
        "ruTr": "фри:",
        "phuketRuTr": "фли:",
        "enTr": "frii",
        "translation": "бесплатно"
      },
      {
        "thai": "ฟ้า",
        "ruTr": "фа:",
        "phuketRuTr": "фа:",
        "enTr": "faa",
        "translation": "небо"
      }
    ],
    "phrases": [
      {
        "thai": "ฟันขาว",
        "ruTr": "фан кха:o",
        "phuketRuTr": "фан ка:o",
        "enTr": "fan khaao",
        "translation": "белые зубы"
      },
      {
        "thai": "ฟรีของแถม",
        "ruTr": "фри: кхо:нг тхэ:м",
        "phuketRuTr": "фли: ко:нк тэ:м",
        "enTr": "frii khong thaem",
        "translation": "бесплатный бонус"
      }
    ]
  },
  {
    "id": 30,
    "letter": "ภ",
    "thaiName": "ภอ สำเภา",
    "ruTranscription": "пх",
    "phuketRuTranscription": "п",
    "enTranscription": "ph",
    "meaning": "джонка",
    "syllables": [
      {
        "syllable": "ภะ",
        "ruTr": "а",
        "phuketRuTr": "па",
        "enTr": "a",
        "example": "ภะ — (редко)",
        "examplePhuketRu": "па"
      },
      {
        "syllable": "ภา",
        "ruTr": "а:",
        "phuketRuTr": "па:",
        "enTr": "aa",
        "example": "ภา — (редко)",
        "examplePhuketRu": "па:"
      },
      {
        "syllable": "ภิ",
        "ruTr": "и",
        "phuketRuTr": "пи",
        "enTr": "i",
        "example": "ภิ — (редко)",
        "examplePhuketRu": "пи"
      },
      {
        "syllable": "ภี",
        "ruTr": "и:",
        "phuketRuTr": "пи:",
        "enTr": "ii",
        "example": "ภี — (редко)",
        "examplePhuketRu": "пи:"
      },
      {
        "syllable": "ภุ",
        "ruTr": "у",
        "phuketRuTr": "пу",
        "enTr": "u",
        "example": "ภุ — (редко)",
        "examplePhuketRu": "пу"
      },
      {
        "syllable": "ภู",
        "ruTr": "у:",
        "phuketRuTr": "пу:",
        "enTr": "uu",
        "example": "ภู — (редко)",
        "examplePhuketRu": "пу:"
      },
      {
        "syllable": "เภะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "e",
        "example": "เภะ — (редко)",
        "examplePhuketRu": "пэ"
      },
      {
        "syllable": "เภ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "ee",
        "example": "เภ — (редко)",
        "examplePhuketRu": "пэ:"
      },
      {
        "syllable": "แภะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "ae",
        "example": "แภะ — (редко)",
        "examplePhuketRu": "пэ"
      },
      {
        "syllable": "แภ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "aae",
        "example": "แภ — (редко)",
        "examplePhuketRu": "пэ:"
      },
      {
        "syllable": "โภะ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "o",
        "example": "โภะ — (редко)",
        "examplePhuketRu": "по"
      },
      {
        "syllable": "โภ",
        "ruTr": "о:",
        "phuketRuTr": "по:",
        "enTr": "oo",
        "example": "โภ — (редко)",
        "examplePhuketRu": "по:"
      },
      {
        "syllable": "ภอ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "aw",
        "example": "ภอ — (редко)",
        "examplePhuketRu": "по"
      },
      {
        "syllable": "ภำ",
        "ruTr": "ам",
        "phuketRuTr": "пам",
        "enTr": "am",
        "example": "ภำ — (редко)",
        "examplePhuketRu": "пам"
      },
      {
        "syllable": "ใภ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ใภ — слог",
        "examplePhuketRu": "пай"
      },
      {
        "syllable": "ไภ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ไภ — слог",
        "examplePhuketRu": "пай"
      }
    ],
    "words": [
      {
        "thai": "ภาพ",
        "ruTr": "пха:п",
        "phuketRuTr": "па:п",
        "enTr": "phaap",
        "translation": "картина / фото"
      },
      {
        "thai": "ภาษา",
        "ruTr": "пха:са:",
        "phuketRuTr": "па:са:",
        "enTr": "phaasaa",
        "translation": "язык"
      },
      {
        "thai": "ภูเขา",
        "ruTr": "пху: кха:o",
        "phuketRuTr": "пу: ка:o",
        "enTr": "phuu khao",
        "translation": "гора"
      },
      {
        "thai": "ภัย",
        "ruTr": "пхай",
        "phuketRuTr": "пай",
        "enTr": "phai",
        "translation": "опасность"
      }
    ],
    "phrases": [
      {
        "thai": "ภาษาไทย",
        "ruTr": "пха:са: тхай",
        "phuketRuTr": "па:са: тай",
        "enTr": "phaasaa thai",
        "translation": "тайский язык"
      },
      {
        "thai": "ภูเก็ต",
        "ruTr": "пху: кет",
        "phuketRuTr": "пукет",
        "enTr": "phuu ket",
        "translation": "Пхукет"
      }
    ]
  },
  {
    "id": 31,
    "letter": "ม",
    "thaiName": "มอ ม้า",
    "ruTranscription": "м",
    "phuketRuTranscription": "м",
    "enTranscription": "m",
    "meaning": "лошадь",
    "syllables": [
      {
        "syllable": "มะ",
        "ruTr": "а",
        "phuketRuTr": "ма",
        "enTr": "a",
        "example": "มะ — (редко)",
        "examplePhuketRu": "ма"
      },
      {
        "syllable": "มา",
        "ruTr": "а:",
        "phuketRuTr": "ма:",
        "enTr": "aa",
        "example": "มา — приходить",
        "examplePhuketRu": "ма:"
      },
      {
        "syllable": "มิ",
        "ruTr": "и",
        "phuketRuTr": "ми",
        "enTr": "i",
        "example": "มิ — (редко)",
        "examplePhuketRu": "ми"
      },
      {
        "syllable": "มี",
        "ruTr": "и:",
        "phuketRuTr": "ми:",
        "enTr": "ii",
        "example": "มี — иметь",
        "examplePhuketRu": "ми:"
      },
      {
        "syllable": "มุ",
        "ruTr": "у",
        "phuketRuTr": "му",
        "enTr": "u",
        "example": "มุ — (редко)",
        "examplePhuketRu": "му"
      },
      {
        "syllable": "มู",
        "ruTr": "у:",
        "phuketRuTr": "му:",
        "enTr": "uu",
        "example": "มู — (редко)",
        "examplePhuketRu": "му:"
      },
      {
        "syllable": "เมะ",
        "ruTr": "э",
        "phuketRuTr": "мэ",
        "enTr": "e",
        "example": "เมะ — (редко)",
        "examplePhuketRu": "мэ"
      },
      {
        "syllable": "เม",
        "ruTr": "э:",
        "phuketRuTr": "мэ:",
        "enTr": "ee",
        "example": "เม — (редко)",
        "examplePhuketRu": "мэ:"
      },
      {
        "syllable": "แมะ",
        "ruTr": "э",
        "phuketRuTr": "мэ",
        "enTr": "ae",
        "example": "แม่ — мама",
        "examplePhuketRu": "мэ"
      },
      {
        "syllable": "แม",
        "ruTr": "э:",
        "phuketRuTr": "мэ:",
        "enTr": "aae",
        "example": "แม — (редко)",
        "examplePhuketRu": "мэ:"
      },
      {
        "syllable": "โมะ",
        "ruTr": "о",
        "phuketRuTr": "мо",
        "enTr": "o",
        "example": "โมะ — (редко)",
        "examplePhuketRu": "мо"
      },
      {
        "syllable": "โม",
        "ruTr": "о:",
        "phuketRuTr": "мо:",
        "enTr": "oo",
        "example": "โม — (редко)",
        "examplePhuketRu": "мо:"
      },
      {
        "syllable": "มอ",
        "ruTr": "о",
        "phuketRuTr": "мо",
        "enTr": "aw",
        "example": "มอ — (редко)",
        "examplePhuketRu": "мо"
      },
      {
        "syllable": "มำ",
        "ruTr": "ам",
        "phuketRuTr": "мам",
        "enTr": "am",
        "example": "มำ — (редко)",
        "examplePhuketRu": "мам"
      },
      {
        "syllable": "ใม",
        "ruTr": "ай",
        "phuketRuTr": "май",
        "enTr": "ai",
        "example": "ใม — слог",
        "examplePhuketRu": "май"
      },
      {
        "syllable": "ไม",
        "ruTr": "ай",
        "phuketRuTr": "май",
        "enTr": "ai",
        "example": "ไม — слог",
        "examplePhuketRu": "май"
      }
    ],
    "words": [
      {
        "thai": "มา",
        "ruTr": "ма:",
        "phuketRuTr": "ма:",
        "enTr": "maa",
        "translation": "приходить"
      },
      {
        "thai": "มาก",
        "ruTr": "ма:к",
        "phuketRuTr": "ма:к",
        "enTr": "maak",
        "translation": "много"
      },
      {
        "thai": "ม้า",
        "ruTr": "ма:",
        "phuketRuTr": "ма:",
        "enTr": "maa",
        "translation": "лошадь"
      },
      {
        "thai": "ไม่",
        "ruTr": "май",
        "phuketRuTr": "май",
        "enTr": "mai",
        "translation": "не / нет"
      }
    ],
    "phrases": [
      {
        "thai": "ไม่เป็นไร",
        "ruTr": "май пен рай",
        "phuketRuTr": "май пен рай",
        "enTr": "mai pen rai",
        "translation": "ничего страшного"
      },
      {
        "thai": "มากมาย",
        "ruTr": "ма:к май",
        "phuketRuTr": "ма:к май",
        "enTr": "maak maai",
        "translation": "очень много"
      }
    ]
  },
  {
    "id": 32,
    "letter": "ย",
    "thaiName": "ยอ ยักษ์",
    "ruTranscription": "й",
    "phuketRuTranscription": "й",
    "enTranscription": "y",
    "meaning": "великан",
    "syllables": [
      {
        "syllable": "ยะ",
        "ruTr": "а",
        "phuketRuTr": "йа",
        "enTr": "a",
        "example": "ยะ — (редко)",
        "examplePhuketRu": "йа"
      },
      {
        "syllable": "ยา",
        "ruTr": "а:",
        "phuketRuTr": "йа:",
        "enTr": "aa",
        "example": "ยา — лекарство",
        "examplePhuketRu": "яа:"
      },
      {
        "syllable": "ยิ",
        "ruTr": "и",
        "phuketRuTr": "йи",
        "enTr": "i",
        "example": "ยิ — (редко)",
        "examplePhuketRu": "йи"
      },
      {
        "syllable": "ยี",
        "ruTr": "и:",
        "phuketRuTr": "йи:",
        "enTr": "ii",
        "example": "ยี — (редко)",
        "examplePhuketRu": "йи:"
      },
      {
        "syllable": "ยุ",
        "ruTr": "у",
        "phuketRuTr": "йу",
        "enTr": "u",
        "example": "ยุ — (редко)",
        "examplePhuketRu": "йу"
      },
      {
        "syllable": "ยู",
        "ruTr": "у:",
        "phuketRuTr": "йу:",
        "enTr": "uu",
        "example": "ยู — (редко)",
        "examplePhuketRu": "йу:"
      },
      {
        "syllable": "เยะ",
        "ruTr": "э",
        "phuketRuTr": "йэ",
        "enTr": "e",
        "example": "เยะ — (редко)",
        "examplePhuketRu": "йэ"
      },
      {
        "syllable": "เย",
        "ruTr": "э:",
        "phuketRuTr": "йэ:",
        "enTr": "ee",
        "example": "เย — (редко)",
        "examplePhuketRu": "йэ:"
      },
      {
        "syllable": "แยะ",
        "ruTr": "э",
        "phuketRuTr": "йэ",
        "enTr": "ae",
        "example": "แยะ — (редко)",
        "examplePhuketRu": "йэ"
      },
      {
        "syllable": "แย",
        "ruTr": "э:",
        "phuketRuTr": "йэ:",
        "enTr": "aae",
        "example": "แย — (редко)",
        "examplePhuketRu": "йэ:"
      },
      {
        "syllable": "โยะ",
        "ruTr": "о",
        "phuketRuTr": "йо",
        "enTr": "o",
        "example": "โยะ — (редко)",
        "examplePhuketRu": "йо"
      },
      {
        "syllable": "โย",
        "ruTr": "о:",
        "phuketRuTr": "йо:",
        "enTr": "oo",
        "example": "โย — (редко)",
        "examplePhuketRu": "йо:"
      },
      {
        "syllable": "ยอ",
        "ruTr": "о",
        "phuketRuTr": "йо",
        "enTr": "aw",
        "example": "ยอ — (редко)",
        "examplePhuketRu": "йо"
      },
      {
        "syllable": "ยำ",
        "ruTr": "ам",
        "phuketRuTr": "йам",
        "enTr": "am",
        "example": "ยำ — (редко)",
        "examplePhuketRu": "йам"
      },
      {
        "syllable": "ใย",
        "ruTr": "ай",
        "phuketRuTr": "йай",
        "enTr": "ai",
        "example": "ใย — слог",
        "examplePhuketRu": "йай"
      },
      {
        "syllable": "ไย",
        "ruTr": "ай",
        "phuketRuTr": "йай",
        "enTr": "ai",
        "example": "ไย — слог",
        "examplePhuketRu": "йай"
      }
    ],
    "words": [
      {
        "thai": "ยาก",
        "ruTr": "яа:к",
        "phuketRuTr": "яа:к",
        "enTr": "yaak",
        "translation": "трудный"
      },
      {
        "thai": "ยา",
        "ruTr": "яа:",
        "phuketRuTr": "яа:",
        "enTr": "yaa",
        "translation": "лекарство"
      },
      {
        "thai": "ยิ้ม",
        "ruTr": "йи:м",
        "phuketRuTr": "йи:м",
        "enTr": "yim",
        "translation": "улыбаться"
      },
      {
        "thai": "ยัง",
        "ruTr": "янг",
        "phuketRuTr": "янк",
        "enTr": "yang",
        "translation": "ещё"
      }
    ],
    "phrases": [
      {
        "thai": "ยังไม่เข้าใจ",
        "ruTr": "янг май кха:o чай",
        "phuketRuTr": "янк май ка:o чай",
        "enTr": "yang mai khao jai",
        "translation": "ещё не понимаю"
      },
      {
        "thai": "ยิ้มสวย",
        "ruTr": "йи:м суай",
        "phuketRuTr": "йи:м суай",
        "enTr": "yim suai",
        "translation": "красивая улыбка"
      }
    ]
  },
  {
    "id": 33,
    "letter": "ร",
    "thaiName": "รอ เรือ",
    "ruTranscription": "р",
    "phuketRuTranscription": "р",
    "enTranscription": "r",
    "meaning": "лодка",
    "syllables": [
      {
        "syllable": "ระ",
        "ruTr": "а",
        "phuketRuTr": "ла",
        "enTr": "a",
        "example": "ระ — (редко)",
        "examplePhuketRu": "ла"
      },
      {
        "syllable": "รา",
        "ruTr": "а:",
        "phuketRuTr": "ла:",
        "enTr": "aa",
        "example": "รา — (редко)",
        "examplePhuketRu": "ла:"
      },
      {
        "syllable": "ริ",
        "ruTr": "и",
        "phuketRuTr": "ли",
        "enTr": "i",
        "example": "ริ — (редко)",
        "examplePhuketRu": "ли"
      },
      {
        "syllable": "รี",
        "ruTr": "и:",
        "phuketRuTr": "ли:",
        "enTr": "ii",
        "example": "รี — (редко)",
        "examplePhuketRu": "ли:"
      },
      {
        "syllable": "รุ",
        "ruTr": "у",
        "phuketRuTr": "лу",
        "enTr": "u",
        "example": "รุ — (редко)",
        "examplePhuketRu": "лу"
      },
      {
        "syllable": "รู",
        "ruTr": "у:",
        "phuketRuTr": "лу:",
        "enTr": "uu",
        "example": "รู — (редко)",
        "examplePhuketRu": "лу:"
      },
      {
        "syllable": "เระ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "e",
        "example": "เร — (редко)",
        "examplePhuketRu": "лэ"
      },
      {
        "syllable": "เร",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "ee",
        "example": "เร — (редко)",
        "examplePhuketRu": "лэ:"
      },
      {
        "syllable": "แระ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "ae",
        "example": "แระ — (редко)",
        "examplePhuketRu": "лэ"
      },
      {
        "syllable": "แร",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "aae",
        "example": "แร — (редко)",
        "examplePhuketRu": "лэ:"
      },
      {
        "syllable": "โระ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "o",
        "example": "โระ — (редко)",
        "examplePhuketRu": "ло"
      },
      {
        "syllable": "โร",
        "ruTr": "о:",
        "phuketRuTr": "ло:",
        "enTr": "oo",
        "example": "โร — (редко)",
        "examplePhuketRu": "ло:"
      },
      {
        "syllable": "รอ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "aw",
        "example": "รอ — (редко)",
        "examplePhuketRu": "ло"
      },
      {
        "syllable": "รำ",
        "ruTr": "ам",
        "phuketRuTr": "лам",
        "enTr": "am",
        "example": "รำ — (редко)",
        "examplePhuketRu": "лам"
      },
      {
        "syllable": "ใร",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ใร — слог",
        "examplePhuketRu": "лай"
      },
      {
        "syllable": "ไร",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ไร — слог",
        "examplePhuketRu": "лай"
      }
    ],
    "words": [
      {
        "thai": "รัก",
        "ruTr": "рак",
        "phuketRuTr": "лак",
        "enTr": "rak",
        "translation": "любить"
      },
      {
        "thai": "เรียน",
        "ruTr": "риан",
        "phuketRuTr": "лиан",
        "enTr": "rian",
        "translation": "учиться"
      },
      {
        "thai": "รู้",
        "ruTr": "ру:",
        "phuketRuTr": "лу:",
        "enTr": "ruu",
        "translation": "знать"
      },
      {
        "thai": "ร้าน",
        "ruTr": "ра:н",
        "phuketRuTr": "ла:н",
        "enTr": "raan",
        "translation": "магазин"
      }
    ],
    "phrases": [
      {
        "thai": "รักเมืองไทย",
        "ruTr": "рак муанг тхай",
        "phuketRuTr": "лак муанк тай",
        "enTr": "rak mueang thai",
        "translation": "люблю Таиланд"
      },
      {
        "thai": "เรียนภาษาไทย",
        "ruTr": "риан пха:са: тхай",
        "phuketRuTr": "лиан па:са: тай",
        "enTr": "rian phasaa thai",
        "translation": "учить тайский"
      }
    ]
  },
  {
    "id": 34,
    "letter": "ล",
    "thaiName": "ลอ ลิง",
    "ruTranscription": "л",
    "phuketRuTranscription": "л",
    "enTranscription": "l",
    "meaning": "обезьяна",
    "syllables": [
      {
        "syllable": "ละ",
        "ruTr": "а",
        "phuketRuTr": "ла",
        "enTr": "a",
        "example": "ละ — частица",
        "examplePhuketRu": "ла"
      },
      {
        "syllable": "ลา",
        "ruTr": "а:",
        "phuketRuTr": "ла:",
        "enTr": "aa",
        "example": "ลา — (редко)",
        "examplePhuketRu": "ла:"
      },
      {
        "syllable": "ลิ",
        "ruTr": "и",
        "phuketRuTr": "ли",
        "enTr": "i",
        "example": "ลิ — (редко)",
        "examplePhuketRu": "ли"
      },
      {
        "syllable": "ลี",
        "ruTr": "и:",
        "phuketRuTr": "ли:",
        "enTr": "ii",
        "example": "ลี — (редко)",
        "examplePhuketRu": "ли:"
      },
      {
        "syllable": "ลุ",
        "ruTr": "у",
        "phuketRuTr": "лу",
        "enTr": "u",
        "example": "ลุ — (редко)",
        "examplePhuketRu": "лу"
      },
      {
        "syllable": "ลู",
        "ruTr": "у:",
        "phuketRuTr": "лу:",
        "enTr": "uu",
        "example": "ลู — (редко)",
        "examplePhuketRu": "лу:"
      },
      {
        "syllable": "เละ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "e",
        "example": "เละ — (редко)",
        "examplePhuketRu": "лэ"
      },
      {
        "syllable": "เล",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "ee",
        "example": "เล — (редко)",
        "examplePhuketRu": "лэ:"
      },
      {
        "syllable": "และ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "ae",
        "example": "และ — (редко)",
        "examplePhuketRu": "лэ"
      },
      {
        "syllable": "แล",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "aae",
        "example": "แล — (редко)",
        "examplePhuketRu": "лэ:"
      },
      {
        "syllable": "โละ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "o",
        "example": "โละ — (редко)",
        "examplePhuketRu": "ло"
      },
      {
        "syllable": "โล",
        "ruTr": "о:",
        "phuketRuTr": "ло:",
        "enTr": "oo",
        "example": "โล — (редко)",
        "examplePhuketRu": "ло:"
      },
      {
        "syllable": "ลอ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "aw",
        "example": "ลอ — (редко)",
        "examplePhuketRu": "ло"
      },
      {
        "syllable": "ลำ",
        "ruTr": "ам",
        "phuketRuTr": "лам",
        "enTr": "am",
        "example": "ลำ — (редко)",
        "examplePhuketRu": "лам"
      },
      {
        "syllable": "ใล",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ใล — слог",
        "examplePhuketRu": "лай"
      },
      {
        "syllable": "ไล",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ไล — слог",
        "examplePhuketRu": "лай"
      }
    ],
    "words": [
      {
        "thai": "ลอง",
        "ruTr": "ло:нг",
        "phuketRuTr": "ло:нк",
        "enTr": "long",
        "translation": "попробовать"
      },
      {
        "thai": "เล่น",
        "ruTr": "лен",
        "phuketRuTr": "лен",
        "enTr": "len",
        "translation": "играть"
      },
      {
        "thai": "ลูก",
        "ruTr": "лу:к",
        "phuketRuTr": "лу:к",
        "enTr": "luuk",
        "translation": "ребёнок"
      },
      {
        "thai": "ลาก",
        "ruTr": "ла:к",
        "phuketRuTr": "ла:к",
        "enTr": "laak",
        "translation": "тянуть"
      }
    ],
    "phrases": [
      {
        "thai": "ลองดูก่อน",
        "ruTr": "ло:нг ду: го:н",
        "phuketRuTr": "ло:нк ду: ко:н",
        "enTr": "long duu gon",
        "translation": "попробуй сначала"
      },
      {
        "thai": "เล่นกีฬา",
        "ruTr": "лен ки:ла:",
        "phuketRuTr": "лен ки:ла:",
        "enTr": "len kiilaa",
        "translation": "заниматься спортом"
      }
    ]
  },
  {
    "id": 35,
    "letter": "ว",
    "thaiName": "วอ แหวน",
    "ruTranscription": "в",
    "phuketRuTranscription": "в",
    "enTranscription": "w",
    "meaning": "кольцо",
    "syllables": [
      {
        "syllable": "วะ",
        "ruTr": "а",
        "phuketRuTr": "ва",
        "enTr": "a",
        "example": "วะ — (редко)",
        "examplePhuketRu": "ва"
      },
      {
        "syllable": "วา",
        "ruTr": "а:",
        "phuketRuTr": "ва:",
        "enTr": "aa",
        "example": "วา — (редко)",
        "examplePhuketRu": "ва:"
      },
      {
        "syllable": "วิ",
        "ruTr": "и",
        "phuketRuTr": "ви",
        "enTr": "i",
        "example": "วิ — (редко)",
        "examplePhuketRu": "ви"
      },
      {
        "syllable": "วี",
        "ruTr": "и:",
        "phuketRuTr": "ви:",
        "enTr": "ii",
        "example": "วี — (редко)",
        "examplePhuketRu": "ви:"
      },
      {
        "syllable": "วุ",
        "ruTr": "у",
        "phuketRuTr": "ву",
        "enTr": "u",
        "example": "วุ — (редко)",
        "examplePhuketRu": "ву"
      },
      {
        "syllable": "วู",
        "ruTr": "у:",
        "phuketRuTr": "ву:",
        "enTr": "uu",
        "example": "วู — (редко)",
        "examplePhuketRu": "ву:"
      },
      {
        "syllable": "เวะ",
        "ruTr": "э",
        "phuketRuTr": "вэ",
        "enTr": "e",
        "example": "เว — (редко)",
        "examplePhuketRu": "вэ"
      },
      {
        "syllable": "เว",
        "ruTr": "э:",
        "phuketRuTr": "вэ:",
        "enTr": "ee",
        "example": "เว — (редко)",
        "examplePhuketRu": "вэ:"
      },
      {
        "syllable": "แวะ",
        "ruTr": "э",
        "phuketRuTr": "вэ",
        "enTr": "ae",
        "example": "แวะ — (редко)",
        "examplePhuketRu": "вэ"
      },
      {
        "syllable": "แว",
        "ruTr": "э:",
        "phuketRuTr": "вэ:",
        "enTr": "aae",
        "example": "แว — (редко)",
        "examplePhuketRu": "вэ:"
      },
      {
        "syllable": "โวะ",
        "ruTr": "о",
        "phuketRuTr": "во",
        "enTr": "o",
        "example": "โวะ — (редко)",
        "examplePhuketRu": "во"
      },
      {
        "syllable": "โว",
        "ruTr": "о:",
        "phuketRuTr": "во:",
        "enTr": "oo",
        "example": "โว — (редко)",
        "examplePhuketRu": "во:"
      },
      {
        "syllable": "วอ",
        "ruTr": "о",
        "phuketRuTr": "во",
        "enTr": "aw",
        "example": "วอ — (редко)",
        "examplePhuketRu": "во"
      },
      {
        "syllable": "วำ",
        "ruTr": "ам",
        "phuketRuTr": "вам",
        "enTr": "am",
        "example": "วำ — (редко)",
        "examplePhuketRu": "вам"
      },
      {
        "syllable": "ใว",
        "ruTr": "ай",
        "phuketRuTr": "вай",
        "enTr": "ai",
        "example": "ใว — слог",
        "examplePhuketRu": "вай"
      },
      {
        "syllable": "ไว",
        "ruTr": "ай",
        "phuketRuTr": "вай",
        "enTr": "ai",
        "example": "ไว — слог",
        "examplePhuketRu": "вай"
      }
    ],
    "words": [
      {
        "thai": "วัน",
        "ruTr": "ван",
        "phuketRuTr": "ван",
        "enTr": "wan",
        "translation": "день"
      },
      {
        "thai": "เวลา",
        "ruTr": "вела:",
        "phuketRuTr": "вела:",
        "enTr": "weelaa",
        "translation": "время"
      },
      {
        "thai": "วิ่ง",
        "ruTr": "вйнг",
        "phuketRuTr": "вйнк",
        "enTr": "wing",
        "translation": "бегать"
      },
      {
        "thai": "ว่า",
        "ruTr": "ва:",
        "phuketRuTr": "ва:",
        "enTr": "waa",
        "translation": "говорить / что"
      }
    ],
    "phrases": [
      {
        "thai": "วันนี้",
        "ruTr": "ван ни:",
        "phuketRuTr": "ван ни:",
        "enTr": "wan nii",
        "translation": "сегодня"
      },
      {
        "thai": "วันเกิด",
        "ruTr": "ван гəт",
        "phuketRuTr": "ван кəт",
        "enTr": "wan goet",
        "translation": "день рождения"
      }
    ]
  },
  {
    "id": 36,
    "letter": "ศ",
    "thaiName": "ศอ ศาลา",
    "ruTranscription": "с",
    "phuketRuTranscription": "с",
    "enTranscription": "s",
    "meaning": "беседка",
    "syllables": [
      {
        "syllable": "ศะ",
        "ruTr": "а",
        "phuketRuTr": "са",
        "enTr": "a",
        "example": "ศะ — (редко)",
        "examplePhuketRu": "са"
      },
      {
        "syllable": "ศา",
        "ruTr": "а:",
        "phuketRuTr": "са:",
        "enTr": "aa",
        "example": "ศา — (редко)",
        "examplePhuketRu": "са:"
      },
      {
        "syllable": "ศิ",
        "ruTr": "и",
        "phuketRuTr": "си",
        "enTr": "i",
        "example": "ศิ — (редко)",
        "examplePhuketRu": "си"
      },
      {
        "syllable": "ศี",
        "ruTr": "и:",
        "phuketRuTr": "си:",
        "enTr": "ii",
        "example": "ศี — (редко)",
        "examplePhuketRu": "си:"
      },
      {
        "syllable": "ศุ",
        "ruTr": "у",
        "phuketRuTr": "су",
        "enTr": "u",
        "example": "ศุ — (редко)",
        "examplePhuketRu": "су"
      },
      {
        "syllable": "ศู",
        "ruTr": "у:",
        "phuketRuTr": "су:",
        "enTr": "uu",
        "example": "ศู — (редко)",
        "examplePhuketRu": "су:"
      },
      {
        "syllable": "เศะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "e",
        "example": "เศะ — (редко)",
        "examplePhuketRu": "сэ"
      },
      {
        "syllable": "เศ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "ee",
        "example": "เศ — (редко)",
        "examplePhuketRu": "сэ:"
      },
      {
        "syllable": "แศะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "ae",
        "example": "แศะ — (редко)",
        "examplePhuketRu": "сэ"
      },
      {
        "syllable": "แศ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "aae",
        "example": "แศ — (редко)",
        "examplePhuketRu": "сэ:"
      },
      {
        "syllable": "โศะ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "o",
        "example": "โศะ — (редко)",
        "examplePhuketRu": "со"
      },
      {
        "syllable": "โศ",
        "ruTr": "о:",
        "phuketRuTr": "со:",
        "enTr": "oo",
        "example": "โศ — (редко)",
        "examplePhuketRu": "со:"
      },
      {
        "syllable": "ศอ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "aw",
        "example": "ศอ — (редко)",
        "examplePhuketRu": "со"
      },
      {
        "syllable": "ศำ",
        "ruTr": "ам",
        "phuketRuTr": "сам",
        "enTr": "am",
        "example": "ศำ — (редко)",
        "examplePhuketRu": "сам"
      },
      {
        "syllable": "ใศ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ใศ — слог",
        "examplePhuketRu": "сай"
      },
      {
        "syllable": "ไศ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ไศ — слог",
        "examplePhuketRu": "сай"
      }
    ],
    "words": [
      {
        "thai": "ศาลา",
        "ruTr": "са:ла:",
        "phuketRuTr": "са:ла:",
        "enTr": "saalaa",
        "translation": "беседка / павильон"
      },
      {
        "thai": "ศิลปะ",
        "ruTr": "синлапа",
        "phuketRuTr": "синлапа",
        "enTr": "sinlapa",
        "translation": "искусство"
      },
      {
        "thai": "ศาสนา",
        "ruTr": "са:тсана:",
        "phuketRuTr": "са:тсана:",
        "enTr": "saatsanaa",
        "translation": "религия"
      },
      {
        "thai": "ศพ",
        "ruTr": "соп",
        "phuketRuTr": "соп",
        "enTr": "sop",
        "translation": "труп / покойник"
      }
    ],
    "phrases": [
      {
        "thai": "ศาลาประชาคม",
        "ruTr": "са:ла: прачхакхом",
        "phuketRuTr": "са:ла: плачаком",
        "enTr": "saalaa prachakhom",
        "translation": "общественный павильон"
      },
      {
        "thai": "ศิลปะไทย",
        "ruTr": "синлапа тхай",
        "phuketRuTr": "синлапа тай",
        "enTr": "sinlapa thai",
        "translation": "тайское искусство"
      }
    ]
  },
  {
    "id": 37,
    "letter": "ษ",
    "thaiName": "ษอ ฤๅษี",
    "ruTranscription": "с",
    "phuketRuTranscription": "с",
    "enTranscription": "s",
    "meaning": "отшельник",
    "syllables": [
      {
        "syllable": "ษะ",
        "ruTr": "а",
        "phuketRuTr": "са",
        "enTr": "a",
        "example": "ษะ — (редко)",
        "examplePhuketRu": "са"
      },
      {
        "syllable": "ษา",
        "ruTr": "а:",
        "phuketRuTr": "са:",
        "enTr": "aa",
        "example": "ษา — (редко)",
        "examplePhuketRu": "са:"
      },
      {
        "syllable": "ษิ",
        "ruTr": "и",
        "phuketRuTr": "си",
        "enTr": "i",
        "example": "ษิ — (редко)",
        "examplePhuketRu": "си"
      },
      {
        "syllable": "ษี",
        "ruTr": "и:",
        "phuketRuTr": "си:",
        "enTr": "ii",
        "example": "ษี — (редко)",
        "examplePhuketRu": "си:"
      },
      {
        "syllable": "ษุ",
        "ruTr": "у",
        "phuketRuTr": "су",
        "enTr": "u",
        "example": "ษุ — (редко)",
        "examplePhuketRu": "су"
      },
      {
        "syllable": "ษู",
        "ruTr": "у:",
        "phuketRuTr": "су:",
        "enTr": "uu",
        "example": "ษู — (редко)",
        "examplePhuketRu": "су:"
      },
      {
        "syllable": "เษะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "e",
        "example": "เษะ — (редко)",
        "examplePhuketRu": "сэ"
      },
      {
        "syllable": "เษ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "ee",
        "example": "เษ — (редко)",
        "examplePhuketRu": "сэ:"
      },
      {
        "syllable": "แษะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "ae",
        "example": "แษะ — (редко)",
        "examplePhuketRu": "сэ"
      },
      {
        "syllable": "แษ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "aae",
        "example": "แษ — (редко)",
        "examplePhuketRu": "сэ:"
      },
      {
        "syllable": "โษะ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "o",
        "example": "โษะ — (редко)",
        "examplePhuketRu": "со"
      },
      {
        "syllable": "โษ",
        "ruTr": "о:",
        "phuketRuTr": "со:",
        "enTr": "oo",
        "example": "โษ — (редко)",
        "examplePhuketRu": "со:"
      },
      {
        "syllable": "ษอ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "aw",
        "example": "ษอ — (редко)",
        "examplePhuketRu": "со"
      },
      {
        "syllable": "ษำ",
        "ruTr": "ам",
        "phuketRuTr": "сам",
        "enTr": "am",
        "example": "ษำ — (редко)",
        "examplePhuketRu": "сам"
      },
      {
        "syllable": "ใษ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ใษ — слог",
        "examplePhuketRu": "сай"
      },
      {
        "syllable": "ไษ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ไษ — слог",
        "examplePhuketRu": "сай"
      }
    ],
    "words": [
      {
        "thai": "ฤๅษี",
        "ruTr": "рысии",
        "phuketRuTr": "лысии",
        "enTr": "rueesii",
        "translation": "отшельник / мудрец"
      },
      {
        "thai": "ฤดู",
        "ruTr": "рыду:",
        "phuketRuTr": "лыду:",
        "enTr": "ruedu",
        "translation": "сезон / время года"
      },
      {
        "thai": "ฤทธิ์",
        "ruTr": "рит",
        "phuketRuTr": "лит",
        "enTr": "rit",
        "translation": "сила / могущество"
      },
      {
        "thai": "ฤกษ์",
        "ruTr": "рык",
        "phuketRuTr": "лык",
        "enTr": "ruek",
        "translation": "благоприятный момент"
      }
    ],
    "phrases": [
      {
        "thai": "ฤดูร้อน",
        "ruTr": "рыду: ро:н",
        "phuketRuTr": "лыду: ло:н",
        "enTr": "ruedu ron",
        "translation": "летний сезон"
      },
      {
        "thai": "ฤกษ์ดี",
        "ruTr": "рык ди:",
        "phuketRuTr": "лык ди:",
        "enTr": "ruek dii",
        "translation": "удачный момент"
      }
    ]
  },
  {
    "id": 38,
    "letter": "ส",
    "thaiName": "สอ เสือ",
    "ruTranscription": "с",
    "phuketRuTranscription": "с",
    "enTranscription": "s",
    "meaning": "тигр",
    "syllables": [
      {
        "syllable": "สะ",
        "ruTr": "а",
        "phuketRuTr": "са",
        "enTr": "a",
        "example": "สะ — (редко)",
        "examplePhuketRu": "са"
      },
      {
        "syllable": "สา",
        "ruTr": "а:",
        "phuketRuTr": "са:",
        "enTr": "aa",
        "example": "สา — (редко)",
        "examplePhuketRu": "са:"
      },
      {
        "syllable": "สิ",
        "ruTr": "и",
        "phuketRuTr": "си",
        "enTr": "i",
        "example": "สิ — (редко)",
        "examplePhuketRu": "си"
      },
      {
        "syllable": "สี",
        "ruTr": "и:",
        "phuketRuTr": "си:",
        "enTr": "ii",
        "example": "สี — (редко)",
        "examplePhuketRu": "си:"
      },
      {
        "syllable": "สุ",
        "ruTr": "у",
        "phuketRuTr": "су",
        "enTr": "u",
        "example": "สุ — (редко)",
        "examplePhuketRu": "су"
      },
      {
        "syllable": "สู",
        "ruTr": "у:",
        "phuketRuTr": "су:",
        "enTr": "uu",
        "example": "สู — (редко)",
        "examplePhuketRu": "су:"
      },
      {
        "syllable": "เสะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "e",
        "example": "เสะ — (редко)",
        "examplePhuketRu": "сэ"
      },
      {
        "syllable": "เส",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "ee",
        "example": "เส — (редко)",
        "examplePhuketRu": "сэ:"
      },
      {
        "syllable": "แสะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "ae",
        "example": "แสะ — (редко)",
        "examplePhuketRu": "сэ"
      },
      {
        "syllable": "แส",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "aae",
        "example": "แส — (редко)",
        "examplePhuketRu": "сэ:"
      },
      {
        "syllable": "โสะ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "o",
        "example": "โสะ — (редко)",
        "examplePhuketRu": "со"
      },
      {
        "syllable": "โส",
        "ruTr": "о:",
        "phuketRuTr": "со:",
        "enTr": "oo",
        "example": "โส — (редко)",
        "examplePhuketRu": "со:"
      },
      {
        "syllable": "สอ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "aw",
        "example": "สอ — (редко)",
        "examplePhuketRu": "со"
      },
      {
        "syllable": "สำ",
        "ruTr": "ам",
        "phuketRuTr": "сам",
        "enTr": "am",
        "example": "สำ — (редко)",
        "examplePhuketRu": "сам"
      },
      {
        "syllable": "ใส",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ใส — слог",
        "examplePhuketRu": "сай"
      },
      {
        "syllable": "ไส",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ไส — слог",
        "examplePhuketRu": "сай"
      }
    ],
    "words": [
      {
        "thai": "สวัสดี",
        "ruTr": "савáтди:",
        "phuketRuTr": "саватди",
        "enTr": "sawatdii",
        "translation": "здравствуйте"
      },
      {
        "thai": "สาม",
        "ruTr": "са:м",
        "phuketRuTr": "са:м",
        "enTr": "saam",
        "translation": "три"
      },
      {
        "thai": "สวย",
        "ruTr": "суай",
        "phuketRuTr": "суай",
        "enTr": "suai",
        "translation": "красивый"
      },
      {
        "thai": "สิ่ง",
        "ruTr": "синг",
        "phuketRuTr": "синк",
        "enTr": "sing",
        "translation": "вещь"
      }
    ],
    "phrases": [
      {
        "thai": "สวัสดีครับ",
        "ruTr": "савáтди: кхраб",
        "phuketRuTr": "саватди кап",
        "enTr": "sawatdii khrap",
        "translation": "здравствуйте (м.р.)"
      },
      {
        "thai": "สวยมาก",
        "ruTr": "суай ма:к",
        "phuketRuTr": "суай ма:к",
        "enTr": "suai maak",
        "translation": "очень красиво"
      }
    ]
  },
  {
    "id": 39,
    "letter": "ห",
    "thaiName": "หอ หีบ",
    "ruTranscription": "х",
    "phuketRuTranscription": "х",
    "enTranscription": "h",
    "meaning": "сундук",
    "syllables": [
      {
        "syllable": "หะ",
        "ruTr": "а",
        "phuketRuTr": "ха",
        "enTr": "a",
        "example": "หะ — (редко)",
        "examplePhuketRu": "ха"
      },
      {
        "syllable": "หา",
        "ruTr": "а:",
        "phuketRuTr": "ха:",
        "enTr": "aa",
        "example": "หา — искать",
        "examplePhuketRu": "ха:"
      },
      {
        "syllable": "หิ",
        "ruTr": "и",
        "phuketRuTr": "хи",
        "enTr": "i",
        "example": "หิ — (редко)",
        "examplePhuketRu": "хи"
      },
      {
        "syllable": "หี",
        "ruTr": "и:",
        "phuketRuTr": "хи:",
        "enTr": "ii",
        "example": "หี — (редко)",
        "examplePhuketRu": "хи:"
      },
      {
        "syllable": "หุ",
        "ruTr": "у",
        "phuketRuTr": "ху",
        "enTr": "u",
        "example": "หุ — (редко)",
        "examplePhuketRu": "ху"
      },
      {
        "syllable": "หู",
        "ruTr": "у:",
        "phuketRuTr": "ху:",
        "enTr": "uu",
        "example": "หู — ухо",
        "examplePhuketRu": "ху:"
      },
      {
        "syllable": "เหะ",
        "ruTr": "э",
        "phuketRuTr": "хэ",
        "enTr": "e",
        "example": "เหะ — (редко)",
        "examplePhuketRu": "хэ"
      },
      {
        "syllable": "เห",
        "ruTr": "э:",
        "phuketRuTr": "хэ:",
        "enTr": "ee",
        "example": "เห — (редко)",
        "examplePhuketRu": "хэ:"
      },
      {
        "syllable": "แหะ",
        "ruTr": "э",
        "phuketRuTr": "хэ",
        "enTr": "ae",
        "example": "แหะ — (редко)",
        "examplePhuketRu": "хэ"
      },
      {
        "syllable": "แห",
        "ruTr": "э:",
        "phuketRuTr": "хэ:",
        "enTr": "aae",
        "example": "แห — (редко)",
        "examplePhuketRu": "хэ:"
      },
      {
        "syllable": "โหะ",
        "ruTr": "о",
        "phuketRuTr": "хо",
        "enTr": "o",
        "example": "โหะ — (редко)",
        "examplePhuketRu": "хо"
      },
      {
        "syllable": "โห",
        "ruTr": "о:",
        "phuketRuTr": "хо:",
        "enTr": "oo",
        "example": "โห — (редко)",
        "examplePhuketRu": "хо:"
      },
      {
        "syllable": "หอ",
        "ruTr": "о",
        "phuketRuTr": "хо",
        "enTr": "aw",
        "example": "หอ — (редко)",
        "examplePhuketRu": "хо"
      },
      {
        "syllable": "หำ",
        "ruTr": "ам",
        "phuketRuTr": "хам",
        "enTr": "am",
        "example": "หำ — (редко)",
        "examplePhuketRu": "хам"
      },
      {
        "syllable": "ให",
        "ruTr": "ай",
        "phuketRuTr": "хай",
        "enTr": "ai",
        "example": "ให — слог",
        "examplePhuketRu": "хай"
      },
      {
        "syllable": "ไห",
        "ruTr": "ай",
        "phuketRuTr": "хай",
        "enTr": "ai",
        "example": "ไห — слог",
        "examplePhuketRu": "хай"
      }
    ],
    "words": [
      {
        "thai": "หิว",
        "ruTr": "хйу",
        "phuketRuTr": "хйу",
        "enTr": "hiu",
        "translation": "голодный"
      },
      {
        "thai": "หา",
        "ruTr": "ха:",
        "phuketRuTr": "ха:",
        "enTr": "haa",
        "translation": "искать"
      },
      {
        "thai": "หัว",
        "ruTr": "хуа",
        "phuketRuTr": "хуа",
        "enTr": "hua",
        "translation": "голова"
      },
      {
        "thai": "ห้อง",
        "ruTr": "хо:нг",
        "phuketRuTr": "хо:нк",
        "enTr": "hong",
        "translation": "комната"
      }
    ],
    "phrases": [
      {
        "thai": "หิวข้าว",
        "ruTr": "хйу кха:o",
        "phuketRuTr": "хйу ка:o",
        "enTr": "hiu khao",
        "translation": "хочу есть"
      },
      {
        "thai": "ห้องน้ำ",
        "ruTr": "хо:нг на:м",
        "phuketRuTr": "хо:нк на:м",
        "enTr": "hong naam",
        "translation": "туалет / ванная"
      }
    ]
  },
  {
    "id": 40,
    "letter": "ฬ",
    "thaiName": "ฬอ จุฬา",
    "ruTranscription": "л",
    "phuketRuTranscription": "л",
    "enTranscription": "l",
    "meaning": "воздушный змей",
    "syllables": [
      {
        "syllable": "ฬะ",
        "ruTr": "а",
        "phuketRuTr": "ла",
        "enTr": "a",
        "example": "ฬะ — (редко)",
        "examplePhuketRu": "ла"
      },
      {
        "syllable": "ฬา",
        "ruTr": "а:",
        "phuketRuTr": "ла:",
        "enTr": "aa",
        "example": "ฬา — (редко)",
        "examplePhuketRu": "ла:"
      },
      {
        "syllable": "ฬิ",
        "ruTr": "и",
        "phuketRuTr": "ли",
        "enTr": "i",
        "example": "ฬิ — (редко)",
        "examplePhuketRu": "ли"
      },
      {
        "syllable": "ฬี",
        "ruTr": "и:",
        "phuketRuTr": "ли:",
        "enTr": "ii",
        "example": "ฬี — (редко)",
        "examplePhuketRu": "ли:"
      },
      {
        "syllable": "ฬุ",
        "ruTr": "у",
        "phuketRuTr": "лу",
        "enTr": "u",
        "example": "ฬุ — (редко)",
        "examplePhuketRu": "лу"
      },
      {
        "syllable": "ฬู",
        "ruTr": "у:",
        "phuketRuTr": "лу:",
        "enTr": "uu",
        "example": "ฬู — (редко)",
        "examplePhuketRu": "лу:"
      },
      {
        "syllable": "เฬะ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "e",
        "example": "เฬะ — (редко)",
        "examplePhuketRu": "лэ"
      },
      {
        "syllable": "เฬ",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "ee",
        "example": "เฬ — (редко)",
        "examplePhuketRu": "лэ:"
      },
      {
        "syllable": "แฬะ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "ae",
        "example": "แฬะ — (редко)",
        "examplePhuketRu": "лэ"
      },
      {
        "syllable": "แฬ",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "aae",
        "example": "แฬ — (редко)",
        "examplePhuketRu": "лэ:"
      },
      {
        "syllable": "โฬะ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "o",
        "example": "โฬะ — (редко)",
        "examplePhuketRu": "ло"
      },
      {
        "syllable": "โฬ",
        "ruTr": "о:",
        "phuketRuTr": "ло:",
        "enTr": "oo",
        "example": "โฬ — (редко)",
        "examplePhuketRu": "ло:"
      },
      {
        "syllable": "ฬอ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "aw",
        "example": "ฬอ — (редко)",
        "examplePhuketRu": "ло"
      },
      {
        "syllable": "ฬำ",
        "ruTr": "ам",
        "phuketRuTr": "лам",
        "enTr": "am",
        "example": "ฬำ — (редко)",
        "examplePhuketRu": "лам"
      },
      {
        "syllable": "ใฬ",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ใฬ — слог",
        "examplePhuketRu": "лай"
      },
      {
        "syllable": "ไฬ",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ไฬ — слог",
        "examplePhuketRu": "лай"
      }
    ],
    "words": [
      {
        "thai": "จุฬา",
        "ruTr": "чхула:",
        "phuketRuTr": "чула:",
        "enTr": "chulaa",
        "translation": "воздушный змей"
      },
      {
        "thai": "กุฬา",
        "ruTr": "кхула:",
        "phuketRuTr": "кула:",
        "enTr": "khulaa",
        "translation": "спорт (книжн.)"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "в основном в заимствованиях"
      }
    ],
    "phrases": [
      {
        "thai": "เล่นจุฬา",
        "ruTr": "лен чхула:",
        "phuketRuTr": "лен чула:",
        "enTr": "len chulaa",
        "translation": "запускать змея"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква, мало слов"
      }
    ]
  },
  {
    "id": 41,
    "letter": "อ",
    "thaiName": "ออ อ่าง",
    "ruTranscription": "—",
    "phuketRuTranscription": "—",
    "enTranscription": "silent/glottal",
    "meaning": "таз",
    "syllables": [
      {
        "syllable": "อะ",
        "ruTr": "а",
        "phuketRuTr": "а",
        "enTr": "a",
        "example": "อะ — (редко)",
        "examplePhuketRu": "а"
      },
      {
        "syllable": "อา",
        "ruTr": "а:",
        "phuketRuTr": "а:",
        "enTr": "aa",
        "example": "อา — (редко)",
        "examplePhuketRu": "а:"
      },
      {
        "syllable": "อิ",
        "ruTr": "и",
        "phuketRuTr": "и",
        "enTr": "i",
        "example": "อิ — (редко)",
        "examplePhuketRu": "и"
      },
      {
        "syllable": "อี",
        "ruTr": "и:",
        "phuketRuTr": "и:",
        "enTr": "ii",
        "example": "อี — (редко)",
        "examplePhuketRu": "и:"
      },
      {
        "syllable": "อุ",
        "ruTr": "у",
        "phuketRuTr": "у",
        "enTr": "u",
        "example": "อุ — (редко)",
        "examplePhuketRu": "у"
      },
      {
        "syllable": "อู",
        "ruTr": "у:",
        "phuketRuTr": "у:",
        "enTr": "uu",
        "example": "อู — (редко)",
        "examplePhuketRu": "у:"
      },
      {
        "syllable": "เอะ",
        "ruTr": "э",
        "phuketRuTr": "э",
        "enTr": "e",
        "example": "เอะ — (редко)",
        "examplePhuketRu": "э"
      },
      {
        "syllable": "เอ",
        "ruTr": "э:",
        "phuketRuTr": "э:",
        "enTr": "ee",
        "example": "เอ — (редко)",
        "examplePhuketRu": "э:"
      },
      {
        "syllable": "แอะ",
        "ruTr": "э",
        "phuketRuTr": "э",
        "enTr": "ae",
        "example": "แอะ — (редко)",
        "examplePhuketRu": "э"
      },
      {
        "syllable": "แอ",
        "ruTr": "э:",
        "phuketRuTr": "э:",
        "enTr": "aae",
        "example": "แอ — (редко)",
        "examplePhuketRu": "э:"
      },
      {
        "syllable": "โอะ",
        "ruTr": "о",
        "phuketRuTr": "о",
        "enTr": "o",
        "example": "โอะ — (редко)",
        "examplePhuketRu": "о"
      },
      {
        "syllable": "โอ",
        "ruTr": "о:",
        "phuketRuTr": "о:",
        "enTr": "oo",
        "example": "โอ — (редко)",
        "examplePhuketRu": "о:"
      },
      {
        "syllable": "ออ",
        "ruTr": "о",
        "phuketRuTr": "о",
        "enTr": "aw",
        "example": "ออ — (редко)",
        "examplePhuketRu": "о"
      },
      {
        "syllable": "อำ",
        "ruTr": "ам",
        "phuketRuTr": "ам",
        "enTr": "am",
        "example": "อำ — (редко)",
        "examplePhuketRu": "ам"
      },
      {
        "syllable": "ใอ",
        "ruTr": "ай",
        "phuketRuTr": "ай",
        "enTr": "ai",
        "example": "ใอ — слог",
        "examplePhuketRu": "ай"
      },
      {
        "syllable": "ไอ",
        "ruTr": "ай",
        "phuketRuTr": "ай",
        "enTr": "ai",
        "example": "ไอ — слог",
        "examplePhuketRu": "ай"
      }
    ],
    "words": [
      {
        "thai": "อยู่",
        "ruTr": "ю:",
        "phuketRuTr": "ю:",
        "enTr": "yuu",
        "translation": "быть / находиться"
      },
      {
        "thai": "อาหาร",
        "ruTr": "а:ха:н",
        "phuketRuTr": "а:ха:н",
        "enTr": "aahaan",
        "translation": "еда"
      },
      {
        "thai": "อ่าน",
        "ruTr": "а:н",
        "phuketRuTr": "а:н",
        "enTr": "aan",
        "translation": "читать"
      },
      {
        "thai": "อร่อย",
        "ruTr": "аро:й",
        "phuketRuTr": "ало:й",
        "enTr": "arooi",
        "translation": "вкусный"
      }
    ],
    "phrases": [
      {
        "thai": "อยู่ที่ไหน",
        "ruTr": "ю: тхи: най",
        "phuketRuTr": "ю: ти: най",
        "enTr": "yuu thii nai",
        "translation": "Где ты?"
      },
      {
        "thai": "อาหารอร่อย",
        "ruTr": "а:ха:н аро:й",
        "phuketRuTr": "а:ха:н ало:й",
        "enTr": "aahaan arooi",
        "translation": "вкусная еда"
      }
    ]
  },
  {
    "id": 42,
    "letter": "ฮ",
    "thaiName": "ฮอ นกฮูก",
    "ruTranscription": "х",
    "phuketRuTranscription": "х",
    "enTranscription": "h",
    "meaning": "сова",
    "syllables": [
      {
        "syllable": "ฮะ",
        "ruTr": "а",
        "phuketRuTr": "ха",
        "enTr": "a",
        "example": "ฮะ — (редко)",
        "examplePhuketRu": "ха"
      },
      {
        "syllable": "ฮา",
        "ruTr": "а:",
        "phuketRuTr": "ха:",
        "enTr": "aa",
        "example": "ฮา — (редко)",
        "examplePhuketRu": "ха:"
      },
      {
        "syllable": "ฮิ",
        "ruTr": "и",
        "phuketRuTr": "хи",
        "enTr": "i",
        "example": "ฮิ — (редко)",
        "examplePhuketRu": "хи"
      },
      {
        "syllable": "ฮี",
        "ruTr": "и:",
        "phuketRuTr": "хи:",
        "enTr": "ii",
        "example": "ฮี — (редко)",
        "examplePhuketRu": "хи:"
      },
      {
        "syllable": "ฮุ",
        "ruTr": "у",
        "phuketRuTr": "ху",
        "enTr": "u",
        "example": "ฮุ — (редко)",
        "examplePhuketRu": "ху"
      },
      {
        "syllable": "ฮู",
        "ruTr": "у:",
        "phuketRuTr": "ху:",
        "enTr": "uu",
        "example": "ฮู — (редко)",
        "examplePhuketRu": "ху:"
      },
      {
        "syllable": "เฮะ",
        "ruTr": "э",
        "phuketRuTr": "хэ",
        "enTr": "e",
        "example": "เฮะ — (редко)",
        "examplePhuketRu": "хэ"
      },
      {
        "syllable": "เฮ",
        "ruTr": "э:",
        "phuketRuTr": "хэ:",
        "enTr": "ee",
        "example": "เฮ — (редко)",
        "examplePhuketRu": "хэ:"
      },
      {
        "syllable": "แฮะ",
        "ruTr": "э",
        "phuketRuTr": "хэ",
        "enTr": "ae",
        "example": "แฮะ — (редко)",
        "examplePhuketRu": "хэ"
      },
      {
        "syllable": "แฮ",
        "ruTr": "э:",
        "phuketRuTr": "хэ:",
        "enTr": "aae",
        "example": "แฮ — (редко)",
        "examplePhuketRu": "хэ:"
      },
      {
        "syllable": "โฮะ",
        "ruTr": "о",
        "phuketRuTr": "хо",
        "enTr": "o",
        "example": "โฮะ — (редко)",
        "examplePhuketRu": "хо"
      },
      {
        "syllable": "โฮ",
        "ruTr": "о:",
        "phuketRuTr": "хо:",
        "enTr": "oo",
        "example": "โฮ — (редко)",
        "examplePhuketRu": "хо:"
      },
      {
        "syllable": "ฮอ",
        "ruTr": "о",
        "phuketRuTr": "хо",
        "enTr": "aw",
        "example": "ฮอ — (редко)",
        "examplePhuketRu": "хо"
      },
      {
        "syllable": "ฮำ",
        "ruTr": "ам",
        "phuketRuTr": "хам",
        "enTr": "am",
        "example": "ฮำ — (редко)",
        "examplePhuketRu": "хам"
      },
      {
        "syllable": "ใฮ",
        "ruTr": "ай",
        "phuketRuTr": "хай",
        "enTr": "ai",
        "example": "ใฮ — слог",
        "examplePhuketRu": "хай"
      },
      {
        "syllable": "ไฮ",
        "ruTr": "ай",
        "phuketRuTr": "хай",
        "enTr": "ai",
        "example": "ไฮ — слог",
        "examplePhuketRu": "хай"
      }
    ],
    "words": [
      {
        "thai": "ฮา",
        "ruTr": "ха:",
        "phuketRuTr": "ха:",
        "enTr": "haa",
        "translation": "смеяться (ха-ха)"
      },
      {
        "thai": "ฮิต",
        "ruTr": "хит",
        "phuketRuTr": "хит",
        "enTr": "hit",
        "translation": "хит (заимств.)"
      },
      {
        "thai": "ฮอร์โมน",
        "ruTr": "хо:мон",
        "phuketRuTr": "хо:мон",
        "enTr": "hoomon",
        "translation": "гормон"
      },
      {
        "thai": "ฮีโร่",
        "ruTr": "хиро:",
        "phuketRuTr": "хило:",
        "enTr": "hiiro",
        "translation": "герой (заимств.)"
      }
    ],
    "phrases": [
      {
        "thai": "ฮาๆ",
        "ruTr": "ха: ха:",
        "phuketRuTr": "ха: ха:",
        "enTr": "haa haa",
        "translation": "ха-ха (смех)"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "в основном в заимствованных словах"
      }
    ]
  }
];
