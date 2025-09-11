export function BigMetric() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-8xl lg:text-9xl font-bold text-primary mb-4 leading-none">
              500+
            </div>
            <div className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Projects Delivered Successfully
            </div>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="text-center">
              <div className="text-6xl font-bold text-foreground mb-4">98%</div>
              <div className="text-lg font-semibold text-muted-foreground mb-2">Success Rate</div>
              <p className="text-muted-foreground">
                Consistently delivering results that exceed client expectations across all industries.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-foreground mb-4">42%</div>
              <div className="text-lg font-semibold text-muted-foreground mb-2">Average Cost Reduction</div>
              <p className="text-muted-foreground">
                Our clients see significant operational cost savings within the first year of implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}