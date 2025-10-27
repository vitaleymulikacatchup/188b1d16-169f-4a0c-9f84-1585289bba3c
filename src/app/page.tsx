"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Box, DollarSign, Mail, MessageCircle, Palette, Plug, Rocket, Shield, Sparkles, Star, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Components", id: "components" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Documentation", id: "https://docs.mvpblocks.com" }
          ]}
          brandName="Mvpblocks"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Build Beautiful UIs Faster"
          description="Mvpblocks is a comprehensive UI library with ready-to-use components that accelerate your development workflow and deliver stunning user experiences."
          tag="UI Library"
          tagIcon={Sparkles}
          imageSrc="https://images.pexels.com/photos/17345643/pexels-photo-17345643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern UI component showcase"
          buttons={[
            {
              text: "Get Started",
              href: "contact"
            },
            {
              text: "View Components",
              href: "components"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Mvpblocks"
          description="Our UI library is designed to help developers and designers create exceptional user experiences with minimal effort and maximum impact."
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "Lightning Fast Development",
              description: "Pre-built components that integrate seamlessly into your workflow, reducing development time by up to 80%.",
              icon: Rocket,
              button: {
                text: "Learn More",
                href: "features"
              }
            },
            {
              title: "Fully Customizable",
              description: "Every component is built with customization in mind, allowing you to match your brand perfectly.",
              icon: Palette,
              button: {
                text: "Customize",
                href: "features"
              }
            },
            {
              title: "Easy Integration",
              description: "Drop-in components that work with any modern framework - React, Vue, Angular, and more.",
              icon: Plug,
              button: {
                text: "View Docs",
                href: "https://docs.mvpblocks.com"
              }
            }
          ]}
        />
      </div>

      <div id="components" data-section="components">
        <ProductCardOne
          title="Component Library"
          description="Explore our comprehensive collection of UI components designed to accelerate your development process."
          tag="Components"
          tagIcon={Box}
          products={[
            {
              id: "buttons",
              name: "Button Components",
              price: "50+ variants",
              imageSrc: "https://images.pexels.com/photos/2323435/pexels-photo-2323435.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Button component collection"
            },
            {
              id: "cards",
              name: "Card Components",
              price: "30+ layouts",
              imageSrc: "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Card component collection"
            },
            {
              id: "forms",
              name: "Form Elements",
              price: "40+ inputs",
              imageSrc: "https://images.pexels.com/photos/7772534/pexels-photo-7772534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Form component collection"
            },
            {
              id: "navigation",
              name: "Navigation",
              price: "25+ menus",
              imageSrc: "https://images.pexels.com/photos/3850250/pexels-photo-3850250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Navigation component collection"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple Pricing"
          description="Choose the plan that fits your needs. All plans include full access to our component library and documentation."
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              price: "Free",
              name: "Starter Plan",
              features: [
                "Access to 20 basic components",
                "Community support",
                "Basic documentation",
                "MIT License"
              ],
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "View Components",
                  href: "components"
                }
              ]
            },
            {
              id: "pro",
              badge: "Most popular plan",
              badgeIcon: Star,
              price: "$49/month",
              name: "Pro Plan",
              features: [
                "Access to all 200+ components",
                "Priority support",
                "Advanced documentation",
                "Commercial license",
                "Figma design files",
                "Monthly updates"
              ],
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "contact"
                },
                {
                  text: "Chat to Sales",
                  href: "contact"
                }
              ]
            },
            {
              id: "enterprise",
              price: "$199/month",
              name: "Enterprise Plan",
              features: [
                "Everything in Pro",
                "Custom component development",
                "Dedicated support",
                "White-label options",
                "Team collaboration tools",
                "SLA guarantee"
              ],
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "Schedule Demo",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Developers Say"
          description="Hear from the developers and designers who trust Mvpblocks to build amazing products."
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Frontend Developer",
              company: "TechStartup Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7652465/pexels-photo-7652465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen portrait"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "UI/UX Designer",
              company: "DesignStudio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7606019/pexels-photo-7606019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Johnson portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Product Manager",
              company: "InnovateApp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7776140/pexels-photo-7776140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "CTO",
              company: "StartupXYZ",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/19747906/pexels-photo-19747906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            },
            {
              id: "5",
              name: "Lisa Zhang",
              role: "Tech Lead",
              company: "WebAgency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7606019/pexels-photo-7606019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Zhang portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of companies that trust Mvpblocks to build their digital products faster and more efficiently."
          tag="Trusted By"
          tagIcon={Shield}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about Mvpblocks UI library"
          faqs={[
            {
              id: "1",
              title: "What frameworks does Mvpblocks support?",
              content: "Mvpblocks currently supports React, Vue, and Angular. We're working on additional framework support including Svelte and vanilla JavaScript."
            },
            {
              id: "2",
              title: "Can I customize the components?",
              content: "Absolutely! All components are built with customization in mind. You can modify colors, spacing, typography, and behavior to match your brand perfectly."
            },
            {
              id: "3",
              title: "Is there a free tier available?",
              content: "Yes! Our Starter plan is completely free and includes access to 20 basic components, community support, and basic documentation."
            },
            {
              id: "4",
              title: "How often are new components added?",
              content: "We release new components and updates monthly for Pro and Enterprise subscribers. The free tier receives quarterly updates."
            },
            {
              id: "5",
              title: "Do you provide technical support?",
              content: "Pro and Enterprise plans include priority technical support. Free users have access to our community forums and documentation."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Mail}
          title="Start Building Amazing UIs Today"
          description="Join thousands of developers who trust Mvpblocks to accelerate their development workflow and create stunning user experiences."
          imageSrc="https://images.pexels.com/photos/3184438/pexels-photo-3184438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Developer team collaboration"
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. Start your free trial today!"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                { label: "Components", href: "components" },
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Documentation", href: "https://docs.mvpblocks.com" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Support", href: "https://support.mvpblocks.com" },
                { label: "Blog", href: "https://blog.mvpblocks.com" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Getting Started", href: "https://docs.mvpblocks.com/getting-started" },
                { label: "Examples", href: "https://examples.mvpblocks.com" },
                { label: "Community", href: "https://community.mvpblocks.com" },
                { label: "GitHub", href: "https://github.com/mvpblocks" }
              ]
            }
          ]}
          copyrightText="© 2025 | Mvpblocks"
        />
      </div>
    </ThemeProvider>
  );
}