export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
      <h1 className="font-heading text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none text-gray-300">
        <p className="mb-4">Last updated: July 2026</p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">1. Information We Collect</h2>
        <p className="mb-4">When you register on BattleXClash, we collect your email address, username, game IDs (like BGMI character ID), and payment information (UPI ID) solely for the purpose of distributing tournament winnings.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">2. How We Use Your Information</h2>
        <p className="mb-4">We use your information to manage tournaments, verify match results, process withdrawals, and ensure a fair gaming environment.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4 text-white">3. Data Security</h2>
        <p className="mb-4">We implement industry-standard security measures to protect your personal information. We do not sell your data to third parties.</p>
      </div>
    </div>
  );
}
