import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "jeddah-construction",
    title: "Jeddah Construction Company",
    titleAr: "شركة جدة للإنشاءات",
    subtitle: "SEO-Optimized Corporate Platform",
    subtitleAr: "منصة مؤسسية محسنة لمحركات البحث",
    description:
      "A comprehensive corporate web presence designed and engineered from the ground up to establish digital credibility and capture high-intent commercial search traffic.",
    descriptionAr:
      "حضور رقمي متكامل للشركة صُمم وهُندس من الأساس لبناء المصداقية المؤسسية واستقطاب الزوار التجاريين عبر محركات البحث.",
    category: "SEO",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Technical SEO", "Schema.org"],
    featured: true,
    status: "published",
    caseStudy: {
      problem:
        "The company had no established digital footprint and was virtually invisible in competitive regional search queries for contracting and civil engineering services in the Jeddah area.",
      problemAr:
        "افتقرت الشركة إلى بصمة رقمية وكان ظهورها شبه منعدم في استعلامات البحث الإقليمية التنافسية لخدمات المقاولات والهندسة في منطقة جدة.",
      objective:
        "Design a modern corporate website with high performance, semantic structure, and intentional on-page SEO targeting commercial service queries.",
      objectiveAr:
        "تصميم وتطوير موقع مؤسسي عصري فائق السرعة، ببنية دلالية وسيو داخلي يستهدف استفسارات الخدمات التجارية.",
      contribution:
        "Full end-to-end design, responsive component engineering, semantic content hierarchy, structured data implementation, and Core Web Vitals optimization.",
      contributionAr:
        "التصميم والتطوير الكامل، معمارية المكونات المتجاوبة، البنية الهرمية للمحتوى، إعداد البيانات المنظمة Schema، وتحسين مؤشرات أداء الويب الحيوية.",
      solution: [
        "Architected clean, semantic HTML5 structure with strict heading hierarchies.",
        "Authored custom JSON-LD schema markup (LocalBusiness, Organization, Service).",
        "Optimized asset pipelines achieving sub-second Largest Contentful Paint (LCP).",
        "Engineered bilingual layout ready for high-converting regional Arabic inquiries.",
      ],
      solutionAr: [
        "بناء هيكل دلالي نظيف بتقنيات HTML5 مع تسلسل هرمي صارم للعناوين.",
        "تضمين بيانات منظمة مخصصة بتقنية JSON-LD للأنشطة المحلية والمؤسسية.",
        "تحسين تحميل الموارد لتحقيق سرعة تحميل قصوى (LCP أقل من ثانية).",
        "هندسة واجهة ثنائية اللغة مهيأة لتحويل استفسارات العملاء المحتملين.",
      ],
      result:
        "Achieved first-page search positions for targeted local contracting keywords, significantly boosting commercial phone and form inquiries.",
      resultAr:
        "تحقيق مراتب متقدمة في الصفحة الأولى لكلمات البحث المستهدفة في المقاولات محلياً، مما ضاعف طلبات التواصل والاستفسارات التجارية.",
      verificationNote:
        "Measurable search ranking evidence, specific keywords, and benchmark dates are being documented for client confidentiality compliance.",
      verificationNoteAr:
        "يتم توثيق بيانات الترتيب والكلمات الدلالية المحددة مع مراعاة اتفاقيات سرية بيانات العميل.",
    },
  },
  {
    id: "nebras-academy",
    title: "Nebras Academy",
    titleAr: "أكاديمية نبراس لتعليم القرآن",
    subtitle: "Interactive Quran Learning Platform",
    subtitleAr: "منصة تفاعلية لتعليم القرآن والعلوم الشرعية",
    description:
      "A dedicated digital educational platform engineered to present structured study tracks, teacher rosters, and interactive registration with seamless Arabic RTL UX.",
    descriptionAr:
      "منصة تعليمية إلكترونية متخصصة صُممت لعرض المسارات التعليمية وقوائم المعلمين ونظام التسجيل بتجربة مستخدم عربية RTL سلسة.",
    category: "Education",
    technologies: ["JavaScript", "Modern CSS", "HTML5", "RTL Architecture", "Responsive UI"],
    featured: true,
    status: "published",
    githubUrl: "https://github.com/abdelrahmanfathyradwan/nebrasAcademy",
    caseStudy: {
      problem:
        "The educational academy relied on fragmented messaging apps to introduce programs and register students, leading to dropped enrollments and repetitive staff overhead.",
      problemAr:
        "كانت الأكاديمية تعتمد على تطبيقات المراسلة غير المنظمة للتعريف ببرامجها واستقبال الطلاب، مما أدى إلى ضياع طلبات التسجيل وإرهاق المشرفين.",
      objective:
        "Engineer an accessible, fast-loading, mobile-first educational hub with clear curricula, pricing, and straightforward enrollment flows tailored for Arabic learners.",
      objectiveAr:
        "هندسة منصة تعليمية سريعة وسهلة التصفح من الهاتف المحمول، توضح المناهج ومسارات التعلم ونماذج الالتحاق المباشرة للطلاب وأولياء الأمور.",
      contribution:
        "Sole frontend developer. Designed user journey, built responsive modular components, crafted Arabic typography styling, and handled client-side validation.",
      contributionAr:
        "المطور الوحيد للواجهة الأمامية. تخطيط رحلة المستخدم، بناء المكونات المتجاوبة، ضبط الخطوط والأنماط العربية، والتحقق من صحة المدخلات برمجياً.",
      solution: [
        "Designed clean cards and curriculum accordions for multiple age and skill levels.",
        "Ensured instant loading on 3G mobile devices common among prospective students.",
        "Delivered native right-to-left layout alignment with zero horizontal layout shift.",
        "Integrated dynamic inquiry actions routing directly to admission channels.",
      ],
      solutionAr: [
        "تصميم بطاقات مسارات دراسية وجداول تعليمية واضحة لجميع المستويات العمرية.",
        "تحسين سرعة التحميل لتعمل بسلاسة فائقة على شبكات الهواتف المحمولة.",
        "ضمان محاذاة دقيقة وتجاوب كامل باتجاه اليمين إلى اليسار دون أي إزاحة بصرية.",
        "ربط نماذج الاستفسار المباشرة بقنوات الاستقبال والتسجيل في الأكاديمية.",
      ],
      result:
        "Established a polished online identity, increased verified student inquiries, and streamlined registration processes.",
      resultAr:
        "تأسيس هوية رقمية موثوقة للأكاديمية وزيادة معدل تسجيل الطلاب الجدد مع تسهيل إدارة الطلبات.",
    },
  },
  {
    id: "hr-dashboard",
    title: "HR Management System",
    titleAr: "لوحة تحكم إدارة الموارد البشرية",
    subtitle: "Enterprise Personnel & Workflow Management",
    subtitleAr: "نظام مؤسسي لإدارة شؤون الموظفين وسير العمل",
    description:
      "A high-density administrative dashboard built with React and TypeScript, providing HR departments with employee tracking, leave management, and real-time operational views.",
    descriptionAr:
      "لوحة تحكم إدارية تفاعلية مبنية بـ React وTypeScript لتنظيم بيانات الموظفين، متابعة الإجازات، وعرض مؤشرات التشغيل بكفاءة وسلاسة.",
    category: "Dashboards",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Component Architecture"],
    featured: true,
    status: "published",
    githubUrl: "https://github.com/abdelrahmanfathyradwan/buy2-hr-frontend",
    caseStudy: {
      problem:
        "Internal HR operations struggled with scattered spreadsheets, prone to data entry conflicts, lacking role-based permission views, and requiring manual status tracking.",
      problemAr:
        "كانت إدارة الموارد البشرية تواجه بطئاً بسبب تشتت السجلات الورقية والجداول التقليدية، مع صعوبة التتبع اللحظي ومتابعة حالات الموظفين والإجازات.",
      objective:
        "Deliver a modular, strictly-typed single-page application dashboard with intuitive information architecture, search/filtering, and responsive data tables.",
      objectiveAr:
        "تطوير تطبيق ويب أحادي الصفحة (SPA) مبني بأنماط صارمة من TypeScript، يقدم هيكلية معلوماتية واضحة، مع فرز وبحث متقدم وجداول بيانات متجاوبة.",
      contribution:
        "Frontend architecture, type definitions, component library implementation, state management slices, and responsive viewport adaptations.",
      contributionAr:
        "هندسة الواجهة الأمامية، تحديد أنواع TypeScript، بناء مكتبة المكونات التفاعلية، تنظيم الحالة عبر Redux، وضمان التجاوب على مختلف مقاسات الشاشات.",
      solution: [
        "Built type-safe component design patterns avoiding runtime type errors.",
        "Implemented structured state management for personnel records, filters, and modals.",
        "Engineered responsive data grids with pagination, sorting, and status chips.",
        "Followed high-contrast accessibility standards for long-session office usage.",
      ],
      solutionAr: [
        "اعتماد أنماط برمجية آمنة في TypeScript لحماية التطبيق من أخطاء وقت التشغيل.",
        "تنظيم إدارة الحالة بكفاءة لسجلات الموظفين والفلاتر ونوافذ الحوار التفاعلية.",
        "تصميم جداول بيانات مرنة تدعم الفرز والترقيم وحالات الموظفين المختلفة.",
        "مراعاة معايير سهولة الاستخدام والتباين البصري لجلسات العمل الطويلة.",
      ],
      result:
        "Delivered a modern, scalable frontend ready for production backend integration, reducing administrative navigation friction.",
      resultAr:
        "تسليم واجهة متطورة وقابلة للتوسع مهيأة للربط مع الأنظمة الخلفية، مما قلل وقت وجهد المعاملات الإدارية.",
    },
  },
  {
    id: "smart-opportunity-radar",
    title: "Smart Opportunity Radar",
    titleAr: "رادار الفرص الذكي (أتمتة)",
    subtitle: "Autonomous Job & Client Lead Aggregator",
    subtitleAr: "نظام آلي لرصد واقتناص فرص المشاريع البرمجية",
    description:
      "An automated workflow engine built using n8n that polls freelance platforms, parses client requirements with AI heuristics, and alerts to high-match opportunities instantly.",
    descriptionAr:
      "سير عمل أوتوماتيكي متطور مبني عبر n8n يقوم بمسح منصات العمل الحر، تحليل متطلبات العملاء ذكياً، وإرسال تنبيهات فورية للمشاريع المناسبة.",
    category: "Automation",
    technologies: ["n8n", "Node.js", "Webhooks", "REST APIs", "Automation Architecture"],
    featured: false,
    status: "published",
    caseStudy: {
      problem:
        "High-value client proposals on competitive freelance platforms require sub-10-minute response times, which is impossible through manual browser refreshing.",
      problemAr:
        "المشاريع ذات القيمة العالية على منصات العمل الحر تتطلب استجابة سريعة جداً تقل عن 10 دقائق، وهو أمر مستحيل عبر المتابعة اليدوية للمتصفح.",
      objective:
        "Build a resilient automated system that monitors target categories 24/7, filters noise, and delivers structured instant notifications with pre-parsed project scope.",
      objectiveAr:
        "بناء نظام مراقبة آلي يعمل على مدار الساعة، يفلتر المشاريع غير المناسبة، ويرسل إشعارات فورية متضمنة ملخص نطاق العمل التقني.",
      contribution:
        "Architected n8n workflow nodes, webhook relays, payload normalization, error-handling retries, and notification bot integrations.",
      contributionAr:
        "هندسة عقد سير العمل في n8n، معالجة وتوحيد هياكل البيانات القادمة من الواجهات البرمجية، ومعالجة الأخطاء والربط مع بوتات الإشعارات.",
      solution: [
        "Configured polling triggers with rate-limit buffers to ensure reliable uptime.",
        "Built regex and heuristic keyword scoring to filter low-quality leads.",
        "Formatted real-time instant alerts with actionable direct project links.",
      ],
      solutionAr: [
        "إعداد فترات استعلام متوازنة لتفادي حظر الطلبات مع الحفاظ على الاستمرارية.",
        "برمجة خوارزميات تصفية نصية لاستبعاد العروض غير المناسبة بدقة.",
        "تنسيق إشعارات سريعة ومباشرة تتضمن الروابط والمتطلبات الأساسية للعميل.",
      ],
      result:
        "Reduced response latency from hours to under 3 minutes, significantly improving proposal visibility and winning rate.",
      resultAr:
        "تقليص زمن الاستجابة للمشاريع الجديدة من ساعات إلى أقل من 3 دقائق، مما ضاعف فرص قبول العروض.",
    },
  },
  {
    id: "smartbook-system",
    title: "SmartBook — Appointment Booking",
    titleAr: "سمارت بوك — نظام الحجز والمواعيد",
    subtitle: "Interactive Scheduling & Service Booking",
    subtitleAr: "نظام جدولة المواعيد وحجز الخدمات التفاعلي",
    description:
      "A full-flow appointment booking web application featuring interactive calendar slot selection, service categorization, and client confirmation workflows.",
    descriptionAr:
      "تطبيق ويب متكامل لإدارة وحجز المواعيد يتيح للعملاء اختيار الأوقات المتاحة، استعراض الخدمات، وتأكيد الحجز بسلاسة وسرعة.",
    category: "Web Applications",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Date Fns", "State Management"],
    featured: false,
    status: "draft",
  },
  {
    id: "multi-payment-gateway",
    title: "Multi-Payment Gateway Integration",
    titleAr: "تكامل بوابات الدفع الإلكتروني المتعددة",
    subtitle: "Secure Checkout & Transaction Handling",
    subtitleAr: "بنية دفع إلكتروني آمنة ومتعددة القنوات",
    description:
      "Implementation of resilient checkout workflows supporting multiple regional and international payment providers with webhook verification and failover handling.",
    descriptionAr:
      "تطبيق وتكامل بوابات دفع إلكترونية متعددة تدعم الدفع المحلي والدولي مع التحقق عبر Webhooks ومعالجة حالات فشل الدفع بمرونة.",
    category: "E-commerce",
    technologies: ["JavaScript", "Node.js", "Payment APIs", "Webhooks", "Security Best Practices"],
    featured: false,
    status: "draft",
  },
  {
    id: "madarij-center",
    title: "Madarij Center Management",
    titleAr: "نظام إدارة مركز مدارج",
    subtitle: "Center Operations & Student Administration",
    subtitleAr: "نظام إدارة العمليات والأنشطة الطلابية لمركز مدارج",
    description:
      "An operations portal tailored for training centers, streamlining batch enrollment, attendance tracking, and student communication.",
    descriptionAr:
      "بوابة تشغيلية متخصصة للمراكز التدريبية، تهدف لتنظيم الدفعات الدراسية، تسجيل الحضور، وتسهيل التواصل مع المتدربين.",
    category: "Web Applications",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST Integration"],
    featured: false,
    status: "draft",
  },
  {
    id: "woocommerce-ecommerce-store",
    title: "Specialized E-commerce Store",
    titleAr: "متجر تجارة إلكترونية متخصص",
    subtitle: "Custom Product Presentation & Checkout",
    subtitleAr: "واجهة متجر إلكتروني مخصصة بتجربة شراء سريعة",
    description:
      "Tailored online shopping experience featuring custom catalog views, optimized checkout funnels, and mobile-friendly responsive navigation.",
    descriptionAr:
      "متجر إلكتروني مصمم خصيصاً لعرض المنتجات باحترافية مع تبسيط خطوات الدفع وتجاوب استثنائي على شاشات الهواتف الذكية.",
    category: "E-commerce",
    technologies: ["E-commerce Architecture", "Responsive UI", "Payment Integration", "SEO"],
    featured: false,
    status: "published",
  },
  {
    id: "wordpress-corporate-website",
    title: "Corporate Business Portal",
    titleAr: "موقع أعمال ومؤسسات احترافي",
    subtitle: "Brand Presence & High-Conversion Landing Pages",
    subtitleAr: "موقع مؤسسي وصفحات هبوط عالية التحويل",
    description:
      "A structured enterprise website created for commercial businesses, featuring custom brand styling, service showcases, and direct inquiry capture.",
    descriptionAr:
      "موقع تجاري متكامل للشركات والمؤسسات، يتميز بتصميم مخصص يعكس هوية العلامة التجارية ويحفز طلب الخدمات.",
    category: "Web Applications",
    technologies: ["Web Design", "Responsive Layouts", "SEO", "Speed Optimization"],
    featured: false,
    status: "published",
  },
];

