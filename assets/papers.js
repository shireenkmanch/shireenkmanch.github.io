/* ---------------------------------------------------------------------------
   Publications.

   To add a paper: copy an entry below. Newest first.

   To show a figure under a paper:
     1. Export the paper's main figure as PNG. From arXiv:
        curl -sL -o p.pdf https://arxiv.org/pdf/<id> then
        magick -density 200 "p.pdf[1]" -trim fig.png.
     2. Save it as  assets/img/papers/<something>.png  - around 1000px wide.
     3. Set  fig: "assets/img/papers/<something>.png"  on the entry.

   With no `fig`, the card shows a tile with the venue on it, so the layout
   stays intact.

   `tag` is the short venue badge shown on the tile and next to the title.
--------------------------------------------------------------------------- */

window.PAPERS = [
    {
        year: 2026,
        title: "Distributional Energy-Based Models for Uncertainty-Aware Structured LLM Reasoning",
        authors: ["*Shireen Kudukkil Manchingal", "Abhey Kalia", "Tiago Gonçalves", "Sabeel Rawther"],
        venue: "arXiv preprint, 2026",
        tag: "arXiv",
        fig: "assets/img/papers/distributional-ebm.png",
        links: { arXiv: "https://arxiv.org/abs/2605.18871" }
    },
    {
        year: 2026,
        title: "Uncertainty-Aware Autonomous Vehicles: Predicting the Road Ahead",
        authors: ["*Shireen Kudukkil Manchingal", "Armand Amaritei", "Mihir Gohad", "Maryam Sultana", "Julian F. P. Kooij", "Fabio Cuzzolin", "Andrew Bradley"],
        venue: "IEEE International Conference on Robotics and Automation (ICRA), 2026",
        tag: "ICRA 26",
        links: { arXiv: "https://arxiv.org/abs/2510.22680" }
    },
    {
        year: 2026,
        title: "What Intermediate Layers Know: Detecting Jailbreaks from Entropy Dynamics",
        authors: ["Sofiia Nikolenko", "Michele Papucci", "Mina Rezaei", "*Shireen Kudukkil Manchingal"],
        venue: "European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (ECML PKDD), 2026",
        tag: "ECML 26",
        fig: "assets/img/papers/jailbreak-entropy.png",
        links: { arXiv: "https://arxiv.org/abs/2606.25182", code: "https://github.com/ssophiee/entropy-jailbreak-detection" }
    },
    {
        year: 2026,
        title: "Random-Set Graph Neural Networks",
        authors: ["Tommy Woodley", "*Shireen Kudukkil Manchingal", "Matteo Tolloso", "Davide Bacciu", "Fabio Cuzzolin"],
        venue: "arXiv preprint, 2026",
        tag: "arXiv",
        fig: "assets/img/papers/random-set-gnn.png",
        links: { arXiv: "https://arxiv.org/abs/2605.11987" }
    },
    {
        year: 2026,
        title: "A Neurosymbolic Approach with Epistemic Deep Learning for Hierarchical Image Classification",
        authors: ["Ezel Kilicdere", "*Shireen Kudukkil Manchingal", "Fabio Cuzzolin"],
        venue: "arXiv preprint, 2026",
        tag: "arXiv",
        links: { arXiv: "https://arxiv.org/abs/2605.16383" }
    },
    {
        year: 2025,
        title: "Credal and Interval Deep Evidential Classifications",
        authors: ["Michele Caprio", "*Shireen Kudukkil Manchingal", "Fabio Cuzzolin"],
        venue: "arXiv preprint, 2025",
        tag: "arXiv",
        links: { arXiv: "https://arxiv.org/abs/2512.05526" }
    },
    {
        year: 2025,
        title: "Epistemic Deep Learning: Enabling Machine Learning Models to Know When They Do Not Know",
        authors: ["*Shireen Kudukkil Manchingal"],
        venue: "PhD thesis, Oxford Brookes University, 2025",
        tag: "Thesis",
        links: { arXiv: "https://arxiv.org/abs/2510.22261" }
    },
    {
        year: 2025,
        title: "Epistemic Artificial Intelligence is Essential for Machine Learning Models to Truly Know When They Do Not Know",
        authors: ["*Shireen Kudukkil Manchingal", "Andrew Bradley", "Julian F. P. Kooij", "Keivan Shariatmadar", "Neil Yorke-Smith", "Fabio Cuzzolin"],
        venue: "Position paper, arXiv preprint, 2025",
        tag: "Position",
        fig: "assets/img/papers/position-epistemic-ai.png",
        links: { arXiv: "https://arxiv.org/abs/2505.04950" }
    },
    {
        year: 2025,
        title: "Epistemic Wrapping for Uncertainty Quantification",
        authors: ["Maryam Sultana", "Neil Yorke-Smith", "Kaizheng Wang", "*Shireen Kudukkil Manchingal", "Muhammad Mubashar", "Fabio Cuzzolin"],
        venue: "arXiv preprint, 2025",
        tag: "arXiv",
        links: { arXiv: "https://arxiv.org/abs/2505.02277" }
    },
    {
        year: 2025,
        title: "Random-Set Large Language Models",
        authors: ["Muhammad Mubashar", "*Shireen Kudukkil Manchingal", "Fabio Cuzzolin"],
        venue: "arXiv preprint, 2025",
        tag: "arXiv",
        links: { pdf: "https://arxiv.org/pdf/2504.18085", arXiv: "https://arxiv.org/abs/2504.18085", code: "https://github.com/mubashar1030/Random-set-Large-Language-Models" }
    },
    {
        year: 2025,
        title: "A Unified Evaluation Framework for Epistemic Predictions",
        authors: ["*Shireen Kudukkil Manchingal", "Muhammad Mubashar", "Kaizheng Wang", "Fabio Cuzzolin"],
        venue: "International Conference on Artificial Intelligence and Statistics (AISTATS), 2025",
        tag: "AISTATS 25",
        links: { pdf: "https://proceedings.mlr.press/v258/manchingal25a/manchingal25a.pdf", PMLR: "https://proceedings.mlr.press/v258/manchingal25a.html", code: "https://github.com/shireenkmanch/Evaluation-Epistemic-Preds" }
    },
    {
        year: 2025,
        title: "Random-Set Neural Networks",
        authors: ["*Shireen Kudukkil Manchingal", "Muhammad Mubashar", "Kaizheng Wang", "Keivan Shariatmadar", "Fabio Cuzzolin"],
        venue: "International Conference on Learning Representations (ICLR), 2025",
        tag: "ICLR 25",
        fig: "assets/img/papers/rs-nn.png",
        links: { pdf: "https://openreview.net/pdf?id=pdjkikvCch", openreview: "https://openreview.net/forum?id=pdjkikvCch", code: "https://github.com/shireenkmanch/Random-Set-Neural-Networks" }
    },
    {
        year: 2025,
        title: "CreINNs: Credal-Set Interval Neural Networks for Uncertainty Estimation in Classification Tasks",
        authors: ["Kaizheng Wang", "Keivan Shariatmadar", "*Shireen Kudukkil Manchingal", "Fabio Cuzzolin", "David Moens", "Hans Hallez"],
        venue: "Neural Networks (Elsevier), 2025",
        tag: "Neural Netw.",
        links: { DOI: "https://doi.org/10.1016/j.neunet.2025.107198", code: "https://github.com/WangKaizheng/CreINNs" }
    },
    {
        year: 2024,
        title: "Credal Deep Ensembles for Uncertainty Quantification",
        authors: ["Kaizheng Wang", "Fabio Cuzzolin", "*Shireen Kudukkil Manchingal", "Keivan Shariatmadar", "David Moens", "Hans Hallez"],
        venue: "Conference on Neural Information Processing Systems (NeurIPS), 2024",
        tag: "NeurIPS 24",
        fig: "assets/img/papers/credal-ensembles.png",
        links: { pdf: "https://papers.nips.cc/paper_files/paper/2024/file/911fc798523e7d4c2e9587129fcf88fc-Paper-Conference.pdf", NeurIPS: "https://papers.nips.cc/paper_files/paper/2024/hash/911fc798523e7d4c2e9587129fcf88fc-Abstract-Conference.html" }
    },
    {
        year: 2022,
        title: "Epistemic Deep Learning",
        authors: ["*Shireen Kudukkil Manchingal", "Fabio Cuzzolin"],
        venue: "ICML 2022 Workshop on Distribution-free Uncertainty Quantification",
        tag: "ICML-W 22",
        links: { arXiv: "https://arxiv.org/abs/2206.07609" }
    }
];
