export const schuzka = {
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
        "Účelem schůzky je seznámit klienta s naší nabídkou",
        "Tvým cílem je zaujmout klienta",
        "Poukázat na možnosti jeho úspor v domácnosti",
        "Dohodni se na smlouvě s klientem",
        "Reálná schůzka může trvat 45 až 60 minut, zde to zvládneš během pár minut",
        "Osobní chůzka ma mnohem vyšší úspěšnost, než telefonát",
        "Při komunikaci s klientem nezapomeň na úsměv a přátelský přístup",
        "Dosáhni co nejlepšího výsledku při schůzce"       
    ],
    "story": [
        {
            "id": 1,
            "refId": 2, 
            "prolog": {
                "sentences": [
                    {
                        "sentence": "Obchodní schůzka se bude týkat projektového řešení MZÚ společnosti Optimal Energy" 
                    },
                    {
                        "sentence": "Schůzka byla sjednaná telefonem dne 25.03.2099 a bude se konat 31.03. 2099 v 10.00 v kanceláři Samuela Nováka."
                    },
                    {
                        "sentence": "Údaje o virtuálním zákaznikovi"
                    },
                    {
                        "sentence": "Stahuji z databáze..."
                    },
                    {
                        "sentence": "Údaje stáženy."
                    }
                ]
            }
        },
        {
            "id": 2,
            "refId": 3,
            "prolog": {
                "sentences": [
                    {
                        "sentence": "Jméno: Samuel Novák" 
                    },
                    {
                        "sentence": "Typ: Cyber Humanoid" 
                    },
                    {
                        "sentence": "Věk: 37 let" 
                    },
                    {
                        "sentence": "Předpokládané IQ: 6 000" 
                    },
                    {
                        "sentence": "Ženatý: ANO" 
                    },
                    {
                        "sentence": "Firmu CyberTech zastupuje již 415 let" 
                    }
                ]
            }
        },
        {
            "id": 3,
            "refId": 4,
            "prolog": {
                "sentences": [
                    {
                        "sentence" : "Jsi právě na cestě na schůzku s klientem. Místo schůzky je v kanceláři klienta. Sídlo společnosti je blízko tvého bydliště. Na místo vyrazíš s časovou rezervou, tak aby jsi nebyl v časovém presu. Na schůzku vyrážíš s klidnou hlavou a úsměvem na tváři."
                    }
                ]
            },
            "actions": {
                "sentences": [
                    {
                        "sentence": "Vyjedeš výtahem do osmého patra a zazvoním na zvonek kanceláře",
                        "value": 5
                    },
                    {
                        "sentence": "Půjdeš po požárním schodišti až do osmého patra a najdeš kancelář",
                        "value": 3
                    },
                    {
                        "sentence": "Dáš si kafe z automatu a počkáš až někdo půjde kolem na cestu",
                        "refId": 301
                    }
                ]
            }
        },
        {
            "id": 4,
            "refId": 5,
            "prolog": {
                "sentences": [
                    {
                        "sentence": "Prochazíš dlouhou chodbou a hledáš kancelář číslo 45. Na konci chodby jsou velké prosklené dveře s číslem 45"
                    },
                    {
                        "sentence": "Přes sklo vidíš postavu uvnitř, co udělaš?"
                    }
                ]
            },
            "actions": {
                "sentences": [
                    {
                        "sentence": "Řádně zaklepu, počkám na odpověď a pak vejdu. Pozdravím a představím se",
                        "value": 5
                    },
                    {
                        "sentence": "Zaklepu a otevřu dveře, slušně se představím, ale zapomenu pozdravit",
                        "value": 3
                    },
                    {
                        "sentence": "Vtrhnu dovnitř a vyslovím \"čau, tak jsem tu\"",
                        "value": 0
                    }
                ]
            }
        },
        {
            "id": 5,
            "refId": 6,
            "prolog": {
                "sentences": [
                    {
                        "sentence": "S klientem si podáme ruce, vyzve tě aby sis odložil"
                    },
                    {
                        "sentence": "Mohu nabídnotu něco k pití?"
                    }
                ]
            },
            "actions": {
                "sentences": [
                    {
                        "sentence": "Kávu prosím",
                        "value": 5
                    },
                    {   
                        "sentence": "Ne, děkuji",
                        "value": 5
                    },
                    {
                        "sentence": "Dal bych si pivo",
                        "refId": 501
                    }
                ]
            }
        },
        {
            "id": 301,
            "refId": 302,
            "prolog": {
                "sentences": [
                    {
                        "sentence": "Pomaličku sis vychutnal svoji kávu z automatu"
                    },
                    {
                        "sentence": "Zeptáš se náhodného kolemjdoucího"
                    },
                    {
                        "sentence": "Máš velké štěstí"
                    },
                    {
                        "sentence": "Náhodný kolemjdoucí tě zavedl za tvým klientem do kanceláře"
                    }
                ]
            }
        },
        {
            "id": 302,
            "refId": 303,
            "prolog": {
                "type": "answer",
                "sentences": [
                    {
                        "sentence": "Jaká byla cesta"
                    },
                    {  
                        "sentence": "Máte přes 30 minut zpoždění"
                    },
                    {
                        "sentence": "Nějaké problémy na cestě?"
                    }
                ]
            } ,
            "actions": {
                "sentences": [
                    {
                        "sentence": "Velice se omlouvám, neodhadl jsem dobu cesty, nezlobte se na mě prosím",
                        "value": 3
                    },
                    {
                        "sentence": "Pardon, vícekrát se to nestane, jsme přece jenom lidi",
                        "value": 1
                    },
                    {
                        "sentence": "Zasekl jsem na eskalátorech, není to moje vina",
                        "value": 0
                    }
                ]
            }
        },
        {
            "id": 303,
            "refId": 7,
            "prolog": {
                "type": "answer",
                "sentences": [
                    {
                        "sentence": "No tak dobrá"
                    },
                    {  
                        "sentence": "Tak co pro mě máte"
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
                        "sentence": "Posadťe se prosím"
                    },
                    {
                        "sentence": "Tak co pro mě máte?"
                    }
                ]
            }
        },
        {
            "id": 7,
            "refId": 8,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "Bavili jsme se v telefonu, že by Vás zajímala úspora na energiích."
                    },
                    {
                        "sentence": "Je to tak? Takže rozumím tomu dobře, že byste rád ušetřil na energiích?"
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
                        "sentence": "Ano, to je pravda, prosím řeknete mi více"
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
                        "sentence": "Vysvětlím tedy"
                    },
                    {
                        "sentence": "Jedná se Optimalizaci elektřiny, distribučních sazeb a jističů. To znamená, ţe se podíváme, jestli zbytečně nepřeplácíte na dodávce elektřiny. A zároveň zkontrolujeme, jestli nemáte špatně nastavenou sazbu a zbytečně velkýjistič."
                    },
                    {
                        "sentence": "Pokud ano, zařídíme změnu."
                    }
                ]
            }
        },
        {
            "id": 10,
            "refId": 11,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "Dám Vám praktickou ukázku"
                    }, 
                    {
                        "sentence": "Vaše současné světlo odebírá 100W"
                    },
                    {
                        "sentence": "Když vyměním žárovku, odebírá 10W"
                    }
                ]
            },
            "actions": {
                 "sentences": [
                    {
                        "sentence": "Ušetříte tedy 150%",
                        "refId": 901
                    }, 
                    {
                        "sentence": "Vy tedy ušetříte 90% na svícení a můžete svítit 10x déle za stejné peníze",
                        "value": 5 
                    },
                    {
                        "sentence": "Můžete tedy svítit 12x déle za stejné peníze",
                        "refId": 901
                    }
                ]
            }
        },
        { 
            "id": 11,
            "refId": 12,
            "prolog": {
                "type": "answer",
                "sentences": [
                    {
                        "sentence": "To zní dobře!"
                    }
                ]
            }
        },
        {
            "id": 901,
            "refId": 902,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "Hmm..."
                    },
                    {
                        "sentence": "Počkat, to mi nesedí, vy mi tu lžete a vymýšlíte si!!!"
                    },
                    {
                        "sentence": "My už si nemáme co říct, nashle."
                    }
                ]
            }
        },
        {
            "id": 902,
            "finish": "error",
            "prolog": {
                "sentences": [
                    {
                        "sentence": "Klientovi nikdy nelžeme!"
                    },
                    {
                        "sentence": "Při schůzce s klientem jsi udělal fatální chybu, prosím opakuj schůzku s klientem"
                    }
                ]
            }
        },
        {
            "id": 12,
            "refId": 13,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "Pojďme tedy spočítat Vaši celkovou úsporu"
                    },
                    {
                        "sentence": "Reálná úspora činí 8000 Kč na rok"
                    }
                ]
            },
            "actions": {
                "sentences": [
                    {
                        "sentence": "To znamená, že úspora za deset let bude 800 000 Kč",
                        "refId": 902
                    },
                    {
                        "sentence": "Úspora činí 80 000 Kč za deset let",
                        "value": 5
                    },
                    {
                        "sentence": "Úspora činí 240 000 Kč za deset let a to se vyplatí!",
                        "refId": 902
                    }
                ]
            }
        },
        {
            "id": 13,
            "refId": 14,
            "prolog": {
                "type": "answer",
                "sentences": [
                    {
                        "sentence": "Úžasné, co mám tedy podepsat?"
                    }
                ]
            }
        },
        {
            "id": 14,
            "refId": 15,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "Zde máte detaily objednávky"
                    },
                    {
                        "sentence": "Vše si prosím zkontrolujte zda vše sedí"
                    },
                    {
                        "sentence": "A prosím zde podepište"
                    }
                ]
            }
        },
        {
            "id": 15,
            "refId": 16,
            "prolog": {
                "type": "notice",
                "sentences": [
                    {
                        "sentence": "Děkuji, to bude vše"
                    },
                    {
                        "sentence": "Věřím, že budete s naší úsporou spokojen"
                    },
                    {
                        "sentence": "Nabízíme i ostatní služby, kdyby Vás zajímaly další úspory"
                    }     
                ]
            }
        },
        {
            "id": 16,
            "finish": "success",
            "prolog": {
                "sentences": [
                    {
                        "sentence": "Úspěšně jsi dokončil schůzku s klientem"
                    }
                ]
            }
        },
        {
            "id": 501,
            "finish": "error",
            "prolog": {
                "sentences": [
                    {
                        "sentence": "Na schůzce s klientem není vhodné požívat alkohol"
                    },
                    {
                        "sentence": "Při schůzce s klientem jsi udělal fatální chybu, prosím opakuj schůzku s klientem"
                    }
                ]
            }
        }
    ]
}