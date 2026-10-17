---
title: "Online Stochastic Optimization for Unknown Linear Systems: Data-Driven Synthesis and Controller Analysis"
authors:
  - G. Bianchin
  - me
  - J. Cortés
  - E. Dall’Anese
date: "2023-01-01T00:00:00Z"
publication_types: ["article-journal"]
publication:
  name: "IEEE Transactions on Automatic Control"
  volume: "69"
  issue: "7"
  pages: "4411–4426"
featured: false
links:
- type: preprint
  label: arXiv
  url: https://arxiv.org/abs/2108.13040
- type: doi
  label: Journal
  url: https://doi.org/10.1109/TAC.2023.3323581

# Abstract source: https://arxiv.org/abs/2108.13040
abstract: |-
  This paper proposes a data-driven control framework to regulate an unknown, stochastic linear
  dynamical system to the solution of a (stochastic) convex optimization problem. Despite the
  centrality of this problem, most of the available methods critically rely on a precise knowledge of
  the system dynamics (thus requiring off-line system identification and model refinement). To this
  aim, in this paper we first show that the steady-state transfer function of a linear system can be
  computed directly from control experiments, bypassing explicit model identification. Then, we
  leverage the estimated transfer function to design a controller -- which is inspired by stochastic
  gradient descent methods -- that regulates the system to the solution of the prescribed optimization
  problem. A distinguishing feature of our methods is that they do not require any knowledge of the
  system dynamics, disturbance terms, or their distributions. Our technical analysis combines concepts
  and tools from behavioral system theory, stochastic optimization with decision-dependent
  distributions, and stability analysis. We illustrate the applicability of the framework on a case
  study for mobility-on-demand ride service scheduling in Manhattan, NY.
---
