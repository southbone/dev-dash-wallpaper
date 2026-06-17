/**
 * data/languages/korean/dataset.js
 * Korean hangul course — 24 basic jamo with syllables, words and phrases.
 *
 * Follows the generic dataset schema documented in languages.js.
 */
ITW.Languages.register({
  "id": "korean",
  "name": {
    "en": "Korean",
    "ru": "Корейский"
  },
  "transcriptions": [
    {
      "id": "rr",
      "locale": "en",
      "label": {
        "en": "RR",
        "ru": "RR"
      }
    },
    {
      "id": "ru",
      "locale": "ru",
      "label": {
        "en": "RU",
        "ru": "РУ"
      }
    }
  ],
  "lessons": [
    {
      "symbol": "ㄱ",
      "name": "기역 (giyeok)",
      "tr": [
        "g/k",
        "к/г"
      ],
      "meaning": {
        "en": "consonant giyeok",
        "ru": "согласная киёк"
      },
      "syllables": [
        {
          "text": "가",
          "tr": [
            "ga",
            "ка"
          ]
        },
        {
          "text": "고",
          "tr": [
            "go",
            "ко"
          ]
        },
        {
          "text": "구",
          "tr": [
            "gu",
            "ку"
          ]
        },
        {
          "text": "기",
          "tr": [
            "gi",
            "ки"
          ]
        }
      ],
      "words": [
        {
          "text": "가다",
          "tr": [
            "gada",
            "када"
          ],
          "translation": {
            "en": "to go",
            "ru": "идти"
          }
        },
        {
          "text": "강",
          "tr": [
            "gang",
            "кан"
          ],
          "translation": {
            "en": "river",
            "ru": "река"
          }
        }
      ],
      "phrases": [
        {
          "text": "감사합니다",
          "tr": [
            "gamsahamnida",
            "камсахамнида"
          ],
          "translation": {
            "en": "thank you",
            "ru": "спасибо"
          }
        }
      ]
    },
    {
      "symbol": "ㄴ",
      "name": "니은 (nieun)",
      "tr": [
        "n",
        "н"
      ],
      "meaning": {
        "en": "consonant nieun",
        "ru": "согласная ниын"
      },
      "syllables": [
        {
          "text": "나",
          "tr": [
            "na",
            "на"
          ]
        },
        {
          "text": "노",
          "tr": [
            "no",
            "но"
          ]
        },
        {
          "text": "누",
          "tr": [
            "nu",
            "ну"
          ]
        },
        {
          "text": "니",
          "tr": [
            "ni",
            "ни"
          ]
        }
      ],
      "words": [
        {
          "text": "나무",
          "tr": [
            "namu",
            "наму"
          ],
          "translation": {
            "en": "tree",
            "ru": "дерево"
          }
        },
        {
          "text": "눈",
          "tr": [
            "nun",
            "нун"
          ],
          "translation": {
            "en": "eye, snow",
            "ru": "глаз, снег"
          }
        }
      ],
      "phrases": [
        {
          "text": "네, 맞아요",
          "tr": [
            "ne, majayo",
            "нэ, мадзаё"
          ],
          "translation": {
            "en": "Yes, that's right",
            "ru": "Да, верно"
          }
        }
      ]
    },
    {
      "symbol": "ㄷ",
      "name": "디귿 (digeut)",
      "tr": [
        "d/t",
        "т/д"
      ],
      "meaning": {
        "en": "consonant digeut",
        "ru": "согласная тигыт"
      },
      "syllables": [
        {
          "text": "다",
          "tr": [
            "da",
            "та"
          ]
        },
        {
          "text": "도",
          "tr": [
            "do",
            "то"
          ]
        },
        {
          "text": "두",
          "tr": [
            "du",
            "ту"
          ]
        },
        {
          "text": "디",
          "tr": [
            "di",
            "ти"
          ]
        }
      ],
      "words": [
        {
          "text": "돈",
          "tr": [
            "don",
            "тон"
          ],
          "translation": {
            "en": "money",
            "ru": "деньги"
          }
        },
        {
          "text": "달",
          "tr": [
            "dal",
            "таль"
          ],
          "translation": {
            "en": "moon",
            "ru": "луна"
          }
        }
      ],
      "phrases": [
        {
          "text": "다시 한번",
          "tr": [
            "dasi hanbeon",
            "таси ханбон"
          ],
          "translation": {
            "en": "One more time",
            "ru": "Ещё раз"
          }
        }
      ]
    },
    {
      "symbol": "ㄹ",
      "name": "리을 (rieul)",
      "tr": [
        "r/l",
        "р/ль"
      ],
      "meaning": {
        "en": "consonant rieul",
        "ru": "согласная риыль"
      },
      "syllables": [
        {
          "text": "라",
          "tr": [
            "ra",
            "ра"
          ]
        },
        {
          "text": "로",
          "tr": [
            "ro",
            "ро"
          ]
        },
        {
          "text": "루",
          "tr": [
            "ru",
            "ру"
          ]
        },
        {
          "text": "리",
          "tr": [
            "ri",
            "ри"
          ]
        }
      ],
      "words": [
        {
          "text": "라면",
          "tr": [
            "ramyeon",
            "рамён"
          ],
          "translation": {
            "en": "ramen",
            "ru": "рамён"
          }
        },
        {
          "text": "노래",
          "tr": [
            "norae",
            "норэ"
          ],
          "translation": {
            "en": "song",
            "ru": "песня"
          }
        }
      ],
      "phrases": [
        {
          "text": "사랑해요",
          "tr": [
            "saranghaeyo",
            "саранхэё"
          ],
          "translation": {
            "en": "I love you",
            "ru": "Я люблю"
          }
        }
      ]
    },
    {
      "symbol": "ㅁ",
      "name": "미음 (mieum)",
      "tr": [
        "m",
        "м"
      ],
      "meaning": {
        "en": "consonant mieum",
        "ru": "согласная миым"
      },
      "syllables": [
        {
          "text": "마",
          "tr": [
            "ma",
            "ма"
          ]
        },
        {
          "text": "모",
          "tr": [
            "mo",
            "мо"
          ]
        },
        {
          "text": "무",
          "tr": [
            "mu",
            "му"
          ]
        },
        {
          "text": "미",
          "tr": [
            "mi",
            "ми"
          ]
        }
      ],
      "words": [
        {
          "text": "물",
          "tr": [
            "mul",
            "муль"
          ],
          "translation": {
            "en": "water",
            "ru": "вода"
          }
        },
        {
          "text": "몸",
          "tr": [
            "mom",
            "мом"
          ],
          "translation": {
            "en": "body",
            "ru": "тело"
          }
        }
      ],
      "phrases": [
        {
          "text": "맛있어요",
          "tr": [
            "masisseoyo",
            "масиссоё"
          ],
          "translation": {
            "en": "It's delicious",
            "ru": "Вкусно"
          }
        }
      ]
    },
    {
      "symbol": "ㅂ",
      "name": "비읍 (bieup)",
      "tr": [
        "b/p",
        "п/б"
      ],
      "meaning": {
        "en": "consonant bieup",
        "ru": "согласная пиып"
      },
      "syllables": [
        {
          "text": "바",
          "tr": [
            "ba",
            "па"
          ]
        },
        {
          "text": "보",
          "tr": [
            "bo",
            "по"
          ]
        },
        {
          "text": "부",
          "tr": [
            "bu",
            "пу"
          ]
        },
        {
          "text": "비",
          "tr": [
            "bi",
            "пи"
          ]
        }
      ],
      "words": [
        {
          "text": "밥",
          "tr": [
            "bap",
            "пап"
          ],
          "translation": {
            "en": "rice, meal",
            "ru": "рис, еда"
          }
        },
        {
          "text": "바다",
          "tr": [
            "bada",
            "пада"
          ],
          "translation": {
            "en": "sea",
            "ru": "море"
          }
        }
      ],
      "phrases": [
        {
          "text": "반갑습니다",
          "tr": [
            "bangapseumnida",
            "пангапсымнида"
          ],
          "translation": {
            "en": "Nice to meet you",
            "ru": "Приятно познакомиться"
          }
        }
      ]
    },
    {
      "symbol": "ㅅ",
      "name": "시옷 (siot)",
      "tr": [
        "s",
        "с"
      ],
      "meaning": {
        "en": "consonant siot",
        "ru": "согласная сиот"
      },
      "syllables": [
        {
          "text": "사",
          "tr": [
            "sa",
            "са"
          ]
        },
        {
          "text": "소",
          "tr": [
            "so",
            "со"
          ]
        },
        {
          "text": "수",
          "tr": [
            "su",
            "су"
          ]
        },
        {
          "text": "시",
          "tr": [
            "si",
            "си"
          ]
        }
      ],
      "words": [
        {
          "text": "사람",
          "tr": [
            "saram",
            "сарам"
          ],
          "translation": {
            "en": "person",
            "ru": "человек"
          }
        },
        {
          "text": "산",
          "tr": [
            "san",
            "сан"
          ],
          "translation": {
            "en": "mountain",
            "ru": "гора"
          }
        }
      ],
      "phrases": [
        {
          "text": "사람이 많아요",
          "tr": [
            "sarami manayo",
            "сарами манаё"
          ],
          "translation": {
            "en": "There are many people",
            "ru": "Много людей"
          }
        }
      ]
    },
    {
      "symbol": "ㅇ",
      "name": "이응 (ieung)",
      "tr": [
        "-/ng",
        "-/н"
      ],
      "meaning": {
        "en": "consonant ieung (silent / ng)",
        "ru": "согласная иын (немая / носовая н)"
      },
      "syllables": [
        {
          "text": "아",
          "tr": [
            "a",
            "а"
          ]
        },
        {
          "text": "오",
          "tr": [
            "o",
            "о"
          ]
        },
        {
          "text": "우",
          "tr": [
            "u",
            "у"
          ]
        },
        {
          "text": "이",
          "tr": [
            "i",
            "и"
          ]
        }
      ],
      "words": [
        {
          "text": "아이",
          "tr": [
            "ai",
            "аи"
          ],
          "translation": {
            "en": "child",
            "ru": "ребёнок"
          }
        },
        {
          "text": "영어",
          "tr": [
            "yeongeo",
            "ёнъо"
          ],
          "translation": {
            "en": "English language",
            "ru": "английский язык"
          }
        }
      ],
      "phrases": [
        {
          "text": "안녕하세요",
          "tr": [
            "annyeonghaseyo",
            "аннёнхасеё"
          ],
          "translation": {
            "en": "hello",
            "ru": "здравствуйте"
          }
        }
      ]
    },
    {
      "symbol": "ㅈ",
      "name": "지읒 (jieut)",
      "tr": [
        "j",
        "ч/дж"
      ],
      "meaning": {
        "en": "consonant jieut",
        "ru": "согласная чиыт"
      },
      "syllables": [
        {
          "text": "자",
          "tr": [
            "ja",
            "ча"
          ]
        },
        {
          "text": "조",
          "tr": [
            "jo",
            "чо"
          ]
        },
        {
          "text": "주",
          "tr": [
            "ju",
            "чу"
          ]
        },
        {
          "text": "지",
          "tr": [
            "ji",
            "чи"
          ]
        }
      ],
      "words": [
        {
          "text": "집",
          "tr": [
            "jip",
            "чип"
          ],
          "translation": {
            "en": "house",
            "ru": "дом"
          }
        },
        {
          "text": "자다",
          "tr": [
            "jada",
            "чада"
          ],
          "translation": {
            "en": "to sleep",
            "ru": "спать"
          }
        }
      ],
      "phrases": [
        {
          "text": "잘 가요",
          "tr": [
            "jal gayo",
            "чаль каё"
          ],
          "translation": {
            "en": "goodbye (to one leaving)",
            "ru": "до свидания (уходящему)"
          }
        }
      ]
    },
    {
      "symbol": "ㅊ",
      "name": "치읓 (chieut)",
      "tr": [
        "ch",
        "чх"
      ],
      "meaning": {
        "en": "consonant chieut",
        "ru": "согласная чхиыт"
      },
      "syllables": [
        {
          "text": "차",
          "tr": [
            "cha",
            "чха"
          ]
        },
        {
          "text": "초",
          "tr": [
            "cho",
            "чхо"
          ]
        },
        {
          "text": "추",
          "tr": [
            "chu",
            "чху"
          ]
        },
        {
          "text": "치",
          "tr": [
            "chi",
            "чхи"
          ]
        }
      ],
      "words": [
        {
          "text": "차",
          "tr": [
            "cha",
            "чха"
          ],
          "translation": {
            "en": "tea, car",
            "ru": "чай, машина"
          }
        },
        {
          "text": "책",
          "tr": [
            "chaek",
            "чхэк"
          ],
          "translation": {
            "en": "book",
            "ru": "книга"
          }
        }
      ],
      "phrases": [
        {
          "text": "차 한 잔",
          "tr": [
            "cha han jan",
            "ча хан джан"
          ],
          "translation": {
            "en": "A cup of tea",
            "ru": "Чашка чая"
          }
        }
      ]
    },
    {
      "symbol": "ㅋ",
      "name": "키읔 (kieuk)",
      "tr": [
        "k",
        "кх"
      ],
      "meaning": {
        "en": "consonant kieuk",
        "ru": "согласная кхиык"
      },
      "syllables": [
        {
          "text": "카",
          "tr": [
            "ka",
            "кха"
          ]
        },
        {
          "text": "코",
          "tr": [
            "ko",
            "кхо"
          ]
        },
        {
          "text": "쿠",
          "tr": [
            "ku",
            "кху"
          ]
        },
        {
          "text": "키",
          "tr": [
            "ki",
            "кхи"
          ]
        }
      ],
      "words": [
        {
          "text": "코",
          "tr": [
            "ko",
            "кхо"
          ],
          "translation": {
            "en": "nose",
            "ru": "нос"
          }
        },
        {
          "text": "커피",
          "tr": [
            "keopi",
            "кхопхи"
          ],
          "translation": {
            "en": "coffee",
            "ru": "кофе"
          }
        }
      ],
      "phrases": [
        {
          "text": "커피 주세요",
          "tr": [
            "keopi juseyo",
            "копхи джусэё"
          ],
          "translation": {
            "en": "Coffee, please",
            "ru": "Кофе, пожалуйста"
          }
        }
      ]
    },
    {
      "symbol": "ㅌ",
      "name": "티읕 (tieut)",
      "tr": [
        "t",
        "тх"
      ],
      "meaning": {
        "en": "consonant tieut",
        "ru": "согласная тхиыт"
      },
      "syllables": [
        {
          "text": "타",
          "tr": [
            "ta",
            "тха"
          ]
        },
        {
          "text": "토",
          "tr": [
            "to",
            "тхо"
          ]
        },
        {
          "text": "투",
          "tr": [
            "tu",
            "тху"
          ]
        },
        {
          "text": "티",
          "tr": [
            "ti",
            "тхи"
          ]
        }
      ],
      "words": [
        {
          "text": "토끼",
          "tr": [
            "tokki",
            "тхокки"
          ],
          "translation": {
            "en": "rabbit",
            "ru": "кролик"
          }
        },
        {
          "text": "타다",
          "tr": [
            "tada",
            "тхада"
          ],
          "translation": {
            "en": "to ride",
            "ru": "ехать (на транспорте)"
          }
        }
      ],
      "phrases": [
        {
          "text": "택시!",
          "tr": [
            "taeksi!",
            "тхэкси!"
          ],
          "translation": {
            "en": "Taxi!",
            "ru": "Такси!"
          }
        }
      ]
    },
    {
      "symbol": "ㅍ",
      "name": "피읖 (pieup)",
      "tr": [
        "p",
        "пх"
      ],
      "meaning": {
        "en": "consonant pieup",
        "ru": "согласная пхиып"
      },
      "syllables": [
        {
          "text": "파",
          "tr": [
            "pa",
            "пха"
          ]
        },
        {
          "text": "포",
          "tr": [
            "po",
            "пхо"
          ]
        },
        {
          "text": "푸",
          "tr": [
            "pu",
            "пху"
          ]
        },
        {
          "text": "피",
          "tr": [
            "pi",
            "пхи"
          ]
        }
      ],
      "words": [
        {
          "text": "팔",
          "tr": [
            "pal",
            "пхаль"
          ],
          "translation": {
            "en": "arm",
            "ru": "рука"
          }
        },
        {
          "text": "포도",
          "tr": [
            "podo",
            "пходо"
          ],
          "translation": {
            "en": "grapes",
            "ru": "виноград"
          }
        }
      ],
      "phrases": [
        {
          "text": "표 주세요",
          "tr": [
            "pyo juseyo",
            "пхё джусэё"
          ],
          "translation": {
            "en": "A ticket, please",
            "ru": "Билет, пожалуйста"
          }
        }
      ]
    },
    {
      "symbol": "ㅎ",
      "name": "히읗 (hieut)",
      "tr": [
        "h",
        "х"
      ],
      "meaning": {
        "en": "consonant hieut",
        "ru": "согласная хиыт"
      },
      "syllables": [
        {
          "text": "하",
          "tr": [
            "ha",
            "ха"
          ]
        },
        {
          "text": "호",
          "tr": [
            "ho",
            "хо"
          ]
        },
        {
          "text": "후",
          "tr": [
            "hu",
            "ху"
          ]
        },
        {
          "text": "히",
          "tr": [
            "hi",
            "хи"
          ]
        }
      ],
      "words": [
        {
          "text": "하늘",
          "tr": [
            "haneul",
            "ханыль"
          ],
          "translation": {
            "en": "sky",
            "ru": "небо"
          }
        },
        {
          "text": "한국",
          "tr": [
            "hanguk",
            "хангук"
          ],
          "translation": {
            "en": "Korea",
            "ru": "Корея"
          }
        }
      ],
      "phrases": [
        {
          "text": "화장실 어디예요",
          "tr": [
            "hwajangsil eodiyeyo",
            "хваджансиль одиеё"
          ],
          "translation": {
            "en": "Where's the toilet?",
            "ru": "Где туалет?"
          }
        }
      ]
    },
    {
      "symbol": "ㅏ",
      "name": "아 (a)",
      "tr": [
        "a",
        "а"
      ],
      "meaning": {
        "en": "vowel a",
        "ru": "гласная а"
      },
      "words": [
        {
          "text": "아침",
          "tr": [
            "achim",
            "ачхим"
          ],
          "translation": {
            "en": "morning",
            "ru": "утро"
          }
        },
        {
          "text": "사과",
          "tr": [
            "sagwa",
            "сагва"
          ],
          "translation": {
            "en": "apple",
            "ru": "яблоко"
          }
        }
      ],
      "syllables": [
        {
          "text": "가",
          "tr": [
            "ga",
            "ка"
          ]
        },
        {
          "text": "나",
          "tr": [
            "na",
            "на"
          ]
        },
        {
          "text": "다",
          "tr": [
            "da",
            "та"
          ]
        },
        {
          "text": "아",
          "tr": [
            "a",
            "а"
          ]
        }
      ],
      "phrases": [
        {
          "text": "아니요",
          "tr": [
            "aniyo",
            "аниё"
          ],
          "translation": {
            "en": "No",
            "ru": "Нет"
          }
        }
      ]
    },
    {
      "symbol": "ㅑ",
      "name": "야 (ya)",
      "tr": [
        "ya",
        "я"
      ],
      "meaning": {
        "en": "vowel ya",
        "ru": "гласная я"
      },
      "words": [
        {
          "text": "야구",
          "tr": [
            "yagu",
            "ягу"
          ],
          "translation": {
            "en": "baseball",
            "ru": "бейсбол"
          }
        },
        {
          "text": "이야기",
          "tr": [
            "iyagi",
            "ияги"
          ],
          "translation": {
            "en": "story",
            "ru": "рассказ"
          }
        }
      ],
      "syllables": [
        {
          "text": "갸",
          "tr": [
            "gya",
            "кя"
          ]
        },
        {
          "text": "야",
          "tr": [
            "ya",
            "я"
          ]
        },
        {
          "text": "냐",
          "tr": [
            "nya",
            "ня"
          ]
        },
        {
          "text": "랴",
          "tr": [
            "rya",
            "ря"
          ]
        }
      ],
      "phrases": [
        {
          "text": "야구 좋아해요",
          "tr": [
            "yagu joahaeyo",
            "ягу джоахэё"
          ],
          "translation": {
            "en": "I like baseball",
            "ru": "Люблю бейсбол"
          }
        }
      ]
    },
    {
      "symbol": "ㅓ",
      "name": "어 (eo)",
      "tr": [
        "eo",
        "о"
      ],
      "meaning": {
        "en": "vowel eo (open o)",
        "ru": "гласная о (открытая)"
      },
      "words": [
        {
          "text": "어머니",
          "tr": [
            "eomeoni",
            "омони"
          ],
          "translation": {
            "en": "mother",
            "ru": "мать"
          }
        },
        {
          "text": "언니",
          "tr": [
            "eonni",
            "онни"
          ],
          "translation": {
            "en": "older sister (for women)",
            "ru": "старшая сестра (для женщин)"
          }
        }
      ],
      "syllables": [
        {
          "text": "거",
          "tr": [
            "geo",
            "ко"
          ]
        },
        {
          "text": "너",
          "tr": [
            "neo",
            "но"
          ]
        },
        {
          "text": "어",
          "tr": [
            "eo",
            "о"
          ]
        },
        {
          "text": "머",
          "tr": [
            "meo",
            "мо"
          ]
        }
      ],
      "phrases": [
        {
          "text": "어서 오세요",
          "tr": [
            "eoseo oseyo",
            "осо осэё"
          ],
          "translation": {
            "en": "Welcome",
            "ru": "Добро пожаловать"
          }
        }
      ]
    },
    {
      "symbol": "ㅕ",
      "name": "여 (yeo)",
      "tr": [
        "yeo",
        "ё"
      ],
      "meaning": {
        "en": "vowel yeo",
        "ru": "гласная ё (открытая)"
      },
      "words": [
        {
          "text": "여름",
          "tr": [
            "yeoreum",
            "ёрым"
          ],
          "translation": {
            "en": "summer",
            "ru": "лето"
          }
        },
        {
          "text": "여자",
          "tr": [
            "yeoja",
            "ёджа"
          ],
          "translation": {
            "en": "woman",
            "ru": "женщина"
          }
        }
      ],
      "syllables": [
        {
          "text": "겨",
          "tr": [
            "gyeo",
            "кё"
          ]
        },
        {
          "text": "여",
          "tr": [
            "yeo",
            "ё"
          ]
        },
        {
          "text": "녀",
          "tr": [
            "nyeo",
            "нё"
          ]
        },
        {
          "text": "셔",
          "tr": [
            "syeo",
            "сё"
          ]
        }
      ],
      "phrases": [
        {
          "text": "여기요",
          "tr": [
            "yeogiyo",
            "ёгиё"
          ],
          "translation": {
            "en": "Over here",
            "ru": "Сюда (зову)"
          }
        }
      ]
    },
    {
      "symbol": "ㅗ",
      "name": "오 (o)",
      "tr": [
        "o",
        "о"
      ],
      "meaning": {
        "en": "vowel o",
        "ru": "гласная о"
      },
      "words": [
        {
          "text": "오늘",
          "tr": [
            "oneul",
            "оныль"
          ],
          "translation": {
            "en": "today",
            "ru": "сегодня"
          }
        },
        {
          "text": "오빠",
          "tr": [
            "oppa",
            "оппа"
          ],
          "translation": {
            "en": "older brother (for women)",
            "ru": "старший брат (для женщин)"
          }
        }
      ],
      "syllables": [
        {
          "text": "고",
          "tr": [
            "go",
            "ко"
          ]
        },
        {
          "text": "노",
          "tr": [
            "no",
            "но"
          ]
        },
        {
          "text": "오",
          "tr": [
            "o",
            "о"
          ]
        },
        {
          "text": "모",
          "tr": [
            "mo",
            "мо"
          ]
        }
      ],
      "phrases": [
        {
          "text": "오늘 좋아요",
          "tr": [
            "oneul joayo",
            "оныль джоаё"
          ],
          "translation": {
            "en": "Today is good",
            "ru": "Сегодня хорошо"
          }
        }
      ]
    },
    {
      "symbol": "ㅛ",
      "name": "요 (yo)",
      "tr": [
        "yo",
        "ё"
      ],
      "meaning": {
        "en": "vowel yo",
        "ru": "гласная ё"
      },
      "words": [
        {
          "text": "요리",
          "tr": [
            "yori",
            "ёри"
          ],
          "translation": {
            "en": "cooking",
            "ru": "готовка"
          }
        },
        {
          "text": "요일",
          "tr": [
            "yoil",
            "ёиль"
          ],
          "translation": {
            "en": "day of the week",
            "ru": "день недели"
          }
        }
      ],
      "syllables": [
        {
          "text": "교",
          "tr": [
            "gyo",
            "кё"
          ]
        },
        {
          "text": "요",
          "tr": [
            "yo",
            "ё"
          ]
        },
        {
          "text": "뇨",
          "tr": [
            "nyo",
            "нё"
          ]
        },
        {
          "text": "묘",
          "tr": [
            "myo",
            "мё"
          ]
        }
      ],
      "phrases": [
        {
          "text": "요리해요",
          "tr": [
            "yorihaeyo",
            "ёрихэё"
          ],
          "translation": {
            "en": "(I) cook",
            "ru": "Готовлю"
          }
        }
      ]
    },
    {
      "symbol": "ㅜ",
      "name": "우 (u)",
      "tr": [
        "u",
        "у"
      ],
      "meaning": {
        "en": "vowel u",
        "ru": "гласная у"
      },
      "words": [
        {
          "text": "우리",
          "tr": [
            "uri",
            "ури"
          ],
          "translation": {
            "en": "we",
            "ru": "мы"
          }
        },
        {
          "text": "누나",
          "tr": [
            "nuna",
            "нуна"
          ],
          "translation": {
            "en": "older sister (for men)",
            "ru": "старшая сестра (для мужчин)"
          }
        }
      ],
      "syllables": [
        {
          "text": "구",
          "tr": [
            "gu",
            "ку"
          ]
        },
        {
          "text": "누",
          "tr": [
            "nu",
            "ну"
          ]
        },
        {
          "text": "우",
          "tr": [
            "u",
            "у"
          ]
        },
        {
          "text": "무",
          "tr": [
            "mu",
            "му"
          ]
        }
      ],
      "phrases": [
        {
          "text": "우유 주세요",
          "tr": [
            "uyu juseyo",
            "ую джусэё"
          ],
          "translation": {
            "en": "Milk, please",
            "ru": "Молоко, пожалуйста"
          }
        }
      ]
    },
    {
      "symbol": "ㅠ",
      "name": "유 (yu)",
      "tr": [
        "yu",
        "ю"
      ],
      "meaning": {
        "en": "vowel yu",
        "ru": "гласная ю"
      },
      "words": [
        {
          "text": "유리",
          "tr": [
            "yuri",
            "юри"
          ],
          "translation": {
            "en": "glass",
            "ru": "стекло"
          }
        },
        {
          "text": "우유",
          "tr": [
            "uyu",
            "ую"
          ],
          "translation": {
            "en": "milk",
            "ru": "молоко"
          }
        }
      ],
      "syllables": [
        {
          "text": "규",
          "tr": [
            "gyu",
            "кю"
          ]
        },
        {
          "text": "유",
          "tr": [
            "yu",
            "ю"
          ]
        },
        {
          "text": "뉴",
          "tr": [
            "nyu",
            "ню"
          ]
        },
        {
          "text": "뮤",
          "tr": [
            "myu",
            "мю"
          ]
        }
      ],
      "phrases": [
        {
          "text": "유명해요",
          "tr": [
            "yumyeonghaeyo",
            "юмёнхэё"
          ],
          "translation": {
            "en": "It's famous",
            "ru": "Знаменито"
          }
        }
      ]
    },
    {
      "symbol": "ㅡ",
      "name": "으 (eu)",
      "tr": [
        "eu",
        "ы"
      ],
      "meaning": {
        "en": "vowel eu",
        "ru": "гласная ы"
      },
      "words": [
        {
          "text": "그림",
          "tr": [
            "geurim",
            "кырим"
          ],
          "translation": {
            "en": "picture",
            "ru": "картина"
          }
        },
        {
          "text": "이름",
          "tr": [
            "ireum",
            "ирым"
          ],
          "translation": {
            "en": "name",
            "ru": "имя"
          }
        }
      ],
      "syllables": [
        {
          "text": "그",
          "tr": [
            "geu",
            "кы"
          ]
        },
        {
          "text": "느",
          "tr": [
            "neu",
            "ны"
          ]
        },
        {
          "text": "으",
          "tr": [
            "eu",
            "ы"
          ]
        },
        {
          "text": "므",
          "tr": [
            "meu",
            "мы"
          ]
        }
      ],
      "phrases": [
        {
          "text": "그래요",
          "tr": [
            "geuraeyo",
            "кырэё"
          ],
          "translation": {
            "en": "That's so",
            "ru": "Так и есть"
          }
        }
      ]
    },
    {
      "symbol": "ㅣ",
      "name": "이 (i)",
      "tr": [
        "i",
        "и"
      ],
      "meaning": {
        "en": "vowel i",
        "ru": "гласная и"
      },
      "words": [
        {
          "text": "시간",
          "tr": [
            "sigan",
            "сиган"
          ],
          "translation": {
            "en": "time",
            "ru": "время"
          }
        },
        {
          "text": "김치",
          "tr": [
            "gimchi",
            "кимчхи"
          ],
          "translation": {
            "en": "kimchi",
            "ru": "кимчхи"
          }
        }
      ],
      "syllables": [
        {
          "text": "기",
          "tr": [
            "gi",
            "ки"
          ]
        },
        {
          "text": "니",
          "tr": [
            "ni",
            "ни"
          ]
        },
        {
          "text": "이",
          "tr": [
            "i",
            "и"
          ]
        },
        {
          "text": "미",
          "tr": [
            "mi",
            "ми"
          ]
        }
      ],
      "phrases": [
        {
          "text": "이거 뭐예요",
          "tr": [
            "igeo mwoyeyo",
            "иго мвоеё"
          ],
          "translation": {
            "en": "What is this?",
            "ru": "Что это?"
          }
        }
      ]
    }
  ],
  "numbers": [
    {
      "value": "1",
      "text": "일",
      "tr": [
        "il",
        "иль"
      ],
      "translation": {
        "en": "one",
        "ru": "один"
      }
    },
    {
      "value": "2",
      "text": "이",
      "tr": [
        "i",
        "и"
      ],
      "translation": {
        "en": "two",
        "ru": "два"
      }
    },
    {
      "value": "3",
      "text": "삼",
      "tr": [
        "sam",
        "сам"
      ],
      "translation": {
        "en": "three",
        "ru": "три"
      }
    },
    {
      "value": "4",
      "text": "사",
      "tr": [
        "sa",
        "са"
      ],
      "translation": {
        "en": "four",
        "ru": "четыре"
      }
    },
    {
      "value": "5",
      "text": "오",
      "tr": [
        "o",
        "о"
      ],
      "translation": {
        "en": "five",
        "ru": "пять"
      }
    },
    {
      "value": "6",
      "text": "육",
      "tr": [
        "yuk",
        "юк"
      ],
      "translation": {
        "en": "six",
        "ru": "шесть"
      }
    },
    {
      "value": "7",
      "text": "칠",
      "tr": [
        "chil",
        "чхиль"
      ],
      "translation": {
        "en": "seven",
        "ru": "семь"
      }
    },
    {
      "value": "8",
      "text": "팔",
      "tr": [
        "pal",
        "пхаль"
      ],
      "translation": {
        "en": "eight",
        "ru": "восемь"
      }
    },
    {
      "value": "9",
      "text": "구",
      "tr": [
        "gu",
        "ку"
      ],
      "translation": {
        "en": "nine",
        "ru": "девять"
      }
    },
    {
      "value": "10",
      "text": "십",
      "tr": [
        "sip",
        "сип"
      ],
      "translation": {
        "en": "ten",
        "ru": "десять"
      }
    },
    {
      "value": "100",
      "text": "백",
      "tr": [
        "baek",
        "пэк"
      ],
      "translation": {
        "en": "hundred",
        "ru": "сто"
      }
    },
    {
      "value": "1000",
      "text": "천",
      "tr": [
        "cheon",
        "чхон"
      ],
      "translation": {
        "en": "thousand",
        "ru": "тысяча"
      }
    }
  ]
});
