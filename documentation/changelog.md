# Changelog
*This list is not exhaustive.*
### 0.0.32
- added around 50 new states
- new possible kanal (kra kanal) in thailand
- changed events, decisions, ai methods, country defs, etc to new states
- fixed literature PM methods
- fixed medical facilities PM methods overwriting barracks
- new state traits for new and existing states
- changed health facilities PM methods and fixed bug/conflict with barracks?
- various bug fixes
- locators and hubs mostly done, western europe and south africa still to do
### 0.0.31
- changed government offices PM method modifiers
- changed magazines to literature (books)
- changed pop needs and buy packages (new needs added entertainment and medical), changes to existing needs
- new medicine good
- new health facilities building for urban medicine, subsistence farms now produce medicine in home workshops as an analogue of folk / traditional medicine and home remedies
- seemingly works ok as china produces enough medicine decentralised as i think was the case in 1800s, and the western countries are more dependent on purpose built medical infrastructure
- changed some state traits (mainly agriculture bonuses)
- subsistence farms now make a small amount of tools
- ports now now make a small amount of transport
- added some health facilities to game start
- changed some buildings history in europe
### 0.0.30
- dozens of state traits added to the map mainly geographical features e.g. rivers, mountains, harbours and plains
- changed construction speed
- fixed localisation errors
### 0.0.29
- all buildings except military are now half their vanilla size i.e. produce half goods, employ half people
- changed levels per mesh from 5 to 10 on all buildings
- doubled arable land as well as added extra to allow for quarries
- added new and changed existing vanilla state traits
- incorporated some aspects of southern africa rework, will be rewriting the bulk of it
- new journal entries for south africa for the initial boer republics and the great trek
- new nations in southern africa including boer republics that spawn as part of die groot trek
- changes to mod file structure and removing redundant files
- changes to native african states history files in south africa
- historical characters and set-up for caucasian states and changed TCA to be a variation of CAU
- custom government types added and working now
- made indian raids in texas less likely to happen 
### 0.0.28
- changed publishing house construction cost
### 0.0.27
- overhauled construction production methods to use new goods
- new construction production method: masonry buildings
- new goods: bricks, chemicals, cement, clay, limestone
- new buildings: brickworks, cement factory, fertilizer factory, explosives industry, quarries
- POPs now require some chemicals
- chemical plants produce chemicals, fertilizer and explosives are their own seperate buildings now
- added clay potential to map
- changed silver and copper potentials
- added buildings to history files
- new state traits
- reworked localisation files to be easier to read
- added cupronickel currency law
- fixed some event bugs e.g. texas and comache being in perpetual war
- integrated newspapers & magazines mod
- rewrote above mods production methods to be more in line with vanilla
- removed added technology from newspapers and moved it to vanilla
- changed private infrastructure auto_expand rule because otherwise random (not all) one state minors were spamming railways and road networks instead of building anything else
- fixed UTF-8 BOM encoding errors
- added some dynamic country names
### 0.0.26
- new countries east prussia, gibraltar, hong kong, macao, polabia, pomerelia, poznan, zaporizhia
- new city state government types
- added the texan-comanche wars (WIP), extra Santa Anna capture flavour and texan culture
### 0.0.25
- bug fixes: mostly incorrect PMs being referenced or missing brackets from merging old and new branches
- changed mantua, thomond and berg tags as they were overlapping with vanilla in some manner
- removed more redundant localisation
- removed mestizo for now
- fixed triggers in events add_radicals_in_state mainly using old add_radicals
- fixed triggers in various agitators events
- fixed je's for countries that already met requirements on game start
- added seminole decentralised nation to florida at war with the USA
### 0.0.24
- a whole myriad of 1.3.0 patch compatibility changes and integration of OPB's VTM changes for 1.3.0
- removed limousin culture
- added lorrainian culture
- north brabant is now part of releasable brabant
- finance sector now requires currency standards tech instead of banking tech
- added localisation that paradox forgot and reduced redundancies within my own
### 0.0.23
- removed central bank building
- condensed german and italian minors into a smaller amount of cultures for performance reasons
- french region will be modified with upcoming 1.3 patch to vanilla
- small changes to other POPs and cultures
### 0.0.22
- added new building - mint - and implemented central banks
- reworked finance buildings, goods, POP needs and product chains
- given these buildings to historical places (as much as I could find)
- finance sector requires banking tech
- added road network - produces transport and uses construction material / wood. alternative to railways!
### 0.0.21
- integrated numerous changes and fixes from OPB's tweaks mod
- new AI strategies for various nations
- ports can now be merchant guilds, privately owned or co-operatives and produce charterparties (maritime shipping contracts)
- trade centers now require charterparties to run trade routes (1 charterparty per level) as well as convoys (which I am treating as an abstraction for freight rate)
- fixed ORG (columbia) not being a puppet of GBR bug
### 0.0.20
- new countries canary islands, kenya, namibia, nigeria, thrace, vardar (north macedonia), macedonia, courland, minor caucasian states
- poland, estonia, livonia and courland as subjects of russia
- fixed Ryukyu Islands localisation
- added new secondary PM for millet farms (palm oil)
- removed redundant .tga flag files
- changed german minors culture flipping to if only germany proper exists NGF and SGF no longer count
- added silver fields to brunswick at game start b/c i can't figure out how to make it discover seperately yet
- removed badajoz from andalusia
- andalusia now called granada if any islam is the state religion
- oman religion changed to ibadi
- changed colour of ibadi
- partial integration of "Historical Russian Substates"
- mod's new estonia and livonia merged with my own
- new historical flags for added nations
- dynamic country and government types(WIP) for added nations
- latvia can now be formed by either courland or livonia
- fixed starting wars with caucasian minors
- added new caucasian cultures e.g. chechen, ossetian (alan), nogai, etc.
- changed north caucasian POPs in astrakhan to tatar
- undone changes to the underlying map
- regenerated map object locator data - need to change locators in map editor 
### 0.0.19
- pan-nationalism technology check to unification minors culture flipping when left out of major formation
- flavour to chile & argentina
- new releasable countries (singapore, maldives, ryukyu islands)
- new flags for some european countries
- removed gold framing around overlord's canton on subject flags
### 0.0.18
- reduced POP needs for finance and fine art (hopefully should reduce art spam)
- changed balancing of financial trade goods and production methods
- some production methods now use unused vanilla icons
- graphics for cities in mediterranean changed to "latin" from "european"
- "european" city gfx textures changed so it produces less copper-roofed eyesores
- removed russian primary culture from kazan, now tatar only
- subject taxes use values from vickypedia
- vassals and puppets can now start diplo plays
- added negative and positive effects to tax level
- changed migration defines some more
### 0.0.17
- condensed mod files due to game skipping several important lines for unknown reasons
- overwriting vanilla states localisation file because otherwise state localisation just doesn't work!
- added two .gui files from Tobbzn via discord to stop vanilla error spam
- removed professional army duplicates from political setup and added right of assembly to liberal
### 0.0.16
- split gelre into gelderland and brabant
- adjusted netherlands starting laws and POPs
- merged states overwrites file to 00_states
- condensed changelog and readme
### 0.0.15
- added copper tools
- new state traits for various states around the world
- urban centres produce currency using rare metals (locally accepted) or securities (government issued currency)
### 0.0.14
- silver and copper as trade goods
- silver as a by-product of lead and copper mines as well as silver fields for silver panning
- copper mines distributed around the map
- automobiles, radios, telephones, etc. now use copper
- vanilla matched icons for new goods
- silver standard now uses silver to create currency
- bimetallic standard now uses gold and silver to create currency
- various bug-fixes
- unsure why localization error occurs when i seperate copper and silver from other goods, needs further investigation
### 0.0.13
- private construction sector (work in progress)
- construction materials goods and accompanying factory
- finance industry (work in progress)
- finance sector building and central bank building
- currency and securities goods with POP needs
- currency standards law (no prescribed money aka bartering, silver, bimetallic, gold standard, fiat) with IG support
- added construction materials factories to states with already existing construction sectors
- gold now tradeable
- fixed incorrect encoding on files
- fixed mistake in flag_definitions for XXM's algerian flag
- changed math in defines relating to POP growth as per /u/supermap on reddit
### 0.0.12
- added a migration malus to malaria traits
- different icons for severe and regular malaria
- newfoundland independent in 1836 (crown colony)
- added maghreb union
- fixed bugs in scripted_effects
- changed unification play for maghreb union to major and added diplomatic play (need leadership play)
### 0.0.11
- rewrote primary culture changing script for italian and german minors
- dutch, russian and polish new world cultures
- alsace primary culture changed to south german
- fantefolk now nomadic
- fixed flags not working for burgundy, gascony and herzegovina
- fixed muscovy's borders
- alsace's romance population from french to comtois (temporary)
- modified savoy POPs
- fixed country tag conflicts PAL and ACH
### 0.0.10
- made many of the new countries releasable ~90% of them, some need changes
- commented out code for newfie assimilation for now
- fixed incorrect culture references
### 0.0.9
- added 1 new culture - fantefolk
- localisation for new countries
- fixed incorrect culture references
- fixed missing flag textures
- fixed incorrect trait references
- fixed incorrect encoding on files
- resolved tag conflicts
### 0.0.8
- 140 new countries added
### 0.0.7
- added italian minor cultures
- added new american diaspora cultures for hispanophones and lusophones
- added - italian minors change to their respective local culture if left outside of italy
- added romani gypsy populations to various parts of Europe
- added new primary cultures added to relevant countries
- added newfies
### 0.0.6
- german minor cultures automatically assimilate to their respective north and south cultures.
- all german states will change their primary culture to their respective minor culture if they are left out of the north or south german confederation, e.g. bavaria's primary culture will become bavarian if the other south german states form the SGF without it.
- added more disapora cultures for the united states and canada
- automatic assimilation of POPs into the relevant diaspora culture in north america and homelands added for each culture
- french minor cultures complete
- adjusted some POPs cultures that were missed
- removed yankee as a primary culture of columbia 
- changed discrimination traits on some cultures
- various bug fixes and optimisation of the scripts
### 0.0.5
- added various new diaspora cultures in north america
- added a script that auto-assimilates old world cultures into new world cultures
- added scripted open borders law will result in POPs in neighbouring foreign states moving to states (crossing the border) provided the average SOL is higher in the target state
- script that causes POPs in neighbouring foreign states to not-so-illegally cross the border if the average SOL is higher in their target state - only happens for countries with Open Borders law.
- fixed spelling errors
### 0.0.4
- added cultures in western europe - gallo and gascon
- added cultures in Southern europe - pontic Greek
- various minority cultures in eastern europe and russia e.g. rusyn, karelian, samoyed
- discrimination traits for new and minor cultures
- added new religions e.g. anglican, old believer (orthodox) but not implemented yet
- cultural exclusion law now discriminates non-culture trait holders
- changed some vanilla culture's traits to implement new traits
### 0.0.3
- added various minority cultures in western europe e.g. scanian, highland scots, frisians
- added various minority cultures in eastern europe e.g. silesians, volga germans
- all german POPs split into german minor cultures (reminiscent of EU4)
- border controls works as open borders (with discrimination making it unlikely that anyone would migrate)
- closed borders works as border controls
### 0.0.2
- added two new cultures in western europe - cornish and cumbric
- changes to defines
### 0.0.1
- initial commit