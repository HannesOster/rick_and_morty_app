export default function CardContainer({ children }) {
  return (
    <section>
      <ul className="card-container">{children}</ul>
    </section>
  );
}
