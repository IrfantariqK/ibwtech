export default function QuickLinks() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
      <ul className="space-y-2">
        {["Services", "About", "Team", "Careers", "Contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-purple-300"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
