import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

export function BlogPreview({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const featuredPosts = [
    {
      id: 1,
      category: 'Insight article',
      title: 'The future of industrial automation',
      description: 'Exploring how AI and IoT are reshaping manufacturing processes and driving efficiency.',
      image: 'https://images.unsplash.com/photo-1570086625762-7c1396540ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwYXV0b21hdGlvbiUyMGluZHVzdHJpYWwlMjBjb250cm9sfGVufDF8fHx8MTc1NTYyOTI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '5 min read',
      date: 'Dec 15, 2024'
    },
    {
      id: 2,
      category: 'Technical guide', 
      title: 'IoT security in industrial environments',
      description: 'Best practices for securing IoT devices and networks in industrial automation systems.',
      image: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwSW9UJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NTU2MjkyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '8 min read',
      date: 'Dec 12, 2024'
    },
    {
      id: 3,
      category: 'Industry report',
      title: 'Solar energy automation trends 2025',
      description: 'Market analysis and emerging technologies in solar farm automation and management.',
      image: 'https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGF1dG9tYXRpb24lMjBwYW5lbHN8ZW58MXx8fHwxNzU1NjI5MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      readTime: '6 min read',
      date: 'Dec 10, 2024'
    }
  ];

  const getCategoryStyles = (category: string) => {
    // All categories use the same styling now
    return '';
  };

  const handleViewAll = () => {
    if (onNavigate) {
      onNavigate('blog');
    }
  };

  return (
    <section className="py-24" style={{ backgroundColor: '#201515' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium mb-6" style={{ color: '#eceae3' }}>
              Latest Insights & Resources
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#c5c0b2' }}>
              Stay updated with the latest trends in electrical automation, IoT solutions, and smart building technologies.
            </p>
          </div>

          {/* Featured Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <article 
                key={post.id}
                className="overflow-hidden transition-all duration-300 group cursor-pointer"
                style={{ 
                  backgroundColor: '#201515', 
                  border: '1px solid #36342e',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(236, 234, 227, 0.05)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#201515'}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="inline-block px-3 py-1 text-sm font-medium border"
                      style={{ 
                        borderColor: '#36342e',
                        backgroundColor: 'rgba(236, 234, 227, 0.1)', // cream with opacity
                        color: 'rgba(236, 234, 227, 0.9)' // white (#eceae3) with opacity
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-medium mb-3 leading-tight group-hover:text-primary transition-colors duration-300" style={{ color: '#eceae3' }}>
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 leading-relaxed text-sm" style={{ color: 'rgba(236, 234, 227, 0.6)' }}>
                    {post.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm mb-4" style={{ color: '#c5c0b2' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Read More CTA */}
                  <div className="inline-flex items-center gap-2">
                    <a 
                      href="#" 
                      className="hover:text-primary transition-colors duration-200 font-medium text-sm"
                      style={{
                        borderBottom: '1px dotted rgba(255, 255, 255, 0.4)',
                        paddingBottom: '2px',
                        color: '#eceae3'
                      }}
                    >
                      Read More
                    </a>
                    <ArrowRight className="w-3 h-3" style={{ color: '#eceae3' }} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button
              onClick={handleViewAll}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-medium inline-flex items-center gap-2 group"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}