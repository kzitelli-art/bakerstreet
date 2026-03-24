// sponsors.js -- Baker Street Capital Advisors
// Institutional sponsors: Blackstone, Brookfield, KKR, Starwood, major operators (entries 1-42)
// Last updated: March 2026
// Schema: parentFirm, hq, founded, aum, focus, currentStrategy, states[], treppEntities[], loans[], people[]
// People: rank, name, title, firm, decisionPower, background, education[], career[], deals[]

var SPONSORS = {

  "Blackstone": {
    parentFirm:      "Blackstone Inc. (NYSE: BX)",
    hq:              "345 Park Avenue, New York NY",
    founded:         "1985",
    aum:             "$1.27 trillion total AUM (2025). Real estate: $319B.",
    focus:           "World's largest alternative asset manager. Real estate focus: logistics, multifamily, data centers, hospitality, office. BREIT ($105B) is their flagship non-traded REIT for individual investors.",
    currentStrategy: "Deploying capital from $16B BSREP V fund. Targeting logistics, data centers, multifamily Sun Belt. Actively buying distressed CRE debt from banks. Feb 2025: acquired Retail Opportunity Investments (ROIC) for $4B. 2024: acquired $17B Signature Bank CRE loan portfolio from FDIC.",
    states:          ["FL","VA","TX","IL","GA"],
    treppEntities:   ["BREIT Operating Partnership L.P.","BREIT Industrial Holdings LLC","Blackstone BREP VIII/IX","Blackstone BRE Jupiter","Blackstone BREIT JV Partnership","BREIT / IMCO Sponsor","BREIT SS Holdings LLC","Blackstone REIT (BREIT)","American Campus Communities","QTS Realty Trust","WPT Industrial REIT"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Tim Johnson",
        title:         "CEO, Blackstone Mortgage Trust (BXMT) & Global Head, BREDS",
        firm:          "Blackstone",
        decisionPower: "Runs the entire $77B real estate debt platform including BXMT ($20B loan portfolio). Direct decision maker on any loan workout, modification, or advisory engagement involving Blackstone-held debt.",
        background:    "",
        education: [
          { school: "College of the Holy Cross", degree: "BA Mathematics", year: "~2002", note: "Graduated cum laude" }
        ],
        career: [
          { firm: "Nomura Group", role: "Analyst", years: "~early career", note: "" },
          { firm: "Lehman Brothers", role: "Vice President, Global Commercial Real Estate Group", years: "2002-2008", note: "" },
          { firm: "BroadPeak Funding", role: "Co-Founder", years: "2008-2011", note: "Boutique CRE finance company, Los Angeles" },
          { firm: "Blackstone", role: "Senior Managing Director", years: "2011-present", note: "" },
          { firm: "Blackstone", role: "Global Head, BREDS", years: "2022-present", note: "" },
          { firm: "Blackstone Mortgage Trust (BXMT)", role: "Chairman of Board", years: "2023-present", note: "" },
          { firm: "Blackstone Mortgage Trust (BXMT)", role: "CEO (succeeded Katie Keenan)", years: "Nov 2025-present", note: "" }
        ],
        deals: [
          { property: "BREDS V Fund", year: "2025", role: "Head of Platform", amount: 8000000000, note: "$8B final close. Largest BREDS fund ever raised. BREDS has deployed $38B since start of 2024." },
          { property: "Signature Bank CRE Portfolio", year: "2023", role: "Platform Lead - Lender/Buyer", amount: 17000000000, note: "BREDS acquired $17B of Signature Bank CRE loans from FDIC auction - landmark distressed debt acquisition." }
        ],
      },
      {
        rank:          2,
        name:          "Katie Keenan",
        title:         "CEO, BREIT & Global Head of Core+ Real Estate",
        firm:          "Blackstone",
        decisionPower: "Oversees $105B BREIT portfolio. Decision maker on BREIT-owned assets facing distress, recapitalization, or disposition. Appointed November 2025 after death of predecessor Wesley LePatner.",
        background:    "",
        education: [
          { school: "Harvard College", degree: "AB History", year: "~2005", note: "Graduated cum laude" }
        ],
        career: [
          { firm: "Lehman Brothers", role: "Analyst, Real Estate Investment Banking Group", years: "2005-2008", note: "Started career at peak of pre-GFC market. Saw both sides of cycle." },
          { firm: "Lubert-Adler Real Estate Funds", role: "Investment role", years: "2008-2010", note: "Hands-on RE portfolio management" },
          { firm: "G2 Investment Group", role: "Vice President", years: "2010-2012", note: "Real estate and private equity investments" },
          { firm: "Blackstone", role: "Various RE Debt roles", years: "2012-2020", note: "" },
          { firm: "Blackstone Mortgage Trust (BXMT)", role: "EVP Investments", years: "2018-2020", note: "" },
          { firm: "Blackstone Mortgage Trust (BXMT)", role: "President", years: "2020-2021", note: "" },
          { firm: "Blackstone Mortgage Trust (BXMT)", role: "CEO", years: "2021-2025", note: "" },
          { firm: "Blackstone BREDS", role: "Global Co-CIO", years: "2022-2025", note: "" },
          { firm: "Blackstone BREIT + Core+", role: "CEO & Global Head", years: "Nov 2025-present", note: "" }
        ],
        deals: [
          { property: "GE Capital Real Estate Portfolio", year: "2015", role: "Blackstone deal team member - buyer", amount: 23000000000, note: "Keenan was part of Blackstone team on $23B GE Real Estate acquisition - complex global portfolio." },
          { property: "BXMT Loan Portfolio", year: "2021", role: "CEO - Lender", amount: 20000000000, note: "Led BXMT as CEO - $20B commercial mortgage portfolio across institutional CRE nationwide." }
        ],
      },
      {
        rank:          3,
        name:          "Jacob Werner",
        title:         "Senior Managing Director & Co-Head of Americas Acquisitions",
        firm:          "Blackstone Real Estate",
        decisionPower: "Co-heads all Blackstone real estate acquisition activity in the Americas. Member of global real estate investment committee. Most property-level deal decisions flow through Werner's team.",
        background:    "",
        education: [
          { school: "University of Virginia, McIntire School of Commerce", degree: "BS", year: "~2003", note: "Graduated with distinction" }
        ],
        career: [
          { firm: "Blackstone", role: "Analyst, Restructuring & Reorganization Group", years: "2003-2005", note: "Advised on Goodyear Tire & Rubber, General Motors restructurings." },
          { firm: "Blackstone Real Estate", role: "Various acquisition roles", years: "2005-present", note: "" },
          { firm: "Blackstone Real Estate", role: "Senior Managing Director & Co-Head Americas Acquisitions", years: "2015-present", note: "" },
          { firm: "Retail Opportunity Investments Corp (ROIC)", role: "CEO & Senior MD (via Blackstone acquisition)", years: "2025", note: "" }
        ],
        deals: [
          { property: "Equity Office Properties", year: "2007", role: "Blackstone deal team - buyer", amount: 39000000000, note: "Largest PE real estate deal in history at time. Werner was on early deal team." },
          { property: "BioMed Realty", year: "2016", role: "Lead acquirer", amount: 8000000000, note: "Life science REIT acquisition - major BREIT platform building deal." },
          { property: "American Campus Communities", year: "2022", role: "Lead acquirer", amount: 12800000000, note: "Largest student housing REIT takeout ever. Werner quoted on deal." },
          { property: "Home Partners of America", year: "2021", role: "Lead acquirer", amount: 6000000000, note: "Single-family rental platform acquisition." },
          { property: "Retail Opportunity Investments (ROIC)", year: "2025", role: "Lead acquirer / CEO", amount: 4000000000, note: "West Coast retail REIT takeout Feb 2025. Werner named CEO of ROIC post-acquisition." }
        ],
      }
    ],
  },

  "Brookfield": {
    parentFirm:      "Brookfield Asset Management (NYSE/TSX: BAM)",
    hq:              "250 Vesey Street, New York NY (HQ moved from Toronto, Nov 2024)",
    founded:         "1899",
    aum:             "$1 trillion+ total AUM. Real estate: $272B.",
    focus:           "Global alternative asset manager with century-long operating history. Real estate focus: logistics/industrial, multifamily, office (GGP retail legacy), hospitality, student housing, data centers.",
    currentStrategy: "Deploying $16B BSREP V fund. Actively acquiring light industrial (Dallas, Houston, Atlanta, Nashville portfolio Q1 2026). Selling non-core assets (PGA National Resort $422M, Tritax Europe). Bullish on logistics, residential, data centers. Recently acquired Canary Wharf stake.",
    states:          ["TX","IL","GA","FL"],
    treppEntities:   ["Brookfield BSREP V","Brookfield Premier Real Estate Partners","BPREP Industrial Holding LLC","General Growth Partners / Brookfield","Brookfield Real Estate Financial Partners"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Lowell Baron",
        title:         "CEO & CIO, Brookfield Real Estate Group",
        firm:          "Brookfield Asset Management",
        decisionPower: "CEO and CIO of Brookfield's global real estate business. All major acquisition, disposition and advisory decisions. Member of Brookfield's Executive Committee. Appointed CEO June 2025 succeeding Brian Kingston.",
        background:    "",
        education: [
          { school: "Yeshiva University", degree: "BS Finance", year: "1997", note: "" }
        ],
        career: [
          { firm: "Deutsche Bank", role: "Vice President, Real Estate Private Equity & Investment Banking", years: "~1997-2005", note: "9 years at Deutsche Bank focused on RE PE and IB." },
          { firm: "Brookfield", role: "CFO, Brookfield Realty Capital Corp", years: "2005-2008", note: "" },
          { firm: "Brookfield", role: "Multiple senior roles including overseeing multifamily and hospitality platforms", years: "2008-2015", note: "" },
          { firm: "Brookfield", role: "Managing Partner & CIO, Real Estate Group", years: "2015-2025", note: "" },
          { firm: "Brookfield", role: "CEO & CIO, Real Estate Group", years: "June 2025-present", note: "" }
        ],
        deals: [
          { property: "Rouse Properties", year: "2016", role: "Brookfield acquirer", amount: 2800000000, note: "Mall REIT acquisition. Baron led deal." },
          { property: "Associated Estates Realty", year: "2015", role: "Brookfield acquirer - multifamily", amount: 2500000000, note: "Apartment REIT acquisition. Baron oversaw Brookfield MF platform." },
          { property: "Center Parcs UK", year: "2015", role: "Brookfield acquirer - hospitality", amount: 2400000000, note: "Holiday resort platform acquisition." },
          { property: "Simply Self Storage", year: "2020", role: "Brookfield acquirer - self storage", amount: 1200000000, note: "Self storage platform acquisition led by Baron." },
          { property: "BSREP V Fund", year: "2025", role: "CIO - Fund Lead", amount: 16000000000, note: "Largest Brookfield RE fund ever. Raised $16B. Targeting opportunistic global acquisitions." }
        ],
      },
      {
        rank:          2,
        name:          "Chris Reilly",
        title:         "Managing Partner & Head of Real Estate Solutions Group",
        firm:          "Brookfield Asset Management",
        decisionPower: "Heads Brookfield's Real Estate Solutions Group (previously Head of Debt Origination). Responsible for real estate finance, debt origination, underwriting and asset management.",
        background:    "",
        education: [
          { school: "New York University, Stern School of Business", degree: "BS", year: "~2000", note: "" }
        ],
        career: [
          { firm: "Fitch Ratings", role: "Credit Analyst - CRE", years: "~late 1990s", note: "Started career analyzing CRE credit." },
          { firm: "Morgan Stanley", role: "Executive Director - CRE Loan Origination & Distribution", years: "~2000-2007", note: "" },
          { firm: "UBS", role: "Head, Large Loan Group", years: "~2007-2010", note: "RAN THE LARGE LOAN GROUP AT UBS - DIRECT BRIAN SHERLOCK OVERLAP PERIOD." },
          { firm: "Natixis Real Estate Capital Markets", role: "Managing Director", years: "~2010-2012", note: "" },
          { firm: "Brookfield", role: "Managing Partner & Head of Debt Origination", years: "2012-present", note: "" },
          { firm: "Brookfield", role: "Head, Real Estate Solutions Group", years: "2024-present", note: "" }
        ],
        deals: [
          { property: "Brookfield Real Estate Finance Fund Series", year: "2015", role: "Head of Debt - Lender", amount: 2000000000, note: "Co-led Brookfield's real estate debt fund series as Head of Debt Origination." },
          { property: "Brookfield Senior Mezzanine RE Finance Fund", year: "2018", role: "Head of Platform - Lender", amount: 0, note: "Led Brookfield's mezzanine lending platform - same structure Brian underwrote at UBS." }
        ],
      },
      {
        rank:          3,
        name:          "Ben Brown",
        title:         "Co-President, Brookfield Real Estate Group (Americas)",
        firm:          "Brookfield Asset Management",
        decisionPower: "Co-heads all Brookfield real estate for the Americas. Day-to-day operational authority for US portfolio. Promoted to Co-President June 2025 alongside Brad Hyler (Europe).",
        background:    "",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "Brookfield", role: "Multiple senior investment and leadership roles, Americas focus", years: "long-tenured", note: "" },
          { firm: "Brookfield", role: "Co-President, Real Estate Group - Americas", years: "June 2025-present", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "Starwood Capital Group": {
    parentFirm:      "Starwood Capital Group (private)",
    hq:              "591 West Putnam Avenue, Greenwich CT / Miami FL",
    founded:         "1991",
    aum:             "$115B AUM. Starwood Property Trust (NYSE: STWD) is publicly traded affiliate - largest commercial mortgage REIT in US.",
    focus:           "Global private investment firm focused on real estate. Core strategies: multifamily, hospitality, office, industrial, data centers. Recently launched Starwood Digital Ventures ($20B data center program with major AI tenants).",
    currentStrategy: "Investing $20B into data centers with AI tenants (2025-2026). Acquired 10 Edwardian Hotels London (GBP 800M). Pursuing net lease through STWD acquisition of Fundamental Income ($2.2B, 467 properties). Starwood Property Trust is largest US commercial mortgage REIT with $27B portfolio.",
    states:          ["VA","TX","IL","FL"],
    treppEntities:   ["Starwood Capital Group / SREIT","Blackstone BREIT / Starwood JV","Starwood Property Trust"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Jonathan Pollack",
        title:         "President",
        firm:          "Starwood Capital Group",
        decisionPower: "President since April 1, 2025. Sits on all Executive, Investment, Disposition, Valuation and Operating Committees. Day-to-day operational authority alongside Sternlicht.",
        background:    "",
        education: [
          { school: "Northwestern University", degree: "BA Economics", year: "~1995", note: "" }
        ],
        career: [
          { firm: "Nomura Group", role: "Analyst", years: "~1995-1999", note: "" },
          { firm: "Deutsche Bank", role: "CRE Capital Markets, Head of European CRE Capital Markets (London)", years: "1999-2007", note: "8 years in London building DB European CRE business." },
          { firm: "Deutsche Bank", role: "Global Head of Commercial Real Estate", years: "2007-2015", note: "Made DB the #1 CMBS issuer and a leading special situations investor post-GFC. 16 years total at Deutsche Bank." },
          { firm: "Blackstone BREDS", role: "Global Head, Real Estate Credit (BREDS)", years: "2015-2024", note: "Grew BREDS from $10B to $84B AUM. Led $17B Signature Bank portfolio acquisition from FDIC (2023)." },
          { firm: "Starwood Capital Group", role: "President", years: "April 2025-present", note: "" },
          { firm: "Starwood Property Trust (STWD)", role: "Vice Chairman, Board", years: "April 2025-present", note: "" }
        ],
        deals: [
          { property: "Signature Bank CRE Portfolio", year: "2023", role: "Head of BREDS - buyer", amount: 17000000000, note: "Led BREDS acquisition of $17B Signature Bank commercial mortgages from FDIC - one of largest distressed CRE debt deals ever." },
          { property: "BREDS V Fund", year: "2024", role: "Head of Platform", amount: 8000000000, note: "Led fundraise before departing Blackstone." },
          { property: "Edwardian Hotels London", year: "2025", role: "Starwood President - buyer", amount: 1020000000, note: "10 Edwardian Hotels in London. One of first major deals at Starwood." }
        ],
      },
      {
        rank:          2,
        name:          "Barry Sternlicht",
        title:         "Founder, Chairman & CEO",
        firm:          "Starwood Capital Group",
        decisionPower: "Founder and ultimate decision maker on all Starwood strategy. Chairs all investment committees. Still deeply involved in day-to-day despite Pollack as President.",
        background:    "",
        education: [
          { school: "Brown University", degree: "BA", year: "1982", note: "Magna cum laude, honors" },
          { school: "Harvard Business School", degree: "MBA", year: "1986", note: "With distinction" }
        ],
        career: [
          { firm: "Wall Street (arbitrage trading)", role: "Trader", years: "~1982-1986", note: "" },
          { firm: "JMB Realty (Chicago)", role: "Real estate acquisitions", years: "1986-1990", note: "Laid off during S&L crisis - formative experience." },
          { firm: "Starwood Capital Group", role: "Co-Founder & CEO", years: "1991-present", note: "Founded with Bob Faith. Acquired apartments/hotels during distressed S&L market." },
          { firm: "Westin Hotels & Resorts", role: "Acquirer/Chairman", years: "1994-1998", note: "" },
          { firm: "Starwood Hotels & Resorts (NYSE: HOT)", role: "Founder, Chairman & CEO", years: "1995-2005", note: "Built Sheraton, Westin, W Hotels, St. Regis into global brand. $13.3B Sheraton acquisition 1997." },
          { firm: "SH Group / 1 Hotels", role: "Founder", years: "2008-present", note: "" },
          { firm: "Starwood Property Trust (STWD)", role: "Chairman & CEO", years: "2009-present", note: "" }
        ],
        deals: [
          { property: "Westin Hotels", year: "1994", role: "Acquirer", amount: 561000000, note: "With Goldman Sachs. Launched Starwood's hospitality empire." },
          { property: "Sheraton Hotels & Resorts", year: "1997", role: "CEO - acquirer", amount: 13300000000, note: "Largest hotel deal in history at time. Created global Starwood Hotels brand." },
          { property: "Starwood Property Trust launch", year: "2009", role: "Founder/CEO", amount: 0, note: "Built STWD into the largest US commercial mortgage REIT ($27B portfolio)." }
        ],
      },
      {
        rank:          3,
        name:          "Lorcain Egan",
        title:         "Senior Managing Director, Global Head of Real Estate Private Credit",
        firm:          "Starwood Capital Group",
        decisionPower: "Heads Starwood's real estate private credit platform. Direct oversight of distressed debt positions and loan modification decisions.",
        background:    "",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "Starwood Capital Group", role: "Senior MD, Global Head RE Private Credit", years: "long-tenured", note: "Starwood's debt platform lead." }
        ],
        deals: [],
      }
    ],
  },

  "KKR": {
    parentFirm:      "KKR & Co. Inc. (NYSE: KKR)",
    hq:              "30 Hudson Yards, New York NY",
    founded:         "1976",
    aum:             "$600B+ total AUM. Real estate equity and credit are significant verticals.",
    focus:           "Global alternative asset manager. Real estate: multifamily, industrial, office, retail across Americas. KREF (KKR Real Estate Finance Trust, NYSE: KREF) is their publicly traded CRE debt vehicle.",
    currentStrategy: "Active in Sun Belt multifamily and industrial acquisitions. KREF managing $7B loan portfolio. 2025: pursuing office-to-residential conversions. Building data center platform. Active in real estate credit through KREF and fund vehicles.",
    states:          ["IL","GA","FL"],
    treppEntities:   ["KKR Real Estate Partners Americas III","KKR Real Estate Finance Trust"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Matthew Salem",
        title:         "CEO, KKR Real Estate Finance Trust (KREF) & Head of Real Estate Credit",
        firm:          "KKR",
        decisionPower: "Runs KKR's entire real estate credit business and KREF ($7B loan portfolio). Direct decision maker on debt workout, modification, and advisory conversations involving KKR-held loans.",
        background:    "",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "Goldman Sachs", role: "Real Estate investment banking and capital markets", years: "~2000-2012", note: "" },
          { firm: "KKR Real Estate", role: "Various senior roles, built KKR RE credit platform", years: "2012-present", note: "" },
          { firm: "KKR Real Estate Finance Trust (KREF)", role: "Co-CEO then CEO", years: "2017-present", note: "" }
        ],
        deals: [
          { property: "KREF Loan Portfolio", year: "2024", role: "CEO - Lender", amount: 7000000000, note: "Manages $7B KREF commercial mortgage REIT portfolio across office, multifamily, industrial." }
        ],
      },
      {
        rank:          2,
        name:          "Roger Morales",
        title:         "Partner & Head of Commercial Real Estate Acquisitions, Americas",
        firm:          "KKR",
        decisionPower: "Heads all CRE acquisitions for the Americas. Decision maker on property-level transactions, recaps, and disposition advisory.",
        background:    "",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "KKR Real Estate", role: "Partner, Head of CRE Acquisitions Americas", years: "long-tenured", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "Davidson Kempner": {
    parentFirm:      "Davidson Kempner Capital Management LP (private)",
    hq:              "520 Madison Avenue, New York NY",
    founded:         "1983",
    aum:             "$36B+ AUM. Multi-strategy hedge fund with major distressed debt and CRE exposure.",
    focus:           "Multi-strategy hedge fund specializing in distressed debt, special situations, merger arbitrage, and CRE credit. Their CRE exposure comes through CMBS holdings, distressed loan purchases, and direct real estate investments.",
    currentStrategy: "Active distressed debt buyer. Purchased CRE loans and CMBS in the 2022-2024 dislocation. New leadership: James Li named President Jan 2025, Sona Gohel joined as COO from Goldman Sachs. CREFC and structured finance community active.",
    states:          ["TX","FL"],
    treppEntities:   ["Davidson Kempner Capital Management","DK LDOI V"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Anthony Yoseloff",
        title:         "Executive Managing Member & CIO",
        firm:          "Davidson Kempner Capital Management",
        decisionPower: "CIO and sole Executive Managing Member since Jan 2020. Ultimate decision maker on all DK investment activity including CRE distressed positions.",
        background:    "",
        education: [
          { school: "Princeton University", degree: "AB Public & International Affairs", year: "1996", note: "Cum laude" },
          { school: "Columbia Law School", degree: "JD", year: "1999", note: "" },
          { school: "Columbia Business School", degree: "MBA", year: "1999", note: "Joint JD/MBA. John M. Olin Fellowship in Law & Economics." }
        ],
        career: [
          { firm: "Davidson Kempner", role: "Analyst/Associate", years: "1999-2004", note: "" },
          { firm: "Davidson Kempner", role: "Managing Member", years: "2004-2012", note: "" },
          { firm: "Davidson Kempner", role: "Co-Executive Managing Member", years: "2012-2020", note: "" },
          { firm: "Davidson Kempner", role: "Sole Executive Managing Member & CIO", years: "Jan 2020-present", note: "" }
        ],
        deals: [
          { property: "DK LDOI V / Distressed CRE Portfolio", year: "2023", role: "CIO - buyer", amount: 0, note: "Led DK CRE distressed purchases during 2022-2023 dislocation. FL and TX CMBS positions reflect this activity." }
        ],
      },
      {
        rank:          2,
        name:          "James Li",
        title:         "President & Partner",
        firm:          "Davidson Kempner Capital Management",
        decisionPower: "Named President January 2025. Co-leads daily operations and investment decisions with Yoseloff. More accessible than Yoseloff for initial outreach.",
        background:    "",
        education: [
          { school: "Columbia University", degree: "BS", year: "~2005", note: "" }
        ],
        career: [
          { firm: "Goldman Sachs", role: "Managing Director, Client Relationship Management & Strategy Group", years: "~2010-2018", note: "" },
          { firm: "Davidson Kempner", role: "Senior leadership roles", years: "2018-2025", note: "" },
          { firm: "Davidson Kempner", role: "President & Partner", years: "Jan 2025-present", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "Simon Property Group": {
    parentFirm:      "Simon Property Group, Inc. (NYSE: SPG)",
    hq:              "225 W Washington Street, Indianapolis IN",
    founded:         "1960",
    aum:             "Largest US retail REIT. $30B+ market cap. Owns 200+ malls, premium outlets and lifestyle centers.",
    focus:           "Premium retail real estate - Class A malls, premium outlet centers (Premium Outlets brand), lifestyle centers. National and international portfolio.",
    currentStrategy: "Focused on mixed-use redevelopment of mall assets (adding residential, hotel, office). Investing in distressed retailers. David Simon died March 22, 2026 - Eli Simon (COO) is now effective operational leader. SPG stock held strong through uncertainty.",
    states:          ["VA","IL","GA","FL"],
    treppEntities:   ["Simon Property Group"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Eli Simon",
        title:         "COO & Director - effective operational leader post March 2026",
        firm:          "Simon Property Group",
        decisionPower: "Son of David Simon (deceased March 22, 2026). Now the effective operational leader of SPG. Previously EVP & CIO. Promoted to COO August 2025. Day-to-day decision authority on all capital structure and advisory matters.",
        background:    "",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "Och-Ziff Capital Management", role: "Principal, Head of North American Lodging", years: "~2010-2019", note: "Distressed hospitality investment background at Och-Ziff." },
          { firm: "Simon Property Group", role: "SVP Corporate Investments", years: "2019-2022", note: "" },
          { firm: "Simon Property Group", role: "EVP & Chief Investment Officer", years: "2022-2025", note: "" },
          { firm: "Simon Property Group", role: "COO & Director", years: "Aug 2025-present", note: "" }
        ],
        deals: [
          { property: "Simon Portfolio - Various Acquisitions", year: "2022", role: "CIO", amount: 0, note: "Led corporate investments and strategic M&A as CIO including retailer investments and JV structures." }
        ],
      },
      {
        rank:          2,
        name:          "Brian McDade",
        title:         "EVP & CFO",
        firm:          "Simon Property Group",
        decisionPower: "CFO - controls all capital allocation, debt strategy, and loan-level decisions. Right contact for CMBS loan workout or advisory conversations.",
        background:    "",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "Simon Property Group", role: "SVP & Treasurer", years: "~2010-2018", note: "" },
          { firm: "Simon Property Group", role: "EVP & CFO", years: "2018-present", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "ExchangeRight": {
    parentFirm:      "ExchangeRight Real Estate, LLC",
    hq:              "300 N Lake Avenue, Pasadena CA",
    founded:         "2012",
    aum:             "$7.1B AUM across DST and REIT structures.",
    focus:           "1031 exchange-driven DST (Delaware Statutory Trust) real estate programs. Primary focus: net-lease essential services retail (grocery, pharmacy, healthcare, government). Also multifamily.",
    currentStrategy: "Dave Van Steenis named President March 2026. Growing AUM through new DST programs. Expanding multifamily DST offerings. Active in Southeast and Mid-Atlantic markets.",
    states:          ["VA","IL","GA"],
    treppEntities:   ["ExchangeRight Real Estate","David Fisher, Joshua Ungerecht and Warren Thomas","David Fisher, Joshua Ungerecht, Warren Thomas"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Joshua Ungerecht",
        title:         "Managing Partner, CEO & CIO",
        firm:          "ExchangeRight",
        decisionPower: "CEO and CIO. All major investment and capital structure decisions across $7.1B AUM.",
        background:    "",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "ExchangeRight", role: "Co-Founder, Managing Partner, CEO & CIO", years: "2012-present", note: "" }
        ],
        deals: [
          { property: "ExchangeRight Net-Lease DST Portfolio", year: "2024", role: "CIO - Sponsor", amount: 0, note: "Manages 200+ DST programs totaling $7.1B. Net-lease essential services across 40+ states." }
        ],
      },
      {
        rank:          2,
        name:          "Dave Van Steenis",
        title:         "President & CFO (promoted 2026)",
        firm:          "ExchangeRight",
        decisionPower: "Promoted to President in March 2026 from CFO. Day-to-day operational authority and financial decisions.",
        background:    "",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "ExchangeRight", role: "CFO", years: "~2018-2026", note: "" },
          { firm: "ExchangeRight", role: "President & CFO", years: "March 2026-present", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "MCR Hotels": {
    parentFirm:      "MCR Hotels / Morse Ventures",
    hq:              "475 Fifth Avenue, New York NY",
    founded:         "2006",
    aum:             "$5B AUM. 150+ hotels, 37 states, ~22,000 rooms. 3rd largest hotel owner-operator in US.",
    focus:           "Hotel ownership and management - select service, extended stay, full service, luxury. Portfolio includes iconic assets: TWA Hotel at JFK (2019), High Line Hotel NYC, BT Tower London (2025). Brands: Marriott, Hilton, Hyatt, IHG affiliated.",
    currentStrategy: "Continuing acquisitions nationally and internationally (BT Tower London 2025, Soho House 2024). Growing into luxury segment beyond select service roots. Tyler Morse career started at Starwood Hotels working directly for Barry Sternlicht.",
    states:          ["VA","TX","IL","FL"],
    treppEntities:   ["MCR Hotels","Morse Ventures Inc.","MCR Hospitality Fund II"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Tyler Morse",
        title:         "Founder, Chairman & CEO",
        firm:          "MCR Hotels",
        decisionPower: "Founder and CEO. All major capital structure, acquisition and advisory decisions.",
        background:    "",
        education: [
          { school: "University of California, Berkeley", degree: "BS Business Administration", year: "~1993", note: "" },
          { school: "Harvard Business School", degree: "MBA", year: "~1996", note: "" }
        ],
        career: [
          { firm: "Ernst & Young", role: "CPA", years: "~1993-1996", note: "Started career in accounting." },
          { firm: "Morgan Stanley", role: "Investment Banking - Financial Sponsors & M&A", years: "~1996-2000", note: "" },
          { firm: "Starwood Hotels & Resorts", role: "Assistant to Chairman & CEO Barry Sternlicht / Corporate Investment & Development", years: "~2000-2002", note: "Worked directly for Barry Sternlicht. This is the direct Starwood Capital connection." },
          { firm: "Bliss (spa/beauty brand)", role: "President", years: "~2002-2006", note: "Grew Bliss from $30M to $110M revenue." },
          { firm: "MCR Hotels", role: "Founder, Chairman & CEO", years: "2006-present", note: "" }
        ],
        deals: [
          { property: "TWA Hotel at JFK Airport", year: "2019", role: "Developer/Owner", amount: 0, note: "Converted historic TWA Flight Center (Eero Saarinen design) into 512-room hotel. Landmark hospitality project." },
          { property: "High Line Hotel, NYC", year: "2017", role: "Owner/Operator", amount: 0, note: "Landmark boutique hotel in Chelsea NYC." },
          { property: "BT Tower, London", year: "2025", role: "Developer/Owner", amount: 275000000, note: "Converting iconic London landmark into hotel. MCR's first international project." }
        ],
      },
      {
        rank:          2,
        name:          "Russ Shattan",
        title:         "Partner",
        firm:          "MCR Hotels",
        decisionPower: "Partner overseeing all firm investments, asset purchases, development and financings. Day-to-day deal contact.",
        background:    "",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "CNL Hotels & Resorts", role: "Analyst - Orlando-based hotel REIT", years: "~2004-2006", note: "" },
          { firm: "Starwood Hotels & Resorts", role: "Senior Manager, Real Estate Group", years: "2006-2011", note: "Also ex-Starwood Hotels like Morse." },
          { firm: "MCR Hotels", role: "Partner", years: "2011-present", note: "" }
        ],
        deals: [
          { property: "TWA Hotel at JFK", year: "2019", role: "MCR deal lead", amount: 0, note: "Shattan oversaw financing and development of TWA Hotel project." }
        ],
      }
    ],
  },

  "Annaly Capital Management": {
    parentFirm:      "Annaly Capital Management, Inc. (NYSE: NLY)",
    hq:              "1211 Avenue of the Americas, New York NY",
    founded:         "1997",
    aum:             "~$70B. Largest US mortgage REIT by AUM.",
    focus:           "Mortgage REIT investing in residential and commercial mortgage-backed securities, CRE loans, and agency securities. CRE platform includes first mortgage loans, mezzanine, preferred equity across multifamily and commercial.",
    currentStrategy: "Focusing increasingly on residential credit as rates stabilize. CRE exposure through CMBS and direct loans. Ilker Ertas leads CRE platform. Active in multifamily lending.",
    states:          ["TX"],
    treppEntities:   ["Annaly Capital Management"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Ilker Ertas",
        title:         "Head of Commercial Real Estate",
        firm:          "Annaly Capital Management",
        decisionPower: "Heads all CRE investment and loan activity at Annaly. Direct decision maker on CRE loan workouts and advisory engagements.",
        background:    "",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "Annaly Capital Management", role: "Head of Commercial Real Estate", years: "long-tenured", note: "" }
        ],
        deals: [],
      },
      {
        rank:          2,
        name:          "David Finkelstein",
        title:         "President & CEO",
        firm:          "Annaly Capital Management",
        decisionPower: "CEO. All portfolio strategy and advisory relationship decisions at the firm level.",
        background:    "CEO & Co-CIO of Annaly Capital Management ($70B AUM, largest US mortgage REIT). University of Washington BA Business Administration; University of Chicago Booth MBA; CFA charterholder. Career: agency MBS trading at Salomon Smith Barney, Citi, and Barclays (15+ years). Then Officer at Federal Reserve Bank of NY Markets Group (2009-2013), primary strategist for MBS Purchase Program (QE). Joined Annaly 2013 as CIO. CEO March 2020. Now Co-CIO as of January 2025. Vice Chair of Treasury Market Practices Group (FRBNY). Member Financial Sector Advisory Council, Federal Reserve Bank of Dallas.",
        education: [
          { school: "University of Washington", degree: "BA Business Administration", year: "~1994", note: "" },
          { school: "University of Chicago Booth School of Business", degree: "MBA", year: "~1998", note: "CFA charterholder." }
        ],
        career: [
          { firm: "Salomon Smith Barney", role: "Agency MBS Trading", years: "~late 1990s-2000", note: "" },
          { firm: "Citigroup Inc.", role: "Vice President, Agency MBS Trading", years: "2000-2004", note: "" },
          { firm: "Barclays PLC", role: "Director, Agency MBS Trading", years: "2004-2009", note: "" },
          { firm: "Federal Reserve Bank of New York, Markets Group", role: "Officer - Primary MBS Purchase Program Strategist", years: "2009-2013", note: "4 years. Primary strategist and policy advisor for the Fed's QE MBS Purchase Program." },
          { firm: "Annaly Capital Management (NYSE: NLY)", role: "CIO then CEO & CIO", years: "2013-present", note: "Joined 2013 as CIO. CEO March 2020. Co-CIO as of January 2025." }
        ],
        deals: [],
      }
    ],
  },

  "Och-Ziff / Sculptor Capital": {
    parentFirm:      "Rithm Capital Corp. (NYSE: RITM) -- acquired Sculptor in Nov 2023",
    hq:              "9 West 57th Street, New York NY 10019",
    founded:         "1994 (Daniel Och and Ziff family)",
    aum:             "$34B+ AUM (as of late 2024). Multi-strategy, credit, and real estate.",
    focus:           "Global alternative asset management: multi-strategy hedge fund, opportunistic credit, and real estate private equity (Sculptor Real Estate Fund V, closed $4.5B 2024). CRE exposure via Sculptor Real Estate platform. Rebranded from Och-Ziff to Sculptor in 2019. Acquired by Rithm Capital (formerly New Residential Investment Corp.) Nov 2023.",
    currentStrategy: "Under Rithm Capital ownership, Sculptor continues to operate independently with Levin as CEO/CIO. Sculptor Real Estate Fund V closed 2024 at $4.5B -- well above $3B target. Active in VA and national CRE via opportunistic equity and credit funds. VA CMBS exposure in Baker Street pipeline.",
    states:          ["VA"],
    treppEntities:   ["Och-Ziff / Sculptor Capital"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Jimmy Levin",
        title:         "CEO & Chief Investment Officer",
        firm:          "Sculptor Capital (Rithm)",
        decisionPower: "CEO & CIO of Sculptor day-to-day under Rithm ownership. CIO oversight of CRE portfolio.",
        background:    "CEO & CIO of Sculptor Capital (formerly Och-Ziff). Harvard AB Computer Science (2005). Joined Och-Ziff/Sculptor in 2006 from Dune Capital Management. Became CIO 2016/2017, CEO April 1, 2021. Oversaw the firm's rebranding from Och-Ziff to Sculptor (2019) and the Rithm Capital acquisition (2023). Famous 2013 SEC disclosure showed $118.8M in stock compensation at age 31. Chairs Portfolio Committee and Partner Management Committee. Board: East Harlem Tutorial Program; NYU Langone Health Medical Center Board of Overseers.",
        education: [
          { school: "Harvard University", degree: "AB Computer Science", year: "2005", note: "" }
        ],
        career: [
          { firm: "Sagamore Hill Capital", role: "Analyst", years: "pre-2006", note: "Earlier career before Dune Capital." },
          { firm: "Dune Capital Management LP", role: "Associate", years: "~2005-2006", note: "Hedge fund founded by Steve Mnuchin and others." },
          { firm: "Och-Ziff / Sculptor Capital Management", role: "Analyst → Managing Director → CIO → CEO & CIO", years: "2006-present", note: "Joined 2006. CIO since 2016/2017. CEO since April 1, 2021. Now CEO & CIO under Rithm Capital ownership. Chairs Portfolio and Partner Management Committees." }
        ],
        deals: [],
      },
      {
        rank:          2,
        name:          "Wayne Cohen",
        title:         "President & COO",
        firm:          "Sculptor Capital (Rithm)",
        decisionPower: "President & COO. Oversees all non-investment functions: IR, business development, corporate strategy, legal, compliance, human capital.",
        background:    "President & COO of Sculptor Capital. Tulane University BA International Relations (magna cum laude); NYU School of Law JD. Joined Sculptor (then Och-Ziff) in 2005 as Attorney and General Counsel, after prior role as associate at Schulte Roth & Zabel LLP. Rose to President & COO. Played key role in Och-Ziff 2007 IPO.",
        education: [
          { school: "Tulane University", degree: "BA International Relations", year: "~1999", note: "Magna cum laude." },
          { school: "New York University School of Law", degree: "JD", year: "~2002", note: "" }
        ],
        career: [
          { firm: "Schulte Roth & Zabel LLP", role: "Associate", years: "~2002-2005", note: "NYC law firm specializing in hedge funds and financial services." },
          { firm: "Och-Ziff / Sculptor Capital Management", role: "General Counsel → President & COO", years: "2005-present", note: "Joined July 2005 as Attorney/General Counsel. Rose to President & COO. Managed 2007 IPO. Partner Management Committee member." }
        ],
        deals: [],
      },
      {
        rank:          3,
        name:          "Hap Pollard",
        title:         "Exec. MD & Chief Accounting Officer",
        firm:          "Sculptor Capital (Rithm)",
        decisionPower: "Exec. MD & Chief Accounting Officer. Oversees financial reporting, accounting policy, and regulatory filings.",
        background:    "Long-tenure Sculptor/Och-Ziff finance and accounting executive. Oversees all financial reporting and accounting.",
        education: [
          { school: "Not publicly confirmed", degree: "", year: "", note: "" }
        ],
        career: [
          { firm: "Och-Ziff / Sculptor Capital Management", role: "Executive MD & Chief Accounting Officer", years: "long-tenured", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "Carlos Ulloa / Statlander / Caprio / Corchia": {
    parentFirm:      "Private partnership - Miami FL",
    hq:              "Miami FL (private)",
    founded:         "",
    aum:             "12 FL loans in Baker Street pipeline. Private multifamily and mixed-use portfolio in South and Central Florida.",
    focus:           "Miami-based private real estate investment group. Carlos Ulloa is the lead principal; Daniel Statlander, James Caprio, and Corchia are co-principals. 12 FL CRE CLO loans across South and Central Florida multifamily and commercial properties. Private partnership structure with limited public profile.",
    currentStrategy: "Ongoing FL portfolio management. 12 loans represents a meaningful concentration of FL CRE CLO exposure for Baker Street.",
    states:          ["FL"],
    treppEntities:   ["Carlos Ulloa / Statlander / Caprio / Corchia"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Carlos Ulloa",
        title:         "Lead Principal",
        firm:          "Private FL Real Estate Partnership",
        decisionPower: "Lead principal and guarantor across all 12 FL CRE CLO loans. Primary decision maker on acquisitions, financing, and operations.",
        background:    "Miami-based private real estate investor. Lead principal on 12 FL loan portfolio. Limited public career history. Private partnership model with Statlander, Caprio, and Corchia.",
        education: [],
        career: [
          { firm: "Private FL Real Estate Partnership", role: "Lead Principal", years: "ongoing", note: "12 FL CRE CLO loans. Miami-based." }
        ],
        deals: [
          { property: "FL CRE CLO Portfolio (12 loans)", year: "ongoing", role: "Lead Principal/Guarantor", amount: 0, note: "12 loans across South and Central FL multifamily and commercial. Baker Street pipeline." }
        ],
      },
      {
        rank:          2,
        name:          "Daniel Statlander",
        title:         "Co-Principal",
        firm:          "Private FL Real Estate Partnership",
        decisionPower: "Co-principal alongside Ulloa.",
        background:    "Co-principal on FL loan portfolio. Private real estate investor.",
        education: [],
        career: [
          { firm: "Private FL Real Estate Partnership", role: "Co-Principal", years: "ongoing", note: "" }
        ],
        deals: [],
      },
      {
        rank:          3,
        name:          "James Caprio",
        title:         "Co-Principal",
        firm:          "Private FL Real Estate Partnership",
        decisionPower: "Co-principal on FL loan portfolio.",
        background:    "Co-principal on FL loan portfolio. Private real estate investor.",
        education: [],
        career: [
          { firm: "Private FL Real Estate Partnership", role: "Co-Principal", years: "ongoing", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "Vijay Patel (Hotelier)": {
    parentFirm:      "Private family-owned hotel group. Operates under Hare Krishna Hotel Group brand.",
    hq:              "6903 Congress Street, New Port Richey FL 34653 (Vijay Patel). 2030 Avalon Parkway, McDonough GA 30253 (Subhash Patel).",
    founded:         "Private family business - multi-generational",
    aum:             "27+ CMBS loans across GA and VA. Multi-property private hotel portfolio. Brands: Hampton Inn, Holiday Inn, Comfort Inn, and other select-service brands.",
    focus:           "Private Indian-American family hotel owners. Classic AAHOA-style hotelier model - own and operate multiple select-service hotels under franchise brands. Portfolio concentrated in GA and VA. Properties held under Hare Krishna Hotel Group LLC and related LLCs. Subhash Patel (McDonough GA) and Vijay Patel (New Port Richey FL) are the two principals - family members who operate jointly.",
    currentStrategy: "Ongoing operations across 27+ hotel properties in GA and VA. CMBS loan exposure creates periodic refinancing and workout situations. Post-pandemic hotel recovery ongoing for select-service brands.",
    states:          ["VA","GA","FL"],
    treppEntities:   ["Vijay Patel (Hotelier)","Subhash Patel (Hotelier)","Hare Krishna Hotel Group"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Subhash Patel",
        title:         "Co-Principal, Hare Krishna Hotel Group",
        firm:          "Hare Krishna Hotel Group LLC",
        decisionPower: "Lead principal. Named as Manager (MGR) on registered Georgia hotel LLC entities. McDonough GA-based. Primary decision maker on acquisitions, financing, and operations.",
        background:    "Indian-American hotelier. McDonough GA-based (2030 Avalon Parkway). Co-principal with Vijay Patel on multi-property hotel portfolio in GA and VA. Operates under Hare Krishna Hotel Group LLC and related entities. Classic AAHOA multi-property operator - select-service brands (Hampton Inn, Holiday Inn, Comfort Inn).",
        education: [],
        career: [
          { firm: "Hare Krishna Hotel Group LLC and related entities", role: "Co-Principal / Managing Member", years: "multi-decade", note: "McDonough GA. Co-principal with Vijay Patel on GA and VA hotel portfolio." }
        ],
        deals: [
          { property: "GA and VA Hotel Portfolio", year: "ongoing", role: "Owner/Operator", amount: 0, note: "27+ CMBS loans across GA and VA. Select-service hotels under Hampton Inn, Holiday Inn, Comfort Inn brands." }
        ],
      },
      {
        rank:          2,
        name:          "Vijay Patel",
        title:         "Co-Principal, Hare Krishna Hotel Group",
        firm:          "Hare Krishna Hotel Group LLC",
        decisionPower: "Co-principal alongside Subhash. Named as Registered Agent on multiple FL entities. New Port Richey FL-based. Co-decision maker on financing and operations.",
        background:    "Indian-American hotelier. New Port Richey FL-based (6903 Congress Street). Co-principal with Subhash Patel on GA and VA hotel portfolio. Also has FL hotel operations (Hare Krishna Lakeland Hotel LLC, FL).",
        education: [],
        career: [
          { firm: "Hare Krishna Hotel Group LLC and related entities", role: "Co-Principal / Registered Agent", years: "multi-decade", note: "New Port Richey FL. FL entity registered agent. Co-principal with Subhash Patel." }
        ],
        deals: [],
      }
    ],
  },

  "Subhash Patel (Hotelier)": {
    parentFirm:      "Private family-owned hotel group. See Vijay Patel (Hotelier) - same portfolio.",
    hq:              "2030 Avalon Parkway, McDonough GA 30253",
    founded:         "Private multi-generational family business",
    aum:             "27+ CMBS loans across GA and VA. See Vijay Patel (Hotelier) entry for full portfolio details.",
    focus:           "See Vijay Patel (Hotelier). Subhash and Vijay Patel are co-principals of the same private hotel family group. Subhash is the McDonough GA-based lead principal. NOTE: All three Patel entries (Vijay Patel, Subhash Patel, Hare Krishna Hotel Group) reference the same family portfolio.",
    currentStrategy: "See Vijay Patel (Hotelier). Subhash Patel is the primary Georgia-based contact.",
    states:          ["GA","VA"],
    treppEntities:   ["Subhash Patel (Hotelier)","Hare Krishna Hotel Group"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Subhash Patel",
        title:         "Co-Principal, Hare Krishna Hotel Group",
        firm:          "Hare Krishna Hotel Group LLC",
        decisionPower: "Lead principal. Named as Manager (MGR) on Georgia hotel LLC entities. 2030 Avalon Parkway, McDonough GA 30253. Primary decision maker.",
        background:    "See Vijay Patel (Hotelier) entry. McDonough GA-based co-principal with Vijay Patel. Lead contact for the family hotel portfolio.",
        education: [],
        career: [
          { firm: "Hare Krishna Hotel Group LLC", role: "Co-Principal / Managing Member", years: "multi-decade", note: "McDonough GA. Lead GA contact." }
        ],
        deals: [],
      }
    ],
  },

  "Hare Krishna Hotel Group (Patel Family)": {
    parentFirm:      "Private family partnership - Subhash Patel and Vijay Patel",
    hq:              "2030 Avalon Parkway, McDonough GA 30253 (Subhash / GA entities). 6903 Congress Street, New Port Richey FL 34653 (Vijay / FL entities).",
    founded:         "Private multi-generational Indian-American family hotel business",
    aum:             "27+ CMBS loans across GA and VA. Select-service hotel portfolio. Estimated $50M-$100M+ in total debt.",
    focus:           "Private Indian-American family hotel owner-operators. Operate under Hare Krishna Hotel Group LLC and related entity names across GA, VA, and FL. Classic AAHOA franchisee model: select-service hotel brands (Hampton Inn, Holiday Inn, Comfort Inn, others). Multiple properties per state held in separate LLCs. Subhash Patel is Georgia-based, Vijay Patel is Florida-based.",
    currentStrategy: "Ongoing multi-property hotel operations. 27+ CMBS loans reflects the scope of the portfolio accumulated over years of acquisitions. Post-pandemic hotel recovery ongoing in GA and VA select-service segment.",
    states:          ["VA","GA","FL"],
    treppEntities:   ["Hare Krishna Hotel Group","Subhash Patel","Vijay Patel","Jayesh Patel"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Subhash Patel",
        title:         "Co-Principal / Managing Member",
        firm:          "Hare Krishna Hotel Group LLC",
        decisionPower: "Lead principal for GA operations. Named as Manager (MGR) on Georgia hotel LLC entities. 2030 Avalon Parkway, McDonough GA 30253. Primary decision maker on GA portfolio.",
        background:    "McDonough GA-based Indian-American hotelier. Multi-decade hotel ownership career. Co-principal with Vijay Patel and family members. Named manager on Hare Krishna Airport Hotel LLC (GA), Hare Krishna Lakeland Hotel LLC (FL) and numerous other entities. Classic AAHOA multi-property operator.",
        education: [],
        career: [
          { firm: "Hare Krishna Hotel Group and related LLCs", role: "Co-Principal / Managing Member", years: "multi-decade", note: "GA and FL entities. 27+ CMBS loans across GA and VA." }
        ],
        deals: [
          { property: "Patel Family Hotel Portfolio - GA and VA", year: "multi-decade", role: "Owner/Operator", amount: 0, note: "27+ CMBS loans. Select-service hotels. GA entities include Hare Krishna Airport Hotel LLC (285 Country Club Dr Ste 200, Stockbridge GA)." }
        ],
      },
      {
        rank:          2,
        name:          "Vijay Patel",
        title:         "Co-Principal / Registered Agent",
        firm:          "Hare Krishna Hotel Group LLC",
        decisionPower: "Co-principal for FL operations. Registered Agent on FL entities. New Port Richey FL based. Co-decision maker on portfolio-wide financing.",
        background:    "New Port Richey FL-based (6903 Congress St, New Port Richey FL 34653). Co-principal with Subhash Patel. Handles FL entity registrations including Hare Krishna Lakeland Hotel LLC.",
        education: [],
        career: [
          { firm: "Hare Krishna Hotel Group and related LLCs", role: "Co-Principal / Registered Agent", years: "multi-decade", note: "FL entities. New Port Richey FL." }
        ],
        deals: [],
      },
      {
        rank:          3,
        name:          "Jayesh Patel",
        title:         "Co-Principal / Family Member",
        firm:          "Hare Krishna Hotel Group LLC",
        decisionPower: "Additional family member principal. Named on certain hotel entities.",
        background:    "Family member and co-principal in the Patel hotel group. Named in Baker Street's Trepp data as entity principal.",
        education: [],
        career: [
          { firm: "Hare Krishna Hotel Group and related LLCs", role: "Co-Principal", years: "multi-decade", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "Gideon D. Levy": {
    parentFirm:      "Private - Georgia",
    hq:              "Georgia (private - specific address not publicly available)",
    founded:         "",
    aum:             "6 GA loans in Baker Street pipeline. Private multifamily and commercial portfolio in Georgia.",
    focus:           "Private Georgia-based real estate investor with 6 CMBS loans in Baker Street's GA pipeline. Name suggests possible Israeli-American background (Gideon is a Hebrew name). Limited public profile - private individual investor.",
    currentStrategy: "Ongoing GA portfolio operations. 6 loans provides multiple advisory touchpoints.",
    states:          ["GA"],
    treppEntities:   ["Gideon D. Levy"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Gideon D. Levy",
        title:         "Private CRE Investor",
        firm:          "Private - GA",
        decisionPower: "Sole decision maker on GA CRE portfolio. Individual owner/guarantor across 6 GA loans.",
        background:    "Private Georgia-based real estate investor. Named as principal/guarantor on 6 GA CMBS loans. Possibly Israeli-American background (Hebrew first name). Limited public profile - private individual.",
        education: [],
        career: [
          { firm: "Private GA CRE investments", role: "Owner/Investor", years: "ongoing", note: "6 CMBS loans across GA portfolio" }
        ],
        deals: [
          { property: "GA CRE Portfolio (6 loans)", year: "ongoing", role: "Owner/Guarantor", amount: 0, note: "6 CMBS loans. Georgia multifamily and commercial properties." }
        ],
      }
    ],
  },

  "Joseph G. Lubeck": {
    parentFirm:      "American Landmark Apartments / Electra America",
    hq:              "4890 W Kennedy Blvd Suite 550, Tampa FL 33609 (American Landmark HQ)",
    founded:         "1996 (first acquisition). American Landmark brand: 2015.",
    aum:             "$12B+ across four portfolio builds (100,000+ units total). Current American Landmark portfolio: ~32,000 apartments in FL, GA, NC, SC, TX. Ranked #34 largest US apartment owner (NMHC 2025). Israeli-backed through Electra America partnership.",
    focus:           "Tampa FL-based private Sun Belt value-add multifamily owner-operator. Expert in value-added and distressed repositioning. Four complete portfolio build cycles: (1) King's Inn 1996; (2) Landmark Residential grew to 35,000 units, sold 2015 for $1.9B to Starwood Capital; (3) Partnership with Electra America (Israeli); (4) American Landmark current cycle. Focuses exclusively on Sun Belt (FL, GA, NC, SC, TX).",
    currentStrategy: "Active acquirer in 2024-2025. Net buyer targeting $700M-$1B annually. Co-Managing Partner of Electra America with Israeli institutional backing. Current fund cycle (Fund III) raised $918M, exceeded hard cap. Off-market deal sourcing is primary strategy. TX CMBS loans in Baker Street pipeline.",
    states:          ["FL","TX","GA","NC","SC","TN"],
    treppEntities:   ["Joseph G. Lubeck","American Landmark Apartments","Electra America"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Joseph G. Lubeck",
        title:         "Founder & CEO, American Landmark / Executive Chairman, Electra America",
        firm:          "American Landmark Apartments",
        decisionPower: "Sole founder and CEO. All major acquisition, disposition, and capital decisions. Chairs investment committee. Co-Managing Partner of Electra America. 30+ year multifamily career totaling $12B+ across four portfolio builds.",
        background:    "Born into family business (helped father manage apartments in 4th grade). Cornell University (BS); Delaware Law School (JD). Worked as attorney then pivoted to real estate. 1996: with sole investor bought 144-unit King's Inn apartments in St. Petersburg FL (first acquisition). Grew Landmark Residential to 35,000 units. 2006: Israeli firm Electra America became backer. Rolled into public REIT Landmark Apartment Trust. 2015: Sold to Starwood Capital for $1.9B. Returned to private sector same year as American Landmark. Current portfolio ~32,000 units FL/GA/NC/SC/TX.",
        education: [
          { school: "Cornell University", degree: "BS", year: "", note: "" },
          { school: "Delaware Law School (Widener University)", degree: "JD", year: "", note: "Licensed attorney before pivoting to RE" }
        ],
        career: [
          { firm: "Law firm / real estate", role: "Attorney then RE investor", years: "~1985-1996", note: "Started in law, pivoted to RE operations" },
          { firm: "Landmark Residential / Landmark Apartment Trust", role: "Founder and CEO", years: "1996-2015", note: "Built to 35,000 units. Rolled into public REIT. Sold to Starwood Capital for $1.9B in 2015." },
          { firm: "Electra America / American Landmark", role: "Co-Managing Partner / Founder CEO", years: "2015-present", note: "Restarted with American Landmark brand 2015. Israeli Electra America as institutional equity partner." }
        ],
        deals: [
          { property: "Landmark Apartment Trust Portfolio Sale to Starwood Capital", year: "2015", role: "Seller/CEO", amount: 1900000000, note: "$1.9B sale of 35,000-unit portfolio to Starwood Capital. Generated IRRs around 25% for investors." },
          { property: "American Landmark Fund III", year: "2022", role: "Sponsor/CEO", amount: 918000000, note: "Fund III raised $918M, exceeding hard cap of $800M. Active acquisition program." },
          { property: "PGIM/RSE Joint Venture Portfolio", year: "2022", role: "JV Partner", amount: 885500000, note: "$885.5M portfolio sale with PGIM and RSE Capital Partners - FL and Sun Belt apartments." }
        ],
      },
      {
        rank:          2,
        name:          "Christine Benedetti",
        title:         "SVP, Operations",
        firm:          "American Landmark Apartments",
        decisionPower: "SVP Operations - oversees all property management and operational execution across 32,000-unit portfolio.",
        background:    "SVP Operations at American Landmark overseeing day-to-day property management, leasing, and operational performance.",
        education: [],
        career: [
          { firm: "American Landmark Apartments", role: "SVP Operations", years: "current", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "Scott Leichtenberg": {
    parentFirm:      "",
    hq:              "",
    founded:         "",
    aum:             "",
    focus:           "",
    currentStrategy: "",
    states:          ["TX"],
    treppEntities:   ["Scott Leichtenberg"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Scott Leichtenberg",
        title:         "Principal / Managing Member",
        firm:          "Private Investor  -  TX",
        decisionPower: "Sole decision maker on TX CRE holdings.",
        background:    "",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "HNA Group": {
    parentFirm:      "",
    hq:              "Hainan China (HNA Group HQ). US operations wound down / bankruptcy 2021.",
    founded:         "",
    aum:             "Formerly $100B+ AUM. Chinese conglomerate. Declared bankruptcy 2021. Most US assets disposed.",
    focus:           "HNA Group was one of China's largest conglomerates - aviation (Hainan Airlines), hospitality, real estate, financial services. Aggressive 2015-2018 US real estate buying spree ($30B+ globally). Filed for bankruptcy in China Feb 2021 after overleveraged acquisitions. IL real estate assets (Baker Street pipeline) are legacy positions being disposed through bankruptcy proceedings. Adam Tan was HNA President.",
    currentStrategy: "",
    states:          ["IL"],
    treppEntities:   ["HNA Group"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Adam Tan",
        title:         "CEO, HNA Group",
        firm:          "HNA Group (China)",
        decisionPower: "CEO, HNA Group",
        background:    "",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Dalfen Industrial": {
    parentFirm:      "Dalfen family (Montreal-based). Dalfen's Limited founded 1935 as apparel retail.",
    hq:              "Dallas TX (US HQ). Also Montreal, Toronto. Regional offices: Bay Area, Chicago, Cincinnati, Denver, Philadelphia, Atlanta, Orlando, Austin.",
    founded:         "1935 (Dalfen family business). Industrial real estate since 1970. Focused exclusively on industrial 2010.",
    aum:             "55M+ SF of industrial properties owned/operated US and Canada. One of the largest US industrial buyers. $10B+ in transactions over Sean Dalfen's career. Dalfen Last Mile Industrial Fund V active.",
    focus:           "Last-mile industrial real estate investment manager. Proprietary last-mile scoring methodology for site selection. Target: infill, high-population-density logistics facilities within 20 minutes of workforce. Focus on e-commerce fulfillment and logistics tenants. Vertically integrated: development, acquisitions, asset management, property management, construction, legal, capital markets.",
    currentStrategy: "Active acquisition in top US markets - Atlanta, Dallas, Chicago, Cincinnati, Denver, Philadelphia, Bay Area, Orlando. Joint venture with Centerbridge Partners on coastal Industrial Outdoor Storage (IOS) strategy. $90.6M loan from Affinius Capital for 1M SF Houston industrial. Last Mile Industrial Fund V raising. Expanding US portfolio while maintaining Canadian operations.",
    states:          ["GA","TX","IL","FL"],
    treppEntities:   ["Dalfen Industrial","Dalfen America Corp.","Di Investment Management LP"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Sean Dalfen",
        title:         "President & CEO",
        firm:          "Dalfen Industrial",
        decisionPower: "Leads all investment committees and management committees. All major acquisitions, developments, and capital structure decisions run through Sean. $10B+ in transactions over career.",
        background:    "Studied psychology and finance at Tel Aviv University (Lowy School) and McGill University (Montreal). Prior career: NAI Commercial as investment sales broker (Top-10 producer in Canada). Took over and refocused Dalfen family business on last-mile industrial 2010. Grew from $1B AUM to 55M+ SF under his leadership.",
        education: [
          { school: "Tel Aviv University Lowy School", degree: "Psychology and Finance (partial)", year: "", note: "" },
          { school: "McGill University", degree: "Finance", year: "", note: "" }
        ],
        career: [
          { firm: "NAI Commercial", role: "Investment Sales Broker", years: "prior career", note: "Top-10 producer in Canada" },
          { firm: "Dalfen Industrial", role: "President & CEO", years: "~2010-present", note: "Refocused Dalfen family business exclusively on last-mile industrial. Grew from $1B to 55M+ SF." }
        ],
        deals: [
          { property: "Dalfen Last Mile Industrial Fund Portfolio", year: "2024", role: "CEO", amount: 10000000000, note: "$10B+ in total transactions. 55M+ SF. National portfolio across 9 US markets." },
          { property: "North Houston Industrial Portfolio", year: "2024", role: "Owner - Financed", amount: 90600000, note: "$90.6M loan from Affinius Capital for 1M SF Houston industrial portfolio." }
        ],
      },
      {
        rank:          2,
        name:          "Marc Seelenfreund",
        title:         "Chief Investment Officer",
        firm:          "Dalfen Industrial",
        decisionPower: "CIO - direct oversight of all acquisition and debt decisions. Day-to-day deal and capital contact.",
        background:    "CIO of Dalfen Industrial overseeing all investment decisions and debt strategy across the 55M+ SF platform.",
        education: [],
        career: [
          { firm: "Dalfen Industrial", role: "Chief Investment Officer", years: "current", note: "" }
        ],
        deals: [],
      },
      {
        rank:          3,
        name:          "Matt Staubach",
        title:         "Senior Vice President",
        firm:          "Dalfen Industrial",
        decisionPower: "SVP - key deal and relationship contact. Likely son or relative of Roger Staubach (JLL). Active in Dallas industrial market.",
        background:    "SVP at Dalfen Industrial. Active in Dallas industrial market acquisitions and tenant relationships.",
        education: [],
        career: [
          { firm: "Dalfen Industrial", role: "Senior Vice President", years: "current", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "GMF Group (Monfried / Forssman)": {
    parentFirm:      "Private partnership",
    hq:              "Private - Florida (based on loan portfolio concentration)",
    founded:         "",
    aum:             "Multiple FL, TX, IL, VA loans in Baker Street pipeline. Private multifamily and mixed-use investor/developer.",
    focus:           "Private real estate investment group. Gabriel C. Monfried and Matthew M. Forssman are the named principals in Trepp/CMBS records. Portfolio spans FL, TX, IL, VA multifamily and mixed-use. Limited public information - private partnership structure.",
    currentStrategy: "Ongoing CRE portfolio management. CMBS loan exposure creates periodic refinancing needs.",
    states:          ["FL","TX","IL","VA"],
    treppEntities:   ["GMF Group","Gabriel C. Monfried","Matthew M. Forssman"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Gabriel C. Monfried",
        title:         "Co-Principal",
        firm:          "GMF Group",
        decisionPower: "Co-principal. Named in Trepp records as lead entity principal. All major capital and investment decisions.",
        background:    "Private real estate investor. Co-principal of GMF Group with Matthew Forssman. Multi-state CRE portfolio (FL, TX, IL, VA) financed via CMBS. Limited public biography available.",
        education: [],
        career: [
          { firm: "GMF Group", role: "Co-Principal", years: "ongoing", note: "" }
        ],
        deals: [],
      },
      {
        rank:          2,
        name:          "Matthew M. Forssman",
        title:         "Co-Principal",
        firm:          "GMF Group",
        decisionPower: "Co-principal alongside Monfried. Named in Trepp/CMBS records.",
        background:    "Co-principal of GMF Group. Private real estate investor with multi-state portfolio.",
        education: [],
        career: [
          { firm: "GMF Group", role: "Co-Principal", years: "ongoing", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "J. Robert Carpenter": {
    parentFirm:      "",
    hq:              "",
    founded:         "",
    aum:             "",
    focus:           "",
    currentStrategy: "",
    states:          ["GA"],
    treppEntities:   ["J. Robert Carpenter"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "J. Robert Carpenter",
        title:         "Principal / Managing Member",
        firm:          "Private Investor  -  GA",
        decisionPower: "Sole decision maker.",
        background:    "",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "MCR Hospitality Fund II": {
    parentFirm:      "MCR Hotels (same platform - see MCR Hotels entry)",
    hq:              "475 Fifth Avenue, New York NY 10017",
    founded:         "2006",
    aum:             "See MCR Hotels entry. MCR Hospitality Fund II is one of MCR's private equity fund vehicles. Same platform, same decision makers.",
    focus:           "MCR Hospitality Fund II is a private equity fund vehicle under the MCR Hotels platform. Not a separate company. All decisions made by Tyler Morse (Founder/CEO) and Russ Shattan (Partner). See MCR Hotels entry for full profile.",
    currentStrategy: "See MCR Hotels.",
    states:          ["FL"],
    treppEntities:   ["MCR Hospitality Fund II","Morse Ventures Inc."],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Tyler Morse",
        title:         "Founder, Chairman & CEO - MCR Hotels",
        firm:          "MCR Hotels / MCR Hospitality Fund II",
        decisionPower: "See MCR Hotels entry. Same person, same platform.",
        background:    "See MCR Hotels entry.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Scott Rechler - RXR Realty": {
    parentFirm:      "",
    hq:              "75 Rockefeller Plaza, New York NY 10019",
    founded:         "2007",
    aum:             "$21.2B gross asset value. 30M+ SF commercial properties. 9,600 multifamily units. 500+ person team. $10B+ equity raised across funds.",
    focus:           "New York City-centric real estate investment manager, operator, and developer. Specializes in NYC office, mixed-use, multifamily. Portfolio includes Starrett-Lehigh Building, 75 Rock, One Court Square. Also developing mixed-use projects in Long Island (RXR's home region). Expanding into tech-enabled buildings and proptech.",
    currentStrategy: "Navigating significant NYC office headwinds - multiple large CMBS loans on NYC office in distress. Raising new funds. Focus on Midtown Manhattan repositioning and life science/tech office. AVE Tampa is their FL multifamily asset in Baker Street pipeline. Former Port Authority chair with deep public-private partnership expertise.",
    states:          ["FL","NY"],
    treppEntities:   ["Scott Rechler - RXR Realty","RXR Realty LLC"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Scott Rechler",
        title:         "Chairman & CEO",
        firm:          "RXR Realty",
        decisionPower: "Founder and CEO. All major investment and capital decisions. One of the most networked figures in US CRE. Serves on Federal Reserve Bank of NY board (second term). Former Port Authority of NY/NJ Vice Chairman (2011-2016, directed $30B capital plan). Real Estate Roundtable board.",
        background:    "Clark University (BA); NYU Schack Institute of Real Estate (graduate). Rose through ranks at Reckson Associates Realty Corp - became Chairman and CEO. 2006: Sold Reckson to SL Green for $6B, generating 700% return to investors. 2007: Founded RXR day after the sale. Raised $10B+ in equity. $21.2B gross asset value. Former FRBNY director and Port Authority Vice Chairman.",
        education: [
          { school: "Clark University", degree: "BA", year: "~1990", note: "" },
          { school: "NYU Schack Institute of Real Estate", degree: "Graduate", year: "~1992", note: "" }
        ],
        career: [
          { firm: "Reckson Associates Realty Corp.", role: "Chairman and CEO", years: "~1995-2006", note: "Built Reckson into major NYC metro CRE company" },
          { firm: "SL Green Realty", role: "Exit (sale of Reckson)", years: "2006", note: "Sold Reckson to SL Green for $6B - 700% return to investors" },
          { firm: "Port Authority of NY/NJ", role: "Vice Chairman", years: "2011-2016", note: "Directed $30B capital plan. Oversaw World Trade Center redevelopment and One World Trade Center." },
          { firm: "Federal Reserve Bank of New York", role: "Director (Board Member)", years: "current (second term)", note: "" },
          { firm: "RXR Realty", role: "Founder, Chairman & CEO", years: "2007-present", note: "Founded day after Reckson sale. $21.2B gross asset value, 30M+ SF." }
        ],
        deals: [
          { property: "Reckson Associates Sale to SL Green", year: "2006", role: "Seller/CEO", amount: 6000000000, note: "Sold Reckson for $6B - 700% return to investors. Founded RXR the next day." },
          { property: "Starrett-Lehigh Building, 601 W 26th St NYC", year: "2011", role: "Buyer/Owner", amount: 0, note: "Iconic NYC Class A office. First major RXR acquisition." }
        ],
      }
    ],
  },

  "PMG Worldwide": {
    parentFirm:      "",
    hq:              "Miami FL (primary). Also Manhattan NY office.",
    founded:         "1991",
    aum:             "$7B+ pipeline. 175 projects, 10,000+ residential units, 18M+ SF of development. Multi-billion dollar active portfolio.",
    focus:           "National real estate investment, development, and asset management. Specialty: luxury condominiums and large-scale multifamily in urban cores. Markets: Florida, New York, Colorado, South Carolina, Tennessee, Georgia. Society Living brand for multifamily rentals. Key projects: Waldorf Astoria Residences Miami ($668M construction loan 2024), 111 West 57th Street NYC, E11EVEN Hotel & Residences Miami ($262M construction loan), Echo Brickell, Echo Aventura.",
    currentStrategy: "Very active 2024-2026. Dec 2025: $116M construction loan for Sage Intracoastal Residences Fort Lauderdale. 2024: $668M construction loan for Waldorf Astoria Residences Miami (supertall, tallest residential tower south of Manhattan). $413M two-tower Brickell residential project. $215M and $92M for other Miami projects. Society Living expanding to Atlanta, Brooklyn, Denver, Nashville, Orlando. Affordable housing division growing nationally.",
    states:          ["FL","NY","CO","GA","TN"],
    treppEntities:   ["PMG Worldwide","Property Markets Group","PMG - Ryan Shear","PMG Residential"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Kevin Maloney",
        title:         "Founder & CEO",
        firm:          "PMG (Property Markets Group)",
        decisionPower: "Founder of PMG in 1991. Remains involved as CEO alongside the managing partners. Ultimate authority on firm direction.",
        background:    "Founded Property Markets Group in 1991 in New York City as local real estate operator. Grew to national investment, development, and asset management firm over 30+ years. Now based in Miami.",
        education: [],
        career: [
          { firm: "Property Markets Group (PMG)", role: "Founder & CEO", years: "1991-present", note: "Founded in NYC. Expanded to Miami and national platform." }
        ],
        deals: [],
      },
      {
        rank:          2,
        name:          "Ryan Shear",
        title:         "Managing Partner",
        firm:          "PMG (Property Markets Group)",
        decisionPower: "Managing Partner - oversees all new construction condo and multifamily high-rise development. Three-seat acquisition approval committee. Quoted on all major project announcements. Day-to-day deal authority.",
        background:    "Joined PMG in 2007. Emory University Goizueta School of Business (BA Business Administration). Focuses on luxury condo and multifamily high-rises in Miami, New York, Orlando, Denver, Atlanta. Led Echo Aventura, Echo Brickell, Muse Sunny Isles, Sage Longboat Key, E11EVEN Hotel & Residences, Waldorf Astoria Miami. De facto co-CEO with Kaplan.",
        education: [
          { school: "Emory University Goizueta School of Business", degree: "BA Business Administration", year: "~2007", note: "" }
        ],
        career: [
          { firm: "PMG (Property Markets Group)", role: "Managing Partner", years: "2007-present", note: "Joined 2007. Now co-leads firm with Dan Kaplan." }
        ],
        deals: [
          { property: "Waldorf Astoria Residences Miami", year: "2024", role: "Lead Developer", amount: 668000000, note: "$668M construction loan 2024. Supertall tower, tallest residential building south of Manhattan." },
          { property: "E11EVEN Hotel & Residences Miami", year: "2023", role: "Lead Developer", amount: 262000000, note: "$262M construction loan from Madison Realty Capital." },
          { property: "111 West 57th Street, NYC", year: "2019", role: "Co-Developer", amount: 0, note: "Supertall skyscraper that redefined NYC skyline." }
        ],
      },
      {
        rank:          3,
        name:          "Dan Kaplan",
        title:         "Managing Partner",
        firm:          "PMG (Property Markets Group)",
        decisionPower: "Managing Partner - oversees capital markets activities and corporate operations. One of three seats approving all new acquisitions. Institutionalized PMG's development platform since 2012. Direct contact for debt/capital raises.",
        background:    "Joined PMG 2012. Has been instrumental in institutionalizing PMG's development platform and scaling operations for managing $7B+ pipeline. Oversees capital markets, investor relations, and corporate strategy.",
        education: [],
        career: [
          { firm: "PMG (Property Markets Group)", role: "Managing Partner", years: "2012-present", note: "Institutionalized PMG capital markets and development platform" }
        ],
        deals: [
          { property: "PMG Capital Markets Program", year: "2025", role: "Capital Markets Lead", amount: 1500000000, note: "Multiple 2025 construction financings: $668M Waldorf Astoria Miami, $262M E11EVEN, $413M Brickell 2-tower, $215M additional, $116M Fort Lauderdale." }
        ],
      }
    ],
  },

  "Patrick O'Malley - Crow Holdings (Legacy MHC)": {
    parentFirm:      "",
    hq:              "",
    founded:         "",
    aum:             "$64.1M loan balance",
    focus:           "Legacy MHC mobile home park portfolio ($64M CRE CLO)",
    currentStrategy: "",
    states:          ["FL"],
    treppEntities:   ["Patrick O'Malley - Crow Holdings (Legacy MHC)"],
    loans: [
      {
        property: "Legacy MHC Portfolio",
        address:  "FL",
        type:     "mhc",
        balance:  64100000,
        dscr:     0,
        status:   "current",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "Mobile home community portfolio. CRE CLO.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Patrick O'Malley",
        title:         "Principal Sponsor / Guarantor",
        firm:          "Legacy MHC Portfolio",
        decisionPower: "",
        background:    "Private MHP investor and operator. Named as principal guarantor on Legacy MHC CRE CLO loan portfolio in FL.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Jakub Hejl / Westshore Capital Partners": {
    parentFirm:      "Westside Capital Group (correct company name is Westside, not Westshore)",
    hq:              "Coral Gables FL (Westside Capital Group office)",
    founded:         "2017 (age 26 at founding)",
    aum:             "$4B+ in transactions over career. Multi-billion dollar development pipeline on entitled land primarily in FL. Current portfolio: multifamily and mixed-use high-rises, garden-style assets, and large land holdings in FL, GA, Alabama.",
    focus:           "Miami-based private real estate investment and development. Czech-American founder. Strategies: (1) Luxury high-rise condo/MF acquisitions in SE US; (2) Large-scale opportunity zone development (RoseArts District, Orlando: ~6,000 units, 350K SF commercial); (3) Special situation/distressed acquisitions from UCC foreclosures and deed-in-lieu; (4) Real estate operating business acquisitions. Currently battling $58.7M CMBS loan distress (Oasis Grand Tower II, Fort Myers, DSCR 0.31).",
    currentStrategy: "DISTRESSED: Oasis Grand Tower II, Fort Myers FL - $58.7M CMBS, DSCR 0.31, on watchlist. Active development pipeline in Orlando opportunity zone (RoseArts District). Expanding into real estate corporate investments and public-private arbitrage. Westside's team includes Jeff Levin (former Citigroup IB) and George Corton (former FIU CDO).",
    states:          ["FL","GA"],
    treppEntities:   ["Jakub Hejl / Westshore Capital Partners","Westside Capital Group"],
    loans: [
      {
        property: "Oasis Grand Tower II",
        address:  "Fort Myers FL",
        type:     "multifamily",
        balance:  58700000,
        dscr:     0.31,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "High-rise luxury condo/MF tower. DSCR 0.31 - significant distress.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Jakub Hejl",
        title:         "Founder & President",
        firm:          "Westside Capital Group",
        decisionPower: "Sole founder and decision maker. All investment, development, and capital decisions. Age 36 (born Jan 9, 1989). Youngest-ever member of University of Miami President's Council.",
        background:    "Born Jan 9, 1989, Prague Czech Republic. Moved to US at age 15 for education. IMG Academy, Sarasota FL (high school). University of Miami School of Business (BBA Finance & Real Estate, honors, class of 2012). Career: Real estate IB analyst in NYC. DRA Advisors (NYC private equity real estate). Westbrook Partners (NYC and London - European office expansion work). Founded Westside Capital Group 2017 in Miami at age 26/27. $4B+ in transactions across US and Europe. RoseArts District (Orlando opportunity zone: ~6,000 residential units). Chairman of The Wolfsonian museum board (Miami Beach). Hejl Foundation chairman. Sebastian Strong Foundation (pediatric cancer) supporter.",
        education: [
          { school: "IMG Academy", degree: "High School", year: "~2008", note: "Sarasota FL. Moved from Prague at age 15." },
          { school: "University of Miami School of Business", degree: "BBA Finance & Real Estate (honors)", year: "2012", note: "Concentration in Economics. Youngest-ever UM President's Council member. Hyperion Council alumnus." }
        ],
        career: [
          { firm: "Real estate investment bank (NYC)", role: "Analyst", years: "2012-2014", note: "First job out of UM - real estate focused IB" },
          { firm: "DRA Advisors", role: "Analyst/Associate - private equity real estate", years: "2014-2015", note: "NYC-based PE real estate firm" },
          { firm: "Westbrook Partners", role: "Associate - European expansion", years: "2015-2016", note: "NYC and London. Worked on European RE private equity deals." },
          { firm: "Westside Capital Group", role: "Founder & President", years: "2017-present", note: "Founded age 26/27. $4B+ in transactions. Coral Gables FL. Multi-billion development pipeline." }
        ],
        deals: [
          { property: "Oasis Grand Tower II, Fort Myers FL", year: "2020s", role: "Owner - Distressed Borrower", amount: 58700000, note: "CMBS loan $58.7M. DSCR 0.31. Watchlist. Baker Street priority distressed target." },
          { property: "RoseArts District, Orlando FL (Opportunity Zone)", year: "2022-ongoing", role: "Developer", amount: 0, note: "One of largest opportunity zone developments in US. ~6,000 residential units, 350K SF commercial planned." }
        ],
      },
      {
        rank:          2,
        name:          "Jeff Levin",
        title:         "Vice President, Acquisitions",
        firm:          "Westside Capital Group",
        decisionPower: "VP Acquisitions - leads underwriting and deal execution. Former Citigroup IB professional (Banking, Capital Markets & Advisory - $25B+ in IB and CM activity). UM alumnus (class of 2017).",
        background:    "University of Miami (class of 2017). Citigroup Banking, Capital Markets & Advisory (NYC) - $25B+ in IB and capital markets. Also briefly at Aztec Group (Miami RE advisory firm). Joined Westside 2019-2020.",
        education: [
          { school: "University of Miami", degree: "BS Finance", year: "2017", note: "UM Citizens Board member" }
        ],
        career: [
          { firm: "Citigroup Banking, Capital Markets & Advisory", role: "Analyst/Associate", years: "2017-2019", note: "$25B+ in IB and capital markets transactions" },
          { firm: "Aztec Group", role: "Associate - RE advisory", years: "2019", note: "Miami RE capital markets and investment sales" },
          { firm: "Westside Capital Group", role: "VP Acquisitions", years: "2019/2020-present", note: "" }
        ],
        deals: [],
      }
    ],
  },

  "Timothy B. Sittema - C4 Holdings": {
    parentFirm:      "Crosland Southeast (primary affiliation). C4 Holdings LLC (separate development vehicle).",
    hq:              "8820 Covey Rise Ct, Charlotte NC 28226 (personal/C4 Holdings). Crosland Southeast: Charlotte NC.",
    founded:         "C4 Holdings LLC: 1998 (Colorado entity). Crosland Southeast: ~2015.",
    aum:             "C4 Holdings: $50.75M FL loan (The Hudson Orlando). Crosland Southeast: active developer/co-founder.",
    focus:           "Charlotte NC-based developer. 40+ years in complex mixed-use developments with Public-Private Partnership expertise. Co-Founder and Managing Partner at Crosland Southeast (single-tenant, shopping center, multifamily, mixed-use, affordable housing). C4 Holdings LLC is a separate development vehicle used for FL projects. Named one of Charlotte's 10 most powerful leaders by Axios.",
    currentStrategy: "Active at Crosland Southeast on mixed-use and affordable housing development in Charlotte and Southeast. C4 Holdings holds $50.75M loan on The Hudson Orlando multifamily - monitor for distress. Sittema is deeply embedded in Charlotte civic/business community.",
    states:          ["FL","NC","GA"],
    treppEntities:   ["Timothy B. Sittema - C4 Holdings","C4 Holdings LLC"],
    loans: [
      {
        property: "The Hudson Orlando",
        address:  "Orlando FL",
        type:     "multifamily",
        balance:  50750000,
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
        name:          "Timothy B. Sittema",
        title:         "Co-Founder & Managing Partner, Crosland Southeast; Principal, C4 Holdings LLC",
        firm:          "Crosland Southeast / C4 Holdings LLC",
        decisionPower: "Co-founder and Managing Partner at Crosland Southeast. Principal of C4 Holdings LLC (holds The Hudson Orlando loan). All major development and capital decisions. 40+ year CRE career.",
        background:    "40+ year CRE developer. Expert in Public-Private Partnerships and complex mixed-use. One of Charlotte's 10 most powerful business leaders (Axios). Active in Charlotte civic life. Co-founded Crosland Southeast - single-tenant, shopping center, MF, mixed-use, affordable housing developer in Southeast US. C4 Holdings LLC is his personal development vehicle used for FL mixed-use/multifamily projects. NOTE: Different person from Thomas K. Sittema (CNL/StepStone, Orlando).",
        education: [],
        career: [
          { firm: "Various development firms", role: "Developer - 40+ years", years: "prior career", note: "40+ years experience in complex mixed-use and PPP developments" },
          { firm: "Crosland Southeast", role: "Co-Founder & Managing Partner", years: "~2015-present", note: "Charlotte-based developer. Single-tenant, shopping center, MF, affordable housing, mixed-use." },
          { firm: "C4 Holdings LLC", role: "Principal", years: "1998-present", note: "Personal development vehicle. Holds $50.75M FL CMBS loan on The Hudson Orlando." }
        ],
        deals: [
          { property: "The Hudson Orlando, FL", year: "2020s", role: "Developer/Owner - Borrower", amount: 50750000, note: "$50.75M CMBS loan on Orlando FL multifamily. Monitor for distress signals." }
        ],
      }
    ],
  },

  "Trusot Group": {
    parentFirm:      "",
    hq:              "",
    founded:         "",
    aum:             "$43.0M loan balance",
    focus:           "Solamar Apartments, Kissimmee ($43M, DSCR 0.54, watchlist)",
    currentStrategy: "",
    states:          ["FL"],
    treppEntities:   ["Trusot Group"],
    loans: [
      {
        property: "Solamar Apartments",
        address:  "Kissimmee FL",
        type:     "multifamily",
        balance:  43000000,
        dscr:     0.54,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Trusot Group",
        title:         "Private Real Estate Developer / Sponsor",
        firm:          "Trusot Group",
        decisionPower: "",
        background:    "Private real estate developer and sponsor operating in Central Florida multifamily sector. Named as sponsor on Solamar Apartments, Kissimmee FL - $43M CRE CLO loan.",
        education: [],
        career: [],
        deals: [],
      }
    ],
  },

  "Ryan Hanks / Madison Capital Group": {
    parentFirm:      "Madison Capital Group Holdings LLC",
    hq:              "Charlotte NC (primary). Also operates as Madison Communities and Go Store It.",
    founded:         "2009",
    aum:             "$9B+ in commercial real estate transactions over career. Active development pipeline in FL, Carolinas, VA, TN.",
    focus:           "Charlotte NC-based vertically integrated real estate development and investment firm. Focus: multifamily (suburban garden-style), self-storage, and Boat and RV storage. Multifamily under Madison Communities brand. Self-storage under Go Store It brand (founded 2013). Markets: Southeast and Mid-Atlantic - FL, NC, SC, VA, TN, Nashville, Charlotte, Raleigh, Central Florida. Active developer since 2009.",
    currentStrategy: "Active development in Central Florida (Kissimmee, Orlando area). Madison Waterstar, Kissimmee ($40.2M, DSCR 0.62). Also active in Carolinas, Virginia, Tennessee. Ryan Hanks is also co-founder of Cameron Property Company (alternative assets). NMHC member, Charlotte Apartment Association, Urban Land Institute.",
    states:          ["FL","NC","SC","VA","TN"],
    treppEntities:   ["Ryan Hanks / Madison Capital Group","Madison Capital Group Holdings"],
    loans: [
      {
        property: "Madison Waterstar",
        address:  "Kissimmee FL",
        type:     "multifamily",
        balance:  40200000,
        dscr:     0.62,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "DSCR sub-threshold.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Ryan Hanks",
        title:         "Founder & CEO",
        firm:          "Madison Capital Group / Go Store It / Cameron Property Company",
        decisionPower: "Sole founder and decision maker at Madison Capital Group. All acquisition, development, and capital decisions. Also minority owner and board member of Coastal One (broker-dealers and RIAs). Advisory board member of New Republic Bank (Charlotte).",
        background:    "Liberty University (Business Administration). Career began at major public MF company as VP Development and Acquisitions (Mid-Atlantic and Southeast sourcing). Then Apartment Realty Advisors (nation's 2nd largest MF brokerage). Founded Madison Capital Group 2009 in Charlotte. Founded Go Store It (self-storage platform) 2013. Also co-founded Cameron Property Company (alternative assets). $9B+ in transactions over career.",
        education: [
          { school: "Liberty University", degree: "BA Business Administration", year: "~2000s", note: "" }
        ],
        career: [
          { firm: "Public multifamily company (unnamed)", role: "VP Development and Acquisitions", years: "~2000s", note: "Mid-Atlantic and Southeast sourcing for national MF developer/owner" },
          { firm: "Apartment Realty Advisors", role: "Investment broker", years: "~2000s-2009", note: "Nation's 2nd largest MF brokerage. Disposition of MF communities for private and institutional investors." },
          { firm: "Madison Capital Group / Go Store It / Cameron Property Company", role: "Founder & CEO", years: "2009-present", note: "MF: Madison Communities brand. Self-storage: Go Store It (founded 2013). Alternative assets: Cameron Property Company." }
        ],
        deals: [
          { property: "Madison Waterstar, Kissimmee FL", year: "2022-2024", role: "Developer/Owner - Borrower", amount: 40200000, note: "$40.2M CRE CLO. DSCR 0.62. Sub-threshold. Baker Street watchlist." },
          { property: "Madison Capital Group Portfolio", year: "2009-present", role: "Founder/CEO", amount: 9000000000, note: "$9B+ in transactions. MF + self-storage + boat/RV storage. Southeast and Mid-Atlantic." }
        ],
      }
    ],
  },

  "Foy H. Tatum - The Tristan Pensacola": {
    parentFirm:      "Private - Pensacola FL",
    hq:              "Pensacola FL area",
    founded:         "",
    aum:             "$39.4M loan balance. The Tristan, Pensacola FL multifamily.",
    focus:           "Private Pensacola FL real estate developer/investor. Holds $39.4M CMBS loan on The Tristan - a multifamily property in Pensacola. DSCR 0.53 as of last Baker Street data, on watchlist. Private individual with concentrated FL Panhandle exposure.",
    currentStrategy: "Managing The Tristan Pensacola multifamily through post-pandemic rent recovery. DSCR 0.53 indicates sub-threshold cash flow coverage. Baker Street should monitor for distress escalation.",
    states:          ["FL"],
    treppEntities:   ["Foy H. Tatum - The Tristan Pensacola"],
    loans: [
      {
        property: "The Tristan",
        address:  "Pensacola FL",
        type:     "multifamily",
        balance:  39400000,
        dscr:     0.53,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Foy H. Tatum",
        title:         "Developer/Owner",
        firm:          "Private - FL Panhandle",
        decisionPower: "Individual owner/developer. Sole decision maker on The Tristan Pensacola.",
        background:    "Private Pensacola FL area real estate developer. Named as principal/borrower on $39.4M CMBS loan on The Tristan multifamily property in Pensacola. Limited public profile.",
        education: [],
        career: [
          { firm: "Private FL real estate development", role: "Developer/Owner", years: "ongoing", note: "Pensacola FL Panhandle area" }
        ],
        deals: [
          { property: "The Tristan, Pensacola FL", year: "ongoing", role: "Developer/Owner - Borrower", amount: 39400000, note: "$39.4M CMBS. DSCR 0.53. Watchlist. Multifamily in Pensacola FL." }
        ],
      }
    ],
  },

  "Todd P. Linden / Richard J. Valdes": {
    parentFirm:      "Circle Capital Partners",
    hq:              "Miami FL",
    founded:         "2019-2020",
    aum:             "~$4B in transactions over combined careers. Active South FL multifamily portfolio including Heron Landing, The Vue, and other acquisitions.",
    focus:           "Miami-based real estate investment firm. Multifamily acquisitions, development, land entitlement, and private/institutional capital raising. Focus on South Florida and Southeast US. Acquired Heron Landing (144 units, Sunrise FL) Oct 2022 for $22.22M. Previously acquired The Vue (178 units, Davie FL) 2021 for $36.5M. Circle Capital holds the $28.8M CMBS loan that is in special servicing through KeyBank.",
    currentStrategy: "Active South FL MF acquirer. Heron Landing (144 units, Sunrise FL) is the Baker Street tracked asset - $28.8M SS loan via KeyBank. Todd Linden also serves as Managing Director of Investments at RPM Living. South Florida Business Journal Top 40 Under 40 (2015). FIU Hollo School of Real Estate advisory board.",
    states:          ["FL"],
    treppEntities:   ["Todd P. Linden / Richard J. Valdes","Circle Capital Partners"],
    loans: [
      {
        property: "Heron Landing",
        address:  "Sunrise FL",
        type:     "multifamily",
        balance:  28800000,
        dscr:     0,
        status:   "special-servicing",
        state:    "FL",
        maturity: "",
        servicer: "KeyBank",
        note:     "144 units. Acquired Oct 2022 for $22.22M.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Todd P. Linden",
        title:         "Co-Founder & Managing Principal / Managing Director of Investments at RPM Living",
        firm:          "Circle Capital Partners / RPM Living",
        decisionPower: "Co-founder of Circle Capital. Also Managing Director of Investments at RPM Living (overseeing FL multifamily acquisitions). Co-chair of Circle Capital Investment Committee. SFBJ Top 40 Under 40 (2015). All major acquisition and capital decisions.",
        background:    "Florida State University (BS Marketing and Finance, 1998-2002). Prior: Chief Investment Officer at Advenir (2008-2018 - major South FL MF operator). Co-founder Circle Capital Partners 2019-2020. Also Managing Director of Investments at RPM Living. FIU Hollo School of Real Estate advisory board. Make-A-Wish Southern FL board chairman (10 years). Native Miami.",
        education: [
          { school: "Florida State University", degree: "BS Marketing and Finance", year: "2002", note: "" }
        ],
        career: [
          { firm: "Advenir (South FL MF operator)", role: "Chief Investment Officer", years: "2008-2018", note: "Major South FL MF owner-operator" },
          { firm: "Circle Capital Partners", role: "Co-Founder & Managing Principal", years: "2019/2020-present", note: "Co-chair Investment Committee. South FL MF acquisitions and development." },
          { firm: "RPM Living", role: "Managing Director of Investments", years: "concurrent", note: "FL multifamily acquisitions oversight" }
        ],
        deals: [
          { property: "Heron Landing, Sunrise FL (144 units)", year: "2022", role: "Buyer/Owner", amount: 22220000, note: "Acquired Oct 2022 for $22.22M. Financed via Graystone. CMBS loan $28.8M now in special servicing (KeyBank)." },
          { property: "The Vue, Davie FL (178 units)", year: "2021", role: "Buyer/Owner", amount: 36500000, note: "Acquired 2021 for $36.5M. Part of active South FL value-add MF strategy." }
        ],
      },
      {
        rank:          2,
        name:          "Richard J. Valdes",
        title:         "Co-Founder & Managing Principal",
        firm:          "Circle Capital Partners",
        decisionPower: "Co-founder and co-chair Investment Committee. Oversees multifamily transactions, development JVs, portfolio acquisitions, and platform PE investments. 20+ years in real estate including retail and multifamily across US and Latin America.",
        background:    "Florida International University (BA Management and International Business). Georgetown University (Master's in Real Estate). Fully bilingual English/Spanish. Former Board Chairman at Inverproperties (Mexico City developer - neighborhood shopping centers). 20+ years in retail and multifamily development and acquisitions.",
        education: [
          { school: "Florida International University", degree: "BA Management and International Business", year: "", note: "FIU alumnus" },
          { school: "Georgetown University", degree: "Master's in Real Estate", year: "", note: "" }
        ],
        career: [
          { firm: "Inverproperties (Mexico City)", role: "Board Chairman", years: "10+ years", note: "Mexico City developer specializing in neighborhood shopping centers" },
          { firm: "Circle Capital Partners", role: "Co-Founder & Managing Principal", years: "2019/2020-present", note: "Oversees multifamily transactions, development JVs, PE investments" }
        ],
        deals: [
          { property: "Heron Landing, Sunrise FL", year: "2022", role: "Co-Owner", amount: 22220000, note: "Co-acquired with Linden Oct 2022." }
        ],
      }
    ],
  },

  "William J. Yung III - Columbia Sussex": {
    parentFirm:      "",
    hq:              "740 Centre View Blvd, Crestview Hills KY 41017",
    founded:         "1972",
    aum:             "Private. 40-46 hotels, ~19,840 rooms nationwide. One of the largest privately-held hotel companies in the US. Largest Marriott full-service franchisee.",
    focus:           "Private hotel owner-operator. Brands: Marriott, JW Marriott, Renaissance, Hilton, DoubleTree, Hyatt Regency. Full-service hotels and resorts nationally. Key assets: Boulders Resort Arizona, Le Merigot JW Marriott Santa Monica, Westin Atlanta Airport, Hyatt Regency Denver Tech Center, Radisson Grand Cayman. 100% owned by Yung family.",
    currentStrategy: "Continuing long-term hold strategy as private family business. 50+ years in operation. Joseph Yung (VP Development) represents next generation. Post-pandemic portfolio stabilization across full-service hotels.",
    states:          ["FL","TX","GA","VA","IL"],
    treppEntities:   ["Columbia Sussex Corporation","William J. Yung III"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "William J. Yung III",
        title:         "Founder, President & CEO",
        firm:          "Columbia Sussex Corporation",
        decisionPower: "Founder and sole owner. All investment, acquisition, and debt decisions run through Yung personally. 50+ year operator. Closely involved in every aspect of the business.",
        background:    "Founded Columbia Sussex 1972 with first Days Inn motel in Richwood KY (loan from Kentucky Enterprise Bank). Shifted from Days Inn to upscale brands (Holiday Inn, Marriott) in 1980s. 2005: acquired 14 Wyndham full-service hotels from Blackstone for $1.4B -- one of the largest private hotel acquisitions ever. Also owned Tropicana Casinos & Resorts 1990 until 2008 bankruptcy (Tropicana filed Ch.11; Yung stepped down). Largest Marriott full-service franchisee. Northern Kentucky-based philanthropist: $7M gift to St. Elizabeth Healthcare (Florence Wormald Heart & Vascular Institute, 2021); $10M gift to Yung Family Cancer Center (2024). Named to Deloitte Cincinnati 'The 100' most successful privately held companies as early as 1983. No confirmed formal education record in public sources.",
        education: [
          { school: "Not publicly confirmed", degree: "", year: "", note: "Self-made entrepreneur. Founded Columbia Sussex at approximately age 22 in 1972. No confirmed college degree in public sources." }
        ],
        career: [
          { firm: "Columbia Sussex Corporation", role: "Founder, President & CEO", years: "1972-present", note: "Started with single Days Inn in Richwood KY 1972. Built to 40+ full-service hotels nationally. Largest Marriott full-service franchisee." },
          { firm: "Tropicana Casinos & Resorts", role: "Owner/Principal", years: "1990-2008", note: "Acquired Tropicana 1990. Grew casino portfolio. 2006: acquired Aztar Corp. (Atlantic City Tropicana) for $2.1B. Tropicana filed Ch.11 2008; Yung stepped down from board." }
        ],
        deals: [
          { property: "14 Wyndham Hotels from Blackstone", year: "2005", role: "Buyer", amount: 1400000000, note: "$1.4B acquisition from Blackstone/Wyndham International. 5,800+ rooms across Atlanta, Boston, Chicago, Tampa, DC, Philadelphia, San Diego and more. One of largest private hotel acquisitions ever." }
        ],
      },
      {
        rank:          2,
        name:          "Joseph Yung",
        title:         "VP Development",
        firm:          "Columbia Sussex Corporation",
        decisionPower: "VP Development - next-generation family member. Oversees development pipeline and new acquisition activity. Key relationship for Baker Street given generational transition underway.",
        background:    "Son of William J. Yung III. VP Development at Columbia Sussex, positioning as next-generation leader of the family hotel empire.",
        education: [],
        career: [
          { firm: "Columbia Sussex Corporation", role: "VP Development", years: "current", note: "Next-generation family member in development role" }
        ],
        deals: [],
      }
    ],
  },

  "Eugene Curcio": {
    parentFirm:      "Private - Florida",
    hq:              "Daytona Beach FL area",
    founded:         "",
    aum:             "$15.9M loan balance. Holiday Inn Resort Daytona Beach.",
    focus:           "Private Florida hotel investor. Holds $15.9M CMBS loan on Holiday Inn Resort Daytona Beach. DSCR 0.42 - well below threshold. Watchlist. Daytona Beach is a price-competitive leisure hotel market.",
    currentStrategy: "Holiday Inn Resort Daytona Beach - seasonal leisure hotel market. DSCR 0.42 indicates significant cash flow shortfall. Property likely struggling with post-pandemic leisure travel normalization in a competitive Daytona market.",
    states:          ["FL"],
    treppEntities:   ["Eugene Curcio"],
    loans: [
      {
        property: "Holiday Inn Resort Daytona Beach",
        address:  "Daytona Beach FL",
        type:     "hotel",
        balance:  15900000,
        dscr:     0.42,
        status:   "watchlist",
        state:    "FL",
        maturity: "",
        servicer: "",
        note:     "",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Eugene Curcio",
        title:         "Hotel Owner/Operator",
        firm:          "Private - Daytona Beach FL",
        decisionPower: "Individual owner/operator. Sole decision maker on Holiday Inn Resort Daytona Beach.",
        background:    "Private Florida hotel investor and operator. Named as principal/borrower on $15.9M CMBS loan on Holiday Inn Resort Daytona Beach. DSCR 0.42, watchlist - property in distress.",
        education: [],
        career: [
          { firm: "Hotel ownership - Daytona Beach FL", role: "Owner/Operator", years: "ongoing", note: "" }
        ],
        deals: [
          { property: "Holiday Inn Resort Daytona Beach, FL", year: "ongoing", role: "Owner - Borrower", amount: 15900000, note: "$15.9M CMBS. DSCR 0.42. Watchlist. Seasonal leisure hotel." }
        ],
      }
    ],
  },

  "H. Michael Schwartz - SmartStop": {
    parentFirm:      "SmartStop Self Storage REIT Inc. (NYSE: SMA)",
    hq:              "10 Terrace Road, Ladera Ranch CA 92694",
    founded:         "2009 (SmartStop brand). Predecessor firm 2007.",
    aum:             "460+ operating properties in 35 states, DC, and Canada. 270,000+ units. 35M+ rentable SF. NYSE: SMA IPO completed 2025. $6B+ in transactions since 2007.",
    focus:           "Self-storage REIT. Largest self-storage operator in Sun Belt states. Branded as SmartStop Self Storage. Also sponsors non-traded REITs (Strategic Storage Trust IV) and DST 1031 exchange offerings. Subsidiary Argus Professional Storage Management provides third-party management. SmartStop Asset Management (SAM) handles student and senior housing separately.",
    currentStrategy: "Went public on NYSE (SMA) in late 2025 - IPO milestone after years as non-traded REIT. Actively acquiring self-storage facilities in US and Canada (Toronto partnership with SmartCentres). Participated in KeyBanc Self Storage Investor Forum Jan 2026. Completed multiple DST liquidity events delivering 141-143% total returns to investors.",
    states:          ["FL","VA","TX","IL","GA"],
    treppEntities:   ["SmartStop Asset Management LLC","Strategic Storage Trust","H. Michael Schwartz"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "H. Michael Schwartz",
        title:         "Founder, Chairman & CEO",
        firm:          "SmartStop Self Storage REIT (NYSE: SMA)",
        decisionPower: "100% owner of SmartStop Asset Management LLC (pre-IPO). Founder and CEO of the public REIT post-IPO. All major capital and strategic decisions. Personally buys REIT shares in open market (recent 6,250-share purchase at $31.70/share).",
        background:    "University of Southern California Marshall School of Business (BS Business Administration, 1986-1990). Career at Strategic Capital Holdings before founding SmartStop predecessor 2007. Founded SmartStop brand 2009. Built from single-sponsor model to 460+ self-storage facilities. IPO on NYSE (SMA) 2025.",
        education: [
          { school: "University of Southern California Marshall School of Business", degree: "BS Business Administration", year: "1990", note: "" }
        ],
        career: [
          { firm: "Strategic Capital Holdings", role: "Prior career", years: "pre-2007", note: "" },
          { firm: "SmartStop Asset Management / SmartStop Self Storage REIT", role: "Founder, Chairman & CEO", years: "2007-present", note: "Founded 2007 as Strategic Storage Trust. SmartStop brand launched 2009. NYSE: SMA IPO 2025. 460+ facilities." }
        ],
        deals: [
          { property: "SmartStop Self Storage REIT IPO (NYSE: SMA)", year: "2025", role: "Founder/CEO", amount: 0, note: "Took company public on NYSE. First self-storage company to IPO in years." },
          { property: "Strategic Storage Trust (Fund I) Merger with Extra Space", year: "2015", role: "Sponsor/Seller", amount: 0, note: "Delivered $13.75/share full-cycle liquidity to non-traded REIT investors." }
        ],
      }
    ],
  },

  "Moishe Mana": {
    parentFirm:      "Mana Common",
    hq:              "Miami FL (Wynwood and Downtown Flagler District)",
    founded:         "1983 (Moishe's Moving Systems). Mana Common / Miami real estate focus began 2009.",
    aum:             "Largest private landowner in Miami outside government. 45+ acres in Wynwood ($350M acquired). 80+ properties on Flagler Street ($500M acquired). $150M refinancing of 56 Wynwood properties (July 2025). Total Miami portfolio multi-billion dollars.",
    focus:           "Israeli-American billionaire. Urban revitalization and real estate assemblage in Miami. Founder of Moishe's Moving Systems (largest tri-state mover), GRM Information Management (3rd largest US document storage, valued $200M+), Milk Studios, Mana Contemporary (art center). Miami focus: MANA Wynwood (45+ acres, convention center, mixed-use), Flagler District (80+ properties, tech/fashion hub). Vision: transform Miami into Western Hemisphere trade hub between Latin America and North America.",
    currentStrategy: "Jan 2026: acquired 1.6-acre Wynwood site for $33.5M (expansion). July 2025: $150M refi of 56 Wynwood properties from WFL Lender. Redirecting from tower development to low-rise community-focused Wynwood redevelopment (octagonal/pentagonal buildings). Flagler District: Nikola Tesla Innovation Hub (155 S Miami Ave), fashion showrooms (19 W Flagler). Prioritizing east of NW 5th Ave for near-term development.",
    states:          ["FL"],
    treppEntities:   ["Moishe Mana","Mana Common","MANA Wynwood"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Moishe Mana",
        title:         "Founder & Chairman",
        firm:          "Mana Common",
        decisionPower: "Sole decision maker on all Miami real estate. Personally directs all acquisitions, financings, and development decisions. Known for making large decisions quickly and unilaterally.",
        background:    "Born 1956 Tel Aviv. Grew up in Hatikva neighborhood (poor immigrant family, Iraqi parents). Intelligence officer in IDF. Studied law at Tel Aviv University briefly before pursuing business. Emigrated to New York 1983 with little money. Founded Moishe's Moving Systems (largest tri-state mover). Founded GRM Information Management 1986 (document storage, valued $200M). Founded Milk Studios (media/entertainment). By 1998 owned 1.5M+ SF commercial real estate. 2009: began Miami Wynwood assemblage. Largest private landowner in Miami.",
        education: [
          { school: "Tel Aviv University", degree: "Law (1 year, did not complete)", year: "~1975", note: "Left to pursue business" }
        ],
        career: [
          { firm: "Israeli Defense Forces", role: "Intelligence Officer", years: "~1974-1977", note: "" },
          { firm: "Moishe's Moving Systems", role: "Founder", years: "1983-present", note: "Grew to largest moving company in tri-state area. By late 1980s buying warehouse space." },
          { firm: "GRM Information Management", role: "Founder", years: "1986-present", note: "3rd largest US document storage company. Valued $200M+ (Bloomberg 2016). 15 warehouses, 7,000 clients." },
          { firm: "Milk Studios", role: "Founder", years: "~1990s", note: "Media and entertainment production conglomerate." },
          { firm: "Mana Common / MANA Wynwood / Mana Tech", role: "Founder & Chairman", years: "2009-present", note: "Largest private landowner in Miami. 45+ Wynwood acres, 80+ Flagler District properties." }
        ],
        deals: [
          { property: "Wynwood Portfolio (56 properties)", year: "2025", role: "Owner - Refinanced", amount: 150000000, note: "$150M refi July 2025 from WFL Lender. Portfolio surrounds Mana Wynwood Convention Center at 318 NW 23rd St." },
          { property: "Wynwood Site - 2661-2701 NW 5th Ave", year: "2026", role: "Buyer", amount: 33500000, note: "$33.5M purchase of 1.6-acre site Jan 2026. Approved for 8-story mixed-use, 244 residential units or 489 hotel rooms." },
          { property: "Flagler District Portfolio", year: "2010s-present", role: "Assembler/Owner", amount: 500000000, note: "80+ properties on Flagler Street. $500M assembled. Plans: Nikola Tesla Innovation Hub, fashion showrooms, tech cluster." }
        ],
      }
    ],
  },

  "Greystar Real Estate Partners": {
    parentFirm:      "",
    hq:              "18 Broad Street, Charleston SC (HQ). Offices in 260 markets globally.",
    founded:         "1993",
    aum:             "$300B+ real estate operated globally (2025). Largest apartment operator in US: 946K+ units managed, 122K+ units owned. 30M+ SF commercial.",
    focus:           "Global leader in rental housing investment, development, and management. Largest apartment operator in the US by a factor of 3x over nearest competitor. Manages student housing ($17.8B AUM, 110K+ beds), single-family rental, life science, and industrial. Operates in 260 markets across US, UK, Europe, Latin America, Asia-Pacific.",
    currentStrategy: "Continuing aggressive growth in US Sun Belt multifamily ownership and management. Expanding internationally - UK, Europe, Asia-Pacific. Modular construction factory in Western Pennsylvania (first units delivered 2024). Expanding beyond multifamily into life science, SFR, and industrial. Raised $15B+ in equity across funds. No. 1 apartment owner in US per NMHC 2025.",
    states:          ["FL","TX","GA","VA","IL"],
    treppEntities:   ["Greystar Real Estate Partners","Greystar-affiliated entities"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Bob Faith",
        title:         "Founder, Chairman & CEO",
        firm:          "Greystar Real Estate Partners",
        decisionPower: "Sole founder and ultimate decision maker at Greystar. All major capital structure, fund strategy, and platform decisions run through Faith. One of the most powerful figures in US real estate - ranked #6 on Commercial Observer Power 100 (2025).",
        background:    "Born 1963/1964. University of Oklahoma (BS Petroleum Engineering); Harvard Business School (MBA). Co-founded Starwood Capital Partners LP with Barry Sternlicht in 1991. Founded Homegate Hospitality 1996-1997. Founded Greystar 1993 in Houston TX. Grew from managing 9,000 units to 946,000+ units managed and 122,000+ owned. Net worth estimated $5B+.",
        education: [
          { school: "University of Oklahoma", degree: "BS Petroleum Engineering", year: "~1985", note: "Changed from geology after first semester" },
          { school: "Harvard Business School", degree: "MBA", year: "~1990", note: "" }
        ],
        career: [
          { firm: "Starwood Capital Partners LP", role: "Co-Founder", years: "1991-1993", note: "Co-founded with Barry Sternlicht before founding Greystar" },
          { firm: "Homegate Hospitality Inc.", role: "Founder and CEO", years: "1996-1997", note: "Extended-stay hospitality venture" },
          { firm: "Greystar Real Estate Partners", role: "Founder, Chairman & CEO", years: "1993-present", note: "Founded in Houston TX. Now headquartered in Charleston SC. Largest apartment operator in the US." }
        ],
        deals: [
          { property: "Greystar Portfolio", year: "2025", role: "Founder/CEO", amount: 300000000000, note: "946K+ units managed, 122K+ owned. $300B+ global real estate operated. Raised $15B+ in equity." },
          { property: "EdR Student Housing REIT", year: "2018", role: "Acquirer", amount: 4600000000, note: "$4.6B acquisition of Education Realty Trust - largest student housing transaction ever at time." }
        ],
      },
      {
        rank:          2,
        name:          "Wes Fuller",
        title:         "Chief Investment Officer",
        firm:          "Greystar Real Estate Partners",
        decisionPower: "CIO and Executive Committee member. Leads Investment Management business globally -- fund management, investment strategy, capital relationships, acquisitions, and dispositions across US, Europe, Latin America, and Asia-Pacific. NOTE: title was previously listed incorrectly as President/COO.",
        background:    "CIO of Greystar since joining in 2003. Furman University BS Biology (1996); UNC Kenan-Flagler MBA Real Estate Finance (2003). Career pivot: was Senior Territory Manager at Pfizer before pivoting to real estate via Kenan-Flagler MBA. Has been at Greystar essentially his entire real estate career. Based in Charleston SC. Advisory board member of The Wood Center at UNC Kenan-Flagler. Member PREA, NMHC, AFIRE, ULI Multifamily Blue Council.",
        education: [
          { school: "Furman University (Greenville SC)", degree: "BS Biology", year: "1996", note: "" },
          { school: "University of North Carolina Kenan-Flagler Business School", degree: "MBA Real Estate Finance", year: "2003", note: "" }
        ],
        career: [
          { firm: "Pfizer", role: "Senior Territory Manager", years: "~1996-2001", note: "Healthcare/pharma sales. Pivoted to real estate via UNC Kenan-Flagler MBA." },
          { firm: "Greystar Real Estate Partners", role: "Investment Management roles → CIO & Executive MD", years: "2003-present", note: "Joined 2003. Leads global Investment Management business (US, Europe, LatAm, Asia-Pacific). Executive Committee member." }
        ],
        deals: [],
      }
    ],
  },

  "Waterton Associates": {
    parentFirm:      "",
    hq:              "222 South Riverside Plaza, 20th Floor, Chicago IL 60606",
    founded:         "1995",
    aum:             "$9.5 billion portfolio (2025). 82 multifamily properties, 20 states, 30,300+ units. Also owns 4 hotels.",
    focus:           "Chicago-based value-add multifamily and hospitality real estate investor and operator. Founded on value-add multifamily model pioneered in the RTC era. Manages national portfolio on behalf of institutional investors, family offices, and financial institutions. Vertically integrated: design, construction, property management all in-house.",
    currentStrategy: "Continuing value-add multifamily acquisitions nationally. Expanded into hospitality (4 hotels under Sheraton, DoubleTree, Hyatt, Westin brands). Crossed $9.5B in portfolio value (30th anniversary 2025). Named Chicago Tribune Best Places to Work 2022-2024. Past NMHC chairman David Schwartz is a key industry voice.",
    states:          ["IL","TX","FL","GA"],
    treppEntities:   ["Waterton Associates"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "David Schwartz",
        title:         "CEO & Chairman",
        firm:          "Waterton Associates",
        decisionPower: "Co-founder and CEO. All major capital structure, acquisition, and advisory decisions. Former NMHC Chairman - one of the most networked figures in multifamily. Holds Monday office hours accessible to all staff.",
        background:    "Grew up in Highland Park IL. Started window-washing business as teenager. University of Illinois (BA Economics); University of Chicago Booth (MBA). Began career as tenant broker at AMLI Realty 1985-1989. VP Acquisitions at Equity Residential Properties Trust 1990-1995. Co-founded Waterton 1995 with Peter Vilim over strawberry Pop-Tarts. First acquisition: 342-unit Austin TX apartment with Penny Pritzker backing.",
        education: [
          { school: "University of Illinois", degree: "BA Economics", year: "~1985", note: "" },
          { school: "University of Chicago Booth School of Business", degree: "MBA", year: "~1990", note: "" }
        ],
        career: [
          { firm: "AMLI Realty Co.", role: "Tenant Broker", years: "1985-1989", note: "Met Peter Vilim here - future Waterton co-founder" },
          { firm: "Equity Residential Properties Trust", role: "Vice President, Acquisitions", years: "1990-1995", note: "" },
          { firm: "Waterton Associates", role: "Co-Founder, CEO & Chairman", years: "1995-present", note: "Founded with Peter Vilim. First acquisition 1996 Austin TX 342-unit complex with Pritzker backing." }
        ],
        deals: [
          { property: "Presidential Towers, Chicago IL", year: "2007", role: "Buyer", amount: 0, note: "Largest multifamily deal in Chicago history at time of acquisition." },
          { property: "Waterton Portfolio", year: "2025", role: "CEO - Portfolio", amount: 9500000000, note: "82 properties, 30,300+ units, 20 states. $9.5B portfolio on 30th anniversary." }
        ],
      },
      {
        rank:          2,
        name:          "Peter Vilim",
        title:         "Vice Chairman & Co-Founder",
        firm:          "Waterton Associates",
        decisionPower: "Co-founder and Vice Chairman. Second-largest ownership stake. Sits on Investment Committee and Advisory Board. Transitioned from co-chairman to vice chairman 2017 as part of planned leadership succession. Still involved in strategic direction.",
        background:    "University of Illinois (BA Accounting); DePaul University (MS Taxation). CPA - started career at Coopers & Lybrand and Peat Marwick Mitchell in national real estate tax practice. Investment officer at AMLI Realty (met Schwartz). Investment officer at Berkshire Realty Company (Midwest acquisitions). Co-founded Waterton 1995.",
        education: [
          { school: "University of Illinois", degree: "BA Accounting", year: "~1980s", note: "" },
          { school: "DePaul University", degree: "MS Taxation", year: "~1980s", note: "" }
        ],
        career: [
          { firm: "Coopers & Lybrand / Peat Marwick Mitchell", role: "CPA - National Real Estate Tax Practice", years: "early career", note: "" },
          { firm: "AMLI Realty Co.", role: "Investment Officer", years: "~late 1980s", note: "Met David Schwartz here" },
          { firm: "Berkshire Realty Company Inc.", role: "Investment Officer - Midwest acquisitions", years: "early 1990s", note: "" },
          { firm: "Waterton Associates", role: "Co-Founder, Co-Chairman then Vice Chairman", years: "1995-present", note: "Transitioned to Vice Chairman 2017 per planned leadership succession plan" }
        ],
        deals: [],
      }
    ],
  },

  "Carroll Organization": {
    parentFirm:      "RMR Group (acquired Dec 2023 for $80M)",
    hq:              "3340 Peachtree Rd NE, Atlanta GA 30326 (now RMR Residential)",
    founded:         "2004",
    aum:             "$7.4B portfolio at time of sale (Dec 2023). 28,000+ apartments, 81 owned/managed properties. Operates as RMR Residential under RMR Group post-acquisition.",
    focus:           "Atlanta-based Sun Belt multifamily operator. Value-add and core-plus apartments under Arium Living brand. Platform sold to RMR Group in Dec 2023 for $80M - Carroll departed at sale. Now operates as RMR Residential, retaining the 700-person team and 28,000-unit portfolio. Patrick Carroll retains stake in ~20,000 units and has non-compete until Jan 1, 2027.",
    currentStrategy: "Post-acquisition: RMR Residential operates the platform under RMR Group ownership. Patrick Carroll is sidelined by non-compete until Jan 2027 but has publicly stated plans to return to multifamily. He owns a stake in ~20,000 units. Suffered public personal crises 2023-2024 (bipolar diagnosis, police incident, domestic abuse allegations) but is now stabilized and positioning for return.",
    states:          ["GA","FL","TX","VA","NC"],
    treppEntities:   ["Carroll Organization","Carroll Multifamily Venture","RMR Residential"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Josh Adler",
        title:         "President, RMR Residential (formerly Carroll Organization)",
        firm:          "RMR Residential / Carroll Organization",
        decisionPower: "Retained as President when RMR acquired Carroll in Dec 2023. Now runs day-to-day operations of the 28,000-unit Sun Belt platform under RMR Group. Primary operational contact post-Carroll.",
        background:    "Served as President of Carroll Organization under Patrick Carroll. Retained by RMR Group upon acquisition to lead the operating platform. Day-to-day authority over all Carroll/RMR Residential assets.",
        education: [],
        career: [
          { firm: "Carroll Organization", role: "President", years: "prior-2023", note: "" },
          { firm: "RMR Residential (formerly Carroll Organization)", role: "President", years: "Dec 2023-present", note: "Retained by RMR Group when they acquired Carroll for $80M" }
        ],
        deals: [
          { property: "Carroll Organization Portfolio", year: "2023", role: "President - operating platform", amount: 7400000000, note: "$7.4B portfolio, 28,000+ apartments, 81 properties. Sold to RMR Group for $80M." }
        ],
      },
      {
        rank:          2,
        name:          "M. Patrick Carroll",
        title:         "Founder (departed, non-compete until Jan 2027)",
        firm:          "Carroll Organization (founder)",
        decisionPower: "Founder who sold and departed Dec 2023. Non-compete expires Jan 1, 2027. Retains stake in ~20,000 units. Actively positioning for return to multifamily after 2026.",
        background:    "Born 1979, Richmond VA. Grew up Tampa FL - no college. Self-made. Started flipping homes in Atlanta after high school. Developed 150-unit apartment project at age 27, used profits to buy 3 property management companies overseeing 22,000 units. Founded Carroll Organization 2004. Built to 28,000 units/$7.4B by 2023. Sold to RMR Group for $80M. Suffered public personal crises 2023-2024 (bipolar disorder diagnosis, police pursuit in LA, domestic abuse allegations). Has publicly discussed mental health journey. Non-compete expires Jan 1, 2027.",
        education: [
          { school: "No college degree", degree: "Self-educated", year: "", note: "Grew up in Tampa, moved to Atlanta after high school, self-made in real estate" }
        ],
        career: [
          { firm: "Self - Real estate", role: "Home flipper and developer", years: "~late 1990s-2004", note: "Developed 150-unit apartment project at age 27" },
          { firm: "Carroll Organization", role: "Founder & CEO", years: "2004-2023", note: "Built from scratch to 28,000 units/$7.4B. Sold to RMR Group Dec 2023 for $80M." },
          { firm: "Carroll Holdings (new vehicle)", role: "Principal", years: "2023-present", note: "Retains ~20,000-unit stake. Non-compete expires Jan 1, 2027. Planning return to multifamily." }
        ],
        deals: [
          { property: "Carroll Portfolio Sale to RMR Group", year: "2023", role: "Seller", amount: 80000000, note: "Sold Carroll Organization to RMR Group for $80M in all-cash deal. Portfolio valued $7.4B at time of sale." },
          { property: "PGIM Joint Venture Portfolio", year: "2022", role: "JV Partner/Seller", amount: 885500000, note: "Sold 12-property portfolio co-owned with PGIM for $885.5M - Kissimmee FL and Sun Belt." }
        ],
      }
    ],
  },

  "Magellan Development Group": {
    parentFirm:      "Private. Backed by BLG Capital Advisors (Chicago) and Winter Properties (New York) since 2019.",
    hq:              "225 N Michigan Ave, Chicago IL 60601",
    founded:         "1996",
    aum:             "Private. $6B+ in value developed since inception. 11,000+ residential units across 28 projects. Lakeshore East master plan: $4B, 28-acre neighborhood. Chicago third-tallest building (St Regis, 101 stories).",
    focus:           "Chicago luxury mixed-use and multifamily developer. Master developer of Lakeshore East (28-acre $4B neighborhood east of Michigan Ave on former Illinois Central Railroad yards). Known for Aqua Tower (Jeanne Gang design, 82 stories), St Regis Chicago (101 stories, Chicago's 3rd tallest), Vista Tower. Expanded to Miami, Austin TX, Nashville TN, and Somerville MA. Vertically integrated: bKL Architects, Magellan Marketing Group, Magellan Property Management.",
    currentStrategy: "David Carlins (2nd generation) leading expansion to new US markets (Miami, Austin, Nashville, Somerville). BLG Capital Advisors and Winter Properties as equity partners since 2019 buyout of founders. Completing Cirrus and Cascade towers in Lakeshore East. Chicago $135M CMBS exposure in Baker Street pipeline. James Loewenberg (co-founder) passed away Oct 2020 at age 86.",
    states:          ["IL","FL","TX","TN"],
    treppEntities:   ["Magellan Development Group"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "David J. Carlins",
        title:         "CEO",
        firm:          "Magellan Development Group",
        decisionPower: "CEO since late 2019 when co-founders stepped aside. All major development, capital, and strategic decisions. Son of co-founder Joel Carlins. Led Magellan for 15 years as President before becoming CEO.",
        background:    "Son of co-founder Joel Carlins. University of Wisconsin-Madison (BS Education); Loyola Law School (JD). Licensed attorney and licensed IL real estate broker. Served as President of Magellan for ~15 years before co-founders stepped aside in 2019. Active in Chicago civic life (Chicago Youth Program board, fundraising). Led national expansion to Miami, Austin, Nashville. Oversaw $270M buyout of Dalian Wanda's 90% stake in Vista Tower.",
        education: [
          { school: "University of Wisconsin-Madison", degree: "BS Education", year: "", note: "" },
          { school: "Loyola University Chicago School of Law", degree: "JD", year: "", note: "Licensed IL attorney and RE broker" }
        ],
        career: [
          { firm: "Magellan Development Group", role: "President then CEO", years: "~2004-present", note: "President ~15 years. CEO since late 2019 when founders Joel Carlins and James Loewenberg stepped aside." }
        ],
        deals: [
          { property: "Vista Tower (St Regis Chicago), 101 stories", year: "2022", role: "Developer/CEO", amount: 0, note: "Chicago's 3rd tallest building. Completed 2022. Also led $270M buyout of Dalian Wanda's 90% stake." },
          { property: "Aqua Tower, Lakeshore East Chicago", year: "2009", role: "Developer", amount: 0, note: "82-story mixed-use tower. Jeanne Gang design. First major project with Gang Architects. Award-winning design." },
          { property: "Lakeshore East Master Plan", year: "1990s-present", role: "Master Developer", amount: 4000000000, note: "$4B, 28-acre neighborhood. 4,950 residences. Transformed former Illinois Central Railroad yards east of Michigan Ave." }
        ],
      },
      {
        rank:          2,
        name:          "J.R. Berger",
        title:         "Principal & Vice President",
        firm:          "Magellan Development Group",
        decisionPower: "Principal and VP. Grandson of co-founder James Loewenberg. Retained as principal when founders stepped aside 2019. Next-generation family representation.",
        background:    "Grandson of James Loewenberg (co-founder, died Oct 2020). Age ~32 at time of founders' departure 2019. Retained as principal and VP at Magellan representing Loewenberg family continuity.",
        education: [],
        career: [
          { firm: "Magellan Development Group", role: "Principal & Vice President", years: "current", note: "Retained when co-founders stepped aside 2019. Grandson of James Loewenberg." }
        ],
        deals: [],
      }
    ],
  },

  "Diann Hsueh": {
    parentFirm:      "CBRE Investment Management (institutional fund vehicle)",
    hq:              "CBRE Investment Management: Los Angeles CA (global)",
    founded:         "",
    aum:             "$87.0M TX CRE CLO loan. CBRE IM U.S. value-add fund: ~$5B in equity commitments across the series. Hsueh has led $22B+ in acquisitions, financings and dispositions for CBRE IM.",
    focus:           "NOTE: Diann Hsueh is NOT a private Dallas investor. She is the Portfolio Manager for CBRE Investment Management's U.S. value-add strategy, based in Los Angeles. The $87M Dallas TX CRE CLO loan in Baker Street's Trepp data is a CBRE IM fund vehicle - an institutional fund, not a private individual. CBRE Investment Management manages ~$145B in AUM globally. Hsueh has led the U.S. value-add series since 2010.",
    currentStrategy: "CBRE IM U.S. value-add fund is actively deploying capital. Hsueh co-authored institutional research on NOI-growth-driven investment strategies (Oct 2024). Active in TX office and industrial markets. $5B+ in equity raised for the value-add series.",
    states:          ["TX"],
    treppEntities:   ["Diann Hsueh","CBRE Investment Management"],
    loans: [
      {
        property: "Dallas TX Office Portfolio",
        address:  "Dallas TX",
        type:     "office",
        balance:  87000000,
        dscr:     0,
        status:   "current",
        state:    "TX",
        maturity: "",
        servicer: "",
        note:     "CBRE Investment Management institutional fund vehicle. Not a private individual.",
      }
    ],
    people: [
      {
        rank:          1,
        name:          "Diann Hsueh",
        title:         "Portfolio Manager, U.S. Value-Add Strategy",
        firm:          "CBRE Investment Management",
        decisionPower: "Portfolio Manager for CBRE IM's U.S. value-add series. Sets and implements fund strategies, oversees full investment lifecycle, drives investment performance, manages client relations. Led $5B in equity commitments. $22B+ in transactions since 2010.",
        background:    "Joined CBRE IM (then CBRE Global Investors) 2010 as Transaction Management team member. Rose to Portfolio Manager for U.S. value-add series. Prior: CenterSquare Investment Management (2005-2010) - private real estate investments for commingled funds across sectors and markets. Los Angeles based. Co-authored CBRE IM white paper on NOI-growth investment strategy (published Institutional Real Estate Americas, Oct 2024).",
        education: [
          { school: "Not publicly disclosed", degree: "", year: "", note: "LA-based. CenterSquare Investment Management prior to CBRE IM 2005-2010." }
        ],
        career: [
          { firm: "CenterSquare Investment Management", role: "Private real estate investment", years: "2005-2010", note: "Managing private RE investments across sectors for commingled funds" },
          { firm: "CBRE Investment Management (formerly CBRE Global Investors)", role: "Transaction Management team then Portfolio Manager, U.S. Value-Add", years: "2010-present", note: "$22B+ in acquisitions, financings, dispositions. $5B in equity commitments raised." }
        ],
        deals: [
          { property: "CBRE IM U.S. Value-Add Fund Series", year: "2010-present", role: "Portfolio Manager", amount: 5000000000, note: "$5B+ in equity commitments. $22B+ in transactions. TX CRE CLO ($87M) is one position in the fund." }
        ],
      }
    ],
  },

  "Lincoln Properties": {
    parentFirm:      "Cadillac Fairview (Ontario Teachers' Pension Plan) - acquired residential division 2023. Commercial division remains independent.",
    hq:              "2000 McKinney Ave Suite 1000, Dallas TX 75201",
    founded:         "1965",
    aum:             "Residential division (now Willow Bridge): 200,000+ units managed, 3rd largest US apartment manager. Commercial division: $8B+ national office/industrial portfolio.",
    focus:           "Two separate entities post-2023: (1) Willow Bridge Property Company - residential/multifamily platform acquired by Cadillac Fairview, formerly Lincoln Residential. 200,000+ units, national. (2) Lincoln Property Company (commercial) - office, industrial, mixed-use developer/manager. VA office CMBS loans in Baker Street pipeline are from the commercial division.",
    currentStrategy: "Residential division rebranded as Willow Bridge under Cadillac Fairview ownership (Ontario Teachers' Pension Plan). New CEO Duncan Osborne replaced Tim Byrne (retired after 39 years, held 5% stake). Commercial division continues national office/industrial activity. VA office portfolio facing post-pandemic occupancy pressure - source of Baker Street $105M in VA CMBS loans.",
    states:          ["VA","TX","FL","GA","IL"],
    treppEntities:   ["Lincoln Properties","Lincoln Property Company","Willow Bridge Property Company"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Tim Byrne",
        title:         "Former CEO, Lincoln Residential (retired 2023). Holds 5% stake in Willow Bridge.",
        firm:          "Lincoln Property Company (former)",
        decisionPower: "Retired as CEO 2023 after 39 years (joined 1984). Retains 5% equity stake in Willow Bridge. Still a relationship contact given decades of relationships in TX and national CRE.",
        background:    "Dallas native. University of Texas (BS Business Administration). Founded Byrne Company (Dallas residential and retail developer) 1976. Joined Lincoln Property Company as President 1984. Built residential division from 9,000 units to 210,000+ units managed over 39-year tenure. Retired 2023 upon Cadillac Fairview acquisition. Named Glassdoor Top CEO 2021 (92% approval). NMHC board member, Urban Land Institute, Dallas Citizens Council.",
        education: [
          { school: "University of Texas", degree: "BS Business Administration", year: "~1976", note: "" }
        ],
        career: [
          { firm: "Byrne Company", role: "Founder", years: "1976-1984", note: "Dallas residential and retail development company" },
          { firm: "Lincoln Property Company", role: "President then CEO, Residential Division", years: "1984-2023", note: "39-year tenure. Built from 9,000 to 210,000+ units managed." },
          { firm: "Willow Bridge Property Company", role: "5% equity stake (retired)", years: "2023-present", note: "Retained minority stake when Cadillac Fairview acquired division" }
        ],
        deals: [
          { property: "Lincoln Residential Portfolio Sale to Cadillac Fairview", year: "2023", role: "Seller (retired CEO)", amount: 0, note: "Sold Lincoln residential division to Cadillac Fairview (Ontario Teachers'). Byrne retained 5% stake. Platform rebranded as Willow Bridge." }
        ],
      },
      {
        rank:          2,
        name:          "Duncan Osborne",
        title:         "CEO, Willow Bridge Property Company",
        firm:          "Willow Bridge Property Company (formerly Lincoln Residential)",
        decisionPower: "Current CEO - succeeded Tim Byrne upon Cadillac Fairview acquisition 2023. Was previously EVP at Cadillac Fairview. Now runs the 200,000-unit national residential platform.",
        background:    "CEO of Willow Bridge Property Company (formerly Lincoln Residential, 200,000+ units, 75 US markets). Canadian executive. Trent University BS; University of Western Ontario JD (law degree); Queen's University Master of Finance. Practiced M&A and tax law at Davies Ward Phillips & Vineberg (Toronto) for 13 years as partner. Joined Cadillac Fairview (Ontario Teachers' Pension Plan subsidiary, $40B+ AUM) where he led international business across US, Europe, Asia-Pacific and LatAm and spearheaded the 2019 partnership with Lincoln Residential. Appointed CEO of Lincoln Residential / Willow Bridge upon Cadillac Fairview's full acquisition in 2023.",
        education: [
          { school: "Trent University (Ontario)", degree: "BS", year: "~1993", note: "" },
          { school: "University of Western Ontario (Western University)", degree: "JD (Law degree)", year: "~1996", note: "Practiced as M&A and tax lawyer for 13 years." },
          { school: "Queen's University (Ontario)", degree: "Master of Finance", year: "~2013-2014", note: "" }
        ],
        career: [
          { firm: "Davies Ward Phillips & Vineberg LLP (Toronto)", role: "Associate → Partner (M&A and Tax Law)", years: "~1998-2011", note: "13 years as partner specializing in domestic and international M&A transactions." },
          { firm: "Cadillac Fairview (Ontario Teachers' Pension Plan)", role: "EVP Development → Executive Committee Member / Head of International", years: "~2011-2023", note: "Led Cadillac Fairview international business (US, Europe, Asia-Pacific, LatAm). Spearheaded 2019 Lincoln Residential partnership (initially 49% stake). Led full acquisition 2023." },
          { firm: "Willow Bridge Property Company (formerly Lincoln Residential)", role: "CEO", years: "2023-present", note: "Appointed CEO upon Cadillac Fairview's 100% acquisition. Rebranded Lincoln Residential to Willow Bridge. 200,000+ apartments, 75 US markets." }
        ],
        deals: [],
      }
    ],
  },

  "Cortland Partners": {
    parentFirm:      "",
    hq:              "3424 Peachtree Rd NE Suite 300, Atlanta GA 30326 (Buckhead). Regional offices: Charlotte, Dallas, Denver, Greenwich, Houston, Orlando, Phoenix. Also UK.",
    founded:         "2005",
    aum:             "~80,000 apartments, 240+ communities, primarily Southeast, Midwest, Texas. $2.4B revenue. Ranked #8 largest apartment owner (NMHC 2024). LaSalle Investment $250M co-investment announced Jan 2026.",
    focus:           "Global vertically integrated multifamily investment, development, and management. Hospitality-driven consumer-centric model with in-house construction, design, property management, and facilities. #1 brand among property managers by Reputation.com (2020, 2021, 2023). UK build-to-rent platform. Recently acquired Elme Communities (19 communities, $1.6B, Nov 2025).",
    currentStrategy: "Aggressive Sun Belt and Midwest expansion. Nov 2025: acquired Elme Communities 19-property portfolio for $1.6B. Jan 2026: LaSalle Investment $250M co-investment. New CFO (Sandra Kim-Suk), EVP Capital Markets (Michelle Johnstone), Head of IR (Chelsea Holder) all hired 2025 - scaling institutional capital raising. Expanding UK BTR platform. Pursuing Goldman Sachs co-investment relationships.",
    states:          ["GA","TX","FL","VA","NC"],
    treppEntities:   ["Cortland Partners LLC","Cortland Partners"],
    loans: [],
    people: [
      {
        rank:          1,
        name:          "Steven DeFrancis",
        title:         "Founder & CEO",
        firm:          "Cortland",
        decisionPower: "Founder and sole CEO. All major investment, capital, and strategic decisions. 30+ year multifamily career. Serves on Real Estate Roundtable, NMHC, Urban Land Institute, Buckhead Coalition boards.",
        background:    "University of Georgia Terry College of Business (BS Real Estate). 30+ years multifamily experience. Founded Cortland 2005 in Atlanta for in-town mixed-use MF development. Pivoted to value-add acquisitions during 2008 GFC. Largest apartment owner in Atlanta and Dallas. Named name from Ayn Rand's The Fountainhead character Cortlandt Homes. Deep Atlanta civic roots.",
        education: [
          { school: "University of Georgia Terry College of Business", degree: "BS Real Estate", year: "~1990s", note: "Active UGA alum. Member of Buckhead Coalition." }
        ],
        career: [
          { firm: "Cortland", role: "Founder & CEO", years: "2005-present", note: "Founded in Atlanta 2005. Pivoted from development to value-add acquisitions in 2008 GFC. Grew to 80,000+ units globally." }
        ],
        deals: [
          { property: "Elme Communities Portfolio", year: "2025", role: "Acquirer", amount: 1600000000, note: "19 multifamily communities acquired for $1.6B from Elme Communities. Nov 2025." },
          { property: "Cortland Portfolio", year: "2025", role: "CEO", amount: 0, note: "~80,000 apartments, 240+ communities. Ranked #8 largest US apartment owner (NMHC 2024). LaSalle $250M co-investment Jan 2026." }
        ],
      },
      {
        rank:          2,
        name:          "Sandra Kim-Suk",
        title:         "Chief Financial Officer",
        firm:          "Cortland",
        decisionPower: "CFO - all debt, capital markets, and financial decisions. Hired 2025 as part of Cortland's institutional scaling push. Direct contact for CMBS and structured finance conversations.",
        background:    "Hired as CFO in 2025 as Cortland builds out institutional capital raising capability. Joins alongside new EVP Capital Markets and Head of IR.",
        education: [],
        career: [
          { firm: "Cortland", role: "Chief Financial Officer", years: "2025-present", note: "Hired 2025 as part of institutional scaling push" }
        ],
        deals: [],
      }
    ],
  }

};

// Backwards compatibility aliases
var SPONSORS_NATIONAL = SPONSORS;
var SPONSORS_REGIONAL = SPONSORS;
var SPONSORS_ADDITIONAL = SPONSORS;
