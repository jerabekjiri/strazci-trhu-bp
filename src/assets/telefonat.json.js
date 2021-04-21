export const story = {
    "loading": [
        "Načítám",
        "Generuji virtuální prostředí",
        "Vytvářím imaginárního zákazníka",
        "Sestavuji příběh",
        "Kalibruji úroveň obtížnosti",
        "Připravuji kávu",
        "Navazuji spojení"
    ],
    "prolog": [
        "Účelem sjednání termínu je sjednat termín schůzky",
        "Tvým cílem je zaujmout našeho potencionálního zákazníka",
        "Domluv si přesný čas osobní schůzky",
        "Dosáhni co nejlepšího výsledku při telefonátu"        
    ],
    "story": [
        {
            "id": 1,
            "refId": 2,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "Voláš zákazníkovi na mobilu" 
                    },
                    {
                        "sentence": "Vyčkáváš zda hovor zvedne"
                    },
                    {
                        "sentence": "Hovor byl úspěšně zvednut"
                    }
                ]
            },
            "actions": {
                "sentences": [
                    {
                        "sentence": "Dobrý den pane Nováku, u telefonu {{user}}, mohu s Vámi dvě až tři minuty mluvit?",
                        "value": 5
                    },
                    {
                        "sentence": "Zdravím pane Nováku,  poslouchejte mě , mám pro Vás nabídku",
                        "value": 3
                    },
                    {
                        "sentence": "Čus, hele ty tam, poslouchej, jestli chceš ušetřit, tak nezavěšuj.",
                        "refId": 20
                    }
                ]
            }
        },
        {    
            "id": 2,
            "refId": 3,
            "prolog": {
                "type": "answer",
                "sentences": [
                    {
                        "sentence": "Ano co potřebujete?"
                    }
                ]
            }
        },
        {
            "id": 3,
            "refId": 4,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "Pane Nováku, my se sice neznáme"
                    },
                    {
                        "sentence": "ale máme společného známého – pana Dvořáka"
                    },
                    {
                        "sentence": "Znáte ho?"
                    }
                ]
            }
        },
        {
            "id": 4,
            "refId": 5,
            "prolog": {
                "type": "answer",
                "sentences": [
                    {
                        "sentence": "Ano"
                    }  
                ]
            }
        },
        {
            "id": 5,
            "refId": 6,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "Tomu jsem v rámci unikátního projektu MZÚ ušetřil 80 000 korun"
                    },
                    {
                        "sentence": "Dal mi na Vás číslo, abych Vám určitě zavolal, že Vás to taky bude zajímat"
                    },
                    {
                        "sentence": "Takže volám, abychom se domluvili, kdy se potkáme"
                    }
                ]
            }
        },
        {
            "id": 6,
            "refId": 7,
            "prolog": {
                "type": "answer",
                "sentences": [
                    {
                        "sentence": "No a o co se jedná"
                    }
                ]
            },
            "actions": {
                "type": "notice",
                "sentences": [ 
                    {
                        "sentence": "Jedná se o projekt Modrozelená úspora, věřím že se Vám tato nábidka bude líbit.",
                        "refId": 8
                    },
                    {
                        "sentence": "Do toho vám nic není.",
                        "refId": 20
                    }
                ]
            }
        },
        {
            "id": 8,
            "refId": 9,
            "prolog": {
                "type": "answer",
                "sentences": [
                    {
                        "sentence": "tak tedy teď jste mě dostal, poslouchám"
                    }
                ]
            }
        },
        {
            "id": 9,
            "refId": 10,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "No tak právě proto volám. "
                    },
                    {
                        "sentence": "Je to záležitost,kterou není možné řešit po telefonu."
                    },
                    {
                        "sentence": "Je potřebase potkat osobně."
                    },
                    {
                        "sentence": "Kdy se Vám to s partnerkou hodí?"
                    }          
                ]
            }
        },
        {
            "id": 10,
            "refId": 11,
            "prolog": {
                "type": "answer",
                "sentences": [
                    {
                        "sentence": "Mohli bychom tento čtvrtek"
                    }
                ]
            }
        },
        {
            "id": 11,
            "refId": 12,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "Tak já si píšu do diáře, také si to prosím zapište, ať na sebe nezapomeneme"
                    },
                    {
                        "sentence": "Abychom se nezdržovali a bavili konkrétně, nachystejte si roční vyúčtování za elektřinu, plyn a vodu."
                    }
                ]
            },
            "actions": {
                "sentences": [
                    {
                        "sentence": "Naslyšenou, těším se na Vás.",
                        "value": 5
                    },
                    {
                        "sentence": "Nashle",
                        "value": 3
                    },
                    {
                        "sentence" : "Čus",
                        "value": 0
                    }  
                ]
            }
        },
        {
            "id": 12,
            "finish": "success",
            "prolog": {
                "sentences": [
                    {
                        "sentence": "Dokončil jsi hovor"
                    }
                ]
            }
        },
        {
            "id": 20,
            "refId": 21,
            "prolog": {
                "type": "answer",
                "sentences": [
                    {
                        "sentence": "Prosím?" 
                    },
                    {
                        "sentence": "s vámi se již nehodlám bavit ani o minutu déle!"
                    }
                ]
            }
        },
        {
            "id": 21,
            "finish": "error",
            "prolog": {
                "sentences": [
                    {
                        "sentence": "Při komunikaci s uživatelem jsi udělal fatální chybu, prosím opakuj trenážer"
                    }
                ]
            }
        }
    ]
}