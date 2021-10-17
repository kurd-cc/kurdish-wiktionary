import KurdishWiktionary from "./index.js";


describe('All words', function() {
    describe('#get_all_words()', function() {
        it('Should return the correct size of the words', function(done) {
            console.log(KurdishWiktionary.get_all_words()['all_words'].length)
            if (KurdishWiktionary.get_all_words()['all_words'].length === 5943){
                done()
            }else{
                done('There was an error')
            }
        });
    });
});

describe('Positions', function() {
    describe('#get_pos()', function() {
        it('Should return the position of dem word === noun', function(done) {
            if (KurdishWiktionary.get_pos('dem')['pos'] === 'noun'){
                done()
            }else{
                done('There was an error')
            }
        });
    });
});
