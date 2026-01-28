import { StaticImageData } from "next/image";

import Riverdale from "@/web-show/riverdale.jpg";
import TheBigBangTheory from "@/web-show/the-big-bang-theory.jpg";
import TheVampireDiaries from "@/web-show/the-vampire-diaries.jpg";
import SiliconValley from "@/web-show/silicon-valley.webp";
import SquidGame from "@/web-show/squid-game.jpeg";
import StrangerThings4 from "@/web-show/stranger-things-4.jpg";
import AliceInBorderland from "@/web-show/alice-in-borderland.jpg";
import PeakyBlinders from "@/web-show/peaky-blinders.jpg";
import Rangbaaz from "@/web-show/rangbaaz.jpg";
import Suits from "@/web-show/suits.webp";
import Adamas from "@/web-show/adamas.avif";
import BlackKnight from "@/web-show/black-knight.jpg";
import Bloodhounds from "@/web-show/bloodhounds.jpg";
import Warrior from "@/web-show/warrior.jpg";
import MrRobot from "@/web-show/mr-robot.jpg";
import SongOfTheBandits from "@/web-show/song-of-the-bandits.jpg";
import Doona from "@/web-show/doona.jpg";
import BigMouth from "@/web-show/big-mouth.webp";
import CrashLandingOnYou from "@/web-show/crash-landing-on-you.jpg";
import Reacher from "@/web-show/reacher.webp";
import StartUp from "@/web-show/start-up.jpg";
import TokyoVice from "@/web-show/tokyo-vice.jpg";
import QueenOfTears from "@/web-show/queen-of-tears.jpg";
import Shogun from "@/web-show/shogun.jpg";
import HighSchoolReturnOfAGangster from "@/web-show/high-school-return-of-a-gangster.jpg";
import FightForMyWay from "@/web-show/fight-for-my-way.jpg";
import ItsOkayToNotBeOkay from "@/web-show/its-okay-to-not-be-okay.jpg";
import FirstLove from "@/web-show/first-love.jpg";
import From from "@/web-show/from.jpg";
import TheMentalist from "@/web-show/the-mentalist.jpg";
import GyeongseongCreature from "@/web-show/gyeongseong-creature.jpg";
import ItaewonClass from "@/web-show/itaewon-class.webp";

import WeekHeroClassOne from "@/web-show/week-hero-class-one.jpg";

import TheLastOfUs from "@/web-show/the-last-of-us.jpg";
import WeekHeroClassTwo from "@/web-show/week-hero-class-two.jpg";
import TwentyFiveTwentyOne from "@/web-show/twenty-five-twenty-one.webp";

import Vincenzo from "@/web-show/vincenzo.jpg";

import MercyForNone from "@/web-show/mercy-for-none.jpg";
import GoodBoy from "@/web-show/good-boy.jpg";

import AllOfUsAreDead from "@/web-show/all-of-us-are-dead.jpg";
import BusinessProposal from "@/web-show/business-proposal.jpg";

import Trigger from "@/web-show/trigger.jpg";
import GlassHeart from "@/web-show/glass-heart.jpg";
import BeyondTheBar from "@/web-show/beyond-the-bar.jpg";

import ExtraOrdinaryAttorneyWoo from "@/web-show/extraordinary-attorney-woo.jpg";
import MyName2021 from "@/web-show/my-name-2021.jpg";

import TwinklingWatermelon from "@/web-show/twinkling-watermelon.jpg";
import RomanticsAnonymous from "@/web-show/romantics-anonymous.jpg";

import KingTheLand from "@/web-show/king-the-land.jpg";

import StrangerThings5 from "@/web-show/stranger-things-5.jpg";
import SuperPumped from "@/web-show/super-pumped.jpg";
import Pluribus from "@/web-show/pluribus.jpg";
import UndercoverHighSchool from "@/web-show/undercover-high-school.jpg";

import SpringFever from "@/web-show/spring-fever.webp";
import YouthOfMay from "@/web-show/youth-of-may.jpg";
import CanThisLoveBeTranslated from "@/web-show/can-this-love-be-translated.jpg";

export type WebShow = {
  name: string;
  img: StaticImageData;
};

export const WEB_SHOWS: { [key: string]: WebShow[] } = {
  "Jan '26": [
    {
      img: CanThisLoveBeTranslated,
      name: "Can This Love Be Translated?",
    },
    {
      img: YouthOfMay,
      name: "Youth of May",
    },
    {
      img: SpringFever,
      name: "Spring Fever",
    },
  ],
  "Dec '25": [
    {
      img: UndercoverHighSchool,
      name: "Undercover High School (TV Series 2025)",
    },
    {
      img: Pluribus,
      name: "Pluribus (TV series)",
    },
    {
      img: SuperPumped,
      name: "Super Pumped: The Battle For Uber",
    },
    {
      img: StrangerThings5,
      name: "Stranger Things season 5",
    },
  ],
  "Nov '25": [
    {
      img: KingTheLand,
      name: "King the Land",
    },
  ],
  "Oct '25": [
    {
      img: RomanticsAnonymous,
      name: "Romantics Anonymous (TV series)",
    },
    {
      img: TwinklingWatermelon,
      name: "Twinkling Watermelon",
    },
  ],
  "Sep '25": [
    {
      img: MyName2021,
      name: "My Name (TV Series 2021)",
    },
    {
      img: ExtraOrdinaryAttorneyWoo,
      name: "Extraordinary Attorney Woo (TV Series 2022)",
    },
  ],
  "Aug '25": [
    {
      img: BeyondTheBar,
      name: "Beyond the Bar",
    },
    {
      img: GlassHeart,
      name: "Glass Heart (TV series)",
    },
    {
      img: Trigger,
      name: "Trigger (TV Series 2025)",
    },
  ],
  "Jul '25": [
    {
      img: BusinessProposal,
      name: "Business Proposal (TV Series 2022)",
    },
    {
      img: AllOfUsAreDead,
      name: "All of Us Are Dead",
    },
  ],
  "Jun '25": [
    {
      img: GoodBoy,
      name: "Good Boy (TV Series 2025)",
    },
    {
      img: MercyForNone,
      name: "Mercy for None (TV Series 2025)",
    },
  ],
  "May '25": [
    {
      img: Vincenzo,
      name: "Vincenzo (TV Series 2021)",
    },
  ],
  "Apr '25": [
    {
      img: TwentyFiveTwentyOne,
      name: "Twenty-Five Twenty-One",
    },
    {
      img: WeekHeroClassTwo,
      name: "Weak Hero Class 2",
    },
    {
      img: TheLastOfUs,
      name: "The Last of Us (TV Series 2023)",
    },
  ],
  "Mar '25": [
    {
      img: WeekHeroClassOne,
      name: "Weak Hero Class 1",
    },
  ],
  Previous: [
    {
      img: ItaewonClass,
      name: "Itaewon Class (TV Series 2020)",
    },
    {
      img: GyeongseongCreature,
      name: "Gyeongseong Creature",
    },
    {
      img: TheMentalist,
      name: "The Mentalist",
    },
    {
      img: From,
      name: "From (TV Series 2022)",
    },
    {
      img: FirstLove,
      name: "First Love (TV Series 2022)",
    },
    {
      img: ItsOkayToNotBeOkay,
      name: "It's Okay to Not Be Okay",
    },
    {
      img: FightForMyWay,
      name: "Fight for My Way (TV Series 2017)",
    },
    {
      img: HighSchoolReturnOfAGangster,
      name: "High School Return of a Gangster",
    },
    {
      img: Shogun,
      name: "Shōgun (2024 TV series)",
    },
    {
      img: QueenOfTears,
      name: "Queen of Tears (TV Series 2024)",
    },
    {
      img: TokyoVice,
      name: "Tokyo Vice (TV Series 2022–2024)",
    },
    {
      img: StartUp,
      name: "Start-Up (TV Series 2020)",
    },
    {
      img: Reacher,
      name: "Reacher (TV Series 2022)",
    },
    {
      img: CrashLandingOnYou,
      name: "Crash Landing on You (TV Series 2019–2020)",
    },
    {
      img: BigMouth,
      name: "Big Mouth (TV Series 2022)",
    },
    {
      img: Doona,
      name: "Doona! (TV Series 2023)",
    },
    {
      img: SongOfTheBandits,
      name: "Song of the Bandits (TV Series 2023)",
    },
    {
      img: MrRobot,
      name: "Mr. Robot",
    },
    {
      img: Warrior,
      name: "Warrior (TV Series 2019–2023)",
    },
    {
      img: Bloodhounds,
      name: "Bloodhounds (TV Series 2023)",
    },
    {
      img: BlackKnight,
      name: "Black Knight (TV Series 2023)",
    },
    {
      img: Adamas,
      name: "Adamas (TV Series 2022)",
    },
    {
      img: Suits,
      name: "Suits",
    },
    {
      img: PeakyBlinders,
      name: "Peaky Blinders",
    },
    {
      img: Rangbaaz,
      name: "Rangbaaz",
    },
    {
      img: AliceInBorderland,
      name: "Alice in Borderland (TV series)",
    },
    {
      img: StrangerThings4,
      name: "Stranger Things season 4",
    },
    {
      img: SquidGame,
      name: "Squid Game",
    },
    {
      img: SiliconValley,
      name: "Silicon Valley",
    },
    {
      img: TheVampireDiaries,
      name: "The Vampire Diaries",
    },
    {
      img: TheBigBangTheory,
      name: "The Big Bang Theory",
    },
    {
      img: Riverdale,
      name: "Riverdale",
    },
  ],
};
