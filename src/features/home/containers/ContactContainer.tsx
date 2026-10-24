import Contact from "../components/Contact";
import { contactLinks } from "../data/home.data";
import { opensInNewTab } from "../domain/home.domain";

export default function ContactContainer() {
  const items = contactLinks.map((link) => ({ ...link, opensInNewTab: opensInNewTab(link) }));
  return <Contact items={items} />;
}
