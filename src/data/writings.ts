import { StaticImageData } from "next/image";

import CSRFWebSecurityThreat from "@/writing/csrf-web-security-threat.png";
import SneakPeekIntoHTMLParsing from "@/writing/sneak-peek-into-html-parsing.png";
import WebAccessibilityA11y from "@/writing/web-accessibility-a11y.png";
import MapClassOverPlainObjectInJS from "@/writing/map-class-over-plain-object-in-js.png";
import AbsolutePathReactJS from "@/writing/absolute-path-react-js.png";
import WhyDoCallReactJSDeclarative from "@/writing/why-do-call-reactjs-declarative.png";
import DiffBetweenScriptProgrammingLang from "@/writing/diff-between-script-programming-lang.png";
import WorkingWithDOMInJS from "@/writing/working-with-dom-in-js.png";
import NotUseExportDefaultInJS from "@/writing/not-use-export-default-in-js.png";
import SendLargeFilesFEtoBE from "@/writing/send-large-files-fe-to-be.png";

import E2ETestBrowserExtension from "@/writing/e2e-test-browser-extension.png";
import NpxCreateWebStarterKit from "@/writing/npx-create-web-starter-kit.png";
import WriteYourOwnTelegramWalletBot from "@/writing/write-your-own-telegram-wallet-bot.png";
import HooksSupremacyInReact from "@/writing/hooks-supremacy-in-react.png";
import IBuiltTechInterviewSite from "@/writing/i-built-techinterviewsite.png";
import LaunchedMyTwoSideProject from "@/writing/launched-my-two-side-project.png";
import KPIMetricCardComp from "@/writing/kpi-metric-card-comp.png";
import PushDockerImgAWSECR from "@/writing/push-docker-img-aws-ecr.png";
import PrivateAWSAuroraDBeaver from "@/writing/private-aws-aurora-dbeaver.png";
import LambdaFunctionRDSs3EventBridgeAWS from "@/writing/lambda-function-rds-s3-eventbridge-aws.png";
import GitHubActionUpdateFunctionAWSLambda from "@/writing/github-action-update-function-aws-lambda.png";
import ConnectSSHTunnelNestJSTypeORM from "@/writing/connect-ssh-tunnel-nestjs-typeorm.png";
import TrackTokenPriceChangeOnSolana from "@/writing/track-token-price-change-on-solana.png";
import DeployANodeJSAppOnEC2 from "@/writing/deploy-a-nodejs-app-on-ec2.png";
import DesignAPerpetualTradingDappSystem from "@/writing/design-a-perpetual-trading-dapp-system.png";

import TheRightWayToBuildTsSdk from "@/writing/the-right-way-to-build-ts-sdk.png";

import CompilationOfMasteringGo from "@/writing/compilation-of-mastering-go.png";

import Ending2025 from "@/writing/ending-2025.png";

import JavaScriptDesignPatternsInTheAiEra from "@/writing/javaScript-design-patterns-in-the-ai-era.png";
import RenderingAndPerformanceInClientSideJavaScript from "@/writing/rendering-and-performance-in-client-side-javascript.png";

export type Writing = {
  name: string;
  link: string;
  img: StaticImageData;
};

export const WRITINGS: { [key: string]: Writing[] } = {
  "Jan '26": [
    {
      name: "rendering-and-performance-in-client-side-javascript",
      link: "https://hsnice16.medium.com/rendering-and-performance-in-client-side-javascript-9355f99ff9e0",
      img: RenderingAndPerformanceInClientSideJavaScript,
    },
    {
      name: "javascript-design-patterns-in-the-ai-era",
      link: "https://hsnice16.medium.com/javascript-design-patterns-in-the-ai-era-78713c9f82a0",
      img: JavaScriptDesignPatternsInTheAiEra,
    },
  ],
  "Dec '25": [
    {
      name: "ending-2025!",
      link: "https://hsnice16.medium.com/ending-2025-792158796495",
      img: Ending2025,
    },
  ],
  "Jul '25": [
    {
      name: "compilation-of-mastering-go",
      link: "https://hsnice16.medium.com/compilation-of-mastering-go-2d48cebaebed",
      img: CompilationOfMasteringGo,
    },
  ],
  "Apr '25": [
    {
      name: "the-right-way-to-build-a-typescript-sdk",
      link: "https://hsnice16.medium.com/the-right-way-to-build-a-typescript-sdk-75657476bc95",
      img: TheRightWayToBuildTsSdk,
    },
  ],
  "Jan '25": [
    {
      name: "design-a-perpetual-trading-dapp-system",
      link: "https://medium.com/@hsnice16/design-a-perpetual-trading-dapp-system-9477908ed718",
      img: DesignAPerpetualTradingDappSystem,
    },
  ],
  "Nov '24": [
    {
      name: "deploy-a-node-js-app-on-ec2",
      link: "https://medium.com/@hsnice16/deploy-a-node-js-app-on-ec2-06b09d188f5f",
      img: DeployANodeJSAppOnEC2,
    },
    {
      name: "track-token-price-change-in-solana",
      link: "https://medium.com/@hsnice16/track-token-price-change-in-solana-7d6dbd363c69",
      img: TrackTokenPriceChangeOnSolana,
    },
  ],
  "Oct '24": [
    {
      name: "connect-with-ssh-tunneling-in-nestjs-typeorm",
      link: "https://medium.com/@hsnice16/connect-with-ssh-tunneling-in-nestjs-typeorm-89d7fdb9d226",
      img: ConnectSSHTunnelNestJSTypeORM,
    },
    {
      name: "github-action-to-update-function-code-on-aws-lambda",
      link: "https://medium.com/@hsnice16/github-action-to-update-function-code-on-aws-lambda-b2ebe82784cf",
      img: GitHubActionUpdateFunctionAWSLambda,
    },
  ],
  "Sep '24": [
    {
      name: "lambda-function-to-access-rds-s3-and-eventbridge-in-aws",
      link: "https://medium.com/@hsnice16/lambda-function-to-access-rds-s3-and-eventbridge-in-aws-f55b95e7a5bc",
      img: LambdaFunctionRDSs3EventBridgeAWS,
    },
    {
      name: "use-private-aws-aurora-with-dbeaver-using-ssh-tunneling",
      link: "https://medium.com/@hsnice16/use-private-aws-aurora-with-dbeaver-using-ssh-tunneling-7372b546a52c",
      img: PrivateAWSAuroraDBeaver,
    },
  ],
  "Aug '24": [
    {
      name: "build-and-push-the-docker-image-on-aws-ecr-using-github-actions",
      link: "https://medium.com/@hsnice16/build-and-push-the-docker-image-on-aws-ecr-using-github-actions-ae58567dc79e",
      img: PushDockerImgAWSECR,
    },
  ],
  "Jul '24": [
    {
      name: "kpi-metric-card-component",
      link: "https://medium.com/@hsnice16/kpi-metric-card-component-0d0f516229f8",
      img: KPIMetricCardComp,
    },
  ],
  "Jun '24": [
    {
      name: "launched-my-side-project-on-two-platforms",
      link: "https://medium.com/@hsnice16/launched-my-side-project-on-two-platforms-57099d77f630",
      img: LaunchedMyTwoSideProject,
    },
  ],
  "May '24": [
    {
      name: "i-built-techinterviewexp-site",
      link: "https://medium.com/@hsnice16/i-built-techinterviewexp-site-54fb1d2a0d52",
      img: IBuiltTechInterviewSite,
    },
  ],
  "Mar '24": [
    {
      name: "hooks-supremacy-in-react",
      link: "https://medium.com/@hsnice16/hooks-supremacy-in-react-a164d96145a9",
      img: HooksSupremacyInReact,
    },
  ],
  "Feb '24": [
    {
      name: "write-your-own-telegram-wallet-bot",
      link: "https://medium.com/@hsnice16/write-your-own-telegram-wallet-bot-84a8877af038",
      img: WriteYourOwnTelegramWalletBot,
    },
  ],
  "Aug '23": [
    {
      name: "npx-create-web-starter-kit",
      link: "https://medium.com/@hsnice16/npx-create-web-starter-kit-4441b5c98540",
      img: NpxCreateWebStarterKit,
    },
  ],
  "Apr '23": [
    {
      name: "e2e-test-of-a-browser-extension-with-puppeteer",
      link: "https://medium.com/@hsnice16/e2e-test-of-a-browser-extension-with-puppeteer-865fdb2531e1",
      img: E2ETestBrowserExtension,
    },
  ],
  Previous: [
    {
      name: "send-large-files-from-frontend-to-the-backend",
      link: "https://medium.com/@hsnice16/send-large-files-from-frontend-to-the-backend-2f5f2414cc7c",
      img: SendLargeFilesFEtoBE,
    },
    {
      name: "why-you-should-not-use-export-default-in-javascript",
      link: "https://medium.com/@hsnice16/why-you-should-not-use-export-default-in-javascript-5fc1534de36b",
      img: NotUseExportDefaultInJS,
    },
    {
      name: "working-with-dom-in-javascript",
      link: "https://medium.com/@hsnice16/working-with-dom-in-javascript-276fea56bbbe",
      img: WorkingWithDOMInJS,
    },
    {
      name: "difference-between-a-scripting-language-and-a-programming-language",
      link: "https://medium.com/@hsnice16/difference-between-a-scripting-language-and-a-programming-language-fee061abe200",
      img: DiffBetweenScriptProgrammingLang,
    },
    {
      name: "why-do-we-call-reactjs-declarative",
      link: "https://medium.com/@hsnice16/why-do-we-call-reactjs-declarative-8a40a632b732",
      img: WhyDoCallReactJSDeclarative,
    },
    {
      name: "absolute-path-in-react-js",
      link: "https://medium.com/@hsnice16/absolute-path-in-react-js-a7bf314f23d7",
      img: AbsolutePathReactJS,
    },
    {
      name: "why-you-should-use-map-class-over-plain-object-in-javascript",
      link: "https://medium.com/@hsnice16/why-you-should-use-map-class-over-plain-object-in-javascript-96b704c1c592",
      img: MapClassOverPlainObjectInJS,
    },
    {
      name: "web-accessibility-a11y",
      link: "https://medium.com/@hsnice16/web-accessibility-a11y-755669a79153",
      img: WebAccessibilityA11y,
    },
    {
      name: "sneak-peek-into-html-parsing",
      link: "https://medium.com/@hsnice16/sneak-peek-into-html-parsing-cd6f9899d523",
      img: SneakPeekIntoHTMLParsing,
    },
    {
      name: "csrf-web-security-threat",
      link: "https://medium.com/@hsnice16/csrf-web-security-threat-20049b5ee92e",
      img: CSRFWebSecurityThreat,
    },
  ],
};
