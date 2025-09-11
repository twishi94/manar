export function FinalCTA() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-card dark:bg-card backdrop-blur-sm border border-border p-8 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-primary/2 dark:from-primary/5 dark:to-primary/5"></div>
            
            <div className="flex items-center justify-center gap-2 mb-4 relative z-10">
              <div className="w-2 h-2 bg-green-400 shadow-lg shadow-green-400/50"></div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                All Systems Operational
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-3 relative z-10">
              Ready to transform your operations?
            </h3>
            <p className="text-muted-foreground mb-6 relative z-10">
              Join 500+ companies already automating with Manar.ai
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
              <button className="bg-gradient-to-br from-primary via-orange-500 to-red-500 hover:from-primary/90 hover:via-orange-500/90 hover:to-red-500/90 text-white px-6 py-3 font-medium transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Start Free Trial</span>
              </button>
              <button className="border border-border text-foreground hover:bg-accent px-6 py-3 font-medium transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}