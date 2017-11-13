import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { Promise, reject } from 'q';
import { resolve } from 'url';
import { WebdriverWebElement } from 'protractor/built/element';

export class PoetryBuddy {

    navigateTo() {
        browser.get("https://www.poetrybuddy.com/")
    }

    getTitle() {
        return browser.getTitle();
    }

    typeWord(word: string) {
        let input = element(by.id("coupletInput1"));
        input.sendKeys(word);
    }

    getSecondInputFieldValue() {
        return element(by.id('coupletInput2')).getAttribute('value');
    }

    getRhymingWords() {
        let rhymes = element(by.id('rhyme-list'));
        return Promise((resolve, reject) => {
            rhymes.findElements(by.tagName('li')).then(listItems => {
                resolve(listItems.map(elem => {
                    return elem.getText();
                }));
            });
        });
    }

    getRyhmingWordsElements() {
        let rhymes = element.all(by.css('#rhyme-list li'));
        return rhymes;
    }

    clickFirstRhymingWord() {
        this.getRyhmingWordsElements().then(list => {
            let first = list[0];
            first.click();
        });
    }

    getFirstRhymingWordValue() {
        return Promise<string>((resolve, reject) => {
            this.getRyhmingWordsElements().then(rhymes => {
                resolve(rhymes[0].getText());
            });
        });
    }

    isNotificationBoardDisplayed() {
        return element(by.css('.swal2-modal.swal2-show')).isDisplayed();
    }

    clickNotificationYesOnNotifactionBoard() {
        return element(by.css('.swal2-modal.swal2-show .swal2-confirm')).click();
    }

    sleep(time: number) {
        return browser.sleep(time);
    }
}