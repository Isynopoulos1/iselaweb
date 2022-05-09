import About from "@pages/about/About";
import Work from "@pages/work/Work";
import Contact from "@pages/contact/Contact";

export const routes = [
  { path: "/about", component: About, label: "About" },
  { path: "/work", component: Work, label: "Work" },
  { path: "/contact", component: Contact, label: "Contact" },
];
