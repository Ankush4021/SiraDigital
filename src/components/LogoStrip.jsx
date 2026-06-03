function LogoStrip() {
  return (
    <section className="logo-strip">
      {["Web Solutions", "Creative Branding", "Motion & Video", "Digital Presence"].map((item) => (
        <span key={item}>{item}</span>
      ))}
    </section>
  );
}

export default LogoStrip;
