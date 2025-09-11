import { Separator } from "./ui/separator";
import { IsometricEmail, IsometricPhone, IsometricLocation, IsometricLinkedIn, IsometricTwitter, IsometricGithub } from "./IsometricIcons";

export function Footer() {
  const footerLinks = {
    Products: [
      "HCM",
      "Field Operations",
      "Expense Management"
    ],
    Features: [
      "Payroll",
      "HRIS",
      "Benefits",
      "Recruiting",
      "Learning",
      "Time Tracking",
      "Daily Reports",
      "Scheduling",
      "Production",
      "Reimbursements",
      "Corporate Cards",
      "Per Diems"
    ],
    Platform: [
      "Integrations",
      "Support",
      "Security & Compliance"
    ],
    Resources: [
      "Blog",
      "Events"
    ],
    Solutions: [
      "Compliance",
      "Job Costing",
      "System Consolidation"
    ],
    Company: [
      "About",
      "Careers",
      "Customers",
      "Referral Program"
    ]
  };

  const socialLinks = [
    { icon: <IsometricLinkedIn className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <IsometricTwitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <IsometricGithub className="w-5 h-5" />, href: "#", label: "GitHub" }
  ];

  return (
    <footer className="border-t" style={{ backgroundColor: '#201515', borderColor: '#36342e' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-12">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: '#FF5722' }}>
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-lg font-medium" style={{ color: '#eceae3' }}>manar</span>
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="text-xs font-medium mb-6 uppercase tracking-wide" style={{ color: 'rgba(236, 234, 227, 0.4)' }}>
                PRODUCTS
              </h4>
              <ul className="space-y-3">
                {footerLinks.Products.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(236, 234, 227, 0.8)' }}
                      onMouseEnter={(e) => e.target.style.color = '#eceae3'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(236, 234, 227, 0.8)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features Column */}
            <div>
              <h4 className="text-xs font-medium mb-6 uppercase tracking-wide" style={{ color: 'rgba(236, 234, 227, 0.4)' }}>
                FEATURES
              </h4>
              <ul className="space-y-3">
                {footerLinks.Features.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(236, 234, 227, 0.8)' }}
                      onMouseEnter={(e) => e.target.style.color = '#eceae3'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(236, 234, 227, 0.8)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Platform Column */}
            <div>
              <h4 className="text-xs font-medium mb-6 uppercase tracking-wide" style={{ color: 'rgba(236, 234, 227, 0.4)' }}>
                PLATFORM
              </h4>
              <ul className="space-y-3">
                {footerLinks.Platform.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(236, 234, 227, 0.8)' }}
                      onMouseEnter={(e) => e.target.style.color = '#eceae3'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(236, 234, 227, 0.8)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-xs font-medium mb-6 uppercase tracking-wide" style={{ color: 'rgba(236, 234, 227, 0.4)' }}>
                RESOURCES
              </h4>
              <ul className="space-y-3">
                {footerLinks.Resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(236, 234, 227, 0.8)' }}
                      onMouseEnter={(e) => e.target.style.color = '#eceae3'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(236, 234, 227, 0.8)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Company Section under Resources */}
              <h4 className="text-xs font-medium mb-6 mt-8 uppercase tracking-wide" style={{ color: 'rgba(236, 234, 227, 0.4)' }}>
                COMPANY
              </h4>
              <ul className="space-y-3">
                {footerLinks.Company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(236, 234, 227, 0.8)' }}
                      onMouseEnter={(e) => e.target.style.color = '#eceae3'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(236, 234, 227, 0.8)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div>
              <h4 className="text-xs font-medium mb-6 uppercase tracking-wide" style={{ color: 'rgba(236, 234, 227, 0.4)' }}>
                SOLUTIONS
              </h4>
              <ul className="space-y-3">
                {footerLinks.Solutions.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(236, 234, 227, 0.8)' }}
                      onMouseEnter={(e) => e.target.style.color = '#eceae3'}
                      onMouseLeave={(e) => e.target.style.color = 'rgba(236, 234, 227, 0.8)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-b" style={{ borderColor: '#36342e' }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2" style={{ color: '#eceae3' }}>
                Get the latest from Manar
              </h3>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Work email"
                className="flex-1 md:w-80 px-4 py-3 text-sm border transition-colors"
                style={{ 
                  backgroundColor: 'rgba(236, 234, 227, 0.05)',
                  borderColor: '#36342e',
                  color: '#eceae3'
                }}
              />
              <button 
                className="px-6 py-3 text-sm font-medium transition-all duration-300 border"
                style={{ 
                  backgroundColor: '#FF5722',
                  color: 'white',
                  borderColor: '#FF5722'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm" style={{ color: 'rgba(236, 234, 227, 0.6)' }}>
            © Manar 2025. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="#" 
              className="transition-colors"
              style={{ color: 'rgba(236, 234, 227, 0.6)' }}
              onMouseEnter={(e) => e.target.style.color = '#eceae3'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(236, 234, 227, 0.6)'}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="transition-colors"
              style={{ color: 'rgba(236, 234, 227, 0.6)' }}
              onMouseEnter={(e) => e.target.style.color = '#eceae3'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(236, 234, 227, 0.6)'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}