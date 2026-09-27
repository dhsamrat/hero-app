
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "#f0fdfa",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#ffffff",
          borderRadius: "24px",
          padding: "50px 30px",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
          border: "1px solid #ccfbf1",
        }}
      >
        {/* 404 */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: "800",
            lineHeight: "1",
            color: "#14b8a6",
            marginBottom: "20px",
          }}
        >
          404
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1f2937",
            margin: "0 0 12px",
          }}
        >
          Page Not Found
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#6b7280",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          Sorry, the page you are looking for does not exist.
          Please check the URL or go back to the homepage.
        </p>

        {/* Button */}
        <div style={{ marginTop: "30px" }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "#14b8a6",
              color: "#ffffff",
              padding: "13px 28px",
              borderRadius: "10px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            ← Back to Home
          </Link>
        </div>

        {/* Footer */}
        <p
          style={{
            marginTop: "30px",
            fontSize: "13px",
            color: "#9ca3af",
          }}
        >
          FitLog • Error 404
        </p>
      </div>
    </main>
  );
}