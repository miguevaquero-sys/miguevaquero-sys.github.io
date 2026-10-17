---
title: "Symmetry Preservation in Hamiltonian Systems: Simulation and Learning"
authors:
  - me
  - J. Cortés
  - D. Martín de Diego
date: "2024-01-01T00:00:00Z"
publication_types: ["article-journal"]
publication:
  name: "Journal of Nonlinear Science"
  volume: "34"
  issue: "6"
  pages: "115"
featured: false
links:
- type: preprint
  label: arXiv
  url: https://arxiv.org/abs/2308.16331
- type: doi
  label: Journal
  url: https://doi.org/10.1007/s00332-024-10089-5

# Abstract source: https://arxiv.org/abs/2308.16331
abstract: |-
  This work presents a general geometric framework for simulating and learning the dynamics of
  Hamiltonian systems that are invariant under a Lie group of transformations. This means that a group
  of symmetries is known to act on the system respecting its dynamics and, as a consequence, Noether's
  Theorem, conserved quantities are observed. We propose to simulate and learn the mappings of
  interest through the construction of $G$-invariant Lagrangian submanifolds, which are pivotal
  objects in symplectic geometry. A notable property of our constructions is that the
  simulated/learned dynamics also preserves the same conserved quantities as the original system,
  resulting in a more faithful surrogate of the original dynamics than non-symmetry aware methods, and
  in a more accurate predictor of non-observed trajectories. Furthermore, our setting is able to
  simulate/learn not only Hamiltonian flows, but any Lie group-equivariant symplectic transformation.
  Our designs leverage pivotal techniques and concepts in symplectic geometry and geometric mechanics:
  reduction theory, Noether's Theorem, Lagrangian submanifolds, momentum mappings, and coisotropic
  reduction among others. We also present methods to learn Poisson transformations while preserving
  the underlying geometry and how to endow non-geometric integrators with geometric properties. Thus,
  this work presents a novel attempt to harness the power of symplectic and Poisson geometry towards
  simulating and learning problems.
math: true
---
