import ic3BadgeImg from '../assets/cert-ic3-gs6.png'
import networkingBadgeImg from '../assets/cert-its-networking.png'

/**
 * Verified industry certifications earned by Ahmad Paguta via Certiport (Pearson VUE)
 * and verifiable on Credly.
 */
export const certifications = [
  {
    id: 'its-networking',
    index: '01',
    title: 'IT Specialist — Networking',
    issuer: 'Certiport, a Pearson VUE Business',
    badgeImage: networkingBadgeImg,
    badgeAlt:
      'IT Specialist - Networking badge issued by Certiport, a Pearson VUE business',
    credlyUrl:
      'https://www.credly.com/badges/6da306d7-4858-438a-bfec-0be50650058e',
    shareUrl:
      'https://www.credly.com/earner/earned/share/6da306d7-4858-438a-bfec-0be50650058e',
    summary:
      'Demonstrates foundational networking knowledge and technical skills across TCP/IP protocols, networking services, network topologies, and troubleshooting in wired and wireless environments.',
    competencies: [
      'TCP/IP Model & Addressing',
      'Networking Services (DNS, DHCP)',
      'Wired & Wireless Topologies',
      'Network Troubleshooting & Security',
    ],
  },
  {
    id: 'ic3-gs6-level-1',
    index: '02',
    title: 'IC3 Digital Literacy Certification GS6 Level 1',
    issuer: 'Certiport, a Pearson VUE Business',
    badgeImage: ic3BadgeImg,
    badgeAlt:
      'IC3 Digital Literacy Certification GS6 Level 1 badge issued by Certiport, a Pearson VUE business',
    credlyUrl:
      'https://www.credly.com/badges/bfd2c116-cc84-46b2-bd6b-e6e175bceac7',
    shareUrl:
      'https://www.credly.com/earner/earned/share/bfd2c116-cc84-46b2-bd6b-e6e175bceac7',
    summary:
      'Validates a fundamental understanding of computing hardware, software, operating systems, digital communications, collaborative workflows, and security best practices in digital environments.',
    competencies: [
      'Computing Fundamentals',
      'Digital Security & Safety',
      'Collaborative Workflows',
      'Information & Productivity Systems',
    ],
  },
]
