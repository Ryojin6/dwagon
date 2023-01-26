import '~/main.css';
import '~/transitions.css';
import aos from './aos';

const SCROLL_OFFSET = 10;

export default function main(Vue, { head }) {
  Vue.directive('aos', aos);

  const files = require.context('./', true, /\.vue$/i);

  files.keys().forEach((key) => {
    const path = key
      .split('/')
      .splice(1)
      .slice(0, -1)
      .map((part, index) => {
        if (index > 0 || part.substr(-1) !== 's') {
          return part;
        }

        return part.charAt(0).toUpperCase() + part.substr(1, part.length - 2);
      });

    const filename = key.split('/').pop().split('.')[0];

    if (filename !== 'index') {
      path.push(filename);
    }

    Vue.component(
      path
        .join('')
        .replace(/[[\]:]+/g, '-')
        .replace(/(^-+|-+$)/g, ''),
      files(key).default,
    );
  });

  head.link.push({
    rel: 'stylesheet',
    href: '/ie.css',
  });

  head.link.push(
    {
      rel: 'stylesheet',
      href: '/ie.css',
    },
    {
      rel: 'stylesheet',
      // eslint-disable-next-line max-len
      href: `https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap`,
    },
    {
      rel: 'stylesheet',
      // eslint-disable-next-line max-len
      href: `https://fonts.googleapis.com/css2?family=Oswald:wght@100;200;300;400;500&display=swap`,
    },
  );
  head.meta.push(
    {
      name: 'og:url',
      content: process.env.FRONTEND_URI,
    },
    {
      name: 'og:image',
      content: `${process.env.FRONTEND_URI}/ogmeta.png`,
    },
    {
      name: 'twitter:image',
      content: `${process.env.FRONTEND_URI}/ogmeta.png`,
    },
    {
      name: 'og:site_name',
      content: 'Dwagon',
    },
    {
      name: 'og:description',
      content: `$Dwagon is no longer a baby. It has grown and no longer needs daddy. $Dwagon will keep loyal to its community, including V1 holders.`,
    },
    {
      name: 'twitter:card',
      content: `$Dwagon is no longer a baby. It has grown and no longer needs daddy. $Dwagon will keep loyal to its community, including V1 holders.`,
    },
  );

  if (process.isClient) {
    const el = document.scrollingElement || document.documentElement;
    let ticking = false;

    document.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (el.scrollTop >= SCROLL_OFFSET) {
            el.classList.add('scrolled');
          } else {
            el.classList.remove('scrolled');
          }
          ticking = false;
        });

        ticking = true;
      }
    });
  }
}
