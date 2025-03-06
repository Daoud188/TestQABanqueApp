import { Given, When, Then } from "@cucumber/cucumber";

import { chromium, Page, Browser, Locator, expect } from "@playwright/test";

import { pageFixture } from '../../hooks/pageFixture';



When('il saisait son mot de passe comme {string}', async function (motDePasse : string) {
    
    for (const chiffre of motDePasse) {
        await pageFixture.page.locator(`button:has-text("${motDePasse}")`).click();
    }
    
});


When('il clique sur valider', async function () {
    const submit: Locator = pageFixture.page.locator('id=submitIdent');
    submit.click();
});


Then('il est redirigé vers la page de la synchronisation avec Algoan', async function () {
    const SynchroAvecAlgoan = pageFixture.page.locator ('id=validation_header');
    await expect(SynchroAvecAlgoan).toHaveText('Synchronisation avec Algoan');

    
});

When('il saisit son identifiant comme {string}', async function (id : string) {
    const UserName : Locator = pageFixture.page.locator('id=username');
    await UserName.fill(id);
});


When('il saisit un mot de passe incorrect comme {string}', async function (WrongPass : string) {
    for (const chiffre of WrongPass) {
        await pageFixture.page.locator(`button:has-text("${WrongPass}")`).click();
    }
});

Then('un message d\'erreur s\'affiche', async function () {
    const msgErreur : Locator = pageFixture.page.locator('id=message-erreur');
    await expect(msgErreur).toBeVisible();
    console.log(msgErreur);    
});















