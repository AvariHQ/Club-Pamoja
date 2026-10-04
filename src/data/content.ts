/**
 * Shared structured content. Items marked `review` need Club Pamoja confirmation
 * (ids map to docs/CONTENT-REVIEW.md).
 */
import type { Step } from '../components/ProcessTimeline.astro';

/** Member journey — structure from the project brief. Review: CR-04 */
export const memberJourney: Step[] = [
  {
    title: 'Apply',
    body: 'Apply through a member referral, or directly while Open Enrollment is open. The application fee is paid at this stage.',
    href: '/how-to-join/',
    linkLabel: 'How to join',
  },
  {
    title: 'Verify + Activate',
    body: 'Your application is reviewed. Once approved, the one-time activation fee activates your membership and your member portal account.',
    href: '/contributions-fees/',
    linkLabel: 'Fees explained',
  },
  {
    title: 'Contribute when the community is called',
    body: 'When a member or an eligible registered family member dies, members are called to contribute a set amount.',
    href: '/contributions-fees/#contributions',
    linkLabel: 'Contribution rules',
  },
  {
    title: 'Receive coordinated support when eligible',
    body: 'When loss reaches your family, the community’s coordinated support is administered according to the bylaws.',
    href: '/bereavement-support/',
    linkLabel: 'Bereavement support',
  },
];

/** Bereavement stages — names from the project brief, pending confirmation. Review: CR-05 */
export const bereavementStages: Step[] = [
  { title: 'Notification', body: 'The family, or someone acting for them, notifies Club Pamoja administration of the death.' },
  { title: 'Verification', body: 'Administration verifies the loss and confirms the person was a member or an eligible registered family member.' },
  { title: 'Member communication', body: 'Members are informed of the loss and of the contribution being called.' },
  { title: 'Contribution', body: 'Members contribute the set amount for the type of loss.' },
  { title: 'Administration', body: 'Contributions are recorded and reconciled by administration.' },
  { title: 'Disbursement & closure', body: 'Support is disbursed to the designated beneficiary and the campaign is closed and recorded.' },
];

/** What membership connects you to — functions only. Review: CR-06 */
export const membershipFunctions = [
  { title: 'An organized community', body: 'Members of the Kenyan diaspora across the United States, committed to standing with one another in loss.' },
  { title: 'Bereavement coordination', body: 'A defined process for notification, verification and member communication when a loss occurs.' },
  { title: 'Transparent contributions', body: 'Fixed, published contribution amounts. Every member knows what is asked and why.' },
  { title: 'Beneficiary records', body: 'Your registered family members and beneficiary details, held on record before they are needed.' },
  { title: 'The member portal', body: 'A separate, secure portal for members to manage their membership.' },
  { title: 'Structured administration', body: 'Professional administration operating under written bylaws, not informal arrangements.' },
];
