import {allWords} from "./data/wikiferheng.js";


export default class KurdishWiktionary {
    static get_all_words(){
        return allWords
    }
    static find(word){
        word = word.trim()
        return allWords['all_words'].filter((item) => item['word'] === word)
    }
    static find_one(word){
        word = word.trim()
        return this.find(word)[0]
    }

    static get_synonyms(word){
        word = word.trim()
        const synonyms = this.find_one(word)['senses'][0]['synonyms']
        if (synonyms !== undefined){
            return {synonyms: synonyms}
        }else{
            return {error: word + ' has no synonyms'}
        }
    }

    static get_glosses(word){
        word = word.trim()
        const glosses = this.find_one(word)['senses'][0]['glosses']
        if (glosses !== undefined){
            return {glosses: glosses}
        }else{
            return {error: word + ' has no glosses'}
        }
    }
    static get_tags(word){
        word = word.trim()
        const tags = this.find_one(word)['senses'][0]['tags']
        if (tags !== undefined){
            return {tags: tags}
        }else{
            return {error: word + ' has no tags'}
        }
    }

    static get_form_of(word){
        word = word.trim()
        const form_of = this.find_one(word)['senses'][0]['form_of']
        if (form_of !== undefined){
            return {form_of: form_of}
        }else{
            return {error: word + ' has no form ofs'}
        }
    }

    static get_pos(word){
        word = word.trim()
        const pos = this.find_one(word)['pos']
        if (pos !== undefined){
            return {pos: pos}
        }else{
            return {error: word + ' position is not available'}
        }
    }

    static get_sounds(word){
        word = word.trim()
        const sounds = this.find_one(word)['sounds']
        if (sounds !== undefined){
            return {sounds: sounds}
        }else{
            return {error: word + ' sounds are not available'}
        }
    }
}



