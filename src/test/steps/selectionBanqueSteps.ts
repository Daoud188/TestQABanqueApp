import { Given, When, Then } from "@cucumber/cucumber";

import { chromium, Page, Browser, Locator, expect } from "@playwright/test";

import { pageFixture } from "../../hooks/pageFixture";


Given('l utilisateur est sur l interface de sélection bancaire d Algoan', async function () {

    await pageFixture.page.goto("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
});

//Scenario 1 selection d'une banque valide

When('il sélectionne la banque {string} dans la liste', async function (string) {
    const checkbox : Locator = pageFixture.page.locator('.sc-frniUE.fILdiP.sc-hsfCcR.hJTuhR');
    await checkbox.click();

    const choixBanque : Locator = pageFixture.page.locator('text=Continuer vers le choix de la banque');
    await choixBanque.click();


    const rechercherBanque : Locator = pageFixture.page.getByText('BNP Paribas', { exact: true });
    await rechercherBanque.click();
});

Then('il est redirigé vers le flux d authentifaction sécurisé de la banque choisie', async function () {
    const brancheBanque : Locator = pageFixture.page.getByText('Particuliers/Professionnels', { exact: true });
    await brancheBanque.click();

    const lienAuthentification : Locator = pageFixture.page.locator('text=Poursuivre sur cet appareil');
    await lienAuthentification.click();

    const redirectionBanque : Locator = pageFixture.page.locator('text=J’ai compris');
    await redirectionBanque.click();
});

//scenario 2 /chercher une banque non disponible

When('il cherche dans la barre de recherche la banque {string}', async function (nomBanque) {
    const checkbox : Locator = pageFixture.page.locator('.sc-frniUE.fILdiP.sc-hsfCcR.hJTuhR');
    await checkbox.click();

    const choixBanque : Locator = pageFixture.page.locator('text=Continuer vers le choix de la banque');
    await choixBanque.click();


    const rechercherBanque : Locator = pageFixture.page.locator('[data-testid="bank-search-input"]');
    await rechercherBanque.fill(nomBanque);



});

Then('rien ne s affiche comme résultat', async function () {
    
    const suggestions : Locator = pageFixture.page.getByText('Suggestions' , { exact: true });

    await expect(suggestions).not.toBeVisible();

});