---
title: "Designing Poisson Integrators through Machine Learning"
authors:
  - me
  - D. Martín de Diego
  - J. Cortés
date: "2024-01-01T00:00:00Z"
publication_types: ["paper-conference"]
publication:
  name: "IFAC-PapersOnLine"
  volume: "58"
  issue: "6"
  pages: "31–35"
featured: false
links:
- type: preprint
  label: arXiv
  url: https://arxiv.org/abs/2403.20139
- type: doi
  label: Proceedings
  url: https://doi.org/10.1016/j.ifacol.2024.08.252

# Abstract source: https://arxiv.org/abs/2403.20139
abstract: |-
  This paper presents a general method to construct Poisson integrators, i.e., integrators that
  preserve the underlying Poisson geometry. We assume the Poisson manifold is integrable, meaning
  there is a known local symplectic groupoid for which the Poisson manifold serves as the set of
  units. Our constructions build upon the correspondence between Poisson diffeomorphisms and
  Lagrangian bisections, which allows us to reformulate the design of Poisson integrators as solutions
  to a certain PDE (Hamilton-Jacobi). The main novelty of this work is to understand the
  Hamilton-Jacobi PDE as an optimization problem, whose solution can be easily approximated using
  machine learning related techniques. This research direction aligns with the current trend in the
  PDE and machine learning communities, as initiated by Physics- Informed Neural Networks, advocating
  for designs that combine both physical modeling (the Hamilton-Jacobi PDE) and data.
---
