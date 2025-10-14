import ButtonLink from "./buttonLink";
import "../css/header.css";
export default function Header() {
  return (
    <>
      <header>
        <h1>Tasks</h1>
        <div id="headerOptions">
          <ButtonLink href="/" text="home" />
          <ButtonLink href="/new-task" text="new task" />
          <ButtonLink href="/menu/account" text="menu" />
        </div>
      </header>
    </>
  );
}
