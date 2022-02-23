<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="container">
    <h1 class="green">{{ msg }}</h1>
    <p align="center"><span><strong>{{$t('message.cgu')}}</strong></span></p>
    <p>L'Utilisateur et/ou Ayant-droit, particulier ou professionnel, s'engage à prendre connaissance attentivement et dans leur intégralité, avant toute utilisation, des termes et conditions établis dans les présentes Conditions Générales d’Utilisation, et à les accepter sans réserve. </p>
    <p>Pour utiliser le Service proposé sur la Plateforme, l’Utilisateur et/ou Ayant-droit doit au préalable se créer un compte GAIAR et accepter sans réserve au moment de son inscription les présentes Conditions Générales d’Utilisation. Si l’Utilisateur et/ou Ayant-droit est un particulier, il garantit à GAIAR qu’il dispose de la capacité juridique pour exercer ses droits et obligations, notamment accepter les Conditions et contracter avec GAIAR. Si l’Utilisateur et/ou Ayant-droit n’est pas un particulier, il garantit à GAIAR qu’il détient les pouvoirs nécessaires pour accepter les Conditions et contracter avec GAIAR, au nom de l’entité pour le compte de laquelle il utilise la Plateforme. </p>
    <p>Conformément aux dispositions des articles 1125 et suivants du Code civil, les présentes Conditions Générales d’Utilisation peuvent être conservées par toute personne visitant la Plateforme, par le moyen d'un enregistrement informatique, et peuvent par ailleurs être reproduites par l'Utilisateur et/ou Ayant-droit et/ou Spectateur, par le moyen de leur impression. </p>
    <p>Les présentes Conditions Générales d’Utilisation constituent un accord juridiquement contraignant liant l’Utilisateur à GAIAR. Elles seront applicables tant qu'elles figureront sur la Plateforme et pourront être modifiées de manière discrétionnaire par GAIAR. Il appartient à l’Utilisateur et/ou Ayant-droit et/ou Spectateur d’en prendre régulièrement connaissance, toute mise à jour étant signalée en page d’accueil de la Plateforme. </p>
    <p><span><u><strong>{{$t('message.art10')}}</strong></u></span></p>
    <p>{{$t('message.art11')}}</p>
    <p>Pour les besoins des présentes&nbsp;: </p>
    <p>On entend par «&nbsp;Plateforme&nbsp;», le service de communication au public en ligne hébergé par GAIAR sur la Blockchain publique, permettant à des Ayants-droit
    de mettre à disposition des Utilisateurs des Contenus disponibles en vidéo à la demande, en écoute, en visionnage (streaming) ou en téléchargement, à titre gratuit ou payant, 
    via l'adresse URL suivante : http://www.gaiar.com. </p>
    <p>On entend par «&nbsp;Contenu&nbsp;» les œuvres audiovisuelles, musicales, graphiques, littéraires et/ou multimédias, interactives ou non, proposées aux Utilisateurs directement par les Ayants-droit. </p>
    <p>On entend par «&nbsp;Utilisateur&nbsp;», toute personne se connectant sur la Plateforme via son compte GAIAR. </p>
    <p>On entend par «&nbsp;Ayant-droit&nbsp;», les personnes ayant participé à la création des œuvres et/ou à leur interprétation en qualité d’artiste-interprète et/ou, le cas échéant, toute personne titulaire ou cessionnaire des droits d’auteur et des droits voisins, et ayant mis lesdites œuvres à disposition des Utilisateurs sur la Plateforme via son compte GAIAR. </p>
    <p>On entend par «&nbsp;Spectateur&nbsp;», les personnes qui consultent les Contenus sur la Plateforme, sans création d’un compte, lorsque les Ayants-droit ont autorisé une telle consultation libre. </p>
    <p>On entend par «&nbsp;Conditions Particulières de fourniture de Contenu&nbsp;», les conditions régissant l’utilisation par les Utilisateurs des Contenus fournis par les Ayants-droit, qui sont déterminées lors de la fourniture des Contenus à la Plateforme au moyen d’un Smart Contract. </p>
    <p><span><strong>{{$t('message.art12')}}</strong></span></p>
    <p><span>{{$t('message.sas')}}</span></p>
    <p><span><u><strong>{{$t('message.art20')}}</strong></u></span></p>
    <p>GAIAR héberge un service de communication au public par voie électronique sur la Plateforme diffusé via le réseau Internet, permettant&nbsp;: </p>
    <p>-&nbsp;aux Ayants-droit de mettre à disposition, sur une page dédiée, un ou plusieurs Contenus en vidéo en live, à la demande, en écoute, en visionnage ou en téléchargement, à titre gratuit ou payant, moyennant un prix fixe ou librement fixé par l’Utilisateur, selon la volonté de l’Ayant-droit, à l’exception de certains Contenus pour lesquels la législation impose un prix minimum (ex&nbsp;: livre)&nbsp;;</p>
    <p>-&nbsp;aux Utilisateurs d’avoir accès aux Contenus en live ou à la demande selon les cas et de les visionner, les écouter ou les télécharger, selon la nature du Contenu, à partir d’un ordinateur et dans les conditions décrites sur la Plateforme pour chacun des Contenus, à titre gratuit ou payant, moyennant un prix fixe ou librement fixé par l’Utilisateur, selon la volonté de l’Ayant-droit, à l’exception de certains Contenus pour lesquels la législation impose un prix minimum (ex&nbsp;: livre). </p>
    <p>L’Utilisateur a la possibilité de créer une page pour promouvoir les Contenus des Ayants-droit de la Plateforme, et d’obtenir avec l’accord de ces Ayant-droits, un pourcentage de la rémunération réalisée sur son flux dont les modalités sont détaillées dans les Conditions Particulières de fourniture de Contenu. </p>
    <p><span><u><strong>{{$t('message.art30')}}</strong></u></span></p>
    <p><strong>{{$t('message.art31')}}</strong></p>
    <p>L'accès au Service est conditionné à la souscription préalable par l'Utilisateur d'un contrat d'abonnement Internet haut débit auprès d'un opérateur de télécommunication. </p>
    <p>GAIAR est matériellement, juridiquement et contractuellement indépendante des conditions de mise à disposition, installation, maintenance, échange, restitution, tarification et tout autre acte de gestion dans la relation entre l'Utilisateur et l'opérateur de télécommunications et/ou tout autre fournisseur. </p>
    <p>Le service est accessible à partir d'un ordinateur, d’un smartphone ou d’une tablette disposant d'une connexion Internet haut débit. </p>
    <p>L'accès au Service s'effectue directement à partir de la Plateforme Internet dont l'URL d'accès est www.gaiar.com. </p>
    <p>L’Utilisateur doit en outre disposer d’une adresse e-mail valide. </p>
    <p>L'accès au Service est assuré de manière permanente sous réserve des périodes de maintenance et d'entretien, des opérations de mise à jour des serveurs et d’éventuelles interruptions exceptionnelles. </p>
    <p>Étant donné la nature immatérielle du Service, de ses caractéristiques techniques et compte tenu du fait que les transmissions de données sur le réseau Internet, qui regroupe des réseaux hétérogènes aux caractéristiques et capacités techniques diverses, ne permettent qu'une fiabilité technique relative, l'Utilisateur du Service reconnaît expressément qu'il pourra rencontrer des problèmes et/ou un mauvais fonctionnement, dans les communications avec le Service. </p>
    <p><span><strong>{{$t('message.art32')}}</strong></span></p>
    <p>Tout Utilisateur ou Ayant-droit doit obligatoirement se créer un Compte GAIAR pour pouvoir accéder au Service. </p>
    <p>L’Utilisateur doit renseigner via un formulaire d’inscription ses éléments d’identification&nbsp;: </p>
    <p>-&nbsp;nom&nbsp;; </p>
    <p>-&nbsp;prénom&nbsp;; </p>
    <p>-&nbsp;identifiant&nbsp;; </p>
    <p>-&nbsp;adresse postale&nbsp;; </p>
    <p>-&nbsp;adresse e-mail valide&nbsp;; </p>
    <p>-&nbsp;mot de passe et/ou code de vérification en cas de double authentification. </p>
    <p>L’Ayant-droit doit renseigner via un formulaire d’inscription les mêmes éléments d’identification, et en plus fournir une version numérisée de sa pièce d’identité en cours de validité (Carte d’identité ou Passeport).</p>
    <p>L’Utilisateur et/ou l’Ayant-droit, personne physique, qui opte pour la fonction de monétisation conformément aux Conditions Particulières de fourniture de Contenu doit obligatoirement renseigner, en plus de ses éléments d’identification, ses coordonnées bancaires, accompagnées de sa pièce d’identité en cours de validité (Carte d’identité ou Passeport), sauf si déjà fournie, ainsi qu’un justificatif de domicile datant de moins de 3 mois (quittance de loyer, facture de fourniture d’électricité/gaz/eau, attestation de propriété, avis de taxe foncière, etc.).</p>
    <p>L’Utilisateur et/ou l’Ayant-droit personne morale ou professionnel, qui opte pour la fonction de monétisation conformément aux Conditions Particulières de fourniture de Contenu doit obligatoirement renseigner, en plus de ses éléments d’identification, ses coordonnées bancaires, accompagnées d’un justificatif officiel d’immatriculation/inscription auprès du registre/répertoire compétent dans l’Etat concerné datant de moins de 3 mois (en France&nbsp;: extrait Kbis pour les sociétés commerciales et un avis de situation au répertoire SIRENE pour toute personne disposant d’un numéro de SIRET).</p>
    <p>Pour garantir une meilleure protection des œuvres, l’Ayant-droit est également invité à fournir le justificatif d’identité et/ou le justificatif d’immatriculation/inscription auprès du registre/répertoire dès le stade de l’inscription sur la plateforme.</p>
    <p>Afin de vérifier que l’adresse e-mail fournie est bien valide, l’Utilisateur ou l’Ayant-droit recevra un e-mail de GAIAR lui demandant de valider ladite adresse e-mail. </p>
    <p>L’Utilisateur ou Ayant-droit garantit l'exactitude des informations fournies à GAIAR pour les besoins de son inscription et s'engage à lui notifier toute modification ultérieure. </p>
    <p>Tout Utilisateur ou Ayant-droit s’engage à ne pas utiliser le Compte, le pseudonyme et le mot de passe d'un autre Utilisateur ou Ayant-droit. </p>
    <p>Le Spectateur peut consulter les Contenus de la Plateforme sans création de compte et sans fournir de données personnelles lorsque lesdits Contenus sont rendus librement accessibles par les Ayants-droit. </p>
    <p><span><strong>{{$t('message.art33')}}</strong></span></p>
    <p>Le Contenu est mis à disposition sur la Plateforme par les Ayants-droit au profit des Utilisateurs en vidéo à la demande, en écoute ou en téléchargement, à titre gratuit ou payant, moyennant un prix fixe ou librement fixé par l’Utilisateur, selon la volonté de l’Ayant-droit, à l’exception des livres pour lesquels la législation française en vigueur impose un prix minimum.</p>
    <p><strong>{{$t('message.art34')}}</strong></p>
    <p>Tout Utilisateur a la faculté de faire des dons aux Ayants-droits pour soutenir les œuvres qu’il souhaite.</p>
    <p>Pour ce faire, l’Utilisateur peut régler en ligne par carte bancaire ou via paypal le don souhaité. Le montant minimum de paiement en ligne par carte bancaire est de 5 euros.</p>
    <p>Tout Utilisateur peut également créditer son portefeuille GAIAR (wallet) au moyen d’une carte bancaire ou d’un compte Paypal. Le montant minimum pouvant être crédité sur le portefeuille GAIAR par carte bancaire est de 5 euros.</p>
    <p>Les sommes portées au crédit du portefeuille GAIAR peuvent être récupérées par l’Utilisateur qui doit en faire la demande à GAIAR.<br>
    Le paiement interviendra dans un délai pouvant aller jusqu’à 30 jours suivant la fin du mois au cours duquel la demande de paiement a été faite, par virement bancaire, sur le compte bancaire dont les coordonnées auront été indiquées par l’Utilisateur lors de la création de son compte GAIAR.</p>
    <p><strong>{{$t('message.art35')}}</strong></p>
    <p>Dans le cadre des offres promotionnelles à durée limitée proposées par GAIAR pour promouvoir l’option «&nbsp;Livestream&nbsp;», l’accès au visionnage d’un Contenu diffusé en live est limité à une jauge maximale de 50 Utilisateurs ou Spectateurs avec un taux de complétion de 60 minutes.</p>
    <p>En conséquence, GAIAR se réserve le droit de refuser l’accès à tout Utilisateur ou Spectateur si la jauge maximale de 200 Utilisateurs ou Spectateurs avec un taux de complétion de 60 minutes est atteinte.</p>
    <p><span><u><strong>{{$t('message.art40')}}</strong></u></span></p>
    <p>Chaque mise à disposition de Contenu(s) suppose la conclusion d’un Smart Contract, dans lequel figure les Conditions Particulières de fourniture de Contenu, par le(s) Ayant(s)-droit. </p>
    <p>Tout Ayant-droit peut mettre des Contenus à disposition des Utilisateurs, aux conditions suivantes&nbsp;:</p>
    <p><strong>{{$t('message.art41')}}</strong><strong> </strong></p>
    <p>L’étendue des droits concédés par l’Ayant-droit sera précisée au moment de la fourniture du Contenu à GAIAR, dans les Conditions Particulières de fourniture de Contenu. </p>
    <p>La concession des droits comportera au minimum, pendant la durée de la Concession, le droit non exclusif pour les Utilisateurs d’accéder au Contenu et de l’exécuter.</p>
    <p><strong>{{$t('message.art42')}}</strong></p>
    <p>L’Ayant-droit doit commencer à exploiter le ou les Contenus sur la plateforme GAIAR en prix libre ou en prix minimum, dans le mois suivant le dépôt. A défaut, le ou les Contenus seront supprimés des serveurs de GAIAR. </p>
    <p>Le ou les Contenus qui ne sont pas exploités via la plateforme GAIAR pendant une durée de huit mois sur une période d’un an seront également supprimés des serveurs.</p>
    <p><strong>{{$t('message.art43')}}</strong><strong> </strong></p>
    <p>En cas de pluralité de titulaires des droits d’exploitation d’un Contenu, la mise à disposition du Contenu sur la plateforme GAIAR sera conditionnée à&nbsp;: </p>
    <p>-&nbsp;la création, par chacun des titulaires des droits d’exploitation, d’un Compte en qualité d’Ayant-droit ; </p>
    <p>-&nbsp;l’acceptation, dans les mêmes termes, par chacun des Ayants-droit, des Conditions Particulières de fourniture du Contenu.</p>
    <p><strong>{{$t('message.art44')}}</strong><strong> </strong></p>
    <p>L’ensemble des recettes nettes HT perçues par GAIAR pour chaque Contenu seront reversées aux Ayant-droit, après déduction d’une commission de 15% HT des recettes nettes HT au profit de GAIAR. </p>
    <p>En cas de pluralité d’Ayants-droit, les recettes nettes seront réparties entre eux selon la clef de répartition qui sera définie au moment de la fourniture du Contenu à GAIAR, dans les Conditions Particulières de fourniture de Contenu. </p>
    <p>On entend par recettes nettes HT l’ensemble des sommes versées par les Utilisateurs au titre de l’utilisation du Contenu en vidéo à la demande, en écoute, en visionnage ou en téléchargement, que le prix soit fixe ou librement fixé par les Utilisateurs, déduction faite de toutes taxes et/ou cotisations et/ou redevances de quelque nature que ce soit, et notamment des redevances qui pourraient être perçues par des sociétés de perception et de répartition des droits. </p>
    <p>Les modalités de rémunération sont plus amplement détaillées dans les Conditions Particulières de fourniture de Contenu.</p>
    <p><strong>{{$t('message.art45')}}</strong></p>
    <p>Les comptes d’exploitation de chaque Contenu seront arrêtés au jour de la demande formulée par l’Ayant-droit.</p>
    <p>Ils seront adressés simultanément aux Ayants-droit sur l’adresse e-mail communiquée lors de la création du compte GAIAR et indiquée aux Conditions Particulières de fournitures de Contenu.</p>
    <p>Les comptes seront réputés acceptés définitivement par l’Ayant-droit, à moins que celui-ci ne les conteste par écrit dans un délai de 30 jours à compter de leur envoi.</p>
    <p>Le paiement interviendra à tout moment, à la demande de l’Ayant-droit, dans un délai de 30 jours suivant la fin du mois au cours duquel la demande de paiement a été faite, ou à une date convenue par l’Ayant-droit dans les Conditions Particulières de fournitures de Contenu. Les sommes dues HT seront réglées, sous déduction de la CSG et du RDS s’il y a lieu (ou toute autre contribution applicable selon la législation en vigueur), par virement bancaire, sur le compte bancaire dont les coordonnées auront été indiquées par l’Ayant-droit aux Conditions Particulières de fournitures de Contenu.</p>
    <p>GAIAR met à la charge de l’Ayant-droit des frais généraux, incluant la facturation, la gestion des paiements, la sauvegarde des données, les frais bancaires et les frais de Blockchain ; à hauteur de 5% HT de la somme faisant l’objet du paiement.</p>
    <p>Dans le cas où les redevances seraient payées dans une monnaie autre que l’euro, elles seront calculées selon le taux de change en vigueur au jour du règlement, les éventuelles commissions étant à la charge de l’Ayant-droit.</p>
    <p>GAIAR se réserve le droit de solliciter auprès de l’ayant-droit, avant de procéder au paiement, la communication de toute pièce complémentaire permettant de s’assurer de son identité et/ou de sa situation fiscale/administrative/juridique, et notamment tous documents demandés par toute autorité légitime (juridiction, autorité administrative, services de police).</p>
    <p><strong>{{$t('message.art46')}}</strong></p>
    <p>L’Ayant-droit garanti à GAIAR que le Contenu qu’il met en ligne&nbsp;: </p>
    <p>-&nbsp;ne contient pas de pornographie, d’activités dangereuses ou illégales, du matériel illicite, des images de viol, d’abus sexuel ou de maltraitance&nbsp;; </p>
    <p>-&nbsp;ne viole pas les droits de propriété intellectuelle de tiers pour lesquels il ne disposerait pas des autorisations nécessaires des ayants-droit concernés, et qu’il s’est acquitté des redevances ou tout autres frais, conformément aux licences et autorisations requises&nbsp;; </p>
    <p>-&nbsp;ne viole pas de droits individuels et ne contient pas de propos diffamatoires, d’injures publiques, de calomnies, etc.&nbsp;; </p>
    <p>-&nbsp;ne viole pas le respect à la vie privée des personnes&nbsp;; </p>
    <p>-&nbsp;n’est pas contraire à l’ordre public et aux bonnes mœurs&nbsp;; <br>
  &nbsp; <br>
  -&nbsp;n’incite pas ou ne promeut pas des actes illégaux, et n’enfreint pas les lois et les règlements en vigueur.</p>
    <p><strong>{{$t('message.art47')}}</strong></p>
    <p>L’ayant droit garanti également à GAIAR qu’il est titulaire du droit moral sur le Contenu qu’il met en ligne, le droit moral étant inaliénable et incessible en dehors des règles de dévolution successorale.</p>
    <p>Le Spectateur et l’Utilisateur s’engagent à respecter sans limite de temps le droit moral de l’Ayant-droit, et plus particulièrement le droit au respect du nom de l’auteur et de l’intégrité de son œuvre, ces attributs étant perpétuels. </p>
    <p>Dans l’hypothèse où l’Utilisateur souhaiterait adapter un Contenu, il s’engage à contacter l’Ayant-droit afin d’en obtenir l’autorisation et d’acquérir le droit d’adapter le Contenu auprès de l’Ayant-droit dans les conditions convenues entre les parties, sans que GAIAR ne puisse garantir la faisabilité d’une telle adaptation.</p>
    <p><strong>{{$t('message.art48')}}</strong></p>
    <p>Chaque mise à disposition de contenu suppose la conclusion d’un Smart Contract par le(s) Ayant(s)-droit.</p>
    <p>La conclusion de chaque Smart Contrat est facturée au prix de 20 € TTC par GAIAR. Ce prix est dû à GAIAR pour toute souscription de Smart Contrat, indépendamment du nombre d’Ayants-droit contractant. L'avenant est à 10 € TTC.</p>
    <p>Les factures regroupant l’ensemble des prestations fournies par GAIAR, à savoir la conclusion du Smart Contract et les commissions perçues par GAIAR, sont éditées automatiquement une fois par mois et téléchargeables dans le compte GAIAR.</p>
    <p><strong>{{$t('message.art49')}}</strong></p>
    <p>En cas de mise à disposition de Contenus par l’Ayant-droit en live dans le cadre d’une offre promotionnelle «&nbsp;Livestream&nbsp;», les Smarts Contracts générés ne sont pas déposés sur la Blockchain et ne confèrent donc ni identification de l’œuvre ni date certaine.</p>
    <p>GAIAR se réserve par ailleurs le droit d’interrompre la diffusion par un Ayant-droit d’un Contenu en live sur la Plateforme en cas de&nbsp;:</p>
    <p>-&nbsp;signalement ou constat de diffusion en live de Contenus interdits (tels que définis à l’article 5 ci-après)&nbsp;;</p>
    <p>-&nbsp;non-respect du choix de la qualité de diffusion du Contenu en live (haute définition / basse définition) et détournement de la Plateforme afin de diffuser un Contenu dans une qualité supérieure à celle initialement souscrite au prix indiqué.</p>
    <p><span><u><strong>{{$t('message.art50')}}</strong></u></span></p>
    <p>GAIAR a mis en place un dispositif facilement accessible et visible permettant aux Utilisateurs de signaler la présence de Contenus illicites ou illégaux sur la Plateforme.</p>
    <p>L’Utilisateur qui remarque des Contenus illicites ou illégaux sur la Plateforme peut également le signaler à tout moment en contactant GAIAR via le formulaire accessible depuis la rubrique Contact.</p>
    <p><u><span><strong>{{$t('message.art60')}}</strong></span></u></p>
    <p>GAIAR s’engage à respecter la législation en vigueur relative à la protection de la vie privée eu égard au traitement automatisé des données à caractère personnel et notamment, la loi « informatique et libertés » n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés et le Règlement (UE) 2016/679 du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données (RGPD)</p>
    <p>Les données collectées et ultérieurement traitées sont celles volontairement transmises par l’Utilisateur, le Spectateur ou l’Ayant-droit sur la Plateforme&nbsp;: </p>
    <p>-&nbsp;Création d'un compte Utilisateur : nom, prénom, identifiant, adresse postale, adresse email, données de connexion&nbsp;; </p>
    <p>-&nbsp;Création d'un compte Ayant-droit : nom, prénom, identifiant, adresse postale, adresse email, données de connexion, coordonnées bancaires, pièce d’identité&nbsp;; </p>
    <p>-&nbsp;Connexion à la Plateforme par un Spectateur : données de connexion, de navigation ou encore de localisation&nbsp;; </p>
    <p>-&nbsp;Transaction financière sur la Plateforme : coordonnées bancaires et/ou données relatives à la carte de crédit utilisée, pièce d’identité et/ou justificatif d’immatriculation/inscription sur un registre/répertoire, justificatif de domicile&nbsp;;</p>
    <p>-&nbsp;Formulaire de contact : nom, prénom, adresse email et message.</p>
    <p>Certaines données sont automatiquement collectées lors de l’utilisation de la Plateforme, notamment des données techniques (tel que l’adresse IP de l’appareil) et des informations relatives à la consultation et l’utilisation faites de la Plateforme, à l'exclusion de toute autre. </p>
    <p>Les données personnelles collectées par GAIAR sont nécessaires afin de&nbsp;: </p>
    <p>-&nbsp;bénéficier des fonctionnalités de la Plateforme, </p>
    <p>-&nbsp;vérifier et authentifier les données, </p>
    <p>-&nbsp;lutter contre les fraudes, utilisations abusives, virus et autres logiciels malveillants, </p>
    <p>-&nbsp;gérer les services de paiement,</p>
    <p>-&nbsp;fournir des Contenus personnalisés, en fonction de l’historique de navigation, des préférences et centres d'intérêt.</p>
    <p>Lorsque certaines informations sont obligatoires pour accéder à des Services ou fonctionnalités spécifiques de la Plateforme, ce caractère obligatoire est indiqué au moment de la saisie des données. En cas de refus de fournir des informations obligatoires, l’Utilisateur ou l’Ayant-droit pourrait ne pas avoir accès à certains Services ou fonctionnalités spécifiques de la Plateforme. </p>
    <p>Les données ainsi collectées par GAIAR ne font l'objet d'aucune communication à des tiers sans accord express de l’Utilisateur ou de l’Ayant-droit. GAIAR s’engage à ne pas vendre, louer, céder ni donner accès à des tiers aux données sans consentement préalable à moins d’y être contraints en raison d’un motif légitime (obligation légale, lutte contre la fraude ou l’abus, exercice des droits de la défense, etc.). </p>
    <p>Dans le cadre du traitement des données, celles-ci peuvent être transférées par GAIAR vers des serveurs situés dans plusieurs pays, notamment hors de l’Union Européenne.</p>
    <p>Dans ce cas, GAIAR s’engage à prendre les garanties nécessaires pour assurer la protection des données, notamment en choisissant des prestataires présentant le même niveau de garantie, en optant uniquement pour des serveurs dédiés pour le stockage des données et en mettant en place une mesure de protection des flux par cryptage.</p>
    <p>Le transfert est effectué dans le respect des dispositions du RGPD et fera l’objet, en cas de transfert en dehors de l’Union européenne, d’un accord distinct sur la protection des données à caractère personnel</p>
    <p>Les données sont stockées en France par la société OVH, SAS au capital de 10 069,02 €, immatriculée au RCS de Lille sous le n°424 761&nbsp;419, dont le siège est 2 rue Kellermann, 59100 Roubaix, France et sont conservées pour la durée strictement nécessaire à la réalisation des finalités précédemment visées sauf si :</p>
    <p>-&nbsp;l’Utilisateur ou l’Ayant-droit exerce son droit de suppression des Données le concernant, dans les conditions décrites ci-après ; </p>
    <p>-&nbsp;une durée de conservation plus longue est autorisée ou imposée en vertu d’une disposition légale ou règlementaire.</p>
    <p>Pendant cette période, GAIAR met en place les moyens organisationnels, logiciels, juridiques, techniques et physiques aptes à assurer la confidentialité et la sécurité de vos données personnelles, de manière à empêcher leur endommagement, effacement ou accès par des tiers non autorisés. </p>
    <p>L'accès aux données personnelles est strictement limité aux employés et préposés de GAIAR habilités en raison de leurs fonctions et tenus à une obligation de confidentialité et, le cas échéant, aux sous-traitants de GAIAR. Les sous-traitants en question sont soumis à une obligation de confidentialité et ne peuvent utiliser les données qu’en conformité avec les dispositions contractuelles de GAIAR et la législation applicable. </p>
    <p>Conformément à la loi «&nbsp;informatique et libertés&nbsp;» n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés et au RGPD l’Utilisateur ou l’Ayant-droit dispose des droits suivants :</p>
    <p>-&nbsp;Mettre à jour ou supprimer les données via le Compte GAIAR&nbsp;; </p>
    <p>-&nbsp;Exercer son droit d’accès, pour connaître les données personnelles qui le concernent ; </p>
    <p>-&nbsp;Demander la mise à jour des données, si celles-ci sont inexactes ; </p>
    <p>-&nbsp;Demander la portabilité ou la suppression des données ; </p>
    <p>-&nbsp;Demander la suppression du Compte GAIAR ; </p>
    <p>-&nbsp;Demander la limitation du traitement des données ; </p>
    <p>-&nbsp;S’opposer, pour des motifs légitimes, au traitement des données. </p>
    <p>Ces différents droits sont à exercer soit en modifiant les paramètres du Compte GAIAR, soit directement auprès du Délégué à la Protection des Données, Monsieur Emmanuel BRULAVOINE, par courrier postal à l'adresse GAIAR, 78 rue Blanqui, 33300 Bordeaux, France ou par email à l’adresse dpd@gaiar.com. Pour des raisons de sécurité et éviter toute demande frauduleuse, cette demande devra être accompagnée d'un justificatif d'identité. Le justificatif sera détruit une fois la demande traitée. </p>
    <p><span><u><strong>{{$t('message.art70')}}</strong></u></span></p>
    <p>Tous les programmes, textes, sons, vidéos, images, icones, logos, marques (figuratives ou nominatives), interfaces, écrans, présents sur le Service sont protégés par les lois françaises relatives à la Propriété Intellectuelle et par les Conventions Internationales relatives à la Propriété Intellectuelle. </p>
    <p>La structure générale de la Plateforme et tous autres éléments la composant (autre que le Contenu des Ayants-droit) tels que le texte, les illustrations, les logos, les noms, les désignations, les onglets, les caractéristiques, les fonctionnalités, les images, les icones, les clips audio, les informations, les données collectées, les photographies, les graphiques, les vidéos, les polices d’écritures, les schémas, la musique, les sons, et les autres matériels et logiciels, sont la propriété exclusive de GAIAR, et sont protégés au titre du droit d’auteur, du droit des marques, du secret des affaires, ou tout autre droit de propriété incorporel soumis à la loi et à la réglementation française en vigueur. </p>
    <p>Toute reproduction et/ou représentation, totale ou partielle, sans accord exprès et préalable de GAIAR, de la Plateforme et/ou des éléments la composant, par quelque procédé que ce soit, est interdite. <br>
      <br>
      De même, toute reproduction et/ou représentation et/ou modification, totale ou partielle, des Contenus, sans accord exprès et préalable de GAIAR, est strictement interdite, sauf lorsqu’elle n’excède pas le cadre des représentations privées et gratuites effectuées exclusivement dans un cercle de famille, et ce sous réserve de la compatibilité technique, et sauf autorisation expresse de l’Ayant-droit. </p>
    <p>En outre, l’Utilisateur n’est pas autorisé à modifier, améliorer, éditer, traduire, adapter, inverser la conception, décompiler, désassembler, ou créer des œuvres dérivées basées sur du Contenu mis à disposition par GAIAR, ou autrement en altérer tout ou partie, sauf autorisation expresse écrite de l’Ayant-droit. </p>
    <p><span><u><strong>{{$t('message.art80')}}</strong></u></span></p>
    <p>GAIAR ne saurait être tenue pour responsable de :</p>
    <p>-&nbsp;toute difficulté d’utilisation de la Plateforme, due aux conditions de réception ou à l'inadéquation du matériel informatique, </p>
    <p>-&nbsp;toute mauvaise utilisation de l'équipement par l'Utilisateur, </p>
    <p>-&nbsp;tout dysfonctionnement ou de toute interruption dans la mise à disposition du Service lié ou résultant d'un cas de force majeure. </p>
    <p>Il est expressément convenu que la responsabilité de GAIAR ne saurait être recherchée à quelque titre que ce soit en raison du contenu publié sur la Plateforme par les Ayants-droit ni des différends qui pourraient apparaître entre les Utilisateurs et/ou Ayants-droit. </p>
    <p>En vertu de son statut d’hébergeur au sens des dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, GAIAR n’est tenu à aucune obligation générale de surveillance du Contenu mis en ligne sur le Service, et n’est soumis à aucune obligation de rechercher activement des faits ou circonstances faisant apparaître le caractère illicite d’un contenu, mais devra supprimer ou rendre l’accès impossible depuis le Service tout contenu manifestement illicite dès lors que GAIAR aura été notifié de son existence. </p>
    <p>L’Utilisateur ou l’Ayant-droit accepte d’être tenu pour seul responsable de son utilisation du Service et plus spécifiquement de la publication de messages et de la protection de son matériel informatique contre tout virus ou interruption. </p>
    <p>L'Utilisateur ou l’Ayant-droit s'engage à utiliser le Service conformément aux dispositions prévues dans les présentes Conditions Générales d’Utilisation. </p>
    <p>L’Ayant-droit est seul responsable de la sauvegarde des haschs qui sont générés lors des dépôts des œuvres et qui permettent d’identifier les œuvres et de conférer date certaine aux dépôts (la date de dépôt faisant foi s’entend de la date de l’encrage sur la Blockchain à laquelle s’ajoute un délai maximum de 24h correspondant au traitement des données par la Blockchain). </p>
    <p>GAIAR se réserve, pour le cas où son utilisation de la Plateforme serait contraire aux présentes Conditions Générales d’Utilisation et plus généralement aux lois et dispositions règlementaires en vigueur, le droit de procéder immédiatement et sans notification préalable, à la désinscription de l’Utilisateur ou de l’Ayant-droit du Service et/ou au blocage de son accès à la Plateforme, mais aussi d’intenter toute action de nature à sauvegarder ses droits. </p>
    <p>En outre GAIAR se réserve, dans l'hypothèse où l’Utilisateur ou l’Ayant-droit se rendrait responsable d'une infraction à la législation en vigueur ou d'une atteinte aux droits des tiers, le droit de fournir, à la demande de toute autorité légitime (juridiction, autorité administrative, services de police), tous renseignements permettant ou facilitant l'identification de l’Utilisateur responsable.<br>
      <br>
      GAIAR se réserve également le droit d’enjoindre à l’Utilisateur ou l’Ayant-droit de modifier le nom de sa page dédiée, ou de modifier d’office ce nom, en cas d’atteinte aux droits des tiers ou tout autre motif légitime.</p>
    <p><span><u><strong>{{$t('message.art90')}}</strong></u></span></p>
    <p>Toute contestation éventuelle sera soumise à la loi française et à la juridiction compétente de Paris, même en cas d'appel en garantie ou de pluralité de défendeurs. </p>
    <p>Dans le cas où l’une quelconque des clauses des présentes Conditions Générales d’Utilisation serait déclarée nulle ou inapplicable, les autres clauses demeureront pleinement en vigueur, sans que la nullité de l’ensemble des Conditions Générales ne puisse être invoquée. </p>
    <p>De même, la renonciation à se prévaloir d'une quelconque stipulation des présentes Conditions Générales d’Utilisation ne saurait valoir renonciation à se prévaloir d'une ou plusieurs autres stipulations ou de la même stipulation en une autre occasion. </p>


  </div>
</template>

<style scoped>
h1 {
    padding-top: 1em;
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  padding-bottom: 0.5em;
}

p {
  margin: 0 0 10px;
}

.container h1,
.container h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .container h1,
  .container h3 {
    text-align: left;
  }
}
</style>