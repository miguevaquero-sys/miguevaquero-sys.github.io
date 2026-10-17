---
title: "Data-Driven Synthesis of Optimization-Based Controllers for Regulation of Unknown Linear Systems"
authors:
  - G. Bianchin
  - me
  - J. Cortés
  - E. Dall’Anese
date: "2021-01-01T00:00:00Z"
publication_types: ["paper-conference"]
publication:
  name: "IEEE Conference on Decision and Control"
featured: false
links:
- type: preprint
  label: arXiv
  url: https://arxiv.org/abs/2103.16067
- type: doi
  label: Proceedings
  url: https://doi.org/10.1109/CDC45484.2021.9682795

# Abstract source: https://arxiv.org/abs/2103.16067
abstract: |-
  This paper proposes a data-driven framework to solve time-varying optimization problems associated
  with unknown linear dynamical systems. Making online control decisions to regulate a dynamical
  system to the solution of an optimization problem is a central goal in many modern engineering
  applications. Yet, the available methods critically rely on a precise knowledge of the system
  dynamics, thus mandating a preliminary system identification phase before a controller can be
  designed. In this work, we leverage results from behavioral theory to show that the steady-state
  transfer function of a linear system can be computed from data samples without any knowledge or
  estimation of the system model. We then use this data-driven representation to design a controller,
  inspired by a gradient-descent optimization method, that regulates the system to the solution of a
  convex optimization problem, without requiring any knowledge of the time-varying disturbances
  affecting the model equation. Results are tailored to cost functions satisfy the Polyak-Łojasiewicz
  inequality.
---
