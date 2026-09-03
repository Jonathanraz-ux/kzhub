export const hero = {
  backgroundImage: "/images/hero/hero-bg.jpg",
};

export const stats = [
  { id: 1, value: "12+" },
  { id: 2, value: "8" },
  { id: 3, value: "15" },
  { id: 4, value: "24" },
];

export type ExpertTeamMember = {
  id: number;
  name: string;
  roleKey: string;
  titleKey?: string;
  expertiseKey?: string;
  initials?: string;
  photo: string | null;
  photoAlt: {
    en: string;
    fr: string;
  };
};

export const expertTeam: ExpertTeamMember[] = [
  {
    id: 1,
    name: "Willy Raharijaona",
    roleKey: "expertRole1",
    photo: "/images/client/willy-raharijaona.jpg",
    photoAlt: {
      en: "Portrait of Willy Raharijaona, Mining Exploration Expert",
      fr: "Portrait de Willy Raharijaona, expert en exploration minière",
    },
  },
  {
    id: 2,
    name: "Dr Tiandray Mandimby, PhD",
    roleKey: "expertRole6",
    photo: "/images/client/tiandray-mandimby.jpg",
    photoAlt: {
      en: "Portrait of Dr Tiandray Mandimby, PhD, Mineral Processing & Chemical Expert",
      fr: "Portrait du Dr Tiandray Mandimby, PhD, expert en traitement des minerais et procédés chimiques",
    },
  },
  {
    id: 3,
    name: "Hery Rakoto be",
    roleKey: "expertRole2",
    photo: null as string | null,
    photoAlt: {
      en: "Portrait of Hery Rakoto be, Mining Legal Expert",
      fr: "Portrait de Hery Rakoto be, expert juridique minier",
    },
  },
  {
    id: 4,
    name: "Lalao Rabeson",
    roleKey: "expertRole3",
    photo: null as string | null,
    photoAlt: {
      en: "Portrait of Lalao Rabeson, Community Relations & Local Liaison Officer",
      fr: "Portrait de Lalao Rabeson, responsable des relations communautaires et de la liaison locale",
    },
  },
  {
    id: 5,
    name: "Rova Minadrisoa",
    roleKey: "expertRole4",
    photo: "/images/client/rova-minadrisoa.jpg",
    photoAlt: {
      en: "Portrait of Rova Minadrisoa, Visa, Travel and Accommodation Officer",
      fr: "Portrait de Rova Minadrisoa, responsable visas, voyages et hébergement",
    },
  },
  {
    id: 6,
    name: "Hery Zo ANDRIAMIARANA",
    roleKey: "expertRole5",
    photo: "/images/client/client-portrait-1.jpg",
    photoAlt: {
      en: "Portrait of Hery Zo ANDRIAMIARANA, CEO & Founder of Kazak Ltd. & Kazak Mining Hub",
      fr: "Portrait de Hery Zo ANDRIAMIARANA, CEO & Founder de Kazak Ltd. & Kazak Mining Hub",
    },
  },
  {
    id: 7,
    name: "Xavier R.",
    roleKey: "expertRole7",
    titleKey: "expertTitle7",
    expertiseKey: "expertExpertise7",
    photo: null as string | null,
    photoAlt: {
      en: "Portrait of Xavier R., Director of Security & Legal Compliance",
      fr: "Portrait de Xavier R., directeur de la sécurité et de la conformité juridique",
    },
  },
];

export const about = {
  mission:
    "Deliver reliable, high-value mining projects through rigorous due diligence and local expertise.",
  vision:
    "Become the leading conduit for sustainable mining investment in Madagascar and the Indian Ocean region.",
};

export const values = [
  {
    id: 1,
    titleKey: "valIntegrityTitle",
    descKey: "valIntegrityDesc",
    icon: "Shield",
  },
  {
    id: 2,
    titleKey: "valTransparencyTitle",
    descKey: "valTransparencyDesc",
    icon: "Eye",
  },
  {
    id: 3,
    titleKey: "valSustainabilityTitle",
    descKey: "valSustainabilityDesc",
    icon: "Leaf",
  },
  {
    id: 4,
    titleKey: "valCollaborationTitle",
    descKey: "valCollaborationDesc",
    icon: "Users",
  },
];

export const services = [
  {
    id: 1,
    icon: "Mountain",
    titleKey: "serMiningSitesTitle",
    descKey: "serMiningSitesDesc",
  },
  {
    id: 2,
    icon: "LineChart",
    titleKey: "serAdvisoryTitle",
    descKey: "serAdvisoryDesc",
  },
  {
    id: 3,
    icon: "FileCheck",
    titleKey: "serAdminTitle",
    descKey: "serAdminDesc",
  },
  {
    id: 4,
    icon: "Search",
    titleKey: "serDueDiligenceTitle",
    descKey: "serDueDiligenceDesc",
  },
  {
    id: 5,
    icon: "Handshake",
    titleKey: "serCommunityTitle",
    descKey: "serCommunityDesc",
  },
];

export const minerals = [
  {
    id: 1,
    name: "Gold",
    nameKey: "minGoldName",
    descKey: "minGoldDesc",
    icon: "CircleDot",
    color: "text-yellow-400",
    desc: "High-grade alluvial and hard-rock deposits in the eastern metamorphic belt.",
  },
  {
    id: 2,
    name: "Lithium",
    nameKey: "minLithiumName",
    descKey: "minLithiumDesc",
    icon: "Battery",
    color: "text-green-400",
    desc: "Spodumene-bearing pegmatites essential for EV battery production.",
  },
  {
    id: 3,
    name: "Graphite",
    nameKey: "minGraphiteName",
    descKey: "minGraphiteDesc",
    icon: "Hexagon",
    color: "text-slate-300",
    desc: "Large-flake deposits ideal for battery anodes and industrial refractories.",
  },
  {
    id: 4,
    name: "Nickel",
    nameKey: "minNickelName",
    descKey: "minNickelDesc",
    icon: "Zap",
    color: "text-emerald-400",
    desc: "Lateritic deposits aligned with growing demand for battery cathodes.",
  },
  {
    id: 5,
    name: "Cobalt",
    nameKey: "minCobaltName",
    descKey: "minCobaltDesc",
    icon: "Radio",
    color: "text-blue-400",
    desc: "Critical for energy storage and high-temperature alloys.",
  },
  {
    id: 6,
    name: "Rare Earths",
    nameKey: "minRareEarthsName",
    descKey: "minRareEarthsDesc",
    icon: "Diamond",
    color: "text-purple-400",
    desc: "Monazite-bearing sands with potential for neodymium and praseodymium.",
  },
  {
    id: 7,
    name: "Vanadium",
    nameKey: "minVanadiumName",
    descKey: "minVanadiumDesc",
    icon: "Fuel",
    color: "text-orange-400",
    desc: "Ideal for flow batteries and high-strength steel alloys.",
  },
  {
    id: 8,
    name: "Gemstones",
    nameKey: "minGemstonesName",
    descKey: "minGemstonesDesc",
    icon: "Gem",
    color: "text-pink-400",
    desc: "Sapphires, rubies and emeralds from the world-renowned Malagasy deposits.",
  },
  {
    id: 9,
    name: "Industrial Minerals",
    nameKey: "minIndustrialName",
    descKey: "minIndustrialDesc",
    icon: "Building2",
    color: "text-stone-300",
    desc: "Limestone, kaolin and quartz for construction and manufacturing.",
  },
];

export const whyChoose = [
  {
    id: 1,
    icon: "BadgeCheck",
    titleKey: "whyVerifiedTitle",
    descKey: "whyVerifiedDesc",
  },
  {
    id: 2,
    icon: "MapPin",
    titleKey: "whyLocalTitle",
    descKey: "whyLocalDesc",
  },
  {
    id: 3,
    icon: "ArrowLeftRight",
    titleKey: "whySupportTitle",
    descKey: "whySupportDesc",
  },
  {
    id: 4,
    icon: "ScanEye",
    titleKey: "whyTranspTitle",
    descKey: "whyTranspDesc",
  },
  {
    id: 5,
    icon: "Globe",
    titleKey: "whyNetworkTitle",
    descKey: "whyNetworkDesc",
  },
];

export const responsible = [
  {
    id: 1,
    icon: "HeartHandshake",
    titleKey: "respHumanTitle",
    descKey: "respHumanDesc",
  },
  {
    id: 2,
    icon: "Leaf",
    titleKey: "respEnvTitle",
    descKey: "respEnvDesc",
  },
  {
    id: 3,
    icon: "Recycle",
    titleKey: "respSustTitle",
    descKey: "respSustDesc",
  },
  {
    id: 4,
    icon: "Users",
    titleKey: "respEmployTitle",
    descKey: "respEmployDesc",
  },
  {
    id: 5,
    icon: "BarChart3",
    titleKey: "respEconomicTitle",
    descKey: "respEconomicDesc",
  },
];

export const processSteps = [
  {
    id: 1,
    icon: "Search",
    titleKey: "procExploreTitle",
    descKey: "procExploreDesc",
  },
  {
    id: 2,
    icon: "ClipboardCheck",
    titleKey: "procEvalTitle",
    descKey: "procEvalDesc",
  },
  {
    id: 3,
    icon: "Plane",
    titleKey: "procVisitTitle",
    descKey: "procVisitDesc",
  },
  {
    id: 4,
    icon: "ShieldCheck",
    titleKey: "procDueTitle",
    descKey: "procDueDesc",
  },
  {
    id: 5,
    icon: "FileSignature",
    titleKey: "procAcqTitle",
    descKey: "procAcqDesc",
  },
  {
    id: 6,
    icon: "Rocket",
    titleKey: "procLaunchTitle",
    descKey: "procLaunchDesc",
  },
];

export const portfolio = [
  {
    id: 1,
    title: "Andekaleka Gold Exploration",
    category: "Gold Exploration",
    filterKey: "gold",
    commodity: "Gold (Au)",
    stage: "Advanced Exploration",
    region: "Eastern Metamorphic Belt",
    concessionArea: "1,250 Ha",
    permitStatus: "Active / Verified PR",
    geologyType: "Shear-hosted quartz veins & alluvial terrace deposits",
    accessInfo: "RN2 Highway + Local access road",
    description:
      "Advanced exploration site in Madagascar's eastern gold belt, featuring high-grade alluvial and hard-rock deposits with multi-ounce target zones.",
    fr: {
      title: "Exploration aurifère d'Andekaleka",
      category: "Exploration aurifère",
      commodity: "Or (Au)",
      stage: "Exploration avancée",
      region: "Ceinture métamorphique orientale",
      permitStatus: "Actif / PR vérifié",
      geologyType: "Filons de quartz en zone de cisaillement et dépôts alluviaux de terrasse",
      accessInfo: "Route nationale RN2 + piste d'accès locale",
      description:
        "Site d'exploration avancé dans la ceinture aurifère orientale de Madagascar : dépôts alluviaux et filoniens à haute teneur avec des zones cibles multi-onces.",
    },
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=85",
    wide: true,
  },
  {
    id: 2,
    title: "Sahatany Valley Lithium",
    category: "Lithium Operations",
    filterKey: "lithium",
    commodity: "Lithium (Li / Spodumene)",
    stage: "Target Definition & Sampling",
    region: "Sahatany Pegmatite Field",
    concessionArea: "850 Ha",
    permitStatus: "Active / Verified PR",
    geologyType: "LCT-type spodumene-bearing pegmatites",
    accessInfo: "Antsirabe road corridor + Track access",
    description:
      "Spodumene-bearing pegmatites in the Sahatany Valley, positioned to supply high-purity lithium to the global EV battery supply chain.",
    fr: {
      title: "Lithium de la vallée de Sahatany",
      category: "Opérations lithium",
      commodity: "Lithium (Li / spodumène)",
      stage: "Définition de cibles et échantillonnage",
      region: "Champ de pegmatites de Sahatany",
      permitStatus: "Actif / PR vérifié",
      geologyType: "Pegmatites à spodumène de type LCT",
      accessInfo: "Corridor routier d'Antsirabe + piste",
      description:
        "Pegmatites à spodumène dans la vallée de Sahatany, positionnées pour approvisionner la chaîne mondiale de batteries pour véhicules électriques en lithium haute pureté.",
    },
    image: "/images/projects/sahatany-landscape.jpg",
    tall: true,
  },
  {
    id: 3,
    title: "Graphite Processing Facility",
    category: "Graphite Operations",
    filterKey: "graphite",
    commodity: "Flake Graphite",
    stage: "Feasibility & Pilot Plant",
    region: "Toamasina Hinterland",
    concessionArea: "1,600 Ha",
    permitStatus: "PE Permit Applied / Clean Title",
    geologyType: "High-purity crystalline flake graphite in weathered gneiss",
    accessInfo: "Direct rail & paved road to Port of Toamasina",
    description:
      "Large-flake graphite processing operations supplying battery anode precursor and industrial refractory markets.",
    fr: {
      title: "Usine de traitement du graphite",
      category: "Opérations graphite",
      commodity: "Graphite en paillettes",
      stage: "Étude de faisabilité et usine pilote",
      region: "Arrière-pays de Toamasina",
      permitStatus: "Permis PE demandé / titre propre",
      geologyType: "Graphite cristallin en paillettes haute pureté dans un gneiss altéré",
      accessInfo: "Accès ferroviaire direct et route goudronnée jusqu'au port de Toamasina",
      description:
        "Opérations de traitement du graphite en grandes paillettes destinées aux précurseurs d'anodes de batteries et aux marchés réfractaires industriels.",
    },
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 4,
    title: "Sample Collection & Assays",
    category: "Mineral Samples",
    filterKey: "surveys",
    commodity: "Multi-element Assay",
    stage: "Field QA/QC Protocol",
    region: "Central & Eastern Districts",
    concessionArea: "Multi-site Protocol",
    permitStatus: "Certified Geologists",
    geologyType: "ICP-MS / Fire Assay verified high-grade mineral specimens",
    accessInfo: "Mobile field laboratory team",
    description:
      "Field verification and collection of high-grade mineral samples by our certified geologists.",
    fr: {
      title: "Prélèvement d'échantillons et analyses",
      category: "Échantillons minéraux",
      commodity: "Analyse multi-éléments",
      stage: "Protocole QA/QC sur le terrain",
      region: "Districts centraux et orientaux",
      concessionArea: "Protocole multi-sites",
      permitStatus: "Géologues certifiés",
      geologyType: "Spécimens minéraux à haute teneur vérifiés par ICP-MS / pyroanalyse",
      accessInfo: "Laboratoire de terrain mobile",
      description:
        "Vérification sur le terrain et prélèvement d'échantillons minéraux à haute teneur par nos géologues certifiés.",
    },
    image: "/images/projects/raw-mineral-sample.jpg",
    wide: true,
  },
  {
    id: 5,
    title: "Aerial Geological Survey",
    category: "Geological Surveys",
    filterKey: "surveys",
    commodity: "Geophysical Data",
    stage: "Regional Exploration",
    region: "Eastern Belt Zone 4",
    concessionArea: "5,000 km² Coverage",
    permitStatus: "Government License Granted",
    geologyType: "Airborne magnetic, radiometric, and VTEM surveys",
    accessInfo: "Regional Helipad & Airport base",
    description:
      "Helicopter-borne geophysical surveys covering over 5,000 km² of prospective terrain, identifying key structural traps.",
    fr: {
      title: "Levé géologique aérien",
      category: "Levés géologiques",
      commodity: "Données géophysiques",
      stage: "Exploration régionale",
      region: "Zone 4 de la ceinture orientale",
      concessionArea: "Couverture de 5 000 km²",
      permitStatus: "Licence gouvernementale accordée",
      geologyType: "Levés aéroportés magnétiques, radiométriques et VTEM",
      accessInfo: "Héliport régional et base aéroportuaire",
      description:
        "Levés géophysiques héliportés couvrant plus de 5 000 km² de terrain prospectif, permettant d'identifier les pièges structuraux clés.",
    },
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=85",
    tall: true,
  },
  {
    id: 6,
    title: "Mining Site & Hydraulic Concession",
    category: "Field Exploration",
    filterKey: "gold",
    commodity: "Gold & Hydro Resources",
    stage: "Pre-Feasibility Inspection",
    region: "Mangoro River Basin",
    concessionArea: "2,100 Ha",
    permitStatus: "Hydro & Mining Concession Verified",
    geologyType: "Alluvial gravel channels with adjacent hard-rock vein structures",
    accessInfo: "Perennial river transport + Gravel road",
    description:
      "Visits to verified mining sites with inspection of operating areas and water reserves for gravity-based processing.",
    fr: {
      title: "Site minier et concession hydraulique",
      category: "Exploration de terrain",
      commodity: "Ressources aurifères et hydriques",
      stage: "Inspection pré-faisabilité",
      region: "Bassin de la rivière Mangoro",
      permitStatus: "Concessions minières et hydriques vérifiées",
      geologyType: "Chenaux de graviers alluviaux et structures filoniennes en roche dure adjacentes",
      accessInfo: "Transport fluvial permanent + route en gravier",
      description:
        "Visites de sites miniers vérifiés et inspection des périmètres d'exploitation et des réserves en eau pour traitement gravimétrique.",
    },
    image: "/images/projects/mining-site-landscape.jpg",
  },
  {
    id: 7,
    title: "Mineral Sample Laboratory",
    category: "Mineral Samples",
    filterKey: "surveys",
    commodity: "Lab Certification",
    stage: "Operational Hub",
    region: "Antananarivo Industrial Zone",
    concessionArea: "1,500 m² Lab Facility",
    permitStatus: "ISO/IEC Compliant Partner",
    geologyType: "XRF, AAS, and gravimetric assay instrumentation",
    accessInfo: "City center logistics access",
    description:
      "Certified sample preparation and assay laboratory for gold, lithium, REE and base metal analysis with rapid turnaround times.",
    fr: {
      title: "Laboratoire d'échantillons minéraux",
      category: "Échantillons minéraux",
      commodity: "Certification de laboratoire",
      stage: "Plateforme opérationnelle",
      region: "Zone industrielle d'Antananarivo",
      concessionArea: "Laboratoire de 1 500 m²",
      permitStatus: "Partenaire conforme ISO/IEC",
      geologyType: "Instrumentation XRF, AAS et analyses gravimétriques",
      accessInfo: "Accès logistique centre-ville",
      description:
        "Laboratoire certifié de préparation d'échantillons et d'analyses pour l'or, le lithium, les terres rares et les métaux de base, avec des délais rapides.",
    },
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=85",
    wide: true,
  },
  {
    id: 8,
    title: "Community Engagement Program",
    category: "Local Communities",
    filterKey: "surveys",
    commodity: "ESG & Community",
    stage: "Ongoing Stewardship",
    region: "Atsinanana & Analamanga",
    concessionArea: "Community Buffer Zones",
    permitStatus: "Social License to Operate (SLO)",
    geologyType: "Sustainable community development & local capacity building",
    accessInfo: "Direct local village liaison offices",
    description:
      "Building lasting partnerships with local communities through education, healthcare, clean water, and local employment initiatives.",
    fr: {
      title: "Programme d'engagement communautaire",
      category: "Communautés locales",
      commodity: "ESG et communautés",
      stage: "Suivi continu",
      region: "Atsinanana et Analamanga",
      concessionArea: "Zones tampons communautaires",
      permitStatus: "Acceptabilité sociale (SLO)",
      geologyType: "Développement communautaire durable et renforcement des capacités locales",
      accessInfo: "Bureaux de liaison villageois directs",
      description:
        "Des partenariats durables avec les communautés locales grâce à des initiatives en faveur de l'éducation, de la santé, de l'eau potable et de l'emploi local.",
    },
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 9,
    title: "Sustainable Rehabilitation",
    category: "Sustainable Mining",
    filterKey: "surveys",
    commodity: "ESG Environmental",
    stage: "Active Stewardship",
    region: "Eastern Forest Fringe",
    concessionArea: "Reforestation Concessions",
    permitStatus: "ONE Environmental Permit",
    geologyType: "Post-exploration soil restoration & endemic flora reintroduction",
    accessInfo: "Regional nursery network access",
    description:
      "Post-mining land rehabilitation programs ensuring long-term environmental stewardship, erosion prevention, and biodiversity protection.",
    fr: {
      title: "Réhabilitation durable",
      category: "Exploitation minière durable",
      commodity: "ESG — Environnement",
      stage: "Suivi actif",
      region: "Lisière forestière orientale",
      concessionArea: "Concessions de reboisement",
      permitStatus: "Permis environnemental ONE",
      geologyType: "Restauration des sols post-exploration et réintroduction de flore endémique",
      accessInfo: "Accès au réseau régional de pépinières",
      description:
        "Programmes de réhabilitation des terrains après exploitation garantissant une gestion environnementale durable, la prévention de l'érosion et la protection de la biodiversité.",
    },
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 10,
    title: "Mining Infrastructure Development",
    category: "Infrastructure",
    filterKey: "surveys",
    commodity: "Logistics & Energy",
    stage: "Infrastructure Planning",
    region: "East Coast Logistics Corridor",
    concessionArea: "Transport Axis",
    permitStatus: "Infrastructure Authorization",
    geologyType: "Heavy transport roads, solar micro-grids, and water management",
    accessInfo: "Port & Heavy Haul Highway connections",
    description:
      "Building reliable access roads, power supply and logistics networks to support mining operations from pit to port.",
    fr: {
      title: "Développement d'infrastructures minières",
      category: "Infrastructures",
      commodity: "Logistique et énergie",
      stage: "Planification des infrastructures",
      region: "Corridor logistique de la côte Est",
      concessionArea: "Axe de transport",
      permitStatus: "Autorisation d'infrastructures",
      geologyType: "Routes de transport lourd, micro-réseaux solaires et gestion de l'eau",
      accessInfo: "Raccordements au port et à l'axe routier de transport lourd",
      description:
        "Construction de routes d'accès fiables, d'alimentations électriques et de réseaux logistiques pour soutenir les opérations minières, de la fosse au port.",
    },
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=85",
  },
];

export const contactInfo = {
  address: "3 Rue Ravoninahitriniarivo, Antananarivo 101, Madagascar",
  email: "contact@kazak-mining-hub.com",
  phoneMadagascarDisplay: "038 75 963 61",
  phoneMadagascarTel: "tel:+261387596361",
  phoneMadagascarWa: "https://wa.me/261387596361",
  phoneIntlDisplay: "001 (848) 361-2502",
  phoneIntlTel: "tel:+18483612502",
  phoneIntlWa: "https://wa.me/18483612502",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.14329383084!2d46.876!3d-17.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ1JzAwLjAiUyA0NsKwNTInMzMuNiJF!5e0!3m2!1sfr!2smg!4v1",
};
