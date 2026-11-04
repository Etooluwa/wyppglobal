import { footerLinks } from './site-links';

export default function Footer() {
  return (
    <footer>
      <a className="footerBrand" href="/#top">WYPP</a>
      <p>When Young People Pray<br />Prayer. Revival. Global.</p>
      <div className="footerLinks">
        {footerLinks.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
      </div>
      <p className="copyright">© {new Date().getFullYear()} WYPP Global</p>
    </footer>
  );
}
