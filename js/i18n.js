/* ============================================
   FLUXX PMC — INTERNATIONALISATION (i18n)
   Supported: FR (default), EN
   ============================================ */

const FLUXX_TRANSLATIONS = {

  // ========== COMMON (shared across pages) ==========
  common: {
    // Nav links
    'nav.home': { fr: 'Accueil', en: 'Home' },
    'nav.charter': { fr: 'Charte', en: 'Charter' },
    'nav.members': { fr: 'Membres', en: 'Members' },
    'nav.dossiers': { fr: 'Dossiers', en: 'Dossiers' },
    'nav.archives': { fr: 'Archives', en: 'Archives' },

    // Classified nav
    'nav.classified.sub': { fr: 'ACCÈS CLASSIFIÉ — SIGMA', en: 'CLASSIFIED ACCESS — SIGMA' },
    'nav.executive.sub': { fr: 'ACCÈS EXÉCUTIF — NIVEAU ZÉRO', en: 'EXECUTIVE ACCESS — LEVEL ZERO' },

    // Footer
    'footer.rights': {
      fr: 'FLUXX PRIVATE MILITARY CONTRACTOR — TOUS DROITS PROTOCOLS RÉSERVÉS',
      en: 'FLUXX PRIVATE MILITARY CONTRACTOR — ALL PROTOCOL RIGHTS RESERVED'
    },
    'footer.secure': {
      fr: 'SYSTÈME SÉCURISÉ — NOEUD CHIFFRÉ',
      en: 'SECURED SYSTEM — ENCRYPTED NODE'
    },

    // Boot sequence
    'boot.1': { fr: '> INITIALISATION DU RÉSEAU SÉCURISÉ FLUXX...', en: '> INITIALIZING FLUXX SECURE NETWORK...' },
    'boot.2': { fr: '> CONNEXION AU NOEUD [CHIFFRÉ]...', en: '> CONNECTING TO NODE [ENCRYPTED]...' },
    'boot.3': { fr: '> VÉRIFICATION DU NIVEAU D\'ACCRÉDITATION...', en: '> VERIFYING CLEARANCE LEVEL...' },
    'boot.4': { fr: '> SCAN DE SIGNATURE BIOMÉTRIQUE...', en: '> SCANNING BIOMETRIC SIGNATURE...' },
    'boot.5': { fr: '> CHARGEMENT DU CADRE OPÉRATIONNEL...', en: '> LOADING OPERATIONAL FRAMEWORK...' },
    'boot.6': { fr: '> DÉCRYPTAGE DES CANAUX DE COMMUNICATION...', en: '> DECRYPTING COMMUNICATION CHANNELS...' },
    'boot.7': { fr: '> STATUT : <span class="text-red">OPÉRATIONNEL</span>', en: '> STATUS: <span class="text-red">OPERATIONAL</span>' },
    'boot.8': { fr: '> ACCÈS AUTORISÉ — ACCRÉDITATION : STANDARD', en: '> ACCESS GRANTED — CLEARANCE: STANDARD' },
    'boot.9': { fr: '> ═══════════════════════════════════', en: '> ═══════════════════════════════════' },
    'boot.10': { fr: '> BIENVENUE SUR FLUXX', en: '> WELCOME TO FLUXX' },
  },

  // ========== INDEX PAGE ==========
  index: {
    'title': { fr: 'FLUXX — Private Military Contractor', en: 'FLUXX — Private Military Contractor' },
    'meta.description': { fr: 'Fluxx PMC — Précision. Discipline. Efficacité.', en: 'Fluxx PMC — Precision. Discipline. Efficiency.' },

    // Hero
    'hero.status': { fr: 'SYSTÈME OPÉRATIONNEL — NOEUD SÉCURISÉ ACTIF', en: 'SYSTEM OPERATIONAL — SECURE NODE ACTIVE' },
    'hero.subtitle': { fr: 'PRIVATE MILITARY CONTRACTOR — EST. 2947', en: 'PRIVATE MILITARY CONTRACTOR — EST. 2947' },
    'hero.slogan': {
      fr: 'Là où les juridictions s\'arrêtent, <em>l\'instrument</em> commence.<br>Nous ne choisissons pas de camp. Nous exécutons le contrat.',
      en: 'Where jurisdictions end, <em>the instrument</em> begins.<br>We don\'t pick sides. We execute the contract.'
    },
    'hero.btn.charter': { fr: 'Consulter la Charte', en: 'Read the Charter' },
    'hero.btn.members': { fr: 'Personnel', en: 'Personnel' },

    // Manifeste
    'manifeste.title': { fr: 'Manifeste', en: 'Manifesto' },
    'manifeste.classification': { fr: 'Document public — Diffusion autorisée', en: 'Public document — Authorized distribution' },
    'manifeste.p1': {
      fr: 'Nous ne cherchons pas la guerre — nous l\'exécutons.',
      en: 'We do not seek war — we execute it.'
    },
    'manifeste.p2': {
      fr: 'Dans les interstices de l\'espace civilisé, là où les lois peinent à s\'appliquer et où le dialogue échoue, Fluxx apparaît. Pas comme un sauveur. <em style="color: var(--red-primary);">Comme une solution.</em>',
      en: 'In the cracks of civilized space, where laws struggle to apply and dialogue fails, Fluxx appears. Not as a savior. <em style="color: var(--red-primary);">As a solution.</em>'
    },
    'manifeste.p3': {
      fr: 'Nous ne portons ni cause, ni drapeau. Nous ne luttons ni pour la gloire, ni pour l\'honneur. Nous agissons là où le chaos exige une réponse rationnelle.',
      en: 'We carry no cause, no flag. We fight neither for glory nor for honor. We act where chaos demands a rational response.'
    },
    'manifeste.p4': {
      fr: 'Chaque intervention est chirurgicale. Chaque opération est conçue avec précision, exécutée sans passion ni hésitation. Le conflit n\'est pas un but — c\'est une variable. Et nous sommes l\'équation qui le résout.',
      en: 'Every intervention is surgical. Every operation is designed with precision, executed without passion or hesitation. Conflict is not a goal — it\'s a variable. And we are the equation that solves it.'
    },
    'manifeste.p5': {
      fr: 'Fluxx n\'est pas une armée. Pas un gang. Pas un groupe de tueurs à gages. C\'est une structure rigoureuse. Un outil aux mains fermes. Un engrenage silencieux dans la grande mécanique de la survie.',
      en: 'Fluxx is not an army. Not a gang. Not a group of hired guns. It\'s a rigorous structure. A tool in steady hands. A silent cog in the great machinery of survival.'
    },

    // Principes
    'principes.title': { fr: 'Principes Fondamentaux', en: 'Core Principles' },
    'principe.1': { fr: 'L\'efficacité prime sur l\'émotion', en: 'Efficiency prevails over emotion' },
    'principe.2': { fr: 'La discipline remplace le chaos', en: 'Discipline replaces chaos' },
    'principe.3': { fr: 'La mission prime sur l\'individu', en: 'The mission prevails over the individual' },
    'principe.4': { fr: 'La discrétion est non-négociable', en: 'Discretion is non-negotiable' },
    'principe.5': { fr: 'L\'instrument n\'a pas d\'allégeance', en: 'The instrument holds no allegiance' },

    // Qui nous recrutons
    'recrute.title': { fr: 'Qui Nous Recrutons', en: 'Who We Recruit' },
    'recrute.p': {
      fr: 'Nous n\'avons pas besoin de <em>croyants</em>.<br><br>Nous avons besoin d\'<em style="color: var(--red-primary);">opérateurs</em>.<br><br><span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--gray);">Professionnels. Fiables. Silencieux. Prêts à renoncer à l\'improvisation pour l\'efficacité absolue.</span>',
      en: 'We don\'t need <em>believers</em>.<br><br>We need <em style="color: var(--red-primary);">operators</em>.<br><br><span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--gray);">Professional. Reliable. Silent. Ready to abandon improvisation for absolute efficiency.</span>'
    },

    // Contexte Opérationnel
    'contexte.title': { fr: 'Contexte Opérationnel', en: 'Operational Context' },
    'contexte.classification': { fr: 'Résumé historique — Version publique', en: 'Historical summary — Public version' },
    'contexte.doc.classification': { fr: 'FLUXX-DOC-001 — PUBLIC', en: 'FLUXX-DOC-001 — PUBLIC' },
    'contexte.doc.ref': { fr: 'Réf: FX/HIST/2948-GENESIS', en: 'Ref: FX/HIST/2948-GENESIS' },

    'genese.title': { fr: 'Genèse — Réponse au Chaos', en: 'Genesis — Response to Chaos' },
    'genese.p1': {
      fr: 'Fluxx n\'est pas née d\'une soif de combat. Fluxx est née d\'un constat brutal : l\'univers est chaotique, instable, et la guerre, inévitable.',
      en: 'Fluxx was not born from a thirst for combat. Fluxx was born from a brutal realization: the universe is chaotic, unstable, and war, inevitable.'
    },
    'genese.p2': {
      fr: 'En 2948, des officiers de la Marine de l\'UEE — usés, désabusés par les ordres absurdes et les pertes inutiles — ont quitté les rangs officiels. Non pour déserter. Pour bâtir réponse. Froidement calculée. Chirurgicale. Sans états d\'âme.',
      en: 'In 2948, UEE Navy officers — worn out, disillusioned by absurd orders and pointless losses — left the official ranks. Not to desert. To build a response. Coldly calculated. Surgical. Without remorse.'
    },
    'genese.p3': {
      fr: 'Là où d\'autres tergiversent, Fluxx entre en action. Où les bureaucraties stagnent, Fluxx frappe. Sans haine. Sans passion. Seulement une précision méthodique et une efficacité totale.',
      en: 'Where others hesitate, Fluxx takes action. Where bureaucracies stagnate, Fluxx strikes. Without hatred. Without passion. Only methodical precision and total efficiency.'
    },

    'nature.title': { fr: 'Nature Opérationnelle', en: 'Operational Nature' },
    'nature.p1': {
      fr: 'Nous ne sommes ni une armée, ni un gang, ni un groupe de mercenaires en quête de crédits. <span class="text-red">Nous sommes un outil.</span> Un instrument de guerre rationnel. Un spectre. Une lame invisible qui frappe là où le désordre menace ce qui doit être protégé.',
      en: 'We are neither an army, nor a gang, nor a group of mercenaries seeking credits. <span class="text-red">We are a tool.</span> A rational instrument of war. A specter. An invisible blade that strikes where disorder threatens what must be protected.'
    },
    'nature.p2': {
      fr: 'Dénouer les prises d\'otages. Éliminer une cible. Sécuriser une zone. Intervenir là où la diplomatie a échoué. Fluxx frappe vite, fort, et disparaît avant que les débris ne retombent.',
      en: 'Resolving hostage situations. Eliminating a target. Securing a zone. Intervening where diplomacy has failed. Fluxx strikes fast, hard, and vanishes before the debris settles.'
    },
    'nature.p3': {
      fr: 'Nos membres ne cherchent pas la gloire. Ils exécutent. Froids, coordonnés, fiables. Chaque tir, chaque mouvement, chaque décision est le fruit d\'un système parfaitement huilé, d\'une mécanique de guerre bien rodée.',
      en: 'Our members do not seek glory. They execute. Cold, coordinated, reliable. Every shot, every movement, every decision is the product of a perfectly oiled system, a well-tuned war machine.'
    },

    'doctrine.title': { fr: 'Doctrine Fondamentale', en: 'Core Doctrine' },
    'doctrine.p1': {
      fr: 'Nous ne cherchons pas la guerre. <em style="color: var(--red-primary); font-weight: 500;">Nous sommes la fin logique de ceux qui la provoquent.</em>',
      en: 'We do not seek war. <em style="color: var(--red-primary); font-weight: 500;">We are the logical end of those who provoke it.</em>'
    },
    'doctrine.p2': {
      fr: 'Là où les juridictions s\'arrêtent, notre mandat commence. Fluxx ne répond à aucune gouvernance externe — seulement à l\'efficacité opérationnelle. Chaque décision repose sur un calcul unique : <em>« Si la mission sert Fluxx, elle est légitime. »</em>',
      en: 'Where jurisdictions end, our mandate begins. Fluxx answers to no external governance — only to operational efficiency. Every decision rests on a single calculation: <em>"If the mission serves Fluxx, it is legitimate."</em>'
    },
    'doctrine.note': {
      fr: 'Note : Nous ne promeut pas l\'anarchie. Nous promeut la <span class="text-red">discipline absolue</span> et la <span class="text-red">précision sans compromis</span>.',
      en: 'Note: We do not promote anarchy. We promote <span class="text-red">absolute discipline</span> and <span class="text-red">uncompromising precision</span>.'
    },

    'presence.title': { fr: 'Présence Actuelle', en: 'Current Presence' },
    'presence.p1': {
      fr: 'Opérations distribuées à travers les systèmes connus et au-delà des juridictions UEE. Concentration observée dans les zones frontalières, corridors commerciaux à haut risque, et secteurs où l\'ordre institutionnel est limité ou contesté.',
      en: 'Operations distributed across known systems and beyond UEE jurisdictions. Concentration observed in border zones, high-risk commercial corridors, and sectors where institutional order is limited or contested.'
    },
    'presence.p2': {
      fr: 'Effectif total : <span class="text-dim">[DONNÉE CLASSIFIÉE]</span>. Taux d\'opérabilité : perpétuel. Engagement : absolu.',
      en: 'Total personnel: <span class="text-dim">[CLASSIFIED DATA]</span>. Operability rate: perpetual. Commitment: absolute.'
    },

    // Signature
    'signature.quote': {
      fr: '« Nous ne cherchons pas la guerre.<br>Nous sommes la fin logique de ceux qui la provoquent.<br><span class="text-red">Précision. Discipline. Efficacité.</span> »',
      en: '"We do not seek war.<br>We are the logical end of those who provoke it.<br><span class="text-red">Precision. Discipline. Efficiency.</span>"'
    },
    'signature.instrument': { fr: '◆ INSTRUMENT OPÉRATIONNEL ◆', en: '◆ OPERATIONAL INSTRUMENT ◆' },
    'signature.btn': { fr: 'Lire la Charte Complète', en: 'Read the Full Charter' },

    // Footer
    'footer.index': {
      fr: 'FLUXX PRIVATE MILITARY CONTRACTOR — TOUS DROITS PROTOCOLS RÉSERVÉS<br>SYSTÈME SÉCURISÉ — NOEUD CHIFFRÉ — <span class="coordinates">REF:47.2N-8.5E</span>',
      en: 'FLUXX PRIVATE MILITARY CONTRACTOR — ALL PROTOCOL RIGHTS RESERVED<br>SECURED SYSTEM — ENCRYPTED NODE — <span class="coordinates">REF:47.2N-8.5E</span>'
    },
  },

  // ========== CHARTER PAGE ==========
  charter: {
    'title': { fr: 'FLUXX — Charte & Philosophie', en: 'FLUXX — Charter & Philosophy' },

    'header.status': { fr: 'DOCUMENT OFFICIEL — CHARTE OPÉRATIONNELLE', en: 'OFFICIAL DOCUMENT — OPERATIONAL CHARTER' },
    'header.title': { fr: 'Charte & Philosophie', en: 'Charter & Philosophy' },
    'header.subtitle': { fr: 'Document cadre de l\'organisation FLUXX', en: 'Framework document of the FLUXX organization' },

    'doc.classification': { fr: 'CLASSIFICATION : PUBLIC — DIFFUSION AUTORISÉE', en: 'CLASSIFICATION: PUBLIC — AUTHORIZED DISTRIBUTION' },
    'doc.title': { fr: 'Charte Fondatrice de l\'Organisation Fluxx', en: 'Founding Charter of the Fluxx Organization' },

    'doc.meta.date.label': { fr: 'Date d\'émission', en: 'Issue date' },
    'doc.meta.revision.label': { fr: 'Dernière révision', en: 'Last revision' },
    'doc.meta.authority.label': { fr: 'Autorité émettrice', en: 'Issuing authority' },
    'doc.meta.authority.value': { fr: 'Commandement Central Fluxx', en: 'Fluxx Central Command' },

    // Article I
    'art1.title': { fr: 'Article I — Nature et Identité', en: 'Article I — Nature and Identity' },
    'art1.p1': {
      fr: '<strong style="color: var(--white);">§1.1</strong> — L\'entité désignée « FLUXX » constitue une organisation militaire privée, opérant comme unité contractuelle autonome dans l\'espace régulé et non-régulé de la juridiction UEE et au-delà de ses frontières reconnues.',
      en: '<strong style="color: var(--white);">§1.1</strong> — The entity designated "FLUXX" constitutes a private military organization, operating as an autonomous contractual unit in regulated and unregulated UEE jurisdiction space and beyond its recognized borders.'
    },
    'art1.p2': {
      fr: '<strong style="color: var(--white);">§1.2</strong> — Fluxx ne constitue pas un corps militaire étatique, une milice politique, un syndicat criminel, ou un mouvement idéologique. Fluxx est un <em>instrument opérationnel</em> — une structure dont l\'unique fonction est l\'exécution efficace de mandats définis.',
      en: '<strong style="color: var(--white);">§1.2</strong> — Fluxx does not constitute a state military corps, a political militia, a criminal syndicate, or an ideological movement. Fluxx is an <em>operational instrument</em> — a structure whose sole function is the efficient execution of defined mandates.'
    },
    'art1.p3': {
      fr: '<strong style="color: var(--white);">§1.3</strong> — L\'organisation ne reconnaît aucune allégeance permanente à une faction, un gouvernement, ou une entité commerciale. Les alliances tactiques sont temporaires et soumises aux intérêts opérationnels de Fluxx.',
      en: '<strong style="color: var(--white);">§1.3</strong> — The organization recognizes no permanent allegiance to any faction, government, or commercial entity. Tactical alliances are temporary and subject to the operational interests of Fluxx.'
    },

    // Article II
    'art2.title': { fr: 'Article II — Professionnalisme Absolu', en: 'Article II — Absolute Professionalism' },
    'art2.p1': {
      fr: '<strong style="color: var(--white);">§2.1</strong> — Peu importe la nature de la mission — légale, grise ou noire — elle est menée avec rigueur méthodique, discrétion absolue et efficacité totale. Aucun débordement. Aucune improvisation.',
      en: '<strong style="color: var(--white);">§2.1</strong> — Regardless of the mission\'s nature — legal, gray, or black — it is carried out with methodical rigor, absolute discretion, and total efficiency. No excess. No improvisation.'
    },
    'art2.p2': {
      fr: '<strong style="color: var(--white);">§2.2</strong> — Chaque opération est conçue avec précision chirurgicale, exécutée sans passion ni hésitation. Le conflit n\'est pas un objectif en soi — c\'est une variable opérationnelle. Nous sommes l\'équation qui le résout.',
      en: '<strong style="color: var(--white);">§2.2</strong> — Every operation is designed with surgical precision, executed without passion or hesitation. Conflict is not an objective in itself — it\'s an operational variable. We are the equation that solves it.'
    },
    'art2.p3': {
      fr: '<strong style="color: var(--white);">§2.3</strong> — La qualité d\'exécution reflète directement la qualité de notre réputation. Aucun opérateur ne compromet ce standard sous peine de <span class="redacted">conséquences</span>.',
      en: '<strong style="color: var(--white);">§2.3</strong> — The quality of execution directly reflects the quality of our reputation. No operator compromises this standard on pain of <span class="redacted">consequences</span>.'
    },

    // Article III
    'art3.title': { fr: 'Article III — Respect Opérationnel & Loyauté Structurelle', en: 'Article III — Operational Respect & Structural Loyalty' },
    'art3.p1': {
      fr: '<strong style="color: var(--white);">§3.1</strong> — Le respect entre opérateurs est fondamental. Pas de hiérarchie d\'ego. Pas de conflits inutiles. Fluxx fonctionne comme une unité monolithique. Si l\'un faiblit, c\'est l\'ensemble qui vacille.',
      en: '<strong style="color: var(--white);">§3.1</strong> — Respect between operators is fundamental. No ego hierarchy. No pointless conflicts. Fluxx functions as a monolithic unit. If one falters, the whole structure wavers.'
    },
    'art3.p2': {
      fr: '<strong style="color: var(--white);">§3.2</strong> — L\'organisation passe avant tout. Les ambitions personnelles s\'arrêtent là où commence la mission. On agit pour Fluxx, ou on part. C\'est la seule allégeance qui compte.',
      en: '<strong style="color: var(--white);">§3.2</strong> — The organization comes first. Personal ambitions stop where the mission begins. You act for Fluxx, or you leave. It\'s the only allegiance that matters.'
    },
    'art3.p3': {
      fr: '<strong style="color: var(--white);">§3.3</strong> — Les divisions spécialisées opèrent sous des protocoles internes distincts. <span class="strikethrough">Certaines divisions ne figurent pas dans l\'organigramme standard</span>. L\'ensemble du personnel autorisé remporte les mêmes obligations de loyauté.',
      en: '<strong style="color: var(--white);">§3.3</strong> — Specialized divisions operate under distinct internal protocols. <span class="strikethrough">Some divisions do not appear in the standard organizational chart</span>. All authorized personnel share the same loyalty obligations.'
    },

    // Article IV
    'art4.title': { fr: 'Article IV — Protocole de Recrutement', en: 'Article IV — Recruitment Protocol' },
    'art4.p1': {
      fr: '<strong style="color: var(--white);">§4.1</strong> — L\'intégration à Fluxx n\'est pas une candidature. C\'est une évaluation. Le candidat ne choisit pas Fluxx — Fluxx détermine si le candidat représente un actif opérationnel viable.',
      en: '<strong style="color: var(--white);">§4.1</strong> — Joining Fluxx is not an application. It\'s an evaluation. The candidate does not choose Fluxx — Fluxx determines if the candidate represents a viable operational asset.'
    },
    'art4.p2': {
      fr: '<strong style="color: var(--white);">§4.2</strong> — Phase d\'évaluation : observation (durée variable), tests opérationnels (non annoncés), validation psychométrique, intégration conditionnelle.',
      en: '<strong style="color: var(--white);">§4.2</strong> — Evaluation phase: observation (variable duration), operational tests (unannounced), psychometric validation, conditional integration.'
    },
    'art4.p3': {
      fr: '<strong style="color: var(--white);">§4.3</strong> — La période probatoire est de durée indéterminée. La confirmation de statut « opérateur actif » est prononcée par le commandement à sa seule discrétion.',
      en: '<strong style="color: var(--white);">§4.3</strong> — The probationary period is of indefinite duration. Confirmation of "active operator" status is pronounced by command at its sole discretion.'
    },
    'art4.p4': {
      fr: '<strong style="color: var(--white);">§4.4</strong> — La sortie de l\'organisation est encadrée par le protocole de désengagement. Les détails de ce protocole sont classifiés au niveau <span class="classified-badge">RESTREINT</span>.',
      en: '<strong style="color: var(--white);">§4.4</strong> — Departure from the organization is governed by the disengagement protocol. Details of this protocol are classified at <span class="classified-badge">RESTRICTED</span> level.'
    },

    // Article V
    'art5.title': { fr: 'Article V — Confidentialité Totale', en: 'Article V — Total Confidentiality' },
    'art5.p1': {
      fr: '<strong style="color: var(--white);">§5.1</strong> — Aucune fuite. Aucune trace. Ce qui est vu ou entendu dans Fluxx reste dans Fluxx. C\'est non-négociable.',
      en: '<strong style="color: var(--white);">§5.1</strong> — No leaks. No traces. What is seen or heard in Fluxx stays in Fluxx. That is non-negotiable.'
    },
    'art5.p2': {
      fr: '<strong style="color: var(--white);">§5.2</strong> — La violation du protocole de confidentialité est la plus grave infraction. Les mesures correctives sont <span class="redacted">immédiates et permanentes</span>.',
      en: '<strong style="color: var(--white);">§5.2</strong> — Violation of the confidentiality protocol is the most serious offense. Corrective measures are <span class="redacted">immediate and permanent</span>.'
    },
    'art5.p3': {
      fr: '<strong style="color: var(--white);">§5.3</strong> — Tous les opérateurs signent un engagement de discrétion absolue. Tout relâchement d\'information est considéré comme trahison.',
      en: '<strong style="color: var(--white);">§5.3</strong> — All operators sign an absolute discretion commitment. Any release of information is considered treason.'
    },

    // Article VI
    'art6.title': { fr: 'Article VI — Conflits Internes & Engagement Régulier', en: 'Article VI — Internal Conflicts & Regular Engagement' },
    'art6.p1': {
      fr: '<strong style="color: var(--white);">§6.1</strong> — Désaccords internes ? Résolus rapidement, discrètement, avec professionnalisme. Le chaos ne franchit jamais nos portes. La résolution interne est obligatoire — jamais d\'escalade externe.',
      en: '<strong style="color: var(--white);">§6.1</strong> — Internal disagreements? Resolved quickly, discreetly, with professionalism. Chaos never crosses our doors. Internal resolution is mandatory — no external escalation.'
    },
    'art6.p2': {
      fr: '<strong style="color: var(--white);">§6.2</strong> — L\'inactivité prolongée n\'a pas sa place. Pas besoin d\'être connecté 24/7, mais chaque membre — actif ou en soutien — contribue à faire avancer la machine.',
      en: '<strong style="color: var(--white);">§6.2</strong> — Prolonged inactivity has no place here. No need to be connected 24/7, but every member — active or support — contributes to keeping the machine moving.'
    },
    'art6.p3': {
      fr: '<strong style="color: var(--white);">§6.3</strong> — Les opérateurs doivent maintenir un minimum de disponibilité opérationnelle. L\'engagement s\'évalue sur la fiabilité, pas sur les heures.',
      en: '<strong style="color: var(--white);">§6.3</strong> — Operators must maintain a minimum operational availability. Commitment is measured by reliability, not hours.'
    },

    // Article VII
    'art7.title': { fr: 'Article VII — Neutralité Morale', en: 'Article VII — Moral Neutrality' },
    'art7.p1': {
      fr: '<strong style="color: var(--white);">§7.1</strong> — Nous ne sommes pas des juges. La légalité est une frontière mouvante selon les juridictions, les temps, les intérêts politiques. Nous ne nous encombrons pas d\'avis moraux externes.',
      en: '<strong style="color: var(--white);">§7.1</strong> — We are not judges. Legality is a shifting boundary depending on jurisdictions, times, and political interests. We do not burden ourselves with external moral opinions.'
    },
    'art7.p2': {
      fr: '<strong style="color: var(--white);">§7.2</strong> — Axiome fondamental : <em style="color: var(--red-primary);">« Si la mission sert Fluxx, elle est légitime. »</em> C\'est l\'unique critère décisionnel. Pas d\'appels, pas d\'exceptions.',
      en: '<strong style="color: var(--white);">§7.2</strong> — Core axiom: <em style="color: var(--red-primary);">"If the mission serves Fluxx, it is legitimate."</em> That is the sole decision criterion. No appeals, no exceptions.'
    },
    'art7.p3': {
      fr: '<strong style="color: var(--white);">§7.3</strong> — Le jugement moral externe est reconnu comme bruit opérationnel — catalogué, analysé, archivé. Sans influence sur nos protocoles décisionnels.',
      en: '<strong style="color: var(--white);">§7.3</strong> — External moral judgment is recognized as operational noise — catalogued, analyzed, archived. With no influence on our decision protocols.'
    },

    // Vision
    'vision.title': { fr: 'Vision Stratégique', en: 'Strategic Vision' },
    'vision.obj1.header': { fr: 'Objectif Primaire', en: 'Primary Objective' },
    'vision.obj1.title': { fr: 'Autonomie Opérationnelle', en: 'Operational Autonomy' },
    'vision.obj1.text': {
      fr: 'Développer et maintenir une capacité d\'action indépendante de toute infrastructure étatique, commerciale ou factionnelle. L\'autonomie n\'est pas un luxe — c\'est un impératif de survie.',
      en: 'Develop and maintain an independent capacity for action from any state, commercial, or factional infrastructure. Autonomy is not a luxury — it\'s a survival imperative.'
    },
    'vision.obj2.header': { fr: 'Objectif Secondaire', en: 'Secondary Objective' },
    'vision.obj2.title': { fr: 'Projection de Force', en: 'Force Projection' },
    'vision.obj2.text': {
      fr: 'Établir une capacité de déploiement rapide sur l\'ensemble des zones opérationnelles identifiées. La vitesse d\'intervention est un multiplicateur de force déterminant.',
      en: 'Establish a rapid deployment capability across all identified operational zones. Speed of intervention is a decisive force multiplier.'
    },
    'vision.obj3.header': { fr: 'Objectif Tertiaire', en: 'Tertiary Objective' },
    'vision.obj3.title': { fr: 'Contrôle Informationnel', en: 'Information Control' },
    'vision.obj3.text': {
      fr: 'Maîtriser le flux d\'information — entrant et sortant. L\'information est le multiplicateur le plus sous-estimé du champ opérationnel moderne.',
      en: 'Master the flow of information — incoming and outgoing. Information is the most underestimated multiplier of the modern operational field.'
    },

    // Core axiom
    'axiom.heading': { fr: 'SÉLECTION & ENGAGEMENT', en: 'SELECTION & COMMITMENT' },
    'axiom.text1': {
      fr: 'Nous n\'avons pas besoin de croyants.<br>Nous avons besoin d\'opérateurs.',
      en: 'We don\'t need believers.<br>We need operators.'
    },
    'axiom.quote': {
      fr: '« L\'instrument ne questionne pas le but.<br>L\'instrument ne juge pas la cible.<br>L\'instrument exécute — et sa précision est sa vertu. »',
      en: '"The instrument does not question the purpose.<br>The instrument does not judge the target.<br>The instrument executes — and its precision is its virtue."'
    },
    'axiom.source': { fr: '— Protocole Fondateur, Version Operative', en: '— Founding Protocol, Operative Version' },

    // Footer charter
    'footer.charter': {
      fr: 'FLUXX PRIVATE MILITARY CONTRACTOR — TOUS DROITS PROTOCOLS RÉSERVÉS<br>DOCUMENT CADRE v4.7.1 — VALIDÉ PAR COMMANDEMENT CENTRAL',
      en: 'FLUXX PRIVATE MILITARY CONTRACTOR — ALL PROTOCOL RIGHTS RESERVED<br>FRAMEWORK DOCUMENT v4.7.1 — VALIDATED BY CENTRAL COMMAND'
    },
  },

  // ========== MEMBERS PAGE ==========
  members: {
    'title': { fr: 'FLUXX — Personnel', en: 'FLUXX — Personnel' },
    'header.status': { fr: 'REGISTRE DU PERSONNEL — MISE À JOUR CONTINUE', en: 'PERSONNEL REGISTRY — CONTINUOUS UPDATE' },
    'header.title': { fr: 'Personnel Opérationnel', en: 'Operational Personnel' },
    'header.subtitle': { fr: 'Registre des opérateurs actifs — Niveau d\'accès : Standard', en: 'Active operators registry — Access level: Standard' },

    'structure.title': { fr: 'Structure Hiérarchique', en: 'Hierarchical Structure' },
    'structure.desc': {
      fr: 'La chaîne de commandement Fluxx est conçue pour l\'efficacité opérationnelle. Chaque grade reflète un niveau de compétence validé et une zone de responsabilité définie.',
      en: 'The Fluxx chain of command is designed for operational efficiency. Each rank reflects a validated competence level and a defined area of responsibility.'
    },

    // Tiers
    'tier1.title': { fr: 'Commandement', en: 'Command' },
    'tier1.ranks': { fr: 'Directeur • Sous-Directeur', en: 'Director • Deputy Director' },
    'tier2.title': { fr: 'Officiers', en: 'Officers' },
    'tier2.ranks': { fr: 'Capitaine • Lieutenant', en: 'Captain • Lieutenant' },
    'tier3.title': { fr: 'Opérateurs', en: 'Operators' },
    'tier3.ranks': { fr: 'Spécialiste • Opérateur', en: 'Specialist • Operator' },
    'tier4.title': { fr: 'Recrues', en: 'Recruits' },
    'tier4.ranks': { fr: 'Recrue • En évaluation', en: 'Recruit • Under evaluation' },

    'roster.title': { fr: 'Registre Actif', en: 'Active Registry' },
    'roster.meta': {
      fr: 'Données mises à jour : 2954.11.15 — <span class="text-dim">Certaines entrées sont restreintes</span>',
      en: 'Data updated: 2954.11.15 — <span class="text-dim">Some entries are restricted</span>'
    },

    // Members
    'justmisq.role': { fr: 'Commandement Stratégique — Direction Générale', en: 'Strategic Command — General Management' },
    'justmisq.bio': { fr: 'Opérateur senior. Architecte de la stratégie opérationnelle Fluxx.', en: 'Senior operator. Architect of Fluxx operational strategy.' },
    'dayfloo.role': { fr: 'Commandement Tactique — Coordination Opérations', en: 'Tactical Command — Operations Coordination' },
    'dayfloo.bio': { fr: 'Spécialiste coordination multi-vecteurs. Expertise terrain confirmée.', en: 'Multi-vector coordination specialist. Confirmed field expertise.' },
    'zundag.role': { fr: 'Division Opérations — Chef d\'Escouade', en: 'Operations Division — Squad Leader' },
    'zundag.bio': { fr: 'Opérateur vétéran. Expertise operationnelle validée sur multiple déploiements.', en: 'Veteran operator. Operational expertise validated across multiple deployments.' },
    'reeves.role': { fr: 'Division Assaut — Chef d\'Escouade Alpha', en: 'Assault Division — Alpha Squad Leader' },
    'nakamura.role': { fr: 'Division Logistique — Coordination Transport', en: 'Logistics Division — Transport Coordination' },
    'drake.role': { fr: 'Division Reconnaissance — Opérations Terrain', en: 'Reconnaissance Division — Field Operations' },
    'vasquez.role': { fr: 'Division Communication — Guerre Informationnelle', en: 'Communications Division — Information Warfare' },
    'volkov.role': { fr: 'Ingénierie de Combat — Systèmes d\'Armement', en: 'Combat Engineering — Weapons Systems' },
    'chen.role': { fr: 'Systèmes Informatiques — Cybersécurité', en: 'Information Systems — Cybersecurity' },
    'hartmann.role': { fr: 'Pilotage — Extraction & Déploiement', en: 'Piloting — Extraction & Deployment' },
    'okafor.role': { fr: 'Médecine Tactique — Soutien Opérationnel', en: 'Tactical Medicine — Operational Support' },

    // Ranks
    'rank.marechal': { fr: 'Maréchal — RANK 5', en: 'Marshal — RANK 5' },
    'rank.major': { fr: 'Major — RANK 4', en: 'Major — RANK 4' },
    'rank.capitaine': { fr: 'Capitaine — RANK 4', en: 'Captain — RANK 4' },
    'rank.lieutenant': { fr: 'Lieutenant — RANK 3', en: 'Lieutenant — RANK 3' },
    'rank.specialiste': { fr: 'Spécialiste — RANK 2', en: 'Specialist — RANK 2' },
    'rank.operateur': { fr: 'Opérateur — RANK 1', en: 'Operator — RANK 1' },

    // Status
    'status.active': { fr: 'ACTIF', en: 'ACTIVE' },
    'status.active.2949': { fr: 'ACTIF — DEPUIS 2949', en: 'ACTIVE — SINCE 2949' },
    'status.active.2950': { fr: 'ACTIF — DEPUIS 2950', en: 'ACTIVE — SINCE 2950' },
    'status.active.2951': { fr: 'ACTIF — DEPUIS 2951', en: 'ACTIVE — SINCE 2951' },
    'status.active.2952': { fr: 'ACTIF — DEPUIS 2952', en: 'ACTIVE — SINCE 2952' },
    'status.active.2953': { fr: 'ACTIF — DEPUIS 2953', en: 'ACTIVE — SINCE 2953' },

    // Shadow
    'shadow.corrupted': { fr: '[DONNÉES CORROMPUES]', en: '[DATA CORRUPTED]' },
    'shadow.role.expurged': { fr: 'Division : ██████ — Rôle : <span class="redacted">EXPURGÉ</span>', en: 'Division: ██████ — Role: <span class="redacted">REDACTED</span>' },
    'shadow.status.undetermined': { fr: 'STATUT INDÉTERMINÉ', en: 'STATUS UNDETERMINED' },
    'shadow.role.unconventional': { fr: 'Division : ██████ — Rôle : Opérations <span class="strikethrough">non-conventionnelles</span>', en: 'Division: ██████ — Role: <span class="strikethrough">Unconventional</span> operations' },
    'shadow.status.unknown': { fr: 'ACTIF — LOCALISATION INCONNUE', en: 'ACTIVE — LOCATION UNKNOWN' },
    'shadow.role.erased': { fr: 'Division : ██████ — Rôle : <span class="redacted">EFFACÉ</span>', en: 'Division: ██████ — Role: <span class="redacted">ERASED</span>' },
    'shadow.error': { fr: '[ERREUR SYST\u0335\u0322ÈME]', en: '[SYST\u0335\u0322EM ERROR]' },

    // Personnel count
    'count': {
      fr: 'EFFECTIF AFFICHÉ : 13 OPÉRATEURS — EFFECTIF TOTAL : <span class="text-dim">[DONNÉE NON DISPONIBLE]</span>',
      en: 'DISPLAYED PERSONNEL: 13 OPERATORS — TOTAL PERSONNEL: <span class="text-dim">[DATA UNAVAILABLE]</span>'
    },

    // Footer
    'footer.members': {
      fr: 'FLUXX PRIVATE MILITARY CONTRACTOR — REGISTRE PERSONNEL<br>DERNIÈRE SYNCHRONISATION : 2954.11.15 — NOEUD SÉCURISÉ',
      en: 'FLUXX PRIVATE MILITARY CONTRACTOR — PERSONNEL REGISTRY<br>LAST SYNCHRONIZATION: 2954.11.15 — SECURED NODE'
    },
  },

  // ========== DOSSIERS PAGE ==========
  dossiers: {
    'title': { fr: 'FLUXX — Dossiers UEE', en: 'FLUXX — UEE Dossiers' },
    'header.status': { fr: 'DOSSIERS PUBLICS — SOURCE : REGISTRES UEE', en: 'PUBLIC DOSSIERS — SOURCE: UEE RECORDS' },
    'header.title': { fr: 'Dossiers UEE', en: 'UEE Dossiers' },
    'header.subtitle': { fr: 'Rapports, incidents et observations — Documents publics', en: 'Reports, incidents, and observations — Public documents' },

    'disclaimer': {
      fr: '<strong style="color: var(--gray-light);">AVERTISSEMENT :</strong> Les documents présentés ci-dessous sont extraits des registres publics de l\'United Empire of Earth (UEE). Ils constituent des observations, rapports d\'incidents et logs de communication non classifiés. Ces documents ne constituent ni une preuve ni une accusation. Ils sont fournis à titre informatif uniquement.',
      en: '<strong style="color: var(--gray-light);">WARNING:</strong> The documents presented below are extracted from the public records of the United Empire of Earth (UEE). They constitute observations, incident reports, and unclassified communication logs. These documents do not constitute proof or accusation. They are provided for informational purposes only.'
    },

    'incidents.title': { fr: 'Rapports d\'Incidents', en: 'Incident Reports' },
    'incidents.classification': { fr: 'Source : Bureau des Affaires Civiles — UEE Navy Intelligence Liaison', en: 'Source: Bureau of Civil Affairs — UEE Navy Intelligence Liaison' },

    // Dossier 1
    'd1.title': { fr: 'Incident de Convoi — Corridor Stanton-Pyro', en: 'Convoy Incident — Stanton-Pyro Corridor' },
    'd1.excerpt': {
      fr: 'Un convoi commercial de 3 vaisseaux cargo a signalé la présence d\'une escorte non identifiée dans le corridor Stanton-Pyro, secteur 7G. L\'escorte a maintenu une formation parallèle pendant 47 minutes avant de disparaître des capteurs. Aucune communication. Aucune agression. Le convoi est arrivé intact.',
      en: 'A commercial convoy of 3 cargo ships reported the presence of an unidentified escort in the Stanton-Pyro corridor, sector 7G. The escort maintained a parallel formation for 47 minutes before disappearing from sensors. No communication. No aggression. The convoy arrived intact.'
    },
    'd1.detail': {
      fr: '<strong>Note du rapporteur :</strong> Les signatures capteurs correspondent à un profil de configuration militaire. Cependant, aucun groupe enregistré ne correspond à la formation observée. Le propriétaire du convoi a refusé de commenter. Lors d\'un entretien ultérieur, le pilote principal a mentionné avoir « reçu une recommandation d\'itinéraire » d\'une source non spécifiée avant le départ.<br><br><strong>Conclusion :</strong> Incident classé — Aucune suite judiciaire. Observation consignée.',
      en: '<strong>Reporter\'s note:</strong> Sensor signatures correspond to a military configuration profile. However, no registered group matches the observed formation. The convoy owner refused to comment. In a subsequent interview, the lead pilot mentioned having "received a route recommendation" from an unspecified source before departure.<br><br><strong>Conclusion:</strong> Case filed — No legal proceedings. Observation logged.'
    },

    // Dossier 2
    'd2.title': { fr: 'Anomalie de Communication — Station Relais Clio', en: 'Communication Anomaly — Clio Relay Station' },
    'd2.excerpt': {
      fr: 'La station relais Clio (système Stanton) a enregistré une série de transmissions chiffrées sur une fréquence non-standard pendant une période de 6 heures. Les transmissions n\'ont pas pu être décodées. Le schéma de fréquence ne correspond à aucun protocole militaire ou commercial enregistré.',
      en: 'The Clio relay station (Stanton system) recorded a series of encrypted transmissions on a non-standard frequency over a 6-hour period. The transmissions could not be decoded. The frequency pattern does not match any registered military or commercial protocol.'
    },
    'd2.detail': {
      fr: '<strong>Analyse technique :</strong> Les transmissions utilisent un chiffrement à rotation asymétrique. La structure suggère un réseau point-à-point avec au minimum 4 noeuds actifs. Les tentatives de triangulation ont échoué — les points d\'émission semblent changer de position à intervalles de 12 minutes.<br><br><strong>Corrélation :</strong> Des schémas similaires ont été observés dans 3 autres systèmes sur les 6 derniers mois. Aucune attribution confirmée.<br><br><strong>Conclusion :</strong> Surveillance passive recommandée. Pas de base juridique pour intervention.',
      en: '<strong>Technical analysis:</strong> The transmissions use asymmetric rotation encryption. The structure suggests a point-to-point network with at least 4 active nodes. Triangulation attempts failed — emission points appear to change position at 12-minute intervals.<br><br><strong>Correlation:</strong> Similar patterns have been observed in 3 other systems over the last 6 months. No confirmed attribution.<br><br><strong>Conclusion:</strong> Passive surveillance recommended. No legal basis for intervention.'
    },

    // Dossier 3
    'd3.title': { fr: 'Rapport d\'Observation — Zone Minière Non-Assignée', en: 'Observation Report — Unassigned Mining Zone' },
    'd3.excerpt': {
      fr: 'Un patrouilleur UEE a observé un groupe de 5 vaisseaux en formation tactique dans une zone minière non-assignée du système Nyx. Le groupe a quitté la zone en moins de 3 minutes après détection radar. Les vaisseaux ne portaient aucun identifiant visible.',
      en: 'A UEE patrol observed a group of 5 ships in tactical formation in an unassigned mining zone in the Nyx system. The group left the area in less than 3 minutes after radar detection. The ships carried no visible identification.'
    },
    'd3.detail': {
      fr: '<strong>Note :</strong> La vitesse de désengagement et la coordination de manoeuvre suggèrent un entraînement militaire de haut niveau. Les résidus d\'émission capteurs indiquent des vaisseaux lourdement modifiés avec des systèmes de brouillage actifs.<br><br><strong>Remarque de l\'officier :</strong> « Ils savaient qu\'on était là avant qu\'on les détecte. Ils ont attendu qu\'on les voie avant de partir. »<br><br><strong>Conclusion :</strong> Aucune infraction constatée. Zone non-assignée = pas de juridiction. Observation loguée.',
      en: '<strong>Note:</strong> The speed of disengagement and maneuver coordination suggest high-level military training. Sensor emission residues indicate heavily modified ships with active jamming systems.<br><br><strong>Officer\'s remark:</strong> "They knew we were there before we detected them. They waited until we saw them before leaving."<br><br><strong>Conclusion:</strong> No violation observed. Unassigned zone = no jurisdiction. Observation logged.'
    },

    // Dossier 4
    'd4.title': { fr: 'Disparition de Cargo — Registre Maritime Interstellaire', en: 'Cargo Disappearance — Interstellar Maritime Registry' },
    'd4.excerpt': {
      fr: 'Le cargo « Meridian Star » (class Hull-B) a disparu des registres de suivi pendant 14 heures dans le corridor Terra-Magnus avant de réapparaître à son point de destination final, intact, à l\'heure prévue. L\'équipage a déclaré n\'avoir « rien à signaler ».',
      en: 'The cargo ship "Meridian Star" (class Hull-B) disappeared from tracking records for 14 hours in the Terra-Magnus corridor before reappearing at its final destination point, intact, on schedule. The crew stated they had "nothing to report."'
    },
    'd4.detail': {
      fr: '<strong>Enquête :</strong> L\'interrogatoire de l\'équipage n\'a révélé aucune incohérence — mais aussi aucun détail. Les membres d\'équipage ont fourni des réponses identiques, mot pour mot, ce qui est statistiquement improbable sans coordination préalable.<br><br><strong>Données de vol :</strong> Les données du boîtier de vol ont été « corrompues » pendant la période d\'absence. Le fabricant confirme que ce type de corruption est « techniquement impossible sans accès physique au matériel ».<br><br><strong>Conclusion :</strong> Dossier classé — Insuffisance de preuves. Note interne : <span class="text-dim">[REDIRIGÉ VERS SECTION ████]</span>',
      en: '<strong>Investigation:</strong> Crew interrogation revealed no inconsistencies — but also no details. Crew members provided identical answers, word for word, which is statistically improbable without prior coordination.<br><br><strong>Flight data:</strong> The flight recorder data was "corrupted" during the absence period. The manufacturer confirms that this type of corruption is "technically impossible without physical access to the hardware."<br><br><strong>Conclusion:</strong> Case filed — Insufficient evidence. Internal note: <span class="text-dim">[REDIRECTED TO SECTION ████]</span>'
    },

    // Dossier 5
    'd5.title': { fr: 'Interférence Système — Base Navale Kilian', en: 'System Interference — Kilian Naval Base' },
    'd5.excerpt': {
      fr: 'Les systèmes de surveillance périphérique de la base navale de Kilian ont enregistré une interférence structurée de 23 secondes. Pendant cette fenêtre, un vaisseau non identifié a transité dans le couloir de sécurité extérieur sans déclencher les protocoles d\'alerte.',
      en: 'The peripheral surveillance systems of Kilian naval base recorded a structured interference of 23 seconds. During this window, an unidentified vessel transited through the outer security corridor without triggering alert protocols.'
    },
    'd5.detail': {
      fr: '<strong>Analyse :</strong> L\'interférence n\'était pas un brouillage. Les analystes décrivent le signal comme un « remplacement structuré » — les capteurs ont reçu des données normales pendant que le transit s\'effectuait. Cela implique une connaissance intime des protocoles de surveillance de la base.<br><br><strong>Impact :</strong> Aucun dommage. Aucune intrusion. Le vaisseau a simplement traversé. Sa destination et son origine restent inconnues.<br><br><strong>Conclusion :</strong> Investigation en cours. Classification relevée à <span class="classified-badge">SENSIBLE</span>',
      en: '<strong>Analysis:</strong> The interference was not jamming. Analysts describe the signal as a "structured replacement" — sensors received normal data while the transit was taking place. This implies intimate knowledge of the base\'s surveillance protocols.<br><br><strong>Impact:</strong> No damage. No intrusion. The vessel simply passed through. Its destination and origin remain unknown.<br><br><strong>Conclusion:</strong> Investigation ongoing. Classification raised to <span class="classified-badge">SENSITIVE</span>'
    },

    // Dossier 6
    'd6.title': { fr: 'Note d\'Observation — Tendances de Piraterie (Secteurs Frontaliers)', en: 'Observation Note — Piracy Trends (Border Sectors)' },
    'd6.excerpt': {
      fr: 'Les statistiques de piraterie dans les corridors commerciaux des systèmes Stanton et Pyro montrent une réduction de 34% dans les zones où une « présence privée non-identifiée » a été rapportée. Corrélation notée, causalité non établie.',
      en: 'Piracy statistics in the commercial corridors of the Stanton and Pyro systems show a 34% reduction in areas where an "unidentified private presence" has been reported. Correlation noted, causation not established.'
    },
    'd6.detail': {
      fr: '<strong>Analyse statistique :</strong> Les groupes de pirates actifs dans ces zones ont soit cessé leurs opérations, soit se sont relocalisés. Certains leaders de ces groupes ont « disparu » sans trace ni conflit documenté.<br><br><strong>Hypothèse de travail :</strong> Une ou plusieurs entités privées exercent un contrôle territorial non-officiel sur ces corridors. La nature de cet arrangement (commercial, contractuel, ou spontané) n\'est pas déterminée.<br><br><strong>Recommandation :</strong> Surveillance continue. Pas d\'intervention recommandée — la réduction de piraterie est techniquement bénéfique.',
      en: '<strong>Statistical analysis:</strong> Active pirate groups in these areas have either ceased operations or relocated. Some leaders of these groups have "disappeared" without any documented trace or conflict.<br><br><strong>Working hypothesis:</strong> One or more private entities exercise unofficial territorial control over these corridors. The nature of this arrangement (commercial, contractual, or spontaneous) is not determined.<br><br><strong>Recommendation:</strong> Continued surveillance. No intervention recommended — the reduction in piracy is technically beneficial.'
    },

    // Transmission logs
    'logs.title': { fr: 'Logs de Transmission Interceptés', en: 'Intercepted Transmission Logs' },
    'logs.classification': { fr: 'Source : Surveillance passive — Non attribué', en: 'Source: Passive surveillance — Unattributed' },
    'logs.doc.classification': { fr: 'NON CLASSIFIÉ — USAGE ANALYTIQUE', en: 'UNCLASSIFIED — ANALYTICAL USE' },
    'logs.analyst': {
      fr: 'Note de l\'analyste : L\'attribution de ces transmissions n\'a pas été possible. Le terme « l\'instrument » apparaît dans 67% des communications interceptées attribuées au même réseau. Voir aussi : dossier <span class="text-dim">FL-7742</span>.',
      en: 'Analyst\'s note: Attribution of these transmissions was not possible. The term "the instrument" appears in 67% of intercepted communications attributed to the same network. See also: dossier <span class="text-dim">FL-7742</span>.'
    },

    // Footer
    'footer.dossiers': {
      fr: 'FLUXX PRIVATE MILITARY CONTRACTOR — DOSSIERS PUBLICS<br>SOURCE : REGISTRES UEE — DONNÉES NON VÉRIFIÉES',
      en: 'FLUXX PRIVATE MILITARY CONTRACTOR — PUBLIC DOSSIERS<br>SOURCE: UEE RECORDS — UNVERIFIED DATA'
    },
  },

  // ========== ARCHIVES PAGE ==========
  archives: {
    'title': { fr: 'FLUXX — Archives Opérationnelles', en: 'FLUXX — Operational Archives' },
    'header.status': { fr: 'ARCHIVES OPÉRATIONNELLES — ACCÈS PARTIEL', en: 'OPERATIONAL ARCHIVES — PARTIAL ACCESS' },
    'header.title': { fr: 'Archives Opérationnelles', en: 'Operational Archives' },
    'header.subtitle': { fr: 'Dossiers détaillés — Coordonnées — Extraits classifiés', en: 'Detailed dossiers — Coordinates — Classified excerpts' },

    'warning': {
      fr: '<strong>⚠ AVERTISSEMENT :</strong> Les documents suivants contiennent des données partiellement expurgées. Certains passages ont été supprimés, chiffrés ou altérés conformément au protocole de sécurité interne. Les informations visibles ne représentent qu\'une fraction du contenu original. L\'accès aux données complètes requiert une autorisation de niveau supérieur.',
      en: '<strong>⚠ WARNING:</strong> The following documents contain partially redacted data. Some passages have been deleted, encrypted, or altered in accordance with internal security protocol. Visible information represents only a fraction of the original content. Access to complete data requires higher-level authorization.'
    },

    // Archive 1
    'a1.classification': { fr: 'CLASSIFICATION : RESTREINT — DIFFUSION CONTRÔLÉE', en: 'CLASSIFICATION: RESTRICTED — CONTROLLED DISTRIBUTION' },
    'a1.title': { fr: 'Rapport Post-Opérationnel — Opération « TRANSIT FROID »', en: 'Post-Operational Report — Operation "COLD TRANSIT"' },
    'a1.meta.date.label': { fr: 'Date d\'opération', en: 'Operation date' },
    'a1.meta.zone.label': { fr: 'Zone d\'opération', en: 'Operation zone' },
    'a1.meta.zone.value': { fr: 'Système Nyx — Secteur <span class="redacted">EXPURGÉ</span>', en: 'Nyx System — Sector <span class="redacted">REDACTED</span>' },
    'a1.meta.personnel.label': { fr: 'Effectif déployé', en: 'Deployed personnel' },
    'a1.meta.personnel.value': { fr: '<span class="strikethrough">12 opérateurs</span> [CORRIGÉ]', en: '<span class="strikethrough">12 operators</span> [CORRECTED]' },
    'a1.meta.commander.label': { fr: 'Commandant de mission', en: 'Mission commander' },
    'a1.meta.commander.value': { fr: '<span class="redacted">CLASSIFIÉ</span>', en: '<span class="redacted">CLASSIFIED</span>' },

    'a1.summary.title': { fr: 'Résumé de Mission', en: 'Mission Summary' },
    'a1.summary.p1': {
      fr: 'Opération d\'extraction et de sécurisation d\'un convoi de <span class="strikethrough">matériel sensible</span> ressources standard dans le système Nyx. Le convoi a transité par des zones non-patrouillées, nécessitant une escorte discrète et un plan de contingence multi-couches.',
      en: 'Extraction and security operation for a convoy of <span class="strikethrough">sensitive material</span> standard resources in the Nyx system. The convoy transited through unpatrolled zones, requiring a discreet escort and a multi-layered contingency plan.'
    },
    'a1.summary.p2': {
      fr: 'Le transit a été complété sans incident. Trois contacts hostiles potentiels ont été identifiés et <span class="strikethrough">neutralisés</span> dissuadés par positionnement tactique. Le client a confirmé la réception du <span class="redacted">EXPURGÉ</span> dans les délais contractuels.',
      en: 'The transit was completed without incident. Three potential hostile contacts were identified and <span class="strikethrough">neutralized</span> deterred through tactical positioning. The client confirmed receipt of the <span class="redacted">REDACTED</span> within contractual deadlines.'
    },
    'a1.tactical.title': { fr: 'Données Tactiques', en: 'Tactical Data' },

    // Archive 2
    'a2.title': { fr: 'Analyse de Secteur — Zone « CENDRES GRISES »', en: 'Sector Analysis — Zone "GRAY ASHES"' },
    'a2.meta.period.label': { fr: 'Période d\'analyse', en: 'Analysis period' },
    'a2.meta.zone.label': { fr: 'Zone concernée', en: 'Zone covered' },
    'a2.meta.analyst.label': { fr: 'Analyste', en: 'Analyst' },
    'a2.meta.analyst.value': { fr: 'Bureau Stratégique — <span class="redacted">Nom</span>', en: 'Strategic Bureau — <span class="redacted">Name</span>' },

    'a2.theater.title': { fr: 'Évaluation du Théâtre', en: 'Theater Assessment' },
    'a2.theater.p1': {
      fr: 'Le corridor Pyro-Stanton constitue un axe stratégique à haut potentiel. La faiblesse de la présence UEE dans les segments 6 à 9, combinée à l\'activité décroissante des groupes pirates traditionnels, crée un <em>espace opérationnel favorable</em>.',
      en: 'The Pyro-Stanton corridor constitutes a high-potential strategic axis. The weakness of UEE presence in segments 6 to 9, combined with the declining activity of traditional pirate groups, creates a <em>favorable operational space</em>.'
    },
    'a2.theater.p2': {
      fr: 'L\'analyse suggère que la réduction de l\'activité pirate n\'est pas organique mais le résultat d\'une <span class="strikethrough">campagne systématique de</span> évolution naturelle du marché. Les groupes restants opèrent avec une prudence accrue, évitant spécifiquement certaines routes et certains horaires — un comportement compatible avec <span class="redacted">une dissuasion active</span>.',
      en: 'Analysis suggests that the reduction in pirate activity is not organic but the result of a <span class="strikethrough">systematic campaign of</span> natural market evolution. Remaining groups operate with increased caution, specifically avoiding certain routes and schedules — behavior consistent with <span class="redacted">active deterrence</span>.'
    },

    'a2.poi.title': { fr: 'Points d\'Intérêt Identifiés', en: 'Identified Points of Interest' },
    'a2.rec.title': { fr: 'Recommandations', en: 'Recommendations' },
    'a2.rec.text': {
      fr: '<span class="text-red">REC-1 :</span> Établir une présence rotative dans les segments 7-8. Discrétion maximale.<br><span class="text-red">REC-2 :</span> Sécuriser les POI-A et POI-B pour usage logistique.<br><span class="text-red">REC-3 :</span> <span class="strikethrough">Activer le protocole UMBRA pour nettoyage du segment 9</span> <span class="text-dim">[RECOMMANDATION RETIRÉE]</span><br><span class="text-red">REC-4 :</span> Maintenir la surveillance passive des mouvements UEE dans le secteur.',
      en: '<span class="text-red">REC-1:</span> Establish a rotational presence in segments 7-8. Maximum discretion.<br><span class="text-red">REC-2:</span> Secure POI-A and POI-B for logistical use.<br><span class="text-red">REC-3:</span> <span class="strikethrough">Activate UMBRA protocol for segment 9 cleanup</span> <span class="text-dim">[RECOMMENDATION WITHDRAWN]</span><br><span class="text-red">REC-4:</span> Maintain passive surveillance of UEE movements in the sector.'
    },

    // Anomalies
    'anomalies.title': { fr: 'Anomalies & Fragments', en: 'Anomalies & Fragments' },
    'anomalies.classification': { fr: 'Éléments non classifiés extraits de communications internes', en: 'Unclassified elements extracted from internal communications' },

    // Access terminal
    'terminal.title': { fr: 'Terminal d\'Accès', en: 'Access Terminal' },
    'terminal.desc': { fr: 'Certains documents requièrent un niveau d\'autorisation supérieur.', en: 'Some documents require a higher authorization level.' },
    'terminal.prompt1': { fr: '> TERMINAL D\'ACCÈS SÉCURISÉ', en: '> SECURED ACCESS TERMINAL' },
    'terminal.prompt2': { fr: '> NIVEAU REQUIS : SIGMA OU SUPÉRIEUR', en: '> REQUIRED LEVEL: SIGMA OR HIGHER' },
    'terminal.prompt3': { fr: '> ENTREZ LE CODE D\'ACCÈS :', en: '> ENTER ACCESS CODE:' },
    'terminal.hint': { fr: 'INDICE : Les réponses sont dans les données. Cherchez le nom qui revient dans l\'ombre.', en: 'HINT: The answers are in the data. Look for the name that recurs in the shadows.' },

    // Footer
    'footer.archives': {
      fr: 'FLUXX PRIVATE MILITARY CONTRACTOR — ARCHIVES OPÉRATIONNELLES<br>DONNÉES PARTIELLES — NIVEAU D\'ACCÈS : STANDARD',
      en: 'FLUXX PRIVATE MILITARY CONTRACTOR — OPERATIONAL ARCHIVES<br>PARTIAL DATA — ACCESS LEVEL: STANDARD'
    },
  },

  // ========== CLASSIFIED PAGE ==========
  classified: {
    'title': { fr: '███████ — CLASSIFIÉ', en: '███████ — CLASSIFIED' },

    'header.badge': { fr: 'NIVEAU D\'ACCÈS : SIGMA — YEUX SEULS', en: 'ACCESS LEVEL: SIGMA — EYES ONLY' },
    'header.subtitle': { fr: 'ÉVALUATION UEE INTERNE — RAPPORT DE MENACE — DIFFUSION INTERDITE', en: 'INTERNAL UEE ASSESSMENT — THREAT REPORT — DISTRIBUTION PROHIBITED' },

    'accesslog.1': { fr: '> ACCÈS AUTORISÉ — SIGNATURE VÉRIFIÉE', en: '> ACCESS AUTHORIZED — SIGNATURE VERIFIED' },
    'accesslog.4': { fr: '> NIVEAU: SIGMA — TOUTES DONNÉES DÉCLASSIFIÉES POUR CETTE SESSION', en: '> LEVEL: SIGMA — ALL DATA DECLASSIFIED FOR THIS SESSION' },
    'accesslog.5': { fr: '> ⚠ TOUTE COPIE OU TRANSMISSION DE CE DOCUMENT EST UNE VIOLATION DU CODE PÉNAL UEE §447.B', en: '> ⚠ ANY COPY OR TRANSMISSION OF THIS DOCUMENT IS A VIOLATION OF UEE PENAL CODE §447.B' },

    'doc.classification': { fr: 'CLASSIFICATION : SIGMA — CONFIDENTIEL DÉFENSE — YEUX SEULS', en: 'CLASSIFICATION: SIGMA — DEFENSE CONFIDENTIAL — EYES ONLY' },
    'doc.title': { fr: 'Évaluation de Menace : Entité « FLUXX »', en: 'Threat Assessment: Entity "FLUXX"' },
    'doc.meta.authority.label': { fr: 'Autorité émettrice', en: 'Issuing authority' },
    'doc.meta.authority.value': { fr: 'UEE Naval Intelligence — Section Menaces Non-Étatiques', en: 'UEE Naval Intelligence — Non-State Threats Section' },
    'doc.meta.analyst.label': { fr: 'Analyste principal', en: 'Lead analyst' },
    'doc.meta.threat.label': { fr: 'Niveau de menace', en: 'Threat level' },
    'doc.meta.threat.value': { fr: 'ÉLEVÉ — CATÉGORIE ALPHA', en: 'HIGH — ALPHA CATEGORY' },

    'summary.title': { fr: 'Résumé Exécutif', en: 'Executive Summary' },
    'summary.p1': {
      fr: 'L\'entité désignée « FLUXX » représente l\'une des menaces non-étatiques les plus sophistiquées actuellement actives dans l\'espace UEE. Contrairement aux organisations criminelles conventionnelles ou aux milices factionnelles, Fluxx opère avec un niveau de discipline, de coordination et d\'intelligence opérationnelle comparable aux meilleurs corps militaires étatiques.',
      en: 'The entity designated "FLUXX" represents one of the most sophisticated non-state threats currently active in UEE space. Unlike conventional criminal organizations or factional militias, Fluxx operates with a level of discipline, coordination, and operational intelligence comparable to the best state military corps.'
    },
    'summary.p2': {
      fr: 'Ce qui rend Fluxx particulièrement préoccupant n\'est pas sa capacité offensive — bien qu\'elle soit considérable — mais son <em style="color: var(--red-primary);">invisibilité institutionnelle</em>. En dépit de multiples observations, interceptions et analyses, nous ne disposons d\'aucune preuve légalement exploitable de la moindre activité criminelle. Chaque opération est conçue pour être plausiblement niable.',
      en: 'What makes Fluxx particularly concerning is not its offensive capability — though it is considerable — but its <em style="color: var(--red-primary);">institutional invisibility</em>. Despite multiple observations, interceptions, and analyses, we have no legally exploitable evidence of any criminal activity. Every operation is designed to be plausibly deniable.'
    },
    'summary.note': {
      fr: '<strong>NOTE DE L\'ANALYSTE :</strong> J\'ai passé 18 mois sur ce dossier. Fluxx n\'est pas un groupe criminel qui se cache bien. C\'est une organisation qui a intégré l\'invisibilité dans son ADN opérationnel. Ils ne violent pas la loi — ils opèrent dans les espaces où la loi n\'existe pas encore. Et quand la loi arrive, ils sont déjà ailleurs.',
      en: '<strong>ANALYST\'S NOTE:</strong> I spent 18 months on this dossier. Fluxx is not a criminal group that hides well. It\'s an organization that has integrated invisibility into its operational DNA. They don\'t break the law — they operate in spaces where the law doesn\'t yet exist. And when the law arrives, they\'re already elsewhere.'
    },

    'threat.title': { fr: 'Évaluation de Menace Détaillée', en: 'Detailed Threat Assessment' },
    'threat.military': { fr: 'Capacité militaire', en: 'Military capability' },
    'threat.info': { fr: 'Sophistication informationnelle', en: 'Information sophistication' },
    'threat.resilience': { fr: 'Résilience organisationnelle', en: 'Organizational resilience' },
    'threat.penetration': { fr: 'Capacité de pénétration', en: 'Penetration capability' },
    'threat.unpredictability': { fr: 'Imprévisibilité', en: 'Unpredictability' },
    'threat.note': {
      fr: '<strong>NOTE :</strong> Le score d\'imprévisibilité est paradoxalement bas. Fluxx est <em>prévisible</em> dans sa méthodologie — ils servent toujours leurs intérêts. Ce qui est imprévisible, c\'est notre capacité à déterminer quels sont ces intérêts à un moment donné.',
      en: '<strong>NOTE:</strong> The unpredictability score is paradoxically low. Fluxx is <em>predictable</em> in its methodology — they always serve their interests. What is unpredictable is our ability to determine what those interests are at any given time.'
    },

    'umbra.title': { fr: 'Division UMBRA — Évaluation Spéciale', en: 'UMBRA Division — Special Assessment' },
    'umbra.p1': {
      fr: 'La « Division UMBRA » est le nom de code attribué par nos analystes à une sous-unité de Fluxx dont l\'existence n\'est pas officiellement reconnue par l\'organisation. Les preuves de son existence sont circonstancielles mais convergentes.',
      en: 'The "UMBRA Division" is the code name assigned by our analysts to a Fluxx sub-unit whose existence is not officially recognized by the organization. Evidence of its existence is circumstantial but convergent.'
    },
    'umbra.p2': {
      fr: 'D\'après nos analyses, UMBRA est responsable des opérations que Fluxx ne peut pas associer publiquement à son image de « PMC professionnelle ». Cela inclut :',
      en: 'According to our analyses, UMBRA is responsible for operations that Fluxx cannot publicly associate with its image as a "professional PMC." This includes:'
    },
    'umbra.li1': { fr: 'Opérations de déstabilisation ciblée', en: 'Targeted destabilization operations' },
    'umbra.li2': { fr: 'Élimination sélective de cibles d\'intérêt stratégique', en: 'Selective elimination of strategic interest targets' },
    'umbra.li3': { fr: 'Infiltration de réseaux ennemis (et potentiellement alliés)', en: 'Infiltration of enemy networks (and potentially allied ones)' },
    'umbra.li4': { fr: 'Guerre informationnelle et manipulation de données', en: 'Information warfare and data manipulation' },
    'umbra.li5': { fr: 'Opérations « drapeau noir » — attribution impossible par conception', en: '"Black flag" operations — attribution impossible by design' },
    'umbra.note': {
      fr: '<strong>NOTE PERSONNELLE — CDR. MORRISON :</strong> Si UMBRA existe réellement dans la forme décrite, alors nous avons affaire à l\'équivalent d\'un service de renseignement souverain opérant sans les contraintes d\'un gouvernement. Pas de supervision parlementaire. Pas de comptes à rendre. Pas de limites politiques. Juste l\'objectif, et les moyens de l\'atteindre.',
      en: '<strong>PERSONAL NOTE — CDR. MORRISON:</strong> If UMBRA truly exists in the described form, then we are dealing with the equivalent of a sovereign intelligence service operating without government constraints. No parliamentary oversight. No accountability. No political limits. Just the objective, and the means to achieve it.'
    },

    // Profiles
    'profiles.title': { fr: 'Profils Classifiés', en: 'Classified Profiles' },
    'profiles.classification': { fr: 'SIGMA — PROFILS DE MENACE INDIVIDUELS', en: 'SIGMA — INDIVIDUAL THREAT PROFILES' },

    // Analysis
    'analysis.classification': { fr: 'ANALYSES TACTIQUES — USAGE INTERNE UNIQUEMENT', en: 'TACTICAL ANALYSES — INTERNAL USE ONLY' },
    'analysis.title': { fr: 'Conclusions et Recommandations', en: 'Conclusions and Recommendations' },
    'analysis.section.title': { fr: 'Analyse Opérationnelle', en: 'Operational Analysis' },
    'analysis.intro': {
      fr: 'Fluxx opère selon un modèle que nous qualifions de « précision systémique ». Chaque opération documentée (ou suspectée) présente les caractéristiques suivantes :',
      en: 'Fluxx operates according to a model we call "systemic precision." Every documented (or suspected) operation exhibits the following characteristics:'
    },
    'analysis.li1': { fr: 'Un objectif unique et clairement défini — pas de mission secondaire improvisée', en: 'A single, clearly defined objective — no improvised secondary missions' },
    'analysis.li2': { fr: 'Une fenêtre d\'exécution minimale — présence réduite au strict nécessaire', en: 'A minimal execution window — presence reduced to the bare minimum' },
    'analysis.li3': { fr: 'Aucune trace exploitable — nettoyage digital et physique systématique', en: 'No exploitable traces — systematic digital and physical cleanup' },
    'analysis.li4': { fr: 'Déni plausible intégré — chaque action peut être expliquée autrement', en: 'Built-in plausible deniability — every action can be explained otherwise' },
    'analysis.li5': { fr: 'Évaluation continue — ils s\'adaptent plus vite que nos protocoles de réponse', en: 'Continuous assessment — they adapt faster than our response protocols' },

    'rec.title': { fr: 'Recommandations au Commandement', en: 'Recommendations to Command' },
    'rec.r1': {
      fr: '<span class="text-red">R-1 :</span> <strong>Ne pas engager directement.</strong> Fluxx n\'est pas un ennemi conventionnel. Une confrontation ouverte donnerait à l\'organisation un motif de représailles et un argument de victimisation publique. Leur façade de PMC légitime est leur meilleur bouclier — ne pas leur fournir de raison de l\'activer.',
      en: '<span class="text-red">R-1:</span> <strong>Do not engage directly.</strong> Fluxx is not a conventional enemy. An open confrontation would give the organization a motive for retaliation and an argument for public victimization. Their legitimate PMC facade is their best shield — do not give them a reason to activate it.'
    },
    'rec.r2': {
      fr: '<span class="text-red">R-2 :</span> <strong>Surveillance passive renforcée.</strong> Augmenter les capacités de monitoring sur les corridors identifiés. Concentrer les ressources SIGINT sur les schémas de communication NOEUD.',
      en: '<span class="text-red">R-2:</span> <strong>Enhanced passive surveillance.</strong> Increase monitoring capabilities on identified corridors. Focus SIGINT resources on NODE communication patterns.'
    },
    'rec.r3': {
      fr: '<span class="text-red">R-3 :</span> <strong>Infiltration de longue durée.</strong> Recommandation controversée mais nécessaire. Nous devons placer un actif à l\'intérieur de l\'organisation. Probabilité de succès estimée : 12%. Risque de compromission : élevé.',
      en: '<span class="text-red">R-3:</span> <strong>Long-term infiltration.</strong> Controversial but necessary recommendation. We need to place an asset inside the organization. Estimated success probability: 12%. Risk of compromise: high.'
    },
    'rec.r4': {
      fr: '<span class="text-red">R-4 :</span> <strong>Accepter la coexistence conditionnelle.</strong> Tant que les activités de Fluxx ne menacent pas directement les intérêts fondamentaux de l\'UEE, la confrontation est contre-productive. La réduction de piraterie dans leurs zones d\'opération est un bénéfice collatéral que nous ne pouvons pas ignorer.',
      en: '<span class="text-red">R-4:</span> <strong>Accept conditional coexistence.</strong> As long as Fluxx\'s activities do not directly threaten the UEE\'s core interests, confrontation is counterproductive. The reduction in piracy in their operational zones is a collateral benefit we cannot ignore.'
    },
    'rec.note': {
      fr: '<strong>NOTE FINALE — CDR. MORRISON :</strong><br><br>On m\'a demandé une conclusion claire. La voici :<br><br>Fluxx n\'est pas une menace que nous pouvons éliminer. C\'est une menace que nous devons <em>comprendre</em>. Et je ne suis pas certain que nous en soyons capables.<br><br>Ils ne sont pas chaotiques. Ils ne sont pas idéologiques. Ils ne sont pas irrationnels. Ce sont peut-être les adversaires les plus rationnels que le renseignement UEE ait jamais documentés. Et c\'est précisément ce qui les rend dangereux.<br><br>Un ennemi motivé par la haine fait des erreurs. Un ennemi motivé par la cupidité est prévisible. Un ennemi motivé par <em>l\'efficacité pure</em>... est un instrument. Et les instruments ne s\'arrêtent pas. Ils fonctionnent. Jusqu\'à ce qu\'ils ne soient plus nécessaires.<br><br>La question que personne ne veut poser : <em style="color: var(--red-primary);">nécessaires pour qui ?</em>',
      en: '<strong>FINAL NOTE — CDR. MORRISON:</strong><br><br>I was asked for a clear conclusion. Here it is:<br><br>Fluxx is not a threat we can eliminate. It\'s a threat we must <em>understand</em>. And I\'m not certain we\'re capable of it.<br><br>They are not chaotic. They are not ideological. They are not irrational. They may be the most rational adversaries UEE intelligence has ever documented. And that is precisely what makes them dangerous.<br><br>An enemy motivated by hatred makes mistakes. An enemy motivated by greed is predictable. An enemy motivated by <em>pure efficiency</em>... is an instrument. And instruments don\'t stop. They function. Until they\'re no longer needed.<br><br>The question nobody wants to ask: <em style="color: var(--red-primary);">needed by whom?</em>'
    },

    // Closing
    'closing.quote': {
      fr: '« L\'instrument n\'a pas d\'allégeance.<br>L\'instrument n\'a pas de conscience.<br>L\'instrument fonctionne. »',
      en: '"The instrument holds no allegiance.<br>The instrument has no conscience.<br>The instrument functions."'
    },
    'closing.source': { fr: '— Intercepté. Source : réseau NOEUD. Non attribué.', en: '— Intercepted. Source: NODE network. Unattributed.' },
    'closing.destruction': {
      fr: 'FIN DU DOCUMENT — CLASSIFICATION SIGMA<br>DESTRUCTION AUTOMATIQUE APRÈS LECTURE : <span class="text-red" id="countdown">DÉSACTIVÉE (SESSION ACTIVE)</span>',
      en: 'END OF DOCUMENT — SIGMA CLASSIFICATION<br>AUTOMATIC DESTRUCTION AFTER READING: <span class="text-red" id="countdown">DISABLED (ACTIVE SESSION)</span>'
    },
    'closing.btn': { fr: 'RETOUR AU RÉSEAU PUBLIC', en: 'RETURN TO PUBLIC NETWORK' },

    'footer.classified': {
      fr: 'DOCUMENT UEE NAVAL INTELLIGENCE — SECTION MENACES NON-ÉTATIQUES<br>CLASSIFICATION SIGMA — REPRODUCTION INTERDITE<br>FLUXX EST OBSERVÉ. FLUXX LE SAIT. ET ILS CONTINUENT.',
      en: 'UEE NAVAL INTELLIGENCE DOCUMENT — NON-STATE THREATS SECTION<br>SIGMA CLASSIFICATION — REPRODUCTION PROHIBITED<br>FLUXX IS BEING WATCHED. FLUXX KNOWS IT. AND THEY CONTINUE.'
    },
  },

  // ========== EXECUTIVE PAGE ==========
  executive: {
    'title': { fr: '████████████ — EXÉCUTIF', en: '████████████ — EXECUTIVE' },
    'watermark': { fr: 'EXÉCUTIF', en: 'EXECUTIVE' },
    'nav.sub': { fr: 'ACCÈS EXÉCUTIF — NIVEAU ZÉRO', en: 'EXECUTIVE ACCESS — LEVEL ZERO' },

    'header.badge': { fr: 'NIVEAU D\'ACCÈS : DIRECTEURS UNIQUEMENT — REDLINE PROTOCOL', en: 'ACCESS LEVEL: DIRECTORS ONLY — REDLINE PROTOCOL' },
    'header.subtitle': { fr: 'RAPPORTS CONFIDENTIELS — DIRECTEURS JUS██SQ & DA██OO UNIQUEMENT', en: 'CONFIDENTIAL REPORTS — DIRECTORS JUS██SQ & DA██OO ONLY' },

    'accesslog': {
      fr: '> REDLINE PROTOCOL ACTIVÉ — SESSION EXÉCUTIVE<br>> AUTORISÉS : JustMisq, dayfloo<br>> SESSION ID: <span id="sessionId" style="font-weight: bold;"></span><br>> TIMESTAMP: <span id="accessTime"></span><br>> DONNÉES SENSIBLES — SÉCURITÉ MAXIMALE REQUISE<br>> ⚠ ACCÈS NON-AUTORISÉ REMONTE AUTOMATIQUEMENT AU COMMANDEMENT',
      en: '> REDLINE PROTOCOL ACTIVATED — EXECUTIVE SESSION<br>> AUTHORIZED: JustMisq, dayfloo<br>> SESSION ID: <span id="sessionId" style="font-weight: bold;"></span><br>> TIMESTAMP: <span id="accessTime"></span><br>> SENSITIVE DATA — MAXIMUM SECURITY REQUIRED<br>> ⚠ UNAUTHORIZED ACCESS AUTOMATICALLY REPORTED TO COMMAND'
    },

    'footer.executive': {
      fr: 'FLUXX EXECUTIVE RECORDS — REDLINE PROTOCOL<br>DERNIER ACCÈS ENREGISTRÉ : <span id="footerTime"></span>',
      en: 'FLUXX EXECUTIVE RECORDS — REDLINE PROTOCOL<br>LAST RECORDED ACCESS: <span id="footerTime"></span>'
    },
  },
};


/* ============================================
   i18n ENGINE
   ============================================ */

const FluxxI18n = {

  currentLang: 'fr',
  pageId: null,

  init() {
    // Detect page ID from filename
    const path = window.location.pathname.split('/').pop() || 'index.html';
    this.pageId = path.replace('.html', '');
    
    // Load saved language
    const saved = localStorage.getItem('fluxx-lang');
    if (saved && (saved === 'fr' || saved === 'en')) {
      this.currentLang = saved;
    }

    // Apply translations
    this.applyAll();

    // Update HTML lang attribute
    document.documentElement.lang = this.currentLang;

    // Update meta description
    this.updateMeta();
  },

  toggle() {
    this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
    localStorage.setItem('fluxx-lang', this.currentLang);
    
    // Apply translations
    this.applyAll();

    // Update HTML lang
    document.documentElement.lang = this.currentLang;

    // Update meta description  
    this.updateMeta();

    // Update toggle button text
    this.updateToggleButton();
  },

  applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.get(key);
      if (text !== null) {
        el.innerHTML = text;
      }
    });

    // Update page title
    const titleKey = 'title';
    const pageTranslations = FLUXX_TRANSLATIONS[this.pageId];
    if (pageTranslations && pageTranslations[titleKey]) {
      document.title = pageTranslations[titleKey][this.currentLang];
    }
  },

  get(key) {
    // Check page-specific translations first
    const pageTranslations = FLUXX_TRANSLATIONS[this.pageId];
    if (pageTranslations && pageTranslations[key] && pageTranslations[key][this.currentLang]) {
      return pageTranslations[key][this.currentLang];
    }

    // Then check common translations
    const common = FLUXX_TRANSLATIONS.common;
    if (common && common[key] && common[key][this.currentLang]) {
      return common[key][this.currentLang];
    }

    return null;
  },

  updateMeta() {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const pageTranslations = FLUXX_TRANSLATIONS[this.pageId];
      if (pageTranslations && pageTranslations['meta.description']) {
        metaDesc.setAttribute('content', pageTranslations['meta.description'][this.currentLang]);
      }
    }
  },

  updateToggleButton() {
    const btn = document.querySelector('.lang-toggle');
    if (btn) {
      const otherLang = this.currentLang === 'fr' ? 'EN' : 'FR';
      btn.textContent = otherLang;
      btn.setAttribute('aria-label', this.currentLang === 'fr' ? 'Switch to English' : 'Passer en français');
    }
  },

  // Get boot sequence lines based on current language
  getBootLines() {
    const lang = this.currentLang;
    const c = FLUXX_TRANSLATIONS.common;
    return [
      c['boot.1'][lang],
      c['boot.2'][lang],
      c['boot.3'][lang],
      c['boot.4'][lang],
      c['boot.5'][lang],
      c['boot.6'][lang],
      c['boot.7'][lang],
      c['boot.8'][lang],
      c['boot.9'][lang],
      c['boot.10'][lang],
    ];
  }
};


/* ============================================
   LANGUAGE SWITCHER UI — auto-inject
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Create language toggle button
  const navInner = document.querySelector('.nav-inner');
  if (navInner) {
    const langBtn = document.createElement('button');
    langBtn.className = 'lang-toggle';
    langBtn.type = 'button';
    
    // Set initial text (show the OTHER language)
    const saved = localStorage.getItem('fluxx-lang') || 'fr';
    langBtn.textContent = saved === 'fr' ? 'EN' : 'FR';
    langBtn.setAttribute('aria-label', saved === 'fr' ? 'Switch to English' : 'Passer en français');
    langBtn.title = saved === 'fr' ? 'Switch to English' : 'Passer en français';

    langBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      FluxxI18n.toggle();
    });

    // Insert before the nav-links or at end
    const navLinks = navInner.querySelector('.nav-links');
    if (navLinks) {
      navInner.insertBefore(langBtn, navLinks);
    } else {
      navInner.appendChild(langBtn);
    }
  }

  // Initialize i18n
  FluxxI18n.init();
});
