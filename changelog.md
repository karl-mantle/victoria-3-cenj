# Changelog
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