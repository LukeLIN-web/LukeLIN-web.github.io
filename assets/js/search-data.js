// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "See my Google Scholar for the full list. * denotes equal contribution. Publications are sorted by category in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Selected research projects. Each page links to the paper, code, website, and released artifacts.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub profile and the repositories behind my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-a-very-big-video-reasoning-suite-is-accepted-by-icml-2026-paper-a-very-big-video-reasoning-suite-co-first-author-dataset-huggingface-code-github",
          title: 'A Very Big Video Reasoning Suite is accepted by ICML 2026! Paper:A Very...',
          description: "",
          section: "News",},{id: "news-releasing-phyground-first-author-a-benchmark-for-the-physical-plausibility-of-image-to-video-generation-250-physics-aware-prompts-8-ti2v-models-scored-on-3-general-13-physical-law-rubrics-plus-a-human-aligned-judge-model-paper-arxiv-dataset-huggingface-code-github",
          title: '🎉 Releasing PhyGround (first author) — a benchmark for the physical plausibility of...',
          description: "",
          section: "News",},{id: "news-joined-futurewei-technologies-inc-as-a-research-intern-generative-ai-amp-amp-world-modeling-full-time",
          title: 'Joined Futurewei Technologies, Inc. as a Research Intern, Generative AI &amp;amp;amp; World Modeling...',
          description: "",
          section: "News",},{id: "projects-phyground",
          title: 'PhyGround',
          description: "A criteria-grounded benchmark for physical reasoning in generative world models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_phyground/";
            },},{id: "projects-vbvr",
          title: 'VBVR',
          description: "A Very Big Video Reasoning Suite — benchmarking reasoning in video models at scale. ICML 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_vbvr/";
            },},{id: "projects-vote",
          title: 'VOTE',
          description: "Efficient fine-tuning and parallel action prediction for Vision-Language-Action models. ICANN 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_vote/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%6E.%6A%75%79@%6E%6F%72%74%68%65%61%73%74%65%72%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/LukeLIN-web", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/juyi-lin-66b526206", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WMoctgAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/juyi_lin", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
