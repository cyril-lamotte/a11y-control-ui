import { writable} from "svelte/store";

export const CriteriaStore = writable([
    {
      "topic": "Images",
      "number": 1,
      "criteria": [{
          "criterium": {
            "number": 1,
            "title": "Chaque [image porteuse d’information](#image-porteuse-d-information) a-t-elle une [alternative textuelle](#alternative-textuelle-image) ?",
            "tests": {
              "1": [
                "Chaque image (balise `<img>` ou balise possédant l’attribut WAI-ARIA `role=\"img\"`) [porteuse d’information](#porteuse-d-information) a-t-elle une [alternative textuelle](#alternative-textuelle-image) ?"
              ],
              "2": [
                "Chaque [zone](#zone-d-une-image-reactive) d’une [image réactive](#image-reactive) (balise `<area>`) [porteuse d’information](#image-porteuse-d-information) a-t-elle une [alternative textuelle](#alternative-textuelle-image) ?"
              ],
              "3": [
                "Chaque bouton de type `image` (balise `<input>` avec l’attribut `type=\"image\"`) a-t-il une [alternative textuelle](#alternative-textuelle-image) ?"
              ],
              "4": [
                "Chaque [zone cliquable](#zone-cliquable) d’une image réactive côté serveur est-elle doublée d’un mécanisme utilisable quel que soit le dispositif de pointage utilisé et permettant d’accéder à la même destination ?"
              ],
              "5": [
                "Chaque image vectorielle (balise `<svg>`) [porteuse d’information](#image-porteuse-d-information), vérifie-t-elle ces conditions ?",
                "La balise `<svg>` possède un attribut WAI-ARIA `role=\"img\"` ;",
                "La balise `<svg>` a une [alternative textuelle](#alternative-textuelle-image)."
              ],
              "6": [
                "Chaque [image objet](#image-objet) (balise `<object>` avec l’attribut `type=\"image/…\"`) [porteuse d’information](#image-porteuse-d-information), vérifie-t-elle une de ces conditions ?",
                "La balise `<object>` possède une [alternative textuelle](#alternative-textuelle-image) et un attribut `role=\"img\"` ;",
                "L’élément `<object>` est immédiatement suivi d’un [lien ou bouton adjacent](#lien-ou-bouton-adjacent) permettant d’accéder à un [contenu alternatif](#contenu-alternatif) ;",
                "Un mécanisme permet à l’utilisateur de remplacer l’élément `<object>` par un [contenu alternatif](#contenu-alternatif)."
              ],
              "7": [
                "Chaque image embarquée (balise `<embed>` avec l’attribut `type=\"image/…\"`) [porteuse d’information](#image-porteuse-d-information), vérifie-t-elle une de ces conditions ?",
                "La balise `<embed>` possède une [alternative textuelle](#alternative-textuelle-image) et un attribut `role=\"img\"` ;",
                "L’élément `<embed>` est immédiatement suivi d’un [lien ou bouton adjacent](#lien-ou-bouton-adjacent) permettant d’accéder à un [contenu alternatif](#contenu-alternatif) ;",
                "Un mécanisme permet à l’utilisateur de remplacer l’élément `<embed>` par un [contenu alternatif](#contenu-alternatif)."
              ],
              "8": [
                "Chaque image bitmap (balise `<canvas>`) [porteuse d’information](#image-porteuse-d-information), vérifie-t-elle une de ces conditions  ?",
                "La balise `<canvas>` possède une [alternative textuelle](#alternative-textuelle-image) et un attribut `role=\"img\"` ;",
                "Un [contenu alternatif](#contenu-alternatif) est présent entre les balises `<canvas>` et `</canvas>` ;",
                "L‘élément `<canvas>` est immédiatement suivi d’un [lien ou bouton adjacent](#lien-ou-bouton-adjacent) permettant d’accéder à un [contenu alternatif](#contenu-alternatif) ;",
                "Un mécanisme permet à l’utilisateur de remplacer l’élément `<canvas>` par un [contenu alternatif](#contenu-alternatif)."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)"
                ]
              },
              {
                "techniques": [
                  "H36",
                  "H37",
                  "H53",
                  "F65",
                  "H24"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Chaque [image de décoration](#image-de-decoration) est-elle correctement ignorée par les technologies d’assistance ?",
            "tests": {
              "1": [
                "Chaque image (balise `<img>`) [de décoration](#image-de-decoration), sans [légende](#legende-d-image), vérifie-t-elle une de ces conditions ?",
                "La balise `<img>` possède un attribut `alt` vide (`alt=\"\"`) et est dépourvu de tout autre attribut permettant de fournir une [alternative textuelle](#alternative-textuelle-image) ;",
                "La balise `<img>` possède un attribut WAI-ARIA `aria-hidden=\"true\"` ou `role=\"presentation\"`."
              ],
              "2": [
                "Chaque [zone non cliquable](#zone-non-cliquable) (balise `<area>` sans attribut `href`) [de décoration](#image-de-decoration), vérifie-t-elle une de ces conditions ?",
                "La balise `<area>` possède un attribut `alt` vide (`alt=\"\"`) et est dépourvu de tout autre attribut permettant de fournir une [alternative textuelle](#alternative-textuelle-image) ;",
                "La balise `<area>` possède un attribut WAI-ARIA `aria-hidden=\"true\"` ou `role=\"presentation\"`."
              ],
              "3": [
                "Chaque [image objet](#image-objet) (balise `<object>` avec l’attribut `type=\"image/…\"`) [de décoration](#image-de-decoration), sans [légende](#legende-d-image), vérifie-t-elle ces conditions ?",
                "La balise `<object>` possède un attribut WAI-ARIA `aria-hidden=\"true\"` ;",
                "La balise `<object>` est dépourvu d’alternative textuelle ;",
                "Il n’y a aucun texte faisant office d’alternative textuelle entre `<object>` et `</object>`."
              ],
              "4": [
                "Chaque image vectorielle (balise `<svg>`) [de décoration](#image-de-decoration), sans [légende](#legende-d-image), vérifie-t-elle ces conditions ?",
                "La balise `<svg>` possède un attribut WAI-ARIA `aria-hidden=\"true\"` ;",
                "La balise `<svg>` et ses enfants sont dépourvus d’[alternative textuelle](#alternative-textuelle-image) ;",
                "Les balises `<title>` et `<desc>` sont absentes ou vides ;",
                "La balise `<svg>` et ses enfants sont dépourvus d’attribut `title`."
              ],
              "5": [
                "Chaque image bitmap (balise `<canvas>`) [de décoration](#image-de-decoration), sans [légende](#legende-d-image), vérifie-t-elle ces conditions ?",
                "La balise `<canvas>` possède un attribut WAI-ARIA `aria-hidden=\"true\"` ;",
                "La balise `<canvas>` et ses enfants sont dépourvus d’[alternative textuelle](#alternative-textuelle-image) ;",
                "Il n’y a aucun texte faisant office d’[alternative textuelle](#alternative-textuelle-image) entre `<canvas>` et `</canvas>`."
              ],
              "6": [
                "Chaque image embarquée (balise `<embed>` avec l’attribut `type=\"image/…\"`) [de décoration](#image-de-decoration), sans [légende](#legende-d-image), vérifie-t-elle ces conditions ?",
                "La balise `<embed>` possède un attribut WAI-ARIA `aria-hidden=\"true\"` ;",
                "La balise `<embed>` et ses enfants sont dépourvus d’[alternative textuelle](#alternative-textuelle-image)."
              ]
            },
            "technicalNote": [
              "Lorsqu'une image est associée à une [légende](#legende-d-image), la note technique WCAG recommande de prévoir systématiquement une [alternative textuelle](#alternative-textuelle-image) (cf. critère 1.9). Dans ce cas le critère 1.2 est non applicable.",
              "Dans le cas d'une image vectorielle (balise `<svg>`) de décoration qui serait affichée au travers d'un élément `<use href=\"...\">` enfant de l'élément `<svg>`, le test 1.2.4 s'appliquera également à l'élément `<svg>` associée par le biais de l'élément `<use>`.",
              "Un attribut WAI-ARIA `role=\"presentation\"` peut être utilisé sur les images de décoration et les zones non cliquables de décoration. Le rôle `\"none\"` introduit en ARIA 1.1 et synonyme du rôle `\"presentation\"` peut être aussi utilisé. Il reste préférable cependant d'utiliser le rôle `\"presentation\"` en attendant un support satisfaisant du rôle `\"none\"`."
            ],
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "H67",
                  "G196",
                  "C9",
                  "F39",
                  "F38",
                  "ARIA4",
                  "ARIA10"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "Pour chaque image [porteuse d’information](#image-porteuse-d-information) ayant une [alternative textuelle](#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque image (balise `<img>` ou balise possédant l’attribut WAI-ARIA `role=\"img\"`) [porteuse d’information](#image-porteuse-d-information), ayant une [alternative textuelle](#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?",
                "S’il est présent, le contenu de l’attribut `alt` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent."
              ],
              "2": [
                "Pour chaque [zone](#zone-d-une-image-reactive) (balise `<area>`) d’une [image réactive](#image-reactive) [porteuse d’information](#image-porteuse-d-information), ayant une [alternative textuelle](#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?",
                "S’il est présent, le contenu de l’attribut `alt` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent."
              ],
              "3": [
                "Pour chaque [bouton](#bouton-formulaire) de type `image` (balise `<input>` avec l’attribut `type=\"image\"`), ayant une [alternative textuelle](#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?",
                "S’il est présent, le contenu de l’attribut `alt` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent."
              ],
              "4": [
                "Pour chaque [image objet](#image-objet) (balise `<object>` avec l’attribut `type=\"image/…\"`) [porteuse d’information](#image-porteuse-d-information), ayant une [alternative textuelle](#alternative-textuelle-image) ou un [contenu alternatif](#contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ?",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;",
                "S’il est présent le [contenu alternatif](#contenu-alternatif) est pertinent."
              ],
              "5": [
                "Pour chaque image embarquée (balise `<embed>` avec l’attribut `type=\"image/…\"`) [porteuse d’information](#image-porteuse-d-information), ayant une [alternative textuelle](#alternative-textuelle-image) ou un [contenu alternatif](#contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ?",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;",
                "S’il est présent le [contenu alternatif](#contenu-alternatif) est pertinent."
              ],
              "6": [
                "Pour chaque image vectorielle (balise `<svg>`) [porteuse d’information](#image-porteuse-d-information), ayant une [alternative textuelle](#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?",
                "S’il est présent, le contenu de l'élément `<title>` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent."
              ],
              "7": [
                "Pour chaque image bitmap (balise `<canvas>`) [porteuse d’information](#image-porteuse-d-information), ayant une [alternative textuelle](#alternative-textuelle-image) ou un [contenu alternatif](#contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ?",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;",
                "S’il est présent le [contenu alternatif](#contenu-alternatif) est pertinent."
              ],
              "8": [
                "Pour chaque image bitmap (balise `<canvas>`) [porteuse d’information](#image-porteuse-d-information) et ayant  un [contenu alternatif](#contenu-alternatif) entre `<canvas>` et `</canvas>`, ce [contenu alternatif](#contenu-alternatif) est-il [correctement restitué par les technologies d’assistance](#correctement-restitue-par-les-technologies-d-assistance) ?"
              ],
              "9": [
                "Pour chaque image [porteuse d’information](#image-porteuse-d-information) et ayant une [alternative textuelle](#alternative-textuelle-image), l’[alternative textuelle](#alternative-textuelle-image) est-elle [courte et concise](#alternative-courte-et-concise) (hors cas particuliers) ?"
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particuliers lorsque l’image est utilisée comme [CAPTCHA](#captcha) ou comme [image-test](#image-test). Dans cette situation, où il n’est pas possible de donner une alternative pertinente sans détruire l’objet du CAPTCHA ou du test, le critère est non applicable.",
              "Note : le cas des CAPTCHA et des images-test est traité de manière spécifique par le critère 1.4."
            ],
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "G94",
                  "G95",
                  "F30",
                  "F71",
                  "G196",
                  "ARIA6",
                  "ARIA9",
                  "ARIA10"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 4,
            "title": "Pour chaque image utilisée comme [CAPTCHA](#captcha) ou comme [image-test](#image-test), ayant une [alternative textuelle](#alternative-textuelle-image), cette alternative permet-elle d’identifier la nature et la fonction de l’image ?",
            "tests": {
              "1": [
                "Pour chaque image (balise `<img>`) utilisée comme [CAPTCHA](#captcha) ou comme [image-test](#image-test), ayant une [alternative textuelle](#alternative-textuelle-image), cette alternative est-elle pertinente ?",
                "S’il est présent, le contenu de l’attribut `alt` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent."
              ],
              "2": [
                "Pour chaque zone (balise `<area>`) d’une image réactive utilisée comme [CAPTCHA](#captcha) ou comme [image-test](#image-test), ayant une [alternative textuelle](#alternative-textuelle-image), cette alternative est-elle pertinente ?",
                "S’il est présent, le contenu de l’attribut `alt` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent."
              ],
              "3": [
                "Pour chaque [bouton](#bouton-formulaire) de type image (balise `<input>` avec l’attribut `type=\"image\"`) utilisé comme [CAPTCHA](#captcha) ou comme [image-test](#image-test), ayant une [alternative textuelle](#alternative-textuelle-image), cette alternative est-elle pertinente ?",
                "S’il est présent, le contenu de l’attribut `alt` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent."
              ],
              "4": [
                "Pour chaque [image objet](#image-objet) (balise `<object>` avec l’attribut `type=\"image/…\"`) utilisée comme [CAPTCHA](#captcha) ou comme [image-test](#image-test), ayant une [alternative textuelle](#alternative-textuelle-image) ou un [contenu alternatif](#contenu-alternatif), cette alternative est-elle pertinente ?",
                "S’il est présent, le contenu de l’attribut `alt` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;",
                "S’il est présent le [contenu alternatif](#contenu-alternatif) est pertinent."
              ],
              "5": [
                "Pour chaque image embarquée (balise `<embed>` avec l’attribut `type=\"image/…\"`) utilisée comme [CAPTCHA](#captcha) ou comme [image-test](#image-test), ayant une [alternative textuelle](#alternative-textuelle-image) ou un [contenu alternatif](#contenu-alternatif), cette alternative est-elle pertinente ?",
                "S’il est présent, le contenu de l’attribut `alt` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;",
                "S’il est présent le [contenu alternatif](#contenu-alternatif) est pertinent."
              ],
              "6": [
                "Pour chaque image vectorielle (balise `<svg>`) utilisée comme [CAPTCHA](#captcha) ou comme [image-test](#image-test), ayant une [alternative textuelle](#alternative-textuelle-image), cette alternative est-elle pertinente ?",
                "S’il est présent, le contenu de l’attribut `alt` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent."
              ],
              "7": [
                "Pour chaque image bitmap (balise `<canvas>`) utilisée comme [CAPTCHA](#captcha) ou comme [image-test](#image-test), ayant une [alternative textuelle](#alternative-textuelle-image) ou un [contenu alternatif](#contenu-alternatif), cette alternative est-elle pertinente ?",
                "S’il est présent, le contenu de l’attribut `alt` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent ;",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` est pertinent ;",
                "S’il est présent le [contenu alternatif](#contenu-alternatif) est pertinent."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)"
                ]
              },
              {
                "techniques": [
                  "G100",
                  "G143"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 5,
            "title": "Pour chaque image utilisée comme [CAPTCHA](#captcha), une solution d’accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?",
            "tests": {
              "1": [
                "Chaque image (balises `<img>`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>` ou possédant un attribut WAI-ARIA `role=\"img\"`) utilisée comme [CAPTCHA](#captcha) vérifie-t-elle une de ces conditions ?",
                "Il existe une autre forme de [CAPTCHA](#captcha) non graphique, au moins ;",
                "Il existe une autre solution d’accès à la fonctionnalité qui est sécurisée par le [CAPTCHA](#captcha)."
              ],
              "2": [
                "Chaque bouton associé à une image (balise `input` avec l’attribut `type=\"image\"`) utilisée comme [CAPTCHA](#captcha) vérifie-t-il une de ces conditions ?",
                "Il existe une autre forme de [CAPTCHA](#captcha) non graphique, au moins ;",
                "Il existe une autre solution d’accès à la fonctionnalité sécurisée par le [CAPTCHA](#captcha)."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)"
                ]
              },
              {
                "techniques": [
                  "G144"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 6,
            "title": "Chaque image [porteuse d’information](#image-porteuse-d-information) a-t-elle, si nécessaire, une [description détaillée](#description-detaillee-image) ?",
            "tests": {
              "1": [
                "Chaque image (balise `<img>`) [porteuse d’information](#image-porteuse-d-information), qui nécessite une [description détaillée](#description-detaillee-image), vérifie-t-elle une de ces conditions ?",
                "Il existe un attribut `longdesc` qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la [description détaillée](#description-detaillee-image) ;",
                "Il existe une [alternative textuelle](#alternative-textuelle-image) contenant la référence à une [description détaillée](#description-detaillee-image) adjacente à l’image ;",
                "Il existe un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](#description-detaillee-image)."
              ],
              "2": [
                "Chaque [image objet](#image-objet) (balise `<object>` avec l’attribut `type=\"image/…\"`) [porteuse d’information](#image-porteuse-d-information), qui nécessite une [description détaillée](#description-detaillee-image), vérifie-t-elle une de ces conditions ?",
                "Il existe un attribut `longdesc` qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la [description détaillée](#description-detaillee-image) ;",
                "Il existe une [alternative textuelle](#alternative-textuelle-image) contenant la référence à une [description détaillée](#description-detaillee-image) adjacente à l’image ;",
                "Il existe un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](#description-detaillee-image)."
              ],
              "3": [
                "Chaque image embarquée (balise `<embed>`) [porteuse d’information](#image-porteuse-d-information), qui nécessite une [description détaillée](#description-detaillee-image), vérifie-t-elle une de ces conditions ?",
                "Il existe un attribut `longdesc` qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la [description détaillée](#description-detaillee-image) ;",
                "Il existe une [alternative textuelle](#alternative-textuelle-image) contenant la référence à une [description détaillée](#description-detaillee-image) adjacente à l’image ;",
                "Il existe un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](#description-detaillee-image)."
              ],
              "4": [
                "Chaque [bouton](#bouton-formulaire) de type image (balise `<input>` avec l’attribut `type=\"image\"`) [porteur d’information](#image-porteuse-d-information), qui nécessite une [description détaillée](#description-detaillee-image), vérifie-t-il une de ces conditions ?",
                "Il existe un attribut `longdesc` qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la [description détaillée](#description-detaillee-image) ;",
                "Il existe une [alternative textuelle](#alternative-textuelle-image) contenant la référence à une [description détaillée](#description-detaillee-image) adjacente à l’image ;",
                "Il existe un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](#description-detaillee-image)."
              ],
              "5": [
                "Chaque image vectorielle (balise `<svg>`) [porteuse d’information](#image-porteuse-d-information), qui nécessite une [description détaillée](#description-detaillee-image), vérifie-t-elle une de ces conditions ?",
                "Il existe un attribut WAI-ARIA `aria-label` contenant l’alternative textuelle et une référence à une [description détaillée](#description-detaillee-image) adjacente ;",
                "Il existe un attribut WAI-ARIA `aria-labelledby` associant un [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) faisant office d’alternative textuelle et un autre faisant office de [description détaillée](#description-detaillee-image) ;",
                "Il existe un attribut WAI-ARIA `aria-describedby` associant un [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) faisant office de [description détaillée](#description-detaillee-image) ;",
                "Il existe un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](#description-detaillee-image)."
              ],
              "6": [
                "Pour chaque image vectorielle (balise `<svg>`) [porteuse d’information](#image-porteuse-d-information), ayant une [description détaillée](#description-detaillee-image), la référence éventuelle à la [description détaillée](#description-detaillee-image) dans l’attribut WAI-ARIA `aria-label` et la [description détaillée](#description-detaillee-image) associée par l’attribut WAI-ARIA `aria-labelledby` ou `aria-describedby` sont-elles correctement restituées par les technologies d’assistance ?"
              ],
              "7": [
                "Chaque image bitmap (balise `<canvas>`), [porteuse d’information](#image-porteuse-d-information), qui nécessite une [description détaillée](#description-detaillee-image), vérifie-t-elle une de ces conditions ?",
                "Il existe un attribut WAI-ARIA `aria-label` contenant l’alternative textuelle et une référence à une [description détaillée](#description-detaillee-image) adjacente ;",
                "Il existe un attribut WAI-ARIA `aria-labelledby` associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de [description détaillée](#description-detaillee-image) ;",
                "Il existe un contenu textuel entre `<canvas>` et `</canvas>` faisant référence à une [description détaillée](#description-detaillee-image) adjacente à l’image bitmap ;",
                "Il existe un contenu textuel entre `<canvas>` et `</canvas>` faisant office de [description détaillée](#description-detaillee-image) ;",
                "Il existe un [lien ou bouton adjacent](#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](#description-detaillee-image)."
              ],
              "8": [
                "Pour chaque image bitmap (balise `<canvas>`) [porteuse d’information](#image-porteuse-d-information), qui implémente une référence à une [description détaillée](#description-detaillee-image) adjacente, cette référence est-elle correctement restituée par les technologies d’assistance ?"
              ],
              "9": [
                "Pour chaque image (balise `<img>`, `<input>` avec l’attribut `type=\"image\"`, `<area>`, `<object>`, `<embed>`, `<svg>`, `<canvas>`, ou possédant un attribut WAI-ARIA `role=\"img\"`) [porteuse d’information](#image-porteuse-d-information), qui est accompagnée d’une [description détaillée](#description-detaillee-image) et qui utilise un attribut WAI-ARIA `aria-describedby`, l’attribut WAI-ARIA `aria-describedby` associe-t-il la [description détaillée](#description-detaillee-image) ?"
              ],
              "10": [
                "Chaque balise possédant un attribut WAI-ARIA `role=\"img\"` [porteuse d’information](#image-porteuse-d-information), qui nécessite une [description détaillée](#description-detaillee-image), vérifie-t-elle une de ces conditions ?",
                "Il existe un attribut WAI-ARIA `aria-label` contenant l’[alternative textuelle](#alternative-textuelle-image) et une référence à une [description détaillée](#description-detaillee-image) adjacente ;",
                "Il existe un attribut WAI-ARIA `aria-labelledby` associant un [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) faisant office d’[alternative textuelle](#alternative-textuelle-image) et un autre faisant office de [description détaillée](#description-detaillee-image) ;",
                "Il existe un attribut WAI-ARIA `aria-describedby` associant un [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) faisant office de [description détaillée](#description-detaillee-image) ;",
                "Il existe un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) permettant d’accéder à la [description détaillée](#description-detaillee-image)."
              ]
            },
            "technicalNote": [
              "Dans le cas du SVG, le manque de support de l’élément `<title>` et `<desc>` par les technologies d’assistance crée une difficulté dans le cas de l’implémentation de l’[alternative textuelle](#alternative-textuelle-image) de l’image et de sa [description détaillée](#description-detaillee-image). Dans ce cas, il est recommandé d’utiliser l’attribut WAI-ARIA `aria-label` pour implémenter à la fois l’[alternative textuelle](#alternative-textuelle-image) courte et la référence à la [description détaillée](#description-detaillee-image) adjacente ou l’attribut WAI-ARIA `aria-labelledby` pour associer les passages de texte faisant office d’alternative courte et de [description détaillée](#description-detaillee-image).",
              "L’utilisation de l’attribut WAI-ARIA aria-describedby n’est pas recommandée pour lier une image (`<img>`, `<object>`, `<embed>`, `<canvas>`) à sa [description détaillée](#description-detaillee-image), par manque de support des technologies d’assistance. Néanmoins, lorsqu’il est utilisé, l’attribut devra nécessairement faire référence à l’`id` de la zone contenant la [description détaillée](#description-detaillee-image).",
              "La [description détaillée](#description-detaillee-image) adjacente peut être implémentée via une balise `<figcaption>`, dans ce cas le critère 1.9 doit être vérifié (utilisation de `<figure>` et des attributs WAI-ARIA `role=\"figure\"` et `aria-label`, notamment)."
            ],
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)"
                ]
              },
              {
                "techniques": [
                  "G92",
                  "G74",
                  "G73",
                  "H45",
                  "ARIA6"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 7,
            "title": "Pour chaque image [porteuse d’information](#image-porteuse-d-information) ayant une [description détaillée](#description-detaillee-image), cette description est-elle pertinente ?",
            "tests": {
              "1": [
                "Chaque image (balise `<img>`) [porteuse d’information](#image-porteuse-d-information), ayant une [description détaillée](#description-detaillee-image), vérifie-t-elle ces conditions ?",
                "La [description détaillée](#description-detaillee-image) via l’adresse référencée dans l’attribut `longdesc` est pertinente ;",
                "La [description détaillée](#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](#alternative-textuelle-image) est pertinente ;",
                "La [description détaillée](#description-detaillee-image) via un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) est pertinente ;",
                "Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent."
              ],
              "2": [
                "Chaque [bouton](#bouton-formulaire) de type image (balise `<input>` avec l’attribut `type=\"image\"`) [porteur d’information](#image-porteuse-d-information), ayant une [description détaillée](#description-detaillee-image), vérifie-t-il ces conditions ?",
                "La [description détaillée](#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](#alternative-textuelle-image) est pertinente ;",
                "La [description détaillée](#description-detaillee-image) via un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) est pertinente ;",
                "Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent."
              ],
              "3": [
                "Chaque [image objet](#image-objet) (balise `<object>` avec l’attribut `type=\"image/…\"`) [porteuse d’information](#image-porteuse-d-information), ayant une [description détaillée](#description-detaillee-image), vérifie-t-elle ces conditions ?",
                "La [description détaillée](#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](#alternative-textuelle-image) est pertinente ;",
                "La [description détaillée](#description-detaillee-image) adjacente à l’[image objet](#image-objet) est pertinente ;",
                "La [description détaillée](#description-detaillee-image) via un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) est pertinente ;",
                "Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent."
              ],
              "4": [
                "Chaque image embarquée (balise `<embed>` avec l’attribut `type=\"image/…\"`) [porteuse d’information](#image-porteuse-d-information), ayant une [description détaillée](#description-detaillee-image), vérifie-t-elle ces conditions ?",
                "La [description détaillée](#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](#alternative-textuelle-image) est pertinente ;",
                "La [description détaillée](#description-detaillee-image) adjacente à l’image embarquée est pertinente ;",
                "La [description détaillée](#description-detaillee-image) via un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) est pertinente ;",
                "Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent."
              ],
              "5": [
                "Chaque image vectorielle (balise `<svg>`) [porteuse d’information](#image-porteuse-d-information), ayant une [description détaillée](#description-detaillee-image), vérifie-t-elle ces conditions ?",
                "La [description détaillée](#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](#alternative-textuelle-image) est pertinente ;",
                "La [description détaillée](#description-detaillee-image) dans la page et signalée par le texte contenu dans la balise `<desc>` ou `<title>` est pertinente ;",
                "La [description détaillée](#description-detaillee-image) adjacente contenue dans la balise `<desc>` est pertinente ;",
                "La [description détaillée](#description-detaillee-image) via un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) est pertinente ;",
                "Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent."
              ],
              "6": [
                "Chaque image bitmap (balise `<canvas>`) [porteuse d’information](#image-porteuse-d-information), ayant une [description détaillée](#description-detaillee-image), vérifie-t-elle ces conditions ?",
                "La [description détaillée](#description-detaillee-image) dans la page et signalée par l’[alternative textuelle](#alternative-textuelle-image) est pertinente ;",
                "La [description détaillée](#description-detaillee-image) dans la page et signalée par le texte contenu entre `<canvas>` et `</canvas>` est pertinente ;",
                "La [description détaillée](#description-detaillee-image) contenue entre `<canvas>` et `</canvas>` est pertinente ;",
                "La [description détaillée](#description-detaillee-image) adjacente à l’image bitmap est pertinente ;",
                "La [description détaillée](#description-detaillee-image) via un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) est pertinente ;",
                "Le passage de texte associé via l’attribut WAI-ARIA `aria-describedby` est pertinent."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)"
                ]
              },
              {
                "techniques": [
                  "G92",
                  "F67"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 8,
            "title": "Chaque [image texte](#image-texte) [porteuse d’information](#image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](#mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque [image texte](#image-texte) (balise `<img>` ou possédant un attribut WAI-ARIA `role=\"img\"`) [porteuse d’information](#image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](#mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?"
              ],
              "2": [
                "Chaque bouton « [image texte](#image-texte) » (balise `<input>` avec l’attribut `type=\"image\"`) [porteur d’information](#image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](#mecanisme-de-remplacement), doit si possible être remplacé par du [texte stylé](#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?"
              ],
              "3": [
                "Chaque [image texte](#image-texte) objet (balise `<object>` avec l’attribut `type=\"image/…\"`) [porteuse d’information](#image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](#mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?"
              ],
              "4": [
                "Chaque [image texte](#image-texte) embarquée (balise `<embed>` avec l’attribut `type=\"image/…\"`) [porteuse d’information](#image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](#mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?"
              ],
              "5": [
                "Chaque [image texte](#image-texte) bitmap (balise `<canvas>`) [porteuse d’information](#image-porteuse-d-information), en l’absence d’un [mécanisme de remplacement](#mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?"
              ],
              "6": [
                "Chaque [image texte](#image-texte) SVG (balise `<svg>`) [porteuse d’information](#image-porteuse-d-information) et dont le texte n’est pas complètement structuré au moyen d’éléments `<text>`, en l’absence d’un [mécanisme de remplacement](#mecanisme-de-remplacement), doit si possible être remplacée par du [texte stylé](#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?"
              ]
            },
            "particularCases": [
              "Pour ce critère, il existe une gestion de cas particulier lorsque le texte fait partie du logo, d’une dénomination commerciale, d’un [CAPTCHA](#captcha), d’une [image-test](#image-test) ou d’une image dont l’exactitude graphique serait considérée comme essentielle à la bonne transmission de l’information véhiculée par l’image. Dans ces situations, le critère est non applicable pour ces éléments."
            ],
            "technicalNote": [
              "Le texte dans les images vectorielles étant du texte réel, il n’est pas concerné par ce critère."
            ],
            "references": [
              {
                "wcag": [
                  "1.4.5 Images of Text (AA)"
                ]
              },
              {
                "techniques": [
                  "G136",
                  "G140",
                  "C22",
                  "C30"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 9,
            "title": "Chaque [légende d’image](#legende-d-image) est-elle, si nécessaire, correctement reliée à l’image correspondante ?",
            "tests": {
              "1": [
                "Chaque image pourvue d’une [légende](#legende-d-image) (balise `<img>`, `<input>` avec l’attribut `type=\"image\"` ou possédant un attribut WAI-ARIA `role=\"img\"` associée à une [légende](#legende-d-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?",
                "L’image (balise `<img>`, `<input>` avec l’attribut `type=\"image\"` ou possédant un attribut WAI-ARIA `role=\"img\"`) et sa [légende](#legende-d-image) adjacente sont contenues dans une balise `<figure>` ;",
                "La balise `<figure>` possède un attribut WAI-ARIA `role=\"figure\"` ou `role=\"group\"` ;",
                "La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la [légende](#legende-d-image) ;",
                "La [légende](#legende-d-image) est contenue dans une balise `<figcaption>`."
              ],
              "2": [
                "Chaque [image objet](#image-objet) pourvue d’une [légende](#legende-d-image) (balise `<object>` avec l’attribut `type=\"image/…\"` associée à une [légende](#legende-d-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?",
                "L’[image objet](#image-objet) et sa [légende](#legende-d-image) adjacente sont contenues dans une balise `<figure>` ;",
                "La balise `<figure>` possède un attribut WAI-ARIA `role=\"figure\"` ou `role=\"group\"` ;",
                "La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la [légende](#legende-d-image) ;",
                "La [légende](#legende-d-image) est contenue dans une balise `<figcaption>`."
              ],
              "3": [
                "Chaque image embarquée pourvue d’une [légende](#legende-d-image) (balise `<embed>` associée à une [légende](#legende-d-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?",
                "L’image embarquée (balise `<embed>`) et sa [légende](#legende-d-image) adjacente sont contenues dans une balise `<figure>` ;",
                "La balise `<figure>` possède un attribut WAI-ARIA `role=\"figure\"` ou `role=\"group\"` ;",
                "La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la [légende](#legende-d-image) ;",
                "La [légende](#legende-d-image) est contenue dans une balise `<figcaption>`."
              ],
              "4": [
                "Chaque image vectorielle pourvue d’une [légende](#legende-d-image) (balise `<svg>` associée à une [légende](#legende-d-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?",
                "L’image vectorielle (balise `<svg>`) et sa [légende](#legende-d-image) adjacente sont contenues dans une balise `<figure>` ;",
                "La balise `<figure>` possède un attribut WAI-ARIA `role=\"figure\"` ou `role=\"group\"` ;",
                "La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la [légende](#legende-d-image) ;",
                "La [légende](#legende-d-image) est contenue dans une balise `<figcaption>`."
              ],
              "5": [
                "Chaque image bitmap pourvue d’une [légende](#legende-d-image) (balise `<canvas>` associée à une [légende](#legende-d-image) adjacente), vérifie-t-elle, si nécessaire, ces conditions ?",
                "L’image bitmap (balise `<canvas>`) et sa [légende](#legende-d-image) adjacente sont contenues dans une balise `<figure>` ;",
                "La balise `<figure>` possède un attribut WAI-ARIA `role=\"figure\"` ou `role=\"group\"` ;",
                "La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la [légende](#legende-d-image) ;",
                "La [légende](#legende-d-image) est contenue dans une balise `<figcaption>`."
              ]
            },
            "technicalNote": [
              "L’implémentation d’un attribut WAI-ARIA `role=\"group\"` ou `role=\"figure\"` sur l’élément parent `<figure>` est destiné à pallier le manque de support actuel des éléments `<figure>` par les technologies d’assistance. L’utilisation d’un élément `<figcaption>` pour associer une [légende](#legende-d-image) à une image impose au minimum l’utilisation d’un attribut WAI-ARIA `aria-label` sur l’élément parent `<figure>` dont le contenu sera identique au contenu de l’élément `<figcaption>`. Pour s’assurer d’un support optimal, il peut également être fait une association explicite entre le contenu de l’[alternative textuelle](#alternative-textuelle-image) de l’image et le contenu de l’élément `<figcaption>`, par exemple :",
              "`<img src=\"image.png\" alt=\"Photo : soleil couchant\" /><figcaption>Photo : crédit xxx</figcaption>`",
              "Les attributs WAI-ARIA `aria-labelledby` et `aria-describedby` ne peuvent pas être utilisés actuellement par manque de support par les technologies d’assistance.",
              "Note : les images légendées doivent par ailleurs respecter le critère 1.1 et le critère 1.3 relatifs aux images porteuses d’information."
            ],
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "G140",
                  "ARIA4",
                  "ARIA6"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Cadres",
      "number": 2,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Chaque [cadre](#cadre) a-t-il un [titre de cadre](#titre-de-cadre) ?",
            "tests": {
              "1": [
                "Chaque cadre (balise `<iframe>` ou `<frame>`) a-t-il un attribut `title` ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "H64"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Pour chaque [cadre](#cadre) ayant un [titre de cadre](#titre-de-cadre), ce titre de cadre est-il pertinent ?",
            "tests": {
              "1": [
                "Pour chaque cadre (balise `<iframe>` ou `<frame>`) ayant un attribut `title`, le contenu de cet attribut est-il pertinent ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "H64"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Couleurs",
      "number": 3,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Dans chaque page web, l’[information](#information-donnee-par-la-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?",
            "tests": {
              "1": [
                "Pour chaque mot ou ensemble de mots dont la mise en couleur est porteuse d’information, l’[information](#information-donnee-par-la-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?"
              ],
              "2": [
                "Pour chaque indication de couleur donnée par un texte, l’[information](#information-donnee-par-la-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?"
              ],
              "3": [
                "Pour chaque image [véhiculant une information](#image-vehiculant-une-information-donnee-par-la-couleur), l’[information](#information-donnee-par-la-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?"
              ],
              "4": [
                "Pour chaque [propriété CSS déterminant une couleur](#propriete-css-determinant-une-couleur) et [véhiculant une information](#image-vehiculant-une-information-donnee-par-la-couleur), l’[information](#information-donnee-par-la-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?"
              ],
              "5": [
                "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise) [véhiculant une information](#image-vehiculant-une-information-donnee-par-la-couleur), l’[information](#information-donnee-par-la-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?"
              ],
              "6": [
                "Pour chaque [média non temporel](#media-non-temporel) [véhiculant une information](#image-vehiculant-une-information-donnee-par-la-couleur), l’[information](#information-donnee-par-la-couleur) ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)",
                  "1.4.1 Use of color (A)"
                ]
              },
              {
                "techniques": [
                  "G14",
                  "G182",
                  "G111",
                  "G117",
                  "G138",
                  "G205"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Dans chaque page web, le [contraste](#contraste) entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, le texte et le texte en image sans effet de graisse d’une taille restituée inférieure à 24px vérifient-ils une de ces conditions (hors cas particuliers) ?",
                "Le rapport de [contraste](#contraste) entre le texte et son arrière-plan est de 4.5:1, au moins ;",
                "Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de [contraste](#contraste) de 4.5:1, au moins."
              ],
              "2": [
                "Dans chaque page web, le texte et le texte en image en gras d’une taille restituée inférieure à 18,5px vérifient-ils une de ces conditions (hors cas particuliers) ?",
                "Le rapport de [contraste](#contraste) entre le texte et son arrière-plan est de 4.5:1, au moins ;",
                "Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de [contraste](#contraste) de 4.5:1, au moins."
              ],
              "3": [
                "Dans chaque page web, le texte et le texte en image sans effet de graisse d’une taille restituée supérieure ou égale à 24px vérifient-ils une de ces conditions (hors cas particuliers) ?",
                "Le rapport de [contraste](#contraste) entre le texte et son arrière-plan est de 3:1, au moins ;",
                "Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de [contraste](#contraste) de 3:1, au moins."
              ],
              "4": [
                "Dans chaque page web, le texte et le texte en image en gras d’une taille restituée supérieure ou égale à 18,5px vérifient-ils une de ces conditions (hors cas particuliers) ?",
                "Le rapport de [contraste](#contraste) entre le texte et son arrière-plan est de 3:1, au moins ;",
                "Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de [contraste](#contraste) de 3:1, au moins."
              ],
              "5": [
                "Dans le [mécanisme qui permet d’afficher un rapport de contraste](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme) conforme, le rapport de contraste entre le texte et la couleur d’arrière-plan est-il suffisamment élevé ?"
              ]
            },
            "particularCases": [
              "Dans ces situations, les critères sont non applicables pour ces éléments :",
              {
                "ul": [
                  "- Le texte fait partie d’un logo ou d’un nom de marque d’un organisme ou d’une société ;",
                  "- Le texte ou l’image de texte est purement décoratif ;",
                  "- Le texte fait partie d’une image véhiculant une information mais le texte lui-même n’apporte aucune information essentielle ;",
                  "- Le texte ou l’image de texte fait partie d’un élément d’interface sur lequel aucune action n’est possible (par exemple un bouton avec l’attribut `disabled`)."
                ]
              }
            ],
            "references": [
              {
                "wcag": [
                  "1.4.3 Contrast (Minimum) (AA)"
                ]
              },
              {
                "techniques": [
                  "G18",
                  "G136",
                  "G148",
                  "G174",
                  "G145",
                  "C29"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "Dans chaque page web, les couleurs utilisées dans les [composants d’interface](#composant-d-interface) ou les éléments graphiques porteurs d’informations sont-elles suffisamment contrastées (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, le rapport de [contraste](#contraste) entre les couleurs d’un [composants d’interface](#composant-d-interface) dans ses différents états et la [couleur d’arrière-plan contiguë](#couleur-d-arriere-plan-contigue-et-couleur-contigue) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "Le rapport de [contraste](#contraste) est de 3:1, au moins ;",
                "Un [mécanisme](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme) permet un rapport de [contraste](#contraste) de 3:1, au moins."
              ],
              "2": [
                "Dans chaque page web, le rapport de [contraste](#contraste) des différentes couleurs composant un [élément graphique](#element-graphique), lorsqu’elles sont nécessaires à sa compréhension, et la [couleur d’arrière-plan contiguë](#couleur-d-arriere-plan-contigue-et-couleur-contigue), vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "Le rapport de [contraste](#contraste) est de 3:1, au moins ;",
                "Un [mécanisme](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme) permet un rapport de [contraste](#contraste) de 3:1, au moins."
              ],
              "3": [
                "Dans chaque page web, le rapport de [contraste](#contraste) des différentes [couleurs contiguës](#couleur-d-arriere-plan-contigue-et-couleur-contigue) entre elles d’un [élément graphique](#element-graphique), lorsqu’elles sont nécessaires à sa compréhension, vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "Le rapport de [contraste](#contraste) est de 3:1, au moins ;",
                "Un [mécanisme](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme) permet un rapport de [contraste](#contraste) de 3:1, au moins."
              ],
              "4": [
                "Dans le [mécanisme qui permet d’afficher un rapport de contraste](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme) conforme, les couleurs du composant ou des éléments graphiques porteurs d’informations qui le composent, sont-elles suffisamment contrastées ?"
              ]
            },
            "particularCases": [
              "Les cas suivants sont non applicables pour ce critère :",
              {
                "ul": [
                  "- Composant d’interface inactif (par exemple, un bouton avec un attribut `disabled`) sur lequel aucune action n’est possible ;",
                  "- Composant d’interface pour lequel l’apparence est gérée par les styles natifs du navigateur sans aucune modification par l’auteur (par exemple, le style au focus natif dans Chrome ou Firefox) ;",
                  "- Composant d’interface pour lequel la couleur n’est pas nécessaire pour identifier le composant ou son état (par exemple, un groupe de liens faisant office de navigation dont la position dans la page, la taille et la couleur du texte permettent de comprendre qu’il s’agit de liens même si la couleur du soulignement des liens avec le fond blanc n’a pas un ratio de 3:1 et que le texte lui a un ratio de 4.5:1) ;",
                  "- [Élément graphique](#element-graphique) ou parties d’élément graphique non porteur d’information ou ayant une alternative (description longue, informations identiques visibles dans la page) ;",
                  "- [Élément graphique](#element-graphique) ou parties d’élément graphique faisant partie d’un logo ou du nom de marque d’un organisme ou d’une société ;",
                  "- [Élément graphique](#element-graphique) ou parties d’élément graphique dont la présentation est essentielle à l’information véhiculée (par exemple, drapeaux, logotypes, photos de personnes ou de scènes, captures d’écran, diagrammes médicaux, carte de chaleurs) ;",
                  "- [Élément graphique](#element-graphique) ou parties d’élément graphique dynamiques dont le contraste au survol / focus est suffisant."
                ]
              }
            ],
            "references": [
              {
                "wcag": [
                  "1.4.11 Non-text Contrast (AA)"
                ]
              },
              {
                "techniques": [
                  "G18",
                  "G195",
                  "G207",
                  "G174",
                  "G145",
                  "G183",
                  "F78"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Multimédia",
      "number": 4,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) pré-enregistré a-t-il, si nécessaire, une [transcription textuelle](#transcription-textuelle-media-temporel) ou une [audiodescription](#audiodescription-synchronisee-media-temporel) (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement audio, vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?",
                "Il existe une [transcription textuelle](#transcription-textuelle-media-temporel) accessible via un [lien ou bouton adjacent](#lien-ou-bouton-adjacent) ;",
                "Il existe une [transcription textuelle](#transcription-textuelle-media-temporel) adjacente clairement identifiable."
              ],
              "2": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?",
                "Il existe une [version alternative « audio seulement »](#version-alternative-audio-seulement) accessible via un [lien ou bouton adjacent](#lien-ou-bouton-adjacent) ;",
                "Il existe une [version alternative « audio seulement »](#version-alternative-audio-seulement) adjacente clairement identifiable ;",
                "Il existe une [transcription textuelle](#transcription-textuelle-media-temporel) accessible via un [lien ou bouton adjacent](#lien-ou-bouton-adjacent) ;",
                "Il existe une [transcription textuelle](#transcription-textuelle-media-temporel) adjacente clairement identifiable ;",
                "Il existe une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée ;",
                "Il existe une version alternative avec une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée accessible via un [lien ou bouton adjacent](#lien-ou-bouton-adjacent)."
              ],
              "3": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?",
                "Il existe une [transcription textuelle](#transcription-textuelle-media-temporel) accessible via un [lien ou bouton adjacent](#lien-ou-bouton-adjacent) ;",
                "Il existe une [transcription textuelle](#transcription-textuelle-media-temporel) adjacente clairement identifiable ;",
                "Il existe une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée ;",
                "Il existe une version alternative avec une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée accessible via un [lien ou bouton adjacent](#lien-ou-bouton-adjacent)."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particulier lorsque :",
              {
                "ul": [
                  "- Le [média temporel](#media-temporel-type-son-video-et-synchronise) est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information) ;",
                  "- Le [média temporel](#media-temporel-type-son-video-et-synchronise) est lui-même une alternative à un contenu de la page (une vidéo en langue des signes ou la vocalisation d’un texte, par exemple) ;",
                  "- Le [média temporel](#media-temporel-type-son-video-et-synchronise) est utilisé pour accéder à une version agrandie ;",
                  "- Le [média temporel](#media-temporel-type-son-video-et-synchronise) est utilisé comme un [CAPTCHA](#captcha) ;",
                  "- Le [média temporel](#media-temporel-type-son-video-et-synchronise) fait partie d’un test qui deviendrait inutile si la [transcription textuelle](#transcription-textuelle-media-temporel), les [sous-titres synchronisés](#sous-titres-synchronises-objet-multimedia) ou l’[audiodescription](#audiodescription-synchronisee-media-temporel) étaient communiqués ;",
                  "- Pour les services de l’État, les collectivités territoriales et leurs établissements : si le [média temporel](#media-temporel-type-son-video-et-synchronise) a été publié entre le 23 septembre 2019 et le 23 septembre 2020 sur un site internet, intranet ou extranet créé depuis le 23 septembre 2018, il est exempté de l’obligation d’accessibilité ;",
                  "- Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si le [média temporel](#media-temporel-type-son-video-et-synchronise) a été publié avant le 23 septembre 2020, il est exempté de l’obligation d’accessibilité."
                ]
              },
              "Dans ces situations, le critère est non applicable.",
              "Ce cas particulier s’applique également aux critères 4.2, 4.3, 4.5."
            ],
            "references": [
              {
                "wcag": [
                  "1.2.1 Audio-only and Video-only (Prerecorded) (A)",
                  "1.2.3 Audio Description or Media Alternative (Prerecorded) (A)"
                ]
              },
              {
                "techniques": [
                  "G58",
                  "G69",
                  "G78",
                  "G158",
                  "G159",
                  "G173",
                  "G8",
                  "G166",
                  "H96",
                  "SM6",
                  "SM7"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise) pré-enregistré ayant une [transcription textuelle](#transcription-textuelle-media-temporel) ou une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée, celles-ci sont-elles pertinentes (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement audio, ayant une [transcription textuelle](#transcription-textuelle-media-temporel), celle-ci est-elle pertinente (hors cas particuliers) ?"
              ],
              "2": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "La [transcription textuelle](#transcription-textuelle-media-temporel) est pertinente ;",
                "L [’audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée est pertinente ;",
                "L [’audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée de la version alternative est pertinente ;",
                "La version alternative audio seulement est pertinente."
              ],
              "3": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "La [transcription textuelle](#transcription-textuelle-media-temporel) est pertinente ;",
                "L [’audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée est pertinente ;",
                "L [’audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée de la version alternative est pertinente."
              ]
            },
            "particularCases": [
              "Voir cas particuliers critère 4.1."
            ],
            "references": [
              {
                "wcag": [
                  "1.2.1 Audio-only and Video-only (Prerecorded) (A)",
                  "1.2.3 Audio Description or Media Alternative (Prerecorded) (A)"
                ]
              },
              {
                "techniques": [
                  "F30",
                  "F67",
                  "SM6",
                  "SM7"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré a-t-il, si nécessaire, des [sous-titres synchronisés](#sous-titres-synchronises-objet-multimedia) (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ?",
                "Le [média temporel](#media-temporel-type-son-video-et-synchronise) synchronisé possède des [sous-titres synchronisés](#sous-titres-synchronises-objet-multimedia) ;",
                "Il existe une version alternative possédant des [sous-titres synchronisés](#sous-titres-synchronises-objet-multimedia) accessible via un [lien ou bouton adjacent](#lien-ou-bouton-adjacent)."
              ],
              "2": [
                "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré possédant des [sous-titres synchronisés](#sous-titres-synchronises-objet-multimedia) diffusés via une balise `<track>`, la balise `<track>` possède-t-elle un attribut `kind=\"captions\"` ?"
              ]
            },
            "particularCases": [
              "Voir cas particuliers critère 4.1."
            ],
            "references": [
              {
                "wcag": [
                  "1.2.2 Captions (Prerecorded) (A)"
                ]
              },
              {
                "techniques": [
                  "G58",
                  "G93",
                  "G87",
                  "H95",
                  "SM11",
                  "SM12",
                  "F74",
                  "F75"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 4,
            "title": "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré ayant des [sous-titres synchronisés](#sous-titres-synchronises-objet-multimedia), ces sous-titres sont-ils pertinents ?",
            "tests": {
              "1": [
                "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré ayant des [sous-titres synchronisés](#sous-titres-synchronises-objet-multimedia), ces sous-titres sont-ils pertinents ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.2.2 Captions (Prerecorded) (A)"
                ]
              },
              {
                "techniques": [
                  "G93",
                  "G87",
                  "SM11",
                  "SM12",
                  "F8",
                  "F74",
                  "F75"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 5,
            "title": "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) pré-enregistré a-t-il, si nécessaire, une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?",
                "Il existe une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée ;",
                "Il existe une version alternative avec une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée."
              ],
              "2": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) synchronisé pré-enregistré vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?",
                "Il existe une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée ;",
                "Il existe une version alternative avec une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée."
              ]
            },
            "particularCases": [
              "Voir cas particuliers critère 4.1."
            ],
            "references": [
              {
                "wcag": [
                  "1.2.5 Audio Description (Prerecorded) (AA)"
                ]
              },
              {
                "techniques": [
                  "G8",
                  "G58",
                  "G78",
                  "G173",
                  "H96",
                  "SM1",
                  "SM2",
                  "SM6",
                  "SM7"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 6,
            "title": "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise) pré-enregistré ayant une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée, celle-ci est-elle pertinente ?",
            "tests": {
              "1": [
                "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise) pré-enregistré seulement vidéo ayant une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée, celle-ci est-elle pertinente ?"
              ],
              "2": [
                "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise) synchronisé ayant une [audiodescription](#audiodescription-synchronisee-media-temporel) synchronisée, celle-ci est-elle pertinente ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.2.5 Audio Description (Prerecorded) (AA)"
                ]
              },
              {
                "techniques": [
                  "SM1",
                  "SM2",
                  "SM6",
                  "SM7"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 7,
            "title": "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) est-il clairement identifiable (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise) seulement son, seulement vidéo ou synchronisé, le contenu textuel adjacent permet-il d’identifier clairement le [média temporel](#media-temporel-type-son-video-et-synchronise) (hors cas particuliers) ?"
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particulier lorsque le [média temporel](#media-temporel-type-son-video-et-synchronise) est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information). Dans cette situation, le critère est non applicable."
            ],
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)"
                ]
              },
              {
                "techniques": [
                  "G68",
                  "G100"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 8,
            "title": "Chaque [média non temporel](#media-non-temporel) a-t-il, si nécessaire, une alternative (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque [média non temporel](#media-non-temporel) vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ?",
                "Un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent), clairement identifiable, permet d’accéder à une page contenant une alternative ;",
                "Un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent), clairement identifiable, permet d’accéder à une alternative dans la page."
              ],
              "2": [
                "Chaque [média non temporel](#media-non-temporel) associé à une alternative vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "La page référencée par le [lien ou bouton adjacent](#lien-ou-bouton-adjacent) est accessible ;",
                "L’alternative dans la page, référencée par le [lien ou bouton adjacent](#lien-ou-bouton-adjacent), est accessible."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particulier lorsque :",
              {
                "ul": [
                  "- Le [média non temporel](#media-non-temporel) est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information) ;",
                  "- Le [média non temporel](#media-non-temporel) est diffusé dans un [environnement maîtrisé](#environnement-maitrise) ;",
                  "- Le [média non temporel](#media-non-temporel) est inséré via JavaScript en vérifiant la présence et la version du plug-in, en remplacement d’un [contenu alternatif](#contenu-alternatif) déjà présent."
                ]
              },
              "Dans ces situations, le critère est non applicable."
            ],
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)"
                ]
              },
              {
                "techniques": [
                  "H35",
                  "H46"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 9,
            "title": "Pour chaque [média non temporel](#media-non-temporel) ayant une alternative, cette alternative est-elle pertinente ?",
            "tests": {
              "1": [
                "Pour chaque [média non temporel](#media-non-temporel) ayant une alternative, cette alternative permet-elle d’accéder au même contenu et à des fonctionnalités similaires ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)"
                ]
              },
              {
                "techniques": [
                  "H46",
                  "F30"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 10,
            "title": "Chaque son déclenché automatiquement est-il [contrôlable](#controle-son-declenche-automatiquement) par l’utilisateur ?",
            "tests": {
              "1": [
                "Chaque séquence sonore déclenchée automatiquement via une balise `<object>`, `<video>`, `<audio>`, `<embed>`, `<bgsound>` ou un code JavaScript vérifie-t-elle une de ces conditions ?",
                "La séquence sonore a une durée inférieure ou égale à 3 secondes ;",
                "La séquence sonore peut être stoppée sur action de l’utilisateur ;",
                "Le volume de la séquence sonore peut être contrôlé par l’utilisateur indépendamment du contrôle de volume du système."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.4.2 Audio Control (A)"
                ]
              },
              {
                "techniques": [
                  "G60",
                  "G170",
                  "G171",
                  "F23",
                  "F93"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 11,
            "title": "La consultation de chaque [média temporel](#media-temporel-type-son-video-et-synchronise) est-elle, si nécessaire, [contrôlable par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ?",
            "tests": {
              "1": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) a-t-il, si nécessaire, les fonctionnalités de contrôle de sa consultation ?"
              ],
              "2": [
                "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise), chaque fonctionnalité vérifie-t-elle une de ces conditions ?",
                "La fonctionnalité est [accessible par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ;",
                "Une fonctionnalité [accessible par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) permettant de réaliser la même action est présente dans la page."
              ],
              "3": [
                "Pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise), chaque fonctionnalité vérifie-t-elle une de ces conditions ?",
                "La fonctionnalité est [activable par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ;",
                "Une fonctionnalité [activable par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) permettant de réaliser la même action est présente dans la page."
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.1.1 Keyboard (A)",
                  "2.1.2 No Keyboard Trap (A)"
                ]
              },
              {
                "techniques": [
                  "G4",
                  "G90",
                  "G202"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 12,
            "title": "La consultation de chaque [média non temporel](#media-non-temporel) est-elle [contrôlable par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ?",
            "tests": {
              "1": [
                "Pour chaque [média non temporel](#media-non-temporel), chaque fonctionnalité vérifie-t-elle une de ces conditions ?",
                "La fonctionnalité est [accessible par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ;",
                "Une fonctionnalité [accessible par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) permettant de réaliser la même action est présente dans la page."
              ],
              "2": [
                "Pour chaque [média non temporel](#media-non-temporel), chaque fonctionnalité vérifie-t-elle une de ces conditions ?",
                "La fonctionnalité est [activable par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ;",
                "Une fonctionnalité [activable par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) permettant de réaliser la même action est présente dans la page."
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.1.1 Keyboard (A)",
                  "2.1.2 No Keyboard Trap (A)"
                ]
              },
              {
                "techniques": [
                  "G4",
                  "G90"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 13,
            "title": "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise) et [non temporel](#media-non-temporel) est-il [compatible avec les technologies d’assistance](#compatible-avec-les-technologies-d-assistance) (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise)et [non temporel](#media-non-temporel) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "Le nom, le rôle, la valeur, le paramétrage et les changements d’états des composants d’interfaces sont accessibles aux technologies d’assistance via une API d’accessibilité ;",
                "Une alternative [compatible avec une API d’accessibilité](#compatible-avec-les-technologies-d-assistance) permet d’accéder aux mêmes fonctionnalités."
              ],
              "2": [
                "Chaque [média temporel](#media-temporel-type-son-video-et-synchronise)et [non temporel](#media-non-temporel) qui possède une alternative [compatible avec les technologies d’assistance](#compatible-avec-les-technologies-d-assistance), vérifie-t-il une de ces conditions ?",
                "L’alternative est adjacente au [média temporel](#media-temporel-type-son-video-et-synchronise) ou [non temporel](#media-non-temporel) ;",
                "L’alternative est accessible via un [lien ou bouton adjacent](#lien-ou-bouton-adjacent) ;",
                "Un mécanisme permet de remplacer le [média temporel](#media-temporel-type-son-video-et-synchronise) ou [non temporel](#media-non-temporel) par son alternative."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particulier lorsque le [média temporel](#media-temporel-type-son-video-et-synchronise) ou [non temporel](#media-non-temporel) est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information).",
              "Dans ces situations, le critère est non applicable."
            ],
            "references": [
              {
                "wcag": [
                  "4.1.2 Name, role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "G10",
                  "G135",
                  "F15",
                  "F54"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Tableaux",
      "number": 5,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Chaque [tableau de données complexe](#tableau-de-donnees-complexe) a-t-il un [résumé](#resume-de-tableau) ?",
            "tests": {
              "1": [
                "Pour chaque [tableau de données complexe](#tableau-de-donnees-complexe), un [résumé](#resume-de-tableau) est-il disponible ?"
              ]
            },
            "technicalNote": [
              "La spécification HTML propose plusieurs [méthodes pour lier un résumé à un tableau](#table-descriptions-techniques) (tableau lié à un passage de texte avec l’attribut `aria-describedby`, tableau groupé dans un élément `figure` avec un résumé présent dans un élément `figcaption` ou un élément `p`, résumé présent dans un élément `details` contenu dans l’élément `caption`). Ces méthodes n’ont pas un support suffisant pour être utilisées actuellement."
            ],
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "H73"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Pour chaque [tableau de données complexe](#tableau-de-donnees-complexe) ayant un [résumé](#resume-de-tableau), celui-ci est-il pertinent ?",
            "tests": {
              "1": [
                "Pour chaque [tableau de données complexe](#tableau-de-donnees-complexe) ayant un [résumé](#resume-de-tableau), celui-ci est-il pertinent ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "H73"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "Pour chaque [tableau de mise en forme](#tableau-de-mise-en-forme), le contenu linéarisé reste-t-il compréhensible ?",
            "tests": {
              "1": [
                "Chaque [tableau de mise en forme](#tableau-de-mise-en-forme) vérifie-t-il ces conditions ?",
                "Le contenu linéarisé reste compréhensible ;",
                "La balise `<table>` possède un attribut `role=\"presentation\"`."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.2 Meaningful Sequence (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "F49",
                  "ARIA4"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 4,
            "title": "Pour chaque [tableau de données ayant un titre](#tableau-de-donnees-ayant-un-titre), le titre est-il correctement associé au tableau de données ?",
            "tests": {
              "1": [
                "Pour chaque [tableau de données ayant un titre](#tableau-de-donnees-ayant-un-titre), le titre est-il correctement associé au tableau de données ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "H39"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 5,
            "title": "Pour chaque [tableau de données ayant un titre](#tableau-de-donnees-ayant-un-titre), celui-ci est-il pertinent ?",
            "tests": {
              "1": [
                "Pour chaque [tableau de données ayant un titre](#tableau-de-donnees-ayant-un-titre), ce titre permet-il d’identifier le contenu du [tableau de données](#tableau-de-donnees) de manière claire et concise ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "H39"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 6,
            "title": "Pour chaque [tableau de données](#tableau-de-donnees), chaque [en-tête de colonne](#en-tete-de-colonne-ou-de-ligne) et chaque [en-tête de ligne](#en-tete-de-colonne-ou-de-ligne) sont-ils correctement déclarés ?",
            "tests": {
              "1": [
                "Pour chaque [tableau de données](#tableau-de-donnees), chaque [en-tête de colonne](#en-tete-de-colonne-ou-de-ligne) s’appliquant à la totalité de la colonne vérifie-t-il une de ces conditions ?",
                "L’[en-tête de colonnes](#en-tete-de-colonne-ou-de-ligne) est structuré au moyen d’une balise `<th>` ;",
                "L’[en-tête de colonnes](#en-tete-de-colonne-ou-de-ligne) est structuré au moyen d’une balise pourvue d’un attribut WAI-ARIA `role=\"columnheader\"`."
              ],
              "2": [
                "Pour chaque [tableau de données](#tableau-de-donnees), chaque [en-tête de ligne](#en-tete-de-colonne-ou-de-ligne) s’appliquant à la totalité de la ligne vérifie-t-il une de ces conditions ?",
                "L’[en-tête de lignes](#en-tete-de-colonne-ou-de-ligne) est structuré au moyen d’une balise `<th>` ;",
                "L’[en-tête de lignes](#en-tete-de-colonne-ou-de-ligne) est structuré au moyen d’une balise pourvue d’un attribut WAI-ARIA `role=\"rowheader\"`."
              ],
              "3": [
                "Pour chaque [tableau de données](#tableau-de-donnees), chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne est-il structuré au moyen d’une balise `<th>` ?"
              ],
              "4": [
                "Pour chaque [tableau de données](#tableau-de-donnees), chaque cellule associée à plusieurs en-têtes est-elle structurée au moyen d’une balise `<td>` ou `<th>` ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "H51",
                  "F91"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 7,
            "title": "Pour chaque [tableau de données](#tableau-de-donnees), la technique appropriée permettant d’associer chaque cellule avec ses [en-têtes](#en-tete-de-colonne-ou-de-ligne) est-elle utilisée (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Pour chaque contenu de balise `<th>` s’appliquant à la totalité de la ligne ou de la colonne, la balise `<th>` respecte-t-elle une de ces conditions (hors cas particuliers) ?",
                "La balise `<th>` possède un attribut `id` unique ;",
                "La balise `<th>` possède un attribut `scope` ;",
                "La balise `<th>` possède un attribut WAI-ARIA `role=\"rowheader\"` ou `role=\"columnheader\"`."
              ],
              "2": [
                "Pour chaque contenu de balise `<th>` s’appliquant à la totalité de la ligne ou de la colonne et possédant un attribut `scope`, la balise `<th>` vérifie-t-elle une de ces conditions ?",
                "La balise `<th>` possède un attribut `scope` avec la valeur `\"row\"` pour les [en-têtes de ligne](#en-tete-de-colonne-ou-de-ligne) ;",
                "La balise `<th>` possède un attribut `scope` avec la valeur `\"col\"` pour les [en-têtes de colonne](#en-tete-de-colonne-ou-de-ligne)."
              ],
              "3": [
                "Pour chaque contenu de balise `<th>` ne s’appliquant pas à la totalité de la ligne ou de la colonne, la balise `<th>` vérifie-t-elle ces conditions ?",
                "La balise `<th>` ne possède pas d’attribut `scope` ;",
                "La balise `<th>` ne possède pas d’attribut WAI-ARIA `role=\"rowheader\"` ou `role=\"columnheader\"` ;",
                "La balise `<th>` possède un attribut `id` unique."
              ],
              "4": [
                "Pour chaque contenu de balise `<td>` ou `<th>` associée à un ou plusieurs en-têtes possédant un attribut `id`, la balise vérifie-t-elle ces conditions ?",
                "La balise possède un attribut `headers` ;",
                "L’attribut `headers` possède la liste des valeurs d’attribut `id` des [en-têtes](#en-tete-de-colonne-ou-de-ligne) associés."
              ],
              "5": [
                "Pour chaque balise pourvue d’un attribut WAI-ARIA `role=\"rowheader\"` ou `role=\"columnheader\"` dont le contenu s’applique à la totalité de la ligne ou de la colonne, la balise vérifie-t-elle une de ces conditions ?",
                "La balise possède un attribut WAI-ARIA `role=\"rowheader\"` pour les [en-têtes de ligne](#en-tete-de-colonne-ou-de-ligne) ;",
                "La balise possède un attribut WAI-ARIA `role=\"columnheader\"` pour les [en-têtes de colonne](#en-tete-de-colonne-ou-de-ligne)."
              ]
            },
            "particularCases": [
              "Dans le cas de tableaux de données ayant des en-têtes sur une seule ligne ou une seule colonne, les en-têtes peuvent être structurés à l’aide de balise `<th>` sans attribut `scope`."
            ],
            "technicalNote": [
              "Si l’attribut `headers` est implémenté sur une cellule déjà reliée à un en-tête (de ligne ou de colonne) avec l’attribut `scope` (avec la valeur `col` ou `row`), c’est l’en-tête ou les en-têtes référencés par l’attribut `headers` qui seront restitués aux technologies d’assistance. Les en-têtes reliés avec l’attribut `scope` seront ignorés."
            ],
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "H43",
                  "H63",
                  "F90"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 8,
            "title": "Chaque [tableau de mise en forme](#tableau-de-mise-en-forme) ne doit pas utiliser d’éléments propres aux  [tableaux de données](#tableau-de-donnees). Cette règle est-elle respectée ?",
            "tests": {
              "1": [
                "Chaque [tableau de mise en forme](#tableau-de-mise-en-forme) (balise `<table>`) vérifie-t-il ces conditions ?",
                "Le tableau de mise en forme (balise `<table>`) n’a pas d’attribut `summary` (sinon vide) et ne contient pas de balises `<caption>`, `<th>`, `<thead>`, `<tfoot>`, `<colgroup>` ou de balises ayant un attribut WAI-ARIA `role=\"rowheader\"`, `role=\"columnheader\"` ;",
                "Les cellules du tableau de mise en forme (balises `<td>`) ne possèdent pas d’attributs `<scope>`, `<headers>` et `<axis>`."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "F46"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Liens",
      "number": 6,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Chaque [lien](#lien) est-il explicite (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque [lien texte](#lien-texte) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "L’[intitulé de lien](#intitule-ou-nom-accessible-de-lien) seul permet d’en comprendre la fonction et la destination ;",
                "L’[intitulé de lien](#intitule-ou-nom-accessible-de-lien) additionné au [contexte du lien](#contexte-du-lien) permet d’en comprendre la fonction et la destination."
              ],
              "2": [
                "Chaque [lien image](#lien-image) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "L’[intitulé de lien](#intitule-ou-nom-accessible-de-lien) seul permet d’en comprendre la fonction et la destination ;",
                "L’[intitulé de lien](#intitule-ou-nom-accessible-de-lien) additionné au [contexte du lien](#contexte-du-lien) permet d’en comprendre la fonction et la destination."
              ],
              "3": [
                "Chaque [lien composite](#lien-composite) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "L’[intitulé de lien](#intitule-ou-nom-accessible-de-lien) seul permet d’en comprendre la fonction et la destination ;",
                "L’[intitulé de lien](#intitule-ou-nom-accessible-de-lien) additionné au [contexte du lien](#contexte-du-lien) permet d’en comprendre la fonction et la destination."
              ],
              "4": [
                "Chaque [lien SVG](#lien-svg) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "L’[intitulé de lien](#intitule-ou-nom-accessible-de-lien) seul permet d’en comprendre la fonction et la destination ;",
                "L’[intitulé de lien](#intitule-ou-nom-accessible-de-lien) additionné au [contexte du lien](#contexte-du-lien) permet d’en comprendre la fonction et la destination."
              ],
              "5": [
                "Pour chaque [lien](#lien) ayant un [intitulé visible](#intitule-visible), le [nom accessible du lien](#intitule-ou-nom-accessible-de-lien) contient-il au moins l’[intitulé visible](#intitule-visible) (hors cas particuliers) ?"
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particuliers pour les tests 6.1.1, 6.1.2, 6.1.3 et 6.1.4 lorsque le lien est [ambigu pour tout le monde](#ambigu-pour-tout-le-monde). Dans cette situation, où il n’est pas possible de rendre le lien explicite dans son contexte, le critère est non applicable.",
              "Il existe une gestion de cas particuliers pour le test 6.1.5 lorsque :",
              {
                "ul": [
                  "- La ponctuation et les lettres majuscules sont présentes dans le texte de l’[intitulé visible](#intitule-visible) : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;",
                  "- Le texte de l’[intitulé visible](#intitule-visible) sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous)."
                ]
              },
              "Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”)."
            ],
            "technicalNote": [
              "Lorsque l’intitulé visible est complété par une autre expression dans le nom accessible :",
              {
                "ul": [
                  "- WCAG insiste sur le placement de l’intitulé visible au début du nom accessible sans toutefois réserver l’exclusivité de cet emplacement ;",
                  "- WCAG considère comme un cas d’échec une correspondance non exacte de la chaîne de caractères de l’intitulé visible au sein du nom accessible."
                ]
              },
              "Par exemple, si l’on considère l’intitulé visible « Commander maintenant » complété dans le nom accessible par l’expression «produit X », on peut avoir les différents cas suivants :",
              {
                "ul": [
                  "- « Commander maintenant produit X » est valide (bonne pratique) ;",
                  "- « Produit X : commander maintenant » est valide ;",
                  "- « Commander produit X maintenant » est non valide."
                ]
              }
            ],
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)",
                  "2.4.4 Link Purpose (In Context) (A)",
                  "2.5.3 Label in Name (A)"
                ]
              },
              {
                "techniques": [
                  "H30",
                  "H78",
                  "H79",
                  "H80",
                  "H81",
                  "G53",
                  "G91",
                  "F63",
                  "F89",
                  "ARIA7",
                  "ARIA8"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Dans chaque page web, chaque [lien](#lien) a-t-il un [intitulé](#intitule-ou-nom-accessible-de-lien) ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque [lien](#lien) a-t-il un [intitulé](#intitule-ou-nom-accessible-de-lien) entre `<a>` et `</a>` ?"
              ]
            },
            "technicalNote": [
              "Une ancre n’est pas un lien même si pendant longtemps l’élément `<a>` a servi de support à cette technique. Elle n’est donc pas concernée par le présent critère."
            ],
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)",
                  "2.4.4 Link Purpose (In Context) (A)"
                ]
              },
              {
                "techniques": [
                  "H30",
                  "G91",
                  "F89"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Scripts",
      "number": 7,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Chaque [script](#script) est-il, si nécessaire, [compatible avec les technologies d’assistance](#compatible-avec-les-technologies-d-assistance) ?",
            "tests": {
              "1": [
                "Chaque [script](#script) qui génère ou contrôle un [composant d’interface](#composant-d-interface) vérifie-t-il, si nécessaire, une de ces conditions ?",
                "Le [nom, le rôle, la valeur, le paramétrage et les changements d’états](#le-nom-le-role-la-valeur-le-parametrage-et-les-changements-d-etats) sont accessibles aux technologies d’assistance via une API d’accessibilité ;",
                "Un [composant d’interface](#composant-d-interface) accessible permettant d’accéder aux mêmes fonctionnalités est présent dans la page ;",
                "Une [alternative](#alternative-a-script) accessible permet d’accéder aux mêmes fonctionnalités."
              ],
              "2": [
                "Chaque [script](#script) qui génère ou contrôle un [composant d’interface](#composant-d-interface) respecte-t-il une de ces conditions ?",
                "Le [composant d’interface](#composant-d-interface) est [correctement restitué](#correctement-restitue-par-les-technologies-d-assistance) par les technologies d’assistance ;",
                "Une [alternative](#alternative-a-script) accessible permet d’accéder aux mêmes fonctionnalités."
              ],
              "3": [
                "Chaque [script](#script) qui génère ou contrôle un [composant d’interface](#composant-d-interface) vérifie-t-il ces conditions (hors cas particuliers) ?",
                "Le composant possède un nom pertinent ;",
                "Le nom accessible du composant contient au moins l’[intitulé visible](#intitule-visible) ;",
                "Le composant possède un rôle pertinent."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particuliers pour le test 7.1.3 lorsque :",
              {
                "ul": [
                  "- La ponctuation et les lettres majuscules sont présentes dans le texte de l’intitulé visible : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;",
                  "- Le texte de l’intitulé visible sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous)."
                ]
              },
              "Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”)."
            ],
            "technicalNote": [
              "Le critère 7.1 implémente la notion de « compatible avec les technologies d’assistance » telle que définie par les WCAG, ainsi que le recours à WAI-ARIA pour rendre un composant ou une fonctionnalité accessible. Le bon usage de WAI-ARIA est vérifié via les tests 7.1.1, 7.1.2, 7.1.3.",
              "Note importante : dans un environnement HTML5, beaucoup de composants peuvent nécessiter JavaScript pour fonctionner ; en conséquence la fourniture d’une alternative à un composant JavaScript qui ne pourrait pas être rendu accessible devra bénéficier d’une méthode spécifique au composant en cause, permettant de le remplacer par une alternative accessible (et de le réactiver). Cela signifie que la désactivation de JavaScript pour l’ensemble de la page ne sera pas acceptée comme une méthode valable, à moins qu’elle ne remette pas en cause l’utilisation des autres composants."
            ],
            "references": [
              {
                "wcag": [
                  "2.5.3 Label in Name (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "G10",
                  "G135",
                  "G136",
                  "F15",
                  "F19",
                  "F20",
                  "F42",
                  "F59",
                  "F79",
                  "ARIA4",
                  "ARIA5",
                  "ARIA18",
                  "ARIA19",
                  "SCR21"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Pour chaque [script](#script) ayant une [alternative](#alternative-a-script), cette alternative est-elle pertinente ?",
            "tests": {
              "1": [
                "Chaque [script](#script) débutant par la balise `<script>` et ayant une [alternative](#alternative-a-script) vérifie-t-il une de ces conditions ?",
                "L’[alternative](#alternative-a-script) entre `<noscript>` et `</noscript>` permet d’accéder à des contenus et des fonctionnalités similaires ;",
                "La page affichée, lorsque JavaScript est désactivé, permet d’accéder à des contenus et des fonctionnalités similaires ;",
                "La page alternative permet d’accéder à des contenus et des fonctionnalités similaires ;",
                "Le langage de script côté serveur permet d’accéder à des contenus et des fonctionnalités similaires ;",
                "L’alternative présente dans la page permet d’accéder à des contenus et des fonctionnalités similaires."
              ],
              "2": [
                "Chaque élément non textuel mis à jour par un [script](#script) (dans la page, ou dans un [cadre](#cadre)) et ayant une [alternative](#alternative-a-script) vérifie-t-il ces conditions ?",
                "L’alternative de l’élément non textuel est mise à jour ;",
                "L’alternative mise à jour est pertinente."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "G136",
                  "F19",
                  "F20"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "Chaque [script](#script) est-il [contrôlable par le clavier et par tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque élément possédant un gestionnaire d’événement contrôlé par un script vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "L’élément est [accessible par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ;",
                "Un élément [accessible par le clavier et tout dispositif de pointage](#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) permettant de réaliser la même action est présent dans la page."
              ],
              "2": [
                "Un [script](#script) ne doit pas supprimer le focus d’un élément qui le reçoit. Cette règle est-elle respectée (hors cas particuliers) ?"
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particuliers lorsque la fonctionnalité dépend de l’utilisation d’un gestionnaire d’événement sans équivalent universel ; par exemple, une application de dessin à main levée ne pourra pas être rendue contrôlable au clavier. Dans ces situations, le critère est non applicable."
            ],
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)",
                  "2.1.1 Keyboard (A)",
                  "2.4.7 Focus Visible (AA)"
                ]
              },
              {
                "techniques": [
                  "G90",
                  "G202",
                  "F42",
                  "F54",
                  "F55",
                  "SCR2",
                  "SCR20",
                  "SCR29",
                  "SCR35"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 4,
            "title": "Pour chaque [script](#script) qui initie un [changement de contexte](#changement-de-contexte), l’utilisateur est-il averti ou en a-t-il le contrôle ?",
            "tests": {
              "1": [
                "Chaque [script](#script) qui initie un [changement de contexte](#changement-de-contexte) vérifie-t-il une de ces conditions ?",
                "L’utilisateur est averti par un texte de l’action du script et du type de changement avant son déclenchement ;",
                "Le changement de contexte est initié par un bouton (input de type `submit`, `button` ou `image` ou balise `<button>`) explicite ;",
                "Le changement de contexte est initié par un lien explicite."
              ]
            },
            "references": [
              {
                "wcag": [
                  "3.2.1 On Focus (A)",
                  "3.2.2 On Input (A)"
                ]
              },
              {
                "techniques": [
                  "G13",
                  "G76",
                  "G80",
                  "G107",
                  "H32",
                  "H84",
                  "F9",
                  "F22",
                  "F36",
                  "F37",
                  "F41",
                  "SCR19"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 5,
            "title": "Dans chaque page web, les [messages de statut](#message-de-statut) sont-ils correctement restitués par les technologies d’assistance ?",
            "tests": {
              "1": [
                "Chaque [message de statut](#message-de-statut) qui informe de la réussite, du résultat d’une action ou bien de l’état d’une application utilise-t-il l’attribut WAI-ARIA `role=\"status\"` ?"
              ],
              "2": [
                "Chaque [message de statut](#message-de-statut) qui présente une suggestion, ou avertit de l’existence d’une erreur utilise-t-il l’attribut WAI-ARIA `role=\"alert\"` ?"
              ],
              "3": [
                "Chaque [message de statut](#message-de-statut) qui indique la progression d’un processus utilise-t-il l’un des attributs WAI-ARIA `role=\"log\"`, `role=\"progressbar\"` ou `role=\"status\"` ?"
              ]
            },
            "technicalNote": [
              "Les rôles WAI-ARIA `log`, `status` et `alert` ont implicitement une valeur d’attribut WAI-ARIA `aria-live` et `aria-atomic`. On pourra donc considérer (conformément à la spécification WAI-ARIA 1.1) que :",
              {
                "ul": [
                  "- Un attribut WAI-ARIA `aria-live=\"polite\"` associé à un message de statut peut valoir pour un rôle WAI-ARIA `log` ;",
                  "- Un attribut WAI-ARIA `aria-live=\"polite\"` et un attribut WAI-ARIA `aria-atomic=\"true\"` associés à un message de statut peuvent valoir pour un rôle WAI-ARIA `status` ;",
                  "- Un attribut WAI-ARIA `aria-live=\"assertive\"` et un attribut WAI-ARIA `aria-atomic=\"true\"` associés à un message de statut peuvent valoir pour un rôle WAI-ARIA `alert`."
                ]
              },
              "C’est sous réserve que la nature du message de statut satisfasse bien à la correspondance implicitement établie. Dans le cas d’un message de statut indiquant la progression d’un processus et matérialisé graphiquement par une barre de progression, un rôle WAI-ARIA `progressbar` explicite est nécessaire."
            ],
            "references": [
              {
                "wcag": [
                  "4.1.3 Status Messages (AA)"
                ]
              },
              {
                "techniques": [
                  "ARIA19",
                  "ARIA22",
                  "ARIA23"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Éléments obligatoires",
      "number": 8,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Chaque page web est-elle définie par un [type de document](#type-de-document) ?",
            "tests": {
              "1": [
                "Pour chaque page web, le [type de document](#type-de-document) (balise `doctype`) est-il présent ?"
              ],
              "2": [
                "Pour chaque page web, le [type de document](#type-de-document) (balise `doctype`) est-il valide ?"
              ],
              "3": [
                "Pour chaque page web possédant une déclaration de [type de document](#type-de-document), celle-ci est-elle située avant la balise `<html>` dans le code source ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "4.1.1 Parsing (A)"
                ]
              },
              {
                "techniques": [
                  "G134",
                  "G192"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Pour chaque page web, le code source généré est-il valide selon le [type de document](#type-de-document) spécifié ?",
            "tests": {
              "1": [
                "Pour chaque déclaration de [type de document](#type-de-document), le code source généré de la page vérifie-t-il ces conditions ?",
                "Les balises, attributs et valeurs d’attributs respectent les [règles d’écriture](#regles-d-ecriture) ;",
                "L’imbrication des balises est conforme ;",
                "L’ouverture et la fermeture des balises sont conformes ;",
                "Les valeurs d’attribut id sont uniques dans la page ;",
                "Les attributs ne sont pas doublés sur un même élément."
              ]
            },
            "references": [
              {
                "wcag": [
                  "4.1.1 Parsing (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "H74",
                  "H93",
                  "H94",
                  "F70",
                  "F77"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "Dans chaque page web, la [langue par défaut](#langue-par-defaut) est-elle présente ?",
            "tests": {
              "1": [
                "Pour chaque page web, l’indication de langue par défaut vérifie-t-elle une de ces conditions ?",
                "L’indication de la langue de la page (attribut `lang` et/ou `xml:lang`) est donnée pour l’élément `html` ;",
                "L’indication de la langue de la page (attribut `lang` et/ou `xml:lang`) est donnée sur chaque élément de texte ou sur l’un des éléments parents."
              ]
            },
            "references": [
              {
                "wcag": [
                  "3.1.1 Language of Page (A)"
                ]
              },
              {
                "techniques": [
                  "H57"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 4,
            "title": "Pour chaque page web ayant une [langue par défaut](#langue-par-defaut), le [code de langue](#code-de-langue) est-il pertinent ?",
            "tests": {
              "1": [
                "Pour chaque page web ayant une langue par défaut, le code de langue vérifie-t-il ces conditions ?",
                "Le code de langue est valide ;",
                "Le code de langue est pertinent."
              ]
            },
            "references": [
              {
                "wcag": [
                  "3.1.1 Language of Page (A)"
                ]
              },
              {
                "techniques": [
                  "H57"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 5,
            "title": "Chaque page web a-t-elle un [titre de page](#titre-de-page) ?",
            "tests": {
              "1": [
                "Chaque page web a-t-elle un [titre de page](#titre-de-page) (balise `<title>`) ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.4.2 Page Titled (A)"
                ]
              },
              {
                "techniques": [
                  "G88",
                  "G127",
                  "H25"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 6,
            "title": "Pour chaque page web ayant un [titre de page](#titre-de-page), ce titre est-il pertinent ?",
            "tests": {
              "1": [
                "Pour chaque page web ayant un [titre de page](#titre-de-page) (balise `<title>`), le contenu de cette balise est-il pertinent ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.4.2 Page Titled (A)"
                ]
              },
              {
                "techniques": [
                  "G88",
                  "G127",
                  "H25"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 7,
            "title": "Dans chaque page web, chaque [changement de langue](#changement-de-langue) est-il indiqué dans le code source (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque texte écrit dans une langue différente de la [langue par défaut](#langue-par-defaut) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "L’indication de langue est donnée sur l’élément contenant le texte (attribut `lang` et/ou `xml:lang`) ;",
                "L’indication de langue est donnée sur un des éléments parents (attribut `lang` et/ou `xml:lang`)"
              ]
            },
            "particularCases": [
              "Il y a une gestion de cas particuliers sur le changement de langue pour les cas suivants :",
              {
                "ul": [
                  "- Nom propre, le critère est non applicable ;",
                  "- Nom commun de langue étrangère présent dans le dictionnaire officiel de la langue (voir note 1 ci-dessous) par défaut de la page web, le critère est non applicable ;",
                  "- Le terme de langue étrangère soumis, via un [champ de formulaire](#champ-de-saisie-de-formulaire) et rappelé dans la page (par exemple comme indication du terme recherché dans le cas d’un moteur de recherche), le critère est non applicable ;",
                  "- Passage de texte dont la langue ne peut pas être déterminée : le critère est non applicable ;",
                  "- Terme ou passage de texte issus d’une langue morte ou imaginaire pour laquelle il n’existe pas d’interprétation vocale : le critère est non applicable."
                ]
              },
              "Note 1 : le dictionnaire officiel est celui recommandé par l’académie en charge de la langue en question. Pour la France, par exemple, le lien vers le dictionnaire officiel se trouve sur le site de l’Académie française à l’adresse suivante : http://www.academie-francaise.fr/le-dictionnaire/la-9e-edition. Pour toute demande auprès du service du dictionnaire de l’Académie française, utiliser le formulaire de contact du service du dictionnaire.",
              "Note 2 : pour les noms communs de langue étrangère, absents dans le dictionnaire officiel de la langue par défaut de la page web, et qui sont passés dans le langage commun (exemple : newsletter) : le critère est applicable, uniquement lorsque l’absence d’indication de langue peut provoquer une incompréhension pour la restitution."
            ],
            "references": [
              {
                "wcag": [
                  "3.1.2 Language of Parts (AA)"
                ]
              },
              {
                "techniques": [
                  "H58"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 8,
            "title": "Dans chaque page web, le code de langue de chaque [changement de langue](#changement-de-langue) est-il valide et pertinent ?",
            "tests": {
              "1": [
                "Pour chaque page web, le code de langue de chaque [changement de langue](#changement-de-langue) vérifie-t-il ces conditions ?",
                "Le code de langue est valide ;",
                "Le code de langue est pertinent."
              ]
            },
            "references": [
              {
                "wcag": [
                  "3.1.2 Language of Parts (AA)"
                ]
              },
              {
                "techniques": [
                  "H58"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 9,
            "title": "Dans chaque page web, les balises ne doivent pas être utilisées [uniquement à des fins de présentation](#uniquement-a-des-fins-de-presentation). Cette règle est-elle respectée ?",
            "tests": {
              "1": [
                "Dans chaque page web les balises (à l’exception de `<div>`, `<span>` et `<table>`) ne doivent pas être utilisées [uniquement à des fins de présentation](#uniquement-a-des-fins-de-presentation). Cette règle est-elle respectée ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "G115",
                  "H88",
                  "F43",
                  "F92"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 10,
            "title": "Dans chaque page web, les changements du [sens de lecture](#sens-de-lecture) sont-ils signalés ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque texte dont le sens de lecture est différent du [sens de lecture](#sens-de-lecture) par défaut est contenu dans une balise possédant un attribut `dir` ?"
              ],
              "2": [
                "Dans chaque page web, chaque changement du [sens de lecture](#sens-de-lecture) (attribut `dir`) vérifie-t-il ces conditions ?",
                "La valeur de l’attribut `dir` est conforme (`rtl` ou `ltr`) ;",
                "La valeur de l’attribut `dir` est pertinente."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.2 Meaningful Sequence (A)"
                ]
              },
              {
                "techniques": [
                  "H56"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Structuration de l’information",
      "number": 9,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Dans chaque page web, l’information est-elle structurée par l’utilisation appropriée de [titres](#titre) ?",
            "tests": {
              "1": [
                "Dans chaque page web, la hiérarchie entre les [titres](#titre) (balise `<hx>` ou balise possédant un attribut WAI-ARIA `role=\"heading\"` associé à un attribut WAI-ARIA `aria-level`) est-elle pertinente ?"
              ],
              "2": [
                "Dans chaque page web, le contenu de chaque [titre](#titre) (balise `<hx>` ou balise possédant un attribut WAI-ARIA `role=\"heading\"` associé à un attribut WAI-ARIA `aria-level`) est-il pertinent ?"
              ],
              "3": [
                "Dans chaque page web, chaque passage de texte constituant un [titres](#titre) est-il structuré à l’aide d’une balise `<hx>` ou d’une balise possédant un attribut WAI-ARIA `role=\"heading\"` associé à un attribut WAI-ARIA `aria-level` ?"
              ]
            },
            "technicalNote": [
              "WAI-ARIA permet de définir des titres via le rôle `heading` et l’attribut `aria-level` (indication du niveau de titre). Bien qu’il soit préférable d’utiliser l’élément de titre natif en HTML `<hx>`, l’utilisation du rôle WAI-ARIA `heading` est compatible avec l’accessibilité."
            ],
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)",
                  "2.4.1 Bypass Blocks (A)",
                  "2.4.6 Headings and Labels (AA)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "G115",
                  "G130",
                  "H42",
                  "G141",
                  "ARIA4",
                  "ARIA12"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Dans chaque page web, la [structure du document](#structure-du-document) est-elle cohérente (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, la [structure du document](#structure-du-document) vérifie-t-elle ces conditions (hors cas particuliers) ?",
                "La [zone d’en-tête de la page](#zone-d-en-tete) est structurée via une balise `<header>` ;",
                "Les [zones de navigation principales et secondaires](#menu-et-barre-de-navigation) sont structurées via une balise `<nav>` ;",
                "La balise `<nav>` est réservée à la structuration des [zones de navigation principales et secondaires](#menu-et-barre-de-navigation) ;",
                "La [zone de contenu principal](#zone-de-contenu-principal) est structurée via une balise `<main>` ;",
                "La [structure du document](#structure-du-document) utilise une balise `<main>` visible unique ;",
                "La [zone de pied de page](#zone-de-pied-de-page) est structurée via une balise `<footer>`."
              ]
            },
            "particularCases": [
              "Lorsque le doctype déclaré dans la page n’est pas le doctype HTML5, ce critère est non applicable."
            ],
            "technicalNote": [
              "La balise `<main>` peut être utilisée plusieurs fois dans le même document HTML. Néanmoins, il ne peut y avoir en permanence qu’une seule balise visible et lisible par les technologies d’assistances, les autres devant disposer d’un attribut `hidden` ou d’un style permettant de les masquer aux technologies d’assistances. À noter cependant que l’utilisation d’un style seul restera insuffisante pour assurer l’unicité d’une balise `<main>` visible en cas de désactivation des feuilles de styles."
            ],
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "G115",
                  "ARIA11"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "Dans chaque page web, chaque [liste](#listes) est-elle correctement structurée ?",
            "tests": {
              "1": [
                "Dans chaque page web, les informations regroupées visuellement sous forme de [liste](#listes) non ordonnée vérifient-elles une de ces conditions ?",
                "La liste utilise les balises HTML `<ul>` et `<li>` ;",
                "La liste utilise les attributs WAI-ARIA `role=\"list\"` et `role=\"listitem\"`."
              ],
              "2": [
                "Dans chaque page web, les informations regroupées visuellement sous forme de [liste](#listes) ordonnée vérifient-elles une de ces conditions ?",
                "La liste utilise les balises HTML `<ol>` et `<li>` ;",
                "La liste utilise les attributs WAI-ARIA `role=\"list\"` et `role=\"listitem\"`."
              ],
              "3": [
                "Dans chaque page web, les informations regroupées sous forme de [liste](#listes) de description utilisent-elles les balises `<dl>` et `<dt>/<dd>` ?"
              ]
            },
            "technicalNote": [
              "Les attributs WAI-ARIA `role=\"list\"` et `role=\"listitem\"` peuvent nécessiter l’utilisation des attributs WAI-ARIA `aria-setsize` et `aria-posinset` dans le cas où l’ensemble de la liste n’est pas disponible via le DOM généré au moment de la consultation.",
              "Les attributs WAI-ARIA `role=\"tree\"`, `role=\"tablist\"`, `role=\"menu\"`, `role=\"combobox\"` et `role=\"listbox\"` ne sont pas équivalents à une liste HTML `<ul>` ou `<ol>`."
            ],
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "G115",
                  "G153",
                  "H40",
                  "H48",
                  "F2"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 4,
            "title": "Dans chaque page web, chaque citation est-elle correctement indiquée ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque citation courte utilise-t-elle une balise `<q>` ?"
              ],
              "2": [
                "Dans chaque page web, chaque bloc de citation utilise-t-il une balise `<blockquote>` ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "G115",
                  "H49",
                  "F2"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Présentation de l’information",
      "number": 10,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Dans le site web, des [feuilles de styles](#feuille-de-style) sont-elles utilisées pour contrôler la [présentation de l’information](#presentation-de-l-information) ?",
            "tests": {
              "1": [
                "Dans chaque page web, les balises servant à la [présentation de l’information](#presentation-de-l-information) ne doivent pas être présentes dans le code source généré des pages. Cette règle est-elle respectée ?"
              ],
              "2": [
                "Dans chaque page web, les attributs servant à la [présentation de l’information](#presentation-de-l-information) ne doivent pas être présents dans le code source généré des pages. Cette règle est-elle respectée ?"
              ],
              "3": [
                "Dans chaque page web, l’utilisation des espaces vérifie-t-elle ces conditions ?",
                "Les espaces ne sont pas utilisées pour séparer les lettres d’un mot ;",
                "Les espaces ne sont pas utilisées pour simuler des tableaux ;",
                "Les espaces ne sont pas utilisées pour simuler des colonnes de texte."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)",
                  "1.3.2 Meaningful Sequence (A)"
                ]
              },
              {
                "techniques": [
                  "G140",
                  "F32",
                  "F33",
                  "F34",
                  "F48",
                  "C6",
                  "C8",
                  "C18",
                  "C22"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Dans chaque page web, le [contenu visible](#contenu-visible) porteur d’information reste-t-il présent lorsque les [feuilles de styles](#feuille-de-style) sont désactivées ?",
            "tests": {
              "1": [
                "Dans chaque page web, l’information reste-t-elle présente lorsque les [feuilles de styles](#feuille-de-style) sont désactivées ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)",
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "G140",
                  "F3",
                  "F87"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "Dans chaque page web, l’information reste-t-elle [compréhensible](#comprehensible-ordre-de-lecture) lorsque les [feuilles de styles](#feuille-de-style) sont désactivées ?",
            "tests": {
              "1": [
                "Dans chaque page web, l’information reste-t-elle présente lorsque les [feuilles de styles](#feuille-de-style) sont désactivées ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.2 Meaningful Sequence (A)",
                  "2.4.3 Focus Order (A)"
                ]
              },
              {
                "techniques": [
                  "G59",
                  "G140",
                  "F1"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 4,
            "title": "Dans chaque page web, le texte reste-t-il lisible lorsque la [taille des caractères](#taille-des-caracteres) est augmentée jusqu’à 200%, au moins (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, l’augmentation de la [taille des caractères](#taille-des-caracteres) jusqu’à 200%, au moins, ne doit pas provoquer de perte d’information. Cette règle est-elle respectée selon une de ces conditions (hors cas particuliers) ?",
                "Lors de l’utilisation de la fonction d’agrandissement du texte du navigateur ;",
                "Lors de l’utilisation des fonctions de zoom graphique du navigateur ;",
                "Lors de l’utilisation d’un [composant d’interface](#composant-d-interface) propre au site permettant d’agrandir le texte ou de zoomer."
              ],
              "2": [
                "Dans chaque page web, l’augmentation de la taille des caractères jusqu’à 200%, au moins, doit être possible pour l’ensemble du texte dans la page. Cette règle est-elle respectée selon une de ces conditions (hors cas particuliers) ?",
                "Lors de l’utilisation de la fonction d’agrandissement du texte du navigateur ;",
                "Lors de l’utilisation des fonctions de zoom graphique du navigateur ;",
                "Lors de l’utilisation d’un [composant d’interface](#composant-d-interface) propre au site permettant d’agrandir le texte ou de zoomer."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.4.4 Resize Text (AA)"
                ]
              },
              {
                "techniques": [
                  "G146",
                  "G179",
                  "F69",
                  "F80",
                  "SCR34",
                  "C12",
                  "C13",
                  "C14",
                  "C17",
                  "C28"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 5,
            "title": "Dans chaque page web, les déclarations CSS de couleurs de fond d’élément et de police sont-elles correctement utilisées ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque déclaration CSS de couleurs de police (`color`), d’un élément susceptible de contenir du texte, est-elle accompagnée d’une déclaration de couleur de fond (`background`, `background-color`), au moins, héritée d’un parent ?"
              ],
              "2": [
                "Dans chaque page web, chaque déclaration de couleur de fond (`background`, `background-color`), d’un élément susceptible de contenir du texte, est-elle accompagnée d’une déclaration de couleur de police (`color`) au moins, héritée d’un parent ?"
              ],
              "3": [
                "Dans chaque page web, chaque utilisation d’une image pour créer une couleur de fond d’un élément susceptible de contenir du texte, via CSS (`background`, `background-image`), est-elle accompagnée d’une déclaration de couleur de fond (`background`, `background-color`), au moins, héritée d’un parent ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.4.3 Contrast (Minimum) (AA)"
                ]
              },
              {
                "techniques": [
                  "F24"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 6,
            "title": "Dans chaque page web, chaque [lien dont la nature n’est pas évidente](#lien-dont-la-nature-n-est-pas-evidente) est-il visible par rapport au texte environnant ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque [lien texte](#lien-texte) signalé uniquement par la couleur, et dont la nature n’est pas évidente, vérifie-t-il ces conditions ?",
                "La couleur du lien a un rapport de [contraste](#contraste) supérieur ou égal à 3:1 par rapport au texte environnant ;",
                "Le lien dispose d’une indication visuelle au survol autre qu’un changement de couleur ;",
                "Le lien dispose d’une indication visuelle au focus autre qu’un changement de couleur."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.4.1 Use of Color (A)"
                ]
              },
              {
                "techniques": [
                  "G183",
                  "F73"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 7,
            "title": "Dans chaque page web, pour chaque élément recevant le focus, la [prise de focus](#prise-de-focus) est-elle visible ?",
            "tests": {
              "1": [
                "Pour chaque élément recevant le focus, la [prise de focus](#prise-de-focus) vérifie-t-elle une de ces conditions ?",
                "Le style du focus natif du navigateur n’est pas supprimé ou dégradé ;",
                "Un style du focus défini par l’auteur est visible."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.4.1 Use of Color (A)",
                  "2.4.7 Focus Visible (AA)"
                ]
              },
              {
                "techniques": [
                  "G149",
                  "G165",
                  "G183",
                  "G195",
                  "F73",
                  "F78",
                  "SCR31",
                  "C15"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 8,
            "title": "Pour chaque page web, les [contenus cachés](#contenu-cache) ont-ils vocation à être ignorés par les technologies d’assistance ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque contenu caché vérifie-t-il une de ces conditions ?",
                "Le [contenu caché](#contenu-cache) a vocation à être ignoré par les technologies d’assistance ;",
                "Le [contenu caché](#contenu-cache) n’a pas vocation à être ignoré par les technologies d’assistance et est rendu restituable par les technologies d’assistance suite à une action de l’utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché ou suite à un repositionnement du focus dessus."
              ]
            },
            "technicalNote": [
              "WAI-ARIA propose un attribut `aria-hidden` (`true` ou `false`) qui permet d’inhiber la restitution d’un contenu en direction des technologies d’assistance, sans action sur sa visibilité en direction des agents utilisateurs : un contenu avec `aria-hidden=\"true\"` ne sera donc plus vocalisable, mais restera visible.",
              "Sauf si le contenu contrôlé par `aria-hidden` n’a pas vocation à être restitué par les technologies d’assistance, la valeur de l’attribut `aria-hidden` doit être cohérente avec l’état affiché ou masqué du contenu à l’écran.",
              "La spécification HTML5 propose un attribut `hidden` qui permet de rendre indisponible (quand l’attribut `hidden` est présent) un contenu dans le DOM généré (de manière similaire au `type=\"hidden\"` sur un contrôle de formulaire).",
              "Il est possible d’avoir des situations où un contenu contrôlé par `hidden` ou `aria-hidden` se trouve momentanément dans un état incohérent avec le statut affiché ou masqué du contenu, par exemple si l’on désire rendre disponible un élément, mais que son affichage à l’écran reste dépendant d’une action ultérieure. Dans ce cas, c’est l’état final du contenu qui doit être considéré."
            ],
            "references": [
              {
                "wcag": [
                  "1.3.2 Meaningful Sequence (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "G57"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 9,
            "title": "Dans chaque page web, l’information ne doit pas être donnée uniquement [par la forme, taille ou position](#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée ?",
            "tests": {
              "1": [
                "Dans chaque page web, pour chaque texte ou ensemble de textes, l’information ne doit pas être donnée uniquement [par la forme, taille ou position](#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée ?"
              ],
              "2": [
                "Dans chaque page web, pour chaque image ou ensemble d’images, l’information ne doit pas être donnée uniquement [par la forme, taille ou position](#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée ?"
              ],
              "3": [
                "Dans chaque page web, pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise), l’information ne doit pas être donnée uniquement [par la forme, taille ou position](#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée ?"
              ],
              "4": [
                "Dans chaque page web, pour chaque [média non temporel](#media-non-temporel), l’information ne doit pas être donnée uniquement [par la forme, taille ou position](#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.3 Sensory Characteristics (A)",
                  "1.4.1 Use of Color (A)"
                ]
              },
              {
                "techniques": [
                  "G96",
                  "G140",
                  "F14",
                  "F26"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 10,
            "title": "Dans chaque page web, l’information ne doit pas être donnée [par la forme, taille ou position](#indication-donnee-par-la-forme-la-taille-ou-la-position) uniquement. Cette règle est-elle implémentée de façon pertinente ?",
            "tests": {
              "1": [
                "Dans chaque page web, pour chaque texte ou ensemble de textes, l’information ne doit pas être donnée uniquement [par la forme, taille ou position](#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle implémentée de façon pertinente ?"
              ],
              "2": [
                "Dans chaque page web, pour chaque image ou ensemble d’images, l’information ne doit pas être donnée uniquement [par la forme, taille ou position](#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle implémentée de façon pertinente ?"
              ],
              "3": [
                "Dans chaque page web, pour chaque [média temporel](#media-temporel-type-son-video-et-synchronise), l’information ne doit pas être donnée uniquement [par la forme, taille ou position](#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle implémentée de façon pertinente ?"
              ],
              "4": [
                "Dans chaque page web, pour chaque [média non temporel](#media-non-temporel), l’information ne doit pas être donnée uniquement [par la forme, taille ou position](#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle implémentée de façon pertinente ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.3 Sensory Characteristics (A)",
                  "1.4.1 Use of Color (A)"
                ]
              },
              {
                "techniques": [
                  "G96",
                  "G140",
                  "F14",
                  "F26"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 11,
            "title": "Pour chaque page web, les contenus peuvent-ils être présentés sans avoir recours à un défilement vertical pour une fenêtre ayant une hauteur de 256px ou à un défilement horizontal pour une fenêtre ayant une largeur de 320px (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Pour chaque page web, lorsque le contenu dont le sens de lecture est horizontal est affiché dans une fenêtre réduite à une largeur de 320px, l’ensemble des informations et des fonctionnalités sont-elles disponibles sans aucun défilement horizontal (hors cas particuliers) ?"
              ],
              "2": [
                "Pour chaque page web, lorsque le contenu dont le sens de lecture est vertical est affiché dans une fenêtre réduite à une hauteur de 256px, l’ensemble des informations et des fonctionnalités sont-elles disponibles sans aucun défilement vertical (hors cas particuliers) ?"
              ]
            },
            "particularCases": [
              "Font exception à ce critère, les contenus dont l'agencement requiert deux dimensions pour être compris ou utilisés comme :",
              {
                "ul": [
                  "- Les images, les graphiques ou les vidéos ;",
                  "- Les jeux (jeux de plateforme, par exemple) ;",
                  "- Les présentations (type diaporama, par exemple) ;",
                  "- Les tableaux de données ;",
                  "- Les interfaces où il est nécessaire d'avoir un ascenseur horizontal lors de la manipulation de l'interface."
                ]
              },
              "Note : la majorité des navigateurs sur les systèmes d'exploitation sur mobile (Android, iOS) ne gère pas correctement la redistribution en cas de zoom. Dans ce contexte, le critère sera considéré comme non applicable sur ces environnements."
            ],
            "technicalNote": [
              "Lorsqu'il est ici question de pixel, il s'agit du pixel CSS tel que défini par le W3C https://www.w3.org/TR/css3-values/"
            ],
            "references": [
              {
                "wcag": [
                  "1.4.10 Reflow (AA)"
                ]
              },
              {}
            ]
          }
        },
        {
          "criterium": {
            "number": 12,
            "title": "Dans chaque page web, les propriétés d’espacement du texte peuvent-elles être redéfinies par l’utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, le texte reste-t-il lisible lorsque l’affichage est modifié selon ces conditions (hors cas particuliers) ?",
                "L’espacement entre les lignes (`line-height`) est augmenté jusqu’à 1,5 fois la taille de la police ;",
                "L’espacement suivant les paragraphes (balise `<p>`) est augmenté jusqu’à 2 fois la taille de la police ;",
                "L’espacement des lettres (`letter-spacing`) est augmenté jusqu’à 0,12 fois la taille de la police ;",
                "L’espacement des mots (`word-spacing`) est augmenté jusqu’à 0,16 fois la taille de la police."
              ]
            },
            "particularCases": [
              "Font exception à ce critère, les contenus pour lesquels l’utilisateur n’a pas de possibilité de personnalisation :",
              {
                "ul": [
                  "- Les sous-titres directement intégrés à une vidéo ;",
                  "- Les images texte ;",
                  "- Le texte au sein d’une balise `<canvas>`."
                ]
              }
            ],
            "references": [
              {
                "wcag": [
                  "1.4.12 Text Spacing (AA)"
                ]
              },
              {
                "techniques": [
                  "C8",
                  "C21",
                  "C35",
                  "C36"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 13,
            "title": "Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d’un [composant d’interface](#composant-d-interface) sont-ils contrôlables par l’utilisateur (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque contenu additionnel devenant visible à la prise de focus ou au survol d’un [composant d’interface](#composant-d-interface) peut-il être masqué par une action de l’utilisateur sans déplacer le focus ou le pointeur de la souris (hors cas particuliers) ?"
              ],
              "2": [
                "Chaque contenu additionnel qui apparait au survol d’un [composant d’interface](#composant-d-interface) peut-il être survolé par le pointeur de la souris sans disparaître (hors cas particuliers) ?"
              ],
              "3": [
                "Chaque contenu additionnel qui apparaît à la prise de focus ou au survol d’un [composant d’interface](#composant-d-interface) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "Le contenu additionnel reste visible jusqu’à ce que l’utilisateur retire le pointeur souris ou le focus du contenu additionnel et du [composant d’interface](#composant-d-interface) ayant déclenché son apparition ;",
                "Le contenu additionnel reste visible jusqu’à ce que l’utilisateur déclenche une action masquant ce contenu sans déplacer le focus ou le pointeur de la souris du [composant d’interface](#composant-d-interface) ayant déclenché son apparition ;",
                "Le contenu additionnel reste visible jusqu’à ce qu’il ne soit plus valide."
              ]
            },
            "particularCases": [
              "Lorsque le contenu additionnel est contrôlé par l’agent utilisateur (par exemple, attribut `title` ou validation native de formulaire) ou correspond à une fenêtre modale conforme au [motif de conception](#motif-de-conception) WAI-ARIA `dialog`, le critère 10.13 est non applicable.",
              "Lorsque le contenu additionnel ne masque ou ne remplace aucun contenu porteur d’information, le test 10.13.1 est non applicable."
            ],
            "references": [
              {
                "wcag": [
                  "1.4.13 Content on Hover or Focus (AA)"
                ]
              },
              {
                "techniques": [
                  "F95"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 14,
            "title": "Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?",
            "tests": {
              "1": [
                "Dans chaque page web, les contenus additionnels apparaissant au survol d’un [composant d’interface](#composant-d-interface) via les styles CSS respectent-ils si nécessaire une de ces conditions ?",
                "Les contenus additionnels apparaissent également à l’activation du composant via le clavier et tout dispositif de pointage ;",
                "Les contenus additionnels apparaissent également à la prise de focus du composant ;",
                "Les contenus additionnels apparaissent également par le biais de l’activation ou de la prise de focus d’un autre composant."
              ],
              "2": [
                "Dans chaque page web, les contenus additionnels apparaissant au focus d’un [composant d’interface](#composant-d-interface) via les styles CSS respectent-ils si nécessaire une de ces conditions ?",
                "Les contenus additionnels apparaissent également à l’activation du composant via le clavier et tout dispositif de pointage ;",
                "Les contenus additionnels apparaissent également au survol du composant ;",
                "Les contenus additionnels apparaissent également par le biais de l’activation ou du survol d’un autre composant."
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.1.1 Keyboard (A)"
                ]
              },
              {
                "techniques": [
                  "G202"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Formulaires",
      "number": 11,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Chaque [champ de formulaire](#champ-de-saisie-de-formulaire) a-t-il une [étiquette](#etiquette-de-champ-de-formulaire) ?",
            "tests": {
              "1": [
                "Chaque [champ de formulaire](#champ-de-saisie-de-formulaire) vérifie-t-il une de ces conditions ?",
                "Le [champ de formulaire](#champ-de-saisie-de-formulaire) possède un attribut WAI-ARIA `aria-labelledby` référençant un [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) identifié ;",
                "Le [champ de formulaire](#champ-de-saisie-de-formulaire) possède un attribut WAI-ARIA `aria-label` ;",
                "Une balise `<label>` ayant un attribut `for` est associée au [champ de formulaire](#champ-de-saisie-de-formulaire) ;",
                "Le [champ de formulaire](#champ-de-saisie-de-formulaire) possède un attribut `title` ;",
                "Un bouton adjacent au [champ de formulaire](#champ-de-saisie-de-formulaire) lui fournit une étiquette visible et un élément `<label>` visuellement caché ou un attribut WAI-ARIA `aria-label`, `aria-labelledby` ou `title` lui fournit un nom accessible."
              ],
              "2": [
                "Chaque [champ de formulaire](#champ-de-saisie-de-formulaire) associé à une balise `<label>` ayant un attribut `for`, vérifie-t-il ces conditions ?",
                "Le [champ de formulaire](#champ-de-saisie-de-formulaire) possède un attribut `id` ;",
                "La valeur de l’attribut `for` est égale à la valeur de l’attribut `id` du [champ de formulaire](#champ-de-saisie-de-formulaire) associé."
              ],
              "3": [
                "Chaque [champ de formulaire](#champ-de-saisie-de-formulaire) ayant une [étiquette](#etiquette-de-champ-de-formulaire) dont le contenu n’est pas visible ou à proximité (masqué, `aria-label`) ou qui n’est pas [accolé](#accoles-etiquette-et-champ-accoles) au champ (`aria-labelledby`), vérifie-t-il une de ses conditions ?",
                "Le [champ de formulaire](#champ-de-saisie-de-formulaire) possède un attribut `title` dont le contenu permet de comprendre la nature de la saisie attendue ;",
                "Le [champ de formulaire](#champ-de-saisie-de-formulaire) est accompagné d’un [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) accolé au champ qui devient visible à la prise de focus permettant de comprendre la nature de la saisie attendue ;",
                "Le [champ de formulaire](#champ-de-saisie-de-formulaire) est accompagné d’un [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) visible accolé au champ permettant de comprendre la nature de la saisie attendue."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)",
                  "2.4.6 Headings and Labels (AA)",
                  "3.3.2 Labels or Instructions (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "G82",
                  "G131",
                  "H44",
                  "H65",
                  "F68",
                  "F82",
                  "F86",
                  "ARIA6",
                  "ARIA9",
                  "ARIA14",
                  "ARIA16"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Chaque [étiquette](#etiquette-de-champ-de-formulaire) associée à un [champ de formulaire](#champ-de-saisie-de-formulaire) est-elle pertinente (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque balise `<label>` permet-elle de connaître la fonction exacte du [champ de formulaire](#champ-de-saisie-de-formulaire) auquel elle est associée ?"
              ],
              "2": [
                "Chaque attribut `title` permet-il de connaître la fonction exacte du [champ de formulaire](#champ-de-saisie-de-formulaire) auquel il est associé ?"
              ],
              "3": [
                "Chaque étiquette implémentée via l’attribut WAI-ARIA `aria-label` permet-elle de connaître la fonction exacte du [champ de formulaire](#champ-de-saisie-de-formulaire) auquel elle est associée ?"
              ],
              "4": [
                "Chaque [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé via l’attribut WAI-ARIA `aria-labelledby` permet-il de connaître la fonction exacte du [champ de formulaire](#champ-de-saisie-de-formulaire) auquel il est associé ?"
              ],
              "5": [
                "Chaque [champ de formulaire](#champ-de-saisie-de-formulaire) ayant un [intitulé visible](#intitule-visible) vérifie-t-il ces conditions (hors cas particuliers) ?",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` du [champ de formulaire](#champ-de-saisie-de-formulaire) contient au moins l’[intitulé visible](#intitule-visible) ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) lié au [champ de formulaire](#champ-de-saisie-de-formulaire) via un attribut WAI-ARIA `aria-labelledby` contient au moins l’[intitulé visible](#intitule-visible) ;",
                "S’il est présent, le contenu de l’attribut `title` du [champ de formulaire](#champ-de-saisie-de-formulaire) contient au moins l’[intitulé visible](#intitule-visible) ;",
                "S’il est présent le contenu de la balise `<label>` associé au [champ de formulaire](#champ-de-saisie-de-formulaire) contient au moins l’[intitulé visible](#intitule-visible)."
              ],
              "6": [
                "Chaque bouton adjacent au [champ de formulaire](#champ-de-saisie-de-formulaire) qui fournit une étiquette visible permet-il de connaître la fonction exacte du [champ de formulaire](#champ-de-saisie-de-formulaire) auquel il est associé ?"
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particuliers pour le test 11.2.5 lorsque :",
              {
                "ul": [
                  "- La ponctuation et les lettres majuscules sont présentes dans le texte de l’[intitulé visible](#intitule-visible) : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;",
                  "- Le texte de l’[intitulé visible](#intitule-visible) sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous)."
                ]
              },
              "Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).",
              "Ce cas particulier s’applique également au test 11.9.3."
            ],
            "references": [
              {
                "wcag": [
                  "2.4.6 Headings and Labels (AA)",
                  "2.5.3 Label in Name (A)",
                  "3.3.2 Labels or Instructions (A)"
                ]
              },
              {
                "techniques": [
                  "G82",
                  "G131",
                  "H44",
                  "H65",
                  "ARIA6",
                  "ARIA9",
                  "ARIA14",
                  "ARIA16"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "Dans chaque [formulaire](#formulaire), chaque [étiquette](#etiquette-de-champ-de-formulaire) associée à un [champ de formulaire](#champ-de-saisie-de-formulaire) ayant la même fonction et répétée plusieurs fois dans une même page ou dans un [ensemble de pages](#ensemble-de-pages) est-elle [cohérente](#etiquettes-coherentes) ?",
            "tests": {
              "1": [
                "Chaque [étiquette](#etiquette-de-champ-de-formulaire) associée à un [champ de formulaire](#champ-de-saisie-de-formulaire) ayant la même fonction et répétée plusieurs fois dans une même page est-elle [cohérente](#etiquettes-coherentes) ?"
              ],
              "2": [
                "Chaque [étiquette](#etiquette-de-champ-de-formulaire) associée à un [champ de formulaire](#champ-de-saisie-de-formulaire) ayant la même fonction et répétée dans un ensemble de pages est-elle [cohérente](#etiquettes-coherentes) ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "3.2.4 Consistent Identification (AA)"
                ]
              },
              {
                "techniques": [
                  "F31"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 4,
            "title": "Dans chaque [formulaire](#formulaire), chaque [étiquette de champ](#etiquette-de-champ-de-formulaire) et son champ associé sont-ils [accolés](#accoles-etiquette-et-champ-accoles) (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque [étiquette de champ](#etiquette-de-champ-de-formulaire) et son [champ](#champ-de-saisie-de-formulaire) associé sont-ils [accolés](#accoles-etiquette-et-champ-accoles) ?"
              ],
              "2": [
                "Chaque [étiquette](#etiquette-de-champ-de-formulaire) [accolée](#accoles-etiquette-et-champ-accoles) à un [champ](#champ-de-saisie-de-formulaire) (à l’exception des cases à cocher, bouton radio ou balises ayant un attribut WAI-ARIA `role=\"checkbox\"`, `role=\"radio\"` ou `role=\"switch\"`), vérifie-t-elle ces conditions (hors cas particuliers) ?",
                "L’étiquette est visuellement [accolée](#accoles-etiquette-et-champ-accoles) immédiatement au-dessus ou à gauche du [champ de formulaire](#champ-de-saisie-de-formulaire) lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite ;",
                "L’étiquette est visuellement [accolée](#accoles-etiquette-et-champ-accoles) immédiatement au-dessus ou à droite du [champ de formulaire](#champ-de-saisie-de-formulaire) lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche."
              ],
              "3": [
                "Chaque [étiquette](#etiquette-de-champ-de-formulaire) [accolée](#accoles-etiquette-et-champ-accoles) à un [champ](#champ-de-saisie-de-formulaire) de type `checkbox` ou `radio` ou à une balise ayant un attribut WAI-ARIA `role=\"checkbox\"`, `role=\"radio\"` ou `role=\"switch\"`, vérifie-t-elle ces conditions (hors cas particuliers) ?",
                "L’étiquette est visuellement [accolée](#accoles-etiquette-et-champ-accoles) immédiatement au-dessous ou à droite du [champ de formulaire](#champ-de-saisie-de-formulaire) lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite ;",
                "L’étiquette est visuellement [accolée](#accoles-etiquette-et-champ-accoles) immédiatement au-dessous ou à gauche du [champ de formulaire](#champ-de-saisie-de-formulaire) lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche."
              ]
            },
            "particularCases": [
              "Les tests 11.4.2 et 11.4.3 seront considérés comme non applicables :",
              {
                "ul": [
                  "- Dans le cas où l’[étiquette](#etiquette-de-champ-de-formulaire) mélange une portion de texte qui se lit de droite à gauche avec une portion de texte qui se lit de gauche à droite ;",
                  "- Dans le cas où un formulaire contient des labels de plusieurs langues qui se liraient de droite à gauche et inversement. Par exemple, un formulaire de commande en arabe qui propose une liste de cases à cocher de produit en langue française ou mixant des produits en langue arabe ou en langue française ;",
                  "- Dans le cas où les champs de type `radio` ou `checkbox` et les balises ayant un attribut WAI-ARIA `role=\"checkbox\"`, `role=\"radio\"` ou `role=\"switch\"` ne sont pas visuellement présentés sous forme de bouton radio ou de case à cocher ;",
                  "- Dans le cas où les champs seraient utilisés dans un contexte où il pourrait être légitime, du point de vue de l’expérience utilisateur, de placer les étiquettes de manière différente à celle requise dans les tests 11.4.2 et 11.4.3."
                ]
              }
            ],
            "references": [
              {
                "wcag": [
                  "3.3.2 Labels or Instructions (A)"
                ]
              },
              {
                "techniques": [
                  "G162"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 5,
            "title": "Dans chaque [formulaire](#formulaire), les [champs de même nature](#champs-de-meme-nature) sont-ils regroupés, si nécessaire ?",
            "tests": {
              "1": [
                "Les [champs de même nature](#champs-de-meme-nature) vérifient-ils l’une de ces conditions, si nécessaire ?",
                "Les [champs de même nature](#champs-de-meme-nature) sont regroupés dans une balise `<fieldset>` ;",
                "Les [champs de même nature](#champs-de-meme-nature) sont regroupés dans une balise possédant un attribut WAI-ARIA `role=\"group\"` ;",
                "Les [champs de même nature](#champs-de-meme-nature) de type radio (`<input type=\"radio\">`) ou balises possédant un attribut WAI-ARIA `role=\"radio\"`) sont regroupés dans une balise possédant un attribut WAI-ARIA `role=\"radiogroup\"` ou `role=\"group\"`."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)",
                  "3.3.2 Labels or Instructions (A)"
                ]
              },
              {
                "techniques": [
                  "H71",
                  "ARIA17"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 6,
            "title": "Dans chaque [formulaire](#formulaire), chaque regroupement de [champs de même nature](#champs-de-meme-nature) a-t-il une [légende](#legende) ?",
            "tests": {
              "1": [
                "Chaque regroupement de [champs de même nature](#champs-de-meme-nature) possède-t-il une [légende](#legende) ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)",
                  "3.3.2 Labels or Instructions (A)"
                ]
              },
              {
                "techniques": [
                  "H71",
                  "ARIA17"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 7,
            "title": "Dans chaque [formulaire](#formulaire), chaque [légende](#legende) associée à un regroupement de [champs de même nature](#champs-de-meme-nature) est-elle pertinente ?",
            "tests": {
              "1": [
                "Chaque [légende](#legende) associée à un regroupement de [champs de même nature](#champs-de-meme-nature) est-elle pertinente ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)",
                  "3.3.2 Labels or Instructions (A)"
                ]
              },
              {
                "techniques": [
                  "H71",
                  "ARIA17"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 8,
            "title": "Dans chaque [formulaire](#formulaire), les [items de même nature d’une liste de choix](#items-de-meme-nature-d-une-liste-de-choix) sont-ils regroupés de manière pertinente ?",
            "tests": {
              "1": [
                "Pour chaque balise `<select>`, les [items de même nature d’une liste de choix](#items-de-meme-nature-d-une-liste-de-choix) sont-ils regroupés avec une balise `<optgroup>`, si nécessaire ?"
              ],
              "2": [
                "Dans chaque balise `<select>`, chaque balise `<optgroup>` possède-t-elle un attribut `label` ?"
              ],
              "3": [
                "Pour chaque balise `<optgroup>` ayant un attribut `label`, le contenu de l’attribut `label` est-il pertinent ?"
              ]
            },
            "technicalNote": [
              "Il est possible d’utiliser une balise ayant un attribut WAI-ARIA `role=\"listbox\"` en remplacement d’une balise `<select>`. En revanche, il est impossible de créer des groupes d’options via l’utilisation de WAI-ARIA. De ce fait, une liste nécessitant un regroupement d’options structurée à l’aide d’une balise ayant un attribut WAI-ARIA `role=\"listbox\"` sera considérée comme non conforme au critère 11.8."
            ],
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)"
                ]
              },
              {
                "techniques": [
                  "H85"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 9,
            "title": "Dans chaque [formulaire](#formulaire), l’intitulé de chaque [bouton](#bouton-formulaire) est-il pertinent (hors cas particuliers) ?",
            "tests": {
              "1": [
                "L’intitulé de chaque [bouton](#bouton-formulaire) vérifie-t-il ces conditions (hors cas particuliers) ?",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label` est pertinent ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) lié au bouton via un attribut WAI-ARIA `aria-labelledby` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `value` d’une balise `<input>` de type `submit`, `reset` ou `button` est pertinent ;",
                "S’il est présent, le contenu de la balise `<button>` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `alt` d’une balise `<input>` de type `image` est pertinent ;",
                "S’il est présent, le contenu de l’attribut `title` est pertinent."
              ],
              "2": [
                "Chaque [bouton](#bouton-formulaire) affichant un [intitulé visible](#intitule-visible) vérifie-t-il ces conditions (hors cas particuliers) ?",
                "S’il est présent, le contenu de l’attribut WAI-ARIA `aria-label `contient au moins l’[intitulé visible](#intitule-visible) ;",
                "S’il est présent, le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) lié au bouton via un attribut WAI-ARIA `aria-labelledby` contient au moins l’[intitulé visible](#intitule-visible) ;",
                "S’il est présent, le contenu de l’attribut value d’une balise `<input>` de type `submit`, `reset` ou `button` contient au moins l’[intitulé visible](#intitule-visible) ;",
                "S’il est présent, le contenu de la balise `<button>` contient au moins l’[intitulé visible](#intitule-visible) ;",
                "S’il est présent, le contenu de l’attribut `alt` d’une balise `<input>` de type `image` contient au moins l’[intitulé visible](#intitule-visible) ;",
                "S’il est présent, le contenu de l’attribut `title` contient au moins l’[intitulé visible](#intitule-visible)."
              ]
            },
            "particularCases": [
              "Pour le test 11.9.2, voir cas particuliers critère 11.2."
            ],
            "references": [
              {
                "wcag": [
                  "2.5.3 Label in Name (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "H36",
                  "H91",
                  "ARIA6",
                  "ARIA9",
                  "ARIA14",
                  "ARIA16"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 10,
            "title": "Dans chaque [formulaire](#formulaire), le [contrôle de saisie](#controle-de-saisie-formulaire) est-il utilisé de manière pertinente (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Les [indications du caractère obligatoire](#indication-de-champ-obligatoire) de la saisie des champs vérifient-elles une de ces conditions (hors cas particuliers) ?",
                "Une [indication de champ obligatoire](#indication-de-champ-obligatoire) est visible et permet d’identifier nommément le champ concerné préalablement à la validation du formulaire ;",
                "Le champ obligatoire dispose de l’attribut `aria-required=\"true\"` ou `required` préalablement à la validation du formulaire."
              ],
              "2": [
                "Les champs obligatoires ayant l’attribut `aria-required=\"true\"` ou `required` vérifient-ils une de ces conditions ?",
                "Une [indication de champ obligatoire](#indication-de-champ-obligatoire) est visible et située dans l’étiquette associée au champ préalablement à la validation du formulaire ;",
                "Une [indication de champ obligatoire](#indication-de-champ-obligatoire) est visible et située dans le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé au champ préalablement à la validation du formulaire."
              ],
              "3": [
                "Les messages d’erreur indiquant l’absence de saisie d’un champ obligatoire vérifient-ils une de ces conditions ?",
                "Le message d’erreur indiquant l’absence de saisie d’un champ obligatoire est visible et permet d’identifier nommément le champ concerné ;",
                "Le champ obligatoire dispose de l’attribut `aria-invalid=\"true\"`."
              ],
              "4": [
                "Les champs obligatoires ayant l’attribut `aria-invalid=\"true\"` vérifient-ils une de ces conditions ?",
                "Le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans l’étiquette associée au champ ;",
                "Le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé au champ."
              ],
              "5": [
                "Les instructions et indications du type de données et/ou de format obligatoires vérifient-elles une de ces conditions ?",
                "Une instruction ou une indication du type de données et/ou de format obligatoire est visible et permet d’identifier nommément le champ concerné préalablement à la validation du formulaire ;",
                "Une instruction ou une indication du type de données et/ou de format obligatoire est visible dans l’étiquette ou le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé au champ préalablement à la validation du formulaire."
              ],
              "6": [
                "Les messages d’erreurs fournissant une instruction ou une indication du type de données et/ou de format obligatoire des champs vérifient-ils une de ces conditions ?",
                "Le message d’erreur fournissant une instruction ou une indication du type de données et/ou de format obligatoires est visible et identifie le champ concerné ;",
                "Le champ dispose de l’attribut `aria-invalid=\"true\"`."
              ],
              "7": [
                "Les champs ayant l’attribut `aria-invalid=\"true\"` dont la saisie requiert un type de données et/ou de format obligatoires vérifient-ils une de ces conditions ?",
                "Une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans la balise `<label>` associée au champ ;",
                "Une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans le [passage de texte](#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby) associé au champ."
              ]
            },
            "particularCases": [
              "Le test 11.10.1 et le test 11.10.2 seront considérés comme non applicables lorsque le formulaire comporte un seul [champ de formulaire](#champ-de-saisie-de-formulaire) ou qu’il indique les champs optionnels de manière :",
              {
                "ul": [
                  "- Visible ;",
                  "- Dans la balise `<label>` ou dans la [légende](#legende) associée au champ."
                ]
              },
              "Dans le cas où l’ensemble des champs d’un formulaire sont obligatoires, les tests 11.10.1 et 11.10.2 restent applicables."
            ],
            "technicalNote": [
              "Dans un long formulaire dont la majorité des champs sont obligatoires, on pourrait constater que ce sont les quelques champs restés facultatifs qui sont explicitement signalés comme tels. Dans ce cas, il faudrait s’assurer que :",
              {
                "ul": [
                  "- Un message précise visuellement en haut de formulaire que “tous les champs sont obligatoires sauf ceux indiqués comme étant facultatifs” ;",
                  "- Une mention “facultatif” est présente visuellement dans le libellé des champs facultatifs ou dans la légende d’un groupe de champs facultatifs ;",
                  "- Un attribut `required` ou `aria-required=\"true\"` reste associé à chaque champ qui n’est pas concerné par ce caractère facultatif."
                ]
              }
            ],
            "references": [
              {
                "wcag": [
                  "3.3.1 Error Identification (A)",
                  "3.3.2 Labels or Instructions (A)"
                ]
              },
              {
                "techniques": [
                  "G83",
                  "G84",
                  "G85",
                  "G89",
                  "G184",
                  "H44",
                  "H81",
                  "H89",
                  "H90",
                  "F81",
                  "SCR18",
                  "SCR32",
                  "ARIA1",
                  "ARIA2",
                  "ARIA6",
                  "ARIA9",
                  "ARIA16",
                  "ARIA21"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 11,
            "title": "Dans chaque [formulaire](#formulaire), le [contrôle de saisie](#controle-de-saisie-formulaire) est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ?",
            "tests": {
              "1": [
                "Pour chaque erreur de saisie, les types et les formats de données sont-ils suggérés, si nécessaire ?"
              ],
              "2": [
                "Pour chaque erreur de saisie, des exemples de valeurs attendues sont-ils suggérés, si nécessaire ?"
              ]
            },
            "technicalNote": [
              "Certains types de contrôles en HTML5 proposent des messages d’aide à la saisie automatique : par exemple le type `email` affiche un message du type « veuillez saisir une adresse e-mail valide » dans le cas où l’adresse e-mail saisie ne correspond pas au format attendu. Ces messages sont personnalisables via l’API Constraint Validation, ce qui permet de personnaliser les messages d’erreur et de valider le critère. L’attribut `pattern` permet d’effectuer automatiquement des contrôles de format (via des expressions régulières) et affiche un message d’aide personnalisable via l’attribut `title` : ce dispositif valide également le critère."
            ],
            "references": [
              {
                "wcag": [
                  "3.3.3 Eror Suggestion (AA)"
                ]
              },
              {
                "techniques": [
                  "G84",
                  "G85",
                  "G89",
                  "G177",
                  "H89"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 12,
            "title": "Pour chaque [formulaire](#formulaire) qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l’utilisateur ?",
            "tests": {
              "1": [
                "Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou un examen, ou dont la validation a des conséquences financières ou juridiques, la saisie des données vérifie-t-elle une de ces conditions ?",
                "L’utilisateur peut [modifier ou annuler les données et les actions effectuées](#modifier-ou-annuler-les-donnees-et-les-actions-effectues) sur ces données après la validation du formulaire ;",
                "L’utilisateur peut vérifier et corriger les données avant la validation d’un formulaire en plusieurs étapes ;",
                "Un mécanisme de confirmation explicite, via une case à cocher (balise `<input>` de type `checkbox` ou balise ayant un attribut WAI-ARIA `role=\"checkbox\"`) ou une étape supplémentaire, est présent."
              ],
              "2": [
                "Chaque formulaire dont la validation modifie ou supprime des données à caractère financier, juridique ou personnel vérifie-t-il une de ces conditions ?",
                "Un mécanisme permet de récupérer les données supprimées ou modifiées par l’utilisateur ;",
                "Un mécanisme de demande de confirmation explicite de la suppression ou de la modification, via un [champ de formulaire](#champ-de-saisie-de-formulaire) ou une étape supplémentaire, est proposé."
              ]
            },
            "references": [
              {
                "wcag": [
                  "3.3.4 Error Prevention (Legal, Financial, Data) (AA)"
                ]
              },
              {
                "techniques": [
                  "G98",
                  "G99",
                  "G155",
                  "G164",
                  "G168"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 13,
            "title": "La finalité d’un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l’utilisateur ?",
            "tests": {
              "1": [
                "Chaque [champ de formulaire](#champ-de-saisie-de-formulaire) dont l’objet se rapporte à une information concernant l’utilisateur vérifie-t-il ces conditions ?",
                "Le [champ de formulaire](#champ-de-saisie-de-formulaire) possède un attribut `autocomplete `;",
                "L’attribut `autocomplete` est pourvu d’une valeur présente dans la [liste des valeurs possibles pour l’attribut `autocomplete`](#liste-des-valeurs-possibles-pour-l-attribut-autocomplete) associés à un [champ de formulaire](#champ-de-saisie-de-formulaire) ;",
                "La valeur indiquée pour l’attribut `autocomplete` est pertinente au regard du type d’information attendu."
              ]
            },
            "technicalNote": [
              "La [liste des valeurs possibles pour l’attribut `autocomplete`](#liste-des-valeurs-possibles-pour-l-attribut-autocomplete) repose sur la liste des valeurs présentes dans la spécification WCAG2.1 qui reprend elle-même la liste des valeurs de type “field name” de la spécification HTML5.2. Le critère WCAG demande à ce que l’une de ces valeurs soit présente pour qualifier un champ de saisie concernant l’utilisateur.",
              "Ce que le critère WCAG laisse implicite, ce sont les différentes règles de construction possibles pour obtenir une valeur (simple ou composée) pour l’attribut `autocomplete`. C’est cependant l’affaire du développeur de fournir à l’attribut `autocomplete` une valeur ou un ensemble de valeurs valides au regard des exigences de l’algorithme fourni par la spécification HTML5.2. Ainsi, un attribut `autocomplete` ne peut contenir qu’une seule valeur de type `“field name”`, comme `\"name\"` ou `\"street-address\"`. On peut avoir également un ensemble composé de différentes valeurs comme, par exemple, `autocomplete=\"shipping name\"` ou `autocomplete=\"section-software shipping street-address\"` : `\"section-software\"` renvoie à une valeur de type “scope” et `\"shipping\"` à une valeur de type “hint set”, mais toujours une seule valeur de type “field name”."
            ],
            "references": [
              {
                "wcag": [
                  "1.3.5 Identify Input Purpose (AA)"
                ]
              },
              {
                "techniques": [
                  "H98"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      "topic": "Navigation",
      "number": 12,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Chaque [ensemble de pages](#ensemble-de-pages) dispose-t-il de deux [systèmes de navigation](#systeme-de-navigation) différents, au moins (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Chaque [ensemble de pages](#ensemble-de-pages) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "Un [menu de navigation](#menu-et-barre-de-navigation) et un [plan du site](#page-plan-du-site) sont présents ;",
                "Un [menu de navigation](#menu-et-barre-de-navigation) et un [moteur de recherche](#moteur-de-recherche-interne-a-un-site-web) sont présents ;",
                "Un [moteur de recherche](#moteur-de-recherche-interne-a-un-site-web) et un [plan du site](#page-plan-du-site) sont présents."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particulier lorsque le site web est constitué d’une seule page ou d’un nombre très limité de pages (cf. note). Dans ce cas-là, le critère est non applicable.",
              "Le critère est également non applicable pour les pages d’un ensemble de pages qui sont le résultat ou une partie d’un processus (un processus de paiement ou de prise de commande, par exemple).",
              "Note : l’appréciation d’un nombre très limité de pages devrait être réservé à un site dont l’ensemble des pages sont atteignables depuis la page d’accueil."
            ],
            "references": [
              {
                "wcag": [
                  "2.4.5 Multiple Ways (AA)"
                ]
              },
              {
                "techniques": [
                  "G63",
                  "G64",
                  "G161"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Dans chaque [ensemble de pages](#ensemble-de-pages), le [menu et les barres de navigation](#menu-et-barre-de-navigation) sont-ils toujours à la même place (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque [ensemble de pages](#ensemble-de-pages), chaque page disposant d’un [menu et les barres de navigation](#menu-et-barre-de-navigation) vérifie-t-elle ces conditions (hors cas particuliers) ?",
                "Le [menu et les barres de navigation](#menu-et-barre-de-navigation) sont toujours à la même place dans la présentation ;",
                "Le [menu et les barres de navigation](#menu-et-barre-de-navigation) se présentent toujours dans le même ordre relatif dans le code source."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particuliers lorsque :",
              {
                "ul": [
                  "- La page est la page d’accueil ;",
                  "- Le site web est constitué d’une seule page ;",
                  "- Le changement fait suite à une modification initiée par l’utilisateur."
                ]
              },
              "Dans ces situations, le critère est non applicable."
            ],
            "references": [
              {
                "wcag": [
                  "3.2.3 Consistent Navigation (AA)"
                ]
              },
              {
                "techniques": [
                  "G61",
                  "F66"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "La [page « plan du site »](#page-plan-du-site) est-elle pertinente ?",
            "tests": {
              "1": [
                "La [page « plan du site »](#page-plan-du-site) est-elle représentative de l’architecture générale du site ?"
              ],
              "2": [
                "Les liens du [plan du site](#page-plan-du-site) sont-ils fonctionnels ?"
              ],
              "3": [
                "Les liens du [plan du site](#page-plan-du-site) renvoient-ils bien vers les pages indiquées par l’intitulé ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.4.5 Multiple Ways (AA)"
                ]
              },
              {
                "techniques": [
                  "G63"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 4,
            "title": "Dans chaque [ensemble de pages](#ensemble-de-pages), la [page « plan du site »](#page-plan-du-site) est-elle accessible à partir d’une fonctionnalité identique ?",
            "tests": {
              "1": [
                "Dans chaque [ensemble de pages](#ensemble-de-pages), la [page « plan du site »](#page-plan-du-site) est-elle accessible à partir d’une fonctionnalité identique ?"
              ],
              "2": [
                "Dans chaque [ensemble de pages](#ensemble-de-pages), la fonctionnalité vers la [page « plan du site »](#page-plan-du-site) est-elle située à la même place dans la présentation ?"
              ],
              "3": [
                "Dans chaque [ensemble de pages](#ensemble-de-pages), la fonctionnalité vers la [page « plan du site »](#page-plan-du-site) se présente-t-elle toujours dans le même ordre relatif dans le code source ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.4.5 Multiple Ways (AA)",
                  "3.2.3 Consistent Navigation (AA)"
                ]
              },
              {
                "techniques": [
                  "G61",
                  "G63"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 5,
            "title": "Dans chaque [ensemble de pages](#ensemble-de-pages), le [moteur de recherche](#moteur-de-recherche-interne-a-un-site-web) est-il atteignable de manière identique ?",
            "tests": {
              "1": [
                "Dans chaque [ensemble de pages](#ensemble-de-pages), le [moteur de recherche](#moteur-de-recherche-interne-a-un-site-web) est-il accessible à partir d’une fonctionnalité identique ?"
              ],
              "2": [
                "Dans chaque [ensemble de pages](#ensemble-de-pages), la fonctionnalité vers le [moteur de recherche](#moteur-de-recherche-interne-a-un-site-web) est-elle située à la même place dans la présentation ?"
              ],
              "3": [
                "Dans chaque [ensemble de pages](#ensemble-de-pages), la fonctionnalité vers le [moteur de recherche](#moteur-de-recherche-interne-a-un-site-web) se présente-t-elle toujours dans le même ordre relatif dans le code source ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "3.2.3 Consistent Navigation (AA)"
                ]
              },
              {
                "techniques": [
                  "G61",
                  "F66"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 6,
            "title": "Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d’[en-tête](#zone-d-en-tete), de [navigation principale](#menu-et-barre-de-navigation), de [contenu principal](#zone-de-contenu-principal), de [pied de page](#zone-de-pied-de-page) et de [moteur de recherche](#moteur-de-recherche-interne-a-un-site-web)) peuvent-elles être atteintes ou évitées ?",
            "tests": {
              "1": [
                "Dans chaque page web où elles sont présentes, la zone d’[en-tête](#zone-d-en-tete), de [navigation principale](#menu-et-barre-de-navigation), de [contenu principal](#zone-de-contenu-principal), de [pied de page](#zone-de-pied-de-page) et de [moteur de recherche](#moteur-de-recherche-interne-a-un-site-web) respectent-elles au moins une de ces conditions ?",
                "La zone possède un rôle WAI-ARIA de type [landmark](#landmarks) correspondant à sa nature ;",
                "La zone possède un titre dont le contenu permet de comprendre la nature du contenu de la zone ;",
                "La zone peut être masquée par le biais d’un bouton précédent directement la zone dans l’ordre du code source ;",
                "La zone peut être évitée par le biais d’un [lien d’évitement](#liens-d-evitement-ou-d-acces-rapide) précédent directement la zone dans l’ordre du code source ;",
                "La zone peut être atteinte par le biais d’un [lien d’accès rapide](#liens-d-evitement-ou-d-acces-rapide) visible ou, à défaut, visible à la prise de focus."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.3.1 Info and Relationships (A)",
                  "2.4.1 Bypass Blocks (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "H69",
                  "G115",
                  "ARIA4",
                  "ARIA11"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 7,
            "title": "Dans chaque page web, un [lien d’évitement ou d’accès rapide](#liens-d-evitement-ou-d-acces-rapide) à la [zone de contenu principal](#zone-de-contenu-principal) est-il présent (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, un lien permet-il d’éviter la [zone de contenu principal](#zone-de-contenu-principal) ou d’y accéder (hors cas particuliers) ?"
              ],
              "2": [
                "Dans chaque ensemble de pages, le [lien d’évitement ou d’accès rapide](#liens-d-evitement-ou-d-acces-rapide) à la [zone de contenu principal](#zone-de-contenu-principal) vérifie-t-il ces conditions (hors cas particuliers) ?",
                "Le lien est situé à la même place dans la présentation ;",
                "Le lien se présente toujours dans le même ordre relatif dans le code source ;",
                "Le lien est visible ou, à défaut, visible à la prise de focus ;",
                "Le lien est fonctionnel."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particuliers lorsque le site web est constitué d’une seule page.",
              "Dans ce cas de figure, l’obligation de la présence d’un lien d’accès rapide est liée au contexte de la page : présence ou absence de navigation ou de contenus additionnels, par exemple. Le critère peut être considéré comme non applicable lorsqu’il est avéré qu’un lien d’accès rapide est inutile."
            ],
            "references": [
              {
                "wcag": [
                  "2.4.1 Bypass Blocks (A)",
                  "2.4.3 Focus Order (A)",
                  "3.2.3 Consistent Navigation (AA)"
                ]
              },
              {
                "techniques": [
                  "G1",
                  "G59",
                  "G123",
                  "G124",
                  "SCR28",
                  "F66"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 8,
            "title": "Dans chaque page web, l’[ordre de tabulation](#ordre-de-tabulation) est-il [cohérent](#comprehensible-ordre-de-lecture) ?",
            "tests": {
              "1": [
                "Dans chaque page web, l’[ordre de tabulation](#ordre-de-tabulation) dans le contenu est-il [cohérent](#comprehensible-ordre-de-lecture) ?"
              ],
              "2": [
                "Pour chaque [script](#script) qui met à jour ou insère un contenu, l’[ordre de tabulation](#ordre-de-tabulation) reste-t-il [cohérent](#comprehensible-ordre-de-lecture) ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.4.3 Focus Order (A)"
                ]
              },
              {
                "techniques": [
                  "G59",
                  "H4",
                  "F44",
                  "F85",
                  "SCR26",
                  "SCR27",
                  "SCR37",
                  "C7"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 9,
            "title": "Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque [élément recevant le focus](#prise-de-focus) vérifie-t-il une de ces conditions ?",
                "Il est possible d’atteindre l’élément suivant ou précédent pouvant recevoir le focus avec la touche de tabulation ;",
                "L’utilisateur est informé d’un mécanisme fonctionnel permettant d’atteindre au clavier l’élément suivant ou précédent pouvant recevoir le focus."
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.1.1 Keyboard (A)",
                  "2.1.2 No Keyboard Trap (A)"
                ]
              },
              {
                "techniques": [
                  "G21",
                  "H91",
                  "F10"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 10,
            "title": "Dans chaque page web, les [raccourcis clavier](#raccourci-clavier) n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque [raccourci clavier](#raccourci-clavier) n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) vérifie-t-il l’une de ces conditions ?",
                "Un mécanisme est disponible pour désactiver le [raccourci clavier](#raccourci-clavier) ;",
                "Un mécanisme est disponible pour configurer la touche de [raccourci clavier](#raccourci-clavier) au moyen des touches de modification (Ctrl, Alt, Maj, etc) ;",
                "Dans le cas d’un [composant d’interface](#composant-d-interface) utilisateur, le [raccourci clavier](#raccourci-clavier) qui lui est associé ne peut être activé que si le focus clavier est sur ce composant."
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.1.4 Character Key Shortcuts (A)"
                ]
              },
              {
                "techniques": [
                  "F99",
                  "G217"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 11,
            "title": "Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un [composant d’interface](#composant-d-interface) sont-ils si nécessaire atteignables au clavier ?",
            "tests": {
              "1": [
                "Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un [composant d’interface](#composant-d-interface) sont-ils si nécessaire atteignables au clavier ?"
              ]
            },
            "technicalNote": [
              "Ce critère adresse les situations où un contenu additionnel contient des [composants d’interface](#composant-d-interface) avec lesquels il doit être possible d’interagir au clavier. Par exemple, une infobulle personnalisée qui propose un lien dans son contenu."
            ],
            "references": [
              {
                "wcag": [
                  "2.1.1 Keyboard (A)"
                ]
              },
              {}
            ]
          }
        }
      ]
    },
    {
      "topic": "Consultation",
      "number": 13,
      "criteria": [
        {
          "criterium": {
            "number": 1,
            "title": "Pour chaque page web, l’utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Pour chaque page web, chaque [procédé de rafraîchissement](#procede-de-rafraichissement) (balise `<object>`, balise `<embed>`, balise `<svg>`, balise `<canvas>`, balise `<meta>`) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "L’utilisateur peut arrêter ou relancer le rafraîchissement ;",
                "L’utilisateur peut augmenter la limite de temps entre deux rafraîchissements de dix fois, au moins ;",
                "L’utilisateur est averti de l’imminence du rafraîchissement et dispose de vingt secondes, au moins, pour augmenter la limite de temps avant le prochain rafraîchissement ;",
                "La limite de temps entre deux rafraîchissements est de vingt heures, au moins."
              ],
              "2": [
                "Pour chaque page web, chaque procédé de [redirection](#redirection) effectué via une balise `<meta>` est-il immédiat (hors cas particuliers) ?"
              ],
              "3": [
                "Pour chaque page web, chaque procédé de [redirection](#redirection) effectué via un [script](#script) vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "L’utilisateur peut arrêter ou relancer la redirection ;",
                "L’utilisateur peut augmenter la limite de temps avant la redirection de dix fois, au moins ;",
                "L’utilisateur est averti de l’imminence de la redirection et dispose de vingt secondes, au moins, pour augmenter la limite de temps avant la prochaine redirection ;",
                "La limite de temps avant la redirection est de vingt heures, au moins."
              ],
              "4": [
                "Pour chaque page web, chaque procédé limitant le temps d’une session vérifie-t-il une de ces conditions (hors cas particuliers) ?",
                "L’utilisateur peut supprimer la limite de temps ;",
                "L’utilisateur peut augmenter la limite de temps ;",
                "La limite de temps avant la fin de la session est de vingt heures au moins."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particuliers lorsque la limite de temps est essentielle, notamment lorsqu’elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu.",
              "Dans ces situations, le critère est non applicable. Par exemple, le rafraîchissement d’un flux RSS dans une page n’est pas une limite de temps essentielle ; le critère est applicable. En revanche, une redirection automatique qui amène vers la nouvelle version d’une page à partir d’une URL obsolète est essentielle ; le critère est non applicable."
            ],
            "references": [
              {
                "wcag": [
                  "2.2.1 Timing Adjustable (A)",
                  "2.2.2 Pause, Stop, Hide (A)"
                ]
              },
              {
                "techniques": [
                  "F40",
                  "F41",
                  "F58",
                  "F61",
                  "G75",
                  "G76",
                  "G110",
                  "G133",
                  "G180",
                  "G186",
                  "G198",
                  "H76",
                  "SCR1",
                  "SCR16",
                  "SCR36",
                  "SVR1"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 2,
            "title": "Dans chaque page web, l’ouverture d’une nouvelle fenêtre ne doit pas être déclenchée sans action de l’utilisateur. Cette règle est-elle respectée ?",
            "tests": {
              "1": [
                "Dans chaque page web, l’ouverture d’une nouvelle fenêtre ne doit pas être déclenchée sans action de l’utilisateur. Cette règle est-elle respectée ?"
              ]
            },
            "references": [
              {
                "wcag": [
                  "3.2.1 On focus (A)"
                ]
              },
              {
                "techniques": [
                  "F55",
                  "G107"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 3,
            "title": "Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une [version accessible](#version-accessible-pour-un-document-en-telechargement) (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque fonctionnalité de téléchargement d’un document bureautique vérifie-t-elle une de ces conditions ?",
                "Le document en téléchargement est compatible avec l’accessibilité ;",
                "Il existe une version alternative du document en téléchargement compatible avec l’accessibilité ;",
                "Il existe une version alternative du document en téléchargement au format HTML."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particuliers :",
              {
                "ul": [
                  "- Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si les fichiers bureautiques (ex : PDF, documents Microsoft ou LibreOffice, etc.) ont été publiés avant le 23 septembre 2018 (sauf si ce sont des documents nécessaires pour accomplir une démarche administrative relevant des tâches effectuées par l’organisme concerné), ils sont exemptés de l’obligation d’accessibilité."
                ]
              },
              "Dans cette situation, le critère est non applicable."
            ],
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)",
                  "1.3.1 Info and Relationships (A)",
                  "1.3.2 Meaningful Sequence (A)",
                  "2.4.1 Bypass Blocks (A)",
                  "2.4.3 Focus Order (A)",
                  "3.1.1 Language of Page (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "F15",
                  "G10",
                  "G135"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 4,
            "title": "Pour chaque document bureautique ayant une [version accessible](#version-accessible-pour-un-document-en-telechargement), cette version offre-t-elle la même information ?",
            "tests": {
              "1": [
                "Chaque document bureautique ayant une version accessible vérifie-t-il une de ces conditions ?",
                "La version compatible avec l’accessibilité offre la même information ;",
                "La version alternative au format HTML est pertinente et offre la même information."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)",
                  "1.3.1 Info and Relationships (A)",
                  "1.3.2 Meaningful Sequence (A)",
                  "2.4.1 Bypass Blocks (A)",
                  "2.4.3 Focus Order (A)",
                  "3.1.1 Language of Page (A)",
                  "4.1.2 Name, Role, Value (A)"
                ]
              },
              {
                "techniques": [
                  "F15",
                  "G10",
                  "G135"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 5,
            "title": "Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) vérifie-t-il une de ces conditions ?",
                "Un attribut title est disponible ;",
                "Une définition est donnée par le contexte adjacent."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)"
                ]
              },
              {
                "techniques": [
                  "F71",
                  "F70",
                  "G135",
                  "H86"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 6,
            "title": "Dans chaque page web, pour chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) vérifie-t-il une de ces conditions ?",
                "Le contenu de l’attribut `title` est pertinent ;",
                "La définition donnée par le contexte adjacent est pertinente."
              ]
            },
            "references": [
              {
                "wcag": [
                  "1.1.1 Non-text Content (A)"
                ]
              },
              {
                "techniques": [
                  "F71",
                  "F72",
                  "H86"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 7,
            "title": "Dans chaque page web, [les changements brusques de luminosité ou les effets de flash](#changement-brusque-de-luminosite-ou-effet-de-flash) sont-ils correctement utilisés ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque image ou élément multimédia (balise `<video>`, balise `<img>`, balise `<svg>`, balise `<canvas>`, balise `<embed>` ou balise `<object>`) qui provoque un changement brusque de luminosité ou un effet de flash vérifie-t-il une de ces conditions ?",
                "La fréquence de l’effet est inférieure à 3 par seconde ;",
                "La surface totale cumulée des effets est inférieure ou égale à 21824 pixels."
              ],
              "2": [
                "Dans chaque page web, chaque script qui provoque [un changement brusque de luminosité ou un effet de flash](#changement-brusque-de-luminosite-ou-effet-de-flash) vérifie-t-il une de ces conditions ?",
                "La fréquence de l’effet est inférieure à 3 par seconde ;",
                "La surface totale cumulée des effets est inférieure ou égale à 21824 pixels."
              ],
              "3": [
                "Dans chaque page web, chaque mise en forme CSS qui provoque [un changement brusque de luminosité ou un effet de flash](#changement-brusque-de-luminosite-ou-effet-de-flash) vérifie-t-il une de ces conditions ?",
                "La fréquence de l’effet est inférieure à 3 par seconde ;",
                "La surface totale cumulée des effets est inférieure ou égale à 21824 pixels."
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.3.1 Three Flashes or Below Threshold (A)"
                ]
              },
              {
                "techniques": [
                  "G15",
                  "G19",
                  "G176"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 8,
            "title": "Dans chaque page web, chaque contenu en mouvement ou clignotant est-il [contrôlable](#controle-contenu-en-mouvement-ou-clignotant) par l’utilisateur ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque contenu en mouvement déclenché automatiquement, vérifie-t-il une de ces conditions ?",
                "La durée du mouvement est inférieure ou égale à 5 secondes",
                "L’utilisateur peut arrêter et relancer le mouvement",
                "L’utilisateur peut afficher et masquer le contenu en mouvement ; L’utilisateur peut afficher la totalité de l’information sans le mouvement"
              ],
              "2": [
                "Dans chaque page web, chaque contenu clignotant déclenché automatiquement, vérifie-t-il une de ces conditions ?",
                "La durée du clignotement est inférieure ou égale à 5 secondes",
                "L’utilisateur peut arrêter et relancer le clignotement",
                "L’utilisateur peut afficher et masquer le contenu clignotant",
                "L’utilisateur peut afficher la totalité de l’information sans le clignotement."
              ]
            },
            "references": [
              {
                "wcag": [
                  "2.2.1 Timing Adjustable (A)",
                  "2.2.2 Pause, Stop, Hide (A)"
                ]
              },
              {
                "techniques": [
                  "F4",
                  "F7",
                  "F16",
                  "F47",
                  "F50",
                  "G4",
                  "G11",
                  "G152",
                  "G186",
                  "G187",
                  "G191",
                  "SCR22",
                  "SCR33",
                  "SCR36",
                  "SM11",
                  "SM12"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 9,
            "title": "Dans chaque page web, le contenu proposé est-il consultable quelle que soit l’orientation de l’écran (portrait ou paysage) (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque contenu vérifie-t-il ces conditions (hors cas particuliers) ?",
                "La consultation est possible quel que soit le mode d’orientation de l’écran ;",
                "Le contenu proposé reste le même quel que soit le mode d’orientation de l’écran utilisé même si sa présentation et le moyen d’y accéder peut différer."
              ]
            },
            "particularCases": [
              "Il existe des interfaces pour lesquelles l’orientation du périphérique est essentielle à leur utilisation.",
              "Dans ces situations, le critère est non applicable. Il peut s’agir d’interfaces de jeu, de piano, de dépôt de chèques bancaires, etc.",
              "Si l’interface est le seul moyen d’accéder au service proposé, une alternative devrait être mise en place pour pallier cette carence."
            ],
            "references": [
              {
                "wcag": [
                  "1.3.4 Orientation (AA)"
                ]
              },
              {}
            ]
          }
        },
        {
          "criterium": {
            "number": 10,
            "title": "Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d’un [geste complexe](#gestes-complexes-et-gestes-simples) peuvent-elles être également disponibles au moyen d’un [geste simple](#gestes-complexes-et-gestes-simples) (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un contact multipoint est-elle également utilisable ou disponible suite à un contact en un point unique de l’écran (hors cas particuliers)."
              ],
              "2": [
                "Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un geste basé sur le suivi d’une trajectoire sur l’écran est-elle également utilisable ou disponible suite à un contact en un point unique de l’écran (hors cas particuliers)."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particuliers dans deux types de situation :",
              {
                "ul": [
                  "- Le critère ne s’applique qu’à des fonctionnalités mises en place par l’auteur du site. Il ne concerne donc pas les gestes requis par l’agent utilisateur ou le système d’exploitation ;",
                  "- Le critère ne s’applique pas aux fonctionnalités dont la réalisation d’un geste complexe est essentielle (exécuter le tracé d’une signature, par exemple)."
                ]
              }
            ],
            "references": [
              {
                "wcag": [
                  "2.5.1 Pointer Gestures (AA)"
                ]
              },
              {
                "techniques": [
                  "G215",
                  "G216"
                ]
              }
            ]
          }
        },
        {
          "criterium": {
            "number": 11,
            "title": "Dans chaque page web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran peuvent-elles faire l’objet d’une annulation (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran vérifient-elles l’une de ces conditions (hors cas particuliers) ?",
                "L’action est déclenchée au moment où le dispositif de pointage est [relâché ou relevé](#relache-ou-releve) ;",
                "L’action est déclenchée au moment où le dispositif de pointage est [pressé ou posé](#presse-ou-pose) puis annulée lorsque le dispositif de pointage est [relâché ou relevé](#relache-ou-releve) ;",
                "Un mécanisme est disponible pour abandonner (avant achèvement de l’action) ou annuler (après achèvement) l’exécution de l’action."
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particulier lorsque la fonctionnalité nécessite que le comportement attendu soit réalisé lors d’un événement descendant, par exemple, un émulateur de clavier dont les touches doivent s’activer à la pression comme sur un clavier physique. Dans ces situations, le critère est non applicable."
            ],
            "technicalNote": [
              "Deux exemples de mécanisme mis en place pour annuler ou abandonner une action déclenchée au moyen d’un dispositif de pointage sur un point unique de l’écran :",
              {
                "ul": [
                  "- Une fenêtre modale permettant d’annuler l’action après son achèvement ;",
                  "- Pour une fonction de glisser/déposer, le fait d’abandonner l’action si l’utilisateur relâche l’élément en dehors de la zone cible."
                ]
              }
            ],
            "references": [
              {
                "wcag": [
                  "2.5.2 Pointer Cancellation (A)"
                ]
              },
              {}
            ]
          }
        },
        {
          "criterium": {
            "number": 12,
            "title": "Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l’appareil ou vers l’appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers) ?",
            "tests": {
              "1": [
                "Dans chaque page web, les fonctionnalités disponibles en bougeant l’appareil peuvent-elles être accomplies avec des [composants d’interface](#composant-d-interface) utilisateur (hors cas particuliers) ?"
              ],
              "2": [
                "Dans chaque page web, les fonctionnalités disponibles en faisant un geste en direction de l’appareil peuvent-elles être accomplies avec des [composants d’interface](#composant-d-interface) utilisateur (hors cas particuliers) ?"
              ],
              "3": [
                "L’utilisateur a-t-il la possibilité de désactiver la détection du mouvement pour éviter un déclenchement accidentel de la fonctionnalité (hors cas particuliers) ?"
              ]
            },
            "particularCases": [
              "Il existe une gestion de cas particulier lorsque :",
              {
                "ul": [
                  "- Le mouvement est essentiel à l’accomplissement de la fonctionnalité (ex. podomètre) ;",
                  "- La détection du mouvement est utilisée pour contrôler une fonctionnalité au travers d’une interface compatible avec l’accessibilité."
                ]
              }
            ],
            "references": [
              {
                "wcag": [
                  "2.5.4 Motion Actuation (A)"
                ]
              },
              {}
            ]
          }
        }
      ]
    }
  ]);
