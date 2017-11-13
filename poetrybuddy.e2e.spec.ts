import { PoetryBuddy } from './poetrybuddy.po';
import { Promise, reject } from 'q';
describe('Poetry Buddy', () => {
    let poetry: PoetryBuddy;
    beforeEach(() => {
        poetry = new PoetryBuddy();
        poetry.navigateTo();
    })

    it('should have the title Poetry buddy', () => {
        expect(poetry.getTitle()).toEqual('Poetry Buddy')
    });

    it('should show ryhming words when typing apple in first input field', () => {
        poetry.typeWord('apple');
        let rhymes = poetry.getRhymingWords();
        expect(rhymes).toContain('pineapple');
    });

    it('should show a notification when a rhyme word is clicked', () => {
        poetry.typeWord('apple');
        sleepForFiveSeconds().then(() => {
            poetry.clickFirstRhymingWord();
            expect(poetry.isNotificationBoardDisplayed()).toBeTruthy();
        });
    });

    it('should show the rhyming word in the second input when yes is clicked in notification', () => {
        poetry.typeWord('apple');
        sleepForFiveSeconds().then(() => {
            poetry.clickFirstRhymingWord();
            poetry.clickNotificationYesOnNotifactionBoard();
            expect(poetry.getSecondInputFieldValue()).toBe(poetry.getFirstRhymingWordValue());
        });
    });

    function sleepForFiveSeconds() {
        return poetry.sleep(5000);
    }

})