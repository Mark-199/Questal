import Link from "next/link";

export function Terms() {
  return (
      <div className="max-w-4xl mx-auto card bg-base-100 shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          Welcome to <span className="font-semibold">Questal</span>. By accessing
          or using our platform, you agree to the following terms and conditions.
          Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Service</h2>
        <p className="mb-4">
          You agree to use Questal only for lawful purposes and in accordance
          with these Terms. You are responsible for your own conduct and any
          content you submit.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Accounts</h2>
        <p className="mb-4">
          To access certain features, you may need to create an account. You are
          responsible for maintaining the confidentiality of your login
          information and for all activities under your account.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Content</h2>
        <p className="mb-4">
          By submitting content to Questal, you grant us a non-exclusive,
          worldwide, royalty-free license to use, display, and distribute such
          content within the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Termination</h2>
        <p className="mb-4">
          We may suspend or terminate your access to Questal at any time if you
          violate these Terms or engage in harmful behavior.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Changes</h2>
        <p className="mb-4">
          Questal may update these Terms from time to time. Continued use of the
          platform constitutes your acceptance of the updated Terms.
        </p>

        <div className="divider"></div>

        <p className="text-sm text-base-content/70">
          If you have questions, please visit our{" "}
          <Link href="/2025/privacy" className="link link-hover underline">
            Privacy Policy
          </Link>{" "}
          or contact us directly.
        </p>
      </div>
    );
}
