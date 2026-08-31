---
layout: page
title: PhyGround
description: A criteria-grounded benchmark for physical reasoning in generative world models.
img: assets/img/publication_preview/phyground_teaser.png
importance: 1
category: research
github: https://github.com/NU-World-Model-Embodied-AI/PhyGround
---

**Physical Reasoning Benchmark for Generative World Models** &middot; Northeastern University &middot; Jan 2026 – May 2026

[Paper](https://arxiv.org/abs/2605.10806) &middot;
[Code](https://github.com/NU-World-Model-Embodied-AI/PhyGround) &middot;
[Website](https://phyground.github.io/) &middot;
[Dataset](https://huggingface.co/datasets/NU-World-Model-Embodied-AI/phyground) &middot;
[PhyJudge-9B](https://huggingface.co/NU-World-Model-Embodied-AI/phyjudge-9B)

- Proposed and built **PhyGround**, a criteria-grounded benchmark for physical reasoning in generative video world models, spanning a taxonomy of **13 physical laws** (solid-body mechanics, fluid dynamics, optics) and evaluating 8 text/image-to-video models over 250 physics-aware prompts.
- Led a large-scale human annotation study with **459 annotators**, **5,796 complete annotations**, and **37.4K+ fine-grained labels**, reaching split-half ranking correlation of Spearman's $$\rho > 0.90$$.
- Trained and released **PhyJudge-9B**, an open physics-specialized VLM judge that achieves **3.3% aggregate relative bias**, compared to 16.6% for Gemini-3.1-Pro.
