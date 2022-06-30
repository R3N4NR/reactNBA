import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-danger navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand text-dark " to="/"><img alt ="logo NBA"src="https://play-lh.googleusercontent.com/I6Jz9nEZq-8jBPn2bmjywWLXLZ7GMn2WR64x9w1xQm8H5Isd1rhaQ4NDsp3jVUhLPFI" width="45" height="45"></img></Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-dark btn negrito" to="/">Inclusão</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark btn" to="/manut">Manutenção</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark btn " to="/resumo">Resumo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuSuperior;