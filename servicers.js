// ── SERVICERS ─────────────────────────────────────────────────────────────────
const SERVICERS = {
  "KeyBank":    {approach:"Workout-oriented. Responds well to structured recapitalization proposals.",          timeline:"60–90 days.",  angle:"Rob has direct KeyBank SS relationships from Iron Hound."},
  "LNR":        {approach:"Most aggressive. Prefers note sales or deed-in-lieu. Will foreclose fast.",          timeline:"30–60 days.",  angle:"LNR is a known Baker Street counterpart. Prior LNR workout experience is a major credibility signal."},
  "Midland":    {approach:"Process-driven. Follows PSA strictly. Requires complete BRP.",                       timeline:"90–120 days.", angle:"Baker Street PSA-compliant proposals are our core competency with Midland."},
  "CWCapital":  {approach:"Data-driven. Considers modifications, extensions, note sales.",                      timeline:"60–90 days.",  angle:"Brian closed CWCapital workouts at Iron Hound. Direct credibility signal."},
  "Rialto":     {approach:"Deal-oriented (Lennar-affiliated). Open to JV recaps, creative structures.",         timeline:"30–60 days.",  angle:"Brian's UBS colleagues Brett Ersoff & John Herman founded Rialto's securitization group."},
  "Argentic":   {approach:"Most aggressive. Will take assets REO. No legacy relationships.",                    timeline:"30–60 days.",  angle:"Speed is everything. Baker Street's ability to move fast with institutional capital is essential."},
  "CBRE":       {approach:"Institutional. Prefer consensual resolutions.",                                      timeline:"90–120 days.", angle:"Baker Street's institutional network overlaps with CBRE's."},
  "Situs":      {approach:"Handles complex workouts across all asset types. More borrower-friendly.",           timeline:"90–120 days.", angle:"Rob has direct Situs workout experience from Iron Hound."},
  "TriMont":    {approach:"CRE CLO specialist. Consensual resolutions strongly preferred.",                     timeline:"90–120 days.", angle:"CRE CLO workout expertise is Baker Street's direct differentiator."},
  "MF1":        {approach:"Multifamily bridge lender. Prefers structured extensions/modifications.",            timeline:"60–90 days.",  angle:"Multifamily bridge loan workout experience directly applicable."},
  "Greystone":  {approach:"Relationship-oriented. Will work with the right advisor.",                          timeline:"90–120 days.", angle:"Baker Street relationship with Greystone can be leveraged."},
  "Arbor":      {approach:"Major multifamily lender. Prefers modification/extension on own originations.",     timeline:"60–90 days.",  angle:"Multifamily recapitalization expertise directly applicable."},
  "Brookfield": {approach:"Institutional servicer. Process-driven.",                                           timeline:"90–120 days.", angle:"Baker Street's institutional credibility is the key value-add."},
};
function getServicer(svc) {
  if (!svc) return null;
  const s=svc.toLowerCase();
  if (s.includes("keybank"))   return {key:"KeyBank",  ...SERVICERS["KeyBank"]};
  if (s.includes("lnr"))       return {key:"LNR",      ...SERVICERS["LNR"]};
  if (s.includes("midland"))   return {key:"Midland",  ...SERVICERS["Midland"]};
  if (s.includes("cwcapital")||s.includes("cw capital")) return {key:"CWCapital",...SERVICERS["CWCapital"]};
  if (s.includes("rialto"))    return {key:"Rialto",   ...SERVICERS["Rialto"]};
  if (s.includes("argentic"))  return {key:"Argentic", ...SERVICERS["Argentic"]};
  if (s.includes("cbre"))      return {key:"CBRE",     ...SERVICERS["CBRE"]};
  if (s.includes("situs"))     return {key:"Situs",    ...SERVICERS["Situs"]};
  if (s.includes("trimont"))   return {key:"TriMont",  ...SERVICERS["TriMont"]};
  if (s.includes("mf1"))       return {key:"MF1",      ...SERVICERS["MF1"]};
  if (s.includes("greystone")) return {key:"Greystone",...SERVICERS["Greystone"]};
  if (s.includes("arbor"))     return {key:"Arbor",    ...SERVICERS["Arbor"]};
  if (s.includes("brookfield"))return {key:"Brookfield",...SERVICERS["Brookfield"]};
  return null;
}
