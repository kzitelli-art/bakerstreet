// sponsors3.js -- Baker Street Capital Advisors
// Distressed borrowers: watchlist and special servicer profiles (entries 85-126)
// Last updated: March 2026
// Schema: parentFirm, hq, founded, aum, focus, currentStrategy, states[], treppEntities[], loans[], people[]
// People: rank, name, title, firm, decisionPower, background, education[], career[], deals[]

var SPONSORS3 = {

  "Joel Nelson / LCS (Life Care Services)": {
    parentFirm:      "LCS Holding Company LLC",
    hq:              "400 Locust St Suite 820, Des Moines IA 50309",
    founded:         "1971",
    aum:             "See Life Care Services (LCS) entry. Joel Nelson is Chairman; Chris Bird is CEO as of Jan 2025.",
    focus:           "See Life Care Services (LCS) entry. This entry is a Trepp entity alias pointing to the same platform.",
    currentStrategy: "See Life Care Services (LCS) entry.",
    states:          ["FL","VA","TX","IL","GA"],
    treppEntities:   ["Joel Nelson / LCS (Life Care Services)","Life Care Services LLC"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Joel Nelson",
        title:         "Chairman of the Board (former CEO 2018-2024)",
        firm:          "Life Care Services (LCS)",
        decisionPower: "See Life Care Services (LCS) entry for full profile.",
        background:    "Joined LCS in 1986 as administrator-in-training fresh out of Simpson College. Spent 38+ years with LCS rising through operations, development, and executive roles. Founded LCS Real Estate (2011). President & COO (2015). CEO (2018-2024). Now Chairman of the Board. Simpson College BA in Business Management & Health Care Administration. Active in Argentum (former board chairman) and National Investment Center senior living advisory board.",
        education: [
          { school: "Simpson College (Indianola, Iowa)", degree: "BA Business Management & Health Care Administration", year: "~1986", note: "Iowa-based liberal arts college." }
        ],
        career: [
          { firm: "Life Care Services (LCS)", role: "Administrator-in-Training (AIT)", years: "1986", note: "Entered senior living industry after internship at local hospital trauma center. Recruited by LCS in 1986. Started in LCS Operations." },
          { firm: "Life Care Services (LCS)", role: "Various executive roles including EVP Chief Development Officer; EVP Director of Operations", years: "1986-2011", note: "25-year ascent through operations and development leadership." },
          { firm: "LCS Real Estate", role: "Founder / Launch Lead", years: "2011", note: "Chosen to launch LCS Real Estate as a new company within the LCS family of companies." },
          { firm: "Life Care Services (LCS)", role: "President & COO", years: "2015-2018", note: "" },
          { firm: "Life Care Services (LCS)", role: "President & CEO", years: "Jan 2018-Jan 2025", note: "Succeeded longtime CEO Ed Kenny (38 years, now Chairman). Only the fourth CEO in LCS history since 1971." },
          { firm: "Life Care Services (LCS)", role: "Chairman of the Board", years: "Jan 2025-present", note: "Succeeded by Chris Bird as CEO Jan 1, 2025. Nelson remains Chairman and Investment Committee member." }
        ],
        deals: [],
      }
    ],
  },

  "Zaffar Tabani / Peninsula Town Center": {
    parentFirm:      "Tabani Group (private, Dallas TX area)",
    hq:              "Dallas, TX (probable; Tabani Group is Texas-based)",
    founded:         "Unknown",
    aum:             "Unknown -- private; regional retail developer/investor",
    focus:           "Retail real estate; value-add and repositioning; Mid-Atlantic and Southeast",
    currentStrategy: "Zaffar Tabani is the founder/principal of the Tabani Group, a Dallas TX-based private real estate investment and development company with a national retail portfolio. Peninsula Town Center (Hampton VA, Hampton Roads market) is a 485,000 SF open-air lifestyle/power center at 4315 Columbus Street -- one of the largest mixed-use retail centers in the Hampton Roads area with tenants including Target, Trader Joe's, Dick's Sporting Goods, The Container Store, and multiple restaurants. The $13.5M SS loan without a DSCR suggests the borrower entity held a specific parcel or outparcel/pad within the larger Peninsula Town Center development. The Tabani Group operates a diverse national portfolio of retail centers; separate IL and GA entries in sponsors4.js (TABANI T INVESTMENTS IL, TABANI T INVESTMENTS GA) represent additional CMBS exposure. Hampton Roads retail has faced anchor departures and power center erosion typical of mid-2010s. Peninsula Town Center as a whole has been repositioned with mixed-use elements but specific SPE-level CMBS is likely a pad or phase of the larger project.",
    states:          ["VA","TX"],
    treppEntities:   ["Zaffar Tabani","Peninsula Town Center Hampton VA","Tabani Group"],
    loans: [
      {
        property: "Peninsula Town Center",
        address:  "4315 Columbus Street -- one of the largest mixed-use retail centers in the Hampton Roads area with tenants including Target",
        type:     "retail",
        balance:  13500000,
        dscr:     0,
        status:   "current",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Zaffar Tabani",
        title:         "Founder and Principal",
        firm:          "Tabani Group (Dallas TX area)",
        decisionPower: "Founder and controlling principal of Tabani Group. All major investment decisions, CMBS loan negotiations, and workout discussions flow through Zaffar.",
        background:    "Dallas TX-based private real estate investor and developer. Founded Tabani Group as a family-owned retail real estate investment and development platform. National portfolio of retail centers -- Texas primary base with expansion to VA, IL, and GA per CMBS exposure map. Peninsula Town Center (Hampton VA) = 485,000 SF open-air lifestyle/power center; $13.5M SS on a specific SPE within the development. Additional CMBS exposure: TABANI T INVESTMENTS IL and TABANI T INVESTMENTS GA (sponsors4.js). No institutional CRE prior employer found in public sources; appears to be a founder-investor who built the portfolio organically from Texas base. Pakistani-American name suggests possible Dallas South Asian investor community background. No confirmed education or prior career in public sources.",
        education: [],
        career: [
          { firm: "Tabani Group (Dallas TX)", role: "Founder and Principal", years: "Unknown-present", note: "National retail RE platform; TX primary; also VA, IL, GA per CMBS exposure; Peninsula Town Center Hampton VA; TABANI T INVESTMENTS IL + GA" }
        ],
        deals: [
          { property: "Peninsula Town Center, Hampton VA", year: "", role: "Borrower (SPE)", amount: 13500000, note: "Loan: $13.5M | Lender: SS (special servicer) | Score 75; retail; Hampton Roads market; SS flag; no DSCR; 485K SF open-air lifestyle center" },
          { property: "TABANI T INVESTMENTS IL", year: "", role: "Borrower", amount: 0, note: "Lender: WL/SS | Additional IL CMBS exposure per sponsors4; merge into this entry" },
          { property: "TABANI T INVESTMENTS GA", year: "", role: "Borrower", amount: 0, note: "Lender: WL/SS | Additional GA CMBS exposure per sponsors4; merge into this entry" }
        ],
      },
      {
        rank:          2,
        name:          "Zahir Tabani",
        title:         "Principal / Next Generation Family Member (probable -- verify)",
        firm:          "Tabani Group (Dallas TX)",
        decisionPower: "Likely involved in day-to-day operations or specific market management as next-generation family member. Verify via LinkedIn or TX SOS entity filings.",
        background:    "Several real estate professionals named Zahir Tabani appear in the Dallas TX market who may be connected to the Tabani Group. Recommend LinkedIn search and TX SOS search for Tabani Group entity to confirm family structure and any co-signatories on CMBS loans. If confirmed, Zahir would be the day-to-day Baker Street contact given Zaffar's likely more senior role.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Frank T. Sinito / The Millennia Companies": {
    parentFirm:      "The Millennia Companies (Millennia Housing Management Ltd.; Millennia Housing Development Ltd.)",
    hq:              "Cleveland, OH (Key Tower)",
    founded:         "1995",
    aum:             "275+ multifamily properties in 26 states; ~23,400+ units; also owns Key Tower and Key Center Cleveland (acquired 2017)",
    focus:           "Affordable housing acquisition, management, and development; HUD project-based Section 8; LIHTC; market-rate expansion; commercial (Key Tower, Marble Room restaurant brand)",
    currentStrategy: "Sinito founded Millennia in 1995 with simultaneous acquisition of a 566-unit (6-project) portfolio. Built to 275+ communities in 26 states. The Wichita Falls TX portfolio ($10.3M SS loan) is typical Millennia affordable housing. However, Sinito has faced major regulatory headwinds: federal raid of his home by HUD/USDA agents (ca. 2024); tenant advocacy campaigns (Millennia Resistance Campaign); HUD debarment proceedings; and sale of large portions of affordable portfolio. In June 2025 Sinito stepped away from daily operations, promoted Michael Pico to President/COO and Angelica Sinito to CIO. Now focused on market-rate expansion and redevelopment of 925 Euclid (The Centennial, $500M mixed-use in Cleveland). Education: SMU (Dallas). Also owns LockKeepers restaurant and Marble Room Sushi.",
    states:          ["OH","TX","MI","IN","WV","NY","KY","MO","IA","and 17 others"],
    treppEntities:   ["Frank T. Sinito","The Millennia Companies","Millennia Housing Management","Wichita Falls TX portfolio"],
    loans: [
      {
        property: "The Millennia Companies",
        address:  "OH",
        type:     "multifamily",
        balance:  10300000,
        dscr:     0,
        status:   "current",
        state:    "OH",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Frank T. Sinito",
        title:         "Founder and CEO (stepped back from daily ops June 2025)",
        firm:          "The Millennia Companies",
        decisionPower: "Founder; still ultimate owner/principal; stepped away from daily operations June 2025; replaced by Michael Pico (President/COO) and Angelica Sinito (CIO) for housing side",
        background:    "Founded Millennia in 1995 in Cleveland OH. Grew from 566 units to 275+ communities in 26 states. Acquired Key Tower and Cleveland Marriott Downtown (Key Center complex) in 2017. Also owns LockKeepers restaurant (1992, award-winning steak and seafood) and Marble Room steakhouse. Education: SMU (Southern Methodist University, Dallas). Diversified into commercial RE (Thornburg Station, $12M office/retail development in Valley View OH). Faced federal scrutiny ca. 2024: HUD/USDA agents raided his home; HUD debarment proceedings followed; Millennia announced forced sale of affordable portfolio. Millennia Resistance Campaign (tenant advocacy coalition) documented substandard conditions. June 2025: stepped back from Millennia Housing Management operations to focus on market-rate expansion and The Centennial ($500M mixed-use at 925 Euclid, Cleveland).",
        education: [
          { school: "Southern Methodist University", degree: "Undergraduate (field not confirmed)", year: "Pre-1992", note: "" }
        ],
        career: [
          { firm: "LockKeepers Restaurant", role: "Co-owner", years: "1992-present", note: "Award-winning Cleveland-area steak and seafood; opened Marble Room steakhouse at Key Center 2017; Marble Room Sushi fast-casual concept" },
          { firm: "The Millennia Companies", role: "Founder and CEO", years: "1995-2025", note: "Built affordable housing empire: 275+ communities, 26 states, 23,400+ units; acquired Key Tower 2017; faced HUD debarment 2024; stepped back June 2025" },
          { firm: "The Millennia Companies", role: "Non-operating founder", years: "2025-present", note: "Focus on The Centennial ($500M mixed-use, 925 Euclid Cleveland) and market-rate expansion" }
        ],
        deals: [
          { property: "Wichita Falls Portfolio, Wichita Falls TX", year: "", role: "Borrower", amount: 10300000, note: "Loan: $10.3M | Lender: SS (special servicer) | Score 75; affordable MF; TX; SS flag; part of larger Millennia portfolio under HUD scrutiny" },
          { property: "Key Tower + Key Center complex, Cleveland OH", year: "", role: "Owner", amount: 0, note: "Loan: N/A | Acquired 2017; 1.4M SF; includes Cleveland Marriott Downtown" },
          { property: "The Centennial (925 Euclid), Cleveland OH", year: "", role: "Developer", amount: 0, note: "Loan: N/A | $500M mixed-use redevelopment; $10M Ohio Brownfields grant Dec 2024" }
        ],
      },
      {
        rank:          2,
        name:          "Michael Pico",
        title:         "President and Chief Operating Officer",
        firm:          "The Millennia Companies",
        decisionPower: "Promoted June 2025 to President/COO of Millennia Housing Management; now leads daily operations of housing portfolio",
        background:    "Joined Millennia in 2021. Promoted to President/COO June 2025 as part of leadership restructuring when Sinito stepped back. Previously held roles in portfolio operations. Will lead day-to-day decisions on distressed loan resolutions including Wichita Falls.",
        education: [],
        career: [
          { firm: "The Millennia Companies", role: "COO", years: "2021-2025", note: "Joined 2021; strengthened operations" },
          { firm: "Millennia Housing Management Ltd.", role: "President and COO", years: "2025-present", note: "Promoted June 2025; leads daily housing operations post-Sinito step-back" }
        ],
        deals: [],
      }
    ],
  },

  "Terry D. Quinn / Sherman Medical Office": {
    parentFirm:      "Quinn family interests or Texas medical office LLC (private)",
    hq:              "Sherman, TX area (Grayson County, North Texas -- probable)",
    founded:         "Unknown",
    aum:             "Unknown -- private single-asset medical office investor",
    focus:           "Medical office real estate; North Texas secondary market (Sherman / Grayson County)",
    currentStrategy: "Terry D. Quinn is the identified borrower/principal on a $10.7M SS loan for a medical office property in Sherman TX. Sherman is the county seat of Grayson County in North Texas, approximately 65 miles north of Dallas near the Oklahoma border. The primary healthcare demand drivers in Sherman are Wilson N. Jones Regional Medical Center (part of UT Health East Texas, 207 beds) and Texoma Medical Center in adjacent Denison TX (334 beds, part of Community Health Systems). A medical office building tied to these systems would have been acquired or developed by a physician-developer or local HNW investor. SS flag without a reported DSCR suggests either a maturity default or covenant trigger rather than pure cash flow collapse -- medical office tenants are generally sticky (physician practices). The Sherman/Denison market has gained attention as a spillover market from Metroplex growth. Sherman attracted significant investment from semiconductor firm Texas Instruments (multi-billion dollar fab announced 2022) and GlobalFoundries, which could benefit the submarket over time but does not directly support existing medical office NOI.",
    states:          ["TX"],
    treppEntities:   ["Terry D. Quinn","Sherman Medical Office TX"],
    loans: [
      {
        property: "Sherman Medical Office",
        address:  "TX",
        type:     "hotel",
        balance:  10700000,
        dscr:     0,
        status:   "current",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Terry D. Quinn",
        title:         "Principal / Owner",
        firm:          "Unknown -- likely personal or family LLC (TX)",
        decisionPower: "Identified borrower and likely guarantor on the CMBS loan. Sole or primary decision-maker on workout strategy.",
        background:    "No confirmed public professional biography. Given the medical office asset type in a secondary TX market, Quinn is likely: (a) a local physician-developer who built or acquired a MOB adjacent to Wilson N. Jones or Texoma Medical Center; (b) a regional HNW commercial real estate investor in North Texas; or (c) a Dallas-area CRE investor with secondary market holdings. Sherman is approximately 65 miles north of Dallas and has attracted significant investment (Texas Instruments multi-billion fab 2022, GlobalFoundries). No LinkedIn, media coverage, or industry database results found. TX SOS entity search on the borrower LLC name (full loan tape needed from Trepp to get LLC name) is the research path. Grayson County Appraisal District (gcad.org) property search for the specific MOB address will identify the entity of record.",
        education: [],
        career: [
          { firm: "Private -- Sherman TX (Grayson County)", role: "Medical office developer/investor", years: "Unknown", note: "No public biography. Single-asset MOB borrower at CMBS SS. Research path: TX SOS + Grayson County Appraisal District (gcad.org)" }
        ],
        deals: [
          { property: "Sherman Medical Office Building, Sherman TX (Grayson County)", year: "", role: "Borrower / Guarantor", amount: 10700000, note: "Loan: $10.7M | Lender: SS (special servicer) | Score 75; MOB; secondary North TX market; SS flag; no DSCR reported" }
        ],
      },
      {
        rank:          2,
        name:          "Special Servicer Contact",
        title:         "Special Servicer -- contact path for Baker Street",
        firm:          "Unknown servicer (pull from Trepp loan tape)",
        decisionPower: "At SS status with no DSCR, the special servicer is the functional decision-maker on this asset. The servicer will be either LNR Partners, CWCapital, Torchlight, or similar for a Texas MOB CMBS vintage 2015-2020 loan.",
        background:    "The $10.7M Sherman TX MOB is in special servicing. The actual workout decision-making power has shifted to the SS. Baker Street approach: identify servicer from Trepp loan tape, contact SS asset manager directly. Brian Sherlock (UBS CMBS) would have direct relationships with most major special servicers from his conduit origination career.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "James E. Leonard / Arbor Flats FL": {
    parentFirm:      "Leonard family interests or Florida MF LLC (private)",
    hq:              "Unknown -- FL county deed records required",
    founded:         "Unknown",
    aum:             "Unknown -- private Florida MF investor",
    focus:           "Multifamily, Florida",
    currentStrategy: "$14.9M loan, DSCR 0.39 -- extreme distress, one of the lowest DSCRs in this batch. James E. Leonard is identified as the principal/borrower on Arbor Flats, a Florida multifamily property. DSCR 0.39 means NOI is covering less than 40% of annual debt service -- the property is bleeding cash. This level of distress typically reflects a combination of occupancy collapse (below 70-75%), expense spikes (insurance, taxes, maintenance), and/or below-market rents on a value-add asset that has not been repositioned. No public professional biography found for James E. Leonard in Florida CRE. The name is common; FL county deed records for Arbor Flats are the necessary first step to confirm the specific property location (which FL county/submarket) and the full LLC structure. At DSCR 0.39, the special servicer is almost certainly engaged and the loan is likely past modification territory -- note sale or REO are more likely outcomes.",
    states:          ["FL"],
    treppEntities:   ["James E. Leonard","Arbor Flats FL"],
    loans: [
      {
        property: "Arbor Flats FL",
        address:  "FL",
        type:     "multifamily",
        balance:  14900000,
        dscr:     0.39,
        status:   "special-servicing",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "James E. Leonard",
        title:         "Principal / Owner",
        firm:          "Unknown -- private FL MF investor",
        decisionPower: "Identified borrower and likely personal guarantor (bad-boy carve-outs). Sole or primary decision-maker.",
        background:    "No public professional biography found. Private Florida multifamily investor. DSCR 0.39 on a $14.9M FL MF loan is extreme distress. FL county deed records needed to: (1) confirm exact property address (which FL county -- Broward, Miami-Dade, Orange, Hillsborough?); (2) identify the exact borrower LLC name; (3) trace Leonard's personal guarantee exposure via mortgage documents. At this DSCR, the loan is likely already in advanced SS proceedings. FL SOS search on the borrower LLC will identify co-members and any other FL CRE holdings under Leonard.",
        education: [],
        career: [
          { firm: "Unknown FL MF LLC", role: "Private multifamily investor", years: "Unknown", note: "Borrower on Arbor Flats FL CMBS. Research path: FL SOS + county deed records" }
        ],
        deals: [
          { property: "Arbor Flats, Florida (county/submarket TBD -- FL deed records required)", year: "", role: "Borrower / Guarantor", amount: 14900000, note: "Loan: $14.9M | Lender: Unknown servicer | DSCR: 0.39 | Score 70; extreme distress; FL MF; private borrower" }
        ],
      },
      {
        rank:          2,
        name:          "Special Servicer / Receiver (likely engaged)",
        title:         "Special Servicer or Court-Appointed Receiver",
        firm:          "Unknown (pull from Trepp loan tape)",
        decisionPower: "At DSCR 0.39, the special servicer is the functional decision-maker and may have appointed a receiver. Workout advisory, note sale, or REO is the likely path. Baker Street should identify the SS via Trepp loan tape and engage directly.",
        background:    "DSCR 0.39 almost certainly means the SS is engaged and may have filed for receiver. FL receivership is handled through the circuit court of the county where the property is located. Once the county is confirmed, Baker Street can check court filings for any pending receivership order on Arbor Flats.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Summer Tree United LLC / Summer Tree FL": {
    parentFirm:      "Summer Tree United LLC (private; borrower entity) -- property currently managed by Innovation Overlook LLC (new management)",
    hq:              "Unknown -- FL SOS search for Summer Tree United LLC; property at 2350 Wanda Way, Tallahassee FL 32303",
    founded:         "Unknown",
    aum:             "Unknown -- single asset Leon County FL",
    focus:           "Multifamily, Class C -- Tallahassee FL (Leon County); university/college market; near Florida State University and Florida A&M University",
    currentStrategy: "Summer Tree Apartments is confirmed at 2350 Wanda Way, Tallahassee FL 32303 (Leon County). 1-3 bedroom units from $850/month, 725-900 SF. Property is in northwest Tallahassee near Lake Jackson and I-10, approximately 5 miles north of downtown. Near Tallahassee Community College (3.9 miles), Florida State University, and Florida A&M University -- student-adjacent demand but not a purpose-built student housing complex. Property was under new management as of 2024/2025 by Innovation Overlook LLC (per Apartment Finder listing: 'Summer Tree Apartments is under new management by Innovation Overlook'). The management change and DSCR 0.37 suggest the property was in deep operational distress leading to either a workout or lender-driven management replacement. DSCR 0.37 = NOI covering only 37 cents per dollar of debt service -- crisis level. FL insurance cost spikes 2022-2024 combined with soft Tallahassee Class C rents are the most likely drivers. Summer Tree United LLC is the CMBS SPE -- FL SOS (search.sunbiz.org) search will identify the registered agent and managing member.",
    states:          ["FL"],
    treppEntities:   ["Summer Tree United LLC","Summer Tree FL","2350 Wanda Way Tallahassee FL"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Unknown Managing Member",
        title:         "Managing Member -- Summer Tree United LLC (unidentified)",
        firm:          "Summer Tree United LLC (FL); Innovation Overlook LLC now manages property",
        decisionPower: "Unknown. Borrower of record is Summer Tree United LLC. Innovation Overlook LLC is the current third-party property manager -- their appointment may signal a receiver engagement or voluntary management change under SS pressure.",
        background:    "Property confirmed: 2350 Wanda Way, Tallahassee FL 32303. Class C MF, 1-3BR from $850/mo. Leon County. Near FSU and FAMU. Innovation Overlook LLC took over management as of 2024-2025 -- prior management was apparently removed or resigned. Summer Tree United LLC is the CMBS borrower. FL SOS search (search.sunbiz.org/Inquiry/CorporationSearch) for 'Summer Tree United LLC' will identify the registered agent and authorized persons. Leon County property appraiser records (leonpa.org) will confirm owner of record and deed chain.",
        education: [],
        career: [],
        deals: [
          { property: "Summer Tree Apartments, 2350 Wanda Way, Tallahassee FL 32303 (Leon County)", year: "", role: "Borrower (Summer Tree United LLC)", amount: 16300000, note: "Loan: $16.3M | Lender: Unknown servicer | DSCR: 0.37 | Score 70; extreme distress; Leon County FL Class C MF; Innovation Overlook new management; near FSU/FAMU; borrower principal unidentified" }
        ],
      }
    ],
  },

  "Alex Zdanov / Interforum Holdings": {
    parentFirm:      "Interforum Holdings (private, Northfield IL)",
    hq:              "Northfield, IL",
    founded:         "~2015 (Arden brand launched)",
    aum:             "Unknown -- private; portfolio includes 364-unit Arden of Warrenville + 60-unit Arden Townhomes",
    focus:           "Luxury multifamily and single-family rental (BTR); suburban Chicago (DuPage County); wellness-focused community design",
    currentStrategy: "Alex Zdanov is CEO of Interforum Holdings (Northfield IL). Developed Arden of Warrenville (364 units, Warrenville IL -- 30+ miles SW of Chicago) -- completed 2021, financed with $59.9M CIBC Bank USA construction loan. Added Arden Townhomes (60-unit BTR/SFR extension, 3-bed/2-car garage townhomes averaging 1,898 SF) at 28291-28417 Torch Parkway; $21.5M construction loan from Arbor Realty Trust (2022); refinanced 2024 with $20M floating-rate senior loan from Argentic Investment Management + $5M mezz from Pearlmark -- arranged by JLL (Niederberger and Galligan). Located in Cantera mixed-use TIF development (650 acres; EN Engineering, Exelon Nuclear, Liberty Mutual). The $20M Trepp loan (DSCR 0.66) likely reflects the Argentic/Pearlmark refi on Arden Townhomes. GC: McShane Construction. Architect: Baranyk Associates. Lenders on the main Arden complex: CIBC, Inland Bank, Associated Bank, Great Southern Bank, Arbor Multifamily.",
    states:          ["IL"],
    treppEntities:   ["Alex Zdanov","Interforum Holdings","Arden Townhomes Warrenville IL"],
    loans: [
      {
        property: "Interforum Holdings",
        address:  "IL",
        type:     "multifamily",
        balance:  59900000,
        dscr:     0.66,
        status:   "current",
        state:    "IL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Alex Zdanov",
        title:         "Chief Executive Officer",
        firm:          "Interforum Holdings",
        decisionPower: "CEO and founder; all development and financing decisions",
        background:    "CEO of Interforum Holdings (Northfield IL). Developed Arden of Warrenville -- 364-unit luxury apartment community in Cantera mixed-use development, Warrenville IL. Described Arden as 'the intersection of technology and social programs accentuating modern community living' -- wellness-focused brand. Extended with Arden Townhomes (60 BTR units). Uses institutional GC (McShane Construction) and institutional lenders (CIBC, Arbor, Argentic, Pearlmark). No prior institutional employer biography confirmed in public sources; appears to be a founder-developer rather than an ex-institutional executive.",
        education: [],
        career: [
          { firm: "Interforum Holdings", role: "CEO", years: "~2015-present", note: "Northfield IL; developed Arden of Warrenville (364 units, $59.9M CIBC construction loan, completed 2021) and Arden Townhomes (60 BTR units, $21.5M Arbor construction, $20M Argentic refi 2024)" }
        ],
        deals: [
          { property: "Arden Townhomes, 28291-28417 Torch Parkway, Warrenville IL", year: "", role: "Borrower/Developer", amount: 20, note: "Loan: $20M (Argentic senior) + $5M (Pearlmark mezz) | Lender: Argentic Investment Management (senior) / Pearlmark (mezz); DSCR loan in Trepp | DSCR: 0.66 | Score 70; BTR/SFR; 60 units, 3BD/2-car garage; JLL arranged 2024 refi; prior $21.5M Arbor RT construction loan" },
          { property: "Arden of Warrenville, Warrenville IL", year: "", role: "Developer", amount: 60, note: "Loan: $59.9M (CIBC Bank USA) | Lender: CIBC Bank USA + Inland + Associated + Great Southern + Arbor Multifamily | 364-unit luxury MF; completed 2021; GC McShane; arch Baranyk Associates" }
        ],
      },
      {
        rank:          2,
        name:          "Trent Niederberger / Philip Galligan (JLL Capital Markets)",
        title:         "Managing Director / Director, JLL Capital Markets -- arranged Arden Townhomes 2024 refi",
        firm:          "JLL Capital Markets (Chicago IL)",
        decisionPower: "Not decision-makers on the asset, but the JLL arrangers who structured the 2024 Argentic + Pearlmark refinancing for Arden Townhomes. They know Zdanov personally and are the optimal warm-intro path for Baker Street.",
        background:    "JLL Capital Markets arranged the $20M Argentic floating-rate senior loan and $5M Pearlmark mezz for Arden Townhomes in 2024. Trent Niederberger (MD) and Philip Galligan (Director) were the named arrangers in the deal. Chicago-based JLL Capital Markets has extensive DuPage County suburban Chicago MF relationships. They arranged financing for Zdanov and have insight into Arden Townhomes' current occupancy, NOI, and lease-up trajectory.",
        education: [],
        career: [
          { firm: "JLL Capital Markets, Chicago IL", role: "Managing Director (Niederberger) / Director (Galligan)", years: "Current", note: "Arranged Arden Townhomes 2024 Argentic + Pearlmark refi; warm intro path to Zdanov" }
        ],
        deals: [
          { property: "Arden Townhomes, Warrenville IL", year: "", role: "Debt arranger", amount: 20, note: "Loan: $20M Argentic + $5M Pearlmark | Lender: Arranged on behalf of Interforum Holdings / Alex Zdanov | 2024 refi; Baker Street warm intro path via Niederberger or Galligan" }
        ],
      }
    ],
  },

  "Orion Office REIT / Collins Aerospace Building VA": {
    parentFirm:      "Orion Properties Inc. (formerly Orion Office REIT Inc.) -- NYSE: ONL",
    hq:              "Phoenix, AZ",
    founded:         "2021 (spun off from Realty Income/VEREIT merger, Nov 12, 2021)",
    aum:             "~$1.5B gross assets (declining; active disposition program); previously $2B+",
    focus:           "Single-tenant net lease suburban office; mission-critical and corporate HQ buildings; creditworthy tenants; Mid-Atlantic, Southeast, and national",
    currentStrategy: "Orion Properties (formerly Orion Office REIT) spun off from Realty Income on Nov 12, 2021 after Realty Income merged with VEREIT. Inherited a portfolio of suburban office properties leased on net lease basis to creditworthy tenants. $355M, 5-year, 4.971% fixed-rate CMBS loan closed post-spin (Q4 2021). The Collins Aerospace Building (VA -- likely Northern Virginia/Hampton Roads given Collins Aerospace's significant VA DOD presence) is a single-tenant net lease asset. Collins Aerospace (RTX subsidiary) is the defense/aerospace division of Raytheon Technologies. As of 2024, Orion CEO Paul McDowell described office market as 'nuclear winter' and has sold 20+ assets. The $29.1M SS loan on the Collins Aerospace building suggests either lease non-renewal risk or broader CMBS loan collateral pool distress. Orion renamed to Orion Properties Inc. in March 2025; pending acquisition by Apollo Global Management (~$1.5B deal announced 2025).",
    states:          ["VA","and nationwide"],
    treppEntities:   ["Orion Office REIT","Orion Properties Inc.","Collins Aerospace Building VA"],
    loans: [
      {
        property: "Collins Aerospace Building VA",
        address:  "VA",
        type:     "office",
        balance:  355000000,
        dscr:     0,
        status:   "current",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Paul H. McDowell",
        title:         "President and CEO",
        firm:          "Orion Properties Inc. (formerly Orion Office REIT)",
        decisionPower: "CEO and President; all strategic and workout decisions",
        background:    "JD from Boston University School of Law (1987); BA from Tulane University (1982). Co-founder and CEO of CapLease Inc. (publicly traded net-lease REIT, 2001-2013; also served as SVP, General Counsel and Secretary 1994-2001). Then: President, Office and Industrial Group at VEREIT (formerly American Realty Capital / Spirit Realty); EVP and COO at VEREIT (2015-2021). Appointed CEO of Orion Office REIT at spin-off in November 2021. Has sold 20+ non-performing assets since spin, repaid significant CMBS debt. Described office market as 'nuclear winter' but sees acquisition opportunities in 2024-2025 for well-located assets with long-duration leases. Total compensation $3.95M (85.3% variable). Apollo acquisition pending ~$1.5B.",
        education: [
          { school: "Tulane University", degree: "BA", year: "1982", note: "" },
          { school: "Boston University School of Law", degree: "JD (with honors)", year: "1987", note: "" }
        ],
        career: [
          { firm: "CapLease Inc.", role: "SVP, General Counsel and Secretary", years: "1994-2001", note: "Publicly traded net-lease REIT; joined before IPO" },
          { firm: "CapLease Inc.", role: "CEO and Chairman", years: "2001-2013", note: "Led net-lease REIT; Board member; Chairman from Dec 2007" },
          { firm: "VEREIT Inc. (American Realty Capital / Spirit Realty)", role: "President, Office and Industrial Group", years: "2013-2015", note: "Post-CapLease; managed O&I portfolio" },
          { firm: "VEREIT Inc.", role: "EVP and COO", years: "2015-2021", note: "Broad operational leadership pre-Orion spin" },
          { firm: "Orion Properties Inc. (formerly Orion Office REIT)", role: "President and CEO", years: "2021-present", note: "Led spin-off; sold 20+ assets; pending Apollo acquisition ~$1.5B" }
        ],
        deals: [
          { property: "Collins Aerospace Building, Virginia", year: "", role: "Borrower (REIT)", amount: 29100000, note: "Loan: $29.1M | Lender: SS (special servicer; part of Orion portfolio CMBS) | Score 65; mixed-use/office; single-tenant net lease; Collins Aerospace (RTX) tenant; SS flag" },
          { property: "Orion portfolio CMBS loan", year: "", role: "Borrower", amount: 355, note: "Loan: $355M (4.971% fixed, 5-year, Q4 2021) | Lender: CMBS pool (multiple lenders) | Portfolio-level CMBS; collateral pool includes VA Collins Aerospace asset" }
        ],
      },
      {
        rank:          2,
        name:          "Gavin B. Brandon",
        title:         "EVP, Chief Financial Officer and Treasurer",
        firm:          "Orion Properties Inc.",
        decisionPower: "CFO; leads all debt, financing, and workout financial analysis",
        background:    "Ex-Chief Accounting Officer at VEREIT (Oct 2014-Nov 2021). Prior: CFO of three publicly registered non-listed Cole REITs (Cole Credit Income Trust I, II, and Cole Credit Property Trust II) -- all externally managed by Cole Real Estate Investments. Also: Principal Accounting Officer for Cole Credit Property Trust II and Cole Corporate Income Trust. Nine years at Deloitte and Touche LLP as Senior Manager in national office, real estate services. CPA. BA from Weber State University.",
        education: [
          { school: "Weber State University", degree: "BA", year: "Unknown", note: "" }
        ],
        career: [
          { firm: "Deloitte and Touche LLP", role: "Senior Manager, Real Estate Services", years: "Unknown-2014", note: "National office; CRE audit and advisory; 9 years" },
          { firm: "Cole Real Estate Investments (multiple non-listed REITs)", role: "Principal Accounting Officer / CFO", years: "Unknown-prior", note: "Cole Credit Income Trust I/II; Cole Credit Property Trust II; Cole Corporate Income Trust" },
          { firm: "VEREIT Inc.", role: "Chief Accounting Officer", years: "2014-2021", note: "Accounting, SEC reporting, tax, operational accounting; Investment Committee member" },
          { firm: "Orion Properties Inc.", role: "EVP, CFO and Treasurer", years: "2021-present", note: "All debt and financing; CMBS workout financial analysis" }
        ],
        deals: [],
      }
    ],
  },

  "ARHC / American Realty Capital Healthcare": {
    parentFirm:      "ARHC (American Realty Capital Healthcare Trust or affiliate) / American Realty Capital",
    hq:              "New York, NY",
    founded:         "~2012 (ARHC vehicle)",
    aum:             "Large non-listed REIT platform (billions AUM across multiple AR Capital vehicles)",
    focus:           "Net-lease healthcare and seniors housing (ARHC brand); non-listed REIT structures",
    currentStrategy: "DSCR 0.05 is catastrophically low -- essentially zero NOI relative to debt service. Renaissance On Peachtree is a Georgia multifamily property tied to an ARHC (American Realty Capital Healthcare) vehicle. AR Capital (Nicholas Schorsch and William Kahane founders) ran multiple non-listed REIT platforms; ARHC was the healthcare/seniors focus vehicle. At DSCR 0.05, this property is likely vacant or operating at near-zero NOI -- suggesting abandonment, casualty, or complete lease termination. ARHC entities have been in disposition/wind-down mode since the broader AR Capital accounting scandal (2014-2016) that led to SEC settlements.",
    states:          ["GA","and nationwide"],
    treppEntities:   ["ARHC","American Realty Capital Healthcare","Renaissance On Peachtree GA"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Nicholas Schorsch",
        title:         "Former Executive Chairman and Co-Founder (now distanced)",
        firm:          "AR Capital / American Realty Capital (parent of ARHC)",
        decisionPower: "Reduced -- Schorsch resigned from American Realty Capital Properties board 2014 amid accounting scandal; ARHC vehicles in wind-down",
        background:    "Born March 2, 1961 in Philadelphia PA to Irvin G. Schorsch Jr. and Anita (nee Ulick) Schorsch. Attended Drexel University (Philadelphia) while working for family scrap metal business from age 17. Took over family business, grew to millions in revenue, sold at age 23. Founded Thermal Reduction Corporation (metal products manufacturing); sold interest 1994. In 1995 co-founded American Financial Resource Group (Jenkintown PA) with wife Shelley. Took American Financial Realty Trust (AFRT) public 2003 (NYSE: AFR) as CEO. Left AFRT 2006. In 2007 co-founded American Realty Capital (AR Capital) with William Kahane; built into largest non-listed REIT sponsor in the US. Ran multiple parallel vehicles: ARCP (largest net lease REIT by enterprise value), ARHC (healthcare), ARCT (listed NASDAQ 2012), and many others. Ernst & Young Entrepreneur of the Year 2003 and 2011 Lifetime Achievement Award. SEC accounting scandal 2014 involving ARCP restatement; resigned from all public boards. ARHC and legacy AR Capital vehicles sold/wound down.",
        education: [
          { school: "Drexel University (Philadelphia, PA)", degree: "Unknown degree -- attended while working family business", year: "Late 1970s-early 1980s", note: "" }
        ],
        career: [
          { firm: "Schorsch family business interests", role: "Family scrap metal business + Thermal Reduction Corporation (manufacturing)", years: "~1978-1994", note: "Sold family scrap business at 23 for significant sum; built Thermal Reduction" },
          { firm: "American Financial Realty Trust (AFRT, NYSE: AFR)", role: "CEO", years: "1995-2006", note: "Took public 2003; bank branch real estate focus; acquired 1,500+ properties worth $5B+" },
          { firm: "AR Capital / American Realty Capital", role: "CEO and Co-Founder", years: "2007-2014", note: "Largest non-listed REIT sponsor; ARCP, ARHC, ARC Healthcare, multiple vehicles; resigned 2014 amid SEC accounting scandal" }
        ],
        deals: [
          { property: "Renaissance On Peachtree, Georgia", year: "", role: "Borrower (ARHC affiliate)", amount: 12200000, note: "Loan: $12.2M | Lender: Unknown servicer | DSCR: 0.05 | Score 65; catastrophic distress; likely foreclosure/REO candidate; AR Capital legacy asset" }
        ],
      },
      {
        rank:          2,
        name:          "William M. Kahane",
        title:         "Co-Founder, AR Capital (now AR Global); reduced role since ~2015",
        firm:          "AR Capital / AR Global (New York NY)",
        decisionPower: "Co-founded AR Capital with Schorsch; built AR Capital into largest non-listed REIT sponsor. Board member across multiple AR Capital vehicles until SEC scrutiny. As of late 2017, SEC filings indicate he was no longer a Director in any AR Capital entity. Operational control of ARHC legacy assets is with trustees/servicers, not Kahane.",
        background:    "Born 1948. BA Occidental College; MBA Stanford Graduate School of Business; JD UCLA School of Law. Began real estate career as a lawyer in 1974 (public and private sectors). From 1981 to 1992 at Morgan Stanley & Co. -- specialized in real estate, became Managing Director. Co-founded AR Capital with Schorsch in 2007 after both came from AFRT (Schorsch as CEO, Kahane as board/Finance Committee Chairman). Together built the largest non-listed REIT platform in the US. Kahane scaled back involvement ~2015-2017 as SEC scrutiny intensified.",
        education: [
          { school: "Occidental College", degree: "BA", year: "~1970", note: "" },
          { school: "Stanford Graduate School of Business", degree: "MBA", year: "Unknown", note: "" },
          { school: "UCLA School of Law", degree: "JD", year: "Unknown", note: "" }
        ],
        career: [
          { firm: "Law firm (public and private sectors)", role: "Real estate attorney", years: "1974-1981", note: "Specialized in CRE transactions" },
          { firm: "Morgan Stanley & Co.", role: "Managing Director, Real Estate", years: "1981-1992", note: "11 years; rose to MD in real estate finance" },
          { firm: "AR Capital / American Realty Capital (New York)", role: "Co-Founder", years: "2007-~2015", note: "Co-founded with Schorsch; largest non-listed REIT sponsor; stepped back ~2015-2017 amid SEC scrutiny" }
        ],
        deals: [
          { property: "ARHC legacy portfolio including Renaissance On Peachtree GA", year: "", role: "Co-Founder/Former Board Member", amount: 0, note: "Loan: Billions across AR Capital vehicle portfolio | Lender: Multiple CMBS and bank lenders | No longer operationally involved; SS/trustee controls ARHC legacy assets" }
        ],
      }
    ],
  },

  "Apartment Income REIT / Watermarc FL": {
    parentFirm:      "Apartment Income REIT Corp. (AIR Communities) -- NYSE: AIRC",
    hq:              "Denver, CO",
    founded:         "2020 (spun off from Aimco / Apartment Investment and Management)",
    aum:             "~$8-10B (75+ apartment communities, ~25,000+ homes nationally)",
    focus:           "High-quality, diversified multifamily; coastal and urban markets; focus on same-store NOI growth; no development risk; separated from Aimco in 2020 spin",
    currentStrategy: "AIR Communities (Apartment Income REIT) spun off from Aimco in December 2020. Watermarc is an AIR-owned Florida luxury/high-quality MF community. DSCR 0.93 is near-stabilized for a large institutional FL MF -- $98.3M loan suggests a flagship community. AIR CEO is Terry Considine (Aimco founder). Strategy: no development, pure operating portfolio; high-quality coastal/urban MF; active rent optimization; JV structures with institutional partners.",
    states:          ["FL","CO","CA","and nationwide"],
    treppEntities:   ["Apartment Income REIT","AIR Communities","Watermarc FL"],
    loans: [
      {
        property: "Watermarc FL",
        address:  "FL",
        type:     "multifamily",
        balance:  98300000,
        dscr:     0.93,
        status:   "current",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Terry Considine",
        title:         "Chairman and CEO",
        firm:          "Apartment Income REIT Corp. (AIR Communities) / Aimco",
        decisionPower: "Top decision-maker at both AIR Communities and Aimco. Controls all major financing and disposition decisions for Watermarc FL and the broader portfolio.",
        background:    "Founder of Aimco (Apartment Investment and Management Co., NYSE: AIV). Oversaw the December 2020 spin separating AIR Communities (NYSE: AIRC; pure operating MF portfolio) from Aimco (development/redevelopment). AIR CEO since spin. Colorado-based. Deep REIT governance, public market, and CRE experience spanning 30+ years. AIR currently owns 75+ apartment communities with ~25,000 homes, primarily coastal and urban markets. NOTE: Considine is also the controlling figure behind the Brickell Bay Tower SPE entry (1001 Brickell FL) -- Aimco bought 95% of that office building in July 2019.",
        education: [],
        career: [
          { firm: "Aimco / Apartment Income REIT (AIR Communities)", role: "Chairman and CEO", years: "1994-present", note: "Founded Aimco; oversaw Dec 2020 spin into AIR + Aimco; AIR is pure operating portfolio (~25,000 homes); also controls 1001 Brickell Bay office via Aimco" }
        ],
        deals: [
          { property: "Watermarc, Florida", year: "", role: "Borrower (AIR Communities REIT)", amount: 98300000, note: "Loan: $98.3M | Lender: DSCR loan / unknown servicer | DSCR: 0.93 | Score 60; large FL luxury MF; near-stabilized DSCR; institutional REIT borrower" },
          { property: "1001 Brickell Bay Drive, Miami FL", year: "", role: "95% owner (via Aimco)", amount: 19, note: "Loan: $19.4M WL | Lender: WL servicer | Also separately tracked as Brickell Bay Tower SPE entry in this file" }
        ],
      },
      {
        rank:          2,
        name:          "Keith Kimmel",
        title:         "President, Property Operations",
        firm:          "Apartment Income REIT Corp. (AIR Communities)",
        decisionPower: "President of Property Operations -- oversees all FL and national property performance including Watermarc. Day-to-day operational decisions on NOI improvement, occupancy, and cost management. Key contact for any property-level DSCR deterioration.",
        background:    "President of Property Operations at AIR Communities. Oversees the operating performance of AIR's 75+ apartment communities nationally, including Florida assets like Watermarc. Responsible for implementing AIR's premium customer experience strategy ('Resident-First' operating model). Day-to-day contact for any Watermarc-specific operational or financial performance discussions.",
        education: [],
        career: [
          { firm: "AIR Communities (Denver CO)", role: "President, Property Operations", years: "Unknown-present", note: "Oversees all ~25,000 units nationally; FL assets include Watermarc" }
        ],
        deals: [],
      }
    ],
  },

  "Ephraim Kriel / Conyers Distribution Center": {
    parentFirm:      "Kriel family interests or industrial LLC (private)",
    hq:              "Unknown -- GA deed records required",
    founded:         "Unknown",
    aum:             "Unknown -- private industrial investor; likely 1-3 GA properties",
    focus:           "Industrial / distribution real estate; Georgia -- Conyers (Rockdale County), Atlanta metro east I-20 corridor",
    currentStrategy: "$25.6M loan, DSCR 0.90 -- near-breakeven industrial. Conyers is the county seat of Rockdale County, approximately 25 miles east of downtown Atlanta on I-20. The I-20 east corridor (Conyers, Covington, Social Circle) has been an active industrial market driven by Atlanta distribution demand, Amazon fulfillment infrastructure, and the Port of Savannah supply chain. A distribution center at this loan size (25K-75K SF estimated) likely serves regional 3PL or retail distribution. DSCR 0.90 is not acute distress but places it on watchlist monitoring. The critical risk is single-tenant lease expiry -- if the anchor tenant departs or downsizes, DSCR would collapse below 0.50x on a distribution building. Ephraim Kriel is a private industrial investor with no confirmed public biography or CRE media presence. Name profile (Ephraim = Hebrew/Biblical given name) is common in South African-American and Israeli-American business communities, both of which have significant Atlanta metro CRE footprints.",
    states:          ["GA"],
    treppEntities:   ["Ephraim Kriel","Conyers Distribution Center GA"],
    loans: [
      {
        property: "Conyers Distribution Center",
        address:  "GA",
        type:     "retail",
        balance:  25600000,
        dscr:     0.9,
        status:   "watchlist",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Ephraim Kriel",
        title:         "Principal / Owner",
        firm:          "Unknown -- private industrial investor (GA)",
        decisionPower: "Identified borrower and likely personal guarantor. Sole or primary decision-maker on lease negotiation and financing strategy.",
        background:    "No confirmed public professional biography. Private industrial real estate investor in the Atlanta metro east I-20 corridor. Conyers (Rockdale County) is an established distribution submarket with I-20 access and proximity to CSX rail. DSCR 0.90 suggests a near-stabilized asset that is modestly cash-flow negative on an all-in debt service basis. Research path: (1) Rockdale County Tax Assessor (rockdaletax.org) for property owner of record at the Conyers address; (2) GA Secretary of State entity search for Kriel's borrower LLC; (3) CoStar or LoopNet for tenant information and lease expiry.",
        education: [],
        career: [
          { firm: "Unknown GA industrial LLC", role: "Private industrial investor", years: "Unknown", note: "Owner of Conyers Distribution Center, Rockdale County GA. Research path: Rockdale County Tax Assessor + GA SOS" }
        ],
        deals: [
          { property: "Conyers Distribution Center, Conyers GA (Rockdale County -- I-20 east corridor)", year: "", role: "Borrower / Guarantor", amount: 25600000, note: "Loan: $25.6M | Lender: Unknown servicer | DSCR: 0.90 | Score 60; industrial/distribution; near-breakeven; single-tenant lease expiry is key risk" }
        ],
      },
      {
        rank:          2,
        name:          "Anchor Tenant (unidentified) / CMBS Servicer",
        title:         "Key counterparties -- identify before any Baker Street engagement",
        firm:          "Unknown (CoStar pull for Conyers Distribution Center recommended)",
        decisionPower: "The anchor tenant's lease term is the single most important variable in this asset. If the tenant is in the final 18 months of their lease, DSCR will collapse regardless of Kriel's actions. The CMBS servicer (identified via Trepp) is the lender-side counterparty.",
        background:    "Conyers GA I-20 industrial corridor is home to major tenants including Pratt Industries, Solo Cup / Dart Container, Hillphoenix, and Amazon fulfillment infrastructure. The Conyers Distribution Center anchor tenant is most likely a single regional distribution or light manufacturing operator. CoStar will identify the tenant. Once tenant identity and lease expiry are confirmed, Baker Street can assess whether this is a proactive refinancing situation (DSCR recovers) or a pending workout (tenant leaves).",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Adam Freedman / Tamarac Village FL": {
    parentFirm:      "Lotis Group (Boca Raton FL) / JKM Developers LLC -- Adam P. Freedman is co-founder and CFO",
    hq:              "2300 Glades Road, Suite 202E, Boca Raton, FL 33431",
    founded:         "JKM Developers: 2008; Lotis Group rebranded: 2019-2020",
    aum:             "Unknown total AUM; Tamarac Village Phase I+II = 401 units / $95M MF1 Capital bridge (2024); multiple South FL active senior and MF projects",
    focus:           "Class A ground-up multifamily, public-private partnership (PPP) developments, senior living; South Florida (Broward, Palm Beach, Miami-Dade); vertical development on city-owned ground leases",
    currentStrategy: "Tamarac Village is a 401-unit luxury rental complex at 9141 W Commercial Blvd, Tamarac FL 33351 (Broward County). Developed in two phases: Phase I (211 units, completed 2020) and Phase II (190 units, 2023) -- both on a ground lease from the City of Tamarac. Amenities: resort pool, 2-story clubhouse, 9,000 SF fitness/game center. Phase I refi: $45M Limekiln Real Estate (arranged by Aztec Group -- Sean Harrington + Joel Zusman), 2021 -- 8th deal between Lotis and Aztec Group. Phase I+II combined refi: $95M MF1 Capital bridge loan, 2024 (also Aztec). Capital Solutions Inc. (Blue Bell PA) was equity co-investor. City of Tamarac owns the land; Lotis holds ground lease. Managed by JKM Developers LLC (Lotis subsidiary). The Trepp WL loan (DSCR 0.92) is likely the 2021 Phase I loan or a legacy tranche prior to the 2024 $95M refi -- the 2024 MF1 Capital bridge would be the current senior debt. FL insurance cost escalation 2022-2024 is the most likely DSCR drag on a new-construction Class A Broward County asset.",
    states:          ["FL"],
    treppEntities:   ["Adam Freedman","Tamarac Village FL","JKM Developers Tamarac"],
    loans: [
      {
        property: "Tamarac Village FL",
        address:  "9141 W Commercial Blvd",
        type:     "hotel",
        balance:  45000000,
        dscr:     0.92,
        status:   "current",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Adam P. Freedman",
        title:         "Co-Founder and CFO, Lotis Group / JKM Developers LLC",
        firm:          "Lotis Group / JKM Developers LLC (Boca Raton, FL)",
        decisionPower: "Co-founder and financial principal. Oversees sourcing capital, risk management, and oversight of investment operations. Registered agent on multiple Lotis entities. Primary financial decision-maker for Tamarac Village and all Lotis Group projects.",
        background:    "Boca Raton, FL-based developer. Holds degrees in Finance, Economics, and Management Information Systems from the University of Delaware. Early career: analyst at Trans Union (credit reporting). 2008: co-founded JKM Developers with James S. Gielda and John K. Markey after several years at a local real estate firm; the three exited together to launch JKM. JKM developed/entitled and sold several thousand residential units for a range of private and institutional investors over 12+ years. 2019-2020: Freedman, Gielda, and Johnson launched Lotis Group as the successor brand. Lotis has deep PPP (public-private partnership) expertise -- Tamarac Village is on city-owned land ground-leased from the City of Tamarac. Also active in senior living (HarborChase of Boynton Beach -- 140 ALF beds). Personal: married to Kristi; twin daughters Josie and Sadie; licensed skydiver and former national skydiving medalist. Active Boca Raton community figure.",
        education: [
          { school: "", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "", role: "", years: "", note: "" },
          { firm: "", role: "", years: "", note: "" },
          { firm: "", role: "", years: "", note: "" },
          { firm: "", role: "", years: "", note: "" }
        ],
        deals: [
          { property: "Tamarac Village Phase I, Tamarac FL -- 211 units completed 2020; $45M Limekiln refi (Aztec Group, 2021)", year: "", role: "Developer / Borrower", amount: 45, note: "Loan: $45M (Phase I) | Lender: Limekiln Real Estate | DSCR: 0.92 | 8th Aztec Group deal; ground lease from City of Tamarac; Capital Solutions Inc. equity partner" },
          { property: "Tamarac Village Phase I+II combined -- 401 units; $95M MF1 Capital bridge (Aztec Group, 2024)", year: "", role: "Developer / Borrower", amount: 95000000, note: "Loan: $95M | Lender: MF1 Capital | DSCR: N/A (bridge loan) | 2024 combined refi; Phase II (190 units) completed 2023" },
          { property: "HarborChase of Boynton Beach -- 140 ALF beds; $27.45M construction loan (Locust Point + Bank Hapoalim, 2021)", year: "", role: "Developer / Borrower", amount: 27450000, note: "Loan: $27.45M | Lender: Locust Point + Bank Hapoalim | DSCR: N/A (construction) | Lotis senior living; Straticon GC; on Military Trail, Boynton Beach FL" }
        ],
      },
      {
        rank:          2,
        name:          "John K. Markey",
        title:         "Co-Founder and CEO, Lotis Group / JKM Developers LLC",
        firm:          "Lotis Group / JKM Developers LLC (Boca Raton, FL)",
        decisionPower: "Co-founder and operating principal. Day-to-day leadership of Lotis described as 'led by John Markey' in press. Oversees overall development strategy. Key contact for deal-level discussions.",
        background:    "Boca Raton-based real estate developer. Previously at EB Developers (Boca Raton-based) before co-founding JKM Developers with Freedman and Gielda in 2008. Lotis Group was formally launched 2019 with Freedman, Gielda, and Johnson as co-founders under Markey's leadership. Has led Lotis through PPP structures with City of Tamarac, City of Boynton Beach, and other South FL municipalities.",
        education: [],
        career: [
          { firm: "", role: "", years: "", note: "" },
          { firm: "", role: "", years: "", note: "" },
          { firm: "", role: "", years: "", note: "" }
        ],
        deals: [
          { property: "Tamarac Village / HarborChase / other Lotis South FL projects (see Freedman entry)", year: "", role: "Developer / CEO", amount: 0, note: "Loan: Multiple | Lender: Multiple | Co-leads all Lotis projects with Freedman and Gielda" }
        ],
      }
    ],
  },

  "Fairfield Residential / Paradise Oaks TX": {
    parentFirm:      "Fairfield Residential LLC",
    hq:              "San Diego, CA",
    founded:         "1984",
    aum:             "~$8B+ (85,000+ apartment units; closed $1.1B Sunroad Enterprises portfolio acquisition 2025 -- 15 properties, 3,380 units in AZ, Carolinas, NV, CO, GA)",
    focus:           "Multifamily acquisition, development, and management; national; value-add and core-plus; Sun Belt focus",
    currentStrategy: "Fairfield Residential is one of the largest private MF operators in the US. Paradise Oaks is a Texas MF community. WL flag without DSCR suggests near-term monitoring. Fairfield is a sophisticated borrower. In 2025 closed a $1.1B acquisition of 15 Sunroad Enterprises properties (3,380 units) across AZ, Carolinas, NV, CO, GA -- demonstrating active capital deployment and institutional creditworthiness.",
    states:          ["TX","CA","AZ","NC","SC","NV","CO","GA","and nationwide"],
    treppEntities:   ["Fairfield Residential","Paradise Oaks TX"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Greg Pinkalla",
        title:         "President and CEO",
        firm:          "Fairfield Residential LLC (San Diego CA)",
        decisionPower: "CEO; leads all major acquisition, disposition, and financing decisions for 85,000+ unit national portfolio.",
        background:    "President and CEO of Fairfield Residential, one of the largest private apartment operators in the US. Fairfield was founded in 1984 in San Diego. Active acquisition pace: closed $1.1B acquisition of 15 Sunroad Enterprises properties (3,380 units) across AZ, Carolinas, NV, CO, GA in 2025. National platform with offices in San Diego (HQ), Atlanta, Dallas, and other Sun Belt markets. Fairfield develops, acquires, and manages market-rate and affordable multifamily communities. No confirmed public education profile for Pinkalla in available sources.",
        education: [],
        career: [
          { firm: "Fairfield Residential LLC (San Diego CA)", role: "President and CEO", years: "Unknown-present", note: "Founded 1984; 85,000+ units nationally; $1.1B Sunroad acquisition 2025 (15 properties, 3,380 units, AZ/Carolinas/NV/CO/GA)" }
        ],
        deals: [
          { property: "Paradise Oaks, Texas", year: "", role: "Borrower", amount: 22300000, note: "Loan: $22.3M | Lender: WL (watchlist) | Score 55; TX MF; WL flag; no DSCR reported; Fairfield is large institutional operator" }
        ],
      },
      {
        rank:          2,
        name:          "Adam Carr",
        title:         "Chief Investment Officer",
        firm:          "Fairfield Residential LLC",
        decisionPower: "CIO; leads all acquisition underwriting, due diligence, and capital markets decisions. Day-to-day contact for CMBS loan discussions and servicer communications.",
        background:    "CIO of Fairfield Residential. Oversees all investment strategy including TX MF acquisitions like Paradise Oaks. Responsible for the $1.1B Sunroad acquisition and ongoing acquisition pipeline. Most likely Baker Street contact for any Paradise Oaks WL loan advisory discussion.",
        education: [],
        career: [
          { firm: "Fairfield Residential LLC (San Diego CA)", role: "Chief Investment Officer", years: "Unknown-present", note: "Led $1.1B Sunroad Enterprises portfolio acquisition 2025; oversees TX and national investment activity" }
        ],
        deals: [],
      }
    ],
  },

  "Zach Haptonstall / Rise48 Equity": {
    parentFirm:      "Rise48 Equity / Rise48 Group",
    hq:              "Scottsdale, AZ (also Dallas, TX and Charlotte, NC offices)",
    founded:         "2019",
    aum:             "$2B+ AUM; $2.5B+ total transactions; 62+ assets acquired; 11,000+ units; 11 full-cycle dispositions",
    focus:           "Value-add multifamily syndication; Phoenix AZ, Dallas TX, Charlotte NC; retail (non-accredited and accredited investor) syndications; vertically integrated (Rise48 Communities PM + Rise48 Construction)",
    currentStrategy: "Rise48 acquired Paces Cove Apartments (328-unit MF community on Pandora Drive, Dallas TX) as part of its aggressive DFW expansion (9th Dallas acquisition by the time of purchase). Haptonstall co-founded Rise48 in 2019 with Bikran Sandhu (COO/CFO/CPA) and Robert Szewczyk (designated broker). Prior: Haptonstall was President/Co-Owner of Family Comfort Hospice (110+ employees, $9M+ revenue; sold 2021); before that Director of Business Development at Sage Hospice; also a former live TV news anchor and sports reporter for Arizona PBS and Fox Sports Network Arizona. MBA from Grand Canyon University. Founded ZH Multifamily in 2018 ($35M portfolio), then retired it to co-found Rise48. WL flag on Paces Cove likely reflects agency/conduit loan covenant review or occupancy monitoring.",
    states:          ["AZ","TX","NC"],
    treppEntities:   ["Zach Haptonstall","Rise48 Equity","Paces Cove Dallas TX"],
    loans: [
      {
        property: "Rise48 Equity",
        address:  "AZ",
        type:     "retail",
        balance:  9000000,
        dscr:     0,
        status:   "current",
        state:    "AZ",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Zach Haptonstall",
        title:         "CEO and Co-Founder",
        firm:          "Rise48 Equity / Rise48 Group",
        decisionPower: "CEO; all acquisitions, capital sourcing, and strategic partnerships",
        background:    "Born and raised Phoenix AZ. MBA from Grand Canyon University. Former live TV news anchor and sports reporter (Arizona PBS, Fox Sports Network Arizona). Transitioned to healthcare administration: Director of Business Development at Sage Hospice, then President/Co-Owner of Family Comfort Hospice (sold 2021). Founded ZH Multifamily 2018 ($35M portfolio; also founded Phoenix Multifamily Association 'PMA' with 200+ members). Retired ZH/PMA 2020; co-founded Rise48 Equity with Bikran Sandhu (CPA, COO/CFO) and Robert Szewczyk (designated broker). Rise48 reached $2B+ AUM by 2025; 62+ assets; 11 full-cycle dispositions. Offices in Scottsdale, Dallas, Charlotte.",
        education: [
          { school: "Grand Canyon University", degree: "MBA", year: "Pre-2019", note: "" }
        ],
        career: [
          { firm: "Arizona PBS / Fox Sports Network Arizona", role: "News Anchor and Sports Reporter", years: "Unknown-prior", note: "Live television; transitioned to healthcare and real estate" },
          { firm: "Sage Hospice and Palliative Care", role: "Director of Business Development", years: "Unknown-prior", note: "Phoenix AZ" },
          { firm: "Family Comfort Hospice", role: "President and Co-Owner", years: "Unknown-2021", note: "110+ employees; $9M+ revenue; successfully sold 2021" },
          { firm: "ZH Multifamily / Phoenix Multifamily Association", role: "Founder", years: "2018-2020", note: "$35M portfolio; 200+ member investor network; retired to co-found Rise48" },
          { firm: "Rise48 Equity", role: "CEO and Co-Founder", years: "2019-present", note: "Scottsdale/Dallas/Charlotte; $2.5B+ transactions; 11,000+ units; 250+ FTE employees" }
        ],
        deals: [
          { property: "Paces Cove Apartments, Pandora Drive, Dallas TX", year: "", role: "Borrower/GP", amount: 21900000, note: "Loan: $21.9M | Lender: WL (watchlist) | Score 55; 328 units; Rise48's 9th Dallas acquisition; WL flag" }
        ],
      },
      {
        rank:          2,
        name:          "Bikran Sandhu",
        title:         "COO, CFO, and Co-Founder",
        firm:          "Rise48 Equity",
        decisionPower: "Co-founder; all financial, accounting, and operational oversight",
        background:    "CPA. COO and CFO of Rise48 Equity. Co-founded Rise48 with Haptonstall and Szewczyk in 2019. Relocated to Scottsdale to build Rise48's operational platform. Oversees accounting, financial reporting, and investor capital management. Rise48 offers 100% covered healthcare and competitive salaries to 250+ FTE employees.",
        education: [],
        career: [
          { firm: "Rise48 Equity", role: "COO, CFO, and Co-Founder", years: "2019-present", note: "CPA; all financial oversight for $2B+ AUM portfolio" }
        ],
        deals: [],
      }
    ],
  },

  "Brickell Bay Tower SPE / 1001 Brickell FL": {
    parentFirm:      "Aimco (Apartment Investment and Management Co., NYSE: AIV) / Apartment Income REIT Corp (NYSE: AIRC) -- the Aimco family owns 95% of Brickell Bay Tower Ltd. Inc., the operating entity for 1001 Brickell Bay Drive, Miami FL",
    hq:              "Denver, CO (Aimco and AIR Communities HQ); 4582 South Ulster Street, Suite 1700, Denver CO 80237",
    founded:         "1001 Brickell Bay built 1985. Aimco acquired 95% of Brickell Bay Tower Ltd. Inc. on July 2, 2019 for $157M ($456/RSF) from Miami Blue Real Estate LLC (managed by Carla Meza, Miami-based broker). The seller (Brickell Bay Tower Ltd. Inc.) retained 5% minority interest post-sale.",
    aum:             "Aimco: development-focused spinco from 2020. AIR Communities: ~$8-10B gross AUM, 75+ apartment communities, ~25,000 homes nationally. The Brickell office asset (1001 Brickell Bay) is unusual for both entities -- it was an opportunistic acquisition given Aimco's adjacent Yacht Club at Brickell (31-story MF) across the street, combining for 4.25 waterfront acres in Brickell Financial District.",
    focus:           "1001 Brickell Bay: 32-story, 280,500-344,000 RSF Class A office tower at 1001 Brickell Bay Drive, Miami FL 33131; built 1985; Biscayne Bay waterfront; Brickell Financial District. Leased and managed by Blanca Commercial Real Estate (Miami's premier commercial RE brokerage).",
    currentStrategy: "Aimco acquired 95% of Brickell Bay Tower Ltd. Inc. on July 2, 2019 for $157M (off-market, not publicly announced until October 2019 when Florida corporate records updated). Aimco executive Matt Konrad (regional VP Transactions, Bethesda MD) confirmed the deal publicly; cited the assemblage with adjacent Yacht Club at Brickell (MF) as a critical factor for long-term waterfront redevelopment optionality. Building is 32 stories, directly on Biscayne Bay, in the heart of Brickell's financial district. Current leasing agent: Blanca Commercial Real Estate. In December 2020, Aimco spun off AIR Communities (NYSE: AIRC) -- the operating MF portfolio. The Brickell office asset likely remained with Aimco (development/redevelopment entity) not AIR (pure operating MF). CEO Terry Considine oversees both. $19.4M WL CMBS loan suggests a specific SPE-level financing vehicle encumbering the asset.",
    states:          ["FL","CO","CA","and nationwide"],
    treppEntities:   ["Brickell Bay Tower SPE","1001 Brickell FL","Brickell Bay Tower Ltd Inc","Aimco Brickell"],
    loans: [
      {
        property: "1001 Brickell FL",
        address:  "000 RSF Class A office tower at 1001 Brickell Bay Drive",
        type:     "office",
        balance:  157000000,
        dscr:     0,
        status:   "current",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Terry Considine",
        title:         "Chairman and CEO, Aimco and AIR Communities",
        firm:          "Apartment Investment and Management Co. (NYSE: AIV) / Apartment Income REIT Corp. (NYSE: AIRC)",
        decisionPower: "Top decision-maker at both Aimco and AIR Communities. Controls disposition and redevelopment strategy for 1001 Brickell Bay office tower via Aimco.",
        background:    "Founder, Chairman and CEO of Aimco and AIR Communities. Born 1947 in San Diego, raised on a cattle ranch in Southern California. Harvard College BA (1969); Harvard Law School JD (1971). First REIT IPO while still in law school (CC&F Land Trust, NYSE, 1971). Built The Considine Company (later Cairn Company), one of the largest property management firms in the US. Led Aimco IPO 1994; served as Chairman/CEO ever since through the 2020 spin separating AIR Communities (NYSE: AIRC) from Aimco (NYSE: AIV). Has served five REITs as CEO. Also twice elected to the Colorado Senate (1987-1992); ran for US Senate 1992 (lost to Ben Nighthorse Campbell). Co-founder Club for Growth. Chairman, Bradley Foundation ($1B Milwaukee). Also via Considine Companies: TV broadcasting (CBS station), convenience stores, environmental services, venture capital.",
        education: [
          { school: "Groton School (Groton, MA)", degree: "High school", year: "1965", note: "Boarding school. 4th of 11 children raised on a cattle ranch." },
          { school: "Harvard College", degree: "BA", year: "1969", note: "Became involved in RE while at Harvard -- acquired and operated apartment and commercial properties; syndicated apartment limited partnerships as GP." },
          { school: "Harvard Law School", degree: "JD", year: "1971", note: "Led CC&F Land Trust (Cabot, Cabot & Forbes) REIT IPO (NYSE) while still in law school." }
        ],
        career: [
          { firm: "The Considine Company / The Cairn Company", role: "Founder", years: "1974-1994", note: "Boston-based. Built into one of the largest property management firms in the US. RE crash 1974 was the founding catalyst." },
          { firm: "Colorado Senate", role: "Republican State Senator", years: "1987-1992", note: "Elected twice. Ran for US Senate 1992, lost to Ben Nighthorse Campbell." },
          { firm: "Apartment Investment and Management Co. (Aimco) / Apartment Income REIT (AIR Communities)", role: "Founder, Chairman & CEO", years: "1994-present", note: "Led Aimco IPO 1994 with Steve Ira, Peter Kompaniez, Robert Lacey. S&P 500 company. Oversaw 2020 spin separating AIR (NYSE: AIRC, operating MF portfolio) from Aimco (NYSE: AIV, development/redevelopment). CEO of AIR; board member of Aimco." }
        ],
        deals: [
          { property: "1001 Brickell Bay Drive, Miami FL", year: "", role: "95% owner (via Aimco)", amount: 19, note: "Loan: $19.4M CMBS WL | Lender: WL servicer | Score 55; acquired July 2019 for $157M; 32-story, 280,500-344,000 RSF Class A office; Biscayne Bay waterfront; prior owner Brickell Bay Tower Ltd Inc / Miami Blue RE LLC (Carla Meza)" },
          { property: "Watermarc, Florida", year: "", role: "Borrower (AIR Communities)", amount: 98300000, note: "Loan: $98.3M | Lender: DSCR loan | DSCR: 0.93 | Score 60; also in sponsors3 under Apartment Income REIT entry" }
        ],
      },
      {
        rank:          2,
        name:          "Matt Konrad",
        title:         "Regional Vice President, Transactions",
        firm:          "Aimco (Bethesda MD office)",
        decisionPower: "Executed the 1001 Brickell Bay acquisition; day-to-day transaction contact for Aimco Florida assets. Quoted publicly confirming the deal and the Yacht Club assemblage thesis.",
        background:    "Aimco's regional transaction executive for Florida and Mid-Atlantic markets. Confirmed the 1001 Brickell Bay off-market deal in October 2019 media coverage (GlobeSt). Said the adjacent Yacht Club at Brickell MF ownership was 'an absolute critical factor' in the decision to buy. Based Bethesda MD.",
        education: [],
        career: [
          { firm: "Aimco", role: "Regional Vice President, Transactions", years: "Unknown-present", note: "Florida and Mid-Atlantic; executed 1001 Brickell Bay acquisition July 2019; based Bethesda MD" }
        ],
        deals: [
          { property: "1001 Brickell Bay Drive, Miami FL", year: "", role: "Acquisition lead", amount: 157, note: "Loan: $157M acquisition | Off-market acquisition; cited Yacht Club assemblage thesis as primary driver" }
        ],
      }
    ],
  },

  "TechCore / 601 West Polk IL": {
    parentFirm:      "TechCore LLC -- a ~$1B discretionary core real estate fund managed by GI Partners (Menlo Park/San Francisco CA) on behalf of the California Public Employees' Retirement System (CalPERS). GI Partners SOLD 601 W Polk to Menlo Equities in April 2021.",
    hq:              "GI Partners: 140 New Montgomery St, San Francisco CA 94105 (also NY, Chicago, Dallas, Greenwich, Scottsdale, London). CalPERS: Sacramento CA.",
    founded:         "TechCore formed early 2012 by GI Partners and CalPERS. 601 W Polk acquired January 2016 for $17.8M (Cook County records). Sold to Menlo Equities April 2021.",
    aum:             "TechCore grew from $500M to ~$1B+ in committed capital; 19+ properties and 3.6M+ SF of stabilized core technology-advantaged real estate as of 2022. GI Partners total: $42B+ AUM across PE, RE, and data infrastructure. CalPERS: ~$500B total AUM (largest US public pension).",
    focus:           "Technology-advantaged core real estate: data centers, carrier hotels, internet gateways, corporate campuses for technology tenants, life science properties; primary US markets only; long-term leases to investment-grade technology tenants.",
    currentStrategy: "601 West Polk Street (Chicago South Loop / West Loop border) is a 104,000-107,000 SF two-story mission-critical DATA CENTER, originally developed 1918, substantially redeveloped in 2000. NOT a conventional office building. Tenant at acquisition: TierPoint (national cloud, managed services, and colocation provider based in St. Louis). GI Partners/TechCore acquired from Pi Data Holdings affiliate for $17.8M in December 2015. Sold to Menlo Equities in April 2021 (part of a ~$487M Menlo acquisition of 8-9 data center assets from a partnership between an asset management company and a real estate investment company). Current owner: Menlo Equities (Atherton CA; founded 1994; Philip Belling Managing Principal; 25+ years data center experience; also launched Menlo Digital platform 2025). Trepp WL entry for TechCore on 601 W Polk is almost certainly a LEGACY entry from the GI Partners/TechCore era (pre-April 2021 sale). Baker Street should verify whether the WL flag predates the Menlo acquisition.",
    states:          ["IL","CA","NY","NJ","VA","PA","WA","OR","and others"],
    treppEntities:   ["TechCore LLC","601 West Polk Chicago IL","GI Partners TechCore"],
    loans: [
      {
        property: "601 West Polk IL",
        address:  "601 West Polk Street (Chicago South Loop / West Loop border) is a 104",
        type:     "hotel",
        balance:  17800000,
        dscr:     0,
        status:   "current",
        state:    "IL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Rick Magnuson",
        title:         "Founder and Executive Managing Director",
        firm:          "GI Partners (San Francisco CA)",
        decisionPower: "Founder and controlling principal of GI Partners; all investment committee decisions. Was decision-maker when TechCore held 601 W Polk (2016-2021). No longer the counterparty post-Menlo sale.",
        background:    "BA Dartmouth College. MBA Stanford Graduate School of Business. Career: early software entrepreneur (Digital Research, the PC OS company; founded and sold Interactive Software). Director of Investment Banking at Merrill Lynch (corporate finance and M&A for asset-based businesses). Joined Nomura International's Principal Finance Group in London 1994; rose to Deputy Managing Director. Founded GI Partners 2001. Co-founded Digital Realty Trust (NYSE: DLR) -- the leading global data center REIT. GI Partners grew to $42B+ AUM across private equity, real estate, and data infrastructure. Member of Hoover Institution at Stanford. Charter member YPO San Francisco Bay chapter. TechCore CalPERS JV: formed 2012, grew to $1B+ in commitments, 19+ properties, 3.6M+ SF.",
        education: [
          { school: "Dartmouth College", degree: "BA", year: "Unknown", note: "" },
          { school: "Stanford Graduate School of Business", degree: "MBA", year: "Unknown", note: "" }
        ],
        career: [
          { firm: "Merrill Lynch", role: "Director of Investment Banking", years: "Pre-GI", note: "Corporate finance and M&A for asset-based businesses" },
          { firm: "Nomura International (London)", role: "Deputy Managing Director, Principal Finance Group", years: "1994-2001", note: "Joined 1994; rose to Deputy MD before founding GI Partners" },
          { firm: "GI Partners", role: "Founder and Executive Managing Director", years: "2001-present", note: "San Francisco; $42B+ AUM; PE, RE, data infrastructure; co-founded Digital Realty Trust (NYSE: DLR); TechCore CalPERS JV 2012-present" }
        ],
        deals: [
          { property: "601 West Polk, Chicago IL (via TechCore)", year: "", role: "Fund manager/investor", amount: 0, note: "Loan: N/A (acquired $17.8M Dec 2015; sold to Menlo April 2021) | Lender: TechCore CalPERS | Score 55; 104-107K SF data center; tenant TierPoint; acquired from Pi Data Holdings affiliate; sold to Menlo Equities April 2021 as part of ~$487M portfolio" },
          { property: "Digital Realty Trust (NYSE: DLR)", year: "", role: "Co-Founder", amount: 0, note: "Loan: N/A | Co-founded the leading global data center REIT; now one of the largest REITs in the world" }
        ],
      },
      {
        rank:          2,
        name:          "Philip Belling",
        title:         "Managing Principal and Co-Founder",
        firm:          "Menlo Equities (Atherton CA) -- current owner of 601 West Polk",
        decisionPower: "Current owner since April 2021. Co-founder and managing principal of Menlo Equities (founded 1994). All decisions on 601 W Polk now rest with Menlo. Also launched Menlo Digital platform 2025 -- dedicated data center investment and operating platform.",
        background:    "Co-founded Menlo Equities in 1994 (Atherton CA). 25+ years in data center real estate. Menlo has acquired or developed over $9.5 billion in commercial real estate assets since inception. Menlo acquired 601 W Polk as part of a ~$487M multi-asset data center portfolio transaction in April 2021. In 2025, launched Menlo Digital (dedicated data center platform) with Michael Johnston as Head of Menlo Digital / CIO. JV with US pension fund (unnamed) for 601 W Polk and related assets.",
        education: [],
        career: [
          { firm: "Menlo Equities (Atherton CA)", role: "Managing Principal and Co-Founder", years: "1994-present", note: "$9.5B+ in CRE assets developed/acquired; 25+ years data center focus; launched Menlo Digital 2025" }
        ],
        deals: [
          { property: "601 West Polk, Chicago IL", year: "", role: "Owner (acquired April 2021)", amount: 0, note: "Loan: Part of ~$487M portfolio transaction | Lender: JV with US pension fund (undisclosed) | Current owner of 601 W Polk since April 2021; 104K SF data center; tenant TierPoint" }
        ],
      }
    ],
  },

  "Bridge Investment Group / Waverley Place FL": {
    parentFirm:      "Bridge Investment Group Holdings Inc. (NYSE: BRDG) -- pending acquisition by Apollo Global Management",
    hq:              "Salt Lake City, UT",
    founded:         "2009",
    aum:             "~$50.2B gross AUM (as of mid-2025); pending Apollo acquisition ~$1.5B deal value",
    focus:           "Alternative investment management; multifamily, workforce/affordable housing, seniors housing, office, industrial, debt, net lease, renewables; vertically integrated with Bridge Property Management",
    currentStrategy: "Bridge Investment Group was founded 2009 by Robert Morse (Yale/Harvard; ex-Salomon Brothers; co-founded SSB Capital Partners $400M PE fund) and Jonathan Slager (Univ of Utah BA; NYU MBA; ex-Koll Company, Wells Fargo Bank, The Pacific Group USA, Bridge Loan Capital Fund). IPO'd in 2021; pending Apollo acquisition ~$1.5B announced 2025. Waverley Place in Naples FL is a luxury MF community in Bridge's residential portfolio. $31.9M WL loan; no DSCR reported. Bridge is among the top 20 US apartment owners. Apollo acquisition pending -- any workout or refinancing on Waverley Place may be accelerated or complicated by the pending merger.",
    states:          ["FL","UT","GA","TX","and nationwide"],
    treppEntities:   ["Bridge Investment Group","Waverley Place Naples FL","BRDG"],
    loans: [
      {
        property: "Waverley Place FL",
        address:  "FL",
        type:     "office",
        balance:  400000000,
        dscr:     0,
        status:   "current",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Robert Morse",
        title:         "Executive Chairman",
        firm:          "Bridge Investment Group Holdings Inc.",
        decisionPower: "Co-founder; strategic oversight and governance; Slager leads operations",
        background:    "Yale College BA (Phi Beta Kappa, magna cum laude). Harvard Business School MBA. Harvard Law School JD. Joined Salomon Brothers 1985; held senior positions across Salomon era. Co-founded SSB Capital Partners ($400M PE fund, 2000). Co-founded Bridge Investment Group 2009. Serves on Yale President's Council on International Activities (Chairman), Yale School of Management Board, Whitney Museum Directors Council, Grand Teton National Park Foundation Resource Council.",
        education: [
          { school: "Yale College", degree: "BA (Phi Beta Kappa, magna cum laude)", year: "Unknown", note: "" },
          { school: "Harvard Business School", degree: "MBA", year: "Unknown", note: "" },
          { school: "Harvard Law School", degree: "JD", year: "Unknown", note: "" }
        ],
        career: [
          { firm: "Salomon Brothers (Citigroup)", role: "Senior positions", years: "1985-2000", note: "Joined 1985; various senior roles in investment banking/capital markets" },
          { firm: "SSB Capital Partners", role: "Co-Founder", years: "2000-2009", note: "$400M private equity fund" },
          { firm: "Bridge Investment Group Holdings Inc.", role: "Executive Chairman and Co-Founder", years: "2009-present", note: "Co-founded with Jonathan Slager; built to $50B+ AUM; IPO 2021; pending Apollo acquisition 2025" }
        ],
        deals: [
          { property: "Waverley Place, Naples FL", year: "", role: "Borrower (REIT/fund)", amount: 31900000, note: "Loan: $31.9M | Lender: WL (watchlist) | Score 50; luxury FL MF; Naples; WL flag; Bridge is top-20 US apartment owner" }
        ],
      },
      {
        rank:          2,
        name:          "Jonathan Slager",
        title:         "Chief Executive Officer",
        firm:          "Bridge Investment Group Holdings Inc.",
        decisionPower: "CEO and Co-CIO Bridge Multifamily; operational and investment decisions",
        background:    "University of Utah BA (English, Phi Beta Kappa cum laude, 1981). NYU MBA in Finance and Marketing (1985). Career: Koll Company (1985-1990 approx.), Wells Fargo Bank (commercial RE acquisition/development/disposition), The Pacific Group USA (2005-2009), Bridge Loan Capital Fund (principal/managing partner 2006-2017). Co-founded Bridge Investment Group 2009 with Morse. Involved in underwriting/acquiring/managing $8B+ in assets. Led to IPO 2021. Apollo acquisition pending.",
        education: [
          { school: "University of Utah", degree: "BA English (Phi Beta Kappa cum laude)", year: "1981", note: "" },
          { school: "New York University Stern School of Business", degree: "MBA Finance and Marketing", year: "1985", note: "" }
        ],
        career: [
          { firm: "The Koll Company / Wells Fargo Bank", role: "CRE acquisition and development", years: "1985-1990", note: "Resort, residential, office, industrial, retail; Western US" },
          { firm: "The Pacific Group USA Inc.", role: "Partner", years: "2005-2009", note: "CRE acquisitions and development" },
          { firm: "Bridge Loan Capital Fund LP", role: "Principal and Managing Partner", years: "2006-2017", note: "Real estate debt and equity; distressed asset focus" },
          { firm: "Bridge Investment Group Holdings Inc.", role: "CEO and Co-Founder", years: "2009-present", note: "$50B+ AUM; IPO 2021; pending Apollo acquisition 2025" }
        ],
        deals: [],
      }
    ],
  },

  "Avanath Capital Management / Scotland Yard IL": {
    parentFirm:      "Avanath Capital Management LLC (independent SEC-registered investment adviser)",
    hq:              "18881 Von Karman Ave, Suite 800, Irvine, CA 92612",
    founded:         "2008",
    aum:             "$4B+ portfolio; 16,000+ apartment units; 15+ states as of 2024",
    focus:           "Affordable and workforce multifamily; institutional fund manager; Section 8, LIHTC, mixed-income; major urban markets including Chicago, DC, LA, Boston, NYC",
    currentStrategy: "Scotland Yard Chicago IL (156 units, Buena Park neighborhood, acquired Aug 2019 for $28.3M) is the $17.3M WL CMBS entry. Scotland Yard was built in two phases in 1915 and 1917, renovated 1982. Avanath simultaneously acquired Renaissance North Chicago (59 units) for $15.4M. Total IL holdings: 1,319 units including Lincoln Park Plaza (256 units, $119M, 2023) and Acclaim at Hinsdale Lake (582 units, 2018). Fund I-IV structure; Fund IV raised $450M+. Named after founder's children (Ava + Nathan). Named Job Partner of Year by Urban Alliance of Greater Chicago 2024-2025. WL flag is likely routine servicer monitoring on a 2019 acquisition loan -- not fundamental distress. Avanath is a $4B+ institutional platform with pension fund, sovereign wealth, and endowment LP backing.",
    states:          ["IL","CA","DC","FL","MD","MA","MI","NJ","NY","OH","OR","TX","WA"],
    treppEntities:   ["Avanath Capital Management","Scotland Yard IL","Avanath Scotland Yard LLC"],
    loans: [
      {
        property: "Scotland Yard IL",
        address:  "IL",
        type:     "multifamily",
        balance:  28300000,
        dscr:     0,
        status:   "current",
        state:    "IL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Daryl J. Carter",
        title:         "Founder, Chairman & CEO",
        firm:          "Avanath Capital Management LLC",
        decisionPower: "Full strategic authority. Decision-maker on all major acquisitions, dispositions, and financing. Public face of Avanath's affordable housing mission.",
        background:    "Grew up in Detroit; father was factory worker, mother was maid. BA Architecture, University of Michigan. Dual master's from MIT: MBA and M.Arch (1981, 1983). Career began at Continental Illinois Bank Chicago in real estate commercial lending (1981) -- met David Neithercut (later EQR CEO), Peter Donovan (CBRE), and Mary Ann King (Moran & Co.) there. Co-founded Capri Capital with Quinton Primo III (~1990) -- grew to $8B AUM; acquired by Centerline Capital Group (Related Companies affiliate); Carter became Executive Managing Director. Founded Avanath 2008 during Great Recession. 43+ years CRE experience. Board: Silver Bay Realty Trust, ULI Global Board. Named Bisnow Power 50.",
        education: [
          { school: "University of Michigan", degree: "BS Architecture", year: "~1979", note: "Grew up in Detroit. Father was a factory worker, mother a maid." },
          { school: "Massachusetts Institute of Technology (MIT)", degree: "M.Architecture", year: "1981", note: "Dual master's program." },
          { school: "Massachusetts Institute of Technology (MIT), Sloan School", degree: "MBA", year: "1983", note: "2015 MIT Sloan School Distinguished Alumni Award. Sloan MBA commencement speaker." }
        ],
        career: [
          { firm: "Continental Illinois Bank, Chicago", role: "Real Estate Commercial Lending Group", years: "1981-~1990", note: "First job post-MIT. Met David Neithercut (later EQR CEO), Peter Donovan (CBRE), Mary Ann King (Moran & Co.) -- all mentors." },
          { firm: "Capri Capital (later Capri Capital Finance)", role: "Co-Founder and Co-Chairman", years: "~1990-2005", note: "Co-founded with Quinton Primo III (high school friend). Built to $8B AUM in real estate equity and debt. Sold majority to Centerline Capital Group (Related Companies affiliate) in 2005." },
          { firm: "Centerline Capital Group (Related Companies affiliate)", role: "Executive Managing Director", years: "2005-2008", note: "Joined when Centerline acquired Capri Capital Finance. Head of Commercial Real Estate Group." },
          { firm: "Avanath Capital Management LLC", role: "Founder, Chairman & CEO", years: "2008-present", note: "Founded during Great Recession. $4B+ acquired. 16,000 units in 15 states. Named after daughter Ava and son Nathan. 2024: joined forces with Azora (Madrid) -- but Avanath remains lead operator." }
        ],
        deals: [
          { property: "Scotland Yard Chicago IL -- 156 units, Buena Park; WL $17.3M", year: "", role: "Owner / Borrower", amount: 17300000, note: "Loan: $17.3M | Lender: WL | DSCR: N/A reported | Acquired Aug 2019 for $28.3M; workforce/affordable; built 1915-1917" },
          { property: "Lincoln Park Plaza Chicago IL -- 256 units, acquired 2023 for $119M", year: "", role: "Owner / Borrower", amount: 119, note: "Loan: $119M acquisition | Lender: Institutional | IL portfolio expansion to 1,319 units" }
        ],
      },
      {
        rank:          2,
        name:          "John Williams",
        title:         "President & Chief Investment Officer",
        firm:          "Avanath Capital Management LLC",
        decisionPower: "Day-to-day investment decisions and investment committee. Primary operational contact for loan and financing matters. More accessible than Carter for specific asset discussions.",
        background:    "Long-tenured Avanath executive. Oversees underwriting, portfolio performance, and lender relationships. Quoted in 2023 press on Chicago expansion to 1,319 units. Also led DC metro area acquisitions totaling 1,169 units.",
        education: [],
        career: [
          { firm: "Avanath Capital Management LLC", role: "President & Chief Investment Officer", years: "long-tenured", note: "Oversees underwriting, portfolio performance, and lender relationships. Led Chicago IL expansion (1,319 units) and DC metro area acquisitions (1,169 units)." }
        ],
        deals: [
          { property: "Chicago IL portfolio -- 1,319 units including Lincoln Park Plaza $119M (2023)", year: "", role: "Investment lead", amount: 0, note: "Loan: Multiple | Lender: Multiple | Led IL expansion" },
          { property: "DC metro area -- 1,169 units across multiple acquisitions", year: "", role: "Investment lead", amount: 0, note: "Loan: Multiple | Lender: Multiple | Led DC portfolio build-out" }
        ],
      }
    ],
  },

  "M&J Wilkow / Shoppes At College Hills IL": {
    parentFirm:      "M&J Wilkow Ltd.",
    hq:              "Chicago, IL",
    founded:         "~1970s (family-founded retail developer)",
    aum:             "Unknown -- private; multi-million SF retail portfolio nationally",
    focus:           "Retail real estate development, acquisition, and management; power centers, lifestyle centers, community centers; Midwest and national",
    currentStrategy: "M&J Wilkow Ltd. is a Chicago-based private family commercial RE company founded 1939 by Mendel and Joseph Wilkow. Shoppes at College Hills is in Normal IL (McLean County; Illinois State University market; ISU enrollment ~20,000). $13.4M WL loan; no DSCR reported. Retail in a university town is dependent on campus demand and anchor health. M&J Wilkow currently manages 90 properties (25 office, 65 retail) totaling ~13.9M SF at $3B+ estimated portfolio value. The family recently expanded to also provide third-party management for Water Tower Place, One Bellevue Place, and CenterSquare's national Essential Service Retail Portfolio.",
    states:          ["IL","and nationwide"],
    treppEntities:   ["M&J Wilkow","Shoppes at College Hills Normal IL"],
    loans: [
      {
        property: "Shoppes At College Hills IL",
        address:  "IL",
        type:     "office",
        balance:  13400000,
        dscr:     0,
        status:   "current",
        state:    "IL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Marc Wilkow",
        title:         "President and Chief Executive Officer",
        firm:          "M&J Wilkow, Ltd. (Chicago IL)",
        decisionPower: "President and CEO since 1983. Decision-maker on all acquisitions, dispositions, financings, and workout negotiations. Primary signatory on institutional JV partnerships.",
        background:    "4th generation Wilkow. BA Columbia College 1975. Practiced law at Friedman & Koven 1977-1983 (Chicago law firm). Joined M&J Wilkow 1977 as VP and General Counsel; became President/CEO 1983. Has run the firm for 40+ years, transforming it from a passive investor to an active full-service CRE company with value-add, leasing, and property management capabilities. Partners with institutional investors on JV acquisitions (USAA Real Estate has been a long-standing partner). Portfolio grown to 90 properties, 13.9M SF, $3B+ estimated value under his leadership. His son Gregg joined 2007 (from LaSalle Bank) and son Jordan was elected to the Board in 2021 (joined full-time 2023) -- 5th generation.",
        education: [
          { school: "Columbia College", degree: "BA", year: "1975", note: "" },
          { school: "Law firm (Friedman & Koven)", degree: "Attorney (admitted IL Bar)", year: "1977-1983", note: "" }
        ],
        career: [
          { firm: "M&J Wilkow, Ltd.", role: "VP and General Counsel", years: "1977-1983", note: "Also practiced at Friedman & Koven 1977-1983" },
          { firm: "M&J Wilkow, Ltd.", role: "President and CEO", years: "1983-present", note: "Grew portfolio to 90 properties, 13.9M SF, $3B+ value; institutional JV partners including USAA Real Estate" }
        ],
        deals: [
          { property: "Shoppes at College Hills, Normal IL (McLean County)", year: "", role: "Borrower/Owner", amount: 13400000, note: "Loan: $13.4M | Lender: WL (watchlist) | Score 45; IL retail; ISU market; WL flag" },
          { property: "M&J Wilkow portfolio", year: "", role: "Principal", amount: 0, note: "Loan: N/A | Lender: Multiple institutional JVs (USAA RE and others) | 90 properties; 13.9M SF; $3B+ estimated value; third-party management: Water Tower Place, One Bellevue Place, CenterSquare Essential Service Retail Portfolio" }
        ],
      },
      {
        rank:          2,
        name:          "Clif Wilkow",
        title:         "Executive Vice President and Principal",
        firm:          "M&J Wilkow, Ltd. (Chicago IL)",
        decisionPower: "Co-principal alongside Marc since mid-1980s. Joined M&J in 1976 (4th generation alongside Marc). Involved in all major portfolio decisions and institutional relationships.",
        background:    "4th generation Wilkow. BA Columbia College 1975 (same year as Marc). Joined M&J Wilkow 1976 -- the year Marc was also joining. Accredited licensed real estate broker. Has been co-principal with Marc for 40+ years, managing an estimated $3B portfolio together.",
        education: [
          { school: "Columbia College", degree: "BA", year: "1975", note: "" }
        ],
        career: [
          { firm: "M&J Wilkow, Ltd.", role: "Executive Vice President and Principal", years: "1976-present", note: "4th generation; co-principal with Marc since mid-1980s" }
        ],
        deals: [],
      },
      {
        rank:          3,
        name:          "Gregg Wilkow",
        title:         "Principal and Vice President, Asset Management",
        firm:          "M&J Wilkow, Ltd. (Chicago IL)",
        decisionPower: "5th generation family principal since October 2007. Oversees acquisitions, asset management, dispositions, and refinancings. Day-to-day contact on specific asset-level decisions including WL loans.",
        background:    "Marc's son. 5th generation. Joined M&J October 2007 after 6 years at LaSalle Bank NA (Chicago commercial real estate lending). Asset management focus -- evaluates and negotiates acquisitions, dispositions, and refinancings. Most likely day-to-day Baker Street contact for the Shoppes at College Hills WL loan.",
        education: [],
        career: [
          { firm: "LaSalle Bank, N.A. (Chicago)", role: "Commercial real estate lending", years: "2001-2007", note: "6 years; then joined family firm" },
          { firm: "M&J Wilkow, Ltd.", role: "Principal and VP, Asset Management", years: "2007-present", note: "5th generation; handles acquisitions, dispositions, refinancings, asset management" }
        ],
        deals: [],
      }
    ],
  },

  "LBA Logistics / 780 Hartman Road GA": {
    parentFirm:      "LBA Logistics (LBA Realty)",
    hq:              "Irvine, CA",
    founded:         "1988",
    aum:             "~$4B+ (industrial and office; 60M+ SF managed nationally)",
    focus:           "Industrial and logistics real estate; national portfolio; warehouse, distribution, and light manufacturing; active in Sun Belt and West Coast",
    currentStrategy: "LBA Logistics (subsidiary of LBA Realty) is one of the largest private industrial real estate companies in the US. 780 Hartman Road is an industrial/warehouse property in Georgia (Conyers/Rockdale County area or similar GA industrial corridor). $12.3M WL loan; no DSCR. LBA is institutional quality and this is likely a monitoring situation, not active distress.",
    states:          ["GA","CA","TX","NV","AZ","and nationwide"],
    treppEntities:   ["LBA Logistics","LBA Realty","780 Hartman Road GA"],
    loans: [
      {
        property: "780 Hartman Road GA",
        address:  "GA",
        type:     "office",
        balance:  12300000,
        dscr:     0,
        status:   "current",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Phil A. Belling",
        title:         "Managing Principal and Co-Founder",
        firm:          "LBA Realty / LBA Logistics (Irvine CA)",
        decisionPower: "Co-founder and managing principal. All major portfolio decisions, JV partnerships with institutional capital, and asset dispositions.",
        background:    "Co-founded LBA Realty in 1991 (headquartered Irvine CA) with Steve Layton. San Diego State University graduate. Built LBA from zero to one of the largest private industrial and office RE platforms in the US over 30+ years. 230 team members. LBA Realty consists of multiple RE investment funds and JV partnerships with sovereign wealth funds, endowments, foundations, pension funds, and HNW individuals. LBA Logistics handles the industrial/logistics subsidiary. Key deal: $1.6B industrial recapitalization with BREIT (Blackstone) on 60M+ SF West Coast last-mile portfolio. Portfolio spans CA, CO, WA, AZ, TX, IL, NJ, GA. 780 Hartman Road GA is a single asset in the larger LBA industrial national portfolio.",
        education: [
          { school: "San Diego State University", degree: "Unknown degree", year: "Unknown", note: "" }
        ],
        career: [
          { firm: "LBA Realty / LBA Logistics (Irvine CA)", role: "Managing Principal and Co-Founder", years: "1991-present", note: "Co-founded with Steve Layton; built to $4B+ / 60M+ SF nationally; JV partners include BREIT, sovereign wealth, endowments, pension funds; 230 employees" }
        ],
        deals: [
          { property: "780 Hartman Road, Georgia", year: "", role: "Borrower/Owner", amount: 12300000, note: "Loan: $12.3M | Lender: WL (watchlist) | Score 45; GA industrial; WL flag; monitoring situation not active distress" },
          { property: "LBA West Coast industrial portfolio", year: "", role: "Seller/JV", amount: 1600000000, note: "Loan: $1.6B | Lender: BREIT/Blackstone | 2021 BREIT recapitalization of 60M+ SF West Coast last-mile industrial" }
        ],
      },
      {
        rank:          2,
        name:          "Steve Layton",
        title:         "Managing Principal and Co-Founder",
        firm:          "LBA Realty / LBA Logistics (Irvine CA)",
        decisionPower: "Co-founded LBA Realty with Belling in 1991. Co-managing principal with equal authority on major portfolio decisions, fund launches, and institutional JV partnerships.",
        background:    "Co-founder of LBA Realty alongside Phil Belling. Together they built LBA into one of California's most prominent private CRE platforms over 30+ years. Both Belling and Layton are listed as principal partners alongside David Thomas, Steve Briggs, Perry Schonfeld, and Bill Kearns. Layton has been most active with companies in common across LBA's multiple fund entities.",
        education: [],
        career: [
          { firm: "LBA Realty / LBA Logistics (Irvine CA)", role: "Managing Principal and Co-Founder", years: "1991-present", note: "Co-founded with Phil Belling; 30+ year tenure; 60M+ SF national industrial and office portfolio" }
        ],
        deals: [],
      }
    ],
  },

  "Ellie Perlman / Blue Lake Equity": {
    parentFirm:      "Blue Lake Equity LLC",
    hq:              "Los Angeles, CA",
    founded:         "2017",
    aum:             "~$800M-$1B+ (multifamily syndication; 3,000+ units acquired)",
    focus:           "Value-add multifamily syndication; Sun Belt; Israeli-American LP investor base; value-add repositioning",
    currentStrategy: "Ellie Perlman is the founder and CEO of Blue Lake Capital (previously marketed as Blue Lake Equity), a Los Angeles-based multifamily investment firm. Blue Lake focuses on value-add multifamily in the Sun Belt via retail syndication to accredited and institutional investors. Waterstone Apartments (1851 Satellite Blvd, Buford GA, Gwinnett County, 296 units, built 2011) = $62M WL loan. Acquired November 24, 2021 for $81.25M via REV Fund -- a $100M joint fund with Vive Funds (Veena Jetti). Business plan: interior renovation + amenity additions + rent growth to close under-market rent gap. Blue Lake has exited prior GA deals at strong IRRs: Element 41 Marietta GA (494 units, sold 2022 at ~45% net IRR); Legacy Portfolio Gainesville/Norcross GA (sold 2021). 2023-2025 GA market context: Atlanta-metro rent growth softened as new supply hit, compressing renovation ROI timelines. NOTE: Perlman started career in Israel as a commercial real estate lawyer for Israel's largest development company, then as property manager for a major Israeli oil/gas company. Her education is Bar-Ilan University LLM (Israel) + MIT Sloan MBA -- NOT Boston University as previously noted.",
    states:          ["GA","TX","FL","CA"],
    treppEntities:   ["Ellie Perlman","Blue Lake Equity","Waterstone Apartments GA"],
    loans: [
      {
        property: "Blue Lake Equity",
        address:  "1851 Satellite Blvd",
        type:     "hotel",
        balance:  62000000,
        dscr:     0,
        status:   "current",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Ellie Perlman",
        title:         "Founder and CEO",
        firm:          "Blue Lake Capital LLC (formerly marketed as Blue Lake Equity)",
        decisionPower: "Founder and CEO; all acquisitions, capital sourcing, and investor relations",
        background:    "Israeli-born entrepreneur. Started career in Israel as a commercial real estate lawyer for Israel's largest development company (leading major CRE transactions). Then served as property manager for one of Israel's most prominent oil and gas companies (oversaw $100M+ property portfolio). Immigrated to US and completed MBA at MIT Sloan School of Management. Founded Blue Lake Capital ~2017 in Los Angeles. Grew from zero to 4,100+ units and $1B+ in total multifamily transactions. Built REV Fund ($100M joint value-add fund) in 2021 as 50/50 JV with Vive Funds (Veena Jetti). Key exits: Element 41 Marietta GA (494-unit, sold 2022, ~45% net IRR); Legacy Portfolio Gainesville/Norcross GA (sold 2021). Forbes contributor on real estate investing. Podcast host: REady2Scale (100+ episodes). Named ApartmentBuildings.com Dealmaker of Year 2025 by Connect CRE. Inc. 5000 fastest-growing 2023 and 2024. GlobeSt. Women of Influence nominee 2024.",
        education: [
          { school: "Bar-Ilan University, Israel", degree: "Bachelor of Laws (LLB) and Master of Laws (LLM)", year: "Pre-US career", note: "" },
          { school: "MIT Sloan School of Management", degree: "MBA", year: "Pre-2017", note: "" }
        ],
        career: [
          { firm: "Israel's largest development company", role: "Commercial real estate lawyer", years: "Israel, pre-US", note: "Led major CRE transactions; then property manager for major Israeli oil/gas company overseeing $100M+ portfolio" },
          { firm: "Blue Lake Capital LLC (Los Angeles)", role: "Founder and CEO", years: "2017-present", note: "$1B+ total transactions; 4,100+ units; REV Fund $100M JV with Vive Funds (Veena Jetti); 30%+ net IRRs on exits" }
        ],
        deals: [
          { property: "Waterstone Apartments, 1851 Satellite Blvd, Buford GA", year: "", role: "Borrower/GP (REV Fund)", amount: 62000000, note: "Loan: $62M | Lender: WL (watchlist) | Score 40; 296 units, built 2011; acquired Nov 2021 for $81.25M via REV Fund (JV with Vive Funds)" },
          { property: "Element 41, Marietta GA", year: "", role: "GP/Co-Sponsor (with Vive Funds)", amount: 0, note: "Loan: N/A | 494 units; sold 2022 at ~45% net IRR" }
        ],
      },
      {
        rank:          2,
        name:          "Jeannette Robinson",
        title:         "Director of Investor Relations",
        firm:          "Blue Lake Capital LLC (Los Angeles)",
        decisionPower: "Handles all LP investor relations, reporting, and communications across the Blue Lake portfolio. Primary operational contact for investor-facing discussions and introductions. Most accessible day-to-day Blue Lake contact.",
        background:    "Director of Investor Relations at Blue Lake Capital. Manages relationships with the firm's accredited and institutional investor base across all active funds including REV Fund. Investor relations functions include K-1 delivery, quarterly reporting, and new investor onboarding.",
        education: [],
        career: [
          { firm: "Blue Lake Capital LLC", role: "Director of Investor Relations", years: "Current", note: "Manages LP relationships across all Blue Lake funds including REV Fund (Waterstone GA)" }
        ],
        deals: [],
      }
    ],
  },

  "Jim Lippman / Arbor Oaks FL": {
    parentFirm:      "JRK Property Holdings (Los Angeles CA; private equity real estate; NMHC Top 50 apartment owner)",
    hq:              "11766 Wilshire Blvd, 15th Floor, Los Angeles, CA 90025",
    founded:         "1991 (founded by James M. Lippman from RTC/Executive Life receivership pool)",
    aum:             "$9B+ portfolio; 26,938 residential units in 28 states (NMHC Top 50, 50th in 2025); 9 institutional funds; most recent fund JRK Platform V ($1B); also JRK Hotel Group (10 luxury boutique/flagged hotels, 1,520 keys)",
    focus:           "Multifamily value-add and core-plus; Class A/B post-1990 vintage (Platform V); Class B/C through JRK MF Opportunities funds; hospitality (luxury boutique and branded); industrial and self-storage",
    currentStrategy: "Arbor Oaks FL is a JRK Property Holdings portfolio asset ($53.6M). JRK operates through JRK Residential Group (in-house PM division) and JRK Investors (acquisitions). WL flag on this FL asset likely reflects loan maturity or servicer monitoring within a $9B portfolio -- not firm-level distress. FL market dynamics (rising insurance, 2022-2024 supply deliveries) have pressured older FL vintage assets. JRK Platform V is deploying $1B into post-1990 MF assets. Prior major FL activity: five FL assets in $390M Q4 2021 acquisitions including 266-unit Panama City Beach property. JRK uses Green Book reporting -- weekly line-item cost tracking per property feeding all asset managers.",
    states:          ["FL","CA","TX","KS","FL","ME","LA","CO","NC","OH","GA","TN","VA","MD"],
    treppEntities:   ["Jim Lippman","JRK Property Holdings","Arbor Oaks FL","JRK Residential Group"],
    loans: [
      {
        property: "Arbor Oaks FL",
        address:  "FL",
        type:     "mhc",
        balance:  53600000,
        dscr:     0,
        status:   "current",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "James M. Lippman",
        title:         "Founder, Chairman & CEO",
        firm:          "JRK Property Holdings (Los Angeles, CA)",
        decisionPower: "Founder and controlling principal. All major investment and portfolio decisions flow through Lippman and the JRK investment committee. Serves as non-executive chairman per Wikipedia; day-to-day operational leadership delegated to Daniel Lippman (President) and Bobby Lee (President/COO).",
        background:    "Union College (Schenectady NY), BA 1979. Prior career in commodities and options arbitrage -- self-described as watching Giants games with stomach-wrenching stress, leading him to real estate. Founded JRK in 1991 with Robert Rooney and Keith Holmes by purchasing five multifamily properties from an RTC pool of Executive Life assets he had been managing via receivership. Built JRK from those five properties to 26,938 units in 28 states over 34 years. NMHC Top 50 every year since 2008. Also serves on Cedars-Sinai Medical Center board (Chairman) and Century Communities, Inc. board. Known for proprietary 'Green Book' weekly cost-tracking reports shared across all JRK asset managers. Manages entire property lifecycle in-house (no third-party PM). Described philosophy: 'Please don't come here if you are looking to punch a clock. This is going to become a part of your life.'",
        education: [
          { school: "Union College (Schenectady, NY)", degree: "BA Economics and Political Science", year: "1979", note: "Trustee of Union College. Known for quip: 'Stanford and Harvard degrees are great' -- JRK's edge comes from operational intensity, not pedigree." }
        ],
        career: [
          { firm: "Private trading", role: "Commodities and options arbitrage", years: "Late 1980s", note: "Pre-real estate career; described as source of personal stress that drove transition to RE" },
          { firm: "Signature Group", role: "Managing Director", years: "~late 1980s-1991", note: "Financial services. Also managed Executive Life receivership assets -- direct precursor to founding JRK." },
          { firm: "JRK Property Holdings (Los Angeles CA)", role: "Founder, Chairman & CEO", years: "1991-present", note: "Founded from 5 RTC/Executive Life MF assets. Grew to NMHC Top 50; $9B+ / 26,938 units (2025). Serves as non-executive chairman per Wikipedia with day-to-day ops led by Daniel Lippman and Bobby Lee." }
        ],
        deals: [
          { property: "Arbor Oaks FL", year: "", role: "Borrower (JRK portfolio)", amount: 53600000, note: "Loan: $53.6M | Lender: CMBS/unknown servicer | DSCR: WL -- monitor | JRK portfolio asset; FL market pressure on older vintage" },
          { property: "FL portfolio", year: "", role: "Acquirer", amount: 390, note: "Loan: $390M (Q4 2021) | Lender: Fannie/Freddie/CMBS mix | 5 FL/TX/LA/ME assets acquired Q4 2021 via JRK Platform IV and JRK MF Opportunities II" },
          { property: "JRK Platform V fund", year: "", role: "Fund manager", amount: 1, note: "Loan: $1B capital commitment | Lender: Institutional LP base | Most recent fund; deploying into post-1990 MF; first acquisition Residences at Park Place, Leawood KS" }
        ],
      },
      {
        rank:          2,
        name:          "Daniel Lippman",
        title:         "President, JRK Property Holdings",
        firm:          "JRK Property Holdings (Los Angeles, CA)",
        decisionPower: "Day-to-day operational president. Quoted publicly on Platform V deployment and acquisition strategy. Primary contact for asset-level financing and modification discussions. Son of James M. Lippman.",
        background:    "Second-generation JRK leadership. Quoted in 2023 on JRK Platform V deployment: 'The location and quality of the assets will insulate them from additional cap rate expansion.' Oversees operational execution across all JRK divisions in coordination with Bobby Lee (President/COO) and James Broyer (President of Investments).",
        education: [],
        career: [
          { firm: "JRK Property Holdings (Los Angeles, CA)", role: "President", years: "Current", note: "Day-to-day operations; quoted on Platform V deployment 2023" }
        ],
        deals: [
          { property: "JRK Platform V acquisitions", year: "", role: "Co-lead", amount: 169, note: "Loan: $168.5M (first two deployments) | Lender: Fannie Mae (JLL arranged) | Residences at Park Place Leawood KS ($110.5M) and luxury Sarasota FL high-rise (~$58M)" }
        ],
      }
    ],
  },

  "Aegean University Lakes MHC FL": {
    parentFirm:      "Aegean Capital, LLC (New York NY; private equity real estate, commercial office and retail New England + opportunistic national)",
    hq:              "New York City (HQ); Peabody, MA (regional management office)",
    founded:         "2007 (Aegean Capital founded by Costas Alexakos; split from Everest Partners LLC)",
    aum:             "750,000+ SF commercial portfolio (office and retail, primarily New England); University Lakes MHC ($112M) represents an opportunistic national acquisition outside core New England focus",
    focus:           "Value-add commercial office and retail in New England; opportunistic acquisitions nationally up to $75M individual investments; University Lakes MHC is an outlier MHC asset in Miami-Dade FL",
    currentStrategy: "University Lakes MHC (12850 SW 14 ST, Miami FL 33184 / unincorporated Miami-Dade 33175) is a manufactured home community with two adjacent parcels owned by Aegean University Lakes LLC. $112M CMBS loan -- the largest single loan in this entire batch. Aegean Capital is primarily a New England commercial operator (office and retail in CT, MA, and Boston) that expanded nationally into an opportunistic MHC acquisition. MHC as an asset class is generally recession-resistant (low capex, sticky tenancies), but $112M on a Miami-area MHC at Score 35 (no reported DSCR distress) suggests a monitoring/maturity situation rather than active distress. Howard Rich (CFO) is the financial operations contact.",
    states:          ["FL","MA","CT","NY"],
    treppEntities:   ["Aegean University Lakes LLC","University Lakes MHC FL","12850 SW 14 ST Miami FL"],
    loans: [
      {
        property: "Aegean University Lakes MHC FL",
        address:  "FL",
        type:     "mhc",
        balance:  75000000,
        dscr:     0,
        status:   "current",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Costas Alexakos",
        title:         "Founder and President",
        firm:          "Aegean Capital, LLC (New York NY / Peabody MA)",
        decisionPower: "Sole founder and president. Full authority on all acquisitions, dispositions, and financing including the University Lakes MHC CMBS loan. Primary decision-maker.",
        background:    "A mechanical engineer by training, Alexakos holds a BS and MS in Mechanical Engineering from Brown University (Providence RI) and an MBA from Columbia University Graduate School of Business (1982-1984). Prior to founding Aegean, he was co-founder and principal of Everest Partners, LLC, where he grew the business into one of the largest real estate owners and managers in New England. Split with Everest co-founder Kambiz Shahbazi in 2007: Shahbazi continued Everest Partners, Alexakos took a portion of the Boston portfolio and founded Aegean Capital. Aegean's first public acquisition was 268 Summer Street, Boston (Fort Point Channel, $16.3M, April 2007). Subsequently acquired 470 West Ave and 1290 Summer St in Stamford CT. Expanded nationally including the University Lakes MHC Miami-Dade FL ($112M). Also active in South Florida exploration per 2007 GlobeSt profile.",
        education: [
          { school: "", degree: "", year: "", note: "" },
          { school: "", degree: "", year: "", note: "" },
          { school: "", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "Everest Partners, LLC (New England)", role: "Co-Founder and Principal", years: "Pre-2007", note: "Grew Everest into one of largest RE owners/managers in New England; co-founder with Kambiz Shahbazi" },
          { firm: "Aegean Capital, LLC (New York NY / Peabody MA)", role: "Founder and President", years: "2007-present", note: "Founded after Everest split; core portfolio 750,000+ SF New England office/retail; opportunistic national MHC" }
        ],
        deals: [
          { property: "268 Summer Street, Boston MA (Fort Point Channel)", year: "", role: "Acquirer", amount: 16300000, note: "Loan: $16.3M | Lender: Unknown | First Aegean acquisition, April 2007; 8-story 68,000 SF office" },
          { property: "470 West Ave, Stamford CT", year: "", role: "Acquirer", amount: 0, note: "Lender: Unknown | Dec 2006 acquisition pre-formal Aegean launch" },
          { property: "University Lakes MHC, Miami-Dade FL (12850 SW 14 ST)", year: "", role: "Borrower", amount: 112000000, note: "Loan: $112M | Lender: CMBS (trust unknown) | DSCR: Score 35 -- no DSCR reported | Largest single loan in sponsors3 batch; two adjacent Miami-Dade parcels; all-ages MHC" }
        ],
      },
      {
        rank:          2,
        name:          "Howard Rich",
        title:         "Chief Financial Officer",
        firm:          "Aegean Capital, LLC",
        decisionPower: "CFO overseeing all financial reporting and accounting for Aegean Capital and its related investment companies. CPA. Key contact for CMBS servicer discussions and loan-level financial reporting on University Lakes MHC.",
        background:    "CPA with 20+ years of accounting and asset management experience in real estate. Prior to Aegean: CFO at Everest Partners LLC (Alexakos's prior firm -- followed him to Aegean at the split); CFO and Controller at Greenstreet Capital Partners (oversaw accounting and reporting for numerous RE investments and operating companies); VP of Asset Management at ORIX Real Estate Equities, Inc. (managed east coast RE portfolio AM and accounting). Bachelor's Degree in Accounting from Herbert H. Lehman College. Joined Aegean at founding.",
        education: [
          { school: "", degree: "", year: "", note: "" },
          { school: "", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "ORIX Real Estate Equities, Inc.", role: "VP of Asset Management", years: "Pre-Aegean", note: "East coast RE portfolio AM and accounting" },
          { firm: "Greenstreet Capital Partners", role: "CFO and Controller", years: "Pre-Aegean", note: "Accounting and reporting for numerous RE investments" },
          { firm: "Everest Partners, LLC", role: "CFO", years: "Pre-Aegean", note: "Followed Alexakos from Everest to Aegean at the 2007 split" },
          { firm: "Aegean Capital, LLC", role: "Chief Financial Officer", years: "2007-present", note: "All financial reporting, accounting, and AM functions" }
        ],
        deals: [
          { property: "University Lakes MHC FL -- financial oversight", year: "", role: "CFO", amount: 112000000, note: "Loan: $112M | Lender: CMBS servicer | Primary financial contact for CMBS loan discussions" }
        ],
      }
    ],
  },

  "Opera Plaza LLC / Melody Tower FL": {
    parentFirm:      "Melo Group (Miami FL; Argentine family development firm -- Carlos Melo, Martin Melo, Jose Luis Ferreira de Melo)",
    hq:              "Miami, FL (Arts and Entertainment District / Downtown)",
    founded:         "2001 (Melo family moved from Argentina to Miami in 2001; began development activities immediately)",
    aum:             "6,000+ completed units in Greater Downtown Miami; 2,000+ units in pipeline as of 2021; portfolio includes Art Plaza (667 units), Square Station (710 units), Melody Tower (479 units), Miami Plaza (425 units), Downtown 5th (52-story, largest MF in downtown CBD), Aria Reserve",
    focus:           "High-density luxury rental multifamily; transit-oriented development in Downtown Miami Arts and Entertainment District, Edgewater, and CBD; prolific volume builder with multiple simultaneous towers",
    currentStrategy: "Melody Tower (245 NW 14th Street, Arts and Entertainment District, Miami) is a 38-story, 479-unit luxury rental tower completed 2016 (groundbreak January 2014). $108M CMBS loan via Opera Plaza LLC borrower SPE. Opera Plaza Inc. confirmed as the property management entity (BBB complaint from December 2021 references 'Melody the building' managed by Opera Plaza Inc.). Melo Group is one of South Florida's most active residential tower developers with 6,000+ completed downtown Miami units. Score 35 -- no DSCR reported -- suggests this is a servicer monitoring situation on a stabilized luxury asset, not active distress. Note: 479 units reported in Multi-Housing News (2016 opening); also cited as 497 units in some sources.",
    states:          ["FL"],
    treppEntities:   ["Opera Plaza LLC","Melody Tower FL","245 NW 14th Street Miami FL"],
    loans: [
      {
        property: "Melody Tower FL",
        address:  "245 NW 14th Street",
        type:     "multifamily",
        balance:  108000000,
        dscr:     0,
        status:   "current",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Carlos Melo",
        title:         "Principal",
        firm:          "Melo Group (Miami, FL)",
        decisionPower: "Co-principal with Martin Melo. Quoted publicly on all major Melo Group announcements and project openings. Primary media face of the firm. Decision-maker on development, financing, and asset management.",
        background:    "Argentine-born developer. Moved with family from Argentina to Miami in 2001 after seeing the city's potential during a visit. Co-leads Melo Group with brother Martin Melo and father Jose Luis Ferreira de Melo. Strong believer in transit-oriented downtown Miami development: 'We believe in downtown. For us, it is not only the units. It is to bring something more to our communities where people can start enjoying where they live.' Melody Tower (245 NW 14th St) groundbroke January 2014, completed 2016. Following projects: Square Station (710 units, 2018), Art Plaza (667 units, 2019), Miami Plaza (425 units), Downtown 5th (52-story, 2021). Acquired full city block in Arts and Entertainment District for $105M (all-cash) in December 2021 for next residential towers. Also developing Aria Reserve (luxury condo, Edgewater).",
        education: [],
        career: [
          { firm: "Melo Group (Miami FL)", role: "Principal", years: "2001-present", note: "Co-leads with Martin Melo and father Jose Luis Ferreira de Melo; 6,000+ completed downtown Miami units since 2001 arrival" }
        ],
        deals: [
          { property: "Melody Tower, 245 NW 14th St, Miami FL -- 479 units", year: "", role: "Developer/Borrower (Opera Plaza LLC SPE)", amount: 108000000, note: "Loan: $108M | Lender: CMBS (trust unknown) | DSCR: Score 35 -- no DSCR reported | 38-story luxury rental; completed 2016; Opera Plaza LLC is SPE; Opera Plaza Inc. manages" },
          { property: "Downtown 5th, Downtown Miami", year: "", role: "Developer", amount: 0, note: "52-story, largest MF development in downtown Miami CBD; completed 2021" },
          { property: "Arts and Entertainment District block acquisition", year: "", role: "Buyer", amount: 105, note: "Loan: $105M (all-cash) | Full city block, Dec 2021; next residential tower phase" }
        ],
      },
      {
        rank:          2,
        name:          "Martin Melo",
        title:         "Principal",
        firm:          "Melo Group (Miami, FL)",
        decisionPower: "Co-principal with Carlos Melo. Quoted on development strategy and land acquisitions (led the $105M city block acquisition announcement). Co-decision-maker on all major transactions.",
        background:    "Co-leads Melo Group with brother Carlos Melo and father Jose Luis Ferreira de Melo. Announced the $105M all-cash block acquisition in December 2021. Described the Melo family as having moved from Argentina to Miami 'when they saw the city's potential during a 2001 visit.'",
        education: [],
        career: [
          { firm: "Melo Group (Miami FL)", role: "Principal", years: "2001-present", note: "Co-leads with Carlos Melo and Jose Luis Ferreira de Melo" }
        ],
        deals: [
          { property: "Melo Group portfolio (co-oversees all assets)", year: "", role: "Co-Principal", amount: 6000, note: "Loan: 6,000+ units | Lender: Various CMBS and construction lenders | Co-decision-maker across all Melo Group tower assets" }
        ],
      }
    ],
  },

  "BSREP V / Brookfield / Miramar Lakes FL": {
    parentFirm:      "BSREP V (Brookfield Strategic Real Estate Partners V) -- Brookfield Asset Management",
    hq:              "New York, NY / Toronto, ON",
    founded:         "2012 (BSREP fund series)",
    aum:             "~$800B+ gross AUM (Brookfield total); BSREP V is a flagship opportunistic RE fund (multi-billion dollar)",
    focus:           "Opportunistic real estate; global; large-cap value-add and distressed; office, retail, multifamily, logistics, hospitality",
    currentStrategy: "BSREP V (Brookfield Strategic Real Estate Partners V) is a flagship opportunistic CRE fund within the Brookfield family. Miramar Lakes is a Florida MF community in Miramar (Broward County). $52.5M loan; no servicer status or DSCR given. Score 35 -- Brookfield is previously profiled in sponsors.js but Miramar Lakes / BSREP V is a specific fund vehicle and property that is new in this batch. This entry captures the specific BSREP V / Miramar Lakes loan exposure for Trepp tracking.",
    states:          ["FL"],
    treppEntities:   ["BSREP V","Brookfield Strategic Real Estate Partners V","Miramar Lakes FL"],
    loans: [
      {
        property: "Brookfield / Miramar Lakes FL",
        address:  "FL",
        type:     "hotel",
        balance:  52500000,
        dscr:     0,
        status:   "current",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Brian Kingston",
        title:         "CEO, Brookfield Real Estate",
        firm:          "Brookfield Asset Management",
        decisionPower: "CEO of Brookfield Real Estate division overseeing all real estate investments including BSREP fund series. All major BSREP V portfolio decisions flow through Kingston and the investment committee.",
        background:    "CEO of Brookfield Real Estate, one of the largest real estate investment operations in the world. Brookfield Real Estate manages ~$270B+ in real estate AUM across office, retail, multifamily, logistics, and hospitality globally. Kingston oversees all BSREP fund activity including BSREP V. Oversees Brookfield's transformation of legacy mall and office assets in the post-COVID era.",
        education: [],
        career: [
          { firm: "Brookfield Asset Management", role: "CEO, Brookfield Real Estate", years: "Current", note: "Oversees $270B+ global RE portfolio including BSREP fund series" }
        ],
        deals: [
          { property: "Miramar Lakes, Miramar FL (Broward County)", year: "", role: "Borrower (BSREP V fund)", amount: 52500000, note: "Loan: $52.5M | Lender: Unknown | Score 35; FL MF; Brookfield opportunistic fund vehicle" }
        ],
      },
      {
        rank:          2,
        name:          "Keith Gelb",
        title:         "Co-Founder and Managing Member",
        firm:          "Rockpoint Group -- NOTE: Miramar Lakes is a Brookfield/BSREP V asset not Rockpoint. See BSREP context below.",
        decisionPower: "NOTE: This entry covers the BSREP V / Brookfield entity, not Rockpoint. Correct DM2 here is a senior Brookfield Real Estate executive at the BSREP V fund level. Brookfield's BSREP fund series is managed by the Brookfield Real Estate investment committee under Brian Kingston. Individual fund managers are not publicly named for BSREP V.",
        background:    "BSREP V is managed by Brookfield Real Estate Partners team under Brian Kingston (CEO). The fund is part of Brookfield's global opportunistic RE platform. Miramar Lakes FL is a portfolio asset. Individual BSREP V fund manager names are not publicly disclosed. For Baker Street purposes, engagement should go through Brian Kingston's team at Brookfield Real Estate (345 Park Avenue, New York).",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Manchester Lakes II LP / Manchester Lakes VA": {
    parentFirm:      "",
    hq:              "",
    founded:         "",
    aum:             "",
    focus:           "",
    currentStrategy: "",
    states:          [""],
    treppEntities:   [""],
    loans: [],
    people: [],
  },

  "NexMetro Communities": {
    parentFirm:      "",
    hq:              "2390 E Camelback Rd Suite 130, Phoenix AZ 85016",
    founded:         "2012",
    aum:             "$2B+ invested capital. 10,000+ homes completed or in development. $620M 12-asset portfolio recapitalized Jan-Feb 2025.",
    focus:           "Build-to-rent (BTR) luxury single-family rental neighborhoods under Avilla Homes brand. Sunbelt markets. Vertically integrated developer-operator. Open-end Direct Access Fund for accredited investors.",
    currentStrategy: "Completed two-tranche $620M institutional recapitalization Jan-Feb 2025 via JLL Capital Markets. Tranche 1: 4 AZ/CO assets, $160M Blackstone Insurance Capital debt plus $78.7M Artemis Real Estate Partners pref equity. Tranche 2: 8 AZ/CO/TX assets, $206M assumed agency financing plus $65.9M Stockbridge preferred equity. Avilla Oakridge TX sits outside this institutional pool as a separate CMBS conduit loan ($42M, DSCR 0.73, watchlist). Active Austin pipeline: Avilla Rio Oaks 260 units, Avilla Berry Creek Highlands 224 units, Avilla Vista Ranch 150 units all delivered 2025.",
    states:          ["TX","AZ","CO","FL","GA"],
    treppEntities:   ["NexMetro Communities LLC","Avilla Oakridge","Avilla Northside","Avilla Heritage Grand Prairie TX"],
    loans: [
      {
        property: "Avilla Oakridge",
        address:  "Texas (exact submarket not confirmed)",
        type:     "multifamily",
        balance:  42000000,
        dscr:     0.73,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "BTR build-to-rent community. Outside the Jan-Feb 2025 Blackstone/Artemis/Stockbridge institutional recap pool. Conduit loan. JLL Kevin MacKenzie team is warm intro path to Hartmann.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Josh E. Hartmann",
        title:         "CEO and Board Member",
        firm:          "NexMetro Communities",
        decisionPower: "Full authority over capital markets, debt strategy, asset disposition, and workout negotiations. Quoted in all 2025 recap announcements. Primary decision maker on Avilla Oakridge CMBS workout.",
        background:    "25+ years RE development. Pulte Group Phoenix division: Director Planning and Entitlement then Director Planning and Development, managed $2.4B capitalized assets and $100M+ annual cash flow. Prior: Project Engineer/Manager at Kleinfelder and Conestoga-Rovers and Associates; Technician Giles Engineering 1996. Joined NexMetro 2013 as EVP Operations; President/COO 2015-2018; CEO January 2019.",
        education: [
          { school: "University of Wisconsin-Madison", degree: "B.S. Geological Engineering", year: "", note: "" }
        ],
        career: [
          { firm: "Giles Engineering Associates", role: "Technician", years: "1996", note: "" },
          { firm: "Kleinfelder; Conestoga-Rovers and Associates", role: "Project Engineer/Manager", years: "1997-2006", note: "Environmental and civil engineering" },
          { firm: "Sunbelt Holdings", role: "Project Engineer", years: "2006-2007", note: "AZ land developer" },
          { firm: "Pulte Group", role: "Director Planning and Development", years: "2007-2013", note: "Phoenix division. $2.4B capitalized assets." },
          { firm: "NexMetro Communities", role: "EVP Operations", years: "2013-2015", note: "" },
          { firm: "NexMetro Communities", role: "President / COO", years: "2015-2018", note: "" },
          { firm: "NexMetro Communities", role: "CEO and Board Member", years: "2019-present", note: "YPO member. ULI Built for Rent Product Council." }
        ],
        deals: [
          { property: "Avilla Oakridge TX", year: "ongoing", role: "Borrower/Owner", amount: 42000000, note: "CMBS DSCR 0.73 watchlist." },
          { property: "12-asset BTR portfolio recapitalization", year: "2025", role: "CEO/Sponsor", amount: 620000000, note: "JLL arranged. Blackstone, Artemis, Stockbridge as equity partners." },
          { property: "NexMetro 60+ Avilla Homes communities", year: "2012-present", role: "CEO/Sponsor", amount: 2000000000, note: "$2B+ invested capital portfolio." }
        ],
      },
      {
        rank:          2,
        name:          "Ken Abrahams",
        title:         "Co-Founder and Executive Chairman",
        firm:          "NexMetro Communities",
        decisionPower: "Board-level oversight and institutional equity relationships. Controls strategic direction alongside Hartmann. Key relationship for institutional LP conversations.",
        background:    "40+ years RE entrepreneurship. Co-founded NexMetro 2012; founding CEO until 2019. Prior: Founding Partner and Executive VP at Diamond Ventures Inc. (Tucson AZ; residential, commercial, industrial). General Partner at Cadre Partners LLC (AZ private equity). NexMetro sold first three Phoenix projects for $98M in 2018.",
        education: [
          { school: "University of Arizona", degree: "B.A.", year: "", note: "" },
          { school: "University of Arizona", degree: "M.S.", year: "", note: "" },
          { school: "University of Arizona", degree: "M.A.", year: "", note: "" }
        ],
        career: [
          { firm: "Diamond Ventures Inc.", role: "Founding Partner and Executive VP", years: "pre-2012", note: "Tucson AZ. Diversified residential, commercial, industrial." },
          { firm: "Cadre Partners LLC", role: "General Partner", years: "ongoing", note: "AZ private equity venture firm." },
          { firm: "NexMetro Communities", role: "Co-Founder and CEO", years: "2012-2019", note: "" },
          { firm: "NexMetro Communities", role: "Executive Chairman and Board Director", years: "2019-present", note: "" }
        ],
        deals: [
          { property: "Phoenix Avilla portfolio sale", year: "2018", role: "CEO/Seller", amount: 98000000, note: "First three Phoenix Avilla communities. Submarket per-door records." }
        ],
      },
      {
        rank:          3,
        name:          "Jason Flory",
        title:         "Regional Managing Director, Austin and Atlanta",
        firm:          "NexMetro Communities",
        decisionPower: "P&L and operational authority over TX and GA assets. Day-to-day lender and servicer contact for Texas assets. Directly oversees Avilla Oakridge watchlist collateral. Most likely first contact on the DSCR situation.",
        background:    "20+ years. NexMetro since 2016. Progression: Development Manager Dallas, VP Development Dallas and Austin, Regional MD Austin and Atlanta. Prior: Engineer Consultant at Jones and Carter Inc. and Kimley-Horn; Technical Sales Engineer at Contech Engineered Solutions and Propex Geosolutions. From Bryan TX, raised Lafayette LA.",
        education: [
          { school: "Louisiana State University", degree: "B.S. Civil Engineering", year: "", note: "" }
        ],
        career: [
          { firm: "Jones and Carter Inc.; Kimley-Horn", role: "Engineer Consultant", years: "pre-2016", note: "TX civil and infrastructure engineering." },
          { firm: "Contech Engineered Solutions; Propex Geosolutions", role: "Technical Sales Engineer", years: "pre-2016", note: "" },
          { firm: "NexMetro Communities", role: "Development Manager Dallas", years: "2016", note: "" },
          { firm: "NexMetro Communities", role: "VP Development Dallas and Austin", years: "2017-2021", note: "" },
          { firm: "NexMetro Communities", role: "Regional MD Austin and Atlanta", years: "2021-present", note: "" }
        ],
        deals: [
          { property: "Avilla Oakridge TX", year: "ongoing", role: "Asset Manager/Operator", amount: 42000000, note: "Direct operational oversight of watchlist asset." },
          { property: "Avilla Northside McKinney TX; Avilla Heritage Grand Prairie TX", year: "2025", role: "Regional MD", amount: 0, note: "In 8-asset agency recap pool." }
        ],
      }
    ],
  },

  "Open Door Capital": {
    parentFirm:      "",
    hq:              "Maui HI (Brandon Turner); operations distributed nationally",
    founded:         "2019",
    aum:             "$1B+ AUM. 13,500+ units as GP. 2,400+ accredited investors. $982M+ in acquisitions executed.",
    focus:           "Value-add multifamily syndication targeting Class B/C apartments, mobile home parks, and self-storage. Retail accredited investor capital raises. Sunbelt and national markets. Fund-based model.",
    currentStrategy: "Fund 11 Mixed-Asset CashGrowth+ structure is current offering. Rayford's Edge and Parkwyn form the Lone Star Portfolio (617 units combined, Houston MSA) with CMBS watchlist exposure. Brandon Turner stepped back from operations; Walker Meadows runs firm as CEO. Brian Murray holds key principal status on loan documents. ODC raised retail LP capital ($50K-$75K minimums) from 2,400+ investors into CMBS-financed deals.",
    states:          ["TX","HI","CO","GA","FL","WA"],
    treppEntities:   ["Open Door Capital LLC","Rayford's Edge","Lone Star Portfolio","Parkwyn"],
    loans: [
      {
        property: "Rayford's Edge (Lone Star Portfolio)",
        address:  "Houston TX MSA",
        type:     "multifamily",
        balance:  36800000,
        dscr:     0.77,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "617 units combined with Parkwyn. Retail investor LP base makes default reputationally toxic. Brian Murray is key principal with personal recourse exposure.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Brandon Turner",
        title:         "Founder and Managing Member",
        firm:          "Open Door Capital",
        decisionPower: "Founder and ultimate authority. Fund strategy and major capital decisions. Public-facing brand with 430K Instagram followers and 100M+ podcast downloads makes any default publicly visible.",
        background:    "Started buying rentals at age 21 in Washington state. VP and Co-Host of BiggerPockets podcast 2012-2022 (100M+ downloads). Founded Open Door Capital 2019. Left BiggerPockets 2022, launched BetterLife Podcast. Author of 7 RE books with 1M+ copies sold. History degree (institution not confirmed). Moved to Maui. Currently manages 14,000+ units.",
        education: [
          { school: "Not confirmed", degree: "B.A. History", year: "early 2000s", note: "" }
        ],
        career: [
          { firm: "BiggerPockets", role: "VP and Co-Host", years: "2012-2022", note: "Podcast grew to 100M+ downloads." },
          { firm: "Open Door Capital", role: "Founder and Managing Member", years: "2019-present", note: "$1B+ AUM. 14,000+ units." },
          { firm: "BetterLife Podcast", role: "Host", years: "2022-present", note: "" }
        ],
        deals: [
          { property: "Rayford's Edge / Lone Star Portfolio", year: "ongoing", role: "Sponsor/Borrower", amount: 36800000, note: "CMBS DSCR 0.77 watchlist." },
          { property: "Texas 3-Pack Portfolio", year: "ongoing", role: "Sponsor", amount: 0, note: "673-unit portfolio Houston and Austin MSAs." },
          { property: "Open Door Capital Fund 1-11", year: "2019-present", role: "Managing Member", amount: 982000000, note: "$982M+ total acquisitions led." }
        ],
      },
      {
        rank:          2,
        name:          "Walker Meadows",
        title:         "CEO",
        firm:          "Open Door Capital",
        decisionPower: "Day-to-day operations. Primary lender and servicer contact for all ODC assets. Led $982M+ in acquisitions. GP on 13,500+ units. Operational decision maker on Rayford's Edge DSCR situation.",
        background:    "Engineering and corporate finance background across multiple industries before RE. Worked unpaid part-time for ODC in 2019 before going full-time January 2020. Built all ODC financial models from inception. Promoted COO then CEO 2024. Based in Atlanta GA.",
        education: [
          { school: "University of Georgia", degree: "B.S. Mechanical Engineering", year: "", note: "" },
          { school: "Georgia College and State University", degree: "MBA", year: "", note: "" }
        ],
        career: [
          { firm: "Multiple industries", role: "Corporate finance and engineering roles", years: "pre-2019", note: "" },
          { firm: "Open Door Capital", role: "Head of Acquisitions", years: "2020-2022", note: "Went full-time January 2020 after unpaid part-time 2019." },
          { firm: "Open Door Capital", role: "COO then CEO", years: "2022-present", note: "$982M+ acquisitions led." }
        ],
        deals: [
          { property: "Rayford's Edge / Lone Star Portfolio", year: "ongoing", role: "CEO/Operator", amount: 36800000, note: "Operational oversight of watchlist asset." },
          { property: "Open Door Capital portfolio", year: "2020-present", role: "CEO", amount: 982000000, note: "$982M+ acquisitions led." }
        ],
      },
      {
        rank:          3,
        name:          "Brian Murray",
        title:         "Co-Founder and Key Principal",
        firm:          "Open Door Capital / Washington Street Properties",
        decisionPower: "Key principal on loan documents. Carries personal recourse carve-out exposure on Rayford's Edge. Board-level guarantor. 8,000+ unit personal track record. Anchor contact for serious CMBS workout discussions.",
        background:    "Founder and CEO of Washington Street Properties (Inc. 500/5000 five consecutive years; Gold Stevie Award 2015 Executive of Year RE Industry). Co-founded ODC with Turner. Author of Crushing It in Apartments and Commercial Real Estate and The Multifamily Millionaire Volumes I and II. Managed through 2008-2012 downturn -- understands CMBS workout dynamics.",
        education: [
          { school: "Not confirmed", degree: "", year: "", note: "Northeast US likely." }
        ],
        career: [
          { firm: "Washington Street Properties", role: "Founder and CEO", years: "2007-present", note: "Inc. 500/5000 five consecutive years. $50M+ portfolio." },
          { firm: "Open Door Capital", role: "Co-Founder and Key Principal", years: "2019-present", note: "Key principal and guarantor on loan documents." }
        ],
        deals: [
          { property: "Rayford's Edge / Lone Star Portfolio", year: "ongoing", role: "Key Principal/Guarantor", amount: 36800000, note: "Personal recourse carve-out exposure." },
          { property: "Washington Street Properties portfolio", year: "2007-present", role: "Founder/Owner", amount: 0, note: "8,000+ units personal track record." }
        ],
      }
    ],
  },

  "Optimum Properties": {
    parentFirm:      "",
    hq:              "39 Duncan Avenue, Jersey City NJ 07306",
    founded:         "c. 2002",
    aum:             "Aliro Apartments 869 units North Miami FL in JV with Blackstone. NJ urban multifamily portfolio. Downtown Miami development pipeline.",
    focus:           "Value-add B-to-A multifamily repositioning. Densely populated urban NJ and FL markets. Vertically integrated with in-house construction, leasing, and property management.",
    currentStrategy: "Operates Aliro Apartments (14000 Biscayne Blvd, North Miami FL 33181) -- 869 units built 1973, in JV with Blackstone (acquired 2016 for $117M from Stellar Management). $120M expansion plan announced 2021: 516-unit new building plus amenity center via FINFROCK GC. CMBS note $30M DSCR 0.63 watchlist. Also pursuing 378-unit tower at 1315 NE Miami Court via Miami-Dade Workforce Housing density bonus. Ownership principal not publicly identified -- best intro path is Greenberg Traurig partner Ethan Wasserman who is named as FL counsel in Miami-Dade preapplication filings.",
    states:          ["NJ","FL"],
    treppEntities:   ["Optimum Properties LLC","BRE Portofino MF Property Owner LLC","Aliro Apartments","1315 Partners LLC"],
    loans: [
      {
        property: "Aliro Apartments",
        address:  "14000 Biscayne Blvd, North Miami FL 33181",
        type:     "multifamily",
        balance:  30000000,
        dscr:     0.63,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "869 units. Blackstone equity JV partner (acquired 2016 for $117M). $120M expansion plan via FINFROCK GC. Ownership principal not publicly identified.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Owner / Principal",
        firm:          "Optimum Properties",
        decisionPower: "Controlling equity and decision authority. Identity not disclosed in any public source. Best intro path: Greenberg Traurig partner Ethan Wasserman (named in Miami-Dade preapplication filings as Optimum's FL counsel).",
        background:    "Jersey City NJ-based operator with 20+ years NJ and FL multifamily. Partnered with Blackstone on 2016 Aliro acquisition. Previously owned Hudson Ridge Apartments North Bergen NJ (215 units, sold c.2024 via JLL/Freddie Mac). Expanding into Downtown Miami.",
        education: [],
        career: [
          { firm: "Optimum Properties", role: "Owner/Principal", years: "c.2002-present", note: "NJ and FL multifamily. Jersey City base." }
        ],
        deals: [
          { property: "Aliro Apartments North Miami FL", year: "2016-present", role: "Operating Partner/Owner", amount: 117000000, note: "JV with Blackstone. 869 units." },
          { property: "1315 NE Miami Court", year: "2024", role: "Developer/Applicant", amount: 0, note: "378-unit tower preapplication. Workforce housing density bonus." }
        ],
      },
      {
        rank:          2,
        name:          "Fred Quinn",
        title:         "Chief Operations Officer",
        firm:          "Optimum Properties",
        decisionPower: "Day-to-day operations. Primary servicer and lender contact on Aliro CMBS note. Manages in-house construction, leasing, and property management across NJ and FL portfolio.",
        background:    "COO of Optimum Properties. Highest named executive on public team page. Manages vertically integrated platform including in-house construction, dedicated leasing team, and property management. Coordinates with Blackstone JV team on Aliro asset management. Prior background not publicly confirmed.",
        education: [],
        career: [
          { firm: "Optimum Properties", role: "Chief Operations Officer", years: "current", note: "" }
        ],
        deals: [
          { property: "Aliro Apartments", year: "ongoing", role: "COO/Operator", amount: 0, note: "869-unit operations management. $30M CMBS watchlist." }
        ],
      }
    ],
  },

  "AHV Communities": {
    parentFirm:      "",
    hq:              "San Antonio TX",
    founded:         "2013",
    aum:             "$2.5B+ project capitalization over company history.",
    focus:           "Pioneer and leader in Built-for-Rent (BTR) luxury single-family and attached rental communities. Vertically integrated developer-builder-operator. Third-Party BTR Services launched 2022 providing execution services to other BTR developers.",
    currentStrategy: "AHV Katy Legacy (Katy TX, Houston MSA) has CMBS loan of $36.2M at DSCR 0.45 -- severe distress, likely in or approaching special servicer. Spencer Rinker has departed AHV and is now Managing Partner at Daylight Residential (Newport Beach CA). Mark Wolf runs AHV as sole controlling principal. AHV previously sold Legacy Austin and Rivers Edge Austin MSA -- disposition is a precedented workout exit. Active TX, CA, CO, GA, TN, AL, WA pipeline including Altura San Antonio, Frame at Med Center San Antonio, Cypress Heights Cypress TX.",
    states:          ["TX","CA","CO","WA","TN","AL","GA"],
    treppEntities:   ["AHV Communities LLC","AHV Katy Legacy","American Housing Ventures LLC","Ahv Legacy Partners LLC"],
    loans: [
      {
        property: "AHV Katy Legacy",
        address:  "Katy TX (Houston MSA)",
        type:     "multifamily",
        balance:  36200000,
        dscr:     0.45,
        status:   "special-servicing",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "BTR single-family rental community. DSCR 0.45 indicates severe distress. AHV sold Legacy Austin and Rivers Edge Austin in prior cycle -- disposition is viable workout exit. Marcus and Millichap Harris Group (co-principal Kim's former employer) is natural listing broker.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Mark Wolf",
        title:         "Founder and CEO",
        firm:          "AHV Communities",
        decisionPower: "Full authority over capital markets, disposition strategy, lender negotiations, and company direction. Now sole controlling principal following Spencer Rinker's departure to Daylight Residential.",
        background:    "30+ year CRE career. Ocwen Financial Corporation 1995-1997 (Senior Analyst; specialty servicer/distressed lender). HFF 1997-2000 (Director; CMBS capital markets and national MF mortgage banking). Johnson Capital 2000-2008 (Executive Director/Managing Partner; national mortgage banking). Co-founded Sicuro Realty Partners 2000. Greenlaw Partners Newport Beach 2010-2013. Founded AHV 2013 with Rinker and Kim.",
        education: [
          { school: "University of Arizona", degree: "B.S. International Business and Finance", year: "1990-1993", note: "Transferred to Florida Atlantic University 1993-1995." },
          { school: "Florida Atlantic University", degree: "B.S. International Business and Finance", year: "1995", note: "" }
        ],
        career: [
          { firm: "Ocwen Financial Corporation", role: "Senior Analyst", years: "1995-1997", note: "Specialty servicer and distressed lender. Boca Raton FL." },
          { firm: "HFF (Holliday Fenoglio Fowler)", role: "Director", years: "1997-2000", note: "CMBS capital markets. National MF mortgage banking." },
          { firm: "Sicuro Realty Partners", role: "Co-Founder", years: "2000", note: "MF finance advisory. $4B+ capitalized." },
          { firm: "Johnson Capital", role: "Executive Director/Managing Partner", years: "2000-2008", note: "National mortgage banking." },
          { firm: "Greenlaw Partners", role: "Managing Partner", years: "2010-2013", note: "Newport Beach CA. MF platform." },
          { firm: "AHV Communities", role: "Founder and CEO", years: "2013-present", note: "$2.5B+ project capitalization." }
        ],
        deals: [
          { property: "AHV Katy Legacy TX", year: "ongoing", role: "Borrower/Owner", amount: 36200000, note: "CMBS DSCR 0.45 severe distress." },
          { property: "Legacy Austin TX and Rivers Edge Austin TX", year: "prior cycle", role: "Developer/Seller", amount: 0, note: "Sold -- precedent for disposition-as-workout-exit." },
          { property: "Village at Vickery Grove San Antonio TX", year: "2014-2015", role: "Founder/Developer", amount: 0, note: "First AHV community. 82 detached homes." }
        ],
      },
      {
        rank:          2,
        name:          "Mr. Kim",
        title:         "Founding Partner, Asset Management",
        firm:          "AHV Communities",
        decisionPower: "Executive oversight of asset management, marketing, branding, and acquisitions. Has the most granular NOI and operational data on Katy Legacy. Secondary contact if Wolf unavailable.",
        background:    "Founding partner at AHV. Worked with Wolf and Rinker 8+ years before AHV at Sicuro Realty Partners and Greenlaw Partners. Prior: Senior Financial Analyst at The Harris Group at Marcus and Millichap -- $600M in closed MF transactions, 60 properties, 4,500+ units. Harris Group is a natural listing broker for any Katy Legacy disposition.",
        education: [],
        career: [
          { firm: "Marcus and Millichap (Harris Group)", role: "Senior Financial Analyst", years: "pre-2008", note: "$600M closed. 60 properties. 4,500+ units." },
          { firm: "Sicuro Realty Partners; Greenlaw Partners", role: "Senior Analyst", years: "2008-2013", note: "" },
          { firm: "AHV Communities", role: "Founding Partner", years: "2013-present", note: "Asset management oversight." }
        ],
        deals: [
          { property: "AHV Katy Legacy TX", year: "ongoing", role: "Asset Manager", amount: 36200000, note: "Primary NOI data holder." },
          { property: "Harris Group portfolio", year: "pre-2008", role: "Senior Financial Analyst", amount: 600000000, note: "$600M in closed MF transactions." }
        ],
      }
    ],
  },

  "San Felipe Resource Company": {
    parentFirm:      "",
    hq:              "Texas (Austin MSA likely -- exact HQ not confirmed)",
    founded:         "Not confirmed",
    aum:             "Single confirmed asset: Medina Highlands Austin TX. 309 units. $52.5M ACRE bridge loan.",
    focus:           "Texas multifamily development. Medina Highlands is a newly constructed 2023 luxury studio/1BR/2BR community in Austin Highland neighborhood adjacent to Highland MetroRail station.",
    currentStrategy: "Medina Highlands (212 W Highland Mall Blvd, Austin TX 78752): 309 units, 4 stories, built 2023. Located in former Highland Mall redevelopment district. Third-party managed by RPM Living (Roscoe Properties affiliate). Lender is ACRE (acremgt.com) -- a floating-rate bridge loan, NOT CMBS. ACRE is a NY/Miami/Atlanta/Singapore real estate fund manager with $8B+ in transactions backed by Almanac Realty ($320M JV). DSCR 0.57 on a floating-rate 2-5 year bridge loan is severe distress. Principal identity requires Travis County Appraisal District search plus Texas SOS entity filing. Matt Whelan at RedLeaf Properties (Highland district master developer) is a warm intro to identify the principal.",
    states:          ["TX"],
    treppEntities:   ["San Felipe Resource Company","Medina Highlands Austin TX"],
    loans: [
      {
        property: "Medina Highlands",
        address:  "212 W Highland Mall Blvd, Austin TX 78752",
        type:     "multifamily",
        balance:  52500000,
        dscr:     0.57,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "ACRE (acremgt.com)",
        note:     "FLOATING-RATE BRIDGE LOAN not CMBS. ACRE is direct lender with full discretionary workout authority -- no securitization trust constraints. 309 units built 2023. Adjacent to Highland MetroRail. Managed by RPM Living. Principal identity unconfirmed -- requires TX SOS and Travis County deed research.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Unknown Principal",
        title:         "Borrower / Managing Member",
        firm:          "San Felipe Resource Company",
        decisionPower: "Controlling borrower on $52.5M ACRE bridge loan. Identity requires Travis County Appraisal District and Texas SOS entity search.",
        background:    "San Felipe Resource Company is the named borrower on the Medina Highlands bridge loan. RPM Living as third-party manager indicates a passive financial owner. ACRE describes its borrowers as institutional developers with demonstrated track records -- suggesting an experienced TX developer not a first-time borrower.",
        education: [],
        career: [
          { firm: "San Felipe Resource Company", role: "Principal/Borrower", years: "2022-present", note: "Identity unconfirmed. TX SOS research required." }
        ],
        deals: [
          { property: "Medina Highlands Austin TX", year: "2023", role: "Developer/Borrower", amount: 52500000, note: "309 units. ACRE bridge loan. DSCR 0.57." }
        ],
      }
    ],
  },

  "BSPRT / East Park Multi Portfolio": {
    parentFirm:      "Benefit Street Partners (Franklin Templeton)",
    hq:              "9 West 57th Street, New York NY 10019",
    founded:         "2008",
    aum:             "$35B+ AUM (Benefit Street Partners). BSPRT REIT approximately $4B.",
    focus:           "Commercial real estate debt. CMBS B-piece investing. CRE CLO. Mezzanine. Preferred equity. Multifamily heavy.",
    currentStrategy: "BSPRT (Benefit Street Partners Realty Trust) holds the East Park Multi Portfolio GA MF loan ($27M, DSCR -0.52, negative cash flow). BSPRT is itself a lender/REIT -- this is a case where Baker Street's client may be BSPRT as a lender seeking workout advisory. Benefit Street Partners was acquired by Franklin Templeton in 2024. Richard Byrne continues as President. DSCR of -0.52 means NOI does not cover debt service at all -- asset is almost certainly in special servicing or REO.",
    states:          ["GA"],
    treppEntities:   ["BSPRT","Benefit Street Partners Realty Trust","East Park Multi Portfolio"],
    loans: [
      {
        property: "East Park Multi Portfolio",
        address:  "Georgia",
        type:     "multifamily",
        balance:  27000000,
        dscr:     -0.52,
        status:   "special-servicing",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "Negative DSCR. NOI does not cover debt service. Likely REO or advanced special servicing. BSPRT is the lender/investor on this position.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Richard Byrne",
        title:         "President",
        firm:          "Benefit Street Partners (Franklin Templeton)",
        decisionPower: "President of the platform. Ultimate oversight on distressed credit positions including East Park Multi Portfolio.",
        background:    "Former CEO Deutsche Bank Securities. Deutsche Bank CRE debt history overlaps with the Iron Hound and UBS CMBS era. Joined Benefit Street Partners as President and grew firm to $35B+ AUM before Franklin Templeton acquisition in 2024.",
        education: [],
        career: [
          { firm: "Deutsche Bank Securities", role: "CEO", years: "pre-2008", note: "Major CMBS originator. DB CRE overlaps with UBS/Iron Hound era." },
          { firm: "Benefit Street Partners (Franklin Templeton)", role: "President", years: "2008-present", note: "Grew to $35B+ AUM." }
        ],
        deals: [
          { property: "East Park Multi Portfolio GA", year: "ongoing", role: "Lender/REIT Platform Head", amount: 27000000, note: "DSCR -0.52. Likely REO." },
          { property: "BSPRT REIT", year: "ongoing", role: "Platform President", amount: 4000000000, note: "~$4B CRE debt portfolio." }
        ],
      }
    ],
  },

  "Trinity GP Fund / Diplomat Beach Resort": {
    parentFirm:      "Trinity Real Estate Investment Services (Dallas TX) / Credit Suisse (UBS post-2023)",
    hq:              "Trinity: Dallas TX. Hotel: Hollywood FL.",
    founded:         "Trinity: 2008",
    aum:             "Trinity: $4B+ managed. Diplomat Beach Resort: $452M loan balance.",
    focus:           "Trinity: hotel and hospitality CMBS special servicing, receivership management, and workout. The Diplomat Beach Resort is a 1,000-room luxury resort in Hollywood FL between Miami and Fort Lauderdale.",
    currentStrategy: "The Diplomat Beach Resort ($452M CMBS, DSCR 0.86) is a landmark South Florida luxury hotel. Credit Suisse originated the CMBS loan; Credit Suisse was acquired by UBS in 2023, meaning the loan may sit under UBS legacy CRE book. Trinity GP Fund involvement suggests special servicing or receiver appointment. DSCR 0.86 is below breakeven but hotel sector recovery is ongoing. Hollywood FL resort market has recovered strongly post-COVID -- refinancing at correct structure is viable.",
    states:          ["FL"],
    treppEntities:   ["Trinity GP Fund","The Diplomat Beach Resort","Credit Suisse CMBS"],
    loans: [
      {
        property: "The Diplomat Beach Resort",
        address:  "Hollywood FL",
        type:     "hotel",
        balance:  452000000,
        dscr:     0.86,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "Trinity Real Estate Investment Services",
        note:     "1,000-room luxury resort. Credit Suisse originated (now UBS legacy). $452M is the largest single asset in this dataset. Hollywood FL market has recovered strongly post-COVID.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Trinity Real Estate Investment Services",
        title:         "Special Servicer / GP Fund Manager",
        firm:          "Trinity Real Estate Investment Services",
        decisionPower: "Controls asset management, disposition, and workout decisions as special servicer on the Diplomat.",
        background:    "Dallas TX-based hotel CMBS special servicer and workout specialist. Founded 2008. Manages distressed hotel assets through receivership, REO, and structured workout. $4B+ portfolio under management. Trinity GP Fund is their co-investment vehicle for distressed hotel assets.",
        education: [],
        career: [
          { firm: "Trinity Real Estate Investment Services", role: "Special Servicer/GP Fund Manager", years: "2008-present", note: "Dallas TX. Hotel CMBS workout specialist. $4B+ portfolio." }
        ],
        deals: [
          { property: "The Diplomat Beach Resort Hollywood FL", year: "ongoing", role: "Special Servicer", amount: 452000000, note: "CMBS DSCR 0.86." }
        ],
      }
    ],
  },

  "Samuel Rotter": {
    parentFirm:      "",
    hq:              "Florida (likely South FL based on asset location)",
    founded:         "",
    aum:             "$56.6M CMBS loan on Country Club Lakes FL multifamily.",
    focus:           "Private Florida multifamily investor. Country Club Lakes is likely a 300-500 unit Class B/C suburban FL apartment community.",
    currentStrategy: "Individual or principal-controlled borrower on $56.6M FL MF CMBS watchlist loan. County deed records (Broward, Palm Beach, or Miami-Dade County) and FL SOS entity search would confirm borrowing structure.",
    states:          ["FL"],
    treppEntities:   ["Samuel Rotter","Country Club Lakes FL MF"],
    loans: [
      {
        property: "Country Club Lakes",
        address:  "Florida (county not confirmed)",
        type:     "multifamily",
        balance:  56600000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Individual borrower. FL SOS entity search and county deed records required to confirm structure.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Samuel Rotter",
        title:         "Borrower / Principal",
        firm:          "Private -- FL",
        decisionPower: "Primary decision authority on $56.6M CMBS watchlist loan.",
        background:    "Private FL multifamily investor. $56.6M CMBS watchlist loan on Country Club Lakes. No confirmed public profile. FL SOS entity search required.",
        education: [],
        career: [
          { firm: "Private FL real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Country Club Lakes FL", year: "ongoing", role: "Borrower/Owner", amount: 56600000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Apartment Income REIT (AIR Communities)": {
    parentFirm:      "Apartment Income REIT Corp (NYSE: AIRC)",
    hq:              "4582 South Ulster Street Suite 1700, Denver CO 80237",
    founded:         "2020 (spun off from Aimco)",
    aum:             "$10B+ portfolio. 75+ apartment communities. Approximately 27,000 apartment homes.",
    focus:           "Class A multifamily REIT. Coastal and Sunbelt markets. Miami FL is a core market -- Flamingo Point is a flagship Miami Beach asset.",
    currentStrategy: "Flamingo Point (Miami Beach FL) is a 1,000+ unit luxury apartment complex on Biscayne Bay. The $55.3M CMBS note at DSCR 0.93 is likely a subordinate or mezzanine piece on a larger institutional capital stack. AIR is an investment-grade NYSE-listed REIT with the balance sheet to resolve structural debt issues. Baker Street engagement is at the debt advisory and recapitalization level rather than distress workout.",
    states:          ["FL","CO","CA","VA","MD","MA"],
    treppEntities:   ["Apartment Income REIT Corp","AIR Communities","Flamingo Point Miami Beach","AIRC Operating Partnership LP"],
    loans: [
      {
        property: "Flamingo Point",
        address:  "Miami Beach FL",
        type:     "multifamily",
        balance:  55300000,
        dscr:     0.93,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Likely subordinate or mezzanine note on a larger institutional capital stack. AIR is investment-grade REIT with capacity to resolve. Engagement is debt advisory/recapitalization not distress workout.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Terry Considine",
        title:         "Chairman and CEO",
        firm:          "Apartment Income REIT (AIR Communities)",
        decisionPower: "Chairman and CEO. Controls all major capital decisions including debt structure, recapitalization, and asset disposition strategy.",
        background:    "Co-founded Aimco in 1975 and built it into one of the nation's largest apartment REITs over 45 years. Oversaw the 2020 separation of Aimco into AIR Communities (REIT) and Aimco (development). 50+ years multifamily experience. Significant political and philanthropic connections in Colorado.",
        education: [
          { school: "Harvard University", degree: "B.A.", year: "", note: "" },
          { school: "University of California Berkeley School of Law", degree: "J.D.", year: "", note: "" }
        ],
        career: [
          { firm: "Aimco (Apartment Investment and Management)", role: "Co-Founder and CEO", years: "1975-2020", note: "Built into one of nation's largest apartment REITs." },
          { firm: "Apartment Income REIT (AIR Communities)", role: "Chairman and CEO", years: "2020-present", note: "$10B+ portfolio. 75+ communities." }
        ],
        deals: [
          { property: "Flamingo Point Miami Beach FL", year: "ongoing", role: "Chairman/CEO", amount: 55300000, note: "CMBS DSCR 0.93 watchlist." }
        ],
      }
    ],
  },

  "Toll Brothers (BB Living at Epperson Ranch)": {
    parentFirm:      "Toll Brothers Inc. (NYSE: TOL)",
    hq:              "Horsham PA (corporate HQ). Wesley Chapel FL (asset location).",
    founded:         "1967",
    aum:             "$14B+ revenue FY2024. Largest US luxury homebuilder. BB Living is their built-for-rent brand.",
    focus:           "Luxury homebuilding for-sale. BB Living is their BTR residential platform. Epperson Ranch is a master-planned community in Wesley Chapel FL (Tampa MSA, Pasco County).",
    currentStrategy: "BB Living at Epperson Ranch: BTR community in Wesley Chapel FL. $32.6M CMBS DSCR 0.88 below breakeven but likely lease-up timing on a newer community. Toll Brothers is investment-grade with $14B+ revenue and capacity to resolve. BB Living is a relatively new BTR entrant and may lack sophisticated CMBS workout experience in-house.",
    states:          ["FL","PA","NJ","CA","TX","MD","VA","CO"],
    treppEntities:   ["Toll Brothers Inc.","BB Living at Epperson Ranch","Toll Brothers Apartment Living"],
    loans: [
      {
        property: "BB Living at Epperson Ranch",
        address:  "Wesley Chapel FL (Tampa MSA)",
        type:     "multifamily",
        balance:  32600000,
        dscr:     0.88,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "BTR community. Toll Brothers is investment-grade -- this is a debt advisory conversation not a distress rescue. BB Living is relatively new BTR entrant.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Douglas Yearley Jr.",
        title:         "Chairman and CEO",
        firm:          "Toll Brothers Inc.",
        decisionPower: "Chairman and CEO. Controls all strategic capital decisions including BB Living BTR platform strategy and debt management.",
        background:    "Joined Toll Brothers 1990 as attorney. Became CEO 2010. Under his leadership Toll expanded into apartment rentals (Toll Brothers Apartment Living) and BTR (BB Living). Long institutional lender relationships from decades as public homebuilder CEO.",
        education: [
          { school: "Bucknell University", degree: "B.A.", year: "", note: "" },
          { school: "Harvard Law School", degree: "J.D.", year: "", note: "" }
        ],
        career: [
          { firm: "Toll Brothers", role: "Attorney then Senior Executive", years: "1990-2010", note: "" },
          { firm: "Toll Brothers", role: "CEO then Chairman/CEO", years: "2010-present", note: "$14B+ FY2024 revenue." }
        ],
        deals: [
          { property: "BB Living at Epperson Ranch Wesley Chapel FL", year: "ongoing", role: "Chairman/CEO", amount: 32600000, note: "CMBS DSCR 0.88 watchlist." }
        ],
      }
    ],
  },

  "Brooke Kerperien": {
    parentFirm:      "",
    hq:              "Georgia (Atlanta metro area)",
    founded:         "",
    aum:             "$67.9M CMBS loan on Edgewater at Sandy Springs GA multifamily.",
    focus:           "Private Georgia multifamily investor. Sandy Springs is one of Atlanta's strongest MF submarkets -- Perimeter Center employment hub, Pill Hill medical complex, high-income demographics.",
    currentStrategy: "Individual borrower on $67.9M GA MF CMBS watchlist loan. Sandy Springs submarket (Fulton County north of Atlanta) is fundamentally strong. Watchlist status at Score 55 suggests early-stage performance concern. Fulton County deed records and Georgia SOS entity search would surface borrowing entity and co-sponsors.",
    states:          ["GA"],
    treppEntities:   ["Brooke Kerperien","Edgewater at Sandy Springs GA MF"],
    loans: [
      {
        property: "Edgewater at Sandy Springs",
        address:  "Sandy Springs GA (Fulton County)",
        type:     "multifamily",
        balance:  67900000,
        dscr:     0,
        status:   "watchlist",
        state:    "GA",
        maturity: "",
        servicer: "",
        note:     "Sandy Springs is a strong Atlanta submarket. Individual borrower. GA SOS and Fulton County deed research recommended.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Brooke Kerperien",
        title:         "Borrower / Principal",
        firm:          "Private -- GA",
        decisionPower: "Primary decision authority on $67.9M CMBS watchlist loan.",
        background:    "Private GA multifamily investor/sponsor. $67.9M CMBS watchlist loan on Edgewater at Sandy Springs. No confirmed public profile. Sandy Springs market suggests 300-500 unit Class A or B+ community acquired during 2019-2022 low-rate environment.",
        education: [],
        career: [
          { firm: "Private GA real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Edgewater at Sandy Springs GA", year: "ongoing", role: "Borrower/Owner", amount: 67900000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "IMT Residential": {
    parentFirm:      "IMT Residential (Woodland Hills CA)",
    hq:              "21031 Ventura Blvd Suite 1100, Woodland Hills CA 91364",
    founded:         "1991",
    aum:             "60+ apartment communities. $3B+ portfolio. Southeast and Sunbelt markets.",
    focus:           "National multifamily property management and ownership. Southeast and Sunbelt markets. Two FL assets on watchlist: IMT Boynton Beach ($54.4M) and IMT Sonoma Hills ($39.7M) -- $94.1M combined FL exposure. Supply pressure in FL markets 2023-2025 is the likely common driver.",
    currentStrategy: "Two FL watchlist assets from the same operator suggest a broader FL portfolio performance issue. Baker Street should approach IMT at the portfolio level -- a combined modification or refinancing strategy covering both FL assets ($94.1M combined) is more valuable than individual loan workout discussions. Boynton Beach is Palm Beach County suburban market. Sonoma Hills location TBD.",
    states:          ["FL","CA","TX","AZ","NV"],
    treppEntities:   ["IMT Residential","IMT Boynton Beach FL MF","IMT Sonoma Hills FL MF"],
    loans: [
      {
        property: "IMT Boynton Beach",
        address:  "Boynton Beach FL (Palm Beach County)",
        type:     "multifamily",
        balance:  54400000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Palm Beach County suburban market. New supply pressure 2023-2025 likely driver.",
      },
      {
        property: "IMT Sonoma Hills",
        address:  "Florida (exact market not confirmed)",
        type:     "multifamily",
        balance:  39700000,
        dscr:     0,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Second IMT FL watchlist asset. Combined with Boynton Beach = $94.1M FL exposure. Approach at portfolio level.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Bryan Scher",
        title:         "Co-Founder & COO (operational lead)",
        firm:          "IMT Residential / IMT Capital",
        decisionPower: "Co-founder of IMT Residential (1992). COO overseeing day-to-day operations. Key decision-maker on asset-level issues including both FL watchlist loans. NOTE: The principal previously listed as 'Robert Hart' was an error -- Robert Hart is the CEO of TruAmerica Multifamily, a separate company. IMT's co-founders are Bryan Scher and unnamed partners.",
        background:    "Co-founded IMT Residential in 1992 in Woodland Hills CA from a start of 62 apartment homes and one associate. Grew to 19,000+ units, 50+ communities, 9 states. Also co-founded IMT Capital LLC in 2006 -- 6 private equity funds, $3.6B+ in capital commitments since 2007. Active in National Multi-Housing Council. NMHC Top 50 recognition since 2006.",
        education: [],
        career: [
          { firm: "IMT Residential / IMT Capital LLC", role: "Co-Founder & COO", years: "1992-present", note: "Co-founded 1992. IMT Capital LLC founded 2006. $3.6B+ in fund capital commitments across 6 funds." }
        ],
        deals: [
          { property: "IMT Boynton Beach FL", year: "ongoing", role: "Owner/Operator", amount: 54400000, note: "CMBS watchlist." },
          { property: "IMT Sonoma Hills FL", year: "ongoing", role: "Owner/Operator", amount: 39700000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Jonathan Morgan (Legacy of Cedar Hill)": {
    parentFirm:      "",
    hq:              "Texas (Cedar Hill is Dallas-Fort Worth MSA, southwest of Dallas)",
    founded:         "",
    aum:             "$51.5M CMBS loan on Legacy of Cedar Hill TX multifamily.",
    focus:           "Private Texas multifamily investor. Cedar Hill TX is a DFW suburb in the Best Southwest submarket (I-20 and US-67 corridor, southwest Dallas County).",
    currentStrategy: "Individual borrower on $51.5M TX MF CMBS watchlist loan. DFW market remains fundamentally strong. Texas SOS entity search to identify borrowing entity and co-sponsors. At $51.5M this warrants active Baker Street engagement.",
    states:          ["TX"],
    treppEntities:   ["Jonathan Morgan","Legacy of Cedar Hill TX MF"],
    loans: [
      {
        property: "Legacy of Cedar Hill",
        address:  "Cedar Hill TX (Dallas-Fort Worth MSA)",
        type:     "multifamily",
        balance:  51500000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "Individual borrower. DFW Best Southwest submarket. TX SOS entity search recommended.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Jonathan Morgan",
        title:         "Borrower / Principal",
        firm:          "Private -- TX",
        decisionPower: "Primary decision authority on $51.5M CMBS watchlist loan.",
        background:    "Private TX multifamily investor. $51.5M CMBS watchlist loan on Legacy of Cedar Hill. No confirmed public profile. Cedar Hill TX is a stable DFW suburban market.",
        education: [],
        career: [
          { firm: "Private TX real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Legacy of Cedar Hill TX", year: "ongoing", role: "Borrower/Owner", amount: 51500000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Advenir Living (Advenir at Stone Park)": {
    parentFirm:      "Advenir Azora (joint venture: Advenir + Azora PE firm, Madrid; formed 2024)",
    hq:              "19950 W Country Club Drive Suite 800, Aventura FL 33180. Also: Atlanta, Houston, Denver, Tampa, Orlando.",
    founded:         "1996 (by Oscar Rivera). Azora JV 2024.",
    aum:             "14,000+ units, $3.3B+ portfolio, $230M+ annual revenue, 350+ employees. Freddie Mac Select Sponsor. TX CMBS watchlist: $36.2M (Advenir at Stone Park).",
    focus:           "Multifamily real estate investment, development, and management. FL, TX, CO, NC. Vertically integrated with in-house construction/development. 2024: merged with Azora (Madrid-based PE) to form Advenir Azora. Freddie Mac Select Sponsor.",
    currentStrategy: "2024 partnership with Azora (Madrid PE) transformed Advenir into Advenir Azora -- $3.3B+ portfolio, 14,000+ units. Oscar Rivera (original founder 1996) appears to have stepped back. Stephen Vecchitto is now Founder/Managing Director of Advenir Capital (investment arm) and Board member. David Vecchitto is CEO of Advenir Living (PM arm). Baker Street contact is now Stephen or David Vecchitto.",
    states:          ["TX","FL","CO","NC"],
    treppEntities:   ["Advenir Living","Advenir at Stone Park TX MF"],
    loans: [
      {
        property: "Advenir at Stone Park",
        address:  "Texas (exact market not confirmed)",
        type:     "multifamily",
        balance:  36200000,
        dscr:     0,
        status:   "watchlist",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "Professional institutional operator. Now Advenir Azora. Contact: Stephen or David Vecchitto.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Stephen Vecchitto",
        title:         "Founder & Managing Director, Advenir Capital / Advenir Azora",
        firm:          "Advenir Azora",
        decisionPower: "Founder of Advenir Capital (investment arm). Managing Director, Investment Committee member, and Board of Directors member. Controls all capital decisions including debt workout and modification for the TX watchlist.",
        background:    "Founder of Advenir Capital. Licensed CPA. Previously founded VSM LLC (Hartford CT financial services firm: M&A, litigation support, fraud, appraisals) -- grew to 40 professionals, 5th largest private firm in Hartford. Active in Apartment Life advisory board, City-to-City Miami, Make-A-Wish Foundation South Florida.",
        education: [],
        career: [
          { firm: "VSM LLC (Hartford CT)", role: "Managing Partner", years: "~1990s-2000s", note: "M&A, litigation support, fraud, appraisals. Grew to 40 professionals." },
          { firm: "Advenir Capital / Advenir Azora", role: "Founder & Managing Director", years: "~2000s-present", note: "Investment arm of Advenir platform. $3.3B+ portfolio, 14,000+ units." }
        ],
        deals: [
          { property: "Advenir at Stone Park TX", year: "ongoing", role: "Managing Director/Investor", amount: 36200000, note: "CMBS watchlist." }
        ],
      },
      {
        rank:          2,
        name:          "David Vecchitto",
        title:         "Chief Executive Officer, Advenir Living LLC",
        firm:          "Advenir Azora",
        decisionPower: "CEO of Advenir Living (property management arm). Executes the business plan, provides strategic direction of PM company. Direct operational contact for loan-level discussions.",
        background:    "Joined Advenir as CFO April 2015. CPA (Connecticut). Bentley University BS; Trinity International University Master's. Prior: public accounting, captive insurance, risk management, not-for-profit, agri-business. Extensive international experience.",
        education: [
          { school: "Bentley University", degree: "BS", year: "~2008", note: "" },
          { school: "Trinity International University", degree: "Master's", year: "~2010", note: "CPA, State of Connecticut." }
        ],
        career: [
          { firm: "Public accounting / insurance / risk management (various)", role: "Financial leadership roles", years: "pre-2015", note: "" },
          { firm: "Advenir / Advenir Azora", role: "CFO → CEO, Advenir Living LLC", years: "April 2015-present", note: "Joined as CFO 2015. Became CEO of Advenir Living post-Azora merger 2024." }
        ],
        deals: [
          { property: "Advenir at Stone Park TX", year: "ongoing", role: "CEO/Operator", amount: 36200000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "James M. Jacobson Jr. (Mission Ridge)": {
    parentFirm:      "",
    hq:              "Virginia (Northern VA / DC metro)",
    founded:         "",
    aum:             "$34.8M CMBS loan on Mission Ridge VA office.",
    focus:           "Private Virginia office investor. Mission Ridge is likely in Northern VA (Fairfax, Arlington, or Alexandria submarket) with possible government-adjacent or defense contractor tenant base.",
    currentStrategy: "Individual borrower on $34.8M VA office CMBS watchlist loan. Northern VA office market faces occupancy pressure from federal government hybrid work and defense contractor footprint reductions. Virginia SCC entity search and county deed records recommended.",
    states:          ["VA"],
    treppEntities:   ["James M. Jacobson Jr.","Mission Ridge VA Office"],
    loans: [
      {
        property: "Mission Ridge",
        address:  "Northern Virginia (county not confirmed)",
        type:     "office",
        balance:  34800000,
        dscr:     0,
        status:   "watchlist",
        state:    "VA",
        maturity: "",
        servicer: "",
        note:     "Northern VA office market faces structural headwinds from hybrid work. VA SCC entity search recommended.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "James M. Jacobson Jr.",
        title:         "Borrower / Principal",
        firm:          "Private -- VA",
        decisionPower: "Primary decision authority on $34.8M CMBS watchlist loan.",
        background:    "Private VA office CRE owner. $34.8M CMBS watchlist loan. No confirmed public profile. Northern VA office submarket.",
        education: [],
        career: [
          { firm: "Private VA real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Mission Ridge VA Office", year: "ongoing", role: "Borrower/Owner", amount: 34800000, note: "CMBS watchlist." }
        ],
      }
    ],
  },

  "Gloria McGinty (Fountains at Stone Crest)": {
    parentFirm:      "",
    hq:              "Illinois (Chicago southwest suburbs)",
    founded:         "",
    aum:             "$34.5M CMBS loan on Fountains at Stone Crest IL multifamily.",
    focus:           "Private Illinois multifamily investor. Fountains at Stone Crest is likely a Chicago southwest suburban workforce housing community.",
    currentStrategy: "Individual borrower on $34.5M IL MF CMBS watchlist loan. Chicago-area MF CMBS loans face elevated stress from property tax increases and insurance cost spikes -- systemic issues beyond operator control. Cook County or Will County deed records to confirm entity.",
    states:          ["IL"],
    treppEntities:   ["Gloria McGinty","Fountains at Stone Crest IL MF"],
    loans: [
      {
        property: "Fountains at Stone Crest",
        address:  "Chicago southwest suburbs IL",
        type:     "multifamily",
        balance:  34500000,
        dscr:     0,
        status:   "watchlist",
        state:    "IL",
        maturity: "",
        servicer: "",
        note:     "IL market systemic challenges: property tax increases and insurance cost spikes. IL SOS entity search recommended.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Gloria McGinty",
        title:         "Borrower / Principal",
        firm:          "Private -- IL",
        decisionPower: "Primary decision authority on $34.5M CMBS watchlist loan.",
        background:    "Private IL multifamily owner. $34.5M CMBS watchlist loan. Chicago southwest suburban MF operator. No confirmed public profile.",
        education: [],
        career: [
          { firm: "Private IL real estate", role: "Investor/Owner", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Fountains at Stone Crest IL", year: "ongoing", role: "Borrower/Owner", amount: 34500000, note: "CMBS watchlist." }
        ],
      }
    ],
  }

};

// Backwards compatibility aliases
var SPONSORS_NATIONAL = SPONSORS3;
var SPONSORS_REGIONAL = SPONSORS3;
var SPONSORS_ADDITIONAL = SPONSORS3;
