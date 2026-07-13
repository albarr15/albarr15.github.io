import { ArrowLeft, ArrowUp, Check, X } from "lucide-react";
import ProjectSectionSpecs from "../ProjectSectionSpecs";
import { Button } from "../ui/button";
import { DetailsSectionContext } from "@/contexts/DetailsSectionContext";
import { useContext } from "react";
import { scrollToTop } from "@/utils/Scroll";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

import AboutUs from "@/assets/projects/Bequik/About Us.png";
import Opportunities from "@/assets/projects/Bequik/Career Opportunities.png";
import Position from "@/assets/projects/Bequik/Career Position.png";
import Careers from "@/assets/projects/Bequik/Careers.png";
import ContactUs from "@/assets/projects/Bequik/Contact Us.png";
import Post from "@/assets/projects/Bequik/News & Articles Post.png";
import NewsArticles from "@/assets/projects/Bequik/News & Articles.png";

export default function BequikSection() {
  const { setSelectedProject } = useContext(DetailsSectionContext);
  return (
    <>
      <div className="flex flex-col pt-8">
        <section className="flex flex-col gap-10 items-start scroll-mt-24">
          <Button
            variant={"outline"}
            onClick={() => setSelectedProject("")}
            className="autoShow"
          >
            <ArrowLeft />
            Go Back
          </Button>
          <div className="autoShow">
            <ProjectSectionSpecs
              startDate={new Date(2026, 5)}
              endDate={new Date(2026, 5)}
              title="Content Expansion of the Bequik Website"
              desc="Explored and designed additional pages for Bequik's website, including Careers, About Us, Contact Us, and News & Articles, to expand the site beyond a single landing page while staying consistent with the existing design."
              tools={["Figma"]}
              altText="Content Expansion of the Bequik Website"
              projectType="User Interface & User Experience (UI&UX) Design "
              companyName="Bequik Information Solutions"
            />
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">The Problem</span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                Bequik Information Solutions is a sister company of ABBE and is
                also in the IT industry. At the time of this project, their
                website consisted of a single landing page showcasing their
                services, partnerships, offerings, and a free assessment request
                form.
              </p>
              <p>
                While this was enough to introduce the company's services, it
                left little room to communicate who Bequik is as a company.
                Information for potential applicants, partners, and clients was
                missing, making it difficult for users and potential clients to
                find what they were looking for.
              </p>
              <p>
                To address this, I was tasked with exploring additional pages
                that could expand the website's content while staying consistent
                with the existing design.
              </p>
            </div>
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">
              Research & Competitive Analysis
            </span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                To better understand what users might expect from an IT
                company's website, I explored websites from similar companies in
                the industry.
              </p>
              <p>
                From my research, I found that most companies went beyond a
                single landing page and organized their content into dedicated
                sections.
              </p>
            </div>

            <div className="autoShow my-8">
              <Table>
                <TableCaption>
                  Key findings from the competitive analysis.
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead className="text-center">Bequik's Site</TableHead>
                    <TableHead className="text-center">
                      Other Company Sites
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Multi-page website
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-red-100 p-1">
                        <X className="size-4 text-red-600" />
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-green-100 p-1">
                        <Check className="size-4 text-green-600" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Careers page</TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-red-100 p-1">
                        <X className="size-4 text-red-600" />
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-green-100 p-1">
                        <Check className="size-4 text-green-600" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Contact page</TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-red-100 p-1">
                        <X className="size-4 text-red-600" />
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-green-100 p-1">
                        <Check className="size-4 text-green-600" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      News or blog page
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-red-100 p-1">
                        <X className="size-4 text-red-600" />
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-green-100 p-1">
                        <Check className="size-4 text-green-600" />
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Company-specific imagery
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-red-100 p-1">
                        <X className="size-4 text-red-600" />
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center justify-center rounded-full bg-green-100 p-1">
                        <Check className="size-4 text-green-600" />
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground autoShow">
              <p>
                One thing that stood out to me was how many companies showcased
                their own teams instead of relying heavily on illustrations or
                text. Seeing real people behind the company made these websites
                feel much more trustworthy and approachable.
              </p>
              <p>
                These findings became the basis for deciding which new pages to
                propose for Bequik.
              </p>
            </div>
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">
              Designing the Solution in Figma
            </span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                Once the proposed pages were approved by the lead developer, I
                started designing them in Figma.
              </p>
              <p>
                Since these pages would eventually be integrated into the
                existing website, maintaining visual consistency was important.
                Rather than manually recreating every font, spacing value, and
                color from the live website, I first converted the existing HTML
                into a Figma file using
                <span className="font-medium"> html.to.design by divRIOTS</span>
                . This gave me a strong starting point and allowed me to reuse
                existing design variables while polishing the layouts afterward.
              </p>
              <p>
                For layout inspiration, I browsed Dribbble to study different
                page structures and identify which layouts best suited each
                page's content.
              </p>
              <p>
                Because Bequik had limited published content and photography
                available during the project, I temporarily used relevant stock
                images and generated placeholder copy. These assets were
                intended only for presentation and would later be replaced once
                the marketing team finalized the content.
              </p>
            </div>
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">Careers</span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                Rather than immediately listing available jobs, I wanted
                applicants to first get a glimpse of Bequik's culture through a
                large team photo, followed by sections highlighting the
                company's mission, values, and employee benefits. This allows
                potential applicants to determine whether they're a good culture
                fit before exploring available roles.
              </p>

              <div className="text-sm flex flex-col gap-2 autoShow">
                <div className="w-full h-fit rounded-md outline-1 outline-secondary shadow-md overflow-hidden">
                  <img src={Careers} className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">Career Opportunities</span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                Open positions are presented using a clear card layout with
                important information such as department, location, and
                employment type displayed as badges for quick scanning. Search
                and filtering options were also included to help users quickly
                find relevant positions.
              </p>

              <div className="text-sm flex flex-col gap-2 autoShow">
                <div className="w-full max-h-96 h-fit rounded-md outline-1 outline-secondary shadow-md overflow-hidden">
                  <img src={Opportunities} className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">Job Details & Application</span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                Clicking on "Apply Now" opens a dedicated job description page
                containing an overview of the role, responsibilities,
                qualifications, and requirements.
              </p>
              <p>
                To reduce friction during the application process, the
                application form is designed only to accept specific data in
                mind. Fo example, name fields are placed together, phone numbers
                include a +63 prefix, and supporting documents can be uploaded
                through drag-and-drop.
              </p>

              <div className="text-sm flex flex-col gap-2 autoShow">
                <div className="w-full max-h-96 h-fit rounded-md shadow-md outline-1 outline-secondary overflow-hidden">
                  <img src={Position} className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">About Us</span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                Rather than presenting the company as just another IT provider,
                this page aims to humanize the brand and help visitors better
                understand the people behind the business.
              </p>

              <div className="text-sm flex flex-col gap-2 autoShow">
                <div className="w-full h-fit rounded-md outline-1 outline-secondary shadow-md overflow-hidden">
                  <img src={AboutUs} className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">Contact Us</span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                The Contact page centralizes everything a visitor needs to reach
                the company. Alongside the company's contact information and
                office location, an inquiry form allows users to indicate which
                services they're interested in. These tags can later help route
                inquiries to the appropriate internal teams.
              </p>

              <div className="text-sm flex flex-col gap-2 autoShow">
                <div className="w-full h-fit rounded-md shadow-md outline-1 outline-secondary overflow-hidden">
                  <img src={ContactUs} className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">News & Articles</span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                For visitors who want to learn more about Bequik beyond its
                services, I proposed a News & Articles section. This page
                displays company news, event highlights, and blog posts. The
                current content is sourced directly from Bequik's LinkedIn page
                to keep the website updated with accurate company information.
              </p>

              <div className="text-sm flex flex-col gap-2 autoShow">
                <div className="w-full mb-4 h-fit rounded-md shadow-md outline-1 outline-secondary overflow-hidden">
                  <img src={NewsArticles} className="object-cover" />
                </div>
                <div className="w-full h-fit rounded-md shadow-md outline-1 outline-secondary overflow-hidden">
                  <img src={Post} className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">Design Validation</span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                To validate the proposed designs, the lead developer and I
                presented them to Bequik's marketing lead.
              </p>
              <p>
                Most of the pages were approved, with only a few suggestions for
                improvement. During the review, Bequik also announced a branding
                update, shifting from its existing dark blue palette to a new
                purple-and-black identity. As a result, the designs would
                eventually need to be revised to match the company's updated
                branding.
              </p>
              <p>
                Additional pages were also suggested, including an Industry page
                showcasing solutions for different sectors and an Events page
                for promoting upcoming activities and company events.
              </p>
              <p>
                Although I wasn't able to implement these revisions before my
                internship concluded, the stakeholder review provided valuable
                validation and clear direction for future iterations.
              </p>
            </div>
          </div>

          <div className="autoShow">
            <span className="pb-5 font-medium">My Takeaway</span>
            <div className="text-sm flex flex-col gap-6 text-justify text-muted-foreground">
              <p>
                This project gave me the opportunity to experience the design
                process beyond creating polished interfaces.
              </p>
              <p>
                From researching similar companies and identifying opportunities
                in Bequik's existing website, to designing new pages, presenting
                them to stakeholders, and receiving feedback, I gained a much
                better understanding of how UI design fits into a real product
                workflow.
              </p>
              <p>
                Lastly, I am grateful to our team lead, Sir Igie Baldesanso, for
                trusting me with this project and giving me the opportunity to
                contribute to Bequik's company site redesign.
              </p>
            </div>
          </div>
          <Button
            variant={"outline"}
            onClick={() => scrollToTop()}
            className="w-full autoShow"
          >
            <ArrowUp />
            Go Back to Top
          </Button>
        </section>
      </div>
    </>
  );
}
