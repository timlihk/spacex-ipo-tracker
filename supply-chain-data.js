// SpaceX Supply Chain Ticker Data
// Compiled from: TradingView watchlist, alex-jb/spacex-ipo-tracker (GitHub), Hawkmont Research
// Researched: 2026-07-05

const SUPPLY_CHAIN_DATA = {
  meta: {
    updated: "2026-07-05",
    sources: ["TradingView watchlist 'spacex'", "alex-jb/spacex-ipo-tracker (GitHub)", "Hawkmont Research", "Reddit r/Stocks_Picks"],
    spacexIPO: "June 12, 2026 — NASDAQ:SPCX — ~$1.75T valuation",
    totalTickers: 43,
  },

  layers: [
    {
      id: "materials",
      name: "Materials & Specialty Inputs",
      icon: "⛏️",
      description: "Raw materials, alloys, industrial gases, and composites that feed rocket and satellite manufacturing",
      tickers: [
        { ticker: "LIN", company: "Linde plc", exchange: "NASDAQ", marketCap: "~$253B", description: "Largest industrial gas company globally. Produces liquid oxygen (LOX) and liquid hydrogen (LH2) — the two propellants used in Falcon 9 and Starship.", spacexRole: "Rocket fuel supplier — LOX/LH2 production", keyProducts: "LOX, LH2, industrial gases", contractDetails: "SpaceX is a major LOX customer; Linde supplies from multiple US facilities near launch sites" },
        { ticker: "APD", company: "Air Products & Chemicals", exchange: "NYSE", marketCap: "~$67B", description: "Industrial gases — oxygen, nitrogen, hydrogen, and electronics materials.", spacexRole: "Alternative industrial gas supplier (LOX, hydrogen)", keyProducts: "Industrial gases, hydrogen production", contractDetails: "No confirmed SpaceX contract; indirect supply chain" },
        { ticker: "ATI", company: "ATI Inc (Allegheny Technologies)", exchange: "NYSE", marketCap: "~$10B", description: "Specialty alloys — titanium, nickel-based superalloys, zirconium. Aerospace and defense focus.", spacexRole: "Titanium and superalloy supplier for rocket structures", keyProducts: "Titanium alloys, nickel superalloys, stainless steel", contractDetails: "Aerospace supplier; SpaceX relationship via titanium sheet/plate for Starship" },
        { ticker: "CRS", company: "Carpenter Technology", exchange: "NYSE", marketCap: "~$3.5B", description: "Specialty steel and alloy manufacturer — aerospace fasteners, engine components, landing gear.", spacexRole: "Specialty steel alloys for rocket and satellite structures", keyProducts: "Specialty steels, superalloys, titanium", contractDetails: "Aerospace-grade alloy supplier; SpaceX connection via precision alloys" },
        { ticker: "HXL", company: "Hexcel Corporation", exchange: "NYSE", marketCap: "~$18B", description: "Carbon fiber composites and structural materials for aerospace. Major supplier to Boeing/Airbus.", spacexRole: "Carbon fiber composites for rocket fairings, satellite structures", keyProducts: "Carbon fiber prepregs, honeycomb cores, composite materials", contractDetails: "No confirmed SpaceX contract; composite materials supplier to broader aerospace" },
        { ticker: "MTRN", company: "Mtron", exchange: "NYSE", marketCap: "~$1.2B", description: "Specialty materials and engineered products — electronics, optics, aerospace.", spacexRole: "Specialty materials for space applications", keyProducts: "Engineered materials, electronic components", contractDetails: "Indirect space supply chain" },
        { ticker: "STLD", company: "Steel Dynamics", exchange: "NASDAQ", marketCap: "~$22B", description: "Domestic steel producer — flat-rolled, structural steel, recycled metals.", spacexRole: "Steel for launch pad infrastructure and ground support equipment", keyProducts: "Flat-rolled steel, structural steel", contractDetails: "No confirmed SpaceX contract; infrastructure supply chain" },
      ]
    },

    {
      id: "components",
      name: "Precision Components & Manufacturing",
      icon: "⚙️",
      description: "Aerospace-grade components, actuators, structures, and additive manufacturing",
      tickers: [
        { ticker: "HEI", company: "HEICO Corporation", exchange: "NYSE", marketCap: "~$30B", description: "Aerospace and defense replacement parts, electronic components, and specialty products. Niche monopoly strategy.", spacexRole: "Aerospace electrical/electronic components, replacement parts", keyProducts: "Electro-optical, microwave, RF components; FAA-PMA parts", contractDetails: "Broad aerospace supplier; SpaceX connection via electronic components" },
        { ticker: "TDG", company: "TransDigm Group", exchange: "NYSE", marketCap: "~$76B", description: "Aerospace components — niche monopolies in actuators, ignition systems, safety products. High-margin model.", spacexRole: "Aerospace components for launch and satellite systems", keyProducts: "Actuators, ignition systems, audio systems, safety products", contractDetails: "No confirmed SpaceX contract; aerospace component overlap" },
        { ticker: "MOG.A", company: "Moog Inc", exchange: "NYSE", marketCap: "~$15B", description: "Precision motion control — flight control systems, actuators, valves for aerospace and defense.", spacexRole: "Flight control actuators, propulsion valves", keyProducts: "Servoactuators, flight controls, propulsion valves", contractDetails: "Aerospace supplier; potential SpaceX relationship via valve/actuator systems" },
        { ticker: "PH", company: "Parker-Hannifin", exchange: "NYSE", marketCap: "~$90B", description: "Motion and control technologies — hydraulics, pneumatics, sealing solutions. Aerospace and industrial.", spacexRole: "Hydraulic/pneumatic systems, seals for rocket and ground systems", keyProducts: "Hydraulic systems, seals, fluid power, electromechanical", contractDetails: "Major aerospace supplier; SpaceX via seals/hydraulics" },
        { ticker: "DCO", company: "Ducommun", exchange: "NYSE", marketCap: "~$0.7B", description: "Aerospace structural components and electronic systems. Small-cap pure-play aerospace.", spacexRole: "Structural components for rockets and satellites", keyProducts: "Wireless systems, RF/microwave, structural assemblies", contractDetails: "SpaceX relationship via structural/electronic assemblies" },
        { ticker: "ATRO", company: "Astro Aerospace", exchange: "NASDAQ", marketCap: "~$0.1B", description: "Aerospace structures and deployable systems. Very small-cap.", spacexRole: "Deployable space structures", keyProducts: "Telescopic booms, deployable structures", contractDetails: "Space heritage; SpaceX connection uncertain" },
        { ticker: "RDW", company: "Redwire", exchange: "NYSE", marketCap: "~$0.3B", description: "Space infrastructure — solar arrays, deployable structures, in-space manufacturing. Pure-play space economy.", spacexRole: "Solar arrays for SpaceX spacecraft; space infrastructure components", keyProducts: "Solar arrays, deployable structures, space mechanisms", contractDetails: "Confirmed: supplies solar arrays to SpaceX" },
        { ticker: "CPSH", company: "CPS Technologies", exchange: "NASDAQ", marketCap: "~$25M", description: "Advanced thermal composites for satellite avionics and power electronics. Micro-cap.", spacexRole: "Thermal management for satellite avionics", keyProducts: "AlSiC (aluminum silicon carbide) thermal composites", contractDetails: "Space-economy beneficiary; satellite thermal management" },
        { ticker: "GHM", company: "Greenwich Holdings", exchange: "NYSE", marketCap: "~$0.4B", description: "Engineered products and systems — aerospace, defense, power generation.", spacexRole: "Aerospace castings and forgings", keyProducts: "Investment castings, forged components", contractDetails: "Aerospace supply chain; SpaceX connection uncertain" },
      ]
    },

    {
      id: "electronics-rf",
      name: "Electronics, RF & Communications",
      icon: "📡",
      description: "RF components, GaN amplifiers, PCBs, and terminal hardware for Starlink satellites and ground stations",
      tickers: [
        { ticker: "FLTCF", company: "Filtronic plc", exchange: "AIM (UK) / OTC", marketCap: "~£150M", description: "UK-based RF and microwave technology specialist. Designs and manufactures GaN power amplifiers for satellite communications.", spacexRole: "RF/GaN amplifiers for Starlink satellites — confirmed $115M+ in contracts", keyProducts: "GaN power amplifiers, RF filters, satellite comms hardware", contractDetails: "5-year strategic partnership with SpaceX (2024). $115M+ cumulative contracts. SpaceX = 65-75% of revenue. Pipeline extending to FY2028." },
        { ticker: "STM", company: "STMicroelectronics", exchange: "NYSE", marketCap: "~$28B", description: "European semiconductor manufacturer — RF components, power electronics, sensors.", spacexRole: "RF communications components for Starlink satellites", keyProducts: "RF transceivers, power electronics, MEMS sensors", contractDetails: "Exane forecast: ~$500M Starlink revenue (2024), ~$1B projected (2027)" },
        { ticker: "PKE", company: "Park Aerospace", exchange: "NYSE", marketCap: "~$0.8B", description: "Advanced electronic materials — copper-clad laminates, composite materials for PCBs.", spacexRole: "Electronic materials for satellite PCBs", keyProducts: "Copper-clad laminates, high-frequency materials", contractDetails: "Indirect space supply chain via PCB materials" },
        { ticker: "6285.TW", company: "Wistron NeWeb Corp (WNC)", exchange: "TWSE (Taiwan)", marketCap: "~$2.5B", description: "Taiwanese RF/microwave and satellite terminal manufacturer. Primary Starlink user terminal producer.", spacexRole: "Primary manufacturer of Starlink user terminals — sole-source relationship", keyProducts: "Starlink user terminals, ground station hardware, RF modules", contractDetails: "SpaceX directed WNC to expand Vietnam production. Locked-in supply relationship. Most liquid entry into Starlink hardware theme." },
        { ticker: "2313.TW", company: "Compeq Manufacturing", exchange: "TWSE (Taiwan)", marketCap: "~$1.2B", description: "Taiwanese PCB manufacturer — high-density interconnect boards for satellites and consumer electronics.", spacexRole: "LEO satellite PCBs and ground station electronics", keyProducts: "HDI PCBs, high-frequency boards, satellite-grade PCBs", contractDetails: "Supply chain relationship for LEO satellite electronics" },
        { ticker: "6271.TW", company: "Tong Hsing Electronic Industries", exchange: "TWSE (Taiwan)", marketCap: "~$0.5B", description: "Taiwanese ceramic substrate and RF module manufacturer.", spacexRole: "Ceramic substrates and RF modules (rumored Starlink relationship)", keyProducts: "Ceramic substrates, RF modules, sensor packaging", contractDetails: "Rumored Starlink relationship — flagged with caution by Hawkmont" },
      ]
    },

    {
      id: "additive-mfg",
      name: "Additive Manufacturing",
      icon: "🖨️",
      description: "Metal 3D printing for rocket engine components and structural parts",
      tickers: [
        { ticker: "VELO", company: "Velo3D", exchange: "OTC (delisted from NYSE)", marketCap: "~$20M", description: "Metal additive manufacturing — powder-bed fusion for rocket engine parts. Historically supplied SpaceX.", spacexRole: "Metal 3D printed parts for SpaceX rocket engines — confirmed supplier", keyProducts: "Sapphire printer, printed copper combustion chambers, nickel alloy parts", contractDetails: "SpaceX was a key customer. Velo3D delisted from NYSE, now OTC. High risk / potential recovery play." },
        { ticker: "347800.KS", company: "Sphere Corp", exchange: "KOSDAQ (Korea)", marketCap: "~$200M", description: "South Korean aerospace-grade superalloy specialist. Purest rocket hardware supply contract in small-cap space.", spacexRole: "Superalloys for Starship rocket hardware — confirmed $1.05B 10-year contract", keyProducts: "Aerospace superalloys, nickel-based alloys, titanium alloys", contractDetails: "10-year, $1.05B supply agreement (Aug 2025). 2026 delivery commitment: $55.48M. Transformational for company revenue base." },
      ]
    },

    {
      id: "launch-services",
      name: "Launch & Space Services",
      icon: "🚀",
      description: "Direct competitors, customers, and ecosystem participants in the launch and satellite services market",
      tickers: [
        { ticker: "RKLB", company: "Rocket Lab USA", exchange: "NASDAQ", marketCap: "~$8B", description: "Second most frequent US launch provider. Electron small-orbital and Neutron medium-lift (in development). Also satellite builder.", spacexRole: "Launch competitor + customer of Falcon 9 rideshare. Satellite bus manufacturer.", keyProducts: "Electron rocket, Neutron rocket (in dev), satellite platforms, components", contractDetails: "Iridium acquisition (~$8B, Jun 2026). Rideshare customer of SpaceX. Competitor in small-lift." },
        { ticker: "ASTS", company: "AST SpaceMobile", exchange: "NASDAQ", marketCap: "~$18B", description: "Direct-to-cell satellite connectivity. Building a LEO constellation for direct smartphone connectivity.", spacexRole: "Direct competitor to Starlink Direct-to-Cell service", keyProducts: "BlueBird satellites, direct-to-cell connectivity platform", contractDetails: "First 5 commercial satellites launched on Falcon 9 (Sep 2024). AT&T, Verizon partnerships." },
        { ticker: "LUNR", company: "Intuitive Machines", exchange: "NASDAQ", marketCap: "~$0.5B", description: "Lunar lander company. First private company to land on the Moon (Odysseus, Feb 2024).", spacexRole: "Lunar lander developer — Falcon 9 as primary launch vehicle", keyProducts: "Nova-C lunar lander, Nova-D, data relay services", contractDetails: "NASA CLPS contracts. Multiple Falcon 9 launches contracted. SpaceX is primary launch provider." },
        { ticker: "BKSY", company: "BlackSky Technology", exchange: "NYSE", marketCap: "~$0.2B", description: "Real-time geospatial intelligence — SAR satellite constellation and AI-powered analytics.", spacexRole: "SAR earth observation — launches on Falcon 9 via Transporter rideshare", keyProducts: "Gen-2/Gen-3 SAR satellites, Spectra AI analytics platform", contractDetails: "Multiple satellites launched on SpaceX Transporter missions. Rideshare customer." },
        { ticker: "PL", company: "Planet Labs", exchange: "NYSE", marketCap: "~$0.7B", description: "Earth observation constellation — ~200 Dove satellites imaging the entire Earth daily.", spacexRole: "Earth observation constellation — SpaceX rideshare customer", keyProducts: "Dove, SkySat, Pelican satellites; PlanetPlatform data", contractDetails: "Frequent SpaceX Transporter rideshare customer. Dozens of launches together." },
        { ticker: "LMT", company: "Lockheed Martin", exchange: "NYSE", marketCap: "~$120B", description: "Largest defense contractor. Missiles, space, aeronautics, rotorcraft, and mission systems.", spacexRole: "Partial SpaceX competition (ULA) + DoD shared-supplier role", keyProducts: "F-35, missile defense, GPS satellites, deep space systems", contractDetails: "Space Force/NASA shared contracts with SpaceX. Competitor via ULA (Vulcan)." },
        { ticker: "KTOS", company: "Kratos Defense", exchange: "NASDAQ", marketCap: "~$2B", description: "Defense and national security — drones, satellite communications, missile defense, training systems.", spacexRole: "Defense/drone ecosystem — satellite ground systems overlap with SpaceX", keyProducts: "Unmanned systems, satellite comms, training, cybersecurity", contractDetails: "DoD supplier; satellite ground system overlap with Starlink" },
        { ticker: "AVAV", company: "AeroVironment", exchange: "NASDAQ", marketCap: "~$5B", description: "Unmanned aircraft systems — tactical drones, loitering munitions. Major Ukraine war supplier.", spacexRole: "Drone ecosystem — space-adjacent defense", keyProducts: "Switchblade, Puma, Raven drones; tactical missile systems", contractDetails: "No direct SpaceX contract; defense ecosystem adjacency" },
        { ticker: "GD", company: "General Dynamics", exchange: "NYSE", marketCap: "~$80B", description: "Defense prime — Gulfstream jets, submarines, IT services, combat vehicles.", spacexRole: "Defense prime — shared DoD supplier ecosystem", keyProducts: "Gulfstream, Virginia-class subs, IT services, armored vehicles", contractDetails: "No direct SpaceX contract; defense ecosystem" },
      ]
    },

    {
      id: "power-energy",
      name: "Power & Energy Infrastructure",
      icon: "⚡",
      description: "Power generation for AI data centers (xAI synergy) and cryogenic/energy systems for launch",
      tickers: [
        { ticker: "GTLS", company: "Chart Industries", exchange: "NYSE", marketCap: "~$8B", description: "Cryogenic and gas processing equipment — heat exchangers, cold boxes, LNG equipment.", spacexRole: "Cryogenic equipment for LOX/LH2 production and handling at launch sites", keyProducts: "Cryogenic heat exchangers, air separation units, LNG equipment", contractDetails: "Indirect SpaceX supply chain via cryogenic equipment for propellant production" },
        { ticker: "BE", company: "Bloom Energy", exchange: "NYSE", marketCap: "~$6B", description: "Solid oxide fuel cells — on-site power generation for data centers and industrial use.", spacexRole: "AI data center power (xAI synergy) — on-site energy for AI compute", keyProducts: "Bloom Energy Server fuel cells, solid oxide electrolysis", contractDetails: "xAI data center power supply connection via AI infrastructure buildout" },
        { ticker: "CEG", company: "Constellation Energy", exchange: "NASDAQ", marketCap: "~$80B", description: "Largest US nuclear power operator. Clean energy supplier to data centers.", spacexRole: "Nuclear power for AI data centers (xAI synergy)", keyProducts: "Nuclear power generation, clean energy", contractDetails: "Microsoft Three Mile Island deal; AI data center power contracts" },
        { ticker: "GEV", company: "GE Vernova", exchange: "NYSE", marketCap: "~$120B", description: "Power grid equipment — gas turbines, wind, electrification, nuclear services.", spacexRole: "Grid equipment and gas turbines for AI data center power", keyProducts: "Gas turbines, grid solutions, wind turbines, nuclear services", contractDetails: "AI infrastructure power supply chain" },
        { ticker: "CRWV", company: "CoreWeave", exchange: "NASDAQ", marketCap: "~$40B", description: "AI cloud provider — GPU infrastructure for AI/ML workloads. Former crypto miner pivoted to AI.", spacexRole: "AI cloud infrastructure (xAI synergy) — GPU compute provider", keyProducts: "GPU cloud instances, AI training infrastructure", contractDetails: "xAI is a customer of GPU cloud; indirect SpaceX/xAI ecosystem" },
      ]
    },

    {
      id: "ai-infra",
      name: "AI Infrastructure (xAI Merger Synergy)",
      icon: "🧠",
      description: "Semiconductors, compute, and networking that power xAI — SpaceX's merger partner since Feb 2026",
      tickers: [
        { ticker: "NVDA", company: "NVIDIA", exchange: "NASDAQ", marketCap: "~$4.8T", description: "GPU compute leader. H100/H200/B100/B200 chips power nearly all AI training and inference globally.", spacexRole: "GPU compute for xAI model training (xAI merged with SpaceX Feb 2026)", keyProducts: "Hopper, Blackwell GPUs; CUDA; networking; DGX systems", contractDetails: "xAI is a major NVIDIA customer for Grok model training" },
        { ticker: "AVGO", company: "Broadcom", exchange: "NASDAQ", marketCap: "~$800B", description: "Networking silicon, custom AI ASICs, broadband, and semiconductor infrastructure.", spacexRole: "Networking silicon for AI data center infrastructure (xAI synergy)", keyProducts: "Tomahawk switches, Jericho routers, custom AI ASICs", contractDetails: "Custom ASIC partnerships; AI data center networking" },
        { ticker: "TSM", company: "TSMC", exchange: "NYSE", marketCap: "~$1T", description: "World's largest semiconductor foundry. Manufactures chips for NVIDIA, Broadcom, Apple, AMD.", spacexRole: "Foundry for AI chips used by xAI (indirect)", keyProducts: "3nm, 5nm wafer fabrication; advanced packaging (CoWoS)", contractDetails: "Manufactures NVIDIA GPUs and Broadcom ASICs used in xAI infrastructure" },
        { ticker: "MU", company: "Micron Technology", exchange: "NASDAQ", marketCap: "~$130B", description: "Memory chips — DRAM, NAND, HBM (high-bandwidth memory) for AI accelerators.", spacexRole: "HBM memory for AI GPUs used by xAI", keyProducts: "HBM3E, DDR5, NAND, LPDDR", contractDetails: "HBM supplier to NVIDIA; xAI uses NVIDIA GPUs containing Micron HBM" },
        { ticker: "TSLA", company: "Tesla", exchange: "NASDAQ", marketCap: "~$1.3T", description: "EVs, energy storage, and robotics (Optimus). Elon Musk company — synergy with SpaceX on materials, manufacturing, and autonomy.", spacexRole: "Shared Elon Musk ecosystem — materials, manufacturing know-how, Optimus robotics", keyProducts: "Model 3/Y/S/X, Megapack, Optimus humanoid robot, FSD", contractDetails: "No direct SpaceX contract; shared Musk ecosystem and technology transfer" },
        { ticker: "SYM", company: "Symbotic", exchange: "NASDAQ", marketCap: "~$20B", description: "AI-powered warehouse robotics and automation. Walmart-backed.", spacexRole: "Physical AI / robotics ecosystem — supply chain automation", keyProducts: "Autonomous mobile robots, AI warehouse systems", contractDetails: "No direct SpaceX contract; physical AI theme adjacency" },
      ]
    },

    {
      id: "spacex-direct",
      name: "Direct SpaceX Exposure",
      icon: "🎯",
      description: "SpaceX itself and direct investment vehicles",
      tickers: [
        { ticker: "SPCX", company: "SpaceX (Space Exploration Technologies)", exchange: "NASDAQ", marketCap: "~$1.75T", description: "Combined entity: SpaceX (launch, Starlink, Starship) + xAI (Grok, AI models). IPO'd June 12, 2026.", spacexRole: "The company itself", keyProducts: "Falcon 9, Falcon Heavy, Starship, Starlink, Grok AI models", contractDetails: "IPO: June 12, 2026. 5-for-1 stock split. $1.75T valuation. 21-bank syndicate." },
        { ticker: "SPCF", company: "ProShares Ultra SpaceX", exchange: "NYSE", marketCap: "ETF", description: "2x leveraged ETF tracking daily performance of SPCX.", spacexRole: "Leveraged SpaceX exposure vehicle", keyProducts: "2x daily SPCX return ETF", contractDetails: "Launched post-IPO" },
      ]
    },
  ],

  // Tickgers from the original GitHub repo that are now in the expanded list
  githubOriginal: ["RKLB", "ASTS", "LUNR", "BKSY", "PL", "RDW", "LMT", "LIN"],
  githubExpanded: ["RKLB", "ASTS", "LUNR", "BKSY", "PL", "RDW", "LMT", "LIN", "TSLA", "SYM", "NVDA", "AVGO", "AVAV", "KTOS", "BE", "CEG", "GEV", "CRWV", "TSM", "MU", "GD"],

  // Tickgers unique to the TradingView watchlist
  tradingViewOnly: ["HEI", "TDG", "HXL", "MOG.A", "PH", "ATI", "CRS", "DCO", "ATRO", "APD", "GTLS", "PKE", "STLD", "MTRN", "GHM", "CPSH", "SIF", "TRYIY"],

  // Tickers unique to Hawkmont Research
  hawkmontOnly: ["FLTCF", "347800.KS", "6285.TW", "2313.TW", "6271.TW", "CPSH"],
};