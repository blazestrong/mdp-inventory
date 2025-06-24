// src/components/Layout.jsx

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">blaze</header>
      <main className="p-6">{children}</main>
    </div>
  );
}