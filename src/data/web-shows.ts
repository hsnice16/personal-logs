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

export type WebShow = {
  img: StaticImageData;
};

export const WEB_SHOWS: { [key: string]: WebShow[] } = {
  "Sep '25": [
    {
      img: ExtraOrdinaryAttorneyWoo,
    },
  ],
  "Aug '25": [
    {
      img: BeyondTheBar,
    },
    {
      img: GlassHeart,
    },
    {
      img: Trigger,
    },
  ],
  "Jul '25": [
    {
      img: BusinessProposal,
    },
    {
      img: AllOfUsAreDead,
    },
  ],
  "Jun '25": [
    {
      img: GoodBoy,
    },
    {
      img: MercyForNone,
    },
  ],
  "May '25": [
    {
      img: Vincenzo,
    },
  ],
  "Apr '25": [
    {
      img: TwentyFiveTwentyOne,
    },
    {
      img: WeekHeroClassTwo,
    },
    { img: TheLastOfUs },
  ],
  "Mar '25": [{ img: WeekHeroClassOne }],
  Previous: [
    {
      img: ItaewonClass,
    },
    {
      img: GyeongseongCreature,
    },
    {
      img: TheMentalist,
    },
    {
      img: From,
    },
    {
      img: FirstLove,
    },
    {
      img: ItsOkayToNotBeOkay,
    },
    {
      img: FightForMyWay,
    },
    {
      img: HighSchoolReturnOfAGangster,
    },
    {
      img: Shogun,
    },
    {
      img: QueenOfTears,
    },
    {
      img: TokyoVice,
    },
    {
      img: StartUp,
    },
    {
      img: Reacher,
    },
    {
      img: CrashLandingOnYou,
    },
    {
      img: BigMouth,
    },
    {
      img: Doona,
    },
    {
      img: SongOfTheBandits,
    },
    {
      img: MrRobot,
    },
    {
      img: Warrior,
    },
    {
      img: Bloodhounds,
    },
    {
      img: BlackKnight,
    },
    {
      img: Adamas,
    },
    {
      img: Suits,
    },
    {
      img: PeakyBlinders,
    },
    {
      img: Rangbaaz,
    },
    {
      img: AliceInBorderland,
    },
    {
      img: StrangerThings4,
    },
    {
      img: SquidGame,
    },
    {
      img: SiliconValley,
    },
    {
      img: TheVampireDiaries,
    },
    {
      img: TheBigBangTheory,
    },
    {
      img: Riverdale,
    },
  ],
};
