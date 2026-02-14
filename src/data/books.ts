import { StaticImageData } from "next/image";

import Outliers from "@/book/outliers.jpg";
import SuperThinking from "@/book/super-thinking.jpg";
import LifesAmazingSecrets from "@/book/lifes-amazing-secrets.jpg";
import RichDadPoorDad from "@/book/rich-dad-poor-dad.jpg";
import TheSimplePathToWealth from "@/book/the-simple-path-to-wealth.jpg";
import ThinkLikeAMonk from "@/book/think-like-a-monk.jpg";
import EloquentJavaScript from "@/book/eloquent-javascript.jpg";
import SteveJobs from "@/book/steve-jobs.jpg";
import TheSubtleArtOfNotGivingAFuck from "@/book/the-subtle-art-of-not-giving-a-fuck.jpg";
import HitRefresh from "@/book/hit-refresh.jpg";
import ThePsychologyOfMoney from "@/book/the-psychology-of-money.jpg";
import AtomicHabits from "@/book/atomic-habits.jpg";
import TheStandoutDeveloper from "@/book/the-standout-developer.jpg";
import TheInnovators from "@/book/the-innovators.jpg";
import OneUpOnWallStreet from "@/book/one-up-on-wall-street.jpg";
import RefactoringUI from "@/book/refactoring-ui.jpg";
import EgoIsTheEnemy from "@/book/ego-is-the-enemy.jpg";
import ShowYourWork from "@/book/show-your-work.jpg";
import YouDontKnowJsGS from "@/book/you-dont-know-js-gs.jpg";
import YouDontKnowJsSAndC from "@/book/you-dont-know-js-s-nd-c.jpg";
import TheRustProgrammingLang from "@/book/the-rust-programming-lang.jpg";
import TheAlmanack from "@/book/the-almanack.jpg";
import HitchhikerGuideToGalaxy from "@/book/hitchhiker-guide-to-galaxy.jpg";

import Meditations from "@/book/meditations.jpg";
import ThinkAndGrowRich from "@/book/think-and-grow-rich.jpg";

import Mindset from "@/book/minset.jpg";

import AmbedkarALife from "@/book/ambedkar-a-life.jpg";
import LittleBookOfCommonSenseInvesting from "@/book/little-book-of-common-sense-investing.jpg";

import TheTopFiveRegretsOfTheDying from "@/book/the-top-five-regrets-of-the-dying.jpg";
import TheComfortCrisis from "@/book/the-comfort-crisis.jpg";

import DesigningDataIntensiveApplication from "@/book/designing-data-intensive-application.jpg";

import MasteringGoSecondEdition from "@/book/mastering-go-second-edition.jpg";

import NeverSplitTheDifference from "@/book/never-split-the-difference.jpg";

import MasteringNodeJS from "@/book/mastering-nodejs.jpg";

import MyLifeInFull from "@/book/my-life-in-full.jpg";

import Ikigai from "@/book/ikigai.jpg";

// Providers
import AmazonLogo from "@/logo/amazon.svg";

export type Provider = {
  img: StaticImageData;
  link: string;
};

export type Book = {
  name: string;
  author: string;
  img?: StaticImageData;
  providers?: Provider[];
  shape?: "square";
  tags?: string[];
};

export const BOOKS: { [key: string]: Book[] } = {
  "Feb '26": [
    {
      name: "Ikigai: The Japanese Secret to a Long and Happy Life",
      author: "Francesc Miralles, Hector Garcia",
      img: Ikigai,
    },
  ],
  "Jan '26": [
    {
      name: "My Life in Full: Work, Family, and Our Future",
      author: "Indra Nooyi",
      img: MyLifeInFull,
    },
  ],
  "Sep '25": [
    {
      name: "Mastering Node.js: Expert techniques for building fast servers and scalable, real-time network applications with minimal effort",
      author: "Sandro Pasquali",
      img: MasteringNodeJS,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4ncpKr2" }],
    },
  ],
  "Aug '25": [
    {
      name: "Never Split The Difference",
      author: "Chris Voss",
      img: NeverSplitTheDifference,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4fMy1zc" }],
    },
  ],
  "Jul '25": [
    {
      name: "Mastering Go - Second Edition: Create Golang production applications using network libraries, concurrency, machine learning, and advanced data structures",
      author: "Mihalis Tsoukalos",
      img: MasteringGoSecondEdition,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4nA5JLN" }],
    },
  ],
  "Jun '25": [
    {
      name: "The Little Go Book",
      author: "Karl Seguin",
    },
    {
      name: "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems",
      author: "Martin Kleppmann",
      img: DesigningDataIntensiveApplication,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4kRQ7Bb" }],
    },
  ],
  "May '25": [
    {
      name: "The Comfort Crisis: Embrace Discomfort To Reclaim Your Wild, Happy, Healthy Self",
      author: "Michael Easter",
      img: TheComfortCrisis,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/43KeXvW" }],
    },
    {
      name: "The Top Five Regrets of the Dying: A Life Transformed by the Dearly Departing",
      author: "Bronnie Ware",
      img: TheTopFiveRegretsOfTheDying,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/458lRgW" }],
    },
  ],
  "Apr '25": [
    {
      name: "The Little Book of Common Sense Investing: The Only Way to Guarantee Your Fair Share of Stock Market Returns",
      author: "John C. Bogle",
      img: LittleBookOfCommonSenseInvesting,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4kTDE05" }],
    },
    {
      name: "Ambedkar: A Life",
      author: "Shashi Tharoor",
      img: AmbedkarALife,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4kjJRCx" }],
    },
  ],
  "Mar '25": [
    {
      name: "Mindset: Changing The Way You think To Fulfil Your Potential",
      author: "Carol S. Dweck",
      img: Mindset,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/3SzkLmT" }],
    },
  ],
  "Dec '24": [
    {
      name: "Think And Grow Rich: The Secret to Freedom and Success",
      author: "Napoleon Hill",
      img: ThinkAndGrowRich,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/452pgOk" }],
    },
    {
      name: "Meditations",
      author: "Marcus Aurelius",
      img: Meditations,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/3FHOmrm" }],
    },
  ],
  Previous: [
    {
      name: "The Ultimate Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      img: HitchhikerGuideToGalaxy,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/3ZNLVdA" }],
    },
    {
      name: "The Almanack Of Naval Ravikant: A Guide to Wealth and Happiness",
      author: "Eric Jorgenson",
      img: TheAlmanack,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/3ZeU8Yg" }],
    },
    {
      name: "The Rust Programming Language",
      author:
        "Steve Klabnik and Carol Nichols, with contributions from the Rust Community",
      img: TheRustProgrammingLang,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/43pYwpO" }],
    },
    {
      name: "You Don't Know JS Yet - Scope & Closures",
      author: "Kyle Simpson",
      img: YouDontKnowJsSAndC,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/3ZaMWML" }],
    },
    {
      name: "You Don't Know JS Yet - Get Started",
      author: "Kyle Simpson",
      img: YouDontKnowJsGS,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4kLn42b" }],
    },
    {
      name: "Show Your Work",
      author: "Austin Kleon",
      img: ShowYourWork,
      shape: "square",
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4dLROOd" }],
    },
    {
      name: "Ego Is the Enemy",
      author: "Ryan Holiday",
      img: EgoIsTheEnemy,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4mK5Xjf" }],
    },
    {
      name: "Refactoring UI",
      author: "Steve Schoger and Adam Wathan",
      img: RefactoringUI,
    },
    {
      name: "One up on Wall Street: How to Use What You Already Know to Make Money in the Market",
      author: "Peter Lynch",
      img: OneUpOnWallStreet,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4kvJq8q" }],
    },
    {
      name: "The Innovators",
      author: "Walter Isaacson",
      img: TheInnovators,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4mKdqPh" }],
    },
    {
      name: "The Standout Developer",
      author: "Randall Kanna",
      img: TheStandoutDeveloper,
    },
    {
      name: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      author: "James Clear",
      img: AtomicHabits,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/3Hpzezn" }],
    },
    {
      name: "The Productive Professional",
      author: "Tanay Pratap, Dr. Satyendra Rai",
    },
    {
      name: "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
      author: "Morgan Housel",
      img: ThePsychologyOfMoney,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/3ZLVFVK" }],
    },
    {
      name: "Hit Refresh: The Quest to Rediscover Microsoft's Soul and Imagine a Better Future for Everyone",
      author: "Greg Shaw, Jill Tracie Nichols, and Satya Nadella",
      tags: ["audio book"],
      img: HitRefresh,
    },
    {
      name: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      img: TheSubtleArtOfNotGivingAFuck,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4kjK88s" }],
    },
    {
      name: "Steve Jobs",
      author: "Walter Isaacson",
      img: SteveJobs,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/43FRBrm" }],
    },
    {
      name: "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      img: EloquentJavaScript,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4jvm2q8" }],
    },
    {
      name: "Think Like a Monk",
      author: "Jay Shetty",
      img: ThinkLikeAMonk,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/43zLx3u" }],
    },
    {
      name: "The Simple Path to Wealth: Your Road Map to Financial Independence and a Rich, Free Life",
      author: "J. L. Collins",
      img: TheSimplePathToWealth,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4juHk79" }],
    },
    {
      name: "Rich Dad, Poor Dad",
      author: "Robert Kiyosaki",
      img: RichDadPoorDad,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/4krt2Wo" }],
    },
    {
      name: "Life's Amazing Secrets",
      author: "Gaur Gopal Das",
      img: LifesAmazingSecrets,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/43p99t0" }],
    },
    {
      name: "Super Thinking: The Big Book of Mental Models",
      author: "Gabriel Weinberg and Lauren McCann",
      img: SuperThinking,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/43qlJrV" }],
    },
    {
      name: "Outliers",
      author: "Malcolm Gladwell",
      img: Outliers,
      providers: [{ img: AmazonLogo, link: "https://amzn.to/43V0Zst" }],
    },
  ],
};
