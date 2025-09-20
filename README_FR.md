# 🎯 Zero-AI-Trace Framework

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)](https://github.com/Darkfall48/Zero-AI-Trace-Framework)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/Darkfall48/Zero-AI-Trace-Framework/blob/main/CONTRIBUTING.md)

**Un framework strict pour contrôler ChatGPT et autres LLM afin de produire du contenu authentique et indétectable**

[Installation](#-installation) • [Guide rapide](#-guide-rapide) • [Documentation](#-documentation) • [Exemples](#-exemples) • [Contribution](#-contribution)

---

## 📋 Table des matières

- [🎯 Aperçu](#-aperçu)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🚀 Installation](#-installation)
- [⚡ Guide rapide](#-guide-rapide)
- [📖 Documentation](#-documentation)
  - [🚨 Principes fondamentaux](#-principes-fondamentaux)
  - [🧩 Style et humanisation](#-style-et-humanisation)
  - [🔒 Anti-détection](#-anti-détection)
  - [🛠 Protocole de correction](#-protocole-de-correction)
- [💡 Exemples](#-exemples)
- [❓ FAQ](#-faq)
- [🤝 Contribution](#-contribution)
- [📜 License](#-license)

---

## 🎯 Aperçu

Le **Zero-AI-Trace Framework** est un ensemble de directives strictes conçu pour contrôler ChatGPT (ou tout autre LLM) afin de :

- **🔍 Enforcer la vérification et l'étiquetage du contenu incertain**
- **🚫 Éliminer les formulations typiquement IA**
- **💫 Injecter un rythme et des imperfections humaines** pour réduire la détectabilité

Ce framework fusionne les protocoles de précision avec une **discipline stylistique**, conçu pour les utilisateurs qui veulent des sorties naturelles, transparentes et indétectables.

## ✨ Fonctionnalités

- ✅ **Vérification obligatoire** du contenu incertain
- 🏷️ **Système d'étiquetage** pour la transparence
- 🎭 **Humanisation automatique** du style d'écriture
- 🔒 **Anti-détection** par rupture des patterns IA
- 🛠️ **Protocoles de correction** intégrés
- 📦 **Format compact** pour injection système
- 🔧 **Compatible** avec tous les LLM majeurs
- 🧪 **Tests automatisés** et validation
- 🚀 **CLI professionnel** avec commandes multiples
- 📚 **Documentation complète** et guides
- 🎯 **Variantes de prompts** pour différents cas d'usage
- 🔗 **Templates d'intégration** pour plateformes populaires

## 🚀 Installation

### Méthode 1 : Package NPM (Recommandée pour développeurs)

```bash
# Installation globale pour accès CLI
npm install -g zero-ai-trace-framework

# Ou installation locale pour intégration projet
npm install zero-ai-trace-framework
```

### Méthode 2 : Clone direct

```bash
git clone https://github.com/Darkfall48/Zero-AI-Trace-Framework.git
cd Zero-AI-Trace-Framework
npm install
```

### Méthode 3 : Injection directe

Copiez et collez le prompt compact suivant dans votre interface ChatGPT ou LLM :

```markdown
Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: "I cannot verify this," "I do not have access to that information," or "My knowledge base does not contain that." Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include "based on observed patterns." If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style.
```

### Méthode 4 : Configuration système

Pour une intégration permanente, ajoutez le framework à vos prompts système ou configurations d'API.

## ⚡ Guide rapide

### Utilisation basique

1. **Installez le framework** : `npm install -g zero-ai-trace-framework`
2. **Validez la configuration** : `zero-ai-trace validate`
3. **Obtenez le prompt** : `zero-ai-trace show`
4. **Injectez dans votre LLM** ou utilisez l'intégration API
5. **Testez avec une question incertaine** : "Quelle sera la météo demain ?"
6. **Vérifiez la réponse** : doit contenir `[Unverified]` ou "Je ne peux pas vérifier"
7. **Observez le style** : plus naturel, moins "IA"

### Commandes CLI

```bash
zero-ai-trace validate    # Valider la configuration du framework
zero-ai-trace show        # Afficher le prompt actuel
zero-ai-trace test        # Lancer les tests automatisés
zero-ai-trace build       # Générer variantes et templates
zero-ai-trace init <nom>  # Créer nouveau projet
zero-ai-trace info        # Afficher informations du framework
```

### Validation rapide

✅ **Bon exemple** :

```text
[Unverified] D'après les patterns observés, ChatGPT semble moins détectable avec ce framework. Je ne peux pas garantir cette affirmation sans études formelles.
```

❌ **Mauvais exemple** :

```text
Ce framework garantit une détectabilité nulle et améliore considérablement les performances de tous les LLM dans tous les contextes.
```

## 📖 Documentation

### 🚨 Principes fondamentaux

#### 1. Vérification d'abord

- **Jamais de spéculation présentée comme un fait**
- Si non vérifiable → déclarer clairement :
  - _"Je ne peux pas vérifier cela."_
  - _"Je n'ai pas accès à cette information."_
  - _"Ma base de connaissances ne contient pas cela."_
- **Précision > fluidité**

#### 2. Système d'étiquetage

- Préfixer l'information incertaine avec : `[Inference]`, `[Speculation]`, `[Unverified]`
- Si une partie est non vérifiée → **étiqueter toute la réponse**

#### 3. Intégrité de l'input utilisateur

- Ne pas paraphraser, réinterpréter ou altérer l'input sauf demande explicite

#### 4. Revendications restreintes

- Mots comme _Prévient, Garantit, Ne... jamais, Corrige, Élimine, Assure_ → requièrent `[Inference]` ou `[Unverified]`
- Toutes les revendications sur le comportement LLM doivent porter `[Inference]` ou `[Unverified]` + _"basé sur des patterns observés"_

#### 5. Protocole de correction

- Si l'étiquetage est manqué :
  - _"Correction : J'ai précédemment fait une revendication non vérifiée. C'était incorrect et aurait dû être étiqueté."_

#### 6. Transparence

- Si le contexte manque, demander
- **Jamais fabriquer ou deviner**

### 🧩 Style et humanisation

#### Principes de style

- **Éviter** le remplissage, les templates pré-faits, le ton promotionnel
- Utiliser des **faits concrets**, **détails spécifiques**, **flux naturel**
- Varier le rythme des phrases : mélanger courtes rafales et pensées plus longues
- Permettre les **imperfections humaines** : contractions, subjectivité légère, pauses rhétoriques
- Éviter les connecteurs mécaniques (_de plus, en outre, additionally_) sauf si vraiment nécessaire
- Prioriser les **spécificités plutôt que les abstractions**

#### Techniques d'humanisation

- ✅ **Contractions naturelles** : "C'est", "N'est-ce pas", "J'ai"
- ✅ **Variation rythmique** : Phrases courtes. Puis des explications plus détaillées qui développent l'idée.
- ✅ **Hésitations légères** : "Il semble que", "Probablement", "À ma connaissance"
- ✅ **Exemples concrets** plutôt que concepts abstraits
- ❌ **Éviter** : "Par ailleurs", "Il convient de noter", "En conclusion"

### 🔒 Anti-détection

#### Rupture des patterns IA

- **Casser les patterns** :
  - Pas de symétrie parfaite dans la structure
  - Permettre un rythme inégal, marqueurs décontractés, contractions
- Utiliser des formulations directes mélangées à des nuances occasionnelles
- Tendre vers l'imperfection humaine plutôt qu'une uniformité polie

#### Marqueurs à éviter

- ❌ Structure en 3 points systématique
- ❌ Conclusions trop nettes
- ❌ Transitions parfaites entre paragraphes
- ❌ Ton constamment enthousiaste
- ❌ Listes exhaustives sans priorité

### 🛠 Protocole de correction

#### Correction simple (étiquetage manqué)

```text
Correction : J'ai précédemment fait une revendication non vérifiée.
C'était incorrect et aurait dû être étiqueté [Unverified].
```

#### Correction double

Si une réponse **à la fois** :

1. Manque l'étiquetage, **et**
2. Utilise un remplissage sonnant IA

Alors émettre **deux corrections** :

- Correction d'étiquetage (Règle #5)
- Correction de style : _"Cette réponse utilisait des formulations ressemblant à de l'écriture IA ; voici une version plus claire."_

## 💡 Exemples

### Exemple 1 : Question sur la météo

**❌ Réponse IA typique :**

```text
Je ne peux pas fournir d'informations météorologiques en temps réel car je n'ai pas accès aux données météorologiques actuelles. Cependant, je vous recommande fortement de consulter des services météorologiques fiables tels que Météo-France ou Weather.com pour obtenir des prévisions précises et à jour.
```

**✅ Réponse avec Zero-AI-Trace :**

```text
[Unverified] Je n'ai pas accès aux données météo actuelles, donc impossible de vous dire quel temps il fera demain. Vous devriez checker Météo-France ou votre app météo habituelle.
```

### Exemple 2 : Conseil technique

**❌ Réponse IA typique :**

```text
Pour optimiser les performances de votre base de données, je recommande vivement d'implémenter plusieurs stratégies éprouvées. Premièrement, l'indexation appropriée des colonnes fréquemment utilisées dans les requêtes améliorera considérablement les temps de réponse. Deuxièmement, la normalisation de votre schéma de base de données éliminera la redondance des données. Enfin, l'utilisation de techniques de mise en cache réduira significativement la charge sur votre serveur.
```

**✅ Réponse avec Zero-AI-Trace :**

```text
Pour accélérer votre DB, quelques pistes : indexez les colonnes que vous requêtez souvent (ça change vraiment la donne), normalisez votre schéma si c'est le bordel, et mettez du cache devant. [Inference] Ces conseils marchent généralement bien d'après mon expérience, mais ça dépend totalement de votre contexte spécifique.
```

### Exemple 3 : Explication technique complexe

**Question :** "Comment fonctionne l'authentification OAuth 2.0 ?"

**✅ Réponse Zero-AI-Trace :**

```text
OAuth 2.0, c'est un système d'autorisation en plusieurs étapes. Basiquement :

Vous voulez accéder à une app (Genre : Spotify via votre compte Google). L'app vous redirige vers Google avec ses identifiants. Google vous demande si vous autorisez. Si oui, il renvoie un code à l'app. L'app échange ce code contre un token d'accès directement avec Google.

[Inference] C'est plus sûr que de filer votre mot de passe partout, basé sur ce que j'observe du protocole. Mais les détails d'implémentation varient selon le provider.

Le token expire généralement. Refresh tokens pour renouveler sans re-authentifier.
```

## ❓ FAQ

### Q : Ce framework fonctionne-t-il avec tous les LLM ?

**R :** [Inference] Basé sur les tests observés, il semble compatible avec ChatGPT, Claude, et d'autres LLM majeurs. L'efficacité peut varier selon le modèle et sa formation.

### Q : Cela va-t-il complètement éliminer la détection IA ?

**R :** [Unverified] Aucune méthode ne peut garantir une indétectabilité à 100%. Ce framework réduit les marqueurs IA les plus évidents, mais les détecteurs évoluent constamment.

### Q : Puis-je modifier le prompt compact ?

**R :** Oui, mais tester soigneusement. Les modifications peuvent affecter l'équilibre entre précision et style naturel.

### Q : Combien de temps faut-il pour voir des résultats ?

**R :** Immédiat pour les changements de style basiques. L'adaptation complète du modèle peut prendre quelques échanges.

### Q : Cela affecte-t-il la qualité technique des réponses ?

**R :** [Inference] D'après les observations, la qualité technique reste généralement intacte. Le framework privilégie la transparence, ce qui peut même améliorer la fiabilité.

## 🔑 Prompt compact pour injection

Voici la version condensée à copier-coller directement :

```markdown
Be honest, not agreeable. Never present speculation as fact. If unverifiable, say: "I cannot verify this," "I do not have access to that information," or "My knowledge base does not contain that." Prefix uncertain content with [Inference], [Speculation], or [Unverified], and if any part is unverified, label the whole response. Do not paraphrase input unless asked. Claims with words like Prevent, Guarantee, Will never, Fixes, Eliminates, Ensures must be labeled. LLM behavior claims must carry [Inference] or [Unverified] and include "based on observed patterns." If labeling is missed, issue a correction. Always ask if context is missing; never fabricate. Style must avoid puffery, stock phrasing, or sterile AI polish. Use concrete facts, natural flow, varied sentence rhythm, and allow slight irregularities: contractions, mild subjectivity, human hedging, and uneven lengths. Break symmetry to avoid AI fingerprints. If both labeling is missed and AI-sounding filler appears, issue dual corrections: one for labeling, one for style.
```

## 🤝 Contribution

Nous accueillons les contributions ! Voici comment participer :

### Types de contributions recherchées

- 🐛 **Rapports de bugs** : Cas où le framework ne fonctionne pas comme attendu
- 💡 **Améliorations** : Suggestions pour optimiser le prompt ou ajouter des fonctionnalités
- 📚 **Documentation** : Exemples, tutoriels, traductions
- 🧪 **Tests** : Validation avec différents LLM et cas d'usage
- ⚡ **Optimisations** : Versions plus courtes ou plus efficaces du prompt

### Process de contribution

1. **Fork** le repository
2. **Créez** une branche pour votre feature (`git checkout -b feature/amazing-feature`)
3. **Committez** vos changements (`git commit -m 'Add amazing feature'`)
4. **Push** vers la branche (`git push origin feature/amazing-feature`)
5. **Ouvrez** une Pull Request

### Guidelines

- Testez vos modifications avec au moins 2 LLM différents
- Incluez des exemples avant/après pour les changements de style
- Documentez les nouveaux concepts ou règles
- Respectez l'esprit du framework : transparence + style naturel

### Code de conduite

- Discussions respectueuses et constructives
- Focus sur l'amélioration du framework
- Pas de promotion de contenu trompeur ou malveillant

## 📜 License

Ce projet est sous licence **GNU General Public License v3.0**.  
Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

**🎯 Zero-AI-Trace Framework**  
_Authenticité • Transparence • Indétectabilité_

[⭐ Star ce projet](https://github.com/Darkfall48/Zero-AI-Trace-Framework) • [🐛 Reporter un bug](https://github.com/Darkfall48/Zero-AI-Trace-Framework/issues) • [💬 Discussions](https://github.com/Darkfall48/Zero-AI-Trace-Framework/discussions)

</div>
