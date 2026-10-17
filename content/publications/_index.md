---
title: Publications
summary: Journal articles, conference proceedings, and submitted work.
type: landing

sections:
  - block: markdown
    content:
      text: '# Publications'
    design:
      columns: '1'
      css_class: publications-title
      spacing:
        padding: ['3rem', '0', '0.75rem', '0']

  - block: collection
    id: submitted
    content:
      title: Submitted
      count: 0
      filters:
        folders: [publications]
        publication_type: manuscript
    design:
      view: citation
      spacing:
        padding: ['1.5rem', '0', '1.5rem', '0']

  - block: collection
    id: journal-papers
    content:
      title: Journal Papers
      count: 0
      filters:
        folders: [publications]
        publication_type: article-journal
    design:
      view: citation
      spacing:
        padding: ['1.5rem', '0', '1.5rem', '0']

  - block: collection
    id: conference-papers
    content:
      title: Conference Papers
      count: 0
      filters:
        folders: [publications]
        publication_type: paper-conference
    design:
      view: citation
      spacing:
        padding: ['1.5rem', '0', '1.5rem', '0']
---
