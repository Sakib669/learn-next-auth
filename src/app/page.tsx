// app/page.tsx
import Link from "next/link";
import { CheckCircle, Zap, Shield, Smartphone } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-base-100 to-base-200">
      

      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-100 pt-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://placehold.co/600x400/2563eb/white?text=Todo+App+Preview" 
              className="rounded-lg shadow-2xl" 
              alt="Todo App Preview"
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold leading-tight">
              The Simple Way to <span className="text-primary">Get Things Done</span>
            </h1>
            <p className="py-6 text-lg text-base-content/80">
              TodoMaster helps you organize your daily tasks. Simple, fast, and completely free.
              Start today, finish today.
            </p>
            <div className="flex gap-4">
              <Link href="/register" className="btn btn-primary btn-lg">Start for Free</Link>
              <Link href="#demo" className="btn btn-outline btn-lg">View Demo</Link>
            </div>
            <div className="flex gap-6 mt-8 text-sm text-base-content/60">
              <span>🚀 10k+ Users</span>
              <span>⭐ 4.8 Rating</span>
              <span>🔒 100% Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TodoMaster?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">Super Fast</h3>
                <p>Instant updates, zero lag. Your tasks never get lost.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">Secure</h3>
                <p>Your data is encrypted. No one can see what you're doing.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <Smartphone className="w-12 h-12 text-primary mb-4" />
                <h3 className="card-title">All Devices</h3>
                <p>Mobile, tablet, laptop—same experience everywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Started in 3 Simple Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Account</h3>
              <p className="text-base-content/70">Sign up with email in 1 minute. No hassle.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Add Tasks</h3>
              <p className="text-base-content/70">Add everything you need to do today.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Tasks</h3>
              <p className="text-base-content/70">Click complete when you're done. Simple!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-2">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                      <span>JD</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <div className="rating rating-sm">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                    </div>
                  </div>
                </div>
                <p>"TodoMaster helps me organize my daily tasks. Super easy to use!"</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-2">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                      <span>JS</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <div className="rating rating-sm">
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                  </div>
                </div>
                <p>"Perfect for managing office tasks. Add and complete—no complexity!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Organized?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create a free account and see how easy task management can be. No credit card required.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/register" className="btn btn-lg bg-base-100 text-primary border-0 hover:bg-base-200">
              Start for Free
            </Link>
            <Link href="/demo" className="btn btn-lg btn-outline text-primary-content border-primary-content hover:bg-primary-focus">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content">
        <div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">TodoMaster</span>
          </div>
          <p className="font-bold">The Simple Way to Get Things Done</p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}