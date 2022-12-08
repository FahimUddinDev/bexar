import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutUs from "../page/about/aboutUs";
import Blog from "../page/blog/blog/blog";
import BlogSidebar from "../page/blog/blogSidebar/blogSidebar";
import BlogDetails from "../page/blog/bolgDetails/blogDetails";
import CaseStudy from "../page/caseStudy/caseStudy";
import Contact from "../page/contact/contact";
import Home from "../page/home/Home";
import ProjectDetails from "../page/projectDetails/projectDetails";
import Service1 from "../page/service1/service1";
import Service2 from "../page/service2/service2";
import ServiceDetails from "../page/serviceDetails/serviceDetails";
import Team from "../page/team/team";
function Main() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/service1" element={<Service1 />} />
      <Route path="/service2" element={<Service2 />} />
      <Route
        path="/serviceDetails"
        element={
          <ServiceDetails
            name="INVESTMENT PLANNING"
            firstInfo="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image=""
            secondInfo="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.

            Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam."
            card={[
              {
                heading: "BENIFITS OF SERVICE",
                info: "Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.",
                bulleting: [
                  "Quality Services",
                  "Clients Satisfaction",
                  "Quality Services",
                  "Clients Satisfaction",
                  "Quality Services",
                  "Clients Satisfaction",
                ],
              },
              {
                heading: "BUSINESS STRATEGY",
                info: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum. sed ut perspiciatis unde omnis iste natus error sit voluptatem acusantium.",
                bulleting: ["Quality Services", "Clients Satisfaction"],
                image: "images/strategy.png",
              },
            ]}
          />
        }
      />
      <Route
        path="/projectDetails"
        element={
          <ProjectDetails
            name="CARPE DIEM SANTORINI"
            firstInfo="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            client="Australia"
            category="Investment"
            date=" 16 April, 2018"
            status="In Process"
            image="images/project-single.jpg"
            secondInfo="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
            card={[
              {
                heading: "THE CHALLENGE",
                info: "Excepteur sint occaecat cupidatat proident sunt in culpa qui officia ut dese runt mollit anim id est laborum. sed ut perspiciatis ex unde omnis iste natus error voluptatem acusantium. Eaque ipsa quae illo inventore verita tis et quasi architect beatae. vitae dicta sunt explicabo.",
                bulleting: [
                  "Quality Services",
                  "Clients Satisfaction",
                  "Clients Services",
                ],
              },
              {
                heading: "THE STRATEGY",
                info: "Excepteur sint occaecat cupidatat proident sunt in culpa qui officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptate? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, quaerat!",
                image: "images/strategy.png",
              },
            ]}
          />
        }
      />
      <Route path="/caseStudy" element={<CaseStudy />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogSidebar" element={<BlogSidebar />} />
      <Route
        path="/blogDetails"
        element={
          <BlogDetails
            image={"./images/post-single.jpg"}
            postBy={"ADMIN"}
            date={"2 SEP, 2018"}
            title={"ELIT DUIED AIUSMOD TEMPOR DID LABORE"}
            body={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.      sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veri. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation ullamco. laboris nisi ut aliquip ex ea commodo.by JENNIFER GARNER Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veri."
            }
            tags={["Business", "Marketing", "Finance"]}
          />
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/caseStudy" element={<CaseStudy />} />
    </Routes>
  );
}

export default Main;
