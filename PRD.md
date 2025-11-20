# Planning Guide

A professional website for psychoanalyst Ana Paula Carneiro that converts visitors into clients through trust-building content and clear contact pathways while optimizing for organic search visibility.

**Experience Qualities**:
1. **Welcoming** - The site should feel like a safe, comfortable space that reduces anxiety about seeking help
2. **Professional** - Establishes credibility and expertise through thoughtful design and clear credentials
3. **Intimate** - Creates a personal connection through authentic storytelling without feeling sterile or corporate

**Complexity Level**: Content Showcase (information-focused)
- The primary goal is to present information about Ana Paula's practice, approach, and qualifications in a way that builds trust and encourages contact, with simple contact form functionality.

## Essential Features

### Hero Section with Clear Value Proposition
- **Functionality**: Immediately communicates who Ana Paula is and how she helps clients
- **Purpose**: Reduces bounce rate by immediately addressing visitor needs and establishing relevance
- **Trigger**: Page load
- **Progression**: Visitor lands → Reads compelling headline about transformation/healing → Sees professional photo → Understands this is the right place → Scrolls to learn more or clicks CTA
- **Success criteria**: Clear headline, professional photo, and primary CTA visible above fold

### About Section with Credentials
- **Functionality**: Detailed information about Ana Paula's background, training, and therapeutic approach
- **Purpose**: Builds trust and credibility by showcasing qualifications and humanizing the therapist
- **Trigger**: User scrolls or clicks "About" navigation
- **Progression**: Visitor wants to know more → Reads about training and experience → Sees certifications/credentials → Understands therapeutic philosophy → Feels confident in expertise
- **Success criteria**: Professional bio, clear credentials, approachable photo, explanation of psychoanalytic approach

### Services/Specializations Section
- **Functionality**: Outlines the types of issues Ana Paula specializes in treating
- **Purpose**: Helps visitors identify if their specific needs match her expertise (SEO + conversion)
- **Trigger**: User scrolls through page
- **Progression**: Visitor has specific concern → Scans specializations → Finds matching issue → Feels understood → Moves toward contact
- **Success criteria**: Clear list of specializations with brief descriptions, SEO-friendly content

### Contact Section with Form
- **Functionality**: Multiple contact methods including form, WhatsApp, email, and phone
- **Purpose**: Removes friction from reaching out by offering preferred contact methods
- **Trigger**: User decides to make contact
- **Progression**: Visitor ready to reach out → Chooses preferred method → Fills simple form OR clicks WhatsApp/phone → Submits inquiry → Receives confirmation
- **Success criteria**: Working contact form with validation, clear WhatsApp link, visible phone/email, confirmation message

### Testimonials/Social Proof
- **Functionality**: Anonymous or first-name testimonials from previous clients (respecting confidentiality)
- **Purpose**: Reduces anxiety about first contact through peer validation
- **Trigger**: User scrolls through page
- **Progression**: Visitor unsure about reaching out → Reads relatable testimonials → Sees others found help → Feels encouraged to contact
- **Success criteria**: 3-5 authentic testimonials emphasizing transformation and trust

### FAQ Section
- **Functionality**: Answers common questions about therapy process, costs, duration, confidentiality
- **Purpose**: Removes barriers and uncertainty that prevent contact (also excellent for SEO)
- **Trigger**: User scrolls or searches for specific information
- **Progression**: Visitor has questions → Finds answers without needing to ask → Concerns addressed → More likely to convert
- **Success criteria**: 6-8 common questions with clear, compassionate answers

## Edge Case Handling

- **Mobile-first contact**: Ensure WhatsApp and phone links work perfectly on mobile devices where most traffic occurs
- **Form submission failure**: Show clear error messages and provide alternative contact methods immediately
- **Privacy concerns**: Clear statement about confidentiality and how contact information is handled
- **International visitors**: Include information about online/in-person sessions if applicable
- **Loading states**: Graceful loading for images to maintain professional appearance on slow connections
- **Empty form submission**: Validate all required fields with helpful inline messages

## Design Direction

The design should evoke serenity, safety, and professional warmth—feeling like a calm, sunlit consultation room rather than a clinical office. A minimal interface serves the content best, allowing the focus to remain on Ana Paula's words and the visitor's emotional journey toward seeking help.

## Color Selection

Analogous color scheme centered on calming, therapeutic tones that create a sense of peace and trust.

- **Primary Color**: Soft sage green (oklch(0.75 0.06 150)) - Represents growth, healing, and natural calm without the clinical feel of blue
- **Secondary Colors**: 
  - Warm cream (oklch(0.96 0.01 85)) - Provides warmth and comfort as backgrounds
  - Muted terracotta (oklch(0.68 0.08 45)) - Adds gentle warmth for accents and humanity
- **Accent Color**: Deep forest green (oklch(0.45 0.08 155)) - For CTAs and important elements, conveys trust and action
- **Foreground/Background Pairings**:
  - Background (Warm Cream oklch(0.96 0.01 85)): Dark charcoal text (oklch(0.25 0.01 30)) - Ratio 12.8:1 ✓
  - Card (White oklch(0.99 0 0)): Dark charcoal (oklch(0.25 0.01 30)) - Ratio 14.5:1 ✓
  - Primary (Soft Sage oklch(0.75 0.06 150)): Dark forest text (oklch(0.25 0.02 155)) - Ratio 7.2:1 ✓
  - Secondary (Light Sage oklch(0.92 0.02 150)): Dark charcoal (oklch(0.25 0.01 30)) - Ratio 13.1:1 ✓
  - Accent (Deep Forest oklch(0.45 0.08 155)): White text (oklch(0.99 0 0)) - Ratio 8.9:1 ✓
  - Muted (Pale Sage oklch(0.94 0.01 150)): Medium gray (oklch(0.5 0.01 30)) - Ratio 6.8:1 ✓

## Font Selection

Typography should convey professionalism with warmth—elegant serif for authority combined with clean sans-serif for accessibility and modern trust.

- **Primary Font**: Crimson Pro (serif) - For headings and important statements; literary and intellectual without being stuffy
- **Secondary Font**: Inter (sans-serif) - For body text and UI elements; highly readable and contemporary

- **Typographic Hierarchy**:
  - H1 (Main Headline): Crimson Pro Semibold/48px/tight leading (-0.02em letter spacing)
  - H2 (Section Headers): Crimson Pro Semibold/36px/normal leading (-0.01em letter spacing)
  - H3 (Subsections): Crimson Pro Medium/24px/normal leading
  - Body (Primary Text): Inter Regular/18px/relaxed leading (1.7 line height)
  - Small (Meta/Captions): Inter Regular/14px/normal leading
  - Button Text: Inter Medium/16px/normal leading (0.01em letter spacing)

## Animations

Animations should be subtle and therapeutic—gentle fades and smooth scrolls that mirror the calm, gradual process of healing rather than jarring transitions.

- **Purposeful Meaning**: Soft, slow transitions (400-600ms) create a meditative quality; elements gently reveal themselves like insights emerging in therapy
- **Hierarchy of Movement**: 
  - Hero section: Gentle fade-in on load
  - Scroll reveals: Sections fade up subtly as they enter viewport
  - CTAs: Gentle lift on hover (2-4px) with shadow deepening
  - Form inputs: Smooth focus transitions with subtle glow
  - Testimonials: Slow carousel fade between items

## Component Selection

- **Components**:
  - Hero: Custom section with centered content using flexbox
  - About: Card component with subtle shadow for bio section
  - Services: Grid of Card components with icons from Phosphor
  - Testimonials: Custom carousel using framer-motion for gentle transitions
  - Contact: Form with Input, Textarea, Button components; validation via react-hook-form
  - FAQ: Accordion component from shadcn for expandable Q&A
  - Navigation: Simple fixed header with smooth scroll anchors
  - Footer: Custom section with contact info and credentials

- **Customizations**:
  - Custom testimonial carousel (shadcn carousel is too mechanical; need slower, more graceful)
  - Floating WhatsApp button (fixed position, always visible on mobile)
  - Success toast using Sonner for form submission feedback
  - Custom scroll-triggered animations for section reveals

- **States**:
  - Buttons: Default soft sage, hover with lift and deeper shadow, active slight press, focus ring in accent color
  - Form inputs: Default with subtle border, focus with gentle glow in primary color, error with muted red border, success with checkmark
  - Links: Underline on hover with smooth transition, accent color
  - Cards: Subtle hover lift (2px) with shadow transition

- **Icon Selection**:
  - Contact methods: Phone, Envelope, WhatsappLogo from Phosphor
  - Specializations: Brain, Heart, Users, Path, Flower for different therapy areas
  - Credentials: GraduationCap, Certificate, Sparkle
  - Social proof: Quotes for testimonials
  - FAQ: Plus/Minus for accordion (built into shadcn)
  - CTA buttons: ArrowRight, ChatCircle

- **Spacing**:
  - Section padding: py-24 (desktop), py-16 (mobile)
  - Card padding: p-8 (desktop), p-6 (mobile)
  - Element gaps: gap-6 for related items, gap-12 for section groups
  - Content max-width: max-w-6xl for full sections, max-w-2xl for text-focused content

- **Mobile**:
  - Single column layout throughout
  - Fixed mobile navigation with hamburger if needed (or keep simple single-page scroll)
  - Floating WhatsApp button (bottom-right, larger touch target 64x64px)
  - Larger touch targets for all CTAs (min 48px height)
  - Font sizes scale down: H1 to 36px, H2 to 28px, body to 16px
  - Reduced section padding and card padding
  - Testimonial cards full-width with swipe gesture
  - Form stacks vertically with full-width inputs
