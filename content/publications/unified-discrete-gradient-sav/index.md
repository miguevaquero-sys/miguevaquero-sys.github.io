---
title: "A Unified Discrete Gradient-SAV Framework for Structure-Preserving Integration"
authors:
  - E. Celledoni
  - D. Martín de Diego
  - B. Owren
  - me
date: "2026-07-30T00:00:00Z"
publication_types: ["manuscript"]
publication:
  name: "arXiv preprint arXiv:2607.27795"
summary: "Preprint. To be submitted to SIAM Journal on Scientific Computing."
featured: false
links:
  - type: preprint
    label: arXiv
    url: https://arxiv.org/abs/2607.27795

# Abstract source: https://arxiv.org/abs/2607.27795
abstract: |-
  We present a framework combining discrete gradient (DG) methods with the Scalar Auxiliary Variable
  (SAV) approach to construct structure-preserving integrators for dissipative and conservative
  systems. The key observation is that SAV quadratization lifts the dynamics to an extended state
  space on which the modified energy has an exact discrete-gradient identity. This viewpoint yields
  three integrators with different accuracy and cost profiles: a first-order semi-implicit Forward
  Euler scheme, a second-order self-adjoint Midpoint scheme, and a second-order Predictive scheme with
  reduced implicitness. The construction extends to almost-Poisson systems and preserves selected
  Casimir invariants under an enforceable discrete condition. Numerical experiments cover the
  Allen--Cahn equation, an Ohta--Kawasaki-type nonlocal gradient flow, a double-well Hamiltonian
  oscillator, and a Poisson system with a nonlinear cubic Casimir.
---
