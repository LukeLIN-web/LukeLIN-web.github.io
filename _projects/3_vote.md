---
layout: page
title: VOTE
description: Efficient fine-tuning and parallel action prediction for Vision-Language-Action models. ICANN 2026.
importance: 3
category: research
github: https://github.com/LukeLIN-web/VOTE
---

**Vision-Language-Action (VLA) Model** &middot; Northeastern University, funded by [EmbodyX](https://www.embodyx.io/) &middot; Jan 2025 – Sept 2025 &middot; *ICANN 2026*

[Paper](https://arxiv.org/abs/2507.05116) &middot;
[Code](https://github.com/LukeLIN-web/VOTE) &middot;
[Slides](https://docs.google.com/presentation/d/1zId-ygV3gObqHgm4gLdM4euGUpHomxwDZjJ7UcEmzVs/edit)

- Proposed **VOTE**, an efficient fine-tuning framework for parallel action prediction in VLA models, reducing computational overhead and accelerating inference. Adopted by Cisco and EmbodyX.
- Proposed an ensemble voting strategy for action sampling, improving performance and generalization across diverse tasks.
- Improved OpenVLA's average success rate by over 20% across four LIBERO task suites, surpassed the state-of-the-art VLA model by 7% average success rate on the SimplerEnv WidowX robot, and accelerated action generation throughput by **39&times;** on the NVIDIA Jetson Orin edge device.
- Pretrained Llama3.2-1B into a vision-language model and fine-tuned it with VOTE, surpassing the 7B OpenVLA's average success rate by 16% across four LIBERO task suites.
