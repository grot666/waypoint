/* Waypoint · 途径 — country data.
 * Each country is a plain object. status: "full" | "stub".
 * Every user-facing string is {zh, en}. To add a country, copy a "full" entry,
 * change the fields and set status:"full". See README.md for field docs.
 * difficulty: 1 (easier) – 5 (hardest); cost: 1 (low) – 5 (very high)
 * lang: "en" (English works) | "local" (local language needed) | "either"
 * pathwayTypes: skilled | employer | study | investment | family | jobseeker
 */
window.WAYPOINT_DATA = {
  updated: "2026-10",
  countries: [
  {
    id: "ca", flag: "🇨🇦", status: "full",
    name: { zh: "加拿大", en: "Canada" }, region: { zh: "北美", en: "North America" },
    difficulty: 4, cost: 4, lang: "either",
    pathwayTypes: ["skilled", "employer", "study", "family", "investment"],
    orientation: { zh: "收紧中：移民总量下调，偏向境内申请人与定向类别", en: "Tightening: lower overall levels, favouring in-country applicants and targeted categories" },
    overview: {
      zh: "加拿大仍是透明度最高的积分制移民国家之一，但自 2024 年起明显收紧：永居与临时居民目标人数下调，留学签证设上限，联邦快速通道（Express Entry）更多采用定向类别抽签（如法语、医疗、技工等）。工作邀请的 CRS 加分已于 2025 年取消。整体可行，但竞争比以往激烈。",
      en: "Canada remains one of the most transparent points-based systems, but has tightened noticeably since 2024: permanent and temporary resident targets were cut, study permits are capped, and Express Entry relies more on category-based draws (e.g. French, healthcare, trades). CRS points for job offers were removed in 2025. Still viable, but more competitive than before."
    },
    pathways: [
      { type: "skilled", name: { zh: "联邦快速通道 Express Entry", en: "Express Entry (FSW / CEC / FST)" }, desc: { zh: "按综合排名系统（CRS，满分 1200）打分排队，定期抽签邀请。加拿大工作经验类（CEC）对境内申请人更有利。", en: "Candidates are ranked by the Comprehensive Ranking System (CRS, max 1200) and invited in periodic draws. Canadian Experience Class favours in-country applicants." } },
      { type: "skilled", name: { zh: "省提名 PNP", en: "Provincial Nominee Program" }, desc: { zh: "各省按本地需求提名，获省提名在 Express Entry 中加 600 分；各省配额近年同样被削减。", en: "Provinces nominate for local needs; a nomination adds 600 CRS points. Provincial allocations have also been reduced recently." } },
      { type: "study", name: { zh: "留学转移民", en: "Study → PGWP → PR" }, desc: { zh: "毕业后工签（PGWP）积累本地经验再申请 CEC。现有留学签证上限，且 PGWP 对部分专业有领域限制。", en: "Post-Graduation Work Permit to gain Canadian experience, then CEC. Study permits are capped and PGWP eligibility now depends on field of study for many programs." } },
      { type: "employer", name: { zh: "雇主担保工签", en: "Employer-specific work permit (LMIA)" }, desc: { zh: "需雇主通过劳动力市场影响评估（LMIA）；本身不是永居，但可积累经验。", en: "Employer needs a Labour Market Impact Assessment; not PR itself but builds experience toward it." } },
      { type: "family", name: { zh: "家庭团聚", en: "Family sponsorship" }, desc: { zh: "配偶/伴侣、子女可担保；父母祖父母项目名额少，采用抽签。", en: "Spouses/partners and children; parents & grandparents program has limited intake via lottery." } },
      { type: "investment", name: { zh: "创业签证 SUV", en: "Start-up Visa" }, desc: { zh: "需获指定机构支持；近年名额受限、排期长，政策变动频繁。", en: "Requires support from a designated organisation; intake now limited with long queues and frequent changes." } }
    ],
    requirements: {
      age: { zh: "无硬性上限，但 CRS 年龄分在 20–29 岁最高，30 岁后逐年递减，45 岁后为 0。", en: "No hard cap, but CRS age points peak at 20–29, decline after 30 and reach zero at 45." },
      language: { zh: "英语（IELTS/CELPIP/PTE Core）或法语（TEF/TCF）。FSW 最低 CLB 7；法语能力可大幅加分并参加法语定向抽签。", en: "English (IELTS / CELPIP / PTE Core) or French (TEF / TCF). FSW minimum CLB 7; French adds significant points and access to French-language draws." },
      education: { zh: "海外学历需做 ECA 学历认证；硕士/博士加分更高。", en: "Foreign credentials need an Educational Credential Assessment (ECA); higher degrees score more." },
      experience: { zh: "FSW 需至少 1 年连续全职技术类工作经验（TEER 0–3）；本地经验分值更高。", en: "FSW needs at least 1 year continuous full-time skilled work (TEER 0–3); Canadian experience scores higher." },
      funds: { zh: "FSW 需证明安家资金，单人约 1.5 万加元（每年调整）；CEC 或持有效工作邀请可免。", en: "FSW requires settlement funds, approx. CAD 15k for a single applicant (updated yearly); exempt for CEC or valid job offer." }
    },
    living: {
      cost: { zh: "多伦多、温哥华生活成本高；草原省份和大西洋省份明显更低。", en: "High in Toronto and Vancouver; noticeably lower in the Prairies and Atlantic provinces." },
      jobs: { zh: "就业市场近年降温，新移民常遇到“缺本地经验”门槛；医疗、技工、IT 部分岗位需求稳定。", en: "Job market has cooled; newcomers often face the 'Canadian experience' barrier. Healthcare, trades and some tech roles remain steady." },
      salary: { zh: "专业岗位年薪多在约 6–10 万加元区间，因省份和行业差异大。", en: "Professional salaries commonly approx. CAD 60–100k, varying widely by province and sector." },
      housing: { zh: "住房可负担性是全国性问题，大城市租金高、空置率低。", en: "Housing affordability is a national issue; big-city rents are high and vacancy low." },
      healthcare: { zh: "公立全民医保（各省管理），部分省份新移民有等待期；看专科排队较长。", en: "Public provincial healthcare; some provinces have a waiting period for newcomers; specialist wait times are long." },
      education: { zh: "公立中小学免费且质量较好；大学学费对永居更低。", en: "Free, good-quality public K-12; university tuition lower for PRs." }
    },
    risks: [
      { k: "policy", zh: "政策变动频繁：移民计划人数、抽签类别和分数线每年都可能调整。", en: "Frequent policy shifts: levels plans, draw categories and cut-offs can change yearly." },
      { k: "skill", zh: "职业认证门槛：医生、律师、工程师等受监管职业需重新认证，耗时长。", en: "Credential recognition: regulated professions (medicine, law, engineering) require lengthy re-licensing." },
      { k: "cost", zh: "高房价与高房租会显著消耗初期积蓄。", en: "High housing costs can quickly drain initial savings." },
      { k: "language", zh: "魁北克以法语为主，有独立移民体系。", en: "Quebec is French-speaking with its own separate immigration system." },
      { k: "stability", zh: "永居稳定，满足 5 年内住满 3 年可申请入籍；但临时身份阶段不确定性大。", en: "PR is stable; citizenship after 3 years' presence within 5. Temporary-status stage carries much uncertainty." }
    ],
    suits: [ { zh: "年轻专业人士", en: "Young professionals" }, { zh: "会法语者", en: "French speakers" }, { zh: "医护/技工", en: "Healthcare & trades" }, { zh: "举家移民", en: "Families" } ],
    official: [ { label: { zh: "加拿大移民局 IRCC", en: "IRCC" }, url: "https://www.canada.ca/en/immigration-refugees-citizenship.html" } ]
  },
  {
    id: "au", flag: "🇦🇺", status: "full",
    name: { zh: "澳大利亚", en: "Australia" }, region: { zh: "大洋洲", en: "Oceania" },
    difficulty: 4, cost: 4, lang: "en",
    pathwayTypes: ["skilled", "employer", "study", "family", "investment"],
    orientation: { zh: "重技能、重雇主：独立技术移民名额有限，雇主担保改革", en: "Skills- and employer-led: limited independent places, reformed employer sponsorship" },
    overview: {
      zh: "澳大利亚以积分制技术移民和雇主担保为两大支柱。2024 年底用“技能需求签证”（482 Skills in Demand）取代原 TSS，并持续压缩留学生规模。积分及格线 65 分，但实际获邀分数通常更高且因职业而异。商业创新与投资签证（188）已停止新申请。",
      en: "Australia rests on points-tested skilled migration and employer sponsorship. In late 2024 the Skills in Demand visa (subclass 482) replaced the TSS, and student numbers are being reduced. The points-test pass mark is 65, but invitation scores are usually higher and vary by occupation. The Business Innovation & Investment (188) visa is closed to new applications."
    },
    pathways: [
      { type: "skilled", name: { zh: "独立技术移民 189", en: "Skilled Independent (189)" }, desc: { zh: "无需担保的永居签证，需职业在清单上、通过职业评估并获邀请。竞争最激烈。", en: "Unsponsored permanent visa; requires a listed occupation, skills assessment and invitation. Most competitive." } },
      { type: "skilled", name: { zh: "州担保 190 / 偏远地区 491", en: "State Nominated (190) / Regional (491)" }, desc: { zh: "190 为州担保永居（+5 分）；491 为偏远地区临时签（+15 分），满足条件后可转 191 永居。", en: "190 is state-nominated PR (+5 points); 491 is a provisional regional visa (+15 points) leading to 191 PR." } },
      { type: "employer", name: { zh: "技能需求签证 482", en: "Skills in Demand (482)" }, desc: { zh: "分专家、核心技能等通道，按收入门槛划分；可转 186 雇主担保永居。", en: "Specialist and Core Skills streams based on income thresholds; pathway to 186 Employer Nomination PR." } },
      { type: "study", name: { zh: "留学 + 毕业生签证 485", en: "Student → Graduate (485)" }, desc: { zh: "毕业生工签年龄上限已降至约 35 岁；留学签证费用与审核大幅提高。", en: "Graduate visa age limit lowered to approx. 35; student visa fees and scrutiny significantly increased." } },
      { type: "family", name: { zh: "配偶/伴侣签证", en: "Partner visas (820/801, 309/100)" }, desc: { zh: "费用较高、审理周期长；父母签证排期可能长达多年。", en: "Expensive with long processing; parent visas may queue for many years." } },
      { type: "investment", name: { zh: "国家创新签证 858", en: "National Innovation Visa (858)" }, desc: { zh: "面向具有杰出成就的人才、企业家和投资者，需获提名/邀请。", en: "For exceptional talent, entrepreneurs and investors; nomination/invitation required." } }
    ],
    requirements: {
      age: { zh: "技术移民须在获邀时未满 45 岁；25–32 岁年龄分最高。", en: "Must be under 45 at invitation for skilled visas; 25–32 earns the most age points." },
      language: { zh: "至少“合格英语”（如 IELTS 每项 6）；精通英语（每项 8）可加 20 分。", en: "At least Competent English (e.g. IELTS 6 each band); Superior English (8 each) adds 20 points." },
      education: { zh: "学历按评估计分；在澳学习、偏远地区学习、专业年等可加分。", en: "Qualifications scored after assessment; Australian study, regional study and Professional Year add points." },
      experience: { zh: "需相关职业评估机构认可；海外与澳洲工作经验分别计分，澳洲经验分值更高。", en: "Must pass the relevant assessing authority; overseas and Australian experience scored separately, Australian higher." },
      funds: { zh: "技术移民无固定资金要求；但签证费、评估费、英语考试等合计成本较高。", en: "No fixed funds test for skilled visas, but visa, assessment and test fees add up substantially." }
    },
    living: {
      cost: { zh: "悉尼、墨尔本生活成本高；阿德莱德、珀斯、二线城市相对较低。", en: "High in Sydney and Melbourne; relatively lower in Adelaide, Perth and regional cities." },
      jobs: { zh: "失业率总体较低，医疗、建筑、教育、IT 有长期缺口。", en: "Generally low unemployment; persistent shortages in healthcare, construction, education and IT." },
      salary: { zh: "最低工资在发达国家中较高；专业岗位年薪多在约 8–13 万澳元。", en: "High minimum wage by OECD standards; professional salaries commonly approx. AUD 80–130k." },
      housing: { zh: "租房紧张、房价高，大城市空置率很低。", en: "Tight rental markets and high prices; very low vacancy in major cities." },
      healthcare: { zh: "永居可享 Medicare 公立医保；临时签证通常需购买私人保险。", en: "PRs access Medicare; temporary visa holders usually need private health insurance." },
      education: { zh: "公立学校对永居免费；部分州对临时签证子女收费。", en: "Public schools free for PRs; some states charge fees for temporary visa holders' children." }
    },
    risks: [
      { k: "policy", zh: "职业清单与邀请分数波动大，等待邀请期间不确定性高。", en: "Occupation lists and invitation scores fluctuate; uncertainty while waiting for invitation." },
      { k: "skill", zh: "职业评估严格，海外经验可能不被完全认可。", en: "Skills assessments are strict; overseas experience may not be fully recognised." },
      { k: "cost", zh: "签证与留学费用持续上涨，初期成本高。", en: "Rising visa and study fees mean high upfront costs." },
      { k: "culture", zh: "偏远地区生活机会多但社交与配套有限。", en: "Regional living opens pathways but with fewer amenities and social networks." },
      { k: "stability", zh: "永居稳定；入籍需在澳居住 4 年（其中永居 1 年）。", en: "PR is stable; citizenship after 4 years' residence including 1 year as PR." }
    ],
    suits: [ { zh: "英语好者", en: "Strong English" }, { zh: "清单职业", en: "Listed occupations" }, { zh: "愿去偏远地区", en: "Open to regional life" }, { zh: "医护/建筑", en: "Health & construction" } ],
    official: [ { label: { zh: "澳大利亚内政部移民", en: "Home Affairs – Immigration" }, url: "https://immi.homeaffairs.gov.au/" } ]
  },
  {
    id: "de", flag: "🇩🇪", status: "full",
    name: { zh: "德国", en: "Germany" }, region: { zh: "欧洲", en: "Europe" },
    difficulty: 3, cost: 3, lang: "local",
    pathwayTypes: ["skilled", "employer", "study", "jobseeker", "family"],
    orientation: { zh: "开放中：新《技术移民法》降低门槛，推出机会卡", en: "Opening: reformed Skilled Immigration Act lowers barriers, launches Opportunity Card" },
    overview: {
      zh: "面对长期人才短缺，德国 2023–2024 年分步实施新版《技术移民法》：推出积分制“机会卡”（Chancenkarte）允许先来找工作，放宽欧盟蓝卡，承认部分职业经验。入籍居住年限缩短为 5 年（3 年快速通道已在 2025 年取消），并允许双重国籍。语言仍是融入的最大门槛。",
      en: "Facing chronic shortages, Germany rolled out its reformed Skilled Immigration Act in 2023–2024: a points-based Opportunity Card (Chancenkarte) to job-hunt in-country, an easier EU Blue Card and more recognition of experience. Naturalisation now takes 5 years (the 3-year fast track was abolished in 2025) and dual citizenship is allowed. German language remains the biggest hurdle."
    },
    pathways: [
      { type: "employer", name: { zh: "欧盟蓝卡", en: "EU Blue Card" }, desc: { zh: "需认可的高等学历 + 达到年薪门槛的工作合同（紧缺职业门槛更低，每年调整）。", en: "Recognised degree + job offer meeting a salary threshold (lower for shortage occupations; adjusted yearly)." } },
      { type: "jobseeker", name: { zh: "机会卡 Chancenkarte", en: "Opportunity Card" }, desc: { zh: "积分制求职签证，最长 1 年，可在德找工作并兼职；需 6 分或拥有完全认可的资格。", en: "Points-based job-seeker permit up to 1 year with part-time work allowed; needs 6 points or a fully recognised qualification." } },
      { type: "skilled", name: { zh: "专业人才居留（§18a/18b）", en: "Skilled worker permit (§18a/18b)" }, desc: { zh: "职业培训或学历获认可者可凭工作合同申请；新法允许从事资格范围外的合格工作。", en: "For recognised vocational or academic qualifications with a job offer; may now work outside the exact field." } },
      { type: "study", name: { zh: "留学转工作", en: "Study → work" }, desc: { zh: "公立大学学费低或免费；毕业后可获最长 18 个月找工作居留。", en: "Low or no tuition at public universities; up to 18 months' post-study job-search permit." } },
      { type: "family", name: { zh: "家庭团聚", en: "Family reunification" }, desc: { zh: "蓝卡持有人配偶无需德语即可团聚并工作。", en: "Blue Card holders' spouses can join without German and may work." } }
    ],
    requirements: {
      age: { zh: "无上限；机会卡 35 岁以下有年龄分。45 岁以上首次来德的专业人才可能需满足最低薪资或养老金证明。", en: "No cap; Opportunity Card awards age points under 35. First-time skilled workers over 45 may need a minimum salary or pension provision." },
      language: { zh: "蓝卡通常不强制德语；机会卡需德语 A1 或英语 B2。入籍和长期融入需德语 B1 及以上。", en: "Blue Card usually doesn't require German; Opportunity Card needs German A1 or English B2. Settlement and citizenship need B1+." },
      education: { zh: "学历需在 anabin 中被认可或做学历评估（ZAB）；受监管职业需职业资格认证（Anerkennung）。", en: "Degree must be recognised (anabin) or evaluated by ZAB; regulated professions require formal recognition." },
      experience: { zh: "机会卡按相关工作年限加分；部分 IT 专家可凭经验而非学历申请蓝卡。", en: "Opportunity Card awards points for relevant experience; some IT specialists can get a Blue Card based on experience instead of a degree." },
      funds: { zh: "机会卡/求职需证明生活费，约每月 1,000 欧元以上（常用冻结账户，每年调整）。", en: "Opportunity Card / job search requires proof of funds, approx. €1,000+/month (often a blocked account; adjusted yearly)." }
    },
    living: {
      cost: { zh: "慕尼黑、法兰克福较贵；东部和中小城市生活成本明显更低。", en: "Munich and Frankfurt are expensive; eastern and smaller cities much cheaper." },
      jobs: { zh: "工程、IT、护理、技工长期紧缺；经济近年增长疲弱，部分行业裁员。", en: "Long-term shortages in engineering, IT, nursing and trades; weak recent growth with layoffs in some industries." },
      salary: { zh: "专业岗位税前年薪约 4.5–7 万欧元；税和社保扣除比例较高。", en: "Professional salaries approx. €45–70k gross; taxes and social contributions are high." },
      housing: { zh: "大城市租房难、竞争激烈，多数人长期租房。", en: "Renting in big cities is hard and competitive; most people rent long-term." },
      healthcare: { zh: "强制医保（公立 GKV 或私立 PKV），覆盖全面。", en: "Mandatory health insurance (public GKV or private PKV) with comprehensive coverage." },
      education: { zh: "公立中小学和大学基本免费；教育系统较早分流。", en: "Public schools and universities largely free; early tracking in school system." }
    },
    risks: [
      { k: "language", zh: "德语是工作外生活、办事和升职的关键障碍。", en: "German is critical for daily life, bureaucracy and career progression." },
      { k: "skill", zh: "学历和职业资格认证流程繁琐，耗时数月。", en: "Recognition procedures are bureaucratic and can take months." },
      { k: "culture", zh: "官僚流程多、数字化程度低，外管局预约难。", en: "Heavy bureaucracy, limited digitalisation, hard-to-get immigration office appointments." },
      { k: "policy", zh: "移民政策受政治影响，入籍规则已有回调。", en: "Migration is politically contested; citizenship rules have already been partly rolled back." },
      { k: "stability", zh: "蓝卡最快约 21–27 个月可获永居（视德语水平）；其他专业人才约 3 年。", en: "Blue Card holders can settle in approx. 21–27 months (depending on German level); other skilled workers approx. 3 years." }
    ],
    suits: [ { zh: "工程/IT", en: "Engineering & IT" }, { zh: "愿学德语", en: "Willing to learn German" }, { zh: "低学费留学", en: "Low-cost study" }, { zh: "护理技工", en: "Nursing & trades" } ],
    official: [ { label: { zh: "德国官方技术移民门户", en: "Make it in Germany" }, url: "https://www.make-it-in-germany.com/en/" } ]
  },
  {
    id: "sg", flag: "🇸🇬", status: "full",
    name: { zh: "新加坡", en: "Singapore" }, region: { zh: "东南亚", en: "Southeast Asia" },
    difficulty: 5, cost: 5, lang: "en",
    pathwayTypes: ["employer", "investment", "family", "skilled"],
    orientation: { zh: "工作准入开放、永居高度选择性", en: "Open to work passes, highly selective for PR" },
    overview: {
      zh: "新加坡对高收入专业人士开放工作准证，但永久居民（PR）审批不透明、不是积分制且高度选择性。就业准证（EP）需通过 COMPASS 评估框架（40 分）并达到随年龄上升的最低月薪。生活环境安全高效，但成本极高，长期身份不确定性大。",
      en: "Singapore welcomes high-earning professionals on work passes, but Permanent Residence is discretionary, not points-based and highly selective. Employment Passes must pass the COMPASS framework (40 points) and meet an age-rising minimum salary. Safe and efficient, but very expensive, with uncertain long-term status."
    },
    pathways: [
      { type: "employer", name: { zh: "就业准证 EP", en: "Employment Pass (EP)" }, desc: { zh: "面向专业人士和管理人员；最低月薪约 5,600 新元起（金融业更高、年龄越大越高），需通过 COMPASS。", en: "For professionals and managers; minimum salary from approx. S$5,600/month (higher in finance and with age); must pass COMPASS." } },
      { type: "employer", name: { zh: "S 准证", en: "S Pass" }, desc: { zh: "面向中级技术人员，有配额和雇主税；最低月薪约 3,300 新元起。", en: "For mid-skilled staff; subject to quotas and levies; minimum salary from approx. S$3,300/month." } },
      { type: "skilled", name: { zh: "顶尖人才准证 ONE Pass", en: "Overseas Networks & Expertise Pass" }, desc: { zh: "月薪约 3 万新元以上或具杰出成就，5 年期，可灵活更换雇主。", en: "For salaries of approx. S$30k/month+ or outstanding achievement; 5 years, flexible employment." } },
      { type: "skilled", name: { zh: "申请永久居民 PR", en: "Permanent Residence (PTS)" }, desc: { zh: "持准证工作一段时间后可申请，综合考虑收入、在新年限、家庭关系、融入等，无公开评分标准。", en: "Apply after working on a pass; assessed holistically on income, length of stay, family ties and integration, with no published scoring." } },
      { type: "investment", name: { zh: "全球投资者计划 GIP", en: "Global Investor Programme" }, desc: { zh: "门槛极高（通常需千万新元级投资及大型企业背景），名额很少。", en: "Extremely high bar (typically eight-figure SGD investment and a substantial business track record)." } },
      { type: "family", name: { zh: "家属准证", en: "Dependant's Pass / LTVP" }, desc: { zh: "EP 持有人达到一定月薪可为配偶子女申请。", en: "EP holders above a salary threshold can bring spouse and children." } }
    ],
    requirements: {
      age: { zh: "无年龄上限，但 EP 最低薪资随年龄递增（40 多岁约需 1 万新元以上）。", en: "No cap, but EP minimum salary rises with age (mid-40s approx. S$10k+)." },
      language: { zh: "英语为工作语言，无需语言考试；会中文或马来语对生活有帮助。", en: "English is the working language; no test required. Mandarin or Malay helps in daily life." },
      education: { zh: "COMPASS 中名校学历可加分；学历真实性会被核查。", en: "Top-tier degrees earn COMPASS points; credentials are verified." },
      experience: { zh: "需与薪资匹配的专业经验；雇主本地员工多元化等也影响 COMPASS。", en: "Experience matching salary; employer's local workforce diversity also affects COMPASS." },
      funds: { zh: "工作准证无资金要求；但租房押金和生活成本需要较多启动资金。", en: "No funds requirement for work passes, but rental deposits and living costs need sizable savings." }
    },
    living: {
      cost: { zh: "全球生活成本最高的城市之一，私人住房和汽车尤其昂贵。", en: "One of the world's most expensive cities, especially private housing and cars." },
      jobs: { zh: "金融、科技、生物医药机会多；本地优先政策让中层岗位竞争激烈。", en: "Strong in finance, tech and biomedical; local-first policies make mid-level roles competitive." },
      salary: { zh: "专业人士薪资高，个人所得税低（最高边际税率约 24%）。", en: "High professional pay and low personal income tax (top marginal rate approx. 24%)." },
      housing: { zh: "外国人通常租私人公寓，租金高；组屋购买仅限公民与 PR（有限制）。", en: "Foreigners usually rent private condos at high rents; HDB purchase limited to citizens and PRs." },
      healthcare: { zh: "医疗水平高；非公民无公民级补贴，需依赖雇主或私人保险。", en: "Excellent care; non-citizens lack citizen subsidies and rely on employer or private insurance." },
      education: { zh: "外籍子女进入公立学校名额有限、学费较高；国际学校非常昂贵。", en: "Limited public-school places and higher fees for foreigners; international schools very expensive." }
    },
    risks: [
      { k: "stability", zh: "身份依附于工作，失业后准证即失效；PR 获批无保证。", en: "Status is tied to employment; passes lapse on job loss and PR is never guaranteed." },
      { k: "cost", zh: "极高的住房、教育、汽车成本。", en: "Very high housing, schooling and car costs." },
      { k: "policy", zh: "EP 门槛和最低薪资会定期上调。", en: "EP criteria and salary thresholds are raised periodically." },
      { k: "culture", zh: "空间小、节奏快；男性 PR 第二代需服兵役。", en: "Small, fast-paced; second-generation male PRs must do National Service." }
    ],
    suits: [ { zh: "高收入专业人士", en: "High earners" }, { zh: "金融/科技", en: "Finance & tech" }, { zh: "亚洲区域岗位", en: "Regional Asia roles" }, { zh: "英语/华语环境", en: "English & Mandarin" } ],
    official: [ { label: { zh: "人力部 MOM", en: "Ministry of Manpower" }, url: "https://www.mom.gov.sg/" }, { label: { zh: "移民与关卡局 ICA", en: "ICA" }, url: "https://www.ica.gov.sg/" } ]
  },
  {
    id: "nz", flag: "🇳🇿", status: "full",
    name: { zh: "新西兰", en: "New Zealand" }, region: { zh: "大洋洲", en: "Oceania" },
    difficulty: 3, cost: 3, lang: "en",
    pathwayTypes: ["skilled", "employer", "study", "investment", "family"],
    orientation: { zh: "雇主导向：绿色清单 + 认证雇主工签，投资移民放宽", en: "Employer-led: Green List + accredited-employer work visas; investor route relaxed" },
    overview: {
      zh: "新西兰的技术移民以工作邀请为核心。2023 年起技术移民类别（SMC）改为“6 分制”：凭职业注册、学历或收入得 3–6 分，加上在新技术工作经验最多 3 分。紧缺职业“绿色清单”提供直接或工作 2 年后申请居留的通道。2025 年放宽了“活跃投资者+”签证。",
      en: "New Zealand's skilled migration centres on a job offer. Since 2023 the Skilled Migrant Category uses a 6-point system: 3–6 points from occupational registration, qualification or income, plus up to 3 points for NZ skilled work. The Green List offers straight-to-residence or work-to-residence after 2 years. The Active Investor Plus visa was relaxed in 2025."
    },
    pathways: [
      { type: "skilled", name: { zh: "技术移民类别 SMC", en: "Skilled Migrant Category" }, desc: { zh: "需新西兰技术工作或工作邀请，凑满 6 分即可申请居留，审批较透明。", en: "Requires NZ skilled employment or offer; reach 6 points to apply for residence. Fairly transparent." } },
      { type: "employer", name: { zh: "绿色清单居留", en: "Green List residence" }, desc: { zh: "Tier 1 职业可直接申请居留；Tier 2 需在新工作约 2 年后申请。", en: "Tier 1 occupations go straight to residence; Tier 2 after approx. 2 years working in NZ." } },
      { type: "employer", name: { zh: "认证雇主工签 AEWV", en: "Accredited Employer Work Visa" }, desc: { zh: "雇主须获认证并完成岗位核查；是大多数人进入新西兰的第一步。", en: "Employer must be accredited and pass a job check; the usual first step into NZ." } },
      { type: "study", name: { zh: "留学 + 毕业生工签", en: "Study → Post-study work visa" }, desc: { zh: "符合条件学位可获最长 3 年毕业工签，再转 SMC。", en: "Eligible qualifications give up to 3 years' post-study work, then SMC." } },
      { type: "investment", name: { zh: "活跃投资者+", en: "Active Investor Plus" }, desc: { zh: "2025 年改革后门槛约 500 万纽币（成长类）起，英语要求取消。", en: "Reformed in 2025: from approx. NZ$5m (Growth category), with no English requirement." } },
      { type: "family", name: { zh: "伴侣/父母", en: "Partner / Parent visas" }, desc: { zh: "伴侣签证较常见；父母可申请居留（名额有限）或新的长期探亲签证。", en: "Partner visas common; parents via a capped residence category or the newer long-term Parent Boost visa." } }
    ],
    requirements: {
      age: { zh: "SMC 须 55 岁及以下。", en: "SMC: aged 55 or under." },
      language: { zh: "SMC 需 IELTS 总分 6.5 或同等英语成绩。", en: "SMC: IELTS 6.5 overall or equivalent." },
      education: { zh: "学士 3 分、硕士 5 分、博士 6 分（需 NZQA 认证）。", en: "Bachelor's 3, Master's 5, Doctorate 6 points (NZQA-recognised)." },
      experience: { zh: "需在新西兰从事技术工作，每满 1 年得 1 分，最多 3 分。", en: "NZ skilled work: 1 point per year, up to 3." },
      funds: { zh: "技术类无资金要求；收入需达到中位工资倍数要求。", en: "No funds test for skilled routes; income must meet median-wage multiples." }
    },
    living: {
      cost: { zh: "奥克兰最贵，惠灵顿次之；食品和住房相对收入偏高。", en: "Auckland priciest, then Wellington; food and housing high relative to income." },
      jobs: { zh: "就业市场较小，近年经济放缓；医护、建筑、工程、教师有缺口。", en: "Small market, recent slowdown; shortages in healthcare, construction, engineering and teaching." },
      salary: { zh: "薪资低于澳大利亚；专业岗位年薪约 7–11 万纽币。", en: "Lower pay than Australia; professionals approx. NZ$70–110k." },
      housing: { zh: "房价收入比高，房屋保温普遍一般。", en: "High price-to-income ratios; housing insulation often poor." },
      healthcare: { zh: "居民享公立医疗，部分工签持有者也符合条件；专科排队长。", en: "Public healthcare for residents and some work-visa holders; specialist waits are long." },
      education: { zh: "公立学校对居民免费，教育环境宽松。", en: "Free public schooling for residents; relaxed learning environment." }
    },
    risks: [
      { k: "skill", zh: "市场小，专业对口岗位有限，可能需要降级就业。", en: "Small market; fewer matching roles may mean under-employment." },
      { k: "policy", zh: "工签规则（如工资门槛）近年多次调整。", en: "Work-visa rules (e.g. wage thresholds) changed repeatedly in recent years." },
      { k: "culture", zh: "地理偏远、远离家人，回国成本高。", en: "Geographic isolation from family and expensive travel home." },
      { k: "cost", zh: "收入相对生活成本偏低，许多人移居澳洲。", en: "Income relative to costs is modest; many move on to Australia." },
      { k: "stability", zh: "获居留后满足条件可转永久居留，5 年后可入籍。", en: "Resident visa leads to Permanent Resident visa; citizenship after 5 years." }
    ],
    suits: [ { zh: "有工作邀请者", en: "Job-offer holders" }, { zh: "医护/工程", en: "Health & engineering" }, { zh: "喜欢自然", en: "Nature lovers" }, { zh: "生活节奏慢", en: "Slower pace of life" } ],
    official: [ { label: { zh: "新西兰移民局", en: "Immigration New Zealand" }, url: "https://www.immigration.govt.nz/" } ]
  },
  /* ---- Stubs: content coming soon. Fill in using the "full" schema above. ---- */
  { id: "us", flag: "🇺🇸", status: "stub", name: { zh: "美国", en: "United States" }, region: { zh: "北美", en: "North America" } },
  { id: "uk", flag: "🇬🇧", status: "stub", name: { zh: "英国", en: "United Kingdom" }, region: { zh: "欧洲", en: "Europe" } },
  { id: "fr", flag: "🇫🇷", status: "stub", name: { zh: "法国", en: "France" }, region: { zh: "欧洲", en: "Europe" } },
  { id: "nl", flag: "🇳🇱", status: "stub", name: { zh: "荷兰", en: "Netherlands" }, region: { zh: "欧洲", en: "Europe" } },
  { id: "jp", flag: "🇯🇵", status: "stub", name: { zh: "日本", en: "Japan" }, region: { zh: "东亚", en: "East Asia" } },
  { id: "kr", flag: "🇰🇷", status: "stub", name: { zh: "韩国", en: "South Korea" }, region: { zh: "东亚", en: "East Asia" } },
  { id: "ch", flag: "🇨🇭", status: "stub", name: { zh: "瑞士", en: "Switzerland" }, region: { zh: "欧洲", en: "Europe" } },
  { id: "se", flag: "🇸🇪", status: "stub", name: { zh: "瑞典", en: "Sweden" }, region: { zh: "北欧", en: "Nordics" } },
  { id: "no", flag: "🇳🇴", status: "stub", name: { zh: "挪威", en: "Norway" }, region: { zh: "北欧", en: "Nordics" } },
  { id: "fi", flag: "🇫🇮", status: "stub", name: { zh: "芬兰", en: "Finland" }, region: { zh: "北欧", en: "Nordics" } },
  { id: "ie", flag: "🇮🇪", status: "stub", name: { zh: "爱尔兰", en: "Ireland" }, region: { zh: "欧洲", en: "Europe" } },
  { id: "es", flag: "🇪🇸", status: "stub", name: { zh: "西班牙", en: "Spain" }, region: { zh: "欧洲", en: "Europe" } },
  { id: "pt", flag: "🇵🇹", status: "stub", name: { zh: "葡萄牙", en: "Portugal" }, region: { zh: "欧洲", en: "Europe" } },
  { id: "it", flag: "🇮🇹", status: "stub", name: { zh: "意大利", en: "Italy" }, region: { zh: "欧洲", en: "Europe" } },
  { id: "at", flag: "🇦🇹", status: "stub", name: { zh: "奥地利", en: "Austria" }, region: { zh: "欧洲", en: "Europe" } },
  { id: "ae", flag: "🇦🇪", status: "stub", name: { zh: "阿联酋", en: "United Arab Emirates" }, region: { zh: "中东", en: "Middle East" } },
  { id: "my", flag: "🇲🇾", status: "stub", name: { zh: "马来西亚", en: "Malaysia" }, region: { zh: "东南亚", en: "Southeast Asia" } }
  ]
};
