/**
 * FAQ. Answers are plain text/HTML limited to verified facts.
 * Items with `review` are published with a safe referral answer and listed in docs/CONTENT-REVIEW.md.
 */
import { fees, usd } from '../config/site';

export interface FaqItem { q: string; a: string; category: string; featured?: boolean; review?: string }

export const faqs: FaqItem[] = [
  {
    category: 'About Club Pamoja',
    featured: true,
    q: 'Is Club Pamoja an insurance company?',
    a: 'No. Club Pamoja is a mutual-aid community. Members support one another when a loss occurs, under the Club Pamoja bylaws. Membership is not an insurance policy, contributions are not premiums, and support is not an insurance benefit.',
  },
  {
    category: 'About Club Pamoja',
    q: 'Who is Club Pamoja for?',
    a: 'Club Pamoja serves members of the Kenyan diaspora living in the United States who want an organized community in place before a loss occurs.',
    review: 'CR-07',
  },
  {
    category: 'Joining',
    featured: true,
    q: 'How do I become a member?',
    a: 'There are two ways to join: through a referral from an existing member, or by applying directly while Open Enrollment is open. Open Enrollment is open now. See <a href="/how-to-join/">How to join</a>.',
  },
  {
    category: 'Joining',
    featured: true,
    q: 'How much does it cost to join?',
    a: `Joining involves two payments: a ${usd(fees.application)} application fee and a one-time ${usd(fees.activation)} activation fee. See <a href="/contributions-fees/">Contributions &amp; fees</a>.`,
  },
  {
    category: 'Joining',
    q: 'What is Open Enrollment?',
    a: 'Open Enrollment is a period during which people may apply for membership directly, without a referral. Open Enrollment is currently open.',
  },
  {
    category: 'Contributions',
    featured: true,
    q: 'What will I be asked to contribute after a loss?',
    a: `When a member dies, each member is called to contribute ${usd(fees.memberContribution)}. When an eligible registered family member dies, each member is called to contribute ${usd(fees.familyContribution)}. Full rules are set out in <a href="/contributions-fees/">Contributions &amp; fees</a> and the <a href="/bylaws/">bylaws</a>.`,
  },
  {
    category: 'Contributions',
    q: 'Are contributions the same as insurance premiums?',
    a: 'No. A contribution is a member’s share in supporting another member family after a death. It is not a premium and does not purchase insurance coverage.',
  },
  {
    category: 'Contributions',
    q: 'What happens if I miss a contribution?',
    a: 'Member obligations, including what happens if a contribution is not made, are set out in the Club Pamoja <a href="/bylaws/">bylaws</a>. If you have a question about your account, sign in to the member portal or <a href="/contact/">contact administration</a>.',
    review: 'CR-10',
  },
  {
    category: 'Family & beneficiaries',
    featured: true,
    q: 'Which family members can I register?',
    a: 'Eligible family members are defined in the Club Pamoja bylaws. See <a href="/coverage/">Eligible family</a> for an overview, and register family members through the member portal.',
    review: 'CR-02',
  },
  {
    category: 'Family & beneficiaries',
    q: 'Why should I keep my beneficiary details current?',
    a: 'Support following a loss is administered according to the records held for your membership. Keeping registered family members and beneficiary details accurate helps administration act promptly for your family. See <a href="/beneficiaries/">Beneficiaries</a>.',
  },
  {
    category: 'When a loss occurs',
    featured: true,
    q: 'What should my family do when a loss occurs?',
    a: 'Notify Club Pamoja administration as soon as practical. Administration will guide the family through verification and next steps. See <a href="/bereavement-process/">The bereavement process</a> and <a href="/contact/#report-a-loss">Report a loss</a>.',
  },
  {
    category: 'Member portal',
    q: 'How do I sign in to the member portal?',
    a: 'Use the <strong>Member Sign In</strong> button at the top of any page. The member portal is a separate, secure system from this public website.',
  },
];

export const faqCategories = [...new Set(faqs.map((f) => f.category))];
