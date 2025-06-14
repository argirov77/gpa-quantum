export default function Footer() {
  return (
    <footer style={{
      textAlign:'center',padding:'2rem 1rem',
      borderTop:'1px solid rgba(255,255,255,0.1)'
    }}>
      © {new Date().getFullYear()} CPA Quantum. All rights reserved.
    </footer>
  )
}
