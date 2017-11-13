import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';
import { Promise, reject } from 'q';
import { resolve } from 'url';
import { WebdriverWebElement } from 'protractor/built/element';

export class Pokedex {
    navigateTo() {
        browser.get('https://ng-pokedex.firebaseapp.com/pokemon');
    }

    getTitle() {
        return browser.getTitle();
    }

    clickMenuButton() {
        return element(by.css('app-header button')).click();
    }

    isMenuVisible() {
        return element(by.css('.open-nav .nav')).isDisplayed();
    }

    typeInSearch(search : string) {
        return element(by.css('form input')).sendKeys(search);
    }
    
    count() {
        return element.all(by.className('card--media')).count();
    }

    getFirst() {
        return element.all(by.className('card--media')).first();
    }

    clickAbout() {
        this.clickMenuButton();
        return element.all(by.css('.nav__link')).last().click();
    }

    getAboutText() {
        return element(by.tagName('app-about')).getText();
    }
}