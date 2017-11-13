import { Promise, reject } from 'q';
import { Pokedex } from './pokedex.po';
describe('Pokedex', () => {
    let pokedex : Pokedex;
    beforeEach(() => {
        pokedex = new Pokedex();
        pokedex.navigateTo();
    })

    it('should have a title Search for Pokémon', () => {
        expect(pokedex.getTitle()).toBe('Search for Pokémon')
    });

    it('should show menu when menu button is clicked', ()=> {
        pokedex.clickMenuButton();
        expect(pokedex.isMenuVisible()).toBeTruthy();
    });

    it('should show only charizard when charizard is inputted in search bar', ()=>{
        pokedex.typeInSearch('charizard');
        expect(pokedex.count()).toBe(1);
        expect(pokedex.getFirst().getText()).toContain('Charizard');
    });

    it('should show "A open source Pokédex" when About menu is clicked', ()=>{
        pokedex.clickAbout();
        expect(pokedex.getAboutText()).toContain('A open source Pokédex');
    })
})