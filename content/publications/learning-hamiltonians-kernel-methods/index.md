---
title: "Learning Hamiltonians from Trajectory Data with Kernel Methods"
authors:
  - J. Hu
  - D. Martín de Diego
  - J.-P. Ortega
  - me
date: "2026-10-13T00:00:00Z"
publication_types: ["manuscript"]
publication:
  name: "arXiv preprint arXiv:2610.17835"
summary: "Submitted to Foundations of Computational Mathematics."
featured: true
math: true
links:
  - type: preprint
    label: arXiv
    url: https://arxiv.org/abs/2610.17835

# Abstract source: https://arxiv.org/abs/2610.17835
abstract: |-
  We study the recovery of a Hamiltonian from discrete trajectory observations using
  structure-preserving kernel methods. When exact-flow data are fitted through a symplectic one-step
  scheme, the fixed-step learning target is generally not the physical Hamiltonian itself, but a
  scheme-dependent inverse modified Hamiltonian. For the implicit midpoint and $p$-implicit
  symplectic Euler methods, we establish the existence of analytic inverse targets and show that
  their discrepancies from the physical Hamiltonian are second and first order in the observation
  step, respectively. Within an RKHS framework, we derive finite-sample reconstruction bounds for
  random trajectories, allowing dependence among observations from the same trajectory, and separate
  the error into estimation, approximation, and integrator-induced components. We further establish
  stability under noisy trajectory observations and develop a multistride Richardson correction that
  systematically raises the order of the integrator-induced error without requiring additional
  trajectories. Numerical experiments confirm the predicted scheme-dependent orders, the effect of
  Richardson correction, and the applicability of the method across several Hamiltonian systems.
---
