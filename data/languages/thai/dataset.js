/**
 * data/languages/thai/dataset.js
 * Thai alphabet course — 43 consonants with syllables, words and phrases.
 * Embedded as a plain JS file so the wallpaper works without a server
 * (file:// protocol and Wallpaper Engine CEF).
 *
 * Generic dataset schema (see languages.js):
 *   id             unique course id (folder name)
 *   name           localized course name { en, ru }
 *   transcriptions column definitions, order matches every tr[] array
 *   lessons[]      symbol / name / tr[] / meaning / syllables[] / words[] / phrases[]
 */
ITW.Languages.register({
  "id": "thai",
  "name": {
    "en": "Thai",
    "ru": "Тайский"
  },
  "transcriptions": [
    {
      "id": "main",
      "locale": "ru",
      "label": {
        "en": "Central",
        "ru": "Центр."
      }
    },
    {
      "id": "alt",
      "locale": "ru",
      "label": {
        "en": "Phuket",
        "ru": "Пхукет"
      }
    },
    {
      "id": "latin",
      "locale": "en",
      "label": {
        "en": "EN",
        "ru": "EN"
      }
    }
  ],
  "lessons": [
    {
      "symbol": "ก",
      "name": "กอ ไก่",
      "tr": [
        "г/к",
        "к",
        "g/k"
      ],
      "meaning": {
        "en": "chicken",
        "ru": "курица"
      },
      "syllables": [
        {
          "text": "กะ",
          "tr": [
            "а",
            "ка",
            "a"
          ],
          "example": {
            "en": "กะ — particle",
            "ru": "กะ — частица"
          },
          "note": "ка"
        },
        {
          "text": "กา",
          "tr": [
            "а:",
            "ка:",
            "aa"
          ],
          "example": {
            "en": "กา — crow",
            "ru": "กา — ворона"
          },
          "note": "ка:"
        },
        {
          "text": "กิ",
          "tr": [
            "и",
            "ки",
            "i"
          ],
          "example": {
            "en": "กิน — to eat",
            "ru": "กิน — есть"
          },
          "note": "кин"
        },
        {
          "text": "กี",
          "tr": [
            "и:",
            "ки:",
            "ii"
          ],
          "example": {
            "en": "กี — (rare)",
            "ru": "กี — (редко)"
          },
          "note": "ки:"
        },
        {
          "text": "กุ",
          "tr": [
            "у",
            "ку",
            "u"
          ],
          "example": {
            "en": "กุญแจ — key",
            "ru": "กุญแจ — ключ"
          },
          "note": "ку"
        },
        {
          "text": "กู",
          "tr": [
            "у:",
            "ку:",
            "uu"
          ],
          "example": {
            "en": "กู — you (rude)",
            "ru": "กู — ты (грубо)"
          },
          "note": "ку:"
        },
        {
          "text": "เกะ",
          "tr": [
            "э",
            "кэ",
            "e"
          ],
          "example": {
            "en": "เกะ — (rare)",
            "ru": "เกะ — (редко)"
          },
          "note": "кэ"
        },
        {
          "text": "เก",
          "tr": [
            "э:",
            "кэ:",
            "ee"
          ],
          "example": {
            "en": "เก — (rare)",
            "ru": "เก — (редко)"
          },
          "note": "кэ:"
        },
        {
          "text": "แกะ",
          "tr": [
            "э",
            "кэ",
            "ae"
          ],
          "example": {
            "en": "แกะ — sheep",
            "ru": "แกะ — овца"
          },
          "note": "кэ"
        },
        {
          "text": "แก",
          "tr": [
            "э:",
            "кэ:",
            "aae"
          ],
          "example": {
            "en": "แก — old",
            "ru": "แก — старый"
          },
          "note": "кэ:"
        },
        {
          "text": "โกะ",
          "tr": [
            "о",
            "ко",
            "o"
          ],
          "example": {
            "en": "โกะ — (rare)",
            "ru": "โกะ — (редко)"
          },
          "note": "ко"
        },
        {
          "text": "โก",
          "tr": [
            "о:",
            "ко:",
            "oo"
          ],
          "example": {
            "en": "โก — (rare)",
            "ru": "โก — (редко)"
          },
          "note": "ко:"
        },
        {
          "text": "กอ",
          "tr": [
            "о",
            "ко",
            "aw"
          ],
          "example": {
            "en": "กอ — (rare)",
            "ru": "กอ — (редко)"
          },
          "note": "ко"
        },
        {
          "text": "กำ",
          "tr": [
            "ам",
            "кам",
            "am"
          ],
          "example": {
            "en": "กำ — collar",
            "ru": "กำ — ворот"
          },
          "note": "кам"
        },
        {
          "text": "ใก",
          "tr": [
            "ай",
            "кай",
            "ai"
          ],
          "example": {
            "en": "ใกล้ — close",
            "ru": "ใกล้ — близко"
          },
          "note": "кай"
        },
        {
          "text": "ไก",
          "tr": [
            "ай",
            "кай",
            "ai"
          ],
          "example": {
            "en": "ไกล — far",
            "ru": "ไกล — далеко"
          },
          "note": "кай"
        }
      ],
      "words": [
        {
          "text": "กา",
          "tr": [
            "ка:",
            "ка:",
            "kaa"
          ],
          "translation": {
            "en": "crow",
            "ru": "ворона"
          }
        },
        {
          "text": "กิน",
          "tr": [
            "гин",
            "кин",
            "gin"
          ],
          "translation": {
            "en": "to eat",
            "ru": "есть / кушать"
          }
        },
        {
          "text": "แกง",
          "tr": [
            "гаэнг",
            "каэнк",
            "gaeng"
          ],
          "translation": {
            "en": "curry",
            "ru": "карри"
          }
        },
        {
          "text": "กลับ",
          "tr": [
            "глаб",
            "клаб",
            "glap"
          ],
          "translation": {
            "en": "to return",
            "ru": "возвращаться"
          }
        }
      ],
      "phrases": [
        {
          "text": "กินข้าว",
          "tr": [
            "гин кха:o",
            "кин као",
            "gin khao"
          ],
          "translation": {
            "en": "to eat rice",
            "ru": "кушать / есть рис"
          }
        },
        {
          "text": "กลับบ้าน",
          "tr": [
            "глаб ба:н",
            "клап бан",
            "glap baan"
          ],
          "translation": {
            "en": "to go home",
            "ru": "вернуться домой"
          }
        }
      ]
    },
    {
      "symbol": "ข",
      "name": "ขอ ไข่",
      "tr": [
        "кх",
        "к",
        "kh"
      ],
      "meaning": {
        "en": "egg",
        "ru": "яйцо"
      },
      "syllables": [
        {
          "text": "ขะ",
          "tr": [
            "а",
            "ка",
            "a"
          ],
          "example": {
            "en": "ขะ — (rare)",
            "ru": "ขะ — (редко)"
          },
          "note": "ка"
        },
        {
          "text": "ขา",
          "tr": [
            "а:",
            "ка:",
            "aa"
          ],
          "example": {
            "en": "ข้าว — rice",
            "ru": "ข้าว — рис"
          },
          "note": "као"
        },
        {
          "text": "ขิ",
          "tr": [
            "и",
            "ки",
            "i"
          ],
          "example": {
            "en": "ขี่ — to ride",
            "ru": "ขี่ — ехать"
          },
          "note": "ки"
        },
        {
          "text": "ขี",
          "tr": [
            "и:",
            "ки:",
            "ii"
          ],
          "example": {
            "en": "ขี้ — excrement",
            "ru": "ขี้ — испражнение"
          },
          "note": "ки:"
        },
        {
          "text": "ขุ",
          "tr": [
            "у",
            "ку",
            "u"
          ],
          "example": {
            "en": "ขุด — to dig",
            "ru": "ขุด — копать"
          },
          "note": "ку"
        },
        {
          "text": "ขู",
          "tr": [
            "у:",
            "ку:",
            "uu"
          ],
          "example": {
            "en": "ขู่ — to threaten",
            "ru": "ขู่ — угрожать"
          },
          "note": "ку:"
        },
        {
          "text": "เขะ",
          "tr": [
            "э",
            "кэ",
            "e"
          ],
          "example": {
            "en": "เข — (rare)",
            "ru": "เข — (редко)"
          },
          "note": "кэ"
        },
        {
          "text": "เข",
          "tr": [
            "э:",
            "кэ:",
            "ee"
          ],
          "example": {
            "en": "เขา — he / mountain",
            "ru": "เขา — он/гора"
          },
          "note": "кэ:"
        },
        {
          "text": "แขะ",
          "tr": [
            "э",
            "кэ",
            "ae"
          ],
          "example": {
            "en": "แข — (rare)",
            "ru": "แข — (редко)"
          },
          "note": "кэ"
        },
        {
          "text": "แข",
          "tr": [
            "э:",
            "кэ:",
            "aae"
          ],
          "example": {
            "en": "แข็ง — hard",
            "ru": "แข็ง — твёрдый"
          },
          "note": "кэ:"
        },
        {
          "text": "โขะ",
          "tr": [
            "о",
            "ко",
            "o"
          ],
          "example": {
            "en": "โข — (rare)",
            "ru": "โข — (редко)"
          },
          "note": "ко"
        },
        {
          "text": "โข",
          "tr": [
            "о:",
            "ко:",
            "oo"
          ],
          "example": {
            "en": "โขน — (rare)",
            "ru": "โขน — (редко)"
          },
          "note": "ко:"
        },
        {
          "text": "ขอ",
          "tr": [
            "о",
            "ко",
            "aw"
          ],
          "example": {
            "en": "ขอ — to ask",
            "ru": "ขอ — просить"
          },
          "note": "ко"
        },
        {
          "text": "ขำ",
          "tr": [
            "ам",
            "кам",
            "am"
          ],
          "example": {
            "en": "ขำ — to laugh",
            "ru": "ขำ — смеяться"
          },
          "note": "кам"
        },
        {
          "text": "ใข",
          "tr": [
            "ай",
            "кай",
            "ai"
          ],
          "example": {
            "en": "ใข — syllable",
            "ru": "ใข — слог"
          },
          "note": "кай"
        },
        {
          "text": "ไข",
          "tr": [
            "ай",
            "кай",
            "ai"
          ],
          "example": {
            "en": "ไข — syllable",
            "ru": "ไข — слог"
          },
          "note": "кай"
        }
      ],
      "words": [
        {
          "text": "ข้าว",
          "tr": [
            "кха:o",
            "као",
            "khao"
          ],
          "translation": {
            "en": "rice",
            "ru": "рис"
          }
        },
        {
          "text": "ขาว",
          "tr": [
            "кха:o",
            "ка:o",
            "khaao"
          ],
          "translation": {
            "en": "white",
            "ru": "белый"
          }
        },
        {
          "text": "ขา",
          "tr": [
            "кха:",
            "ка:",
            "khaa"
          ],
          "translation": {
            "en": "leg",
            "ru": "нога"
          }
        },
        {
          "text": "ขึ้น",
          "tr": [
            "кхын",
            "кын",
            "khuen"
          ],
          "translation": {
            "en": "to rise",
            "ru": "подниматься"
          }
        }
      ],
      "phrases": [
        {
          "text": "ขอโทษ",
          "tr": [
            "кхо: то:т",
            "ко тот",
            "kho thot"
          ],
          "translation": {
            "en": "excuse me / sorry",
            "ru": "извините"
          }
        },
        {
          "text": "ขอบคุณ",
          "tr": [
            "кхо:п кхун",
            "коп кун",
            "khob khun"
          ],
          "translation": {
            "en": "thank you",
            "ru": "спасибо"
          }
        }
      ]
    },
    {
      "symbol": "ฃ",
      "name": "ฃอ ขวด",
      "tr": [
        "кх",
        "к",
        "kh"
      ],
      "meaning": {
        "en": "bottle (archaic)",
        "ru": "бутылка (устар.)"
      },
      "syllables": [
        {
          "text": "ฃะ",
          "tr": [
            "а",
            "ка",
            "a"
          ],
          "example": {
            "en": "ฃ — archaic",
            "ru": "ฃ — устар."
          },
          "note": "ка"
        },
        {
          "text": "ฃา",
          "tr": [
            "а:",
            "ка:",
            "aa"
          ],
          "example": {
            "en": "ฃา — (archaic)",
            "ru": "ฃา — (устар.)"
          },
          "note": "ка:"
        },
        {
          "text": "ฃิ",
          "tr": [
            "и",
            "ки",
            "i"
          ],
          "example": {
            "en": "ฃิ — (archaic)",
            "ru": "ฃิ — (устар.)"
          },
          "note": "ки"
        },
        {
          "text": "ฃี",
          "tr": [
            "и:",
            "ки:",
            "ii"
          ],
          "example": {
            "en": "ฃี — (archaic)",
            "ru": "ฃี — (устар.)"
          },
          "note": "ки:"
        },
        {
          "text": "ฃุ",
          "tr": [
            "у",
            "ку",
            "u"
          ],
          "example": {
            "en": "ฃุ — (archaic)",
            "ru": "ฃุ — (устар.)"
          },
          "note": "ку"
        },
        {
          "text": "ฃู",
          "tr": [
            "у:",
            "ку:",
            "uu"
          ],
          "example": {
            "en": "ฃู — (archaic)",
            "ru": "ฃู — (устар.)"
          },
          "note": "ку:"
        },
        {
          "text": "เฃะ",
          "tr": [
            "э",
            "кэ",
            "e"
          ],
          "example": {
            "en": "เฃะ — (archaic)",
            "ru": "เฃะ — (устар.)"
          },
          "note": "кэ"
        },
        {
          "text": "เฃ",
          "tr": [
            "э:",
            "кэ:",
            "ee"
          ],
          "example": {
            "en": "เฃ — (archaic)",
            "ru": "เฃ — (устар.)"
          },
          "note": "кэ:"
        },
        {
          "text": "แฃะ",
          "tr": [
            "э",
            "кэ",
            "ae"
          ],
          "example": {
            "en": "แฃะ — (archaic)",
            "ru": "แฃะ — (устар.)"
          },
          "note": "кэ"
        },
        {
          "text": "แฃ",
          "tr": [
            "э:",
            "кэ:",
            "aae"
          ],
          "example": {
            "en": "แฃ — (archaic)",
            "ru": "แฃ — (устар.)"
          },
          "note": "кэ:"
        },
        {
          "text": "โฃะ",
          "tr": [
            "о",
            "ко",
            "o"
          ],
          "example": {
            "en": "โฃะ — (archaic)",
            "ru": "โฃะ — (устар.)"
          },
          "note": "ко"
        },
        {
          "text": "โฃ",
          "tr": [
            "о:",
            "ко:",
            "oo"
          ],
          "example": {
            "en": "โฃ — (archaic)",
            "ru": "โฃ — (устар.)"
          },
          "note": "ко:"
        },
        {
          "text": "ฃอ",
          "tr": [
            "о",
            "ко",
            "aw"
          ],
          "example": {
            "en": "ฃอ — (archaic)",
            "ru": "ฃอ — (устар.)"
          },
          "note": "ко"
        },
        {
          "text": "ฃำ",
          "tr": [
            "ам",
            "кам",
            "am"
          ],
          "example": {
            "en": "ฃำ — (archaic)",
            "ru": "ฃำ — (устар.)"
          },
          "note": "кам"
        },
        {
          "text": "ใฃ",
          "tr": [
            "ай",
            "кай",
            "ai"
          ],
          "example": {
            "en": "ใฃ — syllable",
            "ru": "ใฃ — слог"
          },
          "note": "кай"
        },
        {
          "text": "ไฃ",
          "tr": [
            "ай",
            "кай",
            "ai"
          ],
          "example": {
            "en": "ไฃ — syllable",
            "ru": "ไฃ — слог"
          },
          "note": "кай"
        }
      ],
      "words": [
        {
          "text": "ฃวด",
          "tr": [
            "кхуат",
            "куат",
            "khuat"
          ],
          "translation": {
            "en": "bottle (archaic)",
            "ru": "бутылка (устар.)"
          }
        },
        {
          "text": "ฃน",
          "tr": [
            "кхон",
            "кон",
            "khon"
          ],
          "translation": {
            "en": "(archaic)",
            "ru": "(устар.)"
          }
        },
        {
          "text": "ฃาย",
          "tr": [
            "кха:й",
            "ка:й",
            "khaai"
          ],
          "translation": {
            "en": "(archaic)",
            "ru": "(устар.)"
          }
        },
        {
          "text": "ฃึ้น",
          "tr": [
            "кхын",
            "кын",
            "khuen"
          ],
          "translation": {
            "en": "(archaic)",
            "ru": "(устар.)"
          }
        }
      ],
      "phrases": [
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "letter obsolete, replaced by ข",
            "ru": "буква устарела, заменена на ข"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "used only in old texts",
            "ru": "используется только в старых текстах"
          }
        }
      ]
    },
    {
      "symbol": "ค",
      "name": "คอ ควาย",
      "tr": [
        "кх",
        "к",
        "kh"
      ],
      "meaning": {
        "en": "buffalo",
        "ru": "буйвол"
      },
      "syllables": [
        {
          "text": "คะ",
          "tr": [
            "а",
            "ка",
            "a"
          ],
          "example": {
            "en": "คะ — particle",
            "ru": "คะ — частица"
          },
          "note": "ка"
        },
        {
          "text": "คา",
          "tr": [
            "а:",
            "ка:",
            "aa"
          ],
          "example": {
            "en": "คา — itch",
            "ru": "คา — зуд"
          },
          "note": "ка:"
        },
        {
          "text": "คิ",
          "tr": [
            "и",
            "ки",
            "i"
          ],
          "example": {
            "en": "คิ้ว — eyebrow",
            "ru": "คิ้ว — бровь"
          },
          "note": "ки"
        },
        {
          "text": "คี",
          "tr": [
            "и:",
            "ки:",
            "ii"
          ],
          "example": {
            "en": "คี — (rare)",
            "ru": "คี — (редко)"
          },
          "note": "ки:"
        },
        {
          "text": "คุ",
          "tr": [
            "у",
            "ку",
            "u"
          ],
          "example": {
            "en": "คุณ — you",
            "ru": "คุณ — вы"
          },
          "note": "кун"
        },
        {
          "text": "คู",
          "tr": [
            "у:",
            "ку:",
            "uu"
          ],
          "example": {
            "en": "คู่ — pair",
            "ru": "คู่ — пара"
          },
          "note": "ку:"
        },
        {
          "text": "เคะ",
          "tr": [
            "э",
            "кэ",
            "e"
          ],
          "example": {
            "en": "เข — (rare)",
            "ru": "เข — (редко)"
          },
          "note": "кэ"
        },
        {
          "text": "เค",
          "tr": [
            "э:",
            "кэ:",
            "ee"
          ],
          "example": {
            "en": "เขา — he / mountain",
            "ru": "เขา — он/гора"
          },
          "note": "кэ:"
        },
        {
          "text": "แคะ",
          "tr": [
            "э",
            "кэ",
            "ae"
          ],
          "example": {
            "en": "แค — (rare)",
            "ru": "แค — (редко)"
          },
          "note": "кэ"
        },
        {
          "text": "แค",
          "tr": [
            "э:",
            "кэ:",
            "aae"
          ],
          "example": {
            "en": "แค่ — only",
            "ru": "แค่ — только"
          },
          "note": "кэ:"
        },
        {
          "text": "โคะ",
          "tr": [
            "о",
            "ко",
            "o"
          ],
          "example": {
            "en": "โค — (rare)",
            "ru": "โค — (редко)"
          },
          "note": "ко"
        },
        {
          "text": "โค",
          "tr": [
            "о:",
            "ко:",
            "oo"
          ],
          "example": {
            "en": "โคน — (rare)",
            "ru": "โคน — (редко)"
          },
          "note": "ко:"
        },
        {
          "text": "คอ",
          "tr": [
            "о",
            "ко",
            "aw"
          ],
          "example": {
            "en": "คอ — neck",
            "ru": "คอ — шея"
          },
          "note": "ко"
        },
        {
          "text": "คำ",
          "tr": [
            "ам",
            "кам",
            "am"
          ],
          "example": {
            "en": "คำ — word",
            "ru": "คำ — слово"
          },
          "note": "кам"
        },
        {
          "text": "ใค",
          "tr": [
            "ай",
            "кай",
            "ai"
          ],
          "example": {
            "en": "ใค — syllable",
            "ru": "ใค — слог"
          },
          "note": "кай"
        },
        {
          "text": "ไค",
          "tr": [
            "ай",
            "кай",
            "ai"
          ],
          "example": {
            "en": "ไค — syllable",
            "ru": "ไค — слог"
          },
          "note": "кай"
        }
      ],
      "words": [
        {
          "text": "คน",
          "tr": [
            "кхон",
            "кон",
            "khon"
          ],
          "translation": {
            "en": "person",
            "ru": "человек"
          }
        },
        {
          "text": "คิด",
          "tr": [
            "кхит",
            "кит",
            "khit"
          ],
          "translation": {
            "en": "to think",
            "ru": "думать"
          }
        },
        {
          "text": "คุณ",
          "tr": [
            "кхун",
            "кун",
            "khun"
          ],
          "translation": {
            "en": "you / mister",
            "ru": "вы / господин"
          }
        },
        {
          "text": "ครับ",
          "tr": [
            "кхраб",
            "кап",
            "khrap"
          ],
          "translation": {
            "en": "polite particle (male)",
            "ru": "вежл. частица (м.р.)"
          }
        }
      ],
      "phrases": [
        {
          "text": "คุณชื่ออะไร",
          "tr": [
            "кхун чхе: арай",
            "кун че: алай",
            "khun chue a-rai"
          ],
          "translation": {
            "en": "What is your name?",
            "ru": "Как вас зовут?"
          }
        },
        {
          "text": "คุณเป็นใคร",
          "tr": [
            "кхун пен кхрай",
            "кун пен клай",
            "khun pen khrai"
          ],
          "translation": {
            "en": "Who are you?",
            "ru": "Кто вы?"
          }
        }
      ]
    },
    {
      "symbol": "ฆ",
      "name": "ฆอ ระฆัง",
      "tr": [
        "кх",
        "к",
        "kh"
      ],
      "meaning": {
        "en": "bell",
        "ru": "колокол"
      },
      "syllables": [
        {
          "text": "ฆะ",
          "tr": [
            "а",
            "ка",
            "a"
          ],
          "example": {
            "en": "ฆะ — (rare)",
            "ru": "ฆะ — (редко)"
          },
          "note": "ка"
        },
        {
          "text": "ฆา",
          "tr": [
            "а:",
            "ка:",
            "aa"
          ],
          "example": {
            "en": "ฆ่า — to kill",
            "ru": "ฆ่า — убивать"
          },
          "note": "ка:"
        },
        {
          "text": "ฆิ",
          "tr": [
            "и",
            "ки",
            "i"
          ],
          "example": {
            "en": "ฆิ — (rare)",
            "ru": "ฆิ — (редко)"
          },
          "note": "ки"
        },
        {
          "text": "ฆี",
          "tr": [
            "и:",
            "ки:",
            "ii"
          ],
          "example": {
            "en": "ฆี — (rare)",
            "ru": "ฆี — (редко)"
          },
          "note": "ки:"
        },
        {
          "text": "ฆุ",
          "tr": [
            "у",
            "ку",
            "u"
          ],
          "example": {
            "en": "ฆุ — (rare)",
            "ru": "ฆุ — (редко)"
          },
          "note": "ку"
        },
        {
          "text": "ฆู",
          "tr": [
            "у:",
            "ку:",
            "uu"
          ],
          "example": {
            "en": "ฆู — (rare)",
            "ru": "ฆู — (редко)"
          },
          "note": "ку:"
        },
        {
          "text": "เฆะ",
          "tr": [
            "э",
            "кэ",
            "e"
          ],
          "example": {
            "en": "เฆะ — (rare)",
            "ru": "เฆะ — (редко)"
          },
          "note": "кэ"
        },
        {
          "text": "เฆ",
          "tr": [
            "э:",
            "кэ:",
            "ee"
          ],
          "example": {
            "en": "เฆ — (rare)",
            "ru": "เฆ — (редко)"
          },
          "note": "кэ:"
        },
        {
          "text": "แฆะ",
          "tr": [
            "э",
            "кэ",
            "ae"
          ],
          "example": {
            "en": "แฆะ — (rare)",
            "ru": "แฆะ — (редко)"
          },
          "note": "кэ"
        },
        {
          "text": "แฆ",
          "tr": [
            "э:",
            "кэ:",
            "aae"
          ],
          "example": {
            "en": "แฆ — (rare)",
            "ru": "แฆ — (редко)"
          },
          "note": "кэ:"
        },
        {
          "text": "โฆะ",
          "tr": [
            "о",
            "ко",
            "o"
          ],
          "example": {
            "en": "โฆะ — (rare)",
            "ru": "โฆะ — (редко)"
          },
          "note": "ко"
        },
        {
          "text": "โฆ",
          "tr": [
            "о:",
            "ко:",
            "oo"
          ],
          "example": {
            "en": "โฆ — (rare)",
            "ru": "โฆ — (редко)"
          },
          "note": "ко:"
        },
        {
          "text": "ฆอ",
          "tr": [
            "о",
            "ко",
            "aw"
          ],
          "example": {
            "en": "ฆอ — (rare)",
            "ru": "ฆอ — (редко)"
          },
          "note": "ко"
        },
        {
          "text": "ฆำ",
          "tr": [
            "ам",
            "кам",
            "am"
          ],
          "example": {
            "en": "ฆำ — (rare)",
            "ru": "ฆำ — (редко)"
          },
          "note": "кам"
        },
        {
          "text": "ใฆ",
          "tr": [
            "ай",
            "кай",
            "ai"
          ],
          "example": {
            "en": "ใฆ — syllable",
            "ru": "ใฆ — слог"
          },
          "note": "кай"
        },
        {
          "text": "ไฆ",
          "tr": [
            "ай",
            "кай",
            "ai"
          ],
          "example": {
            "en": "ไฆ — syllable",
            "ru": "ไฆ — слог"
          },
          "note": "кай"
        }
      ],
      "words": [
        {
          "text": "ระฆัง",
          "tr": [
            "ракханг",
            "лаканк",
            "rakhang"
          ],
          "translation": {
            "en": "bell",
            "ru": "колокол"
          }
        },
        {
          "text": "ฆ่า",
          "tr": [
            "кха:",
            "ка:",
            "khaa"
          ],
          "translation": {
            "en": "to kill",
            "ru": "убивать"
          }
        },
        {
          "text": "ฆาต",
          "tr": [
            "кха:т",
            "ка:т",
            "khaat"
          ],
          "translation": {
            "en": "murder",
            "ru": "убийство"
          }
        },
        {
          "text": "ฆ้อง",
          "tr": [
            "кхо:нг",
            "ко:нк",
            "khong"
          ],
          "translation": {
            "en": "gong / cymbal",
            "ru": "гонд / тарелка"
          }
        }
      ],
      "phrases": [
        {
          "text": "ระฆังวัด",
          "tr": [
            "ракханг ват",
            "лаканк ват",
            "rakhang wat"
          ],
          "translation": {
            "en": "temple bell",
            "ru": "храмовый колокол"
          }
        },
        {
          "text": "ฆ่าเวลา",
          "tr": [
            "кха: вела:",
            "ка: вела:",
            "khaa weelaa"
          ],
          "translation": {
            "en": "to kill time",
            "ru": "убивать время"
          }
        }
      ]
    },
    {
      "symbol": "ง",
      "name": "งอ งู",
      "tr": [
        "нг",
        "нг",
        "ng"
      ],
      "meaning": {
        "en": "snake",
        "ru": "змея"
      },
      "syllables": [
        {
          "text": "งะ",
          "tr": [
            "а",
            "нга",
            "a"
          ],
          "example": {
            "en": "งะ — (rare)",
            "ru": "งะ — (редко)"
          },
          "note": "нга"
        },
        {
          "text": "งา",
          "tr": [
            "а:",
            "нга:",
            "aa"
          ],
          "example": {
            "en": "งา — ivory",
            "ru": "งา — слоновая кость"
          },
          "note": "нга:"
        },
        {
          "text": "งิ",
          "tr": [
            "и",
            "нги",
            "i"
          ],
          "example": {
            "en": "งิ — (rare)",
            "ru": "งิ — (редко)"
          },
          "note": "нги"
        },
        {
          "text": "งี",
          "tr": [
            "и:",
            "нги:",
            "ii"
          ],
          "example": {
            "en": "งี — (rare)",
            "ru": "งี — (редко)"
          },
          "note": "нги:"
        },
        {
          "text": "งุ",
          "tr": [
            "у",
            "нгу",
            "u"
          ],
          "example": {
            "en": "งุ — (rare)",
            "ru": "งุ — (редко)"
          },
          "note": "нгу"
        },
        {
          "text": "งู",
          "tr": [
            "у:",
            "нгу:",
            "uu"
          ],
          "example": {
            "en": "งู — snake",
            "ru": "งู — змея"
          },
          "note": "нгу:"
        },
        {
          "text": "เงะ",
          "tr": [
            "э",
            "нгэ",
            "e"
          ],
          "example": {
            "en": "เง — (rare)",
            "ru": "เง — (редко)"
          },
          "note": "нгэ"
        },
        {
          "text": "เง",
          "tr": [
            "э:",
            "нгэ:",
            "ee"
          ],
          "example": {
            "en": "เงา — shadow",
            "ru": "เงา — тень"
          },
          "note": "нгэ:"
        },
        {
          "text": "แงะ",
          "tr": [
            "э",
            "нгэ",
            "ae"
          ],
          "example": {
            "en": "แงะ — (rare)",
            "ru": "แงะ — (редко)"
          },
          "note": "нгэ"
        },
        {
          "text": "แง",
          "tr": [
            "э:",
            "нгэ:",
            "aae"
          ],
          "example": {
            "en": "แง — (rare)",
            "ru": "แง — (редко)"
          },
          "note": "нгэ:"
        },
        {
          "text": "โงะ",
          "tr": [
            "о",
            "нго",
            "o"
          ],
          "example": {
            "en": "โงะ — (rare)",
            "ru": "โงะ — (редко)"
          },
          "note": "нго"
        },
        {
          "text": "โง",
          "tr": [
            "о:",
            "нго:",
            "oo"
          ],
          "example": {
            "en": "โง่ — foolish",
            "ru": "โง่ — глупый"
          },
          "note": "нго:"
        },
        {
          "text": "งอ",
          "tr": [
            "о",
            "нго",
            "aw"
          ],
          "example": {
            "en": "งอ — to bend",
            "ru": "งอ — согнуть"
          },
          "note": "нго"
        },
        {
          "text": "งำ",
          "tr": [
            "ам",
            "нгам",
            "am"
          ],
          "example": {
            "en": "งำ — (rare)",
            "ru": "งำ — (редко)"
          },
          "note": "нгам"
        },
        {
          "text": "ใง",
          "tr": [
            "ай",
            "нгай",
            "ai"
          ],
          "example": {
            "en": "ใง — syllable",
            "ru": "ใง — слог"
          },
          "note": "нгай"
        },
        {
          "text": "ไง",
          "tr": [
            "ай",
            "нгай",
            "ai"
          ],
          "example": {
            "en": "ไง — syllable",
            "ru": "ไง — слог"
          },
          "note": "нгай"
        }
      ],
      "words": [
        {
          "text": "งาน",
          "tr": [
            "нга:н",
            "нка:н",
            "ngaan"
          ],
          "translation": {
            "en": "work",
            "ru": "работа"
          }
        },
        {
          "text": "ง่าย",
          "tr": [
            "нга:й",
            "нка:й",
            "ngai"
          ],
          "translation": {
            "en": "easy / light",
            "ru": "лёгкий"
          }
        },
        {
          "text": "เงิน",
          "tr": [
            "нгоен",
            "нкоен",
            "ngoen"
          ],
          "translation": {
            "en": "money",
            "ru": "деньги"
          }
        },
        {
          "text": "งอน",
          "tr": [
            "нгон",
            "нкон",
            "ngon"
          ],
          "translation": {
            "en": "to sulk",
            "ru": "дуться"
          }
        }
      ],
      "phrases": [
        {
          "text": "งานดี",
          "tr": [
            "нга:н ди:",
            "нка:н ди:",
            "ngaan dii"
          ],
          "translation": {
            "en": "good work",
            "ru": "хорошая работа"
          }
        },
        {
          "text": "ไม่เป็นไร",
          "tr": [
            "май пен рай",
            "май пен рай",
            "mai pen rai"
          ],
          "translation": {
            "en": "it's OK / never mind",
            "ru": "ничего страшного"
          }
        }
      ]
    },
    {
      "symbol": "จ",
      "name": "จอ จาน",
      "tr": [
        "ч",
        "ч",
        "ch/j"
      ],
      "meaning": {
        "en": "plate",
        "ru": "тарелка"
      },
      "syllables": [
        {
          "text": "จะ",
          "tr": [
            "а",
            "ча",
            "a"
          ],
          "example": {
            "en": "จะ — future tense",
            "ru": "จะ — будущ. время"
          },
          "note": "ча"
        },
        {
          "text": "จา",
          "tr": [
            "а:",
            "ча:",
            "aa"
          ],
          "example": {
            "en": "จา — (rare)",
            "ru": "จา — (редко)"
          },
          "note": "ча:"
        },
        {
          "text": "จิ",
          "tr": [
            "и",
            "чи",
            "i"
          ],
          "example": {
            "en": "จิ — (rare)",
            "ru": "จิ — (редко)"
          },
          "note": "чи"
        },
        {
          "text": "จี",
          "tr": [
            "и:",
            "чи:",
            "ii"
          ],
          "example": {
            "en": "จี — (rare)",
            "ru": "จี — (редко)"
          },
          "note": "чи:"
        },
        {
          "text": "จุ",
          "tr": [
            "у",
            "чу",
            "u"
          ],
          "example": {
            "en": "จุ — (rare)",
            "ru": "จุ — (редко)"
          },
          "note": "чу"
        },
        {
          "text": "จู",
          "tr": [
            "у:",
            "чу:",
            "uu"
          ],
          "example": {
            "en": "จู — (rare)",
            "ru": "จู — (редко)"
          },
          "note": "чу:"
        },
        {
          "text": "เจะ",
          "tr": [
            "э",
            "чэ",
            "e"
          ],
          "example": {
            "en": "เจะ — (rare)",
            "ru": "เจะ — (редко)"
          },
          "note": "чэ"
        },
        {
          "text": "เจ",
          "tr": [
            "э:",
            "чэ:",
            "ee"
          ],
          "example": {
            "en": "เจ — (rare)",
            "ru": "เจ — (редко)"
          },
          "note": "чэ:"
        },
        {
          "text": "แจะ",
          "tr": [
            "э",
            "чэ",
            "ae"
          ],
          "example": {
            "en": "แจะ — (rare)",
            "ru": "แจะ — (редко)"
          },
          "note": "чэ"
        },
        {
          "text": "แจ",
          "tr": [
            "э:",
            "чэ:",
            "aae"
          ],
          "example": {
            "en": "แจ — (rare)",
            "ru": "แจ — (редко)"
          },
          "note": "чэ:"
        },
        {
          "text": "โจะ",
          "tr": [
            "о",
            "чо",
            "o"
          ],
          "example": {
            "en": "โจะ — (rare)",
            "ru": "โจะ — (редко)"
          },
          "note": "чо"
        },
        {
          "text": "โจ",
          "tr": [
            "о:",
            "чо:",
            "oo"
          ],
          "example": {
            "en": "โจ — (rare)",
            "ru": "โจ — (редко)"
          },
          "note": "чо:"
        },
        {
          "text": "จอ",
          "tr": [
            "о",
            "чо",
            "aw"
          ],
          "example": {
            "en": "จอ — screen",
            "ru": "จอ — экран"
          },
          "note": "чо"
        },
        {
          "text": "จำ",
          "tr": [
            "ам",
            "чам",
            "am"
          ],
          "example": {
            "en": "จำ — to remember",
            "ru": "จำ — помнить"
          },
          "note": "чам"
        },
        {
          "text": "ใจ",
          "tr": [
            "ай",
            "чай",
            "ai"
          ],
          "example": {
            "en": "ใจ — syllable",
            "ru": "ใจ — слог"
          },
          "note": "чай"
        },
        {
          "text": "ไจ",
          "tr": [
            "ай",
            "чай",
            "ai"
          ],
          "example": {
            "en": "ไจ — syllable",
            "ru": "ไจ — слог"
          },
          "note": "чай"
        }
      ],
      "words": [
        {
          "text": "จริง",
          "tr": [
            "чринг",
            "члинк",
            "jing"
          ],
          "translation": {
            "en": "true",
            "ru": "правда"
          }
        },
        {
          "text": "จำ",
          "tr": [
            "чам",
            "чам",
            "jam"
          ],
          "translation": {
            "en": "to remember",
            "ru": "помнить"
          }
        },
        {
          "text": "จบ",
          "tr": [
            "чоб",
            "чоб",
            "job"
          ],
          "translation": {
            "en": "end",
            "ru": "конец"
          }
        },
        {
          "text": "จาก",
          "tr": [
            "ча:к",
            "ча:к",
            "jaak"
          ],
          "translation": {
            "en": "from",
            "ru": "из / от"
          }
        }
      ],
      "phrases": [
        {
          "text": "จริงๆ",
          "tr": [
            "чринг-чринг",
            "члинк-члинк",
            "jing-jing"
          ],
          "translation": {
            "en": "seriously!",
            "ru": "серьёзно!"
          }
        },
        {
          "text": "จบแล้ว",
          "tr": [
            "чоб ла:еo",
            "чоб ла:еo",
            "job laew"
          ],
          "translation": {
            "en": "it's done / all done",
            "ru": "уже готово"
          }
        }
      ]
    },
    {
      "symbol": "ฉ",
      "name": "ฉอ ฉิ่ง",
      "tr": [
        "чх",
        "ч",
        "ch"
      ],
      "meaning": {
        "en": "cymbal",
        "ru": "тарелочка / цимбалы"
      },
      "syllables": [
        {
          "text": "ฉะ",
          "tr": [
            "а",
            "ча",
            "a"
          ],
          "example": {
            "en": "ฉะ — (rare)",
            "ru": "ฉะ — (редко)"
          },
          "note": "ча"
        },
        {
          "text": "ฉา",
          "tr": [
            "а:",
            "ча:",
            "aa"
          ],
          "example": {
            "en": "ฉา — (rare)",
            "ru": "ฉา — (редко)"
          },
          "note": "ча:"
        },
        {
          "text": "ฉิ",
          "tr": [
            "и",
            "чи",
            "i"
          ],
          "example": {
            "en": "ฉิ — (rare)",
            "ru": "ฉิ — (редко)"
          },
          "note": "чи"
        },
        {
          "text": "ฉี",
          "tr": [
            "и:",
            "чи:",
            "ii"
          ],
          "example": {
            "en": "ฉี — (rare)",
            "ru": "ฉี — (редко)"
          },
          "note": "чи:"
        },
        {
          "text": "ฉุ",
          "tr": [
            "у",
            "чу",
            "u"
          ],
          "example": {
            "en": "ฉุ — (rare)",
            "ru": "ฉุ — (редко)"
          },
          "note": "чу"
        },
        {
          "text": "ฉู",
          "tr": [
            "у:",
            "чу:",
            "uu"
          ],
          "example": {
            "en": "ฉู — (rare)",
            "ru": "ฉู — (редко)"
          },
          "note": "чу:"
        },
        {
          "text": "เฉะ",
          "tr": [
            "э",
            "чэ",
            "e"
          ],
          "example": {
            "en": "เฉะ — (rare)",
            "ru": "เฉะ — (редко)"
          },
          "note": "чэ"
        },
        {
          "text": "เฉ",
          "tr": [
            "э:",
            "чэ:",
            "ee"
          ],
          "example": {
            "en": "เฉ — (rare)",
            "ru": "เฉ — (редко)"
          },
          "note": "чэ:"
        },
        {
          "text": "แฉะ",
          "tr": [
            "э",
            "чэ",
            "ae"
          ],
          "example": {
            "en": "แฉะ — (rare)",
            "ru": "แฉะ — (редко)"
          },
          "note": "чэ"
        },
        {
          "text": "แฉ",
          "tr": [
            "э:",
            "чэ:",
            "aae"
          ],
          "example": {
            "en": "แฉ — (rare)",
            "ru": "แฉ — (редко)"
          },
          "note": "чэ:"
        },
        {
          "text": "โฉะ",
          "tr": [
            "о",
            "чо",
            "o"
          ],
          "example": {
            "en": "โฉะ — (rare)",
            "ru": "โฉะ — (редко)"
          },
          "note": "чо"
        },
        {
          "text": "โฉ",
          "tr": [
            "о:",
            "чо:",
            "oo"
          ],
          "example": {
            "en": "โฉ — (rare)",
            "ru": "โฉ — (редко)"
          },
          "note": "чо:"
        },
        {
          "text": "ฉอ",
          "tr": [
            "о",
            "чо",
            "aw"
          ],
          "example": {
            "en": "ฉอ — (rare)",
            "ru": "ฉอ — (редко)"
          },
          "note": "чо"
        },
        {
          "text": "ฉำ",
          "tr": [
            "ам",
            "чам",
            "am"
          ],
          "example": {
            "en": "ฉำ — (rare)",
            "ru": "ฉำ — (редко)"
          },
          "note": "чам"
        },
        {
          "text": "ใฉ",
          "tr": [
            "ай",
            "чай",
            "ai"
          ],
          "example": {
            "en": "ใฉ — syllable",
            "ru": "ใฉ — слог"
          },
          "note": "чай"
        },
        {
          "text": "ไฉ",
          "tr": [
            "ай",
            "чай",
            "ai"
          ],
          "example": {
            "en": "ไฉ — syllable",
            "ru": "ไฉ — слог"
          },
          "note": "чай"
        }
      ],
      "words": [
        {
          "text": "ฉัน",
          "tr": [
            "чан",
            "чан",
            "chan"
          ],
          "translation": {
            "en": "I (informal)",
            "ru": "я (разг.)"
          }
        },
        {
          "text": "ฉลาด",
          "tr": [
            "чхала:т",
            "чала:т",
            "chalaat"
          ],
          "translation": {
            "en": "smart",
            "ru": "умный"
          }
        },
        {
          "text": "ฉีด",
          "tr": [
            "чхи:т",
            "чи:т",
            "chiit"
          ],
          "translation": {
            "en": "to inject / spray",
            "ru": "колоть / брызгать"
          }
        },
        {
          "text": "ฉุก",
          "tr": [
            "чхук",
            "чук",
            "chuk"
          ],
          "translation": {
            "en": "urgent",
            "ru": "срочный"
          }
        }
      ],
      "phrases": [
        {
          "text": "ฉันชื่อ...",
          "tr": [
            "чан чхе:...",
            "чан че:...",
            "chan chue..."
          ],
          "translation": {
            "en": "My name is...",
            "ru": "Меня зовут..."
          }
        },
        {
          "text": "ฉุกเฉิน",
          "tr": [
            "чхук чхəн",
            "чук чəн",
            "chuk choen"
          ],
          "translation": {
            "en": "emergency",
            "ru": "экстренный случай"
          }
        }
      ]
    },
    {
      "symbol": "ช",
      "name": "ชอ ช้าง",
      "tr": [
        "чх",
        "ч",
        "ch"
      ],
      "meaning": {
        "en": "elephant",
        "ru": "слон"
      },
      "syllables": [
        {
          "text": "ชะ",
          "tr": [
            "а",
            "ча",
            "a"
          ],
          "example": {
            "en": "ชะ — (rare)",
            "ru": "ชะ — (редко)"
          },
          "note": "ча"
        },
        {
          "text": "ชา",
          "tr": [
            "а:",
            "ча:",
            "aa"
          ],
          "example": {
            "en": "ชา — tea",
            "ru": "ชา — чай"
          },
          "note": "ча:"
        },
        {
          "text": "ชิ",
          "tr": [
            "и",
            "чи",
            "i"
          ],
          "example": {
            "en": "ชิ — (rare)",
            "ru": "ชิ — (редко)"
          },
          "note": "чи"
        },
        {
          "text": "ชี",
          "tr": [
            "и:",
            "чи:",
            "ii"
          ],
          "example": {
            "en": "ชี — (rare)",
            "ru": "ชี — (редко)"
          },
          "note": "чи:"
        },
        {
          "text": "ชุ",
          "tr": [
            "у",
            "чу",
            "u"
          ],
          "example": {
            "en": "ชุ — (rare)",
            "ru": "ชุ — (редко)"
          },
          "note": "чу"
        },
        {
          "text": "ชู",
          "tr": [
            "у:",
            "чу:",
            "uu"
          ],
          "example": {
            "en": "ชู — (rare)",
            "ru": "ชู — (редко)"
          },
          "note": "чу:"
        },
        {
          "text": "เชะ",
          "tr": [
            "э",
            "чэ",
            "e"
          ],
          "example": {
            "en": "เช — (rare)",
            "ru": "เช — (редко)"
          },
          "note": "чэ"
        },
        {
          "text": "เช",
          "tr": [
            "э:",
            "чэ:",
            "ee"
          ],
          "example": {
            "en": "เช่น — for example",
            "ru": "เช่น — например"
          },
          "note": "чэ:"
        },
        {
          "text": "แชะ",
          "tr": [
            "э",
            "чэ",
            "ae"
          ],
          "example": {
            "en": "แชะ — (rare)",
            "ru": "แชะ — (редко)"
          },
          "note": "чэ"
        },
        {
          "text": "แช",
          "tr": [
            "э:",
            "чэ:",
            "aae"
          ],
          "example": {
            "en": "แช — (rare)",
            "ru": "แช — (редко)"
          },
          "note": "чэ:"
        },
        {
          "text": "โชะ",
          "tr": [
            "о",
            "чо",
            "o"
          ],
          "example": {
            "en": "โชะ — (rare)",
            "ru": "โชะ — (редко)"
          },
          "note": "чо"
        },
        {
          "text": "โช",
          "tr": [
            "о:",
            "чо:",
            "oo"
          ],
          "example": {
            "en": "โชค — luck",
            "ru": "โชค — удача"
          },
          "note": "чо:"
        },
        {
          "text": "ชอ",
          "tr": [
            "о",
            "чо",
            "aw"
          ],
          "example": {
            "en": "ชอ — (rare)",
            "ru": "ชอ — (редко)"
          },
          "note": "чо"
        },
        {
          "text": "ชำ",
          "tr": [
            "ам",
            "чам",
            "am"
          ],
          "example": {
            "en": "ชำ — to pay",
            "ru": "ชำ — оплачивать"
          },
          "note": "чам"
        },
        {
          "text": "ใช",
          "tr": [
            "ай",
            "чай",
            "ai"
          ],
          "example": {
            "en": "ใช — syllable",
            "ru": "ใช — слог"
          },
          "note": "чай"
        },
        {
          "text": "ไช",
          "tr": [
            "ай",
            "чай",
            "ai"
          ],
          "example": {
            "en": "ไช — syllable",
            "ru": "ไช — слог"
          },
          "note": "чай"
        }
      ],
      "words": [
        {
          "text": "ชอบ",
          "tr": [
            "чхо:б",
            "чо:б",
            "chob"
          ],
          "translation": {
            "en": "to like",
            "ru": "нравиться"
          }
        },
        {
          "text": "ชื่อ",
          "tr": [
            "чхе:",
            "че:",
            "chue"
          ],
          "translation": {
            "en": "name",
            "ru": "имя"
          }
        },
        {
          "text": "ช้า",
          "tr": [
            "чха:",
            "ча:",
            "chaa"
          ],
          "translation": {
            "en": "slow",
            "ru": "медленный"
          }
        },
        {
          "text": "ช่วย",
          "tr": [
            "чхуай",
            "чуай",
            "chuay"
          ],
          "translation": {
            "en": "to help",
            "ru": "помочь"
          }
        }
      ],
      "phrases": [
        {
          "text": "ช่วยด้วย",
          "tr": [
            "чхуай дуай",
            "чуай дуай",
            "chuay duay"
          ],
          "translation": {
            "en": "help!",
            "ru": "помогите!"
          }
        },
        {
          "text": "ผมชอบเมืองไทย",
          "tr": [
            "пхом чхо:б муанг тхай",
            "пом чо:б муанк тай",
            "phom chob mueang thai"
          ],
          "translation": {
            "en": "I like Thailand",
            "ru": "Мне нравится Таиланд"
          }
        }
      ]
    },
    {
      "symbol": "ซ",
      "name": "ซอ โซ่",
      "tr": [
        "с",
        "с",
        "s"
      ],
      "meaning": {
        "en": "chain",
        "ru": "цепь"
      },
      "syllables": [
        {
          "text": "ซะ",
          "tr": [
            "а",
            "са",
            "a"
          ],
          "example": {
            "en": "ซะ — (rare)",
            "ru": "ซะ — (редко)"
          },
          "note": "са"
        },
        {
          "text": "ซา",
          "tr": [
            "а:",
            "са:",
            "aa"
          ],
          "example": {
            "en": "ซา — (rare)",
            "ru": "ซา — (редко)"
          },
          "note": "са:"
        },
        {
          "text": "ซิ",
          "tr": [
            "и",
            "си",
            "i"
          ],
          "example": {
            "en": "ซิ — (rare)",
            "ru": "ซิ — (редко)"
          },
          "note": "си"
        },
        {
          "text": "ซี",
          "tr": [
            "и:",
            "си:",
            "ii"
          ],
          "example": {
            "en": "ซี — (rare)",
            "ru": "ซี — (редко)"
          },
          "note": "си:"
        },
        {
          "text": "ซุ",
          "tr": [
            "у",
            "су",
            "u"
          ],
          "example": {
            "en": "ซุ — (rare)",
            "ru": "ซุ — (редко)"
          },
          "note": "су"
        },
        {
          "text": "ซู",
          "tr": [
            "у:",
            "су:",
            "uu"
          ],
          "example": {
            "en": "ซู — (rare)",
            "ru": "ซู — (редко)"
          },
          "note": "су:"
        },
        {
          "text": "เซะ",
          "tr": [
            "э",
            "сэ",
            "e"
          ],
          "example": {
            "en": "เซะ — (rare)",
            "ru": "เซะ — (редко)"
          },
          "note": "сэ"
        },
        {
          "text": "เซ",
          "tr": [
            "э:",
            "сэ:",
            "ee"
          ],
          "example": {
            "en": "เซ — (rare)",
            "ru": "เซ — (редко)"
          },
          "note": "сэ:"
        },
        {
          "text": "แซะ",
          "tr": [
            "э",
            "сэ",
            "ae"
          ],
          "example": {
            "en": "แซะ — (rare)",
            "ru": "แซะ — (редко)"
          },
          "note": "сэ"
        },
        {
          "text": "แซ",
          "tr": [
            "э:",
            "сэ:",
            "aae"
          ],
          "example": {
            "en": "แซ — (rare)",
            "ru": "แซ — (редко)"
          },
          "note": "сэ:"
        },
        {
          "text": "โซะ",
          "tr": [
            "о",
            "со",
            "o"
          ],
          "example": {
            "en": "โซะ — (rare)",
            "ru": "โซะ — (редко)"
          },
          "note": "со"
        },
        {
          "text": "โซ",
          "tr": [
            "о:",
            "со:",
            "oo"
          ],
          "example": {
            "en": "โซ — (rare)",
            "ru": "โซ — (редко)"
          },
          "note": "со:"
        },
        {
          "text": "ซอ",
          "tr": [
            "о",
            "со",
            "aw"
          ],
          "example": {
            "en": "ซอ — (rare)",
            "ru": "ซอ — (редко)"
          },
          "note": "со"
        },
        {
          "text": "ซำ",
          "tr": [
            "ам",
            "сам",
            "am"
          ],
          "example": {
            "en": "ซำ — (rare)",
            "ru": "ซำ — (редко)"
          },
          "note": "сам"
        },
        {
          "text": "ใซ",
          "tr": [
            "ай",
            "сай",
            "ai"
          ],
          "example": {
            "en": "ใซ — syllable",
            "ru": "ใซ — слог"
          },
          "note": "сай"
        },
        {
          "text": "ไซ",
          "tr": [
            "ай",
            "сай",
            "ai"
          ],
          "example": {
            "en": "ไซ — syllable",
            "ru": "ไซ — слог"
          },
          "note": "сай"
        }
      ],
      "words": [
        {
          "text": "ซ้าย",
          "tr": [
            "са:й",
            "са:й",
            "saai"
          ],
          "translation": {
            "en": "left",
            "ru": "левый"
          }
        },
        {
          "text": "ซื้อ",
          "tr": [
            "сы:",
            "сы:",
            "sue"
          ],
          "translation": {
            "en": "to buy",
            "ru": "покупать"
          }
        },
        {
          "text": "ซ่อน",
          "tr": [
            "со:н",
            "со:н",
            "son"
          ],
          "translation": {
            "en": "to hide",
            "ru": "прятать"
          }
        },
        {
          "text": "ซี",
          "tr": [
            "си:",
            "си:",
            "sii"
          ],
          "translation": {
            "en": "letter C / west",
            "ru": "буква C / запад"
          }
        }
      ],
      "phrases": [
        {
          "text": "ซื้อของ",
          "tr": [
            "сы: кхо:нг",
            "сы: ко:нк",
            "sue khong"
          ],
          "translation": {
            "en": "to go shopping",
            "ru": "делать покупки"
          }
        },
        {
          "text": "ซ้ายมือ",
          "tr": [
            "са:й му:",
            "са:й му:",
            "saai mue"
          ],
          "translation": {
            "en": "left hand",
            "ru": "левая рука"
          }
        }
      ]
    },
    {
      "symbol": "ฌ",
      "name": "ฌอ เฌอ",
      "tr": [
        "чх",
        "ч",
        "ch"
      ],
      "meaning": {
        "en": "tree",
        "ru": "дерево"
      },
      "syllables": [
        {
          "text": "ฌะ",
          "tr": [
            "а",
            "ча",
            "a"
          ],
          "example": {
            "en": "ฌะ — (rare)",
            "ru": "ฌะ — (редко)"
          },
          "note": "ча"
        },
        {
          "text": "ฌา",
          "tr": [
            "а:",
            "ча:",
            "aa"
          ],
          "example": {
            "en": "ฌา — (rare)",
            "ru": "ฌา — (редко)"
          },
          "note": "ча:"
        },
        {
          "text": "ฌิ",
          "tr": [
            "и",
            "чи",
            "i"
          ],
          "example": {
            "en": "ฌิ — (rare)",
            "ru": "ฌิ — (редко)"
          },
          "note": "чи"
        },
        {
          "text": "ฌี",
          "tr": [
            "и:",
            "чи:",
            "ii"
          ],
          "example": {
            "en": "ฌี — (rare)",
            "ru": "ฌี — (редко)"
          },
          "note": "чи:"
        },
        {
          "text": "ฌุ",
          "tr": [
            "у",
            "чу",
            "u"
          ],
          "example": {
            "en": "ฌุ — (rare)",
            "ru": "ฌุ — (редко)"
          },
          "note": "чу"
        },
        {
          "text": "ฌู",
          "tr": [
            "у:",
            "чу:",
            "uu"
          ],
          "example": {
            "en": "ฌู — (rare)",
            "ru": "ฌู — (редко)"
          },
          "note": "чу:"
        },
        {
          "text": "เฌะ",
          "tr": [
            "э",
            "чэ",
            "e"
          ],
          "example": {
            "en": "เฌะ — (rare)",
            "ru": "เฌะ — (редко)"
          },
          "note": "чэ"
        },
        {
          "text": "เฌ",
          "tr": [
            "э:",
            "чэ:",
            "ee"
          ],
          "example": {
            "en": "เฌ — (rare)",
            "ru": "เฌ — (редко)"
          },
          "note": "чэ:"
        },
        {
          "text": "แฌะ",
          "tr": [
            "э",
            "чэ",
            "ae"
          ],
          "example": {
            "en": "แฌะ — (rare)",
            "ru": "แฌะ — (редко)"
          },
          "note": "чэ"
        },
        {
          "text": "แฌ",
          "tr": [
            "э:",
            "чэ:",
            "aae"
          ],
          "example": {
            "en": "แฌ — (rare)",
            "ru": "แฌ — (редко)"
          },
          "note": "чэ:"
        },
        {
          "text": "โฌะ",
          "tr": [
            "о",
            "чо",
            "o"
          ],
          "example": {
            "en": "โฌะ — (rare)",
            "ru": "โฌะ — (редко)"
          },
          "note": "чо"
        },
        {
          "text": "โฌ",
          "tr": [
            "о:",
            "чо:",
            "oo"
          ],
          "example": {
            "en": "โฌ — (rare)",
            "ru": "โฌ — (редко)"
          },
          "note": "чо:"
        },
        {
          "text": "ฌอ",
          "tr": [
            "о",
            "чо",
            "aw"
          ],
          "example": {
            "en": "ฌอ — (rare)",
            "ru": "ฌอ — (редко)"
          },
          "note": "чо"
        },
        {
          "text": "ฌำ",
          "tr": [
            "ам",
            "чам",
            "am"
          ],
          "example": {
            "en": "ฌำ — (rare)",
            "ru": "ฌำ — (редко)"
          },
          "note": "чам"
        },
        {
          "text": "ใฌ",
          "tr": [
            "ай",
            "чай",
            "ai"
          ],
          "example": {
            "en": "ใฌ — syllable",
            "ru": "ใฌ — слог"
          },
          "note": "чай"
        },
        {
          "text": "ไฌ",
          "tr": [
            "ай",
            "чай",
            "ai"
          ],
          "example": {
            "en": "ไฌ — syllable",
            "ru": "ไฌ — слог"
          },
          "note": "чай"
        }
      ],
      "words": [
        {
          "text": "เฌอ",
          "tr": [
            "чхə",
            "чə",
            "choe"
          ],
          "translation": {
            "en": "tree (literary)",
            "ru": "дерево (книжн.)"
          }
        },
        {
          "text": "ฌาน",
          "tr": [
            "ча:н",
            "ча:н",
            "chaan"
          ],
          "translation": {
            "en": "meditation (Pali)",
            "ru": "медитация (пали)"
          }
        },
        {
          "text": "ฌาปน",
          "tr": [
            "ча:пон",
            "ча:пон",
            "chaapon"
          ],
          "translation": {
            "en": "cremation",
            "ru": "кремация"
          }
        },
        {
          "text": "ฌาปนกิจ",
          "tr": [
            "ча:пон кит",
            "ча:пон кит",
            "chaapon kit"
          ],
          "translation": {
            "en": "funeral rites",
            "ru": "похоронные обряды"
          }
        }
      ],
      "phrases": [
        {
          "text": "ฌาปนกิจสงเคราะห์",
          "tr": [
            "ча:пон кит сонгкхро:",
            "ча:пон кит сонккло:",
            "chaapon kit songkhro"
          ],
          "translation": {
            "en": "cremation ritual",
            "ru": "ритуал кремации"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "rare letter, mainly in Sanskrit",
            "ru": "редкая буква, в основном в санскрите"
          }
        }
      ]
    },
    {
      "symbol": "ญ",
      "name": "ญอ หญิง",
      "tr": [
        "й/н",
        "й",
        "y/n"
      ],
      "meaning": {
        "en": "woman",
        "ru": "женщина"
      },
      "syllables": [
        {
          "text": "ญะ",
          "tr": [
            "а",
            "йа",
            "a"
          ],
          "example": {
            "en": "ญะ — (rare)",
            "ru": "ญะ — (редко)"
          },
          "note": "йа"
        },
        {
          "text": "ญา",
          "tr": [
            "а:",
            "йа:",
            "aa"
          ],
          "example": {
            "en": "ญา — (rare)",
            "ru": "ญา — (редко)"
          },
          "note": "йа:"
        },
        {
          "text": "ญิ",
          "tr": [
            "и",
            "йи",
            "i"
          ],
          "example": {
            "en": "ญิ — (rare)",
            "ru": "ญิ — (редко)"
          },
          "note": "йи"
        },
        {
          "text": "ญี",
          "tr": [
            "и:",
            "йи:",
            "ii"
          ],
          "example": {
            "en": "ญี — (rare)",
            "ru": "ญี — (редко)"
          },
          "note": "йи:"
        },
        {
          "text": "ญุ",
          "tr": [
            "у",
            "йу",
            "u"
          ],
          "example": {
            "en": "ญุ — (rare)",
            "ru": "ญุ — (редко)"
          },
          "note": "йу"
        },
        {
          "text": "ญู",
          "tr": [
            "у:",
            "йу:",
            "uu"
          ],
          "example": {
            "en": "ญู — (rare)",
            "ru": "ญู — (редко)"
          },
          "note": "йу:"
        },
        {
          "text": "เญะ",
          "tr": [
            "э",
            "йэ",
            "e"
          ],
          "example": {
            "en": "เญะ — (rare)",
            "ru": "เญะ — (редко)"
          },
          "note": "йэ"
        },
        {
          "text": "เญ",
          "tr": [
            "э:",
            "йэ:",
            "ee"
          ],
          "example": {
            "en": "เญ — (rare)",
            "ru": "เญ — (редко)"
          },
          "note": "йэ:"
        },
        {
          "text": "แญะ",
          "tr": [
            "э",
            "йэ",
            "ae"
          ],
          "example": {
            "en": "แญะ — (rare)",
            "ru": "แญะ — (редко)"
          },
          "note": "йэ"
        },
        {
          "text": "แญ",
          "tr": [
            "э:",
            "йэ:",
            "aae"
          ],
          "example": {
            "en": "แญ — (rare)",
            "ru": "แญ — (редко)"
          },
          "note": "йэ:"
        },
        {
          "text": "โญะ",
          "tr": [
            "о",
            "йо",
            "o"
          ],
          "example": {
            "en": "โญะ — (rare)",
            "ru": "โญะ — (редко)"
          },
          "note": "йо"
        },
        {
          "text": "โญ",
          "tr": [
            "о:",
            "йо:",
            "oo"
          ],
          "example": {
            "en": "โญ — (rare)",
            "ru": "โญ — (редко)"
          },
          "note": "йо:"
        },
        {
          "text": "ญอ",
          "tr": [
            "о",
            "йо",
            "aw"
          ],
          "example": {
            "en": "ญอ — (rare)",
            "ru": "ญอ — (редко)"
          },
          "note": "йо"
        },
        {
          "text": "ญำ",
          "tr": [
            "ам",
            "йам",
            "am"
          ],
          "example": {
            "en": "ญำ — (rare)",
            "ru": "ญำ — (редко)"
          },
          "note": "йам"
        },
        {
          "text": "ใญ",
          "tr": [
            "ай",
            "йай",
            "ai"
          ],
          "example": {
            "en": "ใญ — syllable",
            "ru": "ใญ — слог"
          },
          "note": "йай"
        },
        {
          "text": "ไญ",
          "tr": [
            "ай",
            "йай",
            "ai"
          ],
          "example": {
            "en": "ไญ — syllable",
            "ru": "ไญ — слог"
          },
          "note": "йай"
        }
      ],
      "words": [
        {
          "text": "หญิง",
          "tr": [
            "йинг",
            "йинк",
            "ying"
          ],
          "translation": {
            "en": "woman",
            "ru": "женщина"
          }
        },
        {
          "text": "ญาติ",
          "tr": [
            "я:ти",
            "я:ти",
            "yaat"
          ],
          "translation": {
            "en": "relative",
            "ru": "родственник"
          }
        },
        {
          "text": "ญี่ปุ่น",
          "tr": [
            "йипун",
            "йипун",
            "yiipun"
          ],
          "translation": {
            "en": "Japan",
            "ru": "Япония"
          }
        },
        {
          "text": "ญวน",
          "tr": [
            "йуан",
            "йуан",
            "yuan"
          ],
          "translation": {
            "en": "Vietnamese (archaic)",
            "ru": "вьетнамец (устар.)"
          }
        }
      ],
      "phrases": [
        {
          "text": "ญาติพี่น้อง",
          "tr": [
            "я:ти пхи: но:нг",
            "я:ти пи: но:нк",
            "yaat phii nong"
          ],
          "translation": {
            "en": "relatives / family",
            "ru": "родня / родственники"
          }
        },
        {
          "text": "ผู้หญิง",
          "tr": [
            "пху: йинг",
            "пу: йинк",
            "phuu ying"
          ],
          "translation": {
            "en": "woman / lady",
            "ru": "женщина / дама"
          }
        }
      ]
    },
    {
      "symbol": "ฐ",
      "name": "ฐอ ฐาน",
      "tr": [
        "тх",
        "т",
        "th"
      ],
      "meaning": {
        "en": "base / pedestal",
        "ru": "основание / пьедестал"
      },
      "syllables": [
        {
          "text": "ฐะ",
          "tr": [
            "а",
            "та",
            "a"
          ],
          "example": {
            "en": "ฐะ — (rare)",
            "ru": "ฐะ — (редко)"
          },
          "note": "та"
        },
        {
          "text": "ฐา",
          "tr": [
            "а:",
            "та:",
            "aa"
          ],
          "example": {
            "en": "ฐา — (rare)",
            "ru": "ฐา — (редко)"
          },
          "note": "та:"
        },
        {
          "text": "ฐิ",
          "tr": [
            "и",
            "ти",
            "i"
          ],
          "example": {
            "en": "ฐิ — (rare)",
            "ru": "ฐิ — (редко)"
          },
          "note": "ти"
        },
        {
          "text": "ฐี",
          "tr": [
            "и:",
            "ти:",
            "ii"
          ],
          "example": {
            "en": "ฐี — (rare)",
            "ru": "ฐี — (редко)"
          },
          "note": "ти:"
        },
        {
          "text": "ฐุ",
          "tr": [
            "у",
            "ту",
            "u"
          ],
          "example": {
            "en": "ฐุ — (rare)",
            "ru": "ฐุ — (редко)"
          },
          "note": "ту"
        },
        {
          "text": "ฐู",
          "tr": [
            "у:",
            "ту:",
            "uu"
          ],
          "example": {
            "en": "ฐู — (rare)",
            "ru": "ฐู — (редко)"
          },
          "note": "ту:"
        },
        {
          "text": "เฐะ",
          "tr": [
            "э",
            "тэ",
            "e"
          ],
          "example": {
            "en": "เฐะ — (rare)",
            "ru": "เฐะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "เฐ",
          "tr": [
            "э:",
            "тэ:",
            "ee"
          ],
          "example": {
            "en": "เฐ — (rare)",
            "ru": "เฐ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "แฐะ",
          "tr": [
            "э",
            "тэ",
            "ae"
          ],
          "example": {
            "en": "แฐะ — (rare)",
            "ru": "แฐะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "แฐ",
          "tr": [
            "э:",
            "тэ:",
            "aae"
          ],
          "example": {
            "en": "แฐ — (rare)",
            "ru": "แฐ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "โฐะ",
          "tr": [
            "о",
            "то",
            "o"
          ],
          "example": {
            "en": "โฐะ — (rare)",
            "ru": "โฐะ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "โฐ",
          "tr": [
            "о:",
            "то:",
            "oo"
          ],
          "example": {
            "en": "โฐ — (rare)",
            "ru": "โฐ — (редко)"
          },
          "note": "то:"
        },
        {
          "text": "ฐอ",
          "tr": [
            "о",
            "то",
            "aw"
          ],
          "example": {
            "en": "ฐอ — (rare)",
            "ru": "ฐอ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "ฐำ",
          "tr": [
            "ам",
            "там",
            "am"
          ],
          "example": {
            "en": "ฐำ — (rare)",
            "ru": "ฐำ — (редко)"
          },
          "note": "там"
        },
        {
          "text": "ใฐ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ใฐ — syllable",
            "ru": "ใฐ — слог"
          },
          "note": "тай"
        },
        {
          "text": "ไฐ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ไฐ — syllable",
            "ru": "ไฐ — слог"
          },
          "note": "тай"
        }
      ],
      "words": [
        {
          "text": "ฐาน",
          "tr": [
            "та:н",
            "та:н",
            "thaan"
          ],
          "translation": {
            "en": "base / foundation",
            "ru": "основание / база"
          }
        },
        {
          "text": "ฐานะ",
          "tr": [
            "та:на:",
            "та:на:",
            "thaanaa"
          ],
          "translation": {
            "en": "status / position",
            "ru": "положение / статус"
          }
        },
        {
          "text": "ฐานข้อมูล",
          "tr": [
            "та:н кхо:му:л",
            "та:н ко:му:л",
            "thaan khomuun"
          ],
          "translation": {
            "en": "database",
            "ru": "база данных"
          }
        },
        {
          "text": "ฐานทัพ",
          "tr": [
            "та:н тхап",
            "та:н тап",
            "thaan thap"
          ],
          "translation": {
            "en": "military base",
            "ru": "военная база"
          }
        }
      ],
      "phrases": [
        {
          "text": "ฐานข้อมูลกลาง",
          "tr": [
            "та:н кхо:му:л кла:нг",
            "та:н ко:му:л кла:нк",
            "thaan khomuun klaang"
          ],
          "translation": {
            "en": "central database",
            "ru": "центральная база данных"
          }
        },
        {
          "text": "ฐานะทางสังคม",
          "tr": [
            "та:на: тха:нг сангкхом",
            "та:на: та:нк санкком",
            "thaanaa thaang sangkhom"
          ],
          "translation": {
            "en": "social status",
            "ru": "социальный статус"
          }
        }
      ]
    },
    {
      "symbol": "ฑ",
      "name": "ฑอ มณโฑ",
      "tr": [
        "тх",
        "т",
        "th"
      ],
      "meaning": {
        "en": "Montho (name)",
        "ru": "Мантхо (имя)"
      },
      "syllables": [
        {
          "text": "ฑะ",
          "tr": [
            "а",
            "та",
            "a"
          ],
          "example": {
            "en": "ฑะ — (rare)",
            "ru": "ฑะ — (редко)"
          },
          "note": "та"
        },
        {
          "text": "ฑา",
          "tr": [
            "а:",
            "та:",
            "aa"
          ],
          "example": {
            "en": "ฑา — (rare)",
            "ru": "ฑา — (редко)"
          },
          "note": "та:"
        },
        {
          "text": "ฑิ",
          "tr": [
            "и",
            "ти",
            "i"
          ],
          "example": {
            "en": "ฑิ — (rare)",
            "ru": "ฑิ — (редко)"
          },
          "note": "ти"
        },
        {
          "text": "ฑี",
          "tr": [
            "и:",
            "ти:",
            "ii"
          ],
          "example": {
            "en": "ฑี — (rare)",
            "ru": "ฑี — (редко)"
          },
          "note": "ти:"
        },
        {
          "text": "ฑุ",
          "tr": [
            "у",
            "ту",
            "u"
          ],
          "example": {
            "en": "ฑุ — (rare)",
            "ru": "ฑุ — (редко)"
          },
          "note": "ту"
        },
        {
          "text": "ฑู",
          "tr": [
            "у:",
            "ту:",
            "uu"
          ],
          "example": {
            "en": "ฑู — (rare)",
            "ru": "ฑู — (редко)"
          },
          "note": "ту:"
        },
        {
          "text": "เฑะ",
          "tr": [
            "э",
            "тэ",
            "e"
          ],
          "example": {
            "en": "เฑะ — (rare)",
            "ru": "เฑะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "เฑ",
          "tr": [
            "э:",
            "тэ:",
            "ee"
          ],
          "example": {
            "en": "เฑ — (rare)",
            "ru": "เฑ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "แฑะ",
          "tr": [
            "э",
            "тэ",
            "ae"
          ],
          "example": {
            "en": "แฑะ — (rare)",
            "ru": "แฑะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "แฑ",
          "tr": [
            "э:",
            "тэ:",
            "aae"
          ],
          "example": {
            "en": "แฑ — (rare)",
            "ru": "แฑ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "โฑะ",
          "tr": [
            "о",
            "то",
            "o"
          ],
          "example": {
            "en": "โฑะ — (rare)",
            "ru": "โฑะ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "โฑ",
          "tr": [
            "о:",
            "то:",
            "oo"
          ],
          "example": {
            "en": "โฑ — (rare)",
            "ru": "โฑ — (редко)"
          },
          "note": "то:"
        },
        {
          "text": "ฑอ",
          "tr": [
            "о",
            "то",
            "aw"
          ],
          "example": {
            "en": "ฑอ — (rare)",
            "ru": "ฑอ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "ฑำ",
          "tr": [
            "ам",
            "там",
            "am"
          ],
          "example": {
            "en": "ฑำ — (rare)",
            "ru": "ฑำ — (редко)"
          },
          "note": "там"
        },
        {
          "text": "ใฑ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ใฑ — syllable",
            "ru": "ใฑ — слог"
          },
          "note": "тай"
        },
        {
          "text": "ไฑ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ไฑ — syllable",
            "ru": "ไฑ — слог"
          },
          "note": "тай"
        }
      ],
      "words": [
        {
          "text": "มณโฑ",
          "tr": [
            "монтхо:",
            "монто:",
            "montho"
          ],
          "translation": {
            "en": "Montho (from Ramayana)",
            "ru": "Мантхо (из Рамаяны)"
          }
        },
        {
          "text": "ฑิต",
          "tr": [
            "тхит",
            "тит",
            "thit"
          ],
          "translation": {
            "en": "(Pali) wise man",
            "ru": "(пали) мудрец"
          }
        },
        {
          "text": "ฑูต",
          "tr": [
            "тху:т",
            "ту:т",
            "thuut"
          ],
          "translation": {
            "en": "envoy (Pali)",
            "ru": "посланник (пали)"
          }
        },
        {
          "text": "ฑิตย์",
          "tr": [
            "тхит",
            "тит",
            "thit"
          ],
          "translation": {
            "en": "wise (Pali)",
            "ru": "мудрый (пали)"
          }
        }
      ],
      "phrases": [
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "rare letter, mainly in Pali/Sanskrit",
            "ru": "редкая буква, в основном в пали/санскрите"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "found in names and religious texts",
            "ru": "встречается в именах и религиозных текстах"
          }
        }
      ]
    },
    {
      "symbol": "ฒ",
      "name": "ฒอ ผู้เฒ่า",
      "tr": [
        "тх",
        "т",
        "th"
      ],
      "meaning": {
        "en": "elder",
        "ru": "старец"
      },
      "syllables": [
        {
          "text": "ฒะ",
          "tr": [
            "а",
            "та",
            "a"
          ],
          "example": {
            "en": "ฒะ — (rare)",
            "ru": "ฒะ — (редко)"
          },
          "note": "та"
        },
        {
          "text": "ฒา",
          "tr": [
            "а:",
            "та:",
            "aa"
          ],
          "example": {
            "en": "ฒา — (rare)",
            "ru": "ฒา — (редко)"
          },
          "note": "та:"
        },
        {
          "text": "ฒิ",
          "tr": [
            "и",
            "ти",
            "i"
          ],
          "example": {
            "en": "ฒิ — (rare)",
            "ru": "ฒิ — (редко)"
          },
          "note": "ти"
        },
        {
          "text": "ฒี",
          "tr": [
            "и:",
            "ти:",
            "ii"
          ],
          "example": {
            "en": "ฒี — (rare)",
            "ru": "ฒี — (редко)"
          },
          "note": "ти:"
        },
        {
          "text": "ฒุ",
          "tr": [
            "у",
            "ту",
            "u"
          ],
          "example": {
            "en": "ฒุ — (rare)",
            "ru": "ฒุ — (редко)"
          },
          "note": "ту"
        },
        {
          "text": "ฒู",
          "tr": [
            "у:",
            "ту:",
            "uu"
          ],
          "example": {
            "en": "ฒู — (rare)",
            "ru": "ฒู — (редко)"
          },
          "note": "ту:"
        },
        {
          "text": "เฒะ",
          "tr": [
            "э",
            "тэ",
            "e"
          ],
          "example": {
            "en": "เฒะ — (rare)",
            "ru": "เฒะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "เฒ",
          "tr": [
            "э:",
            "тэ:",
            "ee"
          ],
          "example": {
            "en": "เฒ — (rare)",
            "ru": "เฒ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "แฒะ",
          "tr": [
            "э",
            "тэ",
            "ae"
          ],
          "example": {
            "en": "แฒะ — (rare)",
            "ru": "แฒะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "แฒ",
          "tr": [
            "э:",
            "тэ:",
            "aae"
          ],
          "example": {
            "en": "แฒ — (rare)",
            "ru": "แฒ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "โฒะ",
          "tr": [
            "о",
            "то",
            "o"
          ],
          "example": {
            "en": "โฒะ — (rare)",
            "ru": "โฒะ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "โฒ",
          "tr": [
            "о:",
            "то:",
            "oo"
          ],
          "example": {
            "en": "โฒ — (rare)",
            "ru": "โฒ — (редко)"
          },
          "note": "то:"
        },
        {
          "text": "ฒอ",
          "tr": [
            "о",
            "то",
            "aw"
          ],
          "example": {
            "en": "ฒอ — (rare)",
            "ru": "ฒอ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "ฒำ",
          "tr": [
            "ам",
            "там",
            "am"
          ],
          "example": {
            "en": "ฒำ — (rare)",
            "ru": "ฒำ — (редко)"
          },
          "note": "там"
        },
        {
          "text": "ใฒ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ใฒ — syllable",
            "ru": "ใฒ — слог"
          },
          "note": "тай"
        },
        {
          "text": "ไฒ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ไฒ — syllable",
            "ru": "ไฒ — слог"
          },
          "note": "тай"
        }
      ],
      "words": [
        {
          "text": "ผู้เฒ่า",
          "tr": [
            "пху: тха:o",
            "пу: та:o",
            "phuu thao"
          ],
          "translation": {
            "en": "elder / sage",
            "ru": "старец / мудрец"
          }
        },
        {
          "text": "เฒ่า",
          "tr": [
            "тха:o",
            "та:o",
            "thao"
          ],
          "translation": {
            "en": "old / elderly",
            "ru": "старый / престарелый"
          }
        },
        {
          "text": "ฒ่า",
          "tr": [
            "тха:",
            "та:",
            "thaa"
          ],
          "translation": {
            "en": "(Pali) old age",
            "ru": "(пали) старость"
          }
        },
        {
          "text": "เฒ่าโวย",
          "tr": [
            "тха:o вой",
            "та:o вой",
            "thao woi"
          ],
          "translation": {
            "en": "to complain (colloq.)",
            "ru": "жаловаться (разг.)"
          }
        }
      ],
      "phrases": [
        {
          "text": "ผู้เฒ่าผู้แก่",
          "tr": [
            "пху: тха:o пху: кэ:",
            "пу: та:o пу: кэ:",
            "phuu thao phuu kae"
          ],
          "translation": {
            "en": "elderly people",
            "ru": "пожилые люди"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "rare letter, mainly in Pali",
            "ru": "редкая буква, в основном в пали"
          }
        }
      ]
    },
    {
      "symbol": "ณ",
      "name": "ณอ เณร",
      "tr": [
        "н",
        "н",
        "n"
      ],
      "meaning": {
        "en": "novice monk",
        "ru": "послушник"
      },
      "syllables": [
        {
          "text": "ณะ",
          "tr": [
            "а",
            "на",
            "a"
          ],
          "example": {
            "en": "ณะ — (rare)",
            "ru": "ณะ — (редко)"
          },
          "note": "на"
        },
        {
          "text": "ณา",
          "tr": [
            "а:",
            "на:",
            "aa"
          ],
          "example": {
            "en": "ณา — (rare)",
            "ru": "ณา — (редко)"
          },
          "note": "на:"
        },
        {
          "text": "ณิ",
          "tr": [
            "и",
            "ни",
            "i"
          ],
          "example": {
            "en": "ณิ — (rare)",
            "ru": "ณิ — (редко)"
          },
          "note": "ни"
        },
        {
          "text": "ณี",
          "tr": [
            "и:",
            "ни:",
            "ii"
          ],
          "example": {
            "en": "ณี — (rare)",
            "ru": "ณี — (редко)"
          },
          "note": "ни:"
        },
        {
          "text": "ณุ",
          "tr": [
            "у",
            "ну",
            "u"
          ],
          "example": {
            "en": "ณุ — (rare)",
            "ru": "ณุ — (редко)"
          },
          "note": "ну"
        },
        {
          "text": "ณู",
          "tr": [
            "у:",
            "ну:",
            "uu"
          ],
          "example": {
            "en": "ณู — (rare)",
            "ru": "ณู — (редко)"
          },
          "note": "ну:"
        },
        {
          "text": "เณะ",
          "tr": [
            "э",
            "нэ",
            "e"
          ],
          "example": {
            "en": "เณะ — (rare)",
            "ru": "เณะ — (редко)"
          },
          "note": "нэ"
        },
        {
          "text": "เณ",
          "tr": [
            "э:",
            "нэ:",
            "ee"
          ],
          "example": {
            "en": "เณ — (rare)",
            "ru": "เณ — (редко)"
          },
          "note": "нэ:"
        },
        {
          "text": "แณะ",
          "tr": [
            "э",
            "нэ",
            "ae"
          ],
          "example": {
            "en": "แณะ — (rare)",
            "ru": "แณะ — (редко)"
          },
          "note": "нэ"
        },
        {
          "text": "แณ",
          "tr": [
            "э:",
            "нэ:",
            "aae"
          ],
          "example": {
            "en": "แณ — (rare)",
            "ru": "แณ — (редко)"
          },
          "note": "нэ:"
        },
        {
          "text": "โณะ",
          "tr": [
            "о",
            "но",
            "o"
          ],
          "example": {
            "en": "โณะ — (rare)",
            "ru": "โณะ — (редко)"
          },
          "note": "но"
        },
        {
          "text": "โณ",
          "tr": [
            "о:",
            "но:",
            "oo"
          ],
          "example": {
            "en": "โณ — (rare)",
            "ru": "โณ — (редко)"
          },
          "note": "но:"
        },
        {
          "text": "ณอ",
          "tr": [
            "о",
            "но",
            "aw"
          ],
          "example": {
            "en": "ณอ — (rare)",
            "ru": "ณอ — (редко)"
          },
          "note": "но"
        },
        {
          "text": "ณำ",
          "tr": [
            "ам",
            "нам",
            "am"
          ],
          "example": {
            "en": "ณำ — (rare)",
            "ru": "ณำ — (редко)"
          },
          "note": "нам"
        },
        {
          "text": "ใณ",
          "tr": [
            "ай",
            "най",
            "ai"
          ],
          "example": {
            "en": "ใณ — syllable",
            "ru": "ใณ — слог"
          },
          "note": "най"
        },
        {
          "text": "ไณ",
          "tr": [
            "ай",
            "най",
            "ai"
          ],
          "example": {
            "en": "ไณ — syllable",
            "ru": "ไณ — слог"
          },
          "note": "най"
        }
      ],
      "words": [
        {
          "text": "เณร",
          "tr": [
            "нэн",
            "нэн",
            "nen"
          ],
          "translation": {
            "en": "novice monk",
            "ru": "послушник / новиций"
          }
        },
        {
          "text": "ณรงค์",
          "tr": [
            "наронг",
            "налонк",
            "narong"
          ],
          "translation": {
            "en": "effort / persistence",
            "ru": "усилие / настойчивость"
          }
        },
        {
          "text": "ณัฐ",
          "tr": [
            "нат",
            "нат",
            "nat"
          ],
          "translation": {
            "en": "wisdom (in names)",
            "ru": "мудрость (в именах)"
          }
        },
        {
          "text": "ณรงค์",
          "tr": [
            "наронг",
            "налонк",
            "narong"
          ],
          "translation": {
            "en": "campaign / effort",
            "ru": "кампания / усилие"
          }
        }
      ],
      "phrases": [
        {
          "text": "เณรหน้าไฟ",
          "tr": [
            "нэн на: фай",
            "нэн на: фай",
            "nen naa fai"
          ],
          "translation": {
            "en": "novice monk (colloq.)",
            "ru": "послушник (разг.)"
          }
        },
        {
          "text": "ณรงค์ปฏิบัติ",
          "tr": [
            "наронг патибат",
            "налонк патибат",
            "narong patibat"
          ],
          "translation": {
            "en": "persistent practice",
            "ru": "настойчивая практика"
          }
        }
      ]
    },
    {
      "symbol": "ฎ",
      "name": "ฎอ ชฎา",
      "tr": [
        "д",
        "д",
        "d"
      ],
      "meaning": {
        "en": "crown",
        "ru": "корона"
      },
      "syllables": [
        {
          "text": "ฎะ",
          "tr": [
            "а",
            "да",
            "a"
          ],
          "example": {
            "en": "ฎะ — (rare)",
            "ru": "ฎะ — (редко)"
          },
          "note": "да"
        },
        {
          "text": "ฎา",
          "tr": [
            "а:",
            "да:",
            "aa"
          ],
          "example": {
            "en": "ฎา — (rare)",
            "ru": "ฎา — (редко)"
          },
          "note": "да:"
        },
        {
          "text": "ฎิ",
          "tr": [
            "и",
            "ди",
            "i"
          ],
          "example": {
            "en": "ฎิ — (rare)",
            "ru": "ฎิ — (редко)"
          },
          "note": "ди"
        },
        {
          "text": "ฎี",
          "tr": [
            "и:",
            "ди:",
            "ii"
          ],
          "example": {
            "en": "ฎี — (rare)",
            "ru": "ฎี — (редко)"
          },
          "note": "ди:"
        },
        {
          "text": "ฎุ",
          "tr": [
            "у",
            "ду",
            "u"
          ],
          "example": {
            "en": "ฎุ — (rare)",
            "ru": "ฎุ — (редко)"
          },
          "note": "ду"
        },
        {
          "text": "ฎู",
          "tr": [
            "у:",
            "ду:",
            "uu"
          ],
          "example": {
            "en": "ฎู — (rare)",
            "ru": "ฎู — (редко)"
          },
          "note": "ду:"
        },
        {
          "text": "เฎะ",
          "tr": [
            "э",
            "дэ",
            "e"
          ],
          "example": {
            "en": "เฎะ — (rare)",
            "ru": "เฎะ — (редко)"
          },
          "note": "дэ"
        },
        {
          "text": "เฎ",
          "tr": [
            "э:",
            "дэ:",
            "ee"
          ],
          "example": {
            "en": "เฎ — (rare)",
            "ru": "เฎ — (редко)"
          },
          "note": "дэ:"
        },
        {
          "text": "แฎะ",
          "tr": [
            "э",
            "дэ",
            "ae"
          ],
          "example": {
            "en": "แฎะ — (rare)",
            "ru": "แฎะ — (редко)"
          },
          "note": "дэ"
        },
        {
          "text": "แฎ",
          "tr": [
            "э:",
            "дэ:",
            "aae"
          ],
          "example": {
            "en": "แฎ — (rare)",
            "ru": "แฎ — (редко)"
          },
          "note": "дэ:"
        },
        {
          "text": "โฎะ",
          "tr": [
            "о",
            "до",
            "o"
          ],
          "example": {
            "en": "โฎะ — (rare)",
            "ru": "โฎะ — (редко)"
          },
          "note": "до"
        },
        {
          "text": "โฎ",
          "tr": [
            "о:",
            "до:",
            "oo"
          ],
          "example": {
            "en": "โฎ — (rare)",
            "ru": "โฎ — (редко)"
          },
          "note": "до:"
        },
        {
          "text": "ฎอ",
          "tr": [
            "о",
            "до",
            "aw"
          ],
          "example": {
            "en": "ฎอ — (rare)",
            "ru": "ฎอ — (редко)"
          },
          "note": "до"
        },
        {
          "text": "ฎำ",
          "tr": [
            "ам",
            "дам",
            "am"
          ],
          "example": {
            "en": "ฎำ — (rare)",
            "ru": "ฎำ — (редко)"
          },
          "note": "дам"
        },
        {
          "text": "ใฎ",
          "tr": [
            "ай",
            "дай",
            "ai"
          ],
          "example": {
            "en": "ใฎ — syllable",
            "ru": "ใฎ — слог"
          },
          "note": "дай"
        },
        {
          "text": "ไฎ",
          "tr": [
            "ай",
            "дай",
            "ai"
          ],
          "example": {
            "en": "ไฎ — syllable",
            "ru": "ไฎ — слог"
          },
          "note": "дай"
        }
      ],
      "words": [
        {
          "text": "ชฎา",
          "tr": [
            "чхада:",
            "чада:",
            "chadaa"
          ],
          "translation": {
            "en": "crown / tiara",
            "ru": "корона / тиара"
          }
        },
        {
          "text": "ฎีกา",
          "tr": [
            "дика:",
            "дика:",
            "diikaa"
          ],
          "translation": {
            "en": "petition / complaint",
            "ru": "петиция / жалоба"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "rare letter",
            "ru": "редкая буква"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "mainly in Sanskrit",
            "ru": "в основном в санскрите"
          }
        }
      ],
      "phrases": [
        {
          "text": "ยื่นฎีกา",
          "tr": [
            "юн дика:",
            "юн дика:",
            "yuen diikaa"
          ],
          "translation": {
            "en": "to submit a petition",
            "ru": "подать петицию"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "rare letter",
            "ru": "редкая буква"
          }
        }
      ]
    },
    {
      "symbol": "ฏ",
      "name": "ฏอ ปฏัก",
      "tr": [
        "т",
        "т",
        "t"
      ],
      "meaning": {
        "en": "spear / goad",
        "ru": "острый кол"
      },
      "syllables": [
        {
          "text": "ฏะ",
          "tr": [
            "а",
            "та",
            "a"
          ],
          "example": {
            "en": "ฏะ — (rare)",
            "ru": "ฏะ — (редко)"
          },
          "note": "та"
        },
        {
          "text": "ฏา",
          "tr": [
            "а:",
            "та:",
            "aa"
          ],
          "example": {
            "en": "ฏา — (rare)",
            "ru": "ฏา — (редко)"
          },
          "note": "та:"
        },
        {
          "text": "ฏิ",
          "tr": [
            "и",
            "ти",
            "i"
          ],
          "example": {
            "en": "ฏิ — (rare)",
            "ru": "ฏิ — (редко)"
          },
          "note": "ти"
        },
        {
          "text": "ฏี",
          "tr": [
            "и:",
            "ти:",
            "ii"
          ],
          "example": {
            "en": "ฏี — (rare)",
            "ru": "ฏี — (редко)"
          },
          "note": "ти:"
        },
        {
          "text": "ฏุ",
          "tr": [
            "у",
            "ту",
            "u"
          ],
          "example": {
            "en": "ฏุ — (rare)",
            "ru": "ฏุ — (редко)"
          },
          "note": "ту"
        },
        {
          "text": "ฏู",
          "tr": [
            "у:",
            "ту:",
            "uu"
          ],
          "example": {
            "en": "ฏู — (rare)",
            "ru": "ฏู — (редко)"
          },
          "note": "ту:"
        },
        {
          "text": "เฏะ",
          "tr": [
            "э",
            "тэ",
            "e"
          ],
          "example": {
            "en": "เฏะ — (rare)",
            "ru": "เฏะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "เฏ",
          "tr": [
            "э:",
            "тэ:",
            "ee"
          ],
          "example": {
            "en": "เฏ — (rare)",
            "ru": "เฏ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "แฏะ",
          "tr": [
            "э",
            "тэ",
            "ae"
          ],
          "example": {
            "en": "แฏะ — (rare)",
            "ru": "แฏะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "แฏ",
          "tr": [
            "э:",
            "тэ:",
            "aae"
          ],
          "example": {
            "en": "แฏ — (rare)",
            "ru": "แฏ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "โฏะ",
          "tr": [
            "о",
            "то",
            "o"
          ],
          "example": {
            "en": "โฏะ — (rare)",
            "ru": "โฏะ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "โฏ",
          "tr": [
            "о:",
            "то:",
            "oo"
          ],
          "example": {
            "en": "โฏ — (rare)",
            "ru": "โฏ — (редко)"
          },
          "note": "то:"
        },
        {
          "text": "ฏอ",
          "tr": [
            "о",
            "то",
            "aw"
          ],
          "example": {
            "en": "ฏอ — (rare)",
            "ru": "ฏอ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "ฏำ",
          "tr": [
            "ам",
            "там",
            "am"
          ],
          "example": {
            "en": "ฏำ — (rare)",
            "ru": "ฏำ — (редко)"
          },
          "note": "там"
        },
        {
          "text": "ใฏ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ใฏ — syllable",
            "ru": "ใฏ — слог"
          },
          "note": "тай"
        },
        {
          "text": "ไฏ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ไฏ — syllable",
            "ru": "ไฏ — слог"
          },
          "note": "тай"
        }
      ],
      "words": [
        {
          "text": "ปฏัก",
          "tr": [
            "патак",
            "патак",
            "patak"
          ],
          "translation": {
            "en": "goad / spur",
            "ru": "острый кол / шпора"
          }
        },
        {
          "text": "ฏฐาน",
          "tr": [
            "татха:н",
            "тата:н",
            "tathaan"
          ],
          "translation": {
            "en": "(Sanskrit) base",
            "ru": "(санскрит) основание"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "rare letter",
            "ru": "редкая буква"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "mainly in Sanskrit",
            "ru": "в основном в санскрите"
          }
        }
      ],
      "phrases": [
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "rare letter",
            "ru": "редкая буква"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "mainly in Pali/Sanskrit",
            "ru": "в основном в пали/санскрите"
          }
        }
      ]
    },
    {
      "symbol": "ด",
      "name": "ดอ เด็ก",
      "tr": [
        "д",
        "д",
        "d"
      ],
      "meaning": {
        "en": "child",
        "ru": "ребёнок"
      },
      "syllables": [
        {
          "text": "ดะ",
          "tr": [
            "а",
            "да",
            "a"
          ],
          "example": {
            "en": "ดะ — (rare)",
            "ru": "ดะ — (редко)"
          },
          "note": "да"
        },
        {
          "text": "ดา",
          "tr": [
            "а:",
            "да:",
            "aa"
          ],
          "example": {
            "en": "ดา — star",
            "ru": "ดา — звезда"
          },
          "note": "да:"
        },
        {
          "text": "ดิ",
          "tr": [
            "и",
            "ди",
            "i"
          ],
          "example": {
            "en": "ดิ — (rare)",
            "ru": "ดิ — (редко)"
          },
          "note": "ди"
        },
        {
          "text": "ดี",
          "tr": [
            "и:",
            "ди:",
            "ii"
          ],
          "example": {
            "en": "ดี — good",
            "ru": "ดี — хорошо"
          },
          "note": "ди:"
        },
        {
          "text": "ดุ",
          "tr": [
            "у",
            "ду",
            "u"
          ],
          "example": {
            "en": "ดุ — (rare)",
            "ru": "ดุ — (редко)"
          },
          "note": "ду"
        },
        {
          "text": "ดู",
          "tr": [
            "у:",
            "ду:",
            "uu"
          ],
          "example": {
            "en": "ดู — to watch",
            "ru": "ดู — смотреть"
          },
          "note": "ду:"
        },
        {
          "text": "เดะ",
          "tr": [
            "э",
            "дэ",
            "e"
          ],
          "example": {
            "en": "เดะ — (rare)",
            "ru": "เดะ — (редко)"
          },
          "note": "дэ"
        },
        {
          "text": "เด",
          "tr": [
            "э:",
            "дэ:",
            "ee"
          ],
          "example": {
            "en": "เด — (rare)",
            "ru": "เด — (редко)"
          },
          "note": "дэ:"
        },
        {
          "text": "แดะ",
          "tr": [
            "э",
            "дэ",
            "ae"
          ],
          "example": {
            "en": "แดะ — (rare)",
            "ru": "แดะ — (редко)"
          },
          "note": "дэ"
        },
        {
          "text": "แด",
          "tr": [
            "э:",
            "дэ:",
            "aae"
          ],
          "example": {
            "en": "แด — (rare)",
            "ru": "แด — (редко)"
          },
          "note": "дэ:"
        },
        {
          "text": "โดะ",
          "tr": [
            "о",
            "до",
            "o"
          ],
          "example": {
            "en": "โดะ — (rare)",
            "ru": "โดะ — (редко)"
          },
          "note": "до"
        },
        {
          "text": "โด",
          "tr": [
            "о:",
            "до:",
            "oo"
          ],
          "example": {
            "en": "โด — (rare)",
            "ru": "โด — (редко)"
          },
          "note": "до:"
        },
        {
          "text": "ดอ",
          "tr": [
            "о",
            "до",
            "aw"
          ],
          "example": {
            "en": "ดอ — (rare)",
            "ru": "ดอ — (редко)"
          },
          "note": "до"
        },
        {
          "text": "ดำ",
          "tr": [
            "ам",
            "дам",
            "am"
          ],
          "example": {
            "en": "ดำ — black",
            "ru": "ดำ — чёрный"
          },
          "note": "дам"
        },
        {
          "text": "ใด",
          "tr": [
            "ай",
            "дай",
            "ai"
          ],
          "example": {
            "en": "ใด — syllable",
            "ru": "ใด — слог"
          },
          "note": "дай"
        },
        {
          "text": "ได",
          "tr": [
            "ай",
            "дай",
            "ai"
          ],
          "example": {
            "en": "ได — syllable",
            "ru": "ได — слог"
          },
          "note": "дай"
        }
      ],
      "words": [
        {
          "text": "ดี",
          "tr": [
            "ди:",
            "ди:",
            "dii"
          ],
          "translation": {
            "en": "good",
            "ru": "хороший"
          }
        },
        {
          "text": "ดู",
          "tr": [
            "ду:",
            "ду:",
            "duu"
          ],
          "translation": {
            "en": "to watch",
            "ru": "смотреть"
          }
        },
        {
          "text": "ดื่ม",
          "tr": [
            "дым",
            "дым",
            "duem"
          ],
          "translation": {
            "en": "to drink",
            "ru": "пить"
          }
        },
        {
          "text": "ดอกไม้",
          "tr": [
            "до:к май",
            "до:к май",
            "dok mai"
          ],
          "translation": {
            "en": "flower",
            "ru": "цветок"
          }
        }
      ],
      "phrases": [
        {
          "text": "ดีมาก",
          "tr": [
            "ди: ма:к",
            "ди: ма:к",
            "dii maak"
          ],
          "translation": {
            "en": "very good",
            "ru": "очень хорошо"
          }
        },
        {
          "text": "ดูแล",
          "tr": [
            "ду: ла:е",
            "ду: ла:е",
            "duu lae"
          ],
          "translation": {
            "en": "to take care",
            "ru": "заботиться"
          }
        }
      ]
    },
    {
      "symbol": "ต",
      "name": "ตอ เต่า",
      "tr": [
        "т",
        "т",
        "t"
      ],
      "meaning": {
        "en": "turtle",
        "ru": "черепаха"
      },
      "syllables": [
        {
          "text": "ตะ",
          "tr": [
            "а",
            "та",
            "a"
          ],
          "example": {
            "en": "ตะ — (rare)",
            "ru": "ตะ — (редко)"
          },
          "note": "та"
        },
        {
          "text": "ตา",
          "tr": [
            "а:",
            "та:",
            "aa"
          ],
          "example": {
            "en": "ตา — eye",
            "ru": "ตา — глаз"
          },
          "note": "та:"
        },
        {
          "text": "ติ",
          "tr": [
            "и",
            "ти",
            "i"
          ],
          "example": {
            "en": "ติ — (rare)",
            "ru": "ติ — (редко)"
          },
          "note": "ти"
        },
        {
          "text": "ตี",
          "tr": [
            "и:",
            "ти:",
            "ii"
          ],
          "example": {
            "en": "ตี — to beat",
            "ru": "ตี — бить"
          },
          "note": "ти:"
        },
        {
          "text": "ตุ",
          "tr": [
            "у",
            "ту",
            "u"
          ],
          "example": {
            "en": "ตุ — (rare)",
            "ru": "ตุ — (редко)"
          },
          "note": "ту"
        },
        {
          "text": "ตู",
          "tr": [
            "у:",
            "ту:",
            "uu"
          ],
          "example": {
            "en": "ตู — (rare)",
            "ru": "ตู — (редко)"
          },
          "note": "ту:"
        },
        {
          "text": "เตะ",
          "tr": [
            "э",
            "тэ",
            "e"
          ],
          "example": {
            "en": "เตะ — to kick",
            "ru": "เตะ — пинать"
          },
          "note": "тэ"
        },
        {
          "text": "เต",
          "tr": [
            "э:",
            "тэ:",
            "ee"
          ],
          "example": {
            "en": "เต — (rare)",
            "ru": "เต — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "แตะ",
          "tr": [
            "э",
            "тэ",
            "ae"
          ],
          "example": {
            "en": "แตะ — to touch",
            "ru": "แตะ — трогать"
          },
          "note": "тэ"
        },
        {
          "text": "แต",
          "tr": [
            "э:",
            "тэ:",
            "aae"
          ],
          "example": {
            "en": "แต — (rare)",
            "ru": "แต — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "โตะ",
          "tr": [
            "о",
            "то",
            "o"
          ],
          "example": {
            "en": "โตะ — (rare)",
            "ru": "โตะ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "โต",
          "tr": [
            "о:",
            "то:",
            "oo"
          ],
          "example": {
            "en": "โต — big",
            "ru": "โต — большой"
          },
          "note": "то:"
        },
        {
          "text": "ตอ",
          "tr": [
            "о",
            "то",
            "aw"
          ],
          "example": {
            "en": "ตอ — (rare)",
            "ru": "ตอ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "ตำ",
          "tr": [
            "ам",
            "там",
            "am"
          ],
          "example": {
            "en": "ตำ — to pound",
            "ru": "ตำ — песто/толочь"
          },
          "note": "там"
        },
        {
          "text": "ใต",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ใต — syllable",
            "ru": "ใต — слог"
          },
          "note": "тай"
        },
        {
          "text": "ไต",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ไต — syllable",
            "ru": "ไต — слог"
          },
          "note": "тай"
        }
      ],
      "words": [
        {
          "text": "ตอนนี้",
          "tr": [
            "то:н ни:",
            "то:н ни:",
            "ton nii"
          ],
          "translation": {
            "en": "now",
            "ru": "сейчас"
          }
        },
        {
          "text": "ตาม",
          "tr": [
            "та:м",
            "та:м",
            "taam"
          ],
          "translation": {
            "en": "to follow",
            "ru": "следовать"
          }
        },
        {
          "text": "ต้องการ",
          "tr": [
            "то:нг ка:н",
            "то:нк ка:н",
            "tong gaan"
          ],
          "translation": {
            "en": "to need",
            "ru": "нуждаться"
          }
        },
        {
          "text": "ต่อไป",
          "tr": [
            "то: пай",
            "то: пай",
            "to pai"
          ],
          "translation": {
            "en": "forward",
            "ru": "вперёд"
          }
        }
      ],
      "phrases": [
        {
          "text": "ตอนนี้อยู่ที่ไหน",
          "tr": [
            "то:н ни: ю: тхи: най",
            "то:н ни: ю: ти: най",
            "ton nii yuu thii nai"
          ],
          "translation": {
            "en": "Where are you now?",
            "ru": "Где ты сейчас?"
          }
        },
        {
          "text": "ต้องการอะไร",
          "tr": [
            "то:нг ка:н арай",
            "то:нк ка:н алай",
            "tong gaan a-rai"
          ],
          "translation": {
            "en": "What do you need?",
            "ru": "Что вам нужно?"
          }
        }
      ]
    },
    {
      "symbol": "ถ",
      "name": "ถอ ถุง",
      "tr": [
        "тх",
        "т",
        "th"
      ],
      "meaning": {
        "en": "bag",
        "ru": "мешок"
      },
      "syllables": [
        {
          "text": "ถะ",
          "tr": [
            "а",
            "та",
            "a"
          ],
          "example": {
            "en": "ถะ — (rare)",
            "ru": "ถะ — (редко)"
          },
          "note": "та"
        },
        {
          "text": "ถา",
          "tr": [
            "а:",
            "та:",
            "aa"
          ],
          "example": {
            "en": "ถา — (rare)",
            "ru": "ถา — (редко)"
          },
          "note": "та:"
        },
        {
          "text": "ถิ",
          "tr": [
            "и",
            "ти",
            "i"
          ],
          "example": {
            "en": "ถิ — (rare)",
            "ru": "ถิ — (редко)"
          },
          "note": "ти"
        },
        {
          "text": "ถี",
          "tr": [
            "и:",
            "ти:",
            "ii"
          ],
          "example": {
            "en": "ถี — (rare)",
            "ru": "ถี — (редко)"
          },
          "note": "ти:"
        },
        {
          "text": "ถุ",
          "tr": [
            "у",
            "ту",
            "u"
          ],
          "example": {
            "en": "ถุ — (rare)",
            "ru": "ถุ — (редко)"
          },
          "note": "ту"
        },
        {
          "text": "ถู",
          "tr": [
            "у:",
            "ту:",
            "uu"
          ],
          "example": {
            "en": "ถู — wash / cheap",
            "ru": "ถู — мыть/дёшево"
          },
          "note": "ту:"
        },
        {
          "text": "เถะ",
          "tr": [
            "э",
            "тэ",
            "e"
          ],
          "example": {
            "en": "เถะ — (rare)",
            "ru": "เถะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "เถ",
          "tr": [
            "э:",
            "тэ:",
            "ee"
          ],
          "example": {
            "en": "เถ — (rare)",
            "ru": "เถ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "แถะ",
          "tr": [
            "э",
            "тэ",
            "ae"
          ],
          "example": {
            "en": "แถะ — (rare)",
            "ru": "แถะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "แถ",
          "tr": [
            "э:",
            "тэ:",
            "aae"
          ],
          "example": {
            "en": "แถ — (rare)",
            "ru": "แถ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "โถะ",
          "tr": [
            "о",
            "то",
            "o"
          ],
          "example": {
            "en": "โถะ — (rare)",
            "ru": "โถะ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "โถ",
          "tr": [
            "о:",
            "то:",
            "oo"
          ],
          "example": {
            "en": "โถ — jar",
            "ru": "โถ — кувшин"
          },
          "note": "то:"
        },
        {
          "text": "ถอ",
          "tr": [
            "о",
            "то",
            "aw"
          ],
          "example": {
            "en": "ถอ — to pull out",
            "ru": "ถอ — вытаскивать"
          },
          "note": "то"
        },
        {
          "text": "ถำ",
          "tr": [
            "ам",
            "там",
            "am"
          ],
          "example": {
            "en": "ถำ — (rare)",
            "ru": "ถำ — (редко)"
          },
          "note": "там"
        },
        {
          "text": "ใถ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ใถ — syllable",
            "ru": "ใถ — слог"
          },
          "note": "тай"
        },
        {
          "text": "ไถ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ไถ — syllable",
            "ru": "ไถ — слог"
          },
          "note": "тай"
        }
      ],
      "words": [
        {
          "text": "ถุง",
          "tr": [
            "тхунг",
            "тунк",
            "thung"
          ],
          "translation": {
            "en": "bag / packet",
            "ru": "мешок / пакет"
          }
        },
        {
          "text": "ถูก",
          "tr": [
            "тхук",
            "тук",
            "thuuk"
          ],
          "translation": {
            "en": "cheap / correct",
            "ru": "дёшево / правильно"
          }
        },
        {
          "text": "ถาม",
          "tr": [
            "та:м",
            "та:м",
            "thaam"
          ],
          "translation": {
            "en": "to ask",
            "ru": "спрашивать"
          }
        },
        {
          "text": "ถนน",
          "tr": [
            "тханон",
            "танон",
            "thanon"
          ],
          "translation": {
            "en": "street / road",
            "ru": "улица / дорога"
          }
        }
      ],
      "phrases": [
        {
          "text": "ถามทาง",
          "tr": [
            "та:м та:нг",
            "та:м та:нк",
            "thaam thaang"
          ],
          "translation": {
            "en": "to ask for directions",
            "ru": "спросить дорогу"
          }
        },
        {
          "text": "ถูกมาก",
          "tr": [
            "тхук ма:к",
            "тук ма:к",
            "thuuk maak"
          ],
          "translation": {
            "en": "very cheap",
            "ru": "очень дёшево"
          }
        }
      ]
    },
    {
      "symbol": "ท",
      "name": "ทอ ทหาร",
      "tr": [
        "тх",
        "т",
        "th"
      ],
      "meaning": {
        "en": "soldier",
        "ru": "солдат"
      },
      "syllables": [
        {
          "text": "ทะ",
          "tr": [
            "а",
            "та",
            "a"
          ],
          "example": {
            "en": "ทะ — (rare)",
            "ru": "ทะ — (редко)"
          },
          "note": "та"
        },
        {
          "text": "ทา",
          "tr": [
            "а:",
            "та:",
            "aa"
          ],
          "example": {
            "en": "ทา — to smear",
            "ru": "ทา — мазать"
          },
          "note": "та:"
        },
        {
          "text": "ทิ",
          "tr": [
            "и",
            "ти",
            "i"
          ],
          "example": {
            "en": "ทิ — (rare)",
            "ru": "ทิ — (редко)"
          },
          "note": "ти"
        },
        {
          "text": "ที",
          "tr": [
            "и:",
            "ти:",
            "ii"
          ],
          "example": {
            "en": "ที — (rare)",
            "ru": "ที — (редко)"
          },
          "note": "ти:"
        },
        {
          "text": "ทุ",
          "tr": [
            "у",
            "ту",
            "u"
          ],
          "example": {
            "en": "ทุ — (rare)",
            "ru": "ทุ — (редко)"
          },
          "note": "ту"
        },
        {
          "text": "ทู",
          "tr": [
            "у:",
            "ту:",
            "uu"
          ],
          "example": {
            "en": "ทู — (rare)",
            "ru": "ทู — (редко)"
          },
          "note": "ту:"
        },
        {
          "text": "เทะ",
          "tr": [
            "э",
            "тэ",
            "e"
          ],
          "example": {
            "en": "เท — to pour",
            "ru": "เท — наливать"
          },
          "note": "тэ"
        },
        {
          "text": "เท",
          "tr": [
            "э:",
            "тэ:",
            "ee"
          ],
          "example": {
            "en": "เท — (rare)",
            "ru": "เท — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "แทะ",
          "tr": [
            "э",
            "тэ",
            "ae"
          ],
          "example": {
            "en": "แทะ — (rare)",
            "ru": "แทะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "แท",
          "tr": [
            "э:",
            "тэ:",
            "aae"
          ],
          "example": {
            "en": "แท — (rare)",
            "ru": "แท — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "โทะ",
          "tr": [
            "о",
            "то",
            "o"
          ],
          "example": {
            "en": "โทะ — (rare)",
            "ru": "โทะ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "โท",
          "tr": [
            "о:",
            "то:",
            "oo"
          ],
          "example": {
            "en": "โท — (rare)",
            "ru": "โท — (редко)"
          },
          "note": "то:"
        },
        {
          "text": "ทอ",
          "tr": [
            "о",
            "то",
            "aw"
          ],
          "example": {
            "en": "ทอ — (rare)",
            "ru": "ทอ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "ทำ",
          "tr": [
            "ам",
            "там",
            "am"
          ],
          "example": {
            "en": "ทำ — to do",
            "ru": "ทำ — делать"
          },
          "note": "там"
        },
        {
          "text": "ใท",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ใท — syllable",
            "ru": "ใท — слог"
          },
          "note": "тай"
        },
        {
          "text": "ไท",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ไท — syllable",
            "ru": "ไท — слог"
          },
          "note": "тай"
        }
      ],
      "words": [
        {
          "text": "ทำ",
          "tr": [
            "тхам",
            "там",
            "tham"
          ],
          "translation": {
            "en": "to do",
            "ru": "делать"
          }
        },
        {
          "text": "ที่",
          "tr": [
            "тхи:",
            "ти:",
            "thii"
          ],
          "translation": {
            "en": "place / which",
            "ru": "место / который"
          }
        },
        {
          "text": "ทุก",
          "tr": [
            "тхук",
            "тук",
            "thuk"
          ],
          "translation": {
            "en": "every / all",
            "ru": "каждый / все"
          }
        },
        {
          "text": "ทาง",
          "tr": [
            "та:нг",
            "та:нк",
            "thaang"
          ],
          "translation": {
            "en": "path / road",
            "ru": "путь / дорога"
          }
        }
      ],
      "phrases": [
        {
          "text": "ทำอะไร",
          "tr": [
            "тхам арай",
            "там алай",
            "tham a-rai"
          ],
          "translation": {
            "en": "What are you doing?",
            "ru": "Что делаешь?"
          }
        },
        {
          "text": "ทุกวัน",
          "tr": [
            "тхук ван",
            "тук ван",
            "thuk wan"
          ],
          "translation": {
            "en": "every day",
            "ru": "каждый день"
          }
        }
      ]
    },
    {
      "symbol": "ธ",
      "name": "ธอ ธง",
      "tr": [
        "тх",
        "т",
        "th"
      ],
      "meaning": {
        "en": "flag",
        "ru": "флаг"
      },
      "syllables": [
        {
          "text": "ธะ",
          "tr": [
            "а",
            "та",
            "a"
          ],
          "example": {
            "en": "ธะ — (rare)",
            "ru": "ธะ — (редко)"
          },
          "note": "та"
        },
        {
          "text": "ธา",
          "tr": [
            "а:",
            "та:",
            "aa"
          ],
          "example": {
            "en": "ธา — (rare)",
            "ru": "ธา — (редко)"
          },
          "note": "та:"
        },
        {
          "text": "ธิ",
          "tr": [
            "и",
            "ти",
            "i"
          ],
          "example": {
            "en": "ธิ — (rare)",
            "ru": "ธิ — (редко)"
          },
          "note": "ти"
        },
        {
          "text": "ธี",
          "tr": [
            "и:",
            "ти:",
            "ii"
          ],
          "example": {
            "en": "ธี — (rare)",
            "ru": "ธี — (редко)"
          },
          "note": "ти:"
        },
        {
          "text": "ธุ",
          "tr": [
            "у",
            "ту",
            "u"
          ],
          "example": {
            "en": "ธุ — (rare)",
            "ru": "ธุ — (редко)"
          },
          "note": "ту"
        },
        {
          "text": "ธู",
          "tr": [
            "у:",
            "ту:",
            "uu"
          ],
          "example": {
            "en": "ธู — (rare)",
            "ru": "ธู — (редко)"
          },
          "note": "ту:"
        },
        {
          "text": "เธะ",
          "tr": [
            "э",
            "тэ",
            "e"
          ],
          "example": {
            "en": "เธะ — (rare)",
            "ru": "เธะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "เธ",
          "tr": [
            "э:",
            "тэ:",
            "ee"
          ],
          "example": {
            "en": "เธ — (rare)",
            "ru": "เธ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "แธะ",
          "tr": [
            "э",
            "тэ",
            "ae"
          ],
          "example": {
            "en": "แธะ — (rare)",
            "ru": "แธะ — (редко)"
          },
          "note": "тэ"
        },
        {
          "text": "แธ",
          "tr": [
            "э:",
            "тэ:",
            "aae"
          ],
          "example": {
            "en": "แธ — (rare)",
            "ru": "แธ — (редко)"
          },
          "note": "тэ:"
        },
        {
          "text": "โธะ",
          "tr": [
            "о",
            "то",
            "o"
          ],
          "example": {
            "en": "โธะ — (rare)",
            "ru": "โธะ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "โธ",
          "tr": [
            "о:",
            "то:",
            "oo"
          ],
          "example": {
            "en": "โธ — (rare)",
            "ru": "โธ — (редко)"
          },
          "note": "то:"
        },
        {
          "text": "ธอ",
          "tr": [
            "о",
            "то",
            "aw"
          ],
          "example": {
            "en": "ธอ — (rare)",
            "ru": "ธอ — (редко)"
          },
          "note": "то"
        },
        {
          "text": "ธำ",
          "tr": [
            "ам",
            "там",
            "am"
          ],
          "example": {
            "en": "ธำ — (rare)",
            "ru": "ธำ — (редко)"
          },
          "note": "там"
        },
        {
          "text": "ใธ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ใธ — syllable",
            "ru": "ใธ — слог"
          },
          "note": "тай"
        },
        {
          "text": "ไธ",
          "tr": [
            "ай",
            "тай",
            "ai"
          ],
          "example": {
            "en": "ไธ — syllable",
            "ru": "ไธ — слог"
          },
          "note": "тай"
        }
      ],
      "words": [
        {
          "text": "ธง",
          "tr": [
            "тхонг",
            "тонк",
            "thong"
          ],
          "translation": {
            "en": "flag",
            "ru": "флаг"
          }
        },
        {
          "text": "ธรรม",
          "tr": [
            "тхам",
            "там",
            "tham"
          ],
          "translation": {
            "en": "dharma / law",
            "ru": "дхарма / закон"
          }
        },
        {
          "text": "ธนาคาร",
          "tr": [
            "тхана:ка:н",
            "тана:ка:н",
            "thanaakaan"
          ],
          "translation": {
            "en": "bank",
            "ru": "банк"
          }
        },
        {
          "text": "ธรรมชาติ",
          "tr": [
            "тхаммачха:ти",
            "таммача:ти",
            "thammachaat"
          ],
          "translation": {
            "en": "nature",
            "ru": "природа"
          }
        }
      ],
      "phrases": [
        {
          "text": "ธงชาติ",
          "tr": [
            "тхонг чха:ти",
            "тонк ча:ти",
            "thong chaat"
          ],
          "translation": {
            "en": "national flag",
            "ru": "государственный флаг"
          }
        },
        {
          "text": "ธนาคารกรุงเทพ",
          "tr": [
            "тхана:ка:н крунг тхэп",
            "тана:ка:н клунк тэп",
            "thanaakaan krueng thep"
          ],
          "translation": {
            "en": "Bangkok Bank",
            "ru": "банк Бангкока"
          }
        }
      ]
    },
    {
      "symbol": "น",
      "name": "นอ หนู",
      "tr": [
        "н",
        "н",
        "n"
      ],
      "meaning": {
        "en": "mouse / rat",
        "ru": "мышь"
      },
      "syllables": [
        {
          "text": "นะ",
          "tr": [
            "а",
            "на",
            "a"
          ],
          "example": {
            "en": "นะ — particle",
            "ru": "นะ — частица"
          },
          "note": "на"
        },
        {
          "text": "นา",
          "tr": [
            "а:",
            "на:",
            "aa"
          ],
          "example": {
            "en": "นา — rice field",
            "ru": "นา — рисовое поле"
          },
          "note": "на:"
        },
        {
          "text": "นิ",
          "tr": [
            "и",
            "ни",
            "i"
          ],
          "example": {
            "en": "นิ — (rare)",
            "ru": "นิ — (редко)"
          },
          "note": "ни"
        },
        {
          "text": "นี",
          "tr": [
            "и:",
            "ни:",
            "ii"
          ],
          "example": {
            "en": "นี — (rare)",
            "ru": "นี — (редко)"
          },
          "note": "ни:"
        },
        {
          "text": "นุ",
          "tr": [
            "у",
            "ну",
            "u"
          ],
          "example": {
            "en": "นุ — (rare)",
            "ru": "นุ — (редко)"
          },
          "note": "ну"
        },
        {
          "text": "นู",
          "tr": [
            "у:",
            "ну:",
            "uu"
          ],
          "example": {
            "en": "นู — (rare)",
            "ru": "นู — (редко)"
          },
          "note": "ну:"
        },
        {
          "text": "เนะ",
          "tr": [
            "э",
            "нэ",
            "e"
          ],
          "example": {
            "en": "เน — (rare)",
            "ru": "เน — (редко)"
          },
          "note": "нэ"
        },
        {
          "text": "เน",
          "tr": [
            "э:",
            "нэ:",
            "ee"
          ],
          "example": {
            "en": "เน — (rare)",
            "ru": "เน — (редко)"
          },
          "note": "нэ:"
        },
        {
          "text": "แนะ",
          "tr": [
            "э",
            "нэ",
            "ae"
          ],
          "example": {
            "en": "แนะ — (rare)",
            "ru": "แนะ — (редко)"
          },
          "note": "нэ"
        },
        {
          "text": "แน",
          "tr": [
            "э:",
            "нэ:",
            "aae"
          ],
          "example": {
            "en": "แน — (rare)",
            "ru": "แน — (редко)"
          },
          "note": "нэ:"
        },
        {
          "text": "โนะ",
          "tr": [
            "о",
            "но",
            "o"
          ],
          "example": {
            "en": "โนะ — (rare)",
            "ru": "โนะ — (редко)"
          },
          "note": "но"
        },
        {
          "text": "โน",
          "tr": [
            "о:",
            "но:",
            "oo"
          ],
          "example": {
            "en": "โน — (rare)",
            "ru": "โน — (редко)"
          },
          "note": "но:"
        },
        {
          "text": "นอ",
          "tr": [
            "о",
            "но",
            "aw"
          ],
          "example": {
            "en": "นอ — to sleep",
            "ru": "นอ — спать"
          },
          "note": "но"
        },
        {
          "text": "นำ",
          "tr": [
            "ам",
            "нам",
            "am"
          ],
          "example": {
            "en": "นำ — water",
            "ru": "นำ — вода"
          },
          "note": "нам"
        },
        {
          "text": "ใน",
          "tr": [
            "ай",
            "най",
            "ai"
          ],
          "example": {
            "en": "ใน — syllable",
            "ru": "ใน — слог"
          },
          "note": "най"
        },
        {
          "text": "ไน",
          "tr": [
            "ай",
            "най",
            "ai"
          ],
          "example": {
            "en": "ไน — syllable",
            "ru": "ไน — слог"
          },
          "note": "най"
        }
      ],
      "words": [
        {
          "text": "น้ำ",
          "tr": [
            "на:м",
            "на:м",
            "naam"
          ],
          "translation": {
            "en": "water",
            "ru": "вода"
          }
        },
        {
          "text": "นอน",
          "tr": [
            "но:н",
            "но:н",
            "noon"
          ],
          "translation": {
            "en": "to sleep",
            "ru": "спать"
          }
        },
        {
          "text": "นี่",
          "tr": [
            "ни:",
            "ни:",
            "nii"
          ],
          "translation": {
            "en": "this / here",
            "ru": "этот / здесь"
          }
        },
        {
          "text": "น่ารัก",
          "tr": [
            "на: рак",
            "на: лак",
            "naa-rak"
          ],
          "translation": {
            "en": "cute",
            "ru": "милый"
          }
        }
      ],
      "phrases": [
        {
          "text": "น้ำหนึ่งขวด",
          "tr": [
            "на:м нынг кхуат",
            "на:м нынк куат",
            "naam neung khuat"
          ],
          "translation": {
            "en": "bottle of water",
            "ru": "бутылка воды"
          }
        },
        {
          "text": "นอนไม่หลับ",
          "tr": [
            "но:н май лаб",
            "но:н май лаб",
            "noon mai lap"
          ],
          "translation": {
            "en": "can't sleep",
            "ru": "не спится"
          }
        }
      ]
    },
    {
      "symbol": "บ",
      "name": "บอ ใบไม้",
      "tr": [
        "б",
        "б",
        "b"
      ],
      "meaning": {
        "en": "leaf",
        "ru": "лист"
      },
      "syllables": [
        {
          "text": "บะ",
          "tr": [
            "а",
            "ба",
            "a"
          ],
          "example": {
            "en": "บะ — (rare)",
            "ru": "บะ — (редко)"
          },
          "note": "ба"
        },
        {
          "text": "บา",
          "tr": [
            "а:",
            "ба:",
            "aa"
          ],
          "example": {
            "en": "บา — (rare)",
            "ru": "บา — (редко)"
          },
          "note": "ба:"
        },
        {
          "text": "บิ",
          "tr": [
            "и",
            "би",
            "i"
          ],
          "example": {
            "en": "บิ — (rare)",
            "ru": "บิ — (редко)"
          },
          "note": "би"
        },
        {
          "text": "บี",
          "tr": [
            "и:",
            "би:",
            "ii"
          ],
          "example": {
            "en": "บี — (rare)",
            "ru": "บี — (редко)"
          },
          "note": "би:"
        },
        {
          "text": "บุ",
          "tr": [
            "у",
            "бу",
            "u"
          ],
          "example": {
            "en": "บุ — (rare)",
            "ru": "บุ — (редко)"
          },
          "note": "бу"
        },
        {
          "text": "บู",
          "tr": [
            "у:",
            "бу:",
            "uu"
          ],
          "example": {
            "en": "บู — (rare)",
            "ru": "บู — (редко)"
          },
          "note": "бу:"
        },
        {
          "text": "เบะ",
          "tr": [
            "э",
            "бэ",
            "e"
          ],
          "example": {
            "en": "เบะ — (rare)",
            "ru": "เบะ — (редко)"
          },
          "note": "бэ"
        },
        {
          "text": "เบ",
          "tr": [
            "э:",
            "бэ:",
            "ee"
          ],
          "example": {
            "en": "เบ — (rare)",
            "ru": "เบ — (редко)"
          },
          "note": "бэ:"
        },
        {
          "text": "แบะ",
          "tr": [
            "э",
            "бэ",
            "ae"
          ],
          "example": {
            "en": "แบะ — (rare)",
            "ru": "แบะ — (редко)"
          },
          "note": "бэ"
        },
        {
          "text": "แบ",
          "tr": [
            "э:",
            "бэ:",
            "aae"
          ],
          "example": {
            "en": "แบ — (rare)",
            "ru": "แบ — (редко)"
          },
          "note": "бэ:"
        },
        {
          "text": "โบะ",
          "tr": [
            "о",
            "бо",
            "o"
          ],
          "example": {
            "en": "โบะ — (rare)",
            "ru": "โบะ — (редко)"
          },
          "note": "бо"
        },
        {
          "text": "โบ",
          "tr": [
            "о:",
            "бо:",
            "oo"
          ],
          "example": {
            "en": "โบ — (rare)",
            "ru": "โบ — (редко)"
          },
          "note": "бо:"
        },
        {
          "text": "บอ",
          "tr": [
            "о",
            "бо",
            "aw"
          ],
          "example": {
            "en": "บอ — (rare)",
            "ru": "บอ — (редко)"
          },
          "note": "бо"
        },
        {
          "text": "บำ",
          "tr": [
            "ам",
            "бам",
            "am"
          ],
          "example": {
            "en": "บำ — (rare)",
            "ru": "บำ — (редко)"
          },
          "note": "бам"
        },
        {
          "text": "ใบ",
          "tr": [
            "ай",
            "бай",
            "ai"
          ],
          "example": {
            "en": "ใบ — syllable",
            "ru": "ใบ — слог"
          },
          "note": "бай"
        },
        {
          "text": "ไบ",
          "tr": [
            "ай",
            "бай",
            "ai"
          ],
          "example": {
            "en": "ไบ — syllable",
            "ru": "ไบ — слог"
          },
          "note": "бай"
        }
      ],
      "words": [
        {
          "text": "บ้าน",
          "tr": [
            "ба:н",
            "ба:н",
            "baan"
          ],
          "translation": {
            "en": "house",
            "ru": "дом"
          }
        },
        {
          "text": "บอก",
          "tr": [
            "бо:к",
            "бо:к",
            "bok"
          ],
          "translation": {
            "en": "to tell",
            "ru": "сказать"
          }
        },
        {
          "text": "เบียร์",
          "tr": [
            "биа",
            "биа",
            "bia"
          ],
          "translation": {
            "en": "beer",
            "ru": "пиво"
          }
        },
        {
          "text": "บิน",
          "tr": [
            "бин",
            "бин",
            "bin"
          ],
          "translation": {
            "en": "to fly",
            "ru": "лететь"
          }
        }
      ],
      "phrases": [
        {
          "text": "ไปบ้าน",
          "tr": [
            "пай ба:н",
            "пай ба:н",
            "pai baan"
          ],
          "translation": {
            "en": "to go home",
            "ru": "идти домой"
          }
        },
        {
          "text": "เช็คบินด้วย",
          "tr": [
            "чхек бин дуай",
            "чек бин дуай",
            "check bin duay"
          ],
          "translation": {
            "en": "check, please",
            "ru": "счёт, пожалуйста"
          }
        }
      ]
    },
    {
      "symbol": "ป",
      "name": "ปอ ปลา",
      "tr": [
        "п",
        "п",
        "p"
      ],
      "meaning": {
        "en": "fish",
        "ru": "рыба"
      },
      "syllables": [
        {
          "text": "ปะ",
          "tr": [
            "а",
            "па",
            "a"
          ],
          "example": {
            "en": "ปะ — (rare)",
            "ru": "ปะ — (редко)"
          },
          "note": "па"
        },
        {
          "text": "ปา",
          "tr": [
            "а:",
            "па:",
            "aa"
          ],
          "example": {
            "en": "ปา — to throw",
            "ru": "ปา — бросать"
          },
          "note": "па:"
        },
        {
          "text": "ปิ",
          "tr": [
            "и",
            "пи",
            "i"
          ],
          "example": {
            "en": "ปิ — (rare)",
            "ru": "ปิ — (редко)"
          },
          "note": "пи"
        },
        {
          "text": "ปี",
          "tr": [
            "и:",
            "пи:",
            "ii"
          ],
          "example": {
            "en": "ปี — year",
            "ru": "ปี — год"
          },
          "note": "пи:"
        },
        {
          "text": "ปุ",
          "tr": [
            "у",
            "пу",
            "u"
          ],
          "example": {
            "en": "ปุ — (rare)",
            "ru": "ปุ — (редко)"
          },
          "note": "пу"
        },
        {
          "text": "ปู",
          "tr": [
            "у:",
            "пу:",
            "uu"
          ],
          "example": {
            "en": "ปู — crab",
            "ru": "ปู — краб"
          },
          "note": "пу:"
        },
        {
          "text": "เปะ",
          "tr": [
            "э",
            "пэ",
            "e"
          ],
          "example": {
            "en": "เปะ — (rare)",
            "ru": "เปะ — (редко)"
          },
          "note": "пэ"
        },
        {
          "text": "เป",
          "tr": [
            "э:",
            "пэ:",
            "ee"
          ],
          "example": {
            "en": "เป — (rare)",
            "ru": "เป — (редко)"
          },
          "note": "пэ:"
        },
        {
          "text": "แปะ",
          "tr": [
            "э",
            "пэ",
            "ae"
          ],
          "example": {
            "en": "แปะ — (rare)",
            "ru": "แปะ — (редко)"
          },
          "note": "пэ"
        },
        {
          "text": "แป",
          "tr": [
            "э:",
            "пэ:",
            "aae"
          ],
          "example": {
            "en": "แป — (rare)",
            "ru": "แป — (редко)"
          },
          "note": "пэ:"
        },
        {
          "text": "โปะ",
          "tr": [
            "о",
            "по",
            "o"
          ],
          "example": {
            "en": "โปะ — (rare)",
            "ru": "โปะ — (редко)"
          },
          "note": "по"
        },
        {
          "text": "โป",
          "tr": [
            "о:",
            "по:",
            "oo"
          ],
          "example": {
            "en": "โป — (rare)",
            "ru": "โป — (редко)"
          },
          "note": "по:"
        },
        {
          "text": "ปอ",
          "tr": [
            "о",
            "по",
            "aw"
          ],
          "example": {
            "en": "ปอ — (rare)",
            "ru": "ปอ — (редко)"
          },
          "note": "по"
        },
        {
          "text": "ปำ",
          "tr": [
            "ам",
            "пам",
            "am"
          ],
          "example": {
            "en": "ปำ — (rare)",
            "ru": "ปำ — (редко)"
          },
          "note": "пам"
        },
        {
          "text": "ใป",
          "tr": [
            "ай",
            "пай",
            "ai"
          ],
          "example": {
            "en": "ใป — syllable",
            "ru": "ใป — слог"
          },
          "note": "пай"
        },
        {
          "text": "ไป",
          "tr": [
            "ай",
            "пай",
            "ai"
          ],
          "example": {
            "en": "ไป — syllable",
            "ru": "ไป — слог"
          },
          "note": "пай"
        }
      ],
      "words": [
        {
          "text": "ปาก",
          "tr": [
            "па:к",
            "па:к",
            "paak"
          ],
          "translation": {
            "en": "mouth",
            "ru": "рот"
          }
        },
        {
          "text": "ปี",
          "tr": [
            "пи:",
            "пи:",
            "pii"
          ],
          "translation": {
            "en": "year",
            "ru": "год"
          }
        },
        {
          "text": "เปิด",
          "tr": [
            "пəт",
            "пəт",
            "poet"
          ],
          "translation": {
            "en": "to open",
            "ru": "открывать"
          }
        },
        {
          "text": "ไป",
          "tr": [
            "пай",
            "пай",
            "pai"
          ],
          "translation": {
            "en": "to go",
            "ru": "идти"
          }
        }
      ],
      "phrases": [
        {
          "text": "ไปไหน",
          "tr": [
            "пай най",
            "пай най",
            "pai nai"
          ],
          "translation": {
            "en": "Where are you going?",
            "ru": "Куда идёшь?"
          }
        },
        {
          "text": "ปีนี้",
          "tr": [
            "пи: ни:",
            "пи: ни:",
            "pii nii"
          ],
          "translation": {
            "en": "this year",
            "ru": "в этом году"
          }
        }
      ]
    },
    {
      "symbol": "ผ",
      "name": "ผอ ผึ้ง",
      "tr": [
        "пх",
        "п",
        "ph"
      ],
      "meaning": {
        "en": "bee",
        "ru": "пчела"
      },
      "syllables": [
        {
          "text": "ผะ",
          "tr": [
            "а",
            "па",
            "a"
          ],
          "example": {
            "en": "ผะ — (rare)",
            "ru": "ผะ — (редко)"
          },
          "note": "па"
        },
        {
          "text": "ผา",
          "tr": [
            "а:",
            "па:",
            "aa"
          ],
          "example": {
            "en": "ผา — cliff",
            "ru": "ผา — скала"
          },
          "note": "па:"
        },
        {
          "text": "ผิ",
          "tr": [
            "и",
            "пи",
            "i"
          ],
          "example": {
            "en": "ผิ — (rare)",
            "ru": "ผิ — (редко)"
          },
          "note": "пи"
        },
        {
          "text": "ผี",
          "tr": [
            "и:",
            "пи:",
            "ii"
          ],
          "example": {
            "en": "ผี — ghost",
            "ru": "ผี — призрак"
          },
          "note": "пи:"
        },
        {
          "text": "ผุ",
          "tr": [
            "у",
            "пу",
            "u"
          ],
          "example": {
            "en": "ผุ — (rare)",
            "ru": "ผุ — (редко)"
          },
          "note": "пу"
        },
        {
          "text": "ผู",
          "tr": [
            "у:",
            "пу:",
            "uu"
          ],
          "example": {
            "en": "ผู — (rare)",
            "ru": "ผู — (редко)"
          },
          "note": "пу:"
        },
        {
          "text": "เผะ",
          "tr": [
            "э",
            "пэ",
            "e"
          ],
          "example": {
            "en": "เผะ — (rare)",
            "ru": "เผะ — (редко)"
          },
          "note": "пэ"
        },
        {
          "text": "เผ",
          "tr": [
            "э:",
            "пэ:",
            "ee"
          ],
          "example": {
            "en": "เผ — (rare)",
            "ru": "เผ — (редко)"
          },
          "note": "пэ:"
        },
        {
          "text": "แผะ",
          "tr": [
            "э",
            "пэ",
            "ae"
          ],
          "example": {
            "en": "แผะ — (rare)",
            "ru": "แผะ — (редко)"
          },
          "note": "пэ"
        },
        {
          "text": "แผ",
          "tr": [
            "э:",
            "пэ:",
            "aae"
          ],
          "example": {
            "en": "แผ — (rare)",
            "ru": "แผ — (редко)"
          },
          "note": "пэ:"
        },
        {
          "text": "โผะ",
          "tr": [
            "о",
            "по",
            "o"
          ],
          "example": {
            "en": "โผะ — (rare)",
            "ru": "โผะ — (редко)"
          },
          "note": "по"
        },
        {
          "text": "โผ",
          "tr": [
            "о:",
            "по:",
            "oo"
          ],
          "example": {
            "en": "โผ — (rare)",
            "ru": "โผ — (редко)"
          },
          "note": "по:"
        },
        {
          "text": "ผอ",
          "tr": [
            "о",
            "по",
            "aw"
          ],
          "example": {
            "en": "ผอ — (rare)",
            "ru": "ผอ — (редко)"
          },
          "note": "по"
        },
        {
          "text": "ผำ",
          "tr": [
            "ам",
            "пам",
            "am"
          ],
          "example": {
            "en": "ผำ — (rare)",
            "ru": "ผำ — (редко)"
          },
          "note": "пам"
        },
        {
          "text": "ใผ",
          "tr": [
            "ай",
            "пай",
            "ai"
          ],
          "example": {
            "en": "ใผ — syllable",
            "ru": "ใผ — слог"
          },
          "note": "пай"
        },
        {
          "text": "ไผ",
          "tr": [
            "ай",
            "пай",
            "ai"
          ],
          "example": {
            "en": "ไผ — syllable",
            "ru": "ไผ — слог"
          },
          "note": "пай"
        }
      ],
      "words": [
        {
          "text": "ผม",
          "tr": [
            "пхом",
            "пом",
            "phom"
          ],
          "translation": {
            "en": "I (male) / hair",
            "ru": "я (м.р.) / волосы"
          }
        },
        {
          "text": "ผล",
          "tr": [
            "пон",
            "пон",
            "phon"
          ],
          "translation": {
            "en": "fruit / result",
            "ru": "плод / результат"
          }
        },
        {
          "text": "ผิด",
          "tr": [
            "пхит",
            "пит",
            "phit"
          ],
          "translation": {
            "en": "mistake / wrong",
            "ru": "ошибка / неправильно"
          }
        },
        {
          "text": "ผู้",
          "tr": [
            "пху:",
            "пу:",
            "phuu"
          ],
          "translation": {
            "en": "person / face",
            "ru": "человек / лицо"
          }
        }
      ],
      "phrases": [
        {
          "text": "ผมชื่อ...",
          "tr": [
            "пхом чхе:...",
            "пом че:...",
            "phom chue..."
          ],
          "translation": {
            "en": "My name is...",
            "ru": "Меня зовут..."
          }
        },
        {
          "text": "ผิดพลาด",
          "tr": [
            "пхит пхла:т",
            "пит пла:т",
            "phit phlaat"
          ],
          "translation": {
            "en": "mistake / error",
            "ru": "ошибка / промах"
          }
        }
      ]
    },
    {
      "symbol": "ฝ",
      "name": "ฝอ ฝน",
      "tr": [
        "ф",
        "ф",
        "f"
      ],
      "meaning": {
        "en": "rain",
        "ru": "дождь"
      },
      "syllables": [
        {
          "text": "ฝะ",
          "tr": [
            "а",
            "фа",
            "a"
          ],
          "example": {
            "en": "ฝะ — (rare)",
            "ru": "ฝะ — (редко)"
          },
          "note": "фа"
        },
        {
          "text": "ฝา",
          "tr": [
            "а:",
            "фа:",
            "aa"
          ],
          "example": {
            "en": "ฝา — lid",
            "ru": "ฝา — крышка"
          },
          "note": "фа:"
        },
        {
          "text": "ฝิ",
          "tr": [
            "и",
            "фи",
            "i"
          ],
          "example": {
            "en": "ฝิ — (rare)",
            "ru": "ฝิ — (редко)"
          },
          "note": "фи"
        },
        {
          "text": "ฝี",
          "tr": [
            "и:",
            "фи:",
            "ii"
          ],
          "example": {
            "en": "ฝี — (rare)",
            "ru": "ฝี — (редко)"
          },
          "note": "фи:"
        },
        {
          "text": "ฝุ",
          "tr": [
            "у",
            "фу",
            "u"
          ],
          "example": {
            "en": "ฝุ — (rare)",
            "ru": "ฝุ — (редко)"
          },
          "note": "фу"
        },
        {
          "text": "ฝู",
          "tr": [
            "у:",
            "фу:",
            "uu"
          ],
          "example": {
            "en": "ฝู — (rare)",
            "ru": "ฝู — (редко)"
          },
          "note": "фу:"
        },
        {
          "text": "เฝะ",
          "tr": [
            "э",
            "фэ",
            "e"
          ],
          "example": {
            "en": "เฝะ — (rare)",
            "ru": "เฝะ — (редко)"
          },
          "note": "фэ"
        },
        {
          "text": "เฝ",
          "tr": [
            "э:",
            "фэ:",
            "ee"
          ],
          "example": {
            "en": "เฝ — (rare)",
            "ru": "เฝ — (редко)"
          },
          "note": "фэ:"
        },
        {
          "text": "แฝะ",
          "tr": [
            "э",
            "фэ",
            "ae"
          ],
          "example": {
            "en": "แฝะ — (rare)",
            "ru": "แฝะ — (редко)"
          },
          "note": "фэ"
        },
        {
          "text": "แฝ",
          "tr": [
            "э:",
            "фэ:",
            "aae"
          ],
          "example": {
            "en": "แฝ — (rare)",
            "ru": "แฝ — (редко)"
          },
          "note": "фэ:"
        },
        {
          "text": "โฝะ",
          "tr": [
            "о",
            "фо",
            "o"
          ],
          "example": {
            "en": "โฝะ — (rare)",
            "ru": "โฝะ — (редко)"
          },
          "note": "фо"
        },
        {
          "text": "โฝ",
          "tr": [
            "о:",
            "фо:",
            "oo"
          ],
          "example": {
            "en": "โฝ — (rare)",
            "ru": "โฝ — (редко)"
          },
          "note": "фо:"
        },
        {
          "text": "ฝอ",
          "tr": [
            "о",
            "фо",
            "aw"
          ],
          "example": {
            "en": "ฝอ — (rare)",
            "ru": "ฝอ — (редко)"
          },
          "note": "фо"
        },
        {
          "text": "ฝำ",
          "tr": [
            "ам",
            "фам",
            "am"
          ],
          "example": {
            "en": "ฝำ — (rare)",
            "ru": "ฝำ — (редко)"
          },
          "note": "фам"
        },
        {
          "text": "ใฝ",
          "tr": [
            "ай",
            "фай",
            "ai"
          ],
          "example": {
            "en": "ใฝ — syllable",
            "ru": "ใฝ — слог"
          },
          "note": "фай"
        },
        {
          "text": "ไฝ",
          "tr": [
            "ай",
            "фай",
            "ai"
          ],
          "example": {
            "en": "ไฝ — syllable",
            "ru": "ไฝ — слог"
          },
          "note": "фай"
        }
      ],
      "words": [
        {
          "text": "ฝน",
          "tr": [
            "фон",
            "фон",
            "fon"
          ],
          "translation": {
            "en": "rain",
            "ru": "дождь"
          }
        },
        {
          "text": "ฝัน",
          "tr": [
            "фан",
            "фан",
            "fan"
          ],
          "translation": {
            "en": "to dream / dream",
            "ru": "мечтать / сон"
          }
        },
        {
          "text": "ฝา",
          "tr": [
            "фа:",
            "фа:",
            "faa"
          ],
          "translation": {
            "en": "lid / cover",
            "ru": "крышка"
          }
        },
        {
          "text": "ฝาก",
          "tr": [
            "фа:к",
            "фа:к",
            "faak"
          ],
          "translation": {
            "en": "to leave / entrust",
            "ru": "оставить / поручить"
          }
        }
      ],
      "phrases": [
        {
          "text": "ฝนตก",
          "tr": [
            "фон ток",
            "фон ток",
            "fon tok"
          ],
          "translation": {
            "en": "it's raining",
            "ru": "идёт дождь"
          }
        },
        {
          "text": "ฝันดี",
          "tr": [
            "фан ди:",
            "фан ди:",
            "fan dii"
          ],
          "translation": {
            "en": "good night / sweet dreams",
            "ru": "спокойной ночи (снись хорошее)"
          }
        }
      ]
    },
    {
      "symbol": "พ",
      "name": "พอ พาน",
      "tr": [
        "пх",
        "п",
        "ph"
      ],
      "meaning": {
        "en": "tray",
        "ru": "поднос"
      },
      "syllables": [
        {
          "text": "พะ",
          "tr": [
            "а",
            "па",
            "a"
          ],
          "example": {
            "en": "พะ — (rare)",
            "ru": "พะ — (редко)"
          },
          "note": "па"
        },
        {
          "text": "พา",
          "tr": [
            "а:",
            "па:",
            "aa"
          ],
          "example": {
            "en": "พา — to lead",
            "ru": "พา — вести"
          },
          "note": "па:"
        },
        {
          "text": "พิ",
          "tr": [
            "и",
            "пи",
            "i"
          ],
          "example": {
            "en": "พิ — (rare)",
            "ru": "พิ — (редко)"
          },
          "note": "пи"
        },
        {
          "text": "พี",
          "tr": [
            "и:",
            "пи:",
            "ii"
          ],
          "example": {
            "en": "พี — (rare)",
            "ru": "พี — (редко)"
          },
          "note": "пи:"
        },
        {
          "text": "พุ",
          "tr": [
            "у",
            "пу",
            "u"
          ],
          "example": {
            "en": "พุ — (rare)",
            "ru": "พุ — (редко)"
          },
          "note": "пу"
        },
        {
          "text": "พู",
          "tr": [
            "у:",
            "пу:",
            "uu"
          ],
          "example": {
            "en": "พู — (rare)",
            "ru": "พู — (редко)"
          },
          "note": "пу:"
        },
        {
          "text": "เพะ",
          "tr": [
            "э",
            "пэ",
            "e"
          ],
          "example": {
            "en": "เพะ — (rare)",
            "ru": "เพะ — (редко)"
          },
          "note": "пэ"
        },
        {
          "text": "เพ",
          "tr": [
            "э:",
            "пэ:",
            "ee"
          ],
          "example": {
            "en": "เพ — (rare)",
            "ru": "เพ — (редко)"
          },
          "note": "пэ:"
        },
        {
          "text": "แพะ",
          "tr": [
            "э",
            "пэ",
            "ae"
          ],
          "example": {
            "en": "แพะ — (rare)",
            "ru": "แพะ — (редко)"
          },
          "note": "пэ"
        },
        {
          "text": "แพ",
          "tr": [
            "э:",
            "пэ:",
            "aae"
          ],
          "example": {
            "en": "แพ — (rare)",
            "ru": "แพ — (редко)"
          },
          "note": "пэ:"
        },
        {
          "text": "โพะ",
          "tr": [
            "о",
            "по",
            "o"
          ],
          "example": {
            "en": "โพะ — (rare)",
            "ru": "โพะ — (редко)"
          },
          "note": "по"
        },
        {
          "text": "โพ",
          "tr": [
            "о:",
            "по:",
            "oo"
          ],
          "example": {
            "en": "โพ — (rare)",
            "ru": "โพ — (редко)"
          },
          "note": "по:"
        },
        {
          "text": "พอ",
          "tr": [
            "о",
            "по",
            "aw"
          ],
          "example": {
            "en": "พอ — enough",
            "ru": "พอ — достаточно"
          },
          "note": "по"
        },
        {
          "text": "พำ",
          "tr": [
            "ам",
            "пам",
            "am"
          ],
          "example": {
            "en": "พำ — (rare)",
            "ru": "พำ — (редко)"
          },
          "note": "пам"
        },
        {
          "text": "ใพ",
          "tr": [
            "ай",
            "пай",
            "ai"
          ],
          "example": {
            "en": "ใพ — syllable",
            "ru": "ใพ — слог"
          },
          "note": "пай"
        },
        {
          "text": "ไพ",
          "tr": [
            "ай",
            "пай",
            "ai"
          ],
          "example": {
            "en": "ไพ — syllable",
            "ru": "ไพ — слог"
          },
          "note": "пай"
        }
      ],
      "words": [
        {
          "text": "พ่อ",
          "tr": [
            "пхо:",
            "по:",
            "pho"
          ],
          "translation": {
            "en": "father",
            "ru": "отец"
          }
        },
        {
          "text": "พูด",
          "tr": [
            "пху:т",
            "пу:т",
            "phuut"
          ],
          "translation": {
            "en": "to speak",
            "ru": "говорить"
          }
        },
        {
          "text": "เพื่อน",
          "tr": [
            "пхыан",
            "пыан",
            "phuean"
          ],
          "translation": {
            "en": "friend",
            "ru": "друг"
          }
        },
        {
          "text": "พร้อม",
          "tr": [
            "пхро:м",
            "пло:м",
            "phrom"
          ],
          "translation": {
            "en": "ready",
            "ru": "готовый"
          }
        }
      ],
      "phrases": [
        {
          "text": "พ่อแม่",
          "tr": [
            "пхо: мэ:",
            "по: мэ:",
            "pho mae"
          ],
          "translation": {
            "en": "parents",
            "ru": "родители"
          }
        },
        {
          "text": "พูดภาษาไทยได้ไหม",
          "tr": [
            "пху:т пха:са: тхай дай май",
            "пут паса тай дай май",
            "phuut phasaa thai dai mai"
          ],
          "translation": {
            "en": "Do you speak Thai?",
            "ru": "Вы говорите по-тайски?"
          }
        }
      ]
    },
    {
      "symbol": "ฟ",
      "name": "ฟอ ฟัน",
      "tr": [
        "ф",
        "ф",
        "f"
      ],
      "meaning": {
        "en": "teeth",
        "ru": "зубы"
      },
      "syllables": [
        {
          "text": "ฟะ",
          "tr": [
            "а",
            "фа",
            "a"
          ],
          "example": {
            "en": "ฟะ — (rare)",
            "ru": "ฟะ — (редко)"
          },
          "note": "фа"
        },
        {
          "text": "ฟา",
          "tr": [
            "а:",
            "фа:",
            "aa"
          ],
          "example": {
            "en": "ฟา — (rare)",
            "ru": "ฟา — (редко)"
          },
          "note": "фа:"
        },
        {
          "text": "ฟิ",
          "tr": [
            "и",
            "фи",
            "i"
          ],
          "example": {
            "en": "ฟิ — (rare)",
            "ru": "ฟิ — (редко)"
          },
          "note": "фи"
        },
        {
          "text": "ฟี",
          "tr": [
            "и:",
            "фи:",
            "ii"
          ],
          "example": {
            "en": "ฟี — (rare)",
            "ru": "ฟี — (редко)"
          },
          "note": "фи:"
        },
        {
          "text": "ฟุ",
          "tr": [
            "у",
            "фу",
            "u"
          ],
          "example": {
            "en": "ฟุ — (rare)",
            "ru": "ฟุ — (редко)"
          },
          "note": "фу"
        },
        {
          "text": "ฟู",
          "tr": [
            "у:",
            "фу:",
            "uu"
          ],
          "example": {
            "en": "ฟู — (rare)",
            "ru": "ฟู — (редко)"
          },
          "note": "фу:"
        },
        {
          "text": "เฟะ",
          "tr": [
            "э",
            "фэ",
            "e"
          ],
          "example": {
            "en": "เฟะ — (rare)",
            "ru": "เฟะ — (редко)"
          },
          "note": "фэ"
        },
        {
          "text": "เฟ",
          "tr": [
            "э:",
            "фэ:",
            "ee"
          ],
          "example": {
            "en": "เฟ — (rare)",
            "ru": "เฟ — (редко)"
          },
          "note": "фэ:"
        },
        {
          "text": "แฟะ",
          "tr": [
            "э",
            "фэ",
            "ae"
          ],
          "example": {
            "en": "แฟะ — (rare)",
            "ru": "แฟะ — (редко)"
          },
          "note": "фэ"
        },
        {
          "text": "แฟ",
          "tr": [
            "э:",
            "фэ:",
            "aae"
          ],
          "example": {
            "en": "แฟ — (rare)",
            "ru": "แฟ — (редко)"
          },
          "note": "фэ:"
        },
        {
          "text": "โฟะ",
          "tr": [
            "о",
            "фо",
            "o"
          ],
          "example": {
            "en": "โฟะ — (rare)",
            "ru": "โฟะ — (редко)"
          },
          "note": "фо"
        },
        {
          "text": "โฟ",
          "tr": [
            "о:",
            "фо:",
            "oo"
          ],
          "example": {
            "en": "โฟ — (rare)",
            "ru": "โฟ — (редко)"
          },
          "note": "фо:"
        },
        {
          "text": "ฟอ",
          "tr": [
            "о",
            "фо",
            "aw"
          ],
          "example": {
            "en": "ฟอ — (rare)",
            "ru": "ฟอ — (редко)"
          },
          "note": "фо"
        },
        {
          "text": "ฟำ",
          "tr": [
            "ам",
            "фам",
            "am"
          ],
          "example": {
            "en": "ฟำ — (rare)",
            "ru": "ฟำ — (редко)"
          },
          "note": "фам"
        },
        {
          "text": "ใฟ",
          "tr": [
            "ай",
            "фай",
            "ai"
          ],
          "example": {
            "en": "ใฟ — syllable",
            "ru": "ใฟ — слог"
          },
          "note": "фай"
        },
        {
          "text": "ไฟ",
          "tr": [
            "ай",
            "фай",
            "ai"
          ],
          "example": {
            "en": "ไฟ — syllable",
            "ru": "ไฟ — слог"
          },
          "note": "фай"
        }
      ],
      "words": [
        {
          "text": "ฟัน",
          "tr": [
            "фан",
            "фан",
            "fan"
          ],
          "translation": {
            "en": "tooth / to cut",
            "ru": "зуб / резать"
          }
        },
        {
          "text": "ฟัง",
          "tr": [
            "фанг",
            "фанк",
            "fang"
          ],
          "translation": {
            "en": "to listen",
            "ru": "слушать"
          }
        },
        {
          "text": "ฟรี",
          "tr": [
            "фри:",
            "фли:",
            "frii"
          ],
          "translation": {
            "en": "free (of charge)",
            "ru": "бесплатно"
          }
        },
        {
          "text": "ฟ้า",
          "tr": [
            "фа:",
            "фа:",
            "faa"
          ],
          "translation": {
            "en": "sky",
            "ru": "небо"
          }
        }
      ],
      "phrases": [
        {
          "text": "ฟันขาว",
          "tr": [
            "фан кха:o",
            "фан ка:o",
            "fan khaao"
          ],
          "translation": {
            "en": "white teeth",
            "ru": "белые зубы"
          }
        },
        {
          "text": "ฟรีของแถม",
          "tr": [
            "фри: кхо:нг тхэ:м",
            "фли: ко:нк тэ:м",
            "frii khong thaem"
          ],
          "translation": {
            "en": "free bonus",
            "ru": "бесплатный бонус"
          }
        }
      ]
    },
    {
      "symbol": "ภ",
      "name": "ภอ สำเภา",
      "tr": [
        "пх",
        "п",
        "ph"
      ],
      "meaning": {
        "en": "junk (boat)",
        "ru": "джонка"
      },
      "syllables": [
        {
          "text": "ภะ",
          "tr": [
            "а",
            "па",
            "a"
          ],
          "example": {
            "en": "ภะ — (rare)",
            "ru": "ภะ — (редко)"
          },
          "note": "па"
        },
        {
          "text": "ภา",
          "tr": [
            "а:",
            "па:",
            "aa"
          ],
          "example": {
            "en": "ภา — (rare)",
            "ru": "ภา — (редко)"
          },
          "note": "па:"
        },
        {
          "text": "ภิ",
          "tr": [
            "и",
            "пи",
            "i"
          ],
          "example": {
            "en": "ภิ — (rare)",
            "ru": "ภิ — (редко)"
          },
          "note": "пи"
        },
        {
          "text": "ภี",
          "tr": [
            "и:",
            "пи:",
            "ii"
          ],
          "example": {
            "en": "ภี — (rare)",
            "ru": "ภี — (редко)"
          },
          "note": "пи:"
        },
        {
          "text": "ภุ",
          "tr": [
            "у",
            "пу",
            "u"
          ],
          "example": {
            "en": "ภุ — (rare)",
            "ru": "ภุ — (редко)"
          },
          "note": "пу"
        },
        {
          "text": "ภู",
          "tr": [
            "у:",
            "пу:",
            "uu"
          ],
          "example": {
            "en": "ภู — (rare)",
            "ru": "ภู — (редко)"
          },
          "note": "пу:"
        },
        {
          "text": "เภะ",
          "tr": [
            "э",
            "пэ",
            "e"
          ],
          "example": {
            "en": "เภะ — (rare)",
            "ru": "เภะ — (редко)"
          },
          "note": "пэ"
        },
        {
          "text": "เภ",
          "tr": [
            "э:",
            "пэ:",
            "ee"
          ],
          "example": {
            "en": "เภ — (rare)",
            "ru": "เภ — (редко)"
          },
          "note": "пэ:"
        },
        {
          "text": "แภะ",
          "tr": [
            "э",
            "пэ",
            "ae"
          ],
          "example": {
            "en": "แภะ — (rare)",
            "ru": "แภะ — (редко)"
          },
          "note": "пэ"
        },
        {
          "text": "แภ",
          "tr": [
            "э:",
            "пэ:",
            "aae"
          ],
          "example": {
            "en": "แภ — (rare)",
            "ru": "แภ — (редко)"
          },
          "note": "пэ:"
        },
        {
          "text": "โภะ",
          "tr": [
            "о",
            "по",
            "o"
          ],
          "example": {
            "en": "โภะ — (rare)",
            "ru": "โภะ — (редко)"
          },
          "note": "по"
        },
        {
          "text": "โภ",
          "tr": [
            "о:",
            "по:",
            "oo"
          ],
          "example": {
            "en": "โภ — (rare)",
            "ru": "โภ — (редко)"
          },
          "note": "по:"
        },
        {
          "text": "ภอ",
          "tr": [
            "о",
            "по",
            "aw"
          ],
          "example": {
            "en": "ภอ — (rare)",
            "ru": "ภอ — (редко)"
          },
          "note": "по"
        },
        {
          "text": "ภำ",
          "tr": [
            "ам",
            "пам",
            "am"
          ],
          "example": {
            "en": "ภำ — (rare)",
            "ru": "ภำ — (редко)"
          },
          "note": "пам"
        },
        {
          "text": "ใภ",
          "tr": [
            "ай",
            "пай",
            "ai"
          ],
          "example": {
            "en": "ใภ — syllable",
            "ru": "ใภ — слог"
          },
          "note": "пай"
        },
        {
          "text": "ไภ",
          "tr": [
            "ай",
            "пай",
            "ai"
          ],
          "example": {
            "en": "ไภ — syllable",
            "ru": "ไภ — слог"
          },
          "note": "пай"
        }
      ],
      "words": [
        {
          "text": "ภาพ",
          "tr": [
            "пха:п",
            "па:п",
            "phaap"
          ],
          "translation": {
            "en": "picture / photo",
            "ru": "картина / фото"
          }
        },
        {
          "text": "ภาษา",
          "tr": [
            "пха:са:",
            "па:са:",
            "phaasaa"
          ],
          "translation": {
            "en": "language",
            "ru": "язык"
          }
        },
        {
          "text": "ภูเขา",
          "tr": [
            "пху: кха:o",
            "пу: ка:o",
            "phuu khao"
          ],
          "translation": {
            "en": "mountain",
            "ru": "гора"
          }
        },
        {
          "text": "ภัย",
          "tr": [
            "пхай",
            "пай",
            "phai"
          ],
          "translation": {
            "en": "danger",
            "ru": "опасность"
          }
        }
      ],
      "phrases": [
        {
          "text": "ภาษาไทย",
          "tr": [
            "пха:са: тхай",
            "па:са: тай",
            "phaasaa thai"
          ],
          "translation": {
            "en": "Thai language",
            "ru": "тайский язык"
          }
        },
        {
          "text": "ภูเก็ต",
          "tr": [
            "пху: кет",
            "пукет",
            "phuu ket"
          ],
          "translation": {
            "en": "Phuket",
            "ru": "Пхукет"
          }
        }
      ]
    },
    {
      "symbol": "ม",
      "name": "มอ ม้า",
      "tr": [
        "м",
        "м",
        "m"
      ],
      "meaning": {
        "en": "horse",
        "ru": "лошадь"
      },
      "syllables": [
        {
          "text": "มะ",
          "tr": [
            "а",
            "ма",
            "a"
          ],
          "example": {
            "en": "มะ — (rare)",
            "ru": "มะ — (редко)"
          },
          "note": "ма"
        },
        {
          "text": "มา",
          "tr": [
            "а:",
            "ма:",
            "aa"
          ],
          "example": {
            "en": "มา — to come",
            "ru": "มา — приходить"
          },
          "note": "ма:"
        },
        {
          "text": "มิ",
          "tr": [
            "и",
            "ми",
            "i"
          ],
          "example": {
            "en": "มิ — (rare)",
            "ru": "มิ — (редко)"
          },
          "note": "ми"
        },
        {
          "text": "มี",
          "tr": [
            "и:",
            "ми:",
            "ii"
          ],
          "example": {
            "en": "มี — to have",
            "ru": "มี — иметь"
          },
          "note": "ми:"
        },
        {
          "text": "มุ",
          "tr": [
            "у",
            "му",
            "u"
          ],
          "example": {
            "en": "มุ — (rare)",
            "ru": "มุ — (редко)"
          },
          "note": "му"
        },
        {
          "text": "มู",
          "tr": [
            "у:",
            "му:",
            "uu"
          ],
          "example": {
            "en": "มู — (rare)",
            "ru": "มู — (редко)"
          },
          "note": "му:"
        },
        {
          "text": "เมะ",
          "tr": [
            "э",
            "мэ",
            "e"
          ],
          "example": {
            "en": "เมะ — (rare)",
            "ru": "เมะ — (редко)"
          },
          "note": "мэ"
        },
        {
          "text": "เม",
          "tr": [
            "э:",
            "мэ:",
            "ee"
          ],
          "example": {
            "en": "เม — (rare)",
            "ru": "เม — (редко)"
          },
          "note": "мэ:"
        },
        {
          "text": "แมะ",
          "tr": [
            "э",
            "мэ",
            "ae"
          ],
          "example": {
            "en": "แม่ — mom",
            "ru": "แม่ — мама"
          },
          "note": "мэ"
        },
        {
          "text": "แม",
          "tr": [
            "э:",
            "мэ:",
            "aae"
          ],
          "example": {
            "en": "แม — (rare)",
            "ru": "แม — (редко)"
          },
          "note": "мэ:"
        },
        {
          "text": "โมะ",
          "tr": [
            "о",
            "мо",
            "o"
          ],
          "example": {
            "en": "โมะ — (rare)",
            "ru": "โมะ — (редко)"
          },
          "note": "мо"
        },
        {
          "text": "โม",
          "tr": [
            "о:",
            "мо:",
            "oo"
          ],
          "example": {
            "en": "โม — (rare)",
            "ru": "โม — (редко)"
          },
          "note": "мо:"
        },
        {
          "text": "มอ",
          "tr": [
            "о",
            "мо",
            "aw"
          ],
          "example": {
            "en": "มอ — (rare)",
            "ru": "มอ — (редко)"
          },
          "note": "мо"
        },
        {
          "text": "มำ",
          "tr": [
            "ам",
            "мам",
            "am"
          ],
          "example": {
            "en": "มำ — (rare)",
            "ru": "มำ — (редко)"
          },
          "note": "мам"
        },
        {
          "text": "ใม",
          "tr": [
            "ай",
            "май",
            "ai"
          ],
          "example": {
            "en": "ใม — syllable",
            "ru": "ใม — слог"
          },
          "note": "май"
        },
        {
          "text": "ไม",
          "tr": [
            "ай",
            "май",
            "ai"
          ],
          "example": {
            "en": "ไม — syllable",
            "ru": "ไม — слог"
          },
          "note": "май"
        }
      ],
      "words": [
        {
          "text": "มา",
          "tr": [
            "ма:",
            "ма:",
            "maa"
          ],
          "translation": {
            "en": "to come",
            "ru": "приходить"
          }
        },
        {
          "text": "มาก",
          "tr": [
            "ма:к",
            "ма:к",
            "maak"
          ],
          "translation": {
            "en": "much / many",
            "ru": "много"
          }
        },
        {
          "text": "ม้า",
          "tr": [
            "ма:",
            "ма:",
            "maa"
          ],
          "translation": {
            "en": "horse",
            "ru": "лошадь"
          }
        },
        {
          "text": "ไม่",
          "tr": [
            "май",
            "май",
            "mai"
          ],
          "translation": {
            "en": "no / not",
            "ru": "не / нет"
          }
        }
      ],
      "phrases": [
        {
          "text": "ไม่เป็นไร",
          "tr": [
            "май пен рай",
            "май пен рай",
            "mai pen rai"
          ],
          "translation": {
            "en": "it's OK / never mind",
            "ru": "ничего страшного"
          }
        },
        {
          "text": "มากมาย",
          "tr": [
            "ма:к май",
            "ма:к май",
            "maak maai"
          ],
          "translation": {
            "en": "very much / many",
            "ru": "очень много"
          }
        }
      ]
    },
    {
      "symbol": "ย",
      "name": "ยอ ยักษ์",
      "tr": [
        "й",
        "й",
        "y"
      ],
      "meaning": {
        "en": "giant",
        "ru": "великан"
      },
      "syllables": [
        {
          "text": "ยะ",
          "tr": [
            "а",
            "йа",
            "a"
          ],
          "example": {
            "en": "ยะ — (rare)",
            "ru": "ยะ — (редко)"
          },
          "note": "йа"
        },
        {
          "text": "ยา",
          "tr": [
            "а:",
            "йа:",
            "aa"
          ],
          "example": {
            "en": "ยา — medicine",
            "ru": "ยา — лекарство"
          },
          "note": "яа:"
        },
        {
          "text": "ยิ",
          "tr": [
            "и",
            "йи",
            "i"
          ],
          "example": {
            "en": "ยิ — (rare)",
            "ru": "ยิ — (редко)"
          },
          "note": "йи"
        },
        {
          "text": "ยี",
          "tr": [
            "и:",
            "йи:",
            "ii"
          ],
          "example": {
            "en": "ยี — (rare)",
            "ru": "ยี — (редко)"
          },
          "note": "йи:"
        },
        {
          "text": "ยุ",
          "tr": [
            "у",
            "йу",
            "u"
          ],
          "example": {
            "en": "ยุ — (rare)",
            "ru": "ยุ — (редко)"
          },
          "note": "йу"
        },
        {
          "text": "ยู",
          "tr": [
            "у:",
            "йу:",
            "uu"
          ],
          "example": {
            "en": "ยู — (rare)",
            "ru": "ยู — (редко)"
          },
          "note": "йу:"
        },
        {
          "text": "เยะ",
          "tr": [
            "э",
            "йэ",
            "e"
          ],
          "example": {
            "en": "เยะ — (rare)",
            "ru": "เยะ — (редко)"
          },
          "note": "йэ"
        },
        {
          "text": "เย",
          "tr": [
            "э:",
            "йэ:",
            "ee"
          ],
          "example": {
            "en": "เย — (rare)",
            "ru": "เย — (редко)"
          },
          "note": "йэ:"
        },
        {
          "text": "แยะ",
          "tr": [
            "э",
            "йэ",
            "ae"
          ],
          "example": {
            "en": "แยะ — (rare)",
            "ru": "แยะ — (редко)"
          },
          "note": "йэ"
        },
        {
          "text": "แย",
          "tr": [
            "э:",
            "йэ:",
            "aae"
          ],
          "example": {
            "en": "แย — (rare)",
            "ru": "แย — (редко)"
          },
          "note": "йэ:"
        },
        {
          "text": "โยะ",
          "tr": [
            "о",
            "йо",
            "o"
          ],
          "example": {
            "en": "โยะ — (rare)",
            "ru": "โยะ — (редко)"
          },
          "note": "йо"
        },
        {
          "text": "โย",
          "tr": [
            "о:",
            "йо:",
            "oo"
          ],
          "example": {
            "en": "โย — (rare)",
            "ru": "โย — (редко)"
          },
          "note": "йо:"
        },
        {
          "text": "ยอ",
          "tr": [
            "о",
            "йо",
            "aw"
          ],
          "example": {
            "en": "ยอ — (rare)",
            "ru": "ยอ — (редко)"
          },
          "note": "йо"
        },
        {
          "text": "ยำ",
          "tr": [
            "ам",
            "йам",
            "am"
          ],
          "example": {
            "en": "ยำ — (rare)",
            "ru": "ยำ — (редко)"
          },
          "note": "йам"
        },
        {
          "text": "ใย",
          "tr": [
            "ай",
            "йай",
            "ai"
          ],
          "example": {
            "en": "ใย — syllable",
            "ru": "ใย — слог"
          },
          "note": "йай"
        },
        {
          "text": "ไย",
          "tr": [
            "ай",
            "йай",
            "ai"
          ],
          "example": {
            "en": "ไย — syllable",
            "ru": "ไย — слог"
          },
          "note": "йай"
        }
      ],
      "words": [
        {
          "text": "ยาก",
          "tr": [
            "яа:к",
            "яа:к",
            "yaak"
          ],
          "translation": {
            "en": "difficult",
            "ru": "трудный"
          }
        },
        {
          "text": "ยา",
          "tr": [
            "яа:",
            "яа:",
            "yaa"
          ],
          "translation": {
            "en": "medicine",
            "ru": "лекарство"
          }
        },
        {
          "text": "ยิ้ม",
          "tr": [
            "йи:м",
            "йи:м",
            "yim"
          ],
          "translation": {
            "en": "to smile",
            "ru": "улыбаться"
          }
        },
        {
          "text": "ยัง",
          "tr": [
            "янг",
            "янк",
            "yang"
          ],
          "translation": {
            "en": "still / yet",
            "ru": "ещё"
          }
        }
      ],
      "phrases": [
        {
          "text": "ยังไม่เข้าใจ",
          "tr": [
            "янг май кха:o чай",
            "янк май ка:o чай",
            "yang mai khao jai"
          ],
          "translation": {
            "en": "I don't understand yet",
            "ru": "ещё не понимаю"
          }
        },
        {
          "text": "ยิ้มสวย",
          "tr": [
            "йи:м суай",
            "йи:м суай",
            "yim suai"
          ],
          "translation": {
            "en": "beautiful smile",
            "ru": "красивая улыбка"
          }
        }
      ]
    },
    {
      "symbol": "ร",
      "name": "รอ เรือ",
      "tr": [
        "р",
        "р",
        "r"
      ],
      "meaning": {
        "en": "boat",
        "ru": "лодка"
      },
      "syllables": [
        {
          "text": "ระ",
          "tr": [
            "а",
            "ла",
            "a"
          ],
          "example": {
            "en": "ระ — (rare)",
            "ru": "ระ — (редко)"
          },
          "note": "ла"
        },
        {
          "text": "รา",
          "tr": [
            "а:",
            "ла:",
            "aa"
          ],
          "example": {
            "en": "รา — (rare)",
            "ru": "รา — (редко)"
          },
          "note": "ла:"
        },
        {
          "text": "ริ",
          "tr": [
            "и",
            "ли",
            "i"
          ],
          "example": {
            "en": "ริ — (rare)",
            "ru": "ริ — (редко)"
          },
          "note": "ли"
        },
        {
          "text": "รี",
          "tr": [
            "и:",
            "ли:",
            "ii"
          ],
          "example": {
            "en": "รี — (rare)",
            "ru": "รี — (редко)"
          },
          "note": "ли:"
        },
        {
          "text": "รุ",
          "tr": [
            "у",
            "лу",
            "u"
          ],
          "example": {
            "en": "รุ — (rare)",
            "ru": "รุ — (редко)"
          },
          "note": "лу"
        },
        {
          "text": "รู",
          "tr": [
            "у:",
            "лу:",
            "uu"
          ],
          "example": {
            "en": "รู — (rare)",
            "ru": "รู — (редко)"
          },
          "note": "лу:"
        },
        {
          "text": "เระ",
          "tr": [
            "э",
            "лэ",
            "e"
          ],
          "example": {
            "en": "เร — (rare)",
            "ru": "เร — (редко)"
          },
          "note": "лэ"
        },
        {
          "text": "เร",
          "tr": [
            "э:",
            "лэ:",
            "ee"
          ],
          "example": {
            "en": "เร — (rare)",
            "ru": "เร — (редко)"
          },
          "note": "лэ:"
        },
        {
          "text": "แระ",
          "tr": [
            "э",
            "лэ",
            "ae"
          ],
          "example": {
            "en": "แระ — (rare)",
            "ru": "แระ — (редко)"
          },
          "note": "лэ"
        },
        {
          "text": "แร",
          "tr": [
            "э:",
            "лэ:",
            "aae"
          ],
          "example": {
            "en": "แร — (rare)",
            "ru": "แร — (редко)"
          },
          "note": "лэ:"
        },
        {
          "text": "โระ",
          "tr": [
            "о",
            "ло",
            "o"
          ],
          "example": {
            "en": "โระ — (rare)",
            "ru": "โระ — (редко)"
          },
          "note": "ло"
        },
        {
          "text": "โร",
          "tr": [
            "о:",
            "ло:",
            "oo"
          ],
          "example": {
            "en": "โร — (rare)",
            "ru": "โร — (редко)"
          },
          "note": "ло:"
        },
        {
          "text": "รอ",
          "tr": [
            "о",
            "ло",
            "aw"
          ],
          "example": {
            "en": "รอ — (rare)",
            "ru": "รอ — (редко)"
          },
          "note": "ло"
        },
        {
          "text": "รำ",
          "tr": [
            "ам",
            "лам",
            "am"
          ],
          "example": {
            "en": "รำ — (rare)",
            "ru": "รำ — (редко)"
          },
          "note": "лам"
        },
        {
          "text": "ใร",
          "tr": [
            "ай",
            "лай",
            "ai"
          ],
          "example": {
            "en": "ใร — syllable",
            "ru": "ใร — слог"
          },
          "note": "лай"
        },
        {
          "text": "ไร",
          "tr": [
            "ай",
            "лай",
            "ai"
          ],
          "example": {
            "en": "ไร — syllable",
            "ru": "ไร — слог"
          },
          "note": "лай"
        }
      ],
      "words": [
        {
          "text": "รัก",
          "tr": [
            "рак",
            "лак",
            "rak"
          ],
          "translation": {
            "en": "to love",
            "ru": "любить"
          }
        },
        {
          "text": "เรียน",
          "tr": [
            "риан",
            "лиан",
            "rian"
          ],
          "translation": {
            "en": "to study",
            "ru": "учиться"
          }
        },
        {
          "text": "รู้",
          "tr": [
            "ру:",
            "лу:",
            "ruu"
          ],
          "translation": {
            "en": "to know",
            "ru": "знать"
          }
        },
        {
          "text": "ร้าน",
          "tr": [
            "ра:н",
            "ла:н",
            "raan"
          ],
          "translation": {
            "en": "shop",
            "ru": "магазин"
          }
        }
      ],
      "phrases": [
        {
          "text": "รักเมืองไทย",
          "tr": [
            "рак муанг тхай",
            "лак муанк тай",
            "rak mueang thai"
          ],
          "translation": {
            "en": "I love Thailand",
            "ru": "люблю Таиланд"
          }
        },
        {
          "text": "เรียนภาษาไทย",
          "tr": [
            "риан пха:са: тхай",
            "лиан па:са: тай",
            "rian phasaa thai"
          ],
          "translation": {
            "en": "to learn Thai",
            "ru": "учить тайский"
          }
        }
      ]
    },
    {
      "symbol": "ล",
      "name": "ลอ ลิง",
      "tr": [
        "л",
        "л",
        "l"
      ],
      "meaning": {
        "en": "monkey",
        "ru": "обезьяна"
      },
      "syllables": [
        {
          "text": "ละ",
          "tr": [
            "а",
            "ла",
            "a"
          ],
          "example": {
            "en": "ละ — particle",
            "ru": "ละ — частица"
          },
          "note": "ла"
        },
        {
          "text": "ลา",
          "tr": [
            "а:",
            "ла:",
            "aa"
          ],
          "example": {
            "en": "ลา — (rare)",
            "ru": "ลา — (редко)"
          },
          "note": "ла:"
        },
        {
          "text": "ลิ",
          "tr": [
            "и",
            "ли",
            "i"
          ],
          "example": {
            "en": "ลิ — (rare)",
            "ru": "ลิ — (редко)"
          },
          "note": "ли"
        },
        {
          "text": "ลี",
          "tr": [
            "и:",
            "ли:",
            "ii"
          ],
          "example": {
            "en": "ลี — (rare)",
            "ru": "ลี — (редко)"
          },
          "note": "ли:"
        },
        {
          "text": "ลุ",
          "tr": [
            "у",
            "лу",
            "u"
          ],
          "example": {
            "en": "ลุ — (rare)",
            "ru": "ลุ — (редко)"
          },
          "note": "лу"
        },
        {
          "text": "ลู",
          "tr": [
            "у:",
            "лу:",
            "uu"
          ],
          "example": {
            "en": "ลู — (rare)",
            "ru": "ลู — (редко)"
          },
          "note": "лу:"
        },
        {
          "text": "เละ",
          "tr": [
            "э",
            "лэ",
            "e"
          ],
          "example": {
            "en": "เละ — (rare)",
            "ru": "เละ — (редко)"
          },
          "note": "лэ"
        },
        {
          "text": "เล",
          "tr": [
            "э:",
            "лэ:",
            "ee"
          ],
          "example": {
            "en": "เล — (rare)",
            "ru": "เล — (редко)"
          },
          "note": "лэ:"
        },
        {
          "text": "และ",
          "tr": [
            "э",
            "лэ",
            "ae"
          ],
          "example": {
            "en": "และ — (rare)",
            "ru": "และ — (редко)"
          },
          "note": "лэ"
        },
        {
          "text": "แล",
          "tr": [
            "э:",
            "лэ:",
            "aae"
          ],
          "example": {
            "en": "แล — (rare)",
            "ru": "แล — (редко)"
          },
          "note": "лэ:"
        },
        {
          "text": "โละ",
          "tr": [
            "о",
            "ло",
            "o"
          ],
          "example": {
            "en": "โละ — (rare)",
            "ru": "โละ — (редко)"
          },
          "note": "ло"
        },
        {
          "text": "โล",
          "tr": [
            "о:",
            "ло:",
            "oo"
          ],
          "example": {
            "en": "โล — (rare)",
            "ru": "โล — (редко)"
          },
          "note": "ло:"
        },
        {
          "text": "ลอ",
          "tr": [
            "о",
            "ло",
            "aw"
          ],
          "example": {
            "en": "ลอ — (rare)",
            "ru": "ลอ — (редко)"
          },
          "note": "ло"
        },
        {
          "text": "ลำ",
          "tr": [
            "ам",
            "лам",
            "am"
          ],
          "example": {
            "en": "ลำ — (rare)",
            "ru": "ลำ — (редко)"
          },
          "note": "лам"
        },
        {
          "text": "ใล",
          "tr": [
            "ай",
            "лай",
            "ai"
          ],
          "example": {
            "en": "ใล — syllable",
            "ru": "ใล — слог"
          },
          "note": "лай"
        },
        {
          "text": "ไล",
          "tr": [
            "ай",
            "лай",
            "ai"
          ],
          "example": {
            "en": "ไล — syllable",
            "ru": "ไล — слог"
          },
          "note": "лай"
        }
      ],
      "words": [
        {
          "text": "ลอง",
          "tr": [
            "ло:нг",
            "ло:нк",
            "long"
          ],
          "translation": {
            "en": "to try",
            "ru": "попробовать"
          }
        },
        {
          "text": "เล่น",
          "tr": [
            "лен",
            "лен",
            "len"
          ],
          "translation": {
            "en": "to play",
            "ru": "играть"
          }
        },
        {
          "text": "ลูก",
          "tr": [
            "лу:к",
            "лу:к",
            "luuk"
          ],
          "translation": {
            "en": "child",
            "ru": "ребёнок"
          }
        },
        {
          "text": "ลาก",
          "tr": [
            "ла:к",
            "ла:к",
            "laak"
          ],
          "translation": {
            "en": "to pull",
            "ru": "тянуть"
          }
        }
      ],
      "phrases": [
        {
          "text": "ลองดูก่อน",
          "tr": [
            "ло:нг ду: го:н",
            "ло:нк ду: ко:н",
            "long duu gon"
          ],
          "translation": {
            "en": "try first",
            "ru": "попробуй сначала"
          }
        },
        {
          "text": "เล่นกีฬา",
          "tr": [
            "лен ки:ла:",
            "лен ки:ла:",
            "len kiilaa"
          ],
          "translation": {
            "en": "to play sports",
            "ru": "заниматься спортом"
          }
        }
      ]
    },
    {
      "symbol": "ว",
      "name": "วอ แหวน",
      "tr": [
        "в",
        "в",
        "w"
      ],
      "meaning": {
        "en": "ring",
        "ru": "кольцо"
      },
      "syllables": [
        {
          "text": "วะ",
          "tr": [
            "а",
            "ва",
            "a"
          ],
          "example": {
            "en": "วะ — (rare)",
            "ru": "วะ — (редко)"
          },
          "note": "ва"
        },
        {
          "text": "วา",
          "tr": [
            "а:",
            "ва:",
            "aa"
          ],
          "example": {
            "en": "วา — (rare)",
            "ru": "วา — (редко)"
          },
          "note": "ва:"
        },
        {
          "text": "วิ",
          "tr": [
            "и",
            "ви",
            "i"
          ],
          "example": {
            "en": "วิ — (rare)",
            "ru": "วิ — (редко)"
          },
          "note": "ви"
        },
        {
          "text": "วี",
          "tr": [
            "и:",
            "ви:",
            "ii"
          ],
          "example": {
            "en": "วี — (rare)",
            "ru": "วี — (редко)"
          },
          "note": "ви:"
        },
        {
          "text": "วุ",
          "tr": [
            "у",
            "ву",
            "u"
          ],
          "example": {
            "en": "วุ — (rare)",
            "ru": "วุ — (редко)"
          },
          "note": "ву"
        },
        {
          "text": "วู",
          "tr": [
            "у:",
            "ву:",
            "uu"
          ],
          "example": {
            "en": "วู — (rare)",
            "ru": "วู — (редко)"
          },
          "note": "ву:"
        },
        {
          "text": "เวะ",
          "tr": [
            "э",
            "вэ",
            "e"
          ],
          "example": {
            "en": "เว — (rare)",
            "ru": "เว — (редко)"
          },
          "note": "вэ"
        },
        {
          "text": "เว",
          "tr": [
            "э:",
            "вэ:",
            "ee"
          ],
          "example": {
            "en": "เว — (rare)",
            "ru": "เว — (редко)"
          },
          "note": "вэ:"
        },
        {
          "text": "แวะ",
          "tr": [
            "э",
            "вэ",
            "ae"
          ],
          "example": {
            "en": "แวะ — (rare)",
            "ru": "แวะ — (редко)"
          },
          "note": "вэ"
        },
        {
          "text": "แว",
          "tr": [
            "э:",
            "вэ:",
            "aae"
          ],
          "example": {
            "en": "แว — (rare)",
            "ru": "แว — (редко)"
          },
          "note": "вэ:"
        },
        {
          "text": "โวะ",
          "tr": [
            "о",
            "во",
            "o"
          ],
          "example": {
            "en": "โวะ — (rare)",
            "ru": "โวะ — (редко)"
          },
          "note": "во"
        },
        {
          "text": "โว",
          "tr": [
            "о:",
            "во:",
            "oo"
          ],
          "example": {
            "en": "โว — (rare)",
            "ru": "โว — (редко)"
          },
          "note": "во:"
        },
        {
          "text": "วอ",
          "tr": [
            "о",
            "во",
            "aw"
          ],
          "example": {
            "en": "วอ — (rare)",
            "ru": "วอ — (редко)"
          },
          "note": "во"
        },
        {
          "text": "วำ",
          "tr": [
            "ам",
            "вам",
            "am"
          ],
          "example": {
            "en": "วำ — (rare)",
            "ru": "วำ — (редко)"
          },
          "note": "вам"
        },
        {
          "text": "ใว",
          "tr": [
            "ай",
            "вай",
            "ai"
          ],
          "example": {
            "en": "ใว — syllable",
            "ru": "ใว — слог"
          },
          "note": "вай"
        },
        {
          "text": "ไว",
          "tr": [
            "ай",
            "вай",
            "ai"
          ],
          "example": {
            "en": "ไว — syllable",
            "ru": "ไว — слог"
          },
          "note": "вай"
        }
      ],
      "words": [
        {
          "text": "วัน",
          "tr": [
            "ван",
            "ван",
            "wan"
          ],
          "translation": {
            "en": "day",
            "ru": "день"
          }
        },
        {
          "text": "เวลา",
          "tr": [
            "вела:",
            "вела:",
            "weelaa"
          ],
          "translation": {
            "en": "time",
            "ru": "время"
          }
        },
        {
          "text": "วิ่ง",
          "tr": [
            "вйнг",
            "вйнк",
            "wing"
          ],
          "translation": {
            "en": "to run",
            "ru": "бегать"
          }
        },
        {
          "text": "ว่า",
          "tr": [
            "ва:",
            "ва:",
            "waa"
          ],
          "translation": {
            "en": "to say / that",
            "ru": "говорить / что"
          }
        }
      ],
      "phrases": [
        {
          "text": "วันนี้",
          "tr": [
            "ван ни:",
            "ван ни:",
            "wan nii"
          ],
          "translation": {
            "en": "today",
            "ru": "сегодня"
          }
        },
        {
          "text": "วันเกิด",
          "tr": [
            "ван гəт",
            "ван кəт",
            "wan goet"
          ],
          "translation": {
            "en": "birthday",
            "ru": "день рождения"
          }
        }
      ]
    },
    {
      "symbol": "ศ",
      "name": "ศอ ศาลา",
      "tr": [
        "с",
        "с",
        "s"
      ],
      "meaning": {
        "en": "pavilion",
        "ru": "беседка"
      },
      "syllables": [
        {
          "text": "ศะ",
          "tr": [
            "а",
            "са",
            "a"
          ],
          "example": {
            "en": "ศะ — (rare)",
            "ru": "ศะ — (редко)"
          },
          "note": "са"
        },
        {
          "text": "ศา",
          "tr": [
            "а:",
            "са:",
            "aa"
          ],
          "example": {
            "en": "ศา — (rare)",
            "ru": "ศา — (редко)"
          },
          "note": "са:"
        },
        {
          "text": "ศิ",
          "tr": [
            "и",
            "си",
            "i"
          ],
          "example": {
            "en": "ศิ — (rare)",
            "ru": "ศิ — (редко)"
          },
          "note": "си"
        },
        {
          "text": "ศี",
          "tr": [
            "и:",
            "си:",
            "ii"
          ],
          "example": {
            "en": "ศี — (rare)",
            "ru": "ศี — (редко)"
          },
          "note": "си:"
        },
        {
          "text": "ศุ",
          "tr": [
            "у",
            "су",
            "u"
          ],
          "example": {
            "en": "ศุ — (rare)",
            "ru": "ศุ — (редко)"
          },
          "note": "су"
        },
        {
          "text": "ศู",
          "tr": [
            "у:",
            "су:",
            "uu"
          ],
          "example": {
            "en": "ศู — (rare)",
            "ru": "ศู — (редко)"
          },
          "note": "су:"
        },
        {
          "text": "เศะ",
          "tr": [
            "э",
            "сэ",
            "e"
          ],
          "example": {
            "en": "เศะ — (rare)",
            "ru": "เศะ — (редко)"
          },
          "note": "сэ"
        },
        {
          "text": "เศ",
          "tr": [
            "э:",
            "сэ:",
            "ee"
          ],
          "example": {
            "en": "เศ — (rare)",
            "ru": "เศ — (редко)"
          },
          "note": "сэ:"
        },
        {
          "text": "แศะ",
          "tr": [
            "э",
            "сэ",
            "ae"
          ],
          "example": {
            "en": "แศะ — (rare)",
            "ru": "แศะ — (редко)"
          },
          "note": "сэ"
        },
        {
          "text": "แศ",
          "tr": [
            "э:",
            "сэ:",
            "aae"
          ],
          "example": {
            "en": "แศ — (rare)",
            "ru": "แศ — (редко)"
          },
          "note": "сэ:"
        },
        {
          "text": "โศะ",
          "tr": [
            "о",
            "со",
            "o"
          ],
          "example": {
            "en": "โศะ — (rare)",
            "ru": "โศะ — (редко)"
          },
          "note": "со"
        },
        {
          "text": "โศ",
          "tr": [
            "о:",
            "со:",
            "oo"
          ],
          "example": {
            "en": "โศ — (rare)",
            "ru": "โศ — (редко)"
          },
          "note": "со:"
        },
        {
          "text": "ศอ",
          "tr": [
            "о",
            "со",
            "aw"
          ],
          "example": {
            "en": "ศอ — (rare)",
            "ru": "ศอ — (редко)"
          },
          "note": "со"
        },
        {
          "text": "ศำ",
          "tr": [
            "ам",
            "сам",
            "am"
          ],
          "example": {
            "en": "ศำ — (rare)",
            "ru": "ศำ — (редко)"
          },
          "note": "сам"
        },
        {
          "text": "ใศ",
          "tr": [
            "ай",
            "сай",
            "ai"
          ],
          "example": {
            "en": "ใศ — syllable",
            "ru": "ใศ — слог"
          },
          "note": "сай"
        },
        {
          "text": "ไศ",
          "tr": [
            "ай",
            "сай",
            "ai"
          ],
          "example": {
            "en": "ไศ — syllable",
            "ru": "ไศ — слог"
          },
          "note": "сай"
        }
      ],
      "words": [
        {
          "text": "ศาลา",
          "tr": [
            "са:ла:",
            "са:ла:",
            "saalaa"
          ],
          "translation": {
            "en": "pavilion / sala",
            "ru": "беседка / павильон"
          }
        },
        {
          "text": "ศิลปะ",
          "tr": [
            "синлапа",
            "синлапа",
            "sinlapa"
          ],
          "translation": {
            "en": "art",
            "ru": "искусство"
          }
        },
        {
          "text": "ศาสนา",
          "tr": [
            "са:тсана:",
            "са:тсана:",
            "saatsanaa"
          ],
          "translation": {
            "en": "religion",
            "ru": "религия"
          }
        },
        {
          "text": "ศพ",
          "tr": [
            "соп",
            "соп",
            "sop"
          ],
          "translation": {
            "en": "corpse",
            "ru": "труп / покойник"
          }
        }
      ],
      "phrases": [
        {
          "text": "ศาลาประชาคม",
          "tr": [
            "са:ла: прачхакхом",
            "са:ла: плачаком",
            "saalaa prachakhom"
          ],
          "translation": {
            "en": "community pavilion",
            "ru": "общественный павильон"
          }
        },
        {
          "text": "ศิลปะไทย",
          "tr": [
            "синлапа тхай",
            "синлапа тай",
            "sinlapa thai"
          ],
          "translation": {
            "en": "Thai art",
            "ru": "тайское искусство"
          }
        }
      ]
    },
    {
      "symbol": "ษ",
      "name": "ษอ ฤๅษี",
      "tr": [
        "с",
        "с",
        "s"
      ],
      "meaning": {
        "en": "hermit",
        "ru": "отшельник"
      },
      "syllables": [
        {
          "text": "ษะ",
          "tr": [
            "а",
            "са",
            "a"
          ],
          "example": {
            "en": "ษะ — (rare)",
            "ru": "ษะ — (редко)"
          },
          "note": "са"
        },
        {
          "text": "ษา",
          "tr": [
            "а:",
            "са:",
            "aa"
          ],
          "example": {
            "en": "ษา — (rare)",
            "ru": "ษา — (редко)"
          },
          "note": "са:"
        },
        {
          "text": "ษิ",
          "tr": [
            "и",
            "си",
            "i"
          ],
          "example": {
            "en": "ษิ — (rare)",
            "ru": "ษิ — (редко)"
          },
          "note": "си"
        },
        {
          "text": "ษี",
          "tr": [
            "и:",
            "си:",
            "ii"
          ],
          "example": {
            "en": "ษี — (rare)",
            "ru": "ษี — (редко)"
          },
          "note": "си:"
        },
        {
          "text": "ษุ",
          "tr": [
            "у",
            "су",
            "u"
          ],
          "example": {
            "en": "ษุ — (rare)",
            "ru": "ษุ — (редко)"
          },
          "note": "су"
        },
        {
          "text": "ษู",
          "tr": [
            "у:",
            "су:",
            "uu"
          ],
          "example": {
            "en": "ษู — (rare)",
            "ru": "ษู — (редко)"
          },
          "note": "су:"
        },
        {
          "text": "เษะ",
          "tr": [
            "э",
            "сэ",
            "e"
          ],
          "example": {
            "en": "เษะ — (rare)",
            "ru": "เษะ — (редко)"
          },
          "note": "сэ"
        },
        {
          "text": "เษ",
          "tr": [
            "э:",
            "сэ:",
            "ee"
          ],
          "example": {
            "en": "เษ — (rare)",
            "ru": "เษ — (редко)"
          },
          "note": "сэ:"
        },
        {
          "text": "แษะ",
          "tr": [
            "э",
            "сэ",
            "ae"
          ],
          "example": {
            "en": "แษะ — (rare)",
            "ru": "แษะ — (редко)"
          },
          "note": "сэ"
        },
        {
          "text": "แษ",
          "tr": [
            "э:",
            "сэ:",
            "aae"
          ],
          "example": {
            "en": "แษ — (rare)",
            "ru": "แษ — (редко)"
          },
          "note": "сэ:"
        },
        {
          "text": "โษะ",
          "tr": [
            "о",
            "со",
            "o"
          ],
          "example": {
            "en": "โษะ — (rare)",
            "ru": "โษะ — (редко)"
          },
          "note": "со"
        },
        {
          "text": "โษ",
          "tr": [
            "о:",
            "со:",
            "oo"
          ],
          "example": {
            "en": "โษ — (rare)",
            "ru": "โษ — (редко)"
          },
          "note": "со:"
        },
        {
          "text": "ษอ",
          "tr": [
            "о",
            "со",
            "aw"
          ],
          "example": {
            "en": "ษอ — (rare)",
            "ru": "ษอ — (редко)"
          },
          "note": "со"
        },
        {
          "text": "ษำ",
          "tr": [
            "ам",
            "сам",
            "am"
          ],
          "example": {
            "en": "ษำ — (rare)",
            "ru": "ษำ — (редко)"
          },
          "note": "сам"
        },
        {
          "text": "ใษ",
          "tr": [
            "ай",
            "сай",
            "ai"
          ],
          "example": {
            "en": "ใษ — syllable",
            "ru": "ใษ — слог"
          },
          "note": "сай"
        },
        {
          "text": "ไษ",
          "tr": [
            "ай",
            "сай",
            "ai"
          ],
          "example": {
            "en": "ไษ — syllable",
            "ru": "ไษ — слог"
          },
          "note": "сай"
        }
      ],
      "words": [
        {
          "text": "ฤๅษี",
          "tr": [
            "рысии",
            "лысии",
            "rueesii"
          ],
          "translation": {
            "en": "hermit / sage",
            "ru": "отшельник / мудрец"
          }
        },
        {
          "text": "ฤดู",
          "tr": [
            "рыду:",
            "лыду:",
            "ruedu"
          ],
          "translation": {
            "en": "season",
            "ru": "сезон / время года"
          }
        },
        {
          "text": "ฤทธิ์",
          "tr": [
            "рит",
            "лит",
            "rit"
          ],
          "translation": {
            "en": "power / might",
            "ru": "сила / могущество"
          }
        },
        {
          "text": "ฤกษ์",
          "tr": [
            "рык",
            "лык",
            "ruek"
          ],
          "translation": {
            "en": "auspicious moment",
            "ru": "благоприятный момент"
          }
        }
      ],
      "phrases": [
        {
          "text": "ฤดูร้อน",
          "tr": [
            "рыду: ро:н",
            "лыду: ло:н",
            "ruedu ron"
          ],
          "translation": {
            "en": "summer season",
            "ru": "летний сезон"
          }
        },
        {
          "text": "ฤกษ์ดี",
          "tr": [
            "рык ди:",
            "лык ди:",
            "ruek dii"
          ],
          "translation": {
            "en": "auspicious moment",
            "ru": "удачный момент"
          }
        }
      ]
    },
    {
      "symbol": "ส",
      "name": "สอ เสือ",
      "tr": [
        "с",
        "с",
        "s"
      ],
      "meaning": {
        "en": "tiger",
        "ru": "тигр"
      },
      "syllables": [
        {
          "text": "สะ",
          "tr": [
            "а",
            "са",
            "a"
          ],
          "example": {
            "en": "สะ — (rare)",
            "ru": "สะ — (редко)"
          },
          "note": "са"
        },
        {
          "text": "สา",
          "tr": [
            "а:",
            "са:",
            "aa"
          ],
          "example": {
            "en": "สา — (rare)",
            "ru": "สา — (редко)"
          },
          "note": "са:"
        },
        {
          "text": "สิ",
          "tr": [
            "и",
            "си",
            "i"
          ],
          "example": {
            "en": "สิ — (rare)",
            "ru": "สิ — (редко)"
          },
          "note": "си"
        },
        {
          "text": "สี",
          "tr": [
            "и:",
            "си:",
            "ii"
          ],
          "example": {
            "en": "สี — (rare)",
            "ru": "สี — (редко)"
          },
          "note": "си:"
        },
        {
          "text": "สุ",
          "tr": [
            "у",
            "су",
            "u"
          ],
          "example": {
            "en": "สุ — (rare)",
            "ru": "สุ — (редко)"
          },
          "note": "су"
        },
        {
          "text": "สู",
          "tr": [
            "у:",
            "су:",
            "uu"
          ],
          "example": {
            "en": "สู — (rare)",
            "ru": "สู — (редко)"
          },
          "note": "су:"
        },
        {
          "text": "เสะ",
          "tr": [
            "э",
            "сэ",
            "e"
          ],
          "example": {
            "en": "เสะ — (rare)",
            "ru": "เสะ — (редко)"
          },
          "note": "сэ"
        },
        {
          "text": "เส",
          "tr": [
            "э:",
            "сэ:",
            "ee"
          ],
          "example": {
            "en": "เส — (rare)",
            "ru": "เส — (редко)"
          },
          "note": "сэ:"
        },
        {
          "text": "แสะ",
          "tr": [
            "э",
            "сэ",
            "ae"
          ],
          "example": {
            "en": "แสะ — (rare)",
            "ru": "แสะ — (редко)"
          },
          "note": "сэ"
        },
        {
          "text": "แส",
          "tr": [
            "э:",
            "сэ:",
            "aae"
          ],
          "example": {
            "en": "แส — (rare)",
            "ru": "แส — (редко)"
          },
          "note": "сэ:"
        },
        {
          "text": "โสะ",
          "tr": [
            "о",
            "со",
            "o"
          ],
          "example": {
            "en": "โสะ — (rare)",
            "ru": "โสะ — (редко)"
          },
          "note": "со"
        },
        {
          "text": "โส",
          "tr": [
            "о:",
            "со:",
            "oo"
          ],
          "example": {
            "en": "โส — (rare)",
            "ru": "โส — (редко)"
          },
          "note": "со:"
        },
        {
          "text": "สอ",
          "tr": [
            "о",
            "со",
            "aw"
          ],
          "example": {
            "en": "สอ — (rare)",
            "ru": "สอ — (редко)"
          },
          "note": "со"
        },
        {
          "text": "สำ",
          "tr": [
            "ам",
            "сам",
            "am"
          ],
          "example": {
            "en": "สำ — (rare)",
            "ru": "สำ — (редко)"
          },
          "note": "сам"
        },
        {
          "text": "ใส",
          "tr": [
            "ай",
            "сай",
            "ai"
          ],
          "example": {
            "en": "ใส — syllable",
            "ru": "ใส — слог"
          },
          "note": "сай"
        },
        {
          "text": "ไส",
          "tr": [
            "ай",
            "сай",
            "ai"
          ],
          "example": {
            "en": "ไส — syllable",
            "ru": "ไส — слог"
          },
          "note": "сай"
        }
      ],
      "words": [
        {
          "text": "สวัสดี",
          "tr": [
            "савáтди:",
            "саватди",
            "sawatdii"
          ],
          "translation": {
            "en": "hello",
            "ru": "здравствуйте"
          }
        },
        {
          "text": "สาม",
          "tr": [
            "са:м",
            "са:м",
            "saam"
          ],
          "translation": {
            "en": "three",
            "ru": "три"
          }
        },
        {
          "text": "สวย",
          "tr": [
            "суай",
            "суай",
            "suai"
          ],
          "translation": {
            "en": "beautiful",
            "ru": "красивый"
          }
        },
        {
          "text": "สิ่ง",
          "tr": [
            "синг",
            "синк",
            "sing"
          ],
          "translation": {
            "en": "thing",
            "ru": "вещь"
          }
        }
      ],
      "phrases": [
        {
          "text": "สวัสดีครับ",
          "tr": [
            "савáтди: кхраб",
            "саватди кап",
            "sawatdii khrap"
          ],
          "translation": {
            "en": "hello (male speaker)",
            "ru": "здравствуйте (м.р.)"
          }
        },
        {
          "text": "สวยมาก",
          "tr": [
            "суай ма:к",
            "суай ма:к",
            "suai maak"
          ],
          "translation": {
            "en": "very beautiful",
            "ru": "очень красиво"
          }
        }
      ]
    },
    {
      "symbol": "ห",
      "name": "หอ หีบ",
      "tr": [
        "х",
        "х",
        "h"
      ],
      "meaning": {
        "en": "chest / box",
        "ru": "сундук"
      },
      "syllables": [
        {
          "text": "หะ",
          "tr": [
            "а",
            "ха",
            "a"
          ],
          "example": {
            "en": "หะ — (rare)",
            "ru": "หะ — (редко)"
          },
          "note": "ха"
        },
        {
          "text": "หา",
          "tr": [
            "а:",
            "ха:",
            "aa"
          ],
          "example": {
            "en": "หา — to search",
            "ru": "หา — искать"
          },
          "note": "ха:"
        },
        {
          "text": "หิ",
          "tr": [
            "и",
            "хи",
            "i"
          ],
          "example": {
            "en": "หิ — (rare)",
            "ru": "หิ — (редко)"
          },
          "note": "хи"
        },
        {
          "text": "หี",
          "tr": [
            "и:",
            "хи:",
            "ii"
          ],
          "example": {
            "en": "หี — (rare)",
            "ru": "หี — (редко)"
          },
          "note": "хи:"
        },
        {
          "text": "หุ",
          "tr": [
            "у",
            "ху",
            "u"
          ],
          "example": {
            "en": "หุ — (rare)",
            "ru": "หุ — (редко)"
          },
          "note": "ху"
        },
        {
          "text": "หู",
          "tr": [
            "у:",
            "ху:",
            "uu"
          ],
          "example": {
            "en": "หู — ear",
            "ru": "หู — ухо"
          },
          "note": "ху:"
        },
        {
          "text": "เหะ",
          "tr": [
            "э",
            "хэ",
            "e"
          ],
          "example": {
            "en": "เหะ — (rare)",
            "ru": "เหะ — (редко)"
          },
          "note": "хэ"
        },
        {
          "text": "เห",
          "tr": [
            "э:",
            "хэ:",
            "ee"
          ],
          "example": {
            "en": "เห — (rare)",
            "ru": "เห — (редко)"
          },
          "note": "хэ:"
        },
        {
          "text": "แหะ",
          "tr": [
            "э",
            "хэ",
            "ae"
          ],
          "example": {
            "en": "แหะ — (rare)",
            "ru": "แหะ — (редко)"
          },
          "note": "хэ"
        },
        {
          "text": "แห",
          "tr": [
            "э:",
            "хэ:",
            "aae"
          ],
          "example": {
            "en": "แห — (rare)",
            "ru": "แห — (редко)"
          },
          "note": "хэ:"
        },
        {
          "text": "โหะ",
          "tr": [
            "о",
            "хо",
            "o"
          ],
          "example": {
            "en": "โหะ — (rare)",
            "ru": "โหะ — (редко)"
          },
          "note": "хо"
        },
        {
          "text": "โห",
          "tr": [
            "о:",
            "хо:",
            "oo"
          ],
          "example": {
            "en": "โห — (rare)",
            "ru": "โห — (редко)"
          },
          "note": "хо:"
        },
        {
          "text": "หอ",
          "tr": [
            "о",
            "хо",
            "aw"
          ],
          "example": {
            "en": "หอ — (rare)",
            "ru": "หอ — (редко)"
          },
          "note": "хо"
        },
        {
          "text": "หำ",
          "tr": [
            "ам",
            "хам",
            "am"
          ],
          "example": {
            "en": "หำ — (rare)",
            "ru": "หำ — (редко)"
          },
          "note": "хам"
        },
        {
          "text": "ให",
          "tr": [
            "ай",
            "хай",
            "ai"
          ],
          "example": {
            "en": "ให — syllable",
            "ru": "ให — слог"
          },
          "note": "хай"
        },
        {
          "text": "ไห",
          "tr": [
            "ай",
            "хай",
            "ai"
          ],
          "example": {
            "en": "ไห — syllable",
            "ru": "ไห — слог"
          },
          "note": "хай"
        }
      ],
      "words": [
        {
          "text": "หิว",
          "tr": [
            "хйу",
            "хйу",
            "hiu"
          ],
          "translation": {
            "en": "hungry",
            "ru": "голодный"
          }
        },
        {
          "text": "หา",
          "tr": [
            "ха:",
            "ха:",
            "haa"
          ],
          "translation": {
            "en": "to search",
            "ru": "искать"
          }
        },
        {
          "text": "หัว",
          "tr": [
            "хуа",
            "хуа",
            "hua"
          ],
          "translation": {
            "en": "head",
            "ru": "голова"
          }
        },
        {
          "text": "ห้อง",
          "tr": [
            "хо:нг",
            "хо:нк",
            "hong"
          ],
          "translation": {
            "en": "room",
            "ru": "комната"
          }
        }
      ],
      "phrases": [
        {
          "text": "หิวข้าว",
          "tr": [
            "хйу кха:o",
            "хйу ка:o",
            "hiu khao"
          ],
          "translation": {
            "en": "I'm hungry",
            "ru": "хочу есть"
          }
        },
        {
          "text": "ห้องน้ำ",
          "tr": [
            "хо:нг на:м",
            "хо:нк на:м",
            "hong naam"
          ],
          "translation": {
            "en": "toilet / bathroom",
            "ru": "туалет / ванная"
          }
        }
      ]
    },
    {
      "symbol": "ฬ",
      "name": "ฬอ จุฬา",
      "tr": [
        "л",
        "л",
        "l"
      ],
      "meaning": {
        "en": "kite",
        "ru": "воздушный змей"
      },
      "syllables": [
        {
          "text": "ฬะ",
          "tr": [
            "а",
            "ла",
            "a"
          ],
          "example": {
            "en": "ฬะ — (rare)",
            "ru": "ฬะ — (редко)"
          },
          "note": "ла"
        },
        {
          "text": "ฬา",
          "tr": [
            "а:",
            "ла:",
            "aa"
          ],
          "example": {
            "en": "ฬา — (rare)",
            "ru": "ฬา — (редко)"
          },
          "note": "ла:"
        },
        {
          "text": "ฬิ",
          "tr": [
            "и",
            "ли",
            "i"
          ],
          "example": {
            "en": "ฬิ — (rare)",
            "ru": "ฬิ — (редко)"
          },
          "note": "ли"
        },
        {
          "text": "ฬี",
          "tr": [
            "и:",
            "ли:",
            "ii"
          ],
          "example": {
            "en": "ฬี — (rare)",
            "ru": "ฬี — (редко)"
          },
          "note": "ли:"
        },
        {
          "text": "ฬุ",
          "tr": [
            "у",
            "лу",
            "u"
          ],
          "example": {
            "en": "ฬุ — (rare)",
            "ru": "ฬุ — (редко)"
          },
          "note": "лу"
        },
        {
          "text": "ฬู",
          "tr": [
            "у:",
            "лу:",
            "uu"
          ],
          "example": {
            "en": "ฬู — (rare)",
            "ru": "ฬู — (редко)"
          },
          "note": "лу:"
        },
        {
          "text": "เฬะ",
          "tr": [
            "э",
            "лэ",
            "e"
          ],
          "example": {
            "en": "เฬะ — (rare)",
            "ru": "เฬะ — (редко)"
          },
          "note": "лэ"
        },
        {
          "text": "เฬ",
          "tr": [
            "э:",
            "лэ:",
            "ee"
          ],
          "example": {
            "en": "เฬ — (rare)",
            "ru": "เฬ — (редко)"
          },
          "note": "лэ:"
        },
        {
          "text": "แฬะ",
          "tr": [
            "э",
            "лэ",
            "ae"
          ],
          "example": {
            "en": "แฬะ — (rare)",
            "ru": "แฬะ — (редко)"
          },
          "note": "лэ"
        },
        {
          "text": "แฬ",
          "tr": [
            "э:",
            "лэ:",
            "aae"
          ],
          "example": {
            "en": "แฬ — (rare)",
            "ru": "แฬ — (редко)"
          },
          "note": "лэ:"
        },
        {
          "text": "โฬะ",
          "tr": [
            "о",
            "ло",
            "o"
          ],
          "example": {
            "en": "โฬะ — (rare)",
            "ru": "โฬะ — (редко)"
          },
          "note": "ло"
        },
        {
          "text": "โฬ",
          "tr": [
            "о:",
            "ло:",
            "oo"
          ],
          "example": {
            "en": "โฬ — (rare)",
            "ru": "โฬ — (редко)"
          },
          "note": "ло:"
        },
        {
          "text": "ฬอ",
          "tr": [
            "о",
            "ло",
            "aw"
          ],
          "example": {
            "en": "ฬอ — (rare)",
            "ru": "ฬอ — (редко)"
          },
          "note": "ло"
        },
        {
          "text": "ฬำ",
          "tr": [
            "ам",
            "лам",
            "am"
          ],
          "example": {
            "en": "ฬำ — (rare)",
            "ru": "ฬำ — (редко)"
          },
          "note": "лам"
        },
        {
          "text": "ใฬ",
          "tr": [
            "ай",
            "лай",
            "ai"
          ],
          "example": {
            "en": "ใฬ — syllable",
            "ru": "ใฬ — слог"
          },
          "note": "лай"
        },
        {
          "text": "ไฬ",
          "tr": [
            "ай",
            "лай",
            "ai"
          ],
          "example": {
            "en": "ไฬ — syllable",
            "ru": "ไฬ — слог"
          },
          "note": "лай"
        }
      ],
      "words": [
        {
          "text": "จุฬา",
          "tr": [
            "чхула:",
            "чула:",
            "chulaa"
          ],
          "translation": {
            "en": "kite",
            "ru": "воздушный змей"
          }
        },
        {
          "text": "กุฬา",
          "tr": [
            "кхула:",
            "кула:",
            "khulaa"
          ],
          "translation": {
            "en": "sport (literary)",
            "ru": "спорт (книжн.)"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "rare letter",
            "ru": "редкая буква"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "mainly in loanwords",
            "ru": "в основном в заимствованиях"
          }
        }
      ],
      "phrases": [
        {
          "text": "เล่นจุฬา",
          "tr": [
            "лен чхула:",
            "лен чула:",
            "len chulaa"
          ],
          "translation": {
            "en": "to fly a kite",
            "ru": "запускать змея"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "rare letter, few words",
            "ru": "редкая буква, мало слов"
          }
        }
      ]
    },
    {
      "symbol": "อ",
      "name": "ออ อ่าง",
      "tr": [
        "—",
        "—",
        "silent/glottal"
      ],
      "meaning": {
        "en": "basin",
        "ru": "таз"
      },
      "syllables": [
        {
          "text": "อะ",
          "tr": [
            "а",
            "а",
            "a"
          ],
          "example": {
            "en": "อะ — (rare)",
            "ru": "อะ — (редко)"
          },
          "note": "а"
        },
        {
          "text": "อา",
          "tr": [
            "а:",
            "а:",
            "aa"
          ],
          "example": {
            "en": "อา — (rare)",
            "ru": "อา — (редко)"
          },
          "note": "а:"
        },
        {
          "text": "อิ",
          "tr": [
            "и",
            "и",
            "i"
          ],
          "example": {
            "en": "อิ — (rare)",
            "ru": "อิ — (редко)"
          },
          "note": "и"
        },
        {
          "text": "อี",
          "tr": [
            "и:",
            "и:",
            "ii"
          ],
          "example": {
            "en": "อี — (rare)",
            "ru": "อี — (редко)"
          },
          "note": "и:"
        },
        {
          "text": "อุ",
          "tr": [
            "у",
            "у",
            "u"
          ],
          "example": {
            "en": "อุ — (rare)",
            "ru": "อุ — (редко)"
          },
          "note": "у"
        },
        {
          "text": "อู",
          "tr": [
            "у:",
            "у:",
            "uu"
          ],
          "example": {
            "en": "อู — (rare)",
            "ru": "อู — (редко)"
          },
          "note": "у:"
        },
        {
          "text": "เอะ",
          "tr": [
            "э",
            "э",
            "e"
          ],
          "example": {
            "en": "เอะ — (rare)",
            "ru": "เอะ — (редко)"
          },
          "note": "э"
        },
        {
          "text": "เอ",
          "tr": [
            "э:",
            "э:",
            "ee"
          ],
          "example": {
            "en": "เอ — (rare)",
            "ru": "เอ — (редко)"
          },
          "note": "э:"
        },
        {
          "text": "แอะ",
          "tr": [
            "э",
            "э",
            "ae"
          ],
          "example": {
            "en": "แอะ — (rare)",
            "ru": "แอะ — (редко)"
          },
          "note": "э"
        },
        {
          "text": "แอ",
          "tr": [
            "э:",
            "э:",
            "aae"
          ],
          "example": {
            "en": "แอ — (rare)",
            "ru": "แอ — (редко)"
          },
          "note": "э:"
        },
        {
          "text": "โอะ",
          "tr": [
            "о",
            "о",
            "o"
          ],
          "example": {
            "en": "โอะ — (rare)",
            "ru": "โอะ — (редко)"
          },
          "note": "о"
        },
        {
          "text": "โอ",
          "tr": [
            "о:",
            "о:",
            "oo"
          ],
          "example": {
            "en": "โอ — (rare)",
            "ru": "โอ — (редко)"
          },
          "note": "о:"
        },
        {
          "text": "ออ",
          "tr": [
            "о",
            "о",
            "aw"
          ],
          "example": {
            "en": "ออ — (rare)",
            "ru": "ออ — (редко)"
          },
          "note": "о"
        },
        {
          "text": "อำ",
          "tr": [
            "ам",
            "ам",
            "am"
          ],
          "example": {
            "en": "อำ — (rare)",
            "ru": "อำ — (редко)"
          },
          "note": "ам"
        },
        {
          "text": "ใอ",
          "tr": [
            "ай",
            "ай",
            "ai"
          ],
          "example": {
            "en": "ใอ — syllable",
            "ru": "ใอ — слог"
          },
          "note": "ай"
        },
        {
          "text": "ไอ",
          "tr": [
            "ай",
            "ай",
            "ai"
          ],
          "example": {
            "en": "ไอ — syllable",
            "ru": "ไอ — слог"
          },
          "note": "ай"
        }
      ],
      "words": [
        {
          "text": "อยู่",
          "tr": [
            "ю:",
            "ю:",
            "yuu"
          ],
          "translation": {
            "en": "to be / to stay",
            "ru": "быть / находиться"
          }
        },
        {
          "text": "อาหาร",
          "tr": [
            "а:ха:н",
            "а:ха:н",
            "aahaan"
          ],
          "translation": {
            "en": "food",
            "ru": "еда"
          }
        },
        {
          "text": "อ่าน",
          "tr": [
            "а:н",
            "а:н",
            "aan"
          ],
          "translation": {
            "en": "to read",
            "ru": "читать"
          }
        },
        {
          "text": "อร่อย",
          "tr": [
            "аро:й",
            "ало:й",
            "arooi"
          ],
          "translation": {
            "en": "delicious",
            "ru": "вкусный"
          }
        }
      ],
      "phrases": [
        {
          "text": "อยู่ที่ไหน",
          "tr": [
            "ю: тхи: най",
            "ю: ти: най",
            "yuu thii nai"
          ],
          "translation": {
            "en": "Where are you?",
            "ru": "Где ты?"
          }
        },
        {
          "text": "อาหารอร่อย",
          "tr": [
            "а:ха:н аро:й",
            "а:ха:н ало:й",
            "aahaan arooi"
          ],
          "translation": {
            "en": "delicious food",
            "ru": "вкусная еда"
          }
        }
      ]
    },
    {
      "symbol": "ฮ",
      "name": "ฮอ นกฮูก",
      "tr": [
        "х",
        "х",
        "h"
      ],
      "meaning": {
        "en": "owl",
        "ru": "сова"
      },
      "syllables": [
        {
          "text": "ฮะ",
          "tr": [
            "а",
            "ха",
            "a"
          ],
          "example": {
            "en": "ฮะ — (rare)",
            "ru": "ฮะ — (редко)"
          },
          "note": "ха"
        },
        {
          "text": "ฮา",
          "tr": [
            "а:",
            "ха:",
            "aa"
          ],
          "example": {
            "en": "ฮา — (rare)",
            "ru": "ฮา — (редко)"
          },
          "note": "ха:"
        },
        {
          "text": "ฮิ",
          "tr": [
            "и",
            "хи",
            "i"
          ],
          "example": {
            "en": "ฮิ — (rare)",
            "ru": "ฮิ — (редко)"
          },
          "note": "хи"
        },
        {
          "text": "ฮี",
          "tr": [
            "и:",
            "хи:",
            "ii"
          ],
          "example": {
            "en": "ฮี — (rare)",
            "ru": "ฮี — (редко)"
          },
          "note": "хи:"
        },
        {
          "text": "ฮุ",
          "tr": [
            "у",
            "ху",
            "u"
          ],
          "example": {
            "en": "ฮุ — (rare)",
            "ru": "ฮุ — (редко)"
          },
          "note": "ху"
        },
        {
          "text": "ฮู",
          "tr": [
            "у:",
            "ху:",
            "uu"
          ],
          "example": {
            "en": "ฮู — (rare)",
            "ru": "ฮู — (редко)"
          },
          "note": "ху:"
        },
        {
          "text": "เฮะ",
          "tr": [
            "э",
            "хэ",
            "e"
          ],
          "example": {
            "en": "เฮะ — (rare)",
            "ru": "เฮะ — (редко)"
          },
          "note": "хэ"
        },
        {
          "text": "เฮ",
          "tr": [
            "э:",
            "хэ:",
            "ee"
          ],
          "example": {
            "en": "เฮ — (rare)",
            "ru": "เฮ — (редко)"
          },
          "note": "хэ:"
        },
        {
          "text": "แฮะ",
          "tr": [
            "э",
            "хэ",
            "ae"
          ],
          "example": {
            "en": "แฮะ — (rare)",
            "ru": "แฮะ — (редко)"
          },
          "note": "хэ"
        },
        {
          "text": "แฮ",
          "tr": [
            "э:",
            "хэ:",
            "aae"
          ],
          "example": {
            "en": "แฮ — (rare)",
            "ru": "แฮ — (редко)"
          },
          "note": "хэ:"
        },
        {
          "text": "โฮะ",
          "tr": [
            "о",
            "хо",
            "o"
          ],
          "example": {
            "en": "โฮะ — (rare)",
            "ru": "โฮะ — (редко)"
          },
          "note": "хо"
        },
        {
          "text": "โฮ",
          "tr": [
            "о:",
            "хо:",
            "oo"
          ],
          "example": {
            "en": "โฮ — (rare)",
            "ru": "โฮ — (редко)"
          },
          "note": "хо:"
        },
        {
          "text": "ฮอ",
          "tr": [
            "о",
            "хо",
            "aw"
          ],
          "example": {
            "en": "ฮอ — (rare)",
            "ru": "ฮอ — (редко)"
          },
          "note": "хо"
        },
        {
          "text": "ฮำ",
          "tr": [
            "ам",
            "хам",
            "am"
          ],
          "example": {
            "en": "ฮำ — (rare)",
            "ru": "ฮำ — (редко)"
          },
          "note": "хам"
        },
        {
          "text": "ใฮ",
          "tr": [
            "ай",
            "хай",
            "ai"
          ],
          "example": {
            "en": "ใฮ — syllable",
            "ru": "ใฮ — слог"
          },
          "note": "хай"
        },
        {
          "text": "ไฮ",
          "tr": [
            "ай",
            "хай",
            "ai"
          ],
          "example": {
            "en": "ไฮ — syllable",
            "ru": "ไฮ — слог"
          },
          "note": "хай"
        }
      ],
      "words": [
        {
          "text": "ฮา",
          "tr": [
            "ха:",
            "ха:",
            "haa"
          ],
          "translation": {
            "en": "to laugh (ha-ha)",
            "ru": "смеяться (ха-ха)"
          }
        },
        {
          "text": "ฮิต",
          "tr": [
            "хит",
            "хит",
            "hit"
          ],
          "translation": {
            "en": "hit (loanword)",
            "ru": "хит (заимств.)"
          }
        },
        {
          "text": "ฮอร์โมน",
          "tr": [
            "хо:мон",
            "хо:мон",
            "hoomon"
          ],
          "translation": {
            "en": "hormone",
            "ru": "гормон"
          }
        },
        {
          "text": "ฮีโร่",
          "tr": [
            "хиро:",
            "хило:",
            "hiiro"
          ],
          "translation": {
            "en": "hero (loanword)",
            "ru": "герой (заимств.)"
          }
        }
      ],
      "phrases": [
        {
          "text": "ฮาๆ",
          "tr": [
            "ха: ха:",
            "ха: ха:",
            "haa haa"
          ],
          "translation": {
            "en": "ha-ha (laughter)",
            "ru": "ха-ха (смех)"
          }
        },
        {
          "text": "—",
          "tr": [
            "—",
            "—",
            "—"
          ],
          "translation": {
            "en": "mainly in loanwords",
            "ru": "в основном в заимствованных словах"
          }
        }
      ]
    }
  ],
  "numbers": [
    {
      "value": "1",
      "text": "หนึ่ง",
      "tr": [
        "нынг",
        "нынг",
        "nueng"
      ],
      "translation": {
        "en": "one",
        "ru": "один"
      }
    },
    {
      "value": "2",
      "text": "สอง",
      "tr": [
        "сонг",
        "сонг",
        "song"
      ],
      "translation": {
        "en": "two",
        "ru": "два"
      }
    },
    {
      "value": "3",
      "text": "สาม",
      "tr": [
        "сам",
        "сам",
        "sam"
      ],
      "translation": {
        "en": "three",
        "ru": "три"
      }
    },
    {
      "value": "4",
      "text": "สี่",
      "tr": [
        "си:",
        "си:",
        "si"
      ],
      "translation": {
        "en": "four",
        "ru": "четыре"
      }
    },
    {
      "value": "5",
      "text": "ห้า",
      "tr": [
        "ха:",
        "ха:",
        "ha"
      ],
      "translation": {
        "en": "five",
        "ru": "пять"
      }
    },
    {
      "value": "6",
      "text": "หก",
      "tr": [
        "хок",
        "хок",
        "hok"
      ],
      "translation": {
        "en": "six",
        "ru": "шесть"
      }
    },
    {
      "value": "7",
      "text": "เจ็ด",
      "tr": [
        "чет",
        "чет",
        "chet"
      ],
      "translation": {
        "en": "seven",
        "ru": "семь"
      }
    },
    {
      "value": "8",
      "text": "แปด",
      "tr": [
        "пэ:т",
        "пэ:т",
        "paet"
      ],
      "translation": {
        "en": "eight",
        "ru": "восемь"
      }
    },
    {
      "value": "9",
      "text": "เก้า",
      "tr": [
        "као",
        "као",
        "kao"
      ],
      "translation": {
        "en": "nine",
        "ru": "девять"
      }
    },
    {
      "value": "10",
      "text": "สิบ",
      "tr": [
        "сип",
        "сип",
        "sip"
      ],
      "translation": {
        "en": "ten",
        "ru": "десять"
      }
    },
    {
      "value": "100",
      "text": "ร้อย",
      "tr": [
        "рой",
        "рой",
        "roi"
      ],
      "translation": {
        "en": "hundred",
        "ru": "сто"
      }
    },
    {
      "value": "1000",
      "text": "พัน",
      "tr": [
        "пан",
        "пан",
        "phan"
      ],
      "translation": {
        "en": "thousand",
        "ru": "тысяча"
      }
    }
  ]
});
