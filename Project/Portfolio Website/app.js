const { useEffect, useMemo, useState } = React

const routes = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skill & Interest' },
  { path: '/projects', label: 'Project' },
  { path: '/contact', label: 'Contact' },
]

const profile = {
  name: 'Tahrim Janin',
  roles: ['Frontend Developer', 'Competitive Programmer', 'Aspiring Software Engineer'],
  email: 'jenintahrim@gmail.com',
  cv: './Tahrim_janin_Cv.pdf',
  socials: [
    { label: 'GitHub', icon: 'bxl-github', href: 'https://github.com/Tahrimjanin' },
    {
      label: 'LinkedIn',
      icon: 'bxl-linkedin',
      href: 'https://www.linkedin.com/in/tahrim-janin-b51a98291',
    },
    { label: 'Facebook', icon: 'bxl-facebook-circle', href: 'https://www.facebook.com/tahrim.janin' },
    { label: 'Instagram', icon: 'bxl-instagram', href: 'https://www.instagram.com/tahrim_janin' },
  ],
}

const skills = ['HTML', 'CSS', 'JavaScript', 'React JS', 'Python', 'Django', 'Git', 'Problem Solving']

const interests = [
  'Full stack web development',
  'Competitive programming',
  'ICPC preparation',
  'Clean UI design',
  'Scalable backend systems',
]

const projects = [
  {
    name: 'Portfolio Website',
    stack: 'React JS, HTML, CSS',
    description: 'A multi-page personal portfolio with clean routing, profile details, CV download, and contact links.',
  },
  {
    name: 'Django Learning Projects',
    stack: 'Python, Django',
    description: 'Practice projects focused on backend routing, templates, database models, and full stack workflow.',
  },
  {
    name: 'Problem Solving Practice',
    stack: 'C++, Python',
    description: 'Regular algorithm practice for contests, ICPC preparation, and stronger data structure knowledge.',
  },
]

function getRoute() {
  const hash = window.location.hash.replace('#', '')
  return routes.some((route) => route.path === hash) ? hash : '/'
}

function App() {
  const [currentRoute, setCurrentRoute] = useState(getRoute())

  useEffect(() => {
    const onHashChange = () => setCurrentRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const Page = useMemo(() => {
    return {
      '/': Home,
      '/about': About,
      '/skills': Skills,
      '/projects': Projects,
      '/contact': Contact,
    }[currentRoute]
  }, [currentRoute])

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Navbar, { currentRoute }),
    React.createElement(
      'div',
      { className: 'bars-animation' },
      [6, 5, 4, 3, 2, 1].map((i) =>
        React.createElement('div', { key: i, className: 'bar', style: { '--i': i } }),
      ),
    ),
    React.createElement('main', { className: 'page-shell' }, React.createElement(Page)),
  )
}

function Navbar({ currentRoute }) {
  return React.createElement(
    'nav',
    { className: 'navbar' },
    React.createElement('a', { href: '#/', className: 'logo' }, 'Portfolio'),
    React.createElement(
      'ul',
      null,
      routes.map((route) =>
        React.createElement(
          'li',
          { key: route.path, className: currentRoute === route.path ? 'active' : '' },
          React.createElement('a', { href: `#${route.path}` }, route.label),
        ),
      ),
    ),
  )
}

function Home() {
  return React.createElement(
    'section',
    { className: 'home page-view' },
    React.createElement(
      'div',
      { className: 'home-info' },
      React.createElement('p', { className: 'eyebrow' }, 'CSE Student'),
      React.createElement('h1', null, profile.name),
      React.createElement(
        'h2',
        null,
        'I am ',
        profile.roles.map((role, index) =>
          React.createElement(
            'span',
            {
              key: role,
              style: { '--i': profile.roles.length - index },
              'data-text': role,
            },
            role,
          ),
        ),
      ),
      React.createElement(
        'p',
        { className: 'description' },
        'I am a Computer Science and Engineering student with a strong passion for software engineering and competitive programming. I am focusing on ICPC preparation, problem solving, and becoming a full-stack web developer.',
      ),
      React.createElement(
        'div',
        { className: 'btn-sci' },
        React.createElement(
          'a',
          {
            href: profile.cv,
            className: 'btn',
            download: 'Tahrim_janin_Cv.pdf',
            target: '_blank',
            rel: 'noreferrer',
            type: 'application/pdf',
          },
          'Download CV',
        ),
        React.createElement(SocialLinks),
      ),
    ),
    React.createElement(ProfileImage),
  )
}

function About() {
  return React.createElement(
    PageSection,
    { title: 'About', kicker: 'Who I am' },
    React.createElement(
      'p',
      null,
      'I am Tahrim Janin, a CSE student from Bangladesh. I enjoy building practical web projects and learning how frontend and backend systems connect together.',
    ),
    React.createElement(
      'p',
      null,
      'My current focus is React JS, Django, clean user interfaces, and contest-style problem solving. I like projects that are simple to use but technically meaningful.',
    ),
  )
}

function Skills() {
  return React.createElement(
    PageSection,
    { title: 'Skill & Interest', kicker: 'What I work with' },
    React.createElement(
      'div',
      { className: 'split-grid' },
      React.createElement(
        'div',
        null,
        React.createElement('h3', null, 'Skills'),
        React.createElement(
          'div',
          { className: 'chip-list' },
          skills.map((skill) => React.createElement('span', { key: skill }, skill)),
        ),
      ),
      React.createElement(
        'div',
        null,
        React.createElement('h3', null, 'Interests'),
        React.createElement(
          'ul',
          { className: 'text-list' },
          interests.map((interest) => React.createElement('li', { key: interest }, interest)),
        ),
      ),
    ),
  )
}

function Projects() {
  return React.createElement(
    PageSection,
    { title: 'Project', kicker: 'Selected work' },
    React.createElement(
      'div',
      { className: 'project-grid' },
      projects.map((project) =>
        React.createElement(
          'article',
          { key: project.name, className: 'project-card' },
          React.createElement('p', { className: 'project-stack' }, project.stack),
          React.createElement('h3', null, project.name),
          React.createElement('p', null, project.description),
        ),
      ),
    ),
  )
}

function Contact() {
  return React.createElement(
    PageSection,
    { title: 'Contact', kicker: 'Let us connect' },
    React.createElement(
      'p',
      null,
      'Open to class projects, collaborations, internships, and learning opportunities. You can reach me anytime.',
    ),
    React.createElement('a', { className: 'contact-email', href: `mailto:${profile.email}` }, profile.email),
    React.createElement(SocialLinks),
  )
}

function PageSection({ title, kicker, children }) {
  return React.createElement(
    'section',
    { className: 'content-page page-view' },
    React.createElement(
      'div',
      { className: 'content-card' },
      React.createElement('p', { className: 'eyebrow' }, kicker),
      React.createElement('h1', null, title),
      React.createElement('div', { className: 'content-body' }, children),
    ),
  )
}

function ProfileImage() {
  return React.createElement(
    'div',
    { className: 'home-img' },
    React.createElement(
      'div',
      { className: 'img-box' },
      React.createElement(
        'div',
        { className: 'img-item' },
        React.createElement('img', { src: 'picu.png', alt: 'Tahrim Janin' }),
      ),
    ),
  )
}

function SocialLinks() {
  return React.createElement(
    'div',
    { className: 'sci', 'aria-label': 'Social links' },
    profile.socials.map((social) =>
      React.createElement(
        'a',
        { key: social.label, href: social.href, target: '_blank', rel: 'noreferrer', 'aria-label': social.label },
        React.createElement('i', { className: `bx ${social.icon}` }),
      ),
    ),
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App))
