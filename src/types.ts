/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = "en" | "am";

export interface ScriptureVerse {
  reference: string;
  text: string;
}

export interface TranslationSet {
  brandName: string;
  brandSub: string;
  tagline: string;
  description: string;
  joinButton: string;
  learnMore: string;
  worshipTitle: string;
  worshipDesc: string;
  missionTitle: string;
  missionDesc: string;
  scripturesTitle: string;
  footerQuote: string;
  contactHeader: string;
  contactSub: string;
  formName: string;
  formEmail: string;
  formInterest: string;
  formMessage: string;
  formSubmit: string;
  formSuccess: string;
  formError: string;
  homeLink: string;
  ministriesLink: string;
  scriptureLink: string;
  galleryLink: string;
  contactLink: string;
  galleryHeader: string;
  gallerySub: string;
  interestWorship: string;
  interestMissions: string;
  interestBoth: string;
  interestOther: string;
}

export const translations: Record<Language, TranslationSet> = {
  en: {
    brandName: "The Cross Fellowship",
    brandSub: "Worshipping Together, Serving Together",
    tagline: "Gather. Worship. Reach.",
    description: "Welcome to The Cross Fellowship. We are a warm, welcoming community of believers dedicated to worshipping the Lord with our whole heart and reaching outwards to serve our local neighborhood and the world.",
    joinButton: "Join Our Team",
    learnMore: "Discover More",
    worshipTitle: "Worship & Praise Team",
    worshipDesc: "Our singers and instrumentalists lead our community in authentic contemporary and traditional worship. Our calling is to cultivate an atmosphere of praise where hearts are prepared, spirits are elevated, and God is glorified. Whether you sing or play an instrument, there is space here to minister together.",
    missionTitle: "Outreach & Mission Team",
    missionDesc: "We believe in being the hands and feet of Jesus. Our mission team focuses on impactful local community outreach (food programs, homeless care, youth ministries) as well as global missions to share hope and practical aid. Join us as we serve, build connections, and share love in action.",
    scripturesTitle: "Scripture of the Day",
    footerQuote: "\"For to me, to live is Christ!\" - Philippians 1:21",
    contactHeader: "Connect With Us",
    contactSub: "We would love to welcome you, answer your questions, or pray with you. Let us know how you would like to get involved!",
    formName: "Full Name",
    formEmail: "Email Address",
    formInterest: "Area of Interest",
    formMessage: "How can we serve or connect with you?",
    formSubmit: "Send Message",
    formSuccess: "Thank you for reaching out! We will connect with you soon.",
    formError: "Please fill out all fields correctly.",
    homeLink: "Home",
    ministriesLink: "Wings of Ministry",
    scriptureLink: "Scripture",
    galleryLink: "Fellowship Gallery",
    contactLink: "Get Connected",
    galleryHeader: "Fellowship in Action",
    gallerySub: "Moments of devotion, fellowship, and service shared across our community.",
    interestWorship: "Singers & Worship Team",
    interestMissions: "Mission & Outreach Team",
    interestBoth: "Both Ministries",
    interestOther: "General Inquiry / Just Visiting",
  },
  am: {
    brandName: "የመስቀል ሕብረት",
    brandSub: "በአንድነት እናምልክ፣ በአንድነት እናገልግል",
    tagline: "መሰብሰብ። ማምለክ። መድረስ።",
    description: "ወደ መስቀል ሕብረት በደህና መጡ። እኛ ጌታን በሙሉ ልባችን ለማምለክ እና የአካባቢያችንን ማህበረሰብ እንዲሁም ዓለምን በፍቅር ለማገልገል የተሰጠን ሞቅ ያለ እና አቀባባይ የክርስቲያን ማህበረሰብ ነን።",
    joinButton: "ቡድናችንን ይቀላቀሉ",
    learnMore: "የበለጠ ይረዱ",
    worshipTitle: "የአምልኮ እና ምስጋና ቡድን",
    worshipDesc: "ዘማሪዎቻችን እና የሙዚቃ መሣሪያ ተጫዋቾቻችን ማህበረሰባችንን በእውነተኛ ዘመናዊ እና ባህላዊ አምልኮ ይመራሉ። ጥሪያችን ልቦች የሚዘጋጁበት፣ መንፈስ የሚታደስበት እና እግዚአብሔር የሚከበርበት የምስጋና ድባብ መፍጠር ነው። ቢዘምሩም ሆነ የሙዚቃ መሣሪያ ቢጫወቱ፣ እዚህ አብረን የምናገለግልበት ሰፊ ቦታ አለ።",
    missionTitle: "የስርጭት እና የሚሲዮን ቡድን",
    missionDesc: "የኢየሱስ እጆች እና እግሮች በመሆን እናምናለን። የሚሲዮን ቡድናችን ትኩረቱን በአካባቢው ማህበረሰብ አገልግሎት (የምግብ እርዳታ፣ ቤት አልባዎችን መርዳት፣ የወጣቶች አገልግሎት) እንዲሁም ዓለም አቀፍ ሚሲዮኖች ላይ በማድረግ ተስፋን እና ተግባራዊ እርዳታን ያካፍላል። በተግባር ፍቅርን ለማሳየት አብረውን ያገልግሉ።",
    scripturesTitle: "የዕለቱ ጥቅስ",
    footerQuote: "\"ለእኔ ሕይወት ክርስቶስ ነውና!\" — ፊልጵስዩስ ፩:፳፩",
    contactHeader: "ከእኛ ጋር ይገናኙ",
    contactSub: "እርስዎን ለመቀበል፣ ጥያቄዎችዎን ለመመለስ ወይም አብረንዎት ለመጸለይ ደስተኞች ነን። እንዴት መሳተፍ እንደሚፈልጉ ያሳውቁን!",
    formName: "ሙሉ ስም",
    formEmail: "የኢሜይል አድራሻ",
    formInterest: "የፍላጎት መስክ",
    formMessage: "እንዴት ልናገለግልዎት ወይም ከእርስዎ ጋር መገናኘት እንችላለን?",
    formSubmit: "መልዕክት ላክ",
    formSuccess: "ስላገኙን እናመሰግናለን! በቅርቡ እናገኝዎታለን።",
    formError: "እባክዎን ሁሉንም መስኮች በትክክል ይሙሉ::",
    homeLink: "ዋና ገጽ",
    ministriesLink: "የአገልግሎት ዘርፎች",
    scriptureLink: "የዕለቱ ቃል",
    galleryLink: "የሕብረት ማዕከለ-ስዕላት",
    contactLink: "ይገናኙ",
    galleryHeader: "ሕብረት በተግባር",
    gallerySub: "በማህበረሰባችን ውስጥ የተጋሩ የአምልኮ፣ የሕብረት እና የአገልግሎት ቅጽበቶች።",
    interestWorship: "ዘማሪዎች እና የአምልኮ ቡድን",
    interestMissions: "የሚሲዮን እና የስርጭት ቡድን",
    interestBoth: "ሁለቱም አገልግሎቶች",
    interestOther: "አጠቃላይ ጥያቄ / ዝም ብሎ መጎብኘት",
  },
};

export const scriptureVerses: Record<Language, ScriptureVerse[]> = {
  en: [
    { text: "For where two or three gather in my name, there am I with them.", reference: "Matthew 18:20" },
    { text: "Let everything that has breath praise the Lord. Praise the Lord!", reference: "Psalm 150:6" },
    { text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.", reference: "Acts 1:8" },
    { text: "Serve one another humbly in love.", reference: "Galatians 5:13" },
    { text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.", reference: "Matthew 5:16" },
    { text: "Sing to him, sing praises to him; tell of all his wondrous works!", reference: "Psalm 105:2" }
  ],
  am: [
    { text: "ሁለት ወይም ሦስት በስሜ በሚሰበሰቡበት በዚያ በመካከላቸው እሆናለሁና።", reference: "ማቴዎስ ፲፰:፳" },
    { text: "እስትንፋስ ያለው ሁሉ እግዚአብሔርን ያመስግን። ሃሌ ሉያ።", reference: "መዝሙር ፻፶:፮" },
    { text: "ነገር ግን መንፈስ ቅዱስ በእናንተ ላይ በወረደ ጊዜ ኃይልን ትቀበላላችሁ፥ በኢየሩሳሌምም በይሁዳም ሁሉ በሰማርያም እስከ ምድር ዳርም ድረስ ምስክሮቼ ትሆናላችሁ።", reference: "የሐዋርያት ሥራ ፩:፰" },
    { text: "በፍቅር እርስ በርሳችሁ እንደ ባሪያዎች ሁኑ።", reference: "ገላትያ ፭:፲፫" },
    { text: "መልካሙን ሥራችሁን አይተው በሰማያት ያለውን አባታችሁን እንዲያከብሩ ብርሃናችሁ እንዲሁ በሰው ፊት ይብራ።", reference: "ማቴዎስ ፭:፲፮" },
    { text: "ዘምሩለት፥ እልልም በሉለት፤ ተአምራቱንም ሁሉ ተናገሩ።", reference: "መዝሙር ፻፭:፪" }
  ]
};

export interface GalleryItem {
  id: string;
  imagePath: string;
  date: string; // YYYY-MM-DD
  formattedDateEn: string;
  formattedDateAm: string;
  titleEn: string;
  titleAm: string;
  descEn: string;
  descAm: string;
  categoryEn: string;
  categoryAm: string;
  scriptureRefEn: string;
  scriptureRefAm: string;
  highlightsEn: string[];
  highlightsAm: string[];
  recapImages: string[];
}

export const galleryItems = (
  worshipImg: string,
  missionImg: string,
  bibleStudyImg: string,
  youthImg: string,
  prayerImg: string,
  coffeeImg: string,
  bImg?: string,
  cImg?: string,
  dImg?: string,
  main4Img?: string,
  gal2Recap?: string[]
): GalleryItem[] => [
  {
    id: "gal-1",
    imagePath: worshipImg,
    date: "2026-07-19",
    formattedDateEn: "July 19, 2026",
    formattedDateAm: "ሐምሌ ፲፪ ቀን ፪፲፲፰ ዓ.ም",
    titleEn: "Welcome Program",
    titleAm: "የእንኳን ደህና መጡ ፕሮግራም",
    descEn: "Our welcome program was held at IEC, and it was truly an amazing first day with our family. We are grateful for the opportunity to gather, connect, and start this journey together.",
    descAm: "የእንኳን ደህና መጡ ፕሮግራማችን በIEC የተካሄደ ሲሆን፣ ከቤተሰባችን ጋር በእውነት አስደናቂ የመጀመሪያ ቀን ነበር። አብረን ለመሰብሰብ፣ ለመገናኘት እና ይህንን ጉዞ በጋራ ለመጀመር ባገኘነው ዕድል እጅግ አመስጋኞች ነን።",
    categoryEn: "Sunday Service",
    categoryAm: "የእሁድ አገልግሎት",
    scriptureRefEn: "Galatians 2:20",
    scriptureRefAm: "ገላትያ ፪:፳",
    highlightsEn: [
      "We began with a brief introduction to the fellowship’s vision and mission",
      "Followed by a time of fellowship and connection",
      "Plans and upcoming activities were also shared"
    ],
    highlightsAm: [
      "ስለ ሕብረቱ ራዕይ እና ተልዕኮ አጭር መግቢያ በማቅረብ ጀመርን",
      "በመቀጠል የሕብረት እና የእርስ በእርስ ትውውቅ ጊዜ ተካሂዷል",
      "እቅዶች እና መጪ እንቅስቃሴዎችም ተጋርተዋል"
    ],
    recapImages: [worshipImg, bImg || worshipImg, cImg || worshipImg, dImg || worshipImg]
  },
  {
    id: "gal-2",
    imagePath: main4Img || missionImg,
    date: "2026-07-11",
    formattedDateEn: "July 11, 2026",
    formattedDateAm: "ሐምሌ ፬ ቀን ፪፲፲፰ ዓ.ም",
    titleEn: "New year celebration/2019",
    titleAm: "የአዲስ ዓመት በዓል አከባበር / ፪፲፲፱",
    descEn: "We celebrated the Ethiopian New Year as a family and marked a major milestone for the fellowship. It was a joyful occasion filled with amazing worship, fellowship, and meaningful time together.",
    descAm: "የኢትዮጵያን አዲስ ዓመት እንደ አንድ ቤተሰብ አብረን ያከበርን ሲሆን፣ ለሕብረታችን ትልቅ ምዕራፍ አስመዝግቧል። በአስደናቂ አምልኮ፣ በሕብረት እና ትርጉም ባለው የጋራ ጊዜ የተሞላ አስደሳች በዓል ነበር።",
    categoryEn: "Praise & Worship",
    categoryAm: "ምስጋና እና አምልኮ",
    scriptureRefEn: "Matthew 25:40",
    scriptureRefAm: "ማቴዎስ ፳፭:፵",
    highlightsEn: [
      "We welcomed the Ethiopian New Year together as a family",
      "The day was blessed with uplifting worship, joyful fellowship"
    ],
    highlightsAm: [
      "የኢትዮጵያን አዲስ ዓመት እንደ አንድ ቤተሰብ አብረን ተቀበልን",
      "ቀኑ በሚያነቃቃ አምልኮ እና አስደሳች ሕብረት የተባረከ ነበር"
    ],
    recapImages: gal2Recap && gal2Recap.length > 0 ? gal2Recap : [main4Img || missionImg, prayerImg, coffeeImg]
  }
  /*
  // ============================================================================
  // TEMPORARILY DISABLED CARDS (gal-3 and gal-4)
  // Location: src/types.ts (around lines 224-278)
  // To re-enable: Simply remove the opening "/*" and closing "* /" comment markers.
  // ============================================================================
  ,
  {
    id: "gal-3",
    imagePath: bibleStudyImg,
    date: "2026-06-24",
    formattedDateEn: "June 24, 2026",
    formattedDateAm: "ሰኔ ፲፯ ቀን ፪፲፲፰ ዓ.ም",
    titleEn: "Midweek Fellowship & Bible Study",
    titleAm: "የእኩለ-ሳምንት ሕብረት እና የመጽሐፍ ቅዱስ ጥናት",
    descEn: "An intimate evening of deep scripture study, small group discussions, and shared snacks. We journeyed through the Book of Ephesians, reflecting on unity within the body of Christ.",
    descAm: "ጥልቅ የመጽሐፍ ቅዱስ ጥናት፣ የትንሽ ቡድን ውይይቶች እና የጋራ መክሰስ የተጋራበት የቅርብ ምሽት። በክርስቶስ አካል ውስጥ ስላለው አንድነት እያሰላሰልን ወደ ኤፌሶን መጽሐፍ ተጓዝን።",
    categoryEn: "Bible Study",
    categoryAm: "የመጽሐፍ ቅዱስ ጥናት",
    scriptureRefEn: "Ephesians 4:1-3",
    scriptureRefAm: "ኤፌሶን ፬:፩-፫",
    highlightsEn: [
      "Detailed verse-by-verse study of Ephesians Chapter 4",
      "Interactive small group table discussions on church unity",
      "Concluded with warm tea, coffee, and fellowship time"
    ],
    highlightsAm: [
      "የኤፌሶን ምዕራፍ ፬ ዝርዝር ጥቅስ በጥቅስ ጥናት ተካሂዷል",
      "በቤተክርስቲያን አንድነት ላይ በጠረጴዛ ዙሪያ የተደረጉ በይነተገናኝ የትንሽ ቡድን ውይይቶች",
      "በትኩስ ሻይ፣ ቡና እና የሕብረት ጊዜ ተጠናቋል"
    ],
    recapImages: [bibleStudyImg, prayerImg, coffeeImg]
  },
  {
    id: "gal-4",
    imagePath: youthImg,
    date: "2026-06-12",
    formattedDateEn: "June 12, 2026",
    formattedDateAm: "ሰኔ ፭ ቀን ፪፲፲፰ ዓ.ም",
    titleEn: "Youth Night: Faith & Friendship",
    titleAm: "የወጣቶች ምሽት፡ እምነት እና ወዳጅነት",
    descEn: "A vibrant gathering for our youth filled with interactive games, a worship session, and an open panel discussion addressing faith challenges in modern academic and social life.",
    descAm: "በይነተገናኝ ጨዋታዎች፣ የአምልኮ ጊዜ እና በዘመናዊ አካዳሚያዊ እና ማህበራዊ ህይወት ውስጥ የእምነት ፈተናዎችን የሚዳስስ ግልጽ የፓናል ውይይት የተሞላበት የወጣቶቻችን ደማቅ ስብስብ።",
    categoryEn: "Youth Ministry",
    categoryAm: "የወጣቶች አገልግሎት",
    scriptureRefEn: "1 Timothy 4:12",
    scriptureRefAm: "፩ ጢሞቴዎስ ፬:፲፪",
    highlightsEn: [
      "Over 45 high school and college students attended",
      "Interactive team building games and dynamic musical worship",
      "Q&A session with church mentors on living out faith daily"
    ],
    highlightsAm: [
      "ከ፵፭ በላይ የከፍተኛ ሁለተኛ ደረጃ ትምህርት ቤት እና የኮሌጅ ተማሪዎች ተገኝተዋል",
      "በይነተገናኝ የቡድን ግንባታ ጨዋታዎች እና ህያው የሙዚቃ አምልኮ",
      "እምነትን በየቀኑ ስለመኖር ከቤተክርስቲያን መካሪዎች ጋር የጥያቄና መልስ ጊዜ ተካሂዷል"
    ],
    recapImages: [youthImg, prayerImg, coffeeImg]
  }
  */
];
