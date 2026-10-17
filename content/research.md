---
title: Research
date: 2026-09-20
type: landing

sections:
  - block: markdown
    content:
      title: Research
      text: |-
        My research moves between rigorous mathematical analysis and applied computation. My doctoral work with Manuel de León focused on geometric mechanics, particularly Hamilton–Jacobi theory, symmetry, and Poisson and symplectic geometry. Postdoctoral appointments at ICMAT, with Daniel Peralta-Salas on dynamical systems and PDEs, and at UC San Diego, with Jorge Cortés on control and optimization, broadened that perspective. Today my program spans mathematical and numerical analysis, control and optimization, machine learning, statistics, and operations research. Across these areas I seek to identify the mathematical structure governing a problem, understand what it permits or precludes, and use that understanding to develop computational methods with meaningful guarantees.

        Three principles connect my work:

        - **Exploit mathematical structure.** Geometry, symmetry, and conservation laws guide my work on mechanical systems and numerical methods. In optimization, control, and distributed computation, stability certificates and network topology play the same role.
        - **Quantify the effects of approximation and incomplete information.** Geometric representations, numerical trajectories, and models learned from data all involve approximation. I study which guarantees survive it, which require additional information, and what that implies for accuracy and cost.
        - **Use computation to discover mathematics.** Numerical experiments reveal phenomena that motivate new questions, which I then turn into rigorous explanations.

        ## Research lines

        - **Geometric structure in computation and learning.** Symplectic and Poisson structures organize Hamiltonian dynamics, and a numerical method or learned model may track trajectories accurately while violating the geometry that governs long-term behavior. I treat simulation and learning as forward and inverse versions of the same problem, so the same geometric restrictions define the admissible model class in both directions. This leads to symmetry-preserving integrators that double as learned model classes, Poisson integrators built from approximate symplectic realizations, kernel-based learning of Hamiltonians from sampled trajectories, and energy-preserving schemes that balance fidelity against computational cost. Ongoing work addresses collision avoidance, long-time numerical behavior, and dissipative systems.

        - **Optimization, control, and distributed computation.** Optimization algorithms, feedback controllers, and networked agents can all be studied as dynamical processes. Stability certificates become design tools: a Lyapunov decay condition selects the step sizes of a discretized optimization flow so that its convergence rate is preserved. Data-driven controllers extract from past trajectories only the information a feedback law needs, and network topology determines which collective computations a group of agents can perform. Current work tracks moving optima in time-dependent, possibly nonconvex problems, quantifying the trade-off between tracking accuracy, regularization bias, and constraint violation.

        - **Beltrami fields.** Beltrami fields are incompressible flows whose velocity is parallel to its curl. Symbolic local-solvability experiments revealed an obstruction near critical points of the proportionality factor, which became a rigidity theorem: generically, no nonzero local solution exists near Morse critical points. The exceptional cases it leaves open motivate an ongoing construction of nontrivial real-analytic local solutions.

        - **Decision-making and inference under uncertainty.** The same structural viewpoint applies to operations research and statistics. In elective surgery scheduling, uncertainty estimation is separated from schedule optimization so that reliability becomes a scheduling decision, with buffers allocated where they protect most. For manifold-valued longitudinal data, the geometry of the observation space determines which statistical quantities can be estimated, leading to spline methods that recover intrinsic velocity and acceleration along a fitted trajectory.

        ## Research visits

        - **NTU, Singapore (2025, 2 weeks):** visit with J.P. Ortega on learning and dynamical systems.
        - **UIUC, USA (2015, 2 months):** visit with R. Loja-Fernandes on Hamiltonian dynamics.
        - **UC San Diego, USA (2014, 30 days):** geometric integrators.
        - **PIMS, Vancouver (2013, 5 months):** work with M.J. Gotay on geometric structures in field theory.
        - **Fields Institute, Toronto (2012, 3 weeks):** Focus Program on Geometry, Mechanics and Dynamics.
    design:
      columns: '1'
---
