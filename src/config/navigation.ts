export interface NavLink {
  label: string;
  href: string;
  description?: string;
}
export interface NavGroup {
  label: string;
  href: string;
  intro: string;
  links: NavLink[];
}

export const primaryNav: NavGroup[] = [
  {
    label: 'Membership',
    href: '/membership/',
    intro: 'What membership is, what it costs, and how to join.',
    links: [
      { label: 'Membership overview', href: '/membership/', description: 'What it means to be a member' },
      { label: 'How to join', href: '/how-to-join/', description: 'Referral or direct application' },
      { label: 'Open Enrollment', href: '/open-enrollment/', description: 'Direct applications are open now' },
      { label: 'Contributions & fees', href: '/contributions-fees/', description: 'Every amount, explained' },
    ],
  },
  {
    label: 'How It Works',
    href: '/how-it-works/',
    intro: 'The member journey, from application to standing with another family.',
    links: [
      { label: 'The member journey', href: '/how-it-works/', description: 'Four stages of membership' },
      { label: 'Eligible family', href: '/coverage/', description: 'Who may be registered' },
      { label: 'Beneficiaries', href: '/beneficiaries/', description: 'Keeping your records current' },
    ],
  },
  {
    label: 'Bereavement Support',
    href: '/bereavement-support/',
    intro: 'What happens when a loss occurs, and how the community responds.',
    links: [
      { label: 'Bereavement support', href: '/bereavement-support/', description: 'How the community responds' },
      { label: 'The bereavement process', href: '/bereavement-process/', description: 'Each stage, in order' },
      { label: 'Report a loss', href: '/contact/#report-a-loss', description: 'First steps for families' },
    ],
  },
  {
    label: 'Transparency',
    href: '/transparency/',
    intro: 'How contributions are accounted for, and how Club Pamoja is governed.',
    links: [
      { label: 'Our commitment', href: '/transparency/', description: 'How funds are accounted for' },
      { label: 'Reports', href: '/reports/', description: 'Published financial reporting' },
      { label: 'Governance', href: '/governance/', description: 'Bylaws, oversight and rules' },
    ],
  },
  {
    label: 'About',
    href: '/about/',
    intro: 'Why Club Pamoja exists and the community it serves.',
    links: [
      { label: 'About Club Pamoja', href: '/about/', description: 'Pamoja means together' },
      { label: 'Safety & privacy', href: '/safety/', description: 'Protecting members and their data' },
      { label: 'Contact', href: '/contact/', description: 'Reach the administration team' },
    ],
  },
  {
    label: 'Resources',
    href: '/help/',
    intro: 'Answers, documents and help.',
    links: [
      { label: 'Help centre', href: '/help/', description: 'Start here for answers' },
      { label: 'FAQ', href: '/faq/', description: 'Common questions' },
      { label: 'Legal & policies', href: '/legal/', description: 'Bylaws, terms and privacy' },
    ],
  },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Membership',
    links: [
      { label: 'Membership overview', href: '/membership/' },
      { label: 'How to join', href: '/how-to-join/' },
      { label: 'Open Enrollment', href: '/open-enrollment/' },
      { label: 'Contributions & fees', href: '/contributions-fees/' },
      { label: 'Eligible family', href: '/coverage/' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'How it works', href: '/how-it-works/' },
      { label: 'Bereavement support', href: '/bereavement-support/' },
      { label: 'Bereavement process', href: '/bereavement-process/' },
      { label: 'Beneficiaries', href: '/beneficiaries/' },
    ],
  },
  {
    heading: 'Institution',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Transparency', href: '/transparency/' },
      { label: 'Reports', href: '/reports/' },
      { label: 'Governance', href: '/governance/' },
      { label: 'Safety & privacy', href: '/safety/' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { label: 'Help centre', href: '/help/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: 'Legal', href: '/legal/' },
  { label: 'Bylaws', href: '/bylaws/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Accessibility', href: '/accessibility/' },
];
