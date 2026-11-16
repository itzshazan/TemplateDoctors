import Icon from "./Icon";

export default function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className={`check-list${dark ? " dark" : ""}`}>
      {items.map((item) => (
        <li key={item}><Icon name="check" /><span>{item}</span></li>
      ))}
    </ul>
  );
}
