import Link from "next/link";

export default function PrivacyPage() {
	return (
      <div className="max-w-4xl mx-auto card bg-base-100 shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At <span className="font-semibold">Questal</span>, we value your
          privacy. This Privacy Policy explains how we collect, use, and protect
          your information when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal details such as your name, email address, and
          account information, as well as usage data like activity logs and
          preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          Your information helps us provide and improve Questal services, ensure
          platform security, and personalize your experience.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Sharing of Information
        </h2>
        <p className="mb-4">
          We do not sell your personal data. We may share limited information
          with trusted service providers only to support platform functionality
          or as required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We implement reasonable safeguards to protect your data. However, no
          system is 100% secure, and you share information at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You may request to access, update, or delete your personal data at any
          time. Contact us for assistance with these requests.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          6. Policy Updates
        </h2>
        <p className="mb-4">
          We may revise this Privacy Policy to reflect changes in our practices.
          Please check this page periodically for updates.
        </p>

        <div className="divider"></div>

        <p className="text-sm text-base-content/70">
          For questions, contact us or review our{" "}
          <Link href="/2025/terms" className="link link-hover underline">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    );
}
