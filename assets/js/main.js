const translations = {
  ar: {
    skip:"انتقل إلى المحتوى",navAbout:"عني",navSkills:"المهارات",navProjects:"المشاريع",navServices:"الخدمات",navContact:"التواصل",
    eyebrow:"مطور واجهات وأنظمة ألعاب",heroTitle:"أصنع واجهات وتجارب رقمية <span class='accent'>تعمل بوضوح.</span>",
    heroText:"أنا الأيهم العاصمي، مطور من عُمان أهتم ببناء واجهات ويب تفاعلية وأنظمة لسيرفرات MTA باستخدام HTML وCSS وJavaScript وLua.",
    viewProjects:"استعرض المشاريع",contactMe:"تواصل معي",aboutTitle:"نبذة عني",
    aboutText:"أحوّل فكرة النظام إلى تجربة واضحة: من تنظيم الشاشات وتدفق الاستخدام إلى ربط الواجهة بمنطق اللعب. أعمل على مشاريع رول بلاي وأنظمة تفاعلية للويب، مع اهتمام بالتفاصيل وقابلية التطوير.",
    skillsTitle:"المهارات",skillWeb:"بناء صفحات متجاوبة، تنسيق واجهات داكنة وتنظيم مكونات الاستخدام.",skillJs:"إضافة التفاعل، إدارة حالة الواجهة وربط العناصر بسلوك واضح.",skillLua:"برمجة أنظمة اللعب وواجهات مرتبطة بموارد MTA.",
    projectsTitle:"مشاريع MTA",projectsIntro:"نماذج من الأفكار والأنظمة التي أعمل عليها؛ الروابط والعروض التفصيلية تُضاف عند نشرها.",
    projectDark:"تصميم أنظمة رول بلاي تشمل تفاعل اللاعب والواجهات الإدارية وتجربة اللعب.",projectPrime:"واجهات وأنظمة لخادم رول بلاي، مع تركيز على HUD والبنك والتفاعل.",projectLast:"تصور لتجربة نجاة يتضمن المخزون والمهام وعناصر البقاء.",
    servicesTitle:"ما الذي أقدمه؟",serviceHtml:"تصميم وتنفيذ واجهات صفحات ولوحات تحكم متجاوبة.",serviceLua:"تطوير موارد وأنظمة لعب مخصصة وفق متطلبات السيرفر.",serviceJs:"برمجة سلوك الواجهة والتفاعلات وربط مكوناتها.",
    contactTitle:"لنبنِ شيئًا معًا",contactText:"لديك فكرة لواجهة أو نظام MTA؟ تواصل معي عبر الروابط التالية.",backTop:"العودة للأعلى ↑"
  },
  en: {
    skip:"Skip to content",navAbout:"About",navSkills:"Skills",navProjects:"Projects",navServices:"Services",navContact:"Contact",
    eyebrow:"Web interface & game systems developer",heroTitle:"I build digital experiences <span class='accent'>that feel clear and useful.</span>",
    heroText:"I'm Alayham Al-asmi, a developer from Oman building interactive web interfaces and MTA server systems with HTML, CSS, JavaScript, and Lua.",
    viewProjects:"Explore projects",contactMe:"Get in touch",aboutTitle:"About me",
    aboutText:"I turn a system idea into a clear experience, from screen layout and user flows to gameplay integration. I work on roleplay projects and interactive web systems, with attention to detail and room to grow.",
    skillsTitle:"Skills",skillWeb:"Responsive pages, dark interfaces, and well-organized UI components.",skillJs:"Interactions, interface state, and purposeful behavior.",skillLua:"Gameplay systems and interfaces connected to MTA resources.",
    projectsTitle:"MTA projects",projectsIntro:"Examples of concepts and systems I work on. Detailed demos and links will be added when published.",
    projectDark:"Roleplay systems covering player interaction, admin interfaces, and gameplay.",projectPrime:"Interfaces and systems for a roleplay server, with a focus on HUD, banking, and interaction.",projectLast:"A survival experience concept featuring inventory, missions, and survival mechanics.",
    servicesTitle:"What I offer",serviceHtml:"Design and implementation of responsive pages and dashboards.",serviceLua:"Custom MTA resources and gameplay systems tailored to server requirements.",serviceJs:"Interface behavior, interactions, and component integration.",
    contactTitle:"Let's build something",contactText:"Have an idea for an interface or MTA system? Reach out through the links below.",backTop:"Back to top ↑"
  }
};
function setLanguage(lang) {
  const chosen = lang === "en" ? "en" : "ar";
  document.documentElement.lang = chosen;
  document.documentElement.dir = chosen === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (key === "heroTitle") el.innerHTML = translations[chosen][key];
    else el.textContent = translations[chosen][key];
  });
  const toggle = document.querySelector("#lang-toggle");
  toggle.textContent = chosen === "ar" ? "EN" : "AR";
  toggle.setAttribute("aria-label",chosen === "ar" ? "Switch to English" : "التبديل إلى العربية");
  try { localStorage.setItem("portfolio-language",chosen); } catch (_) {}
}
let savedLanguage = "ar";
try { savedLanguage = localStorage.getItem("portfolio-language") || "ar"; } catch (_) {}
setLanguage(savedLanguage);
document.querySelector("#lang-toggle").addEventListener("click",()=>setLanguage(document.documentElement.lang === "ar" ? "en" : "ar"));
document.querySelector("#year").textContent = new Date().getFullYear();
