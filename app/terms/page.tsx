export default function TermsPage() {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-black mb-8 text-center">
            Terms and Conditions
          </h1>
          
          <div className="space-y-6 text-black">
            <section className="font-medium">
              <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using our chatbot service, you agree to be bound by these Terms and Conditions.
              </p>
            </section>
  
            <section className="font-medium">
              <h2 className="text-xl font-bold mb-4">2. Data Collection</h2>
              <p className="mb-4">
                We collect and store information from your interactions with our chatbot to improve our services. This includes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Chat messages and interactions</li>
                <li>Usage patterns and preferences</li>
              </ul>
            </section>
  
            <section className="font-medium">
              <h2 className="text-xl font-bold mb-4">3. Usage Guidelines</h2>
              <p className="mb-4">
                You agree to use the chatbot service in a manner consistent with all applicable laws and regulations.
              </p>
            </section>
  
            <section className="font-medium">
              <h2 className="text-xl font-bold mb-4">4. Privacy</h2>
              <p className="mb-4">
                Your privacy is important to us. We handle all collected data in accordance with our Privacy Policy and applicable data protection laws.
              </p>
            </section>
  
            <section className="font-medium">
              <h2 className="text-xl font-bold mb-4">5. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }