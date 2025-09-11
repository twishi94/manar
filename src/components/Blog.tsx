import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      category: 'Insight article',
      title: 'The future of industrial automation',
      description: 'Exploring how AI and IoT are reshaping manufacturing processes and driving efficiency.',
      image: 'https://images.unsplash.com/photo-1570086625762-7c1396540ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwYXV0b21hdGlvbiUyMGluZHVzdHJpYWwlMjBjb250cm9sfGVufDF8fHx8MTc1NTYyOTI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200'
    },
    {
      id: 2,
      category: 'Position paper',
      title: 'Smart thermostats and the future of VPPs',
      description: 'How smart thermostats are becoming key assets in virtual power plants and grid management.',
      image: 'https://images.unsplash.com/photo-1753039495488-434a2fe53e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzbWFydCUyMGRldmljZXMlMjBzZW5zb3JzfGVufDF8fHx8MTc1NTYyOTI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100'
    },
    {
      id: 3,
      category: 'Position paper',
      title: 'The power of personalization in smart buildings',
      description: 'Personalizing building automation to enhance user experience and optimize energy consumption.',
      image: 'https://images.unsplash.com/photo-1753272691001-4d68806ac590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGJ1aWxkaW5nJTIwYXV0b21hdGlvbiUyMHN5c3RlbXxlbnwxfHx8fDE3NTU1OTA0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    {
      id: 4,
      category: 'Technical guide',
      title: 'IoT security in industrial environments',
      description: 'Best practices for securing IoT devices and networks in industrial automation systems.',
      image: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwSW9UJTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NTU2MjkyNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    {
      id: 5,
      category: 'Industry report',
      title: 'Solar energy automation trends 2025',
      description: 'Market analysis and emerging technologies in solar farm automation and management.',
      image: 'https://images.unsplash.com/photo-1745187946672-2c1d8cf26a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGF1dG9tYXRpb24lMjBwYW5lbHN8ZW58MXx8fHwxNzU1NjI5MjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100'
    },
    {
      id: 6,
      category: 'Insight article',
      title: 'Smart home adoption and energy efficiency',
      description: 'How widespread smart home adoption is driving new opportunities for energy management.',
      image: 'https://images.unsplash.com/photo-1583282079432-843a14edc6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTU2MjU2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100'
    }
  ];

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Insight article':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Position paper':
        return 'bg-secondary text-secondary-foreground border-border';
      case 'Technical guide':
        return 'bg-muted text-muted-foreground border-border';
      case 'Industry report':
        return 'bg-accent text-accent-foreground border-border';
      default:
        return 'bg-secondary text-secondary-foreground border-border';
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight max-w-4xl">
              Learn more about the next generation grid asset
            </h1>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-card border border-border overflow-hidden hover:shadow-md transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-sm font-medium border ${getCategoryStyles(post.category)}`}>
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {post.description}
                  </p>

                  {/* Learn More Link */}
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300 font-medium text-sm group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Section */}
          <div className="mt-16 text-center">
            <button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border px-8 py-3 font-medium transition-all duration-200 hover:shadow-sm">
              Load More Articles
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}