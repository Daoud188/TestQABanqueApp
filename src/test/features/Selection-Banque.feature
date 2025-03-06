Feature: Sélection d une banque via l interface Algoan

  Background: 
    Given l utilisateur est sur l interface de sélection bancaire d Algoan

  Scenario: Sélection réussie d une banque disponible 
    When il sélectionne la banque "BNP Paribas" dans la liste 
    Then il est redirigé vers le flux d authentifaction sécurisé de la banque choisie

  
  Scenario: Banque non disponible dans la liste 
    When il cherche dans la barre de recherche la banque "XYZ banque" 
    Then rien ne s affiche comme résultat
    

