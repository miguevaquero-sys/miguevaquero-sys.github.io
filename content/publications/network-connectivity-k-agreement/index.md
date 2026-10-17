---
title: "The Role of Network Connectivity in Distributed k-Agreement Protocols"
authors:
  - G. Bianchin
  - me
  - J. Cortés
  - E. Dall’Anese
date: "2026-01-01T00:00:00Z"
publication_types: ["article-journal"]
publication:
  name: "Automatica"
  volume: "185"
  pages: "112753"
featured: false
links:
- type: doi
  label: Journal
  url: https://doi.org/10.1016/j.automatica.2025.112753

# Abstract source: https://www.sciencedirect.com/science/article/abs/pii/S000510982500651X
abstract: |-
  Given a network of agents, we say that the agents achieve a k-agreement when their state variables
  converge to a point that corresponds to the projection of the agents’ states onto a k-dimensional
  linear subspace. The k-agreement problem generalizes the classical consensus problem; unlike in
  consensus, where the agents’ states must asymptotically coincide, in k-agreement the agents reach an
  agreement in a generalized sense (within a linear subspace, where the states do not necessarily
  coincide). In this paper, we investigate which interaction topologies enable a network of agents to
  reach an agreement on a prescribed k-dimensional subspace through local coordination algorithms. We
  show that achieving k-agreement requires communication over highly connected graphs; specifically,
  the number of edges in the interaction graph must grow linearly with the dimension k of the
  agreement subspace. Our characterization reveals that the presence of cycles in the communication
  graph (particularly, independent families of cycles) constitutes the fundamental structural feature
  enabling the agents to achieve k-agreement. We also investigate the use of common graph topologies,
  such as path and circulant graphs, for k-agreement, deriving insights into the relationship between
  the subspace dimension k and the required network connectivity. The effectiveness of the proposed
  framework is demonstrated through simulations in robotic formation control problems.
---
