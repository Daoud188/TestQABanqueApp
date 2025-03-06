Feature: Flux d'authentifaction sécurisé 
  
  Background: 
    Given l utilisateur est sur l interface de sélection bancaire d Algoan

  Scenario: Authentifaction réussie avec des identifiants valides 
    When il sélectionne la banque "BNP Paribas" dans la liste 
    And il est redirigé vers le flux d authentifaction sécurisé de la banque choisie
    When il saisit son identifiant comme "5419844742" 
    And il saisait son mot de passe comme "180265"
    And il clique sur valider
    Then il est redirigé vers la page de la synchronisation avec Algoan


  Scenario: Echec d'authentification avec un mot de passe incorrect
    When il saisit son identifiant comme "5419844742"
    And il saisit un mot de passe incorrect comme "123456" 
    Then un message d'erreur s'affiche





    

