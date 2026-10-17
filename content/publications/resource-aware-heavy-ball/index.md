---
title: "Resource-Aware Discretization of Accelerated Optimization Flows: the Heavy-Ball Dynamics Case"
authors:
  - me
  - P. Mestres
  - J. Cortés
date: "2022-01-01T00:00:00Z"
publication_types: ["article-journal"]
publication:
  name: "IEEE Transactions on Automatic Control"
  volume: "68"
  issue: "4"
  pages: "2109–2124"
featured: true
links:
- type: preprint
  label: arXiv
  url: https://arxiv.org/abs/2009.09135
- type: doi
  label: Journal
  url: https://doi.org/10.1109/TAC.2022.3171307

# Abstract source: https://arxiv.org/abs/2009.09135
abstract: |-
  This paper tackles the problem of discretizing accelerated optimization flows while retaining their
  convergence properties. Inspired by the success of resource-aware control in developing efficient
  closed-loop feedback implementations on digital systems, we view the last sampled state of the
  system as the resource to be aware of. The resulting variable-stepsize discrete-time algorithms
  retain by design the desired decrease of the Lyapunov certificate of their continuous-time
  counterparts. Our algorithm design employs various concepts and techniques from resource-aware
  control that, in the present context, have interesting parallelisms with the discrete-time
  implementation of optimization algorithms. These include derivative- and performance-based triggers
  to monitor the evolution of the Lyapunov function as a way of determining the algorithm stepsize,
  exploiting sampled information to enhance algorithm performance, and employing high-order holds
  using more accurate integrators of the original dynamics. Throughout the paper, we illustrate our
  approach on a newly introduced continuous-time dynamics termed heavy-ball dynamics with displaced
  gradient, but the ideas proposed here have broad applicability to other globally asymptotically
  stable flows endowed with a Lyapunov certificate.
---
