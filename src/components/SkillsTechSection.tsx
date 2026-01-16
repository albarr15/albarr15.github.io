import SectionWrapper from "@/components/SectionWrapper";

import BootstrapLogo from "@/assets/logos/icons8-bootstrap.svg";
import CLogo from "@/assets/logos/icons8-c-programming.svg";
import CplusplusLogo from "@/assets/logos/icons8-c++.svg";
import CSS3Logo from "@/assets/logos/icons8-css3.svg";
import FigmaLogo from "@/assets/logos/icons8-figma.svg";
import FlaskLogo from "@/assets/logos/icons8-flask.svg";
import GitLogo from "@/assets/logos/icons8-git.svg";
import GithubLogo from "@/assets/logos/icons8-github.svg";
import HTML5Logo from "@/assets/logos/icons8-html-5.svg";
import JavaLogo from "@/assets/logos/icons8-java.svg";
import JavaScriptLogo from "@/assets/logos/icons8-javascript.svg";
import KotlinLogo from "@/assets/logos/icons8-kotlin.svg";
import MongoDBLogo from "@/assets/logos/icons8-mongodb.svg";
import MySQLLogo from "@/assets/logos/icons8-mysql-logo.svg";
import NodeJSLogo from "@/assets/logos/icons8-nodejs.svg";
import PostgreSQLLogo from "@/assets/logos/icons8-postgresql.svg";
import PythonLogo from "@/assets/logos/icons8-python.svg";
import ReactLogo from "@/assets/logos/icons8-react-native.svg";
import SupabaseLogo from "@/assets/logos/icons8-supabase.svg";
import TailwindCSSLogo from "@/assets/logos/icons8-tailwind-css.svg";
import TypeScriptLogo from "@/assets/logos/icons8-typescript.svg";
import VSCodeLogo from "@/assets/logos/icons8-visual-studio-code-2019.svg";
import VueLogo from "@/assets/logos/icons8-vue-js.svg";

import SkillsLogoGrid from "@/components/SkillsLogoGrid";

export default function SkillsTechSection() {
  return (
    <SectionWrapper id="skills" title="Skills & Technologies">
      <SkillsLogoGrid title="LANGUAGES">
        <img src={HTML5Logo} alt="HTML5 Logo." width="50" height="50" />
        <img src={CSS3Logo} alt="CSS3 Logo." width="50" height="50" />
        <img src={BootstrapLogo} alt="Bootstrap Logo." width="50" height="50" />
        <img
          src={JavaScriptLogo}
          alt="JavaScript Logo."
          width="50"
          height="50"
        />
        <img
          src={TypeScriptLogo}
          alt="TypeScript Logo."
          width="50"
          height="50"
        />
        <img src={CLogo} alt="C Logo." width="50" height="50" />
        <img src={CplusplusLogo} alt="C++ Logo." width="50" height="50" />
        <img src={JavaLogo} alt="Java Logo." width="50" height="50" />
        <img src={PythonLogo} alt="Python Logo." width="50" height="50" />
        <img src={KotlinLogo} alt="Kotlin Logo." width="50" height="50" />
      </SkillsLogoGrid>
      <SkillsLogoGrid title="FRAMEWORKS & LIBRARIES">
        <img src={ReactLogo} alt="React Logo." width="50" height="50" />
        <img src={VueLogo} alt="Vue Logo." width="50" height="50" />
        <img
          src={TailwindCSSLogo}
          alt="Tailwind CSS Logo."
          width="50"
          height="50"
        />
        <img src={BootstrapLogo} alt="Bootstrap Logo." width="50" height="50" />
        <img src={FlaskLogo} alt="Flask Logo." width="50" height="50" />
        <img src={NodeJSLogo} alt="Nodejs Logo." width="50" height="50" />
      </SkillsLogoGrid>
      <SkillsLogoGrid title="TOOLS & DATABASES">
        <img src={MySQLLogo} alt="MySQL Logo." width="50" height="50" />
        <img
          src={PostgreSQLLogo}
          alt="Postgresql Logo."
          width="50"
          height="50"
        />
        <img src={SupabaseLogo} alt="Supabase Logo." width="50" height="50" />
        <img src={MongoDBLogo} alt="MongoDB Logo." width="50" height="50" />
        <img
          src={VSCodeLogo}
          alt="Visual Studio Code Logo."
          width="50"
          height="50"
        />
        <img src={GithubLogo} alt="GitHub Logo." width="50" height="50" />
        <img src={GitLogo} alt="Git Logo." width="50" height="50" />
        <img src={FigmaLogo} alt="Figma Logo." width="50" height="50" />
      </SkillsLogoGrid>
    </SectionWrapper>
  );
}
