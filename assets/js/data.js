const TABS_DATA = [
  { id: 'home', label: 'home' },
  { id: 'links', label: 'links' },
  { id: 'blog', label: 'blog' }
];

const PAGES_DATA = {
  home: {
    title: 'ur not supposed to be here',
    tagline: 'programmer and game enthusiast!',
    content: `
      <div class="hero-card">
        <h3>hello</h3>
        <p>welcome to my personal site on the web. explore my links or check out my blog posts for ABSOLUTELY NOTHING !</p>
      </div>

      <h3 style="margin-top: 1.5rem; margin-bottom: 0.75rem;">dont check out my labubu friend's matching site!</h3>
      <div class="links-grid">
        <a href="https://quaku-codez.github.io/" target="_blank" rel="noopener noreferrer" class="link-card">
          <h3>sister site ↗</h3>
          <p>matching sites with my labubuicious friend - check out their NOT SO cool space on the web!</p>
        </a>
      </div>
    `
  },
  links: {
    title: 'links',
    tagline: 'dont find me around the web',
    linksList: [
      { name: 'GitHub', url: 'https://github.com/NippyTheDev', desc: 'my repositories and projects (I have none)' },
      { name: 'Twitter / X', url: '#', desc: 'filler' },
      { name: 'Roblox Profile', url: '#', desc: 'filler' }
    ]
  }
};

const BLOG_POSTS = [
  {
    id: 'no',
    title: 'definitely not a post',
    date: 'July 24, 2026',
    summary: 'nothing there',
    tags: ['no'],
    puzzles: [
      {
        id: 'nothing-1',
        index: '#1',
        difficulty: '67',
        title: 'scat john',
        subtitle: 'very easy',
        status: 'unsolved'
      }
    ],
    body: `
      <p>please leave</p>

      <puzzle-index></puzzle-index>

      <p>no</p>

      <puzzle-card id="puzzle-1" class="unsolved">
        <h3>#1: scat john</h3>
        <p>puzzle.....</p>
        <solution-box>
          <strong>Solution:</strong> idk i'm not a puzzle solver LMAo
        </solution-box>
      </puzzle-card>
    `
  }
];