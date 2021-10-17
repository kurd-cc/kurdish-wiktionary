# Kurdish Wiktionary 

A parser for the Kurdish Wiktionary with ~5.5K Kurdish (Kurmanji) words.
<br>
It is helpful to get the following of Kurdish Wiktionary words:
- Position of the Kurdish word
- Glosses of the Kurdish word
- Synonyms of the Kurdish word
- Tags of the Kurdish word
- Form of, of the Kurdish word
- Sounds of the Kurdish word
<br>

https://www.npmjs.com/package/kurdish-wiktionary
<br> 

### Installation:

With `NPM`:
```shell
npm i kurdish-wiktionary
```
With `Yarn`:
```shell
yarn add kurdish-wiktionary
```

<br>

### Usage:

1. Import the package:

```javascript
import KurdishWiktionary from "kurdish-wiktionary";
```

2. Available methods:
    1) ### `getAllWordsData`: <br>
        will return the whole set of words' objects.
    2) ### `find`: <br>
       will find an array of the matched words from the set.
       <br>
       ```javascript
        KurdishWiktionary.find('dem')
        ```
       ```javascript
        [{
                        "name": "cog",
                        "args": {
                            "1": "sa",
                            "2": "दीति",
                            "3": "",
                            "4": "brightness; time",
                            "tr": "dītí"
                        },
                        "expansion": "Sanskrit दीति (dītí, “brightness; time”)"
                    }
                ],
                "word": "dem",
                "lang": "Northern Kurdish",
                "lang_code": "kmr",
                "senses": [
                    {
                        "tags": [
                            "feminine"
                        ],
                        "glosses": [
                            "time"
                        ],
                        "id": "dem-noun",
                        "categories": []
                    }
                ]
            }]
       ```
    3) ### `find_one`: <br>
       will find only one object of the matched word
       <br>
       ```javascript
        KurdishWiktionary.find_one('dem')
        ```
       ```javascript
        {
                        "name": "cog",
                        "args": {
                            "1": "sa",
                            "2": "दीति",
                            "3": "",
                            "4": "brightness; time",
                            "tr": "dītí"
                        },
                        "expansion": "Sanskrit दीति (dītí, “brightness; time”)"
                    }
                ],
                "word": "dem",
                "lang": "Northern Kurdish",
                "lang_code": "kmr",
                "senses": [
                    {
                        "tags": [
                            "feminine"
                        ],
                        "glosses": [
                            "time"
                        ],
                        "id": "dem-noun",
                        "categories": []
                    }
                ]
            }
       ```
   4) ### `get_synonyms`: <br>
      will return the synonyms of the word if existed
      <br>
      ```javascript
       KurdishWiktionary.get_synonyms('tav')
       ```
      ```javascript
        { 
            synonyms: [{ word: 'roj' }]
        }
      ```
   5) ### `get_glosses`: <br>
       will return the glosses of the word if existed
       <br>
      ```javascript
       KurdishWiktionary.get_glosses('tav')
       ```
      ```javascript
        { 
            glosses:  [ 'sun, sunlight' ] 
        }
      ```
   6) ### `get_tags`: <br>
      will return the tags of the word if existed
      <br>
      ```javascript
       KurdishWiktionary.get_tags('tav')
       ```
      ```javascript
        { 
            tags:  [ 'feminine' ] 
        }
      ```
   7) ### `get_form_of`: <br>
       will return the "form of" of the word if existed
       <br>
      ```javascript
       KurdishWiktionary.get_form_of('aland')
       ```
      ```javascript
        { 
            form_of:  [ { word: 'alandin' } ]
        }
      ```
   8) ### `get_pos`: <br>
      will return the position of the word
      <br>
      ```javascript
       KurdishWiktionary.get_pos('aland')
       ```
      ```javascript
        { 
            pos:  'verb'
        }
      ```
   9) ### `get_sounds`: <br>
       will return the sounds of the word if existed
       <br>
       ```javascript
       KurdishWiktionary.get_sounds('roj')
       ```
      ```javascript
        { 
            sounds:   [ { ipa: '/roːʒ/' }, { rhymes: '-oːʒ' } ]
        }
      ```
      
<br>
<br>

### Test:
You can test it using `Mocha`:<br>

```shell
npm test
```
      