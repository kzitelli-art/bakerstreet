// sponsors4.js -- Baker Street Capital Advisors
// Private and individual borrowers: HNW investors, single-asset sponsors (entries 127-168)
// Last updated: March 2026
// Schema: parentFirm, hq, founded, aum, focus, currentStrategy, states[], treppEntities[], loans[], people[]
// People: rank, name, title, firm, decisionPower, background, education[], career[], deals[]

var SPONSORS4 = {

  "Life Care Services (Clarendale of Mokena)": {
    parentFirm:      "Life Care Services LLC (LCS parent holding company, Des Moines IA)",
    hq:              "400 Locust Street Suite 820, Des Moines IA 50309",
    founded:         "1971",
    aum:             "$6B+ in senior living communities managed. 140+ communities nationally.",
    focus:           "Senior living management, development, and investment. Clarendale is LCS's premium senior living brand. Mokena IL is a Chicago southwest suburb (Will County).",
    currentStrategy: "Clarendale of Mokena IL (senior living): $31.7M CMBS watchlist. LCS is one of the nation's largest senior living operators. Senior living CMBS workouts have specific dynamics: Medicare/Medicaid payor mix, occupancy recovery curves, staffing costs, and state regulatory requirements. LCS is an institutional operator that will respond to a sophisticated, operationally knowledgeable workout proposal.",
    states:          ["IL","IA","FL","TX","AZ","CA"],
    treppEntities:   ["Life Care Services LLC","LCS","Clarendale of Mokena IL"],
    loans: [
      {
        property: "Clarendale of Mokena",
        address:  "Mokena IL (Will County, Chicago southwest suburb)",
        type:     "multifamily",
        balance:  31700000,
        dscr:     0,
        status:   "watchlist",
        state:    "IL",
        maturity: "",
        servicer: "",
        note:     "Senior living community. LCS is institutional operator. Senior living CMBS has specialized workout dynamics -- Medicare/Medicaid payor mix, staffing costs, state regulation.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Joel Nelson",
        title:         "CEO",
        firm:          "Life Care Services (LCS)",
        decisionPower: "CEO. Controls all capital decisions including debt workout and modification strategy for LCS portfolio assets.",
        background:    "CEO of LCS (Life Care Services), one of the nation's largest senior living operators. Des Moines IA based. Active in LeadingAge (national senior living industry association) and Argentum.",
        education: [],
        career: [
          { firm: "Life Care Services (LCS)", role: "CEO", years: "current", note: "Des Moines IA. 140+ senior living communities." }
        ],
        deals: [
          { property: "Clarendale of Mokena IL", year: "ongoing", role: "CEO/Operator", amount: 31700000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Alain Villegas (Cedar Point Apartments)": {
    parentFirm:      "",
    hq:              "Texas (Houston area likely)",
    founded:         "",
    aum:             "$25.9M CMBS loan on Cedar Point Apartments TX multifamily.",
    focus:           "Private Texas multifamily investor. Cedar Point Apartments is likely a Houston-area Class B/C apartment community.",
    currentStrategy: "Individual borrower on $25.9M TX MF CMBS watchlist. At $25.9M equity cure may be achievable. TX SOS entity search to identify borrowing LLC. Direct outreach with a concrete modification proposal.",
    states:          ["TX"],
    treppEntities:   ["Alain Villegas","Cedar Point Apartments TX MF"],
    loans: [
      {
        property: "Cedar Point Apartments",
        address:  "Houston TX area",
        type:     "multifamily",
        balance:  25900000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "Individual borrower. Smaller loan -- equity cure may be achievable. TX SOS entity search recommended.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Alain Villegas",
        title:         "Borrower / Principal",
        firm:          "Private -- TX",
        decisionPower: "Primary decision authority on $25.9M CMBS watchlist loan.",
        background:    "Private TX multifamily investor. $25.9M CMBS watchlist loan. Houston-area Class B/C apartment operator. No confirmed public profile.",
        education: [],
        career: [
          { firm: "Private TX real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Cedar Point Apartments TX", year: "ongoing", role: "Borrower/Owner", amount: 25900000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Angela Magee (San Palmilla)": {
    parentFirm:      "",
    hq:              "Texas (Dallas-Fort Worth or Houston metro)",
    founded:         "",
    aum:             "$40M CMBS loan on San Palmilla TX multifamily.",
    focus:           "Private Texas multifamily investor. San Palmilla name suggests a Hispanic-majority submarket community in DFW or Houston.",
    currentStrategy: "Individual borrower on $40M TX MF CMBS watchlist. At $40M this is large enough to warrant proactive Baker Street engagement. TX SOS entity search plus county deed records. Early watchlist window still open.",
    states:          ["TX"],
    treppEntities:   ["Angela Magee","San Palmilla TX MF"],
    loans: [
      {
        property: "San Palmilla",
        address:  "Texas (DFW or Houston MSA)",
        type:     "multifamily",
        balance:  40000000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "Individual borrower. TX SOS entity search recommended. Early outreach window still open.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Angela Magee",
        title:         "Borrower / Principal",
        firm:          "Private -- TX",
        decisionPower: "Primary decision authority on $40M CMBS watchlist loan.",
        background:    "Private TX multifamily investor. $40M CMBS watchlist. No confirmed public profile.",
        education: [],
        career: [
          { firm: "Private TX real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "San Palmilla TX", year: "ongoing", role: "Borrower/Owner", amount: 40000000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Steven J. Durhman (Burleson Crossing)": {
    parentFirm:      "",
    hq:              "Texas (Burleson TX is Fort Worth MSA, Johnson County)",
    founded:         "",
    aum:             "$34.2M CMBS loan on Burleson Crossing TX retail.",
    focus:           "Private Texas retail investor. Burleson Crossing is a suburban retail corridor in Johnson County, south Fort Worth MSA.",
    currentStrategy: "Individual borrower on $34.2M TX retail CMBS watchlist in Burleson TX. TX retail faces e-commerce and anchor store headwinds. Re-tenanting plan plus servicer communication strategy is the core advisory value-add. Tarrant and Johnson County deed records plus TX SOS entity search recommended.",
    states:          ["TX"],
    treppEntities:   ["Steven J. Durhman","Burleson Crossing TX Retail"],
    loans: [
      {
        property: "Burleson Crossing",
        address:  "Burleson TX (Johnson County, Fort Worth MSA)",
        type:     "retail",
        balance:  34200000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "Individual borrower. TX retail market challenges. Re-tenanting plan and servicer communication strategy is the advisory value-add.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Steven J. Durhman",
        title:         "Borrower / Principal",
        firm:          "Private -- TX",
        decisionPower: "Primary decision authority on $34.2M CMBS watchlist loan.",
        background:    "Private TX retail CRE investor. $34.2M CMBS watchlist loan. Burleson TX suburban retail operator. No confirmed public profile.",
        education: [],
        career: [
          { firm: "Private TX real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Burleson Crossing TX Retail", year: "ongoing", role: "Borrower/Owner", amount: 34200000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Merrilee Business Center LP (Halstead Lofts Lotus)": {
    parentFirm:      "",
    hq:              "Virginia (Northern VA / DC metro)",
    founded:         "",
    aum:             "$85M CMBS loan on Halstead Lofts Lotus VA multifamily. Largest VA MF exposure in this dataset.",
    focus:           "LP-structured borrower on large Northern VA multifamily asset. Halstead Lofts Lotus is likely a lifestyle apartment product in Fairfax, Arlington, or Alexandria submarket.",
    currentStrategy: "LP-structured borrower on $85M VA MF CMBS loan. Northern VA MF market is fundamentally strong (government, defense, and tech employment base). At $85M this warrants proactive outreach even as a monitoring position. Virginia SCC entity search to identify managing GP. Pre-distress advisory positioning is the right approach.",
    states:          ["VA"],
    treppEntities:   ["Merrilee Business Center LP","Halstead Lofts Lotus VA MF"],
    loans: [
      {
        property: "Halstead Lofts Lotus",
        address:  "Northern Virginia (county not confirmed)",
        type:     "multifamily",
        balance:  85000000,
        dscr:     0,
        status:   "watchlist",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "LP structure. Largest VA MF exposure in dataset. Northern VA fundamentals are strong. VA SCC entity search to identify managing GP.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Managing Partner / GP",
        title:         "Managing General Partner",
        firm:          "Merrilee Business Center LP",
        decisionPower: "Controlling decision authority for LP borrower entity.",
        background:    "LP structure requires Virginia SCC entity search to identify the managing GP. Asset is in Northern VA -- likely Fairfax, Arlington, or Alexandria submarket. Entity may have DC-area institutional LP backing given the $85M loan size.",
        education: [],
        career: [
          { firm: "Merrilee Business Center LP", role: "Managing GP", years: "ongoing", note: "VA SCC entity search required." }
        ],
        deals: [
          { property: "Halstead Lofts Lotus VA MF", year: "ongoing", role: "Managing GP/Borrower", amount: 85000000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Radius West Midtown (464 Bishop)": {
    parentFirm:      "",
    hq:              "Georgia (Atlanta West Midtown)",
    founded:         "",
    aum:             "$33.9M CMBS loan on 464 Bishop GA multifamily.",
    focus:           "Atlanta West Midtown multifamily development. 464 Bishop Street is in the highly desirable West Midtown Westside submarket -- Google, Microsoft, and major tech employers nearby.",
    currentStrategy: "Sponsor entity Radius West Midtown on $33.9M GA MF CMBS watchlist at 464 Bishop Street Atlanta. West Midtown Atlanta is one of the strongest MF submarkets in the Southeast. Watchlist status likely reflects above-market debt from 2021-2022 peak acquisition. Georgia SOS entity search to identify managing member.",
    states:          ["GA"],
    treppEntities:   ["Radius West Midtown","464 Bishop GA MF"],
    loans: [
      {
        property: "464 Bishop",
        address:  "464 Bishop Street, Atlanta GA (West Midtown)",
        type:     "multifamily",
        balance:  33900000,
        dscr:     0,
        status:   "watchlist",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "West Midtown Atlanta is a strong submarket. Watchlist likely reflects peak-cycle over-leveraging. GA SOS entity search to identify managing member.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Principal / Managing Member",
        firm:          "Radius West Midtown",
        decisionPower: "Controlling decision authority for Radius West Midtown entity.",
        background:    "Project-specific LLC for the 464 Bishop Atlanta West Midtown property. Georgia SOS search would identify managing member. West Midtown Atlanta submarket is typically associated with boutique developers and local Atlanta operators.",
        education: [],
        career: [
          { firm: "Radius West Midtown", role: "Managing Member", years: "ongoing", note: "GA SOS entity search required." }
        ],
        deals: [
          { property: "464 Bishop Atlanta GA MF", year: "ongoing", role: "Managing Member/Borrower", amount: 33900000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Greg Beckel (The Glenn)": {
    parentFirm:      "",
    hq:              "Florida",
    founded:         "",
    aum:             "$40.7M CMBS loan on The Glenn FL multifamily.",
    focus:           "Private Florida multifamily investor. The Glenn is a FL MF CMBS watchlist asset.",
    currentStrategy: "Individual borrower on $40.7M FL MF CMBS watchlist. FL SOS entity search and county deed records to identify borrowing entity.",
    states:          ["FL"],
    treppEntities:   ["Greg Beckel","The Glenn FL MF"],
    loans: [
      {
        property: "The Glenn",
        address:  "Florida (county not confirmed)",
        type:     "multifamily",
        balance:  40700000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Individual borrower. FL SOS entity search recommended.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Greg Beckel",
        title:         "Borrower / Principal",
        firm:          "Private -- FL",
        decisionPower: "Primary decision authority on $40.7M CMBS watchlist loan.",
        background:    "Private FL multifamily investor. $40.7M CMBS watchlist loan. No confirmed public profile. FL SOS entity search required.",
        education: [],
        career: [
          { firm: "Private FL real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "The Glenn FL", year: "ongoing", role: "Borrower/Owner", amount: 40700000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Dennis Troesh (Renaissance Center)": {
    parentFirm:      "",
    hq:              "Florida",
    founded:         "",
    aum:             "$37.4M CMBS loan on Renaissance Center FL office.",
    focus:           "Private Florida office investor. FL office market faces structural headwinds from remote work adoption post-2020.",
    currentStrategy: "Individual borrower on $37.4M FL office CMBS watchlist. FL office market is among the most challenged sectors post-2020. Early servicer engagement and re-tenanting strategy are critical. FL SOS entity search recommended.",
    states:          ["FL"],
    treppEntities:   ["Dennis Troesh","Renaissance Center FL Office"],
    loans: [
      {
        property: "Renaissance Center",
        address:  "Florida (county not confirmed)",
        type:     "office",
        balance:  37400000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Individual FL office borrower. FL office market faces structural challenges. FL SOS entity search recommended.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Dennis Troesh",
        title:         "Borrower / Principal",
        firm:          "Private -- FL",
        decisionPower: "Primary decision authority on $37.4M CMBS watchlist loan.",
        background:    "Private FL office CRE investor. $37.4M CMBS watchlist loan. No confirmed public profile.",
        education: [],
        career: [
          { firm: "Private FL real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Renaissance Center FL Office", year: "ongoing", role: "Borrower/Owner", amount: 37400000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Hilton Marriott Houston North (Unknown Sponsor)": {
    parentFirm:      "",
    hq:              "Houston TX (sponsor identity not confirmed)",
    founded:         "",
    aum:             "$46.7M CMBS loan on dual-flag Hilton and Marriott Houston North TX hotel.",
    focus:           "Dual-flag hotel (Hilton and Marriott brands) in Houston north suburban market. Hospitality CMBS watchlist asset.",
    currentStrategy: "Unknown sponsor on $46.7M TX hotel CMBS watchlist. Dual-brand format captures both loyalty programs. Houston hotel market has faced headwinds from energy sector volatility and post-COVID demand normalization. Sponsor identity requires Harris County deed research or Trepp loan-level data.",
    states:          ["TX"],
    treppEntities:   ["Hilton Marriott Houston North TX Hotel"],
    loans: [
      {
        property: "Hilton and Marriott Houston North",
        address:  "Houston TX (north suburban)",
        type:     "hotel",
        balance:  46700000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "Dual-flag Hilton/Marriott. Sponsor identity requires Harris County deed research or Trepp loan-level data.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Borrower / Sponsor",
        firm:          "To be identified -- Harris County deed research required",
        decisionPower: "Controlling borrower on $46.7M hotel CMBS watchlist loan.",
        background:    "Identity requires Harris County deed search and Trepp CMBS loan-level data pull. Dual-brand hotel assets of this size in Houston are typically held by regional hospitality operators.",
        education: [],
        career: [
          { firm: "Unknown", role: "Borrower/Owner", years: "ongoing", note: "Harris County TX deed research required." }
        ],
        deals: [
          { property: "Hilton Marriott Houston North TX", year: "ongoing", role: "Borrower/Owner", amount: 46700000, note: "CMBS watchlist. Identity unconfirmed." }
        ],
      }
    ],
  },

  "The Park at Via Rosa (Unknown Sponsor)": {
    parentFirm:      "",
    hq:              "Florida (sponsor identity not confirmed)",
    founded:         "",
    aum:             "$41.9M CMBS loan on The Park at Via Rosa FL multifamily.",
    focus:           "Private Florida multifamily investor. Via Rosa name suggests a Spanish/Latin-themed community common in South and Central Florida.",
    currentStrategy: "Unknown sponsor on $41.9M FL MF CMBS watchlist. Sponsor identity and exact market location require Trepp loan-level data or FL county deed research.",
    states:          ["FL"],
    treppEntities:   ["The Park at Via Rosa FL MF"],
    loans: [
      {
        property: "The Park at Via Rosa",
        address:  "Florida (county not confirmed)",
        type:     "multifamily",
        balance:  41900000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Sponsor identity unconfirmed. FL SOS entity search and county deed research required.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Borrower / Sponsor",
        firm:          "To be identified -- FL county deed research required",
        decisionPower: "Controlling borrower on $41.9M FL MF CMBS watchlist loan.",
        background:    "Unnamed FL MF sponsor. Identity requires Trepp loan-level data or FL county property records research.",
        education: [],
        career: [
          { firm: "Unknown", role: "Borrower/Owner", years: "ongoing", note: "FL county deed research required." }
        ],
        deals: [
          { property: "The Park at Via Rosa FL", year: "ongoing", role: "Borrower/Owner", amount: 41900000, note: "CMBS watchlist. Identity unconfirmed." }
        ],
      }
    ],
  },

  "Uptown Trail TX MF (Unknown Sponsor)": {
    parentFirm:      "",
    hq:              "Texas (Dallas Uptown submarket likely)",
    founded:         "",
    aum:             "$39.7M CMBS loan on Uptown Trail TX multifamily.",
    focus:           "Texas multifamily. Uptown Trail name strongly suggests Dallas Uptown or Katy Trail-adjacent submarket -- one of Dallas's premier urban MF locations.",
    currentStrategy: "Unknown sponsor on $39.7M TX MF CMBS watchlist. Dallas Uptown fundamentals are strong. Watchlist likely reflects peak-cycle over-leveraging from 2021-2022 acquisition. Trepp loan-level data or Dallas County deed search to identify sponsor.",
    states:          ["TX"],
    treppEntities:   ["Uptown Trail TX MF"],
    loans: [
      {
        property: "Uptown Trail",
        address:  "Dallas TX (Uptown submarket likely)",
        type:     "multifamily",
        balance:  39700000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "Dallas Uptown location likely. Strong submarket -- peak-cycle debt most likely cause. Dallas County deed search required.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Borrower / Sponsor",
        firm:          "To be identified -- Dallas County deed research required",
        decisionPower: "Controlling borrower on $39.7M TX MF CMBS watchlist loan.",
        background:    "Unnamed TX MF sponsor. $39.7M CMBS watchlist. Dallas County deed research required.",
        education: [],
        career: [
          { firm: "Unknown", role: "Borrower/Owner", years: "ongoing", note: "Dallas County TX deed research required." }
        ],
        deals: [
          { property: "Uptown Trail TX MF", year: "ongoing", role: "Borrower/Owner", amount: 39700000, note: "CMBS watchlist. Identity unconfirmed." }
        ],
      }
    ],
  },

  "Legends at Lake Mary (Unknown Sponsor)": {
    parentFirm:      "",
    hq:              "Florida (Lake Mary is Seminole County, Orlando MSA north suburbs)",
    founded:         "",
    aum:             "$35.3M CMBS loan on Legends at Lake Mary FL multifamily.",
    focus:           "Florida multifamily. Lake Mary is a Seminole County suburban market in the Orlando MSA north of Orlando on I-4.",
    currentStrategy: "Unknown sponsor on $35.3M FL MF CMBS watchlist in Lake Mary FL. Lake Mary is a solid submarket. Watchlist likely reflects lease-up challenges or supply pressure. Trepp loan-level data plus Seminole County deed search to identify sponsor.",
    states:          ["FL"],
    treppEntities:   ["Legends at Lake Mary FL MF"],
    loans: [
      {
        property: "Legends at Lake Mary",
        address:  "Lake Mary FL (Seminole County)",
        type:     "multifamily",
        balance:  35300000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Seminole County Orlando MSA north. Solid submarket. Sponsor identity requires Trepp plus Seminole County deed research.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Borrower / Sponsor",
        firm:          "To be identified -- Seminole County deed research required",
        decisionPower: "Controlling borrower on $35.3M FL MF CMBS watchlist loan.",
        background:    "Unnamed FL MF sponsor. Seminole County Orlando MSA. Trepp and county deed research required.",
        education: [],
        career: [
          { firm: "Unknown", role: "Borrower/Owner", years: "ongoing", note: "Seminole County FL deed research required." }
        ],
        deals: [
          { property: "Legends at Lake Mary FL", year: "ongoing", role: "Borrower/Owner", amount: 35300000, note: "CMBS watchlist. Identity unconfirmed." }
        ],
      }
    ],
  },

  "Landmark at Grand Parkway (Unknown Sponsor)": {
    parentFirm:      "",
    hq:              "Texas (Grand Parkway is Houston metro outer beltway -- Katy, Sugar Land, or Richmond TX area)",
    founded:         "",
    aum:             "$27.5M CMBS loan on Landmark at Grand Parkway TX multifamily.",
    focus:           "Texas multifamily. Grand Parkway is Houston's outer beltway (TX-99) through major master-planned communities including Cinco Ranch, Riverstone, and Sienna Plantation.",
    currentStrategy: "Unknown sponsor on $27.5M TX MF CMBS watchlist in Grand Parkway corridor. Houston MSA suburban market with strong long-term household formation demand. Trepp loan-level data plus Fort Bend or Harris County deed search to identify sponsor.",
    states:          ["TX"],
    treppEntities:   ["Landmark at Grand Parkway TX MF"],
    loans: [
      {
        property: "Landmark at Grand Parkway",
        address:  "Grand Parkway corridor TX (Fort Bend or Harris County)",
        type:     "multifamily",
        balance:  27500000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "Houston outer beltway corridor. Strong long-term demand. Sponsor identity requires Fort Bend or Harris County deed research.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Borrower / Sponsor",
        firm:          "To be identified -- Fort Bend or Harris County deed research required",
        decisionPower: "Controlling borrower on $27.5M TX MF CMBS watchlist loan.",
        background:    "Unnamed TX MF sponsor. Grand Parkway Houston corridor. Deed research required.",
        education: [],
        career: [
          { firm: "Unknown", role: "Borrower/Owner", years: "ongoing", note: "Fort Bend or Harris County TX deed research required." }
        ],
        deals: [
          { property: "Landmark at Grand Parkway TX", year: "ongoing", role: "Borrower/Owner", amount: 27500000, note: "CMBS watchlist. Identity unconfirmed." }
        ],
      }
    ],
  },

  "Pentagon Center VA Office (Unknown Sponsor)": {
    parentFirm:      "",
    hq:              "Virginia (Arlington VA -- Pentagon City submarket)",
    founded:         "",
    aum:             "$55M CMBS loan on Pentagon Center VA office.",
    focus:           "Virginia office. Pentagon Center is in Arlington VA in the Pentagon City or Crystal City submarket -- one of the most strategically important office corridors in the DC metro. Amazon HQ2 at National Landing is adjacent.",
    currentStrategy: "Unknown sponsor on $55M VA office CMBS watchlist. Pentagon City and Crystal City submarket is undergoing transformation with Amazon HQ2 at National Landing. At $55M this is a significant asset. Arlington County deed search plus Trepp loan-level data to identify sponsor.",
    states:          ["VA"],
    treppEntities:   ["Pentagon Center VA Office"],
    loans: [
      {
        property: "Pentagon Center",
        address:  "Pentagon City or Crystal City, Arlington VA",
        type:     "office",
        balance:  55000000,
        dscr:     0,
        status:   "watchlist",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "Arlington VA Pentagon City/Crystal City submarket. Amazon HQ2 adjacent. Sponsor identity requires Arlington County deed research.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Borrower / Sponsor",
        firm:          "To be identified -- Arlington County deed research required",
        decisionPower: "Controlling borrower on $55M VA office CMBS watchlist loan.",
        background:    "Unnamed VA office sponsor. Arlington VA Pentagon City area. Trepp and Arlington County deed research required.",
        education: [],
        career: [
          { firm: "Unknown", role: "Borrower/Owner", years: "ongoing", note: "Arlington County VA deed research required." }
        ],
        deals: [
          { property: "Pentagon Center VA Office", year: "ongoing", role: "Borrower/Owner", amount: 55000000, note: "CMBS watchlist. Identity unconfirmed." }
        ],
      }
    ],
  },

  "Corners GA MF (Unknown Sponsor)": {
    parentFirm:      "",
    hq:              "Georgia (exact market and sponsor not confirmed)",
    founded:         "",
    aum:             "$27.4M CMBS loan on Corners GA multifamily.",
    focus:           "Georgia multifamily. Smaller watchlist loan. Sponsor identity and market location require Trepp data or GA county deed research.",
    currentStrategy: "Unknown sponsor on $27.4M GA MF CMBS watchlist. Smaller loan size -- equity cure or modification is achievable if fundamentals are intact. Georgia SOS entity search and county deed research required.",
    states:          ["GA"],
    treppEntities:   ["Corners GA MF"],
    loans: [
      {
        property: "Corners",
        address:  "Georgia (county not confirmed)",
        type:     "multifamily",
        balance:  27400000,
        dscr:     0,
        status:   "watchlist",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "Sponsor identity unconfirmed. GA SOS and county deed research required. Smaller loan -- equity cure viable.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Borrower / Sponsor",
        firm:          "To be identified -- GA county deed research required",
        decisionPower: "Controlling borrower on $27.4M GA MF CMBS watchlist loan.",
        background:    "Unnamed GA MF sponsor. Georgia SOS and county deed research required.",
        education: [],
        career: [
          { firm: "Unknown", role: "Borrower/Owner", years: "ongoing", note: "GA county deed research required." }
        ],
        deals: [
          { property: "Corners GA MF", year: "ongoing", role: "Borrower/Owner", amount: 27400000, note: "CMBS watchlist. Identity unconfirmed." }
        ],
      }
    ],
  },

  "The Kingson VA MF (Unknown Sponsor)": {
    parentFirm:      "",
    hq:              "Virginia (Northern VA or DC metro likely)",
    founded:         "",
    aum:             "$48.7M CMBS loan on The Kingson VA multifamily.",
    focus:           "Virginia multifamily. Northern VA MF market has strong fundamentals from government, defense, and tech employment base.",
    currentStrategy: "Unknown sponsor on $48.7M VA MF CMBS loan. Pre-distress monitoring. At $48.7M proactive pre-watchlist outreach is the right approach. VA SCC and county deed research to identify sponsor.",
    states:          ["VA"],
    treppEntities:   ["The Kingson VA MF"],
    loans: [
      {
        property: "The Kingson",
        address:  "Northern Virginia (county not confirmed)",
        type:     "multifamily",
        balance:  48700000,
        dscr:     0,
        status:   "watchlist",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "Sponsor identity unconfirmed. VA SCC and county deed research required.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Borrower / Sponsor",
        firm:          "To be identified -- VA SCC entity research required",
        decisionPower: "Controlling borrower on $48.7M VA MF CMBS loan.",
        background:    "Unnamed VA MF sponsor. Northern VA likely. VA SCC and county deed research required.",
        education: [],
        career: [
          { firm: "Unknown", role: "Borrower/Owner", years: "ongoing", note: "VA SCC entity research required." }
        ],
        deals: [
          { property: "The Kingson VA MF", year: "ongoing", role: "Borrower/Owner", amount: 48700000, note: "CMBS watchlist. Identity unconfirmed." }
        ],
      }
    ],
  },

  "Rebecca J. Pelino (Dominion Towers)": {
    parentFirm:      "",
    hq:              "Virginia",
    founded:         "",
    aum:             "$45.9M CMBS loan on Dominion Towers VA multifamily.",
    focus:           "Private Virginia multifamily investor. Dominion Towers name suggests a high-rise or mid-rise apartment tower product in Northern VA or suburban VA.",
    currentStrategy: "Individual borrower on $45.9M VA MF CMBS loan. VA SCC entity search and county deed records to identify borrowing entity. Tower-style MF in Northern VA is typically institutionally held -- individual borrower at this size warrants proactive advisory approach.",
    states:          ["VA"],
    treppEntities:   ["Rebecca J. Pelino","Dominion Towers VA MF"],
    loans: [
      {
        property: "Dominion Towers",
        address:  "Virginia (county not confirmed)",
        type:     "multifamily",
        balance:  45900000,
        dscr:     0,
        status:   "watchlist",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "Individual borrower. Tower-style MF. VA SCC entity search recommended.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Rebecca J. Pelino",
        title:         "Borrower / Principal",
        firm:          "Private -- VA",
        decisionPower: "Primary decision authority on $45.9M CMBS loan.",
        background:    "Private VA multifamily investor. $45.9M CMBS loan on Dominion Towers. No confirmed public profile. VA SCC entity search required.",
        education: [],
        career: [
          { firm: "Private VA real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Dominion Towers VA MF", year: "ongoing", role: "Borrower/Owner", amount: 45900000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Tuckahoe Creek Apartments VA MF (Unknown Sponsor)": {
    parentFirm:      "",
    hq:              "Virginia (Tuckahoe is a western Richmond suburb -- Henrico County likely)",
    founded:         "",
    aum:             "$34.7M CMBS loan on Tuckahoe Creek Apartments VA multifamily.",
    focus:           "Virginia multifamily. Tuckahoe is a western Richmond VA suburb in Henrico County -- strong demographics, stable market.",
    currentStrategy: "Unknown sponsor on $34.7M VA MF CMBS watchlist. Tuckahoe submarket is fundamentally solid -- watchlist likely reflects a financial or structural issue rather than location. Trepp plus Henrico County deed search to identify sponsor.",
    states:          ["VA"],
    treppEntities:   ["Tuckahoe Creek Apartments VA MF"],
    loans: [
      {
        property: "Tuckahoe Creek Apartments",
        address:  "Tuckahoe VA (Henrico County, Richmond metro)",
        type:     "multifamily",
        balance:  34700000,
        dscr:     0,
        status:   "watchlist",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "Richmond VA western suburb. Solid submarket. Sponsor identity requires Henrico County deed research.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Borrower / Sponsor",
        firm:          "To be identified -- Henrico County deed research required",
        decisionPower: "Controlling borrower on $34.7M VA MF CMBS watchlist loan.",
        background:    "Unnamed VA MF sponsor. Likely Henrico County Richmond VA area. Deed research required.",
        education: [],
        career: [
          { firm: "Unknown", role: "Borrower/Owner", years: "ongoing", note: "Henrico County VA deed research required." }
        ],
        deals: [
          { property: "Tuckahoe Creek Apartments VA", year: "ongoing", role: "Borrower/Owner", amount: 34700000, note: "CMBS watchlist. Identity unconfirmed." }
        ],
      }
    ],
  },

  "Doug Miller (Broadmoor Apartments)": {
    parentFirm:      "",
    hq:              "Virginia",
    founded:         "",
    aum:             "$32.2M CMBS loan on Broadmoor Apartments VA multifamily.",
    focus:           "Private Virginia multifamily investor. Broadmoor Apartments is a VA MF CMBS watchlist asset.",
    currentStrategy: "Individual borrower on $32.2M VA MF CMBS watchlist. VA SCC entity search and county deed records to identify borrowing entity.",
    states:          ["VA"],
    treppEntities:   ["Doug Miller","Broadmoor Apartments VA MF"],
    loans: [
      {
        property: "Broadmoor Apartments",
        address:  "Virginia (county not confirmed)",
        type:     "multifamily",
        balance:  32200000,
        dscr:     0,
        status:   "watchlist",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "Individual borrower. VA SCC entity search recommended.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Doug Miller",
        title:         "Borrower / Principal",
        firm:          "Private -- VA",
        decisionPower: "Primary decision authority on $32.2M CMBS watchlist loan.",
        background:    "Private VA multifamily investor. $32.2M CMBS watchlist loan. No confirmed public profile.",
        education: [],
        career: [
          { firm: "Private VA real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Broadmoor Apartments VA", year: "ongoing", role: "Borrower/Owner", amount: 32200000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "BRE Jupiter 1 LLC / BREIT Industrial": {
    parentFirm:      "Blackstone Real Estate Income Trust, Inc. (BREIT) / Blackstone Inc. (NYSE: BX)",
    hq:              "345 Park Avenue, New York, NY 10154 (Blackstone); Sandy, UT (BREIT operations via BX REIT Advisors LLC)",
    founded:         "BREIT founded 2015; Jupiter 12 portfolio acquired September 26, 2019 from GLP Pte Ltd",
    aum:             "$130B+ BREIT gross AUM as of late 2025; industrial = ~22-24% of portfolio; Jupiter 12 = 64M SF acquired for ~$5.3B (BREIT portion of $18.7B total GLP transaction alongside BREP funds); BRE Jupiter entities represent individual TX warehouse SPEs within this portfolio",
    focus:           "Core+ income-oriented last-mile industrial / logistics warehouses; infill Dallas-Fort Worth, Chicago, Atlanta, central PA, south/central FL",
    currentStrategy: "BRE Jupiter 1 LLC and related SPEs (BRE Jupiter B East TX Owner LP, etc.) hold individual TX properties within BREIT's legacy Jupiter 12 industrial portfolio. The ~21 TX deals / $64.7M in Trepp Watchlist are most likely attributable to floating-rate covenant monitoring, loan maturity triggers, or servicer compliance reporting -- not fundamental distress at BREIT scale. BREIT refinanced its Jupiter sub-portfolio with a $1B CMBS package in 2023 (Goldman, Deutsche/German American Capital, Barclays, JPMorgan) covering 59 properties across 13 states. Apollo Global announced acquisition of Bridge Investment Group (separate entity) in 2025. Key advisors: BX REIT Advisors LLC. Property manager: Prologis and other industrial PM firms on individual assets.",
    states:          ["TX","IL","PA","FL","GA","CA","NJ","OH","MD","IN"],
    treppEntities:   ["BRE JUPITER 1 LLC","BRE JUPITER B EAST TX OWNER LP","BRE JUPITER B EAST TX OWNER LLC","15500 WELLS PORT DRIVE TX INDUSTRIAL"],
    loans: [
      {
        property: "Jupiter 12 TX Industrial Portfolio (BRE Jupiter SPEs)",
        address:  "Various TX (Dallas-Fort Worth and East TX)",
        type:     "industrial",
        balance:  64700000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "~21 TX SPE deals / $64.7M total on Trepp Watchlist. Floating-rate covenant monitoring. 2023 CMBS refi package (Goldman/Deutsche/Barclays/JPMorgan) covers broader Jupiter portfolio.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "A.J. Agarwal",
        title:         "Co-President, BREIT; Senior Managing Director, Blackstone Real Estate",
        firm:          "Blackstone / BREIT",
        decisionPower: "Re-appointed Co-President of BREIT March 2025. Oversees all BREIT portfolio strategy including Jupiter industrial assets. All financing and major asset management decisions require his approval.",
        background:    "Long-tenured Blackstone real estate professional. Served as original Co-President of BREIT 2015-2023 overseeing BREIT's growth from inception to $100B+ NAV. Moved to broader Blackstone real estate roles 2023-2025. Re-appointed Co-President March 2025. Leads Global Core+ strategy. Extensive LP relationships with sovereign wealth funds, pension funds, and insurance companies globally. Oversaw BREIT's aggressive industrial thesis including Jupiter 12 acquisition.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Blackstone Real Estate / BREIT -- Co-President (2015-2023; re-appointed March 2025)" },
          { firm: "", role: "", years: "", note: "Blackstone Real Estate -- Global Core+ Business, Senior Managing Director (ongoing)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Jupiter 12 Industrial Portfolio -- $5.3B BREIT-share acquisition from GLP Pte Ltd, Sept 2019 (largest industrial RE deal in history at time of close)" },
          { property: "", year: "", role: "", amount: 0, note: "BREIT industrial $1B CMBS refinancing (Goldman, Deutsche, Barclays, JPMorgan, 2023), 59 properties / 13 states" },
          { property: "", year: "", role: "", amount: 0, note: "BREIT scaled from $0 to $130B+ AUM under his watch (2015-2025)" }
        ],
      },
      {
        rank:          2,
        name:          "Jonathan Gray",
        title:         "President & Chief Operating Officer, Blackstone Inc.",
        firm:          "Blackstone Inc. (NYSE: BX)",
        decisionPower: "Ultimate strategic oversight of all Blackstone Real Estate including BREIT. Chairs real estate investment committee. Personally built Blackstone Real Estate from ~$5B to $300B+ AUM since joining in 1992. Jupiter 12 was emblematic of his early 2015-2016 industrial conviction thesis.",
        background:    "BA University of Pennsylvania, summa cum laude, Phi Beta Kappa. Joined Blackstone 1992 in M&A and private equity. Became Head of Real Estate, built it to the world's largest commercial real estate platform. Appointed President/COO 2018. Key deal history: Hilton Hotels ($26B buyout 2007), EOP ($39B 2007), GLP/Jupiter 12 ($18.7B 2019), QTS data centers ($10B 2021). Co-authored Blackstone's industrial/logistics thesis with public statements starting 2015-2016.",
        education: [
          { school: "University of Pennsylvania -- BA summa cum laude, Phi Beta Kappa", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "", role: "", years: "", note: "Blackstone -- Analyst/Associate, M&A and Private Equity (1992)" },
          { firm: "", role: "", years: "", note: "Blackstone Real Estate -- Various roles, ultimately Head of Real Estate (grew from $5B to $300B AUM)" },
          { firm: "", role: "", years: "", note: "Blackstone Inc. -- President & COO (2018-present)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "GLP / Jupiter 12 -- $18.7B total platform deal (2019)" },
          { property: "", year: "", role: "", amount: 0, note: "Hilton Hotels -- $26B buyout and restructuring (2007-2018)" },
          { property: "", year: "", role: "", amount: 0, note: "QTS Realty -- $10B data center take-private (2021)" }
        ],
      }
    ],
  },

  "John E. Gross / Newcastle Properties LLC": {
    parentFirm:      "Newcastle Properties, LLC (private); co-owned with James D. Devine; related entity: NORCOR Investments, Inc.",
    hq:              "Chicago, IL (Midwest)",
    founded:         "Newcastle Properties LLC founded 1989 by John E. Gross and James D. Devine; preceded by SIDCOR (Superior Investment and Development Corporation) co-founded by Gross and Devine pre-1989",
    aum:             "2,800,000+ SF as of current; historically peaked at 3,800,000+ SF; retail, multifamily, hospitality, office across Midwest and VA",
    focus:           "Midwest retail (anchor/NNN), multifamily, hospitality, office; tenant base includes Walmart, Home Depot, Walgreens, CVS, Jewel-Albertsons, McDonald's, Portillo's, Chipotle, Starbucks, Planet Fitness, Dollar Tree, Wingstop, among others; also VA multifamily",
    currentStrategy: "5 Trepp deals across IL and VA / $16.6M total (SS + WL). Walgreens Oak Brook IL ($4M) is the SS entry -- NNN retail single-tenant CMBS. Newcastle portfolio is largely private capital financed. Gross and Devine both have deep Arthur Rubloff & Co. pedigrees (Chicago's legendary CRE firm). Portfolio has been managed and grown since 1989 with no institutional backing disclosed publicly -- Gross and Devine are co-owners across all assets. Portfolio diversified from initial retail focus to include multifamily (VA), hospitality (Hampton Inn), and office. Sean Devine (James's son) joined Newcastle as acquisitions officer in 2016 with prior experience at Centerpoint Properties, RREEF, and Brauvin Real Estate.",
    states:          ["IL","VA"],
    treppEntities:   ["WALGREENS OAK BROOK IL SS","NEWCASTLE PROPERTIES LLC","JOHN E GROSS VA MF","JOHN E GROSS IL RETAIL"],
    loans: [
      {
        property: "Walgreens Oak Brook IL",
        address:  "Oak Brook IL",
        type:     "retail",
        balance:  4000000,
        dscr:     0,
        status:   "special-servicing",
        state:    "IL",
        maturity: "",
        servicer: "",
        note:     "NNN single-tenant retail SS. Brian Sherlock (UBS CMBS) primary contact.",
      },
      {
        property: "VA Multifamily Portfolio (WL)",
        address:  "Virginia",
        type:     "multifamily",
        balance:  12600000,
        dscr:     0,
        status:   "watchlist",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "Remaining ~4 deals / $12.6M WL in VA. Combined 5 deals / $16.6M total.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "John E. Gross",
        title:         "Chief Executive Officer & Co-Founder, Newcastle Properties LLC",
        firm:          "Newcastle Properties, LLC / NORCOR Investments, Inc.",
        decisionPower: "Co-CEO and co-owner. Full authority on all property decisions, financing, and workout negotiations. Primary borrower/guarantor on all Trepp CMBS entities. Manages the Walgreens Oak Brook IL NNN retail SS asset.",
        background:    "Chicago CRE veteran with 35+ years of experience. Started career at Arthur Rubloff & Company -- the legendary Chicago real estate brokerage firm that produced a generation of Midwest CRE leaders. Co-founded SIDCOR (Superior Investment and Development Corporation) with Devine, then pivoted to found Newcastle Properties in 1989. Grew portfolio from 0 to 3.8M SF at peak; currently managing 2.8M+ SF across retail (Walmart, Home Depot, Walgreens, CVS, Jewel, etc.), multifamily, hospitality, and office. Also owns/managed Hampton Inn branded hospitality. VA multifamily represents geographic diversification from Midwest base.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Arthur Rubloff & Company -- commercial real estate broker (Chicago, 1970s-1980s career start)" },
          { firm: "", role: "", years: "", note: "SIDCOR (Superior Investment and Development Corporation) -- Co-Founder (pre-1989)" },
          { firm: "", role: "", years: "", note: "Newcastle Properties, LLC -- CEO & Co-Founder (1989-present)" },
          { firm: "", role: "", years: "", note: "NORCOR Investments, Inc. -- Co-Founder (related full-service CRE investment company)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Walgreens Oak Brook IL -- $4M NNN retail, SS CMBS (Trepp)" },
          { property: "", year: "", role: "", amount: 0, note: "Newcastle portfolio peak -- 3.8M+ SF Midwest retail, MF, hospitality, office" },
          { property: "", year: "", role: "", amount: 0, note: "Current portfolio -- 2.8M+ SF; tenants include Walmart, Home Depot, Walgreens, CVS, Jewel, McDonald's, Portillo's, Chipotle, Starbucks, Planet Fitness, Dollar Tree, Hampton Inn, others" },
          { property: "", year: "", role: "", amount: 0, note: "VA multifamily portfolio -- multiple WL entries (Trepp)" }
        ],
      },
      {
        rank:          2,
        name:          "James D. Devine",
        title:         "Co-Founder, Principal; President of NORCOR Investments, Inc.",
        firm:          "Newcastle Properties, LLC / NORCOR Investments, Inc.",
        decisionPower: "Co-owner and co-principal. Former Illinois Bar member and licensed real estate broker. Co-manages NORCOR Investments. Involved in all major portfolio decisions as co-owner since 1989.",
        background:    "Arthur Rubloff & Company origin alongside Gross. BS Business Administration, Marquette University. JD, Loyola University School of Law. Former Illinois Bar member. Former ICSC, ABA, NAR, Chicago Real Estate Board member. Recipient of Marquette Alumni of the Year 2010. Previously President of SIDCOR before co-founding Newcastle. Served on The Salvation Army Chicago Metro Division Real Estate Committee. Founding Member, Center for Real Estate at Marquette University. Son Sean Devine joined Newcastle 2016 with acquisitions background from Centerpoint Properties Trust, RREEF, and Brauvin Real Estate.",
        education: [
          { school: "Marquette University -- BS Business Administration", degree: "", year: "", note: "" },
          { school: "Loyola University School of Law -- JD", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "", role: "", years: "", note: "Arthur Rubloff & Company -- commercial real estate (career start, 1970s-1980s)" },
          { firm: "", role: "", years: "", note: "SIDCOR (Superior Investment and Development Corporation) -- President & Co-Founder (before 1989)" },
          { firm: "", role: "", years: "", note: "Newcastle Properties / NORCOR Investments -- Co-Founder & Principal (1989-present)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Co-managed Newcastle portfolio from inception through 3.8M+ SF peak and current 2.8M+ SF base" }
        ],
      }
    ],
  },

  "Steven DeFrancis / Cortland Partners": {
    parentFirm:      "Cortland Partners, LLC (Cortland) -- private; Atlanta GA",
    hq:              "3424 Peachtree Rd NE, Suite 2900, Atlanta, GA 30326",
    founded:         "2005 by Steven DeFrancis as development firm; pivoted to acquisition/value-add 2008-2010; vertically integrated by 2013",
    aum:             "$8B+ gross real estate value (Gross Real Estate Value per Jan 2026); 80,000+ apartment homes / 250+ communities across US (primarily Southeast, Midwest, Texas) and UK; 2,600+ associates US and UK",
    focus:           "Vertically integrated multifamily: value-add acquisition, core-plus, and ground-up development; in-house construction, design, property management, and asset management; Texas (largest owner in DFW and all of Texas); also Southeast, Midwest, UK build-to-rent",
    currentStrategy: "Steven DeFrancis appears as borrower/guarantor on 3 TX deals / $44.3M in Trepp (possibly from Pure Multi-Family REIT TX assets acquired in $1.2B transaction, Sept 2019, or legacy TX CMBS deals). Cortland typically uses Freddie Mac/Fannie Mae agency debt or private balance-sheet financing -- CMBS conduit exposure at $44.3M suggests smaller TX deal vintage (pre-2019 acquisition era, or Pure Multi-Family legacy CMBS loans assumed at closing). Cortland's Pure Multi-Family acquisition made it the largest apartment owner in DFW (7,085 units, $340M Walker Dunlop/Deutsche Bank financing). Cortland completed $1.6B acquisition of Elme Communities (DC metro VA MF portfolio, 5,800 units) announced 2025. Active internationally via LIV Group UK BTR platform. Brad Brown is Chief Acquisitions Officer; David Dickson is CFO; Mike Altman is CIO.",
    states:          ["TX","GA","FL","NC","OH","CO","VA","TN","IL","UK"],
    treppEntities:   ["STEVEN DEFRANCIS TX MF","CORTLAND PARTNERS TX CMBS","PURE MULTIFAMILY TX LEGACY CMBS"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Steven DeFrancis",
        title:         "Founder & CEO, Cortland Partners",
        firm:          "Cortland Partners, LLC",
        decisionPower: "Full strategic authority. Founded Cortland 2005 and built it to 80,000+ units. Decision-maker on all major acquisitions, dispositions, and financing matters.",
        background:    "BS Real Estate, University of Georgia Terry College of Business. Started career as President and Owner of Capitol Realty (family-owned RE brokerage and PM firm, Atlanta) upon graduation. Co-founded Capitol Development Group 1995 -- developed 5,000+ affordable/workforce MF units in GA and FL using LIHTC programs. Founded Cortland 2005 initially as in-town mixed-use/MF development firm in Atlanta. Pivoted to value-add acquisition during 2008 downturn. Insourced construction (2013), design, property management, and asset management to become sole institutionally-scaled vertically integrated value-add platform. Key milestones: $1.2B all-cash acquisition of Pure Multi-Family REIT (Canadian-listed, 7,085 TX/AZ units, Sept 2019 -- made Cortland largest DFW owner); acquisition of LIV Group (UK BTR, Aug 2019); $1.6B Elme Communities acquisition (DC metro VA MF, 5,800 units, announced 2025). Member: Buckhead Coalition, Atlanta Neighborhood Development Partnership (board), Real Estate Roundtable, Urban Land Institute, NMHC. NMHC Top 50 Owner and Manager.",
        education: [
          { school: "University of Georgia Terry College of Business -- BS Real Estate", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "", role: "", years: "", note: "Capitol Realty -- President and Owner (Atlanta; family firm, career start post-graduation)" },
          { firm: "", role: "", years: "", note: "Capitol Development Group -- Co-Founder (1995-2005; 5,000+ LIHTC units in GA and FL)" },
          { firm: "", role: "", years: "", note: "Cortland Partners -- Founder & CEO (2005-present; grew to 80,000+ units)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Pure Multi-Family REIT -- $1.2B all-cash acquisition (Sept 2019; 7,085 TX/AZ units; made Cortland largest DFW owner); $340M Walker Dunlop / Deutsche Bank refi" },
          { property: "", year: "", role: "", amount: 0, note: "LIV Group UK BTR -- acquisition (Aug 2019); international BTR platform" },
          { property: "", year: "", role: "", amount: 0, note: "Elme Communities DC metro VA MF -- $1.6B (5,800 units, announced 2025)" },
          { property: "", year: "", role: "", amount: 0, note: "3 TX CMBS deals / $44.3M (Trepp; likely Pure Multi-Family legacy conduit loans assumed 2019)" },
          { property: "", year: "", role: "", amount: 0, note: "Total: $8B+ GRV, 80,000+ units, 250+ communities across US and UK" }
        ],
      },
      {
        rank:          2,
        name:          "Mike Altman",
        title:         "Chief Investment Officer",
        firm:          "Cortland Partners, LLC",
        decisionPower: "CIO since 2013. Directs all investment strategy with focus on asset management and capital raising. Oversaw acquisition of 65,000+ apartment units during his tenure. Led financing on Pure Multi-Family REIT acquisition.",
        background:    "Grew up in Chicago suburbs. BS Environmental Science, University of Georgia (UGA). MS Real Estate, Georgia State University (2005-2010). Joined Cortland 2007 as development associate -- first real job involved pouring concrete on Cortland construction sites. Made EVP of Investments 2010 as company pivoted to value-add. CIO since 2013. Harvard Business School Program for Leadership Development (executive education). Licensed real estate broker. Quoted publicly: 'I think serving the customer first and letting the capital and investors follow is what has ultimately allowed us to grow so much.' Key relationships: Walker Dunlop (Aaron Appel, Keith Kurland, Jonathan Schwartz arranged Pure Multi-Family refi), Deutsche Bank (co-lender), Ashcroft Capital (JV partner per LinkedIn).",
        education: [
          { school: "University of Georgia -- BS Environmental Science", degree: "", year: "", note: "" },
          { school: "Georgia State University -- MS Real Estate (2005-2010)", degree: "", year: "", note: "" },
          { school: "Harvard Business School -- Program for Leadership Development (PLD, executive education)", degree: "", year: "", note: "" },
          { school: "Hammond Development, Inc. -- Development Manager (early career, internship/first job)", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "", role: "", years: "", note: "Hammond Development, Inc. -- Development Manager (early career)" },
          { firm: "", role: "", years: "", note: "Cortland Partners -- Development Associate (2007); EVP Investments (2010); CIO (2013-present)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Oversaw acquisition of 65,000+ apartment units during tenure at Cortland" },
          { property: "", year: "", role: "", amount: 0, note: "Led financing on Pure Multi-Family REIT $340M refi (Walker Dunlop / Deutsche Bank)" },
          { property: "", year: "", role: "", amount: 0, note: "Ashcroft Capital JV -- programmatic venture expected to acquire $1.4B (per LinkedIn)" }
        ],
      }
    ],
  },

  "Ellie Perlman / Blue Lake Capital": {
    parentFirm:      "Blue Lake Capital LLC (private); founder-led; HQ Los Angeles, CA",
    hq:              "Los Angeles, CA",
    founded:         "2017 (est.) as Blue Lake Capital; Ellie Perlman's first deal approx. 2017-2018",
    aum:             "$1B+ total multifamily transactions completed; 4,100+ units owned and operated; $750M+ AUM at peak per public statements; Inc. 5000 fastest-growing (2023 and 2024)",
    focus:           "Value-add retail syndication multifamily; accredited investors; TX, FL, GA; specific focus on 2010s-era institutional quality assets with under-market rents; REV Fund ($100M joint fund with Vive Funds/Veena Jetti)",
    currentStrategy: "Waterstone Apartments (1851 Satellite Blvd, Buford GA, Gwinnett County) = $62M GA MF Trepp entry. 296-unit property built 2011; acquired Nov 24, 2021 for $81.25M via REV Fund (Blue Lake + Vive Funds joint venture). Business plan: interior renovation + amenity additions + rent growth targeting under-market gap. Blue Lake has exited prior GA deals at strong IRRs (Element 41 Marietta GA 494-unit sold 2022 at ~45% net IRR per press; Legacy Portfolio Gainesville/Norcross GA sold 2021 at profit). Perlman targets 30%+ net IRRs on exits. Waterstone is likely the largest single Trepp entry for Blue Lake given the 2021 acquisition price. Current market context: GA Atlanta-metro rent growth has softened in 2023-2025 as new supply hits market -- could affect renovation ROI timeline and loan performance.",
    states:          ["GA","TX","FL","NC"],
    treppEntities:   ["WATERSTONE BUFORD GA","BLUE LAKE CAPITAL LLC","REV FUND WATERSTONE"],
    loans: [
      {
        property: "Waterstone Apartments",
        address:  "1851 Satellite Blvd, Buford GA",
        type:     "multifamily",
        balance:  62000000,
        dscr:     0,
        status:   "watchlist",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "296 units built 2011. Acquired Nov 2021 for $81.25M via REV Fund (Blue Lake + Vive Funds JV). Value-add lease-up thesis.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Ellie Perlman",
        title:         "Founder & CEO",
        firm:          "Blue Lake Capital LLC",
        decisionPower: "Full authority over all Blue Lake Capital acquisitions, dispositions, and financing. Primary contact for all investor and lender relationships.",
        background:    "Israeli-American entrepreneur. Started career in Israel as a commercial real estate lawyer for Israel's largest development company (YH Dimri or similar). Then served as property manager for one of Israel's most prominent oil and gas companies overseeing $100M+ property portfolio. Immigrated to US. MBA from MIT Sloan School of Management. Bachelor's and Master's in Law from Bar-Ilan University Israel. Founded Blue Lake Capital (named with reference to a serene, clear body of water suggesting stability). Grew from zero to 4,100+ units and $1B+ in transactions. Built REV Fund ($100M) as 50/50 JV with Vive Funds (Veena Jetti) in 2021. 20+ years of real estate, law, and PM experience. Forbes contributor. Podcast host (REady2Scale). Named ApartmentBuildings.com Dealmaker of Year 2025 by Connect CRE. Inc. 5000 fastest-growing 2023 and 2024.",
        education: [
          { school: "Bar-Ilan University, Israel -- Bachelor's and Master's in Law (LLB / LLM)", degree: "", year: "", note: "" },
          { school: "MIT Sloan School of Management -- MBA", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "", role: "", years: "", note: "Israel's largest development company -- Commercial real estate lawyer (career start, Israel)" },
          { firm: "", role: "", years: "", note: "Israel's prominent oil and gas company -- Property Manager (oversaw $100M+ portfolio)" },
          { firm: "", role: "", years: "", note: "Blue Lake Capital -- Founder & CEO (2017-present; grew to 4,100+ units / $1B+ in transactions)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Waterstone Buford GA -- 296 units, acquired Nov 2021 for $81.25M via REV Fund ($62M Trepp entry)" },
          { property: "", year: "", role: "", amount: 0, note: "Element 41 Marietta GA -- 494 units, sold 2022 at ~45% net IRR" },
          { property: "", year: "", role: "", amount: 0, note: "Legacy Portfolio (Legacy at Lanier Gainesville + Legacy at Norcross GA) -- sold 2021 at profit" },
          { property: "", year: "", role: "", amount: 0, note: "Blue Lake total -- $1B+ in multifamily transactions, 4,100+ units, 30%+ net IRRs on exits" }
        ],
      },
      {
        rank:          2,
        name:          "Jeannette Robinson",
        title:         "Director of Investor Relations",
        firm:          "Blue Lake Capital LLC",
        decisionPower: "Manages all LP investor relationships, reporting, and communications. Most accessible Blue Lake contact for initial Baker Street introductions.",
        background:    "Director of Investor Relations at Blue Lake Capital. Manages K-1 delivery, quarterly reporting, and new investor onboarding across all Blue Lake funds including REV Fund (Waterstone GA). Most accessible day-to-day Blue Lake operational contact.",
        education: [],
        career: [
          { firm: "Blue Lake Capital LLC", role: "Director of Investor Relations", years: "Current", note: "LP relations across all funds including REV Fund (Waterstone GA)" }
        ],
        deals: [],
      }
    ],
  },

  "Elandis Multifamily / Libra Group": {
    parentFirm:      "Libra Group (privately held; George Logothetis, Chairman/CEO); JV with M&G Investments (UK) since Sept 2020",
    hq:              "1500 Ponce de Leon Blvd, Coral Gables, FL 33134",
    founded:         "US operations since ~2009 as FCA Group; rebranded Elandis 2016",
    aum:             "~4,200 multifamily units in Southeast US; M&G JV initial commitment $50M (2020); total AUM est. $350M+",
    focus:           "Value-add workforce multifamily Class B/C, Southeast Sunbelt: FL, TX, AL, GA; infill and suburban communities; typical basis under $100K/door",
    currentStrategy: "4 FL Trepp deals / $35M total on Watchlist. Vertically integrated with in-house property management. JV with M&G Investments (UK-based $700B+ global AUM) launched Sept 2020 with $50M equity for Southeast workforce housing. Target markets: Birmingham AL, Daytona Beach, Orlando FL, Houston TX. In 2022, acquired 9 communities (2,071 units) in Houston and Central FL via M&G JV. FCA Group began 2009 in FL with distressed MF acquisitions during Great Recession. Sold Tampa portfolio (Grand Pavilion, Oaks at Granada) 2015-2016, proceeds redeployed to TX and expanded Southeast. Original HQ property at 1500 Ponce de Leon Blvd Coral Gables acquired 2012 (6,000 SF former bank branch, fully renovated).",
    states:          ["FL","TX","AL","GA"],
    treppEntities:   ["ELANDIS MULTIFAMILY FL","FCA GROUP REAL ESTATE"],
    loans: [
      {
        property: "FL Multifamily Portfolio (4 assets)",
        address:  "Florida",
        type:     "multifamily",
        balance:  35000000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "4 FL deals / $35M total on Trepp Watchlist. Class B/C workforce MF. M&G JV assets.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Frank Espinosa",
        title:         "Chief Executive Officer, Elandis International Holdings",
        firm:          "Elandis International Holdings (Coral Gables, FL)",
        decisionPower: "Full operational and strategic authority over all Elandis US real estate activities. Primary signatory on all debt and equity transactions. Primary contact for Trepp WL loan discussions.",
        background:    "Joined Libra Capital (Libra Group investment arm) 1999 via shipping industry connection -- was VP of fleet operations for a shipping company with commercial ties to Libra's global transportation business. Transitioned to real estate investment side 2006 to design and execute US real estate strategy for what was then FCA Group. Has grown platform from zero to 4,200 units over 15+ years of active investment. Deep FL, TX, and Southeast multifamily operator network. Speaks English and Spanish. Based Coral Gables FL.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Shipping company -- VP Fleet Operations (late 1990s; contact with Libra global transportation)" },
          { firm: "", role: "", years: "", note: "Libra Capital -- Investment Management Team (1999-2006; designed US RE strategy for FCA/Elandis)" },
          { firm: "", role: "", years: "", note: "FCA Group / Elandis -- CEO (2006-present)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Valencia at Spring Branch Houston TX -- 228 units, sold Feb 2019 for $18M" },
          { property: "", year: "", role: "", amount: 0, note: "Amber Ridge Las Vegas NV -- 316 units, acquired and sold 2018" },
          { property: "", year: "", role: "", amount: 0, note: "M&G JV -- 9 communities / 2,071 units Houston + Central FL (2022)" },
          { property: "", year: "", role: "", amount: 0, note: "Birmingham AL Crestwood Green -- 270 units, Freddie Mac $17M+ loan" },
          { property: "", year: "", role: "", amount: 0, note: "4 FL WL deals / $35M total (Trepp)" }
        ],
      },
      {
        rank:          2,
        name:          "George Logothetis",
        title:         "Chairman & CEO, Libra Group",
        firm:          "Libra Group (New York, NY / London, UK)",
        decisionPower: "Approves major capital allocation for Elandis as parent company chairman. Sets overall Libra investment strategy across 6 business segments (aviation, energy, hospitality, real estate, shipping, diversified investments).",
        background:    "Heads Libra Group, a global privately-held conglomerate active in 35+ countries. Based New York and London. Greek-American family heritage. Yale connections. Reported net worth $1B+. Libra Group real estate interests span 20+ countries. Champions Libra Philanthropies social impact. Personally endorsed the M&G JV launch Sept 2020.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Libra Group -- Chairman & CEO (founded/built global diversified conglomerate)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Elandis / M&G Investments JV -- $50M+ equity commitment (Sept 2020)" },
          { property: "", year: "", role: "", amount: 0, note: "Libra Group real estate -- 20+ countries" }
        ],
      }
    ],
  },

  "Avanath Capital Management": {
    parentFirm:      "Avanath Capital Management LLC (independent SEC-registered investment adviser)",
    hq:              "18881 Von Karman Ave, Suite 800, Irvine, CA 92612",
    founded:         "2008 by Daryl J. Carter",
    aum:             "$4B+ portfolio; 16,000+ apartment units across 15 states as of 2024; multiple institutional funds (Fund I-IV+); Fund IV raised $450M+",
    focus:           "Affordable and workforce multifamily; major urban and suburban markets; institutional fund manager for pension funds, sovereign wealth, endowments globally; Reg A / Section 8 / LIHTC / mixed-income",
    currentStrategy: "Scotland Yard (Chicago IL, 156 units, Buena Park neighborhood) acquired Aug 2019 for $28.3M; $17.3M WL CMBS. Built in two phases 1915 and 1917; renovated 1982. Avanath simultaneously acquired Renaissance North Chicago (59 units, $15.4M). Total IL holdings now 1,319 units: also Lincoln Park Plaza 256 units ($119M, 2023), Acclaim at Hinsdale Lake 582 units (2018). Launched Brighthaven (JV with BRIDGE Housing) for third-party PM. Named Urban Alliance of Greater Chicago Job Partner of Year 2024-2025. Scotland Yard WL likely reflects servicer monitoring on the 2019 acquisition CMBS loan rather than fundamental asset distress -- Avanath is a sophisticated institutional operator with a strong balance sheet and active acquisitions program.",
    states:          ["IL","CA","DC","FL","MD","MA","MI","NJ","NY","OH","OR","TX","WA"],
    treppEntities:   ["AVANATH SCOTLAND YARD IL","SCOTLAND YARD APARTMENTS CHICAGO IL"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Daryl J. Carter",
        title:         "Founder, Chairman & CEO",
        firm:          "Avanath Capital Management LLC",
        decisionPower: "Full strategic authority. Decision-maker on all major acquisitions, dispositions, and financing. Public face and spokesman for affordable/workforce housing mission. Named company after children Ava and Nathan ('Avanath').",
        background:    "Grew up Detroit; father factory worker, mother a maid. BA Architecture, University of Michigan. Dual master's from MIT: MBA and M.Arch (1981/1983). Started career 1981 at Continental Illinois Bank Chicago (real estate commercial lending) -- met David Neithercut (later EQR CEO), Peter Donovan (CBRE), Mary Ann King (Moran), Don Smith (Jupiter). Co-founded Capri Capital with Quinton Primo III (~1990 Chicago) -- grew to $8B AUM in institutional RE PE, including substantial national affordable housing portfolio. Capri Capital Finance acquired by Centerline Capital Group (Related Companies affiliate); Carter served as Executive MD. Founded Avanath 2008 during Great Recession with thesis that affordable/workforce housing was recession-resistant. Early losses but navigated through to $4B+ AUM. ULI Global Board member. Silver Bay Realty Trust Board (2013+). 43 years total CRE experience.",
        education: [
          { school: "University of Michigan -- BA Architecture", degree: "", year: "", note: "" },
          { school: "MIT -- Master of Architecture", degree: "", year: "", note: "" },
          { school: "MIT -- MBA", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "", role: "", years: "", note: "Continental Illinois Bank Chicago -- Real Estate Commercial Lending (1981-late 1980s)" },
          { firm: "", role: "", years: "", note: "Capri Capital (co-founded with Quinton Primo III) -- Co-Chairman (grew to $8B AUM; later acquired by Centerline)" },
          { firm: "", role: "", years: "", note: "Centerline Capital Group (Related Companies affiliate) -- Executive Managing Director" },
          { firm: "", role: "", years: "", note: "Avanath Capital Management -- Founder, Chairman, CEO (2008-present)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Scotland Yard Chicago IL -- 156 units, Buena Park, Aug 2019, $28.3M ($17.3M WL CMBS)" },
          { property: "", year: "", role: "", amount: 0, note: "Renaissance North Chicago IL -- 59 units, Aug 2019, $15.4M" },
          { property: "", year: "", role: "", amount: 0, note: "Lincoln Park Plaza Chicago IL -- 256 units, 2023, $119M" },
          { property: "", year: "", role: "", amount: 0, note: "Acclaim at Hinsdale Lake IL -- 582 units, 2018" },
          { property: "", year: "", role: "", amount: 0, note: "Avanath national portfolio -- $4B+ / 16,000+ units / 15 states" }
        ],
      },
      {
        rank:          2,
        name:          "John Williams",
        title:         "President & Chief Investment Officer",
        firm:          "Avanath Capital Management LLC",
        decisionPower: "Day-to-day acquisition decisions and investment committee. Oversees portfolio performance including Scotland Yard IL. Quoted publicly on 2023 Chicago expansion to 1,319 units and DC metro area acquisitions.",
        background:    "Long-tenured Avanath CIO with deep affordable housing and institutional RE expertise. Primary operational contact for specific loan and servicer discussions. Oversaw Chicago market expansion from initial Scotland Yard (2019) through Lincoln Park Plaza ($119M, 2023).",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Avanath Capital Management -- President & CIO (long-tenured)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Led Chicago market expansion to 1,319 units including $119M Lincoln Park Plaza deal (2023)" },
          { property: "", year: "", role: "", amount: 0, note: "DC metro area acquisitions -- 1,169 units reported" }
        ],
      }
    ],
  },

  "Rise48 Equity / Zach Haptonstall": {
    parentFirm:      "The Rise48 Group (Rise48 Equity, Rise48 Communities property management, Rise48 Construction)",
    hq:              "Scottsdale, AZ (corporate HQ); Dallas, TX (second office); Charlotte, NC (third office)",
    founded:         "2019 (Rise48 Equity); ZH Multifamily precursor founded 2018",
    aum:             "$2B+ AUM; $2.5B+ total transaction volume; 62 assets / 11,000+ units since 2019; 11 full-cycle dispositions",
    focus:           "Value-add retail syndication multifamily; Class B/C 1970s-1990s vintage; Phoenix AZ, Dallas TX, Charlotte NC; vertically integrated with in-house PM and construction",
    currentStrategy: "Paces Cove Dallas TX (328 units, Pandora Drive, acquired from Rise48 press) = $21.9M WL. Rise48 uses vertically integrated model: Rise48 Communities (PM, 7,900+ units; no third-party PM), Rise48 Construction (all capex/renovation). 250+ full-time employees all local-based. Capital from accredited and non-accredited investors via Reg CF/Reg A. Mix of bridge loans and agency financing. Market context: Rise48's peak acquisition years 2021-2022 coincided with low rates; 2023-2024 saw margin compression from rising insurance, management costs, and slowing rent growth in Phoenix and Dallas. Haptonstall acknowledged market stress publicly in investor communications. Charlotte NC is newest market (added 2023-2024). Named Top AZ Workplace (AZ Central, 2023) and Best Place to Work (Phoenix Business Journal, 2023).",
    states:          ["AZ","TX","NC"],
    treppEntities:   ["PACES COVE DALLAS TX","RISE48 EQUITY LLC"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Zach Haptonstall",
        title:         "CEO & Co-Founder",
        firm:          "Rise48 Equity / The Rise48 Group",
        decisionPower: "All acquisitions, capital raising, strategic partnerships, and financing decisions. The primary public face and deal closer.",
        background:    "Born and raised Phoenix AZ. Unusual career path: started as a live TV news anchor and sports reporter at Arizona PBS; co-hosted show on Fox Sports Network Arizona. Pivoted to healthcare: became Director of Business Development at Sage Hospice & Palliative Care, then President and Co-Owner of Family Comfort Hospice (110+ employees, $9M+ revenue -- successfully sold 2021). Founded ZH Multifamily 2018, grew to $35M portfolio. Founded Phoenix Multifamily Association (PMA, 200+ member networking group). Retired ZH Multifamily/PMA 2020 and co-founded Rise48 Equity with Bikran Sandhu and Robert Szewczyk. MBA from Grand Canyon University (GCU). Resides Scottsdale AZ and Dallas TX with wife Grace and son.",
        education: [
          { school: "Grand Canyon University -- MBA", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "", role: "", years: "", note: "Arizona PBS -- Live TV News Anchor (broadcast journalism career, early 2010s)" },
          { firm: "", role: "", years: "", note: "Fox Sports Network Arizona -- Sports Reporter / Co-Host" },
          { firm: "", role: "", years: "", note: "Sage Hospice & Palliative Care -- Director of Business Development / Part-Owner" },
          { firm: "", role: "", years: "", note: "Family Comfort Hospice -- President & Co-Owner (grew to $9M+ revenue; sold 2021)" },
          { firm: "", role: "", years: "", note: "ZH Multifamily / Phoenix Multifamily Association -- Founder (2018-2020; $35M portfolio; 200+ PMA members)" },
          { firm: "", role: "", years: "", note: "Rise48 Equity -- CEO & Co-Founder (2019-present; $2B+ AUM)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Paces Cove Dallas TX -- 328 units, WL $21.9M (Trepp)" },
          { property: "", year: "", role: "", amount: 0, note: "Gateway Place East Dallas TX -- 142 units" },
          { property: "", year: "", role: "", amount: 0, note: "Pecan Ridge Mesquite TX -- 210 units" },
          { property: "", year: "", role: "", amount: 0, note: "Rise48 portfolio -- $2.5B+ total transactions, 62 assets, 11,000+ units (2019-2025)" }
        ],
      },
      {
        rank:          2,
        name:          "Bikran Sandhu",
        title:         "COO, CFO & Co-Founder",
        firm:          "Rise48 Equity / The Rise48 Group",
        decisionPower: "Controls all financial operations, accounting, underwriting, and lender relationships. CPA credential. The key technical contact for servicer and workout conversations.",
        background:    "Co-founded Rise48 with Haptonstall and Robert Szewczyk. CPA. Based Phoenix / Scottsdale AZ. Named finalist for AZ Chapter of Financial Executives International 15th Annual CFO Awards 2023. Manages financial reporting, lender covenant compliance, and investor distributions across 11,000+ units.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Rise48 Equity -- COO, CFO & Co-Founder (2019-present)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Financial oversight of $2B+ AUM including Paces Cove TX WL asset" }
        ],
      }
    ],
  },

  "Interforum Holdings / Alex Zdanov": {
    parentFirm:      "Interforum Holdings LLC (private; Northfield, IL)",
    hq:              "Northfield, IL (suburban Chicago, DuPage/Cook County border)",
    founded:         "~2015-2016 (based on Arden of Warrenville timeline)",
    aum:             "~$100M+ (estimated) across 2 Arden properties: 364-unit Arden of Warrenville (completed 2021, $59.9M construction loan) and 60-unit Arden Townhomes BTR (completed 2023, $21.5M construction loan / $20M Argentic refi)",
    focus:           "Luxury multifamily and build-to-rent townhomes in Warrenville IL (Cantera master-planned community, West DuPage County); high-amenity product targeting 'wellness-focused custom home living'",
    currentStrategy: "Arden Townhomes (60 BTR three-bed/three-level units, avg 1,898 SF, 28291-28417 Torch Parkway, Cantera) = $20M DSCR 0.66 WL. Initial construction loan $21.5M from Arbor Realty Trust (2022). Refinanced 2023: $20M Argentic Investment Management floating-rate senior + $5M Pearlmark Real Estate Partners mezz; JLL arranged (Trent Niederberger MD + Philip Galligan Director). Shared amenities with adjacent 364-unit Arden of Warrenville (resident lounge, gym, yoga studio, sauna, library, kid's club). Cantera is a 650-acre master-planned mixed-use development; major employers include EN Engineering, Exelon Nuclear, Liberty Mutual. Arden of Warrenville originally financed with $59.9M CIBC Bank USA construction loan; other lenders included Inland Bank, Associated Bank, Great Southern Bank, Arbor Multifamily. McShane Construction was GC; Baranyk Associates Architecture.",
    states:          ["IL"],
    treppEntities:   ["ARDEN TOWNHOMES WARRENVILLE IL","INTERFORUM HOLDINGS LLC"],
    loans: [
      {
        property: "Arden Townhomes",
        address:  "28291-28417 Torch Parkway, Warrenville IL",
        type:     "multifamily",
        balance:  20000000,
        dscr:     0.66,
        status:   "watchlist",
        state:    "IL",
        maturity: "",
        servicer: "",
        note:     "60 BTR units. $20M Argentic floating-rate senior + $5M Pearlmark mezz. JLL arranged 2024 refi. Lease-up stress on new BTR product.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Alex Zdanov",
        title:         "CEO, Interforum Holdings LLC",
        firm:          "Interforum Holdings LLC (Northfield, IL)",
        decisionPower: "Developer, owner-operator, and full decision-maker on all Arden brand assets. Controls all financing, construction, and management decisions.",
        background:    "Northfield IL-based luxury multifamily developer. Created the Arden brand around 'custom home living... wellness-focused... intersection of technology and social programs accentuating modern community living.' First Arden product (364 units, Arden of Warrenville, 2021) was financed with $59.9M CIBC Bank USA construction loan and multiple co-lenders. Extended brand to 60-unit Arden Townhomes BTR component on adjacent Cantera site (2023). JLL-arranged 2023 refi secured $20M Argentic + $5M Pearlmark. Limited public profile -- primarily known through Patch.com local press releases announcing Arden leasing.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Interforum Holdings -- CEO / Developer (Northfield IL; Arden brand since ~2016)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Arden of Warrenville IL -- 364 units, completed 2021, $59.9M CIBC construction loan" },
          { property: "", year: "", role: "", amount: 0, note: "Arden Townhomes Warrenville IL -- 60 BTR units, $20M Argentic + $5M Pearlmark mezz (JLL arranged 2023), DSCR 0.66 WL" }
        ],
      },
      {
        rank:          2,
        name:          "Trent Niederberger / Philip Galligan (JLL Capital Markets)",
        title:         "Managing Director / Director, JLL Capital Markets Chicago",
        firm:          "JLL Capital Markets (Chicago IL)",
        decisionPower: "Arranged the 2024 Argentic + Pearlmark refi for Arden Townhomes. Know Zdanov personally and have current insight into Arden Townhomes occupancy and lease-up trajectory. Optimal warm-intro path to Zdanov for Baker Street.",
        background:    "JLL Capital Markets Chicago arranged the $20M Argentic floating-rate senior loan and $5M Pearlmark mezz for Arden Townhomes in 2024. Named arrangers in the deal. Best positioned to provide Baker Street with a current read on the asset's performance and Zdanov's financial posture.",
        education: [],
        career: [
          { firm: "JLL Capital Markets Chicago", role: "Managing Director (Niederberger) / Director (Galligan)", years: "Current", note: "Arranged Arden Townhomes 2024 refi; warm Zdanov intro path" }
        ],
        deals: [
          { property: "Arden Townhomes Warrenville IL", year: "", role: "Debt arranger", amount: 20, note: "Loan: $20M Argentic + $5M Pearlmark | Lender: On behalf of Interforum Holdings | Baker Street warm intro vehicle" }
        ],
      }
    ],
  },

  "Mordecai Schireson / Riceland Pavilion": {
    parentFirm:      "Private; Riceland Pavilion Part II LLC (Texas entity); co-owners include Mordecai Schireson and Andrew Rosenberg (per CorporationWiki public records)",
    hq:              "Amarillo, TX and Baytown, TX (addresses per entity records); connected also to Houston TX area",
    founded:         "Riceland Pavilion retail center at 4615 Garth Road, Baytown TX; originally acquired by Schrogins/Bear IV Ltd per CoStar (2004 transaction); Schireson and Rosenberg appear in Riceland Pavilion Part II LLC entity",
    aum:             "$19M TX Retail WL (Trepp single entry); Riceland Pavilion is a 68,778 SF retail center at 4615 Garth Road, Baytown TX (Harris County / east Houston metro near ExxonMobil/Baytown industrial corridor)",
    focus:           "Texas retail; Baytown area (east Houston metro, industrial/port corridor); community retail center format",
    currentStrategy: "Riceland Pavilion (4615 Garth Rd, Baytown TX, 68,778 SF) = $19M TX Retail WL CMBS. Baytown is an east Houston suburb near ExxonMobil Baytown Complex (one of the largest refineries in the US) and Port of Houston facilities. Retail serving industrial workforce is the likely tenant mix. Entity Riceland Pavilion Part II LLC connects Schireson and Andrew Rosenberg (per CorporationWiki TX data). Addresses on record include Amarillo TX (3001 W 27th Ave, 3321 Bell St, 5809 S Western St, 1018 SW 10th Ave) and Baytown TX (4665 Garth Rd, 4601 Garth Rd -- adjacent to 4615 Garth Rd property). This suggests Schireson/Rosenberg are Amarillo-based investors with Baytown TX retail holdings.",
    states:          ["TX"],
    treppEntities:   ["RICELAND PAVILION BAYTOWN TX","RICELAND PAVILION PART II LLC"],
    loans: [
      {
        property: "Riceland Pavilion",
        address:  "4615 Garth Road, Baytown TX",
        type:     "retail",
        balance:  19000000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "68,778 SF community retail. Baytown TX (east Houston metro near ExxonMobil Baytown Complex). Schireson + Andrew Rosenberg co-owners.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Mordecai Schireson",
        title:         "Co-Principal / Co-Owner, Riceland Pavilion",
        firm:          "Riceland Pavilion Part II LLC (TX)",
        decisionPower: "Co-owner of Riceland Pavilion retail center, Baytown TX. Connected to CorporationWiki entity network via Andrew Rosenberg.",
        background:    "Likely Amarillo TX-based investor (based on TX SOS address records). No public online presence found beyond entity registration data. Jewish name suggests possible Amarillo TX Orthodox/Jewish community investor network. CorporationWiki shows multiple TX entity connections between Schireson and Rosenberg with addresses including Amarillo TX and Baytown TX.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Texas retail investor -- Amarillo and Baytown TX (dates unknown)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Riceland Pavilion Baytown TX -- 68,778 SF community retail, 4615 Garth Rd, $19M WL CMBS" }
        ],
      },
      {
        rank:          2,
        name:          "Andrew Rosenberg",
        title:         "Co-Principal / Co-Owner, Riceland Pavilion",
        firm:          "Riceland Pavilion Part II LLC (TX)",
        decisionPower: "Co-owner and co-managing member of Riceland Pavilion Part II LLC per TX SOS records.",
        background:    "Connected to Schireson via multiple TX entity registrations. Amarillo TX address on record (3001 W 27th Ave). Likely a co-investor/co-owner in Schireson's Baytown TX retail holdings.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Texas investor -- Amarillo and Baytown TX (dates unknown)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Riceland Pavilion Baytown TX -- co-owner with Schireson (Trepp $19M WL)" }
        ],
      }
    ],
  },

  "Atrium Hospitality / Marriott Atlanta Buckhead": {
    parentFirm:      "Atrium Hospitality LP (privately held, Alpharetta GA; investor-owned through private equity structure; backed by Blackstone Real Estate Partners among others per historical filings)",
    hq:              "Deerfield Point, Alpharetta, GA 30009",
    founded:         "Current Atrium form ~2013-2014; Marriott Atlanta Buckhead hotel acquired 2016",
    aum:             "82 hotels / 21,595+ guest rooms / 29 states as of 2025; Hilton, Marriott, IHG, Wyndham, and independent flags",
    focus:           "Full-service and select-service hotel ownership and management; Hilton and Marriott flagged properties primary; Sunbelt and national markets",
    currentStrategy: "Marriott Atlanta Buckhead Hotel and Conference Center (3405 Lenox Road NE, Atlanta, 349 rooms + 30,000+ SF meeting space) = $49.5M GA Hotel SS DSCR -0.38. PHF II Buckhead LLC (Atrium affiliate) took out $50.5M JPMorgan Chase loan in 2016, packaged into CMBS. $49.4M balance at SS transfer. Property appraised $78M in 2016 (2015 vintage was Sheraton Buckhead Hotel converted to Marriott after $45M renovation in 2008); reappraised $38.4M (Fulton County 2024) -- 51% decline. Occupancy: 50.8% (2022), 56% (2023), ~60% (mid-2024); underwritten at 80%. Loan distress first triggered 2021 (Covid recovery phase); foreclosure auction scheduled and canceled via loan modification; loan re-transferred to LNR Securities (special servicer) in 2024 after Atrium missed payments again. LNR commentary noted ownership views continued spend as questionable. Most recent appraisal $38.4M vs $49.4M outstanding balance = underwater by ~$11M.",
    states:          ["GA","AL","AR","AZ","CA","CO","FL","IL","IN","KS","KY","LA","MD","MN","MO","MS","NC","NE","NM","NV","OH","OR","SC","TN","TX","UT","VA","WI"],
    treppEntities:   ["PHF II BUCKHEAD LLC","HRO FUNDING LLC MARRIOTT BUCKHEAD","MARRIOTT ATLANTA BUCKHEAD SS GA"],
    loans: [
      {
        property: "Marriott Atlanta Buckhead",
        address:  "Atlanta GA (Buckhead)",
        type:     "hotel",
        balance:  0,
        dscr:     0,
        status:   "watchlist",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "Trepp WL entry. Full-service Marriott-flagged hotel in Atlanta Buckhead submarket. Exact balance TBD from Trepp loan tape.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Rob Mangiarelli",
        title:         "Chief Executive Officer",
        firm:          "Atrium Hospitality LP (Alpharetta, GA)",
        decisionPower: "CEO since Sept 2025 (promoted from President role). Responsible for all aspects of ownership and operations of Atrium's 82-hotel national portfolio. Key decision-maker on Buckhead distressed asset strategy alongside LNR special servicer.",
        background:    "Joined Atrium 2022 as President/COO after 25+ years at Hyatt Hotels (including Global Head of Asset Management -- oversaw finance, revenue management, real estate, capex, technology, operations, HR globally) and COO role at Magna Hospitality (managed $4B hotel and RE portfolio). Serves on Marriott Owners Advisory Council and Embassy Suites Owners Advisory Council. Promoted to CEO Sept 2025 when Kimberly Furlong elevated to President. Chicago background from Hyatt tenure.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Hyatt Hotels Corporation -- 25+ years including Global Head of Asset Management" },
          { firm: "", role: "", years: "", note: "Magna Hospitality -- COO (managed $4B hotel and RE portfolio)" },
          { firm: "", role: "", years: "", note: "Atrium Hospitality -- President / COO (2022-Sept 2025); CEO (Sept 2025-present)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Marriott Atlanta Buckhead -- $50.5M CMBS (PHF II Buckhead LLC), SS DSCR -0.38" },
          { property: "", year: "", role: "", amount: 0, note: "Atrium national portfolio -- 82 hotels / 21,595+ rooms / 29 states" }
        ],
      },
      {
        rank:          2,
        name:          "Kimberly Furlong",
        title:         "President",
        firm:          "Atrium Hospitality LP (Alpharetta, GA)",
        decisionPower: "President since Sept 2025 (promoted from CCO). Founding executive committee member at Atrium. Oversees both commercial and operations teams under unified leadership. Influences major asset disposition and capital strategy decisions.",
        background:    "CCO at Atrium until Sept 2025 promotion to President. Founding executive committee member at Atrium -- has been with the company since its current form inception (~2013-2014). Her elevation unites commercial and operational leadership. Leads workforce of ~10,000 associates across 82 hotels. Pioneer of Atrium's WomenRISE program launched 2024 to advance female hospitality leaders.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Atrium Hospitality -- Founding Executive Committee Member (~2013-2014 to present); CCO; President (Sept 2025-present)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Co-oversees all Atrium portfolio strategy including Buckhead hotel distress resolution" }
        ],
      }
    ],
  },

  "Bridge Investment Group / Waverley Place Naples FL": {
    parentFirm:      "Bridge Investment Group Holdings Inc. (NYSE: BRDG); pending acquisition by Apollo Global Management (~$1.5B, announced 2025)",
    hq:              "Salt Lake City, UT / Sandy, UT",
    founded:         "2009 by Jonathan Slager and Robert Morse",
    aum:             "$50.2B+ gross AUM as of mid-2025; multifamily, affordable/workforce, seniors housing, office, industrial, net lease, renewable energy, debt strategies",
    focus:           "Alternative investment manager: real estate equity and credit across risk-return spectrum; vertically integrated with Bridge Property Management",
    currentStrategy: "Waverley Place Naples FL = $31.9M WL CMBS in BRDG multifamily portfolio. Apollo acquisition pending close 2025/2026 for ~$1.5B -- will integrate Bridge's $50B+ AUM platform under Apollo Real Estate. Bridge Property Management oversees 20,000+ multifamily units nationally. Waverley Place WL likely routine servicer monitoring on a floating-rate or agency loan -- not fundamental distress at BRDG scale. Post-Apollo deal, non-core FL assets may be rationalization candidates.",
    states:          ["FL","TX","GA","TN","UT","NY","CO","IN","AZ","NC"],
    treppEntities:   ["WAVERLEY PLACE NAPLES FL","BRIDGE INVESTMENT GROUP MF"],
    loans: [
      {
        property: "Waverley Place",
        address:  "Naples FL",
        type:     "multifamily",
        balance:  0,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Naples FL multifamily. Trepp WL entry. Exact balance TBD from Trepp loan tape. Bridge Multifamily fund vehicle.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Jonathan Slager",
        title:         "Chief Executive Officer & Director",
        firm:          "Bridge Investment Group Holdings Inc. (NYSE: BRDG)",
        decisionPower: "CEO and founding partner. Oversees all $50B+ AUM strategy and operations. All major capital decisions flow through Slager and senior investment committee.",
        background:    "BA English, Phi Beta Kappa cum laude, University of Utah 1981. MBA Finance and Marketing, NYU 1985. Career: Koll Company and Wells Fargo Bank (1985-1990; acquisition, AM, disposition of commercial RE). Pacific Group USA partner (2005-2009). Managing partner Bridge Loan Capital Fund LP (2006-2017). Co-founded Bridge Investment Group 2009. IPO 2021 (NYSE: BRDG). Bridge has 100+ global institutional investors and 6,500+ individual investors. Apollo acquisition announced 2025 at ~$1.5B.",
        education: [
          { school: "University of Utah -- BA English, Phi Beta Kappa cum laude (1981)", degree: "", year: "", note: "" },
          { school: "New York University -- MBA Finance and Marketing (1985)", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "", role: "", years: "", note: "Koll Company -- (1985-1990)" },
          { firm: "", role: "", years: "", note: "Wells Fargo Bank -- CRE acquisition, AM, disposition (late 1980s-1990s)" },
          { firm: "", role: "", years: "", note: "Pacific Group USA -- Partner (2005-2009)" },
          { firm: "", role: "", years: "", note: "Bridge Loan Capital Fund LP -- Managing Partner (2006-2017)" },
          { firm: "", role: "", years: "", note: "Bridge Investment Group -- CEO & Co-Founder (2009-present)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Waverley Place Naples FL -- $31.9M WL (Trepp)" },
          { property: "", year: "", role: "", amount: 0, note: "Tampa Bay MF -- Veranda at Westchase (390 units), Viera Bayside (208 units), Carrollwood Station; $101.25M combined" },
          { property: "", year: "", role: "", amount: 0, note: "BRDG IPO 2021 (NYSE: BRDG; ~$300M raise)" },
          { property: "", year: "", role: "", amount: 0, note: "Apollo acquisition pending (~$1.5B, 2025)" }
        ],
      },
      {
        rank:          2,
        name:          "Robert Morse",
        title:         "Executive Chairman & Co-Founder",
        firm:          "Bridge Investment Group Holdings Inc. (NYSE: BRDG)",
        decisionPower: "Strategic oversight and governance as co-founder. Former Salomon Brothers career and SSB Capital Partners ($400M PE fund) background provide deep capital markets relationships.",
        background:    "BA Yale College, Phi Beta Kappa, magna cum laude. MBA Harvard Business School. JD Harvard Law School. Salomon Brothers 1985-2000 in senior capital markets and real estate roles. Co-founded SSB Capital Partners ($400M PE fund, 2000). Co-founded Bridge Investment Group 2009. Serves on Yale President's Council on International Activities (Chairman), Yale SOM Board of Advisors, Whitney Museum Directors Council, Grand Teton National Park Foundation Resource Council.",
        education: [
          { school: "Yale College -- BA, Phi Beta Kappa, magna cum laude", degree: "", year: "", note: "" },
          { school: "Harvard Business School -- MBA", degree: "", year: "", note: "" },
          { school: "Harvard Law School -- JD", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "", role: "", years: "", note: "Salomon Brothers -- Senior positions, capital markets and real estate (1985-2000)" },
          { firm: "", role: "", years: "", note: "SSB Capital Partners -- Co-Founder ($400M PE fund, 2000)" },
          { firm: "", role: "", years: "", note: "Bridge Investment Group -- Executive Chairman & Co-Founder (2009-present)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Bridge Investment Group -- co-founded and grew to $50B+ AUM" }
        ],
      }
    ],
  },

  "Daniel Stuzin / KAS Entities": {
    parentFirm:      "Private; entities: KAS PHOENIX LLC, KAS TECH PARK LLC, KAS KINGS LANDING LLC, KAS PEACHTREE 30 LLC, KAS ROSWELL LLC (all Georgia-incorporated; mailing address 6303 Waterford District Dr, Ste 350, Miami FL 33126)",
    hq:              "Miami FL (mailing) / Atlanta GA metro (operating base: Peachtree Corners, Roswell, Atlanta)",
    founded:         "KAS Phoenix LLC incorporated GA 07/19/2017; KAS Kings Landing LLC incorporated GA 07/29/2020; other entities 2017-2025",
    aum:             "~$45.2M total recorded mortgage exposure across 7 properties (per Elementix.ai public records through 2025); concentration in Peachtree Corners GA, Roswell GA, Atlanta GA; separate Trepp: 3 VA deals / $28.7M",
    focus:           "Commercial and office real estate in metro Atlanta GA suburbs and Virginia; private family office or private equity structure using KAS-branded SPEs",
    currentStrategy: "6 GA entities operating in Peachtree Corners (suburban Atlanta/Gwinnett County tech corridor), Roswell, and Atlanta. Recent 2025 mortgage activity (lender: AFF IV Kings Landing). Historical lenders: American Family Mutual Insurance SI, Ameris Bank. Separately, 3 VA deals / $28.7M in Trepp (multifamily). The GA office/commercial portfolio (KAS Tech Park, KAS Phoenix) may target tech-sector tenants in the Peachtree Corners / Gwinnett County tech hub. NOTE: Daniel Stuzin is also listed on Avvo as a Miami FL commercial real estate attorney (FL Bar, admitted 1998, ~27 years experience, 305 area code Miami) -- potentially same person who structures his own CRE investments as attorney-investor.",
    states:          ["VA","GA","FL"],
    treppEntities:   ["KAS PHOENIX LLC GA","KAS TECH PARK LLC GA","KAS KINGS LANDING LLC GA","KAS PEACHTREE 30 LLC","KAS ROSWELL LLC GA","DANIEL STUZIN VA MF"],
    loans: [
      {
        property: "VA Multifamily Portfolio (3 deals)",
        address:  "Virginia (submarket TBD)",
        type:     "multifamily",
        balance:  28700000,
        dscr:     0,
        status:   "watchlist",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "3 VA deals / $28.7M. KAS-branded SPEs (KAS Phoenix, KAS Tech Park, etc. are GA entities; VA MF is separate). Pull Trepp for VA property addresses.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Daniel Stuzin",
        title:         "Principal / Managing Member (KAS entities); possibly also commercial real estate attorney",
        firm:          "KAS Entities (GA-based SPEs, Miami FL mailing address)",
        decisionPower: "Controlling member of all KAS-branded SPEs per public records signatures. Decision-maker on VA and GA property financing and operations.",
        background:    "Atlanta GA and Miami FL-based real estate investor. All KAS entities use Miami FL mailing address (6303 Waterford District Dr Ste 350, Miami 33126 -- a Waterford District office building in Miami). Activity concentrated in Peachtree Corners, Roswell, and Atlanta GA tech corridor. VA multifamily portfolio appears separate from GA commercial activity. An FL-licensed commercial real estate attorney named Daniel Michael Stuzin is listed on Avvo (FL Bar #1288611, admitted 1998, ~27 years experience, commercial real estate focus, Miami FL) -- may be the same person who both practices CRE law and invests for his own account. Most recent GA mortgage recorded 2025 (AFF IV Kings Landing lender).",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "KAS entities / private CRE investing -- Principal (2017-present; GA and VA markets)" },
          { firm: "", role: "", years: "", note: "Possibly: Miami FL commercial RE attorney (FL Bar #1288611, admitted 1998 -- needs verification of same person)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "3 VA MF deals / $28.7M (Trepp)" },
          { property: "", year: "", role: "", amount: 0, note: "GA commercial/office portfolio -- KAS Phoenix, KAS Tech Park, KAS Kings Landing, KAS Peachtree 30, KAS Roswell (Peachtree Corners, Roswell, Atlanta; ~$45.2M total mortgage exposure through 2025)" }
        ],
      },
      {
        rank:          2,
        name:          "VA CMBS Servicer / VA County Property Records",
        title:         "Research path and servicer contact -- VA MF $28.7M (3 deals)",
        firm:          "Unknown servicer (pull from Trepp loan tape)",
        decisionPower: "The VA special servicer (if any loans are SS) has functional decision-making authority on workout. VA county property records (Fairfax, Arlington, Prince William, or Loudoun County depending on submarket) will identify the specific properties and confirm the borrower LLC chain.",
        background:    "Three VA MF deals at $28.7M total is a significant NoVA or Hampton Roads exposure for a private investor-attorney. VA SCC (State Corporation Commission) entity search for KAS-named VA entities or Stuzin-linked LLCs will identify the borrower SPEs. VA counties searched should prioritize the major NoVA metros (Fairfax, Arlington) and Hampton Roads (Virginia Beach, Chesapeake) as most likely for this loan size.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Eran Israel / Golden Gate Townhomes": {
    parentFirm:      "Private individual; Golden Gate Townhomes, Stone Mountain GA",
    hq:              "Stone Mountain, GA (DeKalb County, suburban Atlanta)",
    founded:         "Unknown",
    aum:             "$21.8M across 3 deals GA + FL (Trepp); small private operator",
    focus:           "Workforce multifamily townhomes, Stone Mountain GA and South Florida",
    currentStrategy: "Golden Gate Townhomes (Stone Mountain GA, DeKalb County, ~15 miles east of downtown Atlanta) is confirmed Eran Israel property per Alignable business listing: 'Golden Gate Townhomes is a Multi-family rental community nestled in Stone Mountain, Georgia. Eran Israel.' LinkedIn profile: 'Eran Israel -- Owner, Multifamily Town Homes.' Total Trepp exposure: 3 deals GA + FL / $21.8M. Stone Mountain GA is a DeKalb County suburb with workforce renters; area serves Georgia Stone Mountain State Park corridor. FL exposure suggests second property or diversification beyond GA.",
    states:          ["GA","FL"],
    treppEntities:   ["GOLDEN GATE TOWNHOMES STONE MOUNTAIN GA","ERAN ISRAEL GA FL MF"],
    loans: [
      {
        property: "Golden Gate Townhomes and FL properties",
        address:  "Stone Mountain GA and Florida",
        type:     "multifamily",
        balance:  21800000,
        dscr:     0,
        status:   "watchlist",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "3 deals GA + FL / $21.8M total. Golden Gate Townhomes confirmed at Stone Mountain GA (DeKalb County). FL property address TBD.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Eran Israel",
        title:         "Owner / Principal",
        firm:          "Private (Golden Gate Townhomes and other MF entities)",
        decisionPower: "Full authority as owner-operator. Personal guarantor on Trepp CMBS loans.",
        background:    "LinkedIn profile: 'Owner, Multifamily Town Homes.' Alignable listing confirms ownership of Golden Gate Townhomes in Stone Mountain GA. Small-scale private operator likely owning 50-200 units total across GA and FL workforce townhome product. No institutional affiliation found. Israeli/Hebrew given name -- possible Israeli-American diaspora investor background common in South FL and Atlanta real estate markets.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "Multifamily townhome owner-operator -- Stone Mountain GA and FL (private; dates unknown)" }
        ],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Golden Gate Townhomes, Stone Mountain GA -- multifamily rental community (Trepp WL/SS)" },
          { property: "", year: "", role: "", amount: 0, note: "FL multifamily -- 1-2 additional properties (Trepp)" },
          { property: "", year: "", role: "", amount: 0, note: "Total: 3 deals / $21.8M (Trepp)" }
        ],
      },
      {
        rank:          2,
        name:          "DeKalb County Records / Atlanta MF Broker",
        title:         "Research path and warm intro channel",
        firm:          "DeKalb County Tax Assessor / Atlanta area MF brokerage community",
        decisionPower: "DeKalb County Tax Assessor (qpublic.net/ga/dekalb) will identify all Golden Gate Townhomes parcels and LLC ownership chain. Atlanta-area MF brokers (Marcus & Millichap Atlanta, CBRE SE Multifamily) who cover Stone Mountain/DeKalb are the warm intro path to Eran Israel.",
        background:    "Golden Gate Townhomes in Stone Mountain GA is a DeKalb County workforce townhome community. DeKalb County property records will surface all Eran Israel-linked entities. The Stone Mountain submarket is served by boutique Atlanta-area MF brokers who would know Israel personally given the small community of DeKalb County townhome operators.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Yedidiah Buchwald / FL Multifamily": {
    parentFirm:      "Triple Five Group (Edmonton AB; Mall of America developer); previously Kushner Companies; FL MF held personally / through private entities",
    hq:              "Miami Beach, FL (Buchwald personal base); Triple Five Group HQ: Edmonton, AB Canada",
    founded:         "Triple Five Group: founded by Jacob Ghermezian family; Buchwald joined as EVP",
    aum:             "Triple Five Group: $4B+ in retail/entertainment megadevelopments (Mall of America, West Edmonton Mall, American Dream NJ). Buchwald FL MF: 4 deals / $8.8M (small personal portfolio alongside institutional career)",
    focus:           "Personal FL MF holdings alongside senior institutional RE career; Triple Five Group megaproject advisory and development; previously Kushner Companies NYC/NJ CRE",
    currentStrategy: "Yedidiah Buchwald is EVP at Triple Five Group (the Edmonton-based developer behind Mall of America MN, West Edmonton Mall AB, and American Dream megamall NJ) and is based in Miami Beach FL. His FL CMBS MF exposure (4 deals / $8.8M, all WL DSCR negative) represents a personal side portfolio, not Triple Five institutional activity. Average deal size $2.2M = small apartment buildings or small multifamily (5-20 units). Prior role at Kushner Companies (NYC/NJ CRE, Jared Kushner's family firm). Executive MBA from University of Baltimore (1998-2020 dates per RocketReach suggest a long part-time program). DSCR negative across all 4 FL personal holdings is acute distress -- FL small-balance Class C MF hit hard by insurance cost spikes 2022-2024 and rent compression.",
    states:          ["FL"],
    treppEntities:   ["YEDIDIAH BUCHWALD FL MF","BUCHWALD FL CMBS"],
    loans: [
      {
        property: "FL Multifamily Portfolio (4 assets)",
        address:  "South Florida (county TBD - Broward/Palm Beach/Miami-Dade)",
        type:     "multifamily",
        balance:  8800000,
        dscr:     0,
        status:   "special-servicing",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "4 FL MF deals / $8.8M total. All WL DSCR negative. Avg $2.2M per deal -- small MF. Personal portfolio of Triple Five Group EVP. FL county records needed.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Yedidiah Buchwald",
        title:         "Executive Vice President",
        firm:          "Triple Five Group (Edmonton AB / Miami Beach FL)",
        decisionPower: "EVP at Triple Five Group (institutional); personal guarantor and controlling member on 4 FL CMBS MF loans. Decision-maker on his personal FL portfolio workout strategy.",
        background:    "Miami Beach FL-based senior real estate executive. EVP at Triple Five Group -- the Ghermezian family's Edmonton-based megadevelopment firm responsible for Mall of America (Bloomington MN), West Edmonton Mall (AB), and American Dream (East Rutherford NJ). Previously at Kushner Companies (NYC/NJ -- Jared Kushner's family real estate firm). Executive MBA in Marketing/Marketing Management from University of Baltimore (part-time program per profile, 1998-2020 date range). FL personal portfolio: 4 small MF assets, all WL DSCR negative. Class C South FL small-balance MF (avg $2.2M) typical of side-pocket investments by institutional CRE professionals. DSCR negative = cash-flow negative after debt service on all 4, likely driven by FL insurance cost escalation and rent softness in Class C stock.",
        education: [
          { school: "University of Baltimore", degree: "Executive MBA, Marketing/Marketing Management", year: "Completed 2020 (part-time program)", note: "" }
        ],
        career: [
          { firm: "Kushner Companies (NYC/NJ)", role: "Real estate executive", years: "Pre-Triple Five", note: "Kushner family real estate empire -- NYC, NJ commercial and residential" },
          { firm: "Triple Five Group (Edmonton AB / Miami Beach FL)", role: "Executive Vice President", years: "Current", note: "Megadevelopment firm: Mall of America MN, West Edmonton Mall AB, American Dream NJ" }
        ],
        deals: [
          { property: "4 FL MF properties (South FL small-balance)", year: "", role: "Borrower/Personal guarantor", amount: 9, note: "Loan: $8.8M total (4 deals avg $2.2M each) | Lender: CMBS WL servicer | DSCR: Negative on all 4 | Personal portfolio alongside institutional career; Class C small-balance FL MF; acute distress; FL county records needed for specific addresses" }
        ],
      },
      {
        rank:          2,
        name:          "Special Servicer (engaged)",
        title:         "Special Servicer -- DSCR negative on all 4 assets",
        firm:          "Unknown (pull from Trepp loan tape)",
        decisionPower: "At DSCR negative across all 4 assets, the special servicer is the functional decision-maker. Baker Street should identify the servicer via Trepp and engage directly alongside any Buchwald outreach.",
        background:    "Four separate CMBS loans all with negative DSCR = four separate SS conversations ongoing. The servicer may be consolidating these under one asset manager given the common borrower.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "D. Andrew Clark / FL Multifamily": {
    parentFirm:      "Private individual / private entities (FL)",
    hq:              "Florida (est.)",
    founded:         "Unknown",
    aum:             "3 FL deals / $13.5M WL (Trepp)",
    focus:           "Florida multifamily, small-to-mid balance; private investor",
    currentStrategy: "3 FL WL deals / $13.5M. 'D. Andrew Clark' -- first-initial-plus-middle-name format is common among attorneys, CPAs, and finance professionals. At $4.5M average deal size, these are small-to-mid multifamily (20-60 unit buildings). FL multifamily market experienced rent softening in 2024-2025 in key metros as new supply hit (Tampa, Orlando, Jacksonville). FL SOS entity search for Clark-affiliated LLCs and FL county property records are the immediate research path.",
    states:          ["FL"],
    treppEntities:   ["D ANDREW CLARK FL MF","CLARK FL CMBS"],
    loans: [
      {
        property: "FL Multifamily Portfolio (3 assets)",
        address:  "Florida (county TBD)",
        type:     "multifamily",
        balance:  13500000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "3 FL deals / $13.5M WL. Avg $4.5M per deal. FL SOS and county records needed to identify specific properties.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "D. Andrew Clark",
        title:         "Principal / Borrower",
        firm:          "Private (FL)",
        decisionPower: "Controlling member of FL CMBS borrower entities on 3 loans totaling $13.5M.",
        background:    "No confirmed public biography. Professional name format ('D. Andrew') suggests attorney, CPA, or finance professional background -- common among private FL MF investors who structure their own deals. FL SOS search and county deed records are the primary research path. FL county most likely: Orange (Orlando), Hillsborough (Tampa), or Pinellas (St. Pete/Clearwater) based on deal size and WL profile.",
        education: [],
        career: [
          { firm: "Private FL entities", role: "Private multifamily investor", years: "Unknown", note: "3 FL CMBS loans / $13.5M WL. Research path: FL SOS + county deed records. Professional name format suggests attorney or finance background." }
        ],
        deals: [
          { property: "3 FL MF properties (county/address TBD)", year: "", role: "Borrower/Owner", amount: 14, note: "Loan: $13.5M total (3 deals avg $4.5M) | Lender: WL servicer(s) | DSCR: WL -- no DSCR reported | FL SOS and county records research needed" }
        ],
      },
      {
        rank:          2,
        name:          "CMBS Servicer (pull from Trepp)",
        title:         "WL Servicer -- 3 FL MF assets",
        firm:          "Unknown (pull from Trepp loan tape)",
        decisionPower: "Servicer holds the workout authority if any of the 3 loans migrate to SS. Baker Street should identify servicer names from Trepp and monitor for SS escalation.",
        background:    "Three separate WL loans suggest three separate CMBS trusts or possibly the same lender across multiple deals. Identifying the servicer(s) via Trepp is a precursor to any Baker Street engagement.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Shahid Imaran / FL Multifamily": {
    parentFirm:      "Private individual / entities (FL)",
    hq:              "Florida (est. -- South FL or Central FL based on name profile and deal size)",
    founded:         "Unknown",
    aum:             "2 FL deals / $33.1M (Trepp) -- significant at $16.5M average per deal",
    focus:           "Florida multifamily, mid-to-large balance CMBS; 100-300 unit garden apartment communities",
    currentStrategy: "2 FL deals / $33.1M. At $16.5M average deal size, this is mid-market FL MF -- likely 100-300 unit garden apartment communities in major FL metros (Miami-Dade, Broward, Palm Beach, or Hillsborough). 'Shahid Imaran' is a Pakistani/South Asian name. South Asian-American investor communities in FL are highly active in mid-market multifamily, particularly in South FL (Miramar, Pompano Beach, Lauderhill corridor) and Central FL (Orlando, Kissimmee). $33.1M for 2 private deals suggests HNW individual or family office structure with significant institutional CMBS lender access. FL SOS, county property records (Palm Beach, Broward, Miami-Dade, or Hillsborough) are the research path.",
    states:          ["FL"],
    treppEntities:   ["SHAHID IMARAN FL MF"],
    loans: [
      {
        property: "FL Multifamily Portfolio (2 assets)",
        address:  "Florida (county TBD - Broward/Palm Beach/Miami-Dade/Hillsborough)",
        type:     "multifamily",
        balance:  33100000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "2 FL deals / $33.1M. Avg $16.5M per deal -- mid-market FL MF 100-300 units. FL county records needed.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Shahid Imaran",
        title:         "Principal / Borrower",
        firm:          "Private (FL)",
        decisionPower: "Controlling member of FL CMBS borrower entities on 2 loans totaling $33.1M.",
        background:    "No confirmed public biography. South Asian/Pakistani name profile consistent with active FL mid-market MF investor community. $33.1M across 2 deals suggests established investor with strong net worth and banking relationships sufficient to access mid-market CMBS. FL SOS entity search and county property records (most likely Broward, Palm Beach, or Miami-Dade given the South FL South Asian investor concentration) are the primary research path.",
        education: [],
        career: [
          { firm: "Private FL entities", role: "Private multifamily investor", years: "Unknown", note: "2 FL CMBS loans / $33.1M. Mid-market FL MF ($16.5M avg). Research path: FL SOS + county property records." }
        ],
        deals: [
          { property: "2 FL MF properties (county/address TBD)", year: "", role: "Borrower/Owner", amount: 33, note: "Loan: $33.1M total (2 deals avg $16.5M) | Lender: CMBS (Trepp) | DSCR: WL | Mid-market FL MF; county TBD; FL SOS and records needed" }
        ],
      },
      {
        rank:          2,
        name:          "CMBS Servicer (pull from Trepp)",
        title:         "WL Servicer -- 2 FL MF assets",
        firm:          "Unknown (pull from Trepp loan tape)",
        decisionPower: "Servicer oversight on both WL loans. Baker Street should monitor for SS escalation.",
        background:    "Two mid-market FL MF WL loans. Identify servicer(s) via Trepp as precursor to any Baker Street engagement.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Charles Ladd and Steven Hudson / FL Retail and MF": {
    parentFirm:      "Hudson Capital Group (Fort Lauderdale FL) / Barron Real Estate (Fort Lauderdale FL); JV vehicle: Chapter Two Investments",
    hq:              "Fort Lauderdale, FL (both firms)",
    founded:         "Hudson Capital Group: 1997 (co-founded by Steven W. Hudson and father Harris 'Whit' Hudson). Barron Real Estate: 1991 (founded by Charles B. Ladd Jr.)",
    aum:             "Hudson Capital Group: 4,000+ multifamily and condo units developed in FL; Barron Real Estate: multi-decade South FL retail/commercial portfolio. Joint CMBS: 2 deals / $16.1M WL.",
    focus:           "South FL retail repositioning (Broward County community centers, Las Olas Boulevard); FL multifamily development (Flagler Village Fort Lauderdale); joint venture acquisitions via Chapter Two Investments and Las Olas Capital Advisors",
    currentStrategy: "Steven W. Hudson (Hudson Capital Group) and Charles B. Ladd Jr. (Barron Real Estate) are longtime Fort Lauderdale development partners operating jointly through Chapter Two Investments LLC. Major 2021 Broward retail spree: Oakland Park Festival Centre ($23.4M, $12M Starwood Mortgage Capital loan -- this is likely the Trepp WL retail entry); Primavera Plaza ($10M); South Harbor Plaza Fort Lauderdale ($40.5M, $20M Valley Bank loan with Las Olas Capital Advisors). Las Olas Blvd assemblage: $8.3M purchase (2016) + $7M expansion (2022) = ~600 linear feet of Las Olas frontage. Flagler Residences South: 30-story, 320-unit apartment tower, Fort Lauderdale Flagler Village (city-approved 2022). Second tower (240-unit) and office building also planned. Hudson's uncle: the late H. Wayne Huizenga (Waste Management, Blockbuster, Miami Dolphins/Marlins/Panthers). WL DSCR- on Oakland Park Festival Centre likely reflects community retail vacancy headwinds and debt service pressure post-acquisition.",
    states:          ["FL"],
    treppEntities:   ["OAKLAND PARK FESTIVAL CENTER FL","CHARLES LADD STEVEN HUDSON FL","CHAPTER TWO INVESTMENTS FL","LADD HUDSON FL CMBS"],
    loans: [
      {
        property: "Oakland Park Festival Centre",
        address:  "3400-3570 N Andrews Ave, Oakland Park FL",
        type:     "retail",
        balance:  11000000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "150,537 SF community retail. Bought 2021 for $23.4M from Sela LLC. $12M Starwood Mortgage Capital loan. WL DSCR negative. Chapter Two Investments vehicle.",
      },
      {
        property: "FL Multifamily (additional deal)",
        address:  "Florida",
        type:     "multifamily",
        balance:  5100000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Est. $5.1M FL MF deal. WL DSCR negative. Property address TBD from Trepp.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Steven W. Hudson",
        title:         "President",
        firm:          "Hudson Capital Group (Fort Lauderdale, FL)",
        decisionPower: "Co-founder and President of Hudson Capital Group. Co-decision-maker on all Chapter Two Investments / joint ventures with Ladd. Primary spokesperson for the partnership in press.",
        background:    "Fort Lauderdale FL-based real estate investor and developer. Co-founded Hudson Capital Group in 1997 with his father Harris 'Whit' Hudson as a family office investing in private equity, select startups, and real estate. Developed 4,000+ multifamily and condo units throughout Florida. Nephew of the late H. Wayne Huizenga -- the legendary South FL entrepreneur who built Waste Management, Blockbuster Video, and owned the Miami Dolphins, Miami Marlins, and Florida Panthers. Active since 1990s in Broward County CRE. Las Olas Blvd portfolio: ~600 linear feet of frontage assembled 2016-2022. Broward retail portfolio with Ladd: Oakland Park Festival Centre ($23.4M), Primavera Plaza ($10M), South Harbor Plaza ($40.5M). Flagler Village mixed-use: Flagler Residences South (320-unit tower, city-approved 2022) + second tower (240-unit) + office building. 138-key luxury hotel on Las Olas planned (5-star, independent, unaffiliated).",
        education: [],
        career: [
          { firm: "Hudson Capital Group (Fort Lauderdale FL)", role: "President and Co-Founder", years: "1997-present", note: "Family office: PE, startups, RE; 4,000+ FL MF/condo units; Broward retail portfolio; Flagler Village mixed-use development; Las Olas assemblage; uncle: H. Wayne Huizenga" }
        ],
        deals: [
          { property: "Oakland Park Festival Centre, 3400-3570 N Andrews Ave, Oakland Park FL", year: "", role: "Co-buyer (with Ladd via Chapter Two Investments)", amount: 12, note: "Loan: $12M Starwood Mortgage Capital | Lender: WL (watchlist) | DSCR: Negative | Bought 2021 for $23.4M from Sela LLC (Amos Chess). 150,537 SF community retail. WL DSCR- on Trepp." },
          { property: "South Harbor Plaza, 1300 SE 17th St, Fort Lauderdale FL", year: "", role: "Co-buyer (Chapter Two + Las Olas Capital + Foreward Mgmt)", amount: 20, note: "Loan: $20M Valley Bank | Lender: Valley Bank | Bought Oct 2021 for $40.5M; Las Olas Capital Fund III ($18M equity)" },
          { property: "Flagler Residences South, 513-517 NE 6th St, Fort Lauderdale FL", year: "", role: "Developer", amount: 0, note: "Loan: TBD | Lender: TBD | 30-story, 320-unit apartment tower; Flagler Village; city-approved Aug 2022" }
        ],
      },
      {
        rank:          2,
        name:          "Charles B. Ladd Jr.",
        title:         "President",
        firm:          "Barron Real Estate (Fort Lauderdale, FL)",
        decisionPower: "Co-decision-maker on all Chapter Two Investments / joint ventures with Hudson. Founded Barron Real Estate 1991 -- longer institutional history in Fort Lauderdale than Hudson.",
        background:    "Fort Lauderdale FL-based developer and retail specialist. Founded Barron Real Estate in 1991 (Fort Lauderdale). Known for bringing Fresh Market to Flagler Village -- an early neighborhood-defining anchor tenant move in the pre-development era. Multiple Oakland Park retail acquisitions jointly with Hudson (2021): Festival Centre ($23.4M), Primavera Plaza ($10M), South Harbor Plaza ($40.5M with Las Olas Capital). Las Olas Blvd portfolio: co-assembling high-street retail with Hudson. Flagler Village development: co-developing Flagler Residences South (320-unit tower) and planned second tower. Also referenced as 'Barron Commercial Development' and 'Barron Commercial' in various press accounts. 138-key luxury Las Olas hotel co-developer with Hudson.",
        education: [],
        career: [
          { firm: "Barron Real Estate (Fort Lauderdale FL)", role: "President and Founder", years: "1991-present", note: "Founded 1991; Fort Lauderdale retail and mixed-use specialist; brought Fresh Market to Flagler Village; Chapter Two Investments JV with Hudson; Las Olas assemblage; Flagler Village residential towers" }
        ],
        deals: [
          { property: "Oakland Park Festival Centre (co-buyer with Hudson)", year: "", role: "Co-buyer", amount: 12, note: "Loan: $12M Starwood Mortgage Capital | Lender: WL DSCR- | DSCR: Negative | Trepp WL retail entry" },
          { property: "Primavera Plaza, Oakland Park FL", year: "", role: "Co-buyer", amount: 0, note: "Lender: Unknown | Bought June 2021 for $10M; 51,594 SF strip center" }
        ],
      }
    ],
  },

  "PA-SC Venture I / FedEx West Palm Beach FL": {
    parentFirm:      "Private entity; principals unknown. 'PA-SC Venture I' may indicate a Pennsylvania-South Carolina investor partnership or investor initials.",
    hq:              "Unknown",
    founded:         "Unknown",
    aum:             "2 deals FL + GA / $26M WL (Trepp): FedEx West Palm Beach FL Industrial ($11.8M) + GA deal (est. $14.2M)",
    focus:           "Industrial NNN credit-tenant (FedEx West Palm Beach FL) and Georgia commercial",
    currentStrategy: "FedEx West Palm Beach FL ($11.8M WL) is an industrial asset net-leased to FedEx -- an investment-grade NNN credit tenant (FedEx Corp, S&P A- rated). WL status on a FedEx NNN industrial property is unusual and most likely reflects a technical CMBS servicer trigger: loan maturity approaching, DSCR covenant at threshold, or reporting requirement rather than tenant/occupancy risk. FedEx credit quality insulates against fundamental NOI loss. GA deal ($14.2M est.) is separate. PA-SC naming suggests Pennsylvania-South Carolina investor partnership vehicle or investor initials.",
    states:          ["FL","GA"],
    treppEntities:   ["PA-SC VENTURE I LLC","FEDEX WEST PALM BEACH FL INDUSTRIAL","PA SC VENTURE GA"],
    loans: [
      {
        property: "FedEx Distribution Center",
        address:  "West Palm Beach FL",
        type:     "industrial",
        balance:  11800000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "FedEx NNN credit tenant industrial. WL likely maturity/covenant trigger not fundamental distress. Brian Sherlock (UBS CMBS) primary contact for refi advisory.",
      },
      {
        property: "GA Commercial (TBD)",
        address:  "Georgia",
        type:     "mixed-use",
        balance:  14200000,
        dscr:     0,
        status:   "watchlist",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "Est. $14.2M GA commercial deal. Property type and address TBD from Trepp. PA-SC Venture I LLC principal unknown.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal(s)",
        title:         "Managing Member(s), PA-SC Venture I LLC",
        firm:          "PA-SC Venture I LLC",
        decisionPower: "Managing member controls FedEx West Palm Beach FL industrial and GA commercial property financing decisions.",
        background:    "No public information found. PA-SC naming may indicate Pennsylvania and South Carolina investor partnership. FedEx NNN industrial ownership pattern (high institutional quality, credit tenant, stable cash flow) is typical of family office, 1031-exchange, or private equity NNN investors. Recommend: FL SOS for PA-SC Venture I LLC registration; Palm Beach County property records for FedEx West Palm Beach FL address; GA SOS for GA-related entity.",
        education: [],
        career: [],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "FedEx West Palm Beach FL industrial -- $11.8M WL CMBS (Trepp)" },
          { property: "", year: "", role: "", amount: 0, note: "GA commercial deal -- est. $14.2M WL (Trepp)" }
        ],
      }
    ],
  },

  "Housing Authority of Comal County TX": {
    parentFirm:      "Housing Authority of Comal County (HACC; Texas public housing authority; Comal County TX -- New Braunfels MSA)",
    hq:              "New Braunfels, TX (Comal County seat)",
    founded:         "Public housing authority (TX PHAs typically established 1960s-1980s under federal Housing Act)",
    aum:             "2 TX deals / $19.2M WL (Trepp); affordable/assisted housing portfolio in one of the fastest-growing US counties",
    focus:           "Affordable and assisted housing; Comal County TX (New Braunfels MSA -- Sunbelt exurban growth corridor between San Antonio and Austin)",
    currentStrategy: "Comal County (New Braunfels TX) is one of the fastest-growing counties in the US driven by San Antonio and Austin exurban expansion; population ~250,000+. Two WL entries at $19.2M likely reflect: CMBS servicer covenant monitoring; expiring Section 8 HAP contract creating DSCR uncertainty; or RAD (Rental Assistance Demonstration) conversion activity generating technical reporting triggers. Texas PHAs have increasingly pursued RAD conversions -- converting public housing to Section 8 PBRA, which creates CMBS-compatible debt structures and private equity partnerships.",
    states:          ["TX"],
    treppEntities:   ["HOUSING AUTHORITY COMAL COUNTY TX","HACC TX MF"],
    loans: [
      {
        property: "Comal County Affordable Housing Portfolio (2 assets)",
        address:  "New Braunfels TX (Comal County)",
        type:     "multifamily",
        balance:  19200000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "Public housing authority. 2 TX deals / $19.2M WL. Likely RAD conversion or Section 8 HAP technical trigger. Limited Baker Street workout angle.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Executive Director (name TBD)",
        title:         "Executive Director, Housing Authority of Comal County",
        firm:          "Housing Authority of Comal County (New Braunfels TX)",
        decisionPower: "ED oversees all HACC financing, asset management, and RAD conversion decisions subject to HACC Board of Commissioners approval.",
        background:    "Name not confirmed in public search. Contact via Comal County government directory or TPHA (Texas Public Housing Authorities) network. TDHCA (Texas Dept of Housing and Community Affairs, Austin TX) is the state oversight body. TX PHAs of this size typically have 3-10 staff.",
        education: [],
        career: [
          { firm: "Housing Authority of Comal County TX (public entity)", role: "Executive Director", years: "Current", note: "Name not confirmed. Contact via Comal County government directory or TPHA network." }
        ],
        deals: [
          { property: "2 TX affordable MF deals (specific addresses TBD)", year: "", role: "Borrower (public housing authority)", amount: 19, note: "Loan: $19.2M total WL | Lender: CMBS (Trepp) | DSCR: WL | Public entity; WL likely technical trigger; RAD conversion potential" }
        ],
      },
      {
        rank:          2,
        name:          "TDHCA / HUD Fort Worth Field Office",
        title:         "State and Federal Oversight Bodies",
        firm:          "Texas Dept of Housing and Community Affairs (Austin TX) / HUD Fort Worth Field Office",
        decisionPower: "TDHCA and HUD provide oversight and funding. Any RAD conversion or recapitalization runs through these bodies.",
        background:    "TDHCA oversees all Texas PHAs and administers federal affordable housing programs. HUD Fort Worth is the HUD regional contact for Central Texas PHAs.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Jon D. Bell / GA and TX Multifamily": {
    parentFirm:      "Bell Partners Inc. (Greensboro, NC -- private; NMHC Top 15 apartment manager)",
    hq:              "Greensboro, NC (Bell Partners HQ); Jon D. Bell also maintains presence in GA and TX markets",
    founded:         "Bell Partners founded 1976 by W. Robert Bell; Jon D. Bell joined 2001; became President 2009, CEO Feb 2016, Executive Chairman Jan 2022",
    aum:             "Bell Partners: 60,000+ units under management; NMHC #13 apartment manager; $10B+ in apartment transactions since 2002; nearly $5B transaction volume in 2021 alone",
    focus:           "High-quality multifamily investment and management; vertically integrated; Sun Belt and coastal markets; private, entrepreneurially-led with institutional discipline",
    currentStrategy: "Jon D. Bell is Executive Chairman of Bell Partners Inc. (Greensboro NC) -- one of the largest private apartment investment and management companies in the US. The GA and TX CMBS entries (2 deals / $21.7M) represent Bell Partners fund-level SPE vehicles, not personal investments. Bell Partners is privately held; ~25% transferred to non-family executives beginning Dec 2019. Jon Bell stepped down as CEO January 2022 when Lili F. Dunn became CEO. Bell's strategy: 'best-in-class apartment company operating like a public company in a private, entrepreneurial setting.' $21.7M across 2 GA+TX loans is a small slice of the overall $10B+ Bell platform.",
    states:          ["GA","TX","NC","CO","and national"],
    treppEntities:   ["JON D BELL GA TX MF","BELL PARTNERS GA CMBS","BELL PARTNERS TX CMBS"],
    loans: [
      {
        property: "Bell Partners GA Multifamily SPE",
        address:  "Georgia",
        type:     "multifamily",
        balance:  0,
        dscr:     0,
        status:   "watchlist",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "Bell Partners fund-level SPE. Routine servicer monitoring on stabilized asset within $10B+ institutional platform.",
      },
      {
        property: "Bell Partners TX Multifamily SPE",
        address:  "Texas",
        type:     "multifamily",
        balance:  0,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "Bell Partners fund-level SPE. Combined 2 deals / $21.7M. Exact balances TBD from Trepp. NMHC Top 15 operator -- not distressed.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Jon D. Bell",
        title:         "Executive Chairman (former CEO)",
        firm:          "Bell Partners Inc. (Greensboro, NC)",
        decisionPower: "Executive Chairman since January 2022. Strategic oversight and board-level authority. Bell family remains combined majority owners.",
        background:    "BS Real Estate and Finance, University of Georgia. MBA Real Estate and Finance, University of North Carolina at Chapel Hill (Kenan-Flagler). Joined Bell Partners 2001 after serving as Principal at Faison & Associates LLC and Principal at Lend Lease Real Estate Investments Inc. President 2009-2016. CEO Feb 2016-Jan 2022 -- oversaw $10B+ in transactions including largest-ever Denver deal (Horizons at Rock Creek, 1,206 units, ~$250M). Named Executive Chairman Jan 2022 when Lili Dunn became CEO. NMHC Top 15 manager for over a decade. Board: UNC-Chapel Hill, Piedmont Triad Partnership, NMHC, Greensboro Beautiful.",
        education: [
          { school: "University of Georgia", degree: "BS Real Estate and Finance", year: "Unknown", note: "" },
          { school: "University of North Carolina at Chapel Hill (Kenan-Flagler Business School)", degree: "MBA Real Estate and Finance", year: "Pre-2001", note: "" }
        ],
        career: [
          { firm: "Faison & Associates LLC", role: "Principal", years: "Pre-2001", note: "Charlotte NC-based RE firm" },
          { firm: "Lend Lease Real Estate Investments Inc.", role: "Principal", years: "Pre-2001", note: "Institutional RE investment management" },
          { firm: "Bell Partners Inc.", role: "Senior executive", years: "2001-2009", note: "Deepened institutional platform" },
          { firm: "Bell Partners Inc.", role: "President", years: "2009-2016", note: "NMHC Top 15 positioning" },
          { firm: "Bell Partners Inc.", role: "Chief Executive Officer", years: "2016-2022", note: "Nearly $5B transaction volume in 2021" },
          { firm: "Bell Partners Inc.", role: "Executive Chairman", years: "2022-present", note: "Succeeded by Lili Dunn (CEO Jan 2022)" }
        ],
        deals: [
          { property: "Bell Partners GA and TX fund SPEs (2 deals)", year: "", role: "Platform owner (Executive Chairman)", amount: 22, note: "Loan: $21.7M CMBS | Lender: WL (watchlist) | Small slice of $10B+ Bell platform; routine servicer monitoring likely" },
          { property: "Horizons at Rock Creek, Superior CO", year: "", role: "CEO/acquirer", amount: 0, note: "Loan: ~$250M acquisition | Lender: Institutional | 1,206 units; largest Bell Denver deal" }
        ],
      },
      {
        rank:          2,
        name:          "Lili F. Dunn",
        title:         "President and Chief Executive Officer",
        firm:          "Bell Partners Inc. (Greensboro, NC)",
        decisionPower: "CEO since January 2022. All operational and investment committee decisions. Primary Baker Street contact for any Bell Partners financing or workout discussions.",
        background:    "Joined Bell Partners 2010 as CIO after ~20 years at AvalonBay Communities and predecessor Trammell Crow Residential. Became President 2016. CEO January 2022. Named 2021 MHN Executive of the Year.",
        education: [],
        career: [
          { firm: "AvalonBay Communities / Trammell Crow Residential", role: "Executive", years: "Pre-2010", note: "~20 years institutional apartment REIT operations" },
          { firm: "Bell Partners Inc.", role: "Chief Investment Officer", years: "2010-2016", note: "Brought public REIT discipline to Bell" },
          { firm: "Bell Partners Inc.", role: "President", years: "2016-2022", note: "2021 MHN Executive of the Year" },
          { firm: "Bell Partners Inc.", role: "President and CEO", years: "2022-present", note: "Succeeded Jon D. Bell; leads 60,000+ unit platform" }
        ],
        deals: [],
      }
    ],
  },

  "Hardial Singh / TX Multifamily": {
    parentFirm:      "Private individual (TX)",
    hq:              "Texas (est. -- Houston or Dallas metro)",
    founded:         "Unknown",
    aum:             "2 TX deals / $7.2M WL (Trepp)",
    focus:           "Texas multifamily, small-balance; Class B/C suburban Houston or Dallas",
    currentStrategy: "2 TX deals / $7.2M WL. Small-balance TX MF at $3.6M average -- likely suburban Houston (Harris County) or Dallas (Dallas/Tarrant County) Class C apartments, 20-60 units each. TX MF market was oversupplied 2022-2024 particularly in suburban Houston and DFW, compressing Class C rents and occupancy.",
    states:          ["TX"],
    treppEntities:   ["HARDIAL SINGH TX MF"],
    loans: [
      {
        property: "TX Multifamily Portfolio (2 assets)",
        address:  "Texas (Harris or Dallas County)",
        type:     "multifamily",
        balance:  7200000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "2 TX deals / $7.2M WL. Avg $3.6M -- small-balance suburban TX MF. TX county records needed.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Hardial Singh",
        title:         "Principal / Borrower",
        firm:          "Private (TX)",
        decisionPower: "Owner of 2 TX CMBS-financed multifamily properties.",
        background:    "No confirmed public biography. Punjabi/Sikh name suggests TX Indian-American investor community (Houston or DFW metro). TX county records search (Harris County CAD at hcad.org or Dallas County) recommended for property identification and LLC chain.",
        education: [],
        career: [
          { firm: "Private TX entities", role: "Private multifamily investor", years: "Unknown", note: "2 TX CMBS loans / $7.2M WL. Research: Harris County CAD or Dallas County records." }
        ],
        deals: [
          { property: "2 TX MF properties (county/address TBD)", year: "", role: "Borrower/Owner", amount: 7, note: "Loan: $7.2M total (2 deals avg $3.6M) | Lender: WL servicer(s) | DSCR: WL | Small-balance suburban TX MF; Harris or Dallas County likely" }
        ],
      },
      {
        rank:          2,
        name:          "CMBS Servicer (pull from Trepp)",
        title:         "WL Servicer -- 2 TX MF assets",
        firm:          "Unknown (pull from Trepp loan tape)",
        decisionPower: "Servicer holds workout authority. Identify via Trepp for SS escalation monitoring.",
        background:    "Two small-balance TX MF WL loans. Low-priority monitoring item.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Daniel A. Traylor / FL Multifamily": {
    parentFirm:      "Private individual / entities (FL)",
    hq:              "Florida (est.)",
    founded:         "Unknown",
    aum:             "2 FL deals / $14.8M (Trepp)",
    focus:           "Florida multifamily, mid-balance private investor",
    currentStrategy: "2 FL deals / $14.8M. At $7.4M average deal size, these are mid-sized FL apartment communities (50-150 units). Professional name format ('Daniel A.') suggests attorney, CPA, or finance background. FL county property records and FL SOS entity search are the primary research path.",
    states:          ["FL"],
    treppEntities:   ["DANIEL A TRAYLOR FL MF"],
    loans: [
      {
        property: "FL Multifamily Portfolio (2 assets)",
        address:  "Florida (county TBD)",
        type:     "multifamily",
        balance:  14800000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "2 FL deals / $14.8M. Avg $7.4M -- mid-balance FL MF 50-150 units. FL SOS and county records needed.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Daniel A. Traylor",
        title:         "Principal / Borrower",
        firm:          "Private (FL)",
        decisionPower: "Owner of 2 FL CMBS-financed multifamily properties.",
        background:    "No confirmed public biography. Professional name format (middle initial) suggests attorney or finance/accounting background. $14.8M across 2 deals consistent with HNW FL investor using CMBS for private MF acquisitions. FL SOS and county property records are the research path.",
        education: [],
        career: [
          { firm: "Private FL entities", role: "Private multifamily investor", years: "Unknown", note: "2 FL CMBS loans / $14.8M. Research path: FL SOS + county property records." }
        ],
        deals: [
          { property: "2 FL MF properties (county/address TBD)", year: "", role: "Borrower/Owner", amount: 15, note: "Loan: $14.8M total (2 deals avg $7.4M) | Lender: CMBS (Trepp) | DSCR: WL | FL SOS and county records needed" }
        ],
      },
      {
        rank:          2,
        name:          "CMBS Servicer (pull from Trepp)",
        title:         "WL Servicer -- 2 FL MF assets",
        firm:          "Unknown (pull from Trepp loan tape)",
        decisionPower: "Servicer oversight on WL loans. Identify via Trepp for SS escalation monitoring.",
        background:    "Two mid-balance FL MF WL loans. Identify servicer(s) via Trepp as precursor to engagement.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Tabani T Investments": {
    parentFirm:      "Related to Zaffar Tabani -- see sponsors2.js for full profile. Tabani T Investments is a subsidiary entity used for IL and GA deals.",
    hq:              "NOTE: See Zaffar Tabani entry in sponsors2.js",
    founded:         "NOTE: See sponsors2.js",
    aum:             "2 deals IL + GA / $16M (Trepp) -- additional treppEntities to merge into existing Zaffar Tabani sponsors2.js entry",
    focus:           "IL and GA retail/multifamily (Tabani Group vertical)",
    currentStrategy: "NOTE: Zaffar Tabani / Tabani Group is already profiled in sponsors2.js (Peninsula Town Center VA Retail entry). Tabani T Investments represents additional IL and GA deal activity not yet captured in the existing sponsors2.js profile. ACTION: Add treppEntities 'TABANI T INVESTMENTS IL' and 'TABANI T INVESTMENTS GA' to the existing Zaffar Tabani / Tabani Group entry in sponsors2.js.",
    states:          ["IL","GA"],
    treppEntities:   ["TABANI T INVESTMENTS IL","TABANI T INVESTMENTS GA"],
    loans: [
      {
        property: "Tabani IL Portfolio",
        address:  "Illinois",
        type:     "retail",
        balance:  0,
        dscr:     0,
        status:   "watchlist",
        state:    "IL",
        maturity: "",
        servicer: "",
        note:     "Cross-ref: see Zaffar Tabani in sponsors2.js for full profile. TABANI T INVESTMENTS IL entity -- add to sponsors2.js treppEntities.",
      },
      {
        property: "Tabani GA Portfolio",
        address:  "Georgia",
        type:     "retail",
        balance:  0,
        dscr:     0,
        status:   "watchlist",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "Cross-ref: see Zaffar Tabani in sponsors2.js. TABANI T INVESTMENTS GA entity -- add to sponsors2.js treppEntities. Combined 2 deals / $16M.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Zaffar Tabani",
        title:         "NOTE: See sponsors2.js entry for full Zaffar Tabani / Tabani Group profile",
        firm:          "Tabani Group / Tabani T Investments",
        decisionPower: "See sponsors2.js",
        background:    "See sponsors2.js for full Zaffar Tabani profile. Tabani T Investments is an entity used for IL and GA deal activity -- add these treppEntities to the existing sponsors2.js Tabani Group entry.",
        education: [],
        career: [],
        deals: [
          { property: "", year: "", role: "", amount: 0, note: "Tabani T Investments -- 2 deals IL + GA / $16M (merge into Zaffar Tabani sponsors2.js entry)" }
        ],
      }
    ],
  }

};

// Backwards compatibility aliases
var SPONSORS_NATIONAL = SPONSORS4;
var SPONSORS_REGIONAL = SPONSORS4;
var SPONSORS_ADDITIONAL = SPONSORS4;
