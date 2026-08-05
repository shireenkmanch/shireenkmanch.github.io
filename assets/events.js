/* ---------------------------------------------------------------------------
   Events data.

   To add an event:
     1. Make a folder:  assets/img/events/<YYYY-MM-slug>/
     2. Put a cover image in it named  cover.jpg  (landscape works best,
        roughly 1200x800; it is cropped to 3:2 in the grid).
     3. Put any further photos in the same folder: 01.jpg, 02.jpg, 03.jpg ...
     4. Add an entry below. Only `title`, `date` and `kind` are required.
        List the extra photos in `photos` to make them appear in the lightbox.

   `kind` must be one of: organised | conference | talk | research | milestone | outreach
   (these drive the filter buttons).

   If `dir` is omitted or the cover file does not exist, the card renders as a
   typographic placeholder, so it is safe to list an event before you have
   photos for it.
--------------------------------------------------------------------------- */

window.EVENTS = [
    {
        title: "Royal Academy of Engineering event",
        role: "Attendee",
        kind: "talk",
        venue: "Royal Academy of Engineering",
        location: "London, UK",
        date: "2026",
        dir: "2026-royal-academy-of-engineering",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg"]
    },
    {
        title: "OxAI event",
        role: "Attendee",
        kind: "talk",
        venue: "Oxford Artificial Intelligence Society",
        location: "Oxford, UK",
        date: "2026",
        dir: "2026-oxai-event",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"]
    },
    {
        title: "Research visit to MBZUAI",
        role: "Visitor",
        kind: "talk",
        venue: "Mohamed bin Zayed University of Artificial Intelligence",
        location: "Abu Dhabi, UAE",
        date: "2026",
        dir: "2026-mbzuai-visit",
        photos: ["01.jpg", "02.jpg", "03.jpg"]
    },
    {
        title: "AI for Science",
        subtitle: "Alan Turing Institute event at the Royal Society",
        role: "Attendee",
        kind: "talk",
        venue: "The Royal Society",
        location: "London, UK",
        date: "2026",
        dir: "2026-ati-ai-for-science-royal-society",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"]
    },
    {
        title: "Alan Turing Institute tutorial",
        role: "Attendee",
        kind: "talk",
        venue: "The Alan Turing Institute",
        location: "London, UK",
        date: "2026",
        dir: "2026-alan-turing-institute-tutorial",
        photos: ["01.jpg", "02.jpg"]
    },
    {
        title: "2nd Workshop on Epistemic Intelligence in Machine Learning (EIML)",
        subtitle: "Learning under Unknown Unknowns for Real-world Impact",
        role: "Lead organizer",
        kind: "organised",
        venue: "ICML 2026",
        location: "Seoul, South Korea",
        date: "Jul 2026",
        link: "https://icml.cc/virtual/2026/workshop/54075",
        dir: "2026-07-eiml2-icml-seoul",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"]
    },
    {
        title: "AISTATS 2026, Mai Khao",
        role: "Attendee",
        kind: "conference",
        venue: "AISTATS 2026",
        location: "Mai Khao, Thailand",
        date: "May 2026",
        dir: "2026-05-aistats-mai-khao",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg"]
    },
    {
        title: "Joined Oxford Dynamics",
        subtitle: "Harwell Science and Innovation Campus",
        role: "Research Scientist",
        kind: "milestone",
        venue: "Oxford Dynamics",
        location: "Harwell, UK",
        date: "Mar 2026",
        dir: "2026-03-oxford-dynamics-harwell",
        photos: ["01.jpg", "02.jpg", "03.jpg"]
    },
    {
        title: "ROAD-Intent data collection",
        role: "Led the collection",
        kind: "research",
        venue: "RACE, UKAEA",
        location: "Culham, UK",
        date: "2025",
        dir: "2025-road-intent-collection-race-ukaea",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"]
    },
    {
        title: "PhD graduation",
        role: "Graduand",
        kind: "milestone",
        venue: "Oxford Brookes University",
        location: "Oxford, UK",
        date: "2025",
        dir: "2025-phd-graduation",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
    },
    {
        title: "PhD viva",
        subtitle: "Epistemic Deep Learning: Enabling Machine Learning Models to Know When They Do Not Know",
        role: "Candidate",
        kind: "milestone",
        venue: "Oxford Brookes University",
        location: "Oxford, UK",
        date: "2025",
        link: "https://arxiv.org/abs/2510.22261",
        dir: "2025-phd-defense",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
    },
    {
        title: "E-pi final thematic workshop",
        role: "Organizer",
        kind: "organised",
        venue: "Epistemic AI consortium",
        date: "2025",
        dir: "2025-epi-final-thematic-workshop",
        photos: ["01.jpg"]
    },
    {
        title: "1st Workshop on Epistemic Intelligence in Machine Learning (EIML)",
        role: "Lead organizer",
        kind: "organised",
        venue: "EurIPS 2025",
        location: "Copenhagen, Denmark",
        date: "Dec 2025",
        link: "https://sites.google.com/view/eiml-eurips2025/home",
        dir: "2025-12-eiml1-eurips-copenhagen",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg"]
    },
    {
        title: "ICLR 2025, Singapore",
        subtitle: "Presented Random-Set Neural Networks",
        role: "Author",
        kind: "conference",
        venue: "ICLR 2025",
        location: "Singapore",
        date: "Apr 2025",
        link: "https://openreview.net/forum?id=pdjkikvCch",
        dir: "2025-04-iclr-singapore",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"]
    },
    {
        title: "Qualcomm event at Oxford Brookes",
        role: "Attendee",
        kind: "talk",
        venue: "Oxford Brookes University",
        location: "Oxford, UK",
        date: "2024",
        dir: "2024-qualcomm-oxford-brookes",
        photos: []
    },
    {
        title: "Epistemic AI consortium meeting, KU Leuven",
        role: "Consortium member",
        kind: "conference",
        venue: "KU Leuven",
        location: "Bruges, Belgium",
        date: "2024",
        dir: "2024-kul-brugge-epi-consortium",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
    },
    {
        title: "NeurIPS 2024, Vancouver",
        subtitle: "Credal Deep Ensembles for Uncertainty Quantification",
        role: "Co-author",
        kind: "conference",
        venue: "NeurIPS 2024",
        location: "Vancouver, Canada",
        date: "Dec 2024",
        link: "https://papers.nips.cc/paper_files/paper/2024/hash/911fc798523e7d4c2e9587129fcf88fc-Abstract-Conference.html",
        dir: "2024-12-neurips-vancouver",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
    },
    {
        title: "Epistemic AI consortium meeting, TU Delft",
        role: "Consortium member",
        kind: "conference",
        venue: "TU Delft",
        location: "Delft, Netherlands",
        date: "2023",
        dir: "2023-epi-consortium-tu-delft",
        photos: ["01.jpg"]
    },
    {
        title: "Building engineering Lego",
        subtitle: "Outreach activity",
        role: "Facilitator",
        kind: "outreach",
        venue: "Oxford Brookes University",
        location: "Oxford, UK",
        date: "2023",
        dir: "2023-engineering-lego-brookes",
        photos: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]
    },
    {
        title: "Epistemic Uncertainty in AI Workshop",
        role: "Organizer",
        kind: "organised",
        venue: "UAI 2023",
        location: "Pittsburgh, USA",
        date: "Aug 2023",
        link: "https://sites.google.com/view/epi-workshop-uai-2023/home",
        photos: []
    },
    {
        title: "E-pi: Rethinking Uncertainty and AI",
        subtitle: "Thematic workshop",
        role: "Organizer",
        kind: "organised",
        venue: "TU Delft",
        location: "Delft, Netherlands",
        date: "2023",
        link: "https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/software-technology/algorithmics/-pi-thematic-workshop-1-re-thinking-uncertainty-and-ai",
        photos: []
    },
    {
        title: "OxML \u2014 Oxford Machine Learning Summer School",
        role: "Participant",
        kind: "conference",
        venue: "University of Oxford",
        location: "Oxford, UK",
        date: "2023",
        photos: []
    },
    {
        title: "10th Summer School on Imprecise Probabilities, Bristol",
        role: "Participant",
        kind: "conference",
        venue: "University of Bristol",
        location: "Bristol, UK",
        date: "Aug 2022",
        photos: []
    },
    {
        title: "AI & Robotics workshop for Wycombe High School",
        role: "Ran the workshop",
        kind: "outreach",
        venue: "University of Oxford",
        location: "Oxford, UK",
        date: "2021 \u2013 2023",
        photos: []
    },
    {
        title: "Impact of Artificial Intelligence",
        subtitle: "Invited talk, TechTalk 2019",
        role: "Speaker",
        kind: "talk",
        venue: "University of Navarra",
        location: "Pamplona, Spain",
        date: "2019",
        photos: []
    }
];
