import "../../styles/styles_home/Cont_home.css";

export const Cont_home = () => {
  const time = document.getElementById("hora");
  const interval = setInterval(() => {
    const local = new Date();
    time.innerHTML = local.toLocaleTimeString();
  }, 1000);
  return (
    <>
      <nav className="tiempo">
        <h1 className="titulo_ini">INICIO</h1>

        <h4 id="hora">{interval}</h4>
      </nav>
      <article className="saludo">
        <p>iuouiooiu</p>
      </article>
      <nav></nav>
    </>
  );
};
export default Cont_home;
