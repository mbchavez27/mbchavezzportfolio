export function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground">
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
