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
        "examplePhuketRu": "ка",
        "exampleEn": "กะ — particle"
      },
      {
        "syllable": "กา",
        "ruTr": "а:",
        "phuketRuTr": "ка:",
        "enTr": "aa",
        "example": "กา — ворона",
        "examplePhuketRu": "ка:",
        "exampleEn": "กา — crow"
      },
      {
        "syllable": "กิ",
        "ruTr": "и",
        "phuketRuTr": "ки",
        "enTr": "i",
        "example": "กิน — есть",
        "examplePhuketRu": "кин",
        "exampleEn": "กิน — to eat"
      },
      {
        "syllable": "กี",
        "ruTr": "и:",
        "phuketRuTr": "ки:",
        "enTr": "ii",
        "example": "กี — (редко)",
        "examplePhuketRu": "ки:",
        "exampleEn": "กี — (rare)"
      },
      {
        "syllable": "กุ",
        "ruTr": "у",
        "phuketRuTr": "ку",
        "enTr": "u",
        "example": "กุญแจ — ключ",
        "examplePhuketRu": "ку",
        "exampleEn": "กุญแจ — key"
      },
      {
        "syllable": "กู",
        "ruTr": "у:",
        "phuketRuTr": "ку:",
        "enTr": "uu",
        "example": "กู — ты (грубо)",
        "examplePhuketRu": "ку:",
        "exampleEn": "กู — you (rude)"
      },
      {
        "syllable": "เกะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "e",
        "example": "เกะ — (редко)",
        "examplePhuketRu": "кэ",
        "exampleEn": "เกะ — (rare)"
      },
      {
        "syllable": "เก",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "ee",
        "example": "เก — (редко)",
        "examplePhuketRu": "кэ:",
        "exampleEn": "เก — (rare)"
      },
      {
        "syllable": "แกะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "ae",
        "example": "แกะ — овца",
        "examplePhuketRu": "кэ",
        "exampleEn": "แกะ — sheep"
      },
      {
        "syllable": "แก",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "aae",
        "example": "แก — старый",
        "examplePhuketRu": "кэ:",
        "exampleEn": "แก — old"
      },
      {
        "syllable": "โกะ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "o",
        "example": "โกะ — (редко)",
        "examplePhuketRu": "ко",
        "exampleEn": "โกะ — (rare)"
      },
      {
        "syllable": "โก",
        "ruTr": "о:",
        "phuketRuTr": "ко:",
        "enTr": "oo",
        "example": "โก — (редко)",
        "examplePhuketRu": "ко:",
        "exampleEn": "โก — (rare)"
      },
      {
        "syllable": "กอ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "aw",
        "example": "กอ — (редко)",
        "examplePhuketRu": "ко",
        "exampleEn": "กอ — (rare)"
      },
      {
        "syllable": "กำ",
        "ruTr": "ам",
        "phuketRuTr": "кам",
        "enTr": "am",
        "example": "กำ — ворот",
        "examplePhuketRu": "кам",
        "exampleEn": "กำ — collar"
      },
      {
        "syllable": "ใก",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ใกล้ — близко",
        "examplePhuketRu": "кай",
        "exampleEn": "ใกล้ — close"
      },
      {
        "syllable": "ไก",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ไกล — далеко",
        "examplePhuketRu": "кай",
        "exampleEn": "ไกล — far"
      }
    ],
    "words": [
      {
        "thai": "กา",
        "ruTr": "ка:",
        "phuketRuTr": "ка:",
        "enTr": "kaa",
        "translation": "ворона",
        "translationEn": "crow"
      },
      {
        "thai": "กิน",
        "ruTr": "гин",
        "phuketRuTr": "кин",
        "enTr": "gin",
        "translation": "есть / кушать",
        "translationEn": "to eat"
      },
      {
        "thai": "แกง",
        "ruTr": "гаэнг",
        "phuketRuTr": "каэнк",
        "enTr": "gaeng",
        "translation": "карри",
        "translationEn": "curry"
      },
      {
        "thai": "กลับ",
        "ruTr": "глаб",
        "phuketRuTr": "клаб",
        "enTr": "glap",
        "translation": "возвращаться",
        "translationEn": "to return"
      }
    ],
    "phrases": [
      {
        "thai": "กินข้าว",
        "ruTr": "гин кха:o",
        "phuketRuTr": "кин као",
        "enTr": "gin khao",
        "translation": "кушать / есть рис",
        "translationEn": "to eat rice"
      },
      {
        "thai": "กลับบ้าน",
        "ruTr": "глаб ба:н",
        "phuketRuTr": "клап бан",
        "enTr": "glap baan",
        "translation": "вернуться домой",
        "translationEn": "to go home"
      }
    ],
    "meaningEn": "chicken"
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
        "examplePhuketRu": "ка",
        "exampleEn": "ขะ — (rare)"
      },
      {
        "syllable": "ขา",
        "ruTr": "а:",
        "phuketRuTr": "ка:",
        "enTr": "aa",
        "example": "ข้าว — рис",
        "examplePhuketRu": "као",
        "exampleEn": "ข้าว — rice"
      },
      {
        "syllable": "ขิ",
        "ruTr": "и",
        "phuketRuTr": "ки",
        "enTr": "i",
        "example": "ขี่ — ехать",
        "examplePhuketRu": "ки",
        "exampleEn": "ขี่ — to ride"
      },
      {
        "syllable": "ขี",
        "ruTr": "и:",
        "phuketRuTr": "ки:",
        "enTr": "ii",
        "example": "ขี้ — испражнение",
        "examplePhuketRu": "ки:",
        "exampleEn": "ขี้ — excrement"
      },
      {
        "syllable": "ขุ",
        "ruTr": "у",
        "phuketRuTr": "ку",
        "enTr": "u",
        "example": "ขุด — копать",
        "examplePhuketRu": "ку",
        "exampleEn": "ขุด — to dig"
      },
      {
        "syllable": "ขู",
        "ruTr": "у:",
        "phuketRuTr": "ку:",
        "enTr": "uu",
        "example": "ขู่ — угрожать",
        "examplePhuketRu": "ку:",
        "exampleEn": "ขู่ — to threaten"
      },
      {
        "syllable": "เขะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "e",
        "example": "เข — (редко)",
        "examplePhuketRu": "кэ",
        "exampleEn": "เข — (rare)"
      },
      {
        "syllable": "เข",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "ee",
        "example": "เขา — он/гора",
        "examplePhuketRu": "кэ:",
        "exampleEn": "เขา — he / mountain"
      },
      {
        "syllable": "แขะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "ae",
        "example": "แข — (редко)",
        "examplePhuketRu": "кэ",
        "exampleEn": "แข — (rare)"
      },
      {
        "syllable": "แข",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "aae",
        "example": "แข็ง — твёрдый",
        "examplePhuketRu": "кэ:",
        "exampleEn": "แข็ง — hard"
      },
      {
        "syllable": "โขะ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "o",
        "example": "โข — (редко)",
        "examplePhuketRu": "ко",
        "exampleEn": "โข — (rare)"
      },
      {
        "syllable": "โข",
        "ruTr": "о:",
        "phuketRuTr": "ко:",
        "enTr": "oo",
        "example": "โขน — (редко)",
        "examplePhuketRu": "ко:",
        "exampleEn": "โขน — (rare)"
      },
      {
        "syllable": "ขอ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "aw",
        "example": "ขอ — просить",
        "examplePhuketRu": "ко",
        "exampleEn": "ขอ — to ask"
      },
      {
        "syllable": "ขำ",
        "ruTr": "ам",
        "phuketRuTr": "кам",
        "enTr": "am",
        "example": "ขำ — смеяться",
        "examplePhuketRu": "кам",
        "exampleEn": "ขำ — to laugh"
      },
      {
        "syllable": "ใข",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ใข — слог",
        "examplePhuketRu": "кай",
        "exampleEn": "ใข — syllable"
      },
      {
        "syllable": "ไข",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ไข — слог",
        "examplePhuketRu": "кай",
        "exampleEn": "ไข — syllable"
      }
    ],
    "words": [
      {
        "thai": "ข้าว",
        "ruTr": "кха:o",
        "phuketRuTr": "као",
        "enTr": "khao",
        "translation": "рис",
        "translationEn": "rice"
      },
      {
        "thai": "ขาว",
        "ruTr": "кха:o",
        "phuketRuTr": "ка:o",
        "enTr": "khaao",
        "translation": "белый",
        "translationEn": "white"
      },
      {
        "thai": "ขา",
        "ruTr": "кха:",
        "phuketRuTr": "ка:",
        "enTr": "khaa",
        "translation": "нога",
        "translationEn": "leg"
      },
      {
        "thai": "ขึ้น",
        "ruTr": "кхын",
        "phuketRuTr": "кын",
        "enTr": "khuen",
        "translation": "подниматься",
        "translationEn": "to rise"
      }
    ],
    "phrases": [
      {
        "thai": "ขอโทษ",
        "ruTr": "кхо: то:т",
        "phuketRuTr": "ко тот",
        "enTr": "kho thot",
        "translation": "извините",
        "translationEn": "excuse me / sorry"
      },
      {
        "thai": "ขอบคุณ",
        "ruTr": "кхо:п кхун",
        "phuketRuTr": "коп кун",
        "enTr": "khob khun",
        "translation": "спасибо",
        "translationEn": "thank you"
      }
    ],
    "meaningEn": "egg"
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
        "examplePhuketRu": "ка",
        "exampleEn": "ฃ — archaic"
      },
      {
        "syllable": "ฃา",
        "ruTr": "а:",
        "phuketRuTr": "ка:",
        "enTr": "aa",
        "example": "ฃา — (устар.)",
        "examplePhuketRu": "ка:",
        "exampleEn": "ฃา — (archaic)"
      },
      {
        "syllable": "ฃิ",
        "ruTr": "и",
        "phuketRuTr": "ки",
        "enTr": "i",
        "example": "ฃิ — (устар.)",
        "examplePhuketRu": "ки",
        "exampleEn": "ฃิ — (archaic)"
      },
      {
        "syllable": "ฃี",
        "ruTr": "и:",
        "phuketRuTr": "ки:",
        "enTr": "ii",
        "example": "ฃี — (устар.)",
        "examplePhuketRu": "ки:",
        "exampleEn": "ฃี — (archaic)"
      },
      {
        "syllable": "ฃุ",
        "ruTr": "у",
        "phuketRuTr": "ку",
        "enTr": "u",
        "example": "ฃุ — (устар.)",
        "examplePhuketRu": "ку",
        "exampleEn": "ฃุ — (archaic)"
      },
      {
        "syllable": "ฃู",
        "ruTr": "у:",
        "phuketRuTr": "ку:",
        "enTr": "uu",
        "example": "ฃู — (устар.)",
        "examplePhuketRu": "ку:",
        "exampleEn": "ฃู — (archaic)"
      },
      {
        "syllable": "เฃะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "e",
        "example": "เฃะ — (устар.)",
        "examplePhuketRu": "кэ",
        "exampleEn": "เฃะ — (archaic)"
      },
      {
        "syllable": "เฃ",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "ee",
        "example": "เฃ — (устар.)",
        "examplePhuketRu": "кэ:",
        "exampleEn": "เฃ — (archaic)"
      },
      {
        "syllable": "แฃะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "ae",
        "example": "แฃะ — (устар.)",
        "examplePhuketRu": "кэ",
        "exampleEn": "แฃะ — (archaic)"
      },
      {
        "syllable": "แฃ",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "aae",
        "example": "แฃ — (устар.)",
        "examplePhuketRu": "кэ:",
        "exampleEn": "แฃ — (archaic)"
      },
      {
        "syllable": "โฃะ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "o",
        "example": "โฃะ — (устар.)",
        "examplePhuketRu": "ко",
        "exampleEn": "โฃะ — (archaic)"
      },
      {
        "syllable": "โฃ",
        "ruTr": "о:",
        "phuketRuTr": "ко:",
        "enTr": "oo",
        "example": "โฃ — (устар.)",
        "examplePhuketRu": "ко:",
        "exampleEn": "โฃ — (archaic)"
      },
      {
        "syllable": "ฃอ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "aw",
        "example": "ฃอ — (устар.)",
        "examplePhuketRu": "ко",
        "exampleEn": "ฃอ — (archaic)"
      },
      {
        "syllable": "ฃำ",
        "ruTr": "ам",
        "phuketRuTr": "кам",
        "enTr": "am",
        "example": "ฃำ — (устар.)",
        "examplePhuketRu": "кам",
        "exampleEn": "ฃำ — (archaic)"
      },
      {
        "syllable": "ใฃ",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ใฃ — слог",
        "examplePhuketRu": "кай",
        "exampleEn": "ใฃ — syllable"
      },
      {
        "syllable": "ไฃ",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ไฃ — слог",
        "examplePhuketRu": "кай",
        "exampleEn": "ไฃ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ฃวด",
        "ruTr": "кхуат",
        "phuketRuTr": "куат",
        "enTr": "khuat",
        "translation": "бутылка (устар.)",
        "translationEn": "bottle (archaic)"
      },
      {
        "thai": "ฃน",
        "ruTr": "кхон",
        "phuketRuTr": "кон",
        "enTr": "khon",
        "translation": "(устар.)",
        "translationEn": "(archaic)"
      },
      {
        "thai": "ฃาย",
        "ruTr": "кха:й",
        "phuketRuTr": "ка:й",
        "enTr": "khaai",
        "translation": "(устар.)",
        "translationEn": "(archaic)"
      },
      {
        "thai": "ฃึ้น",
        "ruTr": "кхын",
        "phuketRuTr": "кын",
        "enTr": "khuen",
        "translation": "(устар.)",
        "translationEn": "(archaic)"
      }
    ],
    "phrases": [
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "буква устарела, заменена на ข",
        "translationEn": "letter obsolete, replaced by ข"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "используется только в старых текстах",
        "translationEn": "used only in old texts"
      }
    ],
    "meaningEn": "bottle (archaic)"
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
        "examplePhuketRu": "ка",
        "exampleEn": "คะ — particle"
      },
      {
        "syllable": "คา",
        "ruTr": "а:",
        "phuketRuTr": "ка:",
        "enTr": "aa",
        "example": "คา — зуд",
        "examplePhuketRu": "ка:",
        "exampleEn": "คา — itch"
      },
      {
        "syllable": "คิ",
        "ruTr": "и",
        "phuketRuTr": "ки",
        "enTr": "i",
        "example": "คิ้ว — бровь",
        "examplePhuketRu": "ки",
        "exampleEn": "คิ้ว — eyebrow"
      },
      {
        "syllable": "คี",
        "ruTr": "и:",
        "phuketRuTr": "ки:",
        "enTr": "ii",
        "example": "คี — (редко)",
        "examplePhuketRu": "ки:",
        "exampleEn": "คี — (rare)"
      },
      {
        "syllable": "คุ",
        "ruTr": "у",
        "phuketRuTr": "ку",
        "enTr": "u",
        "example": "คุณ — вы",
        "examplePhuketRu": "кун",
        "exampleEn": "คุณ — you"
      },
      {
        "syllable": "คู",
        "ruTr": "у:",
        "phuketRuTr": "ку:",
        "enTr": "uu",
        "example": "คู่ — пара",
        "examplePhuketRu": "ку:",
        "exampleEn": "คู่ — pair"
      },
      {
        "syllable": "เคะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "e",
        "example": "เข — (редко)",
        "examplePhuketRu": "кэ",
        "exampleEn": "เข — (rare)"
      },
      {
        "syllable": "เค",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "ee",
        "example": "เขา — он/гора",
        "examplePhuketRu": "кэ:",
        "exampleEn": "เขา — he / mountain"
      },
      {
        "syllable": "แคะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "ae",
        "example": "แค — (редко)",
        "examplePhuketRu": "кэ",
        "exampleEn": "แค — (rare)"
      },
      {
        "syllable": "แค",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "aae",
        "example": "แค่ — только",
        "examplePhuketRu": "кэ:",
        "exampleEn": "แค่ — only"
      },
      {
        "syllable": "โคะ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "o",
        "example": "โค — (редко)",
        "examplePhuketRu": "ко",
        "exampleEn": "โค — (rare)"
      },
      {
        "syllable": "โค",
        "ruTr": "о:",
        "phuketRuTr": "ко:",
        "enTr": "oo",
        "example": "โคน — (редко)",
        "examplePhuketRu": "ко:",
        "exampleEn": "โคน — (rare)"
      },
      {
        "syllable": "คอ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "aw",
        "example": "คอ — шея",
        "examplePhuketRu": "ко",
        "exampleEn": "คอ — neck"
      },
      {
        "syllable": "คำ",
        "ruTr": "ам",
        "phuketRuTr": "кам",
        "enTr": "am",
        "example": "คำ — слово",
        "examplePhuketRu": "кам",
        "exampleEn": "คำ — word"
      },
      {
        "syllable": "ใค",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ใค — слог",
        "examplePhuketRu": "кай",
        "exampleEn": "ใค — syllable"
      },
      {
        "syllable": "ไค",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ไค — слог",
        "examplePhuketRu": "кай",
        "exampleEn": "ไค — syllable"
      }
    ],
    "words": [
      {
        "thai": "คน",
        "ruTr": "кхон",
        "phuketRuTr": "кон",
        "enTr": "khon",
        "translation": "человек",
        "translationEn": "person"
      },
      {
        "thai": "คิด",
        "ruTr": "кхит",
        "phuketRuTr": "кит",
        "enTr": "khit",
        "translation": "думать",
        "translationEn": "to think"
      },
      {
        "thai": "คุณ",
        "ruTr": "кхун",
        "phuketRuTr": "кун",
        "enTr": "khun",
        "translation": "вы / господин",
        "translationEn": "you / mister"
      },
      {
        "thai": "ครับ",
        "ruTr": "кхраб",
        "phuketRuTr": "кап",
        "enTr": "khrap",
        "translation": "вежл. частица (м.р.)",
        "translationEn": "polite particle (male)"
      }
    ],
    "phrases": [
      {
        "thai": "คุณชื่ออะไร",
        "ruTr": "кхун чхе: арай",
        "phuketRuTr": "кун че: алай",
        "enTr": "khun chue a-rai",
        "translation": "Как вас зовут?",
        "translationEn": "What is your name?"
      },
      {
        "thai": "คุณเป็นใคร",
        "ruTr": "кхун пен кхрай",
        "phuketRuTr": "кун пен клай",
        "enTr": "khun pen khrai",
        "translation": "Кто вы?",
        "translationEn": "Who are you?"
      }
    ],
    "meaningEn": "buffalo"
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
        "examplePhuketRu": "ка",
        "exampleEn": "ฆะ — (rare)"
      },
      {
        "syllable": "ฆา",
        "ruTr": "а:",
        "phuketRuTr": "ка:",
        "enTr": "aa",
        "example": "ฆ่า — убивать",
        "examplePhuketRu": "ка:",
        "exampleEn": "ฆ่า — to kill"
      },
      {
        "syllable": "ฆิ",
        "ruTr": "и",
        "phuketRuTr": "ки",
        "enTr": "i",
        "example": "ฆิ — (редко)",
        "examplePhuketRu": "ки",
        "exampleEn": "ฆิ — (rare)"
      },
      {
        "syllable": "ฆี",
        "ruTr": "и:",
        "phuketRuTr": "ки:",
        "enTr": "ii",
        "example": "ฆี — (редко)",
        "examplePhuketRu": "ки:",
        "exampleEn": "ฆี — (rare)"
      },
      {
        "syllable": "ฆุ",
        "ruTr": "у",
        "phuketRuTr": "ку",
        "enTr": "u",
        "example": "ฆุ — (редко)",
        "examplePhuketRu": "ку",
        "exampleEn": "ฆุ — (rare)"
      },
      {
        "syllable": "ฆู",
        "ruTr": "у:",
        "phuketRuTr": "ку:",
        "enTr": "uu",
        "example": "ฆู — (редко)",
        "examplePhuketRu": "ку:",
        "exampleEn": "ฆู — (rare)"
      },
      {
        "syllable": "เฆะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "e",
        "example": "เฆะ — (редко)",
        "examplePhuketRu": "кэ",
        "exampleEn": "เฆะ — (rare)"
      },
      {
        "syllable": "เฆ",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "ee",
        "example": "เฆ — (редко)",
        "examplePhuketRu": "кэ:",
        "exampleEn": "เฆ — (rare)"
      },
      {
        "syllable": "แฆะ",
        "ruTr": "э",
        "phuketRuTr": "кэ",
        "enTr": "ae",
        "example": "แฆะ — (редко)",
        "examplePhuketRu": "кэ",
        "exampleEn": "แฆะ — (rare)"
      },
      {
        "syllable": "แฆ",
        "ruTr": "э:",
        "phuketRuTr": "кэ:",
        "enTr": "aae",
        "example": "แฆ — (редко)",
        "examplePhuketRu": "кэ:",
        "exampleEn": "แฆ — (rare)"
      },
      {
        "syllable": "โฆะ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "o",
        "example": "โฆะ — (редко)",
        "examplePhuketRu": "ко",
        "exampleEn": "โฆะ — (rare)"
      },
      {
        "syllable": "โฆ",
        "ruTr": "о:",
        "phuketRuTr": "ко:",
        "enTr": "oo",
        "example": "โฆ — (редко)",
        "examplePhuketRu": "ко:",
        "exampleEn": "โฆ — (rare)"
      },
      {
        "syllable": "ฆอ",
        "ruTr": "о",
        "phuketRuTr": "ко",
        "enTr": "aw",
        "example": "ฆอ — (редко)",
        "examplePhuketRu": "ко",
        "exampleEn": "ฆอ — (rare)"
      },
      {
        "syllable": "ฆำ",
        "ruTr": "ам",
        "phuketRuTr": "кам",
        "enTr": "am",
        "example": "ฆำ — (редко)",
        "examplePhuketRu": "кам",
        "exampleEn": "ฆำ — (rare)"
      },
      {
        "syllable": "ใฆ",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ใฆ — слог",
        "examplePhuketRu": "кай",
        "exampleEn": "ใฆ — syllable"
      },
      {
        "syllable": "ไฆ",
        "ruTr": "ай",
        "phuketRuTr": "кай",
        "enTr": "ai",
        "example": "ไฆ — слог",
        "examplePhuketRu": "кай",
        "exampleEn": "ไฆ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ระฆัง",
        "ruTr": "ракханг",
        "phuketRuTr": "лаканк",
        "enTr": "rakhang",
        "translation": "колокол",
        "translationEn": "bell"
      },
      {
        "thai": "ฆ่า",
        "ruTr": "кха:",
        "phuketRuTr": "ка:",
        "enTr": "khaa",
        "translation": "убивать",
        "translationEn": "to kill"
      },
      {
        "thai": "ฆาต",
        "ruTr": "кха:т",
        "phuketRuTr": "ка:т",
        "enTr": "khaat",
        "translation": "убийство",
        "translationEn": "murder"
      },
      {
        "thai": "ฆ้อง",
        "ruTr": "кхо:нг",
        "phuketRuTr": "ко:нк",
        "enTr": "khong",
        "translation": "гонд / тарелка",
        "translationEn": "gong / cymbal"
      }
    ],
    "phrases": [
      {
        "thai": "ระฆังวัด",
        "ruTr": "ракханг ват",
        "phuketRuTr": "лаканк ват",
        "enTr": "rakhang wat",
        "translation": "храмовый колокол",
        "translationEn": "temple bell"
      },
      {
        "thai": "ฆ่าเวลา",
        "ruTr": "кха: вела:",
        "phuketRuTr": "ка: вела:",
        "enTr": "khaa weelaa",
        "translation": "убивать время",
        "translationEn": "to kill time"
      }
    ],
    "meaningEn": "bell"
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
        "examplePhuketRu": "нга",
        "exampleEn": "งะ — (rare)"
      },
      {
        "syllable": "งา",
        "ruTr": "а:",
        "phuketRuTr": "нга:",
        "enTr": "aa",
        "example": "งา — слоновая кость",
        "examplePhuketRu": "нга:",
        "exampleEn": "งา — ivory"
      },
      {
        "syllable": "งิ",
        "ruTr": "и",
        "phuketRuTr": "нги",
        "enTr": "i",
        "example": "งิ — (редко)",
        "examplePhuketRu": "нги",
        "exampleEn": "งิ — (rare)"
      },
      {
        "syllable": "งี",
        "ruTr": "и:",
        "phuketRuTr": "нги:",
        "enTr": "ii",
        "example": "งี — (редко)",
        "examplePhuketRu": "нги:",
        "exampleEn": "งี — (rare)"
      },
      {
        "syllable": "งุ",
        "ruTr": "у",
        "phuketRuTr": "нгу",
        "enTr": "u",
        "example": "งุ — (редко)",
        "examplePhuketRu": "нгу",
        "exampleEn": "งุ — (rare)"
      },
      {
        "syllable": "งู",
        "ruTr": "у:",
        "phuketRuTr": "нгу:",
        "enTr": "uu",
        "example": "งู — змея",
        "examplePhuketRu": "нгу:",
        "exampleEn": "งู — snake"
      },
      {
        "syllable": "เงะ",
        "ruTr": "э",
        "phuketRuTr": "нгэ",
        "enTr": "e",
        "example": "เง — (редко)",
        "examplePhuketRu": "нгэ",
        "exampleEn": "เง — (rare)"
      },
      {
        "syllable": "เง",
        "ruTr": "э:",
        "phuketRuTr": "нгэ:",
        "enTr": "ee",
        "example": "เงา — тень",
        "examplePhuketRu": "нгэ:",
        "exampleEn": "เงา — shadow"
      },
      {
        "syllable": "แงะ",
        "ruTr": "э",
        "phuketRuTr": "нгэ",
        "enTr": "ae",
        "example": "แงะ — (редко)",
        "examplePhuketRu": "нгэ",
        "exampleEn": "แงะ — (rare)"
      },
      {
        "syllable": "แง",
        "ruTr": "э:",
        "phuketRuTr": "нгэ:",
        "enTr": "aae",
        "example": "แง — (редко)",
        "examplePhuketRu": "нгэ:",
        "exampleEn": "แง — (rare)"
      },
      {
        "syllable": "โงะ",
        "ruTr": "о",
        "phuketRuTr": "нго",
        "enTr": "o",
        "example": "โงะ — (редко)",
        "examplePhuketRu": "нго",
        "exampleEn": "โงะ — (rare)"
      },
      {
        "syllable": "โง",
        "ruTr": "о:",
        "phuketRuTr": "нго:",
        "enTr": "oo",
        "example": "โง่ — глупый",
        "examplePhuketRu": "нго:",
        "exampleEn": "โง่ — foolish"
      },
      {
        "syllable": "งอ",
        "ruTr": "о",
        "phuketRuTr": "нго",
        "enTr": "aw",
        "example": "งอ — согнуть",
        "examplePhuketRu": "нго",
        "exampleEn": "งอ — to bend"
      },
      {
        "syllable": "งำ",
        "ruTr": "ам",
        "phuketRuTr": "нгам",
        "enTr": "am",
        "example": "งำ — (редко)",
        "examplePhuketRu": "нгам",
        "exampleEn": "งำ — (rare)"
      },
      {
        "syllable": "ใง",
        "ruTr": "ай",
        "phuketRuTr": "нгай",
        "enTr": "ai",
        "example": "ใง — слог",
        "examplePhuketRu": "нгай",
        "exampleEn": "ใง — syllable"
      },
      {
        "syllable": "ไง",
        "ruTr": "ай",
        "phuketRuTr": "нгай",
        "enTr": "ai",
        "example": "ไง — слог",
        "examplePhuketRu": "нгай",
        "exampleEn": "ไง — syllable"
      }
    ],
    "words": [
      {
        "thai": "งาน",
        "ruTr": "нга:н",
        "phuketRuTr": "нка:н",
        "enTr": "ngaan",
        "translation": "работа",
        "translationEn": "work"
      },
      {
        "thai": "ง่าย",
        "ruTr": "нга:й",
        "phuketRuTr": "нка:й",
        "enTr": "ngai",
        "translation": "лёгкий",
        "translationEn": "easy / light"
      },
      {
        "thai": "เงิน",
        "ruTr": "нгоен",
        "phuketRuTr": "нкоен",
        "enTr": "ngoen",
        "translation": "деньги",
        "translationEn": "money"
      },
      {
        "thai": "งอน",
        "ruTr": "нгон",
        "phuketRuTr": "нкон",
        "enTr": "ngon",
        "translation": "дуться",
        "translationEn": "to sulk"
      }
    ],
    "phrases": [
      {
        "thai": "งานดี",
        "ruTr": "нга:н ди:",
        "phuketRuTr": "нка:н ди:",
        "enTr": "ngaan dii",
        "translation": "хорошая работа",
        "translationEn": "good work"
      },
      {
        "thai": "ไม่เป็นไร",
        "ruTr": "май пен рай",
        "phuketRuTr": "май пен рай",
        "enTr": "mai pen rai",
        "translation": "ничего страшного",
        "translationEn": "it's OK / never mind"
      }
    ],
    "meaningEn": "snake"
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
        "examplePhuketRu": "ча",
        "exampleEn": "จะ — future tense"
      },
      {
        "syllable": "จา",
        "ruTr": "а:",
        "phuketRuTr": "ча:",
        "enTr": "aa",
        "example": "จา — (редко)",
        "examplePhuketRu": "ча:",
        "exampleEn": "จา — (rare)"
      },
      {
        "syllable": "จิ",
        "ruTr": "и",
        "phuketRuTr": "чи",
        "enTr": "i",
        "example": "จิ — (редко)",
        "examplePhuketRu": "чи",
        "exampleEn": "จิ — (rare)"
      },
      {
        "syllable": "จี",
        "ruTr": "и:",
        "phuketRuTr": "чи:",
        "enTr": "ii",
        "example": "จี — (редко)",
        "examplePhuketRu": "чи:",
        "exampleEn": "จี — (rare)"
      },
      {
        "syllable": "จุ",
        "ruTr": "у",
        "phuketRuTr": "чу",
        "enTr": "u",
        "example": "จุ — (редко)",
        "examplePhuketRu": "чу",
        "exampleEn": "จุ — (rare)"
      },
      {
        "syllable": "จู",
        "ruTr": "у:",
        "phuketRuTr": "чу:",
        "enTr": "uu",
        "example": "จู — (редко)",
        "examplePhuketRu": "чу:",
        "exampleEn": "จู — (rare)"
      },
      {
        "syllable": "เจะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "e",
        "example": "เจะ — (редко)",
        "examplePhuketRu": "чэ",
        "exampleEn": "เจะ — (rare)"
      },
      {
        "syllable": "เจ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "ee",
        "example": "เจ — (редко)",
        "examplePhuketRu": "чэ:",
        "exampleEn": "เจ — (rare)"
      },
      {
        "syllable": "แจะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "ae",
        "example": "แจะ — (редко)",
        "examplePhuketRu": "чэ",
        "exampleEn": "แจะ — (rare)"
      },
      {
        "syllable": "แจ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "aae",
        "example": "แจ — (редко)",
        "examplePhuketRu": "чэ:",
        "exampleEn": "แจ — (rare)"
      },
      {
        "syllable": "โจะ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "o",
        "example": "โจะ — (редко)",
        "examplePhuketRu": "чо",
        "exampleEn": "โจะ — (rare)"
      },
      {
        "syllable": "โจ",
        "ruTr": "о:",
        "phuketRuTr": "чо:",
        "enTr": "oo",
        "example": "โจ — (редко)",
        "examplePhuketRu": "чо:",
        "exampleEn": "โจ — (rare)"
      },
      {
        "syllable": "จอ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "aw",
        "example": "จอ — экран",
        "examplePhuketRu": "чо",
        "exampleEn": "จอ — screen"
      },
      {
        "syllable": "จำ",
        "ruTr": "ам",
        "phuketRuTr": "чам",
        "enTr": "am",
        "example": "จำ — помнить",
        "examplePhuketRu": "чам",
        "exampleEn": "จำ — to remember"
      },
      {
        "syllable": "ใจ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ใจ — слог",
        "examplePhuketRu": "чай",
        "exampleEn": "ใจ — syllable"
      },
      {
        "syllable": "ไจ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ไจ — слог",
        "examplePhuketRu": "чай",
        "exampleEn": "ไจ — syllable"
      }
    ],
    "words": [
      {
        "thai": "จริง",
        "ruTr": "чринг",
        "phuketRuTr": "члинк",
        "enTr": "jing",
        "translation": "правда",
        "translationEn": "true"
      },
      {
        "thai": "จำ",
        "ruTr": "чам",
        "phuketRuTr": "чам",
        "enTr": "jam",
        "translation": "помнить",
        "translationEn": "to remember"
      },
      {
        "thai": "จบ",
        "ruTr": "чоб",
        "phuketRuTr": "чоб",
        "enTr": "job",
        "translation": "конец",
        "translationEn": "end"
      },
      {
        "thai": "จาก",
        "ruTr": "ча:к",
        "phuketRuTr": "ча:к",
        "enTr": "jaak",
        "translation": "из / от",
        "translationEn": "from"
      }
    ],
    "phrases": [
      {
        "thai": "จริงๆ",
        "ruTr": "чринг-чринг",
        "phuketRuTr": "члинк-члинк",
        "enTr": "jing-jing",
        "translation": "серьёзно!",
        "translationEn": "seriously!"
      },
      {
        "thai": "จบแล้ว",
        "ruTr": "чоб ла:еo",
        "phuketRuTr": "чоб ла:еo",
        "enTr": "job laew",
        "translation": "уже готово",
        "translationEn": "it's done / all done"
      }
    ],
    "meaningEn": "plate"
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
        "examplePhuketRu": "ча",
        "exampleEn": "ฉะ — (rare)"
      },
      {
        "syllable": "ฉา",
        "ruTr": "а:",
        "phuketRuTr": "ча:",
        "enTr": "aa",
        "example": "ฉา — (редко)",
        "examplePhuketRu": "ча:",
        "exampleEn": "ฉา — (rare)"
      },
      {
        "syllable": "ฉิ",
        "ruTr": "и",
        "phuketRuTr": "чи",
        "enTr": "i",
        "example": "ฉิ — (редко)",
        "examplePhuketRu": "чи",
        "exampleEn": "ฉิ — (rare)"
      },
      {
        "syllable": "ฉี",
        "ruTr": "и:",
        "phuketRuTr": "чи:",
        "enTr": "ii",
        "example": "ฉี — (редко)",
        "examplePhuketRu": "чи:",
        "exampleEn": "ฉี — (rare)"
      },
      {
        "syllable": "ฉุ",
        "ruTr": "у",
        "phuketRuTr": "чу",
        "enTr": "u",
        "example": "ฉุ — (редко)",
        "examplePhuketRu": "чу",
        "exampleEn": "ฉุ — (rare)"
      },
      {
        "syllable": "ฉู",
        "ruTr": "у:",
        "phuketRuTr": "чу:",
        "enTr": "uu",
        "example": "ฉู — (редко)",
        "examplePhuketRu": "чу:",
        "exampleEn": "ฉู — (rare)"
      },
      {
        "syllable": "เฉะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "e",
        "example": "เฉะ — (редко)",
        "examplePhuketRu": "чэ",
        "exampleEn": "เฉะ — (rare)"
      },
      {
        "syllable": "เฉ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "ee",
        "example": "เฉ — (редко)",
        "examplePhuketRu": "чэ:",
        "exampleEn": "เฉ — (rare)"
      },
      {
        "syllable": "แฉะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "ae",
        "example": "แฉะ — (редко)",
        "examplePhuketRu": "чэ",
        "exampleEn": "แฉะ — (rare)"
      },
      {
        "syllable": "แฉ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "aae",
        "example": "แฉ — (редко)",
        "examplePhuketRu": "чэ:",
        "exampleEn": "แฉ — (rare)"
      },
      {
        "syllable": "โฉะ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "o",
        "example": "โฉะ — (редко)",
        "examplePhuketRu": "чо",
        "exampleEn": "โฉะ — (rare)"
      },
      {
        "syllable": "โฉ",
        "ruTr": "о:",
        "phuketRuTr": "чо:",
        "enTr": "oo",
        "example": "โฉ — (редко)",
        "examplePhuketRu": "чо:",
        "exampleEn": "โฉ — (rare)"
      },
      {
        "syllable": "ฉอ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "aw",
        "example": "ฉอ — (редко)",
        "examplePhuketRu": "чо",
        "exampleEn": "ฉอ — (rare)"
      },
      {
        "syllable": "ฉำ",
        "ruTr": "ам",
        "phuketRuTr": "чам",
        "enTr": "am",
        "example": "ฉำ — (редко)",
        "examplePhuketRu": "чам",
        "exampleEn": "ฉำ — (rare)"
      },
      {
        "syllable": "ใฉ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ใฉ — слог",
        "examplePhuketRu": "чай",
        "exampleEn": "ใฉ — syllable"
      },
      {
        "syllable": "ไฉ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ไฉ — слог",
        "examplePhuketRu": "чай",
        "exampleEn": "ไฉ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ฉัน",
        "ruTr": "чан",
        "phuketRuTr": "чан",
        "enTr": "chan",
        "translation": "я (разг.)",
        "translationEn": "I (informal)"
      },
      {
        "thai": "ฉลาด",
        "ruTr": "чхала:т",
        "phuketRuTr": "чала:т",
        "enTr": "chalaat",
        "translation": "умный",
        "translationEn": "smart"
      },
      {
        "thai": "ฉีด",
        "ruTr": "чхи:т",
        "phuketRuTr": "чи:т",
        "enTr": "chiit",
        "translation": "колоть / брызгать",
        "translationEn": "to inject / spray"
      },
      {
        "thai": "ฉุก",
        "ruTr": "чхук",
        "phuketRuTr": "чук",
        "enTr": "chuk",
        "translation": "срочный",
        "translationEn": "urgent"
      }
    ],
    "phrases": [
      {
        "thai": "ฉันชื่อ...",
        "ruTr": "чан чхе:...",
        "phuketRuTr": "чан че:...",
        "enTr": "chan chue...",
        "translation": "Меня зовут...",
        "translationEn": "My name is..."
      },
      {
        "thai": "ฉุกเฉิน",
        "ruTr": "чхук чхəн",
        "phuketRuTr": "чук чəн",
        "enTr": "chuk choen",
        "translation": "экстренный случай",
        "translationEn": "emergency"
      }
    ],
    "meaningEn": "cymbal"
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
        "examplePhuketRu": "ча",
        "exampleEn": "ชะ — (rare)"
      },
      {
        "syllable": "ชา",
        "ruTr": "а:",
        "phuketRuTr": "ча:",
        "enTr": "aa",
        "example": "ชา — чай",
        "examplePhuketRu": "ча:",
        "exampleEn": "ชา — tea"
      },
      {
        "syllable": "ชิ",
        "ruTr": "и",
        "phuketRuTr": "чи",
        "enTr": "i",
        "example": "ชิ — (редко)",
        "examplePhuketRu": "чи",
        "exampleEn": "ชิ — (rare)"
      },
      {
        "syllable": "ชี",
        "ruTr": "и:",
        "phuketRuTr": "чи:",
        "enTr": "ii",
        "example": "ชี — (редко)",
        "examplePhuketRu": "чи:",
        "exampleEn": "ชี — (rare)"
      },
      {
        "syllable": "ชุ",
        "ruTr": "у",
        "phuketRuTr": "чу",
        "enTr": "u",
        "example": "ชุ — (редко)",
        "examplePhuketRu": "чу",
        "exampleEn": "ชุ — (rare)"
      },
      {
        "syllable": "ชู",
        "ruTr": "у:",
        "phuketRuTr": "чу:",
        "enTr": "uu",
        "example": "ชู — (редко)",
        "examplePhuketRu": "чу:",
        "exampleEn": "ชู — (rare)"
      },
      {
        "syllable": "เชะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "e",
        "example": "เช — (редко)",
        "examplePhuketRu": "чэ",
        "exampleEn": "เช — (rare)"
      },
      {
        "syllable": "เช",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "ee",
        "example": "เช่น — например",
        "examplePhuketRu": "чэ:",
        "exampleEn": "เช่น — for example"
      },
      {
        "syllable": "แชะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "ae",
        "example": "แชะ — (редко)",
        "examplePhuketRu": "чэ",
        "exampleEn": "แชะ — (rare)"
      },
      {
        "syllable": "แช",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "aae",
        "example": "แช — (редко)",
        "examplePhuketRu": "чэ:",
        "exampleEn": "แช — (rare)"
      },
      {
        "syllable": "โชะ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "o",
        "example": "โชะ — (редко)",
        "examplePhuketRu": "чо",
        "exampleEn": "โชะ — (rare)"
      },
      {
        "syllable": "โช",
        "ruTr": "о:",
        "phuketRuTr": "чо:",
        "enTr": "oo",
        "example": "โชค — удача",
        "examplePhuketRu": "чо:",
        "exampleEn": "โชค — luck"
      },
      {
        "syllable": "ชอ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "aw",
        "example": "ชอ — (редко)",
        "examplePhuketRu": "чо",
        "exampleEn": "ชอ — (rare)"
      },
      {
        "syllable": "ชำ",
        "ruTr": "ам",
        "phuketRuTr": "чам",
        "enTr": "am",
        "example": "ชำ — оплачивать",
        "examplePhuketRu": "чам",
        "exampleEn": "ชำ — to pay"
      },
      {
        "syllable": "ใช",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ใช — слог",
        "examplePhuketRu": "чай",
        "exampleEn": "ใช — syllable"
      },
      {
        "syllable": "ไช",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ไช — слог",
        "examplePhuketRu": "чай",
        "exampleEn": "ไช — syllable"
      }
    ],
    "words": [
      {
        "thai": "ชอบ",
        "ruTr": "чхо:б",
        "phuketRuTr": "чо:б",
        "enTr": "chob",
        "translation": "нравиться",
        "translationEn": "to like"
      },
      {
        "thai": "ชื่อ",
        "ruTr": "чхе:",
        "phuketRuTr": "че:",
        "enTr": "chue",
        "translation": "имя",
        "translationEn": "name"
      },
      {
        "thai": "ช้า",
        "ruTr": "чха:",
        "phuketRuTr": "ча:",
        "enTr": "chaa",
        "translation": "медленный",
        "translationEn": "slow"
      },
      {
        "thai": "ช่วย",
        "ruTr": "чхуай",
        "phuketRuTr": "чуай",
        "enTr": "chuay",
        "translation": "помочь",
        "translationEn": "to help"
      }
    ],
    "phrases": [
      {
        "thai": "ช่วยด้วย",
        "ruTr": "чхуай дуай",
        "phuketRuTr": "чуай дуай",
        "enTr": "chuay duay",
        "translation": "помогите!",
        "translationEn": "help!"
      },
      {
        "thai": "ผมชอบเมืองไทย",
        "ruTr": "пхом чхо:б муанг тхай",
        "phuketRuTr": "пом чо:б муанк тай",
        "enTr": "phom chob mueang thai",
        "translation": "Мне нравится Таиланд",
        "translationEn": "I like Thailand"
      }
    ],
    "meaningEn": "elephant"
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
        "examplePhuketRu": "са",
        "exampleEn": "ซะ — (rare)"
      },
      {
        "syllable": "ซา",
        "ruTr": "а:",
        "phuketRuTr": "са:",
        "enTr": "aa",
        "example": "ซา — (редко)",
        "examplePhuketRu": "са:",
        "exampleEn": "ซา — (rare)"
      },
      {
        "syllable": "ซิ",
        "ruTr": "и",
        "phuketRuTr": "си",
        "enTr": "i",
        "example": "ซิ — (редко)",
        "examplePhuketRu": "си",
        "exampleEn": "ซิ — (rare)"
      },
      {
        "syllable": "ซี",
        "ruTr": "и:",
        "phuketRuTr": "си:",
        "enTr": "ii",
        "example": "ซี — (редко)",
        "examplePhuketRu": "си:",
        "exampleEn": "ซี — (rare)"
      },
      {
        "syllable": "ซุ",
        "ruTr": "у",
        "phuketRuTr": "су",
        "enTr": "u",
        "example": "ซุ — (редко)",
        "examplePhuketRu": "су",
        "exampleEn": "ซุ — (rare)"
      },
      {
        "syllable": "ซู",
        "ruTr": "у:",
        "phuketRuTr": "су:",
        "enTr": "uu",
        "example": "ซู — (редко)",
        "examplePhuketRu": "су:",
        "exampleEn": "ซู — (rare)"
      },
      {
        "syllable": "เซะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "e",
        "example": "เซะ — (редко)",
        "examplePhuketRu": "сэ",
        "exampleEn": "เซะ — (rare)"
      },
      {
        "syllable": "เซ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "ee",
        "example": "เซ — (редко)",
        "examplePhuketRu": "сэ:",
        "exampleEn": "เซ — (rare)"
      },
      {
        "syllable": "แซะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "ae",
        "example": "แซะ — (редко)",
        "examplePhuketRu": "сэ",
        "exampleEn": "แซะ — (rare)"
      },
      {
        "syllable": "แซ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "aae",
        "example": "แซ — (редко)",
        "examplePhuketRu": "сэ:",
        "exampleEn": "แซ — (rare)"
      },
      {
        "syllable": "โซะ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "o",
        "example": "โซะ — (редко)",
        "examplePhuketRu": "со",
        "exampleEn": "โซะ — (rare)"
      },
      {
        "syllable": "โซ",
        "ruTr": "о:",
        "phuketRuTr": "со:",
        "enTr": "oo",
        "example": "โซ — (редко)",
        "examplePhuketRu": "со:",
        "exampleEn": "โซ — (rare)"
      },
      {
        "syllable": "ซอ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "aw",
        "example": "ซอ — (редко)",
        "examplePhuketRu": "со",
        "exampleEn": "ซอ — (rare)"
      },
      {
        "syllable": "ซำ",
        "ruTr": "ам",
        "phuketRuTr": "сам",
        "enTr": "am",
        "example": "ซำ — (редко)",
        "examplePhuketRu": "сам",
        "exampleEn": "ซำ — (rare)"
      },
      {
        "syllable": "ใซ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ใซ — слог",
        "examplePhuketRu": "сай",
        "exampleEn": "ใซ — syllable"
      },
      {
        "syllable": "ไซ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ไซ — слог",
        "examplePhuketRu": "сай",
        "exampleEn": "ไซ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ซ้าย",
        "ruTr": "са:й",
        "phuketRuTr": "са:й",
        "enTr": "saai",
        "translation": "левый",
        "translationEn": "left"
      },
      {
        "thai": "ซื้อ",
        "ruTr": "сы:",
        "phuketRuTr": "сы:",
        "enTr": "sue",
        "translation": "покупать",
        "translationEn": "to buy"
      },
      {
        "thai": "ซ่อน",
        "ruTr": "со:н",
        "phuketRuTr": "со:н",
        "enTr": "son",
        "translation": "прятать",
        "translationEn": "to hide"
      },
      {
        "thai": "ซี",
        "ruTr": "си:",
        "phuketRuTr": "си:",
        "enTr": "sii",
        "translation": "буква C / запад",
        "translationEn": "letter C / west"
      }
    ],
    "phrases": [
      {
        "thai": "ซื้อของ",
        "ruTr": "сы: кхо:нг",
        "phuketRuTr": "сы: ко:нк",
        "enTr": "sue khong",
        "translation": "делать покупки",
        "translationEn": "to go shopping"
      },
      {
        "thai": "ซ้ายมือ",
        "ruTr": "са:й му:",
        "phuketRuTr": "са:й му:",
        "enTr": "saai mue",
        "translation": "левая рука",
        "translationEn": "left hand"
      }
    ],
    "meaningEn": "chain"
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
        "examplePhuketRu": "ча",
        "exampleEn": "ฌะ — (rare)"
      },
      {
        "syllable": "ฌา",
        "ruTr": "а:",
        "phuketRuTr": "ча:",
        "enTr": "aa",
        "example": "ฌา — (редко)",
        "examplePhuketRu": "ча:",
        "exampleEn": "ฌา — (rare)"
      },
      {
        "syllable": "ฌิ",
        "ruTr": "и",
        "phuketRuTr": "чи",
        "enTr": "i",
        "example": "ฌิ — (редко)",
        "examplePhuketRu": "чи",
        "exampleEn": "ฌิ — (rare)"
      },
      {
        "syllable": "ฌี",
        "ruTr": "и:",
        "phuketRuTr": "чи:",
        "enTr": "ii",
        "example": "ฌี — (редко)",
        "examplePhuketRu": "чи:",
        "exampleEn": "ฌี — (rare)"
      },
      {
        "syllable": "ฌุ",
        "ruTr": "у",
        "phuketRuTr": "чу",
        "enTr": "u",
        "example": "ฌุ — (редко)",
        "examplePhuketRu": "чу",
        "exampleEn": "ฌุ — (rare)"
      },
      {
        "syllable": "ฌู",
        "ruTr": "у:",
        "phuketRuTr": "чу:",
        "enTr": "uu",
        "example": "ฌู — (редко)",
        "examplePhuketRu": "чу:",
        "exampleEn": "ฌู — (rare)"
      },
      {
        "syllable": "เฌะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "e",
        "example": "เฌะ — (редко)",
        "examplePhuketRu": "чэ",
        "exampleEn": "เฌะ — (rare)"
      },
      {
        "syllable": "เฌ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "ee",
        "example": "เฌ — (редко)",
        "examplePhuketRu": "чэ:",
        "exampleEn": "เฌ — (rare)"
      },
      {
        "syllable": "แฌะ",
        "ruTr": "э",
        "phuketRuTr": "чэ",
        "enTr": "ae",
        "example": "แฌะ — (редко)",
        "examplePhuketRu": "чэ",
        "exampleEn": "แฌะ — (rare)"
      },
      {
        "syllable": "แฌ",
        "ruTr": "э:",
        "phuketRuTr": "чэ:",
        "enTr": "aae",
        "example": "แฌ — (редко)",
        "examplePhuketRu": "чэ:",
        "exampleEn": "แฌ — (rare)"
      },
      {
        "syllable": "โฌะ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "o",
        "example": "โฌะ — (редко)",
        "examplePhuketRu": "чо",
        "exampleEn": "โฌะ — (rare)"
      },
      {
        "syllable": "โฌ",
        "ruTr": "о:",
        "phuketRuTr": "чо:",
        "enTr": "oo",
        "example": "โฌ — (редко)",
        "examplePhuketRu": "чо:",
        "exampleEn": "โฌ — (rare)"
      },
      {
        "syllable": "ฌอ",
        "ruTr": "о",
        "phuketRuTr": "чо",
        "enTr": "aw",
        "example": "ฌอ — (редко)",
        "examplePhuketRu": "чо",
        "exampleEn": "ฌอ — (rare)"
      },
      {
        "syllable": "ฌำ",
        "ruTr": "ам",
        "phuketRuTr": "чам",
        "enTr": "am",
        "example": "ฌำ — (редко)",
        "examplePhuketRu": "чам",
        "exampleEn": "ฌำ — (rare)"
      },
      {
        "syllable": "ใฌ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ใฌ — слог",
        "examplePhuketRu": "чай",
        "exampleEn": "ใฌ — syllable"
      },
      {
        "syllable": "ไฌ",
        "ruTr": "ай",
        "phuketRuTr": "чай",
        "enTr": "ai",
        "example": "ไฌ — слог",
        "examplePhuketRu": "чай",
        "exampleEn": "ไฌ — syllable"
      }
    ],
    "words": [
      {
        "thai": "เฌอ",
        "ruTr": "чхə",
        "phuketRuTr": "чə",
        "enTr": "choe",
        "translation": "дерево (книжн.)",
        "translationEn": "tree (literary)"
      },
      {
        "thai": "ฌาน",
        "ruTr": "ча:н",
        "phuketRuTr": "ча:н",
        "enTr": "chaan",
        "translation": "медитация (пали)",
        "translationEn": "meditation (Pali)"
      },
      {
        "thai": "ฌาปน",
        "ruTr": "ча:пон",
        "phuketRuTr": "ча:пон",
        "enTr": "chaapon",
        "translation": "кремация",
        "translationEn": "cremation"
      },
      {
        "thai": "ฌาปนกิจ",
        "ruTr": "ча:пон кит",
        "phuketRuTr": "ча:пон кит",
        "enTr": "chaapon kit",
        "translation": "похоронные обряды",
        "translationEn": "funeral rites"
      }
    ],
    "phrases": [
      {
        "thai": "ฌาปนกิจสงเคราะห์",
        "ruTr": "ча:пон кит сонгкхро:",
        "phuketRuTr": "ча:пон кит сонккло:",
        "enTr": "chaapon kit songkhro",
        "translation": "ритуал кремации",
        "translationEn": "cremation ritual"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква, в основном в санскрите",
        "translationEn": "rare letter, mainly in Sanskrit"
      }
    ],
    "meaningEn": "tree"
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
        "examplePhuketRu": "йа",
        "exampleEn": "ญะ — (rare)"
      },
      {
        "syllable": "ญา",
        "ruTr": "а:",
        "phuketRuTr": "йа:",
        "enTr": "aa",
        "example": "ญา — (редко)",
        "examplePhuketRu": "йа:",
        "exampleEn": "ญา — (rare)"
      },
      {
        "syllable": "ญิ",
        "ruTr": "и",
        "phuketRuTr": "йи",
        "enTr": "i",
        "example": "ญิ — (редко)",
        "examplePhuketRu": "йи",
        "exampleEn": "ญิ — (rare)"
      },
      {
        "syllable": "ญี",
        "ruTr": "и:",
        "phuketRuTr": "йи:",
        "enTr": "ii",
        "example": "ญี — (редко)",
        "examplePhuketRu": "йи:",
        "exampleEn": "ญี — (rare)"
      },
      {
        "syllable": "ญุ",
        "ruTr": "у",
        "phuketRuTr": "йу",
        "enTr": "u",
        "example": "ญุ — (редко)",
        "examplePhuketRu": "йу",
        "exampleEn": "ญุ — (rare)"
      },
      {
        "syllable": "ญู",
        "ruTr": "у:",
        "phuketRuTr": "йу:",
        "enTr": "uu",
        "example": "ญู — (редко)",
        "examplePhuketRu": "йу:",
        "exampleEn": "ญู — (rare)"
      },
      {
        "syllable": "เญะ",
        "ruTr": "э",
        "phuketRuTr": "йэ",
        "enTr": "e",
        "example": "เญะ — (редко)",
        "examplePhuketRu": "йэ",
        "exampleEn": "เญะ — (rare)"
      },
      {
        "syllable": "เญ",
        "ruTr": "э:",
        "phuketRuTr": "йэ:",
        "enTr": "ee",
        "example": "เญ — (редко)",
        "examplePhuketRu": "йэ:",
        "exampleEn": "เญ — (rare)"
      },
      {
        "syllable": "แญะ",
        "ruTr": "э",
        "phuketRuTr": "йэ",
        "enTr": "ae",
        "example": "แญะ — (редко)",
        "examplePhuketRu": "йэ",
        "exampleEn": "แญะ — (rare)"
      },
      {
        "syllable": "แญ",
        "ruTr": "э:",
        "phuketRuTr": "йэ:",
        "enTr": "aae",
        "example": "แญ — (редко)",
        "examplePhuketRu": "йэ:",
        "exampleEn": "แญ — (rare)"
      },
      {
        "syllable": "โญะ",
        "ruTr": "о",
        "phuketRuTr": "йо",
        "enTr": "o",
        "example": "โญะ — (редко)",
        "examplePhuketRu": "йо",
        "exampleEn": "โญะ — (rare)"
      },
      {
        "syllable": "โญ",
        "ruTr": "о:",
        "phuketRuTr": "йо:",
        "enTr": "oo",
        "example": "โญ — (редко)",
        "examplePhuketRu": "йо:",
        "exampleEn": "โญ — (rare)"
      },
      {
        "syllable": "ญอ",
        "ruTr": "о",
        "phuketRuTr": "йо",
        "enTr": "aw",
        "example": "ญอ — (редко)",
        "examplePhuketRu": "йо",
        "exampleEn": "ญอ — (rare)"
      },
      {
        "syllable": "ญำ",
        "ruTr": "ам",
        "phuketRuTr": "йам",
        "enTr": "am",
        "example": "ญำ — (редко)",
        "examplePhuketRu": "йам",
        "exampleEn": "ญำ — (rare)"
      },
      {
        "syllable": "ใญ",
        "ruTr": "ай",
        "phuketRuTr": "йай",
        "enTr": "ai",
        "example": "ใญ — слог",
        "examplePhuketRu": "йай",
        "exampleEn": "ใญ — syllable"
      },
      {
        "syllable": "ไญ",
        "ruTr": "ай",
        "phuketRuTr": "йай",
        "enTr": "ai",
        "example": "ไญ — слог",
        "examplePhuketRu": "йай",
        "exampleEn": "ไญ — syllable"
      }
    ],
    "words": [
      {
        "thai": "หญิง",
        "ruTr": "йинг",
        "phuketRuTr": "йинк",
        "enTr": "ying",
        "translation": "женщина",
        "translationEn": "woman"
      },
      {
        "thai": "ญาติ",
        "ruTr": "я:ти",
        "phuketRuTr": "я:ти",
        "enTr": "yaat",
        "translation": "родственник",
        "translationEn": "relative"
      },
      {
        "thai": "ญี่ปุ่น",
        "ruTr": "йипун",
        "phuketRuTr": "йипун",
        "enTr": "yiipun",
        "translation": "Япония",
        "translationEn": "Japan"
      },
      {
        "thai": "ญวน",
        "ruTr": "йуан",
        "phuketRuTr": "йуан",
        "enTr": "yuan",
        "translation": "вьетнамец (устар.)",
        "translationEn": "Vietnamese (archaic)"
      }
    ],
    "phrases": [
      {
        "thai": "ญาติพี่น้อง",
        "ruTr": "я:ти пхи: но:нг",
        "phuketRuTr": "я:ти пи: но:нк",
        "enTr": "yaat phii nong",
        "translation": "родня / родственники",
        "translationEn": "relatives / family"
      },
      {
        "thai": "ผู้หญิง",
        "ruTr": "пху: йинг",
        "phuketRuTr": "пу: йинк",
        "enTr": "phuu ying",
        "translation": "женщина / дама",
        "translationEn": "woman / lady"
      }
    ],
    "meaningEn": "woman"
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
        "examplePhuketRu": "та",
        "exampleEn": "ฐะ — (rare)"
      },
      {
        "syllable": "ฐา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ฐา — (редко)",
        "examplePhuketRu": "та:",
        "exampleEn": "ฐา — (rare)"
      },
      {
        "syllable": "ฐิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ฐิ — (редко)",
        "examplePhuketRu": "ти",
        "exampleEn": "ฐิ — (rare)"
      },
      {
        "syllable": "ฐี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ฐี — (редко)",
        "examplePhuketRu": "ти:",
        "exampleEn": "ฐี — (rare)"
      },
      {
        "syllable": "ฐุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ฐุ — (редко)",
        "examplePhuketRu": "ту",
        "exampleEn": "ฐุ — (rare)"
      },
      {
        "syllable": "ฐู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ฐู — (редко)",
        "examplePhuketRu": "ту:",
        "exampleEn": "ฐู — (rare)"
      },
      {
        "syllable": "เฐะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เฐะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "เฐะ — (rare)"
      },
      {
        "syllable": "เฐ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เฐ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "เฐ — (rare)"
      },
      {
        "syllable": "แฐะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แฐะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "แฐะ — (rare)"
      },
      {
        "syllable": "แฐ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แฐ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "แฐ — (rare)"
      },
      {
        "syllable": "โฐะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โฐะ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "โฐะ — (rare)"
      },
      {
        "syllable": "โฐ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โฐ — (редко)",
        "examplePhuketRu": "то:",
        "exampleEn": "โฐ — (rare)"
      },
      {
        "syllable": "ฐอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ฐอ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "ฐอ — (rare)"
      },
      {
        "syllable": "ฐำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ฐำ — (редко)",
        "examplePhuketRu": "там",
        "exampleEn": "ฐำ — (rare)"
      },
      {
        "syllable": "ใฐ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใฐ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ใฐ — syllable"
      },
      {
        "syllable": "ไฐ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไฐ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ไฐ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ฐาน",
        "ruTr": "та:н",
        "phuketRuTr": "та:н",
        "enTr": "thaan",
        "translation": "основание / база",
        "translationEn": "base / foundation"
      },
      {
        "thai": "ฐานะ",
        "ruTr": "та:на:",
        "phuketRuTr": "та:на:",
        "enTr": "thaanaa",
        "translation": "положение / статус",
        "translationEn": "status / position"
      },
      {
        "thai": "ฐานข้อมูล",
        "ruTr": "та:н кхо:му:л",
        "phuketRuTr": "та:н ко:му:л",
        "enTr": "thaan khomuun",
        "translation": "база данных",
        "translationEn": "database"
      },
      {
        "thai": "ฐานทัพ",
        "ruTr": "та:н тхап",
        "phuketRuTr": "та:н тап",
        "enTr": "thaan thap",
        "translation": "военная база",
        "translationEn": "military base"
      }
    ],
    "phrases": [
      {
        "thai": "ฐานข้อมูลกลาง",
        "ruTr": "та:н кхо:му:л кла:нг",
        "phuketRuTr": "та:н ко:му:л кла:нк",
        "enTr": "thaan khomuun klaang",
        "translation": "центральная база данных",
        "translationEn": "central database"
      },
      {
        "thai": "ฐานะทางสังคม",
        "ruTr": "та:на: тха:нг сангкхом",
        "phuketRuTr": "та:на: та:нк санкком",
        "enTr": "thaanaa thaang sangkhom",
        "translation": "социальный статус",
        "translationEn": "social status"
      }
    ],
    "meaningEn": "base / pedestal"
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
        "examplePhuketRu": "та",
        "exampleEn": "ฑะ — (rare)"
      },
      {
        "syllable": "ฑา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ฑา — (редко)",
        "examplePhuketRu": "та:",
        "exampleEn": "ฑา — (rare)"
      },
      {
        "syllable": "ฑิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ฑิ — (редко)",
        "examplePhuketRu": "ти",
        "exampleEn": "ฑิ — (rare)"
      },
      {
        "syllable": "ฑี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ฑี — (редко)",
        "examplePhuketRu": "ти:",
        "exampleEn": "ฑี — (rare)"
      },
      {
        "syllable": "ฑุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ฑุ — (редко)",
        "examplePhuketRu": "ту",
        "exampleEn": "ฑุ — (rare)"
      },
      {
        "syllable": "ฑู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ฑู — (редко)",
        "examplePhuketRu": "ту:",
        "exampleEn": "ฑู — (rare)"
      },
      {
        "syllable": "เฑะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เฑะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "เฑะ — (rare)"
      },
      {
        "syllable": "เฑ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เฑ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "เฑ — (rare)"
      },
      {
        "syllable": "แฑะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แฑะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "แฑะ — (rare)"
      },
      {
        "syllable": "แฑ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แฑ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "แฑ — (rare)"
      },
      {
        "syllable": "โฑะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โฑะ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "โฑะ — (rare)"
      },
      {
        "syllable": "โฑ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โฑ — (редко)",
        "examplePhuketRu": "то:",
        "exampleEn": "โฑ — (rare)"
      },
      {
        "syllable": "ฑอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ฑอ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "ฑอ — (rare)"
      },
      {
        "syllable": "ฑำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ฑำ — (редко)",
        "examplePhuketRu": "там",
        "exampleEn": "ฑำ — (rare)"
      },
      {
        "syllable": "ใฑ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใฑ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ใฑ — syllable"
      },
      {
        "syllable": "ไฑ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไฑ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ไฑ — syllable"
      }
    ],
    "words": [
      {
        "thai": "มณโฑ",
        "ruTr": "монтхо:",
        "phuketRuTr": "монто:",
        "enTr": "montho",
        "translation": "Мантхо (из Рамаяны)",
        "translationEn": "Montho (from Ramayana)"
      },
      {
        "thai": "ฑิต",
        "ruTr": "тхит",
        "phuketRuTr": "тит",
        "enTr": "thit",
        "translation": "(пали) мудрец",
        "translationEn": "(Pali) wise man"
      },
      {
        "thai": "ฑูต",
        "ruTr": "тху:т",
        "phuketRuTr": "ту:т",
        "enTr": "thuut",
        "translation": "посланник (пали)",
        "translationEn": "envoy (Pali)"
      },
      {
        "thai": "ฑิตย์",
        "ruTr": "тхит",
        "phuketRuTr": "тит",
        "enTr": "thit",
        "translation": "мудрый (пали)",
        "translationEn": "wise (Pali)"
      }
    ],
    "phrases": [
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква, в основном в пали/санскрите",
        "translationEn": "rare letter, mainly in Pali/Sanskrit"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "встречается в именах и религиозных текстах",
        "translationEn": "found in names and religious texts"
      }
    ],
    "meaningEn": "Montho (name)"
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
        "examplePhuketRu": "та",
        "exampleEn": "ฒะ — (rare)"
      },
      {
        "syllable": "ฒา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ฒา — (редко)",
        "examplePhuketRu": "та:",
        "exampleEn": "ฒา — (rare)"
      },
      {
        "syllable": "ฒิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ฒิ — (редко)",
        "examplePhuketRu": "ти",
        "exampleEn": "ฒิ — (rare)"
      },
      {
        "syllable": "ฒี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ฒี — (редко)",
        "examplePhuketRu": "ти:",
        "exampleEn": "ฒี — (rare)"
      },
      {
        "syllable": "ฒุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ฒุ — (редко)",
        "examplePhuketRu": "ту",
        "exampleEn": "ฒุ — (rare)"
      },
      {
        "syllable": "ฒู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ฒู — (редко)",
        "examplePhuketRu": "ту:",
        "exampleEn": "ฒู — (rare)"
      },
      {
        "syllable": "เฒะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เฒะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "เฒะ — (rare)"
      },
      {
        "syllable": "เฒ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เฒ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "เฒ — (rare)"
      },
      {
        "syllable": "แฒะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แฒะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "แฒะ — (rare)"
      },
      {
        "syllable": "แฒ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แฒ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "แฒ — (rare)"
      },
      {
        "syllable": "โฒะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โฒะ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "โฒะ — (rare)"
      },
      {
        "syllable": "โฒ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โฒ — (редко)",
        "examplePhuketRu": "то:",
        "exampleEn": "โฒ — (rare)"
      },
      {
        "syllable": "ฒอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ฒอ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "ฒอ — (rare)"
      },
      {
        "syllable": "ฒำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ฒำ — (редко)",
        "examplePhuketRu": "там",
        "exampleEn": "ฒำ — (rare)"
      },
      {
        "syllable": "ใฒ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใฒ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ใฒ — syllable"
      },
      {
        "syllable": "ไฒ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไฒ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ไฒ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ผู้เฒ่า",
        "ruTr": "пху: тха:o",
        "phuketRuTr": "пу: та:o",
        "enTr": "phuu thao",
        "translation": "старец / мудрец",
        "translationEn": "elder / sage"
      },
      {
        "thai": "เฒ่า",
        "ruTr": "тха:o",
        "phuketRuTr": "та:o",
        "enTr": "thao",
        "translation": "старый / престарелый",
        "translationEn": "old / elderly"
      },
      {
        "thai": "ฒ่า",
        "ruTr": "тха:",
        "phuketRuTr": "та:",
        "enTr": "thaa",
        "translation": "(пали) старость",
        "translationEn": "(Pali) old age"
      },
      {
        "thai": "เฒ่าโวย",
        "ruTr": "тха:o вой",
        "phuketRuTr": "та:o вой",
        "enTr": "thao woi",
        "translation": "жаловаться (разг.)",
        "translationEn": "to complain (colloq.)"
      }
    ],
    "phrases": [
      {
        "thai": "ผู้เฒ่าผู้แก่",
        "ruTr": "пху: тха:o пху: кэ:",
        "phuketRuTr": "пу: та:o пу: кэ:",
        "enTr": "phuu thao phuu kae",
        "translation": "пожилые люди",
        "translationEn": "elderly people"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква, в основном в пали",
        "translationEn": "rare letter, mainly in Pali"
      }
    ],
    "meaningEn": "elder"
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
        "examplePhuketRu": "на",
        "exampleEn": "ณะ — (rare)"
      },
      {
        "syllable": "ณา",
        "ruTr": "а:",
        "phuketRuTr": "на:",
        "enTr": "aa",
        "example": "ณา — (редко)",
        "examplePhuketRu": "на:",
        "exampleEn": "ณา — (rare)"
      },
      {
        "syllable": "ณิ",
        "ruTr": "и",
        "phuketRuTr": "ни",
        "enTr": "i",
        "example": "ณิ — (редко)",
        "examplePhuketRu": "ни",
        "exampleEn": "ณิ — (rare)"
      },
      {
        "syllable": "ณี",
        "ruTr": "и:",
        "phuketRuTr": "ни:",
        "enTr": "ii",
        "example": "ณี — (редко)",
        "examplePhuketRu": "ни:",
        "exampleEn": "ณี — (rare)"
      },
      {
        "syllable": "ณุ",
        "ruTr": "у",
        "phuketRuTr": "ну",
        "enTr": "u",
        "example": "ณุ — (редко)",
        "examplePhuketRu": "ну",
        "exampleEn": "ณุ — (rare)"
      },
      {
        "syllable": "ณู",
        "ruTr": "у:",
        "phuketRuTr": "ну:",
        "enTr": "uu",
        "example": "ณู — (редко)",
        "examplePhuketRu": "ну:",
        "exampleEn": "ณู — (rare)"
      },
      {
        "syllable": "เณะ",
        "ruTr": "э",
        "phuketRuTr": "нэ",
        "enTr": "e",
        "example": "เณะ — (редко)",
        "examplePhuketRu": "нэ",
        "exampleEn": "เณะ — (rare)"
      },
      {
        "syllable": "เณ",
        "ruTr": "э:",
        "phuketRuTr": "нэ:",
        "enTr": "ee",
        "example": "เณ — (редко)",
        "examplePhuketRu": "нэ:",
        "exampleEn": "เณ — (rare)"
      },
      {
        "syllable": "แณะ",
        "ruTr": "э",
        "phuketRuTr": "нэ",
        "enTr": "ae",
        "example": "แณะ — (редко)",
        "examplePhuketRu": "нэ",
        "exampleEn": "แณะ — (rare)"
      },
      {
        "syllable": "แณ",
        "ruTr": "э:",
        "phuketRuTr": "нэ:",
        "enTr": "aae",
        "example": "แณ — (редко)",
        "examplePhuketRu": "нэ:",
        "exampleEn": "แณ — (rare)"
      },
      {
        "syllable": "โณะ",
        "ruTr": "о",
        "phuketRuTr": "но",
        "enTr": "o",
        "example": "โณะ — (редко)",
        "examplePhuketRu": "но",
        "exampleEn": "โณะ — (rare)"
      },
      {
        "syllable": "โณ",
        "ruTr": "о:",
        "phuketRuTr": "но:",
        "enTr": "oo",
        "example": "โณ — (редко)",
        "examplePhuketRu": "но:",
        "exampleEn": "โณ — (rare)"
      },
      {
        "syllable": "ณอ",
        "ruTr": "о",
        "phuketRuTr": "но",
        "enTr": "aw",
        "example": "ณอ — (редко)",
        "examplePhuketRu": "но",
        "exampleEn": "ณอ — (rare)"
      },
      {
        "syllable": "ณำ",
        "ruTr": "ам",
        "phuketRuTr": "нам",
        "enTr": "am",
        "example": "ณำ — (редко)",
        "examplePhuketRu": "нам",
        "exampleEn": "ณำ — (rare)"
      },
      {
        "syllable": "ใณ",
        "ruTr": "ай",
        "phuketRuTr": "най",
        "enTr": "ai",
        "example": "ใณ — слог",
        "examplePhuketRu": "най",
        "exampleEn": "ใณ — syllable"
      },
      {
        "syllable": "ไณ",
        "ruTr": "ай",
        "phuketRuTr": "най",
        "enTr": "ai",
        "example": "ไณ — слог",
        "examplePhuketRu": "най",
        "exampleEn": "ไณ — syllable"
      }
    ],
    "words": [
      {
        "thai": "เณร",
        "ruTr": "нэн",
        "phuketRuTr": "нэн",
        "enTr": "nen",
        "translation": "послушник / новиций",
        "translationEn": "novice monk"
      },
      {
        "thai": "ณรงค์",
        "ruTr": "наронг",
        "phuketRuTr": "налонк",
        "enTr": "narong",
        "translation": "усилие / настойчивость",
        "translationEn": "effort / persistence"
      },
      {
        "thai": "ณัฐ",
        "ruTr": "нат",
        "phuketRuTr": "нат",
        "enTr": "nat",
        "translation": "мудрость (в именах)",
        "translationEn": "wisdom (in names)"
      },
      {
        "thai": "ณรงค์",
        "ruTr": "наронг",
        "phuketRuTr": "налонк",
        "enTr": "narong",
        "translation": "кампания / усилие",
        "translationEn": "campaign / effort"
      }
    ],
    "phrases": [
      {
        "thai": "เณรหน้าไฟ",
        "ruTr": "нэн на: фай",
        "phuketRuTr": "нэн на: фай",
        "enTr": "nen naa fai",
        "translation": "послушник (разг.)",
        "translationEn": "novice monk (colloq.)"
      },
      {
        "thai": "ณรงค์ปฏิบัติ",
        "ruTr": "наронг патибат",
        "phuketRuTr": "налонк патибат",
        "enTr": "narong patibat",
        "translation": "настойчивая практика",
        "translationEn": "persistent practice"
      }
    ],
    "meaningEn": "novice monk"
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
        "examplePhuketRu": "да",
        "exampleEn": "ฎะ — (rare)"
      },
      {
        "syllable": "ฎา",
        "ruTr": "а:",
        "phuketRuTr": "да:",
        "enTr": "aa",
        "example": "ฎา — (редко)",
        "examplePhuketRu": "да:",
        "exampleEn": "ฎา — (rare)"
      },
      {
        "syllable": "ฎิ",
        "ruTr": "и",
        "phuketRuTr": "ди",
        "enTr": "i",
        "example": "ฎิ — (редко)",
        "examplePhuketRu": "ди",
        "exampleEn": "ฎิ — (rare)"
      },
      {
        "syllable": "ฎี",
        "ruTr": "и:",
        "phuketRuTr": "ди:",
        "enTr": "ii",
        "example": "ฎี — (редко)",
        "examplePhuketRu": "ди:",
        "exampleEn": "ฎี — (rare)"
      },
      {
        "syllable": "ฎุ",
        "ruTr": "у",
        "phuketRuTr": "ду",
        "enTr": "u",
        "example": "ฎุ — (редко)",
        "examplePhuketRu": "ду",
        "exampleEn": "ฎุ — (rare)"
      },
      {
        "syllable": "ฎู",
        "ruTr": "у:",
        "phuketRuTr": "ду:",
        "enTr": "uu",
        "example": "ฎู — (редко)",
        "examplePhuketRu": "ду:",
        "exampleEn": "ฎู — (rare)"
      },
      {
        "syllable": "เฎะ",
        "ruTr": "э",
        "phuketRuTr": "дэ",
        "enTr": "e",
        "example": "เฎะ — (редко)",
        "examplePhuketRu": "дэ",
        "exampleEn": "เฎะ — (rare)"
      },
      {
        "syllable": "เฎ",
        "ruTr": "э:",
        "phuketRuTr": "дэ:",
        "enTr": "ee",
        "example": "เฎ — (редко)",
        "examplePhuketRu": "дэ:",
        "exampleEn": "เฎ — (rare)"
      },
      {
        "syllable": "แฎะ",
        "ruTr": "э",
        "phuketRuTr": "дэ",
        "enTr": "ae",
        "example": "แฎะ — (редко)",
        "examplePhuketRu": "дэ",
        "exampleEn": "แฎะ — (rare)"
      },
      {
        "syllable": "แฎ",
        "ruTr": "э:",
        "phuketRuTr": "дэ:",
        "enTr": "aae",
        "example": "แฎ — (редко)",
        "examplePhuketRu": "дэ:",
        "exampleEn": "แฎ — (rare)"
      },
      {
        "syllable": "โฎะ",
        "ruTr": "о",
        "phuketRuTr": "до",
        "enTr": "o",
        "example": "โฎะ — (редко)",
        "examplePhuketRu": "до",
        "exampleEn": "โฎะ — (rare)"
      },
      {
        "syllable": "โฎ",
        "ruTr": "о:",
        "phuketRuTr": "до:",
        "enTr": "oo",
        "example": "โฎ — (редко)",
        "examplePhuketRu": "до:",
        "exampleEn": "โฎ — (rare)"
      },
      {
        "syllable": "ฎอ",
        "ruTr": "о",
        "phuketRuTr": "до",
        "enTr": "aw",
        "example": "ฎอ — (редко)",
        "examplePhuketRu": "до",
        "exampleEn": "ฎอ — (rare)"
      },
      {
        "syllable": "ฎำ",
        "ruTr": "ам",
        "phuketRuTr": "дам",
        "enTr": "am",
        "example": "ฎำ — (редко)",
        "examplePhuketRu": "дам",
        "exampleEn": "ฎำ — (rare)"
      },
      {
        "syllable": "ใฎ",
        "ruTr": "ай",
        "phuketRuTr": "дай",
        "enTr": "ai",
        "example": "ใฎ — слог",
        "examplePhuketRu": "дай",
        "exampleEn": "ใฎ — syllable"
      },
      {
        "syllable": "ไฎ",
        "ruTr": "ай",
        "phuketRuTr": "дай",
        "enTr": "ai",
        "example": "ไฎ — слог",
        "examplePhuketRu": "дай",
        "exampleEn": "ไฎ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ชฎา",
        "ruTr": "чхада:",
        "phuketRuTr": "чада:",
        "enTr": "chadaa",
        "translation": "корона / тиара",
        "translationEn": "crown / tiara"
      },
      {
        "thai": "ฎีกา",
        "ruTr": "дика:",
        "phuketRuTr": "дика:",
        "enTr": "diikaa",
        "translation": "петиция / жалоба",
        "translationEn": "petition / complaint"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква",
        "translationEn": "rare letter"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "в основном в санскрите",
        "translationEn": "mainly in Sanskrit"
      }
    ],
    "phrases": [
      {
        "thai": "ยื่นฎีกา",
        "ruTr": "юн дика:",
        "phuketRuTr": "юн дика:",
        "enTr": "yuen diikaa",
        "translation": "подать петицию",
        "translationEn": "to submit a petition"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква",
        "translationEn": "rare letter"
      }
    ],
    "meaningEn": "crown"
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
        "examplePhuketRu": "та",
        "exampleEn": "ฏะ — (rare)"
      },
      {
        "syllable": "ฏา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ฏา — (редко)",
        "examplePhuketRu": "та:",
        "exampleEn": "ฏา — (rare)"
      },
      {
        "syllable": "ฏิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ฏิ — (редко)",
        "examplePhuketRu": "ти",
        "exampleEn": "ฏิ — (rare)"
      },
      {
        "syllable": "ฏี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ฏี — (редко)",
        "examplePhuketRu": "ти:",
        "exampleEn": "ฏี — (rare)"
      },
      {
        "syllable": "ฏุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ฏุ — (редко)",
        "examplePhuketRu": "ту",
        "exampleEn": "ฏุ — (rare)"
      },
      {
        "syllable": "ฏู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ฏู — (редко)",
        "examplePhuketRu": "ту:",
        "exampleEn": "ฏู — (rare)"
      },
      {
        "syllable": "เฏะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เฏะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "เฏะ — (rare)"
      },
      {
        "syllable": "เฏ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เฏ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "เฏ — (rare)"
      },
      {
        "syllable": "แฏะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แฏะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "แฏะ — (rare)"
      },
      {
        "syllable": "แฏ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แฏ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "แฏ — (rare)"
      },
      {
        "syllable": "โฏะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โฏะ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "โฏะ — (rare)"
      },
      {
        "syllable": "โฏ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โฏ — (редко)",
        "examplePhuketRu": "то:",
        "exampleEn": "โฏ — (rare)"
      },
      {
        "syllable": "ฏอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ฏอ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "ฏอ — (rare)"
      },
      {
        "syllable": "ฏำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ฏำ — (редко)",
        "examplePhuketRu": "там",
        "exampleEn": "ฏำ — (rare)"
      },
      {
        "syllable": "ใฏ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใฏ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ใฏ — syllable"
      },
      {
        "syllable": "ไฏ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไฏ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ไฏ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ปฏัก",
        "ruTr": "патак",
        "phuketRuTr": "патак",
        "enTr": "patak",
        "translation": "острый кол / шпора",
        "translationEn": "goad / spur"
      },
      {
        "thai": "ฏฐาน",
        "ruTr": "татха:н",
        "phuketRuTr": "тата:н",
        "enTr": "tathaan",
        "translation": "(санскрит) основание",
        "translationEn": "(Sanskrit) base"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква",
        "translationEn": "rare letter"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "в основном в санскрите",
        "translationEn": "mainly in Sanskrit"
      }
    ],
    "phrases": [
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква",
        "translationEn": "rare letter"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "в основном в пали/санскрите",
        "translationEn": "mainly in Pali/Sanskrit"
      }
    ],
    "meaningEn": "spear / goad"
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
        "examplePhuketRu": "да",
        "exampleEn": "ดะ — (rare)"
      },
      {
        "syllable": "ดา",
        "ruTr": "а:",
        "phuketRuTr": "да:",
        "enTr": "aa",
        "example": "ดา — звезда",
        "examplePhuketRu": "да:",
        "exampleEn": "ดา — star"
      },
      {
        "syllable": "ดิ",
        "ruTr": "и",
        "phuketRuTr": "ди",
        "enTr": "i",
        "example": "ดิ — (редко)",
        "examplePhuketRu": "ди",
        "exampleEn": "ดิ — (rare)"
      },
      {
        "syllable": "ดี",
        "ruTr": "и:",
        "phuketRuTr": "ди:",
        "enTr": "ii",
        "example": "ดี — хорошо",
        "examplePhuketRu": "ди:",
        "exampleEn": "ดี — good"
      },
      {
        "syllable": "ดุ",
        "ruTr": "у",
        "phuketRuTr": "ду",
        "enTr": "u",
        "example": "ดุ — (редко)",
        "examplePhuketRu": "ду",
        "exampleEn": "ดุ — (rare)"
      },
      {
        "syllable": "ดู",
        "ruTr": "у:",
        "phuketRuTr": "ду:",
        "enTr": "uu",
        "example": "ดู — смотреть",
        "examplePhuketRu": "ду:",
        "exampleEn": "ดู — to watch"
      },
      {
        "syllable": "เดะ",
        "ruTr": "э",
        "phuketRuTr": "дэ",
        "enTr": "e",
        "example": "เดะ — (редко)",
        "examplePhuketRu": "дэ",
        "exampleEn": "เดะ — (rare)"
      },
      {
        "syllable": "เด",
        "ruTr": "э:",
        "phuketRuTr": "дэ:",
        "enTr": "ee",
        "example": "เด — (редко)",
        "examplePhuketRu": "дэ:",
        "exampleEn": "เด — (rare)"
      },
      {
        "syllable": "แดะ",
        "ruTr": "э",
        "phuketRuTr": "дэ",
        "enTr": "ae",
        "example": "แดะ — (редко)",
        "examplePhuketRu": "дэ",
        "exampleEn": "แดะ — (rare)"
      },
      {
        "syllable": "แด",
        "ruTr": "э:",
        "phuketRuTr": "дэ:",
        "enTr": "aae",
        "example": "แด — (редко)",
        "examplePhuketRu": "дэ:",
        "exampleEn": "แด — (rare)"
      },
      {
        "syllable": "โดะ",
        "ruTr": "о",
        "phuketRuTr": "до",
        "enTr": "o",
        "example": "โดะ — (редко)",
        "examplePhuketRu": "до",
        "exampleEn": "โดะ — (rare)"
      },
      {
        "syllable": "โด",
        "ruTr": "о:",
        "phuketRuTr": "до:",
        "enTr": "oo",
        "example": "โด — (редко)",
        "examplePhuketRu": "до:",
        "exampleEn": "โด — (rare)"
      },
      {
        "syllable": "ดอ",
        "ruTr": "о",
        "phuketRuTr": "до",
        "enTr": "aw",
        "example": "ดอ — (редко)",
        "examplePhuketRu": "до",
        "exampleEn": "ดอ — (rare)"
      },
      {
        "syllable": "ดำ",
        "ruTr": "ам",
        "phuketRuTr": "дам",
        "enTr": "am",
        "example": "ดำ — чёрный",
        "examplePhuketRu": "дам",
        "exampleEn": "ดำ — black"
      },
      {
        "syllable": "ใด",
        "ruTr": "ай",
        "phuketRuTr": "дай",
        "enTr": "ai",
        "example": "ใด — слог",
        "examplePhuketRu": "дай",
        "exampleEn": "ใด — syllable"
      },
      {
        "syllable": "ได",
        "ruTr": "ай",
        "phuketRuTr": "дай",
        "enTr": "ai",
        "example": "ได — слог",
        "examplePhuketRu": "дай",
        "exampleEn": "ได — syllable"
      }
    ],
    "words": [
      {
        "thai": "ดี",
        "ruTr": "ди:",
        "phuketRuTr": "ди:",
        "enTr": "dii",
        "translation": "хороший",
        "translationEn": "good"
      },
      {
        "thai": "ดู",
        "ruTr": "ду:",
        "phuketRuTr": "ду:",
        "enTr": "duu",
        "translation": "смотреть",
        "translationEn": "to watch"
      },
      {
        "thai": "ดื่ม",
        "ruTr": "дым",
        "phuketRuTr": "дым",
        "enTr": "duem",
        "translation": "пить",
        "translationEn": "to drink"
      },
      {
        "thai": "ดอกไม้",
        "ruTr": "до:к май",
        "phuketRuTr": "до:к май",
        "enTr": "dok mai",
        "translation": "цветок",
        "translationEn": "flower"
      }
    ],
    "phrases": [
      {
        "thai": "ดีมาก",
        "ruTr": "ди: ма:к",
        "phuketRuTr": "ди: ма:к",
        "enTr": "dii maak",
        "translation": "очень хорошо",
        "translationEn": "very good"
      },
      {
        "thai": "ดูแล",
        "ruTr": "ду: ла:е",
        "phuketRuTr": "ду: ла:е",
        "enTr": "duu lae",
        "translation": "заботиться",
        "translationEn": "to take care"
      }
    ],
    "meaningEn": "child"
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
        "examplePhuketRu": "та",
        "exampleEn": "ตะ — (rare)"
      },
      {
        "syllable": "ตา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ตา — глаз",
        "examplePhuketRu": "та:",
        "exampleEn": "ตา — eye"
      },
      {
        "syllable": "ติ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ติ — (редко)",
        "examplePhuketRu": "ти",
        "exampleEn": "ติ — (rare)"
      },
      {
        "syllable": "ตี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ตี — бить",
        "examplePhuketRu": "ти:",
        "exampleEn": "ตี — to beat"
      },
      {
        "syllable": "ตุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ตุ — (редко)",
        "examplePhuketRu": "ту",
        "exampleEn": "ตุ — (rare)"
      },
      {
        "syllable": "ตู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ตู — (редко)",
        "examplePhuketRu": "ту:",
        "exampleEn": "ตู — (rare)"
      },
      {
        "syllable": "เตะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เตะ — пинать",
        "examplePhuketRu": "тэ",
        "exampleEn": "เตะ — to kick"
      },
      {
        "syllable": "เต",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เต — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "เต — (rare)"
      },
      {
        "syllable": "แตะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แตะ — трогать",
        "examplePhuketRu": "тэ",
        "exampleEn": "แตะ — to touch"
      },
      {
        "syllable": "แต",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แต — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "แต — (rare)"
      },
      {
        "syllable": "โตะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โตะ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "โตะ — (rare)"
      },
      {
        "syllable": "โต",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โต — большой",
        "examplePhuketRu": "то:",
        "exampleEn": "โต — big"
      },
      {
        "syllable": "ตอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ตอ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "ตอ — (rare)"
      },
      {
        "syllable": "ตำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ตำ — песто/толочь",
        "examplePhuketRu": "там",
        "exampleEn": "ตำ — to pound"
      },
      {
        "syllable": "ใต",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใต — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ใต — syllable"
      },
      {
        "syllable": "ไต",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไต — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ไต — syllable"
      }
    ],
    "words": [
      {
        "thai": "ตอนนี้",
        "ruTr": "то:н ни:",
        "phuketRuTr": "то:н ни:",
        "enTr": "ton nii",
        "translation": "сейчас",
        "translationEn": "now"
      },
      {
        "thai": "ตาม",
        "ruTr": "та:м",
        "phuketRuTr": "та:м",
        "enTr": "taam",
        "translation": "следовать",
        "translationEn": "to follow"
      },
      {
        "thai": "ต้องการ",
        "ruTr": "то:нг ка:н",
        "phuketRuTr": "то:нк ка:н",
        "enTr": "tong gaan",
        "translation": "нуждаться",
        "translationEn": "to need"
      },
      {
        "thai": "ต่อไป",
        "ruTr": "то: пай",
        "phuketRuTr": "то: пай",
        "enTr": "to pai",
        "translation": "вперёд",
        "translationEn": "forward"
      }
    ],
    "phrases": [
      {
        "thai": "ตอนนี้อยู่ที่ไหน",
        "ruTr": "то:н ни: ю: тхи: най",
        "phuketRuTr": "то:н ни: ю: ти: най",
        "enTr": "ton nii yuu thii nai",
        "translation": "Где ты сейчас?",
        "translationEn": "Where are you now?"
      },
      {
        "thai": "ต้องการอะไร",
        "ruTr": "то:нг ка:н арай",
        "phuketRuTr": "то:нк ка:н алай",
        "enTr": "tong gaan a-rai",
        "translation": "Что вам нужно?",
        "translationEn": "What do you need?"
      }
    ],
    "meaningEn": "turtle"
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
        "examplePhuketRu": "та",
        "exampleEn": "ถะ — (rare)"
      },
      {
        "syllable": "ถา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ถา — (редко)",
        "examplePhuketRu": "та:",
        "exampleEn": "ถา — (rare)"
      },
      {
        "syllable": "ถิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ถิ — (редко)",
        "examplePhuketRu": "ти",
        "exampleEn": "ถิ — (rare)"
      },
      {
        "syllable": "ถี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ถี — (редко)",
        "examplePhuketRu": "ти:",
        "exampleEn": "ถี — (rare)"
      },
      {
        "syllable": "ถุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ถุ — (редко)",
        "examplePhuketRu": "ту",
        "exampleEn": "ถุ — (rare)"
      },
      {
        "syllable": "ถู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ถู — мыть/дёшево",
        "examplePhuketRu": "ту:",
        "exampleEn": "ถู — wash / cheap"
      },
      {
        "syllable": "เถะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เถะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "เถะ — (rare)"
      },
      {
        "syllable": "เถ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เถ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "เถ — (rare)"
      },
      {
        "syllable": "แถะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แถะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "แถะ — (rare)"
      },
      {
        "syllable": "แถ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แถ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "แถ — (rare)"
      },
      {
        "syllable": "โถะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โถะ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "โถะ — (rare)"
      },
      {
        "syllable": "โถ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โถ — кувшин",
        "examplePhuketRu": "то:",
        "exampleEn": "โถ — jar"
      },
      {
        "syllable": "ถอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ถอ — вытаскивать",
        "examplePhuketRu": "то",
        "exampleEn": "ถอ — to pull out"
      },
      {
        "syllable": "ถำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ถำ — (редко)",
        "examplePhuketRu": "там",
        "exampleEn": "ถำ — (rare)"
      },
      {
        "syllable": "ใถ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใถ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ใถ — syllable"
      },
      {
        "syllable": "ไถ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไถ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ไถ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ถุง",
        "ruTr": "тхунг",
        "phuketRuTr": "тунк",
        "enTr": "thung",
        "translation": "мешок / пакет",
        "translationEn": "bag / packet"
      },
      {
        "thai": "ถูก",
        "ruTr": "тхук",
        "phuketRuTr": "тук",
        "enTr": "thuuk",
        "translation": "дёшево / правильно",
        "translationEn": "cheap / correct"
      },
      {
        "thai": "ถาม",
        "ruTr": "та:м",
        "phuketRuTr": "та:м",
        "enTr": "thaam",
        "translation": "спрашивать",
        "translationEn": "to ask"
      },
      {
        "thai": "ถนน",
        "ruTr": "тханон",
        "phuketRuTr": "танон",
        "enTr": "thanon",
        "translation": "улица / дорога",
        "translationEn": "street / road"
      }
    ],
    "phrases": [
      {
        "thai": "ถามทาง",
        "ruTr": "та:м та:нг",
        "phuketRuTr": "та:м та:нк",
        "enTr": "thaam thaang",
        "translation": "спросить дорогу",
        "translationEn": "to ask for directions"
      },
      {
        "thai": "ถูกมาก",
        "ruTr": "тхук ма:к",
        "phuketRuTr": "тук ма:к",
        "enTr": "thuuk maak",
        "translation": "очень дёшево",
        "translationEn": "very cheap"
      }
    ],
    "meaningEn": "bag"
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
        "examplePhuketRu": "та",
        "exampleEn": "ทะ — (rare)"
      },
      {
        "syllable": "ทา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ทา — мазать",
        "examplePhuketRu": "та:",
        "exampleEn": "ทา — to smear"
      },
      {
        "syllable": "ทิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ทิ — (редко)",
        "examplePhuketRu": "ти",
        "exampleEn": "ทิ — (rare)"
      },
      {
        "syllable": "ที",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ที — (редко)",
        "examplePhuketRu": "ти:",
        "exampleEn": "ที — (rare)"
      },
      {
        "syllable": "ทุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ทุ — (редко)",
        "examplePhuketRu": "ту",
        "exampleEn": "ทุ — (rare)"
      },
      {
        "syllable": "ทู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ทู — (редко)",
        "examplePhuketRu": "ту:",
        "exampleEn": "ทู — (rare)"
      },
      {
        "syllable": "เทะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เท — наливать",
        "examplePhuketRu": "тэ",
        "exampleEn": "เท — to pour"
      },
      {
        "syllable": "เท",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เท — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "เท — (rare)"
      },
      {
        "syllable": "แทะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แทะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "แทะ — (rare)"
      },
      {
        "syllable": "แท",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แท — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "แท — (rare)"
      },
      {
        "syllable": "โทะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โทะ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "โทะ — (rare)"
      },
      {
        "syllable": "โท",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โท — (редко)",
        "examplePhuketRu": "то:",
        "exampleEn": "โท — (rare)"
      },
      {
        "syllable": "ทอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ทอ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "ทอ — (rare)"
      },
      {
        "syllable": "ทำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ทำ — делать",
        "examplePhuketRu": "там",
        "exampleEn": "ทำ — to do"
      },
      {
        "syllable": "ใท",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใท — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ใท — syllable"
      },
      {
        "syllable": "ไท",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไท — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ไท — syllable"
      }
    ],
    "words": [
      {
        "thai": "ทำ",
        "ruTr": "тхам",
        "phuketRuTr": "там",
        "enTr": "tham",
        "translation": "делать",
        "translationEn": "to do"
      },
      {
        "thai": "ที่",
        "ruTr": "тхи:",
        "phuketRuTr": "ти:",
        "enTr": "thii",
        "translation": "место / который",
        "translationEn": "place / which"
      },
      {
        "thai": "ทุก",
        "ruTr": "тхук",
        "phuketRuTr": "тук",
        "enTr": "thuk",
        "translation": "каждый / все",
        "translationEn": "every / all"
      },
      {
        "thai": "ทาง",
        "ruTr": "та:нг",
        "phuketRuTr": "та:нк",
        "enTr": "thaang",
        "translation": "путь / дорога",
        "translationEn": "path / road"
      }
    ],
    "phrases": [
      {
        "thai": "ทำอะไร",
        "ruTr": "тхам арай",
        "phuketRuTr": "там алай",
        "enTr": "tham a-rai",
        "translation": "Что делаешь?",
        "translationEn": "What are you doing?"
      },
      {
        "thai": "ทุกวัน",
        "ruTr": "тхук ван",
        "phuketRuTr": "тук ван",
        "enTr": "thuk wan",
        "translation": "каждый день",
        "translationEn": "every day"
      }
    ],
    "meaningEn": "soldier"
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
        "examplePhuketRu": "та",
        "exampleEn": "ธะ — (rare)"
      },
      {
        "syllable": "ธา",
        "ruTr": "а:",
        "phuketRuTr": "та:",
        "enTr": "aa",
        "example": "ธา — (редко)",
        "examplePhuketRu": "та:",
        "exampleEn": "ธา — (rare)"
      },
      {
        "syllable": "ธิ",
        "ruTr": "и",
        "phuketRuTr": "ти",
        "enTr": "i",
        "example": "ธิ — (редко)",
        "examplePhuketRu": "ти",
        "exampleEn": "ธิ — (rare)"
      },
      {
        "syllable": "ธี",
        "ruTr": "и:",
        "phuketRuTr": "ти:",
        "enTr": "ii",
        "example": "ธี — (редко)",
        "examplePhuketRu": "ти:",
        "exampleEn": "ธี — (rare)"
      },
      {
        "syllable": "ธุ",
        "ruTr": "у",
        "phuketRuTr": "ту",
        "enTr": "u",
        "example": "ธุ — (редко)",
        "examplePhuketRu": "ту",
        "exampleEn": "ธุ — (rare)"
      },
      {
        "syllable": "ธู",
        "ruTr": "у:",
        "phuketRuTr": "ту:",
        "enTr": "uu",
        "example": "ธู — (редко)",
        "examplePhuketRu": "ту:",
        "exampleEn": "ธู — (rare)"
      },
      {
        "syllable": "เธะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "e",
        "example": "เธะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "เธะ — (rare)"
      },
      {
        "syllable": "เธ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "ee",
        "example": "เธ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "เธ — (rare)"
      },
      {
        "syllable": "แธะ",
        "ruTr": "э",
        "phuketRuTr": "тэ",
        "enTr": "ae",
        "example": "แธะ — (редко)",
        "examplePhuketRu": "тэ",
        "exampleEn": "แธะ — (rare)"
      },
      {
        "syllable": "แธ",
        "ruTr": "э:",
        "phuketRuTr": "тэ:",
        "enTr": "aae",
        "example": "แธ — (редко)",
        "examplePhuketRu": "тэ:",
        "exampleEn": "แธ — (rare)"
      },
      {
        "syllable": "โธะ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "o",
        "example": "โธะ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "โธะ — (rare)"
      },
      {
        "syllable": "โธ",
        "ruTr": "о:",
        "phuketRuTr": "то:",
        "enTr": "oo",
        "example": "โธ — (редко)",
        "examplePhuketRu": "то:",
        "exampleEn": "โธ — (rare)"
      },
      {
        "syllable": "ธอ",
        "ruTr": "о",
        "phuketRuTr": "то",
        "enTr": "aw",
        "example": "ธอ — (редко)",
        "examplePhuketRu": "то",
        "exampleEn": "ธอ — (rare)"
      },
      {
        "syllable": "ธำ",
        "ruTr": "ам",
        "phuketRuTr": "там",
        "enTr": "am",
        "example": "ธำ — (редко)",
        "examplePhuketRu": "там",
        "exampleEn": "ธำ — (rare)"
      },
      {
        "syllable": "ใธ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ใธ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ใธ — syllable"
      },
      {
        "syllable": "ไธ",
        "ruTr": "ай",
        "phuketRuTr": "тай",
        "enTr": "ai",
        "example": "ไธ — слог",
        "examplePhuketRu": "тай",
        "exampleEn": "ไธ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ธง",
        "ruTr": "тхонг",
        "phuketRuTr": "тонк",
        "enTr": "thong",
        "translation": "флаг",
        "translationEn": "flag"
      },
      {
        "thai": "ธรรม",
        "ruTr": "тхам",
        "phuketRuTr": "там",
        "enTr": "tham",
        "translation": "дхарма / закон",
        "translationEn": "dharma / law"
      },
      {
        "thai": "ธนาคาร",
        "ruTr": "тхана:ка:н",
        "phuketRuTr": "тана:ка:н",
        "enTr": "thanaakaan",
        "translation": "банк",
        "translationEn": "bank"
      },
      {
        "thai": "ธรรมชาติ",
        "ruTr": "тхаммачха:ти",
        "phuketRuTr": "таммача:ти",
        "enTr": "thammachaat",
        "translation": "природа",
        "translationEn": "nature"
      }
    ],
    "phrases": [
      {
        "thai": "ธงชาติ",
        "ruTr": "тхонг чха:ти",
        "phuketRuTr": "тонк ча:ти",
        "enTr": "thong chaat",
        "translation": "государственный флаг",
        "translationEn": "national flag"
      },
      {
        "thai": "ธนาคารกรุงเทพ",
        "ruTr": "тхана:ка:н крунг тхэп",
        "phuketRuTr": "тана:ка:н клунк тэп",
        "enTr": "thanaakaan krueng thep",
        "translation": "банк Бангкока",
        "translationEn": "Bangkok Bank"
      }
    ],
    "meaningEn": "flag"
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
        "examplePhuketRu": "на",
        "exampleEn": "นะ — particle"
      },
      {
        "syllable": "นา",
        "ruTr": "а:",
        "phuketRuTr": "на:",
        "enTr": "aa",
        "example": "นา — рисовое поле",
        "examplePhuketRu": "на:",
        "exampleEn": "นา — rice field"
      },
      {
        "syllable": "นิ",
        "ruTr": "и",
        "phuketRuTr": "ни",
        "enTr": "i",
        "example": "นิ — (редко)",
        "examplePhuketRu": "ни",
        "exampleEn": "นิ — (rare)"
      },
      {
        "syllable": "นี",
        "ruTr": "и:",
        "phuketRuTr": "ни:",
        "enTr": "ii",
        "example": "นี — (редко)",
        "examplePhuketRu": "ни:",
        "exampleEn": "นี — (rare)"
      },
      {
        "syllable": "นุ",
        "ruTr": "у",
        "phuketRuTr": "ну",
        "enTr": "u",
        "example": "นุ — (редко)",
        "examplePhuketRu": "ну",
        "exampleEn": "นุ — (rare)"
      },
      {
        "syllable": "นู",
        "ruTr": "у:",
        "phuketRuTr": "ну:",
        "enTr": "uu",
        "example": "นู — (редко)",
        "examplePhuketRu": "ну:",
        "exampleEn": "นู — (rare)"
      },
      {
        "syllable": "เนะ",
        "ruTr": "э",
        "phuketRuTr": "нэ",
        "enTr": "e",
        "example": "เน — (редко)",
        "examplePhuketRu": "нэ",
        "exampleEn": "เน — (rare)"
      },
      {
        "syllable": "เน",
        "ruTr": "э:",
        "phuketRuTr": "нэ:",
        "enTr": "ee",
        "example": "เน — (редко)",
        "examplePhuketRu": "нэ:",
        "exampleEn": "เน — (rare)"
      },
      {
        "syllable": "แนะ",
        "ruTr": "э",
        "phuketRuTr": "нэ",
        "enTr": "ae",
        "example": "แนะ — (редко)",
        "examplePhuketRu": "нэ",
        "exampleEn": "แนะ — (rare)"
      },
      {
        "syllable": "แน",
        "ruTr": "э:",
        "phuketRuTr": "нэ:",
        "enTr": "aae",
        "example": "แน — (редко)",
        "examplePhuketRu": "нэ:",
        "exampleEn": "แน — (rare)"
      },
      {
        "syllable": "โนะ",
        "ruTr": "о",
        "phuketRuTr": "но",
        "enTr": "o",
        "example": "โนะ — (редко)",
        "examplePhuketRu": "но",
        "exampleEn": "โนะ — (rare)"
      },
      {
        "syllable": "โน",
        "ruTr": "о:",
        "phuketRuTr": "но:",
        "enTr": "oo",
        "example": "โน — (редко)",
        "examplePhuketRu": "но:",
        "exampleEn": "โน — (rare)"
      },
      {
        "syllable": "นอ",
        "ruTr": "о",
        "phuketRuTr": "но",
        "enTr": "aw",
        "example": "นอ — спать",
        "examplePhuketRu": "но",
        "exampleEn": "นอ — to sleep"
      },
      {
        "syllable": "นำ",
        "ruTr": "ам",
        "phuketRuTr": "нам",
        "enTr": "am",
        "example": "นำ — вода",
        "examplePhuketRu": "нам",
        "exampleEn": "นำ — water"
      },
      {
        "syllable": "ใน",
        "ruTr": "ай",
        "phuketRuTr": "най",
        "enTr": "ai",
        "example": "ใน — слог",
        "examplePhuketRu": "най",
        "exampleEn": "ใน — syllable"
      },
      {
        "syllable": "ไน",
        "ruTr": "ай",
        "phuketRuTr": "най",
        "enTr": "ai",
        "example": "ไน — слог",
        "examplePhuketRu": "най",
        "exampleEn": "ไน — syllable"
      }
    ],
    "words": [
      {
        "thai": "น้ำ",
        "ruTr": "на:м",
        "phuketRuTr": "на:м",
        "enTr": "naam",
        "translation": "вода",
        "translationEn": "water"
      },
      {
        "thai": "นอน",
        "ruTr": "но:н",
        "phuketRuTr": "но:н",
        "enTr": "noon",
        "translation": "спать",
        "translationEn": "to sleep"
      },
      {
        "thai": "นี่",
        "ruTr": "ни:",
        "phuketRuTr": "ни:",
        "enTr": "nii",
        "translation": "этот / здесь",
        "translationEn": "this / here"
      },
      {
        "thai": "น่ารัก",
        "ruTr": "на: рак",
        "phuketRuTr": "на: лак",
        "enTr": "naa-rak",
        "translation": "милый",
        "translationEn": "cute"
      }
    ],
    "phrases": [
      {
        "thai": "น้ำหนึ่งขวด",
        "ruTr": "на:м нынг кхуат",
        "phuketRuTr": "на:м нынк куат",
        "enTr": "naam neung khuat",
        "translation": "бутылка воды",
        "translationEn": "bottle of water"
      },
      {
        "thai": "นอนไม่หลับ",
        "ruTr": "но:н май лаб",
        "phuketRuTr": "но:н май лаб",
        "enTr": "noon mai lap",
        "translation": "не спится",
        "translationEn": "can't sleep"
      }
    ],
    "meaningEn": "mouse / rat"
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
        "examplePhuketRu": "ба",
        "exampleEn": "บะ — (rare)"
      },
      {
        "syllable": "บา",
        "ruTr": "а:",
        "phuketRuTr": "ба:",
        "enTr": "aa",
        "example": "บา — (редко)",
        "examplePhuketRu": "ба:",
        "exampleEn": "บา — (rare)"
      },
      {
        "syllable": "บิ",
        "ruTr": "и",
        "phuketRuTr": "би",
        "enTr": "i",
        "example": "บิ — (редко)",
        "examplePhuketRu": "би",
        "exampleEn": "บิ — (rare)"
      },
      {
        "syllable": "บี",
        "ruTr": "и:",
        "phuketRuTr": "би:",
        "enTr": "ii",
        "example": "บี — (редко)",
        "examplePhuketRu": "би:",
        "exampleEn": "บี — (rare)"
      },
      {
        "syllable": "บุ",
        "ruTr": "у",
        "phuketRuTr": "бу",
        "enTr": "u",
        "example": "บุ — (редко)",
        "examplePhuketRu": "бу",
        "exampleEn": "บุ — (rare)"
      },
      {
        "syllable": "บู",
        "ruTr": "у:",
        "phuketRuTr": "бу:",
        "enTr": "uu",
        "example": "บู — (редко)",
        "examplePhuketRu": "бу:",
        "exampleEn": "บู — (rare)"
      },
      {
        "syllable": "เบะ",
        "ruTr": "э",
        "phuketRuTr": "бэ",
        "enTr": "e",
        "example": "เบะ — (редко)",
        "examplePhuketRu": "бэ",
        "exampleEn": "เบะ — (rare)"
      },
      {
        "syllable": "เบ",
        "ruTr": "э:",
        "phuketRuTr": "бэ:",
        "enTr": "ee",
        "example": "เบ — (редко)",
        "examplePhuketRu": "бэ:",
        "exampleEn": "เบ — (rare)"
      },
      {
        "syllable": "แบะ",
        "ruTr": "э",
        "phuketRuTr": "бэ",
        "enTr": "ae",
        "example": "แบะ — (редко)",
        "examplePhuketRu": "бэ",
        "exampleEn": "แบะ — (rare)"
      },
      {
        "syllable": "แบ",
        "ruTr": "э:",
        "phuketRuTr": "бэ:",
        "enTr": "aae",
        "example": "แบ — (редко)",
        "examplePhuketRu": "бэ:",
        "exampleEn": "แบ — (rare)"
      },
      {
        "syllable": "โบะ",
        "ruTr": "о",
        "phuketRuTr": "бо",
        "enTr": "o",
        "example": "โบะ — (редко)",
        "examplePhuketRu": "бо",
        "exampleEn": "โบะ — (rare)"
      },
      {
        "syllable": "โบ",
        "ruTr": "о:",
        "phuketRuTr": "бо:",
        "enTr": "oo",
        "example": "โบ — (редко)",
        "examplePhuketRu": "бо:",
        "exampleEn": "โบ — (rare)"
      },
      {
        "syllable": "บอ",
        "ruTr": "о",
        "phuketRuTr": "бо",
        "enTr": "aw",
        "example": "บอ — (редко)",
        "examplePhuketRu": "бо",
        "exampleEn": "บอ — (rare)"
      },
      {
        "syllable": "บำ",
        "ruTr": "ам",
        "phuketRuTr": "бам",
        "enTr": "am",
        "example": "บำ — (редко)",
        "examplePhuketRu": "бам",
        "exampleEn": "บำ — (rare)"
      },
      {
        "syllable": "ใบ",
        "ruTr": "ай",
        "phuketRuTr": "бай",
        "enTr": "ai",
        "example": "ใบ — слог",
        "examplePhuketRu": "бай",
        "exampleEn": "ใบ — syllable"
      },
      {
        "syllable": "ไบ",
        "ruTr": "ай",
        "phuketRuTr": "бай",
        "enTr": "ai",
        "example": "ไบ — слог",
        "examplePhuketRu": "бай",
        "exampleEn": "ไบ — syllable"
      }
    ],
    "words": [
      {
        "thai": "บ้าน",
        "ruTr": "ба:н",
        "phuketRuTr": "ба:н",
        "enTr": "baan",
        "translation": "дом",
        "translationEn": "house"
      },
      {
        "thai": "บอก",
        "ruTr": "бо:к",
        "phuketRuTr": "бо:к",
        "enTr": "bok",
        "translation": "сказать",
        "translationEn": "to tell"
      },
      {
        "thai": "เบียร์",
        "ruTr": "биа",
        "phuketRuTr": "биа",
        "enTr": "bia",
        "translation": "пиво",
        "translationEn": "beer"
      },
      {
        "thai": "บิน",
        "ruTr": "бин",
        "phuketRuTr": "бин",
        "enTr": "bin",
        "translation": "лететь",
        "translationEn": "to fly"
      }
    ],
    "phrases": [
      {
        "thai": "ไปบ้าน",
        "ruTr": "пай ба:н",
        "phuketRuTr": "пай ба:н",
        "enTr": "pai baan",
        "translation": "идти домой",
        "translationEn": "to go home"
      },
      {
        "thai": "เช็คบินด้วย",
        "ruTr": "чхек бин дуай",
        "phuketRuTr": "чек бин дуай",
        "enTr": "check bin duay",
        "translation": "счёт, пожалуйста",
        "translationEn": "check, please"
      }
    ],
    "meaningEn": "leaf"
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
        "examplePhuketRu": "па",
        "exampleEn": "ปะ — (rare)"
      },
      {
        "syllable": "ปา",
        "ruTr": "а:",
        "phuketRuTr": "па:",
        "enTr": "aa",
        "example": "ปา — бросать",
        "examplePhuketRu": "па:",
        "exampleEn": "ปา — to throw"
      },
      {
        "syllable": "ปิ",
        "ruTr": "и",
        "phuketRuTr": "пи",
        "enTr": "i",
        "example": "ปิ — (редко)",
        "examplePhuketRu": "пи",
        "exampleEn": "ปิ — (rare)"
      },
      {
        "syllable": "ปี",
        "ruTr": "и:",
        "phuketRuTr": "пи:",
        "enTr": "ii",
        "example": "ปี — год",
        "examplePhuketRu": "пи:",
        "exampleEn": "ปี — year"
      },
      {
        "syllable": "ปุ",
        "ruTr": "у",
        "phuketRuTr": "пу",
        "enTr": "u",
        "example": "ปุ — (редко)",
        "examplePhuketRu": "пу",
        "exampleEn": "ปุ — (rare)"
      },
      {
        "syllable": "ปู",
        "ruTr": "у:",
        "phuketRuTr": "пу:",
        "enTr": "uu",
        "example": "ปู — краб",
        "examplePhuketRu": "пу:",
        "exampleEn": "ปู — crab"
      },
      {
        "syllable": "เปะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "e",
        "example": "เปะ — (редко)",
        "examplePhuketRu": "пэ",
        "exampleEn": "เปะ — (rare)"
      },
      {
        "syllable": "เป",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "ee",
        "example": "เป — (редко)",
        "examplePhuketRu": "пэ:",
        "exampleEn": "เป — (rare)"
      },
      {
        "syllable": "แปะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "ae",
        "example": "แปะ — (редко)",
        "examplePhuketRu": "пэ",
        "exampleEn": "แปะ — (rare)"
      },
      {
        "syllable": "แป",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "aae",
        "example": "แป — (редко)",
        "examplePhuketRu": "пэ:",
        "exampleEn": "แป — (rare)"
      },
      {
        "syllable": "โปะ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "o",
        "example": "โปะ — (редко)",
        "examplePhuketRu": "по",
        "exampleEn": "โปะ — (rare)"
      },
      {
        "syllable": "โป",
        "ruTr": "о:",
        "phuketRuTr": "по:",
        "enTr": "oo",
        "example": "โป — (редко)",
        "examplePhuketRu": "по:",
        "exampleEn": "โป — (rare)"
      },
      {
        "syllable": "ปอ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "aw",
        "example": "ปอ — (редко)",
        "examplePhuketRu": "по",
        "exampleEn": "ปอ — (rare)"
      },
      {
        "syllable": "ปำ",
        "ruTr": "ам",
        "phuketRuTr": "пам",
        "enTr": "am",
        "example": "ปำ — (редко)",
        "examplePhuketRu": "пам",
        "exampleEn": "ปำ — (rare)"
      },
      {
        "syllable": "ใป",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ใป — слог",
        "examplePhuketRu": "пай",
        "exampleEn": "ใป — syllable"
      },
      {
        "syllable": "ไป",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ไป — слог",
        "examplePhuketRu": "пай",
        "exampleEn": "ไป — syllable"
      }
    ],
    "words": [
      {
        "thai": "ปาก",
        "ruTr": "па:к",
        "phuketRuTr": "па:к",
        "enTr": "paak",
        "translation": "рот",
        "translationEn": "mouth"
      },
      {
        "thai": "ปี",
        "ruTr": "пи:",
        "phuketRuTr": "пи:",
        "enTr": "pii",
        "translation": "год",
        "translationEn": "year"
      },
      {
        "thai": "เปิด",
        "ruTr": "пəт",
        "phuketRuTr": "пəт",
        "enTr": "poet",
        "translation": "открывать",
        "translationEn": "to open"
      },
      {
        "thai": "ไป",
        "ruTr": "пай",
        "phuketRuTr": "пай",
        "enTr": "pai",
        "translation": "идти",
        "translationEn": "to go"
      }
    ],
    "phrases": [
      {
        "thai": "ไปไหน",
        "ruTr": "пай най",
        "phuketRuTr": "пай най",
        "enTr": "pai nai",
        "translation": "Куда идёшь?",
        "translationEn": "Where are you going?"
      },
      {
        "thai": "ปีนี้",
        "ruTr": "пи: ни:",
        "phuketRuTr": "пи: ни:",
        "enTr": "pii nii",
        "translation": "в этом году",
        "translationEn": "this year"
      }
    ],
    "meaningEn": "fish"
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
        "examplePhuketRu": "па",
        "exampleEn": "ผะ — (rare)"
      },
      {
        "syllable": "ผา",
        "ruTr": "а:",
        "phuketRuTr": "па:",
        "enTr": "aa",
        "example": "ผา — скала",
        "examplePhuketRu": "па:",
        "exampleEn": "ผา — cliff"
      },
      {
        "syllable": "ผิ",
        "ruTr": "и",
        "phuketRuTr": "пи",
        "enTr": "i",
        "example": "ผิ — (редко)",
        "examplePhuketRu": "пи",
        "exampleEn": "ผิ — (rare)"
      },
      {
        "syllable": "ผี",
        "ruTr": "и:",
        "phuketRuTr": "пи:",
        "enTr": "ii",
        "example": "ผี — призрак",
        "examplePhuketRu": "пи:",
        "exampleEn": "ผี — ghost"
      },
      {
        "syllable": "ผุ",
        "ruTr": "у",
        "phuketRuTr": "пу",
        "enTr": "u",
        "example": "ผุ — (редко)",
        "examplePhuketRu": "пу",
        "exampleEn": "ผุ — (rare)"
      },
      {
        "syllable": "ผู",
        "ruTr": "у:",
        "phuketRuTr": "пу:",
        "enTr": "uu",
        "example": "ผู — (редко)",
        "examplePhuketRu": "пу:",
        "exampleEn": "ผู — (rare)"
      },
      {
        "syllable": "เผะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "e",
        "example": "เผะ — (редко)",
        "examplePhuketRu": "пэ",
        "exampleEn": "เผะ — (rare)"
      },
      {
        "syllable": "เผ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "ee",
        "example": "เผ — (редко)",
        "examplePhuketRu": "пэ:",
        "exampleEn": "เผ — (rare)"
      },
      {
        "syllable": "แผะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "ae",
        "example": "แผะ — (редко)",
        "examplePhuketRu": "пэ",
        "exampleEn": "แผะ — (rare)"
      },
      {
        "syllable": "แผ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "aae",
        "example": "แผ — (редко)",
        "examplePhuketRu": "пэ:",
        "exampleEn": "แผ — (rare)"
      },
      {
        "syllable": "โผะ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "o",
        "example": "โผะ — (редко)",
        "examplePhuketRu": "по",
        "exampleEn": "โผะ — (rare)"
      },
      {
        "syllable": "โผ",
        "ruTr": "о:",
        "phuketRuTr": "по:",
        "enTr": "oo",
        "example": "โผ — (редко)",
        "examplePhuketRu": "по:",
        "exampleEn": "โผ — (rare)"
      },
      {
        "syllable": "ผอ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "aw",
        "example": "ผอ — (редко)",
        "examplePhuketRu": "по",
        "exampleEn": "ผอ — (rare)"
      },
      {
        "syllable": "ผำ",
        "ruTr": "ам",
        "phuketRuTr": "пам",
        "enTr": "am",
        "example": "ผำ — (редко)",
        "examplePhuketRu": "пам",
        "exampleEn": "ผำ — (rare)"
      },
      {
        "syllable": "ใผ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ใผ — слог",
        "examplePhuketRu": "пай",
        "exampleEn": "ใผ — syllable"
      },
      {
        "syllable": "ไผ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ไผ — слог",
        "examplePhuketRu": "пай",
        "exampleEn": "ไผ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ผม",
        "ruTr": "пхом",
        "phuketRuTr": "пом",
        "enTr": "phom",
        "translation": "я (м.р.) / волосы",
        "translationEn": "I (male) / hair"
      },
      {
        "thai": "ผล",
        "ruTr": "пон",
        "phuketRuTr": "пон",
        "enTr": "phon",
        "translation": "плод / результат",
        "translationEn": "fruit / result"
      },
      {
        "thai": "ผิด",
        "ruTr": "пхит",
        "phuketRuTr": "пит",
        "enTr": "phit",
        "translation": "ошибка / неправильно",
        "translationEn": "mistake / wrong"
      },
      {
        "thai": "ผู้",
        "ruTr": "пху:",
        "phuketRuTr": "пу:",
        "enTr": "phuu",
        "translation": "человек / лицо",
        "translationEn": "person / face"
      }
    ],
    "phrases": [
      {
        "thai": "ผมชื่อ...",
        "ruTr": "пхом чхе:...",
        "phuketRuTr": "пом че:...",
        "enTr": "phom chue...",
        "translation": "Меня зовут...",
        "translationEn": "My name is..."
      },
      {
        "thai": "ผิดพลาด",
        "ruTr": "пхит пхла:т",
        "phuketRuTr": "пит пла:т",
        "enTr": "phit phlaat",
        "translation": "ошибка / промах",
        "translationEn": "mistake / error"
      }
    ],
    "meaningEn": "bee"
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
        "examplePhuketRu": "фа",
        "exampleEn": "ฝะ — (rare)"
      },
      {
        "syllable": "ฝา",
        "ruTr": "а:",
        "phuketRuTr": "фа:",
        "enTr": "aa",
        "example": "ฝา — крышка",
        "examplePhuketRu": "фа:",
        "exampleEn": "ฝา — lid"
      },
      {
        "syllable": "ฝิ",
        "ruTr": "и",
        "phuketRuTr": "фи",
        "enTr": "i",
        "example": "ฝิ — (редко)",
        "examplePhuketRu": "фи",
        "exampleEn": "ฝิ — (rare)"
      },
      {
        "syllable": "ฝี",
        "ruTr": "и:",
        "phuketRuTr": "фи:",
        "enTr": "ii",
        "example": "ฝี — (редко)",
        "examplePhuketRu": "фи:",
        "exampleEn": "ฝี — (rare)"
      },
      {
        "syllable": "ฝุ",
        "ruTr": "у",
        "phuketRuTr": "фу",
        "enTr": "u",
        "example": "ฝุ — (редко)",
        "examplePhuketRu": "фу",
        "exampleEn": "ฝุ — (rare)"
      },
      {
        "syllable": "ฝู",
        "ruTr": "у:",
        "phuketRuTr": "фу:",
        "enTr": "uu",
        "example": "ฝู — (редко)",
        "examplePhuketRu": "фу:",
        "exampleEn": "ฝู — (rare)"
      },
      {
        "syllable": "เฝะ",
        "ruTr": "э",
        "phuketRuTr": "фэ",
        "enTr": "e",
        "example": "เฝะ — (редко)",
        "examplePhuketRu": "фэ",
        "exampleEn": "เฝะ — (rare)"
      },
      {
        "syllable": "เฝ",
        "ruTr": "э:",
        "phuketRuTr": "фэ:",
        "enTr": "ee",
        "example": "เฝ — (редко)",
        "examplePhuketRu": "фэ:",
        "exampleEn": "เฝ — (rare)"
      },
      {
        "syllable": "แฝะ",
        "ruTr": "э",
        "phuketRuTr": "фэ",
        "enTr": "ae",
        "example": "แฝะ — (редко)",
        "examplePhuketRu": "фэ",
        "exampleEn": "แฝะ — (rare)"
      },
      {
        "syllable": "แฝ",
        "ruTr": "э:",
        "phuketRuTr": "фэ:",
        "enTr": "aae",
        "example": "แฝ — (редко)",
        "examplePhuketRu": "фэ:",
        "exampleEn": "แฝ — (rare)"
      },
      {
        "syllable": "โฝะ",
        "ruTr": "о",
        "phuketRuTr": "фо",
        "enTr": "o",
        "example": "โฝะ — (редко)",
        "examplePhuketRu": "фо",
        "exampleEn": "โฝะ — (rare)"
      },
      {
        "syllable": "โฝ",
        "ruTr": "о:",
        "phuketRuTr": "фо:",
        "enTr": "oo",
        "example": "โฝ — (редко)",
        "examplePhuketRu": "фо:",
        "exampleEn": "โฝ — (rare)"
      },
      {
        "syllable": "ฝอ",
        "ruTr": "о",
        "phuketRuTr": "фо",
        "enTr": "aw",
        "example": "ฝอ — (редко)",
        "examplePhuketRu": "фо",
        "exampleEn": "ฝอ — (rare)"
      },
      {
        "syllable": "ฝำ",
        "ruTr": "ам",
        "phuketRuTr": "фам",
        "enTr": "am",
        "example": "ฝำ — (редко)",
        "examplePhuketRu": "фам",
        "exampleEn": "ฝำ — (rare)"
      },
      {
        "syllable": "ใฝ",
        "ruTr": "ай",
        "phuketRuTr": "фай",
        "enTr": "ai",
        "example": "ใฝ — слог",
        "examplePhuketRu": "фай",
        "exampleEn": "ใฝ — syllable"
      },
      {
        "syllable": "ไฝ",
        "ruTr": "ай",
        "phuketRuTr": "фай",
        "enTr": "ai",
        "example": "ไฝ — слог",
        "examplePhuketRu": "фай",
        "exampleEn": "ไฝ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ฝน",
        "ruTr": "фон",
        "phuketRuTr": "фон",
        "enTr": "fon",
        "translation": "дождь",
        "translationEn": "rain"
      },
      {
        "thai": "ฝัน",
        "ruTr": "фан",
        "phuketRuTr": "фан",
        "enTr": "fan",
        "translation": "мечтать / сон",
        "translationEn": "to dream / dream"
      },
      {
        "thai": "ฝา",
        "ruTr": "фа:",
        "phuketRuTr": "фа:",
        "enTr": "faa",
        "translation": "крышка",
        "translationEn": "lid / cover"
      },
      {
        "thai": "ฝาก",
        "ruTr": "фа:к",
        "phuketRuTr": "фа:к",
        "enTr": "faak",
        "translation": "оставить / поручить",
        "translationEn": "to leave / entrust"
      }
    ],
    "phrases": [
      {
        "thai": "ฝนตก",
        "ruTr": "фон ток",
        "phuketRuTr": "фон ток",
        "enTr": "fon tok",
        "translation": "идёт дождь",
        "translationEn": "it's raining"
      },
      {
        "thai": "ฝันดี",
        "ruTr": "фан ди:",
        "phuketRuTr": "фан ди:",
        "enTr": "fan dii",
        "translation": "спокойной ночи (снись хорошее)",
        "translationEn": "good night / sweet dreams"
      }
    ],
    "meaningEn": "rain"
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
        "examplePhuketRu": "па",
        "exampleEn": "พะ — (rare)"
      },
      {
        "syllable": "พา",
        "ruTr": "а:",
        "phuketRuTr": "па:",
        "enTr": "aa",
        "example": "พา — вести",
        "examplePhuketRu": "па:",
        "exampleEn": "พา — to lead"
      },
      {
        "syllable": "พิ",
        "ruTr": "и",
        "phuketRuTr": "пи",
        "enTr": "i",
        "example": "พิ — (редко)",
        "examplePhuketRu": "пи",
        "exampleEn": "พิ — (rare)"
      },
      {
        "syllable": "พี",
        "ruTr": "и:",
        "phuketRuTr": "пи:",
        "enTr": "ii",
        "example": "พี — (редко)",
        "examplePhuketRu": "пи:",
        "exampleEn": "พี — (rare)"
      },
      {
        "syllable": "พุ",
        "ruTr": "у",
        "phuketRuTr": "пу",
        "enTr": "u",
        "example": "พุ — (редко)",
        "examplePhuketRu": "пу",
        "exampleEn": "พุ — (rare)"
      },
      {
        "syllable": "พู",
        "ruTr": "у:",
        "phuketRuTr": "пу:",
        "enTr": "uu",
        "example": "พู — (редко)",
        "examplePhuketRu": "пу:",
        "exampleEn": "พู — (rare)"
      },
      {
        "syllable": "เพะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "e",
        "example": "เพะ — (редко)",
        "examplePhuketRu": "пэ",
        "exampleEn": "เพะ — (rare)"
      },
      {
        "syllable": "เพ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "ee",
        "example": "เพ — (редко)",
        "examplePhuketRu": "пэ:",
        "exampleEn": "เพ — (rare)"
      },
      {
        "syllable": "แพะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "ae",
        "example": "แพะ — (редко)",
        "examplePhuketRu": "пэ",
        "exampleEn": "แพะ — (rare)"
      },
      {
        "syllable": "แพ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "aae",
        "example": "แพ — (редко)",
        "examplePhuketRu": "пэ:",
        "exampleEn": "แพ — (rare)"
      },
      {
        "syllable": "โพะ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "o",
        "example": "โพะ — (редко)",
        "examplePhuketRu": "по",
        "exampleEn": "โพะ — (rare)"
      },
      {
        "syllable": "โพ",
        "ruTr": "о:",
        "phuketRuTr": "по:",
        "enTr": "oo",
        "example": "โพ — (редко)",
        "examplePhuketRu": "по:",
        "exampleEn": "โพ — (rare)"
      },
      {
        "syllable": "พอ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "aw",
        "example": "พอ — достаточно",
        "examplePhuketRu": "по",
        "exampleEn": "พอ — enough"
      },
      {
        "syllable": "พำ",
        "ruTr": "ам",
        "phuketRuTr": "пам",
        "enTr": "am",
        "example": "พำ — (редко)",
        "examplePhuketRu": "пам",
        "exampleEn": "พำ — (rare)"
      },
      {
        "syllable": "ใพ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ใพ — слог",
        "examplePhuketRu": "пай",
        "exampleEn": "ใพ — syllable"
      },
      {
        "syllable": "ไพ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ไพ — слог",
        "examplePhuketRu": "пай",
        "exampleEn": "ไพ — syllable"
      }
    ],
    "words": [
      {
        "thai": "พ่อ",
        "ruTr": "пхо:",
        "phuketRuTr": "по:",
        "enTr": "pho",
        "translation": "отец",
        "translationEn": "father"
      },
      {
        "thai": "พูด",
        "ruTr": "пху:т",
        "phuketRuTr": "пу:т",
        "enTr": "phuut",
        "translation": "говорить",
        "translationEn": "to speak"
      },
      {
        "thai": "เพื่อน",
        "ruTr": "пхыан",
        "phuketRuTr": "пыан",
        "enTr": "phuean",
        "translation": "друг",
        "translationEn": "friend"
      },
      {
        "thai": "พร้อม",
        "ruTr": "пхро:м",
        "phuketRuTr": "пло:м",
        "enTr": "phrom",
        "translation": "готовый",
        "translationEn": "ready"
      }
    ],
    "phrases": [
      {
        "thai": "พ่อแม่",
        "ruTr": "пхо: мэ:",
        "phuketRuTr": "по: мэ:",
        "enTr": "pho mae",
        "translation": "родители",
        "translationEn": "parents"
      },
      {
        "thai": "พูดภาษาไทยได้ไหม",
        "ruTr": "пху:т пха:са: тхай дай май",
        "phuketRuTr": "пут паса тай дай май",
        "enTr": "phuut phasaa thai dai mai",
        "translation": "Вы говорите по-тайски?",
        "translationEn": "Do you speak Thai?"
      }
    ],
    "meaningEn": "tray"
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
        "examplePhuketRu": "фа",
        "exampleEn": "ฟะ — (rare)"
      },
      {
        "syllable": "ฟา",
        "ruTr": "а:",
        "phuketRuTr": "фа:",
        "enTr": "aa",
        "example": "ฟา — (редко)",
        "examplePhuketRu": "фа:",
        "exampleEn": "ฟา — (rare)"
      },
      {
        "syllable": "ฟิ",
        "ruTr": "и",
        "phuketRuTr": "фи",
        "enTr": "i",
        "example": "ฟิ — (редко)",
        "examplePhuketRu": "фи",
        "exampleEn": "ฟิ — (rare)"
      },
      {
        "syllable": "ฟี",
        "ruTr": "и:",
        "phuketRuTr": "фи:",
        "enTr": "ii",
        "example": "ฟี — (редко)",
        "examplePhuketRu": "фи:",
        "exampleEn": "ฟี — (rare)"
      },
      {
        "syllable": "ฟุ",
        "ruTr": "у",
        "phuketRuTr": "фу",
        "enTr": "u",
        "example": "ฟุ — (редко)",
        "examplePhuketRu": "фу",
        "exampleEn": "ฟุ — (rare)"
      },
      {
        "syllable": "ฟู",
        "ruTr": "у:",
        "phuketRuTr": "фу:",
        "enTr": "uu",
        "example": "ฟู — (редко)",
        "examplePhuketRu": "фу:",
        "exampleEn": "ฟู — (rare)"
      },
      {
        "syllable": "เฟะ",
        "ruTr": "э",
        "phuketRuTr": "фэ",
        "enTr": "e",
        "example": "เฟะ — (редко)",
        "examplePhuketRu": "фэ",
        "exampleEn": "เฟะ — (rare)"
      },
      {
        "syllable": "เฟ",
        "ruTr": "э:",
        "phuketRuTr": "фэ:",
        "enTr": "ee",
        "example": "เฟ — (редко)",
        "examplePhuketRu": "фэ:",
        "exampleEn": "เฟ — (rare)"
      },
      {
        "syllable": "แฟะ",
        "ruTr": "э",
        "phuketRuTr": "фэ",
        "enTr": "ae",
        "example": "แฟะ — (редко)",
        "examplePhuketRu": "фэ",
        "exampleEn": "แฟะ — (rare)"
      },
      {
        "syllable": "แฟ",
        "ruTr": "э:",
        "phuketRuTr": "фэ:",
        "enTr": "aae",
        "example": "แฟ — (редко)",
        "examplePhuketRu": "фэ:",
        "exampleEn": "แฟ — (rare)"
      },
      {
        "syllable": "โฟะ",
        "ruTr": "о",
        "phuketRuTr": "фо",
        "enTr": "o",
        "example": "โฟะ — (редко)",
        "examplePhuketRu": "фо",
        "exampleEn": "โฟะ — (rare)"
      },
      {
        "syllable": "โฟ",
        "ruTr": "о:",
        "phuketRuTr": "фо:",
        "enTr": "oo",
        "example": "โฟ — (редко)",
        "examplePhuketRu": "фо:",
        "exampleEn": "โฟ — (rare)"
      },
      {
        "syllable": "ฟอ",
        "ruTr": "о",
        "phuketRuTr": "фо",
        "enTr": "aw",
        "example": "ฟอ — (редко)",
        "examplePhuketRu": "фо",
        "exampleEn": "ฟอ — (rare)"
      },
      {
        "syllable": "ฟำ",
        "ruTr": "ам",
        "phuketRuTr": "фам",
        "enTr": "am",
        "example": "ฟำ — (редко)",
        "examplePhuketRu": "фам",
        "exampleEn": "ฟำ — (rare)"
      },
      {
        "syllable": "ใฟ",
        "ruTr": "ай",
        "phuketRuTr": "фай",
        "enTr": "ai",
        "example": "ใฟ — слог",
        "examplePhuketRu": "фай",
        "exampleEn": "ใฟ — syllable"
      },
      {
        "syllable": "ไฟ",
        "ruTr": "ай",
        "phuketRuTr": "фай",
        "enTr": "ai",
        "example": "ไฟ — слог",
        "examplePhuketRu": "фай",
        "exampleEn": "ไฟ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ฟัน",
        "ruTr": "фан",
        "phuketRuTr": "фан",
        "enTr": "fan",
        "translation": "зуб / резать",
        "translationEn": "tooth / to cut"
      },
      {
        "thai": "ฟัง",
        "ruTr": "фанг",
        "phuketRuTr": "фанк",
        "enTr": "fang",
        "translation": "слушать",
        "translationEn": "to listen"
      },
      {
        "thai": "ฟรี",
        "ruTr": "фри:",
        "phuketRuTr": "фли:",
        "enTr": "frii",
        "translation": "бесплатно",
        "translationEn": "free (of charge)"
      },
      {
        "thai": "ฟ้า",
        "ruTr": "фа:",
        "phuketRuTr": "фа:",
        "enTr": "faa",
        "translation": "небо",
        "translationEn": "sky"
      }
    ],
    "phrases": [
      {
        "thai": "ฟันขาว",
        "ruTr": "фан кха:o",
        "phuketRuTr": "фан ка:o",
        "enTr": "fan khaao",
        "translation": "белые зубы",
        "translationEn": "white teeth"
      },
      {
        "thai": "ฟรีของแถม",
        "ruTr": "фри: кхо:нг тхэ:м",
        "phuketRuTr": "фли: ко:нк тэ:м",
        "enTr": "frii khong thaem",
        "translation": "бесплатный бонус",
        "translationEn": "free bonus"
      }
    ],
    "meaningEn": "teeth"
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
        "examplePhuketRu": "па",
        "exampleEn": "ภะ — (rare)"
      },
      {
        "syllable": "ภา",
        "ruTr": "а:",
        "phuketRuTr": "па:",
        "enTr": "aa",
        "example": "ภา — (редко)",
        "examplePhuketRu": "па:",
        "exampleEn": "ภา — (rare)"
      },
      {
        "syllable": "ภิ",
        "ruTr": "и",
        "phuketRuTr": "пи",
        "enTr": "i",
        "example": "ภิ — (редко)",
        "examplePhuketRu": "пи",
        "exampleEn": "ภิ — (rare)"
      },
      {
        "syllable": "ภี",
        "ruTr": "и:",
        "phuketRuTr": "пи:",
        "enTr": "ii",
        "example": "ภี — (редко)",
        "examplePhuketRu": "пи:",
        "exampleEn": "ภี — (rare)"
      },
      {
        "syllable": "ภุ",
        "ruTr": "у",
        "phuketRuTr": "пу",
        "enTr": "u",
        "example": "ภุ — (редко)",
        "examplePhuketRu": "пу",
        "exampleEn": "ภุ — (rare)"
      },
      {
        "syllable": "ภู",
        "ruTr": "у:",
        "phuketRuTr": "пу:",
        "enTr": "uu",
        "example": "ภู — (редко)",
        "examplePhuketRu": "пу:",
        "exampleEn": "ภู — (rare)"
      },
      {
        "syllable": "เภะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "e",
        "example": "เภะ — (редко)",
        "examplePhuketRu": "пэ",
        "exampleEn": "เภะ — (rare)"
      },
      {
        "syllable": "เภ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "ee",
        "example": "เภ — (редко)",
        "examplePhuketRu": "пэ:",
        "exampleEn": "เภ — (rare)"
      },
      {
        "syllable": "แภะ",
        "ruTr": "э",
        "phuketRuTr": "пэ",
        "enTr": "ae",
        "example": "แภะ — (редко)",
        "examplePhuketRu": "пэ",
        "exampleEn": "แภะ — (rare)"
      },
      {
        "syllable": "แภ",
        "ruTr": "э:",
        "phuketRuTr": "пэ:",
        "enTr": "aae",
        "example": "แภ — (редко)",
        "examplePhuketRu": "пэ:",
        "exampleEn": "แภ — (rare)"
      },
      {
        "syllable": "โภะ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "o",
        "example": "โภะ — (редко)",
        "examplePhuketRu": "по",
        "exampleEn": "โภะ — (rare)"
      },
      {
        "syllable": "โภ",
        "ruTr": "о:",
        "phuketRuTr": "по:",
        "enTr": "oo",
        "example": "โภ — (редко)",
        "examplePhuketRu": "по:",
        "exampleEn": "โภ — (rare)"
      },
      {
        "syllable": "ภอ",
        "ruTr": "о",
        "phuketRuTr": "по",
        "enTr": "aw",
        "example": "ภอ — (редко)",
        "examplePhuketRu": "по",
        "exampleEn": "ภอ — (rare)"
      },
      {
        "syllable": "ภำ",
        "ruTr": "ам",
        "phuketRuTr": "пам",
        "enTr": "am",
        "example": "ภำ — (редко)",
        "examplePhuketRu": "пам",
        "exampleEn": "ภำ — (rare)"
      },
      {
        "syllable": "ใภ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ใภ — слог",
        "examplePhuketRu": "пай",
        "exampleEn": "ใภ — syllable"
      },
      {
        "syllable": "ไภ",
        "ruTr": "ай",
        "phuketRuTr": "пай",
        "enTr": "ai",
        "example": "ไภ — слог",
        "examplePhuketRu": "пай",
        "exampleEn": "ไภ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ภาพ",
        "ruTr": "пха:п",
        "phuketRuTr": "па:п",
        "enTr": "phaap",
        "translation": "картина / фото",
        "translationEn": "picture / photo"
      },
      {
        "thai": "ภาษา",
        "ruTr": "пха:са:",
        "phuketRuTr": "па:са:",
        "enTr": "phaasaa",
        "translation": "язык",
        "translationEn": "language"
      },
      {
        "thai": "ภูเขา",
        "ruTr": "пху: кха:o",
        "phuketRuTr": "пу: ка:o",
        "enTr": "phuu khao",
        "translation": "гора",
        "translationEn": "mountain"
      },
      {
        "thai": "ภัย",
        "ruTr": "пхай",
        "phuketRuTr": "пай",
        "enTr": "phai",
        "translation": "опасность",
        "translationEn": "danger"
      }
    ],
    "phrases": [
      {
        "thai": "ภาษาไทย",
        "ruTr": "пха:са: тхай",
        "phuketRuTr": "па:са: тай",
        "enTr": "phaasaa thai",
        "translation": "тайский язык",
        "translationEn": "Thai language"
      },
      {
        "thai": "ภูเก็ต",
        "ruTr": "пху: кет",
        "phuketRuTr": "пукет",
        "enTr": "phuu ket",
        "translation": "Пхукет",
        "translationEn": "Phuket"
      }
    ],
    "meaningEn": "junk (boat)"
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
        "examplePhuketRu": "ма",
        "exampleEn": "มะ — (rare)"
      },
      {
        "syllable": "มา",
        "ruTr": "а:",
        "phuketRuTr": "ма:",
        "enTr": "aa",
        "example": "มา — приходить",
        "examplePhuketRu": "ма:",
        "exampleEn": "มา — to come"
      },
      {
        "syllable": "มิ",
        "ruTr": "и",
        "phuketRuTr": "ми",
        "enTr": "i",
        "example": "มิ — (редко)",
        "examplePhuketRu": "ми",
        "exampleEn": "มิ — (rare)"
      },
      {
        "syllable": "มี",
        "ruTr": "и:",
        "phuketRuTr": "ми:",
        "enTr": "ii",
        "example": "มี — иметь",
        "examplePhuketRu": "ми:",
        "exampleEn": "มี — to have"
      },
      {
        "syllable": "มุ",
        "ruTr": "у",
        "phuketRuTr": "му",
        "enTr": "u",
        "example": "มุ — (редко)",
        "examplePhuketRu": "му",
        "exampleEn": "มุ — (rare)"
      },
      {
        "syllable": "มู",
        "ruTr": "у:",
        "phuketRuTr": "му:",
        "enTr": "uu",
        "example": "มู — (редко)",
        "examplePhuketRu": "му:",
        "exampleEn": "มู — (rare)"
      },
      {
        "syllable": "เมะ",
        "ruTr": "э",
        "phuketRuTr": "мэ",
        "enTr": "e",
        "example": "เมะ — (редко)",
        "examplePhuketRu": "мэ",
        "exampleEn": "เมะ — (rare)"
      },
      {
        "syllable": "เม",
        "ruTr": "э:",
        "phuketRuTr": "мэ:",
        "enTr": "ee",
        "example": "เม — (редко)",
        "examplePhuketRu": "мэ:",
        "exampleEn": "เม — (rare)"
      },
      {
        "syllable": "แมะ",
        "ruTr": "э",
        "phuketRuTr": "мэ",
        "enTr": "ae",
        "example": "แม่ — мама",
        "examplePhuketRu": "мэ",
        "exampleEn": "แม่ — mom"
      },
      {
        "syllable": "แม",
        "ruTr": "э:",
        "phuketRuTr": "мэ:",
        "enTr": "aae",
        "example": "แม — (редко)",
        "examplePhuketRu": "мэ:",
        "exampleEn": "แม — (rare)"
      },
      {
        "syllable": "โมะ",
        "ruTr": "о",
        "phuketRuTr": "мо",
        "enTr": "o",
        "example": "โมะ — (редко)",
        "examplePhuketRu": "мо",
        "exampleEn": "โมะ — (rare)"
      },
      {
        "syllable": "โม",
        "ruTr": "о:",
        "phuketRuTr": "мо:",
        "enTr": "oo",
        "example": "โม — (редко)",
        "examplePhuketRu": "мо:",
        "exampleEn": "โม — (rare)"
      },
      {
        "syllable": "มอ",
        "ruTr": "о",
        "phuketRuTr": "мо",
        "enTr": "aw",
        "example": "มอ — (редко)",
        "examplePhuketRu": "мо",
        "exampleEn": "มอ — (rare)"
      },
      {
        "syllable": "มำ",
        "ruTr": "ам",
        "phuketRuTr": "мам",
        "enTr": "am",
        "example": "มำ — (редко)",
        "examplePhuketRu": "мам",
        "exampleEn": "มำ — (rare)"
      },
      {
        "syllable": "ใม",
        "ruTr": "ай",
        "phuketRuTr": "май",
        "enTr": "ai",
        "example": "ใม — слог",
        "examplePhuketRu": "май",
        "exampleEn": "ใม — syllable"
      },
      {
        "syllable": "ไม",
        "ruTr": "ай",
        "phuketRuTr": "май",
        "enTr": "ai",
        "example": "ไม — слог",
        "examplePhuketRu": "май",
        "exampleEn": "ไม — syllable"
      }
    ],
    "words": [
      {
        "thai": "มา",
        "ruTr": "ма:",
        "phuketRuTr": "ма:",
        "enTr": "maa",
        "translation": "приходить",
        "translationEn": "to come"
      },
      {
        "thai": "มาก",
        "ruTr": "ма:к",
        "phuketRuTr": "ма:к",
        "enTr": "maak",
        "translation": "много",
        "translationEn": "much / many"
      },
      {
        "thai": "ม้า",
        "ruTr": "ма:",
        "phuketRuTr": "ма:",
        "enTr": "maa",
        "translation": "лошадь",
        "translationEn": "horse"
      },
      {
        "thai": "ไม่",
        "ruTr": "май",
        "phuketRuTr": "май",
        "enTr": "mai",
        "translation": "не / нет",
        "translationEn": "no / not"
      }
    ],
    "phrases": [
      {
        "thai": "ไม่เป็นไร",
        "ruTr": "май пен рай",
        "phuketRuTr": "май пен рай",
        "enTr": "mai pen rai",
        "translation": "ничего страшного",
        "translationEn": "it's OK / never mind"
      },
      {
        "thai": "มากมาย",
        "ruTr": "ма:к май",
        "phuketRuTr": "ма:к май",
        "enTr": "maak maai",
        "translation": "очень много",
        "translationEn": "very much / many"
      }
    ],
    "meaningEn": "horse"
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
        "examplePhuketRu": "йа",
        "exampleEn": "ยะ — (rare)"
      },
      {
        "syllable": "ยา",
        "ruTr": "а:",
        "phuketRuTr": "йа:",
        "enTr": "aa",
        "example": "ยา — лекарство",
        "examplePhuketRu": "яа:",
        "exampleEn": "ยา — medicine"
      },
      {
        "syllable": "ยิ",
        "ruTr": "и",
        "phuketRuTr": "йи",
        "enTr": "i",
        "example": "ยิ — (редко)",
        "examplePhuketRu": "йи",
        "exampleEn": "ยิ — (rare)"
      },
      {
        "syllable": "ยี",
        "ruTr": "и:",
        "phuketRuTr": "йи:",
        "enTr": "ii",
        "example": "ยี — (редко)",
        "examplePhuketRu": "йи:",
        "exampleEn": "ยี — (rare)"
      },
      {
        "syllable": "ยุ",
        "ruTr": "у",
        "phuketRuTr": "йу",
        "enTr": "u",
        "example": "ยุ — (редко)",
        "examplePhuketRu": "йу",
        "exampleEn": "ยุ — (rare)"
      },
      {
        "syllable": "ยู",
        "ruTr": "у:",
        "phuketRuTr": "йу:",
        "enTr": "uu",
        "example": "ยู — (редко)",
        "examplePhuketRu": "йу:",
        "exampleEn": "ยู — (rare)"
      },
      {
        "syllable": "เยะ",
        "ruTr": "э",
        "phuketRuTr": "йэ",
        "enTr": "e",
        "example": "เยะ — (редко)",
        "examplePhuketRu": "йэ",
        "exampleEn": "เยะ — (rare)"
      },
      {
        "syllable": "เย",
        "ruTr": "э:",
        "phuketRuTr": "йэ:",
        "enTr": "ee",
        "example": "เย — (редко)",
        "examplePhuketRu": "йэ:",
        "exampleEn": "เย — (rare)"
      },
      {
        "syllable": "แยะ",
        "ruTr": "э",
        "phuketRuTr": "йэ",
        "enTr": "ae",
        "example": "แยะ — (редко)",
        "examplePhuketRu": "йэ",
        "exampleEn": "แยะ — (rare)"
      },
      {
        "syllable": "แย",
        "ruTr": "э:",
        "phuketRuTr": "йэ:",
        "enTr": "aae",
        "example": "แย — (редко)",
        "examplePhuketRu": "йэ:",
        "exampleEn": "แย — (rare)"
      },
      {
        "syllable": "โยะ",
        "ruTr": "о",
        "phuketRuTr": "йо",
        "enTr": "o",
        "example": "โยะ — (редко)",
        "examplePhuketRu": "йо",
        "exampleEn": "โยะ — (rare)"
      },
      {
        "syllable": "โย",
        "ruTr": "о:",
        "phuketRuTr": "йо:",
        "enTr": "oo",
        "example": "โย — (редко)",
        "examplePhuketRu": "йо:",
        "exampleEn": "โย — (rare)"
      },
      {
        "syllable": "ยอ",
        "ruTr": "о",
        "phuketRuTr": "йо",
        "enTr": "aw",
        "example": "ยอ — (редко)",
        "examplePhuketRu": "йо",
        "exampleEn": "ยอ — (rare)"
      },
      {
        "syllable": "ยำ",
        "ruTr": "ам",
        "phuketRuTr": "йам",
        "enTr": "am",
        "example": "ยำ — (редко)",
        "examplePhuketRu": "йам",
        "exampleEn": "ยำ — (rare)"
      },
      {
        "syllable": "ใย",
        "ruTr": "ай",
        "phuketRuTr": "йай",
        "enTr": "ai",
        "example": "ใย — слог",
        "examplePhuketRu": "йай",
        "exampleEn": "ใย — syllable"
      },
      {
        "syllable": "ไย",
        "ruTr": "ай",
        "phuketRuTr": "йай",
        "enTr": "ai",
        "example": "ไย — слог",
        "examplePhuketRu": "йай",
        "exampleEn": "ไย — syllable"
      }
    ],
    "words": [
      {
        "thai": "ยาก",
        "ruTr": "яа:к",
        "phuketRuTr": "яа:к",
        "enTr": "yaak",
        "translation": "трудный",
        "translationEn": "difficult"
      },
      {
        "thai": "ยา",
        "ruTr": "яа:",
        "phuketRuTr": "яа:",
        "enTr": "yaa",
        "translation": "лекарство",
        "translationEn": "medicine"
      },
      {
        "thai": "ยิ้ม",
        "ruTr": "йи:м",
        "phuketRuTr": "йи:м",
        "enTr": "yim",
        "translation": "улыбаться",
        "translationEn": "to smile"
      },
      {
        "thai": "ยัง",
        "ruTr": "янг",
        "phuketRuTr": "янк",
        "enTr": "yang",
        "translation": "ещё",
        "translationEn": "still / yet"
      }
    ],
    "phrases": [
      {
        "thai": "ยังไม่เข้าใจ",
        "ruTr": "янг май кха:o чай",
        "phuketRuTr": "янк май ка:o чай",
        "enTr": "yang mai khao jai",
        "translation": "ещё не понимаю",
        "translationEn": "I don't understand yet"
      },
      {
        "thai": "ยิ้มสวย",
        "ruTr": "йи:м суай",
        "phuketRuTr": "йи:м суай",
        "enTr": "yim suai",
        "translation": "красивая улыбка",
        "translationEn": "beautiful smile"
      }
    ],
    "meaningEn": "giant"
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
        "examplePhuketRu": "ла",
        "exampleEn": "ระ — (rare)"
      },
      {
        "syllable": "รา",
        "ruTr": "а:",
        "phuketRuTr": "ла:",
        "enTr": "aa",
        "example": "รา — (редко)",
        "examplePhuketRu": "ла:",
        "exampleEn": "รา — (rare)"
      },
      {
        "syllable": "ริ",
        "ruTr": "и",
        "phuketRuTr": "ли",
        "enTr": "i",
        "example": "ริ — (редко)",
        "examplePhuketRu": "ли",
        "exampleEn": "ริ — (rare)"
      },
      {
        "syllable": "รี",
        "ruTr": "и:",
        "phuketRuTr": "ли:",
        "enTr": "ii",
        "example": "รี — (редко)",
        "examplePhuketRu": "ли:",
        "exampleEn": "รี — (rare)"
      },
      {
        "syllable": "รุ",
        "ruTr": "у",
        "phuketRuTr": "лу",
        "enTr": "u",
        "example": "รุ — (редко)",
        "examplePhuketRu": "лу",
        "exampleEn": "รุ — (rare)"
      },
      {
        "syllable": "รู",
        "ruTr": "у:",
        "phuketRuTr": "лу:",
        "enTr": "uu",
        "example": "รู — (редко)",
        "examplePhuketRu": "лу:",
        "exampleEn": "รู — (rare)"
      },
      {
        "syllable": "เระ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "e",
        "example": "เร — (редко)",
        "examplePhuketRu": "лэ",
        "exampleEn": "เร — (rare)"
      },
      {
        "syllable": "เร",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "ee",
        "example": "เร — (редко)",
        "examplePhuketRu": "лэ:",
        "exampleEn": "เร — (rare)"
      },
      {
        "syllable": "แระ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "ae",
        "example": "แระ — (редко)",
        "examplePhuketRu": "лэ",
        "exampleEn": "แระ — (rare)"
      },
      {
        "syllable": "แร",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "aae",
        "example": "แร — (редко)",
        "examplePhuketRu": "лэ:",
        "exampleEn": "แร — (rare)"
      },
      {
        "syllable": "โระ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "o",
        "example": "โระ — (редко)",
        "examplePhuketRu": "ло",
        "exampleEn": "โระ — (rare)"
      },
      {
        "syllable": "โร",
        "ruTr": "о:",
        "phuketRuTr": "ло:",
        "enTr": "oo",
        "example": "โร — (редко)",
        "examplePhuketRu": "ло:",
        "exampleEn": "โร — (rare)"
      },
      {
        "syllable": "รอ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "aw",
        "example": "รอ — (редко)",
        "examplePhuketRu": "ло",
        "exampleEn": "รอ — (rare)"
      },
      {
        "syllable": "รำ",
        "ruTr": "ам",
        "phuketRuTr": "лам",
        "enTr": "am",
        "example": "รำ — (редко)",
        "examplePhuketRu": "лам",
        "exampleEn": "รำ — (rare)"
      },
      {
        "syllable": "ใร",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ใร — слог",
        "examplePhuketRu": "лай",
        "exampleEn": "ใร — syllable"
      },
      {
        "syllable": "ไร",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ไร — слог",
        "examplePhuketRu": "лай",
        "exampleEn": "ไร — syllable"
      }
    ],
    "words": [
      {
        "thai": "รัก",
        "ruTr": "рак",
        "phuketRuTr": "лак",
        "enTr": "rak",
        "translation": "любить",
        "translationEn": "to love"
      },
      {
        "thai": "เรียน",
        "ruTr": "риан",
        "phuketRuTr": "лиан",
        "enTr": "rian",
        "translation": "учиться",
        "translationEn": "to study"
      },
      {
        "thai": "รู้",
        "ruTr": "ру:",
        "phuketRuTr": "лу:",
        "enTr": "ruu",
        "translation": "знать",
        "translationEn": "to know"
      },
      {
        "thai": "ร้าน",
        "ruTr": "ра:н",
        "phuketRuTr": "ла:н",
        "enTr": "raan",
        "translation": "магазин",
        "translationEn": "shop"
      }
    ],
    "phrases": [
      {
        "thai": "รักเมืองไทย",
        "ruTr": "рак муанг тхай",
        "phuketRuTr": "лак муанк тай",
        "enTr": "rak mueang thai",
        "translation": "люблю Таиланд",
        "translationEn": "I love Thailand"
      },
      {
        "thai": "เรียนภาษาไทย",
        "ruTr": "риан пха:са: тхай",
        "phuketRuTr": "лиан па:са: тай",
        "enTr": "rian phasaa thai",
        "translation": "учить тайский",
        "translationEn": "to learn Thai"
      }
    ],
    "meaningEn": "boat"
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
        "examplePhuketRu": "ла",
        "exampleEn": "ละ — particle"
      },
      {
        "syllable": "ลา",
        "ruTr": "а:",
        "phuketRuTr": "ла:",
        "enTr": "aa",
        "example": "ลา — (редко)",
        "examplePhuketRu": "ла:",
        "exampleEn": "ลา — (rare)"
      },
      {
        "syllable": "ลิ",
        "ruTr": "и",
        "phuketRuTr": "ли",
        "enTr": "i",
        "example": "ลิ — (редко)",
        "examplePhuketRu": "ли",
        "exampleEn": "ลิ — (rare)"
      },
      {
        "syllable": "ลี",
        "ruTr": "и:",
        "phuketRuTr": "ли:",
        "enTr": "ii",
        "example": "ลี — (редко)",
        "examplePhuketRu": "ли:",
        "exampleEn": "ลี — (rare)"
      },
      {
        "syllable": "ลุ",
        "ruTr": "у",
        "phuketRuTr": "лу",
        "enTr": "u",
        "example": "ลุ — (редко)",
        "examplePhuketRu": "лу",
        "exampleEn": "ลุ — (rare)"
      },
      {
        "syllable": "ลู",
        "ruTr": "у:",
        "phuketRuTr": "лу:",
        "enTr": "uu",
        "example": "ลู — (редко)",
        "examplePhuketRu": "лу:",
        "exampleEn": "ลู — (rare)"
      },
      {
        "syllable": "เละ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "e",
        "example": "เละ — (редко)",
        "examplePhuketRu": "лэ",
        "exampleEn": "เละ — (rare)"
      },
      {
        "syllable": "เล",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "ee",
        "example": "เล — (редко)",
        "examplePhuketRu": "лэ:",
        "exampleEn": "เล — (rare)"
      },
      {
        "syllable": "และ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "ae",
        "example": "และ — (редко)",
        "examplePhuketRu": "лэ",
        "exampleEn": "และ — (rare)"
      },
      {
        "syllable": "แล",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "aae",
        "example": "แล — (редко)",
        "examplePhuketRu": "лэ:",
        "exampleEn": "แล — (rare)"
      },
      {
        "syllable": "โละ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "o",
        "example": "โละ — (редко)",
        "examplePhuketRu": "ло",
        "exampleEn": "โละ — (rare)"
      },
      {
        "syllable": "โล",
        "ruTr": "о:",
        "phuketRuTr": "ло:",
        "enTr": "oo",
        "example": "โล — (редко)",
        "examplePhuketRu": "ло:",
        "exampleEn": "โล — (rare)"
      },
      {
        "syllable": "ลอ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "aw",
        "example": "ลอ — (редко)",
        "examplePhuketRu": "ло",
        "exampleEn": "ลอ — (rare)"
      },
      {
        "syllable": "ลำ",
        "ruTr": "ам",
        "phuketRuTr": "лам",
        "enTr": "am",
        "example": "ลำ — (редко)",
        "examplePhuketRu": "лам",
        "exampleEn": "ลำ — (rare)"
      },
      {
        "syllable": "ใล",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ใล — слог",
        "examplePhuketRu": "лай",
        "exampleEn": "ใล — syllable"
      },
      {
        "syllable": "ไล",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ไล — слог",
        "examplePhuketRu": "лай",
        "exampleEn": "ไล — syllable"
      }
    ],
    "words": [
      {
        "thai": "ลอง",
        "ruTr": "ло:нг",
        "phuketRuTr": "ло:нк",
        "enTr": "long",
        "translation": "попробовать",
        "translationEn": "to try"
      },
      {
        "thai": "เล่น",
        "ruTr": "лен",
        "phuketRuTr": "лен",
        "enTr": "len",
        "translation": "играть",
        "translationEn": "to play"
      },
      {
        "thai": "ลูก",
        "ruTr": "лу:к",
        "phuketRuTr": "лу:к",
        "enTr": "luuk",
        "translation": "ребёнок",
        "translationEn": "child"
      },
      {
        "thai": "ลาก",
        "ruTr": "ла:к",
        "phuketRuTr": "ла:к",
        "enTr": "laak",
        "translation": "тянуть",
        "translationEn": "to pull"
      }
    ],
    "phrases": [
      {
        "thai": "ลองดูก่อน",
        "ruTr": "ло:нг ду: го:н",
        "phuketRuTr": "ло:нк ду: ко:н",
        "enTr": "long duu gon",
        "translation": "попробуй сначала",
        "translationEn": "try first"
      },
      {
        "thai": "เล่นกีฬา",
        "ruTr": "лен ки:ла:",
        "phuketRuTr": "лен ки:ла:",
        "enTr": "len kiilaa",
        "translation": "заниматься спортом",
        "translationEn": "to play sports"
      }
    ],
    "meaningEn": "monkey"
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
        "examplePhuketRu": "ва",
        "exampleEn": "วะ — (rare)"
      },
      {
        "syllable": "วา",
        "ruTr": "а:",
        "phuketRuTr": "ва:",
        "enTr": "aa",
        "example": "วา — (редко)",
        "examplePhuketRu": "ва:",
        "exampleEn": "วา — (rare)"
      },
      {
        "syllable": "วิ",
        "ruTr": "и",
        "phuketRuTr": "ви",
        "enTr": "i",
        "example": "วิ — (редко)",
        "examplePhuketRu": "ви",
        "exampleEn": "วิ — (rare)"
      },
      {
        "syllable": "วี",
        "ruTr": "и:",
        "phuketRuTr": "ви:",
        "enTr": "ii",
        "example": "วี — (редко)",
        "examplePhuketRu": "ви:",
        "exampleEn": "วี — (rare)"
      },
      {
        "syllable": "วุ",
        "ruTr": "у",
        "phuketRuTr": "ву",
        "enTr": "u",
        "example": "วุ — (редко)",
        "examplePhuketRu": "ву",
        "exampleEn": "วุ — (rare)"
      },
      {
        "syllable": "วู",
        "ruTr": "у:",
        "phuketRuTr": "ву:",
        "enTr": "uu",
        "example": "วู — (редко)",
        "examplePhuketRu": "ву:",
        "exampleEn": "วู — (rare)"
      },
      {
        "syllable": "เวะ",
        "ruTr": "э",
        "phuketRuTr": "вэ",
        "enTr": "e",
        "example": "เว — (редко)",
        "examplePhuketRu": "вэ",
        "exampleEn": "เว — (rare)"
      },
      {
        "syllable": "เว",
        "ruTr": "э:",
        "phuketRuTr": "вэ:",
        "enTr": "ee",
        "example": "เว — (редко)",
        "examplePhuketRu": "вэ:",
        "exampleEn": "เว — (rare)"
      },
      {
        "syllable": "แวะ",
        "ruTr": "э",
        "phuketRuTr": "вэ",
        "enTr": "ae",
        "example": "แวะ — (редко)",
        "examplePhuketRu": "вэ",
        "exampleEn": "แวะ — (rare)"
      },
      {
        "syllable": "แว",
        "ruTr": "э:",
        "phuketRuTr": "вэ:",
        "enTr": "aae",
        "example": "แว — (редко)",
        "examplePhuketRu": "вэ:",
        "exampleEn": "แว — (rare)"
      },
      {
        "syllable": "โวะ",
        "ruTr": "о",
        "phuketRuTr": "во",
        "enTr": "o",
        "example": "โวะ — (редко)",
        "examplePhuketRu": "во",
        "exampleEn": "โวะ — (rare)"
      },
      {
        "syllable": "โว",
        "ruTr": "о:",
        "phuketRuTr": "во:",
        "enTr": "oo",
        "example": "โว — (редко)",
        "examplePhuketRu": "во:",
        "exampleEn": "โว — (rare)"
      },
      {
        "syllable": "วอ",
        "ruTr": "о",
        "phuketRuTr": "во",
        "enTr": "aw",
        "example": "วอ — (редко)",
        "examplePhuketRu": "во",
        "exampleEn": "วอ — (rare)"
      },
      {
        "syllable": "วำ",
        "ruTr": "ам",
        "phuketRuTr": "вам",
        "enTr": "am",
        "example": "วำ — (редко)",
        "examplePhuketRu": "вам",
        "exampleEn": "วำ — (rare)"
      },
      {
        "syllable": "ใว",
        "ruTr": "ай",
        "phuketRuTr": "вай",
        "enTr": "ai",
        "example": "ใว — слог",
        "examplePhuketRu": "вай",
        "exampleEn": "ใว — syllable"
      },
      {
        "syllable": "ไว",
        "ruTr": "ай",
        "phuketRuTr": "вай",
        "enTr": "ai",
        "example": "ไว — слог",
        "examplePhuketRu": "вай",
        "exampleEn": "ไว — syllable"
      }
    ],
    "words": [
      {
        "thai": "วัน",
        "ruTr": "ван",
        "phuketRuTr": "ван",
        "enTr": "wan",
        "translation": "день",
        "translationEn": "day"
      },
      {
        "thai": "เวลา",
        "ruTr": "вела:",
        "phuketRuTr": "вела:",
        "enTr": "weelaa",
        "translation": "время",
        "translationEn": "time"
      },
      {
        "thai": "วิ่ง",
        "ruTr": "вйнг",
        "phuketRuTr": "вйнк",
        "enTr": "wing",
        "translation": "бегать",
        "translationEn": "to run"
      },
      {
        "thai": "ว่า",
        "ruTr": "ва:",
        "phuketRuTr": "ва:",
        "enTr": "waa",
        "translation": "говорить / что",
        "translationEn": "to say / that"
      }
    ],
    "phrases": [
      {
        "thai": "วันนี้",
        "ruTr": "ван ни:",
        "phuketRuTr": "ван ни:",
        "enTr": "wan nii",
        "translation": "сегодня",
        "translationEn": "today"
      },
      {
        "thai": "วันเกิด",
        "ruTr": "ван гəт",
        "phuketRuTr": "ван кəт",
        "enTr": "wan goet",
        "translation": "день рождения",
        "translationEn": "birthday"
      }
    ],
    "meaningEn": "ring"
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
        "examplePhuketRu": "са",
        "exampleEn": "ศะ — (rare)"
      },
      {
        "syllable": "ศา",
        "ruTr": "а:",
        "phuketRuTr": "са:",
        "enTr": "aa",
        "example": "ศา — (редко)",
        "examplePhuketRu": "са:",
        "exampleEn": "ศา — (rare)"
      },
      {
        "syllable": "ศิ",
        "ruTr": "и",
        "phuketRuTr": "си",
        "enTr": "i",
        "example": "ศิ — (редко)",
        "examplePhuketRu": "си",
        "exampleEn": "ศิ — (rare)"
      },
      {
        "syllable": "ศี",
        "ruTr": "и:",
        "phuketRuTr": "си:",
        "enTr": "ii",
        "example": "ศี — (редко)",
        "examplePhuketRu": "си:",
        "exampleEn": "ศี — (rare)"
      },
      {
        "syllable": "ศุ",
        "ruTr": "у",
        "phuketRuTr": "су",
        "enTr": "u",
        "example": "ศุ — (редко)",
        "examplePhuketRu": "су",
        "exampleEn": "ศุ — (rare)"
      },
      {
        "syllable": "ศู",
        "ruTr": "у:",
        "phuketRuTr": "су:",
        "enTr": "uu",
        "example": "ศู — (редко)",
        "examplePhuketRu": "су:",
        "exampleEn": "ศู — (rare)"
      },
      {
        "syllable": "เศะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "e",
        "example": "เศะ — (редко)",
        "examplePhuketRu": "сэ",
        "exampleEn": "เศะ — (rare)"
      },
      {
        "syllable": "เศ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "ee",
        "example": "เศ — (редко)",
        "examplePhuketRu": "сэ:",
        "exampleEn": "เศ — (rare)"
      },
      {
        "syllable": "แศะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "ae",
        "example": "แศะ — (редко)",
        "examplePhuketRu": "сэ",
        "exampleEn": "แศะ — (rare)"
      },
      {
        "syllable": "แศ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "aae",
        "example": "แศ — (редко)",
        "examplePhuketRu": "сэ:",
        "exampleEn": "แศ — (rare)"
      },
      {
        "syllable": "โศะ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "o",
        "example": "โศะ — (редко)",
        "examplePhuketRu": "со",
        "exampleEn": "โศะ — (rare)"
      },
      {
        "syllable": "โศ",
        "ruTr": "о:",
        "phuketRuTr": "со:",
        "enTr": "oo",
        "example": "โศ — (редко)",
        "examplePhuketRu": "со:",
        "exampleEn": "โศ — (rare)"
      },
      {
        "syllable": "ศอ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "aw",
        "example": "ศอ — (редко)",
        "examplePhuketRu": "со",
        "exampleEn": "ศอ — (rare)"
      },
      {
        "syllable": "ศำ",
        "ruTr": "ам",
        "phuketRuTr": "сам",
        "enTr": "am",
        "example": "ศำ — (редко)",
        "examplePhuketRu": "сам",
        "exampleEn": "ศำ — (rare)"
      },
      {
        "syllable": "ใศ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ใศ — слог",
        "examplePhuketRu": "сай",
        "exampleEn": "ใศ — syllable"
      },
      {
        "syllable": "ไศ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ไศ — слог",
        "examplePhuketRu": "сай",
        "exampleEn": "ไศ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ศาลา",
        "ruTr": "са:ла:",
        "phuketRuTr": "са:ла:",
        "enTr": "saalaa",
        "translation": "беседка / павильон",
        "translationEn": "pavilion / sala"
      },
      {
        "thai": "ศิลปะ",
        "ruTr": "синлапа",
        "phuketRuTr": "синлапа",
        "enTr": "sinlapa",
        "translation": "искусство",
        "translationEn": "art"
      },
      {
        "thai": "ศาสนา",
        "ruTr": "са:тсана:",
        "phuketRuTr": "са:тсана:",
        "enTr": "saatsanaa",
        "translation": "религия",
        "translationEn": "religion"
      },
      {
        "thai": "ศพ",
        "ruTr": "соп",
        "phuketRuTr": "соп",
        "enTr": "sop",
        "translation": "труп / покойник",
        "translationEn": "corpse"
      }
    ],
    "phrases": [
      {
        "thai": "ศาลาประชาคม",
        "ruTr": "са:ла: прачхакхом",
        "phuketRuTr": "са:ла: плачаком",
        "enTr": "saalaa prachakhom",
        "translation": "общественный павильон",
        "translationEn": "community pavilion"
      },
      {
        "thai": "ศิลปะไทย",
        "ruTr": "синлапа тхай",
        "phuketRuTr": "синлапа тай",
        "enTr": "sinlapa thai",
        "translation": "тайское искусство",
        "translationEn": "Thai art"
      }
    ],
    "meaningEn": "pavilion"
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
        "examplePhuketRu": "са",
        "exampleEn": "ษะ — (rare)"
      },
      {
        "syllable": "ษา",
        "ruTr": "а:",
        "phuketRuTr": "са:",
        "enTr": "aa",
        "example": "ษา — (редко)",
        "examplePhuketRu": "са:",
        "exampleEn": "ษา — (rare)"
      },
      {
        "syllable": "ษิ",
        "ruTr": "и",
        "phuketRuTr": "си",
        "enTr": "i",
        "example": "ษิ — (редко)",
        "examplePhuketRu": "си",
        "exampleEn": "ษิ — (rare)"
      },
      {
        "syllable": "ษี",
        "ruTr": "и:",
        "phuketRuTr": "си:",
        "enTr": "ii",
        "example": "ษี — (редко)",
        "examplePhuketRu": "си:",
        "exampleEn": "ษี — (rare)"
      },
      {
        "syllable": "ษุ",
        "ruTr": "у",
        "phuketRuTr": "су",
        "enTr": "u",
        "example": "ษุ — (редко)",
        "examplePhuketRu": "су",
        "exampleEn": "ษุ — (rare)"
      },
      {
        "syllable": "ษู",
        "ruTr": "у:",
        "phuketRuTr": "су:",
        "enTr": "uu",
        "example": "ษู — (редко)",
        "examplePhuketRu": "су:",
        "exampleEn": "ษู — (rare)"
      },
      {
        "syllable": "เษะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "e",
        "example": "เษะ — (редко)",
        "examplePhuketRu": "сэ",
        "exampleEn": "เษะ — (rare)"
      },
      {
        "syllable": "เษ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "ee",
        "example": "เษ — (редко)",
        "examplePhuketRu": "сэ:",
        "exampleEn": "เษ — (rare)"
      },
      {
        "syllable": "แษะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "ae",
        "example": "แษะ — (редко)",
        "examplePhuketRu": "сэ",
        "exampleEn": "แษะ — (rare)"
      },
      {
        "syllable": "แษ",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "aae",
        "example": "แษ — (редко)",
        "examplePhuketRu": "сэ:",
        "exampleEn": "แษ — (rare)"
      },
      {
        "syllable": "โษะ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "o",
        "example": "โษะ — (редко)",
        "examplePhuketRu": "со",
        "exampleEn": "โษะ — (rare)"
      },
      {
        "syllable": "โษ",
        "ruTr": "о:",
        "phuketRuTr": "со:",
        "enTr": "oo",
        "example": "โษ — (редко)",
        "examplePhuketRu": "со:",
        "exampleEn": "โษ — (rare)"
      },
      {
        "syllable": "ษอ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "aw",
        "example": "ษอ — (редко)",
        "examplePhuketRu": "со",
        "exampleEn": "ษอ — (rare)"
      },
      {
        "syllable": "ษำ",
        "ruTr": "ам",
        "phuketRuTr": "сам",
        "enTr": "am",
        "example": "ษำ — (редко)",
        "examplePhuketRu": "сам",
        "exampleEn": "ษำ — (rare)"
      },
      {
        "syllable": "ใษ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ใษ — слог",
        "examplePhuketRu": "сай",
        "exampleEn": "ใษ — syllable"
      },
      {
        "syllable": "ไษ",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ไษ — слог",
        "examplePhuketRu": "сай",
        "exampleEn": "ไษ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ฤๅษี",
        "ruTr": "рысии",
        "phuketRuTr": "лысии",
        "enTr": "rueesii",
        "translation": "отшельник / мудрец",
        "translationEn": "hermit / sage"
      },
      {
        "thai": "ฤดู",
        "ruTr": "рыду:",
        "phuketRuTr": "лыду:",
        "enTr": "ruedu",
        "translation": "сезон / время года",
        "translationEn": "season"
      },
      {
        "thai": "ฤทธิ์",
        "ruTr": "рит",
        "phuketRuTr": "лит",
        "enTr": "rit",
        "translation": "сила / могущество",
        "translationEn": "power / might"
      },
      {
        "thai": "ฤกษ์",
        "ruTr": "рык",
        "phuketRuTr": "лык",
        "enTr": "ruek",
        "translation": "благоприятный момент",
        "translationEn": "auspicious moment"
      }
    ],
    "phrases": [
      {
        "thai": "ฤดูร้อน",
        "ruTr": "рыду: ро:н",
        "phuketRuTr": "лыду: ло:н",
        "enTr": "ruedu ron",
        "translation": "летний сезон",
        "translationEn": "summer season"
      },
      {
        "thai": "ฤกษ์ดี",
        "ruTr": "рык ди:",
        "phuketRuTr": "лык ди:",
        "enTr": "ruek dii",
        "translation": "удачный момент",
        "translationEn": "auspicious moment"
      }
    ],
    "meaningEn": "hermit"
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
        "examplePhuketRu": "са",
        "exampleEn": "สะ — (rare)"
      },
      {
        "syllable": "สา",
        "ruTr": "а:",
        "phuketRuTr": "са:",
        "enTr": "aa",
        "example": "สา — (редко)",
        "examplePhuketRu": "са:",
        "exampleEn": "สา — (rare)"
      },
      {
        "syllable": "สิ",
        "ruTr": "и",
        "phuketRuTr": "си",
        "enTr": "i",
        "example": "สิ — (редко)",
        "examplePhuketRu": "си",
        "exampleEn": "สิ — (rare)"
      },
      {
        "syllable": "สี",
        "ruTr": "и:",
        "phuketRuTr": "си:",
        "enTr": "ii",
        "example": "สี — (редко)",
        "examplePhuketRu": "си:",
        "exampleEn": "สี — (rare)"
      },
      {
        "syllable": "สุ",
        "ruTr": "у",
        "phuketRuTr": "су",
        "enTr": "u",
        "example": "สุ — (редко)",
        "examplePhuketRu": "су",
        "exampleEn": "สุ — (rare)"
      },
      {
        "syllable": "สู",
        "ruTr": "у:",
        "phuketRuTr": "су:",
        "enTr": "uu",
        "example": "สู — (редко)",
        "examplePhuketRu": "су:",
        "exampleEn": "สู — (rare)"
      },
      {
        "syllable": "เสะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "e",
        "example": "เสะ — (редко)",
        "examplePhuketRu": "сэ",
        "exampleEn": "เสะ — (rare)"
      },
      {
        "syllable": "เส",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "ee",
        "example": "เส — (редко)",
        "examplePhuketRu": "сэ:",
        "exampleEn": "เส — (rare)"
      },
      {
        "syllable": "แสะ",
        "ruTr": "э",
        "phuketRuTr": "сэ",
        "enTr": "ae",
        "example": "แสะ — (редко)",
        "examplePhuketRu": "сэ",
        "exampleEn": "แสะ — (rare)"
      },
      {
        "syllable": "แส",
        "ruTr": "э:",
        "phuketRuTr": "сэ:",
        "enTr": "aae",
        "example": "แส — (редко)",
        "examplePhuketRu": "сэ:",
        "exampleEn": "แส — (rare)"
      },
      {
        "syllable": "โสะ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "o",
        "example": "โสะ — (редко)",
        "examplePhuketRu": "со",
        "exampleEn": "โสะ — (rare)"
      },
      {
        "syllable": "โส",
        "ruTr": "о:",
        "phuketRuTr": "со:",
        "enTr": "oo",
        "example": "โส — (редко)",
        "examplePhuketRu": "со:",
        "exampleEn": "โส — (rare)"
      },
      {
        "syllable": "สอ",
        "ruTr": "о",
        "phuketRuTr": "со",
        "enTr": "aw",
        "example": "สอ — (редко)",
        "examplePhuketRu": "со",
        "exampleEn": "สอ — (rare)"
      },
      {
        "syllable": "สำ",
        "ruTr": "ам",
        "phuketRuTr": "сам",
        "enTr": "am",
        "example": "สำ — (редко)",
        "examplePhuketRu": "сам",
        "exampleEn": "สำ — (rare)"
      },
      {
        "syllable": "ใส",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ใส — слог",
        "examplePhuketRu": "сай",
        "exampleEn": "ใส — syllable"
      },
      {
        "syllable": "ไส",
        "ruTr": "ай",
        "phuketRuTr": "сай",
        "enTr": "ai",
        "example": "ไส — слог",
        "examplePhuketRu": "сай",
        "exampleEn": "ไส — syllable"
      }
    ],
    "words": [
      {
        "thai": "สวัสดี",
        "ruTr": "савáтди:",
        "phuketRuTr": "саватди",
        "enTr": "sawatdii",
        "translation": "здравствуйте",
        "translationEn": "hello"
      },
      {
        "thai": "สาม",
        "ruTr": "са:м",
        "phuketRuTr": "са:м",
        "enTr": "saam",
        "translation": "три",
        "translationEn": "three"
      },
      {
        "thai": "สวย",
        "ruTr": "суай",
        "phuketRuTr": "суай",
        "enTr": "suai",
        "translation": "красивый",
        "translationEn": "beautiful"
      },
      {
        "thai": "สิ่ง",
        "ruTr": "синг",
        "phuketRuTr": "синк",
        "enTr": "sing",
        "translation": "вещь",
        "translationEn": "thing"
      }
    ],
    "phrases": [
      {
        "thai": "สวัสดีครับ",
        "ruTr": "савáтди: кхраб",
        "phuketRuTr": "саватди кап",
        "enTr": "sawatdii khrap",
        "translation": "здравствуйте (м.р.)",
        "translationEn": "hello (male speaker)"
      },
      {
        "thai": "สวยมาก",
        "ruTr": "суай ма:к",
        "phuketRuTr": "суай ма:к",
        "enTr": "suai maak",
        "translation": "очень красиво",
        "translationEn": "very beautiful"
      }
    ],
    "meaningEn": "tiger"
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
        "examplePhuketRu": "ха",
        "exampleEn": "หะ — (rare)"
      },
      {
        "syllable": "หา",
        "ruTr": "а:",
        "phuketRuTr": "ха:",
        "enTr": "aa",
        "example": "หา — искать",
        "examplePhuketRu": "ха:",
        "exampleEn": "หา — to search"
      },
      {
        "syllable": "หิ",
        "ruTr": "и",
        "phuketRuTr": "хи",
        "enTr": "i",
        "example": "หิ — (редко)",
        "examplePhuketRu": "хи",
        "exampleEn": "หิ — (rare)"
      },
      {
        "syllable": "หี",
        "ruTr": "и:",
        "phuketRuTr": "хи:",
        "enTr": "ii",
        "example": "หี — (редко)",
        "examplePhuketRu": "хи:",
        "exampleEn": "หี — (rare)"
      },
      {
        "syllable": "หุ",
        "ruTr": "у",
        "phuketRuTr": "ху",
        "enTr": "u",
        "example": "หุ — (редко)",
        "examplePhuketRu": "ху",
        "exampleEn": "หุ — (rare)"
      },
      {
        "syllable": "หู",
        "ruTr": "у:",
        "phuketRuTr": "ху:",
        "enTr": "uu",
        "example": "หู — ухо",
        "examplePhuketRu": "ху:",
        "exampleEn": "หู — ear"
      },
      {
        "syllable": "เหะ",
        "ruTr": "э",
        "phuketRuTr": "хэ",
        "enTr": "e",
        "example": "เหะ — (редко)",
        "examplePhuketRu": "хэ",
        "exampleEn": "เหะ — (rare)"
      },
      {
        "syllable": "เห",
        "ruTr": "э:",
        "phuketRuTr": "хэ:",
        "enTr": "ee",
        "example": "เห — (редко)",
        "examplePhuketRu": "хэ:",
        "exampleEn": "เห — (rare)"
      },
      {
        "syllable": "แหะ",
        "ruTr": "э",
        "phuketRuTr": "хэ",
        "enTr": "ae",
        "example": "แหะ — (редко)",
        "examplePhuketRu": "хэ",
        "exampleEn": "แหะ — (rare)"
      },
      {
        "syllable": "แห",
        "ruTr": "э:",
        "phuketRuTr": "хэ:",
        "enTr": "aae",
        "example": "แห — (редко)",
        "examplePhuketRu": "хэ:",
        "exampleEn": "แห — (rare)"
      },
      {
        "syllable": "โหะ",
        "ruTr": "о",
        "phuketRuTr": "хо",
        "enTr": "o",
        "example": "โหะ — (редко)",
        "examplePhuketRu": "хо",
        "exampleEn": "โหะ — (rare)"
      },
      {
        "syllable": "โห",
        "ruTr": "о:",
        "phuketRuTr": "хо:",
        "enTr": "oo",
        "example": "โห — (редко)",
        "examplePhuketRu": "хо:",
        "exampleEn": "โห — (rare)"
      },
      {
        "syllable": "หอ",
        "ruTr": "о",
        "phuketRuTr": "хо",
        "enTr": "aw",
        "example": "หอ — (редко)",
        "examplePhuketRu": "хо",
        "exampleEn": "หอ — (rare)"
      },
      {
        "syllable": "หำ",
        "ruTr": "ам",
        "phuketRuTr": "хам",
        "enTr": "am",
        "example": "หำ — (редко)",
        "examplePhuketRu": "хам",
        "exampleEn": "หำ — (rare)"
      },
      {
        "syllable": "ให",
        "ruTr": "ай",
        "phuketRuTr": "хай",
        "enTr": "ai",
        "example": "ให — слог",
        "examplePhuketRu": "хай",
        "exampleEn": "ให — syllable"
      },
      {
        "syllable": "ไห",
        "ruTr": "ай",
        "phuketRuTr": "хай",
        "enTr": "ai",
        "example": "ไห — слог",
        "examplePhuketRu": "хай",
        "exampleEn": "ไห — syllable"
      }
    ],
    "words": [
      {
        "thai": "หิว",
        "ruTr": "хйу",
        "phuketRuTr": "хйу",
        "enTr": "hiu",
        "translation": "голодный",
        "translationEn": "hungry"
      },
      {
        "thai": "หา",
        "ruTr": "ха:",
        "phuketRuTr": "ха:",
        "enTr": "haa",
        "translation": "искать",
        "translationEn": "to search"
      },
      {
        "thai": "หัว",
        "ruTr": "хуа",
        "phuketRuTr": "хуа",
        "enTr": "hua",
        "translation": "голова",
        "translationEn": "head"
      },
      {
        "thai": "ห้อง",
        "ruTr": "хо:нг",
        "phuketRuTr": "хо:нк",
        "enTr": "hong",
        "translation": "комната",
        "translationEn": "room"
      }
    ],
    "phrases": [
      {
        "thai": "หิวข้าว",
        "ruTr": "хйу кха:o",
        "phuketRuTr": "хйу ка:o",
        "enTr": "hiu khao",
        "translation": "хочу есть",
        "translationEn": "I'm hungry"
      },
      {
        "thai": "ห้องน้ำ",
        "ruTr": "хо:нг на:м",
        "phuketRuTr": "хо:нк на:м",
        "enTr": "hong naam",
        "translation": "туалет / ванная",
        "translationEn": "toilet / bathroom"
      }
    ],
    "meaningEn": "chest / box"
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
        "examplePhuketRu": "ла",
        "exampleEn": "ฬะ — (rare)"
      },
      {
        "syllable": "ฬา",
        "ruTr": "а:",
        "phuketRuTr": "ла:",
        "enTr": "aa",
        "example": "ฬา — (редко)",
        "examplePhuketRu": "ла:",
        "exampleEn": "ฬา — (rare)"
      },
      {
        "syllable": "ฬิ",
        "ruTr": "и",
        "phuketRuTr": "ли",
        "enTr": "i",
        "example": "ฬิ — (редко)",
        "examplePhuketRu": "ли",
        "exampleEn": "ฬิ — (rare)"
      },
      {
        "syllable": "ฬี",
        "ruTr": "и:",
        "phuketRuTr": "ли:",
        "enTr": "ii",
        "example": "ฬี — (редко)",
        "examplePhuketRu": "ли:",
        "exampleEn": "ฬี — (rare)"
      },
      {
        "syllable": "ฬุ",
        "ruTr": "у",
        "phuketRuTr": "лу",
        "enTr": "u",
        "example": "ฬุ — (редко)",
        "examplePhuketRu": "лу",
        "exampleEn": "ฬุ — (rare)"
      },
      {
        "syllable": "ฬู",
        "ruTr": "у:",
        "phuketRuTr": "лу:",
        "enTr": "uu",
        "example": "ฬู — (редко)",
        "examplePhuketRu": "лу:",
        "exampleEn": "ฬู — (rare)"
      },
      {
        "syllable": "เฬะ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "e",
        "example": "เฬะ — (редко)",
        "examplePhuketRu": "лэ",
        "exampleEn": "เฬะ — (rare)"
      },
      {
        "syllable": "เฬ",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "ee",
        "example": "เฬ — (редко)",
        "examplePhuketRu": "лэ:",
        "exampleEn": "เฬ — (rare)"
      },
      {
        "syllable": "แฬะ",
        "ruTr": "э",
        "phuketRuTr": "лэ",
        "enTr": "ae",
        "example": "แฬะ — (редко)",
        "examplePhuketRu": "лэ",
        "exampleEn": "แฬะ — (rare)"
      },
      {
        "syllable": "แฬ",
        "ruTr": "э:",
        "phuketRuTr": "лэ:",
        "enTr": "aae",
        "example": "แฬ — (редко)",
        "examplePhuketRu": "лэ:",
        "exampleEn": "แฬ — (rare)"
      },
      {
        "syllable": "โฬะ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "o",
        "example": "โฬะ — (редко)",
        "examplePhuketRu": "ло",
        "exampleEn": "โฬะ — (rare)"
      },
      {
        "syllable": "โฬ",
        "ruTr": "о:",
        "phuketRuTr": "ло:",
        "enTr": "oo",
        "example": "โฬ — (редко)",
        "examplePhuketRu": "ло:",
        "exampleEn": "โฬ — (rare)"
      },
      {
        "syllable": "ฬอ",
        "ruTr": "о",
        "phuketRuTr": "ло",
        "enTr": "aw",
        "example": "ฬอ — (редко)",
        "examplePhuketRu": "ло",
        "exampleEn": "ฬอ — (rare)"
      },
      {
        "syllable": "ฬำ",
        "ruTr": "ам",
        "phuketRuTr": "лам",
        "enTr": "am",
        "example": "ฬำ — (редко)",
        "examplePhuketRu": "лам",
        "exampleEn": "ฬำ — (rare)"
      },
      {
        "syllable": "ใฬ",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ใฬ — слог",
        "examplePhuketRu": "лай",
        "exampleEn": "ใฬ — syllable"
      },
      {
        "syllable": "ไฬ",
        "ruTr": "ай",
        "phuketRuTr": "лай",
        "enTr": "ai",
        "example": "ไฬ — слог",
        "examplePhuketRu": "лай",
        "exampleEn": "ไฬ — syllable"
      }
    ],
    "words": [
      {
        "thai": "จุฬา",
        "ruTr": "чхула:",
        "phuketRuTr": "чула:",
        "enTr": "chulaa",
        "translation": "воздушный змей",
        "translationEn": "kite"
      },
      {
        "thai": "กุฬา",
        "ruTr": "кхула:",
        "phuketRuTr": "кула:",
        "enTr": "khulaa",
        "translation": "спорт (книжн.)",
        "translationEn": "sport (literary)"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква",
        "translationEn": "rare letter"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "в основном в заимствованиях",
        "translationEn": "mainly in loanwords"
      }
    ],
    "phrases": [
      {
        "thai": "เล่นจุฬา",
        "ruTr": "лен чхула:",
        "phuketRuTr": "лен чула:",
        "enTr": "len chulaa",
        "translation": "запускать змея",
        "translationEn": "to fly a kite"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "редкая буква, мало слов",
        "translationEn": "rare letter, few words"
      }
    ],
    "meaningEn": "kite"
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
        "examplePhuketRu": "а",
        "exampleEn": "อะ — (rare)"
      },
      {
        "syllable": "อา",
        "ruTr": "а:",
        "phuketRuTr": "а:",
        "enTr": "aa",
        "example": "อา — (редко)",
        "examplePhuketRu": "а:",
        "exampleEn": "อา — (rare)"
      },
      {
        "syllable": "อิ",
        "ruTr": "и",
        "phuketRuTr": "и",
        "enTr": "i",
        "example": "อิ — (редко)",
        "examplePhuketRu": "и",
        "exampleEn": "อิ — (rare)"
      },
      {
        "syllable": "อี",
        "ruTr": "и:",
        "phuketRuTr": "и:",
        "enTr": "ii",
        "example": "อี — (редко)",
        "examplePhuketRu": "и:",
        "exampleEn": "อี — (rare)"
      },
      {
        "syllable": "อุ",
        "ruTr": "у",
        "phuketRuTr": "у",
        "enTr": "u",
        "example": "อุ — (редко)",
        "examplePhuketRu": "у",
        "exampleEn": "อุ — (rare)"
      },
      {
        "syllable": "อู",
        "ruTr": "у:",
        "phuketRuTr": "у:",
        "enTr": "uu",
        "example": "อู — (редко)",
        "examplePhuketRu": "у:",
        "exampleEn": "อู — (rare)"
      },
      {
        "syllable": "เอะ",
        "ruTr": "э",
        "phuketRuTr": "э",
        "enTr": "e",
        "example": "เอะ — (редко)",
        "examplePhuketRu": "э",
        "exampleEn": "เอะ — (rare)"
      },
      {
        "syllable": "เอ",
        "ruTr": "э:",
        "phuketRuTr": "э:",
        "enTr": "ee",
        "example": "เอ — (редко)",
        "examplePhuketRu": "э:",
        "exampleEn": "เอ — (rare)"
      },
      {
        "syllable": "แอะ",
        "ruTr": "э",
        "phuketRuTr": "э",
        "enTr": "ae",
        "example": "แอะ — (редко)",
        "examplePhuketRu": "э",
        "exampleEn": "แอะ — (rare)"
      },
      {
        "syllable": "แอ",
        "ruTr": "э:",
        "phuketRuTr": "э:",
        "enTr": "aae",
        "example": "แอ — (редко)",
        "examplePhuketRu": "э:",
        "exampleEn": "แอ — (rare)"
      },
      {
        "syllable": "โอะ",
        "ruTr": "о",
        "phuketRuTr": "о",
        "enTr": "o",
        "example": "โอะ — (редко)",
        "examplePhuketRu": "о",
        "exampleEn": "โอะ — (rare)"
      },
      {
        "syllable": "โอ",
        "ruTr": "о:",
        "phuketRuTr": "о:",
        "enTr": "oo",
        "example": "โอ — (редко)",
        "examplePhuketRu": "о:",
        "exampleEn": "โอ — (rare)"
      },
      {
        "syllable": "ออ",
        "ruTr": "о",
        "phuketRuTr": "о",
        "enTr": "aw",
        "example": "ออ — (редко)",
        "examplePhuketRu": "о",
        "exampleEn": "ออ — (rare)"
      },
      {
        "syllable": "อำ",
        "ruTr": "ам",
        "phuketRuTr": "ам",
        "enTr": "am",
        "example": "อำ — (редко)",
        "examplePhuketRu": "ам",
        "exampleEn": "อำ — (rare)"
      },
      {
        "syllable": "ใอ",
        "ruTr": "ай",
        "phuketRuTr": "ай",
        "enTr": "ai",
        "example": "ใอ — слог",
        "examplePhuketRu": "ай",
        "exampleEn": "ใอ — syllable"
      },
      {
        "syllable": "ไอ",
        "ruTr": "ай",
        "phuketRuTr": "ай",
        "enTr": "ai",
        "example": "ไอ — слог",
        "examplePhuketRu": "ай",
        "exampleEn": "ไอ — syllable"
      }
    ],
    "words": [
      {
        "thai": "อยู่",
        "ruTr": "ю:",
        "phuketRuTr": "ю:",
        "enTr": "yuu",
        "translation": "быть / находиться",
        "translationEn": "to be / to stay"
      },
      {
        "thai": "อาหาร",
        "ruTr": "а:ха:н",
        "phuketRuTr": "а:ха:н",
        "enTr": "aahaan",
        "translation": "еда",
        "translationEn": "food"
      },
      {
        "thai": "อ่าน",
        "ruTr": "а:н",
        "phuketRuTr": "а:н",
        "enTr": "aan",
        "translation": "читать",
        "translationEn": "to read"
      },
      {
        "thai": "อร่อย",
        "ruTr": "аро:й",
        "phuketRuTr": "ало:й",
        "enTr": "arooi",
        "translation": "вкусный",
        "translationEn": "delicious"
      }
    ],
    "phrases": [
      {
        "thai": "อยู่ที่ไหน",
        "ruTr": "ю: тхи: най",
        "phuketRuTr": "ю: ти: най",
        "enTr": "yuu thii nai",
        "translation": "Где ты?",
        "translationEn": "Where are you?"
      },
      {
        "thai": "อาหารอร่อย",
        "ruTr": "а:ха:н аро:й",
        "phuketRuTr": "а:ха:н ало:й",
        "enTr": "aahaan arooi",
        "translation": "вкусная еда",
        "translationEn": "delicious food"
      }
    ],
    "meaningEn": "basin"
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
        "examplePhuketRu": "ха",
        "exampleEn": "ฮะ — (rare)"
      },
      {
        "syllable": "ฮา",
        "ruTr": "а:",
        "phuketRuTr": "ха:",
        "enTr": "aa",
        "example": "ฮา — (редко)",
        "examplePhuketRu": "ха:",
        "exampleEn": "ฮา — (rare)"
      },
      {
        "syllable": "ฮิ",
        "ruTr": "и",
        "phuketRuTr": "хи",
        "enTr": "i",
        "example": "ฮิ — (редко)",
        "examplePhuketRu": "хи",
        "exampleEn": "ฮิ — (rare)"
      },
      {
        "syllable": "ฮี",
        "ruTr": "и:",
        "phuketRuTr": "хи:",
        "enTr": "ii",
        "example": "ฮี — (редко)",
        "examplePhuketRu": "хи:",
        "exampleEn": "ฮี — (rare)"
      },
      {
        "syllable": "ฮุ",
        "ruTr": "у",
        "phuketRuTr": "ху",
        "enTr": "u",
        "example": "ฮุ — (редко)",
        "examplePhuketRu": "ху",
        "exampleEn": "ฮุ — (rare)"
      },
      {
        "syllable": "ฮู",
        "ruTr": "у:",
        "phuketRuTr": "ху:",
        "enTr": "uu",
        "example": "ฮู — (редко)",
        "examplePhuketRu": "ху:",
        "exampleEn": "ฮู — (rare)"
      },
      {
        "syllable": "เฮะ",
        "ruTr": "э",
        "phuketRuTr": "хэ",
        "enTr": "e",
        "example": "เฮะ — (редко)",
        "examplePhuketRu": "хэ",
        "exampleEn": "เฮะ — (rare)"
      },
      {
        "syllable": "เฮ",
        "ruTr": "э:",
        "phuketRuTr": "хэ:",
        "enTr": "ee",
        "example": "เฮ — (редко)",
        "examplePhuketRu": "хэ:",
        "exampleEn": "เฮ — (rare)"
      },
      {
        "syllable": "แฮะ",
        "ruTr": "э",
        "phuketRuTr": "хэ",
        "enTr": "ae",
        "example": "แฮะ — (редко)",
        "examplePhuketRu": "хэ",
        "exampleEn": "แฮะ — (rare)"
      },
      {
        "syllable": "แฮ",
        "ruTr": "э:",
        "phuketRuTr": "хэ:",
        "enTr": "aae",
        "example": "แฮ — (редко)",
        "examplePhuketRu": "хэ:",
        "exampleEn": "แฮ — (rare)"
      },
      {
        "syllable": "โฮะ",
        "ruTr": "о",
        "phuketRuTr": "хо",
        "enTr": "o",
        "example": "โฮะ — (редко)",
        "examplePhuketRu": "хо",
        "exampleEn": "โฮะ — (rare)"
      },
      {
        "syllable": "โฮ",
        "ruTr": "о:",
        "phuketRuTr": "хо:",
        "enTr": "oo",
        "example": "โฮ — (редко)",
        "examplePhuketRu": "хо:",
        "exampleEn": "โฮ — (rare)"
      },
      {
        "syllable": "ฮอ",
        "ruTr": "о",
        "phuketRuTr": "хо",
        "enTr": "aw",
        "example": "ฮอ — (редко)",
        "examplePhuketRu": "хо",
        "exampleEn": "ฮอ — (rare)"
      },
      {
        "syllable": "ฮำ",
        "ruTr": "ам",
        "phuketRuTr": "хам",
        "enTr": "am",
        "example": "ฮำ — (редко)",
        "examplePhuketRu": "хам",
        "exampleEn": "ฮำ — (rare)"
      },
      {
        "syllable": "ใฮ",
        "ruTr": "ай",
        "phuketRuTr": "хай",
        "enTr": "ai",
        "example": "ใฮ — слог",
        "examplePhuketRu": "хай",
        "exampleEn": "ใฮ — syllable"
      },
      {
        "syllable": "ไฮ",
        "ruTr": "ай",
        "phuketRuTr": "хай",
        "enTr": "ai",
        "example": "ไฮ — слог",
        "examplePhuketRu": "хай",
        "exampleEn": "ไฮ — syllable"
      }
    ],
    "words": [
      {
        "thai": "ฮา",
        "ruTr": "ха:",
        "phuketRuTr": "ха:",
        "enTr": "haa",
        "translation": "смеяться (ха-ха)",
        "translationEn": "to laugh (ha-ha)"
      },
      {
        "thai": "ฮิต",
        "ruTr": "хит",
        "phuketRuTr": "хит",
        "enTr": "hit",
        "translation": "хит (заимств.)",
        "translationEn": "hit (loanword)"
      },
      {
        "thai": "ฮอร์โมน",
        "ruTr": "хо:мон",
        "phuketRuTr": "хо:мон",
        "enTr": "hoomon",
        "translation": "гормон",
        "translationEn": "hormone"
      },
      {
        "thai": "ฮีโร่",
        "ruTr": "хиро:",
        "phuketRuTr": "хило:",
        "enTr": "hiiro",
        "translation": "герой (заимств.)",
        "translationEn": "hero (loanword)"
      }
    ],
    "phrases": [
      {
        "thai": "ฮาๆ",
        "ruTr": "ха: ха:",
        "phuketRuTr": "ха: ха:",
        "enTr": "haa haa",
        "translation": "ха-ха (смех)",
        "translationEn": "ha-ha (laughter)"
      },
      {
        "thai": "—",
        "ruTr": "—",
        "phuketRuTr": "—",
        "enTr": "—",
        "translation": "в основном в заимствованных словах",
        "translationEn": "mainly in loanwords"
      }
    ],
    "meaningEn": "owl"
  }
];
