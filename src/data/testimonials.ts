/**
 * Verified client testimonials — source: Khamsat
 * https://khamsat.com/user/afathyredwan/reviews
 *
 * All review texts are preserved exactly as written by the clients (Arabic).
 * Ratings verified as 5 stars for each review on the official reviews page.
 */

export interface Testimonial {
  id: string;
  client: string;
  /** Displayed name in Arabic script, when provided as such by the client */
  clientAr?: string;
  project: string;
  projectAr: string;
  /** Original, unedited review text */
  review: string;
  rating: 5;
  url: string;
}

export const KHAMSAT_REVIEWS_URL = "https://khamsat.com/user/afathyredwan/reviews";

export const testimonials: Testimonial[] = [
  {
    id: "1154373",
    client: "Abd Elghaffar A.",
    project: "Portfolio Website Design",
    projectAr: "تصميم موقع بورتفوليو",
    review:
      "الخدمة كانت فوق الممتازة والتسليم كان قبل الوقت المتفق عليه بشكل مرتب ومنظم و فعلا شخص شاطر وامين جدا ويستحق الثقة بدون مبالغة وعن تجربة.",
    rating: 5,
    url: "https://khamsat.com/user/afathyredwan/reviews/1154373",
  },
  {
    id: "1125149",
    client: "Mounir A.",
    project: "Landing Page Design",
    projectAr: "تصميم صفحة هبوط",
    review: "ممتاز",
    rating: 5,
    url: "https://khamsat.com/user/afathyredwan/reviews/1125149",
  },
  {
    id: "1123888",
    client: "Fadi A.",
    project: "Landing Page Design",
    projectAr: "تصميم صفحة هبوط",
    review:
      "الخدمة كانت ممتازة جدًا. جودة العمل عالية وواضح الاهتمام بالتفاصيل. التواصل كان سريعًا وواضحًا، وكان هناك متابعة مستمرة حتى الانتهاء من الخدمة. كما أن التسليم كان في الوقت المحدد دون تأخير. تجربة رائعة وأنصح بالتعامل معه مرة أخرى.",
    rating: 5,
    url: "https://khamsat.com/user/afathyredwan/reviews/1123888",
  },
  {
    id: "1121628",
    client: "ريمة س.",
    project: "Landing Page Design",
    projectAr: "تصميم صفحة هبوط",
    review: "رائع، مجهود يُشكر عليه",
    rating: 5,
    url: "https://khamsat.com/user/afathyredwan/reviews/1121628",
  },
];
