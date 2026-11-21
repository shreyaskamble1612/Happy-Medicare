export type Region = "mumbai" | "pune" | "other";

export type Centre = {
  en: string;
  mr: string;
  region: Region;
  /** Digits exactly as printed on the flyer. */
  phone: string;
  /** True when the printed number is not 10 digits — confirm with the client. */
  verify?: boolean;
};

// Transcribed from the Happy Medicare Maharashtra demo-centre flyer.
export const centres: Centre[] = [
  { en: "Kolhapur", mr: "कोल्हापूर", region: "other", phone: "7767959571" },
  { en: "Satara", mr: "सातारा", region: "other", phone: "7083160047" },
  { en: "Karad", mr: "कराड", region: "other", phone: "8275980118" },
  { en: "Baramati", mr: "बारामती", region: "other", phone: "9850497719" },
  { en: "Solapur", mr: "सोलापूर", region: "other", phone: "9763716591" },
  { en: "Latur", mr: "लातूर", region: "other", phone: "7875412452" },
  { en: "Shrirampur", mr: "श्रीरामपूर", region: "other", phone: "9860326219" },
  { en: "Ratnagiri", mr: "रत्नागिरी", region: "other", phone: "9657799095" },
  { en: "Chiplun", mr: "चिपळूण", region: "other", phone: "8376983899" },
  { en: "Nashik", mr: "नाशिक", region: "other", phone: "9226893649" },
  { en: "Panvel", mr: "पनवेल", region: "mumbai", phone: "9823347948" },
  { en: "Nerul", mr: "नेरूळ", region: "mumbai", phone: "9004608063" },
  { en: "Vashi", mr: "वाशी", region: "mumbai", phone: "8956326219" },
  { en: "Chembur", mr: "चेंबूर", region: "mumbai", phone: "8668912845" },
  { en: "Thane", mr: "ठाणे", region: "mumbai", phone: "7744003031" },
  { en: "Dombivli", mr: "डोंबिवली", region: "mumbai", phone: "8420060099" },
  { en: "Kalyan", mr: "कल्याण", region: "mumbai", phone: "7721901999" },
  { en: "Ulhasnagar-3", mr: "उल्हासनगर-३", region: "mumbai", phone: "7798337475" },
  { en: "Kandivali", mr: "कांदिवली", region: "mumbai", phone: "7620718775" },
  { en: "Mira Road", mr: "मिरारोड", region: "mumbai", phone: "9168921919" },
  { en: "Vasai", mr: "वसई", region: "mumbai", phone: "9970134296" },
  { en: "Andheri", mr: "अंधेरी", region: "mumbai", phone: "7744009098" },
  { en: "Dadar", mr: "दादर", region: "mumbai", phone: "8591990929" },
  { en: "Powai", mr: "पवई", region: "mumbai", phone: "9167689346" },
  { en: "Boisar", mr: "बोईसर", region: "mumbai", phone: "911291990", verify: true },
  { en: "Girgaon", mr: "गिरगाव", region: "mumbai", phone: "99923158535", verify: true },
  { en: "Bhosari", mr: "भोसरी", region: "pune", phone: "9975702020" },
  { en: "Hadapsar", mr: "हडपसर", region: "pune", phone: "9075656690" },
  { en: "Dhankawadi", mr: "धनकवडी", region: "pune", phone: "9373571640" },
  { en: "Somwar Peth", mr: "सोमवार पेठ", region: "pune", phone: "7071905905" },
  { en: "Kothrud", mr: "कोथरूड", region: "pune", phone: "8766935243" },
  { en: "Dhayari", mr: "धायरी", region: "pune", phone: "7219824499" },
  { en: "Sane Chowk, Chinchwad", mr: "सानेचौक चिंचवड", region: "pune", phone: "7030125857" },
  { en: "Chakan", mr: "चाकण", region: "pune", phone: "8767433255" },
  { en: "Aundh", mr: "औंध", region: "pune", phone: "7447445449" },
  { en: "Chandan Nagar, Kharadi", mr: "चंदननगर खराडी", region: "pune", phone: "9657616362" },
  { en: "Kudal", mr: "कुडाळ", region: "other", phone: "9504959909" },
  { en: "Belgaum", mr: "बेळगाव", region: "other", phone: "7719997475" },
  { en: "Amravati", mr: "अमरावती", region: "other", phone: "9922295156" },
  { en: "Chh. Sambhajinagar", mr: "छ. संभाजीनगर", region: "other", phone: "9325105938" },
  { en: "Ichalkaranji", mr: "इचलकरंजी", region: "other", phone: "9657194775" },
  { en: "Ahilyanagar", mr: "अहिल्यानगर", region: "other", phone: "9172194775" },
  { en: "Malegaon", mr: "मालेगाव", region: "other", phone: "7720847475" },
  { en: "Nanded", mr: "नांदेड", region: "other", phone: "8956420909" },
  { en: "Jule Solapur", mr: "जुळे सोलापूर", region: "other", phone: "9156932735" },
];

export const formatPhone = (p: string) =>
  p.length === 10 ? `${p.slice(0, 5)} ${p.slice(5)}` : p;
