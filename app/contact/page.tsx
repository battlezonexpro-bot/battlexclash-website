export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 text-center">
      <h1 className="font-heading text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto">For support, business inquiries, or tournament disputes, please reach out to us via email or join our Discord server.</p>
      <div className="glass-panel max-w-md mx-auto p-8 rounded-2xl border border-white/10">
        <div className="mb-6">
          <h3 className="font-bold text-xl mb-2 text-white">Email Support</h3>
          <a href="mailto:battlexclash@gmail.com" className="text-brand-accent hover:underline">battlexclash@gmail.com</a>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2 text-white">Community</h3>
          <a href="#" className="inline-block bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-xl font-bold transition-colors">Join our Discord</a>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <h3 className="font-bold text-xl mb-2 text-white">Office Address</h3>
          <p className="text-gray-400">West Bengal, India</p>
        </div>
      </div>
    </div>
  );
}
