import productsImage from 'figma:asset/f844c50f5f6afead7a5c70ee855c362ea19f634d.png';
import ledLightingImage from 'figma:asset/2c5784d5bf1322ee6ec7f87ed4fdd00659a83251.png';
import specsTableImage from 'figma:asset/3154d12abbb5b774e74f9d131591e517b87d11f5.png';

export function Products() {
  const products = [
    {
      id: 'devkit',
      name: 'Stadium Flood Light',
      category: 'LED LIGHTING SYSTEM',
      description: 'Professional-grade LED stadium flood lights with high efficiency and superior performance for sports facilities and large outdoor areas.',
      image: ledLightingImage,
      position: 'left',
      keyFeatures: [
        { label: 'Power Options', value: '400W & 800W' },
        { label: 'High Output', value: 'Up to 80,000 Lumens' },
        { label: 'LED Technology', value: '3030 1W High-Efficiency' },
        { label: 'Wide Coverage', value: '120° Beam Angle' }
      ],
      priceRange: 'Starting from ₹17,999'
    },
    {
      id: 'epic',
      name: 'Epic',
      category: 'BENCHTOP PRO',
      description: 'High-volume production of smaller parts leveraging automation, AI, and advanced robotics. Build volume 192mm x 108mm x 340 mm.',
      image: productsImage,
      position: 'center'
    },
    {
      id: 'range',
      name: 'Range',
      category: 'BENCHTOP PRO',
      description: 'Fast track large part production with automated, modular technology. Build volume 770mm x 660mm x 580mm.',
      image: productsImage,
      position: 'right'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground tracking-tight leading-tight mb-8">
              Own your
              <span className="block">production</span>
            </h1>
          </div>

          {/* Products Grid - Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product) => (
              <div key={product.id} className="group">
                {/* Product Image Container */}
                <div className="relative bg-gray-100 dark:bg-gray-800 aspect-[4/3] mb-6 overflow-hidden border border-border">
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-black dark:bg-white rounded-full z-10"></div>
                  
                  {/* Product Image - Using the full image and positioning based on the design */}
                  <div className="w-full h-full relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  {/* Product Name and Category */}
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-medium text-foreground">{product.name}</h3>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium px-2 py-1 border border-border">
                      {product.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* CTA for products without detailed specs */}
                  {!(product as any).keyFeatures && (
                    <div className="pt-4">
                      <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-medium transition-colors">
                        Know More
                      </button>
                    </div>
                  )}

                  {/* Key Features & CTA for LED Product */}
                  {(product as any).keyFeatures && (
                    <div className="space-y-4">
                      {/* Key Features Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {(product as any).keyFeatures.map((feature, index) => (
                          <div key={index} className="bg-muted/30 p-3 border border-border">
                            <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                              {feature.label}
                            </div>
                            <div className="text-sm font-medium text-foreground">
                              {feature.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Price</div>
                          <div className="text-lg font-medium text-foreground">{(product as any).priceRange}</div>
                        </div>
                        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-medium transition-colors">
                          Know More
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Products Row - Placeholder for future products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Placeholder Product 1 */}
            <div className="group">
              <div className="relative bg-gray-100 dark:bg-gray-800 aspect-[4/3] mb-6 overflow-hidden border border-border">
                <div className="absolute top-4 right-4 w-3 h-3 bg-black dark:bg-white rounded-full z-10"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 border-2 border-dashed border-muted-foreground/30 rounded mx-auto mb-4"></div>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-medium text-muted-foreground">Next Gen</h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium px-2 py-1 border border-border">
                    IN DEVELOPMENT
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Revolutionary automation technology currently in development. Stay tuned for updates.
                </p>
              </div>
            </div>

            {/* Placeholder Product 2 */}
            <div className="group">
              <div className="relative bg-gray-100 dark:bg-gray-800 aspect-[4/3] mb-6 overflow-hidden border border-border">
                <div className="absolute top-4 right-4 w-3 h-3 bg-black dark:bg-white rounded-full z-10"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 border-2 border-dashed border-muted-foreground/30 rounded mx-auto mb-4"></div>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-medium text-muted-foreground">Enterprise</h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium px-2 py-1 border border-border">
                    IN DEVELOPMENT
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Enterprise-scale automation solutions designed for large-scale industrial operations.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your production capabilities? Get in touch to learn more about our automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-medium transition-colors">
                Request Demo
              </button>
              <button className="border border-border text-foreground hover:bg-accent px-8 py-4 font-medium transition-colors">
                Download Specs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}