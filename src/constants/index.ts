import { WrenchIcon, TrophyIcon, TagIcon, UserGroupIcon, StarIcon, FolderIcon, UsersIcon, RectangleGroupIcon, ClipboardDocumentListIcon, PaintBrushIcon, HomeModernIcon, PlayCircleIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

// Navigation Links
export const navigation = [
    { 
        name: 'Home', 
        href: '#', 
        current: true },
    { 
        name: 'About', 
        href: '#about', 
        current: false },
    { 
        name: 'Services', 
        href: '#services', 
        current: false },
    { 
        name: 'Projects', 
        href: '#projects', 
        current: false },
    { 
        name: 'Contact', 
        href: '#contact', 
        current: false },
  ]

  // Call to Actions Links
  export const callsToAction = [
    { name: 'Call Us', href: 'tel:+9316393561', icon: PhoneIcon }, // Replace with actual phone number
    { name: 'Email Us', href: 'mailto:rosalesinnovations@gmail.com', icon: EnvelopeIcon }, // Replace with actual email
]


  // About Section

  export const features = [
    {
      
        name: 'Licensed Drywall Experts',
        description:
        'Rosales Home Innovations holds all the necessary licenses and insurance to tackle both commercial and residential drywall projects. Our combination of experience and excellence ensures that every project meets and exceeds customer expectations.',
        icon: WrenchIcon,
    },
    {
      
        name: 'Dedication Leads to Quality Work',
        description:
        'We are passionate about our craft, and that dedication translates into exceptional customer service and top-quality results. No job is too big or too small for our expert team, and we strive to give our best in everything we do.',
        icon: TrophyIcon,
    },
    {
      
        name: 'Your Project is Our Goal',
        description:
        'Our mission is to complete every project on schedule, within budget, and to the highest possible standard. We aim to become the top choice for our clients by consistently delivering high-quality service in the construction industry.',
        icon: TagIcon,
    },
    {
      
        name: 'Crafting Lasting Relationships',
        description:
        'Our focus goes beyond just completing projects. We aim to build lasting relationships with our clients, ensuring that every interaction leaves you feeling confident and satisfied with your choice. When you choose Rosales Home Innovations, youre choosing a partner committed to your homes future.',
        icon: UserGroupIcon,
    },
  ]

  // Worker Stats
  export const stats = [
    {   
        id: 1, 
        name: 'Client Satisfaction', 
        value: 120,
        icon: StarIcon, },
    {   
        id: 2, 
        name: 'Completed Projects', 
        value: 120,
        icon: FolderIcon
    },
    { 
        
        id: 3, 
        name: 'Experienced Team Members', 
        value: 10,
        icon: UsersIcon
    },
  ]

  // Services Info
  export const servicesInfo = [
    { 
        name: 'Demolition Services', 
        description: 'We specialize in the efficient demolition of drywall and partitions for both residential and commercial spaces, ensuring a clean slate for your renovation projects.',
        icon: WrenchIcon,
    },
    { 
        name: 'Drywall Framing', 
        description: 'Our team is skilled in designing and constructing layouts for ceilings and frameworks using both wood and metal. We handle everything from drop ceilings to soffits, tailored for both commercial and residential settings.',
        icon: RectangleGroupIcon,
    },
    { 
        name: 'Drywall Installation and Hanging', 
        description: 'Whether its new construction, repairs, or complete replacements, we expertly handle the installation of drywall to meet your projects exact specifications.',
        icon: ClipboardDocumentListIcon,
    },
    { 
        name: 'Drywall Finishing and Texturing', 
        description: 'We offer professional drywall finishing up to level 5, delivering smooth, high-quality surfaces. Our services include removing outdated textures, like popcorn ceilings, and applying new finishes that enhance the space.',
        icon: PaintBrushIcon,
    },
    { 
        name: 'Feature Walls and Decorative Elements', 
        description: 'Bring a fresh look to your space with custom decorative walls that offer long-lasting, maintenance-free beauty for any room.',
        icon: HomeModernIcon,
    },
    { 
        name: 'Interior and Exterior Painting', 
        description: 'Our painting services cover everything from walls, ceilings, doors, and trim inside your home or office, to fascia boards and exterior surfaces. We deliver flawless, professional results that transform your space.',
        icon: PaintBrushIcon,
    },
  ]