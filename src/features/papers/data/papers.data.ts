import type { Paper, Venue } from "../domain/papers.domain";

const ailric2026: Venue = { name: "AILRIC 2026", acceptance: "Accepted for Oral Presentation" };
const ieeeFmlds2026: Venue = { name: "IEEE FMLDS 2026", acceptance: "Accepted Full Paper" };

export const papers: readonly Paper[] = [
  {
    title: "A Machine Proposed Human-Validated Taglish-English Parallel Corpus for E-Commerce Alignment Analysis",
    authors: "Chavez, M.B., Lee, H., Sadiarin Jr., E., & Gonda, R.",
    description:
      "Development and validation of a Taglish-English parallel corpus for improving multilingual NLP analysis in e-commerce contexts.",
    areas: ["NLP", "Machine Translation", "Dataset Creation"],
    venue: ailric2026,
    presentation: "oral",
    links: [],
  },
  {
    title: "Audience Bias and Sentiment in Korean Cinema: A Cross-Cultural Text Mining Analysis",
    authors: "Chavez, M.B., Lee, H., Sadiarin Jr., E., Gonda, R., & Park, J.",
    description:
      "Analyzing audience sentiment and cultural bias patterns in Korean cinema using multilingual text mining approaches.",
    areas: ["Sentiment Analysis", "XLM-R", "Cross-Cultural NLP"],
    venue: ailric2026,
    presentation: "oral",
    links: [],
  },
  {
    title:
      "The Dynamics of Cancel Culture: A Social Network and Sentiment Trajectory Analysis of Influencer Apology Videos in South Korea",
    authors: "Chavez, M.B., Lee, H., Sadiarin Jr., E., & Gonda, R.",
    description:
      "Examining the lifecycle and sentiment trajectories of cancel culture events on social media, with a focus on influencer apology responses in the South Korean digital landscape.",
    areas: ["Social Computing", "NLP", "Data Mining"],
    venue: ieeeFmlds2026,
    presentation: "full-paper",
    links: [],
  },
];

export const textSamplesAnalyzed = "10k+";

export const researchAreas: readonly string[] = ["NLP", "Sentiment Analysis", "LLMs", "Social Computing"];
